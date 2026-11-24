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

/** The six states a cell can say, with the shape and the word each is drawn with. */
export const LEGEND: readonly { word: string; look: Look }[] = [
  { word: STATE_WORDS.assessed, look: LOOK.assessed },
  { word: "Delivered with gaps", look: WITH_GAPS },
  { word: STATE_WORDS["not-assessable"], look: LOOK["not-assessable"] },
  { word: STATE_WORDS.unreadable, look: LOOK.unreadable },
  { word: STATE_WORDS["no-handoff"], look: LOOK["no-handoff"] },
  { word: STATE_WORDS["not-in-pathway"], look: LOOK["not-in-pathway"] },
];

function cellState(cell: Cell | undefined): { word: string; look: Look; state: CellState } {
  const state = cell?.state ?? "plan-unknown";
  if (state === "assessed" && (cell?.gaps || cell?.issue))
    return { word: "Delivered with gaps", look: WITH_GAPS, state };
  return { word: STATE_WORDS[state], look: LOOK[state], state };
}

/** The word a cell's state is drawn with. */
export function stateWord(cell: Cell | undefined): string {
  return cellState(cell).word;
}

/** Whether the module's own page can be opened: the run holds a handoff for it. */
export function hasHandoff(cell: Cell | undefined): boolean {
  const state = cell?.state;
  return state === "assessed" || state === "not-assessable" || state === "unreadable";
}

/** A module that could not run is the blocked treatment: dashed orange outline and a slash. */
function Shape({ cell }: { cell: Cell | undefined }) {
  const { look, state } = cellState(cell);
  return (
    <span
      className={cx(
        "inline-flex flex-none items-center justify-center",
        state === "not-assessable" &&
          "size-5 rounded-ds-xs border border-dashed border-warning-mark bg-warning-fill",
      )}
    >
      <span className={look.tone}>
        <StatusShape shape={look.shape} />
      </span>
    </span>
  );
}

/** A cell's state as a shape alone, for a matrix: the word is its accessible name and tooltip. */
export function StateShape({ cell }: { cell: Cell | undefined }) {
  return <Shape cell={cell} />;
}

/** A state as a shape beside its word: never colour alone. */
export function StateMark({ cell }: { cell: Cell | undefined }) {
  const { word, state } = cellState(cell);
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 text-caption text-text-primary",
        state === "not-assessable" && "text-warning-text",
      )}
    >
      <Shape cell={cell} />
      <span>{word}</span>
    </span>
  );
}

/** One legend entry: a state's shape (from the legend table) and its word. */
export function LegendItem({ word, look }: { word: string; look: Look }) {
  return (
    <li className="flex items-center gap-1.5 text-caption text-text-secondary">
      <span className={look.tone}>
        <StatusShape shape={look.shape} />
      </span>
      {word}
    </li>
  );
}
