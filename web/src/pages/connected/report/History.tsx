import { Badge } from "@/components/base/badges/badges";
import { StatusBadge } from "@/components/status/StatusBadge";
import { TextLink } from "../../run/TextLink";
import { moduleName } from "../api";
import {
  outputEntries,
  reportPath,
  runLabels,
  runPathway,
  type CatalogueRun,
  type PublishedRun,
  type Snapshot,
} from "../publishedReport";
import { moduleOrder } from "../reportView";
import { StanceChip } from "./overview/CallRow";
import { runStance } from "./overview/changeData";

function runDetails(snapshot: Snapshot, key: string, run: PublishedRun) {
  if (run.history)
    return {
      modules: run.history.modules.map(moduleName),
      labels: [
        ...(run.history.earlierFormat ? ["Earlier format"] : []),
        ...(run.history.earlierMethods ? ["Earlier methods"] : []),
      ],
    };
  if (!Object.hasOwn(run, "modules")) return null;
  const modules = moduleOrder(run).filter((id) => run.modules[id]?.outputs.length);
  return {
    modules: modules.map(moduleName),
    labels: runLabels(outputEntries(snapshot, run, key), run),
  };
}

type Details = ReturnType<typeof runDetails>;

function modulesRun(details: Details) {
  if (details) {
    const count = details.modules.length;
    if (count === 0) return "0 modules run";
    return `${String(count)} ${count === 1 ? "module" : "modules"} run: ${details.modules.join(", ")}`;
  }
  return "The module list is unavailable for this run.";
}

const chip = "flex min-h-6 items-center rounded-ds-xs border px-2 text-caption font-medium";

/** The run's stance in the Overview's own chip; a quiet chip when the run states none. */
function Stance({ stance }: { stance: string | undefined }) {
  if (stance === undefined)
    return (
      <span className={`${chip} border-border-container text-text-secondary`}>
        Stance not stated
      </span>
    );
  return <StanceChip stance={stance} />;
}

function Node({ current }: { current: boolean }) {
  const tone = current
    ? "border-action bg-surface-selected"
    : "border-text-disabled bg-surface-card";
  return (
    <span
      aria-hidden="true"
      className={`absolute top-1 -left-[7px] size-3 rounded-ds-full border-2 ${tone}`}
    />
  );
}

function RunRow({
  record,
  stance,
  current,
  catalogue,
  details,
}: {
  record: PublishedRun;
  stance: string | undefined;
  current: boolean;
  catalogue: CatalogueRun | undefined;
  details: Details;
}) {
  const href = reportPath(record.folder);
  return (
    <li className="relative flex min-w-0 flex-col gap-2 pb-6 pl-6 last:pb-0">
      <Node current={current} />
      <div className="flex flex-wrap items-center gap-2">
        {record.asOf ? (
          <span className="font-mono text-h4 text-text-primary tabular-nums">{record.asOf}</span>
        ) : (
          <span className="text-h4 text-gap-text">As-of date not recorded</span>
        )}
        <Stance stance={stance} />
        {current && (
          <span className={`${chip} border-action-subtle-hover bg-surface-selected text-text-link`}>
            This run
          </span>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`${chip} border-border-hairline bg-surface-card font-normal text-text-secondary wrap-anywhere`}
        >
          {runPathway(record, catalogue) || "Credit report"}
        </span>
        <StatusBadge set="Run states" state="Finished" />
        {details?.labels.map((label) => (
          <Badge key={label}>{label}</Badge>
        ))}
      </div>
      <p className="text-small wrap-anywhere text-text-secondary">{modulesRun(details)}</p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <TextLink
          className="inline-flex min-h-8 items-center max-[480px]:min-h-11"
          href={`${href}#overview`}
        >
          Open overview
        </TextLink>
        <TextLink
          className="inline-flex min-h-8 items-center max-[480px]:min-h-11"
          href={`${href}#changes`}
        >
          What changed
        </TextLink>
      </div>
    </li>
  );
}

/** This issuer's published runs as a timeline, newest first; every run listed is finished. */
export function RunHistory({
  snapshot,
  run,
  issuer,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  issuer: string;
}) {
  const records = Object.entries(snapshot.workspace.runs)
    .filter(
      ([, record]) =>
        record === run || Boolean(run.issuerKey && record.issuerKey === run.issuerKey),
    )
    .sort(
      ([, a], [, b]) =>
        (b.asOf ?? "").localeCompare(a.asOf ?? "") || b.folder.localeCompare(a.folder),
    );
  const byFolder = new Map(snapshot.catalogue.real.map((item) => [item.id, item]));
  return (
    <section
      aria-labelledby="history-title"
      className="flex min-w-0 flex-col gap-5 rounded-ds-lg border border-border-subtle bg-surface-card p-5 sm:p-6"
    >
      <h2 id="history-title" className="text-h3 font-medium text-text-primary">
        Runs of {issuer}
      </h2>
      <p className="text-caption text-gap-text">
        Who started each run is not published with the report.
      </p>
      <ol
        aria-label="Runs, newest first"
        className="ml-1.5 flex min-w-0 flex-col border-l border-connector"
      >
        {records.map(([key, record]) => (
          <RunRow
            key={key}
            record={record}
            stance={runStance(snapshot, key, record)}
            current={record === run}
            catalogue={byFolder.get(record.folder)}
            details={runDetails(snapshot, key, record)}
          />
        ))}
      </ol>
    </section>
  );
}
