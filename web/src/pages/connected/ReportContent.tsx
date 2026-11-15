import { useState, type ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { BottomLine } from "../library/parts/BottomLine";
import { DownloadButton } from "../library/parts/DownloadButton";
import { RunContext } from "../library/parts/RunContext";
import { TraceControl, TRACE_HOST } from "../library/parts/TraceControl";
import { TraceDrawer } from "../library/parts/TraceDrawer";
import type { Trace, TreeNode } from "../library/slice";
import { moduleName } from "./api";
import { card, heading } from "./layout";
import {
  classifySections,
  containsReference,
  displayColumns,
  evidencePath,
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

function richParts(value: string): ReactNode {
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

const traceTarget = (entryIndex: number, line?: number) =>
  `${String(entryIndex)}${line === undefined ? "" : `-${String(line)}`}`;

function tableStatement(table: Table, row: Table["rows"][number]) {
  return displayColumns(table.headers, true, table.rows)
    .map((index) =>
      row.cells[index] ? [table.headers[index], row.cells[index]].filter(Boolean).join(" — ") : "",
    )
    .filter(Boolean)
    .join("\n");
}

function rowView(table: Table, line: number | undefined) {
  const row = table.rows.find((item) => item.line === line);
  return row ? { ...table, rows: [row] } : table;
}

function traceDetails(
  snapshot: Snapshot,
  entry: OutputEntry,
  section: Section,
  block: Block,
  line: number,
) {
  const chips = snapshot.chips[`${entry.output.id}:${String(line)}`] ?? [];
  const row = block.type === "table" ? block.rows.find((item) => item.line === line) : null;
  const statement =
    block.type === "text"
      ? readParagraph(block.text).body
      : block.type === "table" && row
        ? tableStatement(block, row)
        : section.heading;
  const readerColumns =
    block.type === "table" ? displayColumns(block.headers, false, block.rows) : [];
  const basis =
    block.type === "text"
      ? readParagraph(block.text).basis
      : block.type === "table" && row
        ? displayColumns(block.headers, true, block.rows)
            .filter((index) => !readerColumns.includes(index))
            .map((index) => row.cells[index])
            .filter(Boolean)
            .join("\n")
        : null;
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
  const excerpt = chips.find((chip) => chip.quote || chip.excerpt);
  return {
    title: `Sources for ${section.heading}`,
    heading: section.heading,
    subtitle: `${moduleName(entry.output.module)} · Handoff line ${String(line)}`,
    statement: statement.replaceAll("**", "").replaceAll("`", ""),
    derivation: {
      ...node("Evidence retained with this item", null),
      children: [
        ...(basis ? [node("Basis", basis)] : []),
        ...chips.map((chip) => node(chip.label, chip.file ?? chip.source, chip.reason)),
        ...(!basis && !chips.length ? [node("Basis was not recorded for this item", null)] : []),
      ],
    },
    excerpt: excerpt
      ? {
          quote: excerpt.quote ?? excerpt.excerpt ?? "",
          source: excerpt.file ?? excerpt.source ?? excerpt.label,
        }
      : null,
    qualification: null,
    evidenceItem: target,
  };
}

export function PublishedTable({
  table,
  evidence = false,
  traceAt,
  href,
}: {
  table: Table;
  evidence?: boolean;
  traceAt?: (line: number) => string;
  href?: string;
}) {
  const columns = displayColumns(table.headers, evidence, table.rows);
  if (!columns.length || !table.rows.length) return null;
  return (
    <div className="min-w-0 overflow-x-auto rounded-ds-md border border-border-hairline">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-surface-subtle text-text-secondary">
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col" className="px-3 py-2.5 text-left font-semibold">
                {richParts(table.headers[column] ?? "")}
              </th>
            ))}
            {traceAt && (
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
                return (
                  <td key={column} className="px-3 py-2.5 text-text-secondary">
                    {!evidence && containsReference(cell) ? (
                      <a href={href} className="text-action underline">
                        In Evidence
                      </a>
                    ) : cell.trim() ? (
                      richParts(cell)
                    ) : (
                      <span aria-label="Empty in the handoff">—</span>
                    )}
                  </td>
                );
              })}
              {traceAt && (
                <td className="px-2 py-1.5">
                  <TraceControl
                    trace={traceAt(row.line)}
                    label={`Show sources for ${row.cells[0] || "this row"}`}
                  />
                </td>
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

function findingBlocks(sections: Section[], entry: OutputEntry) {
  const drawings = new Set(
    [
      ...(entry.output.charts ?? []),
      ...(entry.output.chartGaps ?? []),
      ...(entry.output.maps ?? []),
      ...(entry.output.events ?? []),
    ].map((item) => item.table),
  );
  return classifySections(sections)
    .flatMap(({ section, role }) => {
      if (
        (role === "finding" || role === "passage" || role === "drawing") &&
        !section.blocks.some((block) => drawings.has(block.line))
      ) {
        return [{ ...section, blocks: section.blocks.filter(readerBlock) }];
      }
      if (role !== "registers") return [];
      const promoted = section.blocks.filter((block) => {
        if (block.type !== "table") return false;
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
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  entry: OutputEntry;
  entryIndex: number;
  overview?: boolean;
}) {
  const [activeTrace, setActiveTrace] = useState<string | null>(null);
  const sections = findingBlocks(entry.sections, entry).filter(
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
  const key = (line: number) => traceTarget(entryIndex, line);
  for (const section of sections) {
    for (const block of section.blocks) {
      const lines = block.type === "table" ? block.rows.map((row) => row.line) : [block.line];
      for (const line of lines)
        traces[key(line)] = buildTrace(snapshot, entry, section, block, line, key(line));
    }
  }
  const active = activeTrace === null ? null : traces[activeTrace];
  if (!sections.length)
    return (
      <p className="text-text-secondary">
        {entry.output.parseError
          ? "This handoff could not be read into sections."
          : "This handoff has no findings in this report format."}{" "}
        <a href={evidencePath(run.folder, String(entryIndex))} className="text-action underline">
          Open Evidence
        </a>
      </p>
    );
  return (
    <RunContext.Provider value={{ traces, open: setActiveTrace }}>
      <div className="grid min-w-0 gap-4" data-sources="on">
        {sections.map((section) => {
          const first = section.blocks[0];
          if (
            section.heading === "Bottom line" &&
            first?.type === "text" &&
            !containsReference(readParagraph(first.text).body)
          ) {
            return (
              <div className="grid gap-3" key={section.line}>
                <BottomLine
                  level="h2"
                  text={{
                    label: section.heading,
                    lead: readParagraph(first.text).body.replaceAll("**", "").replaceAll("`", ""),
                    rest: "",
                    trace: key(first.line),
                  }}
                />
                {section.blocks
                  .slice(1)
                  .map((block) =>
                    block.type === "text" ? (
                      <FindingParagraph
                        key={block.line}
                        block={block}
                        trace={key(block.line)}
                        href={evidencePath(run.folder, String(entryIndex), block.line)}
                      />
                    ) : null,
                  )}
              </div>
            );
          }
          return (
            <section key={section.line} className={card}>
              <h2 className={heading}>{richParts(section.heading)}</h2>
              {section.blocks.map((block) =>
                block.type === "table" ? (
                  <PublishedTable
                    key={block.line}
                    table={block}
                    traceAt={key}
                    href={evidencePath(run.folder, String(entryIndex), block.line)}
                  />
                ) : block.type === "text" ? (
                  <FindingParagraph
                    key={block.line}
                    block={block}
                    trace={key(block.line)}
                    href={evidencePath(run.folder, String(entryIndex), block.line)}
                  />
                ) : null,
              )}
            </section>
          );
        })}
      </div>
      {active && (
        <TraceDrawer
          trace={active}
          evidenceHref={evidencePath(run.folder, active.evidenceItem)}
          isOpen
          onClose={() => {
            setActiveTrace(null);
          }}
        />
      )}
    </RunContext.Provider>
  );
}

function EvidenceLocation({
  snapshot,
  entry,
  index,
  line,
}: {
  snapshot: Snapshot;
  entry: OutputEntry;
  index: number;
  line?: number;
}) {
  if (entry.output.parseError)
    return <p className="text-text-secondary">This handoff could not be read into sections.</p>;
  const sections = classifySections(entry.sections)
    .filter(({ role }) => role !== "hidden")
    .map(({ section }) => section);
  const visible =
    line === undefined
      ? sections
      : sections.filter(
          (section) =>
            section.line === line ||
            section.blocks.some(
              (block) =>
                block.line === line ||
                (block.type === "table" && block.rows.some((row) => row.line === line)),
            ),
        );
  return visible.length ? (
    visible.map((section) => (
      <section key={section.line} className="grid gap-3 border-t border-border-hairline pt-3">
        <h3 className="font-semibold text-text-primary">{richParts(section.heading)}</h3>
        {section.blocks.map((block) => {
          if (block.type === "equity")
            return block.text ? (
              <pre key={block.line} className="whitespace-pre-wrap">
                {block.text}
              </pre>
            ) : null;
          if (
            line !== undefined &&
            section.line !== line &&
            block.line !== line &&
            !(block.type === "table" && block.rows.some((row) => row.line === line))
          )
            return null;
          const { basis, chips } = traceDetails(
            snapshot,
            entry,
            section,
            block,
            line ?? block.line,
          );
          return (
            <div
              className="grid gap-2"
              key={block.line}
              id={`evidence-${traceTarget(index, block.line)}`}
            >
              {block.type === "table" ? (
                <PublishedTable table={rowView(block, line)} evidence />
              ) : (
                <p className="whitespace-pre-wrap wrap-anywhere text-text-secondary">
                  {richParts(block.text)}
                </p>
              )}
              {block.type === "table" && basis && (
                <p className="text-sm text-text-secondary">{basis}</p>
              )}
              {chips.length > 0 && (
                <ul className="grid gap-2">
                  {chips.map((chip, chipIndex) => (
                    <li
                      key={chipIndex}
                      className="rounded-ds-sm border border-border-hairline p-3 text-sm text-text-secondary"
                    >
                      <p className="font-medium text-text-primary">{chip.label}</p>
                      {(chip.file || chip.source) && (
                        <p className="wrap-anywhere">{chip.file ?? chip.source}</p>
                      )}
                      {chip.reason && <p>{chip.reason}</p>}
                      {(chip.quote || chip.excerpt) && (
                        <blockquote className="mt-1 border-l-2 border-border-hairline pl-3">
                          {chip.quote ?? chip.excerpt}
                        </blockquote>
                      )}
                      {chip.sha256 && (
                        <code className="mt-1 block wrap-anywhere">{chip.sha256}</code>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </section>
    ))
  ) : (
    <p className="text-text-secondary">This location is unavailable in the published handoff.</p>
  );
}

export function ReportEvidence({
  snapshot,
  run,
  entries,
  target,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  entries: OutputEntry[];
  target?: string;
}) {
  const location = /^(\d+)(?:-(\d+))?$/.exec(target ?? "");
  const selectedIndex = location ? Number(location[1]) : -1;
  const entry = entries[selectedIndex];
  const line = location?.[2] === undefined ? undefined : Number(location[2]);
  const { evidence } = run;
  const sourceGroups = [
    { label: "Named in a handoff", rows: evidence.sources },
    { label: "Supplied but unnamed in handoffs", rows: evidence.unused },
    { label: "Use unrecorded", rows: evidence.unrecorded },
  ];
  const zip = publishedHref(evidence.zip, run.folder);
  return (
    <div className="grid min-w-0 gap-5">
      {entry && (
        <article className={card}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className={heading}>
              {moduleName(entry.output.module)} ·{" "}
              {line === undefined ? "Handoff evidence" : `Line ${String(line)}`}
            </h2>
            <HandoffDownload run={run} entry={entry} />
          </div>
          <EvidenceLocation snapshot={snapshot} entry={entry} line={line} index={selectedIndex} />
        </article>
      )}
      <section className={card}>
        <h2 className={heading}>Sources</h2>
        {sourceGroups.every(({ rows }) => !rows.length) && (
          <p className="text-text-secondary">
            No issuer files listed in this run’s published record.
          </p>
        )}
        {sourceGroups
          .filter(({ rows }) => rows.length > 0)
          .map(({ label, rows }) => (
            <div className="grid gap-2" key={label}>
              <h3 className="font-medium">{label}</h3>
              <ul className="divide-y divide-border-hairline rounded-ds-md border border-border-hairline">
                {rows.map((source) => (
                  <li key={source.name} className="grid gap-1 px-4 py-3 text-sm">
                    <p className="font-semibold wrap-anywhere">{source.name}</p>
                    <p className="text-text-secondary">
                      {[source.type, source.documentDate, ...source.readBy.map(moduleName)]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                    {source.sha256 && (
                      <code className="wrap-anywhere text-text-tertiary">{source.sha256}</code>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </section>
      <section className={card}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className={heading}>Handoffs</h2>
          {zip && (
            <DownloadButton
              download={{ label: "Download all handoffs", href: zip, reason: null }}
            />
          )}
        </div>
        <ul className="grid gap-2">
          {entries.map((item, index) => (
            <li
              key={item.output.id}
              className="flex flex-wrap items-center justify-between gap-3 border-t border-border-hairline pt-2"
            >
              <a className="text-action underline" href={evidencePath(run.folder, String(index))}>
                {moduleName(item.output.module)}
                {item.selected ? "" : ` · ${item.output.label}`}
              </a>
              <HandoffDownload run={run} entry={item} />
            </li>
          ))}
        </ul>
      </section>
      <section className={card}>
        <h2 className={heading}>Run record</h2>
        {evidence.record.cap !== null && <p>Provider cap · {evidence.record.cap} USD</p>}
        {evidence.record.calls.length > 0 && (
          <PublishedTable
            evidence
            table={{
              type: "table",
              line: 0,
              headers: ["Module", "Attempt", "Started", "HTTP status", "Outcome", "Settled USD"],
              rows: evidence.record.calls.map((call, index) => ({
                line: index,
                cells: [
                  call.module ? moduleName(call.module) : "",
                  call.attempt?.toString() ?? "",
                  call.started ?? "",
                  call.http_status?.toString() ?? "",
                  call.error_class ?? "",
                  call.settled_usd ?? "",
                ],
              })),
            }}
          />
        )}
        <div className="flex flex-wrap gap-2">
          {evidence.record.instructions.map((item) => {
            const href = publishedHref(item.href, run.folder);
            return href ? (
              <Button key={item.href} href={href} download size="sm" color="secondary">
                {moduleName(item.module)} instructions
              </Button>
            ) : null;
          })}
        </div>
        <details className="grid gap-2 border-t border-border-hairline pt-3">
          <summary className="cursor-pointer font-semibold">Recorded file hashes</summary>
          {evidence.record.hashes.map((item) => (
            <p key={item.name} className="mt-2 grid gap-1 text-sm wrap-anywhere">
              {item.name}
              <code className="text-text-tertiary">{item.sha256}</code>
            </p>
          ))}
        </details>
      </section>
    </div>
  );
}
