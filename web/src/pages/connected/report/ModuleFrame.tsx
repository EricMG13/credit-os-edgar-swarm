import { ArrowRight } from "@untitledui/icons";
import { useContext, type ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { StatusBadge } from "@/components/status/StatusBadge";
import { STATUS_SETS } from "@/components/status/sets";
import { StatusShape } from "@/components/status/shapes";
import type { ModuleState } from "@/pages/library/slice";
import { RunContext } from "@/pages/library/parts/RunContext";
import { TRACE_HOST, TraceControl } from "@/pages/library/parts/TraceControl";
import { cx } from "@/utils/cx";
import { FindingParagraph, PublishedTable } from "../ReportContent";
import {
  containsReference,
  evidencePath,
  readParagraph,
  readerText,
  type OutputEntry,
  type Section,
  type Table,
} from "../publishedReport";
import { traceKey } from "../reportView";
import { richParts } from "../richText";
import { GapNote, Tile } from "./overview/Tile";
import { stageOf } from "./stageNumber";
import {
  CONTRARY,
  KEY_FINDINGS,
  readable,
  type BottomLineSource,
  type TextBlock,
} from "./moduleFrame";
import { readableTitle } from "./moduleRecords";

const MISSING_PASSAGE = "Not established for this run. The module's handoff has no such passage.";

export type FrameModule = { id: string; name: string; state: ModuleState };

/** The page's section anchors, for the navigator's "On this page" entries. */
export const ANCHOR = {
  bottomLine: "module-bottom-line",
  figures: "module-figures",
  findings: "module-key-findings",
  contrary: "module-contrary",
  limitations: "module-limitations",
  records: "module-records",
  section: (line: number) => `module-section-${String(line)}`,
} as const;

/** A heading's text that the navigator can move focus to. */
export function Anchor({ id, children }: { id: string; children: ReactNode }) {
  return (
    <span
      id={id}
      tabIndex={-1}
      className="scroll-mt-4 rounded-ds-xs outline-focus-ring focus-visible:outline-2"
    >
      {children}
    </span>
  );
}

/**
 * The trace control for a key the page may not hold: a line the handoff does not contain has no
 * trace, and draws the missing-trace marker instead of failing the page.
 */
export function HeldTrace({ trace, label }: { trace: string; label: string }) {
  const run = useContext(RunContext);
  const held = run !== null && Object.hasOwn(run.traces, trace);
  return <TraceControl trace={held ? trace : null} label={label} />;
}

function SlashCircle() {
  return (
    <span className="flex flex-none text-warning-mark">
      <StatusShape shape={STATUS_SETS["Module state"]["Not assessable"].shape} />
    </span>
  );
}

/** One paragraph exactly as written, or the way to read it in Evidence when it cites a source. */
function Prose({ text, href, className }: { text: string; href: string; className: string }) {
  const body = readParagraph(text).body;
  if (containsReference(body))
    return (
      <Button href={href} color="link-gray" size="sm" iconTrailing={ArrowRight}>
        Read this passage in Evidence
      </Button>
    );
  return <p className={className}>{richParts(body, readerText)}</p>;
}

function BottomLineText({
  source,
  entry,
  folder,
}: {
  source: NonNullable<BottomLineSource>;
  entry: OutputEntry;
  folder: string;
}) {
  const line = source.kind === "passage" ? source.block.line : source.line;
  const text = source.kind === "passage" ? source.block.text : source.text;
  return (
    <div className="flex min-w-0 flex-col gap-3">
      <div className={cx(TRACE_HOST, "flex items-start gap-3")}>
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <span className="text-caption text-text-tertiary">
            <Anchor id={ANCHOR.bottomLine}>Bottom line</Anchor>
          </span>
          <Prose
            text={text.replaceAll("**", "").replaceAll("`", "")}
            href={evidencePath(folder, entry, line)}
            className="max-w-bottom-line text-h3 font-medium text-balance wrap-anywhere text-text-primary lg:text-h2"
          />
        </div>
        <HeldTrace trace={traceKey(entry, line)} label="Show sources for the bottom line" />
      </div>
      {source.kind === "passage"
        ? source.rest.map((block) => (
            <FindingParagraph
              key={block.line}
              block={block}
              trace={traceKey(entry, block.line)}
              href={evidencePath(folder, entry, block.line)}
            />
          ))
        : source.rest && (
            <p className="reading-copy text-body text-text-secondary">{readerText(source.rest)}</p>
          )}
    </div>
  );
}

function stageLine(module: FrameModule) {
  const stage = stageOf(module.id);
  return stage.number ? `${stage.name} · stage ${String(stage.number)} of ${String(stage.of)}` : "";
}

/** Below the title, across the tile, under a hairline. */
function Bottom({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-0 border-t border-border-hairline pt-5 lg:col-span-2">{children}</div>
  );
}

function TitleRow({ module }: { module: FrameModule }) {
  const blocked = module.state === "Not assessable";
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
      <h2 className="min-w-0 font-display text-h4 text-balance wrap-anywhere sm:text-h3">
        {module.name}
      </h2>
      <span className="rounded-ds-xs bg-surface-subtle px-1.5 py-0.5 font-mono text-caption text-text-tertiary">
        {module.id}
      </span>
      {blocked ? (
        <span className="flex items-center gap-1.5 text-small font-medium text-warning-text">
          <SlashCircle />
          Not assessable
        </span>
      ) : (
        <StatusBadge set="Module state" state={module.state} />
      )}
    </div>
  );
}

/**
 * The module's header tile (P1): name, state and basis, then, under a hairline, the bottom line
 * in the largest type on the tile with its one trace control. The confidence meter sits at the
 * right of the title on a wide screen and under the bottom line on a phone. A module that could
 * not run is drawn blocked.
 */
export function ModuleHeader({
  module,
  entry,
  bottomLine,
  owed,
  folder,
  basis,
  about,
  confidence,
}: {
  module: FrameModule;
  entry?: OutputEntry;
  bottomLine: BottomLineSource;
  /** The module owes a bottom line its handoff does not hold. */
  owed: boolean;
  folder: string;
  /** The basis of the module's figures as its handoff states it. */
  basis?: string;
  /** What the module says the issuer is (Business & governance only). */
  about?: ReactNode;
  confidence?: ReactNode;
}) {
  const blocked = module.state === "Not assessable";
  const stage = stageLine(module);
  return (
    <Tile
      span={12}
      label={module.name}
      className={cx("gap-0 sm:p-7", blocked && "border-dashed border-warning-mark")}
    >
      <div className="grid min-w-0 gap-x-8 gap-y-4 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="flex min-w-0 flex-col gap-1.5">
          <TitleRow module={module} />
          {stage && <p className="text-small text-text-tertiary">{stage}</p>}
          {basis && <p className="text-small text-text-secondary">{basis}</p>}
          {about}
        </div>
        {confidence && (
          <div className="order-last min-w-0 lg:order-none lg:row-start-1 lg:col-start-2">
            {confidence}
          </div>
        )}
        {entry && bottomLine ? (
          <Bottom>
            <BottomLineText source={bottomLine} entry={entry} folder={folder} />
          </Bottom>
        ) : (
          (owed || blocked) && (
            <Bottom>
              <GapNote>{MISSING_PASSAGE}</GapNote>
            </Bottom>
          )
        )}
      </div>
    </Tile>
  );
}

function Paragraph({
  block,
  entry,
  folder,
}: {
  block: TextBlock;
  entry: OutputEntry;
  folder: string;
}) {
  return (
    <FindingParagraph
      block={block}
      trace={traceKey(entry, block.line)}
      href={evidencePath(folder, entry, block.line)}
    />
  );
}

/** A table written inside a passage, drawn where the passage draws it. */
function PassageTable({
  table,
  title,
  entry,
  folder,
}: {
  table: Table;
  title: string;
  entry: OutputEntry;
  folder: string;
}) {
  return (
    <PublishedTable
      table={table}
      heading={title}
      traceAt={(line) => traceKey(entry, line)}
      rowHref={(line) => evidencePath(folder, entry, line)}
    />
  );
}

/** The passage's blocks: readable paragraphs with their traces, and its tables inline. */
function PassageBlocks({
  section,
  entry,
  folder,
}: {
  section: Section;
  entry: OutputEntry;
  folder: string;
}) {
  return section.blocks.map((block) =>
    block.type === "text" ? (
      readable(block) && <Paragraph key={block.line} block={block} entry={entry} folder={folder} />
    ) : block.type === "table" ? (
      <PassageTable
        key={block.line}
        table={block}
        title={readableTitle(section.heading)}
        entry={entry}
        folder={folder}
      />
    ) : null,
  );
}

function KeyFindings({
  section,
  entry,
  folder,
}: {
  section: Section;
  entry: OutputEntry;
  folder: string;
}) {
  const paragraphs = section.blocks.filter(
    (block): block is TextBlock => block.type === "text" && readable(block),
  );
  const tables = section.blocks.filter((block): block is Table => block.type === "table");
  return (
    <>
      <ol className="flex flex-col">
        {paragraphs.map((block, at) => (
          <li
            key={block.line}
            className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 border-t border-border-hairline py-3 first:border-t-0 first:pt-0"
          >
            <span
              aria-hidden="true"
              className="pt-0.5 font-mono text-small font-medium text-text-link tabular-nums"
            >
              {String(at + 1).padStart(2, "0")}
            </span>
            <Paragraph block={block} entry={entry} folder={folder} />
          </li>
        ))}
      </ol>
      {tables.map((block) => (
        <PassageTable
          key={block.line}
          table={block}
          title={KEY_FINDINGS}
          entry={entry}
          folder={folder}
        />
      ))}
    </>
  );
}

function PassageGap({ name, id, span }: { name: string; id: string; span: 5 | 7 | 12 }) {
  return (
    <Tile span={span} label={name} title={<Anchor id={id}>{name}</Anchor>}>
      <GapNote>{MISSING_PASSAGE}</GapNote>
    </Tile>
  );
}

/**
 * Key findings as numbered claims beside contrary evidence on the counter surface; an owed passage
 * the handoff lacks is drawn as its gap in place.
 */
export function ModuleFindings({
  keyFindings,
  contrary,
  missing,
  entry,
  folder,
}: {
  keyFindings?: Section;
  contrary?: Section;
  missing: readonly string[];
  entry: OutputEntry;
  folder: string;
}) {
  const findingsGap = missing.includes(KEY_FINDINGS);
  const contraryGap = missing.includes(CONTRARY);
  const left = Boolean(keyFindings) || findingsGap;
  const right = Boolean(contrary) || contraryGap;
  if (!left && !right) return null;
  const [leftSpan, rightSpan] = left && right ? ([7, 5] as const) : ([12, 12] as const);
  return (
    <>
      {keyFindings ? (
        <Tile
          span={leftSpan}
          label={KEY_FINDINGS}
          title={<Anchor id={ANCHOR.findings}>{KEY_FINDINGS}</Anchor>}
        >
          <KeyFindings section={keyFindings} entry={entry} folder={folder} />
        </Tile>
      ) : (
        findingsGap && <PassageGap name={KEY_FINDINGS} id={ANCHOR.findings} span={leftSpan} />
      )}
      {contrary ? (
        <Tile
          span={rightSpan}
          label={CONTRARY}
          title={<Anchor id={ANCHOR.contrary}>{CONTRARY}</Anchor>}
          tone="counter"
        >
          <PassageBlocks section={contrary} entry={entry} folder={folder} />
        </Tile>
      ) : (
        contraryGap && <PassageGap name={CONTRARY} id={ANCHOR.contrary} span={rightSpan} />
      )}
    </>
  );
}

/** A figure the module declared it could not draw: its title, its reason and its source table. */
export type ChartGap = { title: string; reason: string; line: number };

/** The charts, event lanes and maps the module declared it could not draw, with its reason. */
export function chartGaps(entry: OutputEntry): ChartGap[] {
  const { chartGaps: charts = [], events = [], maps = [] } = entry.output;
  return [...charts, ...events, ...maps].flatMap((item) => {
    const named = [item.title, item.lane, item.name].find((value) => typeof value === "string");
    const title = typeof named === "string" ? named.trim() : "";
    const reason = typeof item.gap === "string" ? item.gap.trim() : "";
    return title && reason ? [{ title, reason, line: item.table }] : [];
  });
}

const GAP_WORD = /^(Not supplied|Not calculated|Not assessable|Not established|Withheld)\b/i;

/** The module's reason as written; one that cites a source keeps its word and leaves the rest to Evidence. */
function gapReason(reason: string) {
  if (!containsReference(reason)) return readerText(reason);
  return `${GAP_WORD.exec(reason)?.[1] ?? "Not established"}. The reason cites a source, shown in Evidence.`;
}

function GapWell({
  trace,
  label,
  children,
}: {
  trace: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <li
      className={cx(
        TRACE_HOST,
        "grid grid-cols-[1.75rem_minmax(0,1fr)_1.75rem] items-start gap-3 border-t border-border-hairline py-3.5",
      )}
    >
      <span
        aria-hidden="true"
        className="gap-hatch size-7 rounded-ds-sm border border-dashed border-border-gap"
      />
      <div className="flex min-w-0 flex-col gap-1">{children}</div>
      <HeldTrace trace={trace} label={label} />
    </li>
  );
}

function ChartGapWell({
  gap,
  entry,
  folder,
}: {
  gap: ChartGap;
  entry: OutputEntry;
  folder: string;
}) {
  const title = readerText(gap.title);
  return (
    <GapWell trace={traceKey(entry, gap.line)} label={`Show sources for ${title}`}>
      <p className="text-small font-medium text-text-primary first-letter:uppercase">
        {title}: not drawn
      </p>
      <p className="text-caption text-text-secondary">{gapReason(gap.reason)}</p>
      <span className="flex min-h-8 items-center max-[480px]:min-h-11">
        <Button href={evidencePath(folder, entry, gap.line)} color="link-gray" size="sm">
          Source table in Evidence
        </Button>
      </span>
    </GapWell>
  );
}

/**
 * The module's limitations as gap wells, as the module reports them, with any table the passage
 * holds drawn in place; then the figures it declared it could not draw.
 */
export function ModuleLimitations({
  section,
  owed,
  gaps,
  entry,
  folder,
  span,
}: {
  section?: Section;
  owed: boolean;
  gaps: readonly ChartGap[];
  entry: OutputEntry;
  folder: string;
  span: 8 | 12;
}) {
  const paragraphs = (section?.blocks ?? []).filter(
    (block): block is TextBlock => block.type === "text" && readable(block),
  );
  const tables = (section?.blocks ?? []).filter((block): block is Table => block.type === "table");
  if (!paragraphs.length && !tables.length && !owed && !gaps.length) return null;
  const title = "Limitations of this module";
  return (
    <Tile span={span} label={title} title={<Anchor id={ANCHOR.limitations}>{title}</Anchor>}>
      <p className="-mt-2 text-caption text-text-tertiary">As the module reports them</p>
      {owed && !paragraphs.length && !tables.length && <GapNote>{MISSING_PASSAGE}</GapNote>}
      <ul className="flex flex-col">
        {paragraphs.map((block) => (
          <GapWell
            key={block.line}
            trace={traceKey(entry, block.line)}
            label="Show sources for this limitation"
          >
            <Prose
              text={block.text}
              href={evidencePath(folder, entry, block.line)}
              className="text-small text-text-primary"
            />
          </GapWell>
        ))}
        {gaps.map((gap) => (
          <ChartGapWell key={`gap-${String(gap.line)}`} gap={gap} entry={entry} folder={folder} />
        ))}
      </ul>
      {tables.map((table) => (
        <PassageTable key={table.line} table={table} title={title} entry={entry} folder={folder} />
      ))}
    </Tile>
  );
}

/**
 * One forward link to the module after this one in stage order; nothing after the last. Beside
 * the limitations it is the last row's right third; without them it closes the page full width.
 */
export function NextModule({
  next,
  href,
  wide,
}: {
  next?: FrameModule;
  href: (id: string) => string;
  wide: boolean;
}) {
  if (!next) return null;
  const stage = stageOf(next.id);
  const place = stage.number
    ? `${stage.name} · stage ${String(stage.number)} of ${String(stage.of)}`
    : stage.name;
  return (
    <a
      href={href(next.id)}
      aria-label={`Next module: ${next.name}`}
      className={cx(
        "group flex min-w-0 gap-5 rounded-ds-lg border border-border-subtle bg-surface-card p-5 outline-focus-ring hover:border-border-container focus-visible:outline-2 focus-visible:outline-offset-2 sm:p-6",
        wide
          ? "flex-row items-center justify-between lg:col-span-12"
          : "flex-col justify-between lg:col-span-4",
      )}
    >
      <span className="text-caption font-medium text-text-secondary">Next module</span>
      <span className={cx("flex items-end justify-between gap-4", wide && "flex-1 items-center")}>
        <span className="flex min-w-0 flex-col gap-1.5">
          <span className="font-display text-h3 font-medium text-text-primary">
            {next.name}{" "}
            <span className="font-mono text-caption font-normal text-text-tertiary">{next.id}</span>
          </span>
          <span className="text-caption text-text-secondary">
            {place} · {next.state}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="grid size-10 flex-none place-items-center rounded-ds-sm border border-action-subtle-hover bg-surface-selected text-action"
        >
          <ArrowRight className="size-4" />
        </span>
      </span>
    </a>
  );
}
