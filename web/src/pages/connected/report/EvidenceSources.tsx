import { EmptyState } from "@/components/application/empty-state/empty-state";
import { Badge } from "@/components/base/badges/badges";
import { FileSearch02 } from "@untitledui/icons";
import { moduleName } from "../api";
import { citedSourcePages } from "../sourceFiles";
import type { PublishedRun, Snapshot } from "../publishedReport";
import { Tile } from "./overview/Tile";

export type SourceGroup = { label: string; rows: PublishedRun["evidence"]["sources"] };
type SourceRow = SourceGroup["rows"][number];

/** The pages each file is cited at, from the citations the handoffs recorded for it. */
export function citedPagesBySource(snapshot: Snapshot) {
  const pages = new Map<string, Set<string>>();
  for (const [key, chips] of Object.entries(snapshot.chips)) {
    const folder = key.slice(0, key.lastIndexOf(":")).split("/")[0] ?? "";
    for (const chip of chips) {
      const name = chip.file ?? chip.source;
      const label = name ? citedSourcePages(folder, chip) : null;
      if (name && label) pages.set(name, new Set([...(pages.get(name) ?? []), label]));
    }
  }
  return pages;
}

function UsedBy({ source, modules }: { source: SourceRow; modules: string[] }) {
  if (source.readBy.length === 0) return <span className="text-text-tertiary">No module</span>;
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
  pages,
}: {
  group: SourceGroup;
  modules: string[];
  pages: Map<string, Set<string>>;
}) {
  return (
    <div className="grid min-w-0 gap-2">
      <h3 className="flex items-center gap-2 text-h4 font-medium text-text-primary">
        {group.label}
        <Badge size="sm" color="gray">
          {String(group.rows.length)}
        </Badge>
      </h3>
      <div
        role="region"
        aria-label={`${group.label}: files`}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        className="min-w-0 overflow-x-auto rounded-ds-md border border-border-hairline"
      >
        <table className="w-full min-w-3xl border-collapse text-left text-small">
          <caption className="sr-only">{group.label}</caption>
          <thead className="bg-surface-subtle text-text-secondary">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">
                File
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Type
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Cited pages
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Used by
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                SHA-256
              </th>
            </tr>
          </thead>
          <tbody>
            {group.rows.map((source) => {
              const cited = [...(pages.get(source.name) ?? [])];
              return (
                <tr key={source.name} className="border-t border-border-hairline align-top">
                  <th scope="row" className="px-4 py-3 font-medium wrap-anywhere text-text-primary">
                    {source.name}
                    {source.sourceWarning && (
                      <span className="mt-1 block font-normal text-warning-text">
                        {source.sourceWarning}
                      </span>
                    )}
                  </th>
                  <td className="px-4 py-3 text-text-secondary">
                    {source.type || "Document type n.a."}
                    <span className="block tabular-nums">
                      {source.documentDate || "Document date n.a."}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-text-secondary">
                    {cited.length > 0 ? (
                      cited.join("; ")
                    ) : (
                      <span className="text-gap-text">Not cited</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-text-secondary">
                    <UsedBy source={source} modules={modules} />
                  </td>
                  <td className="max-w-72 px-4 py-3 font-mono text-mono wrap-anywhere text-text-tertiary">
                    {source.sha256 ?? (
                      <span className="font-sans text-gap-text">No hash recorded</span>
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
  snapshot,
}: {
  sourceGroups: SourceGroup[];
  module?: string;
  modules: string[];
  snapshot: Snapshot;
}) {
  const shown = sourceGroups
    .map((group) => ({
      ...group,
      rows: group.rows.filter((source) => !module || source.readBy.includes(module)),
    }))
    .filter(({ rows }) => rows.length > 0);
  const pages = citedPagesBySource(snapshot);
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
          <SourceTable key={group.label} group={group} modules={modules} pages={pages} />
        ))
      )}
    </Tile>
  );
}
