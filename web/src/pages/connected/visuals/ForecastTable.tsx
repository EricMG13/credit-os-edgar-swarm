import { Fragment, useState, type ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { containsReference } from "../publishedReport";
import type { Grid } from "./LegacyForecast";
import { word } from "./visualData";

type Source = ((label: string) => ReactNode) | undefined;

function Qualification({ text, label, source }: { text: string; label: string; source: Source }) {
  return (
    <div className="mt-2 max-w-sm whitespace-normal text-left text-small font-normal text-text-secondary">
      <p className="font-semibold">{label}</p>
      <p>{containsReference(text) ? "Recorded qualification: review the model evidence." : text}</p>
      {source?.(label)}
    </div>
  );
}

function periodColumn(grid: Grid, passage: string) {
  const periods: readonly string[] = passage.match(/\b(?:H[12] |Q[1-4] |FY)\d{4}\b/g) ?? [];
  const matches = grid.columns.flatMap((column, index) => {
    const token = /^(?:YTD|PYTD) \((.+)\)$/.exec(column.label)?.[1];
    return token && periods.includes(token) ? [index] : [];
  });
  return matches.length === 1 ? matches[0] : undefined;
}

function columnGroups(grid: Grid) {
  const groups: { label: string; span: number }[] = [];
  for (const column of grid.columns) {
    const last = groups.at(-1);
    if (last?.label === column.group) last.span += 1;
    else groups.push({ label: column.group, span: 1 });
  }
  return groups;
}

function unpopulatedCell(cell: Record<string, unknown>) {
  return (cell.status === "na" || cell.status === "nm") && cell.exact == null;
}

function unpopulated(row: Grid["rows"][number]) {
  return row.cells.length > 0 && row.cells.every(unpopulatedCell);
}

const NOT_AVAILABLE = "n.a.";

function emptyColumns(grid: Grid) {
  return grid.columns.flatMap((_, index) =>
    grid.rows.length > 0 &&
    grid.rows.every((row) => {
      const cell = row.cells[index];
      return cell !== undefined && word(cell.display) === NOT_AVAILABLE && cell.exact == null;
    })
      ? [index]
      : [],
  );
}

function withColumns(grid: Grid, keep: number[]): Grid {
  const pick = <T,>(values: T[]) => keep.flatMap((index) => (values[index] ? [values[index]] : []));
  return {
    columns: pick(grid.columns),
    rows: grid.rows.map((row) => ({ ...row, cells: pick(row.cells) })),
  };
}

/** A note with the button that shows or hides what the table leaves out. */
function Disclosure({
  note,
  label,
  expanded,
  onToggle,
}: {
  note: string | null;
  label: string;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      {note && <p className="text-small text-text-secondary">{note}</p>}
      <Button color="secondary" size="sm" aria-expanded={expanded} onClick={onToggle}>
        {label}
      </Button>
    </div>
  );
}

function ForecastCell({
  cell,
  showReason,
}: {
  cell: Record<string, unknown>;
  showReason: boolean;
}) {
  const display = word(cell.display);
  const reason = word(cell.reason);
  const exact = word(cell.exact);
  return (
    <td
      className="px-3 py-2 text-right whitespace-nowrap tabular-nums"
      title={reason || exact || undefined}
      aria-label={reason ? `${display} ${reason}` : undefined}
    >
      {display}
      {showReason && reason && (
        <span className="mt-1 block min-w-40 max-w-56 whitespace-normal text-left text-small text-text-tertiary">
          {containsReference(reason) ? "Reason recorded in model evidence." : reason}
        </span>
      )}
    </td>
  );
}

function ForecastRows({
  grid,
  rows,
  expanded,
}: {
  grid: Grid;
  rows: Grid["rows"];
  expanded: boolean;
}) {
  return (
    <tbody>
      {rows.map((row, index) => (
        <Fragment key={index}>
          {row.band && rows[index - 1]?.band !== row.band && (
            <tr className="bg-surface-subtle">
              <th colSpan={grid.columns.length + 1} className="px-3 py-2 text-left">
                {row.band}
              </th>
            </tr>
          )}
          <tr className={`border-b border-border-hairline ${row.total ? "font-semibold" : ""}`}>
            <th
              scope="row"
              className="sticky left-0 w-48 min-w-36 max-w-48 bg-surface-card px-3 py-2 text-left whitespace-normal sm:w-64 sm:max-w-64"
            >
              {row.label}
            </th>
            {row.cells.map((cell, position) => (
              <ForecastCell key={position} cell={cell} showReason={expanded && unpopulated(row)} />
            ))}
          </tr>
        </Fragment>
      ))}
    </tbody>
  );
}

function ForecastColumns({ grid }: { grid: Grid }) {
  return (
    <thead className="border-b-2 border-border-hairline">
      <tr>
        <th scope="col" rowSpan={2} className="px-3 py-2 text-left">
          Line item
        </th>
        {columnGroups(grid).map((group, index) => (
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
  );
}

export function ForecastTable({
  grid: inputGrid,
  title,
  limits,
  source,
}: {
  grid: Grid;
  title: string;
  limits: string[];
  source?: (label: string) => ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const [showColumns, setShowColumns] = useState(false);
  const empty = emptyColumns(inputGrid);
  // Columns are only set aside when another column holds a value; a table with none is drawn whole.
  const canHideColumns =
    empty.length > 0 &&
    inputGrid.rows.some((row) =>
      row.cells.some((cell, index) => !empty.includes(index) && !unpopulatedCell(cell)),
    );
  const grid =
    canHideColumns && !showColumns
      ? withColumns(
          inputGrid,
          inputGrid.columns.flatMap((_, index) => (empty.includes(index) ? [] : [index])),
        )
      : inputGrid;
  const missing = grid.rows.filter(unpopulated).length;
  const populated = grid.rows.filter((row) => !unpopulated(row));
  const canCollapse = missing > 0 && populated.length > 0;
  const rows = expanded || !canCollapse ? grid.rows : populated;
  const period = limits.filter((text) => text.startsWith("Base period is "));
  const interest = limits.filter((text) => text.startsWith("Base interest is "));
  const bound = inputGrid.columns.flatMap((column, index) =>
    period
      .filter((text) => periodColumn(inputGrid, text) === index)
      .map((text) => ({ label: column.label, text })),
  );
  const interestShown = rows.some((row) => row.label === "Interest");
  const unbound = period.filter((text) => periodColumn(inputGrid, text) === undefined);
  return (
    <div className="grid min-w-0 gap-3">
      {unbound.map((text, at) => (
        <Qualification key={at} text={text} label="Base-period qualification" source={source} />
      ))}
      {!interestShown &&
        interest.map((text, at) => (
          <Qualification
            key={at}
            text={text}
            label="Interest basis qualification"
            source={source}
          />
        ))}
      {canCollapse && (
        <Disclosure
          note={`${String(missing)} rows have no recorded values in this view. Their missing-data reasons remain available.`}
          label={
            expanded
              ? "Hide unavailable rows"
              : `Show ${String(missing)} unavailable rows and reasons`
          }
          expanded={expanded}
          onToggle={() => {
            setExpanded(!expanded);
          }}
        />
      )}
      {/* The read-only region scrolls horizontally by keyboard when columns overflow. */}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <div className="overflow-x-auto" role="region" aria-label={title} tabIndex={0}>
        <table className="w-full border-collapse text-small">
          <caption className="sr-only">{title}</caption>
          <ForecastColumns grid={grid} />
          <ForecastRows grid={grid} rows={rows} expanded={expanded || !canCollapse} />
        </table>
      </div>
      {canHideColumns && (
        <Disclosure
          note={
            showColumns
              ? null
              : `These columns have no recorded values: ${empty.map((index) => inputGrid.columns[index]?.label ?? "").join(", ")}.`
          }
          label={
            showColumns
              ? "Hide columns with no values"
              : `Show ${String(empty.length)} columns with no values`
          }
          expanded={showColumns}
          onToggle={() => {
            setShowColumns(!showColumns);
          }}
        />
      )}
      {(bound.length > 0 || (interestShown && interest.length > 0)) && (
        <ul aria-label="Period qualifications" className="grid gap-2">
          {bound.map(({ label, text }, at) => (
            <li key={`period-${String(at)}`}>
              <Qualification text={text} label={`${label} period qualification`} source={source} />
            </li>
          ))}
          {interestShown &&
            interest.map((text, at) => (
              <li key={`interest-${String(at)}`}>
                <Qualification text={text} label="Interest basis qualification" source={source} />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
