import { ArrowDown, ArrowUp } from "@untitledui/icons";
import { Missing } from "@/components/gap/Missing";
import { cx } from "@/utils/cx";
import { changeSign, changeText, tone } from "../signal";
import { withUnit } from "../publishedReport";
import { ToneMark } from "../report/ToneMark";
import { stated } from "../reportView";

type Figure = {
  value?: number | string | null;
  unit?: string | null;
  period?: string | null;
  prior?: { value: string; period: string };
  change?: string;
};

const MARK_WIDTH = 64;
const PAD = 6;

const number = (text: string | number) => Number(String(text).replaceAll(",", ""));

const DOT = {
  better: "text-success-mark",
  worse: "text-warning-mark",
  flat: "text-text-secondary",
  none: "text-text-secondary",
} as const;

/**
 * Two points on one short line: the prior value hollow, the current value filled. The line is
 * scaled to the two values alone, so it shows which way and how much of the pair's own span;
 * it carries no number of its own.
 */
function TwoPoint({
  prior,
  current,
  kind,
}: {
  prior: number;
  current: number;
  kind: keyof typeof DOT;
}) {
  const low = Math.min(prior, current);
  const span = Math.max(prior, current) - low;
  const at = (value: number) =>
    span === 0 ? MARK_WIDTH / 2 : PAD + ((value - low) / span) * (MARK_WIDTH - 2 * PAD);
  return (
    <svg
      aria-hidden="true"
      width={MARK_WIDTH}
      height="12"
      viewBox={`0 0 ${String(MARK_WIDTH)} 12`}
      className="text-chart-3"
    >
      <line x1={at(prior)} x2={at(current)} y1="6" y2="6" stroke="currentColor" strokeWidth="1.5" />
      <circle
        cx={at(prior)}
        cy="6"
        r="3.25"
        fill="var(--color-surface-card)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx={at(current)} cy="6" r="3.75" fill="currentColor" className={DOT[kind]} />
    </svg>
  );
}

/**
 * One headline figure of a library row: the value in mono, a prior → current mark, and the change
 * with its direction word where the owner's table gives the measure one. A figure the catalogue
 * does not state is the gap cell, never zero.
 */
export function FigureMark({
  name,
  metricKey,
  figure,
  className,
  children,
}: {
  name: string;
  metricKey: string;
  figure: Figure | undefined;
  className?: string;
  /** A line the row adds beneath the figure, as the catalogue wrote it. */
  children?: React.ReactNode;
}) {
  if (!stated(figure))
    return (
      <div className={cx("flex min-w-0 flex-col gap-1", className)}>
        <span className="text-caption text-text-tertiary xl:sr-only">{name}</span>
        <span className="font-mono text-body">
          <Missing />
        </span>
        <span className="text-caption text-gap-text">Not supplied</span>
        {children}
      </div>
    );
  const prior = figure.prior;
  const change = prior && figure.change != null ? figure.change : undefined;
  const kind = change === undefined ? "none" : tone(metricKey, change);
  const sign = change === undefined ? null : changeSign(change);
  const a = prior ? number(prior.value) : Number.NaN;
  const b = number(figure.value);
  return (
    <div className={cx("flex min-w-0 flex-col gap-1", className)}>
      <span className="text-caption text-text-tertiary xl:sr-only">{name}</span>
      <span className="font-mono text-body font-medium text-text-primary tabular-nums wrap-anywhere">
        {withUnit(figure.value, figure.unit)}
      </span>
      {change !== undefined && prior ? (
        <>
          {Number.isFinite(a) && Number.isFinite(b) && (
            <TwoPoint prior={a} current={b} kind={kind} />
          )}
          <span className="flex min-w-0 flex-wrap items-center gap-x-1 text-caption text-text-secondary tabular-nums">
            {sign === 1 && <ArrowUp aria-hidden className="size-3.5 shrink-0" />}
            {sign === -1 && <ArrowDown aria-hidden className="size-3.5 shrink-0" />}
            <span className="font-mono">{changeText(change, figure.unit)}</span>
            {kind !== "none" && <ToneMark tone={kind} />}
          </span>
          <span className="text-caption text-text-tertiary">vs {prior.period}</span>
        </>
      ) : (
        <span className="text-caption text-text-tertiary">No prior period stated</span>
      )}
      {children}
    </div>
  );
}
