import { ArrowRight, ClockRewind } from "@untitledui/icons";
import { useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { Segmented } from "@/components/kit/Segmented";
import { changesSentence } from "../api";
import {
  comparisonRows,
  containsReference,
  type MaturityProfile,
  type OutputEntry,
  type PublishedChanges,
  type PublishedRun,
  type Snapshot,
} from "../publishedReport";
import { PublishedTable, ReportFindings } from "../ReportContent";
import { LedgerList } from "./changes/LedgerLists";
import { MaturityPair, usableProfile } from "./changes/MaturityPair";
import { MeasureList } from "./changes/MeasureList";
import { ModuleMatrix } from "./changes/ModuleMatrix";
import { classifyMeasures, ledgerLists, verdictSentence } from "./changes/model";
import { comparisonTrace, maturityTraces } from "./comparisonTrace";
import { Bento, GapNote, Tile } from "./overview/Tile";
import { PublishedSource } from "./PublishedTrace";

export function ComparisonTable({
  rows,
  source,
}: {
  rows: string[][];
  source?: (label: string) => string | undefined;
}) {
  return (
    <PublishedTable
      evidence
      rowSource={
        source &&
        ((_line, label) => {
          const href = source(label);
          return (
            href && (
              <PublishedSource href={href} name={label}>
                Comparison row
              </PublishedSource>
            )
          );
        })
      }
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

/** The fixed sentence for a run with no comparison pack; the service's own reason is drawn only with the evidence. */
function noComparisonSentence(raw: string | null | undefined) {
  const text = (raw ?? "").replace(/^\s*changes:\s*/i, "").trim();
  const form = text.toLowerCase();
  if (form.startsWith("not produced"))
    return "The comparison was planned but not produced for this run.";
  if (form.startsWith("not compared")) return "This run was not compared with an earlier run.";
  if (form.startsWith("first run of this pathway")) {
    const sentence = changesSentence(text);
    if (!containsReference(sentence))
      return sentence.replace(/^./, (c) => c.toUpperCase()).replace(/\.?$/, ".");
  }
  return "No comparison was recorded for this run.";
}

export function ReportChanges({
  snapshot,
  run,
  entries,
  change,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  entries: OutputEntry[];
  change: PublishedChanges | null | undefined;
}) {
  const entryIndex = entries.findIndex((entry) => entry.output.module === "CP-8" && entry.selected);
  const entry = change?.problem ? undefined : entries[entryIndex];
  const trace = comparisonTrace(run.folder, change?.problem ? [] : entries);
  if (change?.first_run === true && !change.pack && !change.problem && !change.note)
    return <FirstRun />;
  const findings = entry && (
    <ReportFindings snapshot={snapshot} run={run} entry={entry} entryIndex={entryIndex} />
  );
  if (change?.problem || !change?.pack)
    return (
      <>
        <h2 className="font-display text-h3 text-text-primary">Changes since the last run</h2>
        <NoComparison change={change} />
        {findings}
      </>
    );
  return (
    <>
      <h2 className="font-display text-h3 text-text-primary">Changes since the last run</h2>
      <Comparison
        snapshot={snapshot}
        run={run}
        entries={entries}
        change={change}
        entry={entry}
        trace={trace}
      />
      {findings}
    </>
  );
}

function ComparedDates({ change }: { change: PublishedChanges }) {
  const { prior, current } = change.pack ?? {};
  if (!prior?.as_of || !current?.as_of) return null;
  return (
    <p className="flex flex-wrap items-center gap-2 text-small text-text-secondary">
      <span className="rounded-ds-xs bg-surface-subtle px-2 py-1">
        Earlier run, as of {prior.as_of}
      </span>
      <ArrowRight aria-hidden="true" className="size-4 text-text-tertiary" />
      <span className="rounded-ds-xs bg-surface-selected px-2 py-1 text-text-link">
        This run, as of {current.as_of}
      </span>
      <span className="rounded-ds-xs border border-dashed border-border-gap px-2 py-1 text-gap-text">
        Stance, earlier → current: not stated
      </span>
    </p>
  );
}

/** Row 1: the verdict in one sentence, in the largest type on the page. */
function Verdict({ change, entry }: { change: PublishedChanges; entry: OutputEntry | undefined }) {
  const sentence = verdictSentence(entry);
  return (
    <Tile
      span={12}
      label="Verdict"
      kicker={
        <span className="flex items-center gap-2">
          <ClockRewind aria-hidden="true" className="size-4" />
          Since the earlier run
        </span>
      }
    >
      {sentence ? (
        <p className="reading-copy font-display text-h1 text-balance text-text-primary">
          {sentence}
        </p>
      ) : (
        <GapNote>The comparison does not state a verdict in a sentence.</GapNote>
      )}
      <ComparedDates change={change} />
    </Tile>
  );
}

type Trace = ReturnType<typeof comparisonTrace>;

function Measures({
  change,
  entry,
  trace,
}: {
  change: PublishedChanges;
  entry: OutputEntry | undefined;
  trace: Trace;
}) {
  const [view, setView] = useState<"list" | "table">("list");
  const groups = classifyMeasures(change, trace.measure, entry);
  const rows = comparisonRows(change, "reader");
  if (!rows.length) return null;
  const { moved, revised, notAssessable } = groups;
  return (
    <Tile
      span={7}
      label="Measures that moved"
      title="Measures that moved"
      kicker="Earlier → current, largest move first"
      trace={
        <Segmented
          label="Presentation"
          current={view}
          onSelect={(key) => {
            setView(key === "table" ? "table" : "list");
          }}
          segments={[
            { key: "list", label: "List" },
            { key: "table", label: "Table" },
          ]}
        />
      }
    >
      {view === "table" ? (
        <section aria-label="Earlier against current">
          <ComparisonTable rows={rows} source={trace.measure} />
        </section>
      ) : (
        <>
          {moved.length > 0 ? (
            <MeasureList label="Measures that moved" items={moved} />
          ) : (
            <GapNote>No measure moved between the two runs.</GapNote>
          )}
          <MeasureGroup title="Revised for the same period" items={revised} />
          <MeasureGroup title="Not assessable" items={notAssessable} ranked={false} />
        </>
      )}
    </Tile>
  );
}

function MeasureGroup({
  title,
  items,
  ranked = true,
}: {
  title: string;
  items: Parameters<typeof MeasureList>[0]["items"];
  ranked?: boolean;
}) {
  if (!items.length) return null;
  return (
    <div className="grid gap-3 border-t border-border-hairline pt-4">
      <h4 className="text-caption text-text-tertiary">{title}</h4>
      <MeasureList label={title} items={items} ranked={ranked} />
    </div>
  );
}

function Comparison({
  snapshot,
  run,
  entries,
  change,
  entry,
  trace,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  entries: OutputEntry[];
  change: PublishedChanges;
  entry: OutputEntry | undefined;
  trace: Trace;
}) {
  const pack = change.pack;
  const { unmoved } = classifyMeasures(change, trace.measure, entry);
  const ledger = ledgerLists(entry);
  const profile = pack?.maturity_profile;
  const omitted = pack?.omitted?.maturity_profile;
  return (
    <Bento>
      <Verdict change={change} entry={entry} />
      <Measures change={change} entry={entry} trace={trace} />
      {Boolean(pack?.modules?.length) && (
        <Tile span={5} label="Modules" title="What changed in the analysis">
          {pack?.prior?.format === "earlier" && (
            <p className="text-small text-text-secondary">
              The earlier run used an earlier report format.
            </p>
          )}
          <ModuleMatrix change={change} source={trace.module} />
        </Tile>
      )}
      <Maturities
        profile={profile}
        omitted={omitted}
        traces={profile ? maturityTraces(snapshot, run, entries, change) : undefined}
      />
      {unmoved.length > 0 && (
        <Tile span={12} label="Measures that did not move">
          <details>
            <summary className="cursor-pointer text-h4 font-medium text-text-primary">
              Measures that did not move ({unmoved.length})
            </summary>
            <div className="mt-4">
              <MeasureList label="Measures that did not move" items={unmoved} ranked={false} />
            </div>
          </details>
        </Tile>
      )}
      {ledger && (
        <>
          <Tile span={6} label="Limitations added" title="Limitations added">
            <LedgerList label="Limitations added" items={ledger.added} />
          </Tile>
          <Tile span={6} label="Limitations removed" title="Limitations removed">
            <LedgerList label="Limitations removed" items={ledger.removed} />
          </Tile>
        </>
      )}
    </Bento>
  );
}

function Maturities({
  profile,
  omitted,
  traces,
}: {
  profile?: MaturityProfile;
  omitted?: string;
  traces?: ReturnType<typeof maturityTraces>;
}) {
  if (!profile)
    return omitted ? (
      <Tile span={12} label="Maturities then and now" title="Debt maturity schedules" tone="gap">
        <p role="note" className="text-small text-gap-text">
          {containsReference(omitted) ? "See the comparison evidence." : omitted}
        </p>
      </Tile>
    ) : null;
  if (!usableProfile(profile))
    return (
      <Tile span={12} label="Maturities then and now" title="Debt maturity schedules" tone="gap">
        <p role="note" className="text-small text-gap-text">
          The published comparison does not contain a usable maturity schedule.
        </p>
      </Tile>
    );
  return (
    <Tile span={12} label="Maturities then and now">
      <MaturityPair profile={profile} traces={traces} />
    </Tile>
  );
}

function Actions() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button href="#overview" color="secondary" size="sm">
        Open the Overview
      </Button>
      <Button href="#evidence/record" color="link-gray" size="sm" iconTrailing={ArrowRight}>
        Review comparison evidence
      </Button>
    </div>
  );
}

/** The designed empty state: one fixed sentence and the one action that fixes it. */
function NoComparison({ change }: { change: PublishedChanges | null | undefined }) {
  const note = noComparisonSentence(change?.note);
  const sentence = change?.problem
    ? containsReference(change.problem)
      ? "The comparison could not be read."
      : change.problem
    : note;
  return (
    <Bento>
      <Tile
        span={12}
        label="No comparison"
        tone="gap"
        className="min-h-60 items-center justify-center py-12 text-center"
      >
        <ClockRewind aria-hidden="true" className="size-8 text-gap-text" />
        <p className="max-w-xl font-display text-h3 text-balance text-text-primary">{sentence}</p>
        <Actions />
      </Tile>
    </Bento>
  );
}

function FirstRun() {
  return (
    <Bento>
      <Tile
        span={12}
        label="No earlier run"
        tone="gap"
        className="min-h-72 items-center justify-center py-14 text-center"
      >
        <ClockRewind aria-hidden="true" className="size-8 text-gap-text" />
        <h2 className="font-display text-h2 text-text-primary">No earlier run to compare.</h2>
        <p className="text-body text-text-secondary">
          This is the first listed run for this issuer on this pathway.
        </p>
        <p className="reading-copy text-body text-text-secondary">
          Only reports already listed when this run was made can be used for comparison.
        </p>
        <Button href="#overview" color="secondary">
          Open the Overview
        </Button>
      </Tile>
    </Bento>
  );
}
