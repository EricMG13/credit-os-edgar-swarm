import { expect, it } from "vitest";
import type { OutputEntry } from "../publishedReport";
import type { ReportView } from "../reportView";
import {
  cellsOf,
  endOf,
  fiscalYear,
  forecastMeasure,
  extremeOf,
  fundingGap,
  measureRows,
  maturitySchedule,
  modelLimitations,
  periodList,
  type MeasureCell,
} from "./forecastData";

const value = (exact: string, display = exact) => ({ status: "value", exact, display });
const missing = (reason: string) => ({ status: "unavailable", display: "n.a.", reason });
const NET = "Net leverage (net debt / Adj EBITDA)";

type Column = { label: string; group: string; start?: string; end?: string };
function model(columns: Column[], rows: Record<string, unknown[]>, other?: unknown) {
  return {
    cashflow: {
      units: "USD millions",
      columns,
      rows: Object.entries(rows).map(([label, cells]) => ({
        label,
        band: "Leverage",
        kind: "multiple",
        total: false,
        cells,
      })),
      ...(other ? { other } : {}),
    },
  };
}
const cols = (group: string, labels: string[]) => labels.map((label) => ({ label, group }));

it("reads one case's published cells by period, as displayed, with missing kept apart from zero", () => {
  const measure = forecastMeasure(
    model(
      [{ label: "FY2024", group: "Fiscal year" }, ...cols("Base case", ["FY2025E", "FY2026E"])],
      { [NET]: [value("5.5", "5.50x"), value("0", "0.00x"), missing("EBITDA not positive")] },
    ),
    /^Net leverage\b/,
  );
  expect(measure?.label).toBe(NET);
  expect(measure?.periods).toEqual(["FY2025E", "FY2026E"]);
  const base = measure?.cases[0];
  expect(base?.name).toBe("Base case");
  expect(base?.cells.get("FY2025E")).toMatchObject({ display: "0.00x", value: 0 });
  expect(base?.cells.get("FY2026E")).toMatchObject({
    display: "n.a.",
    value: null,
    reason: "EBITDA not positive",
  });
  expect(measure?.actual).toMatchObject({ period: "FY2024", display: "5.50x", value: 5.5 });
});

it("keeps a period only one case publishes on the axis, absent from the other case", () => {
  const measure = forecastMeasure(
    model([...cols("Base case", ["FY2025E", "FY2026E"]), ...cols("Downside case", ["FY2025E"])], {
      [NET]: [value("1"), value("2"), value("3")],
    }),
    /^Net leverage\b/,
  );
  expect(measure?.periods).toEqual(["FY2025E", "FY2026E"]);
  expect(measure?.compared).toBe(true);
  const downside = measure?.cases.find(({ group }) => group === "Downside case");
  expect(downside?.cells.has("FY2026E")).toBe(false);
  expect(measure?.notice).toBeNull();
});

it("draws no comparison of cases with no period in common and says so", () => {
  const measure = forecastMeasure(
    model([...cols("Base case", ["FY2025E"]), ...cols("Downside case", ["FY2026E"])], {
      [NET]: [value("1"), value("2")],
    }),
    /^Net leverage\b/,
  );
  expect(measure?.compared).toBe(false);
  expect(measure?.notice).toBe(
    "The cases publish no period in common, so no scenario comparison is drawn.",
  );
});

it("reads the other grid's cases and names two same-label groups apart", () => {
  const other = {
    columns: [{ label: "FY2025E", group: "Downside (CP-2G drivers)" }],
    rows: [{ label: NET, band: "", kind: "", total: false, cells: [value("4")] }],
  };
  const measure = forecastMeasure(
    model(cols("Base case", ["FY2025E"]), { [NET]: [value("1")] }, other),
    /^Net leverage\b/,
  );
  expect(measure?.cases.map(({ name }) => name)).toEqual(["Base case", "Downside drivers"]);
});

it("returns nothing when the row is absent or repeated", () => {
  const columns = cols("Base case", ["FY2025E"]);
  expect(forecastMeasure(model(columns, { Revenue: [value("1")] }), /^Net leverage\b/)).toBeNull();
  const repeated = model(columns, { [NET]: [value("1")] });
  repeated.cashflow.rows.push(...repeated.cashflow.rows);
  expect(forecastMeasure(repeated, /^Net leverage\b/)).toBeNull();
});

const cell = (period: string, value: number | null, display = String(value)): MeasureCell => ({
  period,
  start: "",
  end: "",
  display,
  value,
  reason: value === null ? "not calculated" : "",
});

it("names the highest and lowest published years as a selection, with ties and missing years", () => {
  const cells = [cell("FY2025E", 6), cell("FY2026E", null), cell("FY2027E", 6), cell("FY2029E", 2)];
  const highest = extremeOf(cells, "highest");
  expect(highest?.cells.map(({ period }) => period)).toEqual(["FY2025E", "FY2027E"]);
  expect(highest?.notCalculated).toEqual(["FY2026E"]);
  expect(highest?.notPublished).toEqual(["FY2028E"]);
  expect(extremeOf(cells, "lowest")?.cells.map(({ period }) => period)).toEqual(["FY2029E"]);
  // One figure is not a highest year.
  expect(extremeOf([cell("FY2025E", 5), cell("FY2026E", null)], "highest")).toBeNull();
  expect(endOf(cells)?.period).toBe("FY2029E");
  expect(endOf([cell("FY2026E", null), cell("FY2025E", 1)])?.value).toBeNull();
  expect(periodList(["FY2025E", "FY2027E"])).toBe("FY2025E and FY2027E");
  expect(periodList(["A", "B", "C"])).toBe("A, B and C");
});

it("reads a fiscal year from actual and forecast labels only", () => {
  expect(fiscalYear("FY2024")).toBe(2024);
  expect(fiscalYear("FY2027E")).toBe(2027);
  expect(fiscalYear("LTM")).toBeNull();
  expect(fiscalYear("2026")).toBeNull();
});

it("gives a case without a row for the measure no cells, never another case's", () => {
  const other = {
    columns: [{ label: "FY2025E", group: "Downside (CP-2G drivers)" }],
    rows: [{ label: "Revenue", band: "", kind: "", total: false, cells: [value("9")] }],
  };
  const measure = forecastMeasure(
    model(cols("Base case", ["FY2025E"]), { [NET]: [value("1")] }, other),
    /^Net leverage\b/,
  );
  if (!measure) throw new Error("no measure");
  expect(cellsOf(measure, "Downside (CP-2G drivers)")).toEqual([]);
  expect(cellsOf(measure, "Base case").map(({ value: v }) => v)).toEqual([1]);
});

it("keeps a period whose dates differ between cases out of every case's cells", () => {
  const columns = [
    { label: "FY2025E", group: "Base case", start: "2024-10-01", end: "2025-09-30" },
    { label: "FY2026E", group: "Base case", start: "2025-10-01", end: "2026-09-30" },
    { label: "FY2025E", group: "Downside case", start: "2024-10-01", end: "2025-09-30" },
    { label: "FY2026E", group: "Downside case", start: "2025-04-01", end: "2026-09-30" },
  ];
  const measure = forecastMeasure(
    model(columns, { [NET]: [value("1"), value("2"), value("3"), value("4")] }),
    /^Net leverage\b/,
  );
  expect(measure?.periods).toEqual(["FY2025E"]);
  expect(measure?.cases.map(({ cells }) => [...cells.keys()])).toEqual([["FY2025E"], ["FY2025E"]]);
  // Each case keeps its own year for what the page says about that case alone.
  if (!measure) throw new Error("no measure");
  expect(cellsOf(measure, "Base case").map(({ period }) => period)).toEqual(["FY2025E", "FY2026E"]);
  expect(measure.notice).toMatch(/FY2026E \(recorded start and end dates do not match/);
});

it("reads the row the stated basis names when the model publishes two, and names both", () => {
  const measure = forecastMeasure(
    model(cols("Base case", ["FY2025E"]), {
      [NET]: [value("1.2")],
      "Net leverage (covenant basis)": [value("3.4")],
    }),
    /^Net leverage\b/,
    /net debt \/ Adj EBITDA/,
  );
  expect(measure?.label).toBe(NET);
  expect(measure?.others).toEqual(["Net leverage (covenant basis)"]);
  expect(cellsOf(measure ?? never(), "Base case")[0]?.value).toBe(1.2);
  const both = model(cols("Base case", ["FY2025E"]), {
    "Net leverage (one)": [value("1")],
    "Net leverage (two)": [value("2")],
  });
  expect(forecastMeasure(both, /^Net leverage\b/, /net debt \/ Adj EBITDA/)).toBeNull();
  expect(measureRows(both, /^Net leverage\b/)).toEqual([
    "Net leverage (one)",
    "Net leverage (two)",
  ]);
});

function never(): never {
  throw new Error("unreachable");
}

const handoff = (module: string, sections: unknown[]) =>
  ({
    selected: true,
    output: {
      id: module,
      sha256: "c".repeat(64),
      module,
      label: "",
      href: "",
      state: { established: true, declared: null },
    },
    sections,
  }) as unknown as OutputEntry;
const view = (entries: OutputEntry[]) =>
  ({
    catalogue: undefined,
    lead: undefined,
    entries,
    modules: [],
    models: [],
  }) as unknown as ReportView;
const tableSection = (heading: string, line: number, headers: string[], rows: string[][]) => ({
  heading,
  level: 3,
  line,
  blocks: [
    {
      type: "table",
      line: line + 2,
      headers,
      rows: rows.map((cells, at) => ({ line: line + 4 + at, cells })),
    },
  ],
});

it("reads every stated column of the liquidity module's funding gap, with its unit and line", () => {
  const liquidity = handoff("CP-2D", [
    tableSection(
      "T2E.5 Funding gap",
      40,
      ["Line", "Base", "Downside", "Unit", "Source"],
      [
        ["Horizon", "2026-03-31", "2026-03-31", "", "T2E.3"],
        ["Funding gap", "0", "250", "USD millions", "T2E.5.r07"],
      ],
    ),
  ]);
  const [gap] = fundingGap(view([liquidity])).gaps;
  expect(gap).toMatchObject({
    module: "CP-2D",
    name: "Liquidity",
    label: "Funding gap",
    unit: "USD millions",
    horizon: "2026-03-31",
    line: 45,
  });
  // Every stated column, with its header: a zero is a figure, never dropped for the next one.
  expect(gap?.figures).toEqual([
    { header: "Base", text: "0", value: 0 },
    { header: "Downside", text: "250", value: 250 },
  ]);
});

it("reads the refinancing module's repeat as written: a Value column, no unit, ids dropped", () => {
  // The real shape (owners/cp3c.py _single): Line | Value, with no unit column.
  const refinancing = handoff("CP-3C", [
    tableSection(
      "T3D.2 Refinancing burden",
      10,
      ["Line", "Value"],
      [
        ["CP-2D funding gap at its horizon end", "200"],
        ["CP-2D horizon (analyst judgment)", "CP-2D horizon of 24 months (T2E.3.r03)"],
      ],
    ),
  ]);
  const [gap] = fundingGap(view([refinancing])).gaps;
  expect(gap).toMatchObject({
    module: "CP-3C",
    label: "Liquidity funding gap at its horizon end",
    unit: null,
    horizon: "Liquidity horizon of 24 months",
    figures: [{ header: "Value", text: "200", value: 200 }],
  });
});

it("draws an empty funding-gap cell as stated nowhere, and shows both modules' figures", () => {
  const liquidity = handoff("CP-2D", [
    tableSection("T2E.5 Funding gap", 40, ["Line", "Value (USD millions)"], [["Funding gap", "—"]]),
  ]);
  const refinancing = handoff("CP-3C", [
    tableSection(
      "T3D.2 Refinancing burden",
      10,
      ["Line", "Value"],
      [["CP-2D funding gap at its horizon end", "180"]],
    ),
  ]);
  const { gaps } = fundingGap(view([liquidity, refinancing]));
  expect(gaps.map(({ module, figures }) => [module, figures])).toEqual([
    ["CP-2D", [{ header: "", text: "Not stated in the row", value: null }]],
    ["CP-3C", [{ header: "Value", text: "180", value: 180 }]],
  ]);
});

it("says what it looked for when neither module states a funding gap", () => {
  const liquidity = handoff("CP-2D", [
    tableSection("T2E.5 Liquidity", 40, ["Line", "Value"], [["Peak funding gap", "90"]]),
  ]);
  expect(fundingGap(view([liquidity])).looked).toEqual([
    "This page found no row named Funding gap in Liquidity's handoff.",
    "Refinancing & LME did not run in this run.",
  ]);
  expect(fundingGap(view([])).looked).toEqual([
    "Liquidity did not run in this run.",
    "Refinancing & LME did not run in this run.",
  ]);
});

it("lists the forward model's limitations whole, each once, selecting none", () => {
  // The real list's shape (owners/cp2g.py _FIXED_LIMITATIONS): one bullet per item.
  const forward = handoff("CP-2G", [
    { heading: "Findings", level: 2, line: 1, blocks: [] },
    {
      heading: "Limitations",
      level: 3,
      line: 30,
      blocks: [
        {
          type: "text",
          line: 32,
          end: 35,
          text: [
            "- No new borrowing, refinancing or covenant waiver is modelled: debt moves only by the analyst's repayments, and cash is not floored, so a negative cash balance is an unfunded requirement, not a forecast of events.",
            "- The break tests reuse CP-2A's levels, which are watch levels and definitions, not covenant tests; covenant compliance belongs to CP-4.",
            "- Debt maturities and refinancing feasibility are not modelled; the maturity wall and funding",
            "  gap belong to CP-2D and CP-3C",
          ].join("\n"),
        },
      ],
    },
  ]);
  expect(modelLimitations(forward)).toEqual([
    {
      line: 32,
      text: "No new borrowing, refinancing or covenant waiver is modelled: debt moves only by the analyst's repayments, and cash is not floored, so a negative cash balance is an unfunded requirement, not a forecast of events.",
    },
    {
      line: 33,
      text: "The break tests reuse Downside's levels, which are watch levels and definitions, not covenant tests; covenant compliance belongs to Legal & covenants.",
    },
    {
      line: 34,
      text: "Debt maturities and refinancing feasibility are not modelled; the maturity wall and funding gap belong to Liquidity and Refinancing & LME",
    },
  ]);
});

it("ties on the figures as the reader sees them", () => {
  const shown = (period: string, value: number, display: string): MeasureCell => ({
    period,
    start: "",
    end: "",
    display,
    value,
    reason: "",
  });
  const tied = extremeOf(
    [
      shown("FY2025E", 1.234, "1.23x"),
      shown("FY2026E", 1.2349, "1.23x"),
      shown("FY2027E", 1, "1.00x"),
    ],
    "highest",
  );
  expect(tied?.cells.map(({ period }) => period)).toEqual(["FY2025E", "FY2026E"]);
});

it("reads the maturity schedule's rows only: a year with no row is neither drawn nor listed", () => {
  const foundation = {
    ...handoff("CP-1", [
      { heading: "Findings", level: 2, line: 1, blocks: [] },
      tableSection(
        "Chart data: debt maturities",
        41,
        ["Period", "Debt maturing", "Reporting unit", "Basis and limitation"],
        [
          ["FY2026", "500", "US$m", "Synthetic."],
          ["FY2028", "Not calculated: schedule incomplete", "US$m", "Synthetic."],
          ["FY2029", "1,250", "US$m", "Synthetic."],
        ],
      ),
    ]),
  };
  foundation.output = {
    ...foundation.output,
    charts: [{ title: "Debt maturities", table: 43, columns: [1], unit: "US$m" }],
  };
  const schedule = maturitySchedule(view([foundation]));
  expect(schedule.years.map(({ label, cell }) => [label, cell?.text])).toEqual([
    ["FY2026", "500"],
    ["FY2028", "Not calculated: schedule incomplete"],
    ["FY2029", "1,250"],
  ]);
});
