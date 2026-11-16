import { Line, type DotItemDotProps } from "recharts";
import { Mark } from "./marks";
import type { SeriesStyle } from "./series";

const LABEL_FILL = "var(--color-text-primary)";

interface SeriesLineProps {
  name: string;
  dataKey: string;
  style: SeriesStyle;
  labels?: (string | null)[];
  labelOffset?: number;
}

function point(
  { cx, cy, value, index }: DotItemDotProps,
  { name, style, labels, labelOffset }: SeriesLineProps,
) {
  if (typeof cx !== "number" || typeof cy !== "number" || typeof value !== "number") return null;
  const mark = <Mark marker={style.marker} color={style.color} x={cx} y={cy} series={name} />;
  if (!labels) return mark;
  const label = labels[index];
  return (
    <g key={index}>
      {mark}
      {label == null || labelOffset === undefined ? null : (
        <text
          data-label=""
          data-series={name}
          x={cx}
          y={cy + labelOffset}
          textAnchor="middle"
          fontSize={12}
          fill={LABEL_FILL}
        >
          {label}
        </text>
      )}
    </g>
  );
}

/** Shared line and marker styling for chart series. */
export function SeriesLine(props: SeriesLineProps) {
  const { name, dataKey, style } = props;
  return (
    <Line
      key={name}
      dataKey={dataKey}
      name={name}
      stroke={style.color}
      strokeWidth={2}
      strokeDasharray={style.dash}
      connectNulls={false}
      isAnimationActive={false}
      activeDot={false}
      dot={(pointProps) => point(pointProps, props)}
    />
  );
}
