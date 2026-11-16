import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import { CashProxy, forecastCaseOptions, LegacyForecast } from "./LegacyForecast";

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
    { name: "Base case", period: "FY2028E", value: 12, units: "USD millions" },
    { name: "Downside shock", period: "FY2028E", value: 6, units: "USD millions" },
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

it("filters the cash proxy chart and its table to the selected downside case", () => {
  render(<CashProxy model={model} selectedCase="Downside shock" />);
  const chart = within(screen.getByRole("figure", { name: "Cash proxy by scenario" }));
  fireEvent.click(chart.getByRole("radio", { name: "Table" }));
  expect(chart.getByRole("row", { name: /Downside shock/ })).toBeInTheDocument();
  expect(chart.queryByRole("row", { name: /Base case/ })).toBeNull();
  expect(chart.getByRole("cell", { name: "6.00" })).toBeInTheDocument();
});
