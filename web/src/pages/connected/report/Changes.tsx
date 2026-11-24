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
import { PublishedTable } from "../ReportContent";
import { LedgerList } from "./changes/LedgerLists";
import { MaturityPair, usableProfile } from "./changes/MaturityPair";
import { MeasureList } from "./changes/MeasureList";
import { ModuleMatrix } from "./changes/ModuleMatrix";
import { classifyMeasures, ledgerLists, passageParagraphs, verdictOf } from "./changes/model";
import { PassageTile } from "./changes/PassageTile";
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

const LINK = "text-link text-small underline underline-offset-2 max-[480px]:py-3";

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
  const entry = change?.problem
    ? undefined
    : entries.find((item) => item.output.module === "CP-8" && item.selected);
  const trace = comparisonTrace(run.folder, change?.problem ? [] : entries);
  if (change?.first_run === true && !change.pack && !change.problem && !change.note)
    return <FirstRun />;
  if (change?.problem || !change?.pack)
    return (
      <>
        <h2 className="font-display text-h3 text-text-primary">Changes since the last run</h2>
        <NoComparison change={change} />
        {entry && <Passages entry={entry} folder={run.folder} withBottomLine />}
      </>
    );
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-h3 text-text-primary">Changes since the last run</h2>
        <Button
          href={trace.handoff ?? "#evidence/trace/CP-8"}
          color="link-gray"
          size="sm"
          iconTrailing={ArrowRight}
        >
          Review comparison evidence
        </Button>
      </div>
      <Comparison
        snapshot={snapshot}
        run={run}
        entries={entries}
        change={change}
        entry={entry}
        trace={trace}
      />
    </>
  );
}

type Trace = ReturnType<typeof comparisonTrace>;

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
    </p>
  );
}

/** Row 1: the first sentence of the Bottom line is the verdict, in the largest type; the rest is its body. */
function Verdict({
  change,
  entry,
  folder,
}: {
  change: PublishedChanges;
  entry: OutputEntry | undefined;
  folder: string;
}) {
  const verdict = verdictOf(entry, folder);
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
      trace={
        verdict && !verdict.referenced ? (
          <PublishedSource href={verdict.href} name="The verdict">
            Source
          </PublishedSource>
        ) : undefined
      }
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="grid content-start gap-3">
          {verdict?.sentence ? (
            <p className="reading-copy font-display text-h2 text-balance text-text-primary sm:text-h1">
              {verdict.sentence}
            </p>
          ) : verdict?.referenced ? (
            <a className={LINK} href={verdict.href}>
              Read the verdict in Evidence
            </a>
          ) : (
            <GapNote>The comparison does not state a verdict in a sentence.</GapNote>
          )}
          {verdict?.body.map((text) => (
            <p key={text} className="reading-copy text-body text-text-secondary">
              {text}
            </p>
          ))}
          <ComparedDates change={change} />
        </div>
        <GapNote>Stance, earlier → current: the comparison does not state it</GapNote>
      </div>
    </Tile>
  );
}

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
  if (!rows.length)
    return (
      <Tile span={7} label="Measures that moved" title="Measures that moved">
        <GapNote>The comparison carries no measures for these two runs.</GapNote>
      </Tile>
    );
  const { moved, revised, notAssessable } = groups;
  return (
    <Tile
      span={7}
      label="Measures that moved"
      title="Measures that moved"
      kicker="Earlier → current, in the comparison's order"
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
            <MeasureList label="Measures that moved" items={moved} evidence={trace.handoff} />
          ) : (
            <GapNote>No measure moved between the two runs.</GapNote>
          )}
          <MeasureGroup
            title="Revised for the same period"
            items={revised}
            evidence={trace.handoff}
          />
          <MeasureGroup
            title="Not assessable"
            items={notAssessable}
            ranked={false}
            evidence={trace.handoff}
          />
        </>
      )}
    </Tile>
  );
}

function MeasureGroup({
  title,
  items,
  ranked = true,
  evidence,
}: {
  title: string;
  items: Parameters<typeof MeasureList>[0]["items"];
  ranked?: boolean;
  evidence?: string;
}) {
  if (!items.length) return null;
  return (
    <div className="grid gap-3 border-t border-border-hairline pt-4">
      <h4 className="text-caption text-text-tertiary">{title}</h4>
      <MeasureList label={title} items={items} ranked={ranked} level="h5" evidence={evidence} />
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
  const ledger = ledgerLists(entry, run.folder);
  const folder = run.folder;
  return (
    <Bento>
      <Verdict change={change} entry={entry} folder={folder} />
      <Measures change={change} entry={entry} trace={trace} />
      {Boolean(pack?.modules?.length) && (
        <Tile span={5} label="Modules" title="What changed in the analysis" className="self-start">
          {pack?.prior?.format === "earlier" && (
            <p className="text-small text-text-secondary">
              The earlier run used an earlier report format.
            </p>
          )}
          <ModuleMatrix change={change} source={trace.module} />
        </Tile>
      )}
      <Maturities
        profile={pack?.maturity_profile}
        omitted={pack?.omitted?.maturity_profile}
        traces={pack?.maturity_profile ? maturityTraces(snapshot, run, entries, change) : undefined}
      />
      {entry && (
        <>
          <PassageTile
            span={7}
            title="Key findings"
            noun="finding"
            numbered
            paragraphs={passageParagraphs(entry, "Key findings", folder)}
          />
          <PassageTile
            span={5}
            title="Contrary evidence and what would change the view"
            noun="passage"
            tone="counter"
            paragraphs={passageParagraphs(
              entry,
              "Contrary evidence and what would change the view",
              folder,
            )}
          />
        </>
      )}
      {unmoved.length > 0 && (
        <Tile span={12} label="Measures that did not move" title="Measures that did not move">
          <details>
            <summary className="flex min-h-8 cursor-pointer items-center text-small font-medium text-text-link max-[480px]:min-h-11">
              Show the {unmoved.length} {unmoved.length === 1 ? "measure" : "measures"}
            </summary>
            <div className="mt-4">
              <MeasureList
                label="Measures that did not move"
                items={unmoved}
                ranked={false}
                evidence={trace.handoff}
              />
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
      {entry && (
        <PassageTile
          span={12}
          title="Limitations of this comparison"
          noun="limitation"
          paragraphs={passageParagraphs(entry, "Limitations", folder)}
        />
      )}
    </Bento>
  );
}

/** What the comparison module wrote, one tile per reader passage; absent is the designed gap. */
function Passages({
  entry,
  folder,
  withBottomLine = false,
}: {
  entry: OutputEntry;
  folder: string;
  withBottomLine?: boolean;
}) {
  return (
    <Bento>
      {withBottomLine && (
        <PassageTile
          span={12}
          title="Bottom line"
          noun="passage"
          paragraphs={passageParagraphs(entry, "Bottom line", folder)}
        />
      )}
      <PassageTile
        span={7}
        title="Key findings"
        noun="finding"
        numbered
        paragraphs={passageParagraphs(entry, "Key findings", folder)}
      />
      <PassageTile
        span={5}
        title="Contrary evidence and what would change the view"
        noun="passage"
        tone="counter"
        paragraphs={passageParagraphs(
          entry,
          "Contrary evidence and what would change the view",
          folder,
        )}
      />
      <PassageTile
        span={12}
        title="Limitations of this comparison"
        noun="limitation"
        paragraphs={passageParagraphs(entry, "Limitations", folder)}
      />
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
  const gap = (reason: string) => (
    <Tile
      span={12}
      label="Maturities then and now"
      title="Debt maturities, earlier run against this run"
    >
      <GapNote>{reason}</GapNote>
    </Tile>
  );
  if (!profile)
    return omitted
      ? gap(containsReference(omitted) ? "See the comparison evidence." : omitted)
      : null;
  if (!usableProfile(profile))
    return gap("The published comparison does not contain a usable maturity schedule.");
  return <MaturityPair profile={profile} traces={traces} />;
}

/** The designed empty state: one fixed sentence on a solid chip and the one action that fixes it. */
function NoComparison({ change }: { change: PublishedChanges | null | undefined }) {
  const sentence = change?.problem
    ? containsReference(change.problem)
      ? "The comparison could not be read."
      : change.problem
    : noComparisonSentence(change?.note);
  return (
    <Bento>
      <Tile span={12} label="No comparison" className="items-center py-10 text-center">
        <ClockRewind aria-hidden="true" className="size-8 text-text-tertiary" />
        <div className="w-full max-w-xl">
          <GapNote>{sentence}</GapNote>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href="#overview" color="secondary" size="sm">
            Open the Overview
          </Button>
          <Button href="#evidence/record" color="link-gray" size="sm" iconTrailing={ArrowRight}>
            Review comparison evidence
          </Button>
        </div>
      </Tile>
    </Bento>
  );
}

function FirstRun() {
  return (
    <Bento>
      <Tile span={12} label="No earlier run" className="items-center py-12 text-center">
        <ClockRewind aria-hidden="true" className="size-8 text-text-tertiary" />
        <h2 className="font-display text-h2 text-text-primary">No earlier run to compare.</h2>
        <div className="w-full max-w-xl">
          <GapNote>This is the first listed run for this issuer on this pathway.</GapNote>
        </div>
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
