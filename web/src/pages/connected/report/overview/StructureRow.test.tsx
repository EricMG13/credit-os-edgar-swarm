import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { StructureRow } from "./StructureRow";
import { entry, rowProps, section, table } from "./rows.fixture";

afterEach(cleanup);

const BASIS = ["Reporting unit", "Basis and limitation"];

function foundation(maturities: string[][], stack: string[][]) {
  return entry(
    "CP-1",
    [
      { title: "Debt maturities", table: 10, unit: "US$m", columns: [1] },
      {
        title: "Debt stack",
        table: 30,
        kind: "stack",
        label: 0,
        rank: 1,
        secured: 2,
        amount: 3,
        leverage: 4,
        unit: "US$m",
      },
    ],
    [
      section(
        "Chart data: debt maturities",
        9,
        table(10, ["Period", "Debt maturing", ...BASIS], maturities),
      ),
      section(
        "Chart data: debt stack",
        29,
        table(
          30,
          ["Facility", "Ranking", "Secured", "Amount", "Cumulative leverage", ...BASIS],
          stack,
        ),
      ),
    ],
  );
}

const STACK = [
  ["Senior notes", "2", "No", "800", "4.0", "US$m", "Unaudited."],
  ["Term loan", "1", "Yes", "1,200", "2.4", "US$m", "Unaudited."],
  [
    "Subordinated notes",
    "3",
    "No",
    "Not supplied: balance not stated",
    "Not supplied: no balance",
    "US$m",
    "Unaudited.",
  ],
];

const height = (element?: Element | null) => Number(element?.getAttribute("height"));
const left = (element?: Element | null) => Number(element?.getAttribute("x"));

it("draws each maturity bar in proportion to its amount and a stated gap as a gap, not a bar", () => {
  const { container } = render(
    <StructureRow
      {...rowProps([
        foundation(
          [
            ["FY2026", "500", "US$m", "Unaudited."],
            ["FY2027", "Not supplied: the schedule stops here", "US$m", "Unaudited."],
            ["FY2028", "1,250", "US$m", "Unaudited."],
          ],
          STACK,
        ),
      ])}
    />,
  );
  const wall = screen.getByRole("region", { name: "Maturity wall" });
  const near = wall.querySelector('[data-bar="FY2026"]');
  const far = wall.querySelector('[data-bar="FY2028"]');
  expect(height(far) / height(near)).toBeCloseTo(1250 / 500, 6);
  expect(wall.querySelector('[data-bar="FY2027"]')).toBeNull();
  expect(wall.querySelector('[data-gap="FY2027"]')).not.toBeNull();
  expect(within(wall).getByText("FY2027: the schedule stops here.")).toBeVisible();
  expect(within(wall).getByText("1,250")).toBeInTheDocument();
  expect(within(wall).getByText("Unaudited.")).toBeVisible();
  expect(within(wall).getByRole("img").getAttribute("aria-label")).toBe(
    "Debt maturing by period, US$m: FY2026 500, FY2027 not supplied, FY2028 1,250.",
  );
  expect(container.querySelector("[data-axis-break]")).toBeNull();
  expect(within(wall).getByRole("link", { name: "Source for the maturity wall" })).toHaveAttribute(
    "href",
    expect.stringContaining("/report/run#evidence/"),
  );
});

it("keeps a year the schedule has no row for on the axis, and sets an undated bucket after a break", () => {
  render(
    <StructureRow
      {...rowProps([
        foundation(
          [
            ["Thereafter", "900", "US$m", ""],
            ["FY2028", "300", "US$m", ""],
            ["FY2026", "600", "US$m", ""],
          ],
          STACK,
        ),
      ])}
    />,
  );
  const wall = screen.getByRole("region", { name: "Maturity wall" });
  expect(wall.querySelector('[data-gap="FY2027"]')).not.toBeNull();
  expect(within(wall).getByText("No row")).toBeInTheDocument();
  const [first, second, third] = ["FY2026", "FY2028", "Thereafter"].map((label) =>
    wall.querySelector(`[data-bar="${label}"]`),
  );
  // Two years apart is twice one slot; the undated bucket sits one slot and the break further on.
  const slot = (left(second) - left(first)) / 2;
  expect(left(third) - left(second)).toBeGreaterThan(slot + 30);
  expect(wall.querySelector("[data-axis-break]")).not.toBeNull();
});

it("stacks the debt in rank order with segment heights in proportion, and no segment for a missing balance", () => {
  render(<StructureRow {...rowProps([foundation([["FY2026", "500", "US$m", ""]], STACK)])} />);
  const tile = screen.getByRole("region", { name: "Capital structure by rank" });
  const loan = tile.querySelector('[data-segment="Term loan"]');
  const notes = tile.querySelector('[data-segment="Senior notes"]');
  // Each segment is drawn one pixel short, so the tile shows between them.
  expect((height(loan) + 1) / (height(notes) + 1)).toBeCloseTo(1200 / 800, 6);
  expect(Number(loan?.getAttribute("y"))).toBeLessThan(Number(notes?.getAttribute("y")));
  expect(tile.querySelector('[data-segment="Subordinated notes"]')).toBeNull();
  expect(tile.querySelector('[data-gap="Subordinated notes"]')).not.toBeNull();
  expect(within(tile).getByText("Not supplied: balance not stated")).toBeVisible();
  expect([...(tile.querySelector("ol")?.children ?? [])].map((item) => item.textContent)).toEqual([
    expect.stringContaining("Term loan"),
    expect.stringContaining("Senior notes"),
    expect.stringContaining("Subordinated notes"),
  ]);
  expect(within(tile).getByText("Secured · 2.4x cumulative leverage")).toBeVisible();
});

it("says why when the run has no financial foundation, and draws no figure", () => {
  render(<StructureRow {...rowProps([])} />);
  for (const name of ["Maturity wall", "Capital structure by rank"]) {
    const tile = screen.getByRole("region", { name });
    expect(within(tile).getByText("Financial foundation did not run in this run.")).toBeVisible();
    expect(within(tile).queryByRole("img")).toBeNull();
  }
});

it("draws the gap when no period states an amount", () => {
  render(
    <StructureRow
      {...rowProps([
        foundation(
          [["FY2026", "Not supplied: no schedule", "US$m", ""]],
          [["Term loan", "1", "Yes", "Not supplied: no balance", "", "US$m", ""]],
        ),
      ])}
    />,
  );
  expect(screen.getByText("The maturity schedule states no amount for any period.")).toBeVisible();
  expect(screen.getByText("The debt stack states no amount for any facility.")).toBeVisible();
  expect(screen.queryByRole("img")).toBeNull();
});
