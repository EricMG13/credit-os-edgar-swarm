import { expect, it } from "vitest";
import {
  driverTable,
  endOf,
  fiscalYear,
  forecastMeasure,
  peakOf,
  troughOf,
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

it("selects the peak, trough and end among published values, the earliest on a tie", () => {
  const cells = [cell("FY2025E", 2), cell("FY2026E", 3), cell("FY2027E", 3), cell("FY2028E", 1)];
  expect(peakOf(cells)?.period).toBe("FY2026E");
  expect(troughOf(cells)?.period).toBe("FY2028E");
  expect(endOf(cells)?.period).toBe("FY2028E");
  expect(peakOf([cell("FY2025E", null)])).toBeNull();
  expect(endOf([cell("FY2026E", null), cell("FY2025E", 1)])?.value).toBeNull();
});

it("reads a fiscal year from actual and forecast labels only", () => {
  expect(fiscalYear("FY2024")).toBe(2024);
  expect(fiscalYear("FY2027E")).toBe(2027);
  expect(fiscalYear("LTM")).toBeNull();
  expect(fiscalYear("2026")).toBeNull();
});

it("tabulates drivers by case, marks a value that differs from base and never assumes base", () => {
  const table = driverTable({
    years: [{ year: 2025 }, { year: 2026 }],
    base_drivers: {
      revenue_growth: { values: ["0.12", "0.12"] },
      dividends: { values: ["4348", "2038"] },
    },
    upside_drivers: { revenue_growth: { values: ["0.162", "0.162"] } },
    downside_drivers: { revenue_growth: { values: ["0.12", "0.12"] } },
    downside_shock: { ebitda_decline: "0.2", rate_increase: "0.0184" },
  });
  expect(table.years).toEqual(["2025", "2026"]);
  expect(table.cases.map(({ name }) => name)).toEqual([
    "Base case",
    "Upside case",
    "Downside drivers",
  ]);
  const growth = table.rows.find(({ key }) => key === "revenue_growth");
  expect(growth?.cells.map(({ text, differs }) => [text, differs])).toEqual([
    ["12.00% each year", false],
    ["16.20% each year", true],
    ["12.00% each year", false],
  ]);
  const dividends = table.rows.find(({ key }) => key === "dividends");
  expect(dividends?.cells.map(({ text, stated }) => [text, stated])).toEqual([
    ["4348 · 2038", true],
    ["Not stated", false],
    ["Not stated", false],
  ]);
  const shock = table.rows.find(({ key }) => key === "ebitda_decline");
  expect(shock?.cells.map(({ text }) => text)).toEqual(["Not stated", "Not stated", "20.00%"]);
  expect(shock?.cells[2]?.differs).toBe(true);
});
