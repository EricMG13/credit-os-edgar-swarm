import { cx } from "@/utils/cx";

/**
 * A bar from a zero axis, for a list that holds a negative figure: positive to the right of the
 * axis, negative to its left, both to the one scale of the list (`low` and `high` are the list's
 * own lowest and highest figures, with zero between them). `text` is the figure as written; the
 * bar adds no number, and the sign is in the text, not only in the fill.
 */
export function ZeroAxisBar({
  text,
  value,
  low,
  high,
  valueWidth,
}: {
  text: string;
  value: number;
  low: number;
  high: number;
  valueWidth: string;
}) {
  const from = Math.min(0, low);
  const to = Math.max(0, high);
  const span = to - from || 1;
  const zero = ((0 - from) / span) * 100;
  const end = ((value - from) / span) * 100;
  const left = Math.min(zero, end);
  const width = Math.abs(end - zero);
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
      <span aria-hidden="true" className="relative h-2 min-w-0 flex-1 rounded-ds-full bg-surface-subtle">
        <span
          className={cx("absolute h-full", value < 0 ? "bg-chart-2" : "bg-chart-1")}
          style={{ left: `${String(left)}%`, width: `${String(width)}%` }}
        />
        <span
          className="absolute -top-1 h-4 w-px bg-text-primary"
          style={{ left: `${String(zero)}%` }}
        />
      </span>
    </span>
  );
}
