/* eslint-disable jsx-a11y/no-redundant-roles, jsx-a11y/no-interactive-element-to-noninteractive-role -- explicit table roles keep the table semantics when the parts are drawn as stacked blocks on a phone */
import { EmptyState } from "@/components/application/empty-state/empty-state";
import { Badge } from "@/components/base/badges/badges";
import { FileSearch02 } from "@untitledui/icons";
import { moduleName } from "../api";
import { citedSourcePages } from "../sourceFiles";
import {
  evidencePath,
  type OutputEntry,
  type PublishedRun,
  type Snapshot,
} from "../publishedReport";
import { GapText } from "@/pages/library/parts/GapText";
import { STACK } from "./evidenceKit";
import { handoffName } from "./evidenceLabels";
import { Tile } from "./overview/Tile";

export type SourceGroup = { label: string; rows: PublishedRun["evidence"]["sources"] };
type SourceRow = SourceGroup["rows"][number];

type Citation = { sha: string | null; label: string; entry: OutputEntry; line: number };

const NO_FILE = /without a source key/i;
const NOT_IN_INVENTORY = /not in the .*inventory/i;

/**
 * What the designated handoffs cite, from the given entries only (the snapshot holds other runs'
 * chips, and alternate handoffs are not the delivered ones): each file's citations keyed by file
 * name, and apart from them the citations that give a page but name no file or name a file that is
 * not in the inventory, as the chip's own reason records it. A page is shown as attested where the
 * bridge attests one and otherwise as the citation's own label, as written.
 */
export function citationsByFile(snapshot: Snapshot, entries: OutputEntry[]) {
  const byId = new Map(entries.map((entry) => [entry.output.id, entry]));
  const byFile = new Map<string, Citation[]>();
  const unmatched = { noFile: [] as Citation[], notInInventory: [] as Citation[] };
  for (const [key, chips] of Object.entries(snapshot.chips)) {
    const cut = key.lastIndexOf(":");
    const entry = byId.get(key.slice(0, cut));
    const line = Number(key.slice(cut + 1));
    if (!entry || !Number.isSafeInteger(line)) continue;
    const folder = entry.output.id.split("/")[0] ?? "";
    for (const chip of chips) {
      const label = citedSourcePages(folder, chip) ?? chip.label ?? "Cited, no page recorded";
      const cited = { sha: chip.sha256, label, entry, line };
      if (chip.file) byFile.set(chip.file, [...(byFile.get(chip.file) ?? []), cited]);
      else if (NO_FILE.test(chip.reason ?? "")) unmatched.noFile.push(cited);
      else if (NOT_IN_INVENTORY.test(chip.reason ?? "")) unmatched.notInInventory.push(cited);
    }
  }
  return { byFile, ...unmatched };
}

type Cited = ReturnType<typeof citationsByFile>;

/** The citations of one source: same name, and the same hash where both record one; a different hash is kept and said. */
function citationsOf(cited: Cited, source: SourceRow) {
  return (cited.byFile.get(source.name) ?? []).map(({ sha, label }) => ({
    label,
    sha,
    kind: !source.sha256 ? "unhashed" : !sha || sha === source.sha256 ? "same" : "different",
  }));
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
  cited: Cited;
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
                      <ul className="grid gap-1.5">
                        {citations.map(({ label, sha, kind }, index) => (
                          <li key={`${String(index)}-${label}`} className="grid gap-0.5">
                            {kind === "different" ? (
                              <>
                                <span>{`Cited as ${label} under a different hash`}</span>
                                <code className="font-mono text-mono wrap-anywhere text-text-tertiary">
                                  {sha}
                                </code>
                              </>
                            ) : (
                              <>
                                <span>{label}</span>
                                {kind === "unhashed" && (
                                  <span className="text-caption text-text-tertiary">
                                    Matched by file name; the source has no hash
                                  </span>
                                )}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <GapText>
                        {scope
                          ? `No citation in ${moduleName(scope)} names this file`
                          : "No citation names this file"}
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

function UnmatchedCitations({ cited, folder }: { cited: Cited; folder: string }) {
  const rows = [
    {
      list: cited.noFile,
      words: (n: number) =>
        `${String(n)} ${n === 1 ? "citation gives" : "citations give"} a page and ${n === 1 ? "names" : "name"} no file`,
    },
    {
      list: cited.notInInventory,
      words: (n: number) =>
        `${String(n)} ${n === 1 ? "citation names" : "citations name"} a file that is not in the source inventory`,
    },
  ].filter(({ list }) => list.length > 0);
  if (rows.length === 0) return null;
  return (
    <ul
      aria-label="Citations not matched to a supplied file"
      className="grid gap-1 rounded-ds-sm bg-surface-subtle p-3 text-small text-text-secondary"
    >
      {rows.map(({ list, words }) => {
        const first = list[0];
        return (
          <li key={words(1)} className="flex flex-wrap items-center gap-x-3">
            <span>{words(list.length)}</span>
            {first && (
              <a
                href={evidencePath(folder, first.entry, first.line)}
                className="inline-flex min-h-8 items-center text-text-link underline max-[480px]:min-h-11"
              >
                {`First: ${handoffName(first.entry)}, line ${String(first.line)}`}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/** What was supplied: the files modules used, and apart from them those supplied and not used. */
export function EvidenceSources({
  sourceGroups,
  module,
  modules,
  entries,
  snapshot,
  folder,
}: {
  sourceGroups: SourceGroup[];
  module?: string;
  modules: string[];
  entries: OutputEntry[];
  snapshot: Snapshot;
  folder: string;
}) {
  const shown = sourceGroups
    .map((group) => ({
      ...group,
      rows: group.rows.filter((source) => !module || source.readBy.includes(module)),
    }))
    .filter(({ rows }) => rows.length > 0);
  const cited = citationsByFile(
    snapshot,
    entries.filter((entry) => entry.selected && (!module || entry.output.module === module)),
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
        <>
          <UnmatchedCitations cited={cited} folder={folder} />
          {shown.map((group) => (
            <SourceTable
              key={group.label}
              group={group}
              modules={modules}
              cited={cited}
              scope={module}
            />
          ))}
        </>
      )}
    </Tile>
  );
}
