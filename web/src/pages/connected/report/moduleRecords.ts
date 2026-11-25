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
  return heldInEvidence(heading, role) ? "evidence" : "statements";
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
  return { tables: distinctTitles(tables, " · table "), evidence: distinctTitles(evidence, " · ") };
}

/** The handoff's register codes at the start of a heading (T4.18, T2B.7, T2DS.6, TL10.2, P3), with
 * the dash that follows. A heading that only starts with a letter and digits ("Q4 2025") keeps them. */
const REGISTER_CODE =
  /^(?:(?:TL|T|P)[A-Z0-9]{0,5}\.\d+(?:\.\d+)?\s+(?:[-–—:]\s*)?|(?:TL|T|P)[A-Z0-9]{0,5}\s*[-–—:]\s+)/;
const PARENTHESISED = /\s*\([^()]*\)/g;
const CLAUSE = /\s+(?:per|from|in|see)\s|\s+source:\s*|\s+[\u2013\u2014]\s/gi;
const LOOSE_END = /[\s,;:\u2013\u2014-]+$/;

/** A snake_case table id (transaction_summary) as the words it stands for, the first capitalised. */
function wordsOfIds(title: string) {
  const words = title.replace(/\b[a-z][a-z0-9]*(?:_[a-z0-9]+)+\b/g, (id) =>
    id.replaceAll("_", " "),
  );
  return words === title ? title : words.charAt(0).toUpperCase() + words.slice(1);
}

/** The title without its cited source: a parenthesised reference, then a trailing clause that
 * cites one, then any word that is one. */
function withoutReference(title: string) {
  if (!containsReference(title)) return title;
  const bare = title.replace(PARENTHESISED, (group) => (containsReference(group) ? "" : group));
  const cuts = [...bare.matchAll(CLAUSE)].filter(({ index }) =>
    containsReference(bare.slice(index)),
  );
  const cut = cuts.at(-1);
  const head = cut === undefined ? bare : bare.slice(0, cut.index);
  if (!containsReference(head)) return head.replace(LOOSE_END, "");
  const words = head.split(/\s+/).filter((word) => !containsReference(word));
  return words.join(" ").replace(LOOSE_END, "");
}

/** A heading as the reader sees it: no drawing prefix or register code, module names for codes,
 * and the title's own words without the source it cites, which belongs in Evidence. */
export function readableTitle(heading: string, untitled = "Untitled table") {
  const coded = wordsOfIds(plainText(drawingTitle(heading)).replace(REGISTER_CODE, ""));
  // A leading name such as "P3 programme" reads to the page-citation test as "p 3": a name, not
  // a source, when the rest of the title cites none.
  const name = LEADING_NAME.exec(coded)?.[0] ?? "";
  const rest = coded.slice(name.length);
  const title = readerText(name + withoutReference(rest)).trim();
  return title && !containsReference(title.slice(name.length)) ? title : untitled;
}

const LEADING_NAME = /^[A-Z]{1,3}\d+[A-Z]?\s+(?=\S)/;

/** Whether a section of this heading and role is listed under "Held in Evidence" by its heading:
 * a source register, entity keys or definition conflicts never reach the module page. */
export function heldInEvidence(heading: string, role: string) {
  return ["finding", "passage", "registers"].includes(role) && EVIDENCE_ONLY.test(heading);
}

/** Tables that share a title, anywhere in the handoff, are told apart by their place among them. */
function distinctTitles<Item extends { title: string }>(items: Item[], joiner: string) {
  const seen = new Map<string, number>();
  return items.map((item) => {
    const count = (seen.get(item.title) ?? 0) + 1;
    seen.set(item.title, count);
    return count > 1 ? { ...item, title: `${item.title}${joiner}${String(count)}` } : item;
  });
}

const GAP_CELL = /^(?:not\b|n\/?a\b|withheld\b|none\b|—$|-$)/i;
const NUMBER = /^(\()?(-)?(\d{1,3}(?:,\d{3})+|\d+)(\.\d+)?(\))?$/;
const AMOUNT_HEADER =
  /principal|amount|debt|cash|balance|commitment|drawn|maturing|liquidity|outstanding|(?:carrying|market|face|fair|book) value|revenue|sales|ebitda|flow|capex|proceeds/i;
const NOT_AMOUNT =
  /\/|ratio|bps|%|rate|spread|margin|coupon|floor|multiple|cover|leverage|date|year|period|unit|basis|source|tier|status|growth|cagr|change|conversion|days|yield|\(x\)|\bto (?:ebitda|revenue|sales|equity|capital)\b/i;
/** A column of places, tests or tallies: its figures are no amounts ("Debt maturing" is one). */
const NOT_AMOUNT_WORD = /\b(?:rank|test|maturity|order|number|count|score)|#/i;
/** A column that states each row's currency or unit: figures in two of them share no scale. */
const UNIT_HEADER = /^(?:currency|unit|reporting unit|units?|ccy)$/i;
const PERIOD_HEADER = /^(?:FY|H[12] |Q[1-4] |LTM |20\d\d)/;
/** Rows that are different measures, a bridge, or totals: their figures are not peers. */
const MEASURES_HEADER = /^(?:item|items|metric|metrics|measure|line item|kpi|indicator)s?$/i;
const BRIDGE = /bridge|waterfall|walk|reconciliation/i;
const BRIDGE_ROW = /^(?:opening|closing|starting|ending)\b/i;
/** A row's own label, whole, that names a total; never a word inside another name ("Power & Control"). */
const TOTAL_LABEL =
  /^(?:total|subtotal|sum|group|consolidated|aggregate|combined)$|^(?:total|net|less)\s|\s(?:sub)?total$/i;
/** The handoff's own mark that a row is no peer of the others. */
const MARKED = /not additive|\baggregate control\b/i;

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
const isYear = (value: number) => Number.isInteger(value) && value >= 1900 && value <= 2100;

/** How long a cell's bar is against its column: null for a gap or a row that is no peer (a
 * total, subtotal, aggregate or control), which draws no bar. */
export interface AmountColumn {
  share: (cell: string, line?: number) => number | null;
  negative: (cell: string) => boolean;
}

/** The column's one scale, its largest peer figure; null where it draws no bar. */
function largestOf(cells: string[], peers: string[]) {
  const values = peers.flatMap((cell) => {
    const value = amount(cell);
    return value === null ? [] : [value];
  });
  // One figure has nothing to be compared with: it draws no bar; nor do years that look like amounts.
  if (values.length < 2 || cells.some((cell) => amount(cell) === null && !isGap(cell))) return null;
  if (values.every(isYear) || holdsUnlabelledTotal(values)) return null;
  const largest = Math.max(...values.map(Math.abs));
  return largest === 0 ? null : largest;
}

const label = (cell: string) =>
  cell
    .trim()
    .replace(/^\*\*(.*)\*\*$/, "$1")
    .replace(/[:.]$/, "")
    .trim();
const bold = (cell: string) => /^\*\*.+\*\*$/.test(cell.trim());

/** The rows that are no peers of the others: a first cell that is, whole, a total word, a bold
 * row, or a row the module marks as not additive or an aggregate control. Never guessed from a
 * word inside a name. */
function notPeers(table: Table, columns: number[]) {
  const first = columns[0] ?? 0;
  return new Map(
    table.rows
      .filter(({ cells }) => {
        const name = cells[first] ?? "";
        return (
          TOTAL_LABEL.test(label(name)) ||
          bold(name) ||
          columns.some((column) => {
            const cell = cells[column] ?? "";
            return !isGap(cell) && MARKED.test(cell);
          })
        );
      })
      .map(({ line, cells }) => [line, label(cells[first] ?? "")]),
  );
}

/** Whether one row of the column is the sum of the others: an unlabelled total, so no bars. */
function holdsUnlabelledTotal(values: number[]) {
  if (values.length < 3) return false;
  const sum = values.reduce((total, value) => total + value, 0);
  return values.some(
    (value) => Math.abs(value - (sum - value)) <= Math.max(1, Math.abs(value) / 1000),
  );
}

/** A bridge or a list of different measures: its figures share no scale, whatever the header. */
function unlikeRows(table: Table, columns: number[], title: string) {
  const first = columns[0] ?? 0;
  const labels = table.rows.map(({ cells }) => cells[first] ?? "");
  const header = (table.headers[first] ?? "").trim();
  return (
    MEASURES_HEADER.test(header) ||
    BRIDGE.test(title) ||
    [header, ...labels].some((label) => BRIDGE.test(label)) ||
    labels.some((label) => BRIDGE_ROW.test(label.trim()))
  );
}

const amountHeader = (header: string) =>
  AMOUNT_HEADER.test(header) &&
  !NOT_AMOUNT.test(header) &&
  !NOT_AMOUNT_WORD.test(header) &&
  !PERIOD_HEADER.test(header);

/** The table's amount columns by index: a header that names an amount, every cell a number or a
 * gap, in a table whose rows are like items; totals and aggregate rows set no scale and draw no bar. */
export function amountColumns(table: Table, title = "") {
  const columns = new Map<number, AmountColumn>();
  const shown = displayColumns(table.headers, false, table.rows);
  if (mixedUnits(table) || unlikeRows(table, shown, title)) return columns;
  const skipped = notPeers(table, shown);
  const peers = table.rows.filter(({ line }) => !skipped.has(line));
  for (const index of shown) {
    if (!amountHeader(table.headers[index] ?? "")) continue;
    const cellsOf = (rows: Table["rows"]) => rows.map(({ cells }) => cells[index] ?? "");
    const largest = largestOf(cellsOf(table.rows), cellsOf(peers));
    if (largest === null) continue;
    columns.set(index, {
      share: (cell, line) => {
        const value = line !== undefined && skipped.has(line) ? null : amount(cell);
        return value === null ? null : Math.abs(value) / largest;
      },
      negative: (cell) => (amount(cell) ?? 0) < 0,
    });
  }
  return columns;
}

const SCALES: [RegExp, string][] = [
  [/\b(?:thousands?|k)\b/i, "thousand"],
  [/\b(?:millions?|mn|mm|m)\b/i, "million"],
  [/\b(?:billions?|bn|b)\b/i, "billion"],
];

/** A unit cell by its currency where it names one (US$ and $ are USD), else its words. */
function unitKey(cell: string) {
  const code = /\b[A-Z]{3}\b/.exec(cell)?.[0] ?? (/US\$|\$/.test(cell) ? "USD" : null);
  return code ?? cell.trim().toLowerCase();
}

const scaleOf = (cell: string) => SCALES.find(([pattern]) => pattern.test(cell))?.[1];

function mixedUnits(table: Table) {
  return table.headers.some((header, index) => {
    if (!UNIT_HEADER.test(header.trim())) return false;
    const cells = table.rows.map(({ cells: row }) => (row[index] ?? "").trim()).filter(Boolean);
    const scales = new Set(cells.flatMap((cell) => scaleOf(cell) ?? []));
    return new Set(cells.map(unitKey)).size > 1 || scales.size > 1;
  });
}

/** A number as a table writes one: commas, a sign, parentheses, and a trailing %, x or bps. */
const NUMERAL = /^[+\-−]?\(?[+\-−]?(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?\)?\s?(?:%|x|bps)?$/i;

/** Columns whose every cell that is not blank or a stated gap is a number: drawn as numerals. */
export function numericColumns(table: Table) {
  const columns = new Set<number>();
  table.headers.forEach((_, index) => {
    const cells = table.rows.map(({ cells: row }) => (row[index] ?? "").trim());
    const figures = cells.filter((cell) => !isGap(cell));
    if (figures.length && figures.every((cell) => NUMERAL.test(cell))) columns.add(index);
  });
  return columns;
}

/** A unit column that states one value in every row: the page states it once, above the table. */
export function unitColumn(table: Table) {
  for (const [column, text] of table.headers.entries()) {
    const header = text.trim();
    if (!UNIT_HEADER.test(header) || !table.rows.length) continue;
    const values = new Set(table.rows.map(({ cells }) => (cells[column] ?? "").trim()));
    const [value = ""] = values;
    if (values.size === 1 && value) return { column, header, value };
  }
  return null;
}

/** The columns a wide register shows first: rank, principal, coupon, maturity, in that order. */
const COMPACT = [
  [/rank/i, /security/i],
  [/principal/i, /amount/i, /carrying value/i],
  [/coupon/i, /margin/i, /rate(?!\s*type)/i],
  [/maturity/i],
];
const COMPACT_ABOVE = 7;

/** A register wider than seven columns opens on its first column and the mockup's few, or else its
 * first six; null when every column fits. */
export function compactColumns(table: Table, shown: readonly number[]) {
  if (shown.length <= COMPACT_ABOVE) return null;
  const [first, ...rest] = shown;
  if (first === undefined) return null;
  const chosen: number[] = [];
  for (const group of COMPACT) {
    const pick = group
      .map((pattern) => rest.find((column) => pattern.test(table.headers[column] ?? "")))
      .find((column) => column !== undefined && !chosen.includes(column));
    if (pick !== undefined) chosen.push(pick);
  }
  return chosen.length >= 2 ? [first, ...chosen] : shown.slice(0, 6);
}

const STATED_GAP =
  /^(not (?:supplied|stated|calculable|modell?ed|applicable|established|available|disclosed|extracted|provided|reported)|withheld)(?=$|[\s:;,.])/i;

/** The leading words of a stated gap ("Not supplied: …" → "Not supplied"), or null. */
export function statedGap(cell: string) {
  return STATED_GAP.exec(cell.trim())?.[1] ?? null;
}

/** The labels of the rows a table's bars leave out, for the note under it; none without bars. */
export function barExclusions(table: Table, title = "") {
  if (!amountColumns(table, title).size) return [];
  return [...notPeers(table, displayColumns(table.headers, false, table.rows)).values()];
}
