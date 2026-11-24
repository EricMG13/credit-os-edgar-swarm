import { ArrowRight, Dataflow03 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { GapPanel } from "@/components/gap/GapPanel";
import { StatusBadge } from "@/components/status/StatusBadge";
import { cx } from "@/utils/cx";
import { moduleName } from "../../api";
import { evidencePath, type PublishedRun, type Snapshot } from "../../publishedReport";
import { moduleBottomLines, moduleState, type ReportView } from "../../reportView";
import { PublishedSource } from "../PublishedTrace";
import { byStage } from "../stages";
import { Tile, Well } from "./Tile";

type RowProps = { snapshot: Snapshot; run: PublishedRun; view: ReportView };
type Line = ReturnType<typeof moduleBottomLines>[number];
type Node = { id: string; name: string; state: Line["state"] };

const DELIVERED = "Delivered";
const BLOCKED = "Not assessable";
// On a wide screen a stage's edges live in the 24px gap beside it: a 12px stub per node and a
// vertical bus from the first node's centre to the last (a node is 44px tall, so 22px in).
const STUB = "absolute top-1/2 hidden h-px w-3 lg:block";
const BUS = "absolute top-[22px] bottom-[22px] hidden border-l border-connector lg:block";

/** Every module of the run as a node: the lead, which the bottom lines leave out, and the rest. */
function nodes(view: ReportView, lines: readonly Line[]): Node[] {
  const lead: Node[] = view.lead
    ? [
        {
          id: view.lead.output.module,
          name: moduleName(view.lead.output.module),
          state: moduleState(view.lead),
        },
      ]
    : [];
  return [...lead, ...lines.map(({ id, name, state }) => ({ id, name, state }))];
}

/** The edge into a node and the edge out of it; a blocked module passes nothing on. */
function Stubs({ node, first, last }: { node: Node; first: boolean; last: boolean }) {
  const blocked = node.state === BLOCKED;
  return (
    <>
      {!first && (
        <span
          aria-hidden="true"
          className={cx(
            STUB,
            "-left-3",
            blocked ? "border-t border-dashed border-warning-mark" : "bg-connector",
          )}
        />
      )}
      {!last && !blocked && (
        <span
          aria-hidden="true"
          data-edge="delivered"
          className={cx(STUB, "-right-3 bg-connector", node.state === DELIVERED && "pipeline-flow")}
        />
      )}
    </>
  );
}

function NodeLink({ node, first, last }: { node: Node; first: boolean; last: boolean }) {
  const blocked = node.state === BLOCKED;
  return (
    <li className="relative">
      <Stubs node={node} first={first} last={last} />
      <a
        href={`#modules/${node.id}`}
        className={cx(
          "flex h-11 min-w-0 items-center justify-between gap-2 rounded-ds-sm border bg-surface-card px-3 text-small font-medium text-text-primary outline-focus-ring transition-colors duration-100 hover:border-border-control focus-visible:outline-2 focus-visible:outline-offset-2",
          blocked ? "border-dashed border-warning-mark" : "border-border-hairline",
        )}
      >
        <span className="truncate">{node.name}</span>
        {node.state === DELIVERED ? (
          <span className="flex flex-none items-center">
            <span aria-hidden="true" className="size-[7px] rounded-ds-full bg-action" />
            <span className="sr-only">{DELIVERED}</span>
          </span>
        ) : (
          <StatusBadge set="Module state" state={node.state} className="flex-none" />
        )}
      </a>
    </li>
  );
}

function Stage({
  name,
  rows,
  first,
  last,
}: {
  name: string;
  rows: readonly Node[];
  first: boolean;
  last: boolean;
}) {
  return (
    <li className="grid min-w-0 grid-rows-[auto_1fr] gap-3">
      <h3 className="flex items-baseline gap-2 truncate text-caption text-text-tertiary">
        {name}
        <span className="font-mono tabular-nums">{rows.length}</span>
      </h3>
      <div className="flex min-w-0 items-center">
        <ul className="relative grid min-w-0 flex-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {!first && <span aria-hidden="true" className={cx(BUS, "-left-3")} />}
          {!last && <span aria-hidden="true" className={cx(BUS, "-right-3")} />}
          {rows.map((node) => (
            <NodeLink key={node.id} node={node} first={first} last={last} />
          ))}
        </ul>
      </div>
    </li>
  );
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

function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-caption text-text-secondary">
      <span className="flex items-center gap-1.5">
        <span aria-hidden="true" className="size-[7px] rounded-ds-full bg-action" />
        {DELIVERED}
      </span>
      <span className="flex items-center gap-1.5">
        <span aria-hidden="true" className="w-4 border-t border-dashed border-warning-mark" />
        {BLOCKED}, nothing passed on
      </span>
      <Button color="secondary" size="sm" href="#modules" iconTrailing={ArrowRight}>
        Open Modules
      </Button>
    </div>
  );
}

/** The run as a staged node graph, then each module's bottom line in three balanced columns. */
export function PipelineRow({ run, view }: RowProps) {
  const lines = moduleBottomLines(view, run);
  const all = nodes(view, lines);
  if (!all.length) return null;
  const stages = byStage(all);
  return (
    <Tile span={12} label="Bottom line by module">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
          <h2 className="flex items-center gap-2.5 text-small font-medium text-text-primary">
            <Dataflow03 aria-hidden="true" className="size-4 text-text-secondary" />
            Module pipeline
          </h2>
          <p className="text-caption text-text-tertiary">
            <span className="font-mono tabular-nums">{all.length}</span>{" "}
            {all.length === 1 ? "module" : "modules"} in{" "}
            <span className="font-mono tabular-nums">{stages.length}</span>{" "}
            {stages.length === 1 ? "stage" : "stages"}
          </p>
        </div>
        <Legend />
      </div>
      <Well className="border border-border-hairline p-4 sm:p-6">
        <ol
          aria-label="Stages"
          className="grid gap-4 border-l border-connector pl-4 lg:auto-cols-fr lg:grid-flow-col lg:gap-6 lg:border-l-0 lg:pl-0"
        >
          {stages.map((stage, index) => (
            <Stage
              key={stage.name}
              name={stage.name}
              rows={stage.rows}
              first={index === 0}
              last={index === stages.length - 1}
            />
          ))}
        </ol>
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
