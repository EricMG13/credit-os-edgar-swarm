import { useState } from "react";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { field } from "../layout";
import { unitLabel } from "../publishedReport";
import type { ForecastSource } from "../report/ForecastRecord";
import { forecastCaseLabel, forecastCaseNames, gridOf, type Grid } from "./LegacyForecast";
import { ForecastTable } from "./ForecastTable";
import { record, stringsIn, word } from "./visualData";
import { analyzeScenarioPeriods } from "./scenarioPeriods";

const families = {
  accounts: "Accounts",
  ratios: "Ratios",
  growth: "Growth rates",
  other: "Other lines",
} as const;
type Family = keyof typeof families;
type View = "selected" | "compare" | "history";

function familyOf(row: Grid["rows"][number]): Family {
  const growth = /\b(?:YoY |annual )?growth$/i.test(row.label);
  if (row.kind === "money") return "accounts";
  if (row.kind === "multiple") return "ratios";
  if (row.kind === "percent") return growth ? "growth" : "ratios";
  // Early publications lack kind. Use the historic row definitions and stated cell units.
  if (growth) return "growth";
  if (row.band === "Credit metrics" || / margin$/i.test(row.label)) return "ratios";
  const values = row.cells.filter((cell) => cell.status === "value");
  if (values.length && values.every((cell) => /[%x]$/.test(word(cell.display)))) return "ratios";
  if (!row.kind) return "accounts";
  return "other";
}

function joinCases(main: Grid, other: Grid | null): Grid | null {
  if (!other) return main;
  if (
    main.rows.length !== other.rows.length ||
    main.rows.some((row, index) => {
      const peer = other.rows[index];
      return !peer || row.label !== peer.label || row.band !== peer.band || row.kind !== peer.kind;
    })
  )
    return null;
  return {
    columns: [...main.columns, ...other.columns],
    rows: main.rows.map((row, index) => ({
      ...row,
      cells: [...row.cells, ...(other.rows[index]?.cells ?? [])],
    })),
  };
}

function statementColumns(grid: Grid, selectedCase: string | undefined, downsideNote: string) {
  const names = forecastCaseNames(
    [...new Set(grid.columns.map(({ group }) => group))],
    downsideNote,
  );
  return grid.columns.map((column, index) => ({
    ...column,
    index,
    rawGroup: column.group,
    group: names.get(column.group) ?? forecastCaseLabel(column.group, downsideNote),
    forecast:
      /^FY\d{4}E\b/u.test(column.label) ||
      /^(?:Base case|Downside\b|Upside\b)/u.test(column.group) ||
      (selectedCase !== undefined && column.group === selectedCase),
  }));
}

function displayedColumns(
  grid: Grid,
  selectedCase: string | undefined,
  downsideNote: string,
  requestedView: View,
  requestedPeriod: string,
) {
  const columns = statementColumns(grid, selectedCase, downsideNote);
  const projections = columns.filter(({ forecast }) => forecast);
  const history = columns.filter(({ forecast }) => !forecast);
  const selected = projections.filter(({ group }) => group === selectedCase);
  const comparison = analyzeScenarioPeriods(
    projections.map(({ label, rawGroup, start, end }) => ({
      period: label,
      group: rawGroup,
      start,
      end,
    })),
  );
  const periods = comparison.periods.map(({ period }) => period);
  const period = periods.includes(requestedPeriod) ? requestedPeriod : periods.at(-1);
  const canCompare = periods.length > 0;
  const selectedColumns = [selected, projections, history].find((group) => group.length) ?? [];
  const views = new Map<View, typeof columns>([["selected", selectedColumns]]);
  if (canCompare)
    views.set(
      "compare",
      projections.filter(({ label }) => label === period),
    );
  if (history.length) views.set("history", history);
  const view = views.has(requestedView) ? requestedView : "selected";
  const visible = views.get(view) ?? selectedColumns;
  return {
    selected,
    projections,
    history,
    periods,
    period,
    canCompare,
    comparison,
    comparisonBasisGap: comparison.basisGap,
    view,
    visible,
  };
}

function displayedRows(grid: Grid, requestedFamily: Family, visible: { index: number }[]) {
  const rowsByFamily = new Map<Family, Grid["rows"]>();
  for (const row of grid.rows) {
    const family = familyOf(row);
    const rows = rowsByFamily.get(family);
    if (rows) rows.push(row);
    else rowsByFamily.set(family, [row]);
  }
  const family = rowsByFamily.has(requestedFamily)
    ? requestedFamily
    : ((Object.keys(families) as Family[]).find((key) => rowsByFamily.has(key)) ?? "accounts");
  const rows = (rowsByFamily.get(family) ?? []).map((row) => ({
    ...row,
    cells: visible.map(({ index }) => row.cells[index] ?? {}),
  }));
  return { rowsByFamily, family, rows };
}

function StatementPeriodControls({
  view,
  period,
  periods,
  hasSelected,
  hasProjections,
  hasHistory,
  canCompare,
  comparisonBasisGap,
  setView,
  setPeriod,
}: {
  view: View;
  period?: string;
  periods: string[];
  hasSelected: boolean;
  hasProjections: boolean;
  hasHistory: boolean;
  canCompare: boolean;
  comparisonBasisGap: boolean;
  setView: (view: View) => void;
  setPeriod: (period: string) => void;
}) {
  return (
    <>
      <label className="grid gap-1 text-small text-text-secondary">
        Statement columns
        <select
          className={field}
          value={view}
          onChange={(event) => {
            setView(event.target.value as View);
          }}
        >
          <option value="selected">
            {hasSelected
              ? "Selected case"
              : hasProjections
                ? "Forecast periods"
                : "Recorded periods"}
          </option>
          {canCompare && <option value="compare">Compare scenarios</option>}
          {hasHistory && hasProjections && <option value="history">Historical periods</option>}
        </select>
      </label>
      {view === "compare" && (
        <label className="grid gap-1 text-small text-text-secondary">
          Comparison period
          <select
            className={field}
            value={period}
            onChange={(event) => {
              setPeriod(event.target.value);
            }}
          >
            {periods.map((label) => (
              <option key={label}>{label}</option>
            ))}
          </select>
        </label>
      )}
      {comparisonBasisGap && (
        <p role="status" className="text-small text-text-secondary">
          Some same-labeled scenario periods cannot be compared because their recorded start and end
          dates do not match or cannot establish a unique period.
        </p>
      )}
    </>
  );
}

function StatementView({
  grid,
  title,
  units,
  selectedCase,
  downsideNote,
  limits,
  source,
}: {
  grid: Grid;
  title: string;
  units: string;
  selectedCase?: string;
  downsideNote: string;
  limits: string[];
  source?: ForecastSource;
}) {
  const [requestedFamily, setFamily] = useState<Family>("accounts");
  const [requestedView, setView] = useState<View>("selected");
  const [requestedPeriod, setPeriod] = useState("");
  const {
    selected,
    projections,
    history,
    periods,
    period,
    canCompare,
    comparison,
    comparisonBasisGap,
    view,
    visible,
  } = displayedColumns(grid, selectedCase, downsideNote, requestedView, requestedPeriod);
  const { rowsByFamily, family, rows } = displayedRows(grid, requestedFamily, visible);
  const groups = [...new Set(visible.map(({ group }) => group))];
  const rawGroups = [...new Set(visible.map(({ rawGroup }) => rawGroup))];
  const periodBasis = comparison.periods.find((candidate) => candidate.period === period);
  return (
    <section className="grid min-w-0 content-start gap-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-h4">{title}</h3>
        <span className="text-small text-text-secondary">
          {family === "accounts"
            ? unitLabel(units) || "Units not recorded"
            : { ratios: "Multiples and percentages", growth: "Percent", other: "Recorded units" }[
                family
              ]}
        </span>
      </div>
      <div className="flex flex-wrap items-end gap-x-4 gap-y-3">
        <ButtonGroup
          aria-label="Statement lines"
          size="sm"
          disallowEmptySelection
          selectedKeys={[family]}
          onSelectionChange={(keys) => {
            setFamily([...keys][0] as Family);
          }}
        >
          {(Object.keys(families) as Family[])
            .filter((key) => rowsByFamily.has(key))
            .map((key) => (
              <ButtonGroupItem key={key} id={key}>
                {families[key]}
              </ButtonGroupItem>
            ))}
        </ButtonGroup>

        <StatementPeriodControls
          view={view}
          period={period}
          periods={periods}
          hasSelected={selected.length > 0}
          hasProjections={projections.length > 0}
          hasHistory={history.length > 0}
          canCompare={canCompare}
          comparisonBasisGap={comparisonBasisGap}
          setView={setView}
          setPeriod={setPeriod}
        />
      </div>
      <ForecastTable
        key={family}
        grid={{ columns: visible, rows }}
        title={title}
        limits={limits}
        source={
          source &&
          ((name, selection) =>
            source(name, {
              case: groups.length === 1 ? groups[0] : "",
              groups,
              rawGroups,
              periods: view === "compare" && period ? [period] : undefined,
              periodStart: periodBasis?.start || undefined,
              periodEnd: periodBasis?.end || undefined,
              ...selection,
            }))
        }
        evidenceOnlyQualifications
        statement
        keepColumns={view === "compare"}
      />
    </section>
  );
}

export function ForecastStatement({
  model,
  selectedCase,
  source,
}: {
  model: unknown;
  selectedCase?: string;
  source?: ForecastSource;
}) {
  const cashflow = record(record(model).cashflow);
  const main = gridOf(cashflow);
  const other = gridOf(cashflow.other);
  if (!main) return <p>This model has no readable calculation record.</p>;
  const grid = joinCases(main, other);
  const props = {
    units: word(cashflow.units),
    selectedCase,
    downsideNote:
      stringsIn(cashflow.notes).find((note) => note.startsWith("Downside case is")) ?? "",
    limits: stringsIn(cashflow.limits),
    source,
  };
  return (
    <div className="grid min-w-0 gap-5">
      <StatementView grid={grid ?? main} title="Cash flow model" {...props} />
      {!grid && other && <StatementView grid={other} title="Other forecast cases" {...props} />}
    </div>
  );
}
