// The retained CP-1B handoff (TransDigm FY2024, outdated evidence) carries the earnings table only and
// no chart tables. The chart-table and bridge cases are synthetic, built from the module contract
// (src/deploy_workflow/owners/cpos_launch_tables.py, apps/issuer-library/credit_os/handoff_fields.py);
// not a real handoff. Every expected value below is written out by hand.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import type { OutputEntry } from "../../publishedReport";
import { entry, section, table } from "../overview/rows.fixture";
import { EarningsDeltaLead } from "./earningsDelta";
import {
  axisFor,
  bridge,
  earningsDelta,
  FEW_PERIODS,
  MIXED_PERIODS,
  NO_PERCENT,
  NO_UNIT,
  TWICE_BRIDGE,
  TWICE_EARNINGS,
  TWICE_RESULTS,
} from "./earningsDeltaData";
import { cp1bEntry, leadProps } from "./fixtures/load";

afterEach(cleanup);

const PAIR = [
  "Measure",
  "Prior period",
  "Prior",
  "Current period",
  "Current",
  "Reporting unit",
  "Basis and limitation",
];
const STEPS = ["Step", "Amount", "Reporting unit", "Basis and limitation"];
const RESULTS = "Chart data: prior and current results";
const KPIS = "Chart data: margin and KPI changes";

const results = (rows: string[][]) => section(RESULTS, 1, table(3, PAIR, rows));
const kpis = (rows: string[][]) => section(KPIS, 20, table(22, PAIR, rows));
const steps = (rows: string[][], heading = "Chart data: earnings bridge") =>
  section(heading, 40, table(42, STEPS, rows));
const delta = (...sections: OutputEntry["sections"]) => entry("CP-1B", [], sections);

const MONEY = [
  ["Revenue", "FY2023", "6,585", "FY2024", "7,940", "US$m", "Reported."],
  ["Adjusted EBITDA", "FY2023", "3,395", "FY2024", "4,173", "US$m", "Issuer-adjusted."],
  [
    "Net income",
    "FY2023",
    "1,299",
    "FY2024",
    "Not supplied: not yet reported",
    "US$m",
    "Reported.",
  ],
  ["Flat measure", "FY2023", "100", "FY2024", "100", "US$m", "Reported."],
];

/** The retained handoff with its unit sentence, or a margin cell, changed. */
function withEdit(change: (source: OutputEntry) => void) {
  const copy = structuredClone(cp1bEntry());
  change(copy);
  return copy;
}

describe("axisFor", () => {
  it("includes zero for amounts, with round ticks", () => {
    expect(axisFor([6585, 7940, 3395], true)).toEqual({
      lo: 0,
      hi: 8000,
      ticks: [0, 2000, 4000, 6000, 8000],
    });
  });
  it("reaches below zero for a negative value, with zero a tick", () => {
    const axis = axisFor([-158, 1198, 7940], true);
    expect(axis.lo).toBe(-5000);
    expect(axis.hi).toBe(10000);
    expect(axis.ticks).toContain(0);
  });
  it("is the round range around the levels when not from zero", () => {
    expect(axisFor([47.81, 48.02, 58.3, 58.8], false)).toEqual({
      lo: 45,
      hi: 60,
      ticks: [45, 50, 55, 60],
    });
  });
  it("still has a width when every value is the same", () => {
    const axis = axisFor([3, 3], false);
    expect(axis.hi).toBeGreaterThan(axis.lo);
    expect(axis.lo).toBeLessThanOrEqual(3);
    expect(axis.hi).toBeGreaterThanOrEqual(3);
  });
});

const RETAINED_ORDER = [
  "Revenue",
  "COGS",
  "Gross profit",
  "SG&A",
  "Reported EBITDA",
  "Issuer-adjusted EBITDA",
  "Total D&A",
  "Intangible amortization",
  "EBIT",
  "Cash interest paid, net",
  "Cash taxes paid",
  "Total capex, signed outflow",
  "Working-capital cash movement",
  "Operating cash flow",
  "Levered FCF",
  "Discretionary cash flow",
  "Net income",
];

describe("the prior and current results from the retained earnings table", () => {
  const { movers, kpis: margins } = earningsDelta(cp1bEntry());
  it("reads the unit from the sentence under the heading and takes the money rows only", () => {
    if (movers.kind !== "ready") throw new Error("expected movers");
    expect(movers.fallback).toBe(true);
    const [only] = movers.groups;
    expect(movers.groups).toHaveLength(1);
    expect(only?.unit).toBe("US$m");
    expect(only?.gaps.map((pair) => pair.label)).toEqual(["Maintenance capex", "Growth capex"]);
    expect(only?.gaps[0]?.prior.reason).toBe("no split");
  });
  it("lists every pair in the handoff's own order, not ranked by the size of its change", () => {
    if (movers.kind !== "ready") throw new Error("expected movers");
    // 17 money rows state both figures; the two margin rows and the two split rows are not among them.
    expect(movers.groups[0]?.rows.map((pair) => pair.label)).toEqual(RETAINED_ORDER);
  });
  it("prints the change the handoff states as written, and makes none where it states one", () => {
    if (movers.kind !== "ready") throw new Error("expected movers");
    const pairs = movers.groups[0]?.rows ?? [];
    const of = (label: string) => pairs.find((pair) => pair.label === label)?.change;
    expect(of("Revenue")).toMatchObject({ text: "+1,355", basis: "stated", sign: 1 });
    expect(of("Discretionary cash flow")).toMatchObject({
      text: "\u22121,356",
      basis: "stated",
      sign: -1,
    });
    expect(of("Cash interest paid, net")).toMatchObject({ text: "\u22122", basis: "stated" });
    expect(of("Working-capital cash movement")).toMatchObject({ text: "+129", basis: "stated" });
    // "22 reported" is the module's own figure: printed as stated, never as derived.
    expect(of("Intangible amortization")).toMatchObject({
      text: "+22 reported",
      basis: "stated",
      sign: 1,
    });
    expect(pairs.every((pair) => pair.change?.basis === "stated")).toBe(true);
  });
  it("gives better or worse only for a measure the owner's table knows", () => {
    if (movers.kind !== "ready") throw new Error("expected movers");
    const pairs = movers.groups[0]?.rows ?? [];
    const toneOf = (label: string) => pairs.find((pair) => pair.label === label)?.tone;
    expect(toneOf("Revenue")).toBe("better");
    expect(toneOf("Issuer-adjusted EBITDA")).toBe("better");
    expect(toneOf("Gross profit")).toBe("none");
    expect(toneOf("Discretionary cash flow")).toBe("none");
  });
  it("reads margins as percent values on their own, with the stated change in percentage points", () => {
    if (margins.kind !== "ready") throw new Error("expected margins");
    const [only] = margins.groups;
    expect(only?.unit).toBe("%");
    expect(only?.rows.map((pair) => [pair.label, pair.prior.value, pair.current.value])).toEqual([
      ["Gross margin", 58.3, 58.8],
      ["Reported EBITDA margin", 47.81, 48.02],
    ]);
    expect(only?.rows.map((pair) => pair.change?.text)).toEqual([
      "+0.5 percentage points",
      "+0.22 percentage points, rounded",
    ]);
    expect(only?.axis).toEqual({ lo: 45, hi: 60, ticks: [45, 50, 55, 60] });
  });
  it("draws nothing for money when the heading does not state the unit", () => {
    const edited = withEdit((source) => {
      for (const one of source.sections)
        one.blocks = one.blocks.filter((block) => block.type !== "text");
    });
    expect(earningsDelta(edited).movers).toMatchObject({ kind: "gap", reason: NO_UNIT });
    // The margins carry their unit in the cell, so they do not depend on the sentence.
    expect(earningsDelta(edited).kpis.kind).toBe("ready");
  });
  it("draws no margin when one margin cell has no percent sign", () => {
    const edited = withEdit((source) => {
      const t44 = source.sections
        .flatMap((one) => one.blocks)
        .find((block) => block.type === "table");
      const row =
        t44?.type === "table" ? t44.rows.find((one) => one.cells[0] === "Gross margin") : null;
      if (row) row.cells[2] = "58.8";
    });
    expect(earningsDelta(edited).kpis).toMatchObject({ kind: "gap", reason: NO_PERCENT });
  });
  it("is a gap when the handoff has no earnings table at all, and says so", () => {
    const empty = earningsDelta(entry("CP-1B", [], []));
    expect(empty.movers).toMatchObject({
      kind: "gap",
      reason: "The handoff has no table of prior and current results.",
    });
    expect(empty.kpis).toMatchObject({
      kind: "gap",
      reason: "The handoff has no table of margin and KPI changes.",
    });
    expect(empty.bridge).toBeNull();
  });
});

/** An earnings table with the headers and rows given, under the unit sentence. */
const earningsTable = (headers: string[], rows: string[][]) => ({
  heading: "T4.4 Earnings",
  level: 3,
  line: 1,
  blocks: [
    { type: "text" as const, line: 2, end: 2, text: "All money amounts are USD millions." },
    table(4, headers, rows),
  ],
});

describe("periods of the earnings table", () => {
  it("reads the two annual periods when an LTM column stands beside them, and lists the LTM as its own", () => {
    const { movers, kpis: margins } = earningsDelta(
      delta(
        earningsTable(
          ["Line Item", "FY2023", "FY2024", "LTM Dec-2024", "YoY Change (Abs)"],
          [
            ["Revenue", "6585", "7940", "8100", "1355"],
            ["Gross margin", "58.3%", "58.8%", "59.0%", "+0.5 percentage points"],
          ],
        ),
      ),
    );
    if (movers.kind !== "ready" || margins.kind !== "ready") throw new Error("expected figures");
    const [revenue] = movers.groups[0]?.rows ?? [];
    expect(revenue).toMatchObject({ priorPeriod: "FY2023", currentPeriod: "FY2024" });
    expect(revenue?.change).toMatchObject({ text: "+1,355", basis: "stated" });
    expect(revenue?.others).toEqual([{ period: "LTM Dec-2024", text: "8100" }]);
    expect(movers.otherPeriods).toEqual(["LTM Dec-2024"]);
    expect(margins.groups[0]?.rows[0]?.others).toEqual([{ period: "LTM Dec-2024", text: "59.0%" }]);
  });
  it("compares the latest two of three annual periods, makes the change itself, and lists the earlier one", () => {
    const { movers } = earningsDelta(
      delta(
        earningsTable(
          ["Line Item", "FY2022", "FY2023", "FY2024", "YoY Change (Abs)"],
          [["Revenue", "6000", "6585", "7940", "999"]],
        ),
      ),
    );
    if (movers.kind !== "ready") throw new Error("expected movers");
    const [revenue] = movers.groups[0]?.rows ?? [];
    expect(revenue).toMatchObject({ priorPeriod: "FY2023", currentPeriod: "FY2024" });
    // The stated column cannot be tied to one pair of three periods: the exact difference 7940 - 6585.
    expect(revenue?.change).toMatchObject({ text: "+1,355", basis: "derived" });
    expect(revenue?.others).toEqual([{ period: "FY2022", text: "6000" }]);
  });
  it("orders by year, not by column position", () => {
    const { movers } = earningsDelta(
      delta(earningsTable(["Line Item", "FY2024", "FY2023"], [["Revenue", "7940", "6585"]])),
    );
    if (movers.kind !== "ready") throw new Error("expected movers");
    expect(movers.groups[0]?.rows[0]).toMatchObject({
      priorPeriod: "FY2023",
      currentPeriod: "FY2024",
    });
    expect(movers.groups[0]?.rows[0]?.prior.value).toBe(6585);
  });
  it("says the true condition when there are fewer than two annual periods", () => {
    const { movers } = earningsDelta(
      delta(earningsTable(["Line Item", "FY2024", "LTM Dec-2024"], [["Revenue", "7940", "8100"]])),
    );
    expect(movers).toMatchObject({ kind: "gap", reason: FEW_PERIODS });
  });
  it("does not compare an FY period with a CY period", () => {
    const { movers } = earningsDelta(
      delta(earningsTable(["Line Item", "FY2023", "CY2024"], [["Revenue", "6585", "7940"]])),
    );
    expect(movers).toMatchObject({ kind: "gap", reason: MIXED_PERIODS });
  });
  it("says there is more than one earnings table, not that there is none", () => {
    const one = earningsTable(["Line Item", "FY2023", "FY2024"], [["Revenue", "6585", "7940"]]);
    const { movers, kpis: margins } = earningsDelta(delta(one, structuredClone(one)));
    expect(movers).toMatchObject({ kind: "gap", reason: TWICE_EARNINGS });
    expect(margins).toMatchObject({ kind: "gap", reason: TWICE_EARNINGS });
  });
});

describe("pairs from the chart tables", () => {
  it("gives each unit its own group and scale, rows in the handoff's order", () => {
    const { movers } = earningsDelta(
      delta(
        results([
          ...MONEY,
          ["Interest coverage", "FY2023", "2.71", "FY2024", "3.29", "x", "Cash."],
        ]),
      ),
    );
    if (movers.kind !== "ready") throw new Error("expected movers");
    expect(movers.fallback).toBe(false);
    expect(movers.groups.map((one) => one.unit)).toEqual(["US$m", "x"]);
    const [money, times] = movers.groups;
    expect(money?.rows.map((pair) => pair.label)).toEqual([
      "Revenue",
      "Adjusted EBITDA",
      "Flat measure",
    ]);
    expect(money?.axis).toEqual({ lo: 0, hi: 8000, ticks: [0, 2000, 4000, 6000, 8000] });
    expect(times?.rows[0]?.change).toMatchObject({ text: "+0.58x", basis: "derived", sign: 1 });
    expect(times?.rows[0]?.tone).toBe("better");
    expect(times?.axis?.hi).toBeLessThan(8000);
  });
  it("keeps the handoff's order even when a later row moves more", () => {
    const { movers } = earningsDelta(
      delta(
        results([
          ["Small", "FY2023", "10", "FY2024", "11", "US$m", "x"],
          ["Big", "FY2023", "10", "FY2024", "500", "US$m", "x"],
          ["Middle", "FY2023", "10", "FY2024", "60", "US$m", "x"],
        ]),
      ),
    );
    if (movers.kind !== "ready") throw new Error("expected movers");
    expect(movers.groups[0]?.rows.map((pair) => pair.label)).toEqual(["Small", "Big", "Middle"]);
  });
  it("judges a move in leverage, net leverage or coverage as CP-1 does, and an unknown measure not at all", () => {
    const judged = (label: string, prior: string, current: string) => {
      const { movers } = earningsDelta(
        delta(results([[label, "FY2023", prior, "FY2024", current, "x", "x"]])),
      );
      if (movers.kind !== "ready") throw new Error("expected movers");
      const [pair] = movers.groups[0]?.rows ?? [];
      return [pair?.change?.text, pair?.tone];
    };
    expect(judged("Total debt / EBITDA", "6.27", "6.53")).toEqual(["+0.26x", "worse"]);
    expect(judged("Total debt / EBITDA", "6.53", "6.27")).toEqual(["\u22120.26x", "better"]);
    expect(judged("Net debt / EBITDA", "5.1", "5.4")).toEqual(["+0.3x", "worse"]);
    expect(judged("Interest coverage", "2.71", "3.29")).toEqual(["+0.58x", "better"]);
    expect(judged("Interest coverage", "3.29", "2.71")).toEqual(["\u22120.58x", "worse"]);
    expect(judged("Customer count", "3", "4")).toEqual(["+1x", "none"]);
  });
  it("makes no change figure between two different kinds of period, and draws the two figures", () => {
    const { movers } = earningsDelta(
      delta(
        results([
          ["Revenue", "FY2024", "7940", "LTM Dec-2024", "8100", "US$m", "x"],
          ["Costs", "FY2023", "100", "FY2024", "120", "US$m", "x"],
        ]),
      ),
    );
    if (movers.kind !== "ready") throw new Error("expected movers");
    const [mixed, plain] = movers.groups[0]?.rows ?? [];
    expect(mixed).toMatchObject({ mixedBasis: true, change: null, tone: "none" });
    expect(mixed?.prior.value).toBe(7940);
    expect(mixed?.current.value).toBe(8100);
    expect(plain).toMatchObject({ mixedBasis: false });
    expect(plain?.change).toMatchObject({ text: "+20", basis: "derived" });
    expect(movers.notes.join(" ")).toMatch(/different kinds of period has no change figure/);
  });
  it("says a repeated chart table is repeated, not absent", () => {
    expect(earningsDelta(delta(results(MONEY), results(MONEY))).movers).toMatchObject({
      kind: "gap",
      reason: TWICE_RESULTS,
    });
  });
  it("keeps a pair with a missing side as a gap with the handoff's reason, never as zero", () => {
    const { movers } = earningsDelta(delta(results(MONEY)));
    if (movers.kind !== "ready") throw new Error("expected movers");
    const [money] = movers.groups;
    expect(money?.gaps.map((pair) => pair.label)).toEqual(["Net income"]);
    expect(money?.gaps[0]?.current).toMatchObject({
      kind: "gap",
      value: null,
      reason: "not yet reported",
    });
    expect(money?.rows.map((pair) => pair.label)).not.toContain("Net income");
  });
  it("calls a pair whose prior equals its current flat, with no direction", () => {
    const { movers } = earningsDelta(delta(results(MONEY)));
    if (movers.kind !== "ready") throw new Error("expected movers");
    const flat = movers.groups[0]?.rows.find((pair) => pair.label === "Flat measure");
    expect(flat?.change).toMatchObject({ sign: 0, magnitude: 0, basis: "derived" });
    expect(flat?.tone).toBe("none");
  });
  it("keeps a stated zero as a value, and a negative value on the axis", () => {
    const { movers } = earningsDelta(
      delta(
        results([
          ["Revenue", "FY2023", "0", "FY2024", "250", "US$m", "x"],
          ["Cash flow", "FY2023", "-50", "FY2024", "30", "US$m", "x"],
        ]),
      ),
    );
    if (movers.kind !== "ready") throw new Error("expected movers");
    const [one] = movers.groups;
    expect(one?.rows.map((pair) => [pair.label, pair.prior.value, pair.current.value])).toEqual([
      ["Revenue", 0, 250],
      ["Cash flow", -50, 30],
    ]);
    expect(one?.axis?.lo).toBe(-100);
    expect(one?.rows[1]?.change?.text).toBe("+80");
  });
  it("uses the exact difference, marked, when a stated change disagrees in direction", () => {
    const earnings = {
      heading: "T4.4 Earnings",
      level: 3,
      line: 1,
      blocks: [
        { type: "text" as const, line: 2, end: 2, text: "All money amounts are USD millions." },
        table(
          4,
          ["Line Item", "FY2023", "FY2024", "YoY Change (Abs)"],
          [
            ["Revenue", "100", "80", "20"],
            ["Costs", "50", "70", "20"],
          ],
        ),
      ],
    };
    const { movers } = earningsDelta(delta(earnings));
    if (movers.kind !== "ready") throw new Error("expected movers");
    const pairs = movers.groups[0]?.rows ?? [];
    // Revenue fell 20 but states "20": the exact difference is shown. Costs rose 20, as stated.
    expect(pairs.find((pair) => pair.label === "Revenue")?.change).toMatchObject({
      text: "\u221220",
      basis: "derived",
      conflict: true,
    });
    expect(pairs.find((pair) => pair.label === "Costs")?.change).toMatchObject({
      text: "+20",
      basis: "stated",
      conflict: false,
    });
    lead(delta(earnings));
    expect(screen.getByText(/disagreed in direction with its two figures/)).toBeVisible();
  });
  it("sets words where a figure belongs aside, drawn nowhere", () => {
    const { movers } = earningsDelta(
      delta(results([...MONEY, ["Odd", "FY2023", "n/a", "FY2024", "10", "US$m", "x"]])),
    );
    if (movers.kind !== "ready") throw new Error("expected movers");
    expect(movers.groups[0]?.words.map((pair) => pair.label)).toEqual(["Odd"]);
    expect(movers.groups[0]?.rows.map((pair) => pair.label)).not.toContain("Odd");
  });
  it("is a gap when a required column is missing, and when the table is empty", () => {
    const missing = section(
      RESULTS,
      1,
      table(3, ["Measure", "Prior", "Current"], [["a", "1", "2"]]),
    );
    expect(earningsDelta(delta(missing)).movers.kind).toBe("gap");
    expect(earningsDelta(delta(results([]))).movers).toMatchObject({ kind: "gap" });
  });
  it("keeps the handoff's order for margins and KPIs", () => {
    const { kpis: figure } = earningsDelta(
      delta(
        kpis([
          ["Small", "FY2023", "10", "FY2024", "10.1", "%", "x"],
          ["Large", "FY2023", "10", "FY2024", "20", "%", "x"],
        ]),
      ),
    );
    if (figure.kind !== "ready") throw new Error("expected kpis");
    expect(figure.groups[0]?.rows.map((pair) => pair.label)).toEqual(["Small", "Large"]);
    expect(figure.groups[0]?.rows[0]?.change?.text).toBe("+0.1 percentage points");
  });
});

describe("the variance bridge", () => {
  const GOOD = [
    ["Revenue FY2023", "100", "US$m", "Reported."],
    ["Organic growth", "20", "US$m", "Reported."],
    ["Disposals", "-5", "US$m", "Reported."],
    ["Revenue FY2024", "115", "US$m", "Reported."],
  ];
  it("is drawn when the opening and its changes add up to the closing", () => {
    const result = bridge(delta(steps(GOOD)));
    if (result?.kind !== "bridge") throw new Error("expected a bridge");
    expect(result.unit).toBe("US$m");
    expect(result.steps.map((step) => [step.role, step.value, step.level, step.from])).toEqual([
      ["opening", 100, 100, null],
      ["change", 20, 120, 100],
      ["change", -5, 115, 120],
      ["closing", 115, 115, null],
    ]);
    expect(result.axis).toEqual({ lo: 90, hi: 120, ticks: [90, 100, 110, 120] });
  });
  it("is not drawn as a bridge when the steps do not add up, and says why", () => {
    const result = bridge(
      delta(steps([...GOOD.slice(0, 3), ["Revenue FY2024", "116", "US$m", "x"]])),
    );
    expect(result).toMatchObject({
      kind: "unreconciled",
      message:
        "The variance bridge in this handoff does not add up, so it is not drawn as a bridge.",
    });
  });
  it("says a gap step is not supplied, with its stated reason, and does not call that a failure to add up", () => {
    const result = bridge(
      delta(
        steps([
          GOOD[0] ?? [],
          ["Disposals", "Not supplied: not split", "US$m", "x"],
          GOOD[3] ?? [],
        ]),
      ),
    );
    expect(result).toMatchObject({
      kind: "unreconciled",
      message: "The variance bridge is not drawn: Disposals is not supplied (not split).",
    });
  });
  it("screens a gap reason that names a register", () => {
    const result = bridge(
      delta(
        steps([
          GOOD[0] ?? [],
          ["Disposals", "Not supplied: see register T4.4 row D14", "US$m", "x"],
          GOOD[3] ?? [],
        ]),
      ),
    );
    expect(result).toMatchObject({
      message:
        "The variance bridge is not drawn: Disposals is not supplied (Detail is in Evidence.).",
    });
  });
  it("is not a bridge with a gap amount, with two units, with no changes, or when two tables compete", () => {
    const gap = [GOOD[0] ?? [], ["Organic", "Not supplied: x", "US$m", "x"], GOOD[3] ?? []];
    expect(bridge(delta(steps(gap)))).toMatchObject({ kind: "unreconciled" });
    const units = GOOD.map((row, at) => (at === 1 ? [row[0] ?? "", "20", "EURm", "x"] : row));
    expect(bridge(delta(steps(units)))).toMatchObject({ kind: "unreconciled" });
    expect(bridge(delta(steps([GOOD[0] ?? [], GOOD[3] ?? []])))).toMatchObject({
      kind: "unreconciled",
    });
    expect(bridge(delta(steps(GOOD), steps(GOOD, "Chart data: other")))).toMatchObject({
      kind: "unreconciled",
      message: TWICE_BRIDGE,
    });
  });
  it("is absent without a step table", () => {
    expect(bridge(delta(results(MONEY)))).toBeNull();
  });
});

const lead = (source: OutputEntry) => render(<EarningsDeltaLead {...leadProps(source)} />);

/** The strip of one drawn pair, by the measure's name. */
const strip = (container: HTMLElement, label: string) =>
  container.querySelector(`svg[data-pair="${label}"]`) as SVGSVGElement;
const cx = (element: Element | null) => Number(element?.getAttribute("cx"));
const spanOf = (svg: SVGSVGElement) =>
  cx(svg.querySelector("[data-current]")) - cx(svg.querySelector("[data-prior]"));
const RESULTS_NAME = "Prior and current results";
const rowsOf = (tile: HTMLElement) =>
  [...tile.querySelectorAll("details tbody tr")].map((row) =>
    [...row.querySelectorAll("td")].map((cell) => cell.textContent),
  );

describe("EarningsDeltaLead on the retained handoff", () => {
  it("titles each tile plainly, with no count, ranking or computed reading", () => {
    lead(cp1bEntry());
    const tile = screen.getByRole("region", { name: RESULTS_NAME });
    expect(within(tile).getByRole("heading", { name: RESULTS_NAME })).toBeVisible();
    expect(
      within(screen.getByRole("region", { name: "Margins and KPIs" })).getByRole("heading", {
        name: "Margins and KPIs",
      }),
    ).toBeVisible();
    for (const heading of screen.getAllByRole("heading"))
      expect(heading.textContent).not.toMatch(/moved most|derived|rose|fell|\d/);
    // The kicker names what is compared, from the handoff's own period labels.
    expect(within(tile).getByText("FY2023 to FY2024, US$m")).toBeVisible();
  });
  it("draws the bridge's absence as the one gap tile, not a caption", () => {
    const { container } = lead(cp1bEntry());
    const gap = screen.getByRole("region", { name: "Variance bridge" });
    expect(within(gap).getByText(/No variance bridge in this handoff\./)).toBeVisible();
    expect(within(gap).queryByRole("img")).toBeNull();
    // No tile of the lead is a hatched tile: the gap pattern is the note inside a plain tile.
    expect(container.querySelector("section.gap-hatch")).toBeNull();
    // The note is not a caption in the results tile.
    expect(
      within(screen.getByRole("region", { name: RESULTS_NAME })).queryByText(/No variance bridge/),
    ).toBeNull();
  });
  it("draws the results and the margins side by side, 8 and 4, when both exist", () => {
    lead(cp1bEntry());
    expect(screen.getByRole("region", { name: RESULTS_NAME }).className).toContain("lg:col-span-8");
    expect(screen.getByRole("region", { name: "Margins and KPIs" }).className).toContain(
      "lg:col-span-4",
    );
  });
  it("gives the results the full width when the margins are a gap, and the margins when the results are", () => {
    lead(entry("CP-1B", [], [results(MONEY)]));
    expect(screen.getByRole("region", { name: RESULTS_NAME }).className).toContain(
      "lg:col-span-12",
    );
    cleanup();
    lead(
      entry("CP-1B", [], [kpis([["Gross margin", "FY2023", "58.3", "FY2024", "58.8", "%", "x"]])]),
    );
    expect(screen.getByRole("region", { name: "Margins and KPIs" }).className).toContain(
      "lg:col-span-12",
    );
  });
  it("lists all 17 pairs in the handoff's order, each strip to one scale: equal changes are equal widths", () => {
    const { container } = lead(cp1bEntry());
    const list = screen.getByRole("list", { name: `${RESULTS_NAME}, US$m` });
    const items = within(list).getAllByRole("listitem");
    expect(items).toHaveLength(17);
    expect(items.map((item) => item.querySelector("svg")?.getAttribute("data-pair"))).toEqual(
      RETAINED_ORDER,
    );
    const revenue = spanOf(strip(container, "Revenue"));
    const cash = spanOf(strip(container, "Discretionary cash flow"));
    const ebitda = spanOf(strip(container, "Reported EBITDA"));
    // 1355 up, 1356 down, 665 up: one scale means pixels follow amounts, sign included.
    expect(revenue / ebitda).toBeCloseTo(1355 / 665, 2);
    expect(cash / revenue).toBeCloseTo(-1356 / 1355, 2);
  });
  it("sets prior as a ring and current as a dot at their values, from the axis", () => {
    const { container } = lead(cp1bEntry());
    const revenue = strip(container, "Revenue");
    const prior = revenue.querySelector("[data-prior]");
    const current = revenue.querySelector("[data-current]");
    expect(prior?.getAttribute("data-prior")).toBe("6585");
    expect(current?.getAttribute("data-current")).toBe("7940");
    // The scale is -5000 to 10000 over x 44 to 536 (the drawing's width less its padding).
    expect(cx(prior)).toBeCloseTo(44 + ((6585 + 5000) / 15000) * 492, 6);
    expect(cx(current)).toBeCloseTo(44 + ((7940 + 5000) / 15000) * 492, 6);
    // The axis holds a negative: zero is marked as its own line.
    expect(revenue.querySelector('[data-tick="0"]')?.getAttribute("class")).toContain(
      "stroke-text-tertiary",
    );
  });
  it("prints each change as the handoff states it, with an arrow and a word, and better or worse only where known", () => {
    lead(cp1bEntry());
    const list = screen.getByRole("list", { name: `${RESULTS_NAME}, US$m` });
    const row = (name: string) => within(list).getByText(name).closest("li") as HTMLElement;
    expect(within(row("Revenue")).getByText("+1,355")).toBeVisible();
    expect(row("Revenue")).toHaveTextContent("up, better");
    expect(row("Revenue")).toHaveTextContent("▲");
    expect(within(row("Discretionary cash flow")).getByText("\u22121,356")).toBeVisible();
    expect(row("Discretionary cash flow")).toHaveTextContent("down");
    expect(row("Discretionary cash flow")).not.toHaveTextContent(/better|worse/);
    expect(row("Gross profit")).not.toHaveTextContent(/better|worse/);
    // A figure the module states as reported is printed as stated, not tagged derived.
    expect(within(row("Intangible amortization")).getByText("+22 reported")).toBeVisible();
    expect(list).not.toHaveTextContent(/derived/);
  });
  it("describes each strip with the figures in its aria-label", () => {
    const { container } = lead(cp1bEntry());
    expect(strip(container, "Revenue").getAttribute("aria-label")).toBe(
      "Revenue, US$m: prior 6,585 (FY2023), current 7,940 (FY2024), up 1,355, better.",
    );
    expect(strip(container, "Discretionary cash flow").getAttribute("aria-label")).toBe(
      "Discretionary cash flow, US$m: prior 1,198 (FY2023), current \u2212158 (FY2024), down 1,356.",
    );
  });
  it("lists the pairs with a gap in place, hatched, with the handoff's reason", () => {
    const { container } = lead(cp1bEntry());
    const gaps = screen.getByRole("list", { name: "Not supplied" });
    expect(within(gaps).getAllByRole("listitem")).toHaveLength(2);
    expect(within(gaps).getAllByText("Not supplied: no split")).toHaveLength(2);
    expect(container.querySelector('[data-gap="Maintenance capex"]')).not.toBeNull();
    expect(container.querySelector('svg[data-pair="Maintenance capex"]')).toBeNull();
  });
  it("draws every pair and carries every pair in the table view, in the handoff's order", () => {
    lead(cp1bEntry());
    const tile = screen.getByRole("region", { name: RESULTS_NAME });
    expect(within(tile).queryByText(/more pairs in the table view/)).toBeNull();
    const rows = rowsOf(tile);
    expect(rows).toHaveLength(19);
    expect(rows.slice(0, 17).map((row) => row[0])).toEqual(RETAINED_ORDER);
    expect(rows.find((row) => row[0] === "Intangible amortization")).toEqual([
      "Intangible amortization",
      "US$m",
      "FY2023",
      "139",
      "FY2024",
      "161",
      "+22 reported",
      "stated",
    ]);
    expect(rows.find((row) => row[0] === "Maintenance capex")?.[3]).toBe("Not supplied: no split");
  });
  it("draws the margins on a percent axis of their own, with the stated change in points", () => {
    const { container } = lead(cp1bEntry());
    const tile = screen.getByRole("region", { name: "Margins and KPIs" });
    expect(within(tile).getByText("58.3% → 58.8%")).toBeVisible();
    expect(
      within(within(tile).getByRole("list", { name: "Margins and KPIs, %" })).getAllByText(
        "+0.5 percentage points",
      ),
    ).toHaveLength(1);
    expect(within(tile).getByText(/axis starts at 45%, not zero/)).toBeVisible();
    expect(strip(container, "Gross margin").getAttribute("aria-label")).toBe(
      "Gross margin, %: prior 58.3% (FY2023), current 58.8% (FY2024), up 0.5 percentage points.",
    );
    // 45 to 60 over 492: 0.5 points is 0.5/15 of the width.
    expect(spanOf(strip(container, "Gross margin"))).toBeCloseTo((0.5 / 15) * 492, 6);
    expect(within(tile).queryByText(/derived/)).toBeNull();
  });
  it("has one trace control per figure and no source reference on the page", () => {
    const { container } = lead(cp1bEntry());
    expect(screen.getAllByRole("link", { name: /Source for/ })).toHaveLength(2);
    expect(container.textContent).not.toMatch(/TDG_|jsonl|T4\.\d|page 4|D01|D14|CP-/);
  });
  it("says the unit is not stated, in the gap tile, and still draws the margins", () => {
    lead(
      withEdit((source) => {
        for (const one of source.sections)
          one.blocks = one.blocks.filter((block) => block.type !== "text");
      }),
    );
    const gap = screen.getByRole("region", { name: RESULTS_NAME });
    expect(
      within(gap).getByText(/The handoff does not state the unit of its earnings table\./),
    ).toBeVisible();
    expect(screen.queryByRole("list", { name: new RegExp(RESULTS_NAME) })).toBeNull();
    expect(screen.getByRole("region", { name: "Margins and KPIs" })).toBeInTheDocument();
  });
  it("draws nothing for a blocked or unreadable module: the frame states it", () => {
    const source = cp1bEntry();
    const props = leadProps({ ...source, output: { ...source.output, parseError: "unreadable" } });
    const { container } = render(<EarningsDeltaLead {...props} />);
    expect(container).toBeEmptyDOMElement();
  });
  it("lists no figure of its own as drawn by the frame", () => {
    expect(EarningsDeltaLead.draws).toEqual([]);
  });
});

describe("EarningsDeltaLead with an LTM period beside the two annual periods", () => {
  const ltm = earningsTable(
    ["Line Item", "FY2023", "FY2024", "LTM Dec-2024", "YoY Change (Abs)"],
    [
      ["Revenue", "6585", "7940", "8100", "1355"],
      ["Gross margin", "58.3%", "58.8%", "59.0%", "+0.5 percentage points"],
    ],
  );
  it("still draws the two annual periods, names the LTM as its own period, and keeps it in the table view", () => {
    const { container } = lead(delta(ltm));
    expect(strip(container, "Revenue").getAttribute("aria-label")).toBe(
      "Revenue, US$m: prior 6,585 (FY2023), current 7,940 (FY2024), up 1,355, better.",
    );
    const tile = screen.getByRole("region", { name: RESULTS_NAME });
    expect(
      within(tile).getByText(
        "Compared: FY2023 to FY2024. Also stated, in the table view only: LTM Dec-2024.",
      ),
    ).toBeVisible();
    const head = [...tile.querySelectorAll("thead th")].map((cell) => cell.textContent);
    expect(head.at(-1)).toBe("LTM Dec-2024");
    expect(rowsOf(tile)[0]?.at(-1)).toBe("8100");
    expect(container.textContent).not.toMatch(/states no .* chart data for two periods/);
  });
});

describe("the axis text", () => {
  const axisTexts = (container: HTMLElement) =>
    [...container.querySelectorAll("svg[aria-hidden='true']")]
      .filter((svg) => svg.querySelector("text"))
      .map((svg) => ({
        width: Number((svg.getAttribute("viewBox") ?? "").split(" ")[2]),
        texts: [...svg.querySelectorAll("text")].map((text) => ({
          x: Number(text.getAttribute("x")),
          label: text.textContent,
          size: Number(text.getAttribute("font-size")),
        })),
      }));
  it("keeps every tick label inside its drawing, at about 7 px a character", () => {
    const { container } = lead(cp1bEntry());
    const axes = axisTexts(container);
    expect(axes).toHaveLength(2);
    for (const { width, texts } of axes)
      for (const { x, label } of texts) {
        const half = (label.length * 7) / 2;
        expect(x - half, label).toBeGreaterThanOrEqual(0);
        expect(x + half, label).toBeLessThanOrEqual(width);
      }
    expect(axes[0]?.texts.map((text) => text.label)).toEqual([
      "\u22125,000",
      "0",
      "5,000",
      "10,000",
    ]);
  });
  it("sets the tick text at about 11 px where the strip is about 580 px wide", () => {
    const { container } = lead(cp1bEntry());
    for (const { width, texts } of axisTexts(container)) {
      expect(width).toBe(580);
      for (const { size } of texts) expect(size).toBe(11);
    }
  });
  it("draws the zero line and labels it 0 when the scale holds a negative", () => {
    const { container } = lead(cp1bEntry());
    const strip = container.querySelector('svg[data-pair="Discretionary cash flow"]');
    const zero = strip?.querySelector('[data-tick="0"]');
    expect(zero?.getAttribute("class")).toContain("stroke-text-tertiary");
    expect(axisTexts(container)[0]?.texts.map((text) => text.label)).toContain("0");
  });
});

describe("EarningsDeltaLead on chart tables", () => {
  it("draws each unit on its own scale and labels a change the page made", () => {
    const { container } = lead(
      delta(
        results([
          ...MONEY,
          ["Interest coverage", "FY2023", "2.71", "FY2024", "3.29", "x", "Cash."],
        ]),
      ),
    );
    const money = screen.getByRole("list", { name: `${RESULTS_NAME}, US$m` });
    const times = screen.getByRole("list", { name: `${RESULTS_NAME}, x` });
    expect(within(money).getAllByRole("listitem")).toHaveLength(3);
    expect(within(times).getAllByRole("listitem")).toHaveLength(1);
    expect(strip(container, "Interest coverage").getAttribute("aria-label")).toBe(
      "Interest coverage, x: prior 2.71x (FY2023), current 3.29x (FY2024), up 0.58x derived, better.",
    );
    expect(times).toHaveTextContent("+0.58x");
    expect(times).toHaveTextContent("derived");
    // The 3.29x current is not on the money scale: it would sit at 14 on a scale to 8000.
    expect(
      cx(strip(container, "Interest coverage").querySelector("[data-current]")),
    ).toBeGreaterThan(100);
    // The title says nothing computed, whatever the units.
    expect(screen.getByRole("heading", { name: RESULTS_NAME })).toBeVisible();
  });
  it("says worse for a rise in leverage, as CP-1 does", () => {
    const { container } = lead(
      delta(results([["Total debt / EBITDA", "FY2023", "6.27", "FY2024", "6.53", "x", "x"]])),
    );
    expect(strip(container, "Total debt / EBITDA").getAttribute("aria-label")).toBe(
      "Total debt / EBITDA, x: prior 6.27x (FY2023), current 6.53x (FY2024), up 0.26x derived, worse.",
    );
    expect(screen.getByText("up", { exact: false, selector: "span" })).toBeInTheDocument();
    expect(screen.getByText(/, worse/)).toBeVisible();
  });
  it("shows a flat pair as unchanged, with no arrow", () => {
    lead(delta(results(MONEY)));
    const row = within(screen.getByRole("list", { name: `${RESULTS_NAME}, US$m` }))
      .getByText("Flat measure")
      .closest("li") as HTMLElement;
    expect(row).toHaveTextContent("unchanged");
    expect(row).not.toHaveTextContent(/[▲▼]/);
  });
  it("lists the pair with a missing side as the gap, not a mark", () => {
    const { container } = lead(delta(results(MONEY)));
    expect(container.querySelector('svg[data-pair="Net income"]')).toBeNull();
    const gaps = screen.getByRole("list", { name: "Not supplied" });
    expect(within(gaps).getByText("Not supplied: not yet reported")).toBeVisible();
    expect(screen.getByText(/No variance bridge in this handoff\./)).toBeVisible();
  });
  it("puts a stated zero at the axis start, not off the chart", () => {
    const { container } = lead(
      delta(results([["Revenue", "FY2023", "0", "FY2024", "250", "US$m", "x"]])),
    );
    const svg = strip(container, "Revenue");
    expect(svg.querySelector("[data-prior]")?.getAttribute("data-prior")).toBe("0");
    expect(cx(svg.querySelector("[data-prior]"))).toBe(44);
  });
  it("reads the states of the margin table: absent, with a gap, all gaps", () => {
    lead(delta(results(MONEY)));
    expect(screen.getByText(/The handoff has no table of margin and KPI changes\./)).toBeVisible();
    cleanup();
    lead(
      delta(
        kpis([
          [
            "Segment margin",
            "FY2023",
            "Not supplied: no split",
            "FY2024",
            "Not supplied: no split",
            "%",
            "x",
          ],
        ]),
      ),
    );
    const tile = screen.getByRole("region", { name: "Margins and KPIs" });
    expect(
      within(tile).getByText("The handoff states no pair with both figures to draw."),
    ).toBeVisible();
    expect(
      within(within(tile).getByRole("list", { name: "Not supplied" })).getByText(
        "Not supplied: no split",
      ),
    ).toBeVisible();
    expect(within(tile).queryByRole("img")).toBeNull();
  });
  it("says a repeated table is repeated, in the gap tile", () => {
    lead(delta(results(MONEY), results(MONEY)));
    expect(
      within(screen.getByRole("region", { name: RESULTS_NAME })).getByText(
        new RegExp(TWICE_RESULTS.slice(0, 40)),
      ),
    ).toBeVisible();
  });
  it("shows the module's own basis notes, and drops one that names a source", () => {
    lead(
      delta(
        results([
          ["Revenue", "FY2023", "100", "FY2024", "120", "US$m", "Reported, unaudited."],
          ["Debt", "FY2023", "50", "FY2024", "60", "US$m", "From tdg-20240930.htm.jsonl, page 45."],
        ]),
      ),
    );
    const tile = screen.getByRole("region", { name: RESULTS_NAME });
    expect(within(tile).getByText("Reported, unaudited.")).toBeVisible();
    expect(within(tile).queryByText(/jsonl/)).toBeNull();
  });
  it("draws two figures of different kinds of period without a change, and says so", () => {
    lead(delta(results([["Revenue", "FY2024", "7940", "LTM Dec-2024", "8100", "US$m", "x"]])));
    const tile = screen.getByRole("region", { name: RESULTS_NAME });
    expect(within(tile).getByText(/different kinds of period has no change figure/)).toBeVisible();
    expect(within(tile).getByRole("img")).toHaveAttribute(
      "aria-label",
      "Revenue, US$m: prior 7,940 (FY2024), current 8,100 (LTM Dec-2024).",
    );
    expect(within(tile).queryByText(/▲|▼|derived/)).toBeNull();
  });
});

describe("EarningsDeltaLead with a variance bridge", () => {
  const GOOD = [
    ["Revenue FY2023", "100", "US$m", "Reported."],
    ["Organic growth", "20", "US$m", "Reported."],
    ["Disposal", "-10", "US$m", "Reported."],
    ["Revenue FY2024", "110", "US$m", "Reported."],
  ];
  it("draws the waterfall first, plainly titled, each step a bar from the running total", () => {
    const { container } = lead(delta(steps(GOOD), results(MONEY)));
    const tile = screen.getByRole("region", { name: "Variance bridge" });
    expect(within(tile).getByRole("heading", { name: "Variance bridge" })).toBeVisible();
    expect(within(tile).getByText("Prior to current, US$m")).toBeVisible();
    const bar = (label: string) =>
      container.querySelector(`svg[data-step="${label}"] rect`) as SVGRectElement;
    // Axis 90 to 120 over 492 (room below the lowest total, 100): a step of -10 is half of +20.
    expect(bar("Organic growth").getAttribute("data-from")).toBe("100");
    expect(bar("Organic growth").getAttribute("data-to")).toBe("120");
    expect(bar("Disposal").getAttribute("data-from")).toBe("120");
    expect(bar("Disposal").getAttribute("data-to")).toBe("110");
    const span = Number(bar("Organic growth").getAttribute("width"));
    expect(Number(bar("Disposal").getAttribute("width")) / span).toBeCloseTo(10 / 20, 6);
    // Totals start at the axis start, which the page says is not zero.
    expect(bar("Revenue FY2024").getAttribute("data-from")).toBe("90");
    expect(within(tile).getByText(/The axis starts at 90, not zero/)).toBeVisible();
    expect(screen.queryByText(/No variance bridge/)).toBeNull();
  });
  it("names a negative step by its label as written, never as an add-back, and makes no running total", () => {
    const { container } = lead(delta(steps(GOOD)));
    const tile = screen.getByRole("region", { name: "Variance bridge" });
    expect(
      within(within(tile).getByRole("list", { name: "Variance bridge steps" })).getByText(
        "\u221210",
      ),
    ).toBeVisible();
    expect(container.querySelector('svg[data-step="Disposal"]')?.getAttribute("aria-label")).toBe(
      "Disposal, down 10 US$m.",
    );
    expect(tile).not.toHaveTextContent(/add-back|running total/i);
    for (const svg of tile.querySelectorAll("svg[aria-label]"))
      expect(svg.getAttribute("aria-label")).not.toMatch(/running total|add-back/i);
  });
  it("carries the steps as the handoff states them in the table view, with no total made here", () => {
    lead(delta(steps(GOOD)));
    const tile = screen.getByRole("region", { name: "Variance bridge" });
    const head = [...tile.querySelectorAll("thead th")].map((cell) => cell.textContent);
    expect(head).toEqual(["Step", "Role", "Amount (US$m)"]);
    expect(rowsOf(tile)[2]).toEqual(["Disposal", "Change", "\u221210"]);
  });
  it("does not draw a bridge that does not add up, and says so in the gap tile", () => {
    lead(
      delta(steps([...GOOD.slice(0, 3), ["Revenue FY2024", "116", "US$m", "x"]]), results(MONEY)),
    );
    const own = screen.getByRole("region", { name: "Variance bridge" });
    expect(
      within(own).getByText(
        /The variance bridge in this handoff does not add up, so it is not drawn as a bridge\./,
      ),
    ).toBeVisible();
    expect(within(own).queryByRole("list")).toBeNull();
    const movers = screen.getByRole("region", { name: RESULTS_NAME });
    expect(within(movers).queryByText(/does not add up/)).toBeNull();
    expect(within(movers).getByRole("list", { name: `${RESULTS_NAME}, US$m` })).toBeInTheDocument();
  });
  it("says a missing step is not supplied, never that the steps do not add up", () => {
    lead(
      delta(
        steps([
          GOOD[0] ?? [],
          ["Disposals", "Not supplied: not split", "US$m", "x"],
          GOOD[3] ?? [],
        ]),
        results(MONEY),
      ),
    );
    const own = screen.getByRole("region", { name: "Variance bridge" });
    expect(
      within(own).getByText(
        /The variance bridge is not drawn: Disposals is not supplied \(not split\)\./,
      ),
    ).toBeVisible();
    expect(screen.queryByText(/does not add up/)).toBeNull();
  });
  it("says two bridge tables are two, in the gap tile", () => {
    lead(delta(steps(GOOD), steps(GOOD, "Chart data: other"), results(MONEY)));
    expect(
      within(screen.getByRole("region", { name: "Variance bridge" })).getByText(
        new RegExp(TWICE_BRIDGE.slice(0, 40)),
      ),
    ).toBeVisible();
  });
});

describe("rows with no stated unit and screened text", () => {
  const NO_UNIT_ROWS = [
    ["Revenue", "FY2023", "100", "FY2024", "150", "", "x"],
    ["Customers", "FY2023", "100000", "FY2024", "100050", "", "x"],
  ];
  it("never puts two rows with no stated unit on one scale", () => {
    const { movers } = earningsDelta(delta(results(NO_UNIT_ROWS)));
    if (movers.kind !== "ready") throw new Error("expected movers");
    expect(movers.groups).toHaveLength(2);
    expect(movers.groups.map((one) => one.unitNotStated)).toEqual([true, true]);
    expect(movers.groups.map((one) => one.rows.map((pair) => pair.label))).toEqual([
      ["Revenue"],
      ["Customers"],
    ]);
    expect(movers.groups[0]?.axis?.hi).toBe(150);
    expect(movers.groups[1]?.axis?.hi).toBe(150000);
  });
  it("keeps a stated unit's rows together beside rows with none", () => {
    const { movers } = earningsDelta(delta(results([...MONEY.slice(0, 2), ...NO_UNIT_ROWS])));
    if (movers.kind !== "ready") throw new Error("expected movers");
    expect(movers.groups.map((one) => [one.unit, one.rows.length])).toEqual([
      ["US$m", 2],
      ["", 1],
      ["", 1],
    ]);
  });
  it("draws each such row on its own labelled scale", () => {
    lead(delta(results(NO_UNIT_ROWS)));
    expect(screen.getAllByText("unit not stated")).toHaveLength(2);
    expect(screen.getAllByRole("list", { name: `${RESULTS_NAME}, unit not stated` })).toHaveLength(
      2,
    );
  });
  it("screens words in a pair cell and drops a basis note that names a register", () => {
    const { container } = lead(
      delta(
        results([
          [
            "Revenue",
            "FY2023",
            "see register T4.4",
            "FY2024",
            "10",
            "US$m",
            "Calculation C07; register T4.4 row D14.",
          ],
          [
            "Debt",
            "FY2023",
            "50",
            "FY2024",
            "60",
            "US$m",
            "Calculation C07; register T4.4 row D14.",
          ],
        ]),
      ),
    );
    expect(container.textContent).not.toMatch(/T4\.4|C07|D14/);
    const tile = screen.getByRole("region", { name: RESULTS_NAME });
    expect(rowsOf(tile).find((row) => row[0] === "Revenue")?.[3]).toBe("Detail is in Evidence.");
    // The note is not drawn at all, not repeated as a sentence of its own.
    const notes = [...tile.querySelectorAll("ul li")].map((item) => item.textContent);
    expect(notes).toEqual([
      "Pairs that state words instead of a figure are in the table view only.",
    ]);
  });
  it("titles every tile plainly, however the two largest moves compare", () => {
    lead(
      delta(
        results([
          ["Revenue", "FY2023", "100", "FY2024", "150", "US$m", "x"],
          ["Net debt", "FY2023", "200", "FY2024", "250", "US$m", "x"],
        ]),
      ),
    );
    expect(screen.getByRole("heading", { name: RESULTS_NAME })).toBeVisible();
    expect(screen.queryByText(/tied|moved most/)).toBeNull();
  });
});

describe("EarningsDeltaLead gaps", () => {
  it("draws the three gap tiles, in the one gap pattern, for a handoff with no tables", () => {
    const { container } = lead(entry("CP-1B", [], []));
    expect(
      screen.getByText(/The handoff has no table of prior and current results\./),
    ).toBeVisible();
    expect(screen.getByText(/The handoff has no table of margin and KPI changes\./)).toBeVisible();
    expect(screen.getByText(/No variance bridge in this handoff\./)).toBeVisible();
    expect(screen.queryByRole("img")).toBeNull();
    expect(container.querySelector("section.gap-hatch")).toBeNull();
    expect(screen.getAllByRole("region")).toHaveLength(3);
  });
  it("says fewer than two annual periods in words, not that the table is missing", () => {
    lead(delta(earningsTable(["Line Item", "FY2024"], [["Revenue", "7940"]])));
    expect(screen.getAllByText(new RegExp(FEW_PERIODS.slice(0, 40)))).toHaveLength(2);
    expect(screen.queryByText(/has no table of prior and current results/)).toBeNull();
  });
  it("says more than one earnings table in words", () => {
    const one = earningsTable(["Line Item", "FY2023", "FY2024"], [["Revenue", "6585", "7940"]]);
    lead(delta(one, structuredClone(one)));
    expect(screen.getAllByText(new RegExp(TWICE_EARNINGS.slice(0, 40)))).toHaveLength(2);
  });
});
