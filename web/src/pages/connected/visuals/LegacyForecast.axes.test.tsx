import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { LegacyForecast } from "./LegacyForecast";

vi.mock("@/components/chart/TrendChart", () => ({
  TrendChart: ({
    yTicks,
    series,
    table,
    note,
  }: {
    yTicks: { value: number; label: string }[];
    series: unknown;
    table: unknown;
    note?: string;
  }) => (
    <div>
      {note !== undefined && <p aria-label="Chart note">{note}</p>}
      <output aria-label="Axis labels">{JSON.stringify(yTicks)}</output>
      <output aria-label="Exact chart values">{JSON.stringify(series)}</output>
      <output aria-label="Recorded display values">{JSON.stringify(table)}</output>
    </div>
  ),
}));

function draw(values: string[], units = "USD millions") {
  render(
    <LegacyForecast
      model={{
        cashflow: {
          units,
          columns: [
            { label: "FY2027E", group: "Base case" },
            { label: "FY2028E", group: "Base case" },
          ],
          rows: [
            {
              label: "Revenue",
              band: "Revenue",
              total: false,
              cells: values.map((exact) => ({ status: "value", exact, display: exact })),
            },
          ],
        },
      }}
    />,
  );
  return JSON.parse(screen.getByLabelText("Axis labels").textContent) as {
    value: number;
    label: string;
  }[];
}

it("formats Caesars-scale axes without altering series or recorded table precision", () => {
  const values = ["11812.2368", "12147.690268558208"];
  expect(draw(values).map((tick) => tick.label)).toEqual([
    "0",
    "2,500",
    "5,000",
    "7,500",
    "10,000",
    "12,500",
  ]);
  expect(screen.getByLabelText("Exact chart values")).toHaveTextContent(
    '[{"name":"Base case","values":[11812.2368,12147.690268558208]}]',
  );
  expect(screen.getByLabelText("Recorded display values")).toHaveTextContent(
    '[{"name":"Base case","cells":["11812.2368","12147.690268558208"]}]',
  );
});

it("keeps zero and small signed axis values distinct", () => {
  expect(draw(["-0.0002", "0.0002"]).map((tick) => tick.label)).toEqual([
    "-2E-4",
    "-1E-4",
    "0",
    "1E-4",
    "2E-4",
  ]);
});

it("starts a positive axis at zero rather than at the data minimum", () => {
  const ticks = draw(["100.001", "100.003"]);
  expect(ticks[0]).toEqual({ value: 0, label: "0" });
  expect(ticks.at(-1)?.value).toBeGreaterThanOrEqual(100.003);
  expect(new Set(ticks.map((tick) => tick.label)).size).toBe(ticks.length);
});

it("does not merge distinct ticks through display rounding", () => {
  const ticks = draw(["0.005", "0.0125"]);
  expect(new Set(ticks.map((tick) => tick.label)).size).toBe(ticks.length);
  expect(ticks.map((tick) => tick.label)).toContain("0.0075");
});

it("omits chart captions when the handoff has no units", () => {
  draw(["0", "10"], "");
  expect(screen.queryByLabelText("Chart note")).toBeNull();
  expect(screen.getByLabelText("Exact chart values")).toHaveTextContent(
    '[{"name":"Base case","values":[0,10]}]',
  );
});
