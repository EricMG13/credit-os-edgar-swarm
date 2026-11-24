import { expect, it } from "vitest";
import { analyzeScenarioPeriods, scenarioGroupLabels } from "./scenarioPeriods";

it("retains a unique scenario observation when another scenario duplicates that period", () => {
  const result = analyzeScenarioPeriods([
    { period: "FY2027E", group: "Base case", start: "2026-04-01", end: "2027-03-31" },
    { period: "FY2027E", group: "Downside case", start: "2026-04-01", end: "2027-03-31" },
    { period: "FY2027E", group: "Downside case", start: "2026-10-01", end: "2027-03-31" },
  ]);

  expect(result.periods).toEqual([]);
  expect(result.ambiguousPeriods).toEqual(["FY2027E"]);
  expect(result.uniqueObservations).toMatchObject([{ group: "Base case", period: "FY2027E" }]);
});

it("keeps a period that only one of several cases publishes", () => {
  const result = analyzeScenarioPeriods([
    ...["FY2026E", "FY2027E", "FY2028E", "FY2029E", "FY2030E"].map((period) => ({
      period,
      group: "Base case",
    })),
    ...["FY2026E", "FY2027E", "FY2028E"].map((period) => ({ period, group: "Downside case" })),
  ]);

  expect(result.periods.map(({ period }) => period)).toEqual([
    "FY2026E",
    "FY2027E",
    "FY2028E",
    "FY2029E",
    "FY2030E",
  ]);
  expect(result.periods.map(({ groups }) => groups.length)).toEqual([2, 2, 2, 1, 1]);
  expect(result.basisGap).toBe(false);
});

it("excludes a single-case period whose own dates are invalid and says so", () => {
  const result = analyzeScenarioPeriods([
    { period: "FY2026E", group: "Base case", start: "2026-01-01", end: "2026-12-31" },
    { period: "FY2026E", group: "Downside case", start: "2026-01-01", end: "2026-12-31" },
    { period: "FY2027E", group: "Base case", start: "2027-13-01", end: "2027-12-31" },
    { period: "FY2028E", group: "Base case", start: "2028-01-01", end: "2028-12-31" },
  ]);

  expect(result.periods.map(({ period }) => period)).toEqual(["FY2026E", "FY2028E"]);
  expect(result.basisGap).toBe(true);
});

it("still excludes incompatible date bases with a gap, and has no comparison for one case", () => {
  const mismatch = analyzeScenarioPeriods([
    { period: "FY2026E", group: "Base case", start: "2026-01-01", end: "2026-12-31" },
    { period: "FY2026E", group: "Downside case", start: "2026-07-01", end: "2026-12-31" },
  ]);
  expect(mismatch.periods).toEqual([]);
  expect(mismatch.basisGap).toBe(true);

  const single = analyzeScenarioPeriods([
    { period: "FY2026E", group: "Base case" },
    { period: "FY2027E", group: "Base case" },
  ]);
  expect(single.periods).toEqual([]);
  expect(single.basisGap).toBe(false);
});

it("disambiguates colliding labels with the supplied reader suffix, never the raw group", () => {
  const names = scenarioGroupLabels(
    ["Base", "raw-1", "raw-2"],
    (group) => (group === "Base" ? "Base case" : "Stress"),
    (group) => (group === "raw-1" ? "first" : "second"),
  );
  expect([...names]).toEqual([
    ["Base", "Base case"],
    ["raw-1", "Stress · first"],
    ["raw-2", "Stress · second"],
  ]);
});

it("falls back to a neutral ordinal when cleaned suffixes collide or are empty", () => {
  const same = scenarioGroupLabels(
    ["raw-1", "raw-2", "raw-3"],
    () => "Stress",
    () => "drivers",
  );
  expect([...same.values()]).toEqual(["Stress · drivers", "Stress (2)", "Stress (3)"]);
  const empty = scenarioGroupLabels(
    ["raw-1", "raw-2"],
    () => "Stress",
    () => "",
  );
  expect([...empty.values()]).toEqual(["Stress", "Stress (2)"]);
});
