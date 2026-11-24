import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry } from "../../publishedReport";
import { entry, table } from "../overview/rows.fixture";
import { BusinessLead } from "./cp1a";
import { bottomLine, EVENT_HEADERS, leadProps, tableSection } from "./lead.fixture";

afterEach(cleanup);

const MAP = ["From", "Relationship", "Edge type", "To", "Evidence"];

// The synthetic proof handoff's maps and events (proof/handoffs/CP-1A.md); no current-contract real run is retained.
function business(options: { op?: string[][]; own?: string[][]; prose?: boolean } = {}) {
  const made = entry(
    "CP-1A",
    [],
    [
      tableSection(
        "Events: Issuer history",
        table(10, EVENT_HEADERS, [
          [
            "2026",
            "year",
            "2024-11-07",
            "Synthetic maturity",
            "Scheduled — maturity",
            "Filing p.2",
            "Wall",
          ],
          [
            "2025-03-31",
            "day",
            "2024-11-07",
            "Synthetic note",
            "Scheduled — matures",
            "Filing p.1",
            "Wall",
          ],
        ]),
      ),
      ...(options.own
        ? [tableSection("Map: ownership and control", table(20, MAP, options.own))]
        : []),
      ...(options.op
        ? [tableSection("Map: operating model to credit", table(30, MAP, options.op))]
        : []),
      ...(options.prose
        ? [
            {
              heading: "Transaction summary and new debt issues",
              level: 3,
              line: 40,
              blocks: [
                {
                  type: "text" as const,
                  line: 41,
                  end: 41,
                  text: "A USD 3,000 million secured issue funded the dividend.",
                },
              ],
            },
          ]
        : []),
    ],
  );
  made.output.events = [{ lane: "Issuer history", table: 10, gap: null }];
  made.output.maps = [
    ...(options.own ? [{ name: "ownership and control", table: 20, gap: null }] : []),
    ...(options.op ? [{ name: "operating model to credit", table: 30, gap: null }] : []),
  ];
  return made;
}

const OP = [["Synthetic A", "Synthetic link", "Documentary Fact", "Synthetic B", "Synthetic p.1"]];
const OWN = [["Synthetic C", "Synthetic holds", "Ownership", "Synthetic D", "Synthetic p.1"]];

it("draws the operating model map as the module wrote it, with a table view and a note", () => {
  render(<BusinessLead {...leadProps(business({ op: OP, own: OWN, prose: true }))} />);
  const tile = screen.getByRole("region", { name: "Operating model to credit" });
  expect(within(tile).getByText("Synthetic A")).toBeVisible();
  expect(within(tile).getByText("Synthetic link")).toBeVisible();
  expect(within(tile).getByText(/their role .* is not typed in the handoff/)).toBeVisible();
  expect(within(tile).getAllByRole("link", { name: /Source for/ })[0]).toHaveAttribute(
    "href",
    expect.stringContaining("#evidence/"),
  );
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(within(tile).getByRole("cell", { name: "Synthetic B" })).toBeVisible();
});

it("states the revenue mix gap and draws ownership, the transaction passage and the history", () => {
  render(<BusinessLead {...leadProps(business({ op: OP, own: OWN, prose: true }))} />);
  const mix = screen.getByRole("region", { name: "Revenue mix" });
  expect(within(mix).getByText("This handoff has no revenue-mix table.")).toBeVisible();
  expect(within(mix).queryByText("0")).toBeNull();
  const own = screen.getByRole("region", { name: "Ownership and control" });
  expect(within(own).getByText("Synthetic C")).toBeVisible();
  const deal = screen.getByRole("region", { name: "Transaction and new debt" });
  expect(within(deal).getByText(/A USD 3,000 million secured issue/)).toBeVisible();
  expect(
    within(deal).getByText(
      "A list of new debt by instrument, date and amount needs a typed table in the handoff.",
    ),
  ).toBeVisible();
  const dates = screen.getByRole("list", { name: "Issuer history" });
  expect(
    within(dates)
      .getAllByRole("listitem")
      .map((item) => item.textContent),
  ).toEqual([expect.stringContaining("2025-03-31"), expect.stringContaining("2026")]);
});

it("says why when a map or the transaction passage is absent or gapped", () => {
  const gapped: OutputEntry = business({ own: OWN });
  gapped.output.maps = [
    { name: "ownership and control", table: 20, gap: null },
    { name: "operating model to credit", table: 99, gap: "no operating drivers stated" },
  ];
  render(<BusinessLead {...leadProps(gapped)} />);
  expect(
    within(screen.getByRole("region", { name: "Operating model to credit" })).getByText(
      "No operating drivers stated",
    ),
  ).toBeVisible();
  expect(
    within(screen.getByRole("region", { name: "Transaction and new debt" })).getByText(
      "The handoff writes no transaction summary.",
    ),
  ).toBeVisible();
  cleanup();
  render(<BusinessLead {...leadProps(entry("CP-1A", [], []))} />);
  expect(screen.getByText("This handoff has no operating-model map.")).toBeVisible();
  expect(screen.getByText("This handoff has no ownership and control map.")).toBeVisible();
});

it("draws a blocked module as Not assessable", () => {
  render(
    <BusinessLead
      {...leadProps(entry("CP-1A", [], bottomLine("Not assessable: no filing was supplied.")))}
    />,
  );
  expect(screen.getByText("Not assessable")).toBeVisible();
  expect(screen.getByText("No filing was supplied.")).toBeVisible();
  expect(screen.queryByRole("region", { name: "Revenue mix" })).toBeNull();
});

it("draws no source reference or module code from a map edge or a dated event", () => {
  const made = business({
    op: [
      [
        "Retail",
        "Drives 60% of EBITDA per annual_report.pdf p. 12",
        "Documentary Fact",
        "CP-2A downside",
        "S1",
      ],
    ],
  });
  made.sections.push(
    tableSection(
      "Chart data: issuer history",
      table(60, EVENT_HEADERS, [
        [
          "2024-03-01",
          "day",
          "2024-03-01",
          "Notes issued (offering_memo.pdf p. 3)",
          "Historical — issued",
          "S2",
          "Debt",
        ],
      ]),
    ),
  );
  made.output.events = [{ lane: "Issuer history", table: 60 }];
  render(<BusinessLead {...leadProps(made)} />);
  const page = document.body.textContent;
  expect(page).not.toMatch(/annual_report|offering_memo|CP-2A/);
  const tile = screen.getByRole("region", { name: "Operating model to credit" });
  expect(within(tile).getByText("In Evidence")).toBeVisible();
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(tile.textContent).not.toMatch(/annual_report|CP-2A/);
});
