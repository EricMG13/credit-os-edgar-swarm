import type { ReactNode } from "react";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
import { Missing } from "@/components/gap/Missing";
import type { PipelineNode, PipelineStage, PipelineState } from "@/components/pipeline";
import type { Figure as RunFigure, ModuleStep, ModuleWord } from "../run/slice-activity";
import { Figure, GapNote, Tile } from "./report/overview/Tile";
import { byStage } from "./report/stages";

const REPORT = "Report";

const STATE: Record<ModuleWord, PipelineState> = {
  Finished: "delivered",
  Running: "running",
  Queued: "queued",
  "Not run": "queued",
  "Not assessable": "blocked",
  Interrupted: "failed",
};

/**
 * The run's modules as the five stages the report uses, then the report's own delivery as a last
 * stage. `modules` and `steps` are the same list (the run's own order), one row each.
 */
export function pipelineStages(
  modules: readonly (readonly [string, string])[],
  steps: readonly ModuleStep[],
): PipelineStage[] {
  const nodes: (PipelineNode & { report: boolean })[] = steps.flatMap((step, index) => {
    const code = modules[index]?.[0];
    if (step.kind !== "module" || code === undefined) return [];
    return [
      {
        id: code,
        name: step.name,
        state: STATE[step.state],
        word: step.state,
        ...(step.detail === null ? {} : { detail: step.detail }),
        report: code === REPORT,
      },
    ];
  });
  const analytical = nodes.filter((node) => !node.report);
  const stages = byStage(analytical).map(({ name, rows }) => ({ name, nodes: rows }));
  const delivery = nodes.filter((node) => node.report);
  return delivery.length > 0 ? [...stages, { name: "Report delivery", nodes: delivery }] : stages;
}

/** The modules the run stopped at: the ones the record marks as not assessable or interrupted. */
export function stoppedAt(steps: readonly ModuleStep[]): string[] {
  return steps.flatMap((step) =>
    step.kind === "module" && (step.state === "Interrupted" || step.detail !== null)
      ? [step.name]
      : [],
  );
}

function KeyValue({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <dt className="text-caption text-text-tertiary">{term}</dt>
      <dd className="flex min-w-0 flex-col gap-1.5">{children}</dd>
    </div>
  );
}

function Meter({ figure }: { figure: RunFigure }) {
  if (figure.bar === null)
    return <span className="text-small text-text-tertiary">{figure.note}</span>;
  return (
    <ProgressBar
      value={figure.bar.value}
      max={figure.bar.max}
      label={figure.bar.label}
      labelBelow
    />
  );
}

/** Spend against the cap as the page's one meter, with the amount in mono; then progress and time. */
export function SpendTile({
  spend,
  finished,
  elapsed,
}: {
  spend: RunFigure;
  finished: RunFigure;
  elapsed: { value: string | null; note: string };
}) {
  return (
    <Tile span={4} label="Spend and progress" kicker="Spend against the cap">
      <div className="flex flex-col gap-3">
        {spend.value === null ? (
          <GapNote>{spend.bar === null ? spend.note : "Spend is not known"}</GapNote>
        ) : (
          <Figure className="text-metric font-medium">{spend.value}</Figure>
        )}
        {spend.value !== null && <Meter figure={spend} />}
      </div>
      <dl className="grid gap-4 border-t border-border-hairline pt-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <KeyValue term="Modules finished">
          <Figure className="text-h4">{finished.value ?? <Missing />}</Figure>
          <Meter figure={finished} />
        </KeyValue>
        <KeyValue term="Elapsed">
          <Figure className="text-h4">{elapsed.value ?? <Missing />}</Figure>
          <span className="text-small text-text-tertiary">{elapsed.note}</span>
        </KeyValue>
      </dl>
    </Tile>
  );
}
