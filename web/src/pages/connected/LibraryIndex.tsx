import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { ArrowRight, BookOpen01, FileSearch02 } from "@untitledui/icons";
import { Alert } from "@/components/alert/Alert";
import { EmptyState } from "@/components/application/empty-state/empty-state";
import { Skeleton } from "@/components/gap/Skeleton";
import { Callout } from "@/components/alert/Alert";
import { StatusBadge } from "@/components/status/StatusBadge";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { PageHeader } from "../../shell/PageHeader";
import { TextLink } from "../run/TextLink";
import { card, field, heading, label } from "./layout";
import {
  containsReference,
  getLibraryIndex,
  readerText,
  getSnapshot,
  outputEntries,
  evidenceHref,
  evidenceToken,
  resolveEvidenceLocation,
  reportPath,
  runPathway,
  type CatalogueRun,
  publishedRunForFolder,
  type Snapshot,
  type LibraryIndex,
} from "./publishedReport";
import { HeadlineFigures } from "./HeadlineFigures";
import { isUnreachable } from "./useResource";
import { asOfDate } from "./runFigures";
import { buildReportView, headlineSources } from "./reportView";
import { traceForLine } from "./ReportContent";
import { plainText, richParts } from "./richText";
import {
  isIssuerAssessment,
  issuerGroups,
  issuerPassageBody,
  leadIdentity,
  publishedLead,
  relatedIssuerReports,
  reportDate,
  scopeLabel,
  selectIssuerEntry,
} from "./issuerEntry";

type LibraryFilters = { query: string; sector: string; pathway: string; layout: "cards" | "list" };

function filtersFromAddress(): LibraryFilters {
  const query = new URLSearchParams(window.location.search);
  return {
    query: query.get("q") ?? "",
    sector: query.get("sector") ?? "all",
    pathway: query.get("pathway") ?? "all",
    layout: query.get("layout") === "list" ? "list" : "cards",
  };
}

type CardFinding = { body: string; href: string };

function LinkedFinding({ body, href }: CardFinding) {
  return (
    <div className="flex items-start justify-between gap-3">
      <p className="reading-copy min-w-0 text-body text-text-secondary">
        {richParts(body, readerText)}
      </p>
      <Button
        href={href}
        aria-label="Sources for this credit view"
        color="tertiary"
        size="sm"
        iconLeading={FileSearch02}
      >
        View sources
      </Button>
    </div>
  );
}

function metricIdentity(metric: CatalogueRun["metrics"][string] | undefined) {
  const { value = null, unit = null, period = null } = metric ?? {};
  return JSON.stringify([value, unit, period]);
}

const cardFindings = new Map<string, Promise<CardFinding | null>>();

/** One download per run, as-of date, pathway and issuer for the life of the page. */
function cachedCardFinding(run: LibraryIndex["workspace"]["runs"][string], date: string) {
  const key = JSON.stringify([run.folder, date, run.pathway, run.issuerKey]);
  const cached = cardFindings.get(key);
  if (cached) return cached;
  const pending = specialistCardFinding(run, date, new AbortController().signal);
  cardFindings.set(key, pending);
  pending.catch(() => cardFindings.delete(key));
  return pending;
}

async function specialistCardFinding(
  run: LibraryIndex["workspace"]["runs"][string],
  date: string,
  signal: AbortSignal,
): Promise<CardFinding | null> {
  const snapshot = await getSnapshot(signal, run.folder);
  if (snapshot?.reportFolder !== run.folder) return null;
  const admitted = publishedRunForFolder(snapshot.workspace.runs, run.folder);
  if (!admitted) return null;
  const [key, selected] = admitted;
  if (
    selected.asOf !== date ||
    selected.pathway !== run.pathway ||
    selected.issuerKey !== run.issuerKey
  )
    return null;
  const { reportSpecialistOverview } = await import("./export/reportExport");
  const finding = reportSpecialistOverview(buildReportView(snapshot, key, selected), selected, key)
    ?.findings[0];
  return finding
    ? {
        body: finding.body,
        href: evidenceHref(run.folder, evidenceToken({ output: finding.owner }, finding.line)),
      }
    : null;
}

function SpecialistCardFinding({
  run,
  date,
  unavailable,
}: {
  run: LibraryIndex["workspace"]["runs"][string];
  date: string;
  unavailable: ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [finding, setFinding] = useState<CardFinding | null>();
  useEffect(() => {
    const target = root.current;
    if (!target) return;
    const controller = new AbortController();
    const load = async () => {
      const result = await cachedCardFinding(run, date).catch(() => null);
      if (!controller.signal.aborted) setFinding(result);
    };
    const observer =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver((entries) => {
            if (!entries.some(({ isIntersecting }) => isIntersecting)) return;
            observer?.disconnect();
            void load();
          });
    if (observer) observer.observe(target);
    else void load();
    return () => {
      observer?.disconnect();
      controller.abort();
    };
  }, [date, run]);
  return (
    <div ref={root} className="min-h-px">
      {finding === null ? unavailable : finding && <LinkedFinding {...finding} />}
    </div>
  );
}

function CreditView({
  run,
  date,
  showUnavailableFinding,
}: {
  run: LibraryIndex["workspace"]["runs"][string] | undefined;
  date: string;
  showUnavailableFinding: boolean;
}) {
  const unavailable = showUnavailableFinding ? (
    <p className="text-sm text-text-secondary">
      A verified finding is unavailable for this report.
    </p>
  ) : null;
  if (
    run?.publicationVerified === true &&
    (run.pathway === "relative_value" || run.pathway === "portfolio_decision")
  )
    return (
      <SpecialistCardFinding
        key={JSON.stringify([run.folder, date, run.pathway, run.issuerKey])}
        run={run}
        date={date}
        unavailable={unavailable}
      />
    );
  const lead = leadIdentity(run);
  if (!run || !lead) return unavailable;
  const href = `${reportPath(run.folder)}#evidence/${encodeURIComponent(lead.output)}~${lead.sha256}-${String(lead.line)}`;
  const body = issuerPassageBody(lead.text);
  if (containsReference(plainText(body)))
    return <TextLink href={href}>Read this credit view in Evidence</TextLink>;
  if (!publishedLead(run)) return unavailable;
  return <LinkedFinding body={body} href={href} />;
}

function catalogueMetric(snapshot: Snapshot, id: string, key: string) {
  const matches = snapshot.catalogue.real.filter((item) => item.id === id);
  return matches.length === 1 ? matches[0]?.metrics[key] : undefined;
}

function resolveFigureSource(snapshot: Snapshot, catalogue: CatalogueRun, key: string) {
  const match = publishedRunForFolder(snapshot.workspace.runs, catalogue.id);
  if (!match) return null;
  const [routeKey, run] = match;
  const entries = outputEntries(snapshot, run, routeKey);
  const foundations = entries.filter((entry) => entry.selected && entry.output.module === "CP-1");
  if (foundations.length !== 1) return null;
  const source = headlineSources(foundations[0], catalogue, run.folder)[key];
  return source ? { entries, source, folder: run.folder } : null;
}

async function figureSource(catalogue: CatalogueRun, key: string, signal: AbortSignal) {
  const snapshot = await getSnapshot(signal, catalogue.id);
  if (!snapshot) return null;
  if (
    metricIdentity(catalogueMetric(snapshot, catalogue.id, key)) !==
    metricIdentity(catalogue.metrics[key])
  )
    return null;
  const result = resolveFigureSource(snapshot, catalogue, key);
  if (!result) return null;
  const { entries, source, folder } = result;
  const prefix = evidenceHref(folder, "");
  if (!source.href.startsWith(prefix)) return null;
  const location = resolveEvidenceLocation(entries, source.href.slice(prefix.length));
  if (!location || location.line === undefined) return null;
  const trace = traceForLine(snapshot, location.entry, location.index, location.line);
  return trace ? { trace, href: source.href } : null;
}
function LibraryFilter({
  name,
  choices,
  value,
  onChange,
}: {
  name: string;
  choices: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className={`${label} max-w-64`}>
      {name}
      <select
        aria-label={name}
        value={value}
        onChange={(event) => {
          onChange(event.currentTarget.value);
        }}
        className={field}
      >
        <option value="all">All</option>
        {value !== "all" && !choices.includes(value) && (
          <option value={value}>{value} (unavailable)</option>
        )}
        {choices.map((choice) => (
          <option key={choice} value={choice}>
            {choice}
          </option>
        ))}
      </select>
    </label>
  );
}

function AssessmentDate({ date }: { date: string }) {
  return reportDate(date) ? (
    <time className="tabular-nums" dateTime={date}>
      {asOfDate(date)}
    </time>
  ) : (
    "As-of date unavailable"
  );
}

function MatchRuns({
  snapshot,
  filters,
  setFilters,
}: {
  snapshot: LibraryIndex;
  filters: LibraryFilters;
  setFilters: Dispatch<SetStateAction<LibraryFilters>>;
}) {
  const { layout } = filters;
  const search = useRef<HTMLInputElement>(null);
  const groups = issuerGroups(snapshot);
  const items = [...groups.values()].flat();
  const sectors = [
    ...new Set(items.map(({ catalogue }) => catalogue.sector).filter(Boolean)),
  ].sort();
  const pathways = [
    ...new Set(
      items
        .map(({ run, catalogue }) => runPathway(run ?? { pathway: null }, catalogue))
        .filter(Boolean),
    ),
  ].sort();
  const query = filters.query.trim().toLowerCase();
  const cards = [...groups].flatMap(([key, entries]) => {
    const pathwayFiltered = filters.pathway !== "all";
    const candidates = pathwayFiltered
      ? entries.filter(
          ({ run, catalogue }) =>
            runPathway(run ?? { pathway: null }, catalogue) === filters.pathway,
        )
      : entries;
    const selected = selectIssuerEntry(candidates, pathwayFiltered);
    if (!selected) return [];
    const { catalogue } = selected;
    const matches = candidates.some(({ catalogue: item }) =>
      [item.name, item.issuer, item.title, item.sector, item.period, item.date].some((value) =>
        value.toLowerCase().includes(query),
      ),
    );
    if (!matches || (filters.sector !== "all" && catalogue.sector !== filters.sector)) return [];
    return [
      {
        key,
        entries,
        selected,
        assessmentUnavailable: !pathwayFiltered && !isIssuerAssessment(selected.run),
      },
    ];
  });
  return (
    <div className="grid min-w-0 gap-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="flex min-w-0 flex-1 flex-wrap items-end gap-3">
          <label className={`${label} w-full max-w-md sm:min-w-40 sm:flex-1`}>
            Search issuers
            <input
              ref={search}
              type="search"
              value={filters.query}
              onChange={(event) => {
                const query = event.currentTarget.value;
                setFilters((previous) => ({ ...previous, query }));
              }}
              className={field}
            />
          </label>
          <LibraryFilter
            name="Sector"
            choices={sectors}
            value={filters.sector}
            onChange={(sector) => {
              setFilters((previous) => ({ ...previous, sector }));
            }}
          />
          <LibraryFilter
            name="Pathway"
            choices={pathways}
            value={filters.pathway}
            onChange={(pathway) => {
              setFilters((previous) => ({ ...previous, pathway }));
            }}
          />
        </div>
        <ButtonGroup
          aria-label="Layout"
          size="sm"
          disallowEmptySelection
          selectedKeys={[layout]}
          onSelectionChange={(keys) => {
            const [key] = keys;
            if (key === "cards" || key === "list")
              setFilters((previous) => ({ ...previous, layout: key }));
          }}
        >
          <ButtonGroupItem id="cards">Cards</ButtonGroupItem>
          <ButtonGroupItem id="list">List</ButtonGroupItem>
        </ButtonGroup>
      </div>
      {cards.length === 0 ? (
        <div className={`${card} items-start`}>
          <p role="status">No issuers match these filters.</p>
          <Button
            color="secondary"
            onPress={() => {
              setFilters((previous) => ({ ...previous, query: "", sector: "all", pathway: "all" }));
              search.current?.focus();
            }}
          >
            Clear filters
          </Button>
        </div>
      ) : layout === "cards" ? (
        <ul className="grid gap-4 lg:grid-cols-2">
          {cards.map(({ key, entries, selected, assessmentUnavailable }) => {
            const { catalogue, run } = selected;
            const related = relatedIssuerReports(entries, selected);
            const count = entries.filter(({ run: entry }) => entry).length;
            return (
              <li key={key} className={card}>
                <header className="grid min-w-0 gap-1 wrap-anywhere">
                  <h3 className={heading}>{catalogue.name}</h3>
                  {(catalogue.ticker || catalogue.sector) && (
                    <p className="text-sm text-text-secondary">
                      {[catalogue.ticker, catalogue.sector].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  {snapshot.preview && run ? (
                    <Badge color="brand">Test preview</Badge>
                  ) : run ? (
                    <StatusBadge set="Module state" state="Delivered" />
                  ) : (
                    <Badge color="gray">No report published</Badge>
                  )}
                </header>
                <div className="grid gap-1 text-sm text-text-secondary">
                  <p>
                    {runPathway(run ?? { pathway: null }, catalogue)} ·{" "}
                    <AssessmentDate date={catalogue.date} />
                  </p>
                  {catalogue.period && catalogue.period !== catalogue.date && (
                    <p>Financial period {catalogue.period}</p>
                  )}
                  {run && <p>{scopeLabel(run)}</p>}
                  {assessmentUnavailable && <p>A verified issuer assessment is unavailable.</p>}
                </div>
                <CreditView
                  run={run}
                  date={catalogue.date}
                  showUnavailableFinding={!assessmentUnavailable}
                />
                <HeadlineFigures
                  key={catalogue.id}
                  catalogue={catalogue}
                  requestSource={
                    run ? (key, signal) => figureSource(catalogue, key, signal) : undefined
                  }
                />
                {run ? (
                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    <Button
                      href={reportPath(run.folder)}
                      color="secondary"
                      iconTrailing={ArrowRight}
                    >
                      Open report
                    </Button>
                    <TextLink
                      href={`${reportPath(run.folder)}#history`}
                    >{`${String(count)} ${count === 1 ? "run" : "runs"}`}</TextLink>
                  </div>
                ) : (
                  <p className="text-sm text-text-secondary">
                    No run report was published for this entry.
                  </p>
                )}
                {related.length > 0 && (
                  <ul className="grid gap-2 text-sm">
                    {related.map(
                      ({ catalogue: other, run: record, timing }) =>
                        record && (
                          <li key={other.id}>
                            <span className="text-text-secondary">{timing} · </span>
                            <TextLink
                              href={reportPath(record.folder)}
                            >{`${runPathway(record, other)} · ${reportDate(other.date) ? asOfDate(other.date) : "As-of date unavailable"}`}</TextLink>
                          </li>
                        ),
                    )}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="overflow-x-auto rounded-ds-md border border-border-hairline bg-surface-card">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border-hairline text-text-secondary">
                <th className="p-3">Issuer</th>
                <th className="p-3">Sector</th>
                <th className="p-3">Pathway</th>
                <th className="p-3">As of</th>
                <th className="p-3">Report</th>
              </tr>
            </thead>
            <tbody>
              {cards.map(
                ({ key, selected: { catalogue, run }, entries, assessmentUnavailable }) => (
                  <tr key={key} className="border-b border-border-hairline last:border-0">
                    <th scope="row" className="p-3 font-semibold wrap-anywhere">
                      {catalogue.name}
                    </th>
                    <td className="p-3 wrap-anywhere">{catalogue.sector || "—"}</td>
                    <td className="p-3 wrap-anywhere">
                      {runPathway(run ?? { pathway: null }, catalogue)}
                      {run && <p className="text-text-secondary">{scopeLabel(run)}</p>}
                      {assessmentUnavailable && (
                        <p className="text-text-secondary">
                          A verified issuer assessment is unavailable.
                        </p>
                      )}
                    </td>
                    <td className="p-3">
                      <AssessmentDate date={catalogue.date} />
                    </td>
                    <td className="p-3">
                      {run ? (
                        <div className="grid gap-1">
                          <TextLink href={reportPath(run.folder)}>Open report</TextLink>
                          <TextLink href={`${reportPath(run.folder)}#history`}>
                            Report history
                          </TextLink>
                          {relatedIssuerReports(entries, { catalogue, run }).map(
                            ({ catalogue: other, run: record, timing }) =>
                              record && (
                                <TextLink
                                  key={other.id}
                                  href={reportPath(record.folder)}
                                >{`${timing} · ${runPathway(record, other)} · ${reportDate(other.date) ? asOfDate(other.date) : "As-of date unavailable"}`}</TextLink>
                              ),
                          )}
                        </div>
                      ) : (
                        "Not published"
                      )}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/** How reading the library failed: the request never arrived, or the service could not give it. */
type Problem = "unreachable" | "failed";
const PROBLEMS = {
  unreachable: {
    title: "The service cannot be reached",
    text: "Check that the Credit OS service is running, then try again.",
  },
  failed: {
    title: "The library could not be loaded",
    text: "Try again. If the library still won’t open, ask the person running Credit OS to check it.",
  },
} as const;

/** The library index, asked for again by `retry`; a failure stays on screen until the next answer. */
function useLibrary() {
  const [value, setValue] = useState<LibraryIndex | null>();
  const [problem, setProblem] = useState<Problem>();
  const [attempts, setAttempts] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    getLibraryIndex(controller.signal).then(
      (index) => {
        if (controller.signal.aborted) return;
        setValue(index);
        setProblem(undefined);
      },
      (failure: unknown) => {
        if (!controller.signal.aborted)
          setProblem(isUnreachable(failure) ? "unreachable" : "failed");
      },
    );
    return () => {
      controller.abort();
    };
  }, [attempts]);
  const retry = () => {
    setAttempts((count) => count + 1);
  };
  return { value, problem, retry };
}

function EmptyLibrary({ readOnly }: { readOnly: boolean }) {
  return (
    <EmptyState>
      <EmptyState.Header>
        <EmptyState.FeaturedIcon icon={BookOpen01} />
      </EmptyState.Header>
      <EmptyState.Content>
        <EmptyState.Title>No reports yet</EmptyState.Title>
        <EmptyState.Description>
          Reports appear here after they’re published.
        </EmptyState.Description>
      </EmptyState.Content>
      {!readOnly && (
        <EmptyState.Footer>
          <Button href="/start" color="secondary">
            Start a run
          </Button>
        </EmptyState.Footer>
      )}
    </EmptyState>
  );
}

export function ReportLibrary({ readOnly = false }: { readOnly?: boolean }) {
  const { value, problem, retry } = useLibrary();
  const [filters, setFilters] = useState<LibraryFilters>(filtersFromAddress);
  useEffect(() => {
    document.title = "Library — Credit OS";
  }, []);
  useEffect(() => {
    const address = new URL(window.location.href);
    const values = {
      q: filters.query,
      sector: filters.sector,
      pathway: filters.pathway,
      layout: filters.layout,
    };
    for (const [key, value] of Object.entries(values)) {
      if (!value || value === "all" || (key === "layout" && value === "cards"))
        address.searchParams.delete(key);
      else address.searchParams.set(key, value);
    }
    window.history.replaceState(window.history.state, "", address);
  }, [filters]);
  // No index and an index with no report are one state; with nothing to filter, no filter is shown.
  const canStart = !readOnly && !value?.preview;
  const empty = value === null || value?.catalogue.real.length === 0;
  return (
    <>
      <PageHeader
        title="Library"
        actions={canStart && !empty && <Button href="/start">Start a run</Button>}
      />
      <section className="mt-6 grid gap-4">
        {problem && (
          <Alert
            tone="error"
            title={PROBLEMS[problem].title}
            action={
              <Button size="sm" color="secondary" onPress={retry}>
                Try again
              </Button>
            }
          >
            {PROBLEMS[problem].text}
          </Alert>
        )}
        {value === undefined && !problem && (
          <div role="status" aria-label="Loading reports" className="grid gap-4 lg:grid-cols-2">
            {[0, 1].map((key) => (
              <div className={card} key={key}>
                <Skeleton lines={5} />
              </div>
            ))}
          </div>
        )}
        {value?.preview && <Callout title="Test preview">{value.preview.reason}</Callout>}
        {empty && <EmptyLibrary readOnly={!canStart} />}
        {value && !empty && (
          <MatchRuns snapshot={value} filters={filters} setFilters={setFilters} />
        )}
      </section>
    </>
  );
}
