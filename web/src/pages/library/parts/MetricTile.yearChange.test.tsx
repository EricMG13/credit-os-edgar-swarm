import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { RunContext } from "./RunContext";
import { MetricTile } from "./MetricTile";

it("draws the year comparator and the sr-only word on a tile that has one", () => {
  render(
    <RunContext.Provider value={{ traces: {}, open: () => undefined }}>
      <ul>
        <MetricTile
          metric={{
            label: "Leverage",
            value: { kind: "value", at: null, text: "4.4x" },
            note: "2024-12-31",
            trace: null,
            yearChange: { key: "leverage", change: "0.2", unit: "x", prior: "FY2023" },
          }}
        />
        <MetricTile
          metric={{
            label: "Other",
            value: { kind: "value", at: null, text: "1x" },
            note: "n",
            trace: null,
          }}
        />
      </ul>
    </RunContext.Provider>,
  );
  const change = screen.getByText(/\+0\.2x vs FY2023/);
  expect(change.textContent).toContain("worse");
  expect(change.className).toContain("text-error-text");
  expect(screen.getAllByText(/ vs /)).toHaveLength(1);
});
