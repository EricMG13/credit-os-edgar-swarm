import {
  classifySections,
  containsReference,
  missingPassages,
  passages,
  readParagraph,
  type Block,
  type OutputEntry,
  type Section,
} from "../publishedReport";
import { drawingLines, findingBlocks } from "../ReportContent";

export type TextBlock = Extract<Block, { type: "text" }>;

export const KEY_FINDINGS = "Key findings";
export const CONTRARY = "Contrary evidence and what would change the view";
const LIMITATIONS = "Limitations";

/** The bottom line as the module wrote it: the passage's first paragraph, else its summary. */
export type BottomLineSource =
  | { kind: "passage"; block: TextBlock; rest: TextBlock[] }
  | { kind: "summary"; text: string; rest: string; line: number }
  | null;

const textBlocks = (section: Section | undefined) =>
  (section?.blocks ?? []).filter((block): block is TextBlock => block.type === "text");

/** A paragraph the reader can read: not only a Basis line, which belongs in the trace. */
const readable = (block: TextBlock) => readParagraph(block.text).body !== "";

function bottomLineOf(entry: OutputEntry, passage: Section | undefined): BottomLineSource {
  const [first, ...rest] = textBlocks(passage).filter(readable);
  if (first) return { kind: "passage", block: first, rest };
  const summary = entry.output.summary;
  if (!summary || containsReference(summary.bottomLine)) return null;
  const limitation = containsReference(summary.limitation) ? "" : summary.limitation;
  return { kind: "summary", text: summary.bottomLine, rest: limitation, line: summary.line };
}

/**
 * The parts of a module page, from its handoff: the bottom line, the three prose passages, the
 * other reader sections the module wrote, and the passages it owes but did not write. Tables of
 * the other sections are left to the records region; `figureTableLines` are tables a figure on
 * the page already draws.
 */
export function moduleFrame(entry: OutputEntry, figureTableLines: readonly number[] = []) {
  const slots = passages(entry.sections);
  const slotLines = new Set(slots.map(({ line }) => line));
  const drawingSections = new Set(
    classifySections(entry.sections)
      .filter(({ role }) => role === "drawing")
      .map(({ section }) => section.line),
  );
  const found = findingBlocks(entry.sections, entry, figureTableLines).filter(
    (section) => !drawingSections.has(section.line),
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
  const others = found.filter((section) => !named.includes(section));
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
    others,
    missing: missingPassages(entry, bottomLine ? [...drawn, "Bottom line"] : drawn),
  };
}
