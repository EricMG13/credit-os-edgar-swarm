import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import { forecastMeasure } from "../report/forecastData";
import { LeveragePath, type PathSchedule } from "./ForecastPath";

const NET = "Net leverage (net debt / Adj EBITDA)";
const value = (exact: string, display = `${exact}x`) => ({ status: "value", exact, display });
const notCalculated = (reason: string) => ({ status: "unavailable", display: "n.a.", reason });

type Column = { label: string; group: string; start?: string; end?: string };
function measureOf(columns: Column[], cells: unknown[], extra: Record<string, unknown[]> = {}) {
  return forecastMeasure(
    {
      cashflow: {
        columns,
        rows: [
          { label: NET, band: "Leverage", kind: "multiple", total: false, cells },
          ...Object.entries(extra).map(([label, row]) => ({
            label,
            band: "Leverage",
            kind: "multiple",
            total: false,
            cells: row,
          })),
        ],
      },
    },
    /^Net leverage\b/,
    /net debt \/ Adj EBITDA/,
  );
}
const cols = (group: string, labels: string[]) => labels.map((label) => ({ label, group }));
const noSchedule: PathSchedule = { years: [], offAxis: [] };

function draw(
  measure: ReturnType<typeof measureOf>,
  options: { group?: string; caseName?: string; schedule?: PathSchedule; rows?: string[] } = {},
) {
  return render(
    <LeveragePath
      measure={measure}
      rows={options.rows}
      group={options.group ?? "Base case"}
      caseName={options.caseName ?? "Base case"}
      schedule={options.schedule ?? noSchedule}
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
  // FY2025E and FY2027E are not consecutive: no segment joins them across FY2026E.
  expect(container.querySelectorAll('[data-segment="Base case"]')).toHaveLength(0);
  expect(container.querySelectorAll('[data-segment="Downside case"]')).toHaveLength(2);
  expect(container.querySelector('[data-gap="FY2026E"]')).not.toBeNull();
  expect(within(screen.getByRole("figure")).getByText("Not published")).toBeInTheDocument();
  expect(screen.getByText("Base case: FY2026E not published.")).toBeInTheDocument();
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
  expect(screen.getByText("Base case, FY2026E: EBITDA is not positive.")).toBeInTheDocument();
  expect(screen.queryByText(/0\.00x/)).toBeNull();
});

it("labels the selected case's highest year by value and year, never as a peak", () => {
  draw(
    measureOf(cols("Base case", ["FY2025E", "FY2026E", "FY2027E"]), [
      value("5.5", "5.50x"),
      value("5.65", "5.65x"),
      value("3.05", "3.05x"),
    ]),
  );
  const figure = within(screen.getByRole("figure"));
  expect(figure.getByText("5.65x · FY2026E")).toBeInTheDocument();
  expect(figure.getByText(/^3\.05x/)).toBeInTheDocument();
  expect(figure.queryByText(/peak/i)).toBeNull();
});

it("labels every drawn case's end point and marks another case's missing year", () => {
  const { container } = draw(
    measureOf(
      [
        ...cols("Base case", ["FY2025E", "FY2026E", "FY2027E"]),
        ...cols("Downside case", ["FY2025E", "FY2026E", "FY2027E"]),
        ...cols("Upside", ["FY2025E", "FY2026E", "FY2027E"]),
      ],
      [
        value("2"),
        value("1.5"),
        value("1"),
        value("3"),
        notCalculated("EBITDA is not positive"),
        value("2.8"),
        value("1.9"),
        value("1.2"),
        value("0.4"),
      ],
    ),
  );
  const labels = [...container.querySelectorAll("[data-label]")].map((label) => label.textContent);
  expect(labels).toEqual(expect.arrayContaining(["1x", "2.8x", "0.4x"]));
  expect(container.querySelector('[data-case-gap="Downside case FY2026E"]')).not.toBeNull();
  expect(screen.getByText("Downside case, FY2026E: EBITDA is not positive.")).toBeInTheDocument();
  // The two cases that are not selected are told apart by dash, not by colour alone.
  const dash = (group: string) =>
    container.querySelector(`[data-segment="${group}"]`)?.getAttribute("stroke-dasharray");
  expect(dash("Base case")).toBeNull();
  expect(dash("Upside")).not.toBeNull();
  expect(dash("Downside case")).not.toBeNull();
  expect(dash("Upside")).not.toBe(dash("Downside case"));
});

it("draws no covenant level on the model's path", () => {
  const { container } = draw(measureOf(cols("Base case", ["FY2025E"]), [value("4.2")]));
  expect(container.querySelector("[data-limit]")).toBeNull();
  expect(screen.queryByText(/limit/i)).toBeNull();
});

it("draws the published maturity schedule as written on the axis, naming no single wall", () => {
  const cell = (text: string, amount: number | null, reason: string | null = null) => ({
    text,
    value: amount,
    reason,
  });
  const { container } = draw(
    measureOf(cols("Base case", ["FY2025E", "FY2026E"]), [value("2"), value("1.5")]),
    {
      schedule: {
        years: [
          { year: 2026, label: "FY2026", key: "FY2026", cell: cell("500", 500) },
          {
            year: 2027,
            label: "FY2027",
            key: "FY2027",
            cell: cell("Not supplied: the schedule stops here", null, "the schedule stops here"),
          },
          { year: 2028, label: "FY2028", key: "FY2028", cell: cell("1,250", 1250) },
          { year: 2034, label: "FY2034", key: "FY2034", cell: cell("900", 900) },
        ],
        offAxis: [{ year: 0, label: "Thereafter", key: "Thereafter", cell: cell("4,768", 4768) }],
        unit: "US$m",
      },
    },
  );
  const figure = within(screen.getByRole("figure"));
  expect(figure.getByText("1,250")).toBeInTheDocument();
  expect(figure.getByText("500")).toBeInTheDocument();
  expect(figure.queryByText(/maturity wall/i)).toBeNull();
  expect(container.querySelector('[data-lane-gap="FY2027"]')).not.toBeNull();
  expect(figure.getByText("Not supplied")).toBeInTheDocument();
  expect(
    screen.getByText("Debt maturing, FY2027: Not supplied: the schedule stops here."),
  ).toBeInTheDocument();
  expect(screen.getByText("Debt maturing beyond this axis: FY2034 900.")).toBeInTheDocument();
  expect(
    screen.getByText("Debt maturing, not by fiscal year: Thereafter 4,768."),
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Table" }));
  const table = within(screen.getByRole("table", { name: /Net leverage by case/ }));
  expect(table.getByRole("columnheader", { name: "Debt maturing, US$m" })).toBeInTheDocument();
  expect(table.getByRole("cell", { name: "1,250" })).toBeInTheDocument();
});

it("draws only the selected case's own periods when the cases share none, and says so", () => {
  const { container } = draw(
    measureOf(
      [...cols("Base case", ["FY2025E"]), ...cols("Downside case", ["FY2026E"])],
      [value("1"), value("2")],
    ),
  );
  expect(container.querySelector('[data-segment="Downside case"]')).toBeNull();
  expect(container.querySelector("[data-gap]")).toBeNull();
  expect(screen.queryByText(/Not published/)).toBeNull();
  expect(screen.queryByText(/No figure for/)).toBeNull();
  const tile = within(screen.getByRole("region", { name: "Net leverage path" }));
  expect(tile.getByRole("heading", { name: "Net leverage, Base case" })).toBeInTheDocument();
  expect(tile.getByText("FY2025E to FY2025E")).toBeInTheDocument();
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

it("says what is true when the model publishes two net leverage rows", () => {
  draw(
    measureOf(cols("Base case", ["FY2025E"]), [value("1.2")], {
      "Net leverage (covenant basis)": [value("3.4")],
    }),
  );
  expect(
    screen.getByText(
      `The model also publishes Net leverage (covenant basis); this chart reads ${NET}.`,
    ),
  ).toBeInTheDocument();
  expect(screen.queryByText("3.4x")).toBeNull();
});

it("draws the gap in place: no row, two unmatched rows, a case without the row", () => {
  const { unmount } = draw(null);
  expect(screen.getByText("The model publishes no net leverage figure.")).toBeInTheDocument();
  unmount();
  const second = draw(null, { rows: ["Net leverage (one)", "Net leverage (two)"] });
  expect(
    screen.getByText(
      "The model publishes 2 net leverage rows: Net leverage (one) and Net leverage (two). None is on net debt over Adj EBITDA, so none is drawn.",
    ),
  ).toBeInTheDocument();
  second.unmount();
  draw(measureOf(cols("Base case", ["FY2025E"]), [value("1.5")]), {
    group: "Downside (CP-2G drivers)",
    caseName: "Downside drivers",
  });
  expect(screen.getByText("No net leverage figure for Downside drivers.")).toBeInTheDocument();
  expect(screen.queryByText("1.5x")).toBeNull();
});

it("keeps an actual year and a forecast year of the same fiscal year apart, by their labels", () => {
  draw(
    measureOf(
      [{ label: "FY2025", group: "Fiscal year" }, ...cols("Base case", ["FY2025E", "FY2026E"])],
      [value("2.50"), value("2.20"), value("2.00")],
    ),
  );
  fireEvent.click(screen.getByRole("button", { name: "Table" }));
  const table = within(screen.getByRole("table", { name: /Net leverage by case/ }));
  const row = (label: string) =>
    within(table.getByRole("rowheader", { name: label }).closest("tr") as HTMLElement)
      .getAllByRole("cell")
      .map((cell) => cell.textContent);
  // Columns: Actual, Base case. The actual is never put in the case's column.
  expect(row("FY2025")).toEqual(["2.50x", ""]);
  expect(row("FY2025E")).toEqual(["", "2.20x"]);
  expect(row("FY2026E")).toEqual(["", "2.00x"]);
});

it("draws every schedule row of a year that has two, side by side and in the table", () => {
  const cell = (text: string, amount: number) => ({ text, value: amount, reason: null });
  const { container } = draw(
    measureOf(cols("Base case", ["FY2025E", "FY2026E"]), [value("2"), value("1.5")]),
    {
      schedule: {
        years: [
          { year: 2026, label: "FY2026", key: "FY2026-0", cell: cell("300", 300) },
          { year: 2026, label: "FY2026", key: "FY2026-1", cell: cell("200", 200) },
        ],
        offAxis: [],
        unit: "US$m",
      },
    },
  );
  const figure = within(screen.getByRole("figure"));
  expect(figure.getByText("300")).toBeInTheDocument();
  expect(figure.getByText("200")).toBeInTheDocument();
  expect(container.querySelectorAll("rect.fill-chart-2")).toHaveLength(2);
  fireEvent.click(screen.getByRole("button", { name: "Table" }));
  const table = within(screen.getByRole("table", { name: /Net leverage by case/ }));
  expect(table.getByText("FY2026: 300")).toBeInTheDocument();
  expect(table.getByText("FY2026: 200")).toBeInTheDocument();
});
