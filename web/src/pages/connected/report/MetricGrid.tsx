import { useState } from "react";
import { MetricTile } from "@/pages/library/parts/MetricTile";
import { RunContext } from "@/pages/library/parts/RunContext";
import { TraceDrawer } from "@/pages/library/parts/TraceDrawer";
import type { Metric, Trace } from "@/pages/library/slice";
import { traceForLine } from "../ReportContent";
import { evidenceHref, type OutputEntry, type Snapshot } from "../publishedReport";

export function MetricGrid({
  records,
  entry,
  entryIndex,
  snapshot,
  folder,
}: {
  records: { metric: Metric; line?: number; trace?: Trace }[];
  entry?: OutputEntry;
  entryIndex: number;
  snapshot: Snapshot;
  folder: string;
}) {
  const [open, setOpen] = useState<string | null>(null);
  const traces: Record<string, Trace> = {};
  const metrics = records.map(({ metric, line, trace: recordedTrace }) => {
    if (!entry) return metric;
    const trace =
      recordedTrace ??
      (line === undefined ? undefined : traceForLine(snapshot, entry, entryIndex, line));
    if (!trace) return metric;
    const key = trace.evidenceItem;
    traces[key] = trace;
    return { ...metric, trace: key };
  });
  if (!metrics.length) return null;
  const active = open === null ? undefined : traces[open];
  return (
    <RunContext.Provider value={{ traces, open: setOpen }}>
      <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(12rem,1fr))]">
        {metrics.map((metric) => (
          <MetricTile key={metric.label} metric={metric} />
        ))}
      </ul>
      {active && (
        <TraceDrawer
          trace={active}
          evidenceHref={evidenceHref(folder, active.evidenceItem)}
          isOpen
          onClose={() => {
            setOpen(null);
          }}
        />
      )}
    </RunContext.Provider>
  );
}
