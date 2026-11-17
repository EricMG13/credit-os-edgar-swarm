import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import type { RecordBlock } from "../slice";
import { MatrixBlock } from "./MatrixBlock";
import { RunContext } from "./RunContext";

type Matrix = Extract<RecordBlock, { kind: "matrix" }>;

const TRACES = {
  "line-31": { title: "t" } as never,
  "line-32": { title: "t" } as never,
  held: { title: "t" } as never,
};

/**
 * The connected app's risk matrix: a `Risk|Probability|Impact` table whose block has no trace of its
 * own (`trace: null`) and whose rows each carry the trace of their handoff line. `rowTraces` replaces
 * the rows' keys, `trace` the block's.
 */
function matrix(trace: string | null, rowTraces: readonly (string | null)[]): Matrix {
  const risks = [
    ["Refinancing wall", "Medium", "High"],
    ["Covenant headroom", "Low", null],
  ] as const;
  return {
    kind: "matrix",
    title: "Risk matrix",
    columns: ["Risk", "Probability", "Impact"],
    note: null,
    trace,
    rows: risks.map(([risk, probability, impact], index) => ({
      risk,
      probability,
      impact,
      trace: rowTraces[index] ?? null,
    })),
  };
}

function draw(block: Matrix, open = vi.fn()) {
  render(
    <RunContext.Provider value={{ traces: TRACES, open }}>
      <MatrixBlock block={block} />
    </RunContext.Provider>,
  );
  const card = screen.getByRole("region", { name: "Table side of the risk matrix" });
  return { open, card, labels: () => within(card).getAllByRole("button").map(labelOf) };
}
const labelOf = (b: HTMLElement) => b.getAttribute("aria-label");

it("with every row carrying its trace and no block trace, draws no table-level control and no marker; each row keeps its own control", () => {
  const { open, card, labels } = draw(matrix(null, ["line-31", "line-32"]));
  expect(labels()).toEqual(["Show sources for this risk", "Show sources for this risk"]);
  expect(within(card).queryByRole("button", { name: /risk matrix/ })).toBeNull();
  expect(within(card).queryByText(/no source recorded/)).toBeNull();
  const rows = within(within(card).getByRole("table")).getAllByRole("row");
  expect(within(rows[1] as HTMLElement).getAllByRole("button")).toHaveLength(1);
  expect(within(rows[2] as HTMLElement).getAllByRole("button")).toHaveLength(1);
  fireEvent.click(within(rows[2] as HTMLElement).getByRole("button"));
  expect(open).toHaveBeenCalledWith("line-32");
});

it("with no row trace and no block trace, draws the table-level control as a marker, and each row's marker", () => {
  const { open, card, labels } = draw(matrix(null, [null, null]));
  expect(labels()).toEqual([
    "Show sources for the risk matrix: no source recorded",
    "Show sources for this risk: no source recorded",
    "Show sources for this risk: no source recorded",
  ]);
  const marker = within(card).getByRole("button", {
    name: "Show sources for the risk matrix: no source recorded",
  });
  expect(marker).toHaveAttribute("aria-disabled", "true");
  fireEvent.click(marker);
  expect(open).not.toHaveBeenCalled();
});

it("with no row trace and a block trace, draws the table-level control, which opens the block's trace", () => {
  const { open, card, labels } = draw(matrix("held", [null, null]));
  expect(labels()[0]).toBe("Show sources for the risk matrix");
  fireEvent.click(within(card).getByRole("button", { name: "Show sources for the risk matrix" }));
  expect(open).toHaveBeenCalledWith("held");
});

it("with a block trace and a trace on every row, still draws the block's control beside the rows' (the static risk matrix)", () => {
  const { labels } = draw(matrix("held", ["line-31", "line-32"]));
  expect(labels()).toEqual([
    "Show sources for the risk matrix",
    "Show sources for this risk",
    "Show sources for this risk",
  ]);
});

it("with a trace on only some rows and no block trace, the table-level marker is drawn", () => {
  const { labels } = draw(matrix(null, ["line-31", null]));
  expect(labels()).toEqual([
    "Show sources for the risk matrix: no source recorded",
    "Show sources for this risk",
    "Show sources for this risk: no source recorded",
  ]);
});
