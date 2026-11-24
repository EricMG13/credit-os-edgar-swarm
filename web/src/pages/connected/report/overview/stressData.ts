import { containsReference, withUnit, type OutputEntry } from "../../publishedReport";
import { gridOf } from "../../visuals/LegacyForecast";
import {
  amount,
  items,
  record,
  stringsIn,
  ticks,
  word,
  type SourceTable,
} from "../../visuals/visualData";
import { downsideView, scenarioShareLabel } from "../Downside";
import { columnAt, readCell, type Cell } from "./figureData";
import { readerReason } from "./reason";

type Descriptor = Record<string, unknown>;

export type HeadroomTest = {
  label: string;
  unit: string;
  threshold: Cell;
  current: Cell;
  /** The published headroom, when the handoff states one. */
  headroom: string | null;
  direction: string;
  line?: number;
};

const stated = (text: string) =>
  text.trim() && !/^Not (?:supplied|calculated)\b/.test(text) ? text : null;

/** The covenant tests as published: each test's own threshold, current value and unit. */
export function headroomTests(table: SourceTable, descriptor: Descriptor): HeadroomTest[] | null {
  const label = columnAt(table, items(descriptor.label)[0] ?? descriptor.label);
  const threshold = columnAt(table, descriptor.threshold);
  const current = columnAt(table, descriptor.current);
  if (label === null || threshold === null || current === null) return null;
  const headroom = columnAt(table, descriptor.headroom);
  const direction = columnAt(table, descriptor.direction);
  return table.rows.map((row, at) => {
    const unit = row.at(-2) ?? "";
    const scope = [row[threshold] ?? "", row[current] ?? ""];
    return {
      label: row[label] ?? "",
      unit,
      threshold: readCell(scope[0] ?? "", scope, unit),
      current: readCell(scope[1] ?? "", scope, unit),
      headroom: headroom === null ? null : stated(row[headroom] ?? ""),
      direction: direction === null ? "" : (row[direction] ?? ""),
      line: table.rowLines?.[at],
    };
  });
}

export const BULLET = { width: 408, left: 8, right: 400 } as const;

/**
 * A test's value and threshold on one scale that holds zero, of either sign; null when either is
 * not a number. `zero` is where the current value's bar starts.
 */
export function bulletGeometry(test: HeadroomTest) {
  const { value: current } = test.current;
  const { value: threshold } = test.threshold;
  if (current === null || threshold === null) return null;
  const scale = ticks([current, threshold]);
  const low = scale[0]?.value ?? 0;
  const top = scale.at(-1)?.value ?? 1;
  const share = (value: number) => (value - low) / (top - low);
  const at = (value: number) => BULLET.left + share(value) * (BULLET.right - BULLET.left);
  return {
    zero: at(0),
    current: at(current),
    threshold: at(threshold),
    share: { zero: share(0), current: share(current), threshold: share(threshold) },
    ticks: scale.map((tick) => ({ label: tick.label, x: at(tick.value) })),
  };
}

/** One stressed measure: a cell a case, word for word, at its handoff line. */
type DownsideMeasure = {
  measure: string;
  line: number;
  cells: Cell[];
};

const LEAD_NUMBER = /^(-?\d[\d,]*(?:\.\d+)?) \(/;

function stressCell(text: string): Cell {
  const plain = text.replaceAll("−", "-");
  const value = amount(plain) ?? amount(LEAD_NUMBER.exec(plain)?.[1] ?? "");
  const reason = /^Not (?:supplied|calculated):\s*(\S.*)$/.exec(text)?.[1] ?? null;
  return { text, value, reason: value === null ? (reason ?? "No value in the handoff") : null };
}

const LEVERAGE = /^Net leverage\b.*\(x\)$/i;
const COVER = /\bcover\b.*\(x\)$/i;

/** The first measure of the matrix that `pattern` names and that states a figure for some case. */
function measureOf(rows: { line: number; cells: string[] }[], ids: string[], pattern: RegExp) {
  const row = rows.find(
    ({ cells }) => pattern.test(cells[0] ?? "") && !containsReference(cells[0] ?? ""),
  );
  if (!row) return null;
  const cells = ids.map((_, at) => stressCell(row.cells[at + 1] ?? ""));
  if (!cells.some((cell) => cell.value !== null)) return null;
  return { measure: row.cells[0] ?? "", line: row.line, cells } satisfies DownsideMeasure;
}

/** The stress results as each case's net leverage, with its cover beside it. */
export function downsideCases(entry: OutputEntry) {
  const view = downsideView(entry);
  if (!view) return null;
  const ids = view.matrix.headers.slice(1, -1);
  const cases = ids.map((id) => {
    const named = view.cases.find((item) => item.id === id);
    return { id, name: named?.name ?? id, control: named !== undefined && named === view.control };
  });
  const leverage = measureOf(view.matrix.rows, ids, LEVERAGE);
  const cover = measureOf(view.matrix.rows, ids, COVER);
  if (!leverage && !cover) return null;
  const assumptions = view.cases
    .filter((item) => item !== view.control)
    .map(
      (item) =>
        `${item.name}: EBITDA decline ${scenarioShareLabel(item.decline)}, cash interest increase ${scenarioShareLabel(item.interest)}.`,
    );
  return { cases, leverage, cover, assumptions, line: view.matrix.line };
}

/**
 * The covenant limit for a stressed measure: the run's covenant test of the same measure and unit
 * ("Net leverage (x)" and a "Net leverage" test in x) with a stated threshold; null otherwise.
 */
export function covenantLimit(tests: HeadroomTest[] | null, measure: string) {
  const unit = /\(([^()]+)\)$/.exec(measure)?.[1] ?? "";
  const name = measure
    .replace(/\s*\([^()]+\)$/, "")
    .trim()
    .toLowerCase();
  const test = tests?.find(
    (item) =>
      item.label.trim().toLowerCase() === name &&
      item.unit.trim() === unit &&
      item.threshold.value !== null,
  );
  if (!test || test.threshold.value === null) return null;
  return { value: test.threshold.value, text: withUnit(test.threshold.text, unit) };
}

/** Where a value sits across `room` pixels, on one scale that holds every case and the limit. */
export function dumbbellScale(cells: Cell[], limit: number | null, room: number) {
  const scale = ticks([...cells.map((cell) => cell.value), limit]);
  const low = scale[0]?.value ?? 0;
  const top = scale.at(-1)?.value ?? 1;
  return (value: number) => ((value - low) / (top - low)) * room;
}

type PathPoint = { period: string; display: string; value: number | null; reason: string };

const NET_LEVERAGE = /^Net leverage\b/i;
/** The model marks its base case by this group name; no other group is taken for it. */
const BASE = "Base case";
const MOST_LIMITS = 2;

/** Why the path has no base case to headline: the model marks none, or states it no figure. */
const unbased = (groups: string[]) =>
  groups.includes(BASE)
    ? "The model states no net leverage for the base case."
    : "The model marks no case as the base case.";

/** Net leverage by forecast period for each case of the published model, as the model computed it. */
export function forwardPath(model: unknown) {
  const raw = record(record(model).cashflow);
  const grid = gridOf(raw);
  const row = grid?.rows.find((item) => NET_LEVERAGE.test(item.label));
  if (!grid || !row) return null;
  const groups = [...new Set(grid.columns.filter((column) => column.start).map((c) => c.group))];
  const cases = groups
    .sort((a, b) => Number(b === BASE) - Number(a === BASE))
    .map((group) => ({
      group,
      points: grid.columns.flatMap((column, at): PathPoint[] => {
        if (column.group !== group || !column.start) return [];
        const cell = row.cells[at] ?? {};
        const value = cell.status === "value" ? amount(word(cell.exact)) : null;
        return [
          { period: column.label, display: word(cell.display), value, reason: word(cell.reason) },
        ];
      }),
    }))
    .filter((item) => item.points.some((point) => point.value !== null));
  if (!cases.length) return null;
  // The model's own first statements of what it is that can be drawn here; the full list, with
  // those that cite a source, is on the Forecast page.
  const limits = stringsIn(raw.limits)
    .filter((line) => readerReason(line) !== null)
    .slice(0, MOST_LIMITS);
  const based = cases[0]?.group === BASE;
  return { measure: row.label, cases, based, unbased: based ? null : unbased(groups), limits };
}

export const PATH = { width: 292, height: 170, left: 28, right: 268, top: 24, base: 130 } as const;

/** The path's points on a scale from zero; a period the model has no figure for has no y. */
export function pathGeometry(cases: { points: PathPoint[] }[]) {
  const periods = [...new Set(cases.flatMap(({ points }) => points.map((point) => point.period)))];
  const scale = ticks(cases.flatMap(({ points }) => points.map((point) => point.value)));
  const top = scale.at(-1)?.value ?? 1;
  const step = periods.length > 1 ? (PATH.right - PATH.left - 28) / (periods.length - 1) : 0;
  const x = (period: string) => PATH.left + 28 + periods.indexOf(period) * step;
  const y = (value: number) => PATH.base - (value / top) * (PATH.base - PATH.top);
  return {
    periods: periods.map((period) => ({ period, x: x(period) })),
    ticks: scale.map((tick) => ({ label: tick.label, y: y(tick.value) })),
    lines: cases.map(({ points }) =>
      points.map((point) => ({
        ...point,
        x: x(point.period),
        y: point.value === null ? null : y(point.value),
      })),
    ),
  };
}
