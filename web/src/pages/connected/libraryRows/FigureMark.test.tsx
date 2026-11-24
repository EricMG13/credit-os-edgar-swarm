import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { FigureMark } from "./FigureMark";

afterEach(cleanup);

it("draws the value in mono, the change with its direction word and the two-point mark", () => {
  const { container } = render(
    <FigureMark
      name="Net leverage"
      metricKey="net_leverage"
      figure={{
        value: "2.25",
        unit: "x",
        period: "FY2024",
        prior: { value: "3.00", period: "FY2023" },
        change: "-0.75",
      }}
    />,
  );
  expect(screen.getByText("2.25x")).toHaveClass("font-mono", "tabular-nums");
  expect(screen.getByText(/-0\.75x/)).toBeVisible();
  expect(screen.getByText("better")).toBeVisible();
  expect(screen.getByText("vs FY2023")).toBeVisible();
  const mark = container.querySelector("svg");
  expect(mark).toHaveAttribute("aria-hidden", "true");
  expect(mark?.querySelectorAll("circle")).toHaveLength(2);
});

it("states a missing prior period and draws no mark", () => {
  const { container } = render(
    <FigureMark name="Interest cover" metricKey="coverage" figure={{ value: "4.19", unit: "x" }} />,
  );
  expect(screen.getByText("4.19x")).toBeVisible();
  expect(screen.getByText("No prior period stated")).toBeVisible();
  expect(container.querySelector("svg")).toBeNull();
});

it("names worse in words, not by colour alone", () => {
  render(
    <FigureMark
      name="Net leverage"
      metricKey="net_leverage"
      figure={{ value: "4.0", unit: "x", prior: { value: "3.0", period: "FY2023" }, change: "1.0" }}
    />,
  );
  expect(screen.getByText("worse")).toBeVisible();
  expect(screen.getByText(/\+1\.0x/)).toBeVisible();
});

it("draws a direction for a measure the owner's table gives none, without better or worse", () => {
  render(
    <FigureMark
      name="Cash"
      metricKey="cash"
      figure={{
        value: "100",
        unit: "US$m",
        prior: { value: "80", period: "FY2023" },
        change: "20",
      }}
    />,
  );
  expect(screen.queryByText("better")).toBeNull();
  expect(screen.queryByText("worse")).toBeNull();
  expect(screen.getByText(/\+US\$20m/)).toBeVisible();
});

it("draws a missing figure as n.a. with a reason, never zero", () => {
  render(<FigureMark name="Interest cover" metricKey="coverage" figure={undefined} />);
  expect(screen.getByText("n.a.")).toBeInTheDocument();
  expect(screen.getByText("Not supplied")).toBeVisible();
  expect(screen.queryByText("0")).toBeNull();
});
