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

it("draws the one stated +100 bp step from the sensitivity register, cell as written (h3)", () => {
  render(<MacroLead {...leadProps(h3())} />);
  const tile = screen.getByRole("region", { name: "Rate sensitivity" });
  expect(tile.className).toMatch(/lg:col-span-8/);
  expect(within(tile).getByRole("heading")).toHaveTextContent(/One stated rate step/);
  const figure = within(tile).getByRole("img");
  expect(figure).toHaveAccessibleName(
    /\+100 bp static annual borrowing-interest shock: \+USD 57\.89 million/,
  );
  expect(within(figure).getByText("+USD 57.89 million")).toBeInTheDocument();
  expect(figure.querySelectorAll("[data-bar]")).toHaveLength(1);
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
  expect(parseFloat((hedged as HTMLElement).style.width)).toBeCloseTo(
    (3400 / (3400 + 5789)) * 100,
    4,
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
  // h4 writes "USD +57.89 million …", which the strict amount read does not take.
  const ladder = screen.getByRole("region", { name: "Rate sensitivity" });
  expect(within(ladder).queryByRole("img")).toBeNull();
  expect(
    within(ladder).getByText(
      "The sensitivity table states no shock step with an amount the figure can place.",
    ),
  ).toBeVisible();
  expect(
    within(ladder).getByText(/^\+100 bp, closing portfolio: USD \+57\.89 million/),
  ).toBeVisible();
});

it("states the foreign-share gap, lists the hedge terms without sources and the hedge dates", () => {
  render(<MacroLead {...leadProps(h3())} />);
  const share = screen.getByRole("region", { name: "Foreign share" });
  expect(within(share).getByText("The handoff states no currency shares.")).toBeVisible();
  expect(
    within(share).getByText(/currency exposure by currency supplied at run start/),
  ).toBeVisible();
  const terms = screen.getByRole("region", { name: "Hedge terms" });
  expect(
    within(terms).getAllByRole("cell", { name: "Three-month SOFR floor 2.00%; ceiling 3.50%" }),
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
  expect(figure.querySelectorAll('[data-case="After hedges"]')).toHaveLength(1);
  expect(
    within(figure).getByText("Not supplied: no hedge sensitivity retained"),
  ).toBeInTheDocument();
  expect(screen.queryByRole("region", { name: "Rate sensitivity" })).toBeNull();
  // "USD 300m" is not the "USD n million" form, so the bar is not drawn.
  const hedge = screen.getByRole("region", { name: "Hedged against unhedged" });
  expect(within(hedge).queryByRole("img")).toBeNull();
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
    within(ladder).getByText(
      "The handoff has no sensitivity table with a cash impact per shock step.",
    ),
  ).toBeVisible();
});

it("draws a blocked module as Not assessable", () => {
  const stopped = entry("CP-2E", [], bottomLine("Not assessable: no debt schedule was supplied."));
  render(<MacroLead {...leadProps(stopped)} />);
  const tile = screen.getByRole("region", { name: "Rate sensitivity" });
  expect(within(tile).getByText("Not assessable")).toBeVisible();
  expect(within(tile).getByText("No debt schedule was supplied.")).toBeVisible();
  expect(screen.queryByRole("region", { name: "Foreign share" })).toBeNull();
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
  expect(within(tile).getByRole("img")).toHaveAccessibleName(
    "Rate sensitivity: +200 bp SOFR: USD 16 million.",
  );
  expect(
    [...tile.querySelectorAll("[data-bar]")].map((bar) => bar.getAttribute("data-bar")),
  ).toEqual(["USD 16 million"]);
  for (const text of [
    "+100 bp SOFR: USD 5 million to USD 8 million a year, before hedges",
    "+150 bp SOFR: USD 9 million, about USD 7 million after hedges",
    "+175 bp SOFR: USD 10 million – 12 million a year",
  ])
    expect(within(tile).getByText(text)).toBeVisible();
});
