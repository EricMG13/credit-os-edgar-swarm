import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry } from "../../publishedReport";
import { entry, table } from "../overview/rows.fixture";
import { CreditLead } from "./cp2";
import { bottomLine, leadProps, tableSection } from "./lead.fixture";

afterEach(cleanup);

const LEDGER = [
  "direction",
  "rank",
  "label",
  "mechanism",
  "evidence_ids",
  "status",
  "source_id",
  "source_locator",
  "as_of",
];
const row = (direction: string, rank: string, label: string, mechanism: string) => [
  direction,
  rank,
  label,
  mechanism,
  "E1",
  "READY",
  "S1",
  "p.1",
  "2025-12-31",
];
const MAP = ["From", "Relationship", "Edge type", "To", "Evidence"];

function credit(sections: OutputEntry["sections"], map = true) {
  const made = entry(
    "CP-2",
    [],
    [
      ...sections,
      ...(map
        ? [
            tableSection(
              "Map: credit-risk transmission",
              table(40, MAP, [
                [
                  "Synthetic A",
                  "Synthetic link",
                  "Documentary Fact",
                  "Synthetic B",
                  "Synthetic p.1",
                ],
              ]),
            ),
          ]
        : []),
    ],
  );
  if (map) made.output.maps = [{ name: "credit-risk transmission", table: 40, gap: null }];
  return made;
}

const ledger = (rows: string[][]) => tableSection("Credit view", table(10, LEDGER, rows));

const cp1 = () =>
  entry(
    "CP-1",
    [],
    [
      tableSection(
        "Chart data: leverage",
        table(
          60,
          [
            "Period",
            "Total debt / EBITDA",
            "Net debt / EBITDA",
            "Reporting unit",
            "Basis and limitation",
          ],
          [
            ["FY2023", "6.4", "5.9", "x", "Synthetic."],
            ["FY2024", "6.1", "5.5", "x", "Synthetic."],
          ],
        ),
      ),
      tableSection(
        "Chart data: interest cover",
        table(
          70,
          ["Period", "EBITDA / cash interest", "Reporting unit", "Basis and limitation"],
          [
            ["FY2023", "3.2", "x", "Synthetic."],
            ["FY2024", "Not supplied: interest not split", "x", "Synthetic."],
          ],
        ),
      ),
    ],
  );

const cp4 = () =>
  entry(
    "CP-4",
    [
      {
        title: "Covenant headroom",
        table: 80,
        label: 0,
        threshold: 1,
        current: 2,
        headroom: 3,
        direction: 4,
      },
    ],
    [
      tableSection(
        "Chart data: covenant headroom",
        table(
          80,
          [
            "Test",
            "Threshold",
            "Current",
            "Headroom",
            "Direction",
            "Reporting unit",
            "Basis and limitation",
          ],
          [["Springing leverage", "7.5", "5.5", "27%", "Passes at or below", "x", "Synthetic."]],
        ),
      ),
    ],
  );

it("draws the typed ledger: strengths left, weaknesses right, each ranked, as two real lists", () => {
  const made = credit([
    ledger([
      row("WEAKNESS", "2", "Weak B", "Because B."),
      row("STRENGTH", "2", "Strength two", "Because two."),
      row("STRENGTH", "1", "Strength one", "Because one."),
      row("WEAKNESS", "1", "Weak A", "Because A."),
    ]),
  ]);
  render(<CreditLead {...leadProps(made)} />);
  const strengths = screen.getByRole("list", { name: "Strengths" });
  const weaknesses = screen.getByRole("list", { name: "Weaknesses" });
  expect(
    within(strengths)
      .getAllByRole("listitem")
      .map((item) => item.textContent),
  ).toEqual([expect.stringContaining("Strength one"), expect.stringContaining("Strength two")]);
  expect(within(weaknesses).getAllByRole("listitem")[0]).toHaveTextContent("Weak A");
  expect(within(weaknesses).getAllByRole("listitem")[0]).toHaveTextContent("Because A.");
  expect(within(strengths).getAllByRole("link", { name: /Source for/ })).toHaveLength(2);
  expect(screen.getAllByRole("link", { name: /Source for/ })[0]).toHaveAttribute(
    "href",
    expect.stringContaining("#evidence/"),
  );
  expect(screen.queryByText(/score/i)).toBeNull();
});

it("falls back to the materiality filter by direction, keeping None supported in words", () => {
  const filter = table(
    10,
    [
      "Rank",
      "Driver",
      "Evidence",
      "Risk Mechanic",
      "Credit Implication",
      "Direction",
      "Confidence",
    ],
    [
      ["1", "Financial policy", "E1", "Dividends first", "Less cover", "Negative", "High"],
      ["1", "None supported", "—", "—", "—", "Positive", "Not Assessable"],
    ],
  );
  render(
    <CreditLead
      {...leadProps(
        credit([{ heading: "T2.10 Materiality Filter", level: 4, line: 9, blocks: [filter] }]),
      )}
    />,
  );
  const strengths = screen.getByRole("list", { name: "Strengths" });
  expect(within(strengths).getByText("None supported")).toBeVisible();
  const weaknesses = screen.getByRole("list", { name: "Weaknesses" });
  expect(within(weaknesses).getByText("Financial policy")).toBeVisible();
  expect(within(weaknesses).getByText(/Dividends first/)).toBeVisible();
});

it("falls back to the written passage with the caption when no ledger table exists", () => {
  const made = credit([
    {
      heading: "Strengths and weaknesses",
      level: 3,
      line: 20,
      blocks: [
        { type: "text" as const, line: 21, end: 21, text: "The weaknesses are financial policy." },
      ],
    },
  ]);
  render(<CreditLead {...leadProps(made)} />);
  expect(screen.getByText("The weaknesses are financial policy.")).toBeVisible();
  expect(
    screen.getByText("A ranked ledger needs the typed strengths and weaknesses table."),
  ).toBeVisible();
  expect(screen.queryByRole("list", { name: "Strengths" })).toBeNull();
});

it("shows leverage and cover from CP-1 with the prior value, and headroom from CP-4", () => {
  render(<CreditLead {...leadProps(credit([]), [cp1(), cp4()])} />);
  const tile = screen.getByRole("region", { name: "Leverage, cover and headroom" });
  expect(within(tile).getByText("6.1x")).toBeVisible();
  expect(within(tile).getByText(/from 6.4x in FY2023/)).toBeVisible();
  expect(within(tile).getByText(/Interest not split/i)).toBeVisible();
  expect(within(tile).getByText("5.5x")).toBeVisible();
  expect(within(tile).getByText(/7.5x/)).toBeVisible();
  expect(within(tile).getByText(/27%/)).toBeVisible();
});

it("states in words that leverage and headroom did not run, never zero", () => {
  render(<CreditLead {...leadProps(credit([]))} />);
  const tile = screen.getByRole("region", { name: "Leverage, cover and headroom" });
  expect(within(tile).getAllByText(/did not run in this run/).length).toBeGreaterThanOrEqual(2);
  expect(within(tile).queryByText("0")).toBeNull();
});

it("draws the transmission map with its note, or its gap, and a blocked module as Not assessable", () => {
  render(<CreditLead {...leadProps(credit([]))} />);
  const tile = screen.getByRole("region", { name: "Credit-risk transmission" });
  expect(within(tile).getByText("Synthetic A")).toBeVisible();
  expect(
    within(tile).getByText(
      "The map does not mark which links add risk and which support the credit.",
    ),
  ).toBeVisible();
  cleanup();
  render(<CreditLead {...leadProps(credit([], false))} />);
  expect(screen.getByText("This handoff has no credit-risk transmission map.")).toBeVisible();
  cleanup();
  render(
    <CreditLead
      {...leadProps(
        entry("CP-2", [], bottomLine("Not assessable: the issuer files were not supplied.")),
      )}
    />,
  );
  expect(screen.getByText("Not assessable")).toBeVisible();
});
