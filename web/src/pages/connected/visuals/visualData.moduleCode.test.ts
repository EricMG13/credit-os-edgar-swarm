import { expect, it } from "vitest";
import { chartTable, type SourceTable } from "./visualData";

/** Module codes are not held back from the Basis and limitation cell (lead ruling L14): they are drawn as the module's name. */
const table = (limitation: string): SourceTable => ({
  line: 20,
  headers: ["Period", "Leverage", "Reporting unit", "Basis and limitation", "Source"],
  rows: [["FY2023", "3.75", "x", limitation, "annual.txt"]],
  evidenceInDrawer: true,
});

it.each([
  "Includes CP-backed liquidity lines of EUR 200 million.",
  "Commercial paper (CP-programme) excluded.",
])("draws commercial-paper prose beside the figures: %s", (limitation) => {
  expect(chartTable(table(limitation)).rows[0]?.cells.at(-1)).toBe(limitation);
});

it.each([
  ["Gross debt as CP-2A restated it", "Gross debt as Downside restated it"],
  ["Peer set per CP-1C.", "Peer set per Peer benchmark."],
])("draws the module code in %s as the module's name", (limitation, drawn) => {
  expect(chartTable(table(limitation)).rows[0]?.cells.at(-1)).toBe(drawn);
});

it("keeps the module code on the Evidence page, where every column is shown as published", () => {
  const limitation = "Gross debt as CP-2A restated it";
  expect(chartTable({ ...table(limitation), evidenceInDrawer: false }).rows[0]?.cells).toContain(
    limitation,
  );
});
