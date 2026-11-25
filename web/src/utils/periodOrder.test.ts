import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { comparePeriodKeys, orderPeriods, parsePeriod, periodKey } from "./periodOrder";

// The hand-written table shared with tests/test_period_order.py. Expected values come from it
// or from literals here, never from periodOrder.ts.
type LabelCase = {
  label: string;
  class: string;
  end: [number, number, number] | null;
  span: string | null;
};
type OrderCase = { name: string; input: string[]; ordered: string[]; gaps: string[] };

const cases = JSON.parse(
  readFileSync(
    path.join(import.meta.dirname, "../../../tests/fixtures/period-order-cases.json"),
    "utf8",
  ),
) as { labels: LabelCase[]; unparseable: string[]; orders: OrderCase[] };

const self = (label: string) => label;

it("reads every kind of case from the shared table", () => {
  expect(cases.labels).toHaveLength(47);
  expect(cases.unparseable).toHaveLength(10);
  expect(cases.orders).toHaveLength(10);
});

describe("parsePeriod", () => {
  it.each(cases.labels)("reads $label as its class, end and span", (c) => {
    const parsed = parsePeriod(c.label);
    expect(parsed).not.toBeNull();
    expect(parsed?.periodClass).toBe(c.class);
    expect(parsed?.end).toEqual(c.end);
    expect(parsed?.span).toBe(c.span);
    expect(periodKey(c.label)).not.toBeNull();
  });

  it.each(cases.unparseable.map((label) => ({ label })))(
    "finds no period in '$label'",
    ({ label }) => {
      expect(parsePeriod(label)).toBeNull();
      expect(periodKey(label)).toBeNull();
    },
  );

  it("remembers a prior year-to-date label", () => {
    expect(parsePeriod("PYTD")).toEqual({
      periodClass: "ytd",
      end: null,
      span: null,
      priorYtd: true,
    });
    expect(parsePeriod("FY2024")).toEqual({
      periodClass: "actual",
      end: [2024, 12, 31],
      span: "year",
      priorYtd: false,
    });
  });
});

describe("orderPeriods", () => {
  it.each(cases.orders)("$name", (c) => {
    const { ordered, gaps } = orderPeriods(c.input, self);
    expect(ordered).toEqual(c.ordered);
    expect(gaps).toEqual(c.gaps);
  });

  it("puts LTM and PF after fiscal years, oldest first", () => {
    const labels = [
      "PF FY2023",
      "LTM Jun 2024",
      "FY2025",
      "PF",
      "LTM Dec 2023",
      "FY2023",
      "FY2024",
    ];
    expect(orderPeriods(labels, self)).toEqual({
      ordered: ["FY2023", "FY2024", "FY2025", "LTM Dec 2023", "LTM Jun 2024", "PF FY2023", "PF"],
      gaps: [],
    });
  });

  it("puts a dated PYTD before a dated YTD on the same end", () => {
    expect(orderPeriods(["YTD Sep 2025", "PYTD Sep 2025"], self).ordered).toEqual([
      "PYTD Sep 2025",
      "YTD Sep 2025",
    ]);
  });

  it("orders items by the label the caller reads from them", () => {
    const rows = [
      { period: "LTM", v: 1 },
      { period: "?", v: 2 },
      { period: "FY2024", v: 3 },
    ];
    const { ordered, gaps } = orderPeriods(rows, (row) => row.period);
    expect(ordered.map((row) => row.v)).toEqual([3, 1, 2]);
    expect(gaps.map((row) => row.v)).toEqual([2]);
  });
});

describe("comparePeriodKeys", () => {
  const key = (label: string) => {
    const found = periodKey(label);
    if (found === null) throw new Error(`no key for ${label}`);
    return found;
  };

  it("is negative, zero or positive as the first key sorts before, with or after the second", () => {
    expect(comparePeriodKeys(key("FY2023"), key("FY2024"))).toBeLessThan(0);
    expect(comparePeriodKeys(key("FY2025E"), key("LTM"))).toBeGreaterThan(0);
    expect(comparePeriodKeys(key("FY 2024"), key("FY2024"))).toBe(0);
    expect(comparePeriodKeys(key("Q4 2024"), key("FY2024"))).toBeLessThan(0);
  });
});
