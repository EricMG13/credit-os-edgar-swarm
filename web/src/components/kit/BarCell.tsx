import { cx } from "@/utils/cx";

const FILL = {
  primary: "bg-chart-1",
  secondary: "bg-chart-2",
  prior: "bg-chart-3",
  signal: "bg-chart-4",
} as const;

/**
 * A table cell's figure with a proportional bar behind the text: `share` is the value over the
 * column's largest value, 0 to 1. The text is the figure exactly as written; the bar adds no number.
 */
export function BarCell({
  text,
  share,
  tone = "primary",
  valueWidth = "w-20",
}: {
  text: string;
  share: number | null;
  tone?: keyof typeof FILL;
  /** The figure column's width class. Rows of one list pass the same class so their bars share a left edge. */
  valueWidth?: string;
}) {
  const width = share === null ? 0 : Math.max(0, Math.min(1, share)) * 100;
  return (
    <span className="flex min-w-0 items-center gap-3">
      <span
        className={cx(
          valueWidth,
          "flex-none text-right font-mono text-small text-text-primary tabular-nums",
        )}
      >
        {text}
      </span>
      <span aria-hidden="true" className="h-2 min-w-0 flex-1 rounded-ds-full bg-surface-subtle">
        {share !== null && (
          <span
            className={cx("block h-full rounded-ds-full", FILL[tone])}
            style={{ width: `${String(width)}%` }}
          />
        )}
      </span>
    </span>
  );
}
