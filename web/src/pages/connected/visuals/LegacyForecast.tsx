import { Fragment } from "react";
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

interface Grid {
  columns: GridColumn[];
  rows: GridRow[];
}

function gridOf(raw: unknown): Grid | null {
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

function ForecastTable({ grid, title }: { grid: Grid; title: string }) {
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

function ForecastTrends({ grid, units }: { grid: Grid; units: string }) {
  const forecastColumns = grid.columns.flatMap((column, index) =>
    /^FY\d+E$/.test(column.label) ? [{ ...column, index }] : [],
  );
  const periods = [...new Set(forecastColumns.map((column) => column.label))].sort();
  const groups = [...new Set(forecastColumns.map((column) => column.group))];
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

export function LegacyForecast({ model }: { model?: unknown }) {
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
      <h3 className="font-display text-h3">Cash flow model</h3>
      {grid === null ? (
        <p>This model has no readable calculation record.</p>
      ) : (
        <>
          {units && <p className="text-text-secondary">{units}</p>}
          <ForecastTrends grid={grid} units={units} />
          <ForecastTable grid={grid} title="Cash flow model" />
          {other && <ForecastTable grid={other} title="Other forecast cases" />}
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
