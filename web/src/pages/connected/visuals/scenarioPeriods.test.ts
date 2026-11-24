import { expect, it } from "vitest";
import { analyzeScenarioPeriods } from "./scenarioPeriods";

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
