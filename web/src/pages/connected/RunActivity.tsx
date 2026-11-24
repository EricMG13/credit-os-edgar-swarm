import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Alert } from "@/components/alert/Alert";
import { EmptyState } from "@/components/application/empty-state/empty-state";
import { Table } from "@/components/application/table/table";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { StatsStrip } from "@/components/kit/StatsStrip";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
import { StatusBadge } from "@/components/status/StatusBadge";
import { StatusShape } from "@/components/status/shapes";
import { Skeleton } from "@/components/gap/Skeleton";
import { PageHeader } from "../../shell/PageHeader";
import { TextLink } from "../run/TextLink";
import {
  getActivity,
  moduleName,
  pathwayName,
  serviceText,
  type Activity,
  type EndedRun,
  type LiveRun,
  type ConnectedModuleState,
  type Mode,
} from "./api";
import { heading } from "./layout";
import { Figure, GapNote } from "./report/overview/Tile";
import { finishedFigure, stamp } from "./runFigures";

const RELOAD_MS = 5000;
const STEP = {
  done: "Finished",
  running: "Running",
  stopped: "Interrupted",
  waiting: "Queued",
} as const satisfies Record<ConnectedModuleState, string>;
const ENDED = {
  failed: "Failed",
  capped: "Capped",
  rejected: "Rejected",
  interrupted: "Interrupted",
} as const satisfies Record<EndedRun["status"], string>;
const panel = "rounded-ds-lg border border-border-subtle bg-surface-card";
const RUN_LINK = 'a[href^="/run/"]';

const runPath = (run: { id: string }) => `/run/${encodeURIComponent(run.id)}`;
const fileCount = (run: LiveRun) =>
  run.files > 0 && `${String(run.files)} source file${run.files === 1 ? "" : "s"}`;
const texts = (...parts: (string | false)[]) =>
  parts.filter((part): part is string => Boolean(part));
/** Why a run is not moving, and the name warning: the card and the waiting row both say them. */
const notes = (run: LiveRun) =>
  texts(serviceText(run.reason), run.name_differs && "Issuer name differs from earlier runs");

/**
 * The list, re-read while the page is open. A read that fails is never shown as an empty list:
 * the last good list stays and `failed` says the latest read did not work.
 */
function useActivity(beforeUpdate: (next: Activity) => void) {
  const [read, setRead] = useState<Activity>();
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout> | undefined;
    async function poll() {
      const next = await getActivity(controller.signal).catch(() => null);
      if (controller.signal.aborted) return;
      if (next && Array.isArray(next.runs) && (next.ended == null || Array.isArray(next.ended))) {
        beforeUpdate(next);
        setRead(next);
        setFailed(false);
      } else {
        setFailed(true);
      }
      timer = setTimeout(() => void poll(), RELOAD_MS);
    }
    void poll();
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [beforeUpdate]);
  return { read, failed };
}

function Tally({ counts }: { counts: [string, number][] }) {
  return (
    <StatsStrip
      label="Run counts"
      stats={counts.map(([label, count]) => ({ label, value: String(count) }))}
    />
  );
}

function RunIssuerLink({ run }: { run: Pick<LiveRun, "id" | "issuer_name"> }) {
  return (
    <TextLink href={runPath(run)} className="whitespace-normal wrap-anywhere">
      {run.issuer_name || "Issuer not named"}
    </TextLink>
  );
}

function RunningCard({ run }: { run: LiveRun }) {
  const { bar } = finishedFigure(run);
  const line = texts(
    run.submitted_by && `submitted by ${run.submitted_by}`,
    run.started_at && `started ${stamp(run.started_at)}`,
  ).join(" · ");
  const foot = texts(fileCount(run), ...notes(run));
  return (
    <li className={`${panel} flex min-w-0 flex-col gap-4 p-5 sm:p-6`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-h4 font-medium text-balance wrap-anywhere">
            <RunIssuerLink run={run} />
          </h3>
          {line && (
            <p className="reading-copy mt-0.5 text-small text-text-tertiary tabular-nums">{line}</p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge color="gray">{pathwayName(run.pathway)}</Badge>
          <StatusBadge set="Run states" state="Running" live />
          {run.stalled && (
            <Badge color="warning" className="gap-1.5 pl-2" icon={<StatusShape shape="triangle" />}>
              No activity in the last hour
            </Badge>
          )}
        </div>
      </div>
      {run.modules.length > 0 && (
        <>
          {bar && (
            <div className="flex flex-col gap-2">
              <Figure className="text-h3 font-medium">{`${String(bar.value)} of ${String(bar.max)}`}</Figure>
              <ProgressBar value={bar.value} max={bar.max} label={bar.label} />
            </div>
          )}
          <ul
            aria-label="Modules"
            className="grid gap-x-4 gap-y-1.5 rounded-ds-sm bg-surface-subtle p-3 sm:grid-cols-2"
          >
            {run.modules.map(([code, state]) => (
              <li key={code} className="flex min-w-0 items-center justify-between gap-2">
                <span className="min-w-0 text-small wrap-anywhere text-text-secondary">
                  {moduleName(code)}
                </span>
                <StatusBadge set="Run states" state={STEP[state]} />
              </li>
            ))}
          </ul>
        </>
      )}
      {foot.length > 0 && (
        <p className="flex flex-wrap gap-x-4 gap-y-1 border-t border-border-hairline pt-3 text-small text-text-secondary">
          {foot.map((text) => (
            <span key={text} className="min-w-0 wrap-anywhere">
              {text}
            </span>
          ))}
        </p>
      )}
    </li>
  );
}

function WaitingTable({ runs, held }: { runs: LiveRun[]; held: string }) {
  return (
    <div className={`${panel} overflow-x-auto`}>
      <Table aria-label="Waiting runs" size="sm" className="min-w-[24rem]">
        <Table.Header>
          <Table.Head id="issuer" isRowHeader label="Issuer" />
          <Table.Head id="pathway" label="Pathway" />
        </Table.Header>
        <Table.Body items={runs}>
          {(run) => (
            <Table.Row id={run.id}>
              <Table.Cell className="wrap-anywhere">
                <RunIssuerLink run={run} />
                {texts(
                  texts(
                    run.submitted_by && `submitted by ${run.submitted_by}`,
                    fileCount(run),
                  ).join(" · "),
                  ...notes(run),
                  !run.reason && !held && "Waiting for an available run slot.",
                ).map((text) => (
                  <span key={text} className="block text-caption">
                    {text}
                  </span>
                ))}
              </Table.Cell>
              <Table.Cell>{pathwayName(run.pathway)}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
}

function EndedTable({ runs }: { runs: EndedRun[] }) {
  return (
    <div className={`${panel} overflow-x-auto`}>
      <Table aria-label="Runs that ended without a report" size="sm" className="min-w-[44rem]">
        <Table.Header>
          <Table.Head id="issuer" isRowHeader label="Issuer" />
          <Table.Head id="pathway" label="Pathway" />
          <Table.Head id="state" label="State" />
          <Table.Head id="ended" label="Ended" />
          <Table.Head id="reason" label="Reason" />
        </Table.Header>
        <Table.Body items={runs}>
          {(run) => (
            <Table.Row id={run.id}>
              <Table.Cell className="wrap-anywhere">
                <RunIssuerLink run={run} />
              </Table.Cell>
              <Table.Cell>{pathwayName(run.pathway)}</Table.Cell>
              <Table.Cell>
                <StatusBadge set="Run states" state={ENDED[run.status]} />
              </Table.Cell>
              <Table.Cell className="tabular-nums">
                {run.ended_at ? stamp(run.ended_at) : "Not recorded"}
              </Table.Cell>
              <Table.Cell className="wrap-anywhere">{serviceText(run.reason)}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
}

function Group({
  title,
  group,
  children,
}: {
  title: string;
  group: LiveRun["status"] | "ended";
  children: ReactNode;
}) {
  return (
    <section aria-label={title} data-run-group={group} className="grid min-w-0 content-start gap-3">
      <h2 className={heading}>{title}</h2>
      {children}
    </section>
  );
}

function Empty({ title, children }: { title: string; children: string }) {
  return (
    <EmptyState>
      <EmptyState.Header>
        <EmptyState.FeaturedIcon />
      </EmptyState.Header>
      <EmptyState.Content>
        <EmptyState.Title>{title}</EmptyState.Title>
        <EmptyState.Description>{children}</EmptyState.Description>
      </EmptyState.Content>
      <EmptyState.Footer>
        <Button href="/" color="secondary">
          Open the library
        </Button>
      </EmptyState.Footer>
    </EmptyState>
  );
}

function groupForRunPath(activity: Activity, path: string) {
  const sameRun = (run: { id: string }) => runPath(run) === path;
  return (
    activity.runs.find(sameRun)?.status ?? (activity.ended?.some(sameRun) ? "ended" : undefined)
  );
}

/** What is running, waiting and ended without a report. A run's own page has its spend, modules and activity. */
export function RunActivity({ mode }: { mode?: Mode } = {}) {
  useEffect(() => {
    document.title = "Run activity — Credit OS";
  }, []);
  const content = useRef<HTMLDivElement>(null);
  const focusedRun = useRef<{ node: Element; href: string } | null>(null);
  const rememberRunFocus = useCallback((next: Activity) => {
    focusedRun.current = null;
    const node = document.activeElement;
    const region = content.current;
    if (!node || !region?.contains(node)) return;
    const link =
      node.closest<HTMLAnchorElement>(RUN_LINK) ??
      node.closest("tr")?.querySelector<HTMLAnchorElement>(RUN_LINK);
    const group = link?.closest<HTMLElement>("[data-run-group]")?.dataset.runGroup;
    if (!link || !group) return;
    if (groupForRunPath(next, link.pathname) !== group) {
      focusedRun.current = { node, href: link.href };
      // Leave the departing grid before it assigns focus to a different run.
      region.focus({ preventScroll: true });
    }
  }, []);
  const { read, failed } = useActivity(rememberRunFocus);
  useEffect(() => {
    const previous = focusedRun.current;
    focusedRun.current = null;
    const region = content.current;
    if (!previous || !region) return;
    const restoreFocus = () => {
      if (document.activeElement !== region) return;
      const link = [...region.querySelectorAll<HTMLAnchorElement>(RUN_LINK)].find(
        (entry) => entry.href === previous.href,
      );
      link?.focus();
    };
    let frame: number | undefined;
    // The React Aria collection can remove the old row in a separate commit from the poll.
    const restoreAfterRemoval = () => {
      if (previous.node.isConnected) return;
      observer.disconnect();
      frame = requestAnimationFrame(restoreFocus);
    };
    const observer = new MutationObserver(restoreAfterRemoval);
    if (previous.node.isConnected) observer.observe(region, { childList: true, subtree: true });
    else restoreAfterRemoval();
    return () => {
      observer.disconnect();
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, [read]);
  const running = read?.runs.filter((run) => run.status === "running") ?? [];
  const waiting = read?.runs.filter((run) => run.status === "queued") ?? [];
  const ended = read?.ended ?? [];
  const endedTotal = Math.max(read?.ended_total ?? 0, ended.length);
  return (
    <>
      <PageHeader
        title="Run activity"
        badges={
          <>
            {mode === "synthetic" && <Badge color="gray">Synthetic test</Badge>}
            {read && (
              <span className="text-caption text-text-tertiary tabular-nums">{`Updated ${stamp(read.updated)}`}</span>
            )}
          </>
        }
        actions={<Button href="/start">Start a run</Button>}
      />
      <div
        ref={content}
        role="region"
        aria-label="Runs"
        tabIndex={-1}
        className="mt-6 grid min-w-0 gap-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        {read && (
          <Tally
            counts={[
              ["Running", running.length],
              ["Waiting", waiting.length],
              ["Ended without a report", endedTotal],
            ]}
          />
        )}
        {read === undefined && !failed && (
          <div role="status" aria-label="Loading run activity" className="grid gap-6">
            <div className={`${panel} grid h-24 grid-cols-3 gap-4 p-5`}>
              {[0, 1, 2].map((key) => (
                <Skeleton key={key} lines={2} />
              ))}
            </div>
            <div className="grid gap-4 xl:grid-cols-2">
              {[0, 1].map((key) => (
                <div key={key} className={`${panel} p-5 sm:p-6`}>
                  <Skeleton lines={5} />
                </div>
              ))}
            </div>
          </div>
        )}
        {read && running.length + waiting.length + ended.length > 0 && (
          <TextLink href="/">Finished runs are in the library</TextLink>
        )}
        {failed && (
          <Alert
            tone={read ? "warning" : "error"}
            title={read ? "Run activity could not be refreshed" : "Run activity could not be read"}
            action={
              <Button href="/" size="sm" color="secondary">
                Open the library
              </Button>
            }
          >
            {read
              ? `Showing the list from ${stamp(read.updated)}. This page retries every few seconds.`
              : "Run status is unknown. This page retries every few seconds. Finished reports are in the library."}
          </Alert>
        )}
        {read?.held && (
          <Alert tone="warning" title="Held by the service">
            <span className="wrap-anywhere">{serviceText(read.held)}</span>
          </Alert>
        )}
        {read?.unreadable ? (
          <Alert tone="warning" title="Some run records could not be read">
            {read.unreadable === 1
              ? "1 run record could not be read and is not listed."
              : `${String(read.unreadable)} run records could not be read and are not listed.`}
          </Alert>
        ) : null}
        {read && running.length + waiting.length + ended.length === 0 && (
          <Empty title={read.unreadable ? "No active runs listed" : "No run in progress"}>
            {read.unreadable
              ? "Other runs may be in progress if their records could not be read."
              : "No run is running or waiting. Finished runs are in the library."}
          </Empty>
        )}
        {running.length > 0 && (
          <Group title="Running" group="running">
            <ul className="grid items-start gap-4 xl:grid-cols-2">
              {running.map((run) => (
                <RunningCard key={run.id} run={run} />
              ))}
            </ul>
          </Group>
        )}
        {waiting.length > 0 && (
          <Group title="Waiting" group="queued">
            <WaitingTable runs={waiting} held={read?.held ?? ""} />
          </Group>
        )}
        {ended.length > 0 && (
          <Group title="Ended without a report" group="ended">
            {endedTotal > ended.length && (
              <p className="text-sm text-text-secondary">
                {`Showing the latest ${String(ended.length)} of ${String(endedTotal)}.`}
              </p>
            )}
            <EndedTable runs={ended} />
          </Group>
        )}
      </div>
    </>
  );
}

/** The preview that holds no run records: the screen's own header and a gap that says why. */
export function RunReadOnly() {
  return (
    <>
      <PageHeader title="Run activity" actions={<Button href="/">Back to Library</Button>} />
      <div className="mt-6">
        <GapNote>
          Runs are not available in a read-only preview. The library and reports are.
        </GapNote>
      </div>
    </>
  );
}
