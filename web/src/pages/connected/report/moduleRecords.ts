import {
  classifySections,
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
const EVIDENCE_ONLY = /source register|entity|definition conflict/i;
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
    if (!own.length) continue;
    const drawn = registerBlocks(section, entry);
    const title = drawingTitle(section.heading);
    let count = 0;
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
      count += 1;
      const named = titles.get(table.line) ?? title;
      tables.push({
        kind,
        title: count > 1 && !titles.has(table.line) ? `${named} · table ${String(count)}` : named,
        section,
        table,
        notes: sectionNotes(section),
      });
    }
  }
  return { tables, evidence };
}

const GAP_CELL = /^(?:not\b|n\/?a\b|withheld\b|none\b|—$|-$)/i;
const NUMBER = /^(\()?(-)?(\d{1,3}(?:,\d{3})+|\d+)(\.\d+)?(\))?$/;
const AMOUNT_HEADER =
  /principal|amount|debt|cash|balance|commitment|drawn|maturing|liquidity|outstanding|value|revenue|sales|ebitda|flow|capex|proceeds/i;
const NOT_AMOUNT =
  /\/|ratio|bps|%|rate|spread|margin|coupon|floor|multiple|cover|leverage|date|year|period|unit|basis|source|tier|status/i;
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
  if (!values.length || cells.some((cell) => amount(cell) === null && !isGap(cell))) return null;
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
  for (const index of displayColumns(table.headers, false, table.rows)) {
    const header = table.headers[index] ?? "";
    if (!AMOUNT_HEADER.test(header) || NOT_AMOUNT.test(header) || PERIOD_HEADER.test(header))
      continue;
    const column = amountColumn(table.rows.map(({ cells }) => cells[index] ?? ""));
    if (column) columns.set(index, column);
  }
  return columns;
}
