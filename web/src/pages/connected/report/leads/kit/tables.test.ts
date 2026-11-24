import { describe, expect, it } from "vitest";
import { cp1Entry } from "../fixtures/load";
import {
  lastTwoRows,
  periodColumns,
  rowLabelled,
  statementPair,
  tableUnder,
  tableWith,
} from "./tables";

const entry = cp1Entry();

describe("table lookup in the retained CP-1 handoff", () => {
  it("finds a table by its section heading, and by its headers when the heading is not stated", () => {
    expect(tableUnder(entry, "Net debt data")?.headers[0]).toBe("Period");
    expect(tableWith(entry, ["Facility", "Ranking", "Secured"])?.rows).toHaveLength(6);
  });
  it("returns null for an absent heading or for headers more than one table carries", () => {
    expect(tableUnder(entry, "Chart data: nothing")).toBeNull();
    expect(tableWith(entry, ["Reporting unit"])).toBeNull();
  });
  it("reads the period columns of a statement in either order and pairs a row", () => {
    const income = tableUnder(entry, "T4.4 Income statement");
    if (!income) throw new Error("fixture lost T4.4");
    expect(periodColumns(income)?.current.label).toBe("FY2024");
    expect(periodColumns(income)?.prior.label).toBe("FY2023");
    const pair = statementPair(income, "EBITDA (Reported)");
    expect(pair?.prior.cell).toMatchObject({ kind: "number", value: 3148 });
    expect(pair?.current.cell).toMatchObject({ kind: "number", value: 3813 });
  });
  it("finds nothing for a label that is absent", () => {
    const income = tableUnder(entry, "T4.4 Income statement");
    if (!income) throw new Error("fixture lost T4.4");
    expect(rowLabelled(income, "Nonexistent")).toBeNull();
  });
  it("takes the last two period rows of a chart table, earlier first", () => {
    const leverage = tableUnder(entry, "Chart data: leverage");
    const rows = leverage && lastTwoRows(leverage);
    expect(rows?.prior.cells[0]).toBe("FY2023 / 2023-09-30");
    expect(rows?.current.cells[1]).toBe("6.53");
  });
});

describe("lastTwoRows orders by date, not position", () => {
  const rows = (...labels: string[]) => ({
    type: "table" as const,
    line: 1,
    headers: ["Period", "Value"],
    rows: labels.map((label, at) => ({ line: 2 + at, cells: [label, String(at)] })),
  });
  it("takes the two latest years even when the table lists the later year first", () => {
    const pair = lastTwoRows(rows("FY2024 / 2024-09-30", "FY2023 / 2023-09-30"));
    expect(pair?.prior.cells[0]).toBe("FY2023 / 2023-09-30");
    expect(pair?.current.cells[0]).toBe("FY2024 / 2024-09-30");
  });
  it("takes the latest two of three periods in any order", () => {
    const pair = lastTwoRows(rows("FY2025", "FY2023", "FY2024"));
    expect([pair?.prior.cells[0], pair?.current.cells[0]]).toEqual(["FY2024", "FY2025"]);
  });
  it("refuses periods that are not both of one kind or have no year", () => {
    expect(lastTwoRows(rows("FY2024", "LTM 2023"))).toBeNull();
    expect(lastTwoRows(rows("Current", "Prior"))).toBeNull();
    expect(lastTwoRows(rows("FY2024", "FY2024"))).toBeNull();
  });
});
