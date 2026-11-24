import { StatusShape, type Shape } from "@/components/status/shapes";
import type { Cell, CellState } from "../coverageData";
import { STATE_WORDS } from "./shared";

type Look = { shape: Shape; tone: string };

const LOOK: Record<CellState, Look> = {
  assessed: { shape: "filled circle", tone: "text-success-mark" },
  "not-assessable": { shape: "slashed circle", tone: "text-text-secondary" },
  unreadable: { shape: "diamond", tone: "text-error-mark" },
  "no-handoff": { shape: "ring", tone: "text-text-secondary" },
  "not-in-pathway": { shape: "hollow square", tone: "text-text-tertiary" },
  "plan-unknown": { shape: "ring", tone: "text-text-tertiary" },
};

const WITH_GAPS: Look = { shape: "dashed ring", tone: "text-text-secondary" };

/** A cell's state as a shape and its word: never colour alone. */
export function cellState(cell: Cell | undefined): { word: string; look: Look } {
  const state = cell?.state ?? "plan-unknown";
  if (state === "assessed" && (cell?.gaps || cell?.issue))
    return { word: "Delivered with gaps", look: WITH_GAPS };
  return { word: STATE_WORDS[state], look: LOOK[state] };
}

export function StateMark({ cell }: { cell: Cell | undefined }) {
  const { word, look } = cellState(cell);
  return (
    <span className="flex items-start gap-1.5 text-caption text-text-primary">
      <span className={`mt-0.5 ${look.tone}`}>
        <StatusShape shape={look.shape} />
      </span>
      <span>{word}</span>
    </span>
  );
}
