import { useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { StatusBadge } from "@/components/status/StatusBadge";
import { ModuleNav, type NavSection } from "@/pages/library/parts/ModuleNav";
import { card, heading } from "../layout";
import { ReportFindings, findingBlocks } from "../ReportContent";
import {
  evidencePath,
  type OutputEntry,
  type PublishedRun,
  type Snapshot,
} from "../publishedReport";
import { foundationMetrics, moduleState, type buildReportView } from "../reportView";
import { LegacyVisuals } from "../visuals";
import { MetricGrid } from "./MetricGrid";
import { isMonitoringTable } from "./ModuleTable";

function sectionIcon(heading: string): NavSection["icon"] {
  if (heading === "Bottom line") return "bottom-line";
  if (heading === "Key findings") return "findings";
  if (heading.startsWith("Contrary evidence")) return "contrary";
  return heading === "Limitations" ? "limitations" : "records";
}

function Navigator({
  view,
  run,
  current,
  entry,
}: {
  view: ReturnType<typeof buildReportView>;
  run: PublishedRun;
  current: string;
  entry?: OutputEntry;
}) {
  const allSections = entry ? findingBlocks(entry.sections, entry) : [];
  const firstFinding =
    allSections.find(({ heading }) => heading === "Key findings") ??
    allSections.find(({ heading }) => sectionIcon(heading) === "records");
  const sections = allSections.flatMap((item) => {
    const { heading, line } = item;
    const icon = sectionIcon(heading);
    const extra = item.blocks.some(
      (block) => block.type === "table" && isMonitoringTable(current, heading, block),
    )
      ? "Monitoring triggers"
      : current === "CP-0" && heading === "Source-readiness summary"
        ? "Readiness by area"
        : null;
    if (icon === "records" && item !== firstFinding && !extra) return [];
    return [
      {
        label: extra ?? (item === firstFinding ? "Key findings" : heading),
        key: `finding-${String(line)}`,
        icon: item === firstFinding && !extra ? ("findings" as const) : icon,
      },
    ];
  });
  if (
    entry &&
    (entry.output.charts?.length ||
      entry.output.chartGaps?.length ||
      entry.output.events?.length ||
      entry.output.maps?.length)
  ) {
    const at = sections[0]?.icon === "bottom-line" ? 1 : 0;
    sections.splice(at, 0, {
      label: "Figures and records",
      key: "module-figures",
      icon: "records",
    });
  }
  const [active, setActive] = useState(sections[0]?.key ?? null);
  return (
    <aside className="self-start rounded-xl border border-border-hairline bg-surface-card py-2 min-[1001px]:sticky min-[1001px]:top-4">
      <ModuleNav
        issuer={run.issuer}
        run={run.folder}
        current={current}
        modules={view.modules}
        sections={sections}
        active={active}
        hrefFor={(id) => `#modules/${encodeURIComponent(id)}`}
        onSection={(id) => {
          const target = document.getElementById(id);
          target?.focus();
          target?.scrollIntoView({ block: "start" });
          setActive(id);
        }}
      />
    </aside>
  );
}

export function Modules({
  snapshot,
  run,
  view,
  module,
  output,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  view: ReturnType<typeof buildReportView>;
  module?: string;
  output?: string;
}) {
  const current =
    module === undefined
      ? (view.modules.find(({ id }) => id === "CP-1") ?? view.modules[0])
      : view.modules.find(({ id }) => id === module);
  if (!current) return <p className={card}>This module is unavailable in the published run.</p>;
  const entry =
    output === undefined
      ? (current.outputs.find(({ selected }) => selected) ??
        (current.outputs.length === 1 ? current.outputs[0] : undefined))
      : /^(?:0|[1-9]\d*)$/.test(output)
        ? current.outputs[Number(output)]
        : undefined;
  const index = entry ? view.entries.indexOf(entry) : -1;
  const allMetrics = entry ? foundationMetrics(entry, view.catalogue) : [];
  const metrics = allMetrics.filter(({ metric }) =>
    ["Net debt (carrying basis)", "Debt principal", "All-in cash interest cover"].includes(
      metric.label,
    ),
  );
  const leverage = allMetrics.find(({ metric }) => metric.label === "Lease-adjusted gross leverage")
    ?.metric.value;
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-h2">{current.name}</h2>
        <StatusBadge set="Module state" state={entry ? moduleState(entry) : current.state} />
      </div>
      <div className="grid min-w-0 gap-5 min-[1001px]:grid-cols-[16rem_minmax(0,1fr)]">
        <Navigator
          key={entry?.output.id ?? current.id}
          view={view}
          run={run}
          current={current.id}
          entry={entry}
        />
        <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-4">
          {current.outputs.length > 1 && (
            <nav aria-label="Saved outputs" className="flex flex-wrap gap-2">
              {current.outputs.map((item, at) => (
                <Button
                  key={item.output.id}
                  color="secondary"
                  size="sm"
                  href={`#modules/${encodeURIComponent(current.id)}/${String(at)}`}
                  aria-current={item === entry ? "page" : undefined}
                >
                  {item.selected ? "Designated handoff" : `Retained output ${String(at + 1)}`}
                </Button>
              ))}
            </nav>
          )}
          {entry ? (
            <ReportFindings
              key={entry.output.id}
              snapshot={snapshot}
              run={run}
              entry={entry}
              entryIndex={index}
              judgement={
                leverage?.kind === "value"
                  ? `Lease-adjusted gross leverage is ${leverage.text}`
                  : undefined
              }
              afterBottomLine={
                <>
                  <MetricGrid
                    records={metrics}
                    entry={entry}
                    entryIndex={index}
                    snapshot={snapshot}
                    folder={run.folder}
                  />
                  <div id="module-figures" tabIndex={-1} className="min-w-0">
                    <LegacyVisuals
                      output={entry.output}
                      sections={entry.sections}
                      primary={entry.output.module === "CP-1" ? "Debt maturities" : undefined}
                      cards
                      evidenceHref={(line) => evidencePath(run.folder, String(index), line)}
                    />
                  </div>
                </>
              }
            />
          ) : (
            <section className={card}>
              <h3 className={heading}>Handoff unavailable</h3>
              <p>Choose a retained output where available.</p>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
