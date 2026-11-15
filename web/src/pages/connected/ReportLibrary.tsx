import { useState, useSyncExternalStore } from "react";
import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { StatusBadge } from "@/components/status/StatusBadge";
import { PageHeader } from "../../shell/PageHeader";
import { TextLink } from "../run/TextLink";
import { moduleName } from "./api";
import { Breadcrumb, card, ErrorNotice, field, heading, label } from "./layout";
import {
  blocked,
  comparisonRows,
  containsReference,
  evidencePath,
  getSnapshot,
  outputEntries,
  passages,
  reportPath,
  runModels,
  runPathway,
  runTiming,
  withUnit,
  type CatalogueRun,
  type OutputEntry,
  type PublishedRun,
  type Snapshot,
} from "./publishedReport";
import { HandoffDownload, PublishedTable, ReportEvidence, ReportFindings } from "./ReportContent";
import { useResource } from "./useResource";
import { LegacyForecast, LegacyVisuals } from "./visuals";

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
type Tab = (typeof tabs)[number][0];

function listenHash(fn: () => void) {
  window.addEventListener("hashchange", fn);
  return () => {
    window.removeEventListener("hashchange", fn);
  };
}

const readHash = () => window.location.hash;
const tabHref = (tab: Tab) => `#${tab}`;

function ReportNav({ tab }: { tab: Tab }) {
  return (
    <nav
      aria-label="Report sections"
      className="flex flex-wrap gap-x-5 gap-y-1 border-b border-border-hairline"
    >
      {tabs.map(([key, title]) => (
        <a
          key={key}
          href={tabHref(key)}
          aria-current={tab === key ? "page" : undefined}
          className={`rounded-t-ds-sm border-b-2 px-1 py-3 text-sm font-semibold outline-focus focus-visible:outline-2 ${
            tab === key
              ? "border-action text-action"
              : "border-transparent text-text-secondary hover:text-text-primary"
          }`}
        >
          {title}
        </a>
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

function leadIndex(entries: OutputEntry[]) {
  for (const module of ["CP-6", "CP-2", "CP-L10"]) {
    const index = entries.findIndex(
      (entry) =>
        entry.selected &&
        entry.output.module === module &&
        !blocked(entry) &&
        passages(entry.sections).some((section) => section.heading === "Bottom line"),
    );
    if (index !== -1) return index;
  }
  return -1;
}

function ModuleLinks({ entries, active }: { entries: OutputEntry[]; active?: string }) {
  return (
    <nav aria-label="Published modules" className="flex flex-wrap gap-2">
      {[...new Set(entries.map((entry) => entry.output.module))].map((module) => (
        <a
          key={module}
          href={`#modules/${module}`}
          aria-current={active === module ? "page" : undefined}
          className={`rounded-ds-full border px-3 py-1.5 text-sm font-semibold outline-focus focus-visible:outline-2 ${
            active === module
              ? "border-action-subtle-hover bg-action-subtle text-action"
              : "border-border-hairline bg-surface-card text-text-secondary hover:text-text-primary"
          }`}
        >
          {moduleName(module)}
        </a>
      ))}
    </nav>
  );
}

type ReportData = { snapshot: Snapshot; run: PublishedRun; entries: OutputEntry[] };

function Overview({
  snapshot,
  run,
  entries,
  catalogue,
}: ReportData & { catalogue?: CatalogueRun }) {
  const index = leadIndex(entries);
  const lead = entries[index];
  return (
    <>
      {lead ? (
        <ReportFindings snapshot={snapshot} run={run} entry={lead} entryIndex={index} overview />
      ) : (
        <section className={card}>
          <h2 className={heading}>Credit view</h2>
          <p className="text-text-secondary">
            No credit view is available in the published handoffs for this run.
          </p>
        </section>
      )}
      <HeadlineFigures catalogue={catalogue} />
      <section className={card}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className={heading}>Modules</h2>
          {lead && <HandoffDownload run={run} entry={lead} />}
        </div>
        {entries.length ? (
          <ModuleLinks entries={entries} />
        ) : (
          <p className="text-text-secondary">No module output retained for this run.</p>
        )}
      </section>
    </>
  );
}

function Modules({
  snapshot,
  run,
  entries,
  module,
  output,
}: ReportData & { module?: string; output?: string }) {
  const active =
    entries.find((entry) => entry.output.module === module)?.output.module ??
    entries[0]?.output.module;
  const matching = entries.filter((entry) => entry.output.module === active);
  const selected =
    output === undefined
      ? (matching.find((entry) => entry.selected) ??
        (matching.length === 1 ? matching[0] : undefined))
      : matching[Number(output)];
  const index = selected ? entries.indexOf(selected) : -1;
  if (!active) return <p className={card}>No module output retained for this run.</p>;
  return (
    <>
      <ModuleLinks entries={entries} active={active} />
      <section className={card}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className={heading}>{moduleName(active)}</h2>
          {selected && <HandoffDownload run={run} entry={selected} />}
        </div>
        {matching.length > 1 && (
          <nav aria-label="Saved outputs" className="flex flex-wrap gap-3">
            {matching.map((entry, at) => (
              <a
                key={entry.output.id}
                href={`#modules/${active}/${String(at)}`}
                aria-current={entry === selected ? "page" : undefined}
                className="text-sm font-medium text-action underline"
              >
                {entry.output.label}
              </a>
            ))}
          </nav>
        )}
        {!selected && (
          <p className="text-text-secondary">Choose a retained output to read its handoff.</p>
        )}
        {selected && !selected.selected && (
          <p className="text-sm text-text-secondary">
            This output is available to read. The workspace serves a download for the designated
            handoff.
          </p>
        )}
        {selected && blocked(selected) && <StatusBadge set="Module state" state="Not assessable" />}
      </section>
      {selected && (
        <div className="grid min-w-0 gap-4" key={selected.output.id}>
          <LegacyVisuals
            output={selected.output}
            sections={selected.sections}
            evidenceHref={(line: number) => evidencePath(run.folder, String(index), line)}
          />
          <ReportFindings snapshot={snapshot} run={run} entry={selected} entryIndex={index} />
        </div>
      )}
    </>
  );
}

function Changes({ snapshot, run, entries }: ReportData) {
  const change = run.changes;
  const entryIndex = entries.findIndex((entry) => entry.output.module === "CP-8" && entry.selected);
  const entry = entries[entryIndex];
  const explanation = change?.problem
    ? "The comparison could not be read."
    : change?.note
      ? "The comparison was not produced."
      : change?.pack
        ? null
        : change?.first_run === true
          ? "No earlier run to compare."
          : "No comparison was recorded for this run.";
  return (
    <>
      <section className={card}>
        <h2 className={heading}>Changes since the last run</h2>
        {explanation && <p className="text-text-secondary">{explanation}</p>}
        {change?.note && !containsReference(change.note) && (
          <p className="text-text-secondary">{change.note}</p>
        )}
        {change?.pack && <TextLink href="#evidence">Review comparison evidence</TextLink>}
        {entry && <HandoffDownload run={run} entry={entry} />}
      </section>
      {entry && (
        <ReportFindings snapshot={snapshot} run={run} entry={entry} entryIndex={entryIndex} />
      )}
      <RunHistory snapshot={snapshot} run={run} />
    </>
  );
}

function Forecast({ snapshot, run, entries, routeKey }: ReportData & { routeKey: string }) {
  const [selected, setSelected] = useState(0);
  const models = runModels(snapshot, routeKey, run);
  const model = models[selected] ?? models[0];
  const visuals = entries.filter(
    ({ output, selected: isDefault }) =>
      isDefault && (output.charts?.length || output.chartGaps?.length),
  );
  const register = model?.register;
  return (
    <>
      <section className={card}>
        <h2 className={heading}>Forecast</h2>
        {!model && (
          <p className="text-text-secondary">
            No forecast model was published from this run’s files.
          </p>
        )}
        {models.length > 1 && (
          <label className={`${label} max-w-xs`}>
            Published model
            <select
              className={field}
              value={selected}
              onChange={(event) => {
                setSelected(Number(event.currentTarget.value));
              }}
            >
              {models.map((item, index) => (
                <option key={item.id} value={index}>
                  Model {index + 1}
                  {item.mode ? ` · ${item.mode}` : ""}
                </option>
              ))}
            </select>
          </label>
        )}
        {model?.scope && !containsReference(model.scope) && (
          <p className="text-body text-text-secondary">{model.scope}</p>
        )}
        {model && (
          <p className="text-sm text-text-secondary">
            The hosted workspace provides the published forecast data. The original model file is
            unavailable here.
          </p>
        )}
      </section>
      {model && <LegacyForecast model={model} />}
      {register && (
        <section className={card}>
          <h2 className={heading}>Forecast assumptions</h2>
          {register.intro && !containsReference(register.intro) && (
            <p className="text-text-secondary">{register.intro}</p>
          )}
          <PublishedTable
            table={{
              type: "table",
              line: 0,
              headers: register.headers,
              rows: register.rows.map((cells, line) => ({ line, cells })),
            }}
            href="#evidence"
          />
        </section>
      )}
      {visuals.length > 0 && (
        <section className="grid gap-4">
          <h2 className={heading}>Run charts</h2>
          {visuals.map((item) => (
            <LegacyVisuals
              key={item.output.id}
              output={{ ...item.output, maps: [], events: [] }}
              sections={item.sections}
              evidenceHref={(line: number) =>
                evidencePath(run.folder, String(entries.indexOf(item)), line)
              }
            />
          ))}
        </section>
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
  const catalogue = snapshot.catalogue.real.find((entry) => entry.id === run.folder);
  const entries = outputEntries(snapshot, run);
  const data = { snapshot, run, entries };
  const rows = run.changes?.pack ? comparisonRows(run.changes) : [];
  return (
    <div className="mt-6 grid min-w-0 gap-5">
      <ReportNav tab={tab} />
      {tab === "history" && <RunHistory snapshot={snapshot} run={run} />}
      {tab === "overview" && <Overview {...data} catalogue={catalogue} />}
      {tab === "changes" && <Changes {...data} />}
      {tab === "modules" && <Modules {...data} module={parts[0]} output={parts[1]} />}
      {tab === "forecast" && <Forecast {...data} routeKey={routeKey} />}
      {tab === "evidence" && (
        <>
          <ReportEvidence {...data} target={parts[0]} />
          {rows.length > 0 && (
            <section className={card}>
              <h2 className={heading}>Comparison measures</h2>
              <PublishedTable
                evidence
                table={{
                  type: "table",
                  line: 0,
                  headers: [
                    "Measure",
                    "Earlier",
                    "Current",
                    "Difference recorded by comparison",
                    "Comparability",
                  ],
                  rows: rows.map((cells, line) => ({ cells, line })),
                }}
              />
            </section>
          )}
        </>
      )}
    </div>
  );
}

export function ReportReader({ id }: { id: string }) {
  const { value, error } = useResource(getSnapshot);
  const hash = useSyncExternalStore(listenHash, readHash);
  const [route, ...parts] = hash.slice(1).split("/");
  const tab = tabs.find(([name]) => name === route)?.[0] ?? "overview";
  const found = value && Object.entries(value.workspace.runs).find(([, run]) => run.folder === id);
  const catalogue = value?.catalogue.real.find((entry) => entry.id === id);
  const run = found ? found[1] : null;
  return (
    <>
      <Breadcrumb>Report</Breadcrumb>
      <PageHeader
        title={run ? catalogue?.name || run.issuerHeading || run.issuer : "Credit report"}
        badges={
          run && (
            <p className="text-sm text-text-secondary">
              {[runPathway(run, catalogue), runTiming(run)].filter(Boolean).join(" · ")}
            </p>
          )
        }
        actions={
          run && (
            <Button color="secondary" href={`/run/${encodeURIComponent(id)}`}>
              Run activity
            </Button>
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
    </>
  );
}
