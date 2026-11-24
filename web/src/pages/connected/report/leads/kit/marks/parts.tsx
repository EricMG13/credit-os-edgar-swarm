import type { AxisTick } from "./axis";
import { GapSlot } from "./GapSlot";
import { SIZE, textWidth } from "./text";

/** The swatch kinds a mark's legend can show; each is drawn as the mark itself is. */
export type LegendTone =
  "level" | "step" | "closing" | "gap" | "prior" | "current" | "worse" | "limit" | "proposed";

export type LegendItem = { tone: LegendTone; text: string };

const ROW = 18;
const SWATCH = 12;

function flow(items: readonly LegendItem[], width: number) {
  let x = 0;
  let y = 0;
  return items.map((item) => {
    const size = SWATCH + 6 + textWidth(item.text) + 16;
    if (x > 0 && x + size > width) {
      x = 0;
      y += ROW;
    }
    const spot = { item, x, y };
    x += size;
    return spot;
  });
}

/** The height a legend of `items` takes at `width` (0 for none). */
export function legendHeight(items: readonly LegendItem[], width: number) {
  if (!items.length) return 0;
  return (flow(items, width).at(-1)?.y ?? 0) + ROW;
}

function Swatch({ tone, x, y }: { tone: LegendTone; x: number; y: number }) {
  const middle = y + 5;
  switch (tone) {
    case "level":
      return <rect x={x} y={y} width={SWATCH} height="10" rx="2" className="fill-chart-1" />;
    case "closing":
      return <rect x={x} y={y} width={SWATCH} height="10" rx="2" className="fill-chart-2" />;
    case "step":
      return (
        <rect
          x={x + 0.75}
          y={y + 0.75}
          width={SWATCH - 1.5}
          height="8.5"
          rx="2"
          strokeWidth="1.5"
          className="fill-surface-card stroke-chart-2"
        />
      );
    case "gap":
      return <GapSlot x={x} y={y} width={SWATCH} height={10} />;
    case "prior":
      return (
        <circle
          cx={x + 6}
          cy={middle}
          r="4"
          strokeWidth="2"
          className="fill-surface-card stroke-chart-3"
        />
      );
    case "current":
      return <circle cx={x + 6} cy={middle} r="5" className="fill-chart-1" />;
    case "worse":
      return <circle cx={x + 6} cy={middle} r="5" className="fill-warning-mark" />;
    case "limit":
      return (
        <line
          x1={x + 6}
          x2={x + 6}
          y1={y - 1}
          y2={y + 11}
          strokeWidth="2"
          className="stroke-text-primary"
        />
      );
    case "proposed":
      return (
        <circle
          cx={x + 6}
          cy={middle}
          r="4"
          strokeWidth="2"
          className="fill-surface-card stroke-chart-2"
        />
      );
  }
}

/** A mark's legend at the top of its SVG, wrapping at `width`. */
export function Legend({ items, width }: { items: readonly LegendItem[]; width: number }) {
  if (!items.length) return null;
  return (
    <g data-part="legend">
      {flow(items, width).map(({ item, x, y }) => (
        <g key={`${item.tone}-${item.text}`}>
          <Swatch tone={item.tone} x={x} y={y + 2} />
          <text
            data-part="legend-text"
            x={x + SWATCH + 6}
            y={y + 11}
            fontSize={SIZE.label}
            className="fill-text-secondary font-body"
          >
            {item.text}
          </text>
        </g>
      ))}
    </g>
  );
}

/** Tick labels under an axis; the end labels are kept inside the figure. */
export function TickLabels({
  ticks,
  x,
  y,
  width,
}: {
  ticks: readonly AxisTick[];
  x: (value: number) => number;
  y: number;
  width: number;
}) {
  return (
    <g data-part="ticks">
      {ticks.map((tick) => {
        const at = x(tick.value);
        const half = textWidth(tick.label, SIZE.tick) / 2;
        const anchor = at - half < 0 ? "start" : at + half > width ? "end" : "middle";
        return (
          <text
            key={tick.value}
            data-part="tick"
            x={anchor === "start" ? Math.max(at, 0) : anchor === "end" ? Math.min(at, width) : at}
            y={y}
            textAnchor={anchor}
            fontSize={SIZE.tick}
            className="fill-text-tertiary font-mono"
          >
            {tick.label}
          </text>
        );
      })}
    </g>
  );
}

/** A line under the axis that states where a cut axis starts. */
export function AxisNote({ lines, y }: { lines: readonly string[]; y: number }) {
  if (!lines.length) return null;
  return (
    <text data-part="axis-note" x="0" y={y} fontSize={SIZE.tick} className="fill-text-tertiary">
      {lines.map((line, at) => (
        <tspan key={`${String(at)}-${line}`} x="0" y={y + at * 14}>
          {line}
        </tspan>
      ))}
    </text>
  );
}
