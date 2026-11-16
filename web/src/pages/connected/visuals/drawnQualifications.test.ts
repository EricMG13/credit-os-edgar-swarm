import { describe, expect, it } from "vitest";
import { chartsWithQualifications, drawnQualificationLines } from "./drawnQualifications";

const table = (line: number) => ({
  type: "table",
  headers: ["Period", "Amount"],
  line,
  rows: [{ line: line + 1, cells: ["FY2027", "10"] }],
});
const sections = [
  {
    heading: "Chart data: Leverage",
    blocks: [table(10), { type: "text", line: 14, end: 14, text: "A recorded limit." }],
  },
];

describe("chartsWithQualifications", () => {
  it("yields a chart or chart gap with a title, a drawable table and no gap reason", () => {
    const chart = { title: "Leverage", table: 10 };
    const noReason = { title: "Leverage", table: 10, gap: "" };
    const output = { charts: [chart], chartGaps: [noReason] };
    expect(chartsWithQualifications(output, sections)).toEqual([chart, noReason]);
  });

  it.each([
    ["no title", { table: 10 }],
    ["a table line that is not a positive integer", { title: "Leverage", table: 10.5 }],
    ["a table that is not published", { title: "Leverage", table: 99 }],
    ["a recorded gap reason", { title: "Leverage", table: 10, gap: "Not recorded." }],
  ])("yields nothing for a chart with %s", (_name, descriptor) => {
    expect(chartsWithQualifications({ charts: [descriptor] }, sections)).toEqual([]);
  });

  it("is the set whose text blocks drawnQualificationLines reports", () => {
    expect([
      ...drawnQualificationLines({ charts: [{ title: "Leverage", table: 10 }] }, sections),
    ]).toEqual([14]);
    expect(drawnQualificationLines({ charts: [{ table: 10 }] }, sections).size).toBe(0);
  });
});
