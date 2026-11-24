import { moduleName } from "../api";
import { forecastCaseNames, gridOf, type Grid } from "../visuals/LegacyForecast";
import {
  analyzeScenarioPeriods,
  isDatedForecastPeriod,
  scenarioComparisonNotice,
} from "../visuals/scenarioPeriods";
import { amount, items, record, word } from "../visuals/visualData";
import type { ReportView } from "../reportView";
import { figureSource, unitOf, type Cell } from "./overview/figureData";
import { headroomTests } from "./overview/stressData";
import { wallSlots } from "./overview/structureData";

/** One published cell of a forecast measure, as the model wrote it. */
export type MeasureCell = {
  period: string;
  start: string;
  end: string;
  /** The cell's display text, word for word. */
  display: string;
  /** The cell's exact value when its status is a value; null otherwise (never zero). */
  value: number | null;
  reason: string;
};

export type MeasureCase = { group: string; name: string; cells: Map<string, MeasureCell> };

const FISCAL = /^FY(\d{4})E?$/u;

/** The fiscal year of an actual (`FY2024`) or forecast (`FY2025E`) column label. */
export function fiscalYear(label: string) {
  const year = FISCAL.exec(label)?.[1];
  return year ? Number(year) : null;
}

function measureCell(
  column: Grid["columns"][number],
  raw: Record<string, unknown> | undefined,
): MeasureCell {
  const status = word(raw?.status);
  return {
    period: column.label,
    start: column.start,
    end: column.end,
    display: word(raw?.display),
    value: status === "value" ? amount(word(raw?.exact)) : null,
    reason: word(raw?.reason),
  };
}

function singleRow(grid: Grid, pattern: RegExp) {
  const rows = grid.rows.filter((row) => pattern.test(row.label));
  return rows.length === 1 ? rows[0] : undefined;
}

const BASE = "Base case";
const byBaseFirst = (a: string, b: string) => Number(b === BASE) - Number(a === BASE);

/**
 * One measure of the published model, by case: the cells of the one row whose label matches
 * `pattern` in each forecast column of the main grid and the `other` grid. Periods go through the
 * same eligibility as the cash proxy comparison (`analyzeScenarioPeriods`): a period a case does
 * not publish is absent from that case, never filled. Null when no grid has exactly one such row.
 */
export function forecastMeasure(model: unknown, pattern: RegExp) {
  const cashflow = record(record(model).cashflow);
  const grids = [gridOf(cashflow), gridOf(cashflow.other)].flatMap((grid) => (grid ? [grid] : []));
  const names = forecastCaseNames(cashflow);
  const read = grids.flatMap((grid) => {
    const row = singleRow(grid, pattern);
    return row ? [{ grid, row }] : [];
  });
  const [first] = read;
  if (!first) return null;
  const observations = read.flatMap(({ grid, row }) =>
    grid.columns.flatMap((column, at) =>
      isDatedForecastPeriod(column.label)
        ? [{ ...measureCell(column, row.cells[at]), group: column.group }]
        : [],
    ),
  );
  const analysis = analyzeScenarioPeriods(observations);
  const groups = [...new Set(observations.map(({ group }) => group))].sort(byBaseFirst);
  // With several cases, only a period kept for the comparison is drawn for the cases that keep
  // it: a period left out (dates that do not match, a duplicate) is in no case's cells.
  const kept = new Set(
    analysis.periods.flatMap(({ period, groups: keeping }) =>
      keeping.map((group) => `${period}\0${group}`),
    ),
  );
  const several = new Set(observations.map(({ group }) => group)).size > 1;
  const cases: MeasureCase[] = groups.map((group) => ({
    group,
    name: names.get(group) ?? group,
    cells: new Map(
      analysis.uniqueObservations
        .filter(
          (observation) =>
            observation.group === group &&
            (!several || kept.has(`${observation.period}\0${group}`)),
        )
        .map(({ period, start, end, display, value, reason }) => [
          period,
          { period, start, end, display, value, reason },
        ]),
    ),
  }));
  const single = cases.length === 1 ? cases[0] : undefined;
  const periods = single
    ? [...single.cells.keys()].sort()
    : analysis.periods.map(({ period }) => period);
  // The latest actual fiscal year with a value, drawn as the start every case shares.
  const actual =
    first.grid.columns
      .flatMap((column, at) =>
        /^FY\d{4}$/u.test(column.label) ? [measureCell(column, first.row.cells[at])] : [],
      )
      .filter(({ value }) => value !== null)
      .sort((a, b) => a.period.localeCompare(b.period))
      .at(-1) ?? null;
  return {
    label: first.row.label,
    cases,
    periods,
    actual,
    compared: !analysis.noSharedPeriod,
    notice: scenarioComparisonNotice(analysis),
  };
}

export type Measure = NonNullable<ReturnType<typeof forecastMeasure>>;

/** The case's cells in period order; none for a case the measure has no row for. Without a
 * selected case, the measure's first case. */
export function cellsOf(measure: Measure, group: string | undefined) {
  const found =
    group === undefined ? measure.cases[0] : measure.cases.find((item) => item.group === group);
  return found ? [...found.cells.values()].sort((a, b) => a.period.localeCompare(b.period)) : [];
}

function pick(cells: MeasureCell[], better: (a: number, b: number) => boolean) {
  let chosen: MeasureCell | null = null;
  for (const cell of cells)
    if (cell.value !== null && (chosen?.value == null || better(cell.value, chosen.value)))
      chosen = cell;
  return chosen;
}

/** The largest published value, the earliest period on a tie; null when none is a value. */
export const peakOf = (cells: MeasureCell[]) => pick(cells, (a, b) => a > b);
/** The smallest published value, the earliest period on a tie. */
export const troughOf = (cells: MeasureCell[]) => pick(cells, (a, b) => a < b);
/** The last period's cell, whatever its state. */
export const endOf = (cells: MeasureCell[]) =>
  [...cells].sort((a, b) => a.period.localeCompare(b.period)).at(-1) ?? null;

/** The model's earnings basis as its grid names it: the Adj EBITDA row label. */
export function earningsBasis(model: unknown) {
  const grid = gridOf(record(record(model).cashflow));
  return grid?.rows.find((row) => /^Adj EBITDA\b/u.test(row.label))?.label ?? null;
}

export type Limit = { label: string; value: number; text: string; direction: string };

/** Leverage limits as Legal & covenants publishes them: tests in x whose label names leverage. */
export function leverageLimits(view: ReportView) {
  const name = moduleName("CP-4");
  const source = figureSource(view, "CP-4", "Covenant headroom", name);
  if (source.state === "gap") return { limits: [] as Limit[], reason: source.reason, source };
  const tests = headroomTests(source.table, source.descriptor) ?? [];
  const limits = tests.flatMap((test): Limit[] =>
    /leverage/iu.test(test.label) && test.unit.trim() === "x" && test.threshold.value !== null
      ? [
          {
            label: test.label,
            value: test.threshold.value,
            text: test.threshold.text,
            direction: test.direction,
          },
        ]
      : [],
  );
  return {
    limits,
    reason: limits.length ? null : `${name} states no leverage limit.`,
    source,
  };
}

export type WallYear = { year: number; label: string; cell: Cell | null };

/** The maturity schedule by fiscal year, and the largest dated amount as the wall. */
export function maturityWall(view: ReportView) {
  const name = moduleName("CP-1");
  const source = figureSource(view, "CP-1", "Debt maturities", name);
  if (source.state === "gap") return { years: [] as WallYear[], reason: source.reason, source };
  const unit = unitOf(source.descriptor);
  const slots = wallSlots(source.table, source.descriptor, unit);
  if (!slots)
    return {
      years: [] as WallYear[],
      reason: "The maturity schedule states no amount for any period.",
      source,
    };
  const years = slots.dated.flatMap((slot): WallYear[] => {
    const year = /^FY\d{4}$/u.test(slot.label) ? fiscalYear(slot.label) : null;
    return year === null ? [] : [{ year, label: slot.label, cell: slot.cell }];
  });
  const wall = years.reduce<WallYear | null>(
    (most, slot) =>
      slot.cell?.value != null && (most?.cell?.value == null || slot.cell.value > most.cell.value)
        ? slot
        : most,
    null,
  );
  const offAxis = [...slots.dated, ...slots.undated]
    .filter((slot) => !/^FY\d{4}$/u.test(slot.label))
    .map((slot) => slot.label);
  return {
    years,
    wall,
    unit,
    offAxis,
    reason: years.length ? null : "The maturity schedule is not by fiscal year.",
    source,
  };
}

const DRIVER_NAMES: Record<string, string> = {
  revenue_growth: "Revenue growth",
  ebitda_margin: "EBITDA margin",
  capex_pct_revenue: "Capital expenditure, share of revenue",
  tax_wc_pct_revenue: "Tax and working capital, share of revenue",
  interest_rate: "Interest rate",
  dividends: "Dividends",
  debt_repayment: "Debt repayment",
  ebitda_decline: "Downside EBITDA decline",
  rate_increase: "Downside cash-interest increase",
};
const FRACTIONS = new Set([
  "revenue_growth",
  "ebitda_margin",
  "capex_pct_revenue",
  "tax_wc_pct_revenue",
  "interest_rate",
  "ebitda_decline",
  "rate_increase",
]);
const DRIVER_CASES = [
  ["base_drivers", "Base case"],
  ["upside_drivers", "Upside case"],
  ["downside_drivers", "Downside drivers"],
] as const;

/** A recorded fraction as a percentage with two decimals; anything else as recorded. */
function shown(key: string, text: string) {
  if (!FRACTIONS.has(key) || !/^-?\d+(?:\.\d+)?$/u.test(text)) return text;
  return `${(Number(text) * 100).toFixed(2)}%`;
}

function recordedValues(raw: unknown): string[] | null {
  if (raw === undefined || raw === null) return null;
  if (typeof raw === "string" || typeof raw === "number") return [String(raw)];
  const values = record(raw).values;
  return Array.isArray(values) ? values.map((item) => word(item) || String(item)) : null;
}

export type DriverCell = { text: string; stated: boolean; differs: boolean };

/**
 * The forecast inputs' drivers as a table: one row per driver any case states, one column per
 * case group the inputs carry, and the downside shock as two rows of the downside column. A
 * driver a case does not state reads "Not stated": no inheritance from base is inferred. A cell
 * differs when it is stated and its recorded values are not the base cell's.
 */
export function driverTable(document: Record<string, unknown>) {
  const years = items(document.years).map((entry) => {
    const year = record(entry).year;
    return typeof year === "number" ? String(year) : word(year);
  });
  const shock = record(document.downside_shock);
  const hasShock = Object.keys(shock).length > 0;
  const cases = DRIVER_CASES.filter(
    ([key], at) =>
      at === 0 ||
      Object.keys(record(document[key])).length > 0 ||
      (key === "downside_drivers" && hasShock),
  ).map(([key, name]) => ({ key, name }));
  const keys = [
    ...[...new Set(cases.flatMap(({ key }) => Object.keys(record(document[key]))))].map((key) => ({
      key,
      isShock: false,
    })),
    ...Object.keys(shock).map((key) => ({ key, isShock: true })),
  ];
  const rows = keys.map(({ key, isShock }) => {
    const values = cases.map(({ key: group }) =>
      isShock
        ? group === "downside_drivers"
          ? recordedValues(shock[key])
          : null
        : recordedValues(record(document[group])[key]),
    );
    const base = values[0] ?? null;
    const cells = values.map((recorded, at): DriverCell => {
      if (!recorded) return { text: "Not stated", stated: false, differs: false };
      const parts = recorded.map((text) => shown(key, text));
      const same = parts.length > 1 && parts.every((part) => part === parts[0]);
      return {
        text: same ? `${parts[0] ?? ""} each year` : parts.join(" · "),
        stated: true,
        differs: at > 0 && (base === null || base.join("\0") !== recorded.join("\0")),
      };
    });
    const id = isShock
      ? `downside_shock.${key}`
      : `${cases.find(({ key: group }) => record(document[group])[key] !== undefined)?.key ?? ""}.${key}`;
    return {
      id,
      key,
      name: DRIVER_NAMES[key] ?? key.replaceAll("_", " "),
      shock: isShock,
      cells,
    };
  });
  return { years, cases, rows };
}
