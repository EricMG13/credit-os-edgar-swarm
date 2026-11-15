import type { ReactNode } from "react";
import { DownloadButton } from "@/pages/library/parts/DownloadButton";
import { DerivationTree } from "@/pages/library/parts/DerivationTree";
import { RunTabLink } from "@/pages/library/parts/RunFrame";
import type { TreeNode } from "@/pages/library/slice";
import { moduleName, type Mode } from "../api";
import { card, field, heading } from "../layout";
import {
  classifySections,
  evidencePath,
  FORECAST_INPUTS,
  publishedHref,
  type OutputEntry,
  type PublishedRun,
  type Snapshot,
  type Table,
} from "../publishedReport";
import {
  HandoffDownload,
  PublishedTable,
  richParts,
  traceDetails,
  traceForLine,
  traceTarget,
} from "../ReportContent";
import { ArtifactDownloads } from "./ArtifactDownloads";
import { ReportRecord } from "./Record";

function rowView(table: Table, line: number | undefined) {
  const row = table.rows.find((item) => item.line === line);
  return row ? { ...table, rows: [row] } : table;
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
    .filter(
      ({ role, section }) =>
        role !== "hidden" ||
        (entry.output.module === "CP-2G" &&
          line !== undefined &&
          section.heading === FORECAST_INPUTS &&
          section.blocks.some((block) => block.line === line)),
    )
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
              ) : section.heading === FORECAST_INPUTS ? (
                <pre className="max-h-100 overflow-auto rounded-ds-sm bg-surface-subtle p-3 text-xs whitespace-pre-wrap wrap-anywhere">
                  {block.text}
                </pre>
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

function referencedText(node: TreeNode): string {
  return [node.label, node.value, node.note, ...node.children.map(referencedText)]
    .filter(Boolean)
    .join("\n");
}

function namesSource(references: string, name: string) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (
    Boolean(name) &&
    new RegExp(`(?:^|[^\\p{L}\\p{N}._/-])${escaped}(?![\\p{L}\\p{N}._/-])`, "u").test(references)
  );
}

function TraceDetailsView({
  snapshot,
  run,
  entry,
  index,
  line,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  entry: OutputEntry;
  index: number;
  line: number;
}) {
  const trace = traceForLine(snapshot, entry, index, line);
  if (!trace) return null;
  const references = referencedText(trace.derivation);
  const sources = [
    ...run.evidence.sources,
    ...run.evidence.unused,
    ...run.evidence.unrecorded,
  ].filter((source) => namesSource(references, source.name));
  return (
    <div className={`grid min-w-0 gap-4 ${sources.length ? "lg:grid-cols-[3fr_2fr]" : ""}`}>
      <section className="grid min-w-0 content-start gap-3 rounded-ds-md border border-border-hairline p-5">
        <h3 className={heading}>Derivation</h3>
        <DerivationTree node={trace.derivation} />
      </section>
      {sources.length > 0 && (
        <section className="grid min-w-0 content-start gap-3 rounded-ds-md border border-border-hairline p-5">
          <h3 className={heading}>Source records</h3>
          <ul className="divide-y divide-border-hairline">
            {sources.map(({ name, documentDate, type, sha256 }) => (
              <li key={name} className="grid gap-1 py-2">
                <strong className="text-sm wrap-anywhere">{name}</strong>
                <p className="text-sm text-text-secondary">
                  {[type, documentDate].filter(Boolean).join(" · ")}
                </p>
                {sha256 && <code className="text-xs break-all text-text-tertiary">{sha256}</code>}
              </li>
            ))}
          </ul>
          <a
            className="w-fit text-action underline"
            href={`#evidence/sources/${encodeURIComponent(entry.output.module)}`}
          >
            Open Sources
          </a>
        </section>
      )}
    </div>
  );
}

function EvidenceGaps({
  run,
  entries,
  module,
}: {
  run: PublishedRun;
  entries: OutputEntry[];
  module?: string;
}) {
  const items = entries.flatMap((entry, index) => {
    if (!entry.selected || (module && entry.output.module !== module)) return [];
    return classifySections(entry.sections)
      .filter(({ role, section }) => role === "gaps" && section.blocks.length)
      .map(({ section }) => ({ entry, index, section }));
  });
  return (
    <section className={card}>
      <h3 className={heading}>Gaps</h3>
      {items.length ? (
        <ul className="grid gap-2">
          {items.map(({ entry, index, section }) => (
            <li key={`${entry.output.id}-${String(section.line)}`}>
              <a
                className="text-action underline"
                href={evidencePath(run.folder, String(index), section.line)}
              >
                {moduleName(entry.output.module)} · {section.heading}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No gaps are listed in these published handoffs.</p>
      )}
    </section>
  );
}

export function ReportEvidence({
  snapshot,
  run,
  entries,
  target,
  comparison,
  mode,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  entries: OutputEntry[];
  target?: string;
  comparison?: ReactNode;
  mode: Mode;
}) {
  const [section, module] = (target ?? "").split("/");
  const location = /^(\d+)(?:-(\d+))?$/.exec(section ?? "");
  const tabs = ["Summary", "Trace", "Sources", "Gaps", "Record"] as const;
  const tab = location
    ? "Trace"
    : (tabs.find((label) => label.toLowerCase() === section) ?? "Summary");
  const selectedIndex = location ? Number(location[1]) : -1;
  const entry = entries[selectedIndex];
  const selectedModule = entry?.output.module ?? module;
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
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-h2">Evidence</h2>
        <label className="grid gap-1 text-sm">
          Module
          <select
            className={field}
            value={selectedModule ?? ""}
            onChange={(event) => {
              window.location.assign(
                `#evidence/${tab.toLowerCase()}${event.target.value ? `/${event.target.value}` : ""}`,
              );
            }}
          >
            <option value="">All modules</option>
            {[...new Set(entries.map((item) => item.output.module))].map((id) => (
              <option value={id} key={id}>
                {moduleName(id)}
              </option>
            ))}
          </select>
        </label>
      </div>
      <nav
        aria-label="Evidence sections"
        className="flex flex-wrap gap-3 border-b border-border-hairline"
      >
        {tabs.map((item) => (
          <RunTabLink
            key={item}
            label={item}
            current={tab === item}
            href={`#evidence/${item.toLowerCase()}${selectedModule ? `/${selectedModule}` : ""}`}
            small
          />
        ))}
      </nav>
      {snapshot.preview && (
        <p role="note" className={card}>
          {snapshot.preview.reason}
        </p>
      )}
      {tab === "Summary" && (
        <section className={card}>
          <h3 className={heading}>Run evidence</h3>
          <p>
            {String(entries.filter((item) => item.selected).length)} designated handoffs ·{" "}
            {String(sourceGroups.reduce((total, { rows }) => total + rows.length, 0))} source files
          </p>
        </section>
      )}
      {entry && (
        <article className={card}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className={heading}>
              {moduleName(entry.output.module)} ·{" "}
              {line === undefined ? "Handoff evidence" : `Line ${String(line)}`}
            </h2>
            <HandoffDownload run={run} entry={entry} />
          </div>
          {line !== undefined && (
            <TraceDetailsView
              snapshot={snapshot}
              run={run}
              entry={entry}
              line={line}
              index={selectedIndex}
            />
          )}
          <EvidenceLocation snapshot={snapshot} entry={entry} line={line} index={selectedIndex} />
        </article>
      )}
      {tab === "Sources" && (
        <section className={card}>
          <h3 className={heading}>Sources</h3>
          {sourceGroups.every(({ rows }) => !rows.length) && (
            <p className="text-text-secondary">
              No issuer files listed in this run’s published record.
            </p>
          )}
          {sourceGroups
            .map((group) => ({
              ...group,
              rows: group.rows.filter((source) => !module || source.readBy.includes(module)),
            }))
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
      )}
      {(tab === "Summary" || (tab === "Trace" && !entry)) && (
        <section className={card}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className={heading}>Handoffs</h3>
            {zip && (
              <DownloadButton
                download={{ label: "Download all handoffs", href: zip, reason: null }}
              />
            )}
          </div>
          <ul className="grid gap-2">
            {entries.map(
              (item, index) =>
                (!module || item.output.module === module) && (
                  <li
                    key={item.output.id}
                    className="flex flex-wrap items-center justify-between gap-3 border-t border-border-hairline pt-2"
                  >
                    <a
                      className="text-action underline"
                      href={evidencePath(run.folder, String(index))}
                    >
                      {moduleName(item.output.module)}
                      {item.selected ? "" : ` · ${item.output.label}`}
                    </a>
                    <HandoffDownload run={run} entry={item} />
                  </li>
                ),
            )}
          </ul>
        </section>
      )}
      {tab === "Summary" && evidence.downloads.length > 0 && (
        <ArtifactDownloads folder={run.folder} />
      )}
      {tab === "Trace" && !entry && (!module || module === "CP-8") && comparison}
      {tab === "Gaps" && <EvidenceGaps run={run} entries={entries} module={module} />}
      {tab === "Record" && <ReportRecord run={run} entries={entries} module={module} mode={mode} />}
    </div>
  );
}
