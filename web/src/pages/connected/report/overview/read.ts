import {
  containsReference,
  displayColumns,
  methodNote,
  passages,
  readParagraph,
  readerText,
  type OutputEntry,
  type PublishedRun,
  type Snapshot,
  type Table,
} from "../../publishedReport";
import { periodOrder, type ReportView } from "../../reportView";

/** What every Overview row is given: the published snapshot, this run and its report view. */
export type RowProps = { snapshot: Snapshot; run: PublishedRun; view: ReportView };

/** The module's designated output in this run; none when the module did not run. */
export const entryOf = (view: ReportView, module: string) =>
  view.entries.find((entry) => entry.selected && entry.output.module === module);

export type Passage = { line: number; text: string | null };
/** A table the module wrote in a passage: source columns left out, a cell that cites one null. */
export type PassageTable = {
  line: number;
  table: { headers: string[]; rows: { line: number; cells: (string | null)[] }[] };
};

const plain = (text: string) => text.replaceAll("**", "").replaceAll("`", "").trim();

function paragraphOf(line: number, text: string): Passage {
  const body = plain(readParagraph(text).body);
  return { line, text: containsReference(body) ? null : readerText(body) };
}

/** A table as the Overview may draw it; a passage link where no column can be drawn here. */
function tableOf(table: Table): PassageTable | Passage {
  const columns = displayColumns(table.headers, false, table.rows);
  if (!columns.length) return { line: table.line, text: null };
  const cell = (text: string) => (containsReference(text) ? null : readerText(plain(text)));
  return {
    line: table.line,
    table: {
      headers: columns.map((at) => readerText(plain(table.headers[at] ?? ""))),
      rows: table.rows.map(({ line, cells }) => ({
        line,
        cells: columns.map((at) => cell(cells[at] ?? "")),
      })),
    },
  };
}

/**
 * What a module wrote under one reader passage, in its words: paragraphs and tables. A paragraph's
 * `text` is null when it cites a source by name: the page links to it in Evidence instead.
 */
export function passageBlocks(entry: OutputEntry, heading: string): (Passage | PassageTable)[] {
  return passages(entry.sections)
    .filter((section) => section.heading === heading)
    .flatMap(({ blocks }) => blocks)
    .flatMap((block) => {
      if (block.type === "table") return [tableOf(block)];
      if (block.type !== "text" || methodNote(block.text)) return [];
      const paragraph = paragraphOf(block.line, block.text);
      return paragraph.text === "" ? [] : [paragraph];
    });
}

/** The paragraphs a module wrote under one reader passage, in its words; its tables left out. */
function passageParagraphs(entry: OutputEntry, heading: string): Passage[] {
  return passageBlocks(entry, heading).filter((block): block is Passage => !("table" in block));
}

const NUMBER = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/;

/** A cell's number, exactly as stated; null for a gap or any other words. */
const cellNumber = (cell: string) =>
  NUMBER.test(cell.trim()) ? Number(cell.trim().replaceAll(",", "")) : null;

export type Point = {
  period: string;
  /** The cell as the module wrote it: a figure, or its `Not supplied: …` words. */
  cell: string;
  value: number | null;
  /** The row's "Basis and limitation" (or "Basis") cell as written; null without that column. */
  basis: string | null;
  /** `periodOrder` of the period; undefined when it cannot be ordered or the row is malformed. */
  order: string | undefined;
  line: number;
};
export type Series = { name: string; unit: string; points: Point[] };
/** A chart column read for a tile, or the true reason it cannot be. */
export type SeriesRead = { series: Series } | { reason: string; line?: number };

const CHART_HEADERS = ["Period", "Reporting unit"];

/** The one `Chart data: <chart>` table of the handoff, or why there is not one. */
function chartTable(entry: OutputEntry, chart: string): Table | string {
  if (entry.output.parseError)
    return "The financial foundation's handoff could not be read; it is in Evidence.";
  const tables = entry.sections
    .filter((section) => section.heading === `Chart data: ${chart}`)
    .flatMap(({ blocks }) => blocks)
    .filter((block): block is Table => block.type === "table");
  const matches = tables.filter((table) =>
    CHART_HEADERS.every((name) => table.headers.includes(name)),
  );
  const [only] = matches;
  if (matches.length === 1 && only) return only;
  if (matches.length > 1)
    return `The financial foundation has more than one '${chart}' chart table.`;
  return tables.length
    ? `The financial foundation's '${chart}' chart table has no Period or Reporting unit column.`
    : `The financial foundation has no '${chart}' chart table.`;
}

/** The table's one reporting unit, or why it has none. */
function reportingUnit(table: Table, chart: string): { unit: string } | { reason: string } {
  const at = table.headers.indexOf("Reporting unit");
  const units = table.rows.map(({ cells }) => (cells[at] ?? "").trim());
  const [unit] = units;
  if (unit === undefined) return { reason: `The '${chart}' chart table has no rows.` };
  if (units.some((each) => !each))
    return { reason: `The '${chart}' chart table states no reporting unit for a period.` };
  return new Set(units).size === 1
    ? { unit }
    : { reason: `The '${chart}' chart table states more than one reporting unit.` };
}

/** The one column whose heading matches, or why there is not one. */
function figureColumn(
  table: Table,
  chart: string,
  heading: RegExp,
  title: string,
): { column: number } | { reason: string } {
  const columns = table.headers.flatMap((name, at) => (heading.test(name) ? [at] : []));
  const [column] = columns;
  if (columns.length === 1 && column !== undefined) return { column };
  return {
    reason: columns.length
      ? `The '${chart}' chart table has more than one ${title} column.`
      : `The '${chart}' chart table has no ${title} column.`,
  };
}

const BASIS = /^Basis(?: and limitation)?$/i;

function points(table: Table, column: number): Point[] {
  const period = table.headers.indexOf("Period");
  const basis = table.headers.findIndex((name) => BASIS.test(name.trim()));
  return table.rows.map(({ cells, line }) => ({
    period: cells[period] ?? "",
    cell: cells[column] ?? "",
    value: cellNumber(cells[column] ?? ""),
    basis: basis < 0 ? null : (cells[basis] ?? ""),
    order: cells.length === table.headers.length ? periodOrder(cells[period] ?? "") : undefined,
    line,
  }));
}

/**
 * One column of a CP-1 `Chart data:` period table, row by row; or, when the table, the one
 * matching column or the one reporting unit is not there, the true reason: a tile draws it.
 */
export function periodSeries(
  entry: OutputEntry,
  chart: string,
  heading: RegExp,
  title: string,
): SeriesRead {
  const table = chartTable(entry, chart);
  if (typeof table === "string") return { reason: table };
  const found = figureColumn(table, chart, heading, title);
  if ("reason" in found) return { reason: found.reason, line: table.line };
  const unit = reportingUnit(table, chart);
  if ("reason" in unit) return { reason: unit.reason, line: table.line };
  const name = table.headers[found.column] ?? title;
  return { series: { name, unit: unit.unit, points: points(table, found.column) } };
}

/**
 * The points in period order, or null where no latest can be chosen: a period that cannot be
 * ordered (or a row whose cells do not match the headings), periods of mixed forms, or a period
 * that repeats. This is the rule of the private `latestRow` in `reportView.ts` (which mirrors
 * `chart_rows` of `credit_os_catalogue.py`), kept identical; change both together.
 */
function inPeriodOrder(series: Series): Point[] | null {
  const keys = series.points.map(({ order }) => order);
  const known = keys.filter((key): key is string => key !== undefined);
  if (!known.length || known.length !== keys.length) return null;
  if (new Set(known.map((key) => key[0])).size !== 1 || new Set(known).size !== known.length)
    return null;
  return [...series.points].sort((a, b) => ((a.order ?? "") < (b.order ?? "") ? -1 : 1));
}

const yearEarlier = (year: string) => String(Number(year) - 1).padStart(4, "0");

/**
 * The `periodOrder` key of the period exactly a year before: FY2024 → FY2023, a date (or the date
 * of "FYn / date") less one year. None for 29 February, as `oneYearBefore` in `reportView.ts`.
 */
function yearBefore(order: string) {
  const fiscal = /^1-(\d{4})$/.exec(order);
  if (fiscal?.[1]) return `1-${yearEarlier(fiscal[1])}`;
  const [, year, month, day] = /^2-(\d{4})-(\d{2})-(\d{2})$/.exec(order) ?? [];
  if (!year || !month || !day || (month === "02" && day === "29")) return undefined;
  return `2-${yearEarlier(year)}-${month}-${day}`;
}

/** The latest period, and the one exactly a year before it when the chart states one. */
export type Timeline = { points: Point[]; latest: Point; prior: Point | undefined };

export function timeline(series: Series): Timeline | null {
  const ordered = inPeriodOrder(series);
  const latest = ordered?.at(-1);
  if (!ordered || !latest) return null;
  const before = yearBefore(latest.order ?? "");
  return { points: ordered, latest, prior: ordered.find(({ order }) => order === before) };
}

/** A `Not supplied: reason` cell's reason, in the module's words; null for any other cell. */
export const gapReason = (cell: string) => /^Not supplied:\s*(\S.*)$/.exec(cell)?.[1] ?? null;

/** A module's bottom line: its passage, or the summary an earlier-format handoff carries instead. */
export function bottomLine(entry: OutputEntry): Passage[] {
  const written = passageParagraphs(entry, "Bottom line");
  const summary = entry.output.summary;
  if (written.length || !summary) return written;
  return [paragraphOf(summary.line, summary.bottomLine)];
}
