import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
import { StatusBadge } from "@/components/status/StatusBadge";

/** The run's readiness as four status rows and the spending cap. */
export function StartReadiness({
  rows,
  cap,
  capTitle,
}: {
  rows: readonly { label: string; met: boolean; detail?: string }[];
  cap: { value: number; max: number; label: string } | null;
  capTitle: string;
}) {
  return (
    <aside
      aria-label="Readiness"
      className="flex flex-col gap-4 rounded-ds-lg border border-border-subtle bg-surface-card p-6 shadow-1 min-[1041px]:sticky min-[1041px]:top-6"
    >
      <div className="flex flex-col gap-1">
        <h2 className="font-display text-h3 text-text-primary">Readiness</h2>
        <p className="text-sm text-text-secondary">
          Check the inputs and approve the run before it starts.
        </p>
      </div>
      <ul className="flex flex-col divide-y divide-border-hairline">
        {rows.map((row) => (
          <li key={row.label} className="flex flex-wrap items-center gap-x-3 gap-y-1 py-2">
            <StatusBadge set="Met or not met" state={row.met ? "Met" : "Not met"} />
            <span className="text-sm font-medium text-text-primary">{row.label}</span>
            {row.detail ? (
              <span className="ml-auto text-sm text-text-secondary tabular-nums">{row.detail}</span>
            ) : null}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-text-secondary">{capTitle}</p>
        {cap ? (
          <ProgressBar value={cap.value} max={cap.max} label={cap.label} labelBelow />
        ) : (
          <p className="text-sm text-text-tertiary">Unavailable</p>
        )}
      </div>
    </aside>
  );
}
