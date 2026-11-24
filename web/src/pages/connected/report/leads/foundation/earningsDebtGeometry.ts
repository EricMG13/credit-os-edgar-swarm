import { containsReference, readerText } from "../../../publishedReport";
import { ticks } from "../../../visuals/visualData";
import { linear } from "../kit/geometry";
import { group, signOf, type Reading } from "../kit/numbers";
import type { EarningsAgainstDebt, EarningsMeasure } from "./foundationData";

export const EVIDENCE = "Detail is in Evidence.";

/** Handoff text as a working page may draw it: module codes as names, a source reference never. */
export const clean = (text: string) => (containsReference(text) ? EVIDENCE : readerText(text));

/** Why a cell is not drawn as a value, in the handoff's words where it gives them. */
export function reasonOf(cell: Reading) {
  if (cell.kind === "gap") return clean(cell.reason);
  return cell.kind === "text" ? "not a number in the handoff" : "";
}

/** The first letter lowered, unless the word is an acronym ("EBITDA As Defined" stays). */
export const inSentence = (label: string) =>
  /^[A-Z][a-z]/.test(label) ? `${label.charAt(0).toLowerCase()}${label.slice(1)}` : label;

const magnitude = (text: string) => group(text.replace(/^-/, ""));

/** A signed derived figure: "+5,130", "−20", "0". */
export function signed(text: string) {
  return `${signOf(text) === 1 ? "+" : ""}${group(text)}`;
}

/** "rose 5,130", "fell 20", "was unchanged". */
export function movement(change: string) {
  const sign = signOf(change);
  if (sign === 0) return "was unchanged";
  return `${sign === 1 ? "rose" : "fell"} ${magnitude(change)}`;
}

/** "up", "down" or "unchanged": direction only, never better or worse. */
export function direction(change: string) {
  const sign = signOf(change);
  return sign === 1 ? "up" : sign === -1 ? "down" : "unchanged";
}

/** A value axis from zero (or through it), on round ticks, mapped onto a pixel range. */
export function valueScale(
  values: number[],
  range: readonly [number, number],
  suffix = "",
): { at: (value: number) => number; ticks: { value: number; x: number; label: string }[] } {
  const marks = ticks(values);
  const at = linear([marks[0]?.value ?? 0, marks.at(-1)?.value ?? 1], range);
  return {
    at,
    ticks: marks.map((tick) => ({
      value: tick.value,
      x: at(tick.value),
      label: `${tick.label.replace("-", "−")}${suffix}`,
    })),
  };
}

function niceStep(raw: number) {
  const power = 10 ** Math.floor(Math.log10(raw));
  const factor = raw / power;
  return (factor <= 1 ? 1 : factor <= 2 ? 2 : factor <= 5 ? 5 : 10) * power;
}

/**
 * A ratio's own axis, not from zero: round ticks just around the stated values, so that 6.27x and
 * 6.53x read apart. `lo` is the axis start the caption must name.
 */
export function ratioAxis(values: number[]) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const step = niceStep((max - min || Math.abs(max) / 10 || 1) / 4);
  const decimals = Math.max(0, -Math.floor(Math.log10(step) + 1e-9));
  const fix = (value: number) => Number(value.toFixed(decimals)) + 0;
  const lo = fix(Math.floor(min / step + 1e-9) * step);
  const hi = Math.max(fix(Math.ceil(max / step - 1e-9) * step), fix(lo + step));
  const count = Math.round((hi - lo) / step);
  const label = (value: number) => `${value.toFixed(decimals).replace("-", "−")}x`;
  return {
    lo,
    hi,
    label,
    ticks: Array.from({ length: count + 1 }, (_, at) => fix(lo + at * step)),
  };
}

// ---------------------------------------------------------------------------------------------
// The dumbbell panel
// ---------------------------------------------------------------------------------------------

/** Layout of the left panel, in viewBox units. Text is 11 px or more at the 1440 layout. */
export const ED = {
  width: 780,
  labelEnd: 146,
  x0: 156,
  x1: 572,
  g0: 640,
  g1: 712,
  top: 52,
  row: 42,
  debtGap: 14,
  gapMark: 48,
} as const;

const MONO = 7.3; // advance of a 12 px mono figure, for keeping labels apart only
const LONG_REASON = 96;

type Anchor = "start" | "end" | "middle";
type Label = { x: number; y: number; anchor: Anchor };
export type DumbbellMark =
  | { kind: "value"; x: number; text: string; label: Label }
  | { kind: "gap"; x: number; reason: string };
export type Growth =
  | { kind: "bar"; x: number; width: number; text: string; label: Label }
  | { kind: "none"; text: string };
export type DumbbellRow = {
  key: EarningsMeasure["key"];
  label: string;
  y: number;
  prior: DumbbellMark;
  current: DumbbellMark;
  growth: Growth | null;
  /** The reasons a mark is not drawn, as one line beneath the row; long reasons go to the notes. */
  reasonLine: string | null;
  longReasons: string[];
};

function beside(x: number, y: number, text: string, side: "left" | "right"): Label {
  const width = text.length * MONO;
  if (side === "left")
    return x - 10 - width < ED.labelEnd
      ? { x, y: y - 10, anchor: "middle" }
      : { x: x - 10, y: y + 4, anchor: "end" };
  return x + 11 + width > ED.g0 - 8
    ? { x, y: y - 10, anchor: "middle" }
    : { x: x + 11, y: y + 4, anchor: "start" };
}

/** Growth is drawn only on a positive base: a percentage of zero or of a negative figure says nothing. */
export const growthShown = (measure: EarningsMeasure) =>
  measure.growth !== null &&
  measure.pair.prior.cell.kind === "number" &&
  measure.pair.prior.cell.value > 0;

function marksOf(measure: EarningsMeasure, y: number, at: (value: number) => number) {
  const { prior, current } = measure.pair;
  const p = prior.cell.kind === "number" ? at(prior.cell.value) : null;
  const c = current.cell.kind === "number" ? at(current.cell.value) : null;
  const value = (x: number, cell: Reading, side: "left" | "right"): DumbbellMark => ({
    kind: "value",
    x,
    text: group(cell.text),
    label: beside(x, y, group(cell.text), side),
  });
  const gap = (x: number, cell: Reading): DumbbellMark => ({
    kind: "gap",
    x,
    reason: reasonOf(cell),
  });
  // A gap sits beside the stated mark, on the side with room; the stated label takes the other side.
  const room = (x: number) => x + 14 + ED.gapMark <= ED.x1 + 40;
  if (p !== null && c !== null) {
    const rising = c >= p;
    return {
      prior: value(p, prior.cell, rising ? "left" : "right"),
      current: value(c, current.cell, rising ? "right" : "left"),
    };
  }
  if (p !== null)
    return room(p)
      ? { prior: value(p, prior.cell, "left"), current: gap(p + 14, current.cell) }
      : { prior: value(p, prior.cell, "right"), current: gap(p - 14 - ED.gapMark, current.cell) };
  if (c !== null)
    return room(c)
      ? { prior: gap(c + 14, prior.cell), current: value(c, current.cell, "left") }
      : { prior: gap(c - 14 - ED.gapMark, prior.cell), current: value(c, current.cell, "right") };
  return {
    prior: gap(ED.x0 + 4, prior.cell),
    current: gap(ED.x0 + 12 + ED.gapMark, current.cell),
  };
}

function growthOf(
  measure: EarningsMeasure,
  at: (value: number) => number,
  y: number,
): Growth | null {
  if (measure.change === null) return null;
  if (!growthShown(measure) || measure.growth === null)
    return { kind: "none", text: "not calculable" };
  const value = Number(measure.growth);
  const [from, to] = [at(0), at(value)];
  const text = `${signed(measure.growth)}%`;
  return {
    kind: "bar",
    x: Math.min(from, to),
    width: Math.abs(to - from),
    text,
    label:
      value >= 0
        ? { x: to + 6, y: y + 4, anchor: "start" }
        : { x: to - 6, y: y + 4, anchor: "end" },
  };
}

function reasonsOf(measure: EarningsMeasure, priorLabel: string, currentLabel: string) {
  const sides = [
    [priorLabel, measure.pair.prior.cell],
    [currentLabel, measure.pair.current.cell],
  ] as const;
  return sides.flatMap(([period, cell]) =>
    cell.kind === "number" ? [] : [`${period} not supplied: ${reasonOf(cell)}`],
  );
}

/** Every row of the dumbbell panel on one scale; heights and positions are proportional to the stated figures. */
export function dumbbellLayout(data: EarningsAgainstDebt) {
  const values = data.measures.flatMap((m) =>
    [m.pair.prior.cell, m.pair.current.cell].flatMap((cell) =>
      cell.kind === "number" ? [cell.value] : [],
    ),
  );
  const money = valueScale(values, [ED.x0, ED.x1]);
  const growthValues = data.measures.filter(growthShown).map((m) => Number(m.growth));
  const growth = valueScale(growthValues, [ED.g0, ED.g1], "%");
  let y = ED.top - ED.row;
  let separator = null as number | null;
  const rows = data.measures.map((measure, index): DumbbellRow => {
    const before = y;
    y += ED.row;
    if (measure.key === "grossDebt" && index > 0) {
      y += ED.debtGap;
      separator = (before + y) / 2;
    }
    const reasons = reasonsOf(measure, data.priorLabel, data.currentLabel);
    const long = reasons.join("; ").length > LONG_REASON;
    return {
      key: measure.key,
      label: measure.label,
      y,
      ...marksOf(measure, y, money.at),
      growth: growthOf(measure, growth.at, y),
      reasonLine: reasons.length
        ? long
          ? `${reasons.map((reason) => reason.split(":")[0]).join("; ")}; the reason is in the notes below`
          : reasons.join("; ")
        : null,
      longReasons: long ? reasons.map((reason) => `${measure.label}, ${reason}.`) : [],
    };
  });
  const axisY = y + 24;
  return {
    rows,
    ticks: money.ticks,
    zero: money.at(0),
    growthTicks: growthValues.length ? growth.ticks : [],
    growthZero: growth.at(0),
    separator,
    axisY,
    height: axisY + 26,
  };
}

// ---------------------------------------------------------------------------------------------
// The leverage panel
// ---------------------------------------------------------------------------------------------

/** Layout of the right panel, in viewBox units. */
export const LEV = {
  width: 296,
  height: 276,
  top: 64,
  bottom: 214,
  gridFrom: 44,
  prior: 104,
  current: 224,
} as const;

type Leverage = NonNullable<EarningsAgainstDebt["leverage"]>;
export type RatioMark =
  | { kind: "value"; x: number; y: number; text: string; labelY: number }
  | { kind: "gap"; x: number; reason: string };

/** The ratio on its own axis, prior ring and current dot, with the arrow between; null if neither is a number. */
export function leverageLayout(leverage: Leverage) {
  const cells = [leverage.pair.prior.cell, leverage.pair.current.cell];
  const values = cells.flatMap((cell) => (cell.kind === "number" ? [cell.value] : []));
  if (!values.length) return null;
  const axis = ratioAxis(values);
  const y = linear([axis.lo, axis.hi], [LEV.bottom, LEV.top]);
  const mark = (cell: Reading, x: number): RatioMark => {
    if (cell.kind !== "number") return { kind: "gap", x, reason: reasonOf(cell) };
    const at = y(cell.value);
    return {
      kind: "value",
      x,
      y: at,
      text: `${group(cell.text)}x`,
      labelY: at - 14 < LEV.top - 18 ? at + 24 : at - 14,
    };
  };
  const prior = mark(leverage.pair.prior.cell, LEV.prior);
  const current = mark(leverage.pair.current.cell, LEV.current);
  return {
    axis,
    fromZero: axis.lo === 0,
    ticks: axis.ticks.map((value) => ({ value, y: y(value), label: axis.label(value) })),
    prior,
    current,
    // An arrow only for a move: an unchanged ratio has the word and no arrow.
    arrow:
      prior.kind === "value" && current.kind === "value" && prior.y !== current.y
        ? arrowOf(prior, current)
        : null,
  };
}

/** The connector from the ring to the dot, ending in an arrowhead short of the dot. */
function arrowOf(from: { x: number; y: number }, to: { x: number; y: number }) {
  const [dx, dy] = [to.x - from.x, to.y - from.y];
  const length = Math.hypot(dx, dy) || 1;
  const [ux, uy] = [dx / length, dy / length];
  const tip = { x: to.x - ux * 8, y: to.y - uy * 8 };
  const base = { x: tip.x - ux * 7, y: tip.y - uy * 7 };
  const [nx, ny] = [-uy * 4, ux * 4];
  const point = (x: number, y: number) => `${x.toFixed(2)},${y.toFixed(2)}`;
  return {
    line: { x1: from.x + ux * 6, y1: from.y + uy * 6, x2: base.x, y2: base.y },
    head: [
      point(tip.x, tip.y),
      point(base.x + nx, base.y + ny),
      point(base.x - nx, base.y - ny),
    ].join(" "),
  };
}

// ---------------------------------------------------------------------------------------------
// Words: the title, the readings and the table
// ---------------------------------------------------------------------------------------------

const cellText = (cell: Reading) => (cell.kind === "number" ? group(cell.text) : "not supplied");

/** The title, templated from the stated changes of gross debt and reported EBITDA; no judgement. */
export function earningsTitle(data: EarningsAgainstDebt) {
  const pick = (key: EarningsMeasure["key"]) =>
    data.measures.find((m) => m.key === key && m.change !== null);
  const clauses = [pick("grossDebt"), pick("reportedEbitda")].flatMap((m) =>
    m?.change == null ? [] : [{ label: m.label, change: m.change }],
  );
  const [first, second] = clauses;
  if (!first) return `Earnings and debt, ${data.priorLabel} → ${data.currentLabel}`;
  const head = `${first.label} ${movement(first.change)}`;
  return second ? `${head} while ${inSentence(second.label)} ${movement(second.change)}` : head;
}

function measureReading(measure: EarningsMeasure) {
  const { prior, current } = measure.pair;
  const span = `${inSentence(measure.label)} ${cellText(prior.cell)} to ${cellText(current.cell)}`;
  if (measure.change === null) return span;
  if (signOf(measure.change) === 0) return `${span}, unchanged`;
  if (growthShown(measure) && measure.growth !== null)
    return `${span}, ${direction(measure.change)} ${group(measure.growth.replace(/^-/, ""))}% (derived)`;
  return `${span}, ${direction(measure.change)} ${magnitude(measure.change)} (derived)`;
}

/** The left panel's reading, every number in it. */
export function earningsReading(data: EarningsAgainstDebt) {
  const parts = data.measures.map(measureReading);
  return `${data.priorLabel} to ${data.currentLabel} on one ${data.unit} scale from zero: ${parts.join("; ")}.`;
}

const TONE_WORD = { worse: "worse", better: "better" } as const;

/** "worse" or "better" only where the owner's table says so; otherwise the direction alone. */
export function leverageWord(leverage: Leverage) {
  if (leverage.tone === "worse" || leverage.tone === "better") return TONE_WORD[leverage.tone];
  if (leverage.change === null) return null;
  return direction(leverage.change);
}

/** The right panel's reading. */
export function leverageReading(leverage: Leverage, start: string, fromZero: boolean) {
  const { prior, current } = leverage.pair;
  const ratio = (cell: Reading) =>
    cell.kind === "number" ? `${group(cell.text)}x` : "not supplied";
  const scale = fromZero ? "from zero" : `from ${start}, not from zero`;
  const base = `Total debt to EBITDA on its own scale ${scale}: ${ratio(prior.cell)} to ${ratio(current.cell)}`;
  if (leverage.change === null) return `${base}.`;
  const word = leverageWord(leverage);
  const change = `${signed(leverage.change)}x (derived)`;
  return word === "worse" || word === "better"
    ? `${base}, ${change}, ${word}.`
    : `${base}, ${change}${word === "unchanged" ? ", unchanged" : ""}.`;
}

const tableCell = (cell: Reading) =>
  cell.kind === "number" ? group(cell.text) : `Not supplied: ${reasonOf(cell)}`;

/** The table view: every measure and the leverage row, derived columns named as derived. */
export function earningsTable(data: EarningsAgainstDebt) {
  const rows = data.measures.map((m) => [
    m.label,
    tableCell(m.pair.prior.cell),
    tableCell(m.pair.current.cell),
    m.change === null ? "Not derived" : signed(m.change),
    growthShown(m) && m.growth !== null ? `${signed(m.growth)}%` : "Not derived",
  ]);
  const lev = data.leverage;
  const ratio = (cell: Reading) =>
    cell.kind === "number" ? `${group(cell.text)}x` : tableCell(cell);
  const leverageRow = lev
    ? [
        [
          lev.label,
          ratio(lev.pair.prior.cell),
          ratio(lev.pair.current.cell),
          lev.change === null
            ? "Not derived"
            : `${signed(lev.change)}x, ${leverageWord(lev) ?? "unchanged"}`,
          "Not applicable: a ratio",
        ],
      ]
    : [];
  return {
    caption: `Earnings against debt and leverage, ${data.unit}, ${data.priorLabel} to ${data.currentLabel}`,
    headers: [
      "Measure",
      data.priorLabel,
      data.currentLabel,
      "Change (derived)",
      "Growth % (derived)",
    ],
    rows: [...rows, ...leverageRow],
  };
}
