import { FileSearch02, FileX02 } from "@untitledui/icons";
import { useContext } from "react";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { cx } from "@/utils/cx";
import { RunContext } from "./RunContext";

/** Put on the element that holds a control, so hovering the figure reveals it. */
export const TRACE_HOST = "group/trace relative";

/** What a control and the marker for a missing trace share: one 28 px footprint, so either goes wherever a control goes. */
const FOOTPRINT =
  "relative flex size-7 flex-none items-center justify-center rounded-ds-sm border bg-transparent focus-visible:ring-2 focus-visible:ring-offset-2 max-[480px]:after:absolute max-[480px]:after:-inset-[9px]";

/**
 * The one trace control per paragraph, row or figure. Visible at rest at every width; its box border
 * shows on hover of its host, on keyboard focus, and for every control while the frame's Show sources is on.
 * A `null` or absent trace is a figure whose handoff recorded no source: it draws the missing-trace marker
 * in the control's place, with the same footprint, so every paragraph, row or figure shows either a
 * control or a sign that no source was recorded.
 */
export function TraceControl({
  trace,
  label,
  onDark = false,
}: {
  trace?: string | null;
  /** The accessible name, the mock's own for the item: "Show sources for this figure", "…the bottom line". */
  label: string;
  /** Set on the navy bottom-line band: a transparent control with a white outline. */
  onDark?: boolean;
}) {
  const run = useContext(RunContext);
  if (run === null) throw new Error("TraceControl was drawn outside a RunFrame");
  if (trace === null || trace === undefined) {
    return <MissingTrace label={label} onDark={onDark} />;
  }
  if (!Object.hasOwn(run.traces, trace)) {
    throw new RangeError(`the run holds no trace "${trace}"`);
  }
  return (
    <TraceButton
      label={label}
      onDark={onDark}
      open={() => {
        run.open(trace);
      }}
    />
  );
}

export function TraceButton({
  label,
  open,
  onDark = false,
}: {
  label: string;
  open: () => void;
  onDark?: boolean;
}) {
  return (
    <Tooltip title="Show sources" placement="top right">
      <TooltipTrigger
        aria-label={label}
        onPress={open}
        className={cx(
          FOOTPRINT,
          "cursor-pointer transition-colors duration-150 motion-reduce:transition-none",
          onDark
            ? "border-transparent text-white/80 hover:border-white/60 hover:bg-white/10 hover:text-white focus-visible:border-white/60 focus-visible:ring-focus-inverse focus-visible:ring-offset-surface-inverse group-hover/trace:border-white/60 in-data-[sources=on]:border-white/60"
            : "border-transparent text-text-tertiary hover:border-border-control hover:bg-action-subtle hover:text-action focus-visible:border-border-control focus-visible:ring-focus group-hover/trace:border-border-control in-data-[sources=on]:border-border-control",
        )}
      >
        <FileSearch02 aria-hidden="true" className="size-4" />
      </TooltipTrigger>
    </Tooltip>
  );
}

/**
 * The control's place where no source was recorded: a dashed outline in the gap treatment and a file with a
 * cross, in the control's footprint. It stays in the tab order, so the tooltip "No source recorded" reaches
 * the keyboard, and it is `aria-disabled`: it opens nothing. The outline shows at rest, as the control's icon does.
 */
function MissingTrace({ label, onDark }: { label: string; onDark: boolean }) {
  return (
    <Tooltip title="No source recorded" placement="top right">
      <TooltipTrigger
        aria-label={`${label}: no source recorded`}
        aria-disabled="true"
        className={cx(
          FOOTPRINT,
          "cursor-default border-dashed",
          onDark
            ? "border-white/50 text-white/70 focus-visible:ring-focus-inverse focus-visible:ring-offset-surface-inverse"
            : "border-border-gap text-gap-text focus-visible:ring-focus",
        )}
      >
        <FileX02 aria-hidden="true" className="size-4" />
      </TooltipTrigger>
    </Tooltip>
  );
}
