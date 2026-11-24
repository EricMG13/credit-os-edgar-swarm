/* eslint-disable jsx-a11y/no-redundant-roles, jsx-a11y/no-interactive-element-to-noninteractive-role -- explicit table roles keep the table semantics when the parts are drawn as stacked blocks on a phone */
import { EmptyState } from "@/components/application/empty-state/empty-state";
import { Badge } from "@/components/base/badges/badges";
import { FileSearch02 } from "@untitledui/icons";
import { moduleName } from "../api";
import { citedSourcePages } from "../sourceFiles";
import type { OutputEntry, PublishedRun, Snapshot } from "../publishedReport";
import { GapText } from "@/pages/library/parts/GapText";
import { STACK } from "./evidenceKit";
import { Tile } from "./overview/Tile";

export type SourceGroup = { label: string; rows: PublishedRun["evidence"]["sources"] };
type SourceRow = SourceGroup["rows"][number];

type Citation = { sha: string | null; label: string };

/**
 * What each file is cited as, from the citations recorded in the given handoffs only (the snapshot
 * holds other runs' chips too), keyed by the file's name. A page is shown as attested where the
 * bridge attests one and otherwise as the citation's own label, as written.
 */
export function citationsByFile(snapshot: Snapshot, entries: OutputEntry[]) {
  const ids = new Set(entries.map((entry) => entry.output.id));
  const cited = new Map<string, Citation[]>();
  for (const [key, chips] of Object.entries(snapshot.chips)) {
    const id = key.slice(0, key.lastIndexOf(":"));
    if (!ids.has(id)) continue;
    const folder = id.split("/")[0] ?? "";
    for (const chip of chips) {
      if (!chip.file) continue;
      const label = citedSourcePages(folder, chip) ?? chip.label ?? "Cited, no page recorded";
      cited.set(chip.file, [...(cited.get(chip.file) ?? []), { sha: chip.sha256, label }]);
    }
  }
  return cited;
}

/** The distinct citations that can be this file: same name, and the same hash where both record one. */
function citationsOf(cited: Map<string, Citation[]>, source: SourceRow) {
  return [
    ...new Set(
      (cited.get(source.name) ?? [])
        .filter(({ sha }) => !source.sha256 || !sha || sha === source.sha256)
        .map(({ label }) => label),
    ),
  ];
}

function UsedBy({
  source,
  modules,
  group,
}: {
  source: SourceRow;
  modules: string[];
  group: string;
}) {
  if (source.readBy.length === 0)
    return (
      <GapText>
        {group === "Supplied, not used" ? "Not read by any module" : "Use not recorded"}
      </GapText>
    );
  const all = modules.length > 0 && modules.every((id) => source.readBy.includes(id));
  return (
    <>
      {all && source.readBy.length === modules.length
        ? `Read by all ${String(modules.length)} modules`
        : `Read by ${source.readBy.map(moduleName).join(" · ")}`}
    </>
  );
}

function SourceTable({
  group,
  modules,
  cited,
  scope,
}: {
  group: SourceGroup;
  modules: string[];
  cited: Map<string, Citation[]>;
  scope?: string;
}) {
  const headings = [
    "File",
    "Type",
    "Document date",
    scope ? `Cited in ${moduleName(scope)}` : "Cited as",
    "Used by",
    "SHA-256",
  ];
  return (
    <div className="grid min-w-0 gap-2">
      <h4 className="flex items-center gap-2 text-h4 font-medium text-text-primary">
        {group.label}{" "}
        <Badge size="sm" color="gray">
          {String(group.rows.length)}
        </Badge>
      </h4>
      <div
        role="region"
        aria-label={`${group.label}: files`}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        className="min-w-0 overflow-x-auto rounded-ds-md border border-border-hairline"
      >
        <table role="table" className={STACK.table}>
          <caption className="sr-only">{group.label}</caption>
          <thead role="rowgroup" className={STACK.head}>
            <tr role="row">
              {headings.map((heading) => (
                <th key={heading} role="columnheader" scope="col" className="px-4 py-3 font-medium">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody role="rowgroup" className={STACK.body}>
            {group.rows.map((source) => {
              const citations = citationsOf(cited, source);
              return (
                <tr role="row" key={source.name} className={STACK.row}>
                  <th
                    role="rowheader"
                    scope="row"
                    data-label={headings[0]}
                    className={`${STACK.cell} font-medium wrap-anywhere text-text-primary`}
                  >
                    {source.name}
                    {source.sourceWarning && (
                      <span className="mt-1 block font-normal text-warning-text">
                        {source.sourceWarning}
                      </span>
                    )}
                  </th>
                  <td
                    role="cell"
                    data-label={headings[1]}
                    className={`${STACK.cell} text-text-secondary`}
                  >
                    {source.type || <GapText>Document type n.a.</GapText>}
                  </td>
                  <td
                    role="cell"
                    data-label={headings[2]}
                    className={`${STACK.cell} text-text-secondary tabular-nums`}
                  >
                    {source.documentDate || <GapText>Document date n.a.</GapText>}
                  </td>
                  <td
                    role="cell"
                    data-label={headings[3]}
                    className={`${STACK.cell} text-text-secondary`}
                  >
                    {citations.length > 0 ? (
                      <ul className="grid gap-1">
                        {citations.map((label) => (
                          <li key={label}>{label}</li>
                        ))}
                      </ul>
                    ) : (
                      <GapText>
                        {scope ? `Not cited in ${moduleName(scope)}` : "Not cited by a handoff"}
                      </GapText>
                    )}
                  </td>
                  <td
                    role="cell"
                    data-label={headings[4]}
                    className={`${STACK.cell} text-text-secondary`}
                  >
                    <UsedBy source={source} modules={modules} group={group.label} />
                  </td>
                  <td
                    role="cell"
                    data-label={headings[5]}
                    className={`${STACK.cell} font-mono text-mono wrap-anywhere text-text-tertiary`}
                  >
                    {source.sha256 ? (
                      <code>{source.sha256}</code>
                    ) : (
                      <GapText>No hash recorded</GapText>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** What was supplied: the files modules used, and apart from them those supplied and not used. */
export function EvidenceSources({
  sourceGroups,
  module,
  modules,
  entries,
  snapshot,
}: {
  sourceGroups: SourceGroup[];
  module?: string;
  modules: string[];
  entries: OutputEntry[];
  snapshot: Snapshot;
}) {
  const shown = sourceGroups
    .map((group) => ({
      ...group,
      rows: group.rows.filter((source) => !module || source.readBy.includes(module)),
    }))
    .filter(({ rows }) => rows.length > 0);
  const cited = citationsByFile(
    snapshot,
    entries.filter((entry) => !module || entry.output.module === module),
  );
  return (
    <Tile
      span={12}
      label="Sources"
      kicker="Supplied files, and which modules read them"
      title="Sources"
    >
      {shown.length === 0 ? (
        <EmptyState className="py-5">
          <EmptyState.Header>
            <EmptyState.FeaturedIcon icon={FileSearch02} />
          </EmptyState.Header>
          <EmptyState.Content>
            <EmptyState.Title as="h3">No source files recorded</EmptyState.Title>
            <EmptyState.Description>
              {module
                ? `No issuer files are listed for ${moduleName(module)}.`
                : "No issuer files listed in this run’s published record."}
            </EmptyState.Description>
          </EmptyState.Content>
        </EmptyState>
      ) : (
        shown.map((group) => (
          <SourceTable
            key={group.label}
            group={group}
            modules={modules}
            cited={cited}
            scope={module}
          />
        ))
      )}
    </Tile>
  );
}
