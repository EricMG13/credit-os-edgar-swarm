import type { OutputEntry, Row, Table } from "../../../publishedReport";
import { readCell } from "./numbers";

/** Every table of the entry, in the order the handoff wrote them, with its section's heading. */
export function allTables(entry: OutputEntry) {
  return entry.sections.flatMap(({ heading, blocks }) =>
    blocks.flatMap((block) => (block.type === "table" ? [{ heading, table: block }] : [])),
  );
}

/** The one table of the section with this heading; null when absent or when the section holds several. */
export function tableUnder(entry: OutputEntry, heading: string): Table | null {
  const found = allTables(entry).filter((item) => item.heading === heading);
  return found.length === 1 ? (found[0]?.table ?? null) : null;
}

/** The one table anywhere in the entry that carries all of these headers; null when none or several. */
export function tableWith(entry: OutputEntry, headers: readonly string[]): Table | null {
  const found = allTables(entry).filter(({ table }) =>
    headers.every((name) => table.headers.includes(name)),
  );
  return found.length === 1 ? (found[0]?.table ?? null) : null;
}

/** The column of a header, or -1. */
export const columnOf = (table: Table, header: string) => table.headers.indexOf(header);

/** The one row whose first cell is this label (case-insensitive); null if absent or repeated. */
export function rowLabelled(table: Table, label: string, column = 0): Row | null {
  const wanted = label.trim().toLowerCase();
  const found = table.rows.filter(
    (row) => (row.cells[column] ?? "").trim().toLowerCase() === wanted,
  );
  return found.length === 1 ? (found[0] ?? null) : null;
}

/** A period label as the handoff writes it ("FY2024 / 2024-09-30" → "FY2024"). */
export const periodLabel = (cell: string) => (cell.split(" / ")[0] ?? "").trim();

const YEAR = /(\d{4})/;
const kindOf = (label: string) =>
  label
    .replace(/\d{4}/, "")
    .replace(/[^A-Za-z]/g, "")
    .toUpperCase();

/**
 * The two latest period rows of a chart-data table, earlier first, ordered by the year in each label
 * (not by position). Null unless every label carries a year, the latest two differ and are the same
 * kind of period ("FY" beside "FY", not beside "LTM").
 */
export function lastTwoRows(table: Table): { prior: Row; current: Row } | null {
  const dated = table.rows.map((row) => ({
    row,
    label: periodLabel(row.cells[0] ?? ""),
    year: Number(YEAR.exec(periodLabel(row.cells[0] ?? ""))?.[1] ?? NaN),
  }));
  if (dated.length < 2 || dated.some((item) => Number.isNaN(item.year))) return null;
  const ordered = [...dated].sort((a, b) => a.year - b.year);
  const current = ordered.at(-1);
  const prior = ordered.at(-2);
  if (
    !current ||
    !prior ||
    prior.year === current.year ||
    kindOf(prior.label) !== kindOf(current.label)
  )
    return null;
  return { prior: prior.row, current: current.row };
}

/** For a statement table with one column per period (`FY2024`, `FY2023`): the earlier and later column. */
export function periodColumns(table: Table) {
  const year = (header: string) => /(?:^|\D)(\d{4})$/.exec(header.trim())?.[1];
  const dated = table.headers.flatMap((header, at) => {
    const found = year(header);
    return found && /^(?:FY|CY)?\s?\d{4}$/.test(header.trim())
      ? [{ at, year: Number(found), label: header.trim() }]
      : [];
  });
  if (dated.length !== 2) return null;
  const [a, b] = dated;
  if (!a || !b || a.year === b.year) return null;
  return a.year < b.year ? { prior: a, current: b } : { prior: b, current: a };
}

/** Prior and current cells of a labelled row in a statement table; null if the row or periods are missing. */
export function statementPair(table: Table, label: string) {
  const periods = periodColumns(table);
  const row = rowLabelled(table, label);
  if (!periods || !row) return null;
  const prior = row.cells[periods.prior.at] ?? "";
  const current = row.cells[periods.current.at] ?? "";
  return {
    line: row.line,
    prior: { label: periods.prior.label, cell: readCell(prior) },
    current: { label: periods.current.label, cell: readCell(current) },
  };
}
