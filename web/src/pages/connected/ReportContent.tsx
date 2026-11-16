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
import { monitoringLabel, typedModuleTable } from "./report/ModuleTable";
import { calculationNodes } from "./report/calculations";
import {
  classifySections,
  containsReference,
  displayColumns,
  evidencePath,
  evidenceHref,
  evidenceToken,
  FORECAST_INPUTS,
  methodNote,
  publishedHref,
  readParagraph,
  type Block,
  type OutputEntry,
  type PublishedRun,
  type Section,
  type Snapshot,
  type Table,
} from "./publishedReport";

export function richParts(value: string): ReactNode {
  return value.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**"))
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("`") && part.endsWith("`"))
      return <code key={index}>{part.slice(1, -1)}</code>;
    return part.replaceAll("\\|", "|");
  });
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
        label: `Download ${moduleName(entry.output.module).replace(/ \(CP-[^)]+\)$/, "")}`,
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
        : statement.replaceAll("**", "").replaceAll("`", ""),
    derivation: {
      ...node("Evidence retained with this item", ""),
      children: [
        ...(basis ? [node("Basis", basis)] : []),
        ...calculationNodes(entry, basis ?? "", line),
        ...chips.flatMap((chip) => {
          const source = chip.source ?? chip.label;
          return source ? [node(source, "", sourceCitationNote(chip))] : [];
        }),
        ...(!basis && !chips.length
          ? [
              node(
                section.heading === FORECAST_INPUTS
                  ? "Recorded forecast inputs"
                  : "Basis was not recorded for this item",
                null,
              ),
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
}: {
  table: Table;
  evidence?: boolean;
  traceAt?: (line: number) => string;
  rowSource?: (line: number, label: string) => ReactNode;
  rowHref?: (line: number) => string | undefined;
  href?: string;
}) {
  const columns = displayColumns(table.headers, evidence, table.rows);
  if (!columns.length || !table.rows.length) return null;
  const sources =
    rowSource ??
    (traceAt &&
      ((line: number, name: string) => (
        <TraceControl trace={traceAt(line)} label={`Show sources for ${name}`} />
      )));
  return (
    <div className="relative min-w-0 overflow-x-auto rounded-ds-md border border-border-hairline">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-surface-subtle text-text-secondary">
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col" className="px-3 py-2.5 text-left font-semibold">
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
                  <td key={column} className="px-3 py-2.5 text-text-secondary">
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

export function findingBlocks(
  sections: Section[],
  entry: OutputEntry,
  figureTableLines: readonly number[] = [],
) {
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
  return classifySections(sections)
    .flatMap(({ section, role }) => {
      if (role === "finding" || role === "passage" || role === "drawing") {
        return [
          {
            ...section,
            blocks: section.blocks.filter(
              (block) => readerBlock(block) && !drawings.has(block.line),
            ),
          },
        ];
      }
      if (role !== "registers") return [];
      if (entry.output.module === "CP-6" && /^T6E\.(?:4|6|7)\b/.test(section.heading)) {
        return [{ ...section, blocks: section.blocks.filter(readerBlock) }];
      }
      const promoted = section.blocks.filter((block) => {
        if (block.type !== "table") return false;
        if (monitoringLabel(entry.output.module, section.heading, block)) return true;
        const headers = block.headers.map((header) => header.trim().toLowerCase());
        return (
          (headers.includes("probability") && headers.includes("impact")) ||
          headers.some((header) => /leading/.test(header)) ||
          (/date|window/.test(headers[0] ?? "") && headers.some((header) => /^event/.test(header)))
        );
      });
      return promoted.length ? [{ ...section, blocks: promoted }] : [];
    })
    .filter((section) => section.blocks.length > 0);
}

function FindingParagraph({
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
    <div className={`${TRACE_HOST} flex items-start justify-between gap-3`}>
      <p className="max-w-[76ch] text-body wrap-anywhere text-text-secondary">
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

export function ReportFindings({
  snapshot,
  run,
  entry,
  entryIndex,
  overview = false,
  afterBottomLine,
  judgement,
  figureTableLines,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  entry: OutputEntry;
  entryIndex: number;
  overview?: boolean;
  afterBottomLine?: ReactNode;
  judgement?: string;
  figureTableLines?: readonly number[];
}) {
  const [activeTrace, setActiveTrace] = useState<string | null>(null);
  const sections = findingBlocks(entry.sections, entry, figureTableLines).filter(
    (section) =>
      !overview ||
      [
        "Bottom line",
        "Key findings",
        "Contrary evidence and what would change the view",
        "Limitations",
      ].includes(section.heading),
  );
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
  const hasBottomLine = sections.some((section) => section.heading === "Bottom line");
  const summary = !hasBottomLine && entry.output.summary;
  const summaryTrace = summary && traceForLine(snapshot, entry, entryIndex, summary.line);
  if (summaryTrace) traces[key(summary.line)] = summaryTrace;
  const active = activeTrace === null ? null : traces[activeTrace];
  if (!sections.length && !summary)
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
      </>
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
              label: section.heading,
              lead:
                judgement ??
                readParagraph(first.text).body.replaceAll("**", "").replaceAll("`", ""),
              rest: judgement
                ? readParagraph(first.text).body.replaceAll("**", "").replaceAll("`", "")
                : "",
              trace: key(first.line),
            }}
          />
          {afterBottomLine}
          {section.blocks.length > 1 && overview && (
            <details className="rounded-lg border border-border-hairline bg-surface-card px-5 py-3">
              <summary className="cursor-pointer font-medium">Decision rationale</summary>
              <div className="mt-3 grid gap-3">
                {section.blocks
                  .slice(1)
                  .map((block) =>
                    block.type === "text" ? (
                      <FindingParagraph
                        key={block.line}
                        block={block}
                        trace={key(block.line)}
                        href={evidencePath(run.folder, entry, block.line)}
                      />
                    ) : null,
                  )}
              </div>
            </details>
          )}
          {!overview &&
            section.blocks
              .slice(1)
              .map((block) =>
                block.type === "text" ? (
                  <FindingParagraph
                    key={block.line}
                    block={block}
                    trace={key(block.line)}
                    href={evidencePath(run.folder, entry, block.line)}
                  />
                ) : null,
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
        <h2 className={heading}>{richParts(section.heading)}</h2>
        {section.heading === "Bottom line" && afterBottomLine}
        {section.blocks.map((block) =>
          block.type === "table" ? (
            <div className="min-w-0" key={block.line}>
              {(!overview &&
                typedModuleTable(entry.output.module, section.heading, block, key)) || (
                <PublishedTable
                  table={block}
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
        {summary && !containsReference(summary.bottomLine) && (
          <BottomLine
            level="h3"
            text={{
              label: "Bottom line",
              lead: summary.bottomLine,
              rest: containsReference(summary.limitation) ? "" : summary.limitation,
              trace: summaryTrace ? key(summary.line) : null,
            }}
          />
        )}
        {!hasBottomLine && afterBottomLine}
        {ordered.map((section) => {
          if (section !== keyFindings || !contrary) return drawSection(section);
          return (
            <div key={section.line} className="grid min-w-0 gap-4 lg:grid-cols-2">
              {drawSection(section)}
              {drawSection(contrary)}
            </div>
          );
        })}
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
