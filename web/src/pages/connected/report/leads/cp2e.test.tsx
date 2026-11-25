import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry } from "../../publishedReport";
import { entry, table } from "../overview/rows.fixture";
import { MacroLead } from "./cp2e";
import { bottomLine, leadProps, tableSection } from "./lead.fixture";
import { fixtureEntry, retained } from "./markdown.fixture";

afterEach(cleanup);

/** A retained handoff with its `Events: Hedges` table published as the store publishes it. */
function withHedgeEvents(made: OutputEntry) {
  const events = made.sections.find((section) => section.heading === "Events: Hedges");
  const at = events?.blocks.find((block) => block.type === "table");
  made.output.events = at ? [{ lane: "Hedges", table: at.line, gap: null }] : [];
  return made;
}

// Outdated evidence: two real CP-2E handoffs, TransDigm FY2024 (as of 2024-09-30), one run.
const h3 = () => withHedgeEvents(fixtureEntry("CP-2E", retained("esg", "CP-2E-h3.md")));
const h4 = () => withHedgeEvents(fixtureEntry("CP-2E", retained("esg", "CP-2E-h4.md")));
// The synthetic proof handoff, written to the Deploy VII rate-shock grid.
const proof = () => fixtureEntry("CP-2E", retained("..", "..", "proof", "handoffs", "CP-2E.md"));

it("states the one +100 bp step from the sensitivity register as a figure with its words (h3)", () => {
  render(<MacroLead {...leadProps(h3())} />);
  const tile = screen.getByRole("region", { name: "Rate sensitivity" });
  expect(tile.className).toMatch(/lg:col-span-8/);
  expect(within(tile).getByRole("heading")).toHaveTextContent(/^Rate sensitivity$/);
  // One step is a stated figure, not a one-bar chart.
  expect(within(tile).queryByRole("img")).toBeNull();
  expect(tile.querySelectorAll("[data-bar]")).toHaveLength(0);
  const steps = within(tile).getByRole("list", { name: "Rate sensitivity" });
  expect(within(steps).getAllByRole("listitem")).toHaveLength(1);
  expect(within(steps).getByText("+100 bp static annual borrowing-interest shock")).toBeVisible();
  expect(within(steps).getByText("+USD 57.89 million")).toBeVisible();
  expect(within(steps).getByText("annual cash interest")).toBeVisible();
  // The issuer's own test and the not-calculable rows stay words, never a second bar.
  expect(
    within(tile).getByText(
      "Issuer +one percentage point rate test: Approximately +USD 30 million annual interest costs",
    ),
  ).toBeVisible();
  expect(
    within(tile).getByText(
      "FX / commodity / inflation stress: Not calculable: no supported cash-flow exposure base",
    ),
  ).toBeVisible();
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(
    within(tile).getByRole("cell", { name: "+USD 57.89 million annual cash interest" }),
  ).toBeVisible();
  expect(
    within(tile)
      .getAllByRole("link", { name: /^Source for / })
      .at(-1),
  ).toHaveAttribute("href", expect.stringContaining("#evidence/"));
});

it("draws hedged against unhedged floating-rate debt as one bar of the two stated amounts (h3)", () => {
  render(<MacroLead {...leadProps(h3())} />);
  const tile = screen.getByRole("region", { name: "Hedged against unhedged" });
  const figure = within(tile).getByRole("img");
  expect(figure).toHaveAccessibleName(
    /Hedged floating-rate debt USD 3,400 million.*Unhedged floating-rate debt USD 5,789 million/,
  );
  expect(within(figure).getByText("USD 3,400 million")).toBeInTheDocument();
  expect(within(figure).getByText("USD 5,789 million")).toBeInTheDocument();
  const hedged = figure.querySelector('[data-segment="hedged"]');
  // 3,400 of 9,189, worked by hand: 37.0008% of the bar.
  expect(parseFloat((hedged as HTMLElement).style.width)).toBeCloseTo(37.0008, 3);
  expect(within(tile).getByRole("heading")).toHaveTextContent(
    /^Hedged and unhedged floating-rate debt$/,
  );
  expect(within(tile).getByText("Gross floating-rate debt: USD 9,189 million")).toBeVisible();
});

it("keeps h4's compound gross cell and unread impact cells as text, never a number", () => {
  render(<MacroLead {...leadProps(h4())} />);
  const hedge = screen.getByRole("region", { name: "Hedged against unhedged" });
  const figure = within(hedge).getByRole("img");
  expect(within(figure).getByText("USD 3,400 million")).toBeInTheDocument();
  expect(within(hedge).queryByText(/9,189/)).toBeNull();
  fireEvent.click(within(hedge).getByRole("button", { name: "Table" }));
  expect(
    within(hedge).getByRole("cell", {
      name: "USD 9,189 million principal; USD 9,128 million carrying",
    }),
  ).toBeVisible();
  // h4 writes "USD +57.89 million …; FCF USD -57.89 million …": two amounts, so words; the
  // receivables component states one ("USD +4.87 million …") and is the one step placed.
  const ladder = screen.getByRole("region", { name: "Rate sensitivity" });
  const steps = within(ladder).getByRole("list", { name: "Rate sensitivity" });
  expect(within(steps).getAllByRole("listitem")).toHaveLength(1);
  expect(within(steps).getByText("USD +4.87 million")).toBeVisible();
  expect(
    within(ladder).getByText(/^\+100 bp, closing portfolio: USD \+57\.89 million/),
  ).toBeVisible();
});

it("states the foreign-share gap, lists the hedge terms without sources and the hedge dates", () => {
  render(<MacroLead {...leadProps(h3())} />);
  const share = screen.getByRole("region", { name: "Foreign share" });
  expect(
    within(share).getByText("This page could not read a foreign-currency share."),
  ).toBeVisible();
  // Ruling vii: no note on what a run would need.
  expect(share.textContent).not.toMatch(/supplied at run start/);
  const terms = screen.getByRole("region", { name: "Hedge terms" });
  // The terms sit behind a closed disclosure, in a named scroll region the keyboard can reach.
  const disclosure = terms.querySelector("details");
  expect(disclosure).not.toHaveAttribute("open");
  fireEvent.click(within(terms).getByText("Show the hedge terms"));
  const region = within(terms).getByRole("region", { name: "Hedge terms table" });
  expect(region).toHaveAttribute("tabindex", "0");
  expect(
    within(region).getAllByRole("cell", { name: "Three-month SOFR floor 2.00%; ceiling 3.50%" }),
  ).toHaveLength(2);
  expect(within(terms).queryByText(/tdg-20240930/)).toBeNull();
  const dates = screen.getByRole("list", { name: "Hedge dates" });
  const rows = within(dates).getAllByRole("listitem");
  expect(rows).toHaveLength(5);
  expect(rows[0]).toHaveTextContent("2023-03-31");
});

it("reads the hedge register by id where the canonical title does not match (h4)", () => {
  render(<MacroLead {...leadProps(h4())} />);
  const terms = screen.getByRole("region", { name: "Hedge terms" });
  fireEvent.click(within(terms).getByText("Show the hedge terms"));
  expect(
    within(terms).getByRole("cell", { name: "Three-month Term SOFR cap 1.25%" }),
  ).toBeVisible();
});

it("draws the rate-shock grid first when the handoff carries it, with the after-hedges mark", () => {
  render(<MacroLead {...leadProps(proof())} />);
  const tile = screen.getByRole("region", { name: "Added annual interest" });
  expect(tile.className).toMatch(/lg:col-span-8/);
  const figure = within(tile).getByRole("img");
  expect(figure).toHaveAccessibleName(
    /\+100 bp: before hedges 8\.00, after hedges 5\.00.*\+200 bp: before hedges 16\.00, after hedges Not supplied: no hedge sensitivity retained/,
  );
  expect(within(tile).getByRole("heading")).toHaveTextContent(/^Added annual interest$/);
  expect(figure.querySelectorAll('[data-case="After hedges"]')).toHaveLength(1);
  // The after-hedges gap is the one gap chip: its word and its reason, never "after Not supplied:".
  expect(within(figure).getByText("Not supplied")).toHaveClass("border-dashed");
  expect(within(figure).getByText("No hedge sensitivity retained")).toBeInTheDocument();
  expect(figure.textContent).not.toMatch(/Not supplied:/);
  expect(screen.queryByRole("region", { name: "Rate sensitivity" })).toBeNull();
  // proof T2F.4 writes "USD 300m" / "USD 500m": read as written, one bar of the two.
  const hedge = screen.getByRole("region", { name: "Hedged against unhedged" });
  const bar = within(hedge).getByRole("img");
  expect(within(bar).getByText("USD 300m")).toBeInTheDocument();
  expect(within(bar).getByText("USD 500m")).toBeInTheDocument();
});

it("gives the module's own FX limitation as the foreign-share gap", () => {
  const made = entry(
    "CP-2E",
    [],
    [
      tableSection(
        "Gaps",
        table(
          10,
          ["Gap", "Severity", "Affected analysis", "Effect", "Remediation", "Source"],
          [
            [
              "G1",
              "High",
              "FX register",
              "Currency split by entity was not disclosed.",
              "Ask",
              "Memo",
            ],
          ],
        ),
      ),
      tableSection(
        "T2F.3 — Hedging register",
        table(
          20,
          [
            "Hedge Type",
            "Notional",
            "Instrument Covered",
            "Rate / Strike",
            "Maturity",
            "Coverage Status",
            "Limitation",
            "Source",
          ],
          [["Swap", "USD 100 million", "Loan", "3%", "2026", "Effective", "None", "Memo"]],
        ),
      ),
    ],
  );
  render(<MacroLead {...leadProps(made)} />);
  const share = screen.getByRole("region", { name: "Foreign share" });
  expect(within(share).getByText("Currency split by entity was not disclosed.")).toBeVisible();
  const ladder = screen.getByRole("region", { name: "Rate sensitivity" });
  expect(
    within(ladder).getByText("This page could not read a cash impact per rate shock step."),
  ).toBeVisible();
});

it("draws nothing for a blocked module", () => {
  const stopped = entry("CP-2E", [], bottomLine("Not assessable: no debt schedule was supplied."));
  const { container } = render(<MacroLead {...leadProps(stopped)} />);
  expect(container).toBeEmptyDOMElement();
});

it("places only a cash impact that states exactly one amount; a range or a qualified one stays words", () => {
  const made = entry(
    "CP-2E",
    [],
    [
      {
        heading: "T2F.5 — Sensitivity register",
        level: 4,
        line: 9,
        blocks: [
          table(
            10,
            ["Sensitivity", "Estimated Cash Impact", "Source"],
            [
              ["+100 bp SOFR", "USD 5 million to USD 8 million a year, before hedges", "S1"],
              ["+150 bp SOFR", "USD 9 million, about USD 7 million after hedges", "S1"],
              ["+175 bp SOFR", "USD 10 million – 12 million a year", "S1"],
              ["+200 bp SOFR", "USD 16 million a year", "S1"],
            ],
          ),
        ],
      },
    ],
  );
  render(<MacroLead {...leadProps(made)} />);
  const tile = screen.getByRole("region", { name: "Rate sensitivity" });
  const steps = within(tile).getByRole("list", { name: "Rate sensitivity" });
  expect(
    within(steps)
      .getAllByRole("listitem")
      .map((item) => item.textContent),
  ).toEqual(["+200 bp SOFRUSD 16 milliona year"]);
  for (const text of [
    "+100 bp SOFR: USD 5 million to USD 8 million a year, before hedges",
    "+150 bp SOFR: USD 9 million, about USD 7 million after hedges",
    "+175 bp SOFR: USD 10 million – 12 million a year",
  ])
    expect(within(tile).getByText(text)).toBeVisible();
});

it("draws three or more stated steps as a ladder on one axis", () => {
  const made = entry(
    "CP-2E",
    [],
    [
      {
        heading: "T2F.5 — Sensitivity register",
        level: 4,
        line: 9,
        blocks: [
          table(
            10,
            ["Sensitivity", "Estimated Cash Impact", "Source"],
            [
              ["+100 bp SOFR", "USD 8 million", "S1"],
              ["+200 bp SOFR", "USD 16 million", "S1"],
              ["+300 bp SOFR", "USD 24 million", "S1"],
            ],
          ),
        ],
      },
    ],
  );
  render(<MacroLead {...leadProps(made)} />);
  const tile = screen.getByRole("region", { name: "Rate sensitivity" });
  expect(within(tile).getByRole("img")).toHaveAccessibleName(
    "Rate sensitivity: +100 bp SOFR: USD 8 million; +200 bp SOFR: USD 16 million; +300 bp SOFR: USD 24 million.",
  );
  expect(
    [...tile.querySelectorAll("[data-bar]")].map((bar) => bar.getAttribute("data-bar")),
  ).toEqual(["USD 8 million", "USD 16 million", "USD 24 million"]);
});

it("keeps register ids and source names off the page on the real h4 handoff", () => {
  render(<MacroLead {...leadProps(h4())} />);
  const page = document.body.textContent;
  expect(page).not.toMatch(/\bT2F\.\d|tdg-20240930|CP-2E/);
});

it("draws a chart the store withheld or stated as a gap, since the frame draws none", () => {
  const made = h3();
  made.output.chartGaps = [
    { title: "Hedge coverage", table: 99, gap: "no hedge notional by year" },
  ];
  render(<MacroLead {...leadProps(made)} />);
  expect(
    within(screen.getByRole("region", { name: "Hedge coverage" })).getByText(
      "No hedge notional by year",
    ),
  ).toBeVisible();
});
