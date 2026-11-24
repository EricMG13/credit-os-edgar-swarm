import { useId } from "react";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
import { StatusBadge } from "@/components/status/StatusBadge";
import { cx } from "@/utils/cx";
import type { ReadinessRow } from "./intake";
import type { ModuleReadiness, ModuleRow } from "./moduleReadiness";

/** Where the module states come from: none yet, the review on screen, or the last one left. */
export type ReadinessSource = "unchecked" | "review" | "last";

const TILE =
  "flex min-w-0 flex-col gap-4 rounded-ds-lg border border-border-subtle bg-surface-card p-5";

// Status, not pills, where the rail is a column beside the form.
const AS_STATUS = "lg:bg-transparent lg:px-0 lg:ring-0";

const SOURCE_NOTE: Record<ReadinessSource, string> = {
  unchecked: "Each module is checked against your documents when you review the run.",
  review: "As the service checked them for this review.",
  last: "From your last review. Review the run again to check changes.",
};

function ModuleState({ row }: { row: ModuleRow }) {
  switch (row.state) {
    case "unchecked":
      return null;
    case "ready":
      return <StatusBadge set="Source readiness" state="Ready" className={AS_STATUS} />;
    case "conditional":
      return <StatusBadge set="Source readiness" state="Conditional" className={AS_STATUS} />;
    case "blocked":
      return <StatusBadge set="Module state" state="Not assessable" className={AS_STATUS} />;
  }
}

function ModuleLine({ row }: { row: ModuleRow }) {
  return (
    <li
      data-state={row.state}
      className={cx(
        "flex min-w-0 flex-col gap-0.5 rounded-ds-sm px-2 py-1",
        // The blocked state: a dashed signal outline as well as the slashed shape and its word.
        row.state === "blocked" && "border border-dashed border-warning-mark",
      )}
    >
      <div className="flex min-w-0 flex-wrap items-center justify-between gap-x-3 gap-y-1">
        <span className="min-w-0 text-small wrap-anywhere text-text-primary">{row.name}</span>
        <ModuleState row={row} />
      </div>
      {row.reasons.map((reason) => (
        <p key={reason} className="text-caption wrap-anywhere text-text-secondary">
          {reason}
        </p>
      ))}
    </li>
  );
}

function CapLine({
  cap,
  capTitle,
}: {
  cap: { value: number; max: number; label: string } | null;
  capTitle: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-caption text-text-tertiary">{capTitle}</p>
      {cap ? (
        // The bar's own label, set in mono at the size of a figure: "USD 0.00 of USD 25.00".
        <div className="[&_span]:font-mono [&_span]:text-h4 [&_span]:text-text-primary">
          <ProgressBar value={cap.value} max={cap.max} label={cap.label} labelBelow />
        </div>
      ) : (
        <p className="text-small text-text-tertiary">Unavailable</p>
      )}
    </div>
  );
}

/**
 * The persistent readiness rail: the spending cap, what Submit still needs, and the run's modules
 * by stage with each one's readiness as the service last stated it.
 */
export function ReadinessRail({
  rows,
  cap,
  capTitle,
  pathway,
  modules,
  source,
}: {
  rows: readonly ReadinessRow[];
  cap: { value: number; max: number; label: string } | null;
  capTitle: string;
  /** The pathway's name, as the cards show it. */
  pathway: string;
  modules: ModuleReadiness;
  source: ReadinessSource;
}) {
  const needsId = useId();
  const modulesId = useId();
  return (
    <aside
      aria-label="Readiness"
      className="flex min-w-0 flex-col gap-4 lg:sticky lg:top-6 lg:col-span-4 lg:max-h-[calc(100dvh-6rem)] lg:self-start lg:overflow-y-auto"
      // The rail scrolls on its own when it is taller than the window; the keyboard can reach it.
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    >
      <div className={TILE}>
        <h2 className="text-h4 font-medium text-text-primary">Readiness</h2>
        <CapLine cap={cap} capTitle={capTitle} />
        <div className="flex flex-col gap-1">
          <p id={needsId} className="text-caption text-text-tertiary">
            Before Submit
          </p>
          <ul aria-labelledby={needsId} className="flex flex-col divide-y divide-border-hairline">
            {rows.map((row) => (
              <li key={row.label} className="flex flex-wrap items-center gap-x-3 gap-y-1 py-2">
                <StatusBadge
                  set="Met or not met"
                  state={row.met ? "Met" : "Not met"}
                  className={cx("lg:min-w-19", AS_STATUS)}
                />
                <span className="text-small font-medium text-text-primary">{row.label}</span>
                {row.detail ? (
                  <span className="ml-auto font-mono text-small text-text-secondary tabular-nums">
                    {row.detail}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={TILE}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 id={modulesId} className="text-small font-medium text-text-primary">
            Modules
          </h3>
          <span className="text-caption text-text-secondary">
            <span className="font-mono tabular-nums">{modules.count}</span>
            {` ${modules.count === 1 ? "module" : "modules"} · ${pathway}`}
          </span>
        </div>
        <p className="text-caption text-text-secondary">{SOURCE_NOTE[source]}</p>
        {modules.run && (
          <ul aria-label="Limits on the whole run" className="flex flex-col">
            <ModuleLine row={modules.run} />
          </ul>
        )}
        <ul aria-labelledby={modulesId} className="flex flex-col gap-3">
          {modules.groups.map((group) => (
            <li key={group.name} className="flex flex-col gap-1">
              <p className="flex items-baseline gap-2 text-caption text-text-tertiary">
                {group.number && <span className="font-mono tabular-nums">{group.number}</span>}
                <span>{group.name}</span>
              </p>
              <ul aria-label={group.name} className="flex flex-col">
                {group.rows.map((row) => (
                  <ModuleLine key={row.id} row={row} />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
