import { containsReference, readerText, unitLabel, type OutputEntry } from "../../publishedReport";
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

type Descriptor = Record<string, unknown>;

export type HeadroomTest = {
  label: string;
  unit: string;
  threshold: Cell;
  current: Cell;
  /** The published headroom, when the handoff states one. */
  headroom: string | null;
  direction: string;
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
  return table.rows.map((row) => {
    const unit = row.at(-2) ?? "";
    const scope = [row[threshold] ?? "", row[current] ?? ""];
    return {
      label: row[label] ?? "",
      unit,
      threshold: readCell(scope[0] ?? "", scope, unit),
      current: readCell(scope[1] ?? "", scope, unit),
      headroom: headroom === null ? null : stated(row[headroom] ?? ""),
      direction: direction === null ? "" : (row[direction] ?? ""),
    };
  });
}

export const BULLET = { width: 408, left: 8, right: 400 } as const;

/** A test's value and threshold on one scale from zero; null when either is not a number. */
export function bulletGeometry(test: HeadroomTest) {
  const { value: current } = test.current;
  const { value: threshold } = test.threshold;
  if (current === null || threshold === null || current < 0 || threshold < 0) return null;
  const scale = ticks([current, threshold]);
  const top = scale.at(-1)?.value ?? 1;
  const at = (value: number) => BULLET.left + (value / top) * (BULLET.right - BULLET.left);
  return {
    current: at(current),
    threshold: at(threshold),
    share: { current: current / top, threshold: threshold / top },
    ticks: scale.map((tick) => ({ label: tick.label, x: at(tick.value) })),
  };
}

export type DownsidePanel = {
  measure: string;
  cells: Cell[];
  min: number;
  max: number;
};

const LEAD_NUMBER = /^(-?\d[\d,]*(?:\.\d+)?) \(/;

function stressCell(text: string): Cell {
  const plain = text.replaceAll("−", "-");
  const value = amount(plain) ?? amount(LEAD_NUMBER.exec(plain)?.[1] ?? "");
  const reason = /^Not (?:supplied|calculated):\s*(\S.*)$/.exec(text)?.[1] ?? null;
  return { text, value, reason: value === null ? (reason ?? "No value in the handoff") : null };
}

const MOST_PANELS = 3;

/** The stress results as small multiples: one panel a measure, one bar a case, each from zero. */
export function downsidePanels(entry: OutputEntry) {
  const view = downsideView(entry);
  if (!view) return null;
  const ids = view.matrix.headers.slice(1, -1);
  const cases = ids.map((id) => {
    const named = view.cases.find((item) => item.id === id);
    return { id, name: named?.name ?? id, control: named !== undefined && named === view.control };
  });
  const panels = view.matrix.rows
    .filter(({ cells }) => /\([^()]+\)$/.test(cells[0] ?? "") && !containsReference(cells[0] ?? ""))
    .map(({ cells }): DownsidePanel => {
      const read = ids.map((_, at) => stressCell(cells[at + 1] ?? ""));
      const values = read.flatMap((cell) => (cell.value === null ? [] : [cell.value]));
      return {
        measure: (cells[0] ?? "").replace(
          /\(([A-Z]{3}) millions\)$/,
          (_, code: string) => `(${unitLabel(`${code} millions`)})`,
        ),
        cells: read,
        min: Math.min(0, ...values),
        max: Math.max(0, ...values),
      };
    })
    .filter((panel) => panel.cells.some((cell) => cell.value !== null) && panel.max > panel.min)
    .slice(0, MOST_PANELS);
  if (!panels.length) return null;
  const assumptions = view.cases
    .filter((item) => item !== view.control)
    .map(
      (item) =>
        `${item.name}: EBITDA decline ${scenarioShareLabel(item.decline)}, cash interest increase ${scenarioShareLabel(item.interest)}.`,
    );
  return { cases, panels, assumptions, line: view.matrix.line };
}

/** Where a panel's zero and a value sit across `room` pixels. */
export function panelScale(panel: DownsidePanel, room: number) {
  const span = panel.max - panel.min;
  const at = (value: number) => ((value - panel.min) / span) * room;
  return { zero: at(0), at };
}

type PathPoint = { period: string; display: string; value: number | null; reason: string };

const NET_LEVERAGE = /^Net leverage\b/i;
const BASE = "Base case";
const MOST_LIMITS = 2;

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
  // The model's own first statements of what it is; the full list is on the Forecast page.
  const limits = stringsIn(raw.limits)
    .filter((line) => !containsReference(line))
    .map(readerText)
    .slice(0, MOST_LIMITS);
  return { measure: row.label, cases, limits };
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
