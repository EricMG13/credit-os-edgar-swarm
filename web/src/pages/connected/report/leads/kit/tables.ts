import type { OutputEntry, Row, Table } from "../../../publishedReport";

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

/** A row label compared without case, punctuation or spacing ("Cash taxes paid, net of refunds" → "cash taxes paid net of refunds"). */
export const normalLabel = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

/**
 * The one row whose label begins with one of these words, compared as `normalLabel` on whole words
 * ("cash taxes paid" matches "Cash taxes paid, net of refunds" and "Cash Taxes Paid", not "Cash
 * taxes paidout"). "none" when no row does, "several" when more than one does: never a guess.
 */
export function rowStarting(
  table: Table,
  prefixes: readonly string[],
  column = 0,
): Row | "none" | "several" {
  const wanted = prefixes.map(normalLabel);
  const found = table.rows.filter((row) => {
    const label = normalLabel(row.cells[column] ?? "");
    return wanted.some((prefix) => label === prefix || label.startsWith(`${prefix} `));
  });
  if (found.length === 0) return "none";
  return found.length === 1 && found[0] ? found[0] : "several";
}

/** A period label as the handoff writes it ("FY2024 / 2024-09-30" → "FY2024"). */
export const periodLabel = (cell: string) => (cell.split(" / ")[0] ?? "").trim();

export type PeriodKind = "annual" | "other";

/**
 * One period a table states. `label` is as written (before any " / date"); `year` is the four-digit
 * year in it; `form` is the label without its year, letters and digits only, upper case ("FY",
 * "LTMDEC", "Q3", "" for a bare year): two periods compare only within one form. `kind` is
 * "annual" for a fiscal or calendar year (`FY2024`, `CY2024`, `2024`), "other" for anything else
 * (LTM, quarters, halves, an interim date).
 */
export type Period = { label: string; kind: PeriodKind; form: string; year: number };

const YEAR = /(?<!\d)(\d{4})(?!\d)/;
const ANNUAL_FORMS = new Set(["FY", "CY", ""]);
const MONTH_DAY = /\d{4}-(\d{2})-(\d{2})/;

/** The period a cell names, or null when it names no year (`Thereafter`, `Current`). */
export function periodOf(cell: string): Period | null {
  const label = periodLabel(cell);
  const year = YEAR.exec(label)?.[1];
  if (!label || year === undefined) return null;
  const form = label
    .replace(year, "")
    .replace(/[^A-Za-z0-9]/g, "")
    .toUpperCase();
  return { label, year: Number(year), form, kind: ANNUAL_FORMS.has(form) ? "annual" : "other" };
}

/** A balance-sheet date written in the cell ("FY2024 / 2024-09-30", "2025-06-30") as MMDD, else null. */
const dayOf = (cell: string) => {
  const found = MONTH_DAY.exec(cell);
  return found ? Number(`${found[1] ?? ""}${found[2] ?? ""}`) : null;
};

export type Ordered<T> = { periods: { period: Period; item: T }[] } | { reason: string };

/**
 * Items keyed by a period cell, ordered by the year in the label (then by a stated date in the same
 * year); items of one year and no date keep the handoff's order. A reason instead when a cell names
 * no year, or when one period (one form, one year) is stated twice: the table is then a stated gap.
 */
export function orderByPeriod<T>(items: readonly { cell: string; item: T }[]): Ordered<T> {
  const read = items.map(({ cell, item }) => ({ period: periodOf(cell), day: dayOf(cell), item }));
  const undated = items.find((_, at) => read[at]?.period === null);
  if (undated) return { reason: `a period has no year: ${periodLabel(undated.cell) || "blank"}` };
  const dated = read as { period: Period; day: number | null; item: T }[];
  for (const [at, one] of dated.entries()) {
    const twice = dated
      .slice(0, at)
      .find(
        (other) => other.period.form === one.period.form && other.period.year === one.period.year,
      );
    if (twice) return { reason: `${one.period.label} appears more than once` };
  }
  const ordered = [...dated].sort(
    (a, b) =>
      a.period.year - b.period.year || (a.day !== null && b.day !== null ? a.day - b.day : 0),
  );
  return { periods: ordered.map(({ period, item }) => ({ period, item })) };
}

/** The rows of a period-rows table (`Chart data: …`, `Net debt data`), ordered by period; see `orderByPeriod`. */
export function periodRows(table: Table, column = 0): Ordered<Row> {
  if (table.rows.length === 0) return { reason: "it has no rows" };
  return orderByPeriod(table.rows.map((row) => ({ cell: row.cells[column] ?? "", item: row })));
}

/** The period columns of a statement table (`| Line item | FY2024 | FY2023 | Unit | …`): every header after the first that names a year. */
export function statementColumns(table: Table): Ordered<number> {
  const columns = table.headers.flatMap((header, at) =>
    at > 0 && periodOf(header) ? [{ cell: header.trim(), item: at }] : [],
  );
  if (columns.length === 0) return { reason: "it has no column named for a period" };
  return orderByPeriod(columns);
}

/**
 * Every period of these lists once (by label), ordered by year; periods of one year keep the order
 * they first appear in. Periods of different kinds are all kept, never collapsed.
 */
export function unionPeriods(lists: readonly (readonly Period[])[]): Period[] {
  const seen = new Map<string, Period>();
  for (const period of lists.flat()) if (!seen.has(period.label)) seen.set(period.label, period);
  return [...seen.values()].sort((a, b) => a.year - b.year);
}

/**
 * The two periods a comparison is drawn between, earlier first: the latest two of one form, annual
 * periods first (`FY2023 → FY2024` beside an `LTM Dec-2024`). Null with fewer than two of one form:
 * one period is drawn as itself, never compared.
 */
export function comparisonOf(periods: readonly Period[]): { from: string; to: string } | null {
  const annual = periods.filter((period) => period.kind === "annual");
  const pool = annual.length > 0 ? annual : periods;
  const form = pool.at(-1)?.form;
  const same = pool.filter((period) => period.form === form);
  const [from, to] = same.slice(-2);
  return from && to ? { from: from.label, to: to.label } : null;
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

/** A table's heading as a reader's name: no register id, no "Chart data:" ("T4.5 Cash flow statement" → "Cash flow statement"). */
export function tableName(heading: string) {
  const name = heading.replace(/^T[A-Z]*\d+[A-Z]?\.\d+\s+/, "").replace(/^Chart data:\s*/, "");
  return name.charAt(0).toUpperCase() + name.slice(1);
}
