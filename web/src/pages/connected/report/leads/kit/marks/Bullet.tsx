import { cx } from "@/utils/cx";
import { fittingTicks, niceAxis } from "./axis";
import { GapSlot } from "./GapSlot";
import { TickLabels } from "./parts";
import { LINE, NARROW, SIZE, textWidth, wrap } from "./text";

export type BulletFigure = { value: number; text: string };
/** A figure, or the module's reason it is not stated. */
export type BulletSide = BulletFigure | { gap: string };

export type BulletProps = {
  /** The measure's name, drawn above the mark (narrow) or left of it (wide). */
  name: string;
  value: BulletSide;
  limit: BulletFigure;
  proposed?: BulletSide;
  /** The measured width in px; below 520 the narrow layout is drawn. */
  width: number;
  /** `max` (the default): a figure above the limit is beyond it; `min`: one below it is. */
  limitKind?: "max" | "min";
  /** The word for a figure beyond the limit; by default "above the limit" / "below the limit". */
  beyond?: string;
  /** Names for the parts, as the handoff's columns call them. */
  names?: { value?: string; limit?: string; proposed?: string };
  /** What the figures are in, for the reading. */
  unit?: string;
  label?: string;
};

const stated = (side: BulletSide | undefined): side is BulletFigure =>
  side !== undefined && !("gap" in side);

/** A figure that is not a finite number is drawn as the gap, with its text as written. */
const finite = <T extends BulletSide | undefined>(side: T): T | { gap: string } =>
  stated(side) && !Number.isFinite(side.value) ? { gap: side.text } : side;

const BAND = 14;

function isBeyond(figure: BulletSide | undefined, limit: number, kind: "max" | "min") {
  if (!stated(figure)) return false;
  return kind === "max" ? figure.value > limit : figure.value < limit;
}

/** The default reading: the value, the proposed, the limit, and the word for one beyond it. */
function bulletReading(props: BulletProps) {
  const { name, value, limit, proposed, unit, limitKind = "max" } = props;
  const word = props.beyond ?? (limitKind === "max" ? "above the limit" : "below the limit");
  const names = { value: "Current", limit: "Limit", proposed: "Proposed", ...props.names };
  const part = (label: string, side: BulletSide) =>
    stated(side)
      ? `${label} ${side.text}${isBeyond(side, limit.value, limitKind) ? `, ${word}` : ""}`
      : `${label} not stated: ${side.gap}`;
  const parts = [
    part(names.value, value),
    ...(proposed ? [part(names.proposed, proposed)] : []),
    `${names.limit} ${limit.text}`,
  ];
  return `${name}${unit ? `, ${unit}` : ""}: ${parts.join("; ")}. Scale from zero.`;
}

/**
 * The lead bullet: one measure's value as a bar against its limit (a rule) and, where stated, the
 * proposed figure (a ring), on one scale from zero. A figure beyond the limit carries the word,
 * never colour alone; a value the module did not state is the hatched slot with its reason.
 */
type Spot = { x: number; anchor: "start" | "end"; inside: boolean } | null;

/**
 * Where the value's figure goes: beside the bar's end when no other mark is in the way; inside
 * the bar's end when the bar is long enough and the limit is not under the text; otherwise not on
 * the mark (`null`: it is written in the line under the scale).
 */
function valueSpot(end: number, zero: number, others: readonly number[], size: number): Spot {
  const after = others.filter((at) => at > end + 1).map((at) => at - end);
  if (!after.length || Math.min(...after) >= size + 14)
    return { x: end + 6, anchor: "start", inside: false };
  const under = others.some((at) => at >= end - size - 12 && at <= end + 1);
  if (end - zero >= size + 12 && !under) return { x: end - 6, anchor: "end", inside: true };
  return null;
}

export function Bullet(props: BulletProps) {
  const { name, limit, width, limitKind = "max" } = props;
  const value = finite(props.value);
  const proposed = finite(props.proposed);
  const word = props.beyond ?? (limitKind === "max" ? "above the limit" : "below the limit");
  const names = { value: "Current", limit: "Limit", proposed: "Proposed", ...props.names };
  const narrow = width < NARROW;
  const figures = [value, limit, proposed].filter(stated).map((one) => one.value);
  const axis = niceAxis(figures, { zero: true });
  const nameWidth = narrow ? width : Math.min(textWidth(name) + 16, Math.round(width * 0.28));
  const nameLines = wrap(name, nameWidth - (narrow ? 0 : 12));
  const plotLeft = narrow ? 1 : nameWidth;
  const valueSize = stated(value) ? textWidth(value.text, SIZE.value) : 0;
  const plotRight = width - valueSize - 14;
  const x = (figure: number) => axis.place(figure, plotLeft, plotRight);
  const top = narrow ? nameLines.length * LINE + 4 : 0;
  const bandY = top + 20;
  const mid = bandY + BAND / 2;
  const zero = x(0);
  const limitX = x(limit.value);
  const proposedX = stated(proposed) ? x(proposed.value) : null;
  const end = stated(value) ? x(value.value) : zero;
  const valueBeyond = isBeyond(value, limit.value, limitKind);
  const proposedBeyond = isBeyond(proposed, limit.value, limitKind);
  const spot = stated(value)
    ? valueSpot(end, zero, [limitX, ...(proposedX === null ? [] : [proposedX - 6])], valueSize)
    : null;
  const lines: { text: string; gap: boolean }[] = [
    ...(stated(value) && (!spot || valueBeyond)
      ? [{ text: `${names.value} ${value.text}${valueBeyond ? `, ${word}` : ""}`, gap: false }]
      : []),
    ...(stated(value) ? [] : [{ text: `${names.value}: ${value.gap}`, gap: true }]),
    ...(stated(proposed)
      ? [
          {
            text: `${names.proposed} ${proposed.text}${proposedBeyond ? `, ${word}` : ""}`,
            gap: false,
          },
        ]
      : proposed
        ? [{ text: `${names.proposed}: ${proposed.gap}`, gap: true }]
        : []),
  ];
  const below = lines.flatMap((line) =>
    wrap(line.text, width - plotLeft).map((text) => ({ text, gap: line.gap })),
  );
  const ticksY = bandY + BAND + 4;
  const belowY = ticksY + 36;
  const height = belowY + Math.max(0, below.length - 1) * LINE + (below.length ? 6 : -10);
  const limitText = `${names.limit} ${limit.text}`;
  const half = textWidth(limitText) / 2;
  const limitAnchor = limitX - half < plotLeft ? "start" : limitX + half > width ? "end" : "middle";
  const kept = fittingTicks(axis, plotLeft, plotRight, (text) => textWidth(text, SIZE.tick));
  return (
    <svg
      viewBox={`0 0 ${String(width)} ${String(height)}`}
      width="100%"
      role="img"
      aria-label={props.label ?? bulletReading(props)}
      data-layout={narrow ? "narrow" : "wide"}
      className="block"
    >
      <text
        data-part="label"
        x="0"
        y={narrow ? 12 : mid + 4}
        fontSize={SIZE.label}
        className="fill-text-primary font-body font-medium"
      >
        {nameLines.map((line, at) => (
          <tspan key={`${String(at)}-${line}`} x="0" y={(narrow ? 12 : mid + 4) + at * LINE}>
            {line}
          </tspan>
        ))}
      </text>
      <rect
        x={plotLeft}
        y={bandY}
        width={plotRight - plotLeft}
        height={BAND}
        rx="2"
        className="fill-surface-subtle"
      />
      {stated(value) ? (
        <>
          <rect
            data-bar="value"
            data-value={value.value}
            x={Math.min(zero, end)}
            y={bandY + 2}
            width={Math.max(Math.abs(end - zero), 1)}
            height={BAND - 4}
            rx="2"
            className="fill-chart-1"
          />
          {valueBeyond && (
            <rect
              data-bar="beyond"
              x={Math.min(limitX, end)}
              y={bandY + 2}
              width={Math.abs(end - limitX)}
              height={BAND - 4}
              className="fill-warning-mark"
            />
          )}
        </>
      ) : (
        <GapSlot
          x={plotLeft}
          y={bandY + 2}
          width={plotRight - plotLeft}
          height={BAND - 4}
          reason={value.gap}
        />
      )}
      <line
        data-mark="limit"
        data-value={limit.value}
        x1={limitX}
        x2={limitX}
        y1={bandY - 3}
        y2={bandY + BAND + 3}
        strokeWidth="2"
        className="stroke-text-primary"
      />
      <text
        data-part="limit"
        x={limitAnchor === "start" ? Math.max(limitX, plotLeft) : limitX}
        y={top + 12}
        textAnchor={limitAnchor}
        fontSize={SIZE.label}
        className="fill-text-secondary font-body"
      >
        {limitText}
      </text>
      {proposedX !== null && (
        <circle
          data-mark="proposed"
          data-value={stated(proposed) ? proposed.value : undefined}
          cx={proposedX}
          cy={mid}
          r="5"
          strokeWidth="2"
          className={cx(
            "fill-surface-card",
            proposedBeyond ? "stroke-warning-mark" : "stroke-chart-2",
          )}
        />
      )}
      {stated(value) && spot && (
        <text
          data-part="value"
          x={spot.x}
          y={mid + 4}
          textAnchor={spot.anchor}
          fontSize={SIZE.value}
          className={cx(
            "font-mono font-medium",
            spot.inside ? "fill-surface-card" : "fill-text-primary",
          )}
        >
          {value.text}
        </text>
      )}
      <g data-part="scale">
        {kept.map((tick) => (
          <line
            key={tick.value}
            x1={x(tick.value)}
            x2={x(tick.value)}
            y1={ticksY}
            y2={ticksY + 4}
            className="stroke-border-container"
          />
        ))}
        <TickLabels ticks={kept} x={x} y={ticksY + 16} width={width} />
      </g>
      {below.map((line, at) => (
        <text
          key={`${String(at)}-${line.text}`}
          data-part={line.gap ? "reason" : "below"}
          x={plotLeft}
          y={belowY + at * LINE}
          fontSize={SIZE.label}
          className={cx("font-body", line.gap ? "fill-gap-text" : "fill-text-secondary")}
        >
          {line.text}
        </text>
      ))}
    </svg>
  );
}
