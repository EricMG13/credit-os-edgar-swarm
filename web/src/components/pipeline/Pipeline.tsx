import { StatusBadge } from "@/components/status/StatusBadge";
import { STATUS_SETS } from "@/components/status/sets";
import { cx } from "@/utils/cx";

export type PipelineState = "delivered" | "running" | "queued" | "blocked" | "failed";

export interface PipelineNode {
  id: string;
  name: string;
  state: PipelineState;
  /** A link when given; otherwise a static item of the same shape. */
  href?: string;
  /** The state's own word where the default would be wrong: "Interrupted", "Not run", "Finished". */
  word?: string;
  /** One quiet line under the name. */
  detail?: string;
}

export interface PipelineStage {
  name: string;
  nodes: readonly PipelineNode[];
}

const DEFAULT_WORD: Record<PipelineState, string> = {
  delivered: "Delivered",
  running: "Running",
  queued: "Queued",
  blocked: "Not assessable",
  failed: "Failed",
};

// On a wide screen a stage's edges live in the 24px gap beside it: a 12px stub per node and a
// vertical bus from the first node's centre to the last (a node is 44px tall, so 22px in).
const STUB = "absolute top-1/2 hidden h-px w-3 lg:block";
const BUS = "absolute top-[22px] bottom-[22px] hidden border-l border-connector lg:block";

type BadgeProps =
  | { set: "Run states"; state: keyof (typeof STATUS_SETS)["Run states"] }
  | { set: "Module state"; state: keyof (typeof STATUS_SETS)["Module state"] };

function badgeOf(node: PipelineNode): BadgeProps {
  const word = node.word ?? DEFAULT_WORD[node.state];
  if (Object.hasOwn(STATUS_SETS["Module state"], word))
    return { set: "Module state", state: word as keyof (typeof STATUS_SETS)["Module state"] };
  return { set: "Run states", state: word as keyof (typeof STATUS_SETS)["Run states"] };
}

function badgeTone(node: PipelineNode) {
  const badge = badgeOf(node);
  return STATUS_SETS[badge.set][badge.state as never] as { tone: string };
}

function boxClasses(node: PipelineNode) {
  if (node.state === "blocked") return "border-dashed border-warning-mark";
  if (node.state === "running") return "border-action bg-surface-selected";
  if (node.state === "failed")
    return badgeTone(node).tone === "error" ? "border-error-mark" : "border-warning-mark";
  return "border-border-hairline";
}

/** The edge into a node and the edge out of it; a blocked or stopped module passes nothing on. */
function Stubs({ node, first, last }: { node: PipelineNode; first: boolean; last: boolean }) {
  const stops = node.state === "blocked" || node.state === "failed";
  return (
    <>
      {!first && (
        <span
          aria-hidden="true"
          {...(node.state === "running" ? { "data-edge": "running" } : {})}
          className={cx(
            STUB,
            "-left-3",
            node.state === "blocked"
              ? "border-t border-dashed border-warning-mark"
              : "bg-connector",
            node.state === "running" && "pipeline-flow",
          )}
        />
      )}
      {!last && !stops && (
        <span
          aria-hidden="true"
          data-edge="delivered"
          className={cx(
            STUB,
            "-right-3 bg-connector",
            node.state === "delivered" && "pipeline-flow",
          )}
        />
      )}
    </>
  );
}

function NodeBody({ node }: { node: PipelineNode }) {
  const badge = badgeOf(node);
  return (
    <>
      <span className="grid min-w-0">
        <span className="truncate">{node.name}</span>
        {node.detail !== undefined && (
          <span className="text-caption font-normal text-pretty text-text-tertiary">
            {node.detail}
          </span>
        )}
      </span>
      {node.state === "delivered" ? (
        <span className="flex flex-none items-center">
          <span aria-hidden="true" className="size-[7px] rounded-ds-full bg-action" />
          <span className="sr-only">{node.word ?? DEFAULT_WORD.delivered}</span>
        </span>
      ) : (
        <StatusBadge
          set={badge.set}
          state={badge.state as never}
          live={node.state === "running"}
          className="flex-none"
        />
      )}
    </>
  );
}

const BOX =
  "flex min-h-11 min-w-0 items-center justify-between gap-2 rounded-ds-sm border bg-surface-card px-3 py-1 text-small font-medium text-text-primary";

function NodeItem({ node, first, last }: { node: PipelineNode; first: boolean; last: boolean }) {
  const classes = cx(BOX, boxClasses(node));
  return (
    <li className="relative">
      <Stubs node={node} first={first} last={last} />
      {node.href === undefined ? (
        <div data-node={node.state} className={classes}>
          <NodeBody node={node} />
        </div>
      ) : (
        <a
          data-node={node.state}
          href={node.href}
          className={cx(
            classes,
            "outline-focus-ring transition-colors duration-100 hover:border-border-control focus-visible:outline-2 focus-visible:outline-offset-2",
          )}
        >
          <NodeBody node={node} />
        </a>
      )}
    </li>
  );
}

function Stage({ stage, first, last }: { stage: PipelineStage; first: boolean; last: boolean }) {
  return (
    <li className="grid min-w-0 grid-rows-[auto_1fr] gap-3">
      <h3 className="flex items-baseline gap-2 truncate text-caption text-text-tertiary">
        {stage.name}
        <span className="font-mono tabular-nums">{stage.nodes.length}</span>
      </h3>
      <div className="flex min-w-0 items-center">
        <ul className="relative grid min-w-0 flex-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {!first && <span aria-hidden="true" className={cx(BUS, "-left-3")} />}
          {!last && <span aria-hidden="true" className={cx(BUS, "-right-3")} />}
          {stage.nodes.map((node) => (
            <NodeItem key={node.id} node={node} first={first} last={last} />
          ))}
        </ul>
      </div>
    </li>
  );
}

/**
 * The staged node graph of a run: stages as columns from `lg`, one vertical line below it. The
 * same drawing serves the finished run on the Overview and the live run on Run progress.
 */
export function Pipeline({ label, stages }: { label: string; stages: readonly PipelineStage[] }) {
  return (
    <ol
      aria-label={label}
      className="grid gap-4 border-l border-connector pl-4 lg:auto-cols-fr lg:grid-flow-col lg:gap-6 lg:border-l-0 lg:pl-0"
    >
      {stages.map((stage, index) => (
        <Stage
          key={stage.name}
          stage={stage}
          first={index === 0}
          last={index === stages.length - 1}
        />
      ))}
    </ol>
  );
}
