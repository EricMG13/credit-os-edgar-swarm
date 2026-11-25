import { ArrowNarrowRight, ArrowRight, ClockRewind } from "@untitledui/icons";
import { useMemo, type ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { StatusBadge } from "@/components/status/StatusBadge";
import { cx } from "@/utils/cx";
import { moduleName } from "../../api";
import {
  CONFIDENCE_INPUTS,
  comparisonForRun,
  evidencePath,
  runPathway,
  runTiming,
  unitLabel,
  type OutputEntry,
} from "../../publishedReport";
import { moduleBottomLines, moduleState, runMoneyUnit, type ReportView } from "../../reportView";
import { TextLink } from "../../../run/TextLink";
import { PublishedSource } from "../PublishedTrace";
import { UNREAD_STANCE, committeeStance, earlierStance, type StanceReading } from "./changeData";
import { readerReason } from "./reason";
import { useSvgScale } from "./svgScale";
import { bottomLineBlocks, entryOf, type Passage, type PassageTable, type RowProps } from "./read";
import { Figure, GapNote, Tile } from "./Tile";

/** Stances, bands and outlooks are the modules' words: one neutral style, no good/bad grouping. */
const NEUTRAL = "border-border-container bg-surface-card text-text-primary";

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

/** One block of a module's bottom line: a paragraph, or a table the module wrote there. */
type Said = Passage | PassageTable;

function EvidenceLink({ href, children }: { href: string; children: string }) {
  return (
    <Button className={LINK} href={href} color="link-gray" size="sm" iconTrailing={ArrowRight}>
      {children}
    </Button>
  );
}

/**
 * One block of a bottom line in the module's words: a paragraph through the reader rule (inline
 * source markers removed), a link where it cites a source or carries an id the page cannot name,
 * the table it is said in, or the gap when there is none.
 */
function Sentence({
  run,
  entry,
  passage,
  className,
}: Pick<RowProps, "run"> & {
  entry: OutputEntry;
  passage: Said | undefined;
  className: string;
}) {
  if (!passage)
    return (
      <GapNote>Not established for this run. The module&apos;s handoff has no bottom line.</GapNote>
    );
  const href = evidencePath(run.folder, entry, passage.line);
  if ("table" in passage)
    return (
      <div className="flex flex-col items-start gap-1">
        <p className="text-small text-text-secondary">The bottom line is a table.</p>
        <EvidenceLink href={href}>Read this table in Evidence</EvidenceLink>
      </div>
    );
  const words = passage.text === null ? null : readerReason(passage.text);
  if (words === null)
    return (
      <div className="flex flex-col items-start gap-1">
        {passage.cited && (
          <p className="text-small text-text-secondary">
            The bottom line cites a source reference; read it in Evidence.
          </p>
        )}
        <EvidenceLink href={href}>Read this passage in Evidence</EvidenceLink>
      </div>
    );
  return <p className={className}>{words}</p>;
}

/** The modules of the run as the pipeline draws them: the lead, then every other but the changes module. */
function pipelineModules(run: RowProps["run"], view: ReportView) {
  const lead = view.lead ? [{ name: moduleName(view.lead.output.module), entry: view.lead }] : [];
  return [...lead, ...moduleBottomLines(view, run).map(({ name, entry }) => ({ name, entry }))];
}

/** A module's state in words; a handoff that could not be read says so, not "not assessable". */
const stateWord = (entry: OutputEntry) =>
  entry.output.parseError ? "could not be read" : moduleState(entry).toLowerCase();

/** How many modules ran, by the pipeline's count, and by name each one that was not delivered. */
function moduleCount(run: RowProps["run"], view: ReportView) {
  const all = pipelineModules(run, view);
  if (all.length === 0) return "No module ran";
  const groups = new Map<string, string[]>();
  for (const { name, entry } of all) {
    const word = stateWord(entry);
    groups.set(word, [...(groups.get(word) ?? []), name]);
  }
  const delivered = groups.get("delivered")?.length ?? 0;
  const total = String(all.length);
  if (delivered === all.length) return `${total} · all delivered`;
  const others = [...groups]
    .filter(([word]) => word !== "delivered")
    .map(([word, names]) => `${word}: ${names.join(", ")}`);
  return `${total} · ${[`${String(delivered)} delivered`, ...others].join("; ")}`;
}

const LINK_CLASS = "inline-flex min-h-8 items-center max-[480px]:min-h-11";

function RunFacts({ run, view }: Pick<RowProps, "run" | "view">) {
  const unit = runMoneyUnit(view.catalogue);
  const facts = [
    ["Pathway", runPathway(run, view.catalogue)],
    ["Timing", runTiming(run)],
    ["Currency", unit ? unitLabel(unit) : ""],
    ["Modules", moduleCount(run, view)],
  ].filter(([, value]) => value);
  return (
    <div className="flex flex-col gap-3 border-t border-border-hairline pt-5">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
        {facts.map(([term, value]) => (
          <div key={term} className="flex min-w-0 flex-col gap-1">
            <dt className="text-caption text-text-tertiary">{term}</dt>
            <dd className="text-small wrap-anywhere text-text-primary">{value}</dd>
          </div>
        ))}
      </dl>
      <nav aria-label="On this page" className="flex flex-wrap gap-x-5 text-small">
        <TextLink className={LINK_CLASS} href="#overview/limitations">
          What this run could not do
        </TextLink>
        <TextLink className={LINK_CLASS} href="#overview/dates">
          Dates to watch
        </TextLink>
      </nav>
    </div>
  );
}

/** A target-sized link inside a tile: 32 px, 44 px on a phone. */
const LINK = "min-h-8 max-[480px]:min-h-11";

/** A small tile's heading and its one trace control, as the mockup's 13 px tile head. */
function Head({ children, trace }: { children: ReactNode; trace?: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h3 className="flex items-center gap-2 text-small font-medium text-text-secondary">
        {children}
      </h3>
      {trace}
    </div>
  );
}

/** A stated stance as a word chip, neutral: the word is the committee's, any grouping would be ours. */
export function StanceChip({ stance, large = false }: { stance: string; large?: boolean }) {
  return (
    <span
      className={cx(
        "flex items-center rounded-ds-sm border",
        large ? "min-h-10 px-4 text-h3 font-semibold" : "min-h-6 px-2 text-caption font-medium",
        NEUTRAL,
      )}
    >
      {stance}
    </span>
  );
}

function CallTile({ run, view }: Pick<RowProps, "run" | "view">) {
  const lead = view.lead;
  if (!lead)
    return (
      <Tile span={8} label="The call">
        <Head>The call</Head>
        <GapNote>No credit view is available for this run.</GapNote>
        <RunFacts run={run} view={view} />
      </Tile>
    );
  const { stance, unread } = committeeStance(lead);
  const [first, ...rest] = bottomLineBlocks(lead);
  const name = moduleName(lead.output.module);
  return (
    <Tile span={8} label="The call" className="gap-7 self-start">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <h3 className="text-small font-medium text-text-secondary">The call · {name}</h3>
          {stance && <StanceChip stance={stance} large />}
          {unread && <p className="text-small text-text-secondary">{UNREAD_STANCE}</p>}
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
            className={cx(
              "max-w-[840px] font-medium text-pretty text-text-primary",
              bottomLineSize(first),
            )}
          />
          <Continuation run={run} entry={lead} rest={rest} />
        </div>
      </div>
      <RunFacts run={run} view={view} />
    </Tile>
  );
}

/** The bottom line's further paragraphs, each shown or linked with its own trace. */
function Paragraphs({
  run,
  entry,
  rest,
  className,
}: Pick<RowProps, "run"> & { entry: OutputEntry; rest: Said[]; className: string }) {
  return (
    <div className={className}>
      {rest.map((passage, at) => (
        <div key={passage.line} className="flex items-start justify-between gap-3">
          <Sentence
            run={run}
            entry={entry}
            passage={passage}
            className="reading-copy text-body text-text-secondary"
          />
          <Source
            run={run}
            entry={entry}
            line={passage.line}
            name={`paragraph ${String(at + 2)} of the bottom line`}
          />
        </div>
      ))}
    </div>
  );
}

/**
 * The continuation: in full from md, where the decider reads it with the call; on a phone behind
 * "Read on", so the trust tiles stay within the first screens. CSS alone chooses: the hidden copy
 * is out of the accessibility tree.
 */
function Continuation({
  run,
  entry,
  rest,
}: Pick<RowProps, "run"> & { entry: OutputEntry; rest: Said[] }) {
  if (rest.length === 0) return null;
  return (
    <>
      <Paragraphs
        run={run}
        entry={entry}
        rest={rest}
        className="hidden md:flex md:flex-col md:gap-3"
      />
      <details className="md:hidden">
        <summary className="flex min-h-11 w-fit cursor-pointer items-center rounded-ds-xs text-small font-medium text-text-link outline-focus-ring focus-visible:outline-2">
          Read on
        </summary>
        <Paragraphs run={run} entry={entry} rest={rest} className="mt-2 flex flex-col gap-3" />
      </details>
    </>
  );
}

/**
 * A bottom line up to this many characters is one short line at desktop and takes the display
 * size; a longer one steps down the ramp so the headline figures stay on the first screen. No
 * figure on the page is larger than either step (headline figures are metric, 36 px).
 */
const SHORT_BOTTOM_LINE = 90;

const bottomLineSize = (passage: Said | undefined) =>
  (passage && "text" in passage ? (passage.text ?? "") : "").length <= SHORT_BOTTOM_LINE
    ? "text-h2 sm:text-h1 lg:text-display"
    : "text-h3 sm:text-h2 lg:text-metric";

type Score = { value: number; band: string };
type Scored = { name: string; score: Score };
/** The second module marked on the meter: its score, or its name when it recorded none. */
type Second = Scored | { name: string; score: null } | null;

/** The meter's reading in words: the score, its band, and the second module's score where marked. */
const meterReading = (first: Scored, second: Scored | null) =>
  `Confidence ${String(first.score.value)} of 100, band ${first.score.band}.` +
  (second
    ? ` ${second.name} scored ${String(second.score.value)}, band ${second.score.band}.`
    : "");

/**
 * A 0 to 100 meter: the score as the filled length, a second module's score as a tick. The two
 * scores are named on a line under the bar, so their labels never collide or leave the scale.
 */
function Meter({ first, second }: { first: Scored; second: Second }) {
  const { ref, font } = useSvgScale(408);
  const x = (score: number) => (Math.min(Math.max(score, 0), 100) / 100) * 408;
  const scored = second?.score ? second : null;
  const tick = scored?.score.value ?? null;
  return (
    <div className="flex flex-col gap-1.5">
      <svg
        ref={ref}
        viewBox="0 0 408 40"
        width="100%"
        role="img"
        aria-label={meterReading(first, scored)}
        className="block overflow-visible"
      >
        <rect x="0" y="6" width="408" height="6" rx="3" className="fill-border-hairline" />
        <rect x="0" y="6" width={x(first.score.value)} height="6" rx="3" className="fill-chart-1" />
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
        <text x="0" y="38" fontSize={font()} className="fill-text-tertiary font-mono">
          0
        </text>
        <text
          x="408"
          y="38"
          textAnchor="end"
          fontSize={font()}
          className="fill-text-tertiary font-mono"
        >
          100
        </text>
      </svg>
      <p className="flex flex-wrap gap-x-4 gap-y-1 text-caption text-text-secondary">
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="h-1.5 w-3 rounded-ds-full bg-chart-1" />
          <span>{`${first.name} ${String(first.score.value)}`}</span>
        </span>
        {second && (
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true" className="h-3 border-l-[1.5px] border-text-primary" />
            <span>
              {scored
                ? `${scored.name} ${String(scored.score.value)} · ${scored.score.band}`
                : `${second.name}: no score recorded`}
            </span>
          </span>
        )}
      </p>
    </div>
  );
}

/** The first block of the score's inputs, which the trace drawer opens; the section heading does not. */
const confidenceLine = (entry: OutputEntry) =>
  (
    entry.sections.find((section) => section.heading === CONFIDENCE_INPUTS) ??
    entry.output.confidenceTrace?.section
  )?.blocks[0]?.line;

const scoreOf = (entry: OutputEntry | undefined) => {
  const score = entry?.output.confidence;
  return score && "value" in score ? score : null;
};

function ConfidenceTile({ run, view }: Pick<RowProps, "run" | "view">) {
  const lead = view.lead;
  const score = scoreOf(lead);
  if (!lead || !score)
    return (
      <Tile span={12} label="Confidence">
        <Head>Confidence</Head>
        <GapNote>No confidence score was recorded for this credit view.</GapNote>
      </Tile>
    );
  const selection = lead.output.module === "CP-3" ? undefined : entryOf(view, "CP-3");
  const second = scoreOf(selection);

  return (
    <Tile span={12} label="Confidence" className="gap-2">
      <Head
        trace={
          <Source run={run} entry={lead} line={confidenceLine(lead)} name="the confidence score" />
        }
      >
        Confidence
      </Head>
      <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <Figure className="text-metric font-medium">{score.value}</Figure>
        <span className="text-body font-medium text-text-primary">{score.band}</span>
        <span className="text-caption text-text-tertiary">{moduleName(lead.output.module)}</span>
      </p>
      <Meter
        first={{ name: moduleName(lead.output.module), score }}
        second={selection ? { name: moduleName(selection.output.module), score: second } : null}
      />
    </Tile>
  );
}

function ClearanceTile({ run, view }: Pick<RowProps, "run" | "view">) {
  const entry = entryOf(view, "CP-5");
  const name = moduleName("CP-5");
  if (!entry)
    return (
      <Tile span={12} label="Evidence clearance">
        <Head>Evidence clearance</Head>
        <GapNote>{name} is not part of this run.</GapNote>
      </Tile>
    );
  const [first, ...rest] = bottomLineBlocks(entry);
  return (
    <Tile span={12} label="Evidence clearance" className="gap-3">
      <Head
        trace={<Source run={run} entry={entry} line={first?.line} name="the evidence clearance" />}
      >
        Evidence clearance
      </Head>
      {moduleState(entry) !== "Delivered" && (
        <StatusBadge set="Module state" state={moduleState(entry)} />
      )}
      <Sentence
        run={run}
        entry={entry}
        passage={first}
        className="text-body font-medium text-pretty text-text-primary"
      />
      {rest.map((passage, at) => (
        <div key={passage.line} className="flex items-start justify-between gap-3">
          <Sentence
            run={run}
            entry={entry}
            passage={passage}
            className="text-small text-pretty text-text-secondary"
          />
          <Source
            run={run}
            entry={entry}
            line={passage.line}
            name={`paragraph ${String(at + 2)} of ${name}`}
          />
        </div>
      ))}
      <p className="flex items-center gap-2 text-caption text-gap-text">
        <span
          aria-hidden="true"
          className="gap-hatch size-3 flex-none rounded-ds-xs border border-dashed border-border-gap"
        />
        Issue counts by severity and committee use are not typed in this run.
      </p>
    </Tile>
  );
}

function ChangesBody({ snapshot, run, view }: RowProps): ReactNode {
  const was = useMemo(() => earlierStance(snapshot, run), [snapshot, run]);
  const change = comparisonForRun(run, snapshot.workspace.runs);
  const entry = entryOf(view, "CP-8");
  if (change?.problem) return <GapNote>{change.problem}</GapNote>;
  if (change?.pack && !entry)
    return <GapNote>The changes module&apos;s handoff is not part of this run.</GapNote>;
  if (!change?.pack || !entry)
    return (
      <p className="text-small text-text-secondary">
        {change?.first_run
          ? "No earlier run to compare."
          : "No comparison with an earlier run is shown for this run."}
      </p>
    );
  const [first, ...more] = bottomLineBlocks(entry);
  const now: StanceReading = { ...committeeStance(view.lead), held: true };
  return (
    <>
      <Sentence
        run={run}
        entry={entry}
        passage={first}
        className="text-body font-medium text-pretty text-text-primary"
      />
      {more.length > 0 && <p className="text-caption text-text-secondary">More in Changes</p>}
      <StanceMove was={was ?? { unread: false, held: false }} now={now} />
    </>
  );
}

/** One side of the stance move in words: the committee's word, or why the page shows none. */
function sideWords({ stance, unread, held }: StanceReading) {
  if (stance) return stance;
  if (!held) return "Not in the run list";
  return unread ? "Could not be read" : "Not stated";
}

/** One side of the stance move: the committee's word in its chip, or why the page shows none. */
function Side({ reading }: { reading: StanceReading }) {
  if (reading.stance) return <StanceChip stance={reading.stance} />;
  return (
    <span className="flex min-h-6 items-center rounded-ds-xs border border-dashed border-border-gap px-2 text-caption text-gap-text">
      {sideWords(reading)}
    </span>
  );
}

/** The stance in the earlier run and in this one, as two chips; a side the page cannot show says why. */
function StanceMove({ was, now }: { was: StanceReading; now: StanceReading }) {
  const words = (reading: StanceReading) => reading.stance ?? sideWords(reading).toLowerCase();
  return (
    <span className="flex flex-wrap items-center gap-1.5">
      <span className="sr-only">{`Earlier stance: ${words(was)}. Current stance: ${words(now)}.`}</span>
      <span aria-hidden="true" className="text-caption text-text-tertiary">
        Stance
      </span>
      <span aria-hidden="true">
        <Side reading={was} />
      </span>
      <ArrowNarrowRight aria-hidden="true" className="size-3.5 text-text-secondary" />
      <span aria-hidden="true">
        <Side reading={now} />
      </span>
    </span>
  );
}

function ChangesTile(props: RowProps) {
  return (
    <Tile span={12} label="Since the earlier run" className="gap-3">
      <Head>
        <ClockRewind aria-hidden="true" className="size-4" />
        Since the earlier run
      </Head>
      <ChangesBody {...props} />
      <div>
        <Button
          className={LINK}
          color="link-gray"
          size="sm"
          href="#changes"
          iconTrailing={ArrowRight}
        >
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
      <div className="flex min-w-0 flex-col gap-4 self-start lg:col-span-4">
        <ConfidenceTile run={props.run} view={props.view} />
        <ClearanceTile run={props.run} view={props.view} />
        <ChangesTile {...props} />
      </div>
    </>
  );
}
