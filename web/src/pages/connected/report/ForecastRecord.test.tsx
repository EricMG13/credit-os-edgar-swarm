import { expect, it } from "vitest";
import { forecastCaseOptions } from "../visuals/LegacyForecast";
import { forecastTraceContext, type ForecastModel } from "./ForecastRecord";

const CASH_PROXY = "Cash proxy (not issuer free cash flow)";
const value = (exact: string) => ({ status: "value", exact, display: exact });

function modelOf(columns: { label: string; group: string }[], cells: unknown[]) {
  return {
    cashflow: {
      units: "USD millions",
      columns,
      rows: [{ label: CASH_PROXY, band: "Cash", total: true, cells }],
    },
  } as unknown as ForecastModel;
}

it("lists as forecast cases only the groups whose columns the trend charts read", () => {
  const model = modelOf(
    [
      { label: "FY2027E", group: "Base case" },
      // Not a dated forecast period: the trend charts ignore this column.
      { label: "FY27E", group: "Upside" },
    ],
    [value("10"), value("14")],
  );
  const { details, qualification } = forecastTraceContext(
    model,
    { base: {}, base_drivers: {}, years: [] },
    "Cash proxy by scenario",
    { row: CASH_PROXY, case: "" },
  );
  expect(details.map(({ label }) => label).filter((label) => /upside/i.test(label))).toEqual([]);
  expect(qualification).not.toContain("driver basis was not recorded");
});

it("finds a placeholder-only case's column from the card's selection, which names no period", () => {
  const model = modelOf(
    [
      { label: "FY2027E", group: "Base case" },
      { label: "FY2028E", group: "Base case" },
      { label: "Downside", group: "Downside case" },
    ],
    [
      value("10"),
      value("12"),
      {
        status: "na",
        exact: null,
        display: "n.a.",
        reason: "no downside case was computed in this run",
      },
    ],
  );
  const card = forecastCaseOptions(model).find(({ rawGroup }) => rawGroup === "Downside case");
  if (!card) throw new Error("The Downside case card is missing");
  expect(card.period).toBeUndefined();
  // The selection report/Forecast.tsx sends for a case card.
  const trace = forecastTraceContext(model, { years: [] }, card.name, {
    case: card.name,
    rawGroup: card.rawGroup,
    rawGroups: [card.rawGroup],
    period: card.period,
    row: CASH_PROXY,
    periodStart: card.periodStart,
    periodEnd: card.periodEnd,
  });
  expect(trace.heading).toBe("Downside case · Downside case");
  expect(trace.statement).toContain(
    "Downside case · Downside: n.a. (no downside case was computed in this run)",
  );
  expect(trace.statement).not.toContain("FY2027E");
});
