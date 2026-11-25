import { expect, it } from "vitest";
import { textWidth } from "./chartText";
import { pathLayout } from "./pathLayout";
import { PATH } from "./stressData";

it("leaves out a period label that would print over a neighbour, keeping the first and the latest", () => {
  const periods = ["FY2025E", "FY2026E", "FY2027E"].map((period, at) => ({
    period,
    x: PATH.left + ((PATH.right - PATH.left) * at) / 2,
  }));
  const layout = pathLayout({ ticks: [], periods, lines: [] }, 150);
  const shown = layout.periods.filter((period) => period.label !== null);
  expect(shown.map(({ period }) => period)).toContain("FY2025E");
  expect(shown.map(({ period }) => period)).toContain("FY2027E");
  for (const [a, b] of shown.slice(1).map((item, at) => [shown[at], item] as const)) {
    const gap = (b.label ?? 0) - (a?.label ?? 0);
    expect(gap).toBeGreaterThanOrEqual(textWidth(b.period, "body"));
  }
  const wide = pathLayout({ ticks: [], periods, lines: [] }, 600);
  expect(wide.periods.every((period) => period.label !== null)).toBe(true);
});
