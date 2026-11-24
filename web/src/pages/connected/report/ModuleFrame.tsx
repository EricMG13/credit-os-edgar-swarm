import { ArrowRight } from "@untitledui/icons";
import { useContext, type ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { StatusBadge } from "@/components/status/StatusBadge";
import type { ModuleState } from "@/pages/library/slice";
import { RunContext } from "@/pages/library/parts/RunContext";
import { TRACE_HOST, TraceControl } from "@/pages/library/parts/TraceControl";
import { cx } from "@/utils/cx";
import { FindingParagraph, PublishedTable, drawingTitle } from "../ReportContent";
import {
  containsReference,
  evidencePath,
  readParagraph,
  readerText,
  type OutputEntry,
  type Section,
} from "../publishedReport";
import { traceKey } from "../reportView";
import { plainText, richParts } from "../richText";
import { typedModuleTable } from "./ModuleTable";
import { GapNote, Tile } from "./overview/Tile";
import { stageOf } from "./stageNumber";
import { CONTRARY, KEY_FINDINGS, type BottomLineSource, type TextBlock } from "./moduleFrame";

const MISSING_PASSAGE = "Not established for this run. The module's handoff has no such passage.";

export type FrameModule = { id: string; name: string; state: ModuleState };

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
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="size-4 flex-none text-warning-mark"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="8" cy="8" r="6.25" />
      <path d="M3.6 3.6l8.8 8.8" strokeLinecap="round" />
    </svg>
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
          <span className="text-caption text-text-tertiary">Bottom line</span>
          <Prose
            text={text.replaceAll("**", "").replaceAll("`", "")}
            href={evidencePath(folder, entry, line)}
            className="max-w-bottom-line text-h4 font-medium text-balance wrap-anywhere text-text-primary sm:text-h3 lg:text-h2"
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

function basisLine(module: FrameModule, unit: string | undefined) {
  const stage = stageOf(module.id);
  return [
    stage.number ? `${stage.name} · stage ${String(stage.number)} of ${String(stage.of)}` : "",
    // The run's money unit, on the stages whose modules report amounts.
    unit && stage.number >= 2 && stage.number <= 4 ? `Amounts in ${unit}` : "",
  ]
    .filter(Boolean)
    .join(" · ");
}

/**
 * The module's header tile (P1): name, state and basis, then the bottom line in large type with
 * its one trace control, and the confidence meter. A module that could not run is drawn blocked.
 */
export function ModuleHeader({
  module,
  entry,
  bottomLine,
  owed,
  folder,
  unit,
  confidence,
}: {
  module: FrameModule;
  entry?: OutputEntry;
  bottomLine: BottomLineSource;
  /** The module owes a bottom line its handoff does not hold. */
  owed: boolean;
  folder: string;
  unit?: string;
  confidence?: ReactNode;
}) {
  const blocked = module.state === "Not assessable";
  const basis = basisLine(module, unit);
  const titleId = `module-title-${module.id}`;
  return (
    <section
      aria-labelledby={titleId}
      className={cx(
        "flex min-w-0 flex-col gap-5 rounded-ds-lg border p-5 sm:p-7 lg:col-span-12",
        blocked
          ? "border-dashed border-warning-mark bg-surface-card"
          : "border-border-subtle bg-surface-card",
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-1.5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="rounded-ds-xs bg-surface-subtle px-2 py-0.5 font-mono text-caption font-medium text-text-secondary">
              {module.id}
            </span>
            <h2 id={titleId} className="min-w-0 font-display text-h2 text-balance wrap-anywhere">
              {module.name}
            </h2>
            {blocked ? (
              <span className="flex items-center gap-1.5 text-small font-medium text-warning-text">
                <SlashCircle />
                Not assessable
              </span>
            ) : (
              <StatusBadge set="Module state" state={module.state} />
            )}
          </div>
          {basis && <p className="text-small text-text-tertiary">{basis}</p>}
        </div>
        {confidence}
      </div>
      {entry && bottomLine ? (
        <BottomLineText source={bottomLine} entry={entry} folder={folder} />
      ) : (
        owed && <GapNote>{MISSING_PASSAGE}</GapNote>
      )}
    </section>
  );
}

function SectionTable({
  section,
  block,
  entry,
  folder,
  typed,
}: {
  section: Section;
  block: Extract<Section["blocks"][number], { type: "table" }>;
  entry: OutputEntry;
  folder: string;
  typed: boolean;
}) {
  const key = (line: number) => traceKey(entry, line);
  if (typed) return typedModuleTable(entry.output.module, section.heading, block, key);
  return (
    <PublishedTable
      table={block}
      heading={plainText(drawingTitle(section.heading))}
      traceAt={key}
      rowHref={(line) => evidencePath(folder, entry, line)}
    />
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

/** The passage's blocks: paragraphs with their traces, and its tables inline. */
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
      <Paragraph key={block.line} block={block} entry={entry} folder={folder} />
    ) : block.type === "table" ? (
      <SectionTable
        key={block.line}
        section={section}
        block={block}
        entry={entry}
        folder={folder}
        typed={false}
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
  const paragraphs = section.blocks.filter((block): block is TextBlock => block.type === "text");
  const tables = section.blocks.filter((block) => block.type === "table");
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
        <SectionTable
          key={block.line}
          section={section}
          block={block}
          entry={entry}
          folder={folder}
          typed={false}
        />
      ))}
    </>
  );
}

function PassageGap({ name, span }: { name: string; span: 5 | 7 | 12 }) {
  return (
    <Tile span={span} label={name} title={name}>
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
        <Tile span={leftSpan} label={KEY_FINDINGS} title={KEY_FINDINGS}>
          <KeyFindings section={keyFindings} entry={entry} folder={folder} />
        </Tile>
      ) : (
        findingsGap && <PassageGap name={KEY_FINDINGS} span={leftSpan} />
      )}
      {contrary ? (
        <Tile span={rightSpan} label={CONTRARY} title={CONTRARY} tone="counter">
          <PassageBlocks section={contrary} entry={entry} folder={folder} />
        </Tile>
      ) : (
        contraryGap && <PassageGap name={CONTRARY} span={rightSpan} />
      )}
    </>
  );
}

/**
 * The other reader sections the module wrote: prose with its traces, and, where the module has
 * no lead of its own, its typed tables. Plain tables are in the records region.
 */
export function OtherSections({
  sections,
  entry,
  folder,
  typedTables,
}: {
  sections: readonly Section[];
  entry: OutputEntry;
  folder: string;
  typedTables: boolean;
}) {
  return sections.flatMap((section) => {
    const key = (line: number) => traceKey(entry, line);
    const tables = typedTables
      ? section.blocks.flatMap((block) => {
          if (block.type !== "table") return [];
          const typed = typedModuleTable(entry.output.module, section.heading, block, key);
          return typed ? [{ line: block.line, typed }] : [];
        })
      : [];
    const paragraphs = section.blocks.filter((block) => block.type === "text");
    if (!paragraphs.length && !tables.length) return [];
    const title = readerText(plainText(drawingTitle(section.heading)));
    return [
      <Tile
        key={section.line}
        span={12}
        label={title}
        title={
          // A typed table carries its own heading; the section's would stand twice.
          tables.length ? undefined : <span className="first-letter:uppercase">{title}</span>
        }
      >
        {section.blocks.map((block) => {
          if (block.type === "text")
            return <Paragraph key={block.line} block={block} entry={entry} folder={folder} />;
          const table = tables.find(({ line }) => line === block.line);
          return table ? (
            <div key={block.line} className="min-w-0">
              {table.typed}
            </div>
          ) : null;
        })}
      </Tile>,
    ];
  });
}

type ChartGap = { title: string; reason: string; line: number };

/** The figures the module declared it could not draw, with its reason. */
export function chartGaps(entry: OutputEntry): ChartGap[] {
  return (entry.output.chartGaps ?? []).flatMap((item) => {
    const title = typeof item.title === "string" ? item.title.trim() : "";
    const reason = typeof item.gap === "string" ? item.gap.trim() : "";
    return title && reason ? [{ title, reason, line: item.table }] : [];
  });
}

function Well({ trace, label, children }: { trace: string; label: string; children: ReactNode }) {
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

/** The module's limitations as gap wells, as the module reports them; then the figures it could not draw. */
export function ModuleLimitations({
  section,
  owed,
  gaps,
  entry,
  folder,
}: {
  section?: Section;
  owed: boolean;
  gaps: readonly ChartGap[];
  entry: OutputEntry;
  folder: string;
}) {
  const paragraphs = (section?.blocks ?? []).filter(
    (block): block is TextBlock => block.type === "text",
  );
  if (!paragraphs.length && !owed && !gaps.length) return null;
  return (
    <Tile span={12} label="Limitations of this module" title="Limitations of this module">
      <p className="-mt-2 text-caption text-text-tertiary">As the module reports them</p>
      {owed && !paragraphs.length && <GapNote>{MISSING_PASSAGE}</GapNote>}
      <ul className="flex flex-col">
        {paragraphs.map((block) => (
          <Well
            key={block.line}
            trace={traceKey(entry, block.line)}
            label="Show sources for this limitation"
          >
            <Prose
              text={block.text}
              href={evidencePath(folder, entry, block.line)}
              className="text-small text-text-primary"
            />
          </Well>
        ))}
        {gaps.map((gap) => (
          <Well
            key={`gap-${String(gap.line)}`}
            trace={traceKey(entry, gap.line)}
            label={`Show sources for ${gap.title}`}
          >
            <p className="text-small font-medium text-text-primary first-letter:uppercase">
              {gap.title}: not drawn
            </p>
            <p className="text-caption text-text-secondary">
              {containsReference(gap.reason)
                ? "The reason cites a source; see Evidence."
                : readerText(gap.reason)}
            </p>
          </Well>
        ))}
      </ul>
    </Tile>
  );
}

/** One forward link to the module after this one in stage order; nothing after the last. */
export function NextModule({ next, href }: { next?: FrameModule; href: (id: string) => string }) {
  if (!next) return null;
  const stage = stageOf(next.id);
  const place = stage.number
    ? `${stage.name} · stage ${String(stage.number)} of ${String(stage.of)}`
    : stage.name;
  return (
    <a
      href={href(next.id)}
      aria-label={`Next module: ${next.name}`}
      className="group flex min-w-0 flex-col justify-between gap-5 rounded-ds-lg border border-border-subtle bg-surface-card p-5 outline-focus-ring hover:border-border-container focus-visible:outline-2 focus-visible:outline-offset-2 sm:p-6 lg:col-span-4 lg:col-start-9"
    >
      <span className="text-caption font-medium text-text-secondary">Next module</span>
      <span className="flex items-end justify-between gap-4">
        <span className="flex min-w-0 flex-col gap-2">
          <span className="self-start rounded-ds-xs bg-surface-subtle px-2 py-0.5 font-mono text-caption font-medium text-text-secondary">
            {next.id}
          </span>
          <span className="font-display text-h3 font-medium text-text-primary">{next.name}</span>
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
