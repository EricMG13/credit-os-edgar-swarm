import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { EmptyState } from "@/components/application/empty-state/empty-state";
import { StatsStrip } from "@/components/kit/StatsStrip";
import { StatusBadge } from "@/components/status/StatusBadge";
import { FileSearch02 } from "@untitledui/icons";
import { moduleName } from "../api";
import {
  classifySections,
  evidencePath,
  plainModuleNames,
  type OutputEntry,
  type PublishedRun,
  type Section,
  type Table,
} from "../publishedReport";
import { richParts } from "../richText";
import { Tile } from "./overview/Tile";
import { handoffName } from "./evidenceLabels";

export type GapRecord = { line: number; title: string; severity: string | null; details: string };
type GapItem = { entry: OutputEntry; section: Section; gap: GapRecord };

function noGap(value: string | undefined) {
  return /^(?:none|no|nil|n\/a|n\.a\.)\.?$/i.test((value ?? "").trim());
}

function gapTitleIndex(headers: string[]) {
  const titleHeader = (header: string) =>
    !/severity/i.test(header) && !/^(?:id|gap id|reference|ref)$/i.test(header.trim());
  const titled = headers.findIndex(
    (header) => titleHeader(header) && /gap|missing|issue|item|shortfall|risk/i.test(header),
  );
  return titled >= 0 ? titled : Math.max(0, headers.findIndex(titleHeader));
}

function tableGapRecords(block: Table): GapRecord[] {
  const severityIndex = block.headers.findIndex((header) => /severity/i.test(header));
  const titleIndex = gapTitleIndex(block.headers);
  return block.rows.flatMap((row) => {
    const title = row.cells[titleIndex]?.trim() ?? "";
    if (!title || noGap(title)) return [];
    return [
      {
        line: row.line,
        title,
        severity: severityIndex < 0 ? null : row.cells[severityIndex]?.trim() || null,
        details: block.headers
          .map((header, index) => ({ header, value: row.cells[index]?.trim() ?? "" }))
          .filter(({ value }, index) => value && index !== titleIndex && index !== severityIndex)
          .map(({ header, value }) => `${header}: ${value}`)
          .join("\n"),
      },
    ];
  });
}

function gapRecords(blocks: Section["blocks"]): GapRecord[] {
  const records: GapRecord[] = [];
  for (const block of blocks) {
    if (block.type === "text") {
      const text = block.text.trim();
      if (text && !noGap(text))
        records.push({
          line: block.line,
          title: "Gap recorded as text",
          severity: null,
          details: text,
        });
      continue;
    }
    if (
      block.type !== "table" ||
      (block.headers.includes("Earlier ref") && block.headers.includes("Current ref"))
    )
      continue;
    for (const record of tableGapRecords(block)) records.push(record);
  }
  return records;
}

export function hasRecordedGap(blocks: Section["blocks"]) {
  return gapRecords(blocks).length > 0;
}

/** Every gap row the handoffs wrote, for one module or all. */
export function collectGaps(entries: OutputEntry[], module?: string): GapItem[] {
  return entries.flatMap((entry) => {
    if (module && entry.output.module !== module) return [];
    return classifySections(entry.sections)
      .filter(({ role }) => role === "gaps")
      .flatMap(({ section }) => gapRecords(section.blocks).map((gap) => ({ entry, section, gap })));
  });
}

const RANKED = ["High", "Medium", "Low"] as const;
const isRanked = (severity: string | null): severity is (typeof RANKED)[number] =>
  RANKED.includes(severity as (typeof RANKED)[number]);

/** Gaps in groups of stated severity: High, Medium, Low, any other stated term, then none stated. */
function severityGroups(items: GapItem[]) {
  const order = (severity: string | null) => {
    const ranked = RANKED.indexOf(severity as (typeof RANKED)[number]);
    return ranked >= 0 ? ranked : severity === null ? RANKED.length + 1 : RANKED.length;
  };
  const groups = new Map<string | null, GapItem[]>();
  for (const item of items)
    groups.set(item.gap.severity, [...(groups.get(item.gap.severity) ?? []), item]);
  return [...groups].sort(([a], [b]) => order(a) - order(b));
}

function GapSeverity({ severity }: { severity: string | null }) {
  if (isRanked(severity)) return <StatusBadge set="Gap severity" state={severity} />;
  return severity ? severity : <span className="text-text-tertiary">Not recorded</span>;
}

/** High, Medium and Low counts, and the rest only when a gap carries another term or none. */
export function GapCounts({ items }: { items: GapItem[] }) {
  const count = (severity: string) => items.filter(({ gap }) => gap.severity === severity).length;
  const other = items.filter(({ gap }) => !isRanked(gap.severity)).length;
  return (
    <StatsStrip
      label="Gaps by severity"
      stats={[
        ...RANKED.map((severity) => ({ label: severity, value: String(count(severity)) })),
        ...(other > 0 ? [{ label: "Other or not stated", value: String(other) }] : []),
      ]}
    />
  );
}

function NoGaps({ module, compact = false }: { module?: string; compact?: boolean }) {
  return (
    <EmptyState className={compact ? "py-0" : "py-5"}>
      <EmptyState.Header>
        <EmptyState.FeaturedIcon icon={FileSearch02} />
      </EmptyState.Header>
      <EmptyState.Content>
        <EmptyState.Title as="h3">No gaps recorded</EmptyState.Title>
        <EmptyState.Description>
          {module
            ? `No module-written gaps for ${moduleName(module)}.`
            : "The module handoffs list no gaps."}
        </EmptyState.Description>
      </EmptyState.Content>
    </EmptyState>
  );
}

function GapLedger({
  run,
  items,
  detail,
}: {
  run: PublishedRun;
  items: GapItem[];
  detail: boolean;
}) {
  const columns = detail ? 5 : 4;
  return (
    <div
      role="region"
      aria-label="Gaps, most severe first"
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className="min-w-0 overflow-x-auto rounded-ds-md border border-border-hairline"
    >
      <table className="w-full min-w-xl border-collapse text-left text-small">
        <thead className="bg-surface-subtle text-text-secondary">
          <tr>
            <th className="px-4 py-3 font-medium">Gap</th>
            <th className="px-4 py-3 font-medium">Module</th>
            <th className="px-4 py-3 font-medium">Severity</th>
            {detail && <th className="px-4 py-3 font-medium">Recorded detail</th>}
            <th className="px-4 py-3 font-medium">Trace</th>
          </tr>
        </thead>
        {severityGroups(items).map(([severity, rows]) => (
          <tbody key={severity ?? ""}>
            <tr className="border-t border-border-hairline bg-surface-subtle">
              <th scope="rowgroup" colSpan={columns} className="px-4 py-2 text-left font-semibold">
                <span className="flex items-center gap-2">
                  <GapSeverity severity={severity} />
                  <Badge size="sm" color="gray">
                    {String(rows.length)}
                  </Badge>
                </span>
              </th>
            </tr>
            {rows.map(({ entry, section, gap }) => (
              <tr
                key={`${entry.output.id}-${String(gap.line)}`}
                className="border-t border-border-hairline align-top"
              >
                <th scope="row" className="px-4 py-3 font-medium text-text-primary">
                  {plainModuleNames(gap.title || section.heading)}
                </th>
                <td className="px-4 py-3">{handoffName(entry)}</td>
                <td className="px-4 py-3">
                  <GapSeverity severity={gap.severity} />
                </td>
                {detail && (
                  <td className="max-w-xl px-4 py-3 whitespace-pre-wrap text-text-secondary">
                    {richParts(gap.details || "No additional detail recorded.")}
                  </td>
                )}
                <td className="px-4 py-3">
                  <Button
                    href={evidencePath(run.folder, entry, gap.line)}
                    color="link-gray"
                    size="sm"
                  >
                    Open handoff line
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}

/** The Summary's gaps: three counts, then the list, most severe first. */
export function GapSummary({
  run,
  entries,
  module,
}: {
  run: PublishedRun;
  entries: OutputEntry[];
  module?: string;
}) {
  const items = collectGaps(entries, module);
  return (
    <Tile
      span={12}
      label="Gaps summary"
      kicker="What this run could not establish"
      title={
        <>
          Gaps{" "}
          <span className="ml-1 text-small font-normal text-text-secondary">{items.length}</span>
        </>
      }
    >
      {items.length === 0 ? (
        <NoGaps module={module} compact />
      ) : (
        <>
          <GapCounts items={items} />
          <GapLedger run={run} items={items} detail={false} />
        </>
      )}
    </Tile>
  );
}

/** The Gaps tab: the same counts and list with the detail each handoff recorded. */
export function EvidenceGaps({
  run,
  entries,
  module,
}: {
  run: PublishedRun;
  entries: OutputEntry[];
  module?: string;
}) {
  const items = collectGaps(entries, module);
  return (
    <Tile
      span={12}
      label="Gaps"
      kicker="What this run could not establish, with the detail each handoff records"
      title={
        <>
          Gaps{" "}
          <span className="ml-1 text-small font-normal text-text-secondary">{items.length}</span>
        </>
      }
    >
      {items.length === 0 ? (
        <NoGaps module={module} />
      ) : (
        <>
          <GapCounts items={items} />
          <GapLedger run={run} items={items} detail />
        </>
      )}
    </Tile>
  );
}
