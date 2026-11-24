import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import { ForecastStatement } from "./ForecastStatement";
import {
  forecastTraceContext,
  type ForecastModel,
  type ForecastSelection,
} from "../report/ForecastRecord";

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

function tracedStatement(
  columns: Parameters<typeof model>[0],
  props: { selectedCase?: string; selectedRawGroup?: string } = {},
) {
  const published = model(columns);
  const calls: { name: string; selection?: ForecastSelection }[] = [];
  render(
    <ForecastStatement
      model={published}
      {...props}
      source={(name, selection) => {
        calls.push({ name, selection });
        return null;
      }}
    />,
  );
  return () => {
    const selection = calls.filter(({ name }) => name === "Revenue").at(-1)?.selection;
    if (!selection) throw new Error("The Revenue row asked for no source");
    return forecastTraceContext(published as unknown as ForecastModel, {}, "Revenue", selection);
  };
}

it("traces every displayed column, with a date span in the heading only when comparing", () => {
  const revenueTrace = tracedStatement(
    [
      { label: "FY2025A", group: "Reported", start: "2025-01-01", end: "2025-12-31" },
      { label: "FY2026E", group: "Base case", start: "2026-01-01", end: "2026-12-31" },
      { label: "FY2027E", group: "Base case", start: "2027-01-01", end: "2027-12-31" },
      { label: "FY2026E", group: "Downside case", start: "2026-01-01", end: "2026-12-31" },
      { label: "FY2027E", group: "Downside case", start: "2027-01-01", end: "2027-12-31" },
    ],
    { selectedCase: "Base case" },
  );

  const selected = revenueTrace();
  expect(selected.statement).toContain("Base case · FY2026E (2026-01-01 to 2026-12-31): 10");
  expect(selected.statement).toContain("Base case · FY2027E (2027-01-01 to 2027-12-31): 10");
  expect(selected.statement).not.toContain("Downside case");
  expect(selected.heading).toBe("Revenue · Base case");

  fireEvent.change(screen.getByLabelText("Statement columns"), { target: { value: "history" } });
  const history = revenueTrace();
  expect(history.statement).toContain("Reported · FY2025A (2025-01-01 to 2025-12-31): 10");
  expect(history.statement).not.toContain("FY2027E");
  expect(history.heading).not.toContain(" to ");

  fireEvent.change(screen.getByLabelText("Statement columns"), { target: { value: "compare" } });
  const compared = revenueTrace();
  expect(compared.heading).toContain("(2027-01-01 to 2027-12-31)");
  expect(compared.statement).toContain("Base case · FY2027E");
  expect(compared.statement).toContain("Downside case · FY2027E");
  expect(compared.statement).not.toContain("FY2026E");
});

it("offers for comparison only the periods at least two cases publish", () => {
  render(
    <ForecastStatement
      model={model([
        { label: "FY2026E", group: "Base case" },
        { label: "FY2027E", group: "Base case" },
        { label: "FY2026E", group: "Downside case" },
      ])}
    />,
  );
  fireEvent.change(screen.getByLabelText("Statement columns"), { target: { value: "compare" } });
  const period = screen.getByLabelText("Comparison period");
  expect(within(period).getAllByRole("option")).toHaveLength(1);
  expect(period).toHaveValue("FY2026E");
});

it("shows the selected raw group's own columns when two groups share one label", () => {
  const columns = [
    { label: "FY2027E", group: "Base case" },
    { label: "FY2027E", group: "Upside" },
    { label: "FY2028E", group: "Upside" },
    { label: "FY2029E", group: "Upside case" },
  ];
  const first = tracedStatement(columns, {
    selectedCase: "Upside case",
    selectedRawGroup: "Upside case",
  });
  const table = () => within(screen.getByRole("table", { name: "Cash flow model" }));
  expect(table().getByRole("columnheader", { name: /FY2029E/ })).toBeInTheDocument();
  expect(table().queryByRole("columnheader", { name: /FY2027E/ })).toBeNull();
  expect(table().queryByRole("columnheader", { name: /FY2028E/ })).toBeNull();
  expect(first().statement).toContain("FY2029E");
  expect(first().statement).not.toContain("FY2028E");
});

it("shows the other same-label raw group's columns when that one is selected", () => {
  render(
    <ForecastStatement
      model={model([
        { label: "FY2027E", group: "Base case" },
        { label: "FY2027E", group: "Upside" },
        { label: "FY2028E", group: "Upside" },
        { label: "FY2029E", group: "Upside case" },
      ])}
      selectedCase="Upside case"
      selectedRawGroup="Upside"
    />,
  );
  const table = within(screen.getByRole("table", { name: "Cash flow model" }));
  expect(table.getByRole("columnheader", { name: /FY2027E/ })).toBeInTheDocument();
  expect(table.getByRole("columnheader", { name: /FY2028E/ })).toBeInTheDocument();
  expect(table.queryByRole("columnheader", { name: /FY2029E/ })).toBeNull();
});
