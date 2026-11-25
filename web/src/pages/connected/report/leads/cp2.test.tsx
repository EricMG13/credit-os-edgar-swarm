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

it("draws the typed ledger: strengths left, weaknesses right, each ranked, under the module's own words", () => {
  const made = credit([
    ledger([
      row("WEAKNESS", "2", "Weak B", "Because B."),
      row("STRENGTH", "2", "Strength two", "Because two."),
      row("STRENGTH", "1", "Strength one", "Because one."),
      row("WEAKNESS", "1", "Weak A", "Because A."),
    ]),
  ]);
  render(<CreditLead {...leadProps(made)} />);
  const strengths = screen.getByRole("list", { name: "STRENGTH" });
  const weaknesses = screen.getByRole("list", { name: "WEAKNESS" });
  expect(screen.getByRole("heading", { name: "STRENGTH" })).toBeVisible();
  expect(screen.queryByRole("heading", { name: "Strengths" })).toBeNull();
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
  const strengths = screen.getByRole("list", { name: "Positive" });
  expect(within(strengths).getByText("None supported")).toBeVisible();
  const weaknesses = screen.getByRole("list", { name: "Negative" });
  expect(within(weaknesses).getByText("Financial policy")).toBeVisible();
  expect(within(weaknesses).getByText(/Dividends first/)).toBeVisible();
});

it("falls back to the written passage when no ledger table exists, with no build note", () => {
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
  expect(screen.queryByText(/A ranked ledger needs/)).toBeNull();
  expect(screen.queryByRole("list", { name: "STRENGTH" })).toBeNull();
});

it("shows leverage and cover from CP-1 with period, basis and owner, and headroom from CP-4", () => {
  render(<CreditLead {...leadProps(credit([]), [cp1(), cp4()])} />);
  const tile = screen.getByRole("region", { name: "Leverage, cover and headroom" });
  const leverage = within(tile).getByText("Total debt / EBITDA").closest("div") as HTMLElement;
  expect(within(leverage).getAllByText("6.1x")[0]).toHaveClass("text-h3");
  expect(within(leverage).getByText("FY2024, Financial foundation")).toBeVisible();
  expect(within(leverage).getByText("Synthetic.")).toBeVisible();
  // Same basis, the year before: the comparison and the before-to-after mark.
  expect(within(leverage).getByText("from 6.4x in FY2023")).toBeVisible();
  expect(within(leverage).getByRole("img")).toHaveAccessibleName(
    "Total debt / EBITDA: 6.4x in FY2023, 6.1x in FY2024.",
  );
  const cover = within(tile).getByText("EBITDA / cash interest").closest("div") as HTMLElement;
  expect(within(cover).getByText("Not supplied")).toHaveClass("border-dashed");
  expect(within(cover).getByText(/Interest not split/i)).toBeVisible();
  expect(within(cover).queryByText(/from /)).toBeNull();
  const headroom = within(tile).getByText("Covenant headroom").closest("div") as HTMLElement;
  expect(within(headroom).getByText("Legal & covenants")).toBeVisible();
  expect(within(headroom).getByText("Current")).toBeVisible();
  expect(within(headroom).getByText("Threshold")).toBeVisible();
  expect(within(headroom).getByText("5.5x")).toBeVisible();
  expect(within(headroom).getByText("7.5x")).toBeVisible();
  expect(within(headroom).getByText("27%")).toBeVisible();
});

it("draws no comparison when the prior row has another basis or is not the year before", () => {
  const other = cp1();
  const leverage = other.sections[0]?.blocks[0];
  if (leverage?.type !== "table") throw new Error("leverage table missing");
  const [older] = leverage.rows;
  if (!older) throw new Error("prior row missing");
  older.cells[4] = "Moody's-adjusted.";
  render(<CreditLead {...leadProps(credit([]), [other, cp4()])} />);
  let tile = screen.getByRole("region", { name: "Leverage, cover and headroom" });
  expect(within(tile).getByText("6.1x")).toBeVisible();
  expect(within(tile).queryByText(/from 6\.4x/)).toBeNull();
  expect(within(tile).queryByRole("img", { name: /Total debt/ })).toBeNull();
  cleanup();
  older.cells[4] = "Synthetic.";
  older.cells[0] = "FY2022";
  render(<CreditLead {...leadProps(credit([]), [other, cp4()])} />);
  tile = screen.getByRole("region", { name: "Leverage, cover and headroom" });
  expect(within(tile).queryByText(/from 6\.4x/)).toBeNull();
});

it("draws the covenant module's first test even when it is a gap, with its stated reason", () => {
  const gapped = cp4();
  const covenant = gapped.sections[0]?.blocks[0];
  if (covenant?.type !== "table") throw new Error("covenant table missing");
  covenant.rows.unshift({
    line: 81,
    cells: [
      "Maintenance leverage",
      "6.0",
      "Not supplied: compliance certificate not provided",
      "Not supplied: no current",
      "Passes at or below",
      "x",
      "Synthetic.",
    ],
  });
  render(<CreditLead {...leadProps(credit([]), [cp1(), gapped])} />);
  const tile = screen.getByRole("region", { name: "Leverage, cover and headroom" });
  const headroom = within(tile).getByText("Covenant headroom").closest("div") as HTMLElement;
  expect(within(headroom).getByText("Maintenance leverage")).toBeVisible();
  expect(within(headroom).getByText("Compliance certificate not provided")).toBeVisible();
  expect(within(headroom).getByText("6.0x")).toBeVisible();
  // The next test is not drawn in its place.
  expect(within(headroom).queryByText("Springing leverage")).toBeNull();
});

it("states in words that leverage and headroom did not run, never zero", () => {
  render(<CreditLead {...leadProps(credit([]))} />);
  const tile = screen.getByRole("region", { name: "Leverage, cover and headroom" });
  expect(within(tile).getAllByText(/did not run in this run/).length).toBeGreaterThanOrEqual(2);
  expect(within(tile).queryByText("0")).toBeNull();
});

it("draws the transmission map, or its gap, and nothing for a blocked module", () => {
  render(<CreditLead {...leadProps(credit([]))} />);
  const tile = screen.getByRole("region", { name: "Credit-risk transmission" });
  expect(within(tile).getByRole("list", { name: "Credit-risk transmission" })).toHaveTextContent(
    "Synthetic A",
  );
  expect(tile.textContent).not.toMatch(/The map does not mark/);
  cleanup();
  render(<CreditLead {...leadProps(credit([], false))} />);
  expect(
    screen.getByText("This page could not read a credit-risk transmission map from the handoff."),
  ).toBeVisible();
  cleanup();
  const { container } = render(
    <CreditLead
      {...leadProps(
        entry("CP-2", [], bottomLine("Not assessable: the issuer files were not supplied.")),
      )}
    />,
  );
  expect(container).toBeEmptyDOMElement();
});

it("says a missing ledger label is not stated and lists a row it cannot place", () => {
  const made = credit([
    ledger([
      row("STRENGTH", "1", "—", "Cash generative."),
      row("STRENGTH", "2", "Per annual_report.pdf p. 4", "Scale."),
      row("MIXED", "2", "FX exposure", "Both ways."),
      row("WEAKNESS", "1", "Leverage", "High."),
    ]),
  ]);
  render(<CreditLead {...leadProps(made)} />);
  const strengths = screen.getByRole("list", { name: "STRENGTH" });
  const [first, second] = within(strengths).getAllByRole("listitem");
  expect(first).toHaveTextContent("Not stated");
  expect(second).toHaveTextContent("In Evidence");
  const tile = screen.getByRole("region", { name: "Strengths and weaknesses" });
  expect(within(tile).getByText("Not placed: FX exposure (MIXED)")).toBeVisible();
});

it("lists a materiality row whose direction is not positive or negative as not placed", () => {
  const filter = table(
    10,
    ["Rank", "Driver", "Direction"],
    [
      ["1", "Scale", "Positive (moderate)"],
      ["1", "Leverage", "Negative"],
    ],
  );
  render(
    <CreditLead
      {...leadProps(
        credit([{ heading: "T2.10 Materiality Filter", level: 4, line: 9, blocks: [filter] }]),
      )}
    />,
  );
  expect(screen.getByText("Not placed: Scale (Positive (moderate))")).toBeVisible();
  expect(
    within(screen.getByRole("list", { name: "Negative" })).getByText("Leverage"),
  ).toBeVisible();
});
