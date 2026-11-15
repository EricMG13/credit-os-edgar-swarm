import { useState, useSyncExternalStore } from "react";
import { ArrowRight } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { StatusBadge } from "@/components/status/StatusBadge";
import { RunTabLink } from "@/pages/library/parts/RunFrame";
import { SourcesSwitch, useSourcesOn } from "@/pages/library/parts/SourcesSwitch";
import { PageHeader } from "../../shell/PageHeader";
import { TextLink } from "../run/TextLink";
import { Breadcrumb, card, ErrorNotice, field, heading, label } from "./layout";
import {
  comparisonForRun,
  comparisonRows,
  getSnapshot,
  reportPath,
  runPathway,
  runTiming,
  withUnit,
  type CatalogueRun,
  type PublishedRun,
  type Snapshot,
} from "./publishedReport";
import { ReportFindings } from "./ReportContent";
import { ReportEvidence } from "./report/Evidence";
import { actionBias, buildReportView, foundationMetrics } from "./reportView";
import { Calendar, buildCalendar } from "./report/Calendar";
import { Changes, ComparisonTable } from "./report/Changes";
import { Forecast } from "./report/Forecast";
import { MetricGrid } from "./report/MetricGrid";
import { Modules } from "./report/Modules";
import { PublishedTraceProvider } from "./report/PublishedTrace";
import { PortfolioBasisProvider } from "./report/PortfolioBasis";
import { useResource } from "./useResource";

const metricLabels = [
  ["net_leverage", "Net leverage"],
  ["leverage", "Gross leverage"],
  ["coverage", "Interest coverage"],
  ["cash", "Cash"],
  ["undrawn", "Undrawn facilities"],
] as const;

function HeadlineFigures({ catalogue }: { catalogue?: CatalogueRun }) {
  const figures = metricLabels.flatMap(([key, name]) => {
    const figure = catalogue?.metrics[key];
    return figure?.value != null ? [{ name, figure }] : [];
  });
  if (!figures.length) return null;
  return (
    <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {figures.map(({ name, figure }) => (
        <div className="rounded-ds-md border border-border-hairline bg-surface-card p-4" key={name}>
          <dt className="text-sm text-text-secondary">{name}</dt>
          <dd className="mt-1 font-display text-h3 tabular-nums">
            {withUnit(figure.value ?? "", figure.unit)}
          </dd>
          {figure.period && <dd className="text-sm text-text-secondary">{figure.period}</dd>}
        </div>
      ))}
    </dl>
  );
}

function MatchRuns({ snapshot, query }: { snapshot: Snapshot; query: string }) {
  const byFolder = new Map(Object.values(snapshot.workspace.runs).map((run) => [run.folder, run]));
  const groups = new Map<string, CatalogueRun[]>();
  for (const entry of snapshot.catalogue.real) {
    const run = byFolder.get(entry.id);
    const key = run?.issuerKey ?? entry.id;
    const matches = [
      entry.name,
      entry.issuer,
      entry.title,
      entry.sector,
      entry.period,
      entry.date,
    ].some((value) => value.toLowerCase().includes(query.trim().toLowerCase()));
    if (matches) groups.set(key, [...(groups.get(key) ?? []), entry]);
  }
  if (!groups.size)
    return (
      <p className={card}>{query.trim() ? "No issuers match this search." : "No reports yet"}</p>
    );
  return (
    <ul className="grid gap-4 lg:grid-cols-2">
      {[...groups].map(([key, entries]) => {
        const ordered = [...entries].sort((a, b) => b.date.localeCompare(a.date));
        const newest = ordered[0];
        if (!newest) return null;
        const linked = ordered.find((entry) => byFolder.has(entry.id));
        return (
          <li key={key} className={card}>
            <header className="grid gap-1">
              <h3 className={heading}>{newest.name}</h3>
              <p className="text-sm text-text-secondary">
                {[newest.issuer !== newest.name ? newest.issuer : "", newest.sector]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            </header>
            <p className="text-sm text-text-secondary">
              {runPathway(byFolder.get(newest.id) ?? { pathway: null }, newest)} ·{" "}
              <time dateTime={newest.date}>{newest.date}</time>
            </p>
            <HeadlineFigures catalogue={newest} />
            {linked ? (
              <div className="flex flex-wrap items-center gap-3">
                <Button href={reportPath(linked.id)} color="secondary" iconTrailing={ArrowRight}>
                  Open report
                </Button>
                <TextLink
                  href={`${reportPath(linked.id)}#history`}
                >{`${String(entries.length)} ${entries.length === 1 ? "run" : "runs"}`}</TextLink>
              </div>
            ) : (
              <p className="text-sm text-text-secondary">
                No run report was published for this entry.
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function ReportLibrary() {
  const { value, error } = useResource(getSnapshot);
  const [query, setQuery] = useState("");
  return (
    <>
      <PageHeader title="Library" actions={<Button href="/start">Start a run</Button>} />
      <section className="mt-6 grid gap-4">
        {error && <ErrorNotice>{error}</ErrorNotice>}
        {value === undefined && !error && (
          <p role="status" className="text-text-secondary">
            Loading reports…
          </p>
        )}
        {value === null && <p className={card}>No reports yet</p>}
        {value && (
          <>
            {value.catalogue.real.length > 0 && (
              <label className={`${label} max-w-md`}>
                Search issuers
                <input
                  type="search"
                  value={query}
                  onChange={(event) => {
                    setQuery(event.currentTarget.value);
                  }}
                  className={field}
                />
              </label>
            )}
            <MatchRuns snapshot={value} query={query} />
          </>
        )}
      </section>
    </>
  );
}

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
    </>
  );
}

function ReportPage({
  snapshot,
  run,
  routeKey,
  parts,
  tab,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  routeKey: string;
  parts: string[];
  tab: Tab;
}) {
  const view = buildReportView(snapshot, routeKey, run);
  const calendar =
    tab === "overview" || tab === "calendar" ? buildCalendar(view.entries, run.folder) : null;
  const change = comparisonForRun(run, snapshot.workspace.runs);
  const rows = change?.pack && !change.problem ? comparisonRows(change) : [];
  return (
    <div className="mt-4 grid min-w-0 gap-5">
      <ReportNav tab={tab} modules={view.modules.length} />
      <PortfolioBasisProvider
        folder={run.folder}
        enabled={
          (tab === "forecast" || tab === "modules") &&
          view.entries.some(
            ({ output }) =>
              output.module === "CP-6" && output.charts?.some(({ kind }) => kind === "limits"),
          )
        }
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
              comparison={
                rows.length ? (
                  <section className={card}>
                    <h3 className={heading}>Comparison measures</h3>
                    <ComparisonTable rows={rows} />
                  </section>
                ) : null
              }
            />
          )}
        </PublishedTraceProvider>
      </PortfolioBasisProvider>
    </div>
  );
}

export function ReportReader({ id }: { id: string }) {
  const { value, error } = useResource(getSnapshot);
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
      <PageHeader
        title={run ? catalogue?.name || run.issuerHeading || run.issuer : "Credit report"}
        badges={
          run && (
            <>
              <Badge>{runTiming(run)}</Badge>
              <Badge>{runPathway(run, catalogue)}</Badge>
              {value?.preview ? (
                <Badge color="brand">Test preview</Badge>
              ) : (
                <StatusBadge set="Run states" state="Finished" />
              )}
            </>
          )
        }
        actions={
          run && (
            <div className="flex flex-wrap items-center gap-2">
              <SourcesSwitch isSelected={sources} onChange={setSources} />
              <Button color="secondary" href="#history">
                Report history
              </Button>
              <Button color="secondary" href={`/run/${encodeURIComponent(id)}`}>
                Run activity
              </Button>
            </div>
          )
        }
      />
      {error && <ErrorNotice>{error}</ErrorNotice>}
      {value === undefined && !error && (
        <p role="status" className="mt-6 text-text-secondary">
          Loading report…
        </p>
      )}
      {value !== undefined && !found && (
        <p className={`mt-6 ${card}`}>No report was published for this run.</p>
      )}
      {value && found && (
        <ReportPage snapshot={value} run={found[1]} routeKey={found[0]} parts={parts} tab={tab} />
      )}
    </div>
  );
}
