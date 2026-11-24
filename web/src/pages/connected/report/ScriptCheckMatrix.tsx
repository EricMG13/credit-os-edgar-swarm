import { AlertTriangle, Check, Minus } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { StatsStrip } from "@/components/kit/StatsStrip";
import { moduleName } from "../api";
import type { ScriptCheckOutcome, ScriptCheckRecord } from "../publishedReport";

const meaningful = (value: string | null) => (value === "all" || value === "" ? null : value);

/** Text without the markdown marks the service leaves on a register: backticks and heading hashes. */
const plain = (text: string) =>
  text
    .replaceAll("`", "")
    .replace(/(^|\s)#{2,6}\s+/g, "$1")
    .trim();

const KNOWN_ORDER = ["agreed", "disagreed", "contradicted", "missing", "not checked"];

/** The known statuses in their fixed order, then any other status word alphabetically. */
function byStatus(a: string, b: string) {
  const rank = (status: string) => {
    const at = KNOWN_ORDER.indexOf(status);
    return at < 0 ? KNOWN_ORDER.length : at;
  };
  return rank(a) - rank(b) || (a < b ? -1 : a > b ? 1 : 0);
}

/** One check's row identity: its register and the figure or row it tests. */
function checkLabel({ register, figure, row }: ScriptCheckOutcome) {
  const named = meaningful(figure) ?? meaningful(row);
  const parts = [register && plain(register), named && plain(named)].filter(Boolean);
  return parts.join(" · ") || "Check";
}

function tally(outcomes: ScriptCheckOutcome[]) {
  const counts = new Map<string, number>();
  for (const { status } of outcomes) counts.set(status, (counts.get(status) ?? 0) + 1);
  return [...counts].sort(([a], [b]) => byStatus(a, b));
}

function StatusBadge({ status, count }: { status: string; count: number }) {
  const icon = "size-3";
  if (status === "agreed")
    return (
      <Badge color="brand" className="gap-1" icon={<Check className={icon} aria-hidden="true" />}>
        {count > 1 ? `${String(count)} ${status}` : status}
      </Badge>
    );
  const warned = ["disagreed", "contradicted", "missing"].includes(status);
  return (
    <Badge
      color={warned ? "warning" : "gray"}
      className="gap-1"
      icon={
        warned ? (
          <AlertTriangle className={icon} aria-hidden="true" />
        ) : (
          <Minus className={icon} aria-hidden="true" />
        )
      }
    >
      {count > 1 ? `${String(count)} ${status}` : status}
    </Badge>
  );
}

function Cell({ outcomes }: { outcomes: ScriptCheckOutcome[] | undefined }) {
  if (!outcomes?.length)
    return (
      <td className="px-3 py-2 align-top text-text-tertiary">
        <span aria-hidden="true">{"—"}</span>
        <span className="sr-only">no check recorded</span>
      </td>
    );
  return (
    <td className="px-3 py-2 align-top">
      <div className="flex flex-wrap gap-1.5">
        {tally(outcomes).map(([status, count]) => (
          <StatusBadge key={status} status={status} count={count} />
        ))}
      </div>
    </td>
  );
}

export function ScriptCheckMatrix({
  records,
  module,
}: {
  records: ScriptCheckRecord[];
  module?: string;
}) {
  const selected = records.filter((record) => !module || record.module === module);
  const columns = new Map<string, ScriptCheckOutcome[]>();
  for (const record of selected)
    columns.set(record.module, [...(columns.get(record.module) ?? []), ...record.outcomes]);
  const all = [...columns.values()].flat();
  if (all.length === 0) return null;

  const rows = new Map<string, Map<string, ScriptCheckOutcome[]>>();
  for (const [id, outcomes] of columns)
    for (const outcome of outcomes) {
      const label = checkLabel(outcome);
      const row = rows.get(label) ?? new Map<string, ScriptCheckOutcome[]>();
      row.set(id, [...(row.get(id) ?? []), outcome]);
      rows.set(label, row);
    }
  const stats = tally(all).map(([status, count]) => ({ label: status, value: String(count) }));

  return (
    <div className="grid gap-4">
      <StatsStrip label="Script check outcomes" stats={stats} />
      <div
        role="region"
        aria-label="Script checks by module"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        className="min-w-0 overflow-x-auto rounded-ds-md border border-border-hairline"
      >
        <table className="w-full border-collapse text-small">
          <caption className="sr-only">Script check outcomes by check and module</caption>
          <thead className="bg-surface-subtle">
            <tr>
              <th
                scope="col"
                className="sticky left-0 min-w-40 bg-surface-card px-3 py-2 text-left font-medium text-text-secondary"
              >
                Check
              </th>
              {[...columns.keys()].map((id) => (
                <th
                  key={id}
                  scope="col"
                  className="min-w-32 px-3 py-2 text-left align-top font-medium"
                >
                  <a
                    href={`#evidence/checks/${encodeURIComponent(id)}`}
                    aria-label={moduleName(id)}
                    className="grid gap-0.5 text-text-primary"
                  >
                    <span>{moduleName(id)}</span>
                    {moduleName(id) !== id && (
                      <span className="font-mono text-caption font-normal text-text-tertiary">
                        {id}
                      </span>
                    )}
                  </a>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...rows].map(([label, cells]) => (
              <tr key={label} className="border-t border-border-hairline">
                <th
                  scope="row"
                  className="sticky left-0 bg-surface-card px-3 py-2 text-left align-top font-medium text-text-primary wrap-anywhere"
                >
                  {label}
                </th>
                {[...columns.keys()].map((id) => (
                  <Cell key={id} outcomes={cells.get(id)} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
