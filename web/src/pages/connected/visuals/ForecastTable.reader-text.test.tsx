import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { ForecastTable } from "./ForecastTable";
import type { Grid } from "./LegacyForecast";

const na = { status: "na", exact: null, display: "n.a.", reason: "Not recorded." };
const value = { status: "value", exact: "10", display: "10" };

it("spells out the period shorthand in the sentence that lists the columns without values", () => {
  const empty = ["Quarter", "YTD", "PYTD", "Fiscal year", "LTM", "Prior LTM", "PF LTM"];
  const grid: Grid = {
    columns: [
      ...empty.map((label) => ({ label, group: "History", start: "", end: "" })),
      { label: "FY2027E", group: "Base case", start: "", end: "" },
    ],
    rows: [{ label: "Revenue", band: "", total: false, cells: [...empty.map(() => na), value] }],
  };
  render(<ForecastTable grid={grid} title="Model" limits={[]} />);
  expect(
    screen.getByText(
      "These columns have no recorded values: Quarter, Year to date, Prior-year to date, Fiscal year, Last twelve months, Prior last twelve months, Pro forma last twelve months.",
    ),
  ).toBeInTheDocument();
});

it("names a module in a column group by its name, not its code", () => {
  const grid: Grid = {
    columns: [
      { label: "FY2027E", group: "Downside (CP-2G drivers)", start: "", end: "" },
      { label: "FY2028E", group: "Downside (CP-2G drivers)", start: "", end: "" },
    ],
    rows: [{ label: "Revenue", band: "", total: false, cells: [value, value] }],
  };
  render(<ForecastTable grid={grid} title="Other forecast cases" limits={[]} />);
  expect(
    screen.getByRole("columnheader", { name: "Downside (Forward credit model drivers)" }),
  ).toBeInTheDocument();
  expect(document.body.textContent).not.toMatch(/\bCP-/);
});

it("names modules by name in a qualification and in an unavailable row's reason", () => {
  const grid: Grid = {
    columns: [{ label: "FY2027E", group: "Base case", start: "", end: "" }],
    rows: [
      {
        label: "Gross profit",
        band: "",
        total: false,
        cells: [{ ...na, reason: "CP-1 does not print this line for FY2027." }],
      },
    ],
  };
  render(
    <ForecastTable
      grid={grid}
      title="Model"
      limits={["Base interest is cash interest only; CP-1 prints it in the credit table."]}
    />,
  );
  expect(
    screen.getByText(
      "Base interest is cash interest only; Financial foundation prints it in the credit table.",
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByText("Financial foundation does not print this line for FY2027."),
  ).toBeVisible();
  expect(document.body.textContent).not.toMatch(/\bCP-/);
});
