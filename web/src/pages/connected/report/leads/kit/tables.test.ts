// Expected values are written by hand from the retained TransDigm FY2024 CP-1 handoff
// (tests/fixtures/live_2026_11_15/earnings_update-CP-1-draft3-accepted.md) and from the inputs
// built here; none is computed by the code under test.
import { describe, expect, it } from "vitest";
import type { Table } from "../../../publishedReport";
import { cp1Entry } from "../fixtures/load";
import {
  comparisonOf,
  normalLabel,
  orderByPeriod,
  periodColumns,
  periodOf,
  periodRows,
  rowLabelled,
  rowStarting,
  statementColumns,
  tableName,
  tableUnder,
  tableWith,
  unionPeriods,
} from "./tables";

const entry = cp1Entry();

const rows = (...labels: string[]): Table => ({
  type: "table",
  line: 1,
  headers: ["Period", "Value"],
  rows: labels.map((label, at) => ({ line: 2 + at, cells: [label, String(at)] })),
});
const columns = (...headers: string[]): Table => ({
  type: "table",
  line: 1,
  headers: ["Line item", ...headers, "Unit", "Basis", "Source"],
  rows: [],
});
const labelsOf = (read: ReturnType<typeof periodRows>) =>
  "reason" in read ? read.reason : read.periods.map(({ period }) => period.label);

describe("table lookup in the retained CP-1 handoff", () => {
  it("finds a table by its section heading, and by its headers when the heading is not stated", () => {
    expect(tableUnder(entry, "Net debt data")?.headers[0]).toBe("Period");
    expect(tableWith(entry, ["Facility", "Ranking", "Secured"])?.rows).toHaveLength(6);
  });
  it("returns null for an absent heading or for headers more than one table carries", () => {
    expect(tableUnder(entry, "Chart data: nothing")).toBeNull();
    expect(tableWith(entry, ["Reporting unit"])).toBeNull();
  });
  it("reads the two period columns of a statement for the earnings delta, in either order", () => {
    const income = tableUnder(entry, "T4.4 Income statement");
    if (!income) throw new Error("fixture lost T4.4");
    expect(periodColumns(income)?.current.label).toBe("FY2024");
    expect(periodColumns(income)?.prior.label).toBe("FY2023");
    expect(rowLabelled(income, "Nonexistent")).toBeNull();
  });
});

describe("periodOf", () => {
  it("reads the label as written, its year, its form and its kind", () => {
    expect(periodOf("FY2024 / 2024-09-30")).toEqual({
      label: "FY2024",
      year: 2024,
      form: "FY",
      kind: "annual",
    });
    expect(periodOf("2024")).toMatchObject({ label: "2024", form: "", kind: "annual" });
    expect(periodOf("CY2023")).toMatchObject({ form: "CY", kind: "annual" });
    expect(periodOf("LTM Dec-2024")).toEqual({
      label: "LTM Dec-2024",
      year: 2024,
      form: "LTMDEC",
      kind: "other",
    });
    expect(periodOf("Q3 2025")).toMatchObject({ year: 2025, form: "Q3", kind: "other" });
    expect(periodOf("2025-06-30")).toMatchObject({ year: 2025, kind: "other" });
  });
  it("names no period for a label with no year", () => {
    expect(periodOf("Thereafter")).toBeNull();
    expect(periodOf("Current")).toBeNull();
    expect(periodOf("")).toBeNull();
  });
});

describe("period rows: every stated period, ordered by year, never by position", () => {
  it("keeps a single period: one is a valid shape", () => {
    expect(labelsOf(periodRows(rows("FY2024 / 2024-09-30")))).toEqual(["FY2024"]);
  });
  it("orders two or three periods by year whatever the handoff's row order", () => {
    expect(labelsOf(periodRows(rows("FY2024 / 2024-09-30", "FY2023 / 2023-09-30")))).toEqual([
      "FY2023",
      "FY2024",
    ]);
    expect(labelsOf(periodRows(rows("FY2024", "FY2022", "FY2023")))).toEqual([
      "FY2022",
      "FY2023",
      "FY2024",
    ]);
  });
  it("lists an LTM period beside the annual ones as its own kind, never collapsed", () => {
    const read = periodRows(rows("FY2023", "LTM Dec-2024", "FY2024"));
    expect(labelsOf(read)).toEqual(["FY2023", "LTM Dec-2024", "FY2024"]);
    if ("reason" in read) throw new Error("unreadable");
    expect(read.periods.map(({ period }) => period.kind)).toEqual(["annual", "other", "annual"]);
  });
  it("orders interim dates of one year by the date", () => {
    expect(labelsOf(periodRows(rows("2025-06-30", "2025-03-31", "FY2024 / 2024-09-30")))).toEqual([
      "FY2024",
      "2025-03-31",
      "2025-06-30",
    ]);
  });
  it("makes a repeated year or an undated label a stated gap with the reason", () => {
    expect(labelsOf(periodRows(rows("FY2024", "FY2024 / 2024-09-30")))).toBe(
      "FY2024 appears more than once",
    );
    expect(labelsOf(periodRows(rows("FY2024", "Current")))).toBe("a period has no year: Current");
    expect(labelsOf(periodRows(rows()))).toBe("it has no rows");
  });
  it("does not call two different kinds in one year a repeat", () => {
    expect(labelsOf(periodRows(rows("FY2024", "LTM Dec-2024")))).toEqual([
      "FY2024",
      "LTM Dec-2024",
    ]);
  });
});

describe("statement columns", () => {
  it("reads one, two or three period columns in year order", () => {
    const labels = (table: Table) => {
      const read = statementColumns(table);
      return "reason" in read
        ? read.reason
        : read.periods.map(({ period, item }) => [period.label, item]);
    };
    expect(labels(columns("FY2024"))).toEqual([["FY2024", 1]]);
    expect(labels(columns("FY2024", "FY2023"))).toEqual([
      ["FY2023", 2],
      ["FY2024", 1],
    ]);
    expect(labels(columns("FY2024", "FY2023", "FY2022"))).toEqual([
      ["FY2022", 3],
      ["FY2023", 2],
      ["FY2024", 1],
    ]);
    expect(labels(columns())).toBe("it has no column named for a period");
    expect(labels(columns("FY2024", "FY2024"))).toBe("FY2024 appears more than once");
  });
});

describe("unionPeriods and comparisonOf", () => {
  const p = (label: string) => {
    const period = periodOf(label);
    if (!period) throw new Error(label);
    return period;
  };
  it("lists each period once, by year", () => {
    expect(unionPeriods([[p("FY2024")], [p("FY2023"), p("FY2024")]]).map((x) => x.label)).toEqual([
      "FY2023",
      "FY2024",
    ]);
  });
  it("compares the latest two annual periods, beside an LTM period", () => {
    expect(comparisonOf([p("FY2023"), p("FY2024"), p("LTM Dec-2024")])).toEqual({
      from: "FY2023",
      to: "FY2024",
    });
    expect(comparisonOf([p("FY2022"), p("FY2023"), p("FY2024")])).toEqual({
      from: "FY2023",
      to: "FY2024",
    });
  });
  it("draws no comparison with one period or with two of different kinds", () => {
    expect(comparisonOf([p("FY2024")])).toBeNull();
    expect(comparisonOf([])).toBeNull();
    expect(comparisonOf([p("FY2024"), p("LTM Dec-2024")])).toBeNull();
    expect(comparisonOf([p("Q3 2024"), p("Q3 2025")])).toEqual({ from: "Q3 2024", to: "Q3 2025" });
  });
});

describe("rowStarting: the contract's label forms, one match required", () => {
  const statement: Table = {
    type: "table",
    line: 1,
    headers: ["Line item", "FY2024"],
    rows: [
      "Cash taxes paid, net of refunds",
      "Cash taxes paidout",
      "Free cash flow, levered after working capital",
      "Unlevered free cash flow",
      "Dividends and dividend equivalent payments",
      "Dividends received",
    ].map((label, at) => ({ line: 2 + at, cells: [label, "1"] })),
  };
  it("matches a label that begins with the words, case and punctuation aside", () => {
    expect(normalLabel("Cash taxes paid, net of refunds")).toBe("cash taxes paid net of refunds");
    const taxes = rowStarting(statement, ["Cash Taxes Paid"]);
    expect(typeof taxes === "string" ? taxes : taxes.cells[0]).toBe(
      "Cash taxes paid, net of refunds",
    );
    const fcf = rowStarting(statement, ["Levered free cash flow", "Free cash flow levered"]);
    expect(typeof fcf === "string" ? fcf : fcf.cells[0]).toBe(
      "Free cash flow, levered after working capital",
    );
  });
  it("refuses no match and several matches", () => {
    expect(rowStarting(statement, ["Capital expenditures"])).toBe("none");
    expect(rowStarting(statement, ["Dividends"])).toBe("several");
  });
});

describe("tableName", () => {
  it("drops the register id and the chart prefix", () => {
    expect(tableName("T4.5 Cash flow statement")).toBe("Cash flow statement");
    expect(tableName("Chart data: revenue and EBITDA")).toBe("Revenue and EBITDA");
    expect(tableName("Net debt data")).toBe("Net debt data");
  });
});

describe("orderByPeriod keeps the item with its period", () => {
  it("carries any item", () => {
    const read = orderByPeriod([
      { cell: "FY2024", item: "b" },
      { cell: "FY2023", item: "a" },
    ]);
    expect("reason" in read ? read.reason : read.periods.map(({ item }) => item)).toEqual([
      "a",
      "b",
    ]);
  });
});
