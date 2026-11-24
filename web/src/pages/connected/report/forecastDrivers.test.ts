import { expect, it } from "vitest";
import { driverTable } from "./forecastDrivers";

const cells = (table: ReturnType<typeof driverTable>, id: string) =>
  table.rows
    .find((row) => row.id === id)
    ?.cells.map(({ text, stated, differs, only }) => ({
      text,
      stated,
      differs,
      only,
    }));
const NOT = { text: "Not stated", stated: false, differs: false, only: false };

it("shows recorded values as recorded, never scaled or rounded", () => {
  const table = driverTable({
    base_drivers: { interest_rate: { values: ["0.04125", "0.04125"] } },
    upside_drivers: { interest_rate: { values: ["0.0412500", "0.0399"] } },
  });
  expect(cells(table, "base_drivers.interest_rate")).toEqual([
    { text: "0.04125 each year", stated: true, differs: false, only: false },
    { text: "0.0412500 · 0.0399", stated: true, differs: true, only: false },
  ]);
});

it("collapses to each year only when every recorded value is exactly equal as a number", () => {
  const table = driverTable({
    base_drivers: {
      revenue_growth: { values: ["0.05001", "0.05004", "0.05001"] },
      ebitda_margin: { values: ["0.40", "0.4", "0.400"] },
    },
  });
  expect(cells(table, "base_drivers.revenue_growth")?.[0]?.text).toBe(
    "0.05001 · 0.05004 · 0.05001",
  );
  expect(cells(table, "base_drivers.ebitda_margin")?.[0]?.text).toBe("0.40 each year");
});

it("compares recorded numbers exactly: 0.40 equals 0.4 and a scalar equals a per-year array", () => {
  const table = driverTable({
    base_drivers: {
      ebitda_margin: { values: ["0.4", "0.4"] },
      revenue_growth: "0.12",
      capex_pct_revenue: { values: ["0.03"] },
    },
    upside_drivers: {
      ebitda_margin: { values: ["0.40", "0.400"] },
      revenue_growth: { values: ["0.12", "0.12", "0.12"] },
      capex_pct_revenue: { values: ["0.03", "0.031"] },
    },
  });
  expect(cells(table, "base_drivers.ebitda_margin")?.[1]?.differs).toBe(false);
  expect(cells(table, "base_drivers.revenue_growth")?.[1]?.differs).toBe(false);
  expect(cells(table, "base_drivers.capex_pct_revenue")?.[1]?.differs).toBe(true);
});

it("compares non-numeric values as exact strings", () => {
  const table = driverTable({
    base_drivers: { dividends: { values: ["flat"] } },
    upside_drivers: { dividends: { values: ["Flat"] } },
    downside_drivers: { dividends: { values: ["flat"] } },
  });
  expect(cells(table, "base_drivers.dividends")?.map(({ differs }) => differs)).toEqual([
    false,
    true,
    false,
  ]);
});

it("marks a case-only driver as only this case states it, never as differing", () => {
  const table = driverTable({
    base_drivers: { revenue_growth: { values: ["0.1"] } },
    upside_drivers: { revenue_growth: { values: ["0.1"] }, dividends: { values: ["5"] } },
  });
  expect(cells(table, "upside_drivers.dividends")).toEqual([
    NOT,
    { text: "5", stated: true, differs: false, only: true },
  ]);
});

it("gives the shock its own column, and adds downside or upside columns only when they state something", () => {
  const table = driverTable(
    {
      base_drivers: { revenue_growth: { values: ["0.12"] } },
      downside_drivers: {},
      downside_shock: { ebitda_decline: "0.2", rate_increase: "0.0184" },
    },
    "Downside (EBITDA -20%)",
  );
  expect(table.cases.map(({ name }) => name)).toEqual(["Base case", "Downside (EBITDA -20%)"]);
  expect(cells(table, "base_drivers.revenue_growth")).toEqual([
    { text: "0.12", stated: true, differs: false, only: false },
    NOT,
  ]);
  expect(cells(table, "downside_shock.ebitda_decline")).toEqual([
    NOT,
    { text: "0.2", stated: true, differs: false, only: false },
  ]);
  expect(cells(table, "downside_shock.rate_increase")?.[1]?.text).toBe("0.0184");
});

it("keeps downside drivers and the shock as separate columns when both are stated", () => {
  const table = driverTable({
    base_drivers: { revenue_growth: { values: ["0.12", "0.12"] } },
    upside_drivers: { revenue_growth: { values: ["0.162", "0.162"] } },
    downside_drivers: { revenue_growth: { values: ["0", "0"] } },
    downside_shock: { ebitda_decline: "0.2" },
  });
  expect(table.cases.map(({ name, key }) => [key, name])).toEqual([
    ["base_drivers", "Base case"],
    ["upside_drivers", "Upside case"],
    ["downside_drivers", "Downside drivers"],
    ["downside_shock", "Downside case"],
  ]);
  expect(cells(table, "base_drivers.revenue_growth")?.map(({ text }) => text)).toEqual([
    "0.12 each year",
    "0.162 each year",
    "0 each year",
    "Not stated",
  ]);
  expect(cells(table, "downside_shock.ebitda_decline")?.map(({ text }) => text)).toEqual([
    "Not stated",
    "Not stated",
    "Not stated",
    "0.2",
  ]);
});

it("lists a shock key a case also states as two rows, each with its own value", () => {
  const table = driverTable({
    base_drivers: { ebitda_decline: { values: ["0.1"] } },
    downside_shock: { ebitda_decline: "0.2" },
  });
  expect(table.rows.map(({ id, cells: row }) => [id, row.map(({ text }) => text)])).toEqual([
    ["base_drivers.ebitda_decline", ["0.1", "Not stated"]],
    ["downside_shock.ebitda_decline", ["Not stated", "0.2"]],
  ]);
});

it("states the unit of monetary drivers from the currency and scale, and none for fractions", () => {
  const unitOf = (extra: Record<string, unknown>) =>
    driverTable({
      ...extra,
      base_drivers: { dividends: { values: ["1"] }, revenue_growth: { values: ["0.1"] } },
    }).rows.map(({ key, unit }) => [key, unit]);
  expect(unitOf({ currency: "USD", scale: 1 })).toEqual([
    ["dividends", "USD millions"],
    ["revenue_growth", "Fraction"],
  ]);
  expect(unitOf({ currency: "USD", scale: 1000 })[0]).toEqual(["dividends", "USD thousands"]);
  expect(unitOf({ currency: "EUR", scale: 1000000 })[0]).toEqual([
    "dividends",
    "EUR; scale 1000000",
  ]);
  expect(unitOf({})[0]).toEqual(["dividends", "currency not recorded"]);
  expect(unitOf({ currency: "USD" })[0]).toEqual(["dividends", "USD; scale not recorded"]);
});

it("tabulates the retained TransDigm inputs as recorded: upside dividends and flat downside sales differ", async () => {
  // Outdated evidence (TransDigm FY2024, as of 2024-09-30), used for shape only.
  const { readFileSync } = await import("node:fs");
  const path = await import("node:path");
  const block = readFileSync(
    path.join(
      import.meta.dirname,
      "../../../../../tests/fixtures/tdg_sol_high_2026_11_13/CP-2G-forecast-block.md",
    ),
    "utf8",
  );
  const json = /```json\n([\s\S]*?)\n```/u.exec(block)?.[1] ?? "{}";
  const table = driverTable(JSON.parse(json) as Record<string, unknown>);
  expect(table.years).toEqual(["2025", "2026", "2027"]);
  expect(table.cases.map(({ name }) => name)).toEqual([
    "Base case",
    "Upside case",
    "Downside drivers",
    "Downside case",
  ]);
  const row = (id: string) => cells(table, id)?.map(({ text, differs }) => [text, differs]);
  expect(row("base_drivers.revenue_growth")).toEqual([
    ["0.12 each year", false],
    ["0.162 each year", true],
    ["0 each year", true],
    ["Not stated", false],
  ]);
  expect(row("base_drivers.dividends")).toEqual([
    ["4348 · 2038 · 2038", false],
    ["4348 · 38 · 38", true],
    ["Not stated", false],
    ["Not stated", false],
  ]);
  expect(row("downside_shock.rate_increase")).toEqual([
    ["Not stated", false],
    ["Not stated", false],
    ["Not stated", false],
    ["0.0184", false],
  ]);
});
