import { render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import { AssumptionsByCase } from "./ForecastAssumptions";

const document = {
  years: [{ year: 2025 }, { year: 2026 }, { year: 2027 }],
  base_drivers: {
    revenue_growth: { values: [0.05, 0.05, 0.05] },
    ebitda_margin: { values: [0.4, 0.41, 0.42] },
  },
  upside_drivers: {
    revenue_growth: { values: [0.08, 0.08, 0.08] },
    ebitda_margin: { values: [0.4, 0.41, 0.42] },
  },
  downside_shock: { ebitda_decline: 0.15 },
};

const region = () => screen.getByRole("region", { name: "Assumptions by case table" });
const rowOf = (name: string) =>
  within(region()).getByRole("row", { name: new RegExp(`^${name}`, "u") });

it("marks a differing cell with a visible glyph and screen-reader text, and not a base cell", () => {
  render(<AssumptionsByCase document={document} />);
  const growth = rowOf("Revenue growth");
  const cells = within(growth).getAllByRole("cell");
  expect(cells[0]?.textContent).toContain("5.00% each year");
  expect(cells[0]?.textContent).not.toContain("differs from base");
  expect(cells[1]?.textContent).toContain("8.00% each year");
  expect(cells[1]?.textContent).toContain("differs from base");
  expect(cells[1]?.textContent).toContain("≠");
  const margin = within(rowOf("EBITDA margin")).getAllByRole("cell");
  expect(margin[1]?.textContent).not.toContain("differs from base");
});

it("says Not stated for a driver a case does not give, and puts shock rows only in downside", () => {
  render(<AssumptionsByCase document={document} />);
  expect(
    within(region())
      .getAllByRole("columnheader")
      .map((head) => head.textContent),
  ).toEqual(["Driver", "Base case", "Upside case", "Downside drivers", "Trace"]);
  const decline = within(rowOf("Downside EBITDA decline")).getAllByRole("cell");
  expect(decline.map((cell) => cell.textContent.replace(/\s+/gu, " ").trim())).toEqual([
    "Not stated",
    "Not stated",
    expect.stringContaining("15.00%"),
    "",
  ]);
  expect(screen.getByText("Planning years: 2025 · 2026 · 2027")).toBeTruthy();
});

it("renders the trace control once per row", () => {
  const seen: string[] = [];
  render(
    <AssumptionsByCase
      document={document}
      source={(name, selection) => {
        seen.push(`${name}|${selection?.inputPath?.join(".") ?? ""}`);
        return <button type="button">trace</button>;
      }}
    />,
  );
  expect(seen).toContain("Revenue growth assumptions|base_drivers.revenue_growth");
  expect(seen).toContain("Downside EBITDA decline assumptions|downside_shock.ebitda_decline");
});

it("keeps the recorded drivers behind a disclosure", () => {
  render(<AssumptionsByCase document={document} />);
  expect(screen.getByText("Recorded drivers, rationale and limitations")).toBeTruthy();
  expect(screen.getAllByText("Recorded forecast drivers").length).toBeGreaterThan(0);
});

it("draws a gap when the inputs are unreadable", () => {
  render(<AssumptionsByCase document={null} />);
  expect(
    screen.getByText("The model could not be matched to a single readable record of its inputs."),
  ).toBeTruthy();
  expect(screen.queryByRole("table")).toBeNull();
});
