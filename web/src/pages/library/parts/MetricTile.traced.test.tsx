import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import type { Metric } from "../slice";
import { LibraryMetricTile as MetricTile } from "./MetricTile";
import { RunContext } from "./RunContext";

const metric: Metric = {
  label: "Source files",
  value: { kind: "value", at: null, text: "97" },
  note: "read in full",
  trace: null,
};

function tile(traced?: boolean) {
  render(
    <RunContext.Provider value={{ traces: {}, open: () => undefined }}>
      <ul>
        <MetricTile metric={metric} traced={traced} />
      </ul>
    </RunContext.Provider>,
  );
}

it("draws the missing-trace marker on a tile with no trace by default", () => {
  tile();
  expect(
    screen.getByRole("button", { name: "Show sources for this figure: no source recorded" }),
  ).toBeInTheDocument();
});

it("draws no trace control and no marker when traced is false, as on the Evidence page", () => {
  tile(false);
  expect(screen.queryByRole("button")).toBeNull();
  expect(screen.getByText("97")).toBeInTheDocument();
});
