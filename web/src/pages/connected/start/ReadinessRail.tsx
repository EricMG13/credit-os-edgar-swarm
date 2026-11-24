import { useEffect, useId, useRef, useState } from "react";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
import { StatusBadge } from "@/components/status/StatusBadge";
import { cx } from "@/utils/cx";
import { Tile } from "../report/overview/Tile";
import type { ReadinessRow } from "./intake";
import type { ModuleReadiness, ModuleRow } from "./moduleReadiness";

/** Where the module states come from: none yet, the review on screen, or the last one left. */
export type ReadinessSource = "unchecked" | "review" | "last";

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
    case "unstated":
      // The summary names no limit for this module; the page does not call it ready.
      return <span className="text-caption text-text-tertiary">No limit stated</span>;
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

/** Whether the element is taller than the room it has, so it scrolls and needs a tab stop. */
function useScrolls<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [scrolls, setScrolls] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof ResizeObserver === "undefined") return;
    const check = () => {
      setScrolls(node.scrollHeight > node.clientHeight);
    };
    const observer = new ResizeObserver(check);
    observer.observe(node);
    for (const child of node.children) observer.observe(child);
    check();
    return () => {
      observer.disconnect();
    };
  }, []);
  return { ref, scrolls };
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
  const { ref, scrolls } = useScrolls<HTMLElement>();
  return (
    <aside
      ref={ref}
      aria-label="Readiness"
      className="flex min-w-0 flex-col gap-4 lg:sticky lg:top-6 lg:col-span-4 lg:max-h-[calc(100dvh-6rem)] lg:self-start lg:overflow-y-auto"
      // When the rail is taller than the window it scrolls on its own; then the keyboard can reach it.
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={scrolls ? 0 : undefined}
    >
      <Tile span={12} label="Spending cap and what Submit needs">
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
      </Tile>
      <Tile
        span={12}
        label="Modules by stage"
        kicker={`${String(modules.count)} ${modules.count === 1 ? "module" : "modules"} · ${pathway}`}
        title="Modules"
      >
        <p className="text-caption text-text-secondary">{SOURCE_NOTE[source]}</p>
        {modules.run && (
          <div className="flex flex-col gap-1">
            <ul aria-label="Limits on the whole run" className="flex flex-col">
              <ModuleLine row={modules.run} />
            </ul>
            <p className="px-2 text-caption text-text-tertiary">
              A limit on the whole run applies to every module.
            </p>
          </div>
        )}
        <ul aria-label="Modules" className="flex flex-col gap-3">
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
      </Tile>
    </aside>
  );
}
