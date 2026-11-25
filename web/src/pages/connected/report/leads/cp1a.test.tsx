import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry } from "../../publishedReport";
import { entry, table } from "../overview/rows.fixture";
import { BusinessLead } from "./cp1a";
import { bottomLine, EVENT_HEADERS, leadProps, tableSection } from "./lead.fixture";
import { proofHandoff } from "./proof.fixture";

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

it("draws the operating model map as the module wrote it, with a table view", () => {
  render(<BusinessLead {...leadProps(business({ op: OP, own: OWN, prose: true }))} />);
  const tile = screen.getByRole("region", { name: "Operating model to credit" });
  const map = within(tile).getByRole("list", { name: "Operating model to credit" });
  expect(within(map).getByText("Synthetic A")).toBeVisible();
  expect(within(map).getByText("Synthetic link")).toBeVisible();
  // Ruling vii: no build note on how the map is typed.
  expect(tile.textContent).not.toMatch(/is not typed in the handoff/);
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
  expect(within(mix).getByText("This page could not read a revenue mix.")).toBeVisible();
  expect(within(mix).queryByText("0")).toBeNull();
  const own = screen.getByRole("list", { name: "Ownership and control" });
  expect(within(own).getByText("Synthetic C")).toBeVisible();
  const deal = screen.getByRole("region", { name: "Transaction and new debt" });
  expect(within(deal).getByText(/A USD 3,000 million secured issue/)).toBeVisible();
  expect(deal.textContent).not.toMatch(/needs a typed table/);
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
      "This page could not read a transaction summary.",
    ),
  ).toBeVisible();
  cleanup();
  render(<BusinessLead {...leadProps(entry("CP-1A", [], []))} />);
  expect(screen.getByText("This page could not read an operating-model map.")).toBeVisible();
  expect(screen.getByText("This page could not read an ownership and control map.")).toBeVisible();
});

it("draws nothing for a blocked module", () => {
  const { container } = render(
    <BusinessLead
      {...leadProps(entry("CP-1A", [], bottomLine("Not assessable: no filing was supplied.")))}
    />,
  );
  expect(container).toBeEmptyDOMElement();
});

it("draws a map's stated edges with its gap row, and a withheld lane's rows with the count not placed", () => {
  const made = business({
    own: [
      ...OWN,
      ["Not supplied: shareholder register absent", "Holds", "Ownership", "Issuer", "—"],
    ],
  });
  // The store withholds a map or lane with one bad row: no descriptor, the handoff's table stands.
  made.output.maps = [];
  made.output.events = [];
  made.sections.push(
    tableSection(
      "Events: Issuer history",
      table(80, EVENT_HEADERS, [
        ["2024", "year", "—", "Listed", "Historical — listed", "Filing", "Equity"],
        ["Q5 2024", "quarter", "—", "Unplaced", "Historical — x", "Filing", "Equity"],
      ]),
    ),
  );
  made.sections.splice(0, 1);
  render(<BusinessLead {...leadProps(made)} />);
  const own = screen.getByRole("region", { name: "Ownership and control" });
  expect(within(own).getByRole("list", { name: "Ownership and control" })).toHaveTextContent(
    "Synthetic C",
  );
  expect(within(own).getByText("Row not drawn: Shareholder register absent")).toBeVisible();
  const history = screen.getByRole("region", { name: "Issuer history" });
  expect(within(history).getByText("Listed")).toBeVisible();
  expect(
    within(history).getByText("This page could not place 1 of the 2 dated rows."),
  ).toBeVisible();
});

it("prints a lane's stated gap instead of drawing nothing", () => {
  const made = business();
  made.output.events = [{ lane: "Issuer history", table: 10, gap: "no dated history supplied" }];
  render(<BusinessLead {...leadProps(made)} />);
  expect(
    within(screen.getByRole("region", { name: "Issuer history" })).getByText(
      "No dated history supplied",
    ),
  ).toBeVisible();
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

it("draws the proof handoff's revenue mix register cell by cell as written, in a small table tile", () => {
  render(<BusinessLead {...leadProps(proofHandoff("CP-1A"))} />);
  const mix = screen.getByRole("region", { name: "Revenue mix" });
  expect(mix.className).toMatch(/lg:col-span-4/);
  const table = within(mix).getByRole("region", { name: "Revenue mix table" });
  expect(within(table).getByRole("columnheader", { name: "Item" })).toBeVisible();
  expect(within(table).getByRole("rowheader", { name: "Observed" })).toBeVisible();
  expect(
    within(table).getByRole("cell", { name: "Not supplied: nothing to report" }),
  ).toBeVisible();
  expect(within(mix).getAllByRole("link", { name: /Source for/ })[0]).toHaveAttribute(
    "href",
    expect.stringContaining("#evidence/"),
  );
  expect(within(mix).queryByText(/could not read/)).toBeNull();
});

it("keeps the issuer history (third rank) a half-width tile after the maps and the passage", () => {
  render(<BusinessLead {...leadProps(business({ op: OP, own: OWN, prose: true }))} />);
  const history = screen.getByRole("region", { name: "Issuer history" });
  expect(history.className).toMatch(/lg:col-span-6/);
  const regions = screen.getAllByRole("region").map((item) => item.getAttribute("aria-label"));
  expect(regions.indexOf("Issuer history")).toBeGreaterThan(
    regions.indexOf("Transaction and new debt"),
  );
});
