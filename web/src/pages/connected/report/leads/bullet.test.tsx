import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { headroomTests } from "../overview/stressData";
import { bulletTable, Bullets } from "./bullet";

afterEach(cleanup);

const HEAD = [
  "Test",
  "Threshold",
  "Current",
  "Headroom",
  "Direction",
  "Reporting unit",
  "Basis and limitation",
];
const source = (line: number, headers: string[], rows: string[][]) => ({
  line,
  headers,
  rows,
  rowLines: rows.map((_, at) => line + 2 + at),
});
const ROLES = { kind: "bullet", label: [0], threshold: 1, current: 2, headroom: 3, direction: 4 };

// The synthetic proof handoff's covenant table (proof/handoffs/CP-4.md); no real CP-4 drew one.
const TESTS = headroomTests(
  source(40, HEAD, [
    ["Net leverage", "5.0", "4.2", "0.8x", "Passes at or below", "x", "Synthetic."],
    ["Interest cover", "2.0", "2.6", "0.6x", "Passes at or above", "x", "Synthetic."],
    [
      "Minimum liquidity",
      "100",
      "Not supplied: not stated",
      "Not supplied: no current",
      "Passes at or above",
      "US$m",
      "Synthetic.",
    ],
  ]),
  ROLES,
);
if (!TESTS) throw new Error("fixture tests");

it("draws each test on its own scale from zero, current against threshold, as written", () => {
  render(
    <Bullets label="Covenant tests" tests={TESTS} href={(at) => `#evidence/run/${String(at)}`} />,
  );
  const list = screen.getByRole("list", { name: "Covenant tests" });
  const [leverage, cover, liquidity] = within(list).getAllByRole("listitem");
  if (!leverage || !cover || !liquidity) throw new Error("three rows");
  expect(within(leverage).getByRole("img")).toHaveAccessibleName(
    "Net leverage: 4.2x against a threshold of 5.0x, headroom 0.8x. Passes at or below.",
  );
  expect(within(leverage).getByText("4.2x")).toBeVisible();
  expect(within(leverage).getByText("/ 5.0x")).toBeVisible();
  expect(within(leverage).getByText("Headroom 0.8x")).toBeVisible();
  expect(within(leverage).getByText("Passes at or below")).toBeVisible();
  expect(within(cover).getByRole("img")).toHaveAccessibleName(/2\.6x against a threshold of 2\.0x/);
  // Each row's scale is its own: the top tick of 4.2 against 5 is 5, of 2.6 against 2 is 3.
  expect(within(leverage).getByText("5x")).toBeInTheDocument();
  expect(within(cover).getByText("3x")).toBeInTheDocument();
  expect(within(leverage).getByRole("link", { name: /Source for Net leverage/ })).toHaveAttribute(
    "href",
    "#evidence/run/0",
  );
});

it("draws a gap row as Not supplied with its reason, no bar and never zero", () => {
  render(
    <Bullets label="Covenant tests" tests={TESTS} href={(at) => `#evidence/run/${String(at)}`} />,
  );
  const liquidity = screen.getAllByRole("listitem")[2];
  if (!liquidity) throw new Error("gap row");
  expect(within(liquidity).getByText("Not supplied")).toBeVisible();
  expect(within(liquidity).getByText("Not stated")).toBeVisible();
  expect(within(liquidity).queryByRole("img")).toBeNull();
  expect(within(liquidity).queryByText(/^0/)).toBeNull();
  expect(within(liquidity).queryByText(/Headroom/)).toBeNull();
});

it("gives the table view every cell as written, a gap as written, and one trace per row", () => {
  const view = bulletTable(TESTS, (at) => `#evidence/run/${String(at)}`);
  expect(view.head).toEqual(["Test", "Current", "Threshold", "Headroom", "Direction"]);
  expect(view.rows.map((row) => [row.label, ...row.cells])).toEqual([
    ["Net leverage", "4.2", "5.0", "0.8x", "Passes at or below"],
    ["Interest cover", "2.6", "2.0", "0.6x", "Passes at or above"],
    ["Minimum liquidity", "Not supplied: not stated", "100", null, "Passes at or above"],
  ]);
  expect(view.endHeading).toBe("Source");
});

it("shows stated figures that cannot be placed from zero as written, with no bar", () => {
  const [test] =
    headroomTests(
      source(40, HEAD, [
        ["Net worth", "100", "-20", "Not supplied: negative", "Passes above", "US$m", "Synthetic."],
      ]),
      ROLES,
    ) ?? [];
  if (!test) throw new Error("one test");
  render(<Bullets label="Covenant tests" tests={[test]} />);
  const item = screen.getByRole("listitem");
  expect(within(item).getByText("-US$20m")).toBeVisible();
  expect(within(item).getByText("/ US$100m")).toBeVisible();
  expect(within(item).queryByRole("img")).toBeNull();
  expect(within(item).queryByText("Not supplied")).toBeNull();
  expect(
    within(item).getByText("The stated values cannot be placed on a scale from zero."),
  ).toBeVisible();
});
