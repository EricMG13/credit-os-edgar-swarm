import { ticks } from "../../../visuals/visualData";
import { linear } from "../kit/geometry";
import { group, sum } from "../kit/numbers";
import type { BridgeStep, EbitdaBridge } from "./legacyData";
import { readerSafe, wrapLines } from "./ladderGeometry";

/** The layout of the bridge, in viewBox units. */
export const BRIDGE = {
  width: 520,
  plotLeft: 180,
  plotRight: 370,
  bracketX: 422,
  top: 8,
  bar: 16,
  line: 14,
  gap: 14,
  axis: 24,
  labelWrap: 27,
} as const;

export type BridgeAxis = {
  start: number;
  end: number;
  ticks: { value: number; label: string }[];
  /** True when the axis starts above zero: the totals are drawn from `start`, with a break mark. */
  truncated: boolean;
};

const minus = (label: string) => label.replace("-", "−");

/**
 * The bridge's axis. With every position above zero, the axis is cut so the changes can be read:
 * it starts at the nice step at or below the lowest position less half the positions' spread, the
 * step being the one `ticks` gives for one and a half spreads. Otherwise it is the ordinary axis
 * through zero.
 */
export function bridgeAxis(positions: readonly number[]): BridgeAxis {
  const low = Math.min(...positions);
  const high = Math.max(...positions);
  const spread = high - low || Math.abs(high) || 1;
  const edge = low - spread / 2;
  if (edge <= 0) {
    const through = ticks([...positions]);
    return {
      start: through[0]?.value ?? 0,
      end: through.at(-1)?.value ?? 1,
      ticks: through.map((tick) => ({ ...tick, label: minus(tick.label) })),
      truncated: false,
    };
  }
  const [first, second] = ticks([high - edge]);
  const step = (second?.value ?? 1) - (first?.value ?? 0);
  const digits = Math.max(0, Math.ceil(-Math.log10(step)));
  const round = (value: number) => Number(value.toFixed(digits));
  const start = round(Math.floor(edge / step + 1e-9) * step);
  const end = round(Math.ceil(high / step - 1e-9) * step);
  const count = Math.round((end - start) / step);
  const format = new Intl.NumberFormat("en-US", { maximumFractionDigits: digits });
  return {
    start,
    end,
    ticks: Array.from({ length: count + 1 }, (_, at) => {
      const value = round(start + at * step);
      return { value, label: minus(format.format(value)) };
    }),
    truncated: start > 0,
  };
}

/** A change as stated with its sign: "+70", "−12", "0". */
export function signed(text: string) {
  const grouped = group(text);
  return Number(text) > 0 ? `+${grouped}` : grouped;
}

export type BridgeBar = {
  step: BridgeStep;
  label: string;
  labelLines: string[];
  y: number;
  height: number;
  from: number;
  to: number;
  x: number;
  width: number;
  /** Pixel x of the running total after this bar. */
  out: number;
  text: string;
};

export type BridgeGeometry = {
  bars: BridgeBar[];
  axis: BridgeAxis;
  ticks: { value: number; label: string; x: number }[];
  baseX: number;
  height: number;
  bracket: { top: number; bottom: number } | null;
};

/**
 * The waterfall, only for a bridge whose opening plus every change equals its closing exactly.
 * Totals are drawn from the axis start (or zero); each change floats from the running total.
 */
export function bridgeGeometry(data: EbitdaBridge): BridgeGeometry | null {
  if (!data.reconciles || data.steps.some((step) => step.cell.kind !== "number")) return null;
  let running = "0";
  const spans = data.steps.map((step) => {
    if (step.kind === "change") {
      const from = Number(running);
      running = sum([running, step.cell.text]) ?? running;
      return { step, from, to: Number(running) };
    }
    running = step.cell.text;
    return { step, from: Number.NaN, to: Number(step.cell.text) };
  });
  const axis = bridgeAxis(spans.map((span) => span.to));
  const base = axis.truncated ? axis.start : 0;
  const x = linear([axis.start, axis.end], [BRIDGE.plotLeft, BRIDGE.plotRight]);
  let y = BRIDGE.top;
  const bars = spans.map(({ step, from, to }): BridgeBar => {
    const label = readerSafe(step.label);
    const labelLines = wrapLines(label, BRIDGE.labelWrap);
    const height = Math.max(labelLines.length * BRIDGE.line, BRIDGE.bar) + BRIDGE.gap;
    const start = step.kind === "change" ? from : base;
    const bar: BridgeBar = {
      step,
      label,
      labelLines,
      y,
      height,
      from: start,
      to,
      x: x(Math.min(start, to)),
      width: Math.abs(x(to) - x(start)),
      out: x(to),
      text: step.kind === "change" ? signed(step.cell.text) : group(step.cell.text),
    };
    y += height;
    return bar;
  });
  const changes = bars.filter((bar) => bar.step.kind === "change");
  const [firstChange, lastChange] = [changes[0], changes.at(-1)];
  return {
    bars,
    axis,
    ticks: axis.ticks.map((tick) => ({ ...tick, x: x(tick.value) })),
    baseX: x(base),
    height: y + BRIDGE.axis,
    bracket:
      data.addBacks !== null && firstChange && lastChange
        ? { top: firstChange.y, bottom: lastChange.y + BRIDGE.bar }
        : null,
  };
}

/** "Largest step: {label}, {amount}", only when exactly one change is strictly the largest in size. */
export function largestStep(data: EbitdaBridge) {
  const sized = data.steps.flatMap((step) =>
    step.kind === "change" && step.cell.kind === "number"
      ? [{ step, size: Math.abs(step.cell.value) }]
      : [],
  );
  const top = Math.max(...sized.map((item) => item.size));
  const leaders = sized.filter((item) => item.size === top);
  const [only] = leaders;
  return leaders.length === 1 && only
    ? `Largest step: ${readerSafe(only.step.label)}, ${signed(only.step.cell.text)}.`
    : null;
}

const KIND = { opening: "opening total", change: "change", closing: "closing total" } as const;

/** A stated amount for the table, or the handoff's own gap wording. */
export function amountText(step: BridgeStep) {
  if (step.cell.kind !== "number") return readerSafe(step.cell.text) || "Not stated";
  return step.kind === "change" ? signed(step.cell.text) : group(step.cell.text);
}

/** The table view: step, amount as stated, kind; the add-back total last, labelled derived. */
export function bridgeTable(data: EbitdaBridge) {
  return {
    caption: `EBITDA bridge, ${data.unit}`,
    headers: ["Step", `Amount, ${data.unit}`, "Kind"],
    rows: [
      ...data.steps.map((step) => [readerSafe(step.label), amountText(step), KIND[step.kind]]),
      ...(data.addBacks !== null && data.reconciles
        ? [["Add-backs total", signed(data.addBacks), "derived: sum of the changes"]]
        : []),
    ],
  };
}

/** The title from the stated totals and the exact add-back sum; no judgement. */
export function bridgeTitle(data: EbitdaBridge) {
  const opening = readerSafe(data.steps[0]?.label ?? "");
  const closing = readerSafe(data.steps.at(-1)?.label ?? "");
  if (!data.reconciles || data.addBacks === null) return `${opening} to ${closing}, steps stated`;
  const total = Number(data.addBacks);
  if (total > 0)
    return `Add-backs lift ${opening} by ${group(data.addBacks)} (derived) to ${closing}`;
  if (total < 0)
    return `The changes lower ${opening} by ${group(data.addBacks.slice(1))} (derived) to ${closing}`;
  return `${opening} to ${closing}; the changes sum to 0`;
}

/** The aria-label: every step with its amount, the derived total and where the axis starts. */
export function bridgeReading(data: EbitdaBridge, axis: BridgeAxis) {
  const parts = data.steps.map((step) => {
    const label = readerSafe(step.label);
    const amount = group(step.cell.text);
    if (step.kind === "opening") return `${label} ${amount}`;
    if (step.kind === "closing") return `equals ${label} ${amount}`;
    return Number(step.cell.text) < 0
      ? `less ${label} ${group(step.cell.text.slice(1))}`
      : `plus ${label} ${amount}`;
  });
  const total = data.addBacks === null ? "" : ` Add-backs total ${signed(data.addBacks)}, derived.`;
  return `EBITDA bridge, ${data.unit}: ${parts.join(", ")}.${total} Axis starts at ${axis.ticks[0]?.label ?? "0"}.`;
}
