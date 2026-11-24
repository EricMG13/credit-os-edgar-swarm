import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { GapPanel } from "@/components/gap/GapPanel";
import { StatusBadge } from "@/components/status/StatusBadge";
import { card, heading } from "../layout";
import { containsReference, evidencePath, readerText, type PublishedRun } from "../publishedReport";
import { richParts } from "../richText";
import type { moduleBottomLines, runLimitations } from "../reportView";
import { PublishedSource } from "./PublishedTrace";
import { byStage } from "./stages";

type ModuleRow = ReturnType<typeof moduleBottomLines>[number];

function ModuleNode({ run, row }: { run: PublishedRun; row: ModuleRow }) {
  const source = evidencePath(run.folder, row.entry, row.line ?? undefined);
  return (
    <li className="grid content-start gap-2 rounded-ds-sm border border-border-hairline bg-surface-card p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Button color="link-gray" size="sm" href={`#modules/${row.id}`} iconTrailing={ArrowRight}>
          {row.name}
        </Button>
        <StatusBadge set="Module state" state={row.state} />
      </div>
      <div className="flex items-start justify-between gap-2">
        {row.text !== null ? (
          <p className="reading-copy text-small text-text-secondary">{row.text}</p>
        ) : row.referenced ? (
          <Button color="link-gray" size="sm" href={source}>
            Read this bottom line in Evidence
          </Button>
        ) : (
          <GapPanel reason="This module's handoff has no bottom line; its handoff is in Evidence." />
        )}
        <PublishedSource href={source} name={row.name} linkLabel={`Source for ${row.name}`}>
          View source
        </PublishedSource>
      </div>
    </li>
  );
}

/** The run as a pipeline: stages down a line, each stage's modules beside it with their bottom lines. */
export function ModuleBottomLines({
  run,
  rows,
}: {
  run: PublishedRun;
  rows: ReturnType<typeof moduleBottomLines>;
}) {
  if (!rows.length) return null;
  return (
    <section aria-label="Bottom line by module" className={`${card} grid gap-4`}>
      <h2 className={heading}>Bottom line by module</h2>
      <ol className="grid">
        {byStage(rows).map((stage) => (
          <li
            key={stage.name}
            className="relative grid gap-3 pb-5 pl-6 last:pb-0 lg:grid-cols-[11rem_minmax(0,1fr)]"
          >
            <span
              aria-hidden="true"
              className="absolute top-1.5 bottom-0 left-[5px] border-l border-connector in-[li:last-child]:hidden"
            />
            <span
              aria-hidden="true"
              className="absolute top-1.5 left-0 size-[11px] rounded-ds-full border-2 border-action bg-surface-card"
            />
            <h3 className="text-small font-semibold text-text-primary">
              {stage.name}
              <span className="ml-2 font-mono text-caption font-normal text-text-tertiary tabular-nums">
                {stage.rows.length}
              </span>
            </h3>
            <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {stage.rows.map((row) => (
                <ModuleNode key={row.id} run={run} row={row} />
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function RunLimitations({
  run,
  rows,
}: {
  run: PublishedRun;
  rows: ReturnType<typeof runLimitations>;
}) {
  const groups = new Map<string, typeof rows>();
  for (const row of rows) {
    const group = groups.get(row.name);
    if (group) group.push(row);
    else groups.set(row.name, [row]);
  }
  return (
    <section aria-label="Limitations" className={`${card} grid gap-3`}>
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="gap-hatch size-8 flex-none rounded-ds-sm border border-dashed border-border-gap"
        />
        <h2 id="overview-limitations" tabIndex={-1} className={heading}>
          Limitations
        </h2>
      </div>
      {rows.length === 0 ? (
        <p className="text-body text-text-secondary">
          No limitation is listed on this page for this run. Each module's page shows what it
          recorded.
        </p>
      ) : (
        [...groups].map(([name, limitations]) => (
          <details key={name} className="border-t border-border-hairline pt-3">
            <summary className="cursor-pointer font-semibold">
              {name} ({limitations.length})
            </summary>
            <ul className="mt-3 grid gap-3">
              {limitations.map((row) => {
                const href = evidencePath(run.folder, row.entry, row.line);
                return (
                  <li
                    key={`${row.entry.output.id}:${String(row.line)}`}
                    className="grid gap-1 border-t border-border-hairline pt-3 first:border-t-0 first:pt-0"
                  >
                    <p className="reading-copy text-body text-text-secondary">
                      {containsReference(row.text) ? (
                        <Button color="link-gray" size="sm" href={href}>
                          Read this limitation in Evidence
                        </Button>
                      ) : (
                        richParts(row.text, readerText)
                      )}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-small text-text-tertiary">
                      <span>{row.name}</span>
                      <PublishedSource
                        href={href}
                        name={`this limitation from ${row.name}`}
                        linkLabel={`Source for this limitation from ${row.name}`}
                      >
                        View source
                      </PublishedSource>
                    </div>
                  </li>
                );
              })}
            </ul>
          </details>
        ))
      )}
    </section>
  );
}

/** Beside the bottom line: what ran, how much the run could not do, and the next date. Counts only. */
export function RunGlance({
  states,
  limitations,
  nextDate,
}: {
  states: readonly ModuleRow["state"][];
  limitations: number;
  nextDate: { date: string; label: string } | null;
}) {
  const counts = new Map<ModuleRow["state"], number>();
  for (const state of states) counts.set(state, (counts.get(state) ?? 0) + 1);
  const row = "flex items-center justify-between gap-3 border-t border-border-hairline pt-3";
  const figure = "font-mono text-h4 font-medium text-text-primary tabular-nums";
  return (
    <section
      aria-label="This run"
      className="flex h-full flex-col gap-3 rounded-ds-lg border border-border-subtle bg-surface-card p-5 sm:p-6"
    >
      <h2 className="text-caption text-text-tertiary">This run</h2>
      <p className="flex items-baseline gap-2">
        <span className="font-mono text-metric text-text-primary tabular-nums">
          {states.length}
        </span>
        <span className="text-small text-text-secondary">
          {states.length === 1 ? "module" : "modules"}
        </span>
      </p>
      <ul className="grid gap-3">
        {[...counts].map(([state, count]) => (
          <li key={state} className={row}>
            <StatusBadge set="Module state" state={state} />
            <span className={figure}>{count}</span>
          </li>
        ))}
        <li className={row}>
          <Button color="link-gray" size="sm" href="#overview/limitations">
            Limitations recorded
          </Button>
          <span className={figure}>{limitations}</span>
        </li>
        {nextDate && (
          <li className={row}>
            <Button color="link-gray" size="sm" href="#overview/dates">
              Next date: {nextDate.label}
            </Button>
            <span className="font-mono text-small text-text-primary tabular-nums">
              {nextDate.date}
            </span>
          </li>
        )}
      </ul>
    </section>
  );
}
