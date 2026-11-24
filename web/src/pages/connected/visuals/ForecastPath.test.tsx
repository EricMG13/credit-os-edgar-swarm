import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import { forecastMeasure } from "../report/forecastData";
import { LeveragePath, type PathLimits, type PathWall } from "./ForecastPath";

const NET = "Net leverage (net debt / Adj EBITDA)";
const value = (exact: string, display = `${exact}x`) => ({ status: "value", exact, display });
const notCalculated = (reason: string) => ({ status: "unavailable", display: "n.a.", reason });

type Column = { label: string; group: string };
function measureOf(columns: Column[], cells: unknown[]) {
  return forecastMeasure(
    {
      cashflow: {
        columns,
        rows: [{ label: NET, band: "Leverage", kind: "multiple", total: false, cells }],
      },
    },
    /^Net leverage\b/,
  );
}
const cols = (group: string, labels: string[]) => labels.map((label) => ({ label, group }));

const noLimits: PathLimits = { limits: [], reason: "Legal & covenants states no leverage limit." };
const noWall: PathWall = { years: [], reason: "Financial foundation did not run in this run." };

function draw(
  measure: ReturnType<typeof measureOf>,
  options: { group?: string; limits?: PathLimits; wall?: PathWall } = {},
) {
  return render(
    <LeveragePath
      measure={measure}
      group={options.group ?? "Base case"}
      caseName="Base case"
      basis="Base case · Adj EBITDA (EBITDA As Defined) · USD millions"
      limits={options.limits ?? noLimits}
      wall={options.wall ?? noWall}
    />,
  );
}

it("joins a case only between consecutive published years and hatches the year it does not publish", () => {
  const { container } = draw(
    measureOf(
      [
        ...cols("Base case", ["FY2025E", "FY2027E"]),
        ...cols("Downside case", ["FY2025E", "FY2026E", "FY2027E"]),
      ],
      [value("5.5"), value("3.05"), value("6"), value("6.5"), value("7")],
    ),
  );
  const base = container.querySelectorAll('[data-segment="Base case"]');
  // FY2025E and FY2027E are not consecutive: no segment joins them across FY2026E.
  expect(base).toHaveLength(0);
  expect(container.querySelectorAll('[data-segment="Downside case"]')).toHaveLength(2);
  const gap = container.querySelector('[data-gap="FY2026E"]');
  expect(gap).not.toBeNull();
  expect(within(screen.getByRole("figure")).getByText("Not published")).toBeInTheDocument();
});

it("tells a figure the model did not calculate apart from a period it does not publish", () => {
  const { container } = draw(
    measureOf(cols("Base case", ["FY2025E", "FY2026E"]), [
      value("5.5"),
      notCalculated("EBITDA is not positive"),
    ]),
  );
  expect(container.querySelector('[data-gap="FY2026E"]')).not.toBeNull();
  expect(screen.getByText("Not calculated")).toBeInTheDocument();
  expect(screen.getByText(/FY2026E: EBITDA is not positive/)).toBeInTheDocument();
  expect(screen.queryByText("0.00x")).toBeNull();
});

it("labels the selected case's peak and end with the cells as published", () => {
  draw(
    measureOf(cols("Base case", ["FY2025E", "FY2026E", "FY2027E"]), [
      value("5.5", "5.50x"),
      value("5.65", "5.65x"),
      value("3.05", "3.05x"),
    ]),
  );
  const figure = within(screen.getByRole("figure"));
  expect(figure.getByText("5.65x peak")).toBeInTheDocument();
  expect(figure.getByText("3.05x")).toBeInTheDocument();
});

it("draws each published leverage limit dashed, and names the reason when there is none", () => {
  const measure = measureOf(cols("Base case", ["FY2025E"]), [value("4.2")]);
  const { container, unmount } = draw(measure, {
    limits: {
      limits: [{ label: "Net leverage", value: 5, text: "5.0", direction: "Passes at or below" }],
      reason: null,
    },
  });
  expect(container.querySelector('[data-limit="Net leverage"]')).not.toBeNull();
  expect(screen.getByText("5.0x Net leverage")).toBeInTheDocument();
  unmount();
  draw(measure);
  expect(screen.getByText("Legal & covenants states no leverage limit.")).toBeInTheDocument();
});

it("marks the maturity wall on the fiscal-year axis and lists maturities beyond it", () => {
  const cell = (text: string, amount: number | null, reason: string | null = null) => ({
    text,
    value: amount,
    reason,
  });
  const { container } = draw(
    measureOf(cols("Base case", ["FY2025E", "FY2026E"]), [value("2"), value("1.5")]),
    {
      wall: {
        years: [
          { year: 2026, label: "FY2026", cell: cell("500", 500) },
          {
            year: 2027,
            label: "FY2027",
            cell: cell("Not supplied: the schedule stops here", null, "the schedule stops here"),
          },
          { year: 2028, label: "FY2028", cell: cell("1,250", 1250) },
          { year: 2034, label: "FY2034", cell: cell("900", 900) },
        ],
        wall: { year: 2028, label: "FY2028", cell: cell("1,250", 1250) },
        unit: "US$m",
        offAxis: [],
        reason: null,
      },
    },
  );
  const figure = within(screen.getByRole("figure"));
  expect(figure.getByText("FY2028 maturity wall")).toBeInTheDocument();
  expect(figure.getByText("1,250")).toBeInTheDocument();
  expect(figure.getByText("500")).toBeInTheDocument();
  expect(container.querySelector('[data-wall="FY2028"]')).not.toBeNull();
  expect(screen.getByText(/FY2027: the schedule stops here/)).toBeInTheDocument();
  expect(screen.getByText(/Beyond this axis: FY2034 900/)).toBeInTheDocument();
});

it("draws only the selected case and says so when the cases share no period", () => {
  const { container } = draw(
    measureOf(
      [...cols("Base case", ["FY2025E", "FY2026E"]), ...cols("Downside case", ["FY2028E"])],
      [value("1"), value("2"), value("3")],
    ),
  );
  expect(container.querySelectorAll('[data-segment="Base case"]')).toHaveLength(1);
  expect(container.querySelector('[data-segment="Downside case"]')).toBeNull();
  expect(
    screen.getByText("The cases publish no period in common, so no scenario comparison is drawn."),
  ).toBeInTheDocument();
});

it("switches to a table of every drawn case, with a period a case does not publish named", () => {
  draw(
    measureOf(
      [...cols("Base case", ["FY2025E", "FY2026E"]), ...cols("Downside case", ["FY2025E"])],
      [value("1.23"), value("0.75"), value("1.8")],
    ),
  );
  fireEvent.click(screen.getByRole("button", { name: "Table" }));
  const table = within(screen.getByRole("table", { name: /Net leverage by case/ }));
  expect(table.getByRole("columnheader", { name: "Downside case" })).toBeInTheDocument();
  expect(table.getByRole("cell", { name: "0.75x" })).toBeInTheDocument();
  expect(table.getByRole("cell", { name: "Not published" })).toBeInTheDocument();
});

it("draws the gap state in place when the model publishes no net leverage", () => {
  draw(null);
  expect(screen.getByRole("region", { name: "Net leverage path" })).toBeInTheDocument();
  expect(screen.getByText("The model publishes no net leverage figure.")).toBeInTheDocument();
});

it("draws no other case's line under a selected case the model has no leverage row for", () => {
  const { container } = draw(measureOf(cols("Base case", ["FY2025E"]), [value("1.5")]), {
    group: "Downside (CP-2G drivers)",
  });
  expect(container.querySelector("[data-segment]")).toBeNull();
  expect(screen.queryByText("1.5x")).toBeNull();
  expect(screen.getByText("No net leverage figure for Base case.")).toBeInTheDocument();
});

it("keeps the wall out of the legend and the reading when it lies beyond the axis", () => {
  const far = { year: 2035, label: "FY2035", cell: { text: "900", value: 900, reason: null } };
  draw(measureOf(cols("Base case", ["FY2025E"]), [value("2")]), {
    wall: { years: [far], wall: far, unit: "US$m", offAxis: [], reason: null },
  });
  expect(screen.queryByText("Maturity wall, Financial foundation")).toBeNull();
  expect(screen.getByRole("img").getAttribute("aria-label")).not.toMatch(/maturity wall/);
  expect(screen.getByText("Beyond this axis: FY2035 900.")).toBeInTheDocument();
});

it("says the row has no dated forecast year rather than that it is absent", () => {
  draw(measureOf(cols("Base case", ["FY26E"]), [value("2")]));
  expect(
    screen.getByText("The model's net leverage row has no dated forecast year."),
  ).toBeInTheDocument();
});
