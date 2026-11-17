import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import type { RecordBlock } from "../slice";
import { RunContext } from "./RunContext";
import { StatementBlock } from "./StatementBlock";

type Statement = Extract<RecordBlock, { kind: "statement" }>;

function statement(trace: string | null, extraRow = false): Statement {
  return {
    kind: "statement",
    title: "Debt and leverage by year",
    nav: null,
    stub: "Line item",
    basis: null,
    periods: ["FY2023", "FY2024"],
    rows: [
      {
        label: "Net debt",
        cells: [{ kind: "value", at: null, text: "9.1" }, null],
        emphasis: false,
      },
      ...(extraRow
        ? [
            {
              label: "Cash",
              cells: [{ kind: "value" as const, at: null, text: "1.2" }, null],
              emphasis: false,
            },
          ]
        : []),
    ],
    trace,
  };
}

it("draws the missing-trace marker beside the title of a statement table with no trace, and opens nothing", () => {
  const open = vi.fn();
  render(
    <RunContext.Provider value={{ traces: {}, open }}>
      <StatementBlock block={statement(null)} />
    </RunContext.Provider>,
  );
  const marker = screen.getByRole("button", {
    name: "Show sources for this table: no source recorded",
  });
  expect(marker).toHaveAttribute("aria-disabled", "true");
  fireEvent.click(marker);
  expect(open).not.toHaveBeenCalled();
});

it("draws a control, not a marker, for a statement table that carries a trace", () => {
  const open = vi.fn();
  render(
    <RunContext.Provider value={{ traces: { held: { title: "t" } as never }, open }}>
      <StatementBlock block={statement("held")} />
    </RunContext.Provider>,
  );
  const control = screen.getByRole("button", { name: "Show sources for this table" });
  expect(control).not.toHaveAttribute("aria-disabled");
  fireEvent.click(control);
  expect(open).toHaveBeenCalledWith("held");
  expect(screen.getAllByRole("button")).toHaveLength(1);
});

const rowTraces = ["net-debt", null];
const rowTrace = (index: number) => rowTraces[index] ?? null;

it("with traceForRow, draws no table-level control and no marker; each row keeps its own control", () => {
  const open = vi.fn();
  render(
    <RunContext.Provider value={{ traces: { "net-debt": { title: "t" } as never }, open }}>
      <StatementBlock block={statement(null, true)} traceForRow={rowTrace} />
    </RunContext.Provider>,
  );
  const buttons = screen.getAllByRole("button");
  expect(buttons.map((b) => b.getAttribute("aria-label"))).toEqual([
    "Show sources for Net debt",
    "Show sources for Cash: no source recorded",
  ]);
  expect(screen.queryByRole("button", { name: /for this table/ })).toBeNull();
  const rows = within(screen.getByRole("table")).getAllByRole("row");
  expect(within(rows[1] as HTMLElement).getAllByRole("button")).toHaveLength(1);
  expect(within(rows[2] as HTMLElement).getAllByRole("button")).toHaveLength(1);
  fireEvent.click(buttons[0] as HTMLElement);
  expect(open).toHaveBeenCalledWith("net-debt");
});

it("with traceForRow, draws no table-level control even when the block carries a trace", () => {
  render(
    <RunContext.Provider
      value={{
        traces: { "net-debt": { title: "t" } as never, held: { title: "t" } as never },
        open: vi.fn(),
      }}
    >
      <StatementBlock block={statement("held")} traceForRow={rowTrace} />
    </RunContext.Provider>,
  );
  expect(screen.getAllByRole("button").map((b) => b.getAttribute("aria-label"))).toEqual([
    "Show sources for Net debt",
  ]);
});

it("without traceForRow, the static Capital structure table shows the table-level marker and no row control", () => {
  render(
    <RunContext.Provider value={{ traces: {}, open: vi.fn() }}>
      <StatementBlock block={statement(null, true)} />
    </RunContext.Provider>,
  );
  expect(screen.getAllByRole("button").map((b) => b.getAttribute("aria-label"))).toEqual([
    "Show sources for this table: no source recorded",
  ]);
});
