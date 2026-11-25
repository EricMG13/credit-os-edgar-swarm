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

/**
 * The committee's stance as the page reads it: the stance word, or `unread` when the decision
 * passage states one ("Final Action Bias: …") that is not a word the page knows.
 */
export function committeeStance(entry: OutputEntry | undefined): {
  stance?: string;
  unread: boolean;
} {
  if (!entry) return { unread: false };
  const stance = actionBias(entry);
  if (stance) return { stance, unread: false };
  const stated = entry.sections
    .filter(({ heading }) => heading === "Decision")
    .flatMap(({ blocks }) => blocks)
    .some((block) => block.type === "text" && DECISION_LINE.test(readParagraph(block.text).body));
  return { unread: stated };
}

/** A run's stance as the page reads it; nothing for a run the page holds only as a summary. */
export function runStanceRead(snapshot: Snapshot, key: string, run: PublishedRun) {
  if (run.history || !Object.hasOwn(run, "modules")) return { unread: false };
  return committeeStance(entryOf(buildReportView(snapshot, key, run), "CP-6"));
}

/** The committee's stated action bias in one published run; none for an earlier-format record. */
export function runStance(snapshot: Snapshot, key: string, run: PublishedRun) {
  if (run.history || !Object.hasOwn(run, "modules")) return undefined;
  const committee = entryOf(buildReportView(snapshot, key, run), "CP-6");
  return committee ? actionBias(committee) : undefined;
}

/** The stance of the earlier run this run is compared with, when the comparison stands. */
export function earlierStance(snapshot: Snapshot, run: PublishedRun) {
  const change = comparisonForRun(run, snapshot.workspace.runs);
  const folder = change?.pack && !change.problem ? change.pack.prior?.run : undefined;
  const found = folder
    ? Object.entries(snapshot.workspace.runs).find(([, record]) => record.folder === folder)
    : undefined;
  return found ? runStance(snapshot, found[0], found[1]) : undefined;
}
