import type { ReactNode } from "react";
import type { Metric } from "@/pages/library/slice";
import { type OutputEntry, type Snapshot } from "../publishedReport";
import { MetricGrid } from "./MetricGrid";
import { traceForConfidence } from "../ReportContent";

/** The published confidence score as one metric tile; nothing for a run that predates the score. */
export function ModuleConfidence({
  snapshot,
  run,
  entry,
  entryIndex,
}: {
  snapshot: Snapshot;
  run: { folder: string };
  entry: OutputEntry;
  entryIndex: number;
}): ReactNode {
  const { confidence } = entry.output;
  if (!confidence) return null;
  const metric: Metric =
    "missing" in confidence
      ? {
          label: "Confidence score",
          value: { kind: "gap", reason: confidence.missing },
          note: "",
          trace: null,
        }
      : {
          label: "Confidence score",
          value: { kind: "value", text: String(confidence.value), at: null },
          note: confidence.band,
          trace: null,
        };
  return (
    <MetricGrid
      records={[{ metric, trace: traceForConfidence(snapshot, entry) }]}
      entry={entry}
      entryIndex={entryIndex}
      snapshot={snapshot}
      folder={run.folder}
    />
  );
}
