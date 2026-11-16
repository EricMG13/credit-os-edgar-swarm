import { useCallback, useSyncExternalStore } from "react";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { StatusBadge } from "@/components/status/StatusBadge";
import { RunTabLink } from "@/pages/library/parts/RunFrame";
import { SourcesSwitch, useSourcesOn } from "@/pages/library/parts/SourcesSwitch";
import { PageHeader } from "../../shell/PageHeader";
import { TextLink } from "../run/TextLink";
import { Breadcrumb, card, ErrorNotice, heading } from "./layout";
import {
  comparisonForRun,
  comparisonRows,
  getSnapshot,
  reportPath,
  runPathway,
  runTiming,
  type CatalogueRun,
  type OutputEntry,
  type PublishedRun,
  type Snapshot,
} from "./publishedReport";
import { ReportFindings } from "./ReportContent";
import { ReportEvidence } from "./report/Evidence";
import type { Mode } from "./api";
import { actionBias, buildReportView, foundationMetrics } from "./reportView";
import { Calendar, buildCalendar, upcomingCalendarRows } from "./report/Calendar";
import { Changes, ComparisonTable } from "./report/Changes";
import { Forecast } from "./report/Forecast";
import { MetricGrid } from "./report/MetricGrid";
import { Modules } from "./report/Modules";
import { PublishedTraceProvider } from "./report/PublishedTrace";
import { PortfolioBasisProvider } from "./report/PortfolioBasis";
import { useResource } from "./useResource";
import { HeadlineFigures } from "./HeadlineFigures";

const tabs = [
  ["history", "Report"],
  ["overview", "Overview"],
  ["changes", "Changes"],
  ["modules", "Modules"],
  ["forecast", "Forecast"],
  ["evidence", "Evidence"],
] as const;
type ReportTab = (typeof tabs)[number][0];
type Tab = ReportTab | "calendar";

function listenHash(fn: () => void) {
  window.addEventListener("hashchange", fn);
  return () => {
    window.removeEventListener("hashchange", fn);
  };
}

const readHash = () => window.location.hash;
const tabHref = (tab: ReportTab) => `#${tab}`;

function ReportNav({ tab, modules }: { tab: Tab; modules: number }) {
  return (
    <nav
      aria-label="Report sections"
      className="flex flex-wrap gap-3 border-b border-border-hairline"
    >
      {tabs.map(([key, title]) => (
        <RunTabLink
          key={key}
          href={tabHref(key)}
          label={title}
          current={tab === key}
          count={key === "modules" ? String(modules) : undefined}
          accessibleLabel={key === "modules" ? `Modules ${String(modules)}` : undefined}
        />
      ))}
    </nav>
  );
}

function RunHistory({ snapshot, run }: { snapshot: Snapshot; run: PublishedRun }) {
  const records = Object.values(snapshot.workspace.runs).filter(
    (record) => record === run || Boolean(run.issuerKey && record.issuerKey === run.issuerKey),
  );
  const byFolder = new Map(snapshot.catalogue.real.map((item) => [item.id, item]));
  return (
    <section className={card}>
      <h2 className={heading}>Report history</h2>
      <ul className="grid gap-3">
        {records
          .sort((a, b) => (b.asOf ?? "").localeCompare(a.asOf ?? ""))
          .map((record) => {
            const catalogue = byFolder.get(record.folder);
            return (
              <li
                key={record.folder}
                className="flex flex-wrap items-center justify-between gap-4 border-t border-border-hairline pt-3"
              >
                <div className="grid gap-1">
                  <p className="font-semibold">
                    {runPathway(record, catalogue) || "Credit report"}
                  </p>
                  <p className="text-sm text-text-secondary">{runTiming(record)}</p>
                </div>
                <div className="flex items-center gap-3">
                  {record === run && <StatusBadge set="Run states" state="Finished" />}
                  <TextLink href={`${reportPath(record.folder)}#overview`}>Open overview</TextLink>
                  <TextLink href={`${reportPath(record.folder)}#changes`}>What changed</TextLink>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

function Overview({
  snapshot,
  run,
  view,
  hasCalendar,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  view: ReturnType<typeof buildReportView>;
  hasCalendar: boolean;
}) {
  const calendar = buildCalendar(view.entries, run.folder);
  const watchRows = upcomingCalendarRows(calendar.rows, run.asOf);
  const foundation = view.entries.find((entry) => entry.selected && entry.output.module === "CP-1");
  const metrics = foundation
    ? foundationMetrics(foundation, view.catalogue).filter(
        ({ metric }) =>
          ["Available liquidity", "Free cash flow", "Lease-adjusted gross leverage"].includes(
            metric.label,
          ) || metric.label.startsWith("Debt maturities through"),
      )
    : [];
  const figures = metrics.length ? (
    <MetricGrid
      records={metrics}
      snapshot={snapshot}
      folder={run.folder}
      entry={foundation}
      entryIndex={foundation ? view.entries.indexOf(foundation) : -1}
    />
  ) : (
    <HeadlineFigures catalogue={view.catalogue} />
  );
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-h2">Overview</h2>
        {hasCalendar && (
          <a href="#calendar" className="text-action underline">
            Issuer calendar
          </a>
        )}
      </div>
      {view.lead ? (
        <ReportFindings
          key={view.lead.output.id}
          snapshot={snapshot}
          run={run}
          entry={view.lead}
          entryIndex={view.entries.indexOf(view.lead)}
          overview
          overviewLabel={view.lead.output.module === "CP-1B" ? "Earnings view" : undefined}
          judgement={actionBias(view.lead)}
          afterBottomLine={figures}
        />
      ) : (
        <>
          {figures}
          <p className={card}>
            No credit view is available in the published handoffs for this run.
          </p>
        </>
      )}
      {calendar.rows.length > 0 && (
        <section className={`${card} grid gap-3`}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className={heading}>Dates to watch</h2>
            <a href="#calendar" className="text-action underline">
              Open issuer calendar
            </a>
          </div>
          {watchRows === null ? (
            <p className="text-sm text-text-secondary" role="status">
              Upcoming dates cannot be determined because this run has no valid as-of date.
            </p>
          ) : watchRows.length === 0 ? (
            <p className="text-sm text-text-secondary" role="status">
              No recorded event dates fall on or after this run’s as-of date.
            </p>
          ) : (
            <ul className="grid gap-2">
              {watchRows.slice(0, 5).map((event, index) => (
                <li
                  key={`${event.href}-${String(index)}`}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-t border-border-hairline pt-2"
                >
                  <div>
                    <p className="font-semibold">{event.cells[3] || "Dated event"}</p>
                    <p className="text-sm text-text-secondary">
                      {event.owner}
                      {event.cells[6] ? ` · ${event.cells[6]}` : ""}
                    </p>
                    {event.cells[4] && (
                      <p className="text-sm text-text-secondary">{event.cells[4]}</p>
                    )}
                    {event.timingWithinRecordedPeriod && (
                      <p className="text-sm text-text-secondary">
                        Timing falls within the recorded period; the exact date is unresolved.
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span>
                      {event.cells[0]}
                      {event.cells[1] ? ` · ${event.cells[1]}` : ""}
                    </span>
                    <a className="text-action underline" href={event.href}>
                      Evidence
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </>
  );
}

function hasPortfolioCharts(entries: OutputEntry[]) {
  return entries.some(
    ({ output }) =>
      output.module === "CP-6" && output.charts?.some(({ kind }) => kind === "limits"),
  );
}

function ComparisonMeasures({ change }: { change: ReturnType<typeof comparisonForRun> }) {
  if (!change?.pack || change.problem) return null;
  return <ComparisonMeasuresTable rows={comparisonRows(change)} />;
}

function ComparisonMeasuresTable({ rows }: { rows: ReturnType<typeof comparisonRows> }) {
  if (!rows.length) return null;
  return (
    <section className={card}>
      <h3 className={heading}>Comparison measures</h3>
      <ComparisonTable rows={rows} />
    </section>
  );
}

function ReportPage({
  snapshot,
  run,
  routeKey,
  parts,
  tab,
  mode,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  routeKey: string;
  parts: string[];
  tab: Tab;
  mode: Mode;
}) {
  const view = buildReportView(snapshot, routeKey, run);
  const calendar =
    tab === "overview" || tab === "calendar" ? buildCalendar(view.entries, run.folder) : null;
  const change = comparisonForRun(run, snapshot.workspace.runs);
  return (
    <div className="mt-4 grid min-w-0 gap-5">
      <ReportNav tab={tab} modules={view.modules.length} />
      <PortfolioBasisProvider
        folder={run.folder}
        enabled={(tab === "forecast" || tab === "modules") && hasPortfolioCharts(view.entries)}
      >
        <PublishedTraceProvider
          route={JSON.stringify([routeKey, tab, parts])}
          snapshot={snapshot}
          folder={run.folder}
          entries={view.entries}
        >
          {tab === "history" && <RunHistory snapshot={snapshot} run={run} />}
          {tab === "overview" && (
            <Overview
              snapshot={snapshot}
              run={run}
              view={view}
              hasCalendar={Boolean(calendar?.rows.length || calendar?.gaps.length)}
            />
          )}
          {tab === "calendar" && calendar && <Calendar calendar={calendar} />}
          {tab === "changes" && (
            <Changes snapshot={snapshot} run={run} entries={view.entries} change={change} />
          )}
          {tab === "modules" && (
            <Modules
              snapshot={snapshot}
              run={run}
              view={view}
              module={parts[0]}
              output={parts[1]}
            />
          )}
          {tab === "forecast" && <Forecast run={run} view={view} />}
          {tab === "evidence" && (
            <ReportEvidence
              snapshot={snapshot}
              run={run}
              entries={view.entries}
              target={parts.join("/")}
              mode={mode}
              comparison={<ComparisonMeasures change={change} />}
            />
          )}
        </PublishedTraceProvider>
      </PortfolioBasisProvider>
    </div>
  );
}

function ReaderBadges({
  run,
  catalogue,
  preview,
  mode,
}: {
  run: PublishedRun;
  catalogue?: CatalogueRun;
  preview?: Snapshot["preview"];
  mode: Mode;
}) {
  return (
    <>
      <Badge>{runTiming(run)}</Badge>
      <Badge>{runPathway(run, catalogue)}</Badge>
      {preview ? (
        <Badge color="brand">Test preview</Badge>
      ) : (
        <>
          <StatusBadge set="Run states" state="Finished" />
          {mode === "synthetic" && <Badge color="brand">Synthetic test</Badge>}
        </>
      )}
    </>
  );
}

function ReaderHeader({
  run,
  catalogue,
  preview,
  mode,
  id,
  sources,
  setSources,
}: {
  run: PublishedRun | null;
  catalogue?: CatalogueRun;
  preview?: Snapshot["preview"];
  mode: Mode;
  id: string;
  sources: boolean;
  setSources: (selected: boolean) => void;
}) {
  if (!run) return <PageHeader title="Credit report" />;
  return (
    <PageHeader
      title={catalogue?.name || run.issuerHeading || run.issuer}
      badges={<ReaderBadges run={run} catalogue={catalogue} preview={preview} mode={mode} />}
      actions={
        <div className="flex flex-wrap items-center gap-2">
          <SourcesSwitch isSelected={sources} onChange={setSources} />
          <Button color="secondary" href="#history">
            Report history
          </Button>
          <Button color="secondary" href={`/run/${encodeURIComponent(id)}`}>
            Run activity
          </Button>
        </div>
      }
    />
  );
}

function ReaderStatus({
  value,
  error,
  found,
}: {
  value: Snapshot | null | undefined;
  error: string | undefined;
  found: boolean;
}) {
  return (
    <>
      {error && <ErrorNotice>{error}</ErrorNotice>}
      {value?.preview?.reason && (
        <p role="note" className={`${card} mt-4`}>
          {value.preview.reason}
        </p>
      )}
      {value === undefined && !error && (
        <p role="status" className="mt-6 text-text-secondary">
          Loading report…
        </p>
      )}
      {value !== undefined && !found && (
        <p className={`mt-6 ${card}`}>No report was published for this run.</p>
      )}
    </>
  );
}

export function ReportReader({ id, mode }: { id: string; mode: Mode }) {
  const load = useCallback((signal: AbortSignal) => getSnapshot(signal, id), [id]);
  const { value, error } = useResource(load);
  const [sources, setSources] = useSourcesOn();
  const hash = useSyncExternalStore(listenHash, readHash);
  const [route, ...parts] = hash.slice(1).split("/");
  const tab =
    route === "calendar" ? route : (tabs.find(([name]) => name === route)?.[0] ?? "overview");
  const found = value && Object.entries(value.workspace.runs).find(([, run]) => run.folder === id);
  const catalogue = value?.catalogue.real.find((entry) => entry.id === id);
  const run = found ? found[1] : null;
  return (
    <div className="mx-auto w-full max-w-[96rem]" data-sources={sources ? "on" : "off"}>
      <Breadcrumb>Report</Breadcrumb>
      <ReaderHeader
        run={run}
        catalogue={catalogue}
        preview={value?.preview}
        mode={mode}
        id={id}
        sources={sources}
        setSources={setSources}
      />
      <ReaderStatus value={value} error={error} found={Boolean(found)} />
      {value && found && (
        <ReportPage
          snapshot={value}
          run={found[1]}
          routeKey={found[0]}
          parts={parts}
          tab={tab}
          mode={mode}
        />
      )}
    </div>
  );
}
