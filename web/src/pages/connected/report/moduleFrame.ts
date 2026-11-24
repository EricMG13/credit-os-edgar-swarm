import {
  classifySections,
  containsReference,
  missingPassages,
  passages,
  readParagraph,
  readerText,
  type Block,
  type OutputEntry,
  type Section,
  type Table,
} from "../publishedReport";
import { drawingLines, findingBlocks } from "../ReportContent";
import { namedTable } from "../reportView";
import { typedModuleTable } from "./ModuleTable";
import { heldInEvidence, readableTitle } from "./moduleRecords";

export type TextBlock = Extract<Block, { type: "text" }>;

export const KEY_FINDINGS = "Key findings";
export const CONTRARY = "Contrary evidence and what would change the view";
const LIMITATIONS = "Limitations";

/** What a module's visuals are, so a lead can say which of them it draws itself. */
export type FigureKind = "figures" | "events" | "maps";

/** The bottom line as the module wrote it: the passage's first paragraph, else its summary. */
export type BottomLineSource =
  | { kind: "passage"; block: TextBlock; rest: TextBlock[] }
  | { kind: "summary"; text: string; rest: string; line: number }
  | null;

/** A reader section drawn on the page: its prose, and the typed tables drawn with it. */
export interface ProseSection {
  section: Section;
  title: string;
  paragraphs: TextBlock[];
  typed: Table[];
  words: number;
}

/** A visual the module states it could not draw, written as prose under its drawing heading. */
export interface DrawingGap {
  title: string;
  kind: FigureKind;
  blocks: TextBlock[];
  line: number;
}

const textBlocks = (section: Section | undefined) =>
  (section?.blocks ?? []).filter((block): block is TextBlock => block.type === "text");

/** A paragraph the reader can read: not only a Basis line, which belongs in the trace. */
export const readable = (block: TextBlock) => readParagraph(block.text).body !== "";

function bottomLineOf(entry: OutputEntry, passage: Section | undefined): BottomLineSource {
  const [first, ...rest] = textBlocks(passage).filter(readable);
  if (first) return { kind: "passage", block: first, rest };
  const summary = entry.output.summary;
  if (!summary || containsReference(summary.bottomLine)) return null;
  const limitation = containsReference(summary.limitation) ? "" : summary.limitation;
  return { kind: "summary", text: summary.bottomLine, rest: limitation, line: summary.line };
}

const wordCount = (paragraphs: TextBlock[]) =>
  paragraphs.reduce(
    (total, block) => total + readParagraph(block.text).body.split(/\s+/).length,
    0,
  );

const typedAt = (entry: OutputEntry, section: Section, table: Table) =>
  typedModuleTable(entry.output.module, section.heading, table, () => "") !== null;

/**
 * A finding section the page draws as prose: one whose tables are all typed and drawn with it.
 * A section holding a plain table goes, prose and all, to the records region, where its prose
 * sits with its table. Registers draw only their typed tables; entity keys and the like none.
 */
function proseSection(
  entry: OutputEntry,
  section: Section,
  role: string,
  typedTables: boolean,
): ProseSection | null {
  if (heldInEvidence(section.heading, role)) return null;
  // The handoff's own section: the finding blocks leave out a coded section's plain tables.
  const written = entry.sections.find(({ line }) => line === section.line) ?? section;
  const tables = written.blocks.filter((block): block is Table => block.type === "table");
  const typed = typedTables ? tables.filter((table) => typedAt(entry, section, table)) : [];
  if (typed.length !== tables.length) return null;
  const paragraphs = role === "registers" ? [] : textBlocks(section).filter(readable);
  if (!paragraphs.length && !typed.length) return null;
  const title = readableTitle(section.heading, "Untitled section");
  return { section, title, paragraphs, typed, words: wordCount(paragraphs) };
}

const KIND_OF_DRAWING: [RegExp, FigureKind][] = [
  [/^Map: /, "maps"],
  [/^Events: /, "events"],
];

/** Drawing sections with prose and no table: the module's words for a visual it did not draw. */
function drawingGaps(entry: OutputEntry): DrawingGap[] {
  return classifySections(entry.sections).flatMap(({ section, role }) => {
    if (role !== "drawing" || section.blocks.some((block) => block.type === "table")) return [];
    const blocks = textBlocks(section).filter(readable);
    if (!blocks.length) return [];
    const kind = KIND_OF_DRAWING.find(([prefix]) => prefix.test(section.heading))?.[1] ?? "figures";
    return [
      {
        title: readableTitle(section.heading, "Untitled figure"),
        kind,
        blocks,
        line: section.line,
      },
    ];
  });
}

/** A cell as written, for a basis line; nothing for one that cites a source or states a gap. */
const plainCell = (text: string | undefined) => {
  const cell = text?.trim() ?? "";
  return cell && !containsReference(cell) && !/^(?:not |withheld)/i.test(cell)
    ? readerText(cell)
    : "";
};

function entityBasis(entry: OutputEntry) {
  const key = entry.sections.find((section) => /entity period key/i.test(section.heading));
  const table = key?.blocks.find((block): block is Table => block.type === "table");
  const row = table?.rows[0]?.cells;
  if (!table || !row) return "";
  const at = (name: string) =>
    plainCell(row[table.headers.findIndex((header) => header.trim() === name)]);
  const yearEnd = at("Fiscal Year End");
  return [
    yearEnd && `Fiscal year end ${yearEnd}`,
    [at("Reporting Currency"), at("Reporting Unit")].filter(Boolean).join(" "),
    at("Accounting Basis"),
    at("Available Periods"),
  ]
    .filter(Boolean)
    .join(" · ");
}

/**
 * The basis of the module's figures as its handoff states it: the reporting entity's row of the
 * entity period key (year end, currency and unit, accounting basis, periods), else the periods of
 * its Period table. Nothing is inferred.
 */
function basisOf(entry: OutputEntry) {
  const stated = entityBasis(entry);
  if (stated) return stated;
  const periods = namedTable(entry, "Period table", ["Period", "Start", "End"]);
  const names = periods?.rows.map(({ cells }) => plainCell(cells[0])).filter(Boolean) ?? [];
  return names.length ? `Periods ${names.join(", ")}` : "";
}

/**
 * The parts of a module page, from its handoff: the bottom line, the three prose passages, the
 * other reader sections drawn as prose, the visuals it stated it could not draw, the passages it
 * owes but did not write, and the basis of its figures. `typedTables` is false when the module's
 * lead draws its figures, so its typed tables are left to the records region.
 */
export function moduleFrame(
  entry: OutputEntry,
  {
    figureTableLines = [],
    typedTables = true,
  }: { figureTableLines?: readonly number[]; typedTables?: boolean } = {},
) {
  const slots = passages(entry.sections);
  const slotLines = new Set(slots.map(({ line }) => line));
  const roles = new Map(
    classifySections(entry.sections).map(({ section, role }) => [section.line, role]),
  );
  const found = findingBlocks(entry.sections, entry, figureTableLines).filter(
    (section) => roles.get(section.line) !== "drawing",
  );
  // A passage with nothing to read (no paragraph but its Basis, no table) is drawn as its gap.
  const passage = (name: string) =>
    found.find(
      (section) =>
        section.heading === name &&
        slotLines.has(section.line) &&
        section.blocks.some(
          (block) => block.type === "table" || (block.type === "text" && readable(block)),
        ),
    );
  const named = ["Bottom line", KEY_FINDINGS, CONTRARY, LIMITATIONS].flatMap(
    (name) => passage(name) ?? [],
  );
  // Every passage slot is drawn as its passage or its gap; none is drawn a second time.
  const prose = found
    .filter((section) => !slotLines.has(section.line))
    .flatMap(
      (section) => proseSection(entry, section, roles.get(section.line) ?? "", typedTables) ?? [],
    );
  const charts = drawingLines(entry, figureTableLines);
  const charted = slots
    .filter((section) => section.blocks.some((block) => charts.has(block.line)))
    .map((section) => section.heading);
  const bottomLine = bottomLineOf(entry, passage("Bottom line"));
  // A Bottom line passage holding only a table is not a bottom line: the table is in the records.
  const drawn = [...named.map(({ heading }) => heading), ...charted].filter(
    (heading) => heading !== "Bottom line",
  );
  return {
    bottomLine,
    keyFindings: passage(KEY_FINDINGS),
    contrary: passage(CONTRARY),
    limitations: passage(LIMITATIONS),
    prose,
    drawingGaps: drawingGaps(entry),
    basis: basisOf(entry),
    missing: missingPassages(entry, bottomLine ? [...drawn, "Bottom line"] : drawn),
  };
}
