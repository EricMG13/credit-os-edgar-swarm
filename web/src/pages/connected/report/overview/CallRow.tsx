import {
  AlertTriangle,
  ArrowNarrowRight,
  ArrowRight,
  ClockRewind,
  Eye,
  Plus,
} from "@untitledui/icons";
import type { ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { StatusBadge } from "@/components/status/StatusBadge";
import { cx } from "@/utils/cx";
import { moduleName } from "../../api";
import {
  comparisonForRun,
  evidencePath,
  runPathway,
  runTiming,
  unitLabel,
  type OutputEntry,
} from "../../publishedReport";
import { actionBias, moduleState, runMoneyUnit, type ReportView } from "../../reportView";
import { PublishedSource } from "../PublishedTrace";
import { changeVerdict, earlierStance } from "./changeData";
import { bottomLine, entryOf, type Passage, type RowProps } from "./read";
import { Figure, GapNote, Tile } from "./Tile";

const SIGNAL = "border-warning-edge bg-warning-fill text-warning-text";
const POSITIVE = "border-success-edge bg-success-fill text-success-text";
/** The two stances that add exposure; every other stance is drawn in the signal colour. */
const ADDING = /^(?:Starter Position|Add Exposure)$/i;
const CAUTION_BANDS = /^(?:Low|Insufficient Information)$/i;

function Source({
  run,
  entry,
  line,
  name,
}: Pick<RowProps, "run"> & { entry: OutputEntry; line?: number; name: string }) {
  return (
    <PublishedSource
      href={evidencePath(run.folder, entry, line)}
      name={name}
      linkLabel={`Source for ${name}`}
    >
      View source
    </PublishedSource>
  );
}

/** A passage's first sentence in the module's words, a link where it cites a source, or its gap. */
function Sentence({
  run,
  entry,
  passage,
  className,
}: Pick<RowProps, "run"> & {
  entry: OutputEntry;
  passage: Passage | undefined;
  className: string;
}) {
  if (!passage)
    return (
      <GapNote>Not established for this run. The module&apos;s handoff has no bottom line.</GapNote>
    );
  if (passage.text === null)
    return (
      <Button
        href={evidencePath(run.folder, entry, passage.line)}
        color="link-gray"
        size="sm"
        iconTrailing={ArrowRight}
      >
        Read this passage in Evidence
      </Button>
    );
  return <p className={className}>{passage.text}</p>;
}

/** How many modules ran, and by name and state the ones that were not delivered. */
function moduleCount(view: ReportView) {
  const total = String(view.modules.length);
  const others = view.modules.filter(({ state }) => state !== "Delivered");
  if (others.length === 0) return `${total} · all delivered`;
  if (others.length === view.modules.length) return `${total} · none delivered`;
  const named = others.map(({ name, state }) => `${name} (${state.toLowerCase()})`);
  return `${total} · all delivered except ${named.join(", ")}`;
}

function RunFacts({ run, view }: Pick<RowProps, "run" | "view">) {
  const unit = runMoneyUnit(view.catalogue);
  const facts = [
    ["Pathway", runPathway(run, view.catalogue)],
    ["Financials as of", runTiming(run)],
    ["Currency", unit ? unitLabel(unit) : ""],
    ["Modules", moduleCount(view)],
  ].filter(([, value]) => value);
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border-hairline pt-5 sm:grid-cols-4">
      {facts.map(([term, value]) => (
        <div key={term} className="flex min-w-0 flex-col gap-1">
          <dt className="text-caption text-text-tertiary">{term}</dt>
          <dd className="text-small text-text-primary">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** A stated stance as a word chip: the adding stances in teal, every other in the signal colour. */
function StanceChip({ stance, large = false }: { stance: string; large?: boolean }) {
  const adding = ADDING.test(stance);
  const Icon = adding ? Plus : Eye;
  return (
    <span
      className={cx(
        "flex items-center rounded-ds-sm border",
        large
          ? "h-10 gap-2.5 pr-4 pl-3 text-h3 font-semibold"
          : "h-6 gap-1 px-2 text-caption font-medium",
        adding ? POSITIVE : SIGNAL,
      )}
    >
      <Icon aria-hidden="true" className={large ? "size-[18px]" : "size-3"} />
      {stance}
    </span>
  );
}

function CallTile({ run, view }: Pick<RowProps, "run" | "view">) {
  const lead = view.lead;
  if (!lead)
    return (
      <Tile span={8} label="The call" kicker="The call">
        <GapNote>No credit view is available for this run.</GapNote>
        <RunFacts run={run} view={view} />
      </Tile>
    );
  const stance = actionBias(lead);
  const [first, ...rest] = bottomLine(lead);
  const name = moduleName(lead.output.module);
  return (
    <Tile span={8} label="The call" className="justify-between gap-7">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <h3 className="text-caption font-medium text-text-secondary">The call · {name}</h3>
            {stance && <StanceChip stance={stance} large />}
          </div>
          <Button
            color="link-gray"
            size="sm"
            href={`#modules/${lead.output.module}`}
            iconTrailing={ArrowRight}
          >
            {name}
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <span className="text-caption text-text-secondary">Bottom line</span>
            <Source run={run} entry={lead} line={first?.line} name="the bottom line" />
          </div>
          <Sentence
            run={run}
            entry={lead}
            passage={first}
            className="max-w-[840px] text-h1 font-medium text-pretty text-text-primary"
          />
          {rest.map(
            (passage) =>
              passage.text !== null && (
                <p key={passage.line} className="reading-copy text-body text-text-secondary">
                  {passage.text}
                </p>
              ),
          )}
        </div>
      </div>
      <RunFacts run={run} view={view} />
    </Tile>
  );
}

type Score = { value: number; band: string };
type Scored = { name: string; score: Score };

/** The meter's reading in words: the score, its band, and the second module's score where marked. */
const meterReading = (first: Scored, second: Scored | null) =>
  `Confidence ${String(first.score.value)} of 100, band ${first.score.band}.` +
  (second
    ? ` ${second.name} scored ${String(second.score.value)}, band ${second.score.band}.`
    : "");

/** A 0 to 100 meter: the score as the filled length, a second module's score as a tick. */
function Meter({
  first,
  second,
  caution,
}: {
  first: Scored;
  second: Scored | null;
  caution: boolean;
}) {
  const x = (score: number) => (Math.min(Math.max(score, 0), 100) / 100) * 408;
  const value = first.score.value;
  const tick = second?.score.value ?? null;
  const apart = tick !== null && Math.abs(x(tick) - x(value)) >= 140;
  const after = tick !== null && tick > value;
  return (
    <svg
      viewBox="0 0 408 36"
      width="100%"
      role="img"
      aria-label={meterReading(first, second)}
      className="block overflow-visible"
    >
      <rect x="0" y="6" width="408" height="6" rx="3" className="fill-border-hairline" />
      <rect
        x="0"
        y="6"
        width={x(value)}
        height="6"
        rx="3"
        className={caution ? "fill-warning-mark" : "fill-chart-1"}
      />
      {tick !== null && (
        <line
          x1={x(tick)}
          x2={x(tick)}
          y1="2"
          y2="16"
          strokeWidth="1.5"
          className="stroke-text-primary"
        />
      )}
      <text x="0" y="32" className="fill-text-tertiary font-mono text-[11px]">
        0
      </text>
      <text
        x={Math.max(x(value) - 4, 40)}
        y="32"
        textAnchor="end"
        className="fill-text-secondary font-body text-[11px]"
      >
        {first.name} {value}
      </text>
      {tick !== null && second && (
        <text
          x={apart || after ? x(tick) + 6 : x(tick) - 6}
          y={apart || after ? 32 : 46}
          textAnchor={apart || after ? "start" : "end"}
          className="fill-text-secondary font-body text-[11px]"
        >
          {second.name} {tick}
        </text>
      )}
      <text x="408" y="32" textAnchor="end" className="fill-text-tertiary font-mono text-[11px]">
        100
      </text>
    </svg>
  );
}

const scoreOf = (entry: OutputEntry | undefined) => {
  const score = entry?.output.confidence;
  return score && "value" in score ? score : null;
};

function ConfidenceTile({ run, view }: Pick<RowProps, "run" | "view">) {
  const lead = view.lead;
  const score = scoreOf(lead);
  if (!lead || !score)
    return (
      <Tile span={12} label="Confidence" kicker="Confidence">
        <GapNote>No confidence score was recorded for this credit view.</GapNote>
      </Tile>
    );
  const selection = lead.output.module === "CP-3" ? undefined : entryOf(view, "CP-3");
  const second = scoreOf(selection);
  const caution = CAUTION_BANDS.test(score.band);
  return (
    <Tile
      span={12}
      label="Confidence"
      kicker="Confidence"
      trace={
        <Source
          run={run}
          entry={lead}
          line={lead.output.confidenceTrace?.section?.line}
          name="the confidence score"
        />
      }
      className="gap-2"
    >
      <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <Figure className="text-display font-medium">{score.value}</Figure>
        <span
          className={cx(
            "flex items-center gap-1.5 text-body font-medium",
            caution ? "text-warning-text" : "text-success-text",
          )}
        >
          {caution && <AlertTriangle aria-hidden="true" className="size-3.5" />}
          {score.band}
        </span>
        <span className="text-caption text-text-tertiary">{moduleName(lead.output.module)}</span>
      </p>
      <Meter
        first={{ name: moduleName(lead.output.module), score }}
        second={
          selection && second ? { name: moduleName(selection.output.module), score: second } : null
        }
        caution={caution}
      />
    </Tile>
  );
}

function ClearanceTile({ run, view }: Pick<RowProps, "run" | "view">) {
  const entry = entryOf(view, "CP-5");
  const name = moduleName("CP-5");
  if (!entry)
    return (
      <Tile span={12} label="Evidence clearance" kicker="Evidence clearance">
        <GapNote>{name} is not part of this run.</GapNote>
      </Tile>
    );
  const [first] = bottomLine(entry);
  return (
    <Tile
      span={12}
      label="Evidence clearance"
      kicker="Evidence clearance"
      trace={<Source run={run} entry={entry} line={first?.line} name={name} />}
      className="gap-3"
    >
      {moduleState(entry) !== "Delivered" && (
        <StatusBadge set="Module state" state={moduleState(entry)} />
      )}
      <Sentence
        run={run}
        entry={entry}
        passage={first}
        className="text-body font-medium text-pretty text-text-primary"
      />
      <GapNote>Issue counts by severity and committee use are not typed in this run.</GapNote>
      <div>
        <Button color="link-gray" size="sm" href="#modules/CP-5" iconTrailing={ArrowRight}>
          {name}
        </Button>
      </div>
    </Tile>
  );
}

function ChangesBody({ snapshot, run, view }: RowProps): ReactNode {
  const change = comparisonForRun(run, snapshot.workspace.runs);
  const entry = entryOf(view, "CP-8");
  if (!change?.pack || change.problem || !entry)
    return (
      <p className="text-small text-text-secondary">
        {change?.first_run
          ? "No earlier run to compare."
          : "No comparison with an earlier run is shown for this run."}
      </p>
    );
  const [first] = bottomLine(entry);
  const verdict = changeVerdict(first?.text);
  const was = earlierStance(snapshot, run);
  const now = view.lead ? actionBias(view.lead) : undefined;
  return (
    <>
      {(verdict ?? (was && now)) && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {verdict && <span className="text-h3 font-medium text-text-primary">{verdict}</span>}
          {was && now && <StanceMove was={was} now={now} />}
        </div>
      )}
      <Sentence
        run={run}
        entry={entry}
        passage={first}
        className="text-small text-text-secondary"
      />
    </>
  );
}

/** The stance in the earlier run and in this one, as two chips; the move in words for a reader. */
function StanceMove({ was, now }: { was: string; now: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="sr-only">{`Stance was ${was}, now ${now}.`}</span>
      <span
        aria-hidden="true"
        className="flex h-6 items-center rounded-ds-xs border border-border-container px-2 text-caption text-text-secondary"
      >
        {was}
      </span>
      <ArrowNarrowRight aria-hidden="true" className="size-3.5 text-text-secondary" />
      <span aria-hidden="true">
        <StanceChip stance={now} />
      </span>
    </span>
  );
}

function ChangesTile(props: RowProps) {
  return (
    <Tile
      span={12}
      label="Since the earlier run"
      kicker={
        <span className="flex items-center gap-2">
          <ClockRewind aria-hidden="true" className="size-4" />
          Since the earlier run
        </span>
      }
      className="flex-1 gap-3"
    >
      <ChangesBody {...props} />
      <div>
        <Button color="link-gray" size="sm" href="#changes" iconTrailing={ArrowRight}>
          Open Changes
        </Button>
      </div>
    </Tile>
  );
}

/**
 * Row 1: the call. The stance and bottom line take the widest tile; beside them, how far to trust
 * it (confidence, evidence clearance) and whether it moved since the earlier run.
 */
export function CallRow(props: RowProps) {
  return (
    <>
      <CallTile run={props.run} view={props.view} />
      <div className="flex min-w-0 flex-col gap-4 lg:col-span-4">
        <ConfidenceTile run={props.run} view={props.view} />
        <ClearanceTile run={props.run} view={props.view} />
        <ChangesTile {...props} />
      </div>
    </>
  );
}
