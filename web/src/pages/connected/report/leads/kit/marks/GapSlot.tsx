import { useId, type ReactNode } from "react";
import { GapPattern } from "../../../overview/figureParts";
import { useFigureWidth } from "../useWidth";
import { svgId } from "./text";

/**
 * The hatched not-known slot inside an SVG: where a figure would be drawn, for one the module did
 * not state. It carries its own hatch, so it can sit in any mark. Never zero, never blank: the
 * reason is written beside it by the mark (here it is only on `data-gap`).
 */
export function GapSlot({
  x,
  y,
  width,
  height,
  reason,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  /** The module's reason, on `data-gap` for tests; omitted for a legend swatch. */
  reason?: string;
}) {
  const id = svgId(useId(), "gap");
  return (
    <g {...(reason === undefined ? {} : { "data-gap": reason })}>
      <defs>
        <GapPattern id={id} />
      </defs>
      <rect
        x={x}
        y={y}
        width={Math.max(width, 8)}
        height={height}
        rx="2"
        fill={`url(#${id})`}
        strokeWidth="1"
        strokeDasharray="3 2"
        className="stroke-border-gap"
      />
    </g>
  );
}

/**
 * A measured box for one mark: `children` gets the box's pixel width (the fallback before the
 * first measure and in jsdom) and draws at it.
 */
export function Measured({
  fallback,
  children,
}: {
  fallback: number;
  children: (width: number) => ReactNode;
}) {
  const [ref, width] = useFigureWidth(fallback);
  return (
    <div ref={ref} className="w-full min-w-0">
      {children(width)}
    </div>
  );
}
