import { Badge } from "@/components/base/badges/badges";
import { moduleName } from "../api";
import { card, heading } from "../layout";
import type { ScriptCheckOutcome, ScriptCheckRecord } from "../publishedReport";

const meaningful = (value: string | null) => (value === "all" || value === "" ? null : value);

/** Text without the markdown marks the service leaves on a register or a reason: backticks and heading hashes. */
const plain = (text: string) =>
  text
    .replaceAll("`", "")
    .replace(/(^|\s)#{2,6}\s+/g, "$1")
    .trim();

function groupOutcomes(outcomes: ScriptCheckOutcome[]) {
  const groups = new Map<string, ScriptCheckOutcome[]>();
  for (const outcome of outcomes) {
    const key = JSON.stringify([
      outcome.status,
      outcome.reason,
      outcome.script,
      meaningful(outcome.figure),
      meaningful(outcome.row),
      outcome.stated,
      outcome.recomputed,
      outcome.recomputedLabel,
      outcome.tolerance,
      outcome.unit,
    ]);
    const group = groups.get(key) ?? [];
    group.push(outcome);
    groups.set(key, group);
  }
  return [...groups.values()];
}

function CheckStatus({ status, count }: { status: string; count?: number }) {
  const color =
    status === "agreed"
      ? "brand"
      : ["disagreed", "contradicted", "missing"].includes(status)
        ? "warning"
        : "gray";
  return <Badge color={color}>{count === undefined ? status : `${String(count)} ${status}`}</Badge>;
}

function CheckField({ label, value }: { label: string; value: string | number | null }) {
  if (value === null || value === "") return null;
  return (
    <div className="grid gap-1 min-w-0">
      <dt className="text-sm text-text-secondary">{label}</dt>
      <dd className="whitespace-pre-wrap wrap-anywhere">{value}</dd>
    </div>
  );
}

function CheckCard({ group }: { group: ScriptCheckOutcome[] }) {
  const outcome = group[0];
  if (!outcome) return null;
  const registers = group.flatMap(({ register }) => (register ? [plain(register)] : []));
  const named = meaningful(outcome.figure) ?? meaningful(outcome.row);
  // A card is headed by its register and the figure checked: the figure alone is often "columns".
  const where = group.length > 1 ? `${String(registers.length)} registers` : registers[0];
  const title = [where, named && plain(named)].filter(Boolean).join(" \u00b7 ") || "Check";
  const recomputed = [outcome.recomputed, outcome.recomputedLabel]
    .filter((value) => value !== null)
    .join(" ");
  return (
    <section className="grid gap-3 rounded-ds-md border border-border-hairline p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h4 className="font-semibold">{title}</h4>
        <CheckStatus status={outcome.status} />
      </div>
      <dl className="grid gap-3 sm:grid-cols-2">
        <CheckField label="Reason" value={outcome.reason && plain(outcome.reason)} />
        {group.length > 1 && registers.length > 0 ? (
          <div className="grid gap-1">
            <dt className="text-sm text-text-secondary">Registers</dt>
            <dd className="flex flex-wrap gap-2">
              {registers.map((register, index) => (
                <Badge key={index}>{register}</Badge>
              ))}
            </dd>
          </div>
        ) : (
          <CheckField label="Register" value={named ? (registers[0] ?? null) : null} />
        )}
        <CheckField
          label="Row"
          value={meaningful(outcome.row) !== named ? meaningful(outcome.row) : null}
        />
        <CheckField label="Stated" value={outcome.stated} />
        <CheckField
          label="Recomputed"
          value={
            recomputed === "" ? null : `${recomputed}${outcome.unit ? ` ${outcome.unit}` : ""}`
          }
        />
        <CheckField label="Tolerance" value={outcome.tolerance} />
        <CheckField label="Script" value={outcome.script} />
      </dl>
    </section>
  );
}

function ModuleChecks({ record, expanded }: { record: ScriptCheckRecord; expanded: boolean }) {
  return (
    <details className={card} open={expanded}>
      <summary className="cursor-pointer font-semibold">
        <span>{moduleName(record.module)}</span>
        <span className="mt-2 flex flex-wrap gap-2">
          {record.counts.map(({ status, n }) => (
            <CheckStatus key={status} status={status} count={n} />
          ))}
        </span>
      </summary>
      <div className="mt-4 grid gap-4">
        <dl className="grid gap-3 sm:grid-cols-2">
          <CheckField label="Accepted attempt" value={record.attempt} />
          <CheckField label="Accepted response SHA-256" value={record.response} />
        </dl>
        {record.scripts.length > 0 && (
          <ul className="grid gap-2" aria-label={`Scripts run on ${moduleName(record.module)}`}>
            {record.scripts.map((script) => (
              <li
                className="grid min-w-0 gap-1 rounded-ds-md bg-surface-subtle p-3"
                key={script.name}
              >
                <span className="wrap-anywhere">{script.name}</span>
                <code className="wrap-anywhere text-sm">{script.sha256 ?? "Not recorded"}</code>
              </li>
            ))}
          </ul>
        )}
        {groupOutcomes(record.outcomes).map((group, index) => (
          <CheckCard group={group} key={index} />
        ))}
      </div>
    </details>
  );
}

export function ScriptChecks({
  records,
  module,
}: {
  records: ScriptCheckRecord[];
  module?: string;
}) {
  const selected = records.filter((record) => !module || record.module === module);
  return (
    <section className="grid gap-4">
      <h3 className={heading}>Script checks</h3>
      {selected.length ? (
        selected.map((record, index) => (
          <ModuleChecks key={index} record={record} expanded={Boolean(module)} />
        ))
      ) : (
        <p className={card}>
          {module
            ? `No script-check record is held for ${moduleName(module)}.`
            : "No script-check record is held for this run."}
        </p>
      )}
    </section>
  );
}
