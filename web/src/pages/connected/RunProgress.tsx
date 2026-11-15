import { useEffect, useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { StatusBadge } from "@/components/status/StatusBadge";
import { PageHeader } from "../../shell/PageHeader";
import { ModuleSteps } from "../run/activity/ModuleSteps";
import {
  getReport,
  getRun,
  isPendingReport,
  moduleName,
  pathwayName,
  RequestError,
  type Run,
  type RunStatus,
} from "./api";
import { Breadcrumb, card, ErrorNotice, heading } from "./layout";
import { errorText } from "./useResource";

const WORDS = {
  queued: "Queued",
  running: "Running",
  finished: "Finished",
  failed: "Failed",
  capped: "Capped",
  rejected: "Rejected",
  interrupted: "Interrupted",
} as const satisfies Record<RunStatus, string>;

const MODULE_STATE = { done: "Finished", running: "Running", waiting: "Queued" } as const;

export function RunProgress({ id }: { id: string }) {
  const [run, setRun] = useState<Run>();
  const [error, setError] = useState("");
  const [reportReady, setReportReady] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const cancelled = () => signal.aborted;
    function schedule() {
      if (!cancelled())
        timer = setTimeout(() => {
          void poll();
        }, 2000);
    }
    async function poll() {
      try {
        const next = await getRun(id, signal);
        if (cancelled()) return;
        setRun(next);
        setError("");
        if (next.status === "queued" || next.status === "running") {
          schedule();
        } else if (next.status === "finished") {
          try {
            await getReport(id, signal);
            if (!cancelled()) setReportReady(true);
          } catch (failure) {
            if (cancelled()) return;
            if (!isPendingReport(failure)) setError(errorText(failure));
            schedule();
          }
        }
      } catch (failure) {
        if (cancelled()) return;
        setError(errorText(failure));
        if (!(failure instanceof RequestError && failure.status === 404)) schedule();
      }
    }
    void poll();
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [id]);

  const restartable = run && ["failed", "capped", "rejected", "interrupted"].includes(run.status);
  const live = run?.status === "queued" || run?.status === "running";
  return (
    <>
      <Breadcrumb>Run activity</Breadcrumb>
      <PageHeader
        title={run?.issuer_name || "Run activity"}
        badges={
          run && (
            <>
              <span role="status">
                <StatusBadge set="Run states" state={WORDS[run.status]} live={live} />
              </span>
              <span className="text-sm text-text-secondary">{pathwayName(run.pathway)}</span>
            </>
          )
        }
        actions={
          <>
            {reportReady && <Button href={`/report/${encodeURIComponent(id)}`}>Open report</Button>}
            {(restartable || reportReady) && (
              <Button color="secondary" href={`/start?from=${encodeURIComponent(id)}`}>
                Start from this run
              </Button>
            )}
          </>
        }
      />
      {error && (
        <div className="mt-6">
          <ErrorNotice>{error}</ErrorNotice>
        </div>
      )}
      {run ? (
        <section className={`mt-6 max-w-4xl ${card}`}>
          <h2 className={heading}>Run activity</h2>
          {run.submitted_by && (
            <p className="text-sm text-text-secondary">Submitted by {run.submitted_by}</p>
          )}
          {run.started_at && (
            <p className="text-sm text-text-secondary">
              Started <time dateTime={run.started_at}>{run.started_at}</time>
            </p>
          )}
          {run.ended_at && (
            <p className="text-sm text-text-secondary">
              Ended <time dateTime={run.ended_at}>{run.ended_at}</time>
            </p>
          )}
          {run.reason && <p className="text-sm text-text-secondary">{run.reason}</p>}
          {run.stalled && (
            <p className="text-sm text-text-secondary">
              No activity has been recorded in the last hour.
            </p>
          )}
          {run.status === "finished" && !reportReady && (
            <p role="status" className="text-sm text-text-secondary">
              Waiting for the report to become available…
            </p>
          )}
          <ModuleSteps
            live={live}
            steps={run.modules.map(([code, state]) => ({
              kind: "module",
              name: moduleName(code),
              state: state === "waiting" && !live ? "Not run" : MODULE_STATE[state],
              detail: null,
            }))}
          />
        </section>
      ) : (
        !error && (
          <p role="status" className="mt-6 text-text-secondary">
            Loading run activity…
          </p>
        )
      )}
    </>
  );
}
