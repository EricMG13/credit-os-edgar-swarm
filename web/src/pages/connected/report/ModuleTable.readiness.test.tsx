import { fireEvent, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { vi } from "vitest";
import type { Table } from "../publishedReport";
import { RunContext } from "@/pages/library/parts/RunContext";
import { typedModuleTable } from "./ModuleTable";

function readinessTable(headers: string[], rows: string[][]): Table {
  return {
    type: "table",
    line: 10,
    headers,
    rows: rows.map((cells, index) => ({ line: 11 + index, cells })),
  };
}

const HEADERS = ["Area", "Readiness", "Key limitation"];
const open = vi.fn();

function draw(node: ReactNode) {
  return render(
    <RunContext.Provider
      value={{
        traces: {
          "trace-11": {} as never,
          "trace-12": {} as never,
          "trace-13": {} as never,
          "trace-14": {} as never,
          trace: {} as never,
        },
        open,
      }}
    >
      {node}
    </RunContext.Provider>,
  );
}

it("draws every recognized readiness group with its per-row trace", () => {
  const result = typedModuleTable(
    "CP-0",
    "Source-readiness summary",
    readinessTable(HEADERS, [
      ["Liquidity", "Ready", "No material source gap"],
      ["Forecast", "Ready with limitations", "Revenue detail is incomplete"],
      ["Covenants", "Conditional", "Testing dates are not supplied"],
      ["Security", "Not ready", "Priority was not established"],
    ]),
    (line) => `trace-${String(line)}`,
  );
  if (!result) throw new Error("readiness table was not recognized");
  draw(result);

  expect(screen.getByRole("heading", { name: "Readiness by area" })).toBeInTheDocument();
  for (const label of ["Ready", "Ready with limitations", "Conditional", "Not ready"])
    expect(screen.getByText(label, { selector: "span" })).toBeInTheDocument();
  expect(screen.getByText("Liquidity")).toBeInTheDocument();
  expect(screen.getByText("Revenue detail is incomplete")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Show sources for Forecast" }));
  expect(open).toHaveBeenCalledWith("trace-12");
});

it("keeps source references in Evidence and refuses unknown or malformed readiness data", () => {
  const referenced = typedModuleTable(
    "CP-0",
    "Source-readiness summary",
    readinessTable(HEADERS, [["Company profile.pdf p. 4", "Ready", "See register T2.1"]]),
    (line) => `trace-${String(line)}`,
  );
  if (!referenced) throw new Error("valid readiness table was not recognized");
  const { rerender } = draw(referenced);
  expect(screen.getByText("In Evidence")).toBeInTheDocument();
  expect(screen.queryByText("Company profile.pdf p. 4")).toBeNull();

  rerender(
    typedModuleTable(
      "CP-0",
      "Source-readiness summary",
      readinessTable(HEADERS, [["Liquidity", "Unknown", "No basis"]]),
      () => "trace",
    ),
  );
  expect(screen.queryByRole("heading", { name: "Readiness by area" })).toBeNull();

  rerender(
    typedModuleTable(
      "CP-0",
      "Source-readiness summary",
      readinessTable(["Area", "Status", "Key limitation"], [["Liquidity", "Ready", "None"]]),
      () => "trace",
    ),
  );
  expect(screen.queryByRole("heading", { name: "Readiness by area" })).toBeNull();
});
