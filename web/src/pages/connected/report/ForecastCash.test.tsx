import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { UsesOfCash } from "./ForecastCash";

const columns = ["FY2025E", "FY2026E", "FY2027E"].map((label, at) => ({
  label,
  group: "Base case",
  start: `${String(2025 + at)}-01-01`,
  end: `${String(2025 + at)}-12-31`,
}));
const value = (exact: string) => ({ status: "value", exact, display: exact });
const row = (label: string, cells: unknown[]) => ({
  label,
  band: "Cash",
  kind: "money",
  total: false,
  cells,
});
const model = (rows: unknown[]) => ({ cashflow: { units: "USD millions", columns, rows } });

const full = model([
  row("Distributions", [value("20"), value("0"), value("30")]),
  row("Debt repayment", [
    value("50"),
    { status: "na", display: "n.a.", reason: "Repayment not modelled" },
    value("40"),
  ]),
]);

const view = (rows = full) => (
  <UsesOfCash model={rows} group="Base case" caseName="Base case" units="USD millions" />
);

it("labels segments with their exact displays and prints no total", () => {
  render(view());
  const chart = screen.getByRole("img");
  expect(chart.getAttribute("aria-label")).toContain("Distributions FY2025E 20");
  expect(chart.getAttribute("aria-label")).toContain("Debt repayment FY2025E 50");
  expect(chart.textContent).toContain("20");
  expect(chart.textContent).toContain("50");
  expect(chart.textContent).not.toMatch(/\b70\b/u);
  expect(screen.getByText("USD millions")).toBeTruthy();
});

it("draws zero as a zero-height segment, not a gap", () => {
  render(view());
  const chart = screen.getByRole("img");
  expect(chart.getAttribute("aria-label")).toContain("Distributions FY2026E 0");
  expect(chart.textContent).toContain("0");
});

it("shows a missing value as n.a. with its reason in the notes", () => {
  render(view());
  expect(screen.getByRole("img").textContent).toContain("n.a.");
  expect(screen.getByText(/FY2026E Debt repayment: Repayment not modelled/u)).toBeTruthy();
});

it("lists a negative value in the notes instead of stacking it", () => {
  render(
    view(
      model([
        row("Distributions", [value("-5"), value("1"), value("2")]),
        row("Debt repayment", [value("5"), value("1"), value("2")]),
      ]),
    ),
  );
  expect(screen.getByText(/FY2025E Distributions: -5 \(negative, not stacked\)/u)).toBeTruthy();
});

it("switches to the table view with the cells", () => {
  render(view());
  fireEvent.click(screen.getByRole("button", { name: "Table" }));
  expect(screen.queryByRole("img")).toBeNull();
  const cells = screen.getAllByRole("row").map((item) => item.textContent);
  expect(cells).toContain("FY2025E2050");
  expect(cells).toContain("FY2026E0Repayment not modelled");
});

it("states a gap when neither row exists", () => {
  render(view(model([row("Revenue", [value("1"), value("2"), value("3")])])));
  expect(
    screen.getByText("The model publishes no distributions or debt repayment rows."),
  ).toBeTruthy();
});
