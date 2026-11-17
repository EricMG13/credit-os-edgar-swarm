import type { Metric } from "../slice";
import { YearChange } from "../../connected/report/YearChange";
import { CellValue } from "./CellValue";
import { TRACE_HOST, TraceControl } from "./TraceControl";

const FIGURE = "text-[30px]/[38px] tabular-nums text-text-primary";

/**
 * One headline figure on its own card (F1), drawn from the source's look: the kit's MetricCard has
 * no place for a trace control or a gap, so the tile is built here. A tile with no trace draws the
 * missing-trace marker; `traced={false}` draws neither, for the Evidence page, which has no trace controls.
 */
export function MetricTile({ metric, traced = true }: { metric: Metric; traced?: boolean }) {
  return (
    <li
      className={`${TRACE_HOST} flex min-w-0 flex-col gap-2 rounded-xl border border-border-subtle bg-surface-card p-5 shadow-xs`}
    >
      <span className="pr-9 text-sm font-medium text-text-tertiary">{metric.label}</span>
      <div className="min-h-9.5">
        <CellValue cell={metric.value} figureClass={FIGURE} />
      </div>
      {metric.yearChange && (
        <YearChange
          metricKey={metric.yearChange.key}
          change={metric.yearChange.change}
          unit={metric.yearChange.unit}
          prior={metric.yearChange.prior}
        />
      )}
      <span className="text-sm text-text-tertiary">{metric.note}</span>
      {traced && (
        <span className="absolute top-3.5 right-3.5">
          <TraceControl trace={metric.trace} label="Show sources for this figure" />
        </span>
      )}
    </li>
  );
}
