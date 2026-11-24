import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach } from "vitest";
import type { OutputEntry } from "../publishedReport";
import { Securities, securityView } from "./Securities";

afterEach(cleanup);

/** The instrument's row in the instrument table. */
function instrumentRow(name: string) {
  const found = screen.getByRole("rowheader", { name }).closest("tr");
  if (!found) throw new Error(`missing row ${name}`);
  return found;
}

/** The yield bars drawn, by instrument. */
const bars = () =>
  [...document.querySelectorAll("[data-bar]")].map(
    (bar) => bar.closest("tr")?.querySelector("th")?.textContent,
  );

function basis(date: string, amounts = "USD millions") {
  return `All amounts ${amounts} unless stated; yields are percentages from last trades on ${date}; differences in yield are percentage points, shown in bp.`;
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
  // The yield column replaces the price and yield chart: each last-trade yield as written, with
  // its bar against the largest stated yield; the unquoted loan has no yield and no bar.
  expect(within(instrumentRow("Secured notes")).getByText("7.005000%")).toBeInTheDocument();
  expect(within(instrumentRow("Unsecured notes")).getByText("9.12%")).toBeInTheDocument();
  expect(bars()).toEqual(["Secured notes", "Unsecured notes"]);
  const widths = [...document.querySelectorAll<HTMLElement>("[data-bar] .bg-chart-1")].map(
    (bar) => bar.style.width,
  );
  expect(widths).toEqual([`${String((7.005 / 9.12) * 100)}%`, "100%"]);
  const loan = instrumentRow("Term loan");
  expect(within(loan).queryByText(/yield/)).toBeNull();
  expect(within(loan).getAllByText("Not supplied")).toHaveLength(2);
  expect(within(loan).getByRole("link", { name: "Source for Term loan" })).toHaveAttribute(
    "href",
    "#evidence/5-8",
  );
  expect(within(loan).getByText("Not supplied: no loan observation")).toBeInTheDocument();
  expect(within(loan).getByText("Requires More Work")).toBeInTheDocument();
  expect(within(instrumentRow("Secured notes")).getByText("Neutral")).toBeInTheDocument();
  expect(screen.getByText(/Spread is not supplied/)).toBeInTheDocument();
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
  if (!view) throw new Error("missing security review");
  render(<Securities data={view} href={(line) => `#evidence/5-${String(line)}`} />);
  expect(within(instrumentRow("Secured notes")).getByText(/\$99\.00/)).toBeInTheDocument();
  expect(bars()).toEqual([]);
});

// docs/rulings/2026-11-16-reporting-currency-from-sources.md: the quotes stay US market quotes.
it.each([
  ["GBPm", "Market levels are US market quotes in US dollars; this run reports in GBPm."],
  ["CHFm", "Market levels are US market quotes in US dollars; this run reports in CHFm."],
])("notes on a %s run that its market levels are US market quotes", (runUnit, text) => {
  const view = securityView(dataset("1 Oct 2026", [basis("2026-10-01")]), "2026-10-02");
  if (!view) throw new Error("missing security review");
  render(
    <Securities data={view} href={(line) => `#evidence/5-${String(line)}`} runUnit={runUnit} />,
  );
  expect(screen.getByText(text)).toHaveAttribute("role", "note");
  expect(bars()).toEqual(["Secured notes", "Unsecured notes"]);
});

it.each([["US$m"], [undefined]])("adds no quote note on a run in %s", (runUnit) => {
  const view = securityView(dataset("1 Oct 2026", [basis("2026-10-01")]), "2026-10-02");
  if (!view) throw new Error("missing security review");
  render(
    <Securities data={view} href={(line) => `#evidence/5-${String(line)}`} runUnit={runUnit} />,
  );
  expect(screen.queryByText(/US market quotes/)).toBeNull();
  expect(screen.queryAllByRole("note")).toEqual([]);
});

// docs/rulings/2026-11-16-reporting-currency-from-sources.md: CP-3 states its amounts in the run's
// currency; its last trades are still US market quotes in US dollars.
it.each(["GBP millions", "CHF millions", "EUR millions"])(
  "draws the price chart from a market basis whose amounts are in %s",
  (amounts) => {
    const view = securityView(dataset("1 Oct 2026", [basis("2026-10-01", amounts)]), "2026-10-02");
    if (!view) throw new Error("missing security review");
    expect(
      view.chartable.map(({ name, priceText, yieldText }) => [name, priceText, yieldText]),
    ).toEqual([
      ["Secured notes", "$99.00", "7.005000%"],
      ["Unsecured notes", "$89.00", "9.12%"],
    ]);
    render(
      <Securities data={view} href={(line) => `#evidence/5-${String(line)}`} runUnit="GBPm" />,
    );
    expect(bars()).toEqual(["Secured notes", "Unsecured notes"]);
    expect(
      screen.queryByText("No pair of comparable last trades is supplied for this run."),
    ).toBeNull();
  },
);

it("says in the reader's words that no pair of comparable last trades is supplied", () => {
  const view = securityView(
    dataset("1 Oct 2026", [basis("2026-10-01", "GBP thousands")]),
    "2026-10-02",
  );
  if (!view) throw new Error("missing security review");
  render(<Securities data={view} href={(line) => `#evidence/5-${String(line)}`} />);
  const note = screen.getByText("No pair of comparable last trades is supplied for this run.");
  expect(note).toHaveAttribute("role", "note");
  expect(document.body.textContent).not.toMatch(/handoff/i);
  // The yields stay as written in the table, with no bar.
  expect(within(instrumentRow("Secured notes")).getByText("7.005000%")).toBeInTheDocument();
  expect(bars()).toEqual([]);
});

it.each(["GBP thousands", "£ millions", "GBPm", "gbp millions", "GBP millions and EUR millions"])(
  "withholds the price chart when the amounts are stated as %s",
  (amounts) => {
    const view = securityView(dataset("1 Oct 2026", [basis("2026-10-01", amounts)]), "2026-10-02");
    expect(view?.chartable).toEqual([]);
    expect(view?.records).toHaveLength(3);
  },
);
