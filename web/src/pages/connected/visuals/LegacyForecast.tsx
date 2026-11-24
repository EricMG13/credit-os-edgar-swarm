import { type ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { ForecastTable } from "./ForecastTable";
import { PathChart } from "@/components/chart/PathChart";
import { ChartTable } from "@/components/chart/ChartTable";
import { TrendChart } from "@/components/chart/TrendChart";
import { TRACE_HOST } from "@/pages/library/parts/TraceControl";
import { containsReference, readerText, unitLabel } from "../publishedReport";
import { amount, items, record, stringsIn, ticks, word } from "./visualData";
import type { ForecastSource } from "../report/ForecastRecord";
import {
  analyzeScenarioPeriods,
  isDatedForecastPeriod,
  scenarioGroupLabels,
  type ScenarioPeriodObservation,
} from "./scenarioPeriods";

interface GridColumn {
  label: string;
  group: string;
  start: string;
  end: string;
}

interface GridRow {
  kind?: string;
  label: string;
  band: string;
  total: boolean;
  cells: Record<string, unknown>[];
}

export interface Grid {
  columns: GridColumn[];
  rows: GridRow[];
}

export function gridOf(raw: unknown): Grid | null {
  const data = record(raw);
  const columns = items(data.columns).map((rawColumn) => {
    const column = record(rawColumn);
    return {
      label: word(column.label),
      group: word(column.group),
      start: word(column.start),
      end: word(column.end),
    };
  });
  if (!columns.length || columns.some((column) => !column.label || !column.group)) return null;
  const rows = items(data.rows).map((rawRow) => {
    const row = record(rawRow);
    return {
      label: word(row.label),
      band: word(row.band),
      kind: word(row.kind),
      total: row.total === true,
      cells: items(row.cells).map(record),
    };
  });
  if (
    !rows.length ||
    rows.some(
      (row) =>
        !row.label ||
        row.cells.length !== columns.length ||
        row.cells.some((cell) => !word(cell.display)),
    )
  )
    return null;
  return { columns, rows };
}

function SelectedForecastTable({
  grid: inputGrid,
  title,
  selectedCase,
  downsideNote,
  limits,
  source,
  evidenceOnlyQualifications,
}: {
  grid: Grid;
  title: string;
  selectedCase?: string;
  downsideNote?: string;
  limits: string[];
  source?: ForecastSource;
  evidenceOnlyQualifications?: boolean;
}) {
  const selectedIndexes = inputGrid.columns.flatMap((column, index) => {
    const caseLabel = forecastCaseLabel(column.group, downsideNote);
    const isScenario = Object.hasOwn(caseLabels, column.group) || caseLabel === selectedCase;
    return !isScenario || selectedCase === undefined || caseLabel === selectedCase ? [index] : [];
  });
  const grid =
    selectedCase === undefined || selectedIndexes.length === 0
      ? inputGrid
      : {
          columns: selectedIndexes
            .map((index) => inputGrid.columns[index])
            .filter((column) => column !== undefined),
          rows: inputGrid.rows.map((row) => ({
            ...row,
            cells: selectedIndexes
              .map((index) => row.cells[index])
              .filter((cell) => cell !== undefined),
          })),
        };
  const displayed = {
    ...grid,
    columns: grid.columns.map((column) => ({
      ...column,
      group: forecastCaseLabel(column.group, downsideNote),
    })),
  };
  const groups = [...new Set(displayed.columns.map((column) => column.group))];
  return (
    <ForecastTable
      grid={displayed}
      title={title}
      limits={limits}
      source={
        source &&
        ((name, selection) =>
          source(name, {
            case: groups.length === 1 ? groups[0] : "",
            groups,
            ...selection,
          }))
      }
      evidenceOnlyQualifications={evidenceOnlyQualifications}
    />
  );
}

const FORECAST_LINES = ["Revenue", "Adj EBITDA", "Closing cash", "Closing debt"];

const axisNumber = new Intl.NumberFormat("en-US", { maximumFractionDigits: 6 });
const smallAxisNumber = new Intl.NumberFormat("en-US", {
  notation: "scientific",
  maximumFractionDigits: 6,
});

/** Plain decimals while the step needs at most 6 decimals; otherwise scientific for all but zero. */
function forecastTicks(values: (number | null)[], zero = false) {
  const plainTicks = ticks(values, zero, (value) => axisNumber.format(value));
  const exact = plainTicks.every(({ value }) => Number(value.toFixed(6)) === value);
  const formatted = exact
    ? plainTicks
    : ticks(values, zero, (value) => (value === 0 ? "0" : smallAxisNumber.format(value)));
  // Close but distinct values must not acquire identical labels through rounding.
  return new Set(formatted.map(({ label }) => label)).size === formatted.length
    ? formatted
    : ticks(values, zero);
}

const caseLabels: Record<string, string> = {
  "Base case": "Base case",
  "Downside case": "Downside case",
  Upside: "Upside case",
  "Downside (CP-2G drivers)": "Downside drivers",
};

export function forecastCaseLabel(group: string, downsideNote = "") {
  if (
    group === "Downside case" &&
    downsideNote.startsWith("Downside case is the stress case: a shock applied")
  )
    return "Downside shock";
  return Object.hasOwn(caseLabels, group) ? (caseLabels[group] ?? group) : group;
}

export function forecastCaseNames(groups: string[], downsideNote = "") {
  return scenarioGroupLabels(groups, (group) => forecastCaseLabel(group, downsideNote));
}

function displayForecastCell(cell: Record<string, unknown> | undefined) {
  if (!cell) return null;
  const display = word(cell.display);
  const reason = word(cell.reason);
  return reason ? `${display} ${reason}` : display || null;
}

function singleForecastRow(grid: Grid, label: string) {
  const matches = grid.rows.filter((entry) => entry.label === label);
  return matches.length === 1 ? matches[0] : undefined;
}

export function ForecastTrends({
  grid,
  units,
  source,
  selectedCase,
  selectedRawGroup,
  downsideNote,
}: {
  grid: Grid;
  units: string;
  source?: ForecastSource;
  selectedCase?: string;
  selectedRawGroup?: string;
  downsideNote?: string;
}) {
  const note = unitLabel(units) || undefined;
  const forecastColumns = grid.columns.flatMap((column, index) =>
    isDatedForecastPeriod(column.label)
      ? [
          {
            ...column,
            index,
            period: column.label,
            group: column.group,
          },
        ]
      : [],
  );
  const analysis = analyzeScenarioPeriods(forecastColumns);
  const rawGroups = [...new Set(forecastColumns.map((column) => column.group))];
  const labels = forecastCaseNames(rawGroups, downsideNote);
  const groups = rawGroups.filter((group) =>
    selectedRawGroup !== undefined
      ? group === selectedRawGroup
      : selectedCase === undefined || labels.get(group) === selectedCase,
  );
  const periods =
    selectedCase === undefined && rawGroups.length > 1
      ? analysis.periods.map(({ period }) => period)
      : [
          ...new Set(
            analysis.uniqueObservations
              .filter(({ group }) => groups.includes(group))
              .map(({ period }) => period),
          ),
        ].sort();
  if (periods.length < 2 || groups.length === 0 || groups.length > 6) return null;
  return (
    <div className="grid gap-8">
      {selectedCase === undefined && analysis.basisGap && (
        <p role="status" className="text-small text-text-secondary">
          Some line-item periods are omitted because their scenarios do not share unique, compatible
          published dates.
        </p>
      )}
      {FORECAST_LINES.map((label) => {
        const row = singleForecastRow(grid, label);
        if (!row) return null;
        const perCase = groups.map((group) => {
          const cells = periods.map((period) => {
            const matches = analysis.uniqueObservations.filter(
              (column) => column.period === period && column.group === group,
            );
            const index = matches.length === 1 ? matches[0]?.index : undefined;
            return index === undefined ? undefined : row.cells[index];
          });
          return { name: labels.get(group) ?? forecastCaseLabel(group, downsideNote), cells };
        });
        const series = perCase.map(({ name, cells }) => ({
          name,
          values: cells.map((cell) => (cell?.status === "value" ? amount(word(cell.exact)) : null)),
        }));
        const values = series.flatMap((entry) => entry.values);
        if (values.filter((value) => value !== null).length < 2) return null;
        return (
          <TrendChart
            title={label}
            actions={source?.(label, {
              case: selectedCase,
              rawGroups: groups,
              row: label,
              periods,
            })}
            key={label}
            periods={periods}
            series={series}
            yTicks={forecastTicks(values)}
            note={note}
            table={perCase.map(({ name, cells }) => ({
              name,
              cells: cells.map(displayForecastCell),
            }))}
          />
        );
      })}
    </div>
  );
}

const CASH_PROXY = "Cash proxy (not issuer free cash flow)";
const twoPlaces = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

interface CashProxyObservation extends ScenarioPeriodObservation {
  cell?: Record<string, unknown>;
  placeholder?: boolean;
}

function cashProxyObservations(grid: Grid, other: Grid | null) {
  const observations: CashProxyObservation[] = [];
  for (const source of [grid, other]) {
    if (!source) continue;
    const rows = source.rows.filter((row) => row.label === CASH_PROXY);
    const row = rows.length === 1 ? rows[0] : undefined;
    if (row)
      source.columns.forEach((column, index) => {
        const cell = row.cells[index];
        if (isDatedForecastPeriod(column.label)) {
          observations.push({
            period: column.label,
            group: column.group,
            start: column.start,
            end: column.end,
            cell,
          });
          return;
        }
        if (
          column.group === "Downside case" &&
          column.label === "Downside" &&
          cell?.status !== "value"
        )
          observations.push({
            period: column.label,
            group: column.group,
            start: column.start,
            end: column.end,
            cell,
            placeholder: true,
          });
      });
  }
  return observations;
}

function cashProxyCaseRows(observations: CashProxyObservation[], downsideNote: string) {
  const cases = new Map<string, CashProxyObservation[]>();
  for (const observation of observations) {
    const group = cases.get(observation.group) ?? [];
    group.push(observation);
    cases.set(observation.group, group);
  }
  const names = forecastCaseNames([...cases.keys()], downsideNote);
  return [...cases]
    .sort(([a], [b]) => Object.keys(caseLabels).indexOf(a) - Object.keys(caseLabels).indexOf(b))
    .map(([group, entries]) => {
      const name = names.get(group) ?? forecastCaseLabel(group, downsideNote);
      const placeholder = entries.find(({ placeholder: isPlaceholder }) => isPlaceholder);
      const dated = entries.filter(({ placeholder: isPlaceholder }) => !isPlaceholder);
      const latestPeriod = dated
        .map(({ period }) => period)
        .sort()
        .at(-1);
      const latest = latestPeriod ? dated.filter(({ period }) => period === latestPeriod) : [];
      const duplicate = latest.length > 1;
      const selected = placeholder && dated.length === 0 ? placeholder : latest[0];
      return {
        group,
        name,
        period: selected?.period,
        start: duplicate ? undefined : selected?.start,
        end: duplicate ? undefined : selected?.end,
        value:
          !duplicate && selected?.cell?.status === "value"
            ? amount(word(selected.cell.exact))
            : null,
        reason: duplicate
          ? `More than one published observation uses ${latestPeriod ?? "the same period"}; no single value is shown.`
          : word(selected?.cell?.reason) || undefined,
        duplicate,
      };
    });
}

export function cashProxyCases(grid: Grid, other: Grid | null, downsideNote = "") {
  const observations = cashProxyObservations(grid, other);
  const actual = observations.filter(({ placeholder }) => !placeholder);
  const analysis = analyzeScenarioPeriods(actual);
  const groups = [...new Set(actual.map(({ group }) => group))].sort(
    (a, b) => Object.keys(caseLabels).indexOf(a) - Object.keys(caseLabels).indexOf(b),
  );
  const singleGroup = groups.length === 1 ? groups[0] : undefined;
  const periods = singleGroup
    ? [
        ...new Set(
          analysis.uniqueObservations
            .filter(({ group }) => group === singleGroup)
            .map(({ period }) => period),
        ),
      ].sort()
    : analysis.periods.map(({ period }) => period);
  const names = forecastCaseNames(groups, downsideNote);
  const validGroups = groups.length <= 6;
  const series = validGroups
    ? groups.map((group) => cashProxySeries(group, names.get(group) ?? group, periods, actual))
    : [];
  const scenarios = cashProxyCaseRows(observations, downsideNote);
  return {
    periods,
    series,
    rows: series.map(({ name, cells }) => ({ label: name, cells })),
    observations: analysis.uniqueObservations,
    scenarios,
    basisGap: analysis.basisGap || !validGroups,
    comparison: !singleGroup,
  };
}

function cashProxySeries(
  group: string,
  name: string,
  periods: string[],
  observations: CashProxyObservation[],
) {
  const matching = periods.map((period) => {
    const cells = observations.filter((cell) => cell.group === group && cell.period === period);
    return cells.length === 1 ? cells[0]?.cell : undefined;
  });
  const values = matching.map((cell) =>
    cell?.status === "value" ? amount(word(cell.exact)) : null,
  );
  return {
    group,
    name,
    values,
    labels: values.map((value, index) =>
      index === values.length - 1 && value !== null ? twoPlaces.format(value) : null,
    ),
    cells: matching.map((cell, index) => {
      const value = values[index];
      return typeof value === "number" ? twoPlaces.format(value) : word(cell?.reason) || null;
    }),
    reasons: matching.map((cell) => word(cell?.reason)),
  };
}

export function forecastCaseOptions(model: unknown) {
  const cashflow = record(record(model).cashflow);
  const grid = gridOf(cashflow);
  if (!grid) return [];
  const { scenarios, basisGap } = cashProxyCases(
    grid,
    gridOf(cashflow.other),
    stringsIn(cashflow.notes).find((note) => note.startsWith("Downside case is")),
  );
  return scenarios.map(({ group, name, period, start, end, value, reason }) => ({
    name,
    rawGroup: group,
    period,
    value,
    units: word(cashflow.units) || "Units not recorded",
    description: caseDescription(group, stringsIn(cashflow.notes)),
    ...(start && end ? { periodStart: start, periodEnd: end } : {}),
    ...(reason ? { reason } : {}),
    ...(basisGap ? { comparisonBasisGap: true } : {}),
  }));
}

function caseDescription(name: string, notes: string[]) {
  const prefix = name === "Downside shock" ? "Downside case is" : `${name} is`;
  const found = notes.find((note) => note.startsWith(prefix) && !containsReference(note));
  return found && readerText(found);
}

function scopePassages(passages: string[]) {
  return [...new Set(passages)].flatMap((recorded) =>
    [...new Set(recorded.split(/(?<=[.!?])\s+(?=[A-Z])/u))]
      .filter((sentence) => !containsReference(sentence) && !/\bCP-[A-Z0-9]+\b/u.test(sentence))
      .map((text) => ({ text, recorded })),
  );
}

export function ForecastScope({
  model,
  source,
  children,
}: {
  model: unknown;
  source?: ForecastSource;
  children?: (shownQualifications: string[]) => ReactNode;
}) {
  const cashflow = record(record(model).cashflow);
  const base = scopePassages(
    stringsIn(cashflow.notes).filter((note) => note.startsWith("Base case is")),
  );
  const limits = scopePassages(
    stringsIn(cashflow.limits).filter((limit) =>
      /unreviewed|not analytical review|base period|base interest|not comparable|not modelled|standalone|perimeter|machine input.*zero/i.test(
        limit,
      ),
    ),
  );
  function qualification({ text, recorded }: ReturnType<typeof scopePassages>[number]) {
    return (
      <div
        key={JSON.stringify([recorded, text])}
        className={`${TRACE_HOST} flex max-w-prose items-start gap-2`}
      >
        <p className="text-small text-text-secondary">{text}</p>
        {source?.("Model scope qualification", { recordedQualification: recorded })}
      </div>
    );
  }
  return (
    <>
      {base.map(qualification)}
      {children?.(base.map(({ text }) => text))}
      <section className="min-w-0 wrap-anywhere" aria-label="Model scope and basis">
        <details className="rounded-ds-md border border-border-hairline bg-surface-subtle px-4 py-3">
          <summary className="cursor-pointer font-semibold">Model scope and basis</summary>
          <div className="mt-3 grid gap-3">
            {limits.map(qualification)}
            {!limits.length && !base.length && (
              <p>No qualifications are available in this summary.</p>
            )}
            <Button href="#evidence/record" color="link-gray" size="sm" className="w-fit">
              Full model notes and limitations
            </Button>
          </div>
        </details>
      </section>
    </>
  );
}

export function CashProxy({
  model,
  note,
  source,
  sourceFor,
  selectedCase,
  unified = false,
}: {
  model: unknown;
  note?: ReactNode;
  source?: ReactNode;
  sourceFor?: ForecastSource;
  selectedCase?: string;
  unified?: boolean;
}) {
  const sourceAction =
    sourceFor?.("Cash proxy by scenario", { row: CASH_PROXY, case: "" }) ?? source;
  const state = cashProxyState(record(model).cashflow);
  if (state.kind === "unavailable")
    return (
      <CashProxyUnavailable
        recorded={state.recorded}
        source={sourceAction}
        note={note}
        unified={unified}
        detail={state.detail}
      />
    );
  return cashProxyOutput(state, { note, source, sourceFor, sourceAction, selectedCase, unified });
}

function cashProxyState(value: unknown) {
  if (value === null || value === undefined)
    return {
      kind: "unavailable" as const,
      recorded: null,
      detail: "The cash flow calculation record is unavailable.",
    };
  const raw = record(value);
  const hasCashProxy = items(raw.rows).some((row) => word(record(row).label) === CASH_PROXY);
  const grid = gridOf(raw);
  if (!grid)
    return {
      kind: "unavailable" as const,
      recorded: hasCashProxy ? true : null,
      detail: hasCashProxy
        ? "The calculation grid is unreadable."
        : "The calculation grid cannot establish whether a cash proxy was recorded.",
    };
  return { kind: "available" as const, raw, grid, hasCashProxy };
}

function cashProxyOutput(
  state: Extract<ReturnType<typeof cashProxyState>, { kind: "available" }>,
  options: {
    note?: ReactNode;
    source?: ReactNode;
    sourceFor?: ForecastSource;
    sourceAction: ReactNode;
    selectedCase?: string;
    unified: boolean;
  },
) {
  const { note, source, sourceFor, sourceAction, selectedCase, unified } = options;
  const { raw, grid, hasCashProxy } = state;
  const { periods, series, basisGap } = cashProxyCases(
    grid,
    gridOf(raw.other),
    stringsIn(raw.notes).find((entry) => entry.startsWith("Downside case is")),
  );
  const failure = cashProxyDisplayFailure(
    periods.length,
    series.length,
    hasCashProxy,
    basisGap,
    unified,
  );
  if (failure === "hidden") return null;
  if (failure)
    return (
      <CashProxyUnavailable
        recorded
        source={sourceAction}
        note={note}
        unified={false}
        detail={failure}
      />
    );
  const head = ["Case", ...periods];
  const rows = series.map(({ name, cells }) => ({
    label: name,
    cells,
    current: name === selectedCase,
    end: sourceFor?.(`${name} cash proxy`, { case: name, row: CASH_PROXY, periods }) ?? source,
  }));
  const endHeading = source || sourceFor ? "Source" : undefined;
  const comparison = (
    <div className="grid min-w-0 gap-2">
      <p className="text-small text-text-secondary">
        Cash proxy values ({word(raw.units) || "units not recorded"}).
      </p>
      <ChartTable caption="Scenario comparison" head={head} rows={rows} endHeading={endHeading} />
    </div>
  );
  const plot = cashProxyPlot({
    periods,
    series,
    selectedCase,
    source,
    sourceFor,
    units: word(raw.units),
    table: { head, rows, endHeading },
    unified,
  });
  return unified ? (
    <UnifiedCashProxy
      plot={plot}
      comparison={comparison}
      hasSeries={periods.length > 0 && series.length > 0}
      hasCashProxy={hasCashProxy}
      source={sourceAction}
      detail={
        basisGap
          ? "The published cases do not share a unique, compatible period basis. Individual case figures retain their own dates."
          : undefined
      }
      note={note}
    />
  ) : (
    <StandaloneCashProxy
      plot={plot}
      comparison={comparison}
      note={note}
      detail={
        basisGap
          ? "Some published case periods are omitted because their date bases are incompatible or ambiguous."
          : undefined
      }
    />
  );
}

function cashProxyDisplayFailure(
  periodCount: number,
  seriesCount: number,
  hasCashProxy: boolean,
  basisGap: boolean,
  unified: boolean,
) {
  if (unified || (periodCount >= 2 && seriesCount > 0)) return null;
  if (seriesCount === 0 && hasCashProxy)
    return "The recorded cases do not form a readable scenario comparison.";
  if (basisGap && hasCashProxy)
    return "The published cases do not share a unique, compatible period basis.";
  return "hidden" as const;
}

function cashProxyPlot({
  periods,
  series,
  selectedCase,
  source,
  sourceFor,
  units,
  table,
  unified,
}: {
  periods: string[];
  series: ReturnType<typeof cashProxyCases>["series"];
  selectedCase?: string;
  source?: ReactNode;
  sourceFor?: ForecastSource;
  units: string;
  table: {
    head: string[];
    rows: { label: string; cells: (string | null)[]; current: boolean; end?: ReactNode }[];
    endHeading?: string;
  };
  unified: boolean;
}) {
  if (periods.length < 2 || series.length === 0) return null;
  const visibleRows = unified
    ? table.rows
    : series.map(({ name, cells }) => ({ label: name, cells }));
  return (
    <PathChart
      title="Cash proxy by scenario"
      actions={
        sourceFor?.("Cash proxy by scenario", { row: CASH_PROXY, case: "", periods }) ?? source
      }
      subtitle={units}
      periods={periods}
      series={series}
      emphasis={series.some((item) => item.name === selectedCase) ? selectedCase : undefined}
      yTicks={forecastTicks(
        series.flatMap((item) => item.values),
        true,
      )}
      table={unified ? table : { head: table.head, rows: visibleRows }}
      tableCaption={unified ? "Scenario comparison" : undefined}
    />
  );
}

function CashProxyPrecision() {
  return (
    <p className="text-small text-text-secondary">
      Cash proxy figures are rounded to two decimal places. The statement keeps the recorded
      display.
    </p>
  );
}

function UnifiedCashProxy({
  plot,
  comparison,
  hasSeries,
  hasCashProxy,
  source,
  detail,
  note,
}: {
  plot: ReactNode;
  comparison: ReactNode;
  hasSeries: boolean;
  hasCashProxy: boolean;
  source?: ReactNode;
  detail?: string;
  note?: ReactNode;
}) {
  return (
    <div className="grid min-w-0 content-start gap-4">
      {plot ??
        (hasSeries ? (
          comparison
        ) : (
          <CashProxyUnavailable recorded={hasCashProxy} source={source} detail={detail} />
        ))}
      {detail && (
        <p role="status" className="text-small text-text-secondary">
          {detail}
        </p>
      )}
      {hasSeries && <CashProxyPrecision />}
      {note}
    </div>
  );
}

function CashProxyUnavailable({
  recorded,
  source,
  note,
  unified = true,
  detail,
}: {
  recorded: boolean | null;
  source?: ReactNode;
  note?: ReactNode;
  unified?: boolean;
  detail?: string;
}) {
  const message =
    recorded === true
      ? `A cash proxy is recorded, but its scenario comparison cannot be displayed. ${detail ?? "No comparable scenario periods were available."}`
      : recorded === false
        ? "No scenario cash proxy was recorded."
        : `The presence of a scenario cash proxy is unknown. ${detail ?? "The cash flow data is unavailable."}`;
  return (
    <div className={unified ? "grid min-w-0 content-start gap-4" : "grid min-w-0 gap-4"}>
      <p role="note" className="text-text-secondary">
        {message}
      </p>
      {source}
      {note}
    </div>
  );
}

function StandaloneCashProxy({
  plot,
  comparison,
  note,
  detail,
}: {
  plot: ReactNode;
  comparison: ReactNode;
  note?: ReactNode;
  detail?: string;
}) {
  return (
    <div className="grid min-w-0 gap-4 xl:grid-cols-[1.65fr_1fr]">
      <div className="min-w-0 rounded-xl border border-border-hairline bg-surface-card p-5">
        {plot}
      </div>
      <div className="grid min-w-0 content-start gap-4">
        <section className="grid min-w-0 gap-3 rounded-xl border border-border-hairline bg-surface-card p-5">
          <h3 className="font-display text-h4">Scenario comparison</h3>
          {comparison}
        </section>
        {detail && (
          <p role="status" className="text-small text-text-secondary">
            {detail}
          </p>
        )}
        <CashProxyPrecision />
        {note}
      </div>
    </div>
  );
}

export function LegacyForecast({
  model,
  summary,
  source,
  selectedCase,
  evidenceOnlyQualifications = false,
}: {
  model?: unknown;
  summary?: ReactNode;
  source?: ForecastSource;
  selectedCase?: string;
  evidenceOnlyQualifications?: boolean;
}) {
  const published = record(model);
  const cashflow = record(published.cashflow);
  const grid = gridOf(cashflow);
  const other = gridOf(cashflow.other);
  const notes = stringsIn(cashflow.notes);
  const limits = stringsIn(cashflow.limits);
  const units = word(cashflow.units);
  if (model === null || model === undefined) return null;
  return (
    <section className="grid min-w-0 gap-4 wrap-anywhere">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-display text-h3">Cash flow model</h3>
        {source?.("Cash flow model")}
      </div>
      {grid === null ? (
        <p>This model has no readable calculation record.</p>
      ) : (
        <>
          <p className="text-text-secondary">{unitLabel(units) || "Units not recorded"}</p>
          {summary}
          <ForecastTrends
            grid={grid}
            units={units}
            source={source}
            selectedCase={selectedCase}
            downsideNote={notes.find((note) => note.startsWith("Downside case is"))}
          />
          <SelectedForecastTable
            limits={limits}
            evidenceOnlyQualifications={evidenceOnlyQualifications}
            source={source}
            grid={grid}
            title="Cash flow model"
            selectedCase={selectedCase}
            downsideNote={notes.find((note) => note.startsWith("Downside case is"))}
          />
          {other && (
            <SelectedForecastTable
              limits={limits}
              evidenceOnlyQualifications={evidenceOnlyQualifications}
              source={source}
              grid={other}
              title="Other forecast cases"
              selectedCase={selectedCase}
              downsideNote={notes.find((note) => note.startsWith("Downside case is"))}
            />
          )}
          {!evidenceOnlyQualifications && notes.length > 0 && (
            <ul className="list-disc pl-5">
              {notes.map((note, index) => (
                <li key={index}>{readerText(note)}</li>
              ))}
            </ul>
          )}
          {!evidenceOnlyQualifications && limits.length > 0 && (
            <section className="grid gap-2">
              <h4 className="font-display text-h4">Model limitations</h4>
              <ul className="list-disc pl-5">
                {limits.map((limit, index) => (
                  <li key={index}>{readerText(limit)}</li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
      {evidenceOnlyQualifications && (
        <a className="text-secondary underline" href="#evidence/record">
          Model notes and limitations
        </a>
      )}
    </section>
  );
}
