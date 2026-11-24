import { useEffect, useMemo, useState, type ReactNode } from "react";
import { BarChartSquare02 } from "@untitledui/icons";
import { Alert, Callout } from "@/components/alert/Alert";
import { EmptyState } from "@/components/application/empty-state/empty-state";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Button } from "@/components/base/buttons/button";
import { TrendChart } from "@/components/chart/TrendChart";
import { Skeleton } from "@/components/gap/Skeleton";
import { StatusBadge } from "@/components/status/StatusBadge";
import { PageHeader } from "../../shell/PageHeader";
import { TextLink } from "../run/TextLink";
import {
  commonPeriod,
  evidenceLink,
  factsOf,
  fieldUnits,
  figure,
  getCoverage,
  groupKey,
  latestRun,
  matchIssuers,
  NO_FILTERS,
  periodsOf,
  rank,
  readGroups,
  trend,
  writeGroups,
  type Cell,
  type CellState,
  type Coverage as Data,
  type CoverageRun,
  type Field,
  type Filters,
  type Issuer,
  type SavedGroup,
} from "./coverageData";
import { moduleName } from "./api";
import { card, field as control, heading, label } from "./layout";
import { asOfDate } from "./runFigures";
import { useResource } from "./useResource";

type View = "matrix" | "rank" | "find" | "trend";
const VIEWS: readonly { id: View; name: string }[] = [
  { id: "matrix", name: "Modules" },
  { id: "rank", name: "Rank" },
  { id: "find", name: "Find" },
  { id: "trend", name: "Trend" },
];

const STATE_WORDS: Record<CellState, string> = {
  assessed: "Delivered",
  "not-assessable": "Not assessable",
  unreadable: "Unreadable",
  "no-handoff": "No handoff published",
  "not-in-pathway": "Not in this pathway",
};

const reportPath = (folder: string) => `/report/${encodeURIComponent(folder)}`;
const th = "p-3 text-left align-bottom font-medium";
const tableBox = "overflow-x-auto rounded-ds-md border border-border-hairline bg-surface-card";

/** The module's name as the rest of the app says it; the service's title where the app has none. */
function named(column: { code: string; title: string }) {
  const name = moduleName(column.code);
  return name === column.code ? column.title : name;
}

/** Four even steps from zero (or the lowest figure below it) to just above the highest. */
function axisTicks(values: number[], unit: string) {
  const low = Math.min(0, ...values);
  const span = Math.max(...values) - low || 1;
  const step = Number((span / 4).toPrecision(1));
  const count = Math.ceil(span / step);
  const suffix = unit === "x" || unit === "%" ? unit : "";
  return Array.from({ length: count + 1 }, (_, index) => {
    const value = Number((low + index * step).toPrecision(12));
    return { value, label: `${String(value)}${suffix}` };
  });
}

function StateMark({ cell }: { cell: Cell | undefined }) {
  if (!cell || cell.state === "not-in-pathway")
    return <span className="text-text-tertiary">Not in this pathway</span>;
  if (cell.state === "unreadable") return <StatusBadge set="File state" state="Unreadable" />;
  if (cell.state === "not-assessable")
    return <StatusBadge set="Module state" state="Not assessable" />;
  if (cell.state === "no-handoff")
    return <StatusBadge set="Module state" state="Not run" label="No handoff published" />;
  if (cell.gaps)
    return (
      <StatusBadge
        set="Module state"
        state="Delivered with gaps"
        label={`Delivered, ${String(cell.gaps)} stated ${cell.gaps === 1 ? "gap" : "gaps"}`}
      />
    );
  return <StatusBadge set="Module state" state="Delivered" />;
}

/** A run's cell under each fixed column, in column order. */
function StateCells({ data, run }: { data: Data; run: CoverageRun }) {
  return (
    <>
      {data.columns.map((column) => (
        <td key={column.code} className="p-3">
          <StateMark cell={run.cells[column.code]} />
        </td>
      ))}
    </>
  );
}

function Choice({
  name,
  value,
  onChange,
  children,
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}) {
  return (
    <label className={`${label} max-w-md`}>
      {name}
      <select
        value={value}
        onChange={(event) => {
          onChange(event.currentTarget.value);
        }}
        className={control}
      >
        {children}
      </select>
    </label>
  );
}

function fieldName(field: Field, titles: ReadonlyMap<string, string>) {
  return `${titles.get(field.module) ?? moduleName(field.module)}: ${field.group}, ${field.label}`;
}

function FieldOptions({
  fields,
  titles,
}: {
  fields: Field[];
  titles: ReadonlyMap<string, string>;
}) {
  return (
    <>
      {fields.map((item) => (
        <option key={item.id} value={item.id}>
          {fieldName(item, titles)}
        </option>
      ))}
    </>
  );
}

function RunLine({ run }: { run: CoverageRun }) {
  return (
    <span className="text-sm text-text-secondary">
      {run.pathwayTitle ?? "Pathway not recorded"}
      {", as of "}
      {run.asOf ? <time dateTime={run.asOf}>{asOfDate(run.asOf)}</time> : "a date not recorded"}
    </span>
  );
}

function Matrix({
  data,
  issuers,
  chosen,
  toggle,
  open,
  setOpen,
}: {
  data: Data;
  issuers: Issuer[];
  chosen: ReadonlySet<string>;
  toggle: (key: string) => void;
  open: string | null;
  setOpen: (key: string | null) => void;
}) {
  return (
    <div className={tableBox}>
      <table className="w-full text-sm">
        <caption className="sr-only">Each issuer’s newest run: what every module delivered</caption>
        <thead>
          <tr className="border-b border-border-hairline text-text-secondary">
            <th className={th}>Compare</th>
            <th className={th}>Issuer</th>
            {data.columns.map((column) => (
              <th key={column.code} className={`${th} min-w-32`}>
                {named(column)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {issuers.map((issuer) => {
            const run = latestRun(issuer);
            if (!run) return null;
            return (
              <tr key={issuer.key} className="border-b border-border-hairline last:border-0">
                <td className="p-3">
                  <input
                    type="checkbox"
                    aria-label={`Compare ${issuer.name}`}
                    checked={chosen.has(issuer.key)}
                    onChange={() => {
                      toggle(issuer.key);
                    }}
                  />
                </td>
                <th scope="row" className="min-w-48 p-3 text-left font-semibold wrap-anywhere">
                  <button
                    type="button"
                    className="text-left underline-offset-2 hover:underline"
                    aria-expanded={open === issuer.key}
                    onClick={() => {
                      setOpen(open === issuer.key ? null : issuer.key);
                    }}
                  >
                    {issuer.name}
                  </button>
                  <br />
                  <RunLine run={run} />
                </th>
                <StateCells data={data} run={run} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/** One issuer: every run against the fixed columns, and what its newest run says. */
function IssuerDetail({ data, issuer }: { data: Data; issuer: Issuer }) {
  const newest = latestRun(issuer);
  const titles = new Map(data.columns.map((column) => [column.code, named(column)]));
  const fields = new Map(data.fields.map((item) => [item.id, item]));
  const said = newest
    ? factsOf(data, newest.key).filter((fact) => fact.field.endsWith("/bottomline"))
    : [];
  return (
    <section className={card} aria-label={issuer.name}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h2 className={heading}>{issuer.name}</h2>
        {newest && <Button href={reportPath(newest.folder)}>Open newest report</Button>}
      </div>
      <div className={tableBox}>
        <table className="w-full text-sm">
          <caption className="sr-only">Every run of {issuer.name}, newest first</caption>
          <thead>
            <tr className="border-b border-border-hairline text-text-secondary">
              <th className={th}>Run</th>
              {data.columns.map((column) => (
                <th key={column.code} className={`${th} min-w-32`}>
                  {named(column)}
                </th>
              ))}
              <th className={th}>Other modules</th>
            </tr>
          </thead>
          <tbody>
            {issuer.runs.map((run) => (
              <tr key={run.key} className="border-b border-border-hairline last:border-0">
                <th scope="row" className="min-w-48 p-3 text-left font-normal">
                  <RunLine run={run} />
                  <br />
                  <TextLink href={reportPath(run.folder)}>Open report</TextLink>
                </th>
                <StateCells data={data} run={run} />
                <td className="min-w-48 p-3">
                  {run.other.length === 0
                    ? "None"
                    : run.other
                        .map((item) => `${named(item)} (${STATE_WORDS[item.state].toLowerCase()})`)
                        .join("; ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {newest && said.length > 0 && (
        <div className="grid gap-3">
          <h3 className="font-semibold text-text-primary">Bottom lines of the newest run</h3>
          <ul className="grid gap-3">
            {said.map((fact) => (
              <li key={`${fact.output}-${String(fact.line)}`} className="grid gap-1">
                <span className="text-sm font-medium text-text-secondary">
                  {titles.get(fields.get(fact.field)?.module ?? "") ??
                    moduleName(fields.get(fact.field)?.module ?? "")}
                </span>
                <p className="reading-copy text-body text-text-primary">{fact.text}</p>
                <TextLink href={evidenceLink(newest, fact)}>View sources</TextLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function grouped(data: Data, issuers: readonly Issuer[], by: string) {
  const groups = new Map<string, Issuer[]>();
  for (const issuer of issuers) {
    const key = groupKey(data, issuer, by);
    groups.set(key, [...(groups.get(key) ?? []), issuer]);
  }
  return [...groups].sort(([a], [b]) => a.localeCompare(b));
}

function RankView({
  data,
  issuers,
  field,
  period,
  order,
  by,
}: {
  data: Data;
  issuers: Issuer[];
  field: Field | undefined;
  period: string | null;
  order: "high" | "low";
  by: string;
}) {
  if (!field || period === null)
    return (
      <p role="status" className={card}>
        No module of a published run states a figure in a chart table yet, so there is nothing to
        rank.
      </p>
    );
  return (
    <div className="grid gap-6">
      {grouped(data, issuers, by).map(([group, members]) => {
        const ranking = rank(data, members, field.id, period, order);
        return (
          <section key={group} className="grid gap-3" aria-label={group || "Ranking"}>
            {group && <h2 className={heading}>{group}</h2>}
            {ranking.units.map(({ unit, rows }) => (
              <div key={unit} className={tableBox}>
                <table className="w-full text-sm">
                  <caption className="p-3 text-left text-text-secondary">
                    {field.label}, {period}
                    {unit ? `, reporting unit ${unit}` : ""}
                    {order === "high" ? ", highest first" : ", lowest first"}
                  </caption>
                  <thead>
                    <tr className="border-b border-border-hairline text-text-secondary">
                      <th className={th}>Rank</th>
                      <th className={th}>Issuer</th>
                      <th className={`${th} text-right`}>{field.label}</th>
                      <th className={th}>Period</th>
                      <th className={th}>Basis and limitation</th>
                      <th className={th}>Sources</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(({ issuer, run, fact }, index) => (
                      <tr
                        key={issuer.key}
                        className="border-b border-border-hairline last:border-0"
                      >
                        <td className="p-3 tabular-nums">{index + 1}</td>
                        <th scope="row" className="p-3 text-left font-semibold wrap-anywhere">
                          {issuer.name}
                          <br />
                          <RunLine run={run} />
                        </th>
                        <td className="p-3 text-right tabular-nums">{figure(fact)}</td>
                        <td className="p-3">{fact.period ?? fact.row ?? "Not stated"}</td>
                        <td className="max-w-md p-3 wrap-anywhere">{fact.basis}</td>
                        <td className="p-3">
                          <TextLink href={evidenceLink(run, fact)}>View sources</TextLink>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
            {ranking.missing.length > 0 && (
              <div className={`${card} gap-2`}>
                <h3 className="font-semibold text-text-primary">
                  Not ranked: no figure for {period} in the newest run
                </h3>
                <ul className="grid gap-1 text-sm">
                  {ranking.missing.map(({ issuer, fact, stated }) => (
                    <li key={issuer.key}>
                      <span className="font-medium">{issuer.name}</span>
                      {": "}
                      {fact
                        ? fact.text
                        : stated.length > 0
                          ? `no figure could be read for this period; its run states ${stated.join(", ")}`
                          : "no figure could be read for this measure"}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}

function FindView({
  data,
  issuers,
  query,
  titles,
}: {
  data: Data;
  issuers: Issuer[];
  query: string;
  titles: ReadonlyMap<string, string>;
}) {
  const wanted = query.trim().toLowerCase();
  const fields = new Map(data.fields.map((item) => [item.id, item]));
  const hits = issuers.flatMap((issuer) => {
    const run = latestRun(issuer);
    if (!run) return [];
    return factsOf(data, run.key)
      .filter(
        (fact) =>
          fact.at === null &&
          fields.get(fact.field)?.kind === "text" &&
          (!wanted || `${fact.text} ${fact.impact ?? ""}`.toLowerCase().includes(wanted)),
      )
      .map((fact) => ({ issuer, run, fact }));
  });
  if (hits.length === 0)
    return (
      <p role="status" className={card}>
        No module passage of these issuers’ newest runs matches.
      </p>
    );
  return (
    <div className={tableBox}>
      <table className="w-full text-sm">
        <caption className="p-3 text-left text-text-secondary">
          {String(hits.length)} {hits.length === 1 ? "passage" : "passages"} from the newest runs
          {wanted ? ` containing “${query.trim()}”` : ""}
        </caption>
        <thead>
          <tr className="border-b border-border-hairline text-text-secondary">
            <th className={th}>Issuer</th>
            <th className={th}>Module</th>
            <th className={th}>What it says</th>
            <th className={th}>Creditor impact</th>
            <th className={th}>Confidence</th>
            <th className={th}>Sources</th>
          </tr>
        </thead>
        <tbody>
          {hits.map(({ issuer, run, fact }) => {
            const item = fields.get(fact.field);
            return (
              <tr
                key={`${fact.output}-${String(fact.line)}-${fact.field}`}
                className="border-b border-border-hairline align-top last:border-0"
              >
                <th scope="row" className="p-3 text-left font-semibold wrap-anywhere">
                  {issuer.name}
                </th>
                <td className="p-3">
                  {titles.get(item?.module ?? "") ?? moduleName(item?.module ?? "")}
                  <br />
                  <span className="text-text-secondary">{item?.label}</span>
                </td>
                <td className="max-w-xl p-3 wrap-anywhere">{fact.text}</td>
                <td className="max-w-xs p-3 wrap-anywhere">{fact.impact ?? ""}</td>
                <td className="p-3">{fact.confidence ?? ""}</td>
                <td className="p-3">
                  <TextLink href={evidenceLink(run, fact)}>View sources</TextLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function TrendView({
  data,
  issuers,
  field,
}: {
  data: Data;
  issuers: Issuer[];
  field: Field | undefined;
}) {
  const units = field ? fieldUnits(data, issuers, field.id) : [];
  const [picked, setPicked] = useState("");
  const unit = units.includes(picked) ? picked : (units[0] ?? "");
  if (!field || units.length === 0)
    return (
      <p role="status" className={card}>
        No newest run of these issuers states this figure, so there is no trend to draw.
      </p>
    );
  const { periods, series } = trend(data, issuers, field.id, unit);
  return (
    <div className="grid gap-4">
      {units.length > 1 && (
        <Choice name="Reporting unit" value={unit} onChange={setPicked}>
          {units.map((item) => (
            <option key={item} value={item}>
              {item || "No unit stated"}
            </option>
          ))}
        </Choice>
      )}
      <div className={card}>
        <TrendChart
          title={`${field.label} by period`}
          as="h3"
          note="One line per issuer, from its newest run, over the periods that run’s module states. Periods are matched as written, so issuers with different year ends sit at different points. Each figure is as its module wrote it; bases can differ between issuers."
          periods={periods}
          series={series.map((item) => ({
            name: item.name,
            values: item.points.map((fact) => fact?.at ?? null),
          }))}
          table={series.map((item) => ({
            name: item.name,
            cells: item.points.map((fact) => (fact ? figure(fact) : null)),
          }))}
          yTicks={axisTicks(
            series.flatMap((item) => item.points.flatMap((fact) => fact?.at ?? [])),
            unit,
          )}
        />
      </div>
    </div>
  );
}

function addressState(): { view: View; field: string; filters: Filters } {
  const query = new URLSearchParams(window.location.search);
  const view = VIEWS.find((item) => item.id === query.get("view"))?.id ?? "matrix";
  return {
    view,
    field: query.get("field") ?? "",
    filters: {
      ...NO_FILTERS,
      query: query.get("q") ?? "",
      sector: query.get("sector") ?? "all",
      pathway: query.get("pathway") ?? "all",
    },
  };
}

function Dashboard({ data }: { data: Data }) {
  const [start] = useState(addressState);
  const [view, setView] = useState<View>(start.view);
  const [filters, setFilters] = useState<Filters>(start.filters);
  const [fieldId, setFieldId] = useState(start.field);
  const [periodPick, setPeriodPick] = useState("");
  const [order, setOrder] = useState<"high" | "low">("high");
  const [by, setBy] = useState("none");
  const [chosen, setChosen] = useState<ReadonlySet<string>>(new Set());
  const [onlyChosen, setOnlyChosen] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [groups, setGroups] = useState<SavedGroup[]>(readGroups);
  const [groupName, setGroupName] = useState("");

  const titles = useMemo(
    () => new Map(data.columns.map((column) => [column.code, named(column)])),
    [data],
  );
  const numbers = data.fields.filter((item) => item.kind === "number" && item.series !== "row");
  const choices = data.fields.filter((item) => item.kind === "choice");
  const field = numbers.find((item) => item.id === fieldId) ?? numbers[0];
  const sectors = [...new Set(data.issuers.flatMap((issuer) => issuer.sector ?? []))].sort();
  const pathways = [
    ...new Set(data.issuers.flatMap((issuer) => latestRun(issuer)?.pathwayTitle ?? [])),
  ].sort();
  const words =
    filters.choice === "all"
      ? []
      : [
          ...new Set(
            data.facts.filter((fact) => fact.field === filters.choice).map((fact) => fact.text),
          ),
        ].sort();

  useEffect(() => {
    const address = new URL(window.location.href);
    const values = {
      view: view === "matrix" ? "" : view,
      field: field && view !== "matrix" && view !== "find" ? field.id : "",
      q: filters.query,
      sector: filters.sector === "all" ? "" : filters.sector,
      pathway: filters.pathway === "all" ? "" : filters.pathway,
    };
    for (const [key, value] of Object.entries(values)) {
      if (value) address.searchParams.set(key, value);
      else address.searchParams.delete(key);
    }
    window.history.replaceState(window.history.state, "", address);
  }, [view, field, filters]);

  const set = (change: Partial<Filters>) => {
    setFilters((previous) => ({ ...previous, ...change }));
  };
  const stated = field ? periodsOf(data, data.issuers, field.id) : [];
  const period =
    stated.find((item) => item === periodPick) ??
    (field ? commonPeriod(data, data.issuers, field.id) : null);
  const matched = matchIssuers(data, filters, field?.id ?? null, period);
  const shown = onlyChosen ? matched.filter((issuer) => chosen.has(issuer.key)) : matched;
  const toggle = (key: string) => {
    setChosen((previous) => {
      const next = new Set(previous);
      if (!next.delete(key)) next.add(key);
      return next;
    });
  };
  const saveGroup = () => {
    const name = groupName.trim();
    if (!name || chosen.size === 0) return;
    const next = [...groups.filter((group) => group.name !== name), { name, issuers: [...chosen] }];
    setGroups(next);
    writeGroups(next);
    setGroupName("");
  };
  const detail = data.issuers.find((issuer) => issuer.key === open);

  return (
    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-5">
      <p className="reading-copy max-w-3xl text-body text-text-secondary">
        What each issuer’s published runs hold, module by module. Every figure and sentence is as
        its module wrote it; this page only selects, sorts and groups them. Portfolio views read
        each issuer’s newest run.
      </p>
      <ButtonGroup
        aria-label="View"
        size="sm"
        disallowEmptySelection
        selectedKeys={[view]}
        onSelectionChange={(keys) => {
          const [key] = keys;
          const next = VIEWS.find((item) => item.id === key);
          if (next) setView(next.id);
        }}
      >
        {VIEWS.map((item) => (
          <ButtonGroupItem key={item.id} id={item.id}>
            {item.name}
          </ButtonGroupItem>
        ))}
      </ButtonGroup>

      <section aria-label="Filters" className="flex flex-wrap items-end gap-3">
        <label className={`${label} w-full max-w-md sm:min-w-40 sm:flex-1`}>
          Search issuers and module text
          <input
            type="search"
            value={filters.query}
            onChange={(event) => {
              set({ query: event.currentTarget.value });
            }}
            className={control}
          />
        </label>
        <Choice
          name="Sector"
          value={filters.sector}
          onChange={(sector) => {
            set({ sector });
          }}
        >
          <option value="all">All</option>
          {sectors.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </Choice>
        <Choice
          name="Pathway"
          value={filters.pathway}
          onChange={(pathway) => {
            set({ pathway });
          }}
        >
          <option value="all">All</option>
          {pathways.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </Choice>
        <Choice
          name="Module"
          value={filters.module}
          onChange={(module) => {
            set({ module });
          }}
        >
          <option value="all">Any</option>
          {data.columns.map((column) => (
            <option key={column.code} value={column.code}>
              {named(column)}
            </option>
          ))}
        </Choice>
        {filters.module !== "all" && (
          <Choice
            name="Module state"
            value={filters.state}
            onChange={(state) => {
              set({ state: state as Filters["state"] });
            }}
          >
            <option value="all">Any</option>
            {Object.entries(STATE_WORDS).map(([state, word]) => (
              <option key={state} value={state}>
                {word}
              </option>
            ))}
          </Choice>
        )}
        {choices.length > 0 && (
          <Choice
            name="Module confidence"
            value={filters.choice}
            onChange={(choice) => {
              set({ choice, word: "all" });
            }}
          >
            <option value="all">Any</option>
            <FieldOptions fields={choices} titles={titles} />
          </Choice>
        )}
        {filters.choice !== "all" && (
          <Choice
            name="Is"
            value={filters.word}
            onChange={(word) => {
              set({ word });
            }}
          >
            <option value="all">Any</option>
            {words.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </Choice>
        )}
      </section>

      {numbers.length > 0 && (
        <section aria-label="Figure" className="flex flex-wrap items-end gap-3">
          <Choice name="Figure" value={field?.id ?? ""} onChange={setFieldId}>
            <FieldOptions fields={numbers} titles={titles} />
          </Choice>
          {stated.length > 0 && view !== "trend" && (
            <Choice name="Period" value={period ?? ""} onChange={setPeriodPick}>
              {stated.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Choice>
          )}
          <label className={`${label} w-28`}>
            At least
            <input
              inputMode="decimal"
              value={filters.min}
              onChange={(event) => {
                set({ min: event.currentTarget.value });
              }}
              className={control}
            />
          </label>
          <label className={`${label} w-28`}>
            At most
            <input
              inputMode="decimal"
              value={filters.max}
              onChange={(event) => {
                set({ max: event.currentTarget.value });
              }}
              className={control}
            />
          </label>
          {view === "rank" && (
            <>
              <Choice
                name="Order"
                value={order}
                onChange={(next) => {
                  setOrder(next === "low" ? "low" : "high");
                }}
              >
                <option value="high">Highest first</option>
                <option value="low">Lowest first</option>
              </Choice>
              <Choice name="Group by" value={by} onChange={setBy}>
                <option value="none">No grouping</option>
                <option value="sector">Sector</option>
                <option value="pathway">Pathway</option>
                <FieldOptions fields={choices} titles={titles} />
              </Choice>
            </>
          )}
        </section>
      )}

      <section aria-label="Groups" className="flex flex-wrap items-end gap-3">
        <label className="flex items-center gap-2 py-2 text-sm font-medium">
          <input
            type="checkbox"
            checked={onlyChosen}
            onChange={(event) => {
              setOnlyChosen(event.currentTarget.checked);
            }}
          />
          Only the {String(chosen.size)} issuers ticked to compare
        </label>
        {groups.length > 0 && (
          <Choice
            name="Saved group"
            value=""
            onChange={(name) => {
              const group = groups.find((item) => item.name === name);
              if (!group) return;
              setChosen(new Set(group.issuers));
              setOnlyChosen(true);
            }}
          >
            <option value="">Choose a group</option>
            {groups.map((group) => (
              <option key={group.name}>{group.name}</option>
            ))}
          </Choice>
        )}
        <label className={`${label} w-56`}>
          Save ticked issuers as
          <input
            value={groupName}
            onChange={(event) => {
              setGroupName(event.currentTarget.value);
            }}
            className={control}
          />
        </label>
        <Button
          color="secondary"
          isDisabled={!groupName.trim() || chosen.size === 0}
          onPress={saveGroup}
        >
          Save group
        </Button>
        <Button
          color="tertiary"
          onPress={() => {
            setFilters(NO_FILTERS);
            setOnlyChosen(false);
          }}
        >
          Clear filters
        </Button>
      </section>

      <p role="status" className="text-sm text-text-secondary">
        {String(shown.length)} of {String(data.issuers.length)} issuers shown
      </p>

      {shown.length === 0 ? (
        <p className={card}>No issuers match these filters.</p>
      ) : view === "matrix" ? (
        <>
          <Matrix
            data={data}
            issuers={shown}
            chosen={chosen}
            toggle={toggle}
            open={open}
            setOpen={setOpen}
          />
          {detail && <IssuerDetail data={data} issuer={detail} />}
        </>
      ) : view === "rank" ? (
        <RankView data={data} issuers={shown} field={field} period={period} order={order} by={by} />
      ) : view === "find" ? (
        <FindView data={data} issuers={shown} query={filters.query} titles={titles} />
      ) : (
        <TrendView data={data} issuers={shown} field={field} />
      )}
    </div>
  );
}

export function Coverage() {
  const { value, error, retry } = useResource(getCoverage);
  const empty = value === null || value?.issuers.length === 0;
  return (
    <>
      <PageHeader title="Coverage" />
      <section className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-4">
        {error && (
          <Alert
            tone="error"
            title="Coverage could not be loaded"
            action={
              <Button size="sm" color="secondary" onPress={retry}>
                Try again
              </Button>
            }
          >
            {error}
          </Alert>
        )}
        {value === undefined && !error && (
          <div role="status" aria-label="Loading coverage" className={card}>
            <Skeleton lines={6} />
          </div>
        )}
        {empty && (
          <EmptyState>
            <EmptyState.Header>
              <EmptyState.FeaturedIcon icon={BarChartSquare02} />
            </EmptyState.Header>
            <EmptyState.Content>
              <EmptyState.Title>No published runs yet</EmptyState.Title>
              <EmptyState.Description>
                Coverage fills in as runs are published to the Library.
              </EmptyState.Description>
            </EmptyState.Content>
          </EmptyState>
        )}
        {value?.preview && <Callout title="Test preview">{value.preview.reason}</Callout>}
        {value && !empty && <Dashboard data={value} />}
      </section>
    </>
  );
}
