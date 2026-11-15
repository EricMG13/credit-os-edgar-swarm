import { ClockRewind } from "@untitledui/icons";
import { EmptyState } from "@/components/application/empty-state/empty-state";
import { Button } from "@/components/base/buttons/button";
import { ChangeCard } from "@/pages/library/parts/ChangeCard";
import { RunContext } from "@/pages/library/parts/RunContext";
import type { Cell } from "@/pages/library/slice";
import { card, heading } from "../layout";
import {
  comparisonRows,
  containsReference,
  type OutputEntry,
  type PublishedRun,
  type Snapshot,
} from "../publishedReport";
import { PublishedTable, ReportFindings } from "../ReportContent";

const cell = (value: string): Cell =>
  value === "Not stated" ? null : { kind: "value", at: null, text: value };

export function ComparisonTable({ rows }: { rows: string[][] }) {
  return (
    <PublishedTable
      evidence
      table={{
        type: "table",
        line: 0,
        headers: [
          "Measure",
          "Earlier",
          "Current",
          "Difference",
          "Comparability",
          "Analysis change",
        ],
        rows: rows.map((cells, line) => ({ cells, line })),
      }}
    />
  );
}

export function Changes({
  snapshot,
  run,
  entries,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  entries: OutputEntry[];
}) {
  const change = run.changes;
  const entryIndex = entries.findIndex((entry) => entry.output.module === "CP-8" && entry.selected);
  const entry = entries[entryIndex];
  const rows = change && comparisonRows(change);
  if (change?.first_run === true && !change.pack && !change.problem && !change.note)
    return (
      <section className={`${card} min-h-76 justify-center py-14`}>
        <EmptyState>
          <EmptyState.Header>
            <EmptyState.FeaturedIcon icon={ClockRewind} />
          </EmptyState.Header>
          <EmptyState.Content>
            <EmptyState.Title as="h2">No earlier run to compare.</EmptyState.Title>
            <EmptyState.Description>
              This is the first listed run for this issuer on this pathway.
            </EmptyState.Description>
          </EmptyState.Content>
          <EmptyState.Footer>
            <Button href="#overview" color="secondary">
              Open the Overview
            </Button>
          </EmptyState.Footer>
        </EmptyState>
      </section>
    );
  return (
    <>
      <section className={card}>
        <h2 className={heading}>Changes since the last run</h2>
        {change?.problem ? (
          <p>The comparison could not be read.</p>
        ) : !change?.pack ? (
          <p>
            {change?.note && !containsReference(change.note)
              ? change.note
              : "No comparison was recorded for this run."}
          </p>
        ) : null}
        {rows && rows.length > 0 && (
          <RunContext.Provider value={{ traces: {}, open: () => undefined }}>
            <ul className="grid gap-4 lg:grid-cols-3">
              {rows.map(
                (
                  [label = "", before = "", after = "", delta, reason = "", analysis = ""],
                  index,
                ) => (
                  <ChangeCard
                    key={index}
                    change={{
                      measure: label,
                      kind: delta && delta !== "—" ? "Comparable" : "Not assessable",
                      current: cell(after),
                      from: cell(before),
                      change: delta && delta !== "—" ? delta : null,
                      direction: "none",
                      cause: containsReference(reason) ? "See comparison evidence." : reason,
                      effect: containsReference(analysis) ? "" : analysis,
                      trace: null,
                    }}
                  />
                ),
              )}
            </ul>
            <details>
              <summary className="cursor-pointer font-medium">Comparison table</summary>
              <ComparisonTable rows={rows} />
            </details>
          </RunContext.Provider>
        )}
        {change?.pack && (
          <a className="text-action underline" href="#evidence/trace">
            Review comparison evidence
          </a>
        )}
      </section>
      {entry && (
        <ReportFindings snapshot={snapshot} run={run} entry={entry} entryIndex={entryIndex} />
      )}
    </>
  );
}
