import { ArrowRight } from "@untitledui/icons";
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
  type RefObject,
} from "react";
import { Alert } from "@/components/alert/Alert";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { StatusBadge } from "@/components/status/StatusBadge";
import { RunTabLink } from "@/pages/library/parts/RunFrame";
import { SourcesSwitch, useSourcesOn } from "@/pages/library/parts/SourcesSwitch";
import { PageHeader } from "../../shell/PageHeader";
import { TextLink } from "../run/TextLink";
import { Callout } from "@/components/alert/Alert";
import { Breadcrumb, card, heading } from "./layout";
import {
  comparisonForRun,
  comparisonRows,
  evidencePath,
  getSnapshot,
  outputEntries,
  publishedRunForFolder,
  reportPath,
  runLabels,
  runPathway,
  runTiming,
  type CatalogueRun,
  type OutputEntry,
  type PublishedRun,
  type Snapshot,
} from "./publishedReport";
import { ReportEvidence } from "./report/Evidence";
import { getRun, moduleName, RequestError, type Mode, type ConnectedRun } from "./api";
import { LegacyVisuals } from "./visuals";
import {
  buildReportView,
  foundationMetrics,
  headlineSources,
  moduleBottomLines,
  moduleOrder,
  overviewCharts,
  runLimitations,
  type MetricKey,
  type ReportView,
} from "./reportView";

const TILE_KEYS: readonly MetricKey[] = ["liquidity", "freeCashFlow", "leverage", "maturities"];
import { Calendar, buildCalendar, upcomingCalendarRows } from "./report/Calendar";
import { ReportChanges, ComparisonTable } from "./report/Changes";
import { Forecast } from "./report/Forecast";
import { IdentityBand } from "./report/IdentityBand";
import { MetricGrid } from "./report/MetricGrid";
import { Modules } from "./report/Modules";
import { ModuleBottomLines, RunLimitations } from "./report/OverviewModules";
import { PublishedTraceProvider } from "./report/PublishedTrace";
import { PortfolioBasisProvider } from "./report/PortfolioBasis";
import { useResource } from "./useResource";
import { HeadlineFigures } from "./HeadlineFigures";
import { IssuerFrontPage } from "./report/IssuerFrontPage";
import { buildIssuerFrontPage } from "./report/frontPage";
import { scopeLabel } from "./issuerEntry";
import { ExportMenu, ReportExportPreview } from "./export/ReportExportPreview";
import { exportRoute, reportExports, reportSpecialistOverview } from "./export/reportExport";

const tabs = [
  ["history", "History"],
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

function readerPageName(tab: Tab, parts: string[]) {
  if (tab === "calendar") return "Issuer calendar";
  if (tab === "modules" && parts[0] && parts[0] !== "CP-8") return moduleName(parts[0]);
  if (tab === "evidence" && parts[0]) {
    const names: Record<string, string> = {
      summary: "Summary",
      trace: "Trace",
      sources: "Sources",
      gaps: "Gaps",
      checks: "Script checks",
      record: "Record",
    };
    return `Evidence: ${names[parts[0]] ?? "Handoff"}`;
  }
  return tabs.find(([name]) => name === tab)?.[1] ?? "Overview";
}

let entryCount = 0;
/** The history entry on screen, named in its state so that Back can find where the reader left it. */
function historyEntry() {
  const state: unknown = window.history.state;
  const named = typeof state === "object" && state !== null && "reportEntry" in state;
  if (named && typeof state.reportEntry === "string") return state.reportEntry;
  entryCount += 1;
  const id = `${String(Date.now())}-${String(entryCount)}`;
  window.history.replaceState(
    { ...(typeof state === "object" && state !== null ? state : null), reportEntry: id },
    "",
  );
  return id;
}

/**
 * The shell's `main` scrolls, so the browser restores nothing on its own. A new address opens its
 * page at the top; Back and Forward return to the offset the reader left in that entry.
 */
function useReportPlace(root: RefObject<HTMLElement | null>, hash: string, ready: boolean) {
  const left = useRef(new Map<string, number>());
  const shown = useRef<string | null>(null);
  const offset = useRef(0);
  useEffect(() => {
    const main = root.current?.closest("main");
    if (!main) return;
    const follow = () => {
      offset.current = main.scrollTop;
    };
    main.addEventListener("scroll", follow);
    return () => {
      main.removeEventListener("scroll", follow);
    };
  }, [root]);
  useEffect(() => {
    if (!ready) return;
    const id = historyEntry();
    const previous = shown.current;
    shown.current = id;
    if (previous === id) return;
    if (previous !== null) left.current.set(previous, offset.current);
    const main = root.current?.closest("main");
    const back = left.current.get(id);
    const section = {
      "#overview/limitations": "overview-limitations",
      "#overview/key-charts": "overview-key-charts",
      "#overview/dates": "overview-dates",
      "#forecast": "forecast-report-nav",
      "#forecast/run-charts": "forecast-run-charts",
    }[hash];
    const target = section && document.getElementById(section);
    if (target && back === undefined) {
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: "start" });
    } else if (main && previous !== null) {
      main.scrollTop = back ?? 0;
      offset.current = main.scrollTop;
    }
  }, [hash, ready, root]);
}

function ReportNav({ tab, modules }: { tab: Tab; modules: number }) {
  return (
    <nav
      id={tab === "forecast" ? "forecast-report-nav" : undefined}
      // This landmark receives focus when opening Forecast.
      tabIndex={tab === "forecast" ? -1 : undefined}
      aria-label="Report sections"
      className="flex scroll-mt-3 flex-wrap gap-3 border-b border-border-hairline"
    >
      {tabs.map(([key, title]) => (
        <RunTabLink
          key={key}
          href={tabHref(key)}
          label={title}
          current={tab === key || (tab === "calendar" && key === "overview")}
          count={key === "modules" ? String(modules) : undefined}
          accessibleLabel={key === "modules" ? `Modules ${String(modules)}` : undefined}
        />
      ))}
    </nav>
  );
}

/** Use compact history metadata when the scoped snapshot only retains the row's summary. */
function runDetails(snapshot: Snapshot, key: string, run: PublishedRun) {
  if (run.history)
    return {
      modules: run.history.modules.map(moduleName),
      labels: [
        ...(run.history.earlierFormat ? ["Earlier format"] : []),
        ...(run.history.earlierMethods ? ["Earlier methods"] : []),
      ],
    };
  if (!Object.hasOwn(run, "modules")) return null;
  const modules = moduleOrder(run).filter((id) => run.modules[id]?.outputs.length);
  return {
    modules: modules.map(moduleName),
    labels: runLabels(outputEntries(snapshot, run, key), run),
  };
}

function modulesRun(details: ReturnType<typeof runDetails>) {
  if (details) {
    const count = details.modules.length;
    if (count === 0) return "0 modules run";
    return `${String(count)} ${count === 1 ? "module" : "modules"} run: ${details.modules.join(", ")}`;
  }
  return "The module list is unavailable for this run.";
}

function HistoryRow({
  record,
  catalogue,
  details,
}: {
  record: PublishedRun;
  catalogue: CatalogueRun | undefined;
  details: ReturnType<typeof runDetails>;
}) {
  return (
    <li className="flex flex-wrap items-center justify-between gap-4 border-t border-border-hairline pt-3">
      <div className="grid gap-1">
        <p className="font-semibold">{runPathway(record, catalogue) || "Credit report"}</p>
        <p className="text-sm text-text-secondary">{runTiming(record)}</p>
        <p className="text-sm text-text-secondary">{scopeLabel(record)}</p>
        <p className="text-sm text-text-secondary">{modulesRun(details)}</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge set="Run states" state="Finished" />
        {details?.labels.map((label) => (
          <Badge key={label}>{label}</Badge>
        ))}
        <TextLink href={`${reportPath(record.folder)}#overview`}>Open overview</TextLink>
        <TextLink href={`${reportPath(record.folder)}#changes`}>What changed</TextLink>
      </div>
    </li>
  );
}

/** One row per published run of the issuer, newest first; every run listed here is finished. */
function RunHistory({ snapshot, run }: { snapshot: Snapshot; run: PublishedRun }) {
  const records = Object.entries(snapshot.workspace.runs).filter(
    ([key, record]) =>
      publishedRunForFolder(snapshot.workspace.runs, record.folder)?.[0] === key &&
      (record === run || Boolean(run.issuerKey && record.issuerKey === run.issuerKey)),
  );
  const byFolder = new Map(snapshot.catalogue.real.map((item) => [item.id, item]));
  return (
    <section className={card}>
      <h2 className={heading}>Report history</h2>
      <ul className="grid gap-3">
        {records
          .sort(([, a], [, b]) => (b.asOf ?? "").localeCompare(a.asOf ?? ""))
          .map(([key, record]) => (
            <HistoryRow
              key={key}
              record={record}
              catalogue={byFolder.get(record.folder)}
              details={runDetails(snapshot, key, record)}
            />
          ))}
      </ul>
    </section>
  );
}

/** The key charts, repeated from the modules that own them, and the way to every chart of the run. */
function KeyCharts({
  run,
  charts,
}: {
  run: PublishedRun;
  charts: ReturnType<typeof overviewCharts>;
}) {
  return (
    <section className="grid min-w-0 gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 id="overview-key-charts" tabIndex={-1} className={heading}>
          Key charts
        </h2>
        <Button href="#forecast/run-charts" color="link-gray" size="sm" iconTrailing={ArrowRight}>
          Chart index
        </Button>
      </div>
      {charts.length ? (
        charts.map(({ id, name, entry, output }) => (
          <div key={id} className="grid min-w-0 gap-2">
            <Button
              className="w-fit"
              href={`#modules/${encodeURIComponent(id)}`}
              color="link-gray"
              size="sm"
              iconTrailing={ArrowRight}
            >
              {name}
            </Button>
            <LegacyVisuals
              output={output}
              sections={entry.sections}
              evidenceHref={(line) => evidencePath(run.folder, entry, line)}
              cards
              headingLevel="h3"
            />
          </div>
        ))
      ) : (
        <p className={card}>No key charts are available for this run.</p>
      )}
    </section>
  );
}

function Overview({
  snapshot,
  run,
  view,
  routeKey,
  hasCalendar,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  view: ReportView;
  routeKey: string;
  hasCalendar: boolean;
}) {
  const frontPage = buildIssuerFrontPage(view, run);
  const specialist = reportSpecialistOverview(view, run, routeKey);
  const actionModules = ["CP-3", "CP-3D", "CP-5", "CP-6"];
  // A limitation of a module whose decision is held can restate that decision, so it stays on the
  // module's own page.
  const heldModules: string[] = (frontPage?.actions ?? []).flatMap(({ held, module }) =>
    held ? [module] : [],
  );
  const limitations = runLimitations(view, run, heldModules).filter(
    ({ id, line }) =>
      !frontPage?.limitations.some(
        (limitation) => limitation.owner.module === id && limitation.line === line,
      ),
  );
  const leftOut = runLimitations(view, run).filter(
    ({ id, text }) => heldModules.includes(id) && !limitations.some((row) => row.text === text),
  );
  const calendar = buildCalendar(view.entries, run.folder);
  const watchRows = upcomingCalendarRows(calendar.rows, run.asOf);
  const keyCharts = overviewCharts(view, run);
  const ownFigures = (frontPage?.figures.length ?? 0) > 0;
  const foundation = view.entries.find((entry) => entry.selected && entry.output.module === "CP-1");
  const metrics = foundation
    ? foundationMetrics(foundation, view.catalogue).filter(({ key }) => TILE_KEYS.includes(key))
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
    <HeadlineFigures
      catalogue={view.catalogue}
      sources={headlineSources(foundation, view.catalogue, run.folder)}
    />
  );
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-h2 text-balance">Overview</h2>
        {hasCalendar && (
          <Button color="tertiary" size="sm" href="#calendar">
            Issuer calendar
          </Button>
        )}
      </div>
      <nav aria-label="Overview sections" className="flex flex-wrap items-center gap-4 text-sm">
        <TextLink href="#overview/limitations">Limitations</TextLink>
        {(!frontPage || ownFigures || keyCharts.length > 0) && (
          <TextLink href="#overview/key-charts">Key charts</TextLink>
        )}
        {calendar.rows.length > 0 && <TextLink href="#overview/dates">Dates to watch</TextLink>}
      </nav>
      {frontPage ? (
        <IssuerFrontPage page={frontPage} specialist={specialist} />
      ) : (
        <>
          <p className={card}>
            A verified credit view is unavailable for this run. Its published handoffs are available
            under Modules.
          </p>
          {figures}
        </>
      )}
      <ModuleBottomLines
        run={run}
        rows={moduleBottomLines(view, run).filter(
          ({ id }) => id !== frontPage?.lead?.owner.module && !actionModules.includes(id),
        )}
      />
      <RunLimitations
        run={run}
        rows={limitations}
        elsewhere={[...new Set(leftOut.map(({ name }) => name))]}
      />
      {(!frontPage || (!ownFigures && keyCharts.length > 0)) && (
        <KeyCharts run={run} charts={keyCharts} />
      )}
      {calendar.rows.length > 0 && (
        <section className={`${card} grid gap-3`}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 id="overview-dates" tabIndex={-1} className={heading}>
              Dates to watch
            </h2>
            <Button href="#calendar" color="link-gray" size="sm" iconTrailing={ArrowRight}>
              Open issuer calendar
            </Button>
          </div>
          {watchRows === null ? (
            <p className="text-sm text-text-secondary" role="status">
              This run needs a valid as-of date to identify upcoming events.
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
                    <span>{event.cells[0]}</span>
                    <Button href={event.href} color="link-gray" size="sm">
                      Evidence
                    </Button>
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

/** The open tab. It is drawn again only when the report, the run or the place in it changes. */
const ReportPage = memo(function ReportPage({
  snapshot,
  run,
  routeKey,
  parts,
  tab,
  mode,
  catalogue,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  routeKey: string;
  parts: string[];
  catalogue: CatalogueRun | undefined;
  tab: Tab;
  mode: Mode;
}) {
  const view = useMemo(() => buildReportView(snapshot, routeKey, run), [snapshot, routeKey, run]);
  const calendar =
    tab === "overview" || tab === "calendar" ? buildCalendar(view.entries, run.folder) : null;
  const change = comparisonForRun(run, snapshot.workspace.runs);
  const hasIssuerBrief =
    tab === "overview" &&
    run.publicationVerified === true &&
    ["credit_snapshot", "lite_credit_assessment", "deep_credit_assessment"].includes(
      run.pathway ?? "",
    );
  return (
    <div className="mt-4 grid min-w-0 gap-5">
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
          {!hasIssuerBrief && (
            <IdentityBand catalogue={catalogue} entries={view.entries} folder={run.folder} />
          )}
          <ReportNav tab={tab} modules={view.modules.length} />
          {tab === "history" && <RunHistory snapshot={snapshot} run={run} />}
          {tab === "overview" && (
            <Overview
              snapshot={snapshot}
              run={run}
              view={view}
              routeKey={routeKey}
              hasCalendar={Boolean(calendar?.rows.length || calendar?.gaps.length)}
            />
          )}
          {tab === "calendar" && calendar && <Calendar calendar={calendar} />}
          {tab === "changes" && (
            <ReportChanges snapshot={snapshot} run={run} entries={view.entries} change={change} />
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
          {tab === "forecast" && (
            <Forecast
              run={run}
              view={view}
              section={parts[0]}
              preview={Boolean(snapshot.preview)}
            />
          )}
          {tab === "evidence" && (
            <ReportEvidence
              snapshot={snapshot}
              run={run}
              entries={view.entries}
              models={view.models}
              target={parts.join("/")}
              mode={mode}
              comparison={<ComparisonMeasures change={change} />}
            />
          )}
        </PublishedTraceProvider>
      </PortfolioBasisProvider>
    </div>
  );
});

function ReaderBadges({
  run,
  catalogue,
  preview,
  mode,
  labels,
}: {
  run: PublishedRun;
  catalogue?: CatalogueRun;
  preview?: Snapshot["preview"];
  mode: Mode;
  labels: string[];
}) {
  return (
    <>
      <Badge>{runTiming(run)}</Badge>
      <Badge>{runPathway(run, catalogue)}</Badge>
      {run.publicationVerified === true && catalogue?.ticker && <Badge>{catalogue.ticker}</Badge>}
      {run.publicationVerified === true &&
        catalogue?.period &&
        catalogue.period !== run.period &&
        catalogue.period !== run.asOf && <Badge>Financial period {catalogue.period}</Badge>}
      {preview ? (
        <Badge color="brand">Test preview</Badge>
      ) : (
        <>
          <StatusBadge set="Run states" state="Finished" />
          {mode === "synthetic" && <Badge color="brand">Synthetic test</Badge>}
        </>
      )}
      {labels.map((label) => (
        <Badge key={label}>{label}</Badge>
      ))}
    </>
  );
}

function ReaderHeader({
  run,
  catalogue,
  preview,
  mode,
  id,
  labels,
  sources,
  setSources,
  evidence,
  issuer,
  exportAction,
}: {
  run: PublishedRun | null;
  catalogue?: CatalogueRun;
  preview?: Snapshot["preview"];
  mode: Mode;
  id: string;
  labels: string[];
  sources: boolean;
  setSources: (selected: boolean) => void;
  evidence: boolean;
  issuer: string | null;
  exportAction: ReactNode;
}) {
  if (!run) return <PageHeader title={issuer ? `${issuer} report` : "Credit report"} />;
  return (
    <PageHeader
      title={catalogue?.name || run.issuerHeading || run.issuer}
      badges={
        <ReaderBadges
          run={run}
          catalogue={catalogue}
          preview={preview}
          mode={mode}
          labels={labels}
        />
      }
      actions={
        <div className="flex flex-wrap items-center gap-2">
          {exportAction}
          {!evidence && (
            <SourcesSwitch
              isSelected={sources}
              onChange={setSources}
              label="Highlight source icons"
            />
          )}
          {!preview && (
            <Button color="tertiary" href={`/run/${encodeURIComponent(id)}`}>
              Run progress
            </Button>
          )}
        </div>
      }
    />
  );
}

/** The report's snapshot, or why there is none: the service could not be reached, it answered
 * with an error, or it publishes no report for this address (with the run's record, if any). */
type Loaded =
  | { snapshot: Snapshot | null }
  | { failure: "unreachable" | "failed" }
  | { failure: "unpublished"; run: ConnectedRun | null };

async function loadReport(signal: AbortSignal, id: string): Promise<Loaded> {
  try {
    return { snapshot: await getSnapshot(signal, id) };
  } catch (failure) {
    if (signal.aborted) throw failure;
    if (failure instanceof TypeError) return { failure: "unreachable" };
    if (!(failure instanceof RequestError) || failure.status !== 404) return { failure: "failed" };
    const run = await getRun(id, signal).catch((reason: unknown) => {
      if (signal.aborted) throw reason;
      return null;
    });
    return { failure: "unpublished", run };
  }
}

type Notice = {
  tone: "info" | "warning" | "error";
  title: string;
  text: string;
  actions: ("retry" | "run" | "library")[];
};

function unpublishedNotice(run: ConnectedRun | null): Notice {
  if (!run)
    return {
      tone: "warning",
      title: "No report at this address",
      text: "No published report or run record was found for this address.",
      actions: ["library"],
    };
  if (run.status === "queued" || run.status === "running")
    return {
      tone: "info",
      title: "This run is in progress",
      text: "The report will appear here once it’s published.",
      actions: ["run"],
    };
  if (run.status === "finished")
    return {
      tone: "warning",
      title: "No report is listed for this run",
      text: "The run finished. Check Run progress for the delivery record.",
      actions: ["run", "library"],
    };
  return {
    tone: "warning",
    title: "This run ended without a report",
    text: "Check Run progress to see where the run stopped.",
    actions: ["run", "library"],
  };
}

function failureNotice(loaded: Exclude<Loaded, { snapshot: Snapshot | null }>): Notice {
  if (loaded.failure === "unpublished") return unpublishedNotice(loaded.run);
  if (loaded.failure === "unreachable")
    return {
      tone: "error",
      title: "The report service could not be reached",
      text: "Check that Credit OS is still running on this computer, then try again.",
      actions: ["retry"],
    };
  return {
    tone: "error",
    title: "The report could not be loaded",
    text: "Try again or open Run progress to see the run’s record.",
    actions: ["retry", "run"],
  };
}

function ReportUnavailable({
  loaded,
  id,
  retry,
}: {
  loaded: Exclude<Loaded, { snapshot: Snapshot | null }>;
  id: string;
  retry: () => void;
}) {
  const { tone, title, text, actions } = failureNotice(loaded);
  const action = {
    retry: (
      <Button key="retry" color="secondary" size="sm" onPress={retry}>
        Try again
      </Button>
    ),
    run: (
      <Button key="run" color="secondary" size="sm" href={`/run/${encodeURIComponent(id)}`}>
        Run progress
      </Button>
    ),
    library: (
      <Button key="library" color="link-gray" size="sm" href="/">
        Back to the library
      </Button>
    ),
  };
  return (
    <div className="mt-6">
      <Alert
        tone={tone}
        title={title}
        action={<div className="flex flex-wrap gap-3">{actions.map((name) => action[name])}</div>}
      >
        {text}
      </Alert>
    </div>
  );
}

function ReaderStatus({
  loaded,
  found,
  id,
  retry,
}: {
  loaded: Loaded | undefined;
  found: boolean;
  id: string;
  retry: () => void;
}) {
  if (loaded === undefined)
    return (
      <div role="status" className="mt-6 grid gap-5 text-text-secondary">
        <p>Loading report…</p>
        <div aria-hidden="true" className="grid gap-5">
          <div className="h-10 w-3/4 rounded-ds-md bg-surface-subtle" />
          <div className="h-40 rounded-ds-lg bg-surface-subtle" />
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((at) => (
              <div key={at} className="h-24 rounded-ds-md bg-surface-subtle" />
            ))}
          </div>
        </div>
      </div>
    );
  if (!("snapshot" in loaded)) return <ReportUnavailable loaded={loaded} id={id} retry={retry} />;
  return (
    <>
      {loaded.snapshot?.preview?.reason && (
        <div className="mt-4">
          <Callout title="Test preview">{loaded.snapshot.preview.reason}</Callout>
        </div>
      )}
      {!found && <p className={`mt-6 ${card}`}>No report was published for this run.</p>}
    </>
  );
}

/** A report; Try again on a failed load reads it afresh. */
export function ReportReader({ id, mode }: { id: string; mode: Mode }) {
  const [attempt, setAttempt] = useState(0);
  const retry = useCallback(() => {
    setAttempt((count) => count + 1);
  }, []);
  return <ReportReaderPage key={attempt} id={id} mode={mode} retry={retry} />;
}

function reportRoute(hash: string): { tab: Tab; parts: string[] } {
  const [route, ...parts] = hash.slice(1).split("/");
  if (route === "calendar") return { tab: route, parts };
  if (route === "modules" && parts[0] === "CP-8") return { tab: "changes", parts };
  return { tab: tabs.find(([name]) => name === route)?.[0] ?? "overview", parts };
}

function reportPublication(loaded: Loaded | undefined, id: string) {
  const value = loaded && "snapshot" in loaded ? loaded.snapshot : undefined;
  const found = value && publishedRunForFolder(value.workspace.runs, id);
  const matches = value?.catalogue.real.filter((entry) => entry.id === id);
  const catalogue = matches?.length === 1 ? matches[0] : undefined;
  const run = found?.[1] ?? null;
  const labels =
    value && found ? runLabels(outputEntries(value, found[1], found[0]), found[1]) : [];
  return { value, found, run, catalogue, issuer: reportIssuer(run, catalogue, loaded), labels };
}

function reportIssuer(
  run: PublishedRun | null,
  catalogue: CatalogueRun | undefined,
  loaded: Loaded | undefined,
) {
  if (run) return catalogue?.name || run.issuerHeading || run.issuer;
  return unpublishedIssuer(loaded);
}

function unpublishedIssuer(loaded: Loaded | undefined) {
  if (loaded && "failure" in loaded && loaded.failure === "unpublished")
    return loaded.run?.issuer_name ?? null;
  return null;
}

function useReportTitle(issuer: string | null, page: string) {
  useEffect(() => {
    document.title = [page, issuer, "Credit OS"].filter(Boolean).join(" — ");
    return () => {
      document.title = "Credit OS";
    };
  }, [issuer, page]);
}

function useReportExport(value: Snapshot | null | undefined, id: string, mode: Mode, hash: string) {
  const exportId = exportRoute(hash);
  const exports = useMemo(() => reportExports(value, id, mode), [value, id, mode]);
  const preview =
    exportId === null
      ? ({ state: "unavailable", reason: "This PDF format is unavailable." } as const)
      : exportId && value !== undefined
        ? exports.resolve(exportId)
        : undefined;
  return { exportId, exports, preview };
}

function ReportReaderPage({ id, mode, retry }: { id: string; mode: Mode; retry: () => void }) {
  const load = useCallback((signal: AbortSignal) => loadReport(signal, id), [id]);
  const resource = useResource(load);
  const loaded: Loaded | undefined =
    resource.value ?? (resource.error ? { failure: "failed" } : undefined);
  const [sources, setSources] = useSourcesOn();
  const hash = useSyncExternalStore(listenHash, readHash);
  const { tab, parts } = useMemo(() => reportRoute(hash), [hash]);
  const { value, found, run, catalogue, issuer, labels } = reportPublication(loaded, id);
  const root = useRef<HTMLDivElement>(null);
  useReportPlace(root, hash, Boolean(run));
  const { exportId, exports, preview } = useReportExport(value, id, mode, hash);
  const readyPreview = preview?.state === "ready" ? preview : null;
  const reportPage = run ? readerPageName(tab, parts) : "Credit report";
  const page = exportId === undefined ? reportPage : (readyPreview?.name ?? "PDF preview");
  useReportTitle(exportId === undefined ? issuer : (readyPreview?.document.issuer ?? null), page);
  if (exportId !== undefined)
    return (
      <div ref={root}>
        <ReportExportPreview key={exportId ?? "unsupported"} report={preview}>
          <ReaderStatus loaded={loaded} found={Boolean(found)} id={id} retry={retry} />
        </ReportExportPreview>
      </div>
    );
  return (
    <div ref={root} className="mx-auto w-full max-w-[96rem]" data-sources={sources ? "on" : "off"}>
      <Breadcrumb>{issuer || "Report"}</Breadcrumb>
      <ReaderHeader
        run={run}
        catalogue={catalogue}
        preview={value?.preview}
        mode={mode}
        id={id}
        labels={labels}
        sources={sources}
        setSources={setSources}
        evidence={tab === "evidence"}
        issuer={issuer}
        exportAction={run && <ExportMenu options={exports.options} reason={exports.reason} />}
      />
      <ReaderStatus loaded={loaded} found={Boolean(found)} id={id} retry={retry} />
      {value && found && (
        <ReportPage
          snapshot={value}
          run={found[1]}
          routeKey={found[0]}
          parts={parts}
          tab={tab}
          mode={mode}
          catalogue={catalogue}
        />
      )}
    </div>
  );
}
