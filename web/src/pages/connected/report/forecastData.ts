import { moduleName } from "../api";
import { forecastCaseNames, gridOf, type Grid } from "../visuals/LegacyForecast";
import {
  analyzeScenarioPeriods,
  isDatedForecastPeriod,
  scenarioComparisonNotice,
} from "../visuals/scenarioPeriods";
import { amount, record, word } from "../visuals/visualData";
import { containsReference, readerText, type OutputEntry } from "../publishedReport";
import type { ReportView } from "../reportView";
import { figureSource, moduleSource, unitOf, type Cell } from "./overview/figureData";
import { passageParagraphs } from "./overview/read";
import { headroomTests, type HeadroomTest } from "./overview/stressData";
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

/**
 * One case of a measure. `cells` are the periods the case keeps in the comparison of cases (what
 * the lead chart draws); `own` are every period the case itself publishes once, compared or not
 * (what the page states about the selected case).
 */
export type MeasureCase = {
  group: string;
  name: string;
  cells: Map<string, MeasureCell>;
  own: Map<string, MeasureCell>;
};

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

function grids(model: unknown) {
  const cashflow = record(record(model).cashflow);
  return [gridOf(cashflow), gridOf(cashflow.other)].flatMap((grid) => (grid ? [grid] : []));
}

/** Every row label of the model matching `pattern`, once each. */
export function measureRows(model: unknown, pattern: RegExp) {
  return [
    ...new Set(
      grids(model).flatMap((grid) =>
        grid.rows.filter((row) => pattern.test(row.label)).map(({ label }) => label),
      ),
    ),
  ];
}

/** The grid's one row for the measure: the only match, or the only match of `prefer`. */
function measureRow(grid: Grid, pattern: RegExp, prefer?: RegExp) {
  const rows = grid.rows.filter((row) => pattern.test(row.label));
  if (rows.length === 1) return rows[0];
  const preferred = prefer ? rows.filter((row) => prefer.test(row.label)) : [];
  return preferred.length === 1 ? preferred[0] : undefined;
}

const BASE = "Base case";
const byBaseFirst = (a: string, b: string) => Number(b === BASE) - Number(a === BASE);
const toEntry = ({ period, start, end, display, value, reason }: MeasureCell) =>
  [period, { period, start, end, display, value, reason }] as const;

/**
 * One measure of the published model, by case: the cells of the grid's row for it in each
 * forecast column of the main grid and the `other` grid. Where a grid has several matching rows,
 * the one `prefer` names is read; none is chosen otherwise. Periods go through the same
 * eligibility as the cash proxy comparison (`analyzeScenarioPeriods`): a period a case does not
 * publish is absent from that case, never filled. Null when no grid has one such row.
 */
export function forecastMeasure(model: unknown, pattern: RegExp, prefer?: RegExp) {
  const names = forecastCaseNames(record(record(model).cashflow));
  const read = grids(model).flatMap((grid) => {
    const row = measureRow(grid, pattern, prefer);
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
  // With several cases, only a period kept for the comparison is compared, for the cases that
  // keep it: a period left out (dates that do not match, a duplicate) is in no case's `cells`.
  const kept = new Set(
    analysis.periods.flatMap(({ period, groups: keeping }) =>
      keeping.map((group) => `${period}\0${group}`),
    ),
  );
  const several = groups.length > 1;
  const cases: MeasureCase[] = groups.map((group) => {
    const own = analysis.uniqueObservations.filter((item) => item.group === group);
    return {
      group,
      name: names.get(group) ?? group,
      own: new Map(own.map(toEntry)),
      cells: new Map(
        own.filter((item) => !several || kept.has(`${item.period}\0${group}`)).map(toEntry),
      ),
    };
  });
  const single = cases.length === 1 ? cases[0] : undefined;
  const periods = single
    ? [...single.cells.keys()].sort()
    : analysis.periods.map(({ period }) => period);
  // The latest actual fiscal year with a value: an actual, never mixed into a forecast selection.
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
    /** Other rows the model publishes for this measure, not read here. */
    others: measureRows(model, pattern).filter((label) => label !== first.row.label),
    cases,
    periods,
    actual,
    compared: !analysis.noSharedPeriod,
    notice: scenarioComparisonNotice(analysis),
  };
}

export type Measure = NonNullable<ReturnType<typeof forecastMeasure>>;

/**
 * The case's own published cells in period order, compared or not; none for a case the measure
 * has no row for. Without a selected case, the measure's first case.
 */
export function cellsOf(measure: Measure, group: string | undefined) {
  const found =
    group === undefined ? measure.cases[0] : measure.cases.find((item) => item.group === group);
  return found ? [...found.own.values()].sort((a, b) => a.period.localeCompare(b.period)) : [];
}

/** Forecast years inside a case's span that it publishes no column for. */
function unpublishedYears(cells: MeasureCell[]) {
  const years = cells.flatMap((cell) => fiscalYear(cell.period) ?? []);
  if (!years.length) return [];
  const first = Math.min(...years);
  const last = Math.max(...years);
  return Array.from({ length: last - first + 1 }, (_, at) => first + at)
    .filter((year) => !years.includes(year))
    .map((year) => `FY${String(year)}E`);
}

/**
 * The highest or lowest value among a case's published forecast years, as a selection the page
 * makes and says it makes: every year tied at that value, and every year of the case with no
 * figure. Null for fewer than two published values: one figure is not a highest year.
 */
export function extremeOf(cells: MeasureCell[], kind: "highest" | "lowest") {
  const values = cells.filter((cell) => cell.value !== null);
  if (values.length < 2) return null;
  const pick = kind === "highest" ? Math.max : Math.min;
  const extreme = pick(...values.map((cell) => cell.value ?? 0));
  return {
    kind,
    cells: values.filter((cell) => cell.value === extreme),
    notCalculated: cells.filter((cell) => cell.value === null).map((cell) => cell.period),
    notPublished: unpublishedYears(cells),
  };
}

/** The last period's cell, whatever its state. */
export const endOf = (cells: MeasureCell[]) =>
  [...cells].sort((a, b) => a.period.localeCompare(b.period)).at(-1) ?? null;

/** Periods joined in reader words: "FY2025E", "FY2025E and FY2027E", "A, B and C". */
export function periodList(periods: readonly string[]) {
  if (periods.length < 2) return periods.join("");
  return `${periods.slice(0, -1).join(", ")} and ${periods.at(-1) ?? ""}`;
}

/** The model's earnings basis as its grid names it: the Adj EBITDA row label. */
export function earningsBasis(model: unknown) {
  return grids(model)[0]?.rows.find((row) => /^Adj EBITDA\b/u.test(row.label))?.label ?? null;
}

/** The forward model's own limitation that matches `pattern`, in its words. */
export function modelLimitation(entry: OutputEntry | undefined, pattern: RegExp) {
  if (!entry) return null;
  const lines = passageParagraphs(entry, "Limitations").flatMap(({ text }) =>
    (text ?? "").split(/\n|(?<=\.)\s+-\s+/u),
  );
  const found = lines
    .map((line) => line.replace(/^\s*-\s*/u, "").trim())
    .find((line) => pattern.test(line));
  return found && !containsReference(found) ? readerText(found) : null;
}

/** The covenant tests as Legal & covenants writes them: level, current figure, direction. */
export function covenantTests(view: ReportView) {
  const name = moduleName("CP-4");
  const source = figureSource(view, "CP-4", "Covenant headroom", name);
  if (source.state === "gap") return { tests: [] as HeadroomTest[], reason: source.reason, source };
  const tests = headroomTests(source.table, source.descriptor) ?? [];
  return {
    tests,
    reason: tests.length ? null : `${name} states no covenant test.`,
    source,
  };
}

export type ScheduleYear = { year: number; label: string; cell: Cell | null };

/** The maturity schedule as Financial foundation publishes it, by fiscal year and as written. */
export function maturitySchedule(view: ReportView) {
  const name = moduleName("CP-1");
  const source = figureSource(view, "CP-1", "Debt maturities", name);
  if (source.state === "gap")
    return {
      years: [] as ScheduleYear[],
      offAxis: [] as ScheduleYear[],
      reason: source.reason,
      source,
    };
  const unit = unitOf(source.descriptor);
  const slots = wallSlots(source.table, source.descriptor, unit);
  if (!slots)
    return {
      years: [] as ScheduleYear[],
      offAxis: [] as ScheduleYear[],
      unit,
      reason: "The maturity schedule states no amount for any period.",
      source,
    };
  const dated = (label: string) => (/^FY\d{4}$/u.test(label) ? fiscalYear(label) : null);
  const years = slots.dated.flatMap((slot): ScheduleYear[] => {
    const year = dated(slot.label);
    return year === null ? [] : [{ year, label: slot.label, cell: slot.cell }];
  });
  // Rows not labelled by fiscal year are kept as written, beside the axis.
  const offAxis = [...slots.dated, ...slots.undated]
    .filter((slot) => dated(slot.label) === null)
    .map((slot) => ({ year: 0, label: slot.label, cell: slot.cell }));
  return {
    years,
    offAxis,
    unit,
    reason: years.length || offAxis.length ? null : "The maturity schedule is not by fiscal year.",
    source,
  };
}

export type FundingGap = {
  module: string;
  name: string;
  entry: OutputEntry;
  line: number;
  label: string;
  /** The cell as written: a figure, or the module's words for why there is none. */
  text: string;
  value: number | null;
  unit: string;
  horizon: string | null;
};

const FUNDING_GAP = /^(?:CP-2D\s+)?funding gap\b/iu;
const HORIZON = /^(?:CP-2D\s+)?horizon\b/iu;

function gapIn(entry: OutputEntry, module: string): FundingGap | null {
  for (const table of entry.sections.flatMap(({ blocks }) =>
    blocks.flatMap((block) => (block.type === "table" ? [block] : [])),
  )) {
    const row = table.rows.find(({ cells }) => FUNDING_GAP.test(cells[0] ?? ""));
    if (!row) continue;
    const at = row.cells.findIndex((cell, index) => index > 0 && cell.trim() && cell !== "—");
    const text = at > 0 ? (row.cells[at] ?? "") : "";
    const header = at > 0 ? (table.headers[at] ?? "") : "";
    const unitAt = table.headers.findIndex((name) => /^(?:Reporting unit|Unit)$/iu.test(name));
    const unit =
      /\(([^()]+)\)\s*$/u.exec(header)?.[1] ?? (unitAt >= 0 ? (row.cells[unitAt] ?? "") : "");
    const horizon = table.rows.find(({ cells }) => HORIZON.test(cells[0] ?? ""));
    const horizonText = horizon?.cells.slice(1).find((cell) => cell.trim() && cell !== "—") ?? null;
    return {
      module,
      name: moduleName(module),
      entry,
      line: row.line,
      label: readerText(row.cells[0] ?? ""),
      text: readerText(text),
      value: amount(text.replaceAll("−", "-")),
      unit,
      horizon: horizonText,
    };
  }
  return null;
}

/**
 * The funding gap as the liquidity module states it, else as the refinancing module repeats it:
 * the figure, its unit and horizon, named as that module's. With neither, the modules looked at
 * and why each gave none.
 */
export function fundingGap(view: ReportView) {
  const looked: string[] = [];
  for (const module of ["CP-2D", "CP-3C"]) {
    const { entry, reason } = moduleSource(view, module, moduleName(module));
    const found = entry && !reason ? gapIn(entry, module) : null;
    if (found) return { gap: found, looked };
    looked.push(reason ?? `${moduleName(module)} states no funding gap figure.`);
  }
  return { gap: null, looked };
}
