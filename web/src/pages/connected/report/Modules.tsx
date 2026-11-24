import { createElement, useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { StatsStrip, type Stat } from "@/components/kit/StatsStrip";
import { StageNav } from "@/pages/library/parts/ModuleNav";
import { RunContext } from "@/pages/library/parts/RunContext";
import { TraceDrawer } from "@/pages/library/parts/TraceDrawer";
import type { Trace } from "@/pages/library/slice";
import { card, heading } from "../layout";
import { sectionTraces, traceForConfidence, traceForLine } from "../ReportContent";
import {
  evidenceHref,
  evidencePath,
  type OutputEntry,
  type PublishedRun,
  type Snapshot,
} from "../publishedReport";
import {
  foundationMetrics,
  moduleState,
  runMoneyUnit,
  traceKey,
  type ReportView,
} from "../reportView";
import { changeText, tone } from "../signal";
import { LegacyVisuals } from "../visuals";
import { BreakPoints, breakPointView } from "./BreakPoints";
import { ModuleConfidence } from "./Confidence";
import { Downside, downsideView } from "./Downside";
import { leadFor } from "./leads";
import { MacroSensitivity, macroView } from "./MacroSensitivity";
import { moduleFrame } from "./moduleFrame";
import {
  HeldTrace,
  ModuleFindings,
  ModuleHeader,
  ModuleLimitations,
  NextModule,
  OtherSections,
  chartGaps,
  type FrameModule,
} from "./ModuleFrame";
import { ModuleRecords } from "./ModuleRecords";
import { Bento } from "./overview/Tile";
import { Securities, securityView } from "./Securities";
import { byStage } from "./stages";

type ModuleItem = ReportView["modules"][number];

const CONFIDENCE_TRACE = "module-confidence";
const moduleHref = (id: string) => `#modules/${encodeURIComponent(id)}`;

function defaultOutput(outputs: OutputEntry[]) {
  return (
    outputs.find(({ selected }) => selected) ?? (outputs.length === 1 ? outputs[0] : undefined)
  );
}

function moduleOutput(current: ModuleItem, output: string | undefined) {
  if (output === undefined) return defaultOutput(current.outputs);
  return /^(?:0|[1-9]\d*)$/.test(output) ? current.outputs[Number(output)] : undefined;
}

/** The module's own typed figures, drawn in the lead's place until a lead exists. */
function moduleFigures(entry: OutputEntry, run: PublishedRun) {
  const downside = downsideView(entry);
  const breaks = breakPointView(entry);
  const macro = macroView(entry);
  const securities = securityView(entry, run.asOf);
  const tableLines = [securities?.summaryLine, securities?.outcomes?.line].filter(
    (line) => line !== undefined,
  );
  return { downside, breaks, macro, securities, tableLines };
}

function TypedFigures({
  entry,
  run,
  view,
  figures,
}: {
  entry: OutputEntry;
  run: PublishedRun;
  view: ReportView;
  figures: ReturnType<typeof moduleFigures>;
}) {
  const { downside, breaks, macro, securities } = figures;
  const href = (line: number) => evidencePath(run.folder, entry, line);
  // Event lanes and relationship maps are the module's own drawings; chart descriptors are not.
  const drawings = { ...entry.output, charts: [], chartGaps: [] };
  const hasDrawings = [entry.output.events, entry.output.maps].some((items) => items?.length);
  if (!downside && !breaks && !macro && !securities && !hasDrawings) return null;
  return (
    <div className="grid min-w-0 gap-4 lg:col-span-12">
      {downside && <Downside data={downside} href={href} />}
      {breaks && <BreakPoints data={breaks} href={href} />}
      {macro && <MacroSensitivity data={macro} href={href} />}
      {securities && (
        <Securities data={securities} href={href} runUnit={runMoneyUnit(view.catalogue)} />
      )}
      {hasDrawings && (
        <LegacyVisuals
          output={drawings}
          sections={entry.sections}
          cards
          headingLevel="h3"
          evidenceHref={href}
        />
      )}
    </div>
  );
}

/** The CP-1 headline figures as a stats strip: values as written, the change against a year earlier. */
function headlineStats(entry: OutputEntry, view: ReportView): Stat[] {
  return foundationMetrics(entry, view.catalogue).map(({ key, metric, line }) => {
    const change = metric.yearChange;
    const direction = change ? tone(change.key, change.change) : "none";
    return {
      label: metric.label,
      value: metric.value?.kind === "value" ? metric.value.text : null,
      ...(metric.value?.kind === "gap" && { gap: metric.value.reason }),
      ...(change && { prior: change.prior, delta: changeText(change.change, change.unit) }),
      ...((direction === "better" || direction === "worse") && { tone: direction }),
      mark: metric.note ? (
        <span className="text-caption text-text-tertiary">{metric.note}</span>
      ) : undefined,
      trace: (
        <HeldTrace
          trace={line === undefined ? "" : traceKey(entry, line)}
          label={`Show sources for ${metric.label}`}
        />
      ),
      key,
    };
  });
}

function pageTraces(snapshot: Snapshot, entry: OutputEntry, index: number) {
  const traces: Record<string, Trace> = sectionTraces(snapshot, entry, entry.sections);
  const extra = [entry.output.summary?.line, ...chartGaps(entry).map(({ line }) => line)];
  for (const line of extra) {
    if (line === undefined) continue;
    const trace = traceForLine(snapshot, entry, index, line);
    if (trace) traces[traceKey(entry, line)] = trace;
  }
  const confidence = traceForConfidence(snapshot, entry);
  if (confidence) traces[CONFIDENCE_TRACE] = confidence;
  return traces;
}

function nextModule(view: ReportView, id: string): FrameModule | undefined {
  const order = byStage(view.modules).flatMap(({ rows }) => rows);
  return order[order.findIndex((item) => item.id === id) + 1];
}

function EmptyHandoff({ run, entry }: { run: PublishedRun; entry: OutputEntry }) {
  return (
    <p className="text-text-secondary lg:col-span-12">
      {entry.output.parseError
        ? "This handoff could not be read into sections."
        : "This handoff has no findings in this report format."}{" "}
      <Button href={evidencePath(run.folder, entry)} color="link-gray" size="sm">
        Open Evidence
      </Button>
    </p>
  );
}

function ModulePage({
  snapshot,
  run,
  view,
  current,
  entry,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  view: ReportView;
  current: ModuleItem;
  entry: OutputEntry;
}) {
  const [open, setOpen] = useState<string | null>(null);
  const index = view.entries.indexOf(entry);
  const figures = moduleFigures(entry, run);
  const frame = moduleFrame(entry, figures.tableLines);
  const Lead = leadFor(current.id);
  const traces = pageTraces(snapshot, entry, index);
  const stats = headlineStats(entry, view);
  const gaps = chartGaps(entry);
  const module = { ...current, state: moduleState(entry) };
  const empty =
    !frame.bottomLine &&
    !frame.keyFindings &&
    !frame.contrary &&
    !frame.limitations &&
    !frame.others.length &&
    !frame.missing.length;
  const active = open === null ? undefined : traces[open];
  return (
    <RunContext.Provider value={{ traces, open: setOpen }}>
      <Bento>
        <ModuleHeader
          module={module}
          entry={entry}
          bottomLine={frame.bottomLine}
          owed={frame.missing.includes("Bottom line")}
          folder={run.folder}
          confidence={
            <ModuleConfidence
              confidence={entry.output.confidence}
              trace={traces[CONFIDENCE_TRACE] ? CONFIDENCE_TRACE : null}
            />
          }
        />
        {empty && <EmptyHandoff run={run} entry={entry} />}
        {stats.length > 0 && (
          <div className="min-w-0 lg:col-span-12">
            <StatsStrip label="Headline figures" stats={stats} />
          </div>
        )}
        {Lead ? (
          <div className="min-w-0 lg:col-span-12">
            {/* leadFor returns a component defined once at module scope, never one made here. */}
            {createElement(Lead, { snapshot, run, view, entry, entryIndex: index })}
          </div>
        ) : (
          <TypedFigures entry={entry} run={run} view={view} figures={figures} />
        )}
        <ModuleFindings
          keyFindings={frame.keyFindings}
          contrary={frame.contrary}
          missing={frame.missing}
          entry={entry}
          folder={run.folder}
        />
        <OtherSections
          sections={frame.others}
          entry={entry}
          folder={run.folder}
          typedTables={!Lead}
        />
        <ModuleLimitations
          section={frame.limitations}
          owed={frame.missing.includes("Limitations")}
          gaps={gaps}
          entry={entry}
          folder={run.folder}
        />
        <div className="min-w-0 lg:col-span-12">
          <ModuleRecords run={run} entry={entry} />
        </div>
        <NextModule next={nextModule(view, current.id)} href={moduleHref} />
      </Bento>
      {active && (
        <TraceDrawer
          trace={active}
          evidenceHref={evidenceHref(run.folder, active.evidenceItem)}
          isOpen
          onClose={() => {
            setOpen(null);
          }}
        />
      )}
    </RunContext.Provider>
  );
}

function SavedOutputs({ current, entry }: { current: ModuleItem; entry?: OutputEntry }) {
  return (
    current.outputs.length > 1 && (
      <nav aria-label="Saved outputs" className="flex flex-wrap gap-2">
        {current.outputs.map((item, at) => (
          <Button
            key={item.output.id}
            color="secondary"
            size="sm"
            href={`#modules/${encodeURIComponent(current.id)}/${String(at)}`}
            aria-current={item === entry ? "page" : undefined}
          >
            {item.selected ? "Output used in report" : `Saved output ${String(at + 1)}`}
          </Button>
        ))}
      </nav>
    )
  );
}

function UnavailableHandoff({ current }: { current: ModuleItem }) {
  const count = current.outputs.length;
  return (
    <Bento>
      <ModuleHeader module={current} bottomLine={null} owed={false} folder="" />
      <section className={`${card} lg:col-span-12`}>
        <h3 className={heading}>Handoff unavailable</h3>
        <p>
          {count > 1
            ? "Choose a saved output above."
            : count === 1
              ? "Choose this module again under Modules in this run."
              : "No output was saved for this module."}
        </p>
      </section>
    </Bento>
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
  view: ReportView;
  module?: string;
  output?: string;
}) {
  const current =
    module === undefined
      ? (view.modules.find(({ id }) => id === "CP-1") ?? view.modules[0])
      : view.modules.find(({ id }) => id === module);
  if (!current) return <p className={card}>This module is unavailable in the published run.</p>;
  const entry = moduleOutput(current, output);
  return (
    <div className="grid min-w-0 gap-4 lg:grid-cols-[232px_minmax(0,1fr)]">
      <StageNav
        key={current.id}
        modules={view.modules}
        current={current.id}
        hrefFor={moduleHref}
        className="self-start"
      />
      <div className="flex min-w-0 flex-col gap-4">
        <SavedOutputs current={current} entry={entry} />
        {entry ? (
          <ModulePage
            key={entry.output.id}
            snapshot={snapshot}
            run={run}
            view={view}
            current={current}
            entry={entry}
          />
        ) : (
          <UnavailableHandoff current={current} />
        )}
      </div>
    </div>
  );
}
