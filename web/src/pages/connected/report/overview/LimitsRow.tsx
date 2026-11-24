import { SlashCircle01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import {
  containsReference,
  evidencePath,
  readerText,
  type PublishedRun,
  type Snapshot,
} from "../../publishedReport";
import { moduleBottomLines, moduleState, runLimitations, type ReportView } from "../../reportView";
import { moduleName } from "../../api";
import { richParts } from "../../richText";
import { PublishedSource } from "../PublishedTrace";
import { Tile } from "./Tile";

type Limitation = ReturnType<typeof runLimitations>[number];
type RowProps = { snapshot: Snapshot; run: PublishedRun; view: ReportView };

const BLOCKED = "Not assessable";
const WELL = "flex min-w-0 flex-col gap-2.5 rounded-ds-sm border border-dashed px-4 pt-3.5 pb-4";
const SIGNAL_HATCH =
  "bg-[repeating-linear-gradient(135deg,var(--color-warning-edge)_0_1px,transparent_1px_9px)]";

/** Modules that could not assess: the lead first, then the others, each with what it wrote. */
function blockedModules(view: ReportView, run: PublishedRun) {
  const lead =
    view.lead && moduleState(view.lead) === BLOCKED
      ? [{ id: view.lead.output.module, name: moduleName(view.lead.output.module), text: null }]
      : [];
  const others = moduleBottomLines(view, run)
    .filter((row) => row.state === BLOCKED)
    .map(({ id, name, text }) => ({ id, name, text }));
  return [...lead, ...others];
}

function grouped(rows: readonly Limitation[]) {
  const groups = new Map<string, Limitation[]>();
  for (const row of rows) groups.set(row.id, [...(groups.get(row.id) ?? []), row]);
  return [...groups.values()];
}

function BlockedWell({ id, name, text }: { id: string; name: string; text: string | null }) {
  return (
    <li className={cx(WELL, SIGNAL_HATCH, "border-warning-mark bg-warning-fill")}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-small font-medium text-text-primary">
          <a href={`#modules/${id}`} className="rounded-ds-xs outline-focus-ring hover:underline">
            {name}
          </a>
        </h3>
        <span className="flex h-[22px] items-center gap-1.5 rounded-ds-xs border border-dashed border-warning-mark bg-surface-card px-2 text-caption text-warning-text">
          <SlashCircle01 aria-hidden="true" className="size-3.5" />
          {BLOCKED}
        </span>
      </div>
      {text !== null && (
        <p className="w-fit rounded-ds-xs bg-surface-card px-1.5 py-0.5 text-small text-text-primary">
          {text}
        </p>
      )}
    </li>
  );
}

function LimitationLine({ run, row }: { run: PublishedRun; row: Limitation }) {
  const href = evidencePath(run.folder, row.entry, row.line);
  return (
    <li className="flex items-start justify-between gap-2">
      <p className="reading-copy rounded-ds-xs bg-surface-card px-1.5 py-0.5 text-small text-text-primary">
        {containsReference(row.text) ? (
          <Button color="link-gray" size="sm" href={href}>
            Read this limitation in Evidence
          </Button>
        ) : (
          richParts(row.text, readerText)
        )}
      </p>
      <PublishedSource
        href={href}
        name={`this limitation from ${row.name}`}
        linkLabel={`Source for this limitation from ${row.name}`}
      >
        View source
      </PublishedSource>
    </li>
  );
}

function LimitationWell({ run, rows }: { run: PublishedRun; rows: Limitation[] }) {
  const first = rows[0];
  if (!first) return null;
  return (
    <li className={cx(WELL, "gap-hatch border-border-gap")}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-small font-medium text-text-primary">
          <a
            href={`#modules/${first.id}`}
            className="rounded-ds-xs outline-focus-ring hover:underline"
          >
            {first.name}
          </a>
        </h3>
        <span className="flex h-[22px] items-center rounded-ds-xs border border-border-container bg-surface-card px-2 font-mono text-caption text-text-secondary tabular-nums">
          {rows.length} recorded
        </span>
      </div>
      <ul className="grid gap-2">
        {rows.map((row) => (
          <LimitationLine key={`${row.entry.output.id}:${String(row.line)}`} run={run} row={row} />
        ))}
      </ul>
    </li>
  );
}

/** What this run could not do, as a first-class tile: one hatched, dashed well per module. */
export function LimitsRow({ run, view }: RowProps) {
  const blocked = blockedModules(view, run);
  const groups = grouped(runLimitations(view, run));
  return (
    <Tile span={12} label="Limitations">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <h2
          id="overview-limitations"
          tabIndex={-1}
          className="flex items-center gap-2.5 text-small font-medium text-text-primary"
        >
          <span
            aria-hidden="true"
            className="gap-hatch size-4 flex-none rounded-ds-xs border border-dashed border-border-gap"
          />
          Limitations
        </h2>
        <p className="text-caption text-text-tertiary">Gaps are drawn as gaps, never as zero</p>
      </div>
      {blocked.length + groups.length === 0 ? (
        <p className="text-body text-text-secondary">
          No limitation is listed on this page for this run. Each module's page shows what it
          recorded.
        </p>
      ) : (
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-3">
          {blocked.map((module) => (
            <BlockedWell key={module.id} {...module} />
          ))}
          {groups.map((rows) => (
            <LimitationWell key={rows[0]?.id} run={run} rows={rows} />
          ))}
        </ul>
      )}
    </Tile>
  );
}
