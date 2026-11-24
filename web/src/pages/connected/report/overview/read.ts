import {
  containsReference,
  methodNote,
  passages,
  readParagraph,
  readerText,
  type OutputEntry,
  type PublishedRun,
  type Snapshot,
} from "../../publishedReport";
import { namedTable, type ReportView } from "../../reportView";

/** What every Overview row is given: the published snapshot, this run and its report view. */
export type RowProps = { snapshot: Snapshot; run: PublishedRun; view: ReportView };

/** The module's designated output in this run; none when the module did not run. */
export const entryOf = (view: ReportView, module: string) =>
  view.entries.find((entry) => entry.selected && entry.output.module === module);

export type Passage = { line: number; text: string | null };

/**
 * The paragraphs a module wrote under one reader passage, in its words. `text` is null for a
 * paragraph that cites a source by name: the page links to it in Evidence instead of drawing it.
 */
export function passageParagraphs(entry: OutputEntry, heading: string): Passage[] {
  return passages(entry.sections)
    .filter((section) => section.heading === heading)
    .flatMap(({ blocks }) => blocks)
    .filter((block) => block.type === "text")
    .filter((block) => !methodNote(block.text))
    .map((block) => {
      const body = readParagraph(block.text).body.replaceAll("**", "").replaceAll("`", "");
      return { line: block.line, text: containsReference(body) ? null : readerText(body) };
    })
    .filter((paragraph) => paragraph.text !== "");
}

const NUMBER = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/;

/** A cell's number, exactly as stated; null for a gap or any other words. */
const cellNumber = (cell: string) =>
  NUMBER.test(cell.trim()) ? Number(cell.trim().replaceAll(",", "")) : null;

type Point = {
  period: string;
  /** The cell as the module wrote it: a figure, or its `Not supplied: …` words. */
  cell: string;
  value: number | null;
  line: number;
};
export type Series = { name: string; unit: string; points: Point[] };

/**
 * One column of a CP-1 `Chart data:` period table, row by row. Nothing when the table, the one
 * matching column or one reporting unit is not there: a tile then draws its gap.
 */
export function periodSeries(
  entry: OutputEntry | undefined,
  chart: string,
  heading: RegExp,
): Series | null {
  const table = entry && namedTable(entry, `Chart data: ${chart}`, ["Period", "Reporting unit"]);
  if (!table) return null;
  const columns = table.headers.flatMap((name, at) => (heading.test(name) ? [at] : []));
  const [column] = columns;
  const unitAt = table.headers.indexOf("Reporting unit");
  const units = new Set(table.rows.map(({ cells }) => cells[unitAt] ?? ""));
  const [unit] = units;
  if (columns.length !== 1 || column === undefined || units.size !== 1 || !unit) return null;
  return {
    name: table.headers[column] ?? "",
    unit,
    points: table.rows.map(({ cells, line }) => ({
      period: cells[0] ?? "",
      cell: cells[column] ?? "",
      value: cellNumber(cells[column] ?? ""),
      line,
    })),
  };
}

/** The latest row and the row before it, in the table's own order. */
export function lastTwo(series: Series) {
  return { latest: series.points.at(-1), prior: series.points.at(-2) };
}

/** A `Not supplied: reason` cell's reason, in the module's words; null for any other cell. */
export const gapReason = (cell: string) => /^Not supplied:\s*(\S.*)$/.exec(cell)?.[1] ?? null;

/** A module's bottom line: its passage, or the summary an earlier-format handoff carries instead. */
export function bottomLine(entry: OutputEntry): Passage[] {
  const written = passageParagraphs(entry, "Bottom line");
  const summary = entry.output.summary;
  if (written.length || !summary) return written;
  const body = readParagraph(summary.bottomLine).body.replaceAll("**", "").replaceAll("`", "");
  return [{ line: summary.line, text: containsReference(body) ? null : readerText(body) }];
}
