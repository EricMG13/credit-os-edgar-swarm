import { sourceCitationNote, sourceFileLinks } from "./sourceFiles";
import { useState, type ReactNode } from "react";
import { BottomLine } from "../library/parts/BottomLine";
import { DownloadButton } from "../library/parts/DownloadButton";
import { RunContext } from "../library/parts/RunContext";
import { TraceControl, TRACE_HOST } from "../library/parts/TraceControl";
import { TraceDrawer } from "../library/parts/TraceDrawer";
import type { Trace, TreeNode } from "../library/slice";
import { moduleName } from "./api";
import { traceKey } from "./reportView";
import { card, heading } from "./layout";
import { drawnQualificationLines } from "./visuals/drawnQualifications";
import { monitoringLabel, typedModuleTable } from "./report/ModuleTable";
import { calculationNodes } from "./report/calculations";
import {
  classifySections,
  containsReference,
  displayColumns,
  evidencePath,
  evidenceHref,
  evidenceToken,
  CONFIDENCE_INPUTS,
  FORECAST_INPUTS,
  methodNote,
  publishedHref,
  readParagraph,
  type Block,
  plainModuleNames,
  type OutputEntry,
  type PublishedRun,
  type Section,
  type Snapshot,
  type Table,
} from "./publishedReport";

export function richParts(value: string): ReactNode {
  return value.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**"))
      return <strong key={index}>{plainModuleNames(part.slice(2, -2))}</strong>;
    if (part.startsWith("`") && part.endsWith("`"))
      return <code key={index}>{part.slice(1, -1)}</code>;
    return plainModuleNames(part.replaceAll("\\|", "|"));
  });
}

/** The text richParts draws, without its marks. */
export function plainText(value: string): string {
  return value
    .replace(
      /\*\*([^*]+)\*\*|`([^`]+)`/g,
      (_, bold: string | undefined, code: string | undefined) => bold ?? code ?? "",
    )
    .replaceAll("\\|", "|");
}

function matchingDownload(run: PublishedRun, entry: OutputEntry) {
  const linked =
    entry.selected && run.evidence.handoffs.find((item) => item.module === entry.output.module);
  if (
    !linked ||
    linked.href !==
      `downloads/${encodeURIComponent(run.folder)}/${encodeURIComponent(entry.output.module)}.md`
  )
    return null;
  return publishedHref(linked.href, run.folder);
}

export function HandoffDownload({ run, entry }: { run: PublishedRun; entry: OutputEntry }) {
  const href = matchingDownload(run, entry);
  return href ? (
    <DownloadButton
      download={{
        label: `Download ${moduleName(entry.output.module)}`,
        href,
        reason: null,
      }}
    />
  ) : null;
}

const traceTarget = (entry: OutputEntry, line?: number) => evidenceToken(entry, line);

function tableStatement(table: Table, row: Table["rows"][number]) {
  return displayColumns(table.headers, true, table.rows)
    .map((index) =>
      row.cells[index] ? [table.headers[index], row.cells[index]].filter(Boolean).join(" — ") : "",
    )
    .filter(Boolean)
    .join("\n");
}

export function traceDetails(
  snapshot: Snapshot,
  entry: OutputEntry,
  section: Section,
  block: Block,
  line: number,
) {
  const chipsAt = (at: number) => snapshot.chips[`${entry.output.id}:${String(at)}`] ?? [];
  const row = block.type === "table" ? block.rows.find((item) => item.line === line) : null;
  const tableRows = block.type === "table" && block.line === line ? block.rows : [];
  const chips = [
    ...new Map(
      [...chipsAt(line), ...tableRows.flatMap((item) => chipsAt(item.line))].map((chip) => [
        JSON.stringify(chip),
        chip,
      ]),
    ).values(),
  ];
  const statement =
    block.type === "text"
      ? readParagraph(block.text).body
      : block.type === "table" && row
        ? tableStatement(block, row)
        : section.heading;
  const readerColumns =
    block.type === "table" ? displayColumns(block.headers, false, block.rows) : [];
  const basisColumns =
    block.type === "table"
      ? displayColumns(block.headers, true, block.rows).filter(
          (index) =>
            !readerColumns.includes(index) || block.headers[index] === "Basis and limitation",
        )
      : [];
  const basis =
    block.type === "text"
      ? readParagraph(block.text).basis
      : [
          ...new Set(
            (row ? [row] : tableRows).flatMap((item) =>
              basisColumns.map((index) => item.cells[index]).filter(Boolean),
            ),
          ),
        ].join("\n") || null;
  return { chips, statement, basis };
}

function buildTrace(
  snapshot: Snapshot,
  entry: OutputEntry,
  section: Section,
  block: Block,
  line: number,
  target: string,
): Trace {
  const { chips, statement, basis } = traceDetails(snapshot, entry, section, block, line);
  const node = (label: string, value: string | null, note: string | null = null): TreeNode => ({
    label,
    value,
    note,
    children: [],
  });
  const excerpt = chips.find((chip) => chip.excerpt);
  return {
    title: `Sources for ${section.heading}`,
    heading: section.heading,
    subtitle: `${moduleName(entry.output.module)} · Handoff line ${String(line)}`,
    statement:
      section.heading === FORECAST_INPUTS
        ? "The model calculation uses the inputs recorded in this handoff."
        : plainModuleNames(statement.replaceAll("**", "").replaceAll("`", "")),
    derivation: {
      ...node("Evidence retained with this item", ""),
      children: [
        ...(basis ? [node("Basis", plainModuleNames(basis))] : []),
        ...calculationNodes(entry, basis ?? "", line),
        ...chips.flatMap((chip) => {
          const source = chip.source ?? chip.label;
          return source ? [node(source, "", sourceCitationNote(chip))] : [];
        }),
        ...(!basis && !chips.length
          ? section.heading === CONFIDENCE_INPUTS && block.type === "table"
            ? // The score is computed from the handoff's own inputs table: show its rows as written.
              block.rows.map((item) => node(item.cells[0] ?? "", item.cells[1] ?? ""))
            : [
                // Recorded inputs are not a gap: only a missing basis carries no value.
                section.heading === FORECAST_INPUTS
                  ? node("Recorded forecast inputs", "")
                  : node("Basis was not recorded for this item", null),
              ]
          : []),
      ],
    },
    excerpt: excerpt
      ? {
          quote: excerpt.excerpt ?? "",
          source: excerpt.source ?? excerpt.label ?? "Source name unavailable",
        }
      : null,
    qualification: null,
    evidenceItem: target,
    sourceLinks: [
      ...new Map(
        chips
          .flatMap((chip) => sourceFileLinks(entry.output.id.split("/")[0] ?? "", chip))
          .map((link) => [link.href, link]),
      ).values(),
    ],
  };
}

export function handoffBlockAt(entry: OutputEntry, line: number) {
  for (const section of entry.sections) {
    const block = section.blocks.find(
      (item) =>
        item.line === line || (item.type === "table" && item.rows.some((row) => row.line === line)),
    );
    if (block) return { section, block };
  }
  return null;
}

export function traceForLine(snapshot: Snapshot, entry: OutputEntry, _index: number, line: number) {
  const found = handoffBlockAt(entry, line);
  return (
    found && buildTrace(snapshot, entry, found.section, found.block, line, traceTarget(entry, line))
  );
}

export function PublishedTable({
  table,
  evidence = false,
  traceAt,
  rowSource,
  rowHref,
  href,
  heading: tableHeading,
}: {
  table: Table;
  /** The section heading that names the table's scroll region; "Table" when not given. */
  heading?: string;
  evidence?: boolean;
  traceAt?: (line: number) => string;
  rowSource?: (line: number, label: string) => ReactNode;
  rowHref?: (line: number) => string | undefined;
  href?: string;
}) {
  const columns = displayColumns(table.headers, evidence, table.rows);
  if (!columns.length || !table.rows.length) return null;
  const pinned = (column: number, background: string) =>
    columns.length >= 5 && column === columns[0]
      ? ` sm:sticky sm:left-0 sm:min-w-56 ${background}`
      : "";
  const sources =
    rowSource ??
    (traceAt &&
      ((line: number, name: string) => (
        <TraceControl trace={traceAt(line)} label={`Show sources for ${plainModuleNames(name)}`} />
      )));
  // A wide table scrolls sideways: it is a named, focusable region so the keyboard can reach it.
  const scrolls =
    columns.length >= 5 ? { role: "region", "aria-label": tableHeading || "Table" } : {};
  return (
    <div
      {...scrolls}
      tabIndex={columns.length >= 5 ? 0 : undefined}
      className="relative min-w-0 overflow-x-auto rounded-ds-md border border-border-hairline"
    >
      <table className="w-full border-collapse text-sm">
        <thead className="bg-surface-subtle text-text-secondary">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                scope="col"
                className={`px-3 py-2.5 text-left font-semibold${pinned(column, "bg-surface-subtle")}`}
              >
                {richParts(table.headers[column] ?? "")}
              </th>
            ))}
            {sources && (
              <th scope="col" className="px-2 py-2.5 text-left font-semibold">
                <span className="sr-only">Sources</span>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr
              key={row.line}
              className={`${TRACE_HOST} border-t border-border-hairline align-top`}
            >
              {columns.map((column) => {
                const cell = row.cells[column] ?? "";
                const sourceHref = rowHref?.(row.line) ?? href;
                return (
                  <td
                    key={column}
                    className={`px-3 py-2.5 text-text-secondary${pinned(column, "bg-surface-card")}`}
                  >
                    {!evidence && containsReference(cell) ? (
                      sourceHref ? (
                        <a href={sourceHref} className="text-action underline">
                          In Evidence
                        </a>
                      ) : (
                        "Source reference unavailable"
                      )
                    ) : cell.trim() ? (
                      richParts(cell)
                    ) : (
                      <span aria-label="Empty in the handoff">—</span>
                    )}
                  </td>
                );
              })}
              {sources && (
                <td className="px-2 py-1.5">{sources(row.line, row.cells[0] || "this row")}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function readerBlock(block: Block): boolean {
  return block.type === "table" || (block.type === "text" && !methodNote(block.text));
}

export const RECORDS_ID = "statements-and-records";
// One register code (T4.4, P3, T2F.2); the prefix also takes the dash that follows it.
const CODE = String.raw`[TP]\d+[A-Z]?(?:\.\d+)?`;
const RECORD_PREFIX = new RegExp(String.raw`^${CODE}\s+(?:[-\u2013\u2014]\s*)?`);
const RECORD_CODE = new RegExp(String.raw`^(?:${CODE}\s|Confidence inputs$)`);

function registerBlocks(section: Section, entry: OutputEntry) {
  if (entry.output.module === "CP-6" && /^T6E\.(?:4|6|7)\b/.test(section.heading))
    return section.blocks.filter(readerBlock);
  return section.blocks.filter((block) => {
    if (block.type !== "table") return false;
    if (monitoringLabel(entry.output.module, section.heading, block)) return true;
    const headers = block.headers.map((header) => header.trim().toLowerCase());
    return (
      (headers.includes("probability") && headers.includes("impact")) ||
      headers.some((header) => /leading/.test(header)) ||
      (/date|window/.test(headers[0] ?? "") && headers.some((header) => /^event/.test(header)))
    );
  });
}

// A finding section whose heading starts with a register code: its prose stays on the page,
// its tables go to Evidence unless they are promoted.
const isCoded = (section: Section, role: string) =>
  role === "finding" && RECORD_CODE.test(section.heading);

// Coded sections with a table that the page does not draw; Evidence holds those tables.
export function recordSections(sections: Section[], entry: OutputEntry) {
  return classifySections(sections)
    .filter(({ section, role }) => {
      // Confidence inputs is a register here: the page draws its score, Evidence holds the table.
      if (
        !isCoded(section, role) &&
        !(role === "registers" && section.heading === "Confidence inputs")
      )
        return false;
      const drawn = registerBlocks(section, entry);
      return section.blocks.some((block) => block.type === "table" && !drawn.includes(block));
    })
    .map(({ section }) => section);
}

const NO_QUALIFICATION = "No qualification.";
const DRAWING_PREFIX = /^(?:Chart data|Map|Events): /;
/** A section heading as drawn: without the drawing prefix, the register code and its dash. */
export const drawingTitle = (heading: string) =>
  heading.replace(DRAWING_PREFIX, "").replace(RECORD_PREFIX, "");

// `chartsDrawn` is true on a page that draws this module's charts with their qualifications.
export function findingBlocks(
  sections: Section[],
  entry: OutputEntry,
  figureTableLines: readonly number[] = [],
  chartsDrawn = false,
) {
  const qualified = chartsDrawn
    ? drawnQualificationLines(entry.output, sections)
    : new Set<number>();
  const drawings = new Set(
    [
      ...(entry.output.charts ?? []),
      ...(entry.output.chartGaps ?? []),
      ...(entry.output.maps ?? []),
      ...(entry.output.events ?? []),
    ]
      .map((item) => item.table)
      .concat(figureTableLines),
  );
  const blocksOf = (section: Section, role: string) => {
    if (role === "registers") return registerBlocks(section, entry);
    if (role !== "finding" && role !== "passage" && role !== "drawing") return [];
    const promoted = isCoded(section, role) ? registerBlocks(section, entry) : null;
    return section.blocks.filter(
      (block) =>
        readerBlock(block) &&
        !drawings.has(block.line) &&
        (promoted === null || block.type === "text" || promoted.includes(block)) &&
        // A chart's own qualification, or the empty one, is not drawn a second time.
        (role !== "drawing" ||
          (!qualified.has(block.line) &&
            !(block.type === "text" && block.text.trim() === NO_QUALIFICATION))),
    );
  };
  return classifySections(sections).flatMap(({ section, role }) => {
    const blocks = blocksOf(section, role);
    // A promoted table is typed by its full heading; a section without one drops the code here.
    const plain = isCoded(section, role) && registerBlocks(section, entry).length === 0;
    return blocks.length
      ? [{ ...section, heading: plain ? drawingTitle(section.heading) : section.heading, blocks }]
      : [];
  });
}

export function FindingParagraph({
  block,
  trace,
  href,
}: {
  block: Extract<Block, { type: "text" }>;
  trace: string;
  href: string;
}) {
  const { body } = readParagraph(block.text);
  if (!body) return null;
  return (
    <div className={`${TRACE_HOST} flex items-start justify-start gap-3`}>
      <p className="max-w-[55ch] text-body wrap-anywhere text-text-secondary">
        {containsReference(body) ? (
          <a href={href} className="text-action underline">
            Read this passage in Evidence
          </a>
        ) : (
          richParts(body)
        )}
      </p>
      <TraceControl trace={trace} label="Show sources for this passage" />
    </div>
  );
}

function RecordsCard({
  run,
  entry,
  records,
}: {
  run: PublishedRun;
  entry: OutputEntry;
  records: Section[];
}) {
  if (!records.length) return null;
  return (
    <section className={card} id={RECORDS_ID} tabIndex={-1}>
      <h2 className={heading}>Statements and records</h2>
      <p className="max-w-[76ch] text-body text-text-secondary">
        These tables are part of this module's record and are shown in Evidence.
      </p>
      <ul className="grid gap-1">
        {records.map((section) => (
          <li key={section.line}>
            <a
              href={evidencePath(run.folder, entry, section.line)}
              className="text-action underline"
            >
              {drawingTitle(section.heading)}
            </a>
          </li>
        ))}
      </ul>
      <a href={evidencePath(run.folder, entry)} className="text-action underline">
        Open this module in Evidence
      </a>
    </section>
  );
}

function findingLabel(section: Section, overviewLabel?: string) {
  return section.heading === "Bottom line" ? (overviewLabel ?? section.heading) : section.heading;
}

function findingsTraces(snapshot: Snapshot, entry: OutputEntry, sections: Section[]) {
  const traces: Record<string, Trace> = {};
  const key = (line: number) => traceKey(entry, line);
  for (const section of sections) {
    for (const block of section.blocks) {
      const lines = block.type === "table" ? block.rows.map((row) => row.line) : [block.line];
      for (const line of lines)
        traces[key(line)] = buildTrace(
          snapshot,
          entry,
          section,
          block,
          line,
          traceTarget(entry, line),
        );
    }
  }
  return traces;
}

function FindingsSummary({
  summary,
  entry,
  summaryTrace,
}: {
  summary: NonNullable<OutputEntry["output"]["summary"]>;
  entry: OutputEntry;
  summaryTrace: Trace | null | undefined | false;
}) {
  if (containsReference(summary.bottomLine)) return null;
  return (
    <BottomLine
      level="h3"
      text={{
        label: "Bottom line",
        lead: plainModuleNames(summary.bottomLine),
        rest: containsReference(summary.limitation) ? "" : plainModuleNames(summary.limitation),
        trace: summaryTrace ? traceKey(entry, summary.line) : null,
      }}
    />
  );
}

function findingsLayout(
  entry: OutputEntry,
  figureTableLines: readonly number[] | undefined,
  overview: boolean,
  chartsDrawn: boolean,
) {
  const sections = findingBlocks(entry.sections, entry, figureTableLines, chartsDrawn).filter(
    (section) =>
      !overview ||
      [
        "Bottom line",
        "Key findings",
        "Contrary evidence and what would change the view",
        "Limitations",
      ].includes(section.heading),
  );
  const keyFindings = overview
    ? sections.find((section) => section.heading === "Key findings")
    : undefined;
  const contrary = keyFindings
    ? sections.find(
        (section) => section.heading === "Contrary evidence and what would change the view",
      )
    : undefined;
  const ordered = sections.filter((section) => section !== contrary);
  const groups = ordered.map((section): [Section, Section?] =>
    section === keyFindings && contrary ? [section, contrary] : [section],
  );
  return { sections, groups };
}

function followingParagraphs(section: Section, entry: OutputEntry, folder: string) {
  return section.blocks
    .slice(1)
    .map((block) =>
      block.type === "text" ? (
        <FindingParagraph
          key={block.line}
          block={block}
          trace={traceKey(entry, block.line)}
          href={evidencePath(folder, entry, block.line)}
        />
      ) : null,
    );
}

function EmptyFindings({
  run,
  entry,
  records,
  afterBottomLine,
}: {
  run: PublishedRun;
  entry: OutputEntry;
  records: Section[];
  afterBottomLine?: ReactNode;
}) {
  return (
    <>
      <p className="text-text-secondary">
        {entry.output.parseError
          ? "This handoff could not be read into sections."
          : "This handoff has no findings in this report format."}{" "}
        <a href={evidencePath(run.folder, entry)} className="text-action underline">
          Open Evidence
        </a>
      </p>
      {afterBottomLine}
      <RecordsCard run={run} entry={entry} records={records} />
    </>
  );
}

export function ReportFindings({
  snapshot,
  run,
  entry,
  entryIndex,
  overview = false,
  overviewLabel,
  afterBottomLine,
  judgement,
  figureTableLines,
  chartsDrawn = false,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  entry: OutputEntry;
  entryIndex: number;
  overview?: boolean;
  overviewLabel?: string;
  afterBottomLine?: ReactNode;
  judgement?: string;
  figureTableLines?: readonly number[];
  chartsDrawn?: boolean;
}) {
  const [activeTrace, setActiveTrace] = useState<string | null>(null);
  const { sections, groups } = findingsLayout(entry, figureTableLines, overview, chartsDrawn);
  const key = (line: number) => traceKey(entry, line);
  const traces = findingsTraces(snapshot, entry, sections);
  const hasBottomLine = sections.some((section) => section.heading === "Bottom line");
  const summary = !hasBottomLine && entry.output.summary;
  const summaryTrace = summary && traceForLine(snapshot, entry, entryIndex, summary.line);
  if (summaryTrace) traces[key(summary.line)] = summaryTrace;
  const active = activeTrace === null ? null : traces[activeTrace];
  const records = overview ? [] : recordSections(entry.sections, entry);
  if (!sections.length && !summary)
    return (
      <EmptyFindings run={run} entry={entry} records={records} afterBottomLine={afterBottomLine} />
    );
  function drawSection(section: Section) {
    const first = section.blocks[0];
    if (
      section.heading === "Bottom line" &&
      first?.type === "text" &&
      !containsReference(readParagraph(first.text).body)
    ) {
      return (
        <div
          className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-3"
          key={section.line}
          id={`finding-${String(section.line)}`}
          tabIndex={-1}
        >
          <BottomLine
            level="h2"
            text={{
              label: findingLabel(section, overviewLabel),
              lead:
                judgement ??
                plainModuleNames(
                  readParagraph(first.text).body.replaceAll("**", "").replaceAll("`", ""),
                ),
              rest: judgement
                ? plainModuleNames(
                    readParagraph(first.text).body.replaceAll("**", "").replaceAll("`", ""),
                  )
                : "",
              trace: key(first.line),
            }}
          />
          {afterBottomLine}
          {section.blocks.length > 1 && overview && (
            <details className="rounded-lg border border-border-hairline bg-surface-card px-5 py-3">
              <summary className="cursor-pointer font-medium">Decision rationale</summary>
              <div className="mt-3 grid gap-3">
                {followingParagraphs(section, entry, run.folder)}
              </div>
            </details>
          )}
          {!overview && section.blocks.slice(1).some((block) => block.type === "text") && (
            <div className={card}>{followingParagraphs(section, entry, run.folder)}</div>
          )}
        </div>
      );
    }
    if (!overview && section.blocks.length === 1 && first?.type === "table") {
      const typed = typedModuleTable(entry.output.module, section.heading, first, key);
      if (typed) {
        return (
          <div
            key={section.line}
            className={card}
            id={`finding-${String(section.line)}`}
            tabIndex={-1}
          >
            {typed}
          </div>
        );
      }
    }
    return (
      <section
        key={section.line}
        className={card}
        id={`finding-${String(section.line)}`}
        tabIndex={-1}
      >
        <h2 className={`${heading} first-letter:uppercase`}>
          {richParts(drawingTitle(findingLabel(section, overviewLabel)))}
        </h2>
        {section.heading === "Bottom line" && afterBottomLine}
        {section.blocks.map((block) =>
          block.type === "table" ? (
            <div className="min-w-0" key={block.line}>
              {(!overview &&
                typedModuleTable(entry.output.module, section.heading, block, key)) || (
                <PublishedTable
                  table={block}
                  heading={plainText(drawingTitle(section.heading))}
                  traceAt={key}
                  rowHref={(line) => evidencePath(run.folder, entry, line)}
                />
              )}
            </div>
          ) : block.type === "text" ? (
            <FindingParagraph
              key={block.line}
              block={block}
              trace={key(block.line)}
              href={evidencePath(run.folder, entry, block.line)}
            />
          ) : null,
        )}
      </section>
    );
  }
  return (
    <RunContext.Provider value={{ traces, open: setActiveTrace }}>
      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-4">
        {summary && <FindingsSummary summary={summary} entry={entry} summaryTrace={summaryTrace} />}
        {!hasBottomLine && afterBottomLine}
        {groups.map(([section, contrary]) => {
          if (!contrary) return drawSection(section);
          return (
            <div key={section.line} className="grid min-w-0 gap-4 lg:grid-cols-2">
              {drawSection(section)}
              {drawSection(contrary)}
            </div>
          );
        })}
        <RecordsCard run={run} entry={entry} records={records} />
      </div>
      {active && (
        <TraceDrawer
          trace={active}
          evidenceHref={evidenceHref(run.folder, active.evidenceItem)}
          isOpen
          onClose={() => {
            setActiveTrace(null);
          }}
        />
      )}
    </RunContext.Provider>
  );
}
