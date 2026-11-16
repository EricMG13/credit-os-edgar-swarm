import { FileSearch02 } from "@untitledui/icons";
import { useContext } from "react";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { cx } from "@/utils/cx";
import { RunContext } from "./RunContext";

/** Put on the element that holds a control, so hovering the figure reveals it. */
export const TRACE_HOST = "group/trace relative";

/**
 * The one trace control per paragraph, row or figure. Visible at rest at every width; its box border
 * shows on hover of its host, on keyboard focus, and for every control while the frame's Show sources is on.
 * `null` is a figure with no trace: it draws nothing.
 */
export function TraceControl({
  trace,
  label,
  onDark = false,
}: {
  trace: string | null;
  /** The accessible name, the mock's own for the item: "Show sources for this figure", "…the bottom line". */
  label: string;
  /** Set on the navy bottom-line band: a transparent control with a white outline. */
  onDark?: boolean;
}) {
  const run = useContext(RunContext);
  if (run === null) throw new Error("TraceControl was drawn outside a RunFrame");
  if (trace === null) return null;
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
          "relative flex size-7 flex-none cursor-pointer items-center justify-center rounded-ds-sm border bg-transparent transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 motion-reduce:transition-none max-[480px]:after:absolute max-[480px]:after:-inset-[9px]",
          onDark
            ? "border-transparent text-white/80 hover:border-white/60 hover:bg-white/10 hover:text-white focus-visible:border-white/60 focus-visible:ring-offset-surface-inverse group-hover/trace:border-white/60 in-data-[sources=on]:border-white/60"
            : "border-transparent text-text-tertiary hover:border-border-control hover:bg-action-subtle hover:text-action focus-visible:border-border-control group-hover/trace:border-border-control in-data-[sources=on]:border-border-control",
        )}
      >
        <FileSearch02 aria-hidden="true" className="size-4" />
      </TooltipTrigger>
    </Tooltip>
  );
}
