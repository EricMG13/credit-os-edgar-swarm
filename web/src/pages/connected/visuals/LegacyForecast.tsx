import { Fragment, type ReactNode } from "react";
import { PathChart } from "@/components/chart/PathChart";
import { ChartTable } from "@/components/chart/ChartTable";
import { TrendChart } from "@/components/chart/TrendChart";
import { amount, items, record, stringsIn, ticks, word } from "./visualData";

interface GridColumn {
  label: string;
  group: string;
  start: string;
  end: string;
}

interface GridRow {
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

function ForecastTable({
  grid: inputGrid,
  title,
  selectedCase,
  downsideNote,
}: {
  grid: Grid;
  title: string;
  selectedCase?: string;
  downsideNote?: string;
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
  const groups: { label: string; span: number }[] = [];
  for (const column of grid.columns) {
    const last = groups.at(-1);
    if (last?.label === column.group) last.span += 1;
    else groups.push({ label: column.group, span: 1 });
  }
  return (
    // The read-only region scrolls horizontally by keyboard when its columns overflow.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <div className="overflow-x-auto" role="region" aria-label={title} tabIndex={0}>
      <table className="w-full border-collapse text-small">
        <caption className="sr-only">{title}</caption>
        <thead className="border-b-2 border-border-hairline">
          <tr>
            <th scope="col" rowSpan={2} className="px-3 py-2 text-left">
              Line item
            </th>
            {groups.map((group, index) => (
              <th
                key={index}
                scope="colgroup"
                colSpan={group.span}
                className="px-3 py-2 text-center whitespace-nowrap"
              >
                {group.label}
              </th>
            ))}
          </tr>
          <tr>
            {grid.columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className="px-3 py-2 text-right whitespace-nowrap"
                title={column.start && column.end ? `${column.start} to ${column.end}` : undefined}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {grid.rows.map((row, index) => (
            <Fragment key={index}>
              {row.band && grid.rows[index - 1]?.band !== row.band ? (
                <tr className="bg-surface-subtle">
                  <th colSpan={grid.columns.length + 1} className="px-3 py-2 text-left">
                    {row.band}
                  </th>
                </tr>
              ) : null}
              <tr className={`border-b border-border-hairline ${row.total ? "font-semibold" : ""}`}>
                <th
                  scope="row"
                  className="sticky left-0 bg-surface-card px-3 py-2 text-left whitespace-nowrap"
                >
                  {row.label}
                </th>
                {row.cells.map((cell, position) => {
                  const display = word(cell.display);
                  const reason = word(cell.reason);
                  const exact = word(cell.exact);
                  return (
                    <td
                      key={position}
                      className="px-3 py-2 text-right whitespace-nowrap tabular-nums"
                      title={reason || exact || undefined}
                      aria-label={reason ? `${display} ${reason}` : undefined}
                    >
                      {display}
                    </td>
                  );
                })}
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const FORECAST_LINES = ["Revenue", "Adj EBITDA", "Closing cash", "Closing debt"];

const caseLabels: Record<string, string> = {
  "Base case": "Base case",
  "Downside case": "Downside case",
  Upside: "Upside case",
  "Downside (CP-2G drivers)": "Downside drivers",
};

function forecastCaseLabel(group: string, downsideNote = "") {
  if (
    group === "Downside case" &&
    downsideNote.startsWith("Downside case is the stress case: a shock applied")
  )
    return "Downside shock";
  return Object.hasOwn(caseLabels, group) ? (caseLabels[group] ?? group) : group;
}

function ForecastTrends({
  grid,
  units,
  source,
  selectedCase,
  downsideNote,
}: {
  grid: Grid;
  units: string;
  source?: (label: string) => ReactNode;
  selectedCase?: string;
  downsideNote?: string;
}) {
  const forecastColumns = grid.columns.flatMap((column, index) =>
    /^FY\d+E$/.test(column.label) ? [{ ...column, index }] : [],
  );
  const periods = [...new Set(forecastColumns.map((column) => column.label))].sort();
  const groups = [...new Set(forecastColumns.map((column) => column.group))].filter(
    (group) =>
      selectedCase === undefined || forecastCaseLabel(group, downsideNote) === selectedCase,
  );
  if (periods.length < 2 || groups.length === 0 || groups.length > 6) return null;
  return (
    <div className="grid gap-8">
      {FORECAST_LINES.map((label) => {
        const found = grid.rows.filter((entry) => entry.label === label);
        const row = found.length === 1 ? found[0] : undefined;
        if (!row) return null;
        const perCase = groups.map((name) => {
          const cells = periods.map((period) => {
            const matches = forecastColumns.filter(
              (column) => column.label === period && column.group === name,
            );
            const index = matches.length === 1 ? matches[0]?.index : undefined;
            return index === undefined ? undefined : row.cells[index];
          });
          return { name, cells };
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
            actions={source?.(label)}
            key={label}
            periods={periods}
            series={series}
            yTicks={ticks(values)}
            note={units || undefined}
            table={perCase.map(({ name, cells }) => ({
              name,
              cells: cells.map((cell) => {
                const display = word(cell?.display);
                const reason = word(cell?.reason);
                return reason ? `${display} ${reason}` : display || null;
              }),
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

export function cashProxyCases(grid: Grid, other: Grid | null, downsideNote = "") {
  const groups = [grid, other].flatMap((source) => {
    if (!source) return [];
    const rows = source.rows.filter((row) => row.label === CASH_PROXY);
    const row = rows.length === 1 ? rows[0] : undefined;
    if (!row) return [];
    const groups = new Map<string, { period: string; cell?: Record<string, unknown> }[]>();
    source.columns.forEach((column, index) => {
      if (!/^FY\d{4}E$/.test(column.label)) return;
      const cells = groups.get(column.group) ?? [];
      cells.push({ period: column.label, cell: row.cells[index] });
      groups.set(column.group, cells);
    });
    return [...groups];
  });
  const periods = [
    ...new Set(groups.flatMap(([, cells]) => cells.map(({ period }) => period))),
  ].sort();
  const order = Object.keys(caseLabels);
  groups.sort(([a], [b]) => order.indexOf(a) - order.indexOf(b));
  const byName = new Set(groups.map(([group]) => forecastCaseLabel(group, downsideNote)));
  if (byName.size !== groups.length || groups.length > 6) return { periods, series: [], rows: [] };
  const series = groups.map(([group, cells]) => {
    const matching = periods.map((period) => {
      const selected = cells.filter((cell) => cell.period === period);
      return selected.length === 1 ? selected[0]?.cell : undefined;
    });
    const values = matching.map((cell) =>
      cell?.status === "value" ? amount(word(cell.exact)) : null,
    );
    return {
      name: forecastCaseLabel(group, downsideNote),
      values,
      labels: values.map((value, index) =>
        index === values.length - 1 && value !== null ? twoPlaces.format(value) : null,
      ),
      cells: matching.map((cell, index) => {
        const value = values[index];
        return typeof value === "number" ? twoPlaces.format(value) : word(cell?.reason) || null;
      }),
    };
  });
  return { periods, series, rows: series.map(({ name, cells }) => ({ label: name, cells })) };
}

export function forecastCaseOptions(model: unknown) {
  const cashflow = record(record(model).cashflow);
  const grid = gridOf(cashflow);
  if (!grid) return [];
  const { periods, series } = cashProxyCases(
    grid,
    gridOf(cashflow.other),
    stringsIn(cashflow.notes).find((note) => note.startsWith("Downside case is")),
  );
  const latestPeriod = periods.at(-1);
  return series.map(({ name, values }) => ({
    name,
    period: latestPeriod,
    value: values.at(-1),
    units: word(cashflow.units),
  }));
}

export function CashProxy({
  model,
  note,
  source,
  selectedCase,
}: {
  model: unknown;
  note?: ReactNode;
  source?: ReactNode;
  selectedCase?: string;
}) {
  const raw = record(record(model).cashflow);
  const grid = gridOf(raw);
  if (!grid) return null;
  const { periods, series: allSeries } = cashProxyCases(
    grid,
    gridOf(raw.other),
    stringsIn(raw.notes).find((note) => note.startsWith("Downside case is")),
  );
  const series = allSeries.filter(
    (item) => selectedCase === undefined || item.name === selectedCase,
  );
  const rows = series.map(({ name, cells }) => ({ label: name, cells }));
  const values = series.flatMap((item) => item.values);
  if (periods.length < 2 || !values.some((value) => value !== null)) return null;
  const table = { head: ["Case", ...periods], rows };
  const unit = word(raw.units);
  return (
    <div className="grid min-w-0 gap-4 xl:grid-cols-[1.65fr_1fr]">
      <div className="min-w-0 rounded-xl border border-border-hairline bg-surface-card p-5">
        <PathChart
          title="Cash proxy by scenario"
          actions={source}
          subtitle={unit}
          periods={periods}
          series={series}
          yTicks={ticks(values, true, (v) =>
            new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(v),
          )}
          table={table}
        />
      </div>
      <div className="grid min-w-0 content-start gap-4">
        <section className="grid min-w-0 gap-3 rounded-xl border border-border-hairline bg-surface-card p-5">
          <h3 className="font-display text-h4">Scenario comparison</h3>
          <ChartTable caption="Scenario comparison" {...table} />
        </section>
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
}: {
  model?: unknown;
  summary?: ReactNode;
  source?: (label: string) => ReactNode;
  selectedCase?: string;
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
    <section className="grid gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-display text-h3">Cash flow model</h3>
        {source?.("Cash flow model")}
      </div>
      {grid === null ? (
        <p>This model has no readable calculation record.</p>
      ) : (
        <>
          {units && <p className="text-text-secondary">{units}</p>}
          {summary}
          <ForecastTrends
            grid={grid}
            units={units}
            source={source}
            selectedCase={selectedCase}
            downsideNote={notes.find((note) => note.startsWith("Downside case is"))}
          />
          <ForecastTable
            grid={grid}
            title="Cash flow model"
            selectedCase={selectedCase}
            downsideNote={notes.find((note) => note.startsWith("Downside case is"))}
          />
          {other && (
            <ForecastTable
              grid={other}
              title="Other forecast cases"
              selectedCase={selectedCase}
              downsideNote={notes.find((note) => note.startsWith("Downside case is"))}
            />
          )}
          {notes.length > 0 && (
            <ul className="list-disc pl-5">
              {notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          )}
          {limits.length > 0 && (
            <section className="grid gap-2">
              <h4 className="font-display text-h4">Model limitations</h4>
              <ul className="list-disc pl-5">
                {limits.map((limit, index) => (
                  <li key={index}>{limit}</li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </section>
  );
}
