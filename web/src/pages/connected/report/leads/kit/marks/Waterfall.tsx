import { cx } from "@/utils/cx";
import { fittingTicks, niceAxis, type NiceAxis } from "./axis";
import { GapSlot } from "./GapSlot";
import { LINE, NARROW, SIZE, signedText, textWidth, wrap } from "./text";
import {
  AxisNote,
  Grid,
  HALO,
  HALO_CLASS,
  Legend,
  TickLabels,
  legendHeight,
  type LegendItem,
} from "./parts";

/**
 * One row of a waterfall, in the handoff's order. A `level` (an opening or a stated intermediate
 * total) and the `closing` are drawn from the axis start; a `step` floats from the running total;
 * a `gap` is a step or level the module did not state, drawn as the hatched slot with its reason.
 * `text` is the figure as stated; the mark only adds the sign a step lacks.
 */
export type WaterfallRow =
  | { kind: "level" | "closing" | "step"; label: string; value: number; text: string }
  | { kind: "gap"; label: string; reason: string };

export type WaterfallProps = {
  rows: readonly WaterfallRow[];
  /** What the figures are in, for the reading (`USD m`). */
  unit: string;
  /** The measured width in px (`useFigureWidth`); below 520 the narrow layout is drawn. */
  width: number;
  /**
   * Omitted: the axis runs from zero. `"auto"`: cut where the values sit high (niceAxis). A
   * number: start exactly there when no value lies below it. A cut axis is marked on the totals.
   */
  axisStart?: number | "auto";
  /** The figure's accessible reading; by default every row with its figure, and the axis start. */
  label?: string;
  /** Legend words, drawn above the mark for the kinds given. */
  legend?: { level?: string; step?: string; closing?: string; gap?: string };
};

const BAR = 16;
const GAP = 14;
const SLOT = 12;

type Placed = {
  row: WaterfallRow;
  /** Running total before and after; `null` where an earlier step is not stated. */
  from: number | null;
  to: number | null;
};

function place(rows: readonly WaterfallRow[]): Placed[] {
  let running: number | null = 0;
  return rows.map((row): Placed => {
    if (row.kind === "gap") {
      running = null;
      return { row, from: null, to: null };
    }
    if (row.kind !== "step") {
      running = row.value;
      return { row, from: null, to: row.value };
    }
    if (running === null) return { row, from: null, to: null };
    const from: number = running;
    running = from + row.value;
    return { row, from, to: running };
  });
}

const valueText = (row: WaterfallRow) =>
  row.kind === "gap" ? "" : row.kind === "step" ? signedText(row.text, row.value) : row.text;

const UNPLACED = "not placed: an earlier step is not stated";

export function waterfallAxis(rows: readonly WaterfallRow[], axisStart?: number | "auto") {
  const positions = place(rows).flatMap((one) =>
    [one.from, one.to].filter((value): value is number => value !== null),
  );
  if (axisStart === undefined) return niceAxis(positions, { zero: true });
  return niceAxis(positions, {
    zero: false,
    start: axisStart === "auto" ? undefined : axisStart,
  });
}

/** The default reading: every row in order, with its figure, gaps with their reasons. */
export function waterfallReading(rows: readonly WaterfallRow[], unit: string, axis: NiceAxis) {
  const parts = rows.map((row) => {
    if (row.kind === "gap") return `${row.label} not stated: ${row.reason}`;
    if (row.kind === "step")
      return row.value < 0
        ? `less ${row.label} ${signedText(row.text, row.value).slice(1)}`
        : `plus ${row.label} ${signedText(row.text, row.value).replace(/^\+/, "")}`;
    return row.kind === "closing" ? `equals ${row.label} ${row.text}` : `${row.label} ${row.text}`;
  });
  const start = axis.ticks[0]?.label ?? "0";
  return `Waterfall, ${unit}: ${parts.join(", ")}. Axis starts at ${start}${axis.cut ? ", cut" : ""}.`;
}

type Frame = {
  narrow: boolean;
  plotLeft: number;
  plotRight: number;
  labelWidth: number;
  x: (value: number) => number;
};

function frame(placed: Placed[], axis: NiceAxis, width: number): Frame {
  const narrow = width < NARROW;
  const values = placed.map((one) =>
    one.to === null ? 0 : textWidth(valueText(one.row), SIZE.value),
  );
  const room = Math.max(24, ...values) + 10;
  const longest = Math.max(...placed.map((one) => textWidth(one.row.label)));
  const labelWidth = narrow ? width : Math.min(longest + 16, Math.round(width * 0.34));
  const plotLeft = narrow ? 1 : labelWidth;
  const plotRight = Math.max(plotLeft + 60, width - room - 2);
  return {
    narrow,
    plotLeft,
    plotRight,
    labelWidth,
    x: (value) => axis.place(value, plotLeft, plotRight),
  };
}

type Laid = Placed & {
  top: number;
  height: number;
  barY: number;
  labelLines: string[];
  noteLines: string[];
};

function lay(placed: Placed[], f: Frame, top: number): Laid[] {
  let y = top;
  return placed.map((one) => {
    const labelLines = wrap(one.row.label, f.labelWidth - (f.narrow ? 0 : 12));
    const labelHeight = labelLines.length * LINE;
    const barY = f.narrow ? y + labelHeight + 2 : y;
    const noteWidth = f.plotRight - f.plotLeft + (f.narrow ? 0 : 40);
    const noteLines =
      one.row.kind === "gap"
        ? wrap(one.row.reason, noteWidth)
        : one.to === null
          ? wrap(`${valueText(one.row)} · ${UNPLACED}`, noteWidth)
          : [];
    const slot = one.row.kind === "gap" ? SLOT + 4 : 0;
    const markHeight = noteLines.length ? slot + noteLines.length * LINE : BAR;
    const height = f.narrow
      ? labelHeight + 2 + markHeight + GAP
      : Math.max(labelHeight, markHeight) + GAP;
    const laid = { ...one, top: y, height, barY, labelLines, noteLines };
    y += height;
    return laid;
  });
}

/** Where a bar's figure goes: beyond its far end, leftward for a fall when it fits there. */
function valueSpot(left: number, right: number, falls: boolean, text: string, f: Frame) {
  const size = textWidth(text, SIZE.value);
  if (falls && left - f.plotLeft >= size + 6) return { x: left - 6, anchor: "end" as const };
  return { x: right + 6, anchor: "start" as const };
}

function BreakMark({ x, y }: { x: number; y: number }) {
  const at = (offset: number) => String(x + offset);
  const [top, bottom] = [String(y), String(y + BAR)];
  return (
    <path
      data-axis-break=""
      d={`M${at(6)} ${bottom} ${at(10)} ${top}M${at(11)} ${bottom} ${at(15)} ${top}`}
      strokeWidth="1.5"
      fill="none"
      className="stroke-surface-card"
    />
  );
}

function Bar({ one, f, base, cut }: { one: Laid; f: Frame; base: number; cut: boolean }) {
  const { row } = one;
  if (row.kind === "gap" || one.to === null) return null;
  const start = row.kind === "step" ? (one.from ?? base) : base;
  const [left, right] = [f.x(Math.min(start, one.to)), f.x(Math.max(start, one.to))];
  const total = row.kind !== "step";
  const text = valueText(row);
  const spot = valueSpot(left, right, one.to < start, text, f);
  return (
    <g>
      <rect
        data-bar={row.kind}
        data-label={row.label}
        data-from={start}
        data-to={one.to}
        {...(row.kind === "step" ? { "data-step": row.label } : {})}
        x={left}
        y={total ? one.barY : one.barY + 0.75}
        width={Math.max(right - left, 1)}
        height={total ? BAR : BAR - 1.5}
        rx="2"
        strokeWidth={total ? undefined : 1.5}
        className={cx(
          row.kind === "level" && "fill-chart-1",
          row.kind === "closing" && "fill-chart-2",
          row.kind === "step" && "fill-surface-card stroke-chart-2",
        )}
      />
      {total && cut && <BreakMark x={f.x(base)} y={one.barY} />}
      <text
        data-part="value"
        x={spot.x}
        y={one.barY + 12}
        textAnchor={spot.anchor}
        fontSize={SIZE.value}
        {...HALO}
        className={cx("fill-text-primary font-mono", HALO_CLASS, total && "font-medium")}
      >
        {text}
      </text>
    </g>
  );
}

function RowLabel({ one }: { one: Laid }) {
  const total = one.row.kind === "level" || one.row.kind === "closing";
  return (
    <text
      data-part="label"
      x="0"
      y={one.top + 12}
      fontSize={SIZE.label}
      {...HALO}
      className={cx(
        "font-body",
        HALO_CLASS,
        total ? "fill-text-primary font-medium" : "fill-text-secondary",
      )}
    >
      {one.labelLines.map((line, at) => (
        <tspan key={`${String(at)}-${line}`} x="0" y={one.top + 12 + at * LINE}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

function Note({ one, f }: { one: Laid; f: Frame }) {
  if (!one.noteLines.length) return null;
  const first = one.barY + (one.row.kind === "gap" ? SLOT + 4 : 0) + 12;
  return (
    <text
      data-part={one.row.kind === "gap" ? "reason" : "unplaced"}
      x={f.plotLeft}
      y={first}
      fontSize={SIZE.label}
      className="fill-gap-text font-body"
    >
      {one.noteLines.map((line, at) => (
        <tspan key={`${String(at)}-${line}`} x={f.plotLeft} y={first + at * LINE}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

/** Dashed links from each bar's end to the next bar where the walk continues there. */
function connectors(laid: Laid[], f: Frame) {
  return laid
    .slice(0, -1)
    .map((one, at) => {
      const next = laid[at + 1];
      if (!next || one.to === null || next.to === null) return "";
      const meets = next.row.kind === "step" ? next.from : next.to;
      if (meets === null || Math.abs(meets - one.to) > 1e-9 * Math.max(1, Math.abs(one.to)))
        return "";
      return `M${String(f.x(one.to))} ${String(one.barY + BAR)}V${String(next.barY)}`;
    })
    .join("");
}

function legendItems(legend: WaterfallProps["legend"], hasGap: boolean): LegendItem[] {
  if (!legend) return [];
  const named: [LegendItem["tone"], string | undefined][] = [
    ["level", legend.level],
    ["step", legend.step],
    ["closing", legend.closing],
    ["gap", hasGap ? (legend.gap ?? "Not stated") : undefined],
  ];
  return named.flatMap(([tone, text]) => (text ? [{ tone, text }] : []));
}

/**
 * The lead waterfall: rows of stated levels and steps on one scale, each figure beside its bar,
 * a fall drawn leftward with its minus sign, a step the module did not state as the hatched slot
 * with its reason. A cut axis is marked with the break on the totals and stated under the axis.
 */
export function Waterfall({ rows, unit, width, axisStart, label, legend }: WaterfallProps) {
  const axis = waterfallAxis(rows, axisStart);
  const placed = place(rows);
  const f = frame(placed, axis, width);
  const items = legendItems(
    legend,
    rows.some((row) => row.kind === "gap"),
  );
  const legendBlock = legendHeight(items, width);
  const laid = lay(placed, f, legendBlock + 8);
  const plotTop = legendBlock + 4;
  const plotBottom = (laid.at(-1)?.top ?? plotTop) + (laid.at(-1)?.height ?? 0) - GAP + 6;
  const base = axis.cut ? axis.start : 0;
  const kept = fittingTicks(axis, f.plotLeft, f.plotRight, (text) => textWidth(text, SIZE.tick));
  const note = axis.cut
    ? `Axis starts at ${axis.ticks[0]?.label ?? ""}, marked on the total bars.`
    : null;
  const noteLines = note ? wrap(note, width, SIZE.tick) : [];
  const height = plotBottom + 22 + noteLines.length * 14 + 4;
  return (
    <svg
      viewBox={`0 0 ${String(width)} ${String(height)}`}
      width="100%"
      role="img"
      aria-label={label ?? waterfallReading(rows, unit, axis)}
      data-layout={f.narrow ? "narrow" : "wide"}
      className="block"
    >
      <Legend items={items} width={width} />
      <Grid
        ticks={kept}
        x={f.x}
        strong={base}
        bands={
          f.narrow
            ? laid.flatMap((one) =>
                one.row.kind === "gap"
                  ? [[one.barY, one.barY + SLOT + 4] as const]
                  : one.to === null
                    ? []
                    : [[one.barY - 3, one.barY + BAR + 3] as const],
              )
            : [[plotTop, plotBottom] as const]
        }
      />
      <path
        d={connectors(laid, f)}
        fill="none"
        strokeWidth="1"
        strokeDasharray="2 2"
        className="stroke-connector"
      />
      {laid.map((one, at) => (
        <g key={`${String(at)}-${one.row.label}`}>
          <RowLabel one={one} />
          {one.row.kind === "gap" && (
            <GapSlot
              x={f.plotLeft}
              y={one.barY + 2}
              width={f.plotRight - f.plotLeft}
              height={SLOT}
              reason={one.row.reason}
            />
          )}
          <Bar one={one} f={f} base={base} cut={axis.cut} />
          <Note one={one} f={f} />
        </g>
      ))}
      <TickLabels ticks={kept} x={f.x} y={plotBottom + 16} width={width} />
      <AxisNote lines={noteLines} y={plotBottom + 34} />
    </svg>
  );
}
