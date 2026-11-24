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

const BAND = 14;

function isBeyond(figure: BulletSide | undefined, limit: number, kind: "max" | "min") {
  if (!stated(figure)) return false;
  return kind === "max" ? figure.value > limit : figure.value < limit;
}

/** The default reading: the value, the proposed, the limit, and the word for one beyond it. */
export function bulletReading(props: BulletProps) {
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
export function Bullet(props: BulletProps) {
  const { name, value, limit, proposed, width, limitKind = "max" } = props;
  const word = props.beyond ?? (limitKind === "max" ? "above the limit" : "below the limit");
  const names = { value: "Current", limit: "Limit", proposed: "Proposed", ...props.names };
  const narrow = width < NARROW;
  const figures = [value, limit, proposed].filter(stated).map((one) => one.value);
  const axis = niceAxis(figures, { zero: true });
  const valueText = stated(value) ? value.text : "";
  const nameWidth = narrow ? width : Math.min(textWidth(name) + 16, Math.round(width * 0.28));
  const nameLines = wrap(name, nameWidth - (narrow ? 0 : 12));
  const plotLeft = narrow ? 1 : nameWidth;
  const plotRight = width - textWidth(valueText, SIZE.value) - 14;
  const x = (figure: number) => axis.place(figure, plotLeft, plotRight);
  const top = narrow ? nameLines.length * LINE + 4 : 0;
  const limitY = top + 12;
  const bandY = top + 20;
  const mid = bandY + BAND / 2;
  const valueBeyond = isBeyond(value, limit.value, limitKind);
  const proposedBeyond = isBeyond(proposed, limit.value, limitKind);
  const below = [
    ...(stated(proposed)
      ? [`${names.proposed} ${proposed.text}${proposedBeyond ? `, ${word}` : ""}`]
      : proposed
        ? [`${names.proposed} not stated: ${proposed.gap}`]
        : []),
    ...(valueBeyond ? [`${names.value} ${valueText}, ${word}`] : []),
    ...(stated(value) ? [] : [`${names.value} not stated: ${value.gap}`]),
  ].flatMap((text) => wrap(text, width - plotLeft));
  const belowY = bandY + BAND + 18;
  const ticksY = belowY + below.length * LINE + 4;
  const height = ticksY + 6;
  const limitText = `${names.limit} ${limit.text}`;
  const limitX = x(limit.value);
  const half = textWidth(limitText) / 2;
  const limitAnchor = limitX - half < plotLeft ? "start" : limitX + half > width ? "end" : "middle";
  const zero = x(0);
  const kept = fittingTicks(axis, plotLeft, plotRight, (text) => textWidth(text, SIZE.tick));
  const end = stated(value) ? x(value.value) : zero;
  const farthest = Math.max(end, limitX, stated(proposed) ? x(proposed.value) + 6 : 0);
  return (
    <svg
      viewBox={`0 0 ${String(width)} ${String(height + 12)}`}
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
        y={limitY}
        textAnchor={limitAnchor}
        fontSize={SIZE.label}
        className="fill-text-secondary font-body"
      >
        {limitText}
      </text>
      {stated(proposed) && (
        <circle
          data-mark="proposed"
          data-value={proposed.value}
          cx={x(proposed.value)}
          cy={mid}
          r="5"
          strokeWidth="2"
          className={cx(
            "fill-surface-card",
            proposedBeyond ? "stroke-warning-mark" : "stroke-chart-2",
          )}
        />
      )}
      {stated(value) && (
        <text
          data-part="value"
          x={farthest + 8}
          y={mid + 4}
          fontSize={SIZE.value}
          className="fill-text-primary font-mono font-medium"
        >
          {valueText}
        </text>
      )}
      {below.map((line, at) => (
        <text
          key={`${String(at)}-${line}`}
          data-part="below"
          x={plotLeft}
          y={belowY + at * LINE}
          fontSize={SIZE.label}
          className={cx(
            "font-body",
            /not stated/.test(line) ? "fill-gap-text" : "fill-text-secondary",
          )}
        >
          {line}
        </text>
      ))}
      <g transform={`translate(0 ${String(ticksY - 4)})`}>
        {kept.map((tick) => (
          <line
            key={tick.value}
            x1={x(tick.value)}
            x2={x(tick.value)}
            y1="0"
            y2="4"
            className="stroke-border-container"
          />
        ))}
        <TickLabels ticks={kept} x={x} y={16} width={width} />
      </g>
    </svg>
  );
}
