import type { Mark, MarkTone } from "../../overview/marks";
import { tone } from "../../../signal";
import {
  LINE,
  NARROW,
  SIZE,
  fittingTicks,
  niceAxis,
  signedText,
  textWidth,
  wrap,
  type DumbbellRow,
  type DumbbellSide,
  type NiceAxis,
} from "../kit/marks";
import { group, type Reading } from "../kit/numbers";
import { safeText } from "../kit/reader";
import type {
  EarningsAgainstDebt,
  EarningsMeasure,
  LeverageSeries,
  PeriodCell,
} from "./foundationData";

// The words and positions of the earnings-against-debt tile. Every figure is one the handoff states;
// the one computed figure is a measure's exact change between the comparison periods (ruling i).

/** What a cell the table does not state for a period is called: never zero, never blank. */
export const NOT_IN_TABLE = "not stated in this table";

/** The owner's table names these measures; reported EBITDA it does not, so it gets direction only. */
const TONE_KEY: Record<EarningsMeasure["key"], string> = {
  sales: "revenue",
  reportedEbitda: "reported_ebitda",
  adjustedEbitda: "adjusted_ebitda",
  grossDebt: "gross_debt",
};

/** Debt is the second series: navy, with its own legend entry. */
export const seriesOf = (measure: EarningsMeasure) =>
  measure.key === "grossDebt" ? ("secondary" as const) : ("primary" as const);

/** A cell as the page writes it: the figure grouped, a gap or words as written, or "not stated …". */
export function cellWords(cell: Reading | null) {
  if (cell === null) return NOT_IN_TABLE;
  return cell.kind === "number" ? group(cell.text) : safeText(cell.text);
}

/** The cell of one period, or null. */
export const at = (values: readonly PeriodCell[], label: string) =>
  values.find((value) => value.label === label)?.cell ?? null;

/** The stated change with its sign: "+1,355", "−6,585", "0". */
export const changeText = (change: string) => signedText(group(change), Number(change));

/** "up, better", "up, worse", "down", "unchanged": direction, and better or worse only from `tone()`. */
export function changeNote(key: string, change: string) {
  const judged = tone(key, change);
  const sign = Math.sign(Number(change));
  const way = sign > 0 ? "up" : sign < 0 ? "down" : "unchanged";
  return judged === "better" || judged === "worse" ? `${way}, ${judged}` : way;
}

function side(cell: Reading | null): DumbbellSide {
  if (cell?.kind === "number") return { value: cell.value, text: group(cell.text) };
  return { gap: cellWords(cell) };
}

/** The dumbbell rows for two compared periods: earnings teal, debt navy, the change and its note. */
export function dumbbellRows(data: EarningsAgainstDebt): DumbbellRow[] {
  const comparison = data.comparison;
  if (!comparison) return [];
  return data.measures.map((measure) => ({
    label: measure.label,
    prior: side(at(measure.values, comparison.from)),
    current: side(at(measure.values, comparison.to)),
    series: seriesOf(measure),
    ...(measure.change === null
      ? {}
      : {
          change: changeText(measure.change),
          note: changeNote(TONE_KEY[measure.key], measure.change),
        }),
  }));
}

/** Whether every stated figure of a series is adjacent: a line never runs across an unstated period. */
export function contiguous(values: readonly PeriodCell[]) {
  const stated = values.flatMap((value, index) => (value.cell?.kind === "number" ? [index] : []));
  const [first] = stated;
  const last = stated.at(-1);
  return first === undefined || last === undefined || last - first + 1 === stated.length;
}

/** The leverage figures the Slope draws: the stated numbers only, each with its own text. */
export function leverageMarks(leverage: LeverageSeries): Mark[] {
  return leverage.values.flatMap((value) =>
    value.cell?.kind === "number"
      ? [{ label: value.label, value: value.cell.value, text: `${group(value.cell.text)}x` }]
      : [],
  );
}

/** The Slope's tone: the owner's word for the move, none where it names none. */
export const leverageTone = (leverage: LeverageSeries): MarkTone => leverage.tone;

/** "worse" or "better" where the owner's table judges the move; otherwise no word. */
export const leverageWord = (leverage: LeverageSeries) =>
  leverage.tone === "worse" || leverage.tone === "better" ? leverage.tone : null;

/** The leverage periods the module did not state as a number, each with its reason as written. */
export const leverageGaps = (leverage: LeverageSeries) =>
  leverage.values.flatMap((value) =>
    value.cell?.kind === "number" ? [] : [`${value.label}: ${cellWords(value.cell)}`],
  );

/** The leverage reading: every stated figure, the stated change and the owner's word. */
export function leverageReading(leverage: LeverageSeries) {
  const figures = leverage.values.map(
    (value) =>
      `${value.label} ${value.cell?.kind === "number" ? `${group(value.cell.text)}x` : cellWords(value.cell)}`,
  );
  const word = leverageWord(leverage);
  const change =
    leverage.change === null ? "" : `, ${changeText(leverage.change)}x${word ? `, ${word}` : ""}`;
  return `${leverage.label} on its own scale: ${figures.join(", ")}${change}.`;
}

/** The kicker's span: one period by name, otherwise the first to the last. */
export function periodSpan(labels: readonly string[]) {
  const [first] = labels;
  const last = labels.at(-1);
  if (!first || !last) return "";
  return first === last ? first : `${first} → ${last}`;
}

// ---------------------------------------------------------------------------------------------
// One period: one bar per measure on one scale from zero
// ---------------------------------------------------------------------------------------------

const BAR = 16;
const ROW_GAP = 14;

export type BarRow = {
  label: string;
  labelLines: string[];
  series: "primary" | "secondary";
  top: number;
  barY: number;
  /** The stated figure, or the reason it is not drawn. */
  value: { value: number; text: string } | null;
  reason: string[];
};

/** The one-period bars at `width`: label beside (wide) or above (narrow), figure beyond the bar. */
export function barLayout(data: EarningsAgainstDebt, width: number) {
  const narrow = width < NARROW;
  const period = data.periods[0]?.label ?? "";
  const cells = data.measures.map((measure) => at(measure.values, period));
  const values = cells.flatMap((cell) => (cell?.kind === "number" ? [cell.value] : []));
  const axis = niceAxis(values, { zero: true });
  const longest = Math.max(0, ...data.measures.map((measure) => textWidth(measure.label)));
  const labelWidth = narrow ? width : Math.min(longest + 16, Math.round(width * 0.3));
  const figureRoom =
    Math.max(
      0,
      ...cells.map((cell) => (cell?.kind === "number" ? textWidth(group(cell.text)) : 0)),
    ) + 12;
  const plot = [narrow ? 0 : labelWidth, Math.max(labelWidth + 60, width - figureRoom)] as const;
  const left = narrow ? 0 : plot[0];
  const right = narrow ? width - figureRoom : plot[1];
  const x = (value: number) => axis.place(value, left, right);
  let y = 2;
  const rows = data.measures.map((measure, index): BarRow => {
    const cell = cells[index] ?? null;
    const labelLines = wrap(measure.label, labelWidth - (narrow ? 0 : 12));
    const labelHeight = narrow ? labelLines.length * LINE : 0;
    const reason = cell?.kind === "number" ? [] : wrap(cellWords(cell), right - left, SIZE.label);
    const markHeight = reason.length ? BAR + 4 + reason.length * LINE : BAR;
    const height = Math.max(narrow ? 0 : labelLines.length * LINE, labelHeight + markHeight);
    const row: BarRow = {
      label: measure.label,
      labelLines,
      series: seriesOf(measure),
      top: y,
      barY: y + labelHeight,
      value: cell?.kind === "number" ? { value: cell.value, text: group(cell.text) } : null,
      reason,
    };
    y += height + ROW_GAP;
    return row;
  });
  const plotBottom = y - ROW_GAP + 4;
  const ticks = fittingTicks(axis, left, right, (text) => textWidth(text, SIZE.tick));
  return { narrow, axis, rows, x, left, right, ticks, plotBottom, height: plotBottom + 22 };
}

// ---------------------------------------------------------------------------------------------
// Three or more periods: a small multiple, one line per measure on one shared scale from zero
// ---------------------------------------------------------------------------------------------

const PLOT_TOP = 40;
const PLOT_HEIGHT = 96;
const GUTTER = 16;
const MARGIN = 50;
const PAD = 26;

export type LinePoint = {
  label: string;
  x: number;
  /** The stated figure's position and text; null for a period the module did not state. */
  value: { y: number; value: number; text: string } | null;
};

export type LinePanel = {
  label: string;
  series: "primary" | "secondary";
  left: number;
  top: number;
  width: number;
  points: LinePoint[];
  /** Line segments between adjacent stated periods only: never across an unstated one. */
  segments: { x1: number; y1: number; x2: number; y2: number }[];
  periodLines: string[][];
  reasons: string[];
  /** Whether this panel carries the scale's tick labels (the first of its row). */
  ticks: boolean;
};

/** Panels about 260 px wide at the least, so three or more periods' labels sit apart. */
const columnsFor = (width: number, count: number) =>
  Math.max(1, Math.min(count, 4, Math.floor((width + GUTTER) / (260 + GUTTER))));

/** The small multiple at `width`: every measure's panel on the one axis, gaps in place. */
export function lineLayout(data: EarningsAgainstDebt, width: number) {
  const values = data.measures.flatMap((measure) =>
    measure.values.flatMap((value) => (value.cell?.kind === "number" ? [value.cell.value] : [])),
  );
  const axis: NiceAxis = niceAxis(values, { zero: true });
  const columns = columnsFor(width, data.measures.length);
  const panelWidth = (width - GUTTER * (columns - 1)) / columns;
  const y = (value: number) => axis.place(value, PLOT_TOP + PLOT_HEIGHT, PLOT_TOP);
  const count = data.periods.length;
  const spacing = (panelWidth - MARGIN - 2 * PAD) / Math.max(1, count - 1);
  const xOf = (left: number, index: number) => left + MARGIN + PAD + index * spacing;
  const laid = data.measures.map((measure, index) => {
    const column = index % columns;
    const left = column * (panelWidth + GUTTER);
    const points = measure.values.map((value, period): LinePoint => {
      const cell = value.cell;
      return {
        label: value.label,
        x: xOf(left, period),
        value:
          cell?.kind === "number"
            ? { y: y(cell.value), value: cell.value, text: group(cell.text) }
            : null,
      };
    });
    const segments = points.slice(1).flatMap((point, at) => {
      const before = points[at];
      return before?.value && point.value
        ? [{ x1: before.x, y1: before.value.y, x2: point.x, y2: point.value.y }]
        : [];
    });
    const reasons = measure.values.flatMap((value) =>
      value.cell?.kind === "number"
        ? []
        : wrap(`${value.label}: ${cellWords(value.cell)}`, panelWidth, SIZE.label),
    );
    return {
      label: measure.label,
      series: seriesOf(measure),
      left,
      row: Math.floor(index / columns),
      width: panelWidth,
      points,
      segments,
      periodLines: points.map((point) => wrap(point.label, Math.max(spacing - 6, 40), SIZE.tick)),
      reasons,
      ticks: column === 0,
    };
  });
  const rowHeight = (row: number) =>
    Math.max(
      0,
      ...laid
        .filter((panel) => panel.row === row)
        .map(
          (panel) =>
            PLOT_TOP +
            PLOT_HEIGHT +
            8 +
            Math.max(1, ...panel.periodLines.map((lines) => lines.length)) * 13 +
            panel.reasons.length * LINE +
            12,
        ),
    );
  const rowCount = Math.ceil(data.measures.length / columns);
  const tops = Array.from({ length: rowCount }, (_, row) =>
    Array.from({ length: row }, (_, before) => rowHeight(before)).reduce((a, b) => a + b, 0),
  );
  const panels: LinePanel[] = laid.map((panel) => {
    const top = tops[panel.row] ?? 0;
    const shift = (n: number) => n + top;
    return {
      label: panel.label,
      series: panel.series,
      left: panel.left,
      top,
      width: panel.width,
      points: panel.points.map((point) => ({
        ...point,
        value: point.value ? { ...point.value, y: shift(point.value.y) } : null,
      })),
      segments: panel.segments.map((s) => ({ ...s, y1: shift(s.y1), y2: shift(s.y2) })),
      periodLines: panel.periodLines,
      reasons: panel.reasons,
      ticks: panel.ticks,
    };
  });
  const height = (tops.at(-1) ?? 0) + rowHeight(rowCount - 1);
  return {
    axis,
    y,
    panels,
    height,
    plot: { top: PLOT_TOP, height: PLOT_HEIGHT, margin: MARGIN },
  };
}

// ---------------------------------------------------------------------------------------------
// Readings and the table view
// ---------------------------------------------------------------------------------------------

/** The figure's reading: every measure in every period as written, and the stated change. */
export function earningsReading(data: EarningsAgainstDebt, form: string) {
  const parts = data.measures.map((measure) => {
    const figures = measure.values.map((value) => `${value.label} ${cellWords(value.cell)}`);
    const change =
      measure.change === null
        ? ""
        : `, ${changeText(measure.change)} ${changeNote(TONE_KEY[measure.key], measure.change)}`;
    return `${measure.label} ${figures.join(", ")}${change}`;
  });
  return `${data.unit}, ${form} on one scale from zero: ${parts.join("; ")}.`;
}

const ratio = (cell: Reading | null) =>
  cell?.kind === "number" ? `${group(cell.text)}x` : cellWords(cell);

/** The table view: every measure in every period as written, the stated change where there is one. */
export function earningsTable(data: EarningsAgainstDebt) {
  const labels = data.periods.map((period) => period.label);
  const comparison = data.comparison;
  const changeHeader = comparison ? [`Change, ${comparison.from} → ${comparison.to}`] : [];
  const rows = data.measures.map((measure) => [
    measure.label,
    ...labels.map((label) => cellWords(at(measure.values, label))),
    ...(comparison
      ? [
          measure.change === null
            ? "Not stated"
            : `${changeText(measure.change)}, ${changeNote(TONE_KEY[measure.key], measure.change)}`,
        ]
      : []),
  ]);
  const lev = data.leverage;
  const leverageRow = lev
    ? [
        [
          lev.label,
          ...labels.map((label) => ratio(at(lev.values, label))),
          ...(comparison
            ? [
                lev.change === null
                  ? "Not stated"
                  : `${changeText(lev.change)}x${leverageWord(lev) ? `, ${leverageWord(lev) ?? ""}` : ""}`,
              ]
            : []),
        ],
      ]
    : [];
  return {
    caption: `Earnings against debt and leverage, ${data.unit}, ${periodSpan(labels)}`,
    headers: ["Measure", ...labels, ...changeHeader],
    rows: [...rows, ...leverageRow],
  };
}
