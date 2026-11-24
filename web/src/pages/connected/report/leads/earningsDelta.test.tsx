// The retained CP-1B handoff (TransDigm FY2024, outdated evidence) carries the earnings table only and
// no chart tables. The chart-table and bridge cases are synthetic, built from the module contract
// (src/deploy_workflow/owners/cpos_launch_tables.py, apps/issuer-library/credit_os/handoff_fields.py);
// not a real handoff. Every expected value below is written out by hand.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import type { OutputEntry } from "../../publishedReport";
import { entry, section, table } from "../overview/rows.fixture";
import { EarningsDeltaLead } from "./earningsDelta";
import { axisFor, bridge, earningsDelta, NO_PERCENT, NO_UNIT } from "./earningsDeltaData";
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

describe("ranked movers from the retained earnings table", () => {
  const { movers, kpis: margins } = earningsDelta(cp1bEntry());
  it("reads the unit from the sentence under the heading and takes the money rows only", () => {
    if (movers.kind !== "ready") throw new Error("expected movers");
    expect(movers.fallback).toBe(true);
    const [only] = movers.groups;
    expect(movers.groups).toHaveLength(1);
    expect(only?.unit).toBe("US$m");
    // 17 money rows state both figures; the two margin rows and the two split rows are not among them.
    expect(only?.ranked).toHaveLength(17);
    expect(only?.gaps.map((pair) => pair.label)).toEqual(["Maintenance capex", "Growth capex"]);
    expect(only?.gaps[0]?.prior.reason).toBe("no split");
  });
  it("ranks by the size of the change, largest first, and draws the first ten", () => {
    if (movers.kind !== "ready") throw new Error("expected movers");
    const names = movers.groups[0]?.shown.map((pair) => pair.label);
    expect(names).toEqual([
      "Discretionary cash flow", // -1356
      "Revenue", // 1355
      "Gross profit", // 830
      "Issuer-adjusted EBITDA", // 778
      "Operating cash flow", // 670
      "Reported EBITDA", // 665
      "Levered FCF", // 644
      "EBIT", // 608
      "COGS", // 525
      "Net income", // 416
    ]);
  });
  it("uses the stated change where it is a plain number and the exact difference where it is not", () => {
    if (movers.kind !== "ready") throw new Error("expected movers");
    const pairs = movers.groups[0]?.ranked ?? [];
    const of = (label: string) => pairs.find((pair) => pair.label === label)?.change;
    expect(of("Revenue")).toMatchObject({ text: "+1,355", basis: "stated", sign: 1 });
    expect(of("Discretionary cash flow")).toMatchObject({
      text: "−1,356",
      basis: "stated",
      sign: -1,
    });
    expect(of("Cash interest paid, net")).toMatchObject({ text: "−2", basis: "stated" });
    expect(of("Working-capital cash movement")).toMatchObject({ text: "+129", basis: "stated" });
    // "22 reported" is not a plain number: 161 less 139, exact, said to be derived.
    expect(of("Intangible amortization")).toMatchObject({ text: "+22", basis: "derived", sign: 1 });
  });
  it("gives better or worse only for a measure the owner's table knows", () => {
    if (movers.kind !== "ready") throw new Error("expected movers");
    const pairs = movers.groups[0]?.ranked ?? [];
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
    expect(only?.ranked.map((pair) => [pair.label, pair.prior.value, pair.current.value])).toEqual([
      ["Gross margin", 58.3, 58.8],
      ["Reported EBITDA margin", 47.81, 48.02],
    ]);
    expect(only?.ranked.map((pair) => pair.change?.text)).toEqual([
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
  it("is a gap when the handoff has no earnings table at all", () => {
    const empty = earningsDelta(entry("CP-1B", [], []));
    expect(empty.movers.kind).toBe("gap");
    expect(empty.kpis.kind).toBe("gap");
    expect(empty.bridge).toBeNull();
  });
});

describe("pairs from the chart tables", () => {
  it("gives each unit its own group and scale, ranked within the unit", () => {
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
    expect(money?.ranked.map((pair) => pair.label)).toEqual([
      "Revenue",
      "Adjusted EBITDA",
      "Flat measure",
    ]);
    expect(money?.axis).toEqual({ lo: 0, hi: 8000, ticks: [0, 2000, 4000, 6000, 8000] });
    expect(times?.ranked[0]?.change).toMatchObject({ text: "+0.58x", basis: "derived", sign: 1 });
    expect(times?.ranked[0]?.tone).toBe("better");
    expect(times?.axis?.hi).toBeLessThan(8000);
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
    expect(money?.ranked.map((pair) => pair.label)).not.toContain("Net income");
  });
  it("calls a pair whose prior equals its current flat, with no direction", () => {
    const { movers } = earningsDelta(delta(results(MONEY)));
    if (movers.kind !== "ready") throw new Error("expected movers");
    const flat = movers.groups[0]?.ranked.find((pair) => pair.label === "Flat measure");
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
    expect(one?.ranked.map((pair) => [pair.label, pair.prior.value, pair.current.value])).toEqual([
      ["Revenue", 0, 250],
      ["Cash flow", -50, 30],
    ]);
    expect(one?.axis?.lo).toBe(-100);
    expect(one?.ranked[1]?.change?.text).toBe("+80");
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
    const pairs = movers.groups[0]?.ranked ?? [];
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
    expect(movers.groups[0]?.ranked.map((pair) => pair.label)).not.toContain("Odd");
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
  it("is a gap for a table that appears twice", () => {
    expect(earningsDelta(delta(results(MONEY), results(MONEY))).movers.kind).toBe("gap");
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
    expect(figure.groups[0]?.ranked.map((pair) => pair.label)).toEqual(["Small", "Large"]);
    expect(figure.groups[0]?.ranked[0]?.change?.text).toBe("+0.1 percentage points");
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
    expect(bridge(delta(steps(GOOD), steps(GOOD, "Chart data: other")))).toBeNull();
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

describe("EarningsDeltaLead on the retained handoff", () => {
  it("titles the lead from the largest change and says there is no bridge", () => {
    lead(cp1bEntry());
    const tile = screen.getByRole("region", { name: "Ranked movers" });
    expect(
      within(tile).getByRole("heading", {
        name: "Discretionary cash flow moved most: down 1,356",
      }),
    ).toBeVisible();
    expect(within(tile).getByText("No variance bridge in this handoff.")).toBeVisible();
    expect(screen.queryByRole("region", { name: "Variance bridge" })).toBeNull();
  });
  it("draws ten pairs, each strip to one scale: equal changes are equal widths", () => {
    const { container } = lead(cp1bEntry());
    const list = screen.getByRole("list", { name: "Ranked movers, US$m" });
    expect(within(list).getAllByRole("listitem")).toHaveLength(10);
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
  it("prints each change signed, with an arrow and a word, and better or worse only where known", () => {
    lead(cp1bEntry());
    const list = screen.getByRole("list", { name: "Ranked movers, US$m" });
    const row = (name: string) => within(list).getByText(name).closest("li") as HTMLElement;
    expect(within(row("Revenue")).getByText("+1,355")).toBeVisible();
    expect(row("Revenue")).toHaveTextContent("up, better");
    expect(row("Revenue")).toHaveTextContent("▲");
    expect(within(row("Discretionary cash flow")).getByText("−1,356")).toBeVisible();
    expect(row("Discretionary cash flow")).toHaveTextContent("down");
    expect(row("Discretionary cash flow")).not.toHaveTextContent(/better|worse/);
    expect(row("Gross profit")).not.toHaveTextContent(/better|worse/);
  });
  it("describes each strip with the figures in its aria-label", () => {
    const { container } = lead(cp1bEntry());
    expect(strip(container, "Revenue").getAttribute("aria-label")).toBe(
      "Revenue, US$m: prior 6,585 (FY2023), current 7,940 (FY2024), up 1,355, better.",
    );
    expect(strip(container, "Discretionary cash flow").getAttribute("aria-label")).toBe(
      "Discretionary cash flow, US$m: prior 1,198 (FY2023), current −158 (FY2024), down 1,356.",
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
  it("says how many more pairs the table view carries, and carries all of them", () => {
    lead(cp1bEntry());
    const tile = screen.getByRole("region", { name: "Ranked movers" });
    expect(
      within(tile).getByText(/7 more pairs in the table view; this figure draws the first 10\./),
    ).toBeVisible();
    const rows = [...tile.querySelectorAll("details tbody tr")].map((row) =>
      [...row.querySelectorAll("td")].map((cell) => cell.textContent),
    );
    expect(rows).toHaveLength(19);
    expect(rows.find((row) => row[0] === "Intangible amortization")).toEqual([
      "Intangible amortization",
      "US$m",
      "FY2023",
      "139",
      "FY2024",
      "161",
      "+22",
      "derived",
    ]);
    expect(rows.find((row) => row[0] === "Maintenance capex")?.[3]).toBe("Not supplied: no split");
  });
  it("draws the margins on a percent axis of their own, with the stated change in points", () => {
    const { container } = lead(cp1bEntry());
    const tile = screen.getByRole("region", { name: "Margins and KPIs" });
    expect(
      within(tile).getByRole("heading", {
        name: "Gross margin up 0.5 percentage points; Reported EBITDA margin up 0.22 percentage points, rounded",
      }),
    ).toBeVisible();
    expect(within(tile).getByText("58.3% → 58.8%")).toBeVisible();
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
  it("draws nothing where the unit is not stated, and says so", () => {
    lead(
      withEdit((source) => {
        for (const one of source.sections)
          one.blocks = one.blocks.filter((block) => block.type !== "text");
      }),
    );
    expect(
      screen.getByText("The handoff does not state the unit of its earnings table."),
    ).toBeVisible();
    expect(screen.queryByRole("list", { name: /Ranked movers/ })).toBeNull();
    expect(screen.getByRole("region", { name: "Margins and KPIs" })).toBeInTheDocument();
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
    expect(axes[0]?.texts.map((text) => text.label)).toEqual(["−5,000", "0", "5,000", "10,000"]);
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
  it("never lets a strip collapse below 220 px", () => {
    const { container } = lead(cp1bEntry());
    const strips = [...container.querySelectorAll("svg")].filter((svg) =>
      svg.getAttribute("viewBox")?.startsWith("0 0 580"),
    );
    expect(strips.length).toBeGreaterThan(10);
    for (const svg of strips) expect(svg.getAttribute("class")).toContain("min-w-[220px]");
  });
});

describe("EarningsDeltaLead on chart tables", () => {
  it("draws each unit on its own scale and labels a derived change", () => {
    const { container } = lead(
      delta(
        results([
          ...MONEY,
          ["Interest coverage", "FY2023", "2.71", "FY2024", "3.29", "x", "Cash."],
        ]),
      ),
    );
    const money = screen.getByRole("list", { name: "Ranked movers, US$m" });
    const times = screen.getByRole("list", { name: "Ranked movers, x" });
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
    expect(
      screen.getByRole("heading", { name: /moved most|each unit on its own scale/ }),
    ).toBeVisible();
  });
  it("shows a flat pair as unchanged, with no arrow", () => {
    lead(delta(results(MONEY)));
    const row = within(screen.getByRole("list", { name: "Ranked movers, US$m" }))
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
    expect(screen.getByText("No variance bridge in this handoff.")).toBeVisible();
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
    expect(screen.getByText("The handoff has no table of margin and KPI changes.")).toBeVisible();
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
  it("shows the module's own basis notes, and drops one that names a source", () => {
    lead(
      delta(
        results([
          ["Revenue", "FY2023", "100", "FY2024", "120", "US$m", "Reported, unaudited."],
          ["Debt", "FY2023", "50", "FY2024", "60", "US$m", "From tdg-20240930.htm.jsonl, page 45."],
        ]),
      ),
    );
    const tile = screen.getByRole("region", { name: "Ranked movers" });
    expect(within(tile).getByText("Reported, unaudited.")).toBeVisible();
    expect(within(tile).queryByText(/jsonl/)).toBeNull();
  });
});

describe("EarningsDeltaLead with a variance bridge", () => {
  const GOOD = [
    ["Revenue FY2023", "100", "US$m", "Reported."],
    ["Organic growth", "20", "US$m", "Reported."],
    ["Disposals", "-5", "US$m", "Reported."],
    ["Revenue FY2024", "115", "US$m", "Reported."],
  ];
  it("draws the waterfall first, each step a bar from the running total", () => {
    const { container } = lead(delta(steps(GOOD), results(MONEY)));
    const tile = screen.getByRole("region", { name: "Variance bridge" });
    expect(
      within(tile).getByRole("heading", {
        name: "From Revenue FY2023 100 to Revenue FY2024 115, in 2 steps",
      }),
    ).toBeVisible();
    const bar = (label: string) =>
      container.querySelector(`svg[data-step="${label}"] rect`) as SVGRectElement;
    // Axis 90 to 120 over 492: 20 is 20/30 of it, and a step of -5 spans 5/30 of it.
    expect(Number(bar("Organic growth").getAttribute("width"))).toBeCloseTo((20 / 30) * 492, 6);
    expect(Number(bar("Disposals").getAttribute("width"))).toBeCloseTo((5 / 30) * 492, 6);
    expect(bar("Organic growth").getAttribute("data-from")).toBe("100");
    expect(bar("Organic growth").getAttribute("data-to")).toBe("120");
    expect(bar("Disposals").getAttribute("data-from")).toBe("120");
    expect(bar("Disposals").getAttribute("data-to")).toBe("115");
    // Totals start at the axis start, which the page says is not zero.
    expect(bar("Revenue FY2024").getAttribute("data-from")).toBe("90");
    expect(within(tile).getByText(/The axis starts at 90, not zero/)).toBeVisible();
    expect(
      within(within(tile).getByRole("list", { name: "Variance bridge steps" })).getByText("−5"),
    ).toBeVisible();
    expect(screen.queryByText("No variance bridge in this handoff.")).toBeNull();
  });
  it("carries the running total, labelled derived, in the table view", () => {
    lead(delta(steps(GOOD)));
    const tile = screen.getByRole("region", { name: "Variance bridge" });
    const head = [...tile.querySelectorAll("thead th")].map((cell) => cell.textContent);
    expect(head).toEqual(["Step", "Role", "Amount (US$m)", "Running total (derived)"]);
    const rows = [...tile.querySelectorAll("tbody tr")].map((row) =>
      [...row.querySelectorAll("td")].map((cell) => cell.textContent),
    );
    expect(rows[2]).toEqual(["Disposals", "Change", "−5", "115"]);
  });
  it("does not draw a bridge that does not add up, and says so on the bridge's own tile", () => {
    lead(
      delta(steps([...GOOD.slice(0, 3), ["Revenue FY2024", "116", "US$m", "x"]]), results(MONEY)),
    );
    const own = screen.getByRole("region", { name: "Variance bridge" });
    expect(
      within(own).getByText(
        "The variance bridge in this handoff does not add up, so it is not drawn as a bridge.",
      ),
    ).toBeVisible();
    expect(within(own).queryByRole("list")).toBeNull();
    const movers = screen.getByRole("region", { name: "Ranked movers" });
    expect(within(movers).queryByText(/does not add up/)).toBeNull();
    expect(within(movers).getByRole("list", { name: "Ranked movers, US$m" })).toBeInTheDocument();
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
        "The variance bridge is not drawn: Disposals is not supplied (not split).",
      ),
    ).toBeVisible();
    expect(screen.queryByText(/does not add up/)).toBeNull();
  });
});

describe("rows with no stated unit, screened text and titles", () => {
  const NO_UNIT_ROWS = [
    ["Revenue", "FY2023", "100", "FY2024", "150", "", "x"],
    ["Customers", "FY2023", "100000", "FY2024", "100050", "", "x"],
  ];
  it("never puts two rows with no stated unit on one scale", () => {
    const { movers } = earningsDelta(delta(results(NO_UNIT_ROWS)));
    if (movers.kind !== "ready") throw new Error("expected movers");
    expect(movers.groups).toHaveLength(2);
    expect(movers.groups.map((one) => one.unitNotStated)).toEqual([true, true]);
    expect(movers.groups.map((one) => one.ranked.map((pair) => pair.label))).toEqual([
      ["Revenue"],
      ["Customers"],
    ]);
    expect(movers.groups[0]?.axis?.hi).toBe(150);
    expect(movers.groups[1]?.axis?.hi).toBe(150000);
  });
  it("keeps a stated unit's rows together beside rows with none", () => {
    const { movers } = earningsDelta(delta(results([...MONEY.slice(0, 2), ...NO_UNIT_ROWS])));
    if (movers.kind !== "ready") throw new Error("expected movers");
    expect(movers.groups.map((one) => [one.unit, one.ranked.length])).toEqual([
      ["US$m", 2],
      ["", 1],
      ["", 1],
    ]);
  });
  it("draws each such row on its own labelled scale", () => {
    lead(delta(results(NO_UNIT_ROWS)));
    expect(screen.getAllByText("unit not stated")).toHaveLength(2);
    expect(screen.getAllByRole("list", { name: "Ranked movers, unit not stated" })).toHaveLength(2);
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
    const tile = screen.getByRole("region", { name: "Ranked movers" });
    const rows = [...tile.querySelectorAll("details tbody tr")].map((row) =>
      [...row.querySelectorAll("td")].map((cell) => cell.textContent),
    );
    expect(rows.find((row) => row[0] === "Revenue")?.[3]).toBe("Detail is in Evidence.");
    // The note is not drawn at all, not repeated as a sentence of its own.
    const notes = [...tile.querySelectorAll("ul li")].map((item) => item.textContent);
    expect(notes).toEqual([
      "No variance bridge in this handoff.",
      "Pairs that state words instead of a figure are in the table view only.",
    ]);
  });
  it("does not name one winner when the largest moves are tied, and marks a derived title", () => {
    lead(
      delta(
        results([
          ["Revenue", "FY2023", "100", "FY2024", "150", "US$m", "x"],
          ["Net debt", "FY2023", "200", "FY2024", "250", "US$m", "x"],
        ]),
      ),
    );
    expect(
      screen.getByRole("heading", { name: "Largest moves are tied at 50 (derived)" }),
    ).toBeVisible();
    cleanup();
    lead(
      delta(
        results([
          ["Revenue", "FY2023", "100", "FY2024", "150", "US$m", "x"],
          ["Net debt", "FY2023", "200", "FY2024", "230", "US$m", "x"],
        ]),
      ),
    );
    expect(
      screen.getByRole("heading", { name: "Revenue moved most: up 50 (derived)" }),
    ).toBeVisible();
  });
  it("marks a derived change in the margins title, and not a stated one", () => {
    lead(delta(kpis([["Gross margin", "FY2023", "58.3", "FY2024", "58.8", "%", "x"]])));
    expect(
      screen.getByRole("heading", { name: "Gross margin up 0.5 percentage points (derived)" }),
    ).toBeVisible();
    cleanup();
    lead(cp1bEntry());
    const title = screen.getByRole("heading", { name: /^Gross margin up 0\.5 percentage points;/ });
    expect(title).not.toHaveTextContent(/derived/);
  });
});

describe("EarningsDeltaLead gaps", () => {
  it("draws the two designed gaps for a handoff with no tables", () => {
    lead(entry("CP-1B", [], []));
    expect(
      screen.getByText("The handoff has no table of prior and current results."),
    ).toBeVisible();
    expect(screen.getByText("The handoff has no table of margin and KPI changes.")).toBeVisible();
    expect(screen.queryByRole("img")).toBeNull();
  });
});
