import { comparisonForRun, type PublishedRun, type Snapshot } from "../../publishedReport";
import { actionBias, buildReportView } from "../../reportView";
import { entryOf } from "./read";

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
