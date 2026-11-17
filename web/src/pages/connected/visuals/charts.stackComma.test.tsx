import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { LegacyVisuals } from ".";

/**
 * R2-003: a debt stack reads its amount column (one measure in one unit) as one scope, as every
 * other chart kind does, so "3,75" beside "2,800" proves the decimal comma for the whole column.
 */
const stackChart = { kind: "stack", label: 0, amount: 1, unit: "x" };

function drawn(amounts: string[], unit = "x") {
  const { container } = render(
    <LegacyVisuals
      output={{ charts: [{ title: "Debt stack", table: 20, ...stackChart, unit }] }}
      sections={[
        {
          blocks: [
            {
              type: "table",
              line: 20,
              headers: ["Facility", "Amount", "Reporting unit", "Basis and limitation"],
              rows: amounts.map((amount, i) => ({
                cells: [`Facility ${String(i + 1)}`, amount, unit, "Synthetic."],
              })),
            },
          ],
        },
      ]}
    />,
  );
  const figure = container.querySelector("figure");
  expect(figure).not.toBeNull();
  const segments = [...(figure as Element).querySelectorAll<SVGElement>("[data-segment]")];
  const widths = segments.map((s) => Number(s.dataset.width));
  const total = widths.reduce((sum, width) => sum + width, 0);
  return {
    parts: segments.map((s) => s.getAttribute("data-part")),
    shares: widths.map((width) => Math.round((width / total) * 10000) / 10000),
    legend: [...(figure as Element).querySelectorAll("li")].map((li) => [
      li.querySelector("svg") !== null,
      li.textContent,
    ]),
  };
}

const share = (values: number[]) => {
  const total = values.reduce((sum, value) => sum + value, 0);
  return values.map((value) => Math.round((value / total) * 10000) / 10000);
};

it("draws 3,75 beside 2,800 in one column as 3.75 and 2.80", () => {
  expect(drawn(["3,75", "2,800"]).shares).toEqual(share([3.75, 2.8]));
});

it("keeps 1,250 beside 2,800 as 1250 and 2800 when no cell proves a decimal comma", () => {
  expect(drawn(["1,250", "2,800"], "US$m").shares).toEqual(share([1250, 2800]));
});

it("does not flip a column holding English grouping (1,250,000 beside 3,75 and 2,800)", () => {
  // 3,75 reads as itself, 3.75; 2,800 stays a thousands group, 2800, beside 1,250,000.
  const { parts, shares } = drawn(["1,250,000", "3,75", "2,800"], "US$m");
  expect(parts).toEqual(["Facility 1", "Facility 2", "Facility 3"]);
  expect(shares).toEqual(share([1250000, 3.75, 2800]));
});

it("keeps a zero and an unstated balance as legend rows with no segment", () => {
  const { parts, shares, legend } = drawn([
    "3,75",
    "0",
    "Not supplied: balance not stated",
    "2,800",
  ]);
  expect(parts).toEqual(["Facility 1", "Facility 4"]);
  expect(shares).toEqual(share([3.75, 2.8]));
  expect(legend).toEqual([
    [true, "Facility 13,75"],
    [false, "Facility 20"],
    [false, "Facility 3Not supplied: balance not stated"],
    [true, "Facility 42,800"],
  ]);
});
