import { comparisonForRun, type PublishedRun, type Snapshot } from "../../publishedReport";
import { actionBias, buildReportView } from "../../reportView";
import { entryOf } from "./read";

const VERDICT = /^(better|worse|about the same)(?=[:;,.—–]|\s+since\b)/i;
const WORDS = { better: "Better", worse: "Worse", "about the same": "About the same" } as const;
export type Verdict = (typeof WORDS)[keyof typeof WORDS];

/**
 * The comparison's verdict when the changes module opens its bottom line with it, as its method
 * asks: "Better", "Worse" or "About the same", followed by punctuation or "since". Anything else
 * is no verdict; it is never inferred from the rest of the sentence.
 */
export function changeVerdict(text: string | null | undefined): Verdict | null {
  const match = text ? VERDICT.exec(text.trim()) : null;
  const word = match?.[1]?.toLowerCase() as keyof typeof WORDS | undefined;
  return word ? WORDS[word] : null;
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
