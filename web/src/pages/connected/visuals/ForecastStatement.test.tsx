import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import { ForecastStatement } from "./ForecastStatement";

function model(columns: { label: string; group: string; start?: string; end?: string }[]) {
  return {
    cashflow: {
      units: "USD millions",
      columns,
      rows: [
        {
          label: "Revenue",
          band: "Operating",
          kind: "money",
          total: false,
          cells: columns.map(({ label, group }) =>
            group === "Downside case" && label === "Downside"
              ? {
                  status: "na",
                  exact: null,
                  display: "n.a.",
                  reason: "no downside case was computed in this run",
                }
              : { status: "value", exact: "10", display: "10" },
          ),
        },
      ],
    },
  };
}

it("keeps an unavailable downside selectable without offering a false comparison", () => {
  render(
    <ForecastStatement
      model={model([
        { label: "FY2027E", group: "Base case" },
        { label: "Downside", group: "Downside case" },
      ])}
      selectedCase="Downside case"
    />,
  );

  const columns = screen.getByLabelText("Statement columns");
  expect(within(columns).queryByRole("option", { name: "Compare scenarios" })).toBeNull();
  expect(screen.queryByLabelText("Comparison period")).toBeNull();
  const table = within(screen.getByRole("table", { name: "Cash flow model" }));
  expect(table.getByRole("cell", { name: /n\.a\./ })).toBeInTheDocument();
});

it("offers comparison only when scenarios share a dated period and compatible recorded spans", () => {
  const statement = render(
    <ForecastStatement
      model={model([
        { label: "FY2027E", group: "Base case", start: "2026-01-01", end: "2026-12-31" },
        { label: "FY2027E", group: "Downside case", start: "2026-01-01", end: "2026-12-31" },
      ])}
    />,
  );
  expect(
    within(screen.getByLabelText("Statement columns")).getByRole("option", {
      name: "Compare scenarios",
    }),
  ).toBeInTheDocument();

  statement.rerender(
    <ForecastStatement
      model={model([
        { label: "FY2027E", group: "Base case", start: "2026-01-01", end: "2026-12-31" },
        { label: "FY2027E", group: "Downside case", start: "2026-01-01", end: "2026-06-30" },
      ])}
    />,
  );
  const columns = screen.getByLabelText("Statement columns");
  expect(within(columns).queryByRole("option", { name: "Compare scenarios" })).toBeNull();
  expect(screen.getByRole("status")).toHaveTextContent(/start and end dates do not match/i);
});

it("retains label-based comparison for older grids where all candidate endpoints are absent", () => {
  render(
    <ForecastStatement
      model={model([
        { label: "FY2027E", group: "Base case" },
        { label: "FY2027E", group: "Downside case" },
      ])}
    />,
  );
  expect(
    within(screen.getByLabelText("Statement columns")).getByRole("option", {
      name: "Compare scenarios",
    }),
  ).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText("Statement columns"), { target: { value: "compare" } });
  expect(screen.getByLabelText("Comparison period")).toHaveValue("FY2027E");
});
