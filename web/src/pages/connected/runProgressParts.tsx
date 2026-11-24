import { useId } from "react";
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

/** Where the run stopped, as the record marks it: the module the checks stopped it at (alone, the
 * others in flight being bystanders) or, for a run that was lost, the modules it was running. */
export function stoppedAt(steps: readonly ModuleStep[]): {
  names: string[];
  detail: string | null;
} {
  const modules = steps.filter((step) => step.kind === "module");
  const refused = modules.find((step) => step.detail !== null);
  if (refused) return { names: [refused.name], detail: refused.detail };
  return {
    names: modules.filter((step) => step.state === "Interrupted").map((step) => step.name),
    detail: null,
  };
}

/** The tiles' places: spend first in reading order, beside the pipeline from lg up. */
export const PIPELINE_TILE = "lg:col-span-9 lg:col-start-1 lg:row-start-1";
export const SPEND_TILE = "lg:col-start-10 lg:row-start-1 lg:self-start";

/** Value against a limit: a track you can see, the spend filled, the cap marked at its end. */
function CapMeter({ bar }: { bar: { value: number; max: number; label: string } }) {
  const labelId = useId();
  const share = (bar.value * 100) / bar.max;
  return (
    <div className="flex flex-col gap-1.5">
      <div
        role="progressbar"
        aria-labelledby={labelId}
        aria-valuenow={bar.value}
        aria-valuemin={0}
        aria-valuemax={bar.max}
        className="relative h-2.5 w-full overflow-hidden rounded-ds-full border border-border-container bg-surface-subtle"
      >
        <div className="h-full rounded-ds-full bg-chart-1" style={{ width: `${String(share)}%` }} />
        <span aria-hidden="true" className="absolute inset-y-0 right-0 w-0.5 bg-text-primary" />
      </div>
      <span id={labelId} className="text-small text-text-secondary tabular-nums">
        {bar.label}
      </span>
    </div>
  );
}

/** The cap as the figure states it: the label ends "of USD 25.00 cap usage". */
function capOf(label: string) {
  return /of (USD [\d,.]+) cap usage/.exec(label)?.[1];
}

/** Spend against the cap as the page's one meter, with the amount in mono; then the time. */
export function SpendTile({
  spend,
  elapsed,
}: {
  spend: RunFigure;
  elapsed: { value: string | null; note: string };
}) {
  const cap = spend.bar === null ? undefined : capOf(spend.bar.label);
  return (
    <Tile span={3} className={SPEND_TILE} label="Spend">
      <h2 className="text-caption text-text-tertiary">Spend against the cap</h2>
      {spend.value === null ? (
        <GapNote>{spend.bar === null ? spend.note : "Spend is not known"}</GapNote>
      ) : (
        <div className="flex flex-col gap-3">
          <Figure className="text-metric font-medium">{spend.value}</Figure>
          {spend.bar === null ? (
            <span className="text-small text-text-tertiary">{spend.note}</span>
          ) : (
            <>
              <CapMeter bar={spend.bar} />
              {cap !== undefined && <Figure className="text-small">{`Cap ${cap}`}</Figure>}
            </>
          )}
        </div>
      )}
      <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-border-hairline pt-4 text-small text-text-secondary">
        <span>Elapsed</span>
        <Figure className="text-body font-medium">{elapsed.value ?? <Missing />}</Figure>
        <span className="text-text-tertiary">{elapsed.note}</span>
      </p>
    </Tile>
  );
}
