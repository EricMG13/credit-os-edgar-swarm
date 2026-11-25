import {
  comparisonForRun,
  readParagraph,
  type OutputEntry,
  type PublishedRun,
  type Snapshot,
} from "../../publishedReport";
import { actionBias, buildReportView } from "../../reportView";
import { entryOf } from "./read";

/** What the page says when the decision passage states a stance it cannot read. */
export const UNREAD_STANCE = "This page could not read a stance from the decision";

const DECISION_LINE = /^Final Action Bias:/i;

/** The entry with the bold marks taken out of its Decision paragraphs, so the shared reader sees the words. */
function plainDecision(entry: OutputEntry): OutputEntry {
  const sections = entry.sections.map((section) =>
    section.heading === "Decision"
      ? {
          ...section,
          blocks: section.blocks.map((block) =>
            block.type === "text" ? { ...block, text: block.text.replaceAll("**", "") } : block,
          ),
        }
      : section,
  );
  return { ...entry, sections };
}

/**
 * The committee's stance as the page reads it: the stance word, or `unread` when the decision
 * passage states one ("Final Action Bias: …") that is not a word the page knows.
 */
export function committeeStance(entry: OutputEntry | undefined): {
  stance?: string;
  unread: boolean;
} {
  if (!entry) return { unread: false };
  const plain = plainDecision(entry);
  const stance = actionBias(plain);
  if (stance) return { stance, unread: false };
  const stated = plain.sections
    .filter(({ heading }) => heading === "Decision")
    .flatMap(({ blocks }) => blocks)
    .some((block) => block.type === "text" && DECISION_LINE.test(readParagraph(block.text).body));
  return { unread: stated };
}

/** A run's stance as the page reads it, and whether the page holds the run's handoffs at all. */
export type StanceReading = { stance?: string; unread: boolean; held: boolean };

const NOT_HELD: StanceReading = { unread: false, held: false };

/** A run's stance as the page reads it; not held for a run the page has only as a summary. */
export function runStanceRead(snapshot: Snapshot, key: string, run: PublishedRun): StanceReading {
  if (run.history || !Object.hasOwn(run, "modules")) return NOT_HELD;
  const committee = entryOf(buildReportView(snapshot, key, run), "CP-6");
  return { ...committeeStance(committee), held: true };
}

/**
 * The stance of the earlier run this run is compared with, when the comparison stands: not held
 * when the comparison names a run the page does not hold in full.
 */
export function earlierStance(snapshot: Snapshot, run: PublishedRun): StanceReading | undefined {
  const change = comparisonForRun(run, snapshot.workspace.runs);
  const folder = change?.pack && !change.problem ? change.pack.prior?.run : undefined;
  if (!folder) return undefined;
  const found = Object.entries(snapshot.workspace.runs).find(
    ([, record]) => record.folder === folder,
  );
  return found ? runStanceRead(snapshot, found[0], found[1]) : NOT_HELD;
}
