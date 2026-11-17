import { render, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LegacyVisuals } from ".";

/** A column written with decimal commas: `3,75` proves it, so `2,800` beside it is 2.8, not 2,800. */
const columns = (head: string[]) => [...head, "Reporting unit", "Basis and limitation"];
const basis = "Synthetic.";

function figure(title: string, chart: Record<string, unknown>, head: string[], rows: string[][]) {
  const { container } = render(
    <LegacyVisuals
      output={{ charts: [{ title, table: 20, ...chart }] }}
      sections={[
        {
          blocks: [
            {
              type: "table",
              line: 20,
              headers: columns(head),
              rows: rows.map((cells) => ({ cells: [...cells, basis] })),
            },
          ],
        },
      ]}
      evidenceHref={(line) => `#line-${String(line)}`}
    />,
  );
  return container.querySelector("figure");
}

function axisNumbers(root: Element) {
  return [...root.querySelectorAll("svg text")]
    .map((node) => node.textContent)
    .filter((text) => /^\d+(?:\.\d+)?$/.test(text))
    .map(Number);
}

function positions(root: Element, property: "left" | "width") {
  const found = [...root.querySelectorAll<HTMLElement>("[style]")].flatMap((node) => {
    const value = node.style.getPropertyValue(property);
    return value.endsWith("%") ? [Number.parseFloat(value)] : [];
  });
  return found.map((value) => Math.round(value * 100) / 100);
}

const AXIS_STAYS_SMALL = (root: Element) => {
  const numbers = axisNumbers(root);
  expect(numbers.length).toBeGreaterThan(1);
  expect(Math.max(...numbers)).toBeLessThan(10);
};

const cases = [
  {
    kind: "waterfall",
    chart: { kind: "waterfall", amount: 1, unit: "x" },
    head: ["Step", "Amount"],
    rows: [
      ["Opening", "3,75", "x"],
      ["Disposal", "0,25", "x"],
      ["Closing", "4,000", "x"],
    ],
    check: AXIS_STAYS_SMALL,
  },
  {
    kind: "grouped",
    chart: { kind: "grouped", label: 0, periods: [1, 3], prior: 2, current: 4, unit: "x" },
    head: ["Measure", "Prior period", "Prior", "Current period", "Current"],
    rows: [
      ["Total debt", "FY2023", "3,75", "FY2024", "2,800", "x"],
      ["Net debt", "FY2023", "3,00", "FY2024", "2,250", "x"],
    ],
    check: AXIS_STAYS_SMALL,
  },
  {
    kind: "dumbbell",
    chart: { kind: "dumbbell", label: 0, periods: [1, 3], prior: 2, current: 4, unit: "x" },
    head: ["Measure", "Prior period", "Prior", "Current period", "Current"],
    rows: [
      ["Total debt", "FY2023", "3,75", "FY2024", "2,800", "x"],
      ["Net debt", "FY2023", "3,00", "FY2024", "2,250", "x"],
    ],
    // The shared axis runs 2.25 to 3.75; the later total debt mark (2.8) sits at 36.67 per cent.
    check: (root: Element) => {
      expect(positions(root, "left")).toContain(36.67);
    },
  },
  {
    kind: "range",
    chart: { kind: "range", label: 0, issuer: 1, low: 2, median: 3, high: 4 },
    head: ["Measure", "Issuer", "Low", "Median", "High"],
    rows: [["Leverage", "3,75", "2,25", "3,00", "2,800", "x"]],
    // The axis runs 2.25 to 3.75; the range 2.25 to 2.8 is 36.67 per cent wide.
    check: (root: Element) => {
      expect(positions(root, "width")).toContain(36.67);
    },
  },
  {
    kind: "scatter",
    chart: { kind: "scatter", label: 0, date: 1, yield: 2, unit: "x" },
    head: ["Bond", "Maturity", "Yield"],
    rows: [
      ["Bond A", "2030-01-01", "3,75", "x"],
      ["Bond B", "2031-01-01", "2,800", "x"],
    ],
    check: AXIS_STAYS_SMALL,
  },
  {
    kind: "bullet",
    chart: { kind: "bullet", label: [0], current: 2, threshold: 1, direction: 3 },
    head: ["Test", "Threshold", "Current", "Direction"],
    rows: [["Leverage", "3,75", "2,800", "Maximum", "x"]],
    // The bar is 2.8 of an axis to the 3.75 threshold: 74.67 per cent.
    check: (root: Element) => {
      expect(positions(root, "width")).toContain(74.67);
    },
  },
  {
    kind: "recovery",
    chart: { kind: "recovery", label: 0, scenario: 1, recovery: 3, unit: "x" },
    head: ["Class", "Scenario", "Note", "Recovery"],
    rows: [
      ["Senior", "Base", "-", "3,75", "x"],
      ["Senior", "Stress", "-", "2,800", "x"],
    ],
    check: AXIS_STAYS_SMALL,
  },
];

describe("a column written with decimal commas, in every chart kind", () => {
  it.each(cases)("$kind draws 2,800 beside 3,75 as 2.8", ({ kind, chart, head, rows, check }) => {
    const drawn = figure(`Chart ${kind}`, chart, head, rows);
    expect(drawn).not.toBeNull();
    check(drawn as Element);
  });
});

/** Nothing in the columns proves a decimal comma (`3,750` can be thousands), so they stay as written. */
const controls = [
  {
    kind: "grouped",
    chart: cases[1]?.chart ?? {},
    head: cases[1]?.head ?? [],
    rows: [
      ["Total debt", "FY2023", "3,750", "FY2024", "2,800", "x"],
      ["Net debt", "FY2023", "3,100", "FY2024", "2,250", "x"],
    ],
    check: (root: Element) => {
      expect(within(root as HTMLElement).getAllByText(/^\d,000$/).length).toBeGreaterThan(0);
    },
  },
  {
    kind: "scatter",
    chart: cases[4]?.chart ?? {},
    head: cases[4]?.head ?? [],
    rows: [
      ["Bond A", "2030-01-01", "3,750", "x"],
      ["Bond B", "2031-01-01", "2,800", "x"],
    ],
    check: (root: Element) => {
      expect(Math.max(...axisNumbers(root))).toBeGreaterThan(1000);
    },
  },
  {
    kind: "recovery",
    chart: cases[6]?.chart ?? {},
    head: cases[6]?.head ?? [],
    rows: [
      ["Senior", "Base", "-", "3,750", "x"],
      ["Senior", "Stress", "-", "2,800", "x"],
    ],
    check: (root: Element) => {
      expect(within(root as HTMLElement).getAllByText(/^\d,000$/).length).toBeGreaterThan(0);
    },
  },
];

describe("columns with nothing that proves a decimal comma, in the chart kinds with an axis", () => {
  it.each(controls)(
    "$kind still reads 3,750 and 2,800 as thousands",
    ({ kind, chart, head, rows, check }) => {
      const drawn = figure(`Control ${kind}`, chart, head, rows);
      expect(drawn).not.toBeNull();
      check(drawn as Element);
    },
  );
});
