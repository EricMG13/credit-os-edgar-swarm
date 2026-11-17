import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { LegacyForecast } from "./LegacyForecast";

const cell = (display: string) => ({ status: "value", exact: display, display });

const model = {
  cashflow: {
    units: "USD millions",
    notes: [
      "LTM is the last fiscal year when that is the latest period CP-1 labels; otherwise the last fiscal year plus the year to date less the prior year to date.",
      "Downside case is the stress case: a shock applied to the base-case drivers.",
    ],
    limits: [
      "Every figure is arithmetic over inputs the Forward credit model stated; the inputs, not the arithmetic, are unreviewed. Not analytical review.",
      "The last twelve months could not be built from the periods CP-1 prints, so there was nothing to check against its period dates.",
    ],
    columns: [
      { label: "FY2027E", group: "Base case" },
      { label: "FY2028E", group: "Base case" },
    ],
    rows: [
      {
        label: "Cash proxy (not issuer free cash flow)",
        band: "Cash",
        total: true,
        cells: [cell("10.00"), cell("12.00")],
      },
    ],
    other: {
      columns: [
        { label: "FY2027E", group: "Downside (CP-2G drivers)" },
        { label: "FY2028E", group: "Downside (CP-2G drivers)" },
      ],
      rows: [
        {
          label: "Cash proxy (not issuer free cash flow)",
          band: "Cash",
          total: true,
          cells: [cell("5.00"), cell("6.00")],
        },
      ],
    },
  },
};

it("draws the model notes, limitations and case group by module name, with no module code", () => {
  render(<LegacyForecast model={model} />);
  expect(
    screen.getByText(
      "LTM is the last fiscal year when that is the latest period Financial foundation labels; otherwise the last fiscal year plus the year to date less the prior year to date.",
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "The last twelve months could not be built from the periods Financial foundation prints, so there was nothing to check against its period dates.",
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Every figure is arithmetic over inputs the Forward credit model stated; the inputs, not the arithmetic, are unreviewed. Not analytical review.",
    ),
  ).toBeInTheDocument();
  expect(screen.getByRole("columnheader", { name: "Downside drivers" })).toBeInTheDocument();
  expect(document.body.textContent).not.toMatch(/\bCP-[A-Z0-9]+\b/);
});
