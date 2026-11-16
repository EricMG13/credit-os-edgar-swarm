import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import { EMPHASIS_CLASS } from "../../../components/chart/SeriesLine";
import { CashProxy, forecastCaseOptions, ForecastScope, LegacyForecast } from "./LegacyForecast";

import { Forecast } from "../report/Forecast";
import type { PublishedRun } from "../publishedReport";

const model = {
  cashflow: {
    units: "USD millions",
    notes: ["Downside case is the stress case: a shock applied to base case drivers."],
    columns: [
      { label: "FY2027E", group: "Base case" },
      { label: "FY2028E", group: "Base case" },
      { label: "FY2027E", group: "Downside case" },
      { label: "FY2028E", group: "Downside case" },
    ],
    rows: [
      {
        label: "Cash proxy (not issuer free cash flow)",
        band: "Cash",
        total: true,
        cells: [
          { status: "value", exact: "10", display: "10.00" },
          { status: "value", exact: "12", display: "12.00" },
          { status: "value", exact: "5", display: "5.00" },
          { status: "value", exact: "6", display: "6.00" },
        ],
      },
      {
        label: "Revenue",
        band: "Operating",
        total: false,
        cells: [
          { status: "value", exact: "100", display: "100" },
          { status: "value", exact: "110", display: "110" },
          { status: "value", exact: "80", display: "80" },
          { status: "value", exact: "90", display: "90" },
        ],
      },
    ],
  },
};

it("offers the published Base and Downside cases with actual latest cash proxy values", () => {
  expect(forecastCaseOptions(model)).toEqual([
    {
      name: "Base case",
      period: "FY2028E",
      value: 12,
      units: "USD millions",
      description: undefined,
    },
    {
      name: "Downside shock",
      period: "FY2028E",
      value: 6,
      units: "USD millions",
      description: model.cashflow.notes[0],
    },
  ]);
});

it("labels absent units as not recorded in the case data and model", () => {
  const noUnits = { cashflow: { ...model.cashflow, units: null } };
  expect(forecastCaseOptions(noUnits).map(({ units }) => units)).toEqual([
    "Units not recorded",
    "Units not recorded",
  ]);
  render(<LegacyForecast model={noUnits} />);
  expect(screen.getByText("Units not recorded")).toBeInTheDocument();
});

it("applies the selected downside to forecast chart and model table", () => {
  render(<LegacyForecast model={model} selectedCase="Downside shock" />);
  const chart = within(screen.getByRole("figure", { name: "Revenue" }));
  fireEvent.click(chart.getByRole("radio", { name: "Table" }));
  expect(chart.getByRole("cell", { name: "80" })).toBeInTheDocument();
  expect(chart.getByRole("cell", { name: "90" })).toBeInTheDocument();
  expect(chart.queryByRole("cell", { name: "100" })).toBeNull();
  expect(chart.queryByRole("cell", { name: "110" })).toBeNull();

  const table = within(screen.getByRole("region", { name: "Cash flow model" }));
  expect(table.getByRole("cell", { name: "80" })).toBeInTheDocument();
  expect(table.getByRole("cell", { name: "90" })).toBeInTheDocument();
  expect(table.queryByRole("cell", { name: "100" })).toBeNull();
  expect(table.queryByRole("cell", { name: "110" })).toBeNull();
});

it("draws every case on the cash proxy chart and table, emphasising the selected one", () => {
  render(<CashProxy model={model} selectedCase="Downside shock" />);
  const chart = within(screen.getByRole("figure", { name: "Cash proxy by scenario" }));
  fireEvent.click(chart.getByRole("radio", { name: "Table" }));
  expect(chart.getByRole("row", { name: /Downside shock/ })).toBeInTheDocument();
  expect(chart.getByRole("row", { name: /Base case/ })).toBeInTheDocument();
  expect(chart.getByRole("cell", { name: "6.00" })).toBeInTheDocument();
});

function fourCases() {
  const groups = ["Base case", "Downside case", "Upside", "Downside (CP-2G drivers)"];
  return {
    cashflow: {
      units: "USD millions",
      columns: groups.flatMap((group) => [
        { label: "FY2027E", group },
        { label: "FY2028E", group },
      ]),
      rows: [
        {
          label: "Cash proxy (not issuer free cash flow)",
          band: "Cash",
          total: true,
          cells: [10, 12, 5, 6, 14, 18, 7, 8].map((value) => ({
            status: "value",
            exact: String(value),
            display: `${String(value)}.00`,
          })),
        },
      ],
    },
  };
}

it("draws all four scenarios, each named, with only the selected one emphasised", () => {
  const { container } = render(<CashProxy model={fourCases()} selectedCase="Upside case" />);
  const names = [...container.querySelectorAll(".recharts-wrapper [data-series-name]")];
  expect(names.map((name) => name.textContent).sort()).toEqual([
    "Base case",
    "Downside case",
    "Downside drivers",
    "Upside case",
  ]);
  expect(container.querySelectorAll(".recharts-wrapper path.recharts-line-curve")).toHaveLength(4);
  const emphasised = container.querySelectorAll(`.recharts-wrapper .${EMPHASIS_CLASS}`);
  expect(emphasised).toHaveLength(1);
  const heavy = emphasised[0]?.querySelector("path.recharts-line-curve");
  expect(heavy).toHaveAttribute("name", "Upside case");
  expect(heavy).not.toHaveAttribute("stroke", "var(--color-chart-other)");
  expect(Number(heavy?.getAttribute("stroke-width"))).toBeGreaterThan(2);
  const others = [
    ...container.querySelectorAll(`.recharts-wrapper .recharts-line:not(.${EMPHASIS_CLASS})`),
  ];
  expect(others).toHaveLength(3);
  for (const line of others) {
    const path = line.querySelector("path.recharts-line-curve");
    expect(path).toHaveAttribute("stroke", "var(--color-chart-other)");
    expect(path).toHaveAttribute("stroke-width", "2");
  }
});

it("moves the emphasis when another case is selected", () => {
  const { container, rerender } = render(
    <CashProxy model={fourCases()} selectedCase="Base case" />,
  );
  const emphasisedName = () =>
    container.querySelector(".recharts-wrapper [data-series-name][data-emphasised]")?.textContent;
  expect(emphasisedName()).toBe("Base case");
  rerender(<CashProxy model={fourCases()} selectedCase="Downside case" />);
  expect(emphasisedName()).toBe("Downside case");
});

it("compares every case while the chart follows the selection, including zero and missing", () => {
  const all = structuredClone(model);
  const row = all.cashflow.rows[0];
  if (!row) throw new Error("Missing cash proxy fixture");
  row.cells[0] = { status: "value", exact: "0", display: "0.00" };
  row.cells[1] = { status: "missing", exact: "", display: "n.a." };
  const { rerender } = render(
    <CashProxy model={all} selectedCase="Downside shock" source={<a href="#basis">Basis</a>} />,
  );
  const table = within(screen.getByRole("table", { name: "Scenario comparison" }));
  expect(table.getByRole("row", { name: /Base case/ })).not.toHaveAttribute("aria-current");
  expect(table.getByRole("cell", { name: "0.00" })).toBeInTheDocument();
  expect(table.getByRole("row", { name: /Downside shock/ })).toHaveAttribute(
    "aria-current",
    "true",
  );
  expect(table.getAllByRole("link", { name: "Basis" })).toHaveLength(2);
  expect(table.getByText("not available")).toBeInTheDocument();
  rerender(<CashProxy model={all} selectedCase="Base case" />);
  expect(table.getByRole("row", { name: /Base case/ })).toHaveAttribute("aria-current", "true");
  expect(table.getByRole("row", { name: /Downside shock/ })).not.toHaveAttribute("aria-current");
  expect(table.getByRole("cell", { name: "6.00" })).toBeInTheDocument();
});

it("promotes exact scope qualifications and leaves source-bearing sentences out", () => {
  const limits = [
    "Every figure uses inputs CP-2G stated; the inputs are unreviewed. Not analytical review.",
    "Base period is twelve months to 30 June 2026.",
    "Base interest excludes rent; forecast interest includes rent and is not comparable.",
    "The second half of 2026 is not modelled; FY2027 opens from 30 June balances.",
    "Standalone pre-merger perimeter; no acquisition debt.",
    "The machine input is set to zero; cash is lower by USD 183.09 million.",
    "Standalone perimeter is defined in secret-file.pdf.",
  ];
  const baseNote =
    "Base case is a conditional illustration, not an evidence-supported central issuer forecast.";
  render(
    <ForecastScope
      model={{ cashflow: { notes: [baseNote], limits } }}
      source={(name) => <a href="#record">{name}</a>}
    />,
  );
  expect(screen.getByText(baseNote)).toBeInTheDocument();
  for (const line of limits.slice(1, 6)) expect(screen.getByText(line)).toBeInTheDocument();
  expect(screen.getByText("Not analytical review.")).toBeInTheDocument();
  expect(screen.queryByText(/CP-2G/)).toBeNull();
  expect(screen.queryByText(/secret-file/)).toBeNull();
  expect(screen.getAllByRole("link")).toHaveLength(7);
});

it("does not invent missing qualifications or case descriptions", () => {
  render(<ForecastScope model={{ cashflow: {} }} />);
  expect(screen.getByText(/No qualifications are available in this summary/)).toBeInTheDocument();
  expect(forecastCaseOptions(model)[0]?.description).toBeUndefined();
});

it("keeps all four recorded cases and puts scope before their selection", () => {
  const cashflow = {
    ...model.cashflow,
    notes: ["Base case is a conditional illustration.", ...model.cashflow.notes],
    limits: ["Base interest and forecast interest are not comparable."],
    other: {
      columns: [
        { label: "FY2027E", group: "Upside" },
        { label: "FY2028E", group: "Upside" },
        { label: "FY2027E", group: "Downside (CP-2G drivers)" },
        { label: "FY2028E", group: "Downside (CP-2G drivers)" },
      ],
      rows: [model.cashflow.rows[0]],
    },
  };
  const published = {
    id: "model",
    issuerKey: "issuer",
    runId: "run",
    runFolder: "run",
    href: "",
    download: "",
    sources: [],
    cashflow,
  };
  render(
    <Forecast
      view={{
        catalogue: undefined,
        lead: undefined,
        entries: [],
        modules: [],
        models: [published],
      }}
      run={{ folder: "run" } as PublishedRun}
    />,
  );
  const choices = screen.getByRole("radiogroup", { name: "Forecast case" });
  expect(within(choices).getAllByRole("radio")).toHaveLength(4);
  expect(screen.getByRole("heading", { name: "Forecast cases" })).toBeInTheDocument();
  expect(screen.queryByText("Two cases")).toBeNull();
  expect(within(choices).getAllByText("Case description not recorded.")).toHaveLength(2);
  const scope = screen.getByRole("region", { name: "Model scope and basis" });
  expect(scope.compareDocumentPosition(choices) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  expect(
    within(scope).getByText("Base interest and forecast interest are not comparable."),
  ).toBeInTheDocument();
  const comparison = within(screen.getByRole("table", { name: "Scenario comparison" }));
  expect(comparison.getAllByRole("rowheader").map((node) => node.textContent)).toEqual([
    "Base case",
    "Downside shock",
    "Upside case",
    "Downside drivers",
  ]);
});

it("retains other cases when the selected cash proxy is entirely missing", () => {
  const missing = structuredClone(model);
  const row = missing.cashflow.rows[0];
  if (!row) throw new Error("Missing cash proxy fixture");
  for (const index of [2, 3]) {
    row.cells[index] = { status: "missing", exact: "", display: "n.a." };
  }
  render(<CashProxy model={missing} selectedCase="Downside shock" />);
  const comparison = within(screen.getByRole("table", { name: "Scenario comparison" }));
  expect(comparison.getByRole("cell", { name: "12.00" })).toBeInTheDocument();
  expect(comparison.getByRole("row", { name: /Downside shock/ })).toHaveAttribute(
    "aria-current",
    "true",
  );
  expect(comparison.getAllByText("not available")).toHaveLength(2);
  const chart = within(screen.getByRole("figure", { name: "Cash proxy by scenario" }));
  fireEvent.click(chart.getByRole("radio", { name: "Table" }));
  expect(chart.getAllByText("not available")).toHaveLength(2);
  expect(chart.getByRole("row", { name: /Base case/ })).toBeInTheDocument();
});

it("separates the name labels of scenarios that end close together", () => {
  const close = fourCases();
  const row = close.cashflow.rows[0];
  if (!row) throw new Error("Missing cash proxy fixture");
  close.cashflow.columns = close.cashflow.columns.slice(0, 4);
  row.cells = [12000, 12000, 11400, 11400].map((value) => ({
    status: "value",
    exact: String(value),
    display: `${String(value)}.00`,
  }));
  const { container } = render(<CashProxy model={close} selectedCase="Base case" />);
  const ys = [...container.querySelectorAll(".recharts-wrapper [data-series-name]")].map((name) =>
    Number(name.getAttribute("y")),
  );
  expect(ys).toHaveLength(2);
  expect(Math.abs((ys[0] ?? 0) - (ys[1] ?? 0))).toBeGreaterThanOrEqual(14);
});

it("labels only the emphasised scenario's end value and keeps every scenario's name clear of it", () => {
  const ends = [12000, 11900, 11800, 11700];
  const groups = ["Base case", "Downside case", "Upside", "Downside (CP-2G drivers)"];
  const close = {
    cashflow: {
      units: "USD millions",
      columns: groups.flatMap((group) => [
        { label: "FY2027E", group },
        { label: "FY2028E", group },
      ]),
      rows: [
        {
          label: "Cash proxy (not issuer free cash flow)",
          band: "Cash",
          total: true,
          cells: ends
            .flatMap((end) => [end - 500, end])
            .map((value) => ({
              status: "value",
              exact: String(value),
              display: `${String(value)}.00`,
            })),
        },
      ],
    },
  };
  const { container } = render(<CashProxy model={close} selectedCase="Downside case" />);
  const box = (el: Element) => ({
    text: el.textContent,
    x: Number(el.getAttribute("x")),
    y: Number(el.getAttribute("y")),
    series: el.getAttribute("data-series"),
    anchor: el.getAttribute("text-anchor"),
  });
  const labels = [...container.querySelectorAll(".recharts-wrapper [data-label]")].map(box);
  const names = [...container.querySelectorAll(".recharts-wrapper [data-series-name]")].map(box);
  expect(labels.map(({ text, series }) => [text, series])).toEqual([
    ["11,900.00", "Downside case"],
  ]);
  expect(names.map(({ text }) => text).sort()).toEqual([
    "Base case",
    "Downside case",
    "Downside drivers",
    "Upside case",
  ]);
  // The value label ends left of the line end and every name starts right of it: no name can sit on it.
  const [value] = labels;
  expect(value?.anchor).toBe("end");
  for (const name of names) expect(value?.x ?? Infinity).toBeLessThan(name.x);
});
