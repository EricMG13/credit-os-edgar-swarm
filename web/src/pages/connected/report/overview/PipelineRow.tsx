import { ArrowRight, Dataflow03 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { GapPanel } from "@/components/gap/GapPanel";
import { Pipeline, type PipelineNode } from "@/components/pipeline";
import { moduleName } from "../../api";
import { evidencePath, type PublishedRun, type Snapshot } from "../../publishedReport";
import { moduleBottomLines, moduleState, type ReportView } from "../../reportView";
import { PublishedSource } from "../PublishedTrace";
import { byStage } from "../stages";
import { Tile, Well } from "./Tile";

type RowProps = { snapshot: Snapshot; run: PublishedRun; view: ReportView };
type Line = ReturnType<typeof moduleBottomLines>[number];

const DELIVERED = "Delivered";
const BLOCKED = "Not assessable";
/** Every module of the run as a node: the lead, which the bottom lines leave out, and the rest. */
function nodes(view: ReportView, lines: readonly Line[]): PipelineNode[] {
  const lead = view.lead
    ? [
        {
          id: view.lead.output.module,
          name: moduleName(view.lead.output.module),
          state: moduleState(view.lead),
        },
      ]
    : [];
  return [...lead, ...lines.map(({ id, name, state }) => ({ id, name, state }))].map((node) => ({
    id: node.id,
    name: node.name,
    state: node.state === DELIVERED ? "delivered" : node.state === BLOCKED ? "blocked" : "queued",
    word: node.state,
    href: `#modules/${node.id}`,
  }));
}

function LineText({ run, line }: { run: PublishedRun; line: Line }) {
  const source = evidencePath(run.folder, line.entry, line.line ?? undefined);
  return (
    <li className="mb-4 flex break-inside-avoid items-start justify-between gap-2 border-t border-border-hairline pt-3">
      <div className="grid min-w-0 gap-1">
        <h3 className="text-small font-medium text-text-primary">{line.name}</h3>
        {line.text !== null ? (
          <p className="reading-copy text-small text-text-secondary">{line.text}</p>
        ) : line.referenced ? (
          <Button color="link-gray" size="sm" href={source}>
            Read this bottom line in Evidence
          </Button>
        ) : (
          <GapPanel reason="This module's handoff has no bottom line; its handoff is in Evidence." />
        )}
      </div>
      <PublishedSource href={source} name={line.name} linkLabel={`Source for ${line.name}`}>
        View source
      </PublishedSource>
    </li>
  );
}

function OpenModules() {
  return (
    <Button color="secondary" size="sm" href="#modules" iconTrailing={ArrowRight}>
      Open Modules
    </Button>
  );
}

/** The run as a staged node graph, then each module's bottom line in three balanced columns. */
export function PipelineRow({ run, view }: RowProps) {
  const lines = moduleBottomLines(view, run);
  const all = nodes(view, lines);
  if (!all.length) return null;
  const stages = byStage(all).map(({ name, rows }) => ({ name, nodes: rows }));
  return (
    <Tile span={12} label="Bottom line by module">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
          <h3 className="flex items-center gap-2.5 text-small font-medium text-text-primary">
            <Dataflow03 aria-hidden="true" className="size-4 text-text-secondary" />
            Module pipeline
          </h3>
          <p className="text-caption text-text-tertiary">
            <span className="font-mono tabular-nums">{all.length}</span>{" "}
            {all.length === 1 ? "module" : "modules"} in{" "}
            <span className="font-mono tabular-nums">{stages.length}</span>{" "}
            {stages.length === 1 ? "stage" : "stages"}
          </p>
        </div>
        <OpenModules />
      </div>
      <Well className="border border-border-hairline p-4 sm:p-6">
        <Pipeline label="Stages" stages={stages} flow="delivered" />
      </Well>
      {lines.length > 0 && (
        <ul aria-label="Bottom lines" className="gap-x-8 md:columns-2 xl:columns-3">
          {lines.map((line) => (
            <LineText key={line.id} run={run} line={line} />
          ))}
        </ul>
      )}
    </Tile>
  );
}
