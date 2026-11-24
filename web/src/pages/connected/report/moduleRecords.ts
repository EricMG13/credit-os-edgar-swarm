import { plainText } from "../richText";
import {
  classifySections,
  containsReference,
  readerText,
  displayColumns,
  methodNote,
  type Block,
  type OutputEntry,
  type Section,
  type Table,
} from "../publishedReport";
import { drawingLines, drawingTitle, registerBlocks } from "../ReportContent";

/** The tabs of a module's records region, in their order. */
export const RECORD_KINDS = [
  ["statements", "Statements"],
  ["registers", "Registers"],
  ["calculations", "Calculations"],
  ["charts", "Chart tables"],
] as const;
export type RecordKind = (typeof RECORD_KINDS)[number][0];

type TextBlock = Extract<Block, { type: "text" }>;

/** One table of the region: its kind, its title as drawn, and the prose of its section. */
export interface RecordTable {
  kind: RecordKind;
  title: string;
  section: Section;
  table: Table;
  notes: TextBlock[];
}

/** A register the module page lists by name only; its table is held in Evidence. */
export interface HeldRecord {
  title: string;
  line: number;
}

/** Machinery the screen map keeps off the module page (row E), whatever role its section has. */
const EVIDENCE_ONLY =
  /source register|\bentit(?:y|ies)[ -](?:period )?keys?\b|definition conflict/i;
const NO_QUALIFICATION = "No qualification.";

function descriptorTitles(entry: OutputEntry) {
  const titles = new Map<number, string>();
  const { charts = [], chartGaps = [], events = [], maps = [] } = entry.output;
  for (const item of [...charts, ...chartGaps, ...events, ...maps]) {
    const title = [item.title, item.lane, item.name].find((value) => typeof value === "string");
    if (typeof title === "string" && title.trim() && !titles.has(item.table))
      titles.set(item.table, title.trim());
  }
  return titles;
}

function kindOf(role: string, heading: string, drawn: boolean): RecordKind | "evidence" | null {
  if (role === "calculations") return "calculations";
  if (role === "drawing") return "charts";
  if (role === "registers") return drawn ? "registers" : "evidence";
  if (role !== "finding" && role !== "passage") return null;
  return EVIDENCE_ONLY.test(heading) ? "evidence" : "statements";
}

function sectionNotes(section: Section) {
  return section.blocks.filter(
    (block): block is TextBlock =>
      block.type === "text" &&
      !methodNote(block.text) &&
      block.text.trim() !== NO_QUALIFICATION &&
      !block.text.startsWith("```"),
  );
}

/**
 * The module's tables for its records region, by kind, in handoff order; and the registers held
 * in Evidence. Every table of a reader section lands in exactly one of the two.
 */
export function moduleRecords(entry: OutputEntry) {
  const charted = drawingLines(entry);
  const titles = descriptorTitles(entry);
  const tables: RecordTable[] = [];
  const evidence: HeldRecord[] = [];
  for (const { section, role } of classifySections(entry.sections)) {
    const own = section.blocks.filter((block): block is Table => block.type === "table");
    const drawn = registerBlocks(section, entry);
    const title = readableTitle(section.heading);
    for (const table of own) {
      const kind = charted.has(table.line)
        ? "charts"
        : kindOf(role, section.heading, drawn.includes(table));
      if (kind === null) continue;
      if (kind === "evidence") {
        if (!evidence.some(({ line }) => line === section.line))
          evidence.push({ title, line: section.line });
        continue;
      }
      const named = titles.get(table.line);
      tables.push({
        kind,
        title: named === undefined ? title : readableTitle(named),
        section,
        table,
        notes: sectionNotes(section),
      });
    }
  }
  return { tables: distinctTitles(tables), evidence };
}

/** A heading as the reader sees it: no drawing prefix or register code, module names for codes,
 * and no title at all where it cites a source, which belongs in Evidence. */
function readableTitle(heading: string) {
  const title = readerText(plainText(drawingTitle(heading))).trim();
  return title && !containsReference(title) ? title : "Untitled table";
}

/** Tables that share a title, anywhere in the handoff, are told apart by their place among them. */
function distinctTitles(tables: RecordTable[]) {
  const seen = new Map<string, number>();
  return tables.map((record) => {
    const count = (seen.get(record.title) ?? 0) + 1;
    seen.set(record.title, count);
    return count > 1 ? { ...record, title: `${record.title} · table ${String(count)}` } : record;
  });
}

const GAP_CELL = /^(?:not\b|n\/?a\b|withheld\b|none\b|—$|-$)/i;
const NUMBER = /^(\()?(-)?(\d{1,3}(?:,\d{3})+|\d+)(\.\d+)?(\))?$/;
const AMOUNT_HEADER =
  /principal|amount|debt|cash|balance|commitment|drawn|maturing|liquidity|outstanding|(?:carrying|market|face|fair|book) value|revenue|sales|ebitda|flow|capex|proceeds/i;
const NOT_AMOUNT =
  /\/|ratio|bps|%|rate|spread|margin|coupon|floor|multiple|cover|leverage|date|year|period|unit|basis|source|tier|status|growth|cagr|change|conversion|days|yield|\(x\)|\bto (?:ebitda|revenue|sales|equity|capital)\b/i;
/** A column that states each row's currency or unit: figures in two of them share no scale. */
const UNIT_HEADER = /^(?:currency|unit|reporting unit|units?|ccy)$/i;
const PERIOD_HEADER = /^(?:FY|H[12] |Q[1-4] |LTM |20\d\d)/;

/** A cell's number exactly as written, or null for text that is not one plain number. */
function amount(cell: string) {
  const match = NUMBER.exec(cell.trim());
  if (!match) return null;
  const [, open, minus, whole = "", fraction = "", close] = match;
  if (Boolean(open) !== Boolean(close) || (open && minus)) return null;
  const value = Number(whole.replaceAll(",", "") + fraction);
  return open || minus ? -value : value;
}

const isGap = (cell: string) => cell.trim() === "" || GAP_CELL.test(cell.trim());

/** How long a cell's bar is against its column: null for a gap, which draws no bar. */
export interface AmountColumn {
  share: (cell: string) => number | null;
  negative: (cell: string) => boolean;
}

function amountColumn(cells: string[]): AmountColumn | null {
  const values = cells.flatMap((cell) => {
    const value = amount(cell);
    return value === null ? [] : [value];
  });
  // One figure has nothing to be compared with: it draws no bar.
  if (values.length < 2 || cells.some((cell) => amount(cell) === null && !isGap(cell))) return null;
  const largest = Math.max(...values.map(Math.abs));
  if (largest === 0) return null;
  return {
    share: (cell) => {
      const value = amount(cell);
      return value === null ? null : Math.abs(value) / largest;
    },
    negative: (cell) => (amount(cell) ?? 0) < 0,
  };
}

/** The table's amount columns by index: a header that names an amount, every cell a number or a gap. */
export function amountColumns(table: Table) {
  const columns = new Map<number, AmountColumn>();
  if (mixedUnits(table)) return columns;
  for (const index of displayColumns(table.headers, false, table.rows)) {
    const header = table.headers[index] ?? "";
    if (!AMOUNT_HEADER.test(header) || NOT_AMOUNT.test(header) || PERIOD_HEADER.test(header))
      continue;
    const column = amountColumn(table.rows.map(({ cells }) => cells[index] ?? ""));
    if (column) columns.set(index, column);
  }
  return columns;
}

function mixedUnits(table: Table) {
  return table.headers.some((header, index) => {
    if (!UNIT_HEADER.test(header.trim())) return false;
    const units = new Set(
      table.rows.map(({ cells }) => (cells[index] ?? "").trim()).filter(Boolean),
    );
    return units.size > 1;
  });
}
