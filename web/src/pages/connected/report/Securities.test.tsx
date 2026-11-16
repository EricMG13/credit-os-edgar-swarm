import { fireEvent, render, screen, within } from "@testing-library/react";
import type { OutputEntry } from "../publishedReport";
import { Securities, securityView } from "./Securities";

function basis(date: string) {
  return `All amounts USD millions unless stated; yields are percentages from last trades on ${date}; differences in yield are percentage points, shown in bp.`;
}

function dataset(when: string, marketBasis: string[]): OutputEntry {
  return {
    output: {
      module: "CP-3",
      id: "decision",
      label: "Security selection",
      sha256: "hash",
      href: "decision.md",
    },
    selected: true,
    sections: [
      {
        heading: "Security decision summary",
        line: 2,
        level: 3,
        blocks: [
          {
            type: "table",
            line: 4,
            headers: [
              "Instrument",
              `Market level (${when})`,
              "Rank",
              "Relative value",
              "Recommendation",
              "Source",
            ],
            rows: [
              {
                line: 6,
                cells: [
                  "Secured notes",
                  "$99.00; yield 7.005000%, 7.01% rounded",
                  "First lien",
                  "Fair",
                  "Neutral",
                  "Filing p.1",
                ],
              },
              {
                line: 7,
                cells: [
                  "Unsecured notes",
                  "$89.00; yield 9.12%",
                  "Unsecured",
                  "Unclear",
                  "Requires More Work",
                  "Filing p.2",
                ],
              },
              {
                line: 8,
                cells: [
                  "Term loan",
                  "Not supplied: no loan observation",
                  "Secured",
                  "Unclear",
                  "Requires More Work",
                  "Filing p.3",
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "Calculations",
        line: 10,
        level: 2,
        blocks: marketBasis.map((text, i) => ({ type: "text", line: 11 + i, end: 11 + i, text })),
      },
    ],
  };
}

it("shows the paired observed quote with all authored digits and keeps the unquoted decision outside it", () => {
  const view = securityView(dataset("1 Oct 2026", [basis("2026-10-01")]), "2026-10-02");
  if (!view) throw new Error("missing security review");
  render(<Securities data={view} href={(line) => `#evidence/5-${String(line)}`} />);
  const chart = screen.getByRole("figure", { name: "Last-trade prices and yields" });
  fireEvent.click(within(chart).getByRole("radio", { name: "Table" }));
  expect(within(chart).getByRole("cell", { name: "7.005000%" })).toBeInTheDocument();
  expect(within(chart).queryByText("Term loan")).toBeNull();
  const loan = screen.getByRole("heading", { name: "Term loan" }).closest("article");
  if (!loan) throw new Error("missing instrument card");
  expect(within(loan).getByRole("link", { name: "Security source" })).toHaveAttribute(
    "href",
    "#evidence/5-8",
  );
  expect(within(loan).getByText("Not supplied: no loan observation")).toBeInTheDocument();
});

it.each([
  ["1 Oct 2026", "2026-09-30", [basis("2026-10-01")]],
  ["1 Oct 2026", "2026-10-02", [basis("2026-10-01"), basis("2026-09-29")]],
  ["31 Feb 2026", "2026-10-02", [basis("2026-02-31")]],
])(
  "keeps the recommendation records and skips incompatible observation bases (%s)",
  (shown, asOf, bases) => {
    const view = securityView(dataset(shown, bases), asOf);
    expect(view?.chartable).toHaveLength(0);
    expect(view?.records).toHaveLength(3);
  },
);

it("keeps an unlocated price in its card without using it in the comparison", () => {
  const source = dataset("1 Oct 2026", [basis("2026-10-01")]);
  const observations = source.sections[0]?.blocks[0];
  const row = observations?.type === "table" ? observations.rows[0] : undefined;
  if (!row) throw new Error("missing fixture observation");
  row.cells[5] = "Not supplied: no locator";
  const view = securityView(source, "2026-10-02");
  expect(view?.chartable.map(({ name }) => name)).toEqual(["Unsecured notes"]);
  expect(view?.records[0]?.market).toContain("$99.00");
});
