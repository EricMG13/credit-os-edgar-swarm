import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import type { RecordBlock } from "../slice";
import { RunContext } from "./RunContext";
import { StatementBlock } from "./StatementBlock";

type Statement = Extract<RecordBlock, { kind: "statement" }>;

function statement(trace: string | null): Statement {
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
