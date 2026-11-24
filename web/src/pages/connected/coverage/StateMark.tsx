import { StatusShape, type Shape } from "@/components/status/shapes";
import { cx } from "@/utils/cx";
import type { Cell, CellState } from "../coverageData";
import { STATE_WORDS } from "./shared";

type Look = { shape: Shape; tone: string };

const LOOK: Record<CellState, Look> = {
  assessed: { shape: "filled circle", tone: "text-success-mark" },
  "not-assessable": { shape: "slashed circle", tone: "text-warning-mark" },
  unreadable: { shape: "diamond", tone: "text-error-mark" },
  "no-handoff": { shape: "ring", tone: "text-text-secondary" },
  "not-in-pathway": { shape: "hollow square", tone: "text-text-tertiary" },
  "plan-unknown": { shape: "ring", tone: "text-text-tertiary" },
};

const WITH_GAPS: Look = { shape: "dashed ring", tone: "text-text-secondary" };

function cellState(cell: Cell | undefined): { word: string; look: Look; state: CellState } {
  const state = cell?.state ?? "plan-unknown";
  if (state === "assessed" && (cell?.gaps || cell?.issue))
    return { word: "Delivered with gaps", look: WITH_GAPS, state };
  return { word: STATE_WORDS[state], look: LOOK[state], state };
}

/** Whether the module's own page can be opened: the run holds a handoff for it. */
export function hasHandoff(cell: Cell | undefined): boolean {
  const state = cell?.state;
  return state === "assessed" || state === "not-assessable" || state === "unreadable";
}

/**
 * A cell's state as a shape above its word: never colour alone. A module that could not run is
 * the blocked treatment: dashed orange outline, slash and the word; its reason is on the module's
 * page, which the cell opens.
 */
export function StateMark({ cell }: { cell: Cell | undefined }) {
  const { word, look, state } = cellState(cell);
  const blocked = state === "not-assessable";
  return (
    <span
      className={cx(
        "inline-flex w-fit max-w-full flex-col items-start gap-1 text-caption text-text-primary",
        blocked &&
          "rounded-ds-xs border border-dashed border-warning-mark bg-warning-fill px-1.5 py-1 text-warning-text",
      )}
    >
      <span className={look.tone}>
        <StatusShape shape={look.shape} />
      </span>
      <span>{word}</span>
    </span>
  );
}
