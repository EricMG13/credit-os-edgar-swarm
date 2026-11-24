// Follows the HyperUI stats examples "Title, value and icon" (without the icon) and the first
// example's "from" value (without the growth badge).
import type { ReactNode } from "react";
import { InfoCircle } from "@untitledui/icons";
import { Missing } from "@/components/gap/Missing";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";

export const METRIC_FIGURE = "font-body text-metric tabular-nums text-text-primary";

interface MetricCardProps {
  label: string;
  /** The display string, formatted by the caller; null when the figure is missing. */
  value: string | null;
  /** The previous value, same form; null when missing; omitted when there is none to show. */
  from?: string | null;
  /** The metric's definition, shown in a tooltip on an info trigger. */
  note?: string;
  /** Same metric card in a list, or as a standalone figure. */
  as?: "article" | "li";
  /** Share card rows with neighboring cards in desktop metric grids. */
  alignInGrid?: boolean;
  /** The source control belongs to the figure, without changing its card. */
  actions?: ReactNode;
  definitionControl?: ReactNode;
  /** A supplied missing/withheld/gap form; ordinary strings use `value`. */
  figure?: ReactNode;
  delta?: ReactNode;
  children?: ReactNode;
}

function MetricDefinition({
  label,
  note,
  control,
}: {
  label: string;
  note?: string;
  control?: ReactNode;
}) {
  if (control !== undefined) return control;
  if (note === undefined) return null;
  return (
    <Tooltip title={note}>
      <TooltipTrigger
        aria-label={`About ${label}`}
        className="rounded-ds-xs text-text-tertiary focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        <InfoCircle aria-hidden="true" className="size-4" />
      </TooltipTrigger>
    </Tooltip>
  );
}

function MetricValue({ value, from }: { value: string | null; from?: string | null }) {
  return (
    <p>
      <span className={`${METRIC_FIGURE} ${value === null ? "font-normal" : "font-semibold"}`}>
        {value === null ? <Missing /> : value}
      </span>
      {from !== undefined && (
        <>
          {" "}
          <span className="text-caption tabular-nums text-text-tertiary">
            from {from === null ? <Missing /> : from}
          </span>
        </>
      )}
    </p>
  );
}

export function MetricCard({
  label,
  value,
  from,
  note,
  as: Component = "article",
  alignInGrid = false,
  actions,
  definitionControl,
  figure,
  delta,
  children,
}: MetricCardProps) {
  return (
    <Component
      className={`group/trace relative min-w-0 rounded-ds-sm border border-border-subtle bg-surface-card p-6 shadow-xs${alignInGrid ? " lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:gap-y-2" : ""}`}
    >
      <div className={`flex flex-col gap-2${alignInGrid ? " lg:contents" : ""}`}>
        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <p className="text-sm text-text-tertiary">{label}</p>
            <MetricDefinition label={label} note={note} control={definitionControl} />
          </div>
          {actions}
        </div>
        <div
          className={`flex min-h-11 flex-wrap items-end justify-between gap-3${alignInGrid ? " lg:content-start" : ""}`}
        >
          {figure === undefined ? <MetricValue value={value} from={from} /> : figure}
          {delta}
        </div>
        {alignInGrid && children != null ? (
          <div className="flex flex-col gap-2">{children}</div>
        ) : (
          children
        )}
      </div>
    </Component>
  );
}
