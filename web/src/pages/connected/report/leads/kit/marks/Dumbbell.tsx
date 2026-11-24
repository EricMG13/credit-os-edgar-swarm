import { cx } from "@/utils/cx";
import type { MarkTone } from "../../../overview/marks";
import { fittingTicks, niceAxis, type NiceAxis } from "./axis";
import { GapSlot } from "./GapSlot";
import { AxisNote, Legend, TickLabels, legendHeight, type LegendItem } from "./parts";
import { LINE, NARROW, SIZE, textWidth, wrap } from "./text";

/** One side of a pair: a stated figure, or the module's reason it is not stated. */
export type DumbbellSide = { value: number; text: string } | { gap: string };

export type DumbbellRow = {
  label: string;
  prior: DumbbellSide;
  current: DumbbellSide;
  /** The change as the page may print it (stated, or the exact prior → current difference). */
  change?: string;
  /** A second line under the change: direction and, from `tone()`, better or worse. */
  note?: string;
  /** `worse` draws the current dot in the signal colour; the word must be in `note`. */
  tone?: MarkTone;
};

export type DumbbellProps = {
  rows: readonly DumbbellRow[];
  /** The measured width in px; below 520 the narrow layout is drawn. */
  width: number;
  /** The two periods' names, for the legend and the reading. */
  periods: { prior: string; current: string };
  /** What the figures are in, for the reading. */
  unit: string;
  /** Omitted: the shared scale runs from zero. `"auto"` or a number: a cut axis, stated under it. */
  axisStart?: number | "auto";
  label?: string;
  /** Draw the legend (prior ring, current dot, the gap swatch where a side is not stated). */
  legend?: boolean;
};

const known = (side: DumbbellSide): side is { value: number; text: string } => !("gap" in side);

const GAP = 12;
const MARK = 24;

export function dumbbellAxis(rows: readonly DumbbellRow[], axisStart?: number | "auto") {
  const values = rows.flatMap((row) => [row.prior, row.current].filter(known).map((s) => s.value));
  if (axisStart === undefined) return niceAxis(values, { zero: true });
  return niceAxis(values, { zero: false, start: axisStart === "auto" ? undefined : axisStart });
}

const sideReading = (side: DumbbellSide, period: string) =>
  known(side) ? `${side.text} in ${period}` : `${period} not stated: ${side.gap}`;

export function dumbbellReading(
  rows: readonly DumbbellRow[],
  periods: DumbbellProps["periods"],
  unit: string,
  axis: NiceAxis,
) {
  const parts = rows.map((row) => {
    const change = [row.change, row.note].filter(Boolean).join(", ");
    return `${row.label} ${sideReading(row.prior, periods.prior)} and ${sideReading(row.current, periods.current)}${change ? `, ${change}` : ""}`;
  });
  const start = axis.cut ? ` Axis starts at ${axis.ticks[0]?.label ?? ""}.` : "";
  return `${unit}, ${periods.prior} to ${periods.current}: ${parts.join("; ")}.${start}`;
}

/** Which stated figure sits on which side, so each label goes outward, away from the other mark. */
function sides(row: DumbbellRow) {
  const [prior, current] = [row.prior, row.current];
  if (known(prior) && known(current)) {
    const priorLeft = prior.value <= current.value;
    return {
      left: priorLeft ? prior.text : current.text,
      right: priorLeft ? current.text : prior.text,
    };
  }
  const one = [prior, current].find(known);
  return { left: "", right: one?.text ?? "" };
}

type Frame = {
  narrow: boolean;
  labelWidth: number;
  changeX: number;
  changeWidth: number;
  plotLeft: number;
  plotRight: number;
  x: (value: number) => number;
};

function frame(rows: readonly DumbbellRow[], axis: NiceAxis, width: number): Frame {
  const narrow = width < NARROW;
  const placed = rows.map(sides);
  const padLeft = Math.max(0, ...placed.map((one) => textWidth(one.left, SIZE.value))) + 16;
  const padRight = Math.max(0, ...placed.map((one) => textWidth(one.right, SIZE.value))) + 16;
  const longest = Math.max(...rows.map((row) => textWidth(row.label)));
  const changes = rows.map((row) =>
    Math.max(textWidth(row.change ?? ""), textWidth(row.note ?? "")),
  );
  const gaps = rows.some((row) => !known(row.prior) || !known(row.current));
  const wanted = Math.max(0, ...changes) + 16;
  const changeWidth = narrow
    ? width
    : Math.min(Math.max(wanted, gaps ? 170 : 0), Math.round(width * 0.3));
  const labelWidth = narrow ? width : Math.min(longest + 16, Math.round(width * 0.28));
  const plotLeft = narrow ? 0 : labelWidth;
  const plotRight = narrow ? width : width - changeWidth;
  const inner: [number, number] = [
    plotLeft + padLeft,
    Math.max(plotLeft + padLeft + 40, plotRight - padRight),
  ];
  return {
    narrow,
    labelWidth,
    changeX: narrow ? 0 : plotRight + 12,
    changeWidth: narrow ? width : changeWidth - 12,
    plotLeft,
    plotRight,
    x: (value) => axis.place(value, inner[0], inner[1]),
  };
}

type Laid = {
  row: DumbbellRow;
  top: number;
  height: number;
  cy: number;
  labelLines: string[];
  /** Change, note and gap reasons, each line with its kind. */
  side: { text: string; kind: "change" | "note" | "reason" }[];
  /** The narrow layout puts a short change on the label's line, right-aligned. */
  inline: boolean;
};

function reasons(row: DumbbellRow, periods: DumbbellProps["periods"]) {
  return [
    known(row.prior) ? null : `${periods.prior}: ${row.prior.gap}`,
    known(row.current) ? null : `${periods.current}: ${row.current.gap}`,
  ].filter((text): text is string => text !== null);
}

function lay(
  rows: readonly DumbbellRow[],
  f: Frame,
  periods: DumbbellProps["periods"],
  top: number,
) {
  let y = top;
  return rows.map((row): Laid => {
    const labelLines = wrap(row.label, f.labelWidth - (f.narrow ? 0 : 12));
    const change = row.change ?? "";
    const inline =
      f.narrow &&
      labelLines.length === 1 &&
      !row.note &&
      textWidth(row.label) + textWidth(change) + 16 <= f.changeWidth;
    const side = [
      ...(row.change && !inline ? [{ text: row.change, kind: "change" as const }] : []),
      ...(row.note ? [{ text: row.note, kind: "note" as const }] : []),
      ...reasons(row, periods).flatMap((text) =>
        wrap(text, f.changeWidth).map((line) => ({ text: line, kind: "reason" as const })),
      ),
    ];
    const labelHeight = labelLines.length * LINE;
    const gapStrip = !known(row.prior) || !known(row.current) ? 6 : 0;
    const height = f.narrow
      ? labelHeight + side.length * LINE + MARK + gapStrip + GAP
      : Math.max(labelHeight, side.length * LINE, MARK + gapStrip) + GAP;
    const cy = f.narrow ? y + labelHeight + side.length * LINE + 12 : y + 8;
    const laid = { row, top: y, height, cy, labelLines, side, inline };
    y += height;
    return laid;
  });
}

function Pair({ one, f, reason }: { one: Laid; f: Frame; reason: string }) {
  const { row, cy } = one;
  const [prior, current] = [row.prior, row.current];
  const both = known(prior) && known(current);
  const flat = both && prior.value === current.value;
  const { left, right } = sides(row);
  const points = [prior, current].filter(known).map((side) => f.x(side.value));
  const [low, high] = [Math.min(...points), Math.max(...points)];
  const gap = !both;
  return (
    <g data-row={row.label}>
      {gap && (
        <GapSlot
          x={f.plotLeft}
          y={points.length ? cy + 9 : cy - 7}
          width={f.plotRight - f.plotLeft}
          height={points.length ? 8 : 14}
          reason={reason}
        />
      )}
      {both && !flat && (
        <line x1={low} x2={high} y1={cy} y2={cy} strokeWidth="2" className="stroke-chart-3" />
      )}
      {known(prior) && (
        <circle
          data-prior={prior.value}
          cx={f.x(prior.value)}
          cy={cy}
          r={flat ? 8 : 5}
          strokeWidth="2"
          className="fill-surface-card stroke-chart-3"
        />
      )}
      {known(current) && (
        <circle
          data-current={current.value}
          cx={f.x(current.value)}
          cy={cy}
          r={flat ? 4 : 6}
          className={row.tone === "worse" ? "fill-warning-mark" : "fill-chart-1"}
        />
      )}
      {left && (
        <text
          data-part="value"
          x={low - (flat ? 14 : 12)}
          y={cy + 4}
          textAnchor="end"
          fontSize={SIZE.value}
          className="fill-text-secondary font-mono"
        >
          {left}
        </text>
      )}
      {right && (
        <text
          data-part="value"
          x={high + (flat ? 14 : 12)}
          y={cy + 4}
          fontSize={SIZE.value}
          className="fill-text-primary font-mono font-medium"
        >
          {right}
        </text>
      )}
    </g>
  );
}

function Words({ one, f, width }: { one: Laid; f: Frame; width: number }) {
  const first = f.narrow ? one.top + 12 + one.labelLines.length * LINE : one.top + 12;
  return (
    <g>
      <text
        data-part="label"
        x="0"
        y={one.top + 12}
        fontSize={SIZE.label}
        className="fill-text-primary font-body font-medium"
      >
        {one.labelLines.map((line, at) => (
          <tspan key={`${String(at)}-${line}`} x="0" y={one.top + 12 + at * LINE}>
            {line}
          </tspan>
        ))}
      </text>
      {one.inline && one.row.change && (
        <text
          data-part="change"
          x={width}
          y={one.top + 12}
          textAnchor="end"
          fontSize={SIZE.value}
          className="fill-text-primary font-mono font-medium"
        >
          {one.row.change}
        </text>
      )}
      {one.side.map((line, at) => (
        <text
          key={`${String(at)}-${line.text}`}
          data-part={line.kind}
          x={f.changeX}
          y={first + at * LINE}
          fontSize={SIZE.value}
          className={cx(
            line.kind === "change" && "fill-text-primary font-mono font-medium",
            line.kind === "note" && "fill-text-secondary font-body",
            line.kind === "reason" && "fill-gap-text font-body",
          )}
        >
          {line.text}
        </text>
      ))}
    </g>
  );
}

/**
 * The lead dumbbell: per row the prior figure as a ring and the current as a dot on one shared
 * scale (from zero unless the axis is cut, which is then stated), each figure written outward
 * so it never sits on a mark, the change the page may print beside it, and a side the module did
 * not state as the hatched strip with its reason.
 */
export function Dumbbell({
  rows,
  width,
  periods,
  unit,
  axisStart,
  label,
  legend = true,
}: DumbbellProps) {
  const axis = dumbbellAxis(rows, axisStart);
  const f = frame(rows, axis, width);
  const items: LegendItem[] = legend
    ? [
        { tone: "prior", text: periods.prior },
        { tone: "current", text: periods.current },
        ...(rows.some((row) => row.tone === "worse")
          ? [{ tone: "worse" as const, text: `${periods.current}, worse` }]
          : []),
        ...(rows.some((row) => !known(row.prior) || !known(row.current))
          ? [{ tone: "gap" as const, text: "Not stated" }]
          : []),
      ]
    : [];
  const legendBlock = legendHeight(items, width);
  const laid = lay(rows, f, periods, legendBlock + (legendBlock ? 10 : 2));
  const plotTop = legendBlock + 2;
  const plotBottom = (laid.at(-1)?.top ?? plotTop) + (laid.at(-1)?.height ?? 0) - GAP + 4;
  const [inLeft, inRight] = [f.x(axis.start), f.x(axis.end)];
  const kept = fittingTicks(axis, inLeft, inRight, (text) => textWidth(text, SIZE.tick));
  const note = axis.cut
    ? wrap(`Axis starts at ${axis.ticks[0]?.label ?? ""}, not at zero.`, width, SIZE.tick)
    : [];
  const height = plotBottom + 22 + note.length * 14 + 4;
  return (
    <svg
      viewBox={`0 0 ${String(width)} ${String(height)}`}
      width="100%"
      role="img"
      aria-label={label ?? dumbbellReading(rows, periods, unit, axis)}
      data-layout={f.narrow ? "narrow" : "wide"}
      className="block"
    >
      <Legend items={items} width={width} />
      {kept.map((tick) => (
        <line
          key={tick.value}
          x1={f.x(tick.value)}
          x2={f.x(tick.value)}
          y1={plotTop}
          y2={plotBottom}
          className={tick.value === 0 ? "stroke-text-tertiary" : "stroke-border-hairline"}
        />
      ))}
      {laid.map((one, at) => (
        <g key={`${String(at)}-${one.row.label}`}>
          <Words one={one} f={f} width={width} />
          <Pair one={one} f={f} reason={reasons(one.row, periods).join(" · ")} />
        </g>
      ))}
      <TickLabels ticks={kept} x={f.x} y={plotBottom + 16} width={width} />
      <AxisNote lines={note} y={plotBottom + 34} />
    </svg>
  );
}
