import type { ReactNode } from "react";
import { ArrowDown, ArrowUp } from "@untitledui/icons";
import { Missing } from "@/components/gap/Missing";
import { cx } from "@/utils/cx";
import { changeSign, changeText, tone } from "../signal";
import { withUnit } from "../publishedReport";
import { DeltaBar } from "../report/overview/marks";
import { ToneMark } from "../report/ToneMark";
import { stated } from "../reportView";

type Figure = {
  value?: number | string | null;
  unit?: string | null;
  period?: string | null;
  basis?: string;
  prior?: { value: string; period: string };
  change?: string;
};

/** A figure's number, or NaN when the text is empty or not a number (an empty text is not zero). */
const number = (text: string | number) => {
  const plain = String(text).replaceAll(",", "").trim();
  return plain === "" ? Number.NaN : Number(plain);
};

/** The label a figure carries: coverage read as reported EBITDA over cash interest keeps that name. */
export function figureName(key: string, name: string, figure: Figure | undefined): string {
  const debtCashInterest =
    key === "coverage" &&
    /^LTM reported EBITDA over LTM cash interest for debt(?: [\d.,]+)?(?:;|$)/iu.test(
      figure?.basis ?? "",
    );
  return debtCashInterest ? "Reported EBITDA / cash interest on debt" : name;
}

/**
 * One headline figure of a library row: the value in mono with its period, a bar mark from zero
 * for the prior and current values, and the change with its direction word where the owner's table
 * gives the measure one. A figure the catalogue does not quote is the gap cell ("Not shown here",
 * as the report's own headline tiles say), never zero.
 */
export function FigureMark({
  name,
  metricKey,
  figure,
  className,
  trace,
}: {
  name: string;
  metricKey: string;
  figure: Figure | undefined;
  className?: string;
  /** The figure's single source control; drawn at the cell's top right. */
  trace?: ReactNode;
}) {
  const label = figureName(metricKey, name, figure);
  const head = (
    <div className="flex min-h-8 items-start justify-between gap-1 xl:absolute xl:top-0 xl:right-0 xl:min-h-0 max-[480px]:min-h-11">
      <span className="text-caption text-text-tertiary xl:sr-only">{label}</span>
      {trace}
    </div>
  );
  if (!stated(figure))
    return (
      <div className={cx("relative flex min-w-0 flex-col gap-1 xl:pr-8", className)}>
        {head}
        <span className="font-mono text-body">
          <Missing />
        </span>
        <span className="text-caption text-gap-text">Not shown here</span>
      </div>
    );
  const prior = figure.prior;
  const change = prior && figure.change != null ? figure.change : undefined;
  const kind = change === undefined ? "none" : tone(metricKey, change);
  const sign = change === undefined ? null : changeSign(change);
  const before = prior ? number(prior.value) : Number.NaN;
  const now = number(figure.value);
  return (
    <div className={cx("relative flex min-w-0 flex-col gap-1 xl:pr-8", className)}>
      {head}
      <span className="font-mono text-body font-medium wrap-anywhere text-text-primary tabular-nums">
        {withUnit(figure.value, figure.unit)}
      </span>
      {figure.period && <span className="text-caption text-text-secondary">{figure.period}</span>}
      {change !== undefined && prior ? (
        <>
          {Number.isFinite(before) && Number.isFinite(now) && (
            <DeltaBar
              from={{
                label: `${prior.period} (earlier)`,
                value: before,
                text: withUnit(prior.value, figure.unit),
              }}
              to={{
                label: `${figure.period ?? "Current"} (current)`,
                value: now,
                text: withUnit(figure.value, figure.unit),
              }}
              tone={kind}
              label={`${label}: ${withUnit(prior.value, figure.unit)} in ${prior.period}, ${withUnit(figure.value, figure.unit)} now, drawn from zero`}
            />
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
    </div>
  );
}
