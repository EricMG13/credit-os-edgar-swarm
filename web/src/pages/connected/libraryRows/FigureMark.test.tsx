import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { FigureMark } from "./FigureMark";

afterEach(cleanup);

const lev = {
  value: "2.25",
  unit: "x",
  period: "FY2024",
  prior: { value: "3.00", period: "FY2023" },
  change: "-0.75",
};

it("draws the value in mono with its period, the change with its direction word and a from-zero mark", () => {
  const { container } = render(
    <FigureMark name="Net leverage" metricKey="net_leverage" figure={lev} />,
  );
  expect(screen.getAllByText("2.25x")[0]).toHaveClass("font-mono", "tabular-nums");
  expect(screen.getByText("FY2024")).toBeVisible();
  expect(screen.getByText(/-0\.75x/)).toBeVisible();
  expect(screen.getByText("better")).toBeVisible();
  expect(screen.getByText("vs FY2023")).toBeVisible();
  const mark = screen.getByRole("img");
  expect(mark).toHaveAccessibleName(/3\.00x.*2\.25x/);
  expect(container.querySelectorAll("rect").length).toBeGreaterThan(1);
});

it("draws the mark from zero: a larger pair is longer than a smaller pair", () => {
  const widths = (current: string, prior: string) => {
    const { container, unmount } = render(
      <FigureMark
        name="Net leverage"
        metricKey="net_leverage"
        figure={{
          value: current,
          unit: "x",
          prior: { value: prior, period: "FY2023" },
          change: "1",
        }}
      />,
    );
    const rect = container.querySelector("rect");
    const width = Number(rect?.getAttribute("width"));
    unmount();
    return width;
  };
  expect(widths("9", "8")).toBeGreaterThan(widths("2", "1") - 1);
  expect(widths("9", "8")).toBeGreaterThan(0);
});

it("states a missing prior period and draws no mark", () => {
  render(
    <FigureMark
      name="Interest cover"
      metricKey="coverage"
      figure={{ value: "4.19", unit: "x", period: "FY2025" }}
    />,
  );
  expect(screen.getByText("4.19x")).toBeVisible();
  expect(screen.getByText("No prior period stated")).toBeVisible();
  expect(screen.queryByRole("img")).toBeNull();
});

it("draws no mark and no zero for an empty or non-positive prior", () => {
  render(
    <FigureMark
      name="Net leverage"
      metricKey="net_leverage"
      figure={{ value: "2", unit: "x", prior: { value: "", period: "FY2023" }, change: "2" }}
    />,
  );
  expect(screen.queryByRole("img")).toBeNull();
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

it("says a figure the catalogue does not quote is not shown here, never zero or 'not supplied'", () => {
  render(<FigureMark name="Interest cover" metricKey="coverage" figure={undefined} />);
  expect(screen.getByText("n.a.")).toBeInTheDocument();
  expect(screen.getByText("Not shown here")).toBeVisible();
  expect(screen.queryByText("0")).toBeNull();
  expect(screen.queryByText("Not supplied")).toBeNull();
});

it("qualifies interest cover read as reported EBITDA over cash interest on debt", () => {
  render(
    <FigureMark
      name="Interest cover"
      metricKey="coverage"
      figure={{
        value: "4.19",
        unit: "x",
        basis: "LTM reported EBITDA over LTM cash interest for debt 776; calculation C34",
      }}
    />,
  );
  expect(screen.getByText("Reported EBITDA / cash interest on debt")).toBeInTheDocument();
});

it("places the figure's single trace control beside it", () => {
  render(
    <FigureMark
      name="Net leverage"
      metricKey="net_leverage"
      figure={lev}
      trace={<button>trace</button>}
    />,
  );
  expect(screen.getByRole("button", { name: "trace" })).toBeVisible();
});
