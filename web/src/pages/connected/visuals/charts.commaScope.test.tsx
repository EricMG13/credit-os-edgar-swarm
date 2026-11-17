import { render, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LegacyVisuals } from ".";

/**
 * A decimal comma proves itself only for cells that state the same measure in the same unit: a
 * bullet or range row, one period series, a waterfall's bridge. One measure's `3,75` never changes
 * how another measure's `1,250` is read, and a scope that also holds English grouping is not flipped.
 */
const columns = (head: string[]) => [...head, "Reporting unit", "Basis and limitation"];

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
              rows: rows.map((cells) => ({ cells: [...cells, "Synthetic."] })),
            },
          ],
        },
      ]}
      evidenceHref={(line) => `#line-${String(line)}`}
    />,
  );
  return container.querySelector("figure");
}

function positions(root: Element, property: "left" | "width") {
  return [...root.querySelectorAll<HTMLElement>("[style]")].flatMap((node) => {
    const value = node.style.getPropertyValue(property);
    return value.endsWith("%") ? [Math.round(Number.parseFloat(value) * 100) / 100] : [];
  });
}

function barWidths(root: Element) {
  return [...root.querySelectorAll<HTMLElement>("[data-width]")].map(
    (node) => Math.round(Number(node.dataset.width) * 100) / 100,
  );
}

const bulletChart = { kind: "bullet", label: [0], current: 2, threshold: 1, direction: 3 };
const bulletHead = ["Test", "Threshold", "Current", "Direction"];

describe("a decimal comma in one bullet row", () => {
  it("does not change how another row in another unit is read (4,2 x beside 1,250 US$m)", () => {
    const drawn = figure("Covenants", bulletChart, bulletHead, [
      ["Net leverage", "5.0", "4,2", "Maximum", "x"],
      ["Interest cover", "2.0", "2.6", "Minimum", "x"],
      ["Minimum liquidity", "500", "1,250", "Minimum", "US$m"],
    ]);
    expect(drawn).not.toBeNull();
    // 4.2 of 5.0 is 84 per cent; 2.6 and 1,250 exceed their thresholds and fill their axes.
    expect(barWidths(drawn as Element)).toEqual([84, 100, 100]);
  });

  it("does not carry evidence in the Threshold column to another row (4,50 beside 1,250)", () => {
    const drawn = figure("Covenants", bulletChart, bulletHead, [
      ["Net leverage", "4,50", "3.75", "Maximum", "x"],
      ["Minimum liquidity", "500", "1,250", "Minimum", "US$m"],
    ]);
    expect(drawn).not.toBeNull();
    expect(barWidths(drawn as Element)).toEqual([83.33, 100]);
  });

  it("still reads 2,800 beside 3,75 in its own row as 2.8", () => {
    const drawn = figure("Covenants", bulletChart, bulletHead, [
      ["Leverage", "3,75", "2,800", "Maximum", "x"],
    ]);
    expect(barWidths(drawn as Element)).toEqual([74.67]);
  });
});

describe("a decimal comma in one range row", () => {
  it("does not change how a EUR million row is read, so both rows are drawn", () => {
    const drawn = figure(
      "Peers",
      { kind: "range", label: 0, issuer: 1, low: 2, median: 3, high: 4 },
      ["Measure", "Issuer", "Low", "Median", "High"],
      [
        ["Leverage", "3,75", "2,25", "3.00", "4.50", "x"],
        ["Liquidity", "1,250", "900", "1,100", "1,500", "EUR million"],
      ],
    );
    expect(drawn).not.toBeNull();
    const root = drawn as Element;
    // Each row's range fills its own axis; the issuer sits at 66.67 (3.75 of 2.25 to 4.50) and at
    // 58.33 (1,250 of 900 to 1,500) per cent.
    expect(positions(root, "width").filter((width) => width === 100)).toHaveLength(2);
    expect(positions(root, "left")).toEqual(expect.arrayContaining([66.67, 58.33]));
  });
});

describe("a decimal comma in one period series", () => {
  it("does not change how another measure is read (Revenue 1,250 beside Adjusted EBITDA 312,5)", () => {
    const drawn = figure(
      "Revenue and EBITDA",
      { columns: [1, 2], unit: "EUR million" },
      ["Period", "Revenue", "Adjusted EBITDA"],
      [
        ["FY2023", "1,250", "312,5", "EUR million"],
        ["FY2024", "1,310", "330,1", "EUR million"],
      ],
    );
    expect(drawn).not.toBeNull();
    // The axis runs to 1,500 for Revenue at 1,250 and 1,310, not to 400 with Revenue at 1.25.
    expect(within(drawn as HTMLElement).getByText("1,500")).toBeInTheDocument();
  });

  it("does not read the Net debt series as decimal commas because the Total debt series is", () => {
    const drawn = figure(
      "Debt",
      { columns: [1, 2], unit: "x" },
      ["Period", "Total debt", "Net debt"],
      [
        ["FY2023", "3,75", "3,000", "x"],
        ["FY2024", "2,800", "2,250", "x"],
      ],
    );
    expect(drawn).not.toBeNull();
    // The axis runs in thousands for Net debt at 3,000 and 2,250; no data label reads 1,000.
    expect(within(drawn as HTMLElement).getAllByText("1,000").length).toBeGreaterThan(0);
  });
});

describe("a scope that also holds English grouping", () => {
  it("is not flipped: 1,250 beside 3,75 and 2,800.5 stays 1,250 and the bridge sums", () => {
    // Read cell by cell: 2,800.5 + 1,250 + 3,75 = 4,054.25. Flipped, 1,250 would be 1.25 and the
    // bridge would not sum, so the chart would not be drawn.
    const drawn = figure(
      "Bridge",
      { kind: "waterfall", amount: 1, unit: "EUR million" },
      ["Step", "Amount"],
      [
        ["Opening", "2,800.5", "EUR million"],
        ["Acquisition", "1,250", "EUR million"],
        ["Other", "3,75", "EUR million"],
        ["Closing", "4,054.25", "EUR million"],
      ],
    );
    expect(drawn).not.toBeNull();
  });

  it("is not flipped by two or more comma groups either (1,250,000 beside 3,75)", () => {
    const drawn = figure(
      "Bridge",
      { kind: "waterfall", amount: 1, unit: "EUR" },
      ["Step", "Amount"],
      [
        ["Opening", "1,250,000", "EUR"],
        ["Acquisition", "1,250", "EUR"],
        ["Other", "3,75", "EUR"],
        ["Closing", "1,251,253.75", "EUR"],
      ],
    );
    expect(drawn).not.toBeNull();
  });
});
