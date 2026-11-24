import { containsReference, readerText } from "../../../publishedReport";
import { ticks } from "../../../visuals/visualData";
import { linear } from "../kit/geometry";
import { difference, group, sum } from "../kit/numbers";
import type { CashLadder, LadderStep, LadderValue } from "./legacyData";

/** Handoff text as a reader sees it, or the pointer to Evidence when it names a source. */
export function readerSafe(text: string) {
  const reader = readerText(text);
  return containsReference(reader) ? "Detail is in Evidence." : reader;
}

/** Greedy word wrap to at most `max` characters a line; a longer single word keeps its own line. */
export function wrapLines(text: string, max: number) {
  const lines: string[] = [];
  for (const word of text.split(/\s+/).filter(Boolean)) {
    const last = lines.at(-1);
    if (last !== undefined && last.length + 1 + word.length <= max)
      lines[lines.length - 1] = `${last} ${word}`;
    else lines.push(word);
  }
  return lines;
}

/** The layout of the ladder, in viewBox units. */
export const LADDER = {
  width: 610,
  indent: 12,
  plotLeft: 212,
  plotRight: 468,
  currentX: 540,
  priorX: 606,
  top: 30,
  bar: 12,
  priorBar: 5,
  line: 14,
  sub: 13,
  gap: 14,
  axis: 24,
  labelWrap: 30,
  subWrap: 42,
} as const;

type LadderSpan = { from: number; to: number; x: number; width: number };
type LadderPlace =
  { state: "bar"; span: LadderSpan } | { state: "gap"; reason: string } | { state: "unplaced" };
export type LadderRow = {
  step: LadderStep;
  y: number;
  height: number;
  labelLines: string[];
  tag: string | null;
  sub: string[];
  current: LadderPlace;
  prior: LadderSpan | null;
  /** Pixel x of the running level after this row, for the connector to the next row. */
  out: number | null;
  /** Where a stated level and the steps above it part: running level to stated level, in px. */
  mismatch: LadderSpan | null;
};

const isZero = (text: string | null) => text !== null && Number(text) === 0;
const negate = (text: string) => (text.startsWith("-") ? text.slice(1) : `-${text}`);

/** What the handoff says in place of a figure: its own gap wording, or the reason a step is not derived. */
function gapText(value: LadderValue) {
  return readerSafe(value.text.startsWith("Not ") ? value.text : (value.reason ?? "Not stated"));
}

/** The figure as drawn in the number columns: grouped with a true minus, or the gap in a word. */
export function valueText(value: LadderValue) {
  if (value.value !== null) return group(value.text);
  return value.derived ? "Not derived" : "Not stated";
}

type Placed = {
  step: LadderStep;
  current: { state: "bar"; from: number; to: number } | { state: "gap" } | { state: "unplaced" };
  out: number | null;
  mismatch: { from: number; to: number } | null;
};

/**
 * Where each current-period mark sits, in data units. A level is drawn from zero to its stated value;
 * a deduction hangs from the running level above it. A level is never recomputed from the steps:
 * where the steps do not reach it exactly, the difference is kept as a mismatch.
 */
function place(steps: LadderStep[]): Placed[] {
  let running: string | null = null;
  let previous: LadderStep["kind"] | null = null;
  return steps.map((step): Placed => {
    const value = step.current;
    let placed: Placed;
    if (step.kind === "level") {
      const reaches = value.value !== null && previous === "deduction" && running !== null;
      const mismatch =
        reaches && running !== null && !isZero(difference(value.text, running))
          ? { from: Number(running), to: value.value ?? 0 }
          : null;
      placed =
        value.value === null
          ? { step, current: { state: "gap" }, out: null, mismatch: null }
          : {
              step,
              current: { state: "bar", from: 0, to: value.value },
              out: value.value,
              mismatch,
            };
      running = value.value === null ? null : value.text;
    } else if (value.value === null) {
      placed = { step, current: { state: "gap" }, out: null, mismatch: null };
      running = null;
    } else if (running === null) {
      placed = { step, current: { state: "unplaced" }, out: null, mismatch: null };
    } else {
      const next: string | null = sum([running, value.text]);
      const from = Number(running);
      const to = Number(next);
      placed = { step, current: { state: "bar", from, to }, out: to, mismatch: null };
      running = next;
    }
    previous = step.kind;
    return placed;
  });
}

function tagOf(step: LadderStep) {
  if (step.key === "remainder") return "derived; not itemised here";
  return step.current.derived || step.prior.derived ? "derived" : null;
}

function subOf(step: LadderStep, current: Placed["current"], parts: [string, string] | null) {
  if (current.state === "gap") return wrapLines(gapText(step.current), LADDER.subWrap);
  if (current.state === "unplaced") return ["Not drawn: a step above it is not stated"];
  if (step.key === "outflows" && parts)
    return [parts.map((part) => group(negate(part))).join(" + ")];
  return [];
}

export type LadderGeometry = {
  rows: LadderRow[];
  ticks: { value: number; label: string; x: number }[];
  zeroX: number;
  height: number;
  mismatch: boolean;
};

/** The ladder on one scale: every bar start and end, both periods' levels and zero. */
export function ladderGeometry(data: CashLadder): LadderGeometry {
  const placed = place(data.steps);
  const positions = [
    0,
    ...placed.flatMap((row) =>
      row.current.state === "bar" ? [row.current.from, row.current.to] : [],
    ),
    ...data.steps.flatMap((step) => (step.kind === "level" ? [step.prior.value] : [])),
  ];
  const scaleTicks = ticks(positions);
  const first = scaleTicks[0]?.value ?? 0;
  const last = scaleTicks.at(-1)?.value ?? 1;
  const x = linear([first, last], [LADDER.plotLeft, LADDER.plotRight]);
  const span = (from: number, to: number): LadderSpan => ({
    from,
    to,
    x: x(Math.min(from, to)),
    width: Math.abs(x(to) - x(from)),
  });
  let y = LADDER.top;
  const rows = placed.map((row): LadderRow => {
    const { step } = row;
    const labelLines = wrapLines(step.label, LADDER.labelWrap);
    const tag = tagOf(step);
    const sub = subOf(step, row.current, data.outflowParts.current);
    const labelBlock = labelLines.length * LADDER.line + (tag ? LADDER.line : 0);
    const plotBlock =
      LADDER.bar +
      (step.kind === "level" ? 2 + LADDER.priorBar : 0) +
      sub.length * LADDER.sub +
      (sub.length ? 4 : 0);
    const height = Math.max(labelBlock, plotBlock) + LADDER.gap;
    const current: LadderPlace =
      row.current.state === "bar"
        ? { state: "bar", span: span(row.current.from, row.current.to) }
        : row.current.state === "gap"
          ? { state: "gap", reason: gapText(step.current) }
          : { state: "unplaced" };
    const prior =
      step.kind === "level" && step.prior.value !== null ? span(0, step.prior.value) : null;
    const mismatch = row.mismatch ? span(row.mismatch.from, row.mismatch.to) : null;
    const out = row.out === null ? null : x(row.out);
    const drawn: LadderRow = {
      step,
      y,
      height,
      labelLines,
      tag,
      sub,
      current,
      prior,
      out,
      mismatch,
    };
    y += height;
    return drawn;
  });
  return {
    rows,
    ticks: scaleTicks.map((tick) => ({
      ...tick,
      label: tick.label.replace("-", "−"),
      x: x(tick.value),
    })),
    zeroX: x(0),
    height: y + LADDER.axis,
    mismatch: rows.some((row) => row.mismatch !== null),
  };
}

const lowerFirst = (text: string) =>
  /^[A-Z][a-z]/.test(text) ? `${text.charAt(0).toLowerCase()}${text.slice(1)}` : text;

function phrase(step: LadderStep, value: LadderValue) {
  const label = lowerFirst(step.label);
  const derived = value.derived ? ", derived" : "";
  if (value.value === null) return `${label} not stated`;
  if (step.kind === "level")
    return `${label} ${group(value.text)}${value.value < 0 ? ", negative" : ""}${derived}`;
  if (value.value < 0) return `less ${label} ${group(negate(value.text))}${derived}`;
  if (value.value > 0) return `plus ${label} ${group(value.text)}${derived}`;
  return `${label} 0${derived}`;
}

/** The aria-label: every step of both periods with its number, and "derived" where it is. */
export function ladderReading(data: CashLadder, mismatch: boolean) {
  const side = (key: "current" | "prior") =>
    data.steps.map((step) => phrase(step, step[key])).join("; ");
  const head = `${data.currentLabel} cash conversion, ${data.unit}: ${side("current")}.`;
  const prior = ` ${data.priorLabel}: ${side("prior")}.`;
  return `${head}${prior}${mismatch ? " Levels are drawn as stated; the steps do not sum exactly." : ""}`;
}

/** The title, from the stated levels only; a clause whose number is absent is left out. */
export function ladderTitle(data: CashLadder) {
  const level = (key: LadderStep["key"]) => data.steps.find((step) => step.key === key)?.current;
  const cfo = level("cfo");
  const end = level("end");
  const clauses: string[] = [];
  if (cfo?.value != null)
    clauses.push(`Cash from operations ${group(cfo.text)} after interest, tax and other items`);
  if (end?.value != null)
    clauses.push(
      `${clauses.length ? "" : "Free cash flow "}${group(end.text)} (derived) after acquisitions and distributions`,
    );
  return clauses.join("; ") || `Cash conversion, ${data.currentLabel}`;
}

const cellText = (value: LadderValue) =>
  value.value === null ? gapText(value) : group(value.text);

/** The table view: step, both periods, and whether the row is stated or derived. */
export function ladderTable(data: CashLadder) {
  const negativeLevel = (step: LadderStep, value: LadderValue) =>
    step.kind === "level" && value.value !== null && value.value < 0 ? " (negative)" : "";
  return {
    caption: `Cash conversion, ${data.unit}`,
    headers: ["Step", data.currentLabel, data.priorLabel, "Basis"],
    rows: data.steps.map((step) => [
      step.label,
      `${cellText(step.current)}${negativeLevel(step, step.current)}`,
      `${cellText(step.prior)}${negativeLevel(step, step.prior)}`,
      step.current.derived || step.prior.derived ? "derived" : "stated",
    ]),
  };
}

/** Notes under the figure: gaps with their reasons, the reconciliation, and what is derived. */
export function ladderNotes(data: CashLadder, geometry: LadderGeometry) {
  const gaps = data.steps.flatMap((step) =>
    (["current", "prior"] as const).flatMap((side) => {
      const value = step[side];
      const label = side === "current" ? data.currentLabel : data.priorLabel;
      return value.value === null ? [`${step.label}, ${label}: ${gapText(value)}.`] : [];
    }),
  );
  const [low, high] = [geometry.ticks[0]?.label, geometry.ticks.at(-1)?.label];
  return [
    ...(geometry.mismatch ? ["Levels are drawn as stated; the steps do not sum exactly."] : []),
    ...gaps,
    `One scale from ${low ?? "0"} to ${high ?? "0"}. Levels start at zero; each deduction hangs from the level above it.`,
    "Derived: other items are EBITDA As Defined less cash interest, cash taxes and cash from operations; acquisitions and distributions are the sum of the two stated outflows; the last level is free cash flow after capex less that sum.",
  ];
}

/**
 * Dashed connectors, one path segment each: from a row's running level down to the next row when
 * that row hangs from it (a deduction), reaches it exactly (a level), or departs from it (a mismatch).
 */
export function ladderConnectors(rows: LadderRow[]) {
  return rows.slice(0, -1).flatMap((row, at) => {
    const next = rows[at + 1];
    if (row.out === null || next?.current.state !== "bar") return [];
    const meets = next.out !== null && Math.abs(next.out - row.out) < 0.01;
    const carries = next.step.kind === "deduction" || next.mismatch !== null || meets;
    return carries ? [`M${String(row.out)} ${String(row.y + LADDER.bar)}V${String(next.y)}`] : [];
  });
}
