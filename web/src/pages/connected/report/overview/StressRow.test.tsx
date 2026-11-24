import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { StressRow } from "./StressRow";
import { entry, rowProps, section, table } from "./rows.fixture";

afterEach(cleanup);

const covenants = entry(
  "CP-4",
  [
    {
      title: "Covenant headroom",
      table: 43,
      kind: "bullet",
      direction: 4,
      label: [0],
      threshold: 1,
      current: 2,
      headroom: 3,
      unit: "",
    },
  ],
  [
    section(
      "Chart data: covenant headroom",
      42,
      table(
        43,
        [
          "Test",
          "Threshold",
          "Current",
          "Headroom",
          "Direction",
          "Reporting unit",
          "Basis and limitation",
        ],
        [
          ["Net leverage", "5.0", "4.2", "0.8x", "Passes at or below", "x", ""],
          ["Interest cover", "2.0", "2.6", "0.6x", "Passes at or above", "x", ""],
          [
            "Minimum liquidity",
            "100",
            "Not supplied: not stated",
            "Not supplied: no current",
            "Passes at or above",
            "US$m",
            "",
          ],
        ],
      ),
    ),
  ],
);

const downside = entry(
  "CP-2A",
  [],
  [
    section(
      "T2DS.1 Scenarios",
      95,
      table(
        96,
        [
          "Scenario ID",
          "Name",
          "EBITDA decline s",
          "Cash-interest increase k",
          "Anchor",
          "What the assumption leaves out",
          "Category",
          "Confidence",
        ],
        [
          ["s00", "Control", "0", "0", "As reported", "", "", ""],
          ["s01", "Cost shock", "0.1 (10%)", "0", "", "", "", ""],
          ["s02", "Cost and rate shock", "0.2 (20%)", "0.05 (5%)", "", "", "", ""],
        ],
      ),
    ),
    section(
      "T2DS.4 Stressed flows and metrics",
      105,
      table(
        106,
        ["Metric", "s00", "s01", "s02", "Source"],
        [
          ["All-in cover (x)", "3.10", "2.00", "1.40", "Filing p.1"],
          ["Net leverage (x)", "1.25", "1.30", "Not calculated: net debt is missing", "Filing p.1"],
        ],
      ),
    ),
  ],
);

const cell = (display: string, exact: string | null) =>
  exact === null
    ? { exact, display, reason: "the inputs do not state this period", status: "na" }
    : { exact, display, reason: null, status: "value" };

const model = {
  cashflow: {
    columns: [
      { label: "LTM", group: "Last twelve months", start: null, end: null },
      { label: "FY2025E", group: "Base case", start: "2025-04-01", end: "2026-03-31" },
      { label: "FY2026E", group: "Base case", start: "2026-04-01", end: "2027-03-31" },
      { label: "FY2027E", group: "Base case", start: "2027-04-01", end: "2028-03-31" },
    ],
    rows: [
      {
        band: "Credit metrics",
        label: "Net leverage (net debt / Adj EBITDA)",
        kind: "multiple",
        total: false,
        cells: [cell("n.a.", null), cell("2.00x", "2.0"), cell("n.a.", null), cell("1.00x", "1.0")],
      },
    ],
    limits: ["Arithmetic over stated inputs; not analytical review."],
  },
};

const x = (element: Element | null, name: string) => Number(element?.getAttribute(name));

it("places the current value and the threshold on one scale from zero, and lists every other test", () => {
  render(<StressRow {...rowProps([covenants])} />);
  const tile = screen.getByRole("region", { name: "Covenant headroom" });
  const start = 8;
  const current = start + x(tile.querySelector("[data-current]"), "width");
  const threshold = x(tile.querySelector("[data-threshold]"), "x1");
  expect((current - start) / (threshold - start)).toBeCloseTo(4.2 / 5.0, 6);
  expect(within(tile).getByText("0.8x")).toBeVisible();
  expect(
    within(tile).getByText("4.2x against a threshold of 5.0x. Passes at or below."),
  ).toBeVisible();
  const others = within(tile).getAllByRole("listitem");
  expect(others).toHaveLength(2);
  expect(others[1]).toHaveTextContent("Minimum liquidity");
  expect(others[1]).toHaveTextContent("Not supplied");
  expect(others[1]).toHaveTextContent("not stated");
  // The missing current value is not drawn as an empty bar.
  expect(others[1]?.querySelector(".bg-chart-1")).toBeNull();
  expect(others[0]?.querySelector(".bg-chart-1")).not.toBeNull();
});

it("draws the blocked module's own reason in place of the headroom figure", () => {
  const blocked = entry(
    "CP-4",
    [],
    [
      { heading: "Findings", level: 2, line: 3, blocks: [] },
      {
        heading: "Bottom line",
        level: 3,
        line: 4,
        blocks: [
          {
            type: "text",
            line: 5,
            end: 5,
            text: "Not assessable: no executed governing document available.",
          },
        ],
      },
    ],
  );
  render(<StressRow {...rowProps([blocked])} />);
  const tile = screen.getByRole("region", { name: "Covenant headroom" });
  expect(
    within(tile).getByText("Not assessable: no executed governing document available."),
  ).toBeVisible();
  expect(within(tile).queryByRole("img")).toBeNull();
});

it("draws each stressed metric's bars from zero in proportion, and a gap where a case has no figure", () => {
  render(<StressRow {...rowProps([downside])} />);
  const tile = screen.getByRole("region", { name: "Downside scenarios" });
  const cover = tile.querySelector('[data-panel="All-in cover (x)"]');
  const widths = ["3.10", "2.00", "1.40"].map((text) =>
    x(cover?.querySelector(`[data-bar="${text}"]`) ?? null, "width"),
  );
  expect((widths[1] ?? 0) / (widths[0] ?? 1)).toBeCloseTo(2.0 / 3.1, 6);
  expect((widths[2] ?? 0) / (widths[0] ?? 1)).toBeCloseTo(1.4 / 3.1, 6);
  const leverage = tile.querySelector('[data-panel="Net leverage (x)"]');
  expect(leverage?.querySelectorAll("[data-bar]")).toHaveLength(2);
  expect(leverage?.querySelectorAll("[data-gap]")).toHaveLength(1);
  expect(
    within(tile).getByText("Cost and rate shock, Net leverage (x): net debt is missing."),
  ).toBeVisible();
  expect(
    within(tile).getByText("Cost shock: EBITDA decline 10%, cash interest increase 0%."),
  ).toBeVisible();
});

it("joins only neighbouring forecast periods that both have a figure", () => {
  render(<StressRow {...rowProps([], [model])} />);
  const tile = screen.getByRole("region", { name: "Forward path" });
  expect(tile.querySelectorAll("[data-point]")).toHaveLength(2);
  expect(tile.querySelector('[data-gap="FY2026E"]')).not.toBeNull();
  // FY2025E and FY2027E are not neighbours: no line crosses the period without a figure.
  expect(tile.querySelectorAll("[data-base-line]")).toHaveLength(0);
  const [first, last] = [...tile.querySelectorAll("[data-point]")];
  const base = 130;
  expect((base - x(first ?? null, "cy")) / (base - x(last ?? null, "cy"))).toBeCloseTo(2, 6);
  expect(within(tile).getByText("by FY2027E")).toBeVisible();
  expect(within(tile).getByText("FY2026E: the inputs do not state this period.")).toBeVisible();
  expect(within(tile).getByText("Net leverage (net debt / Adj EBITDA)")).toBeVisible();
});

it("says why when the run has no covenant module, downside module or forecast model", () => {
  render(<StressRow {...rowProps([])} />);
  expect(screen.getByText("Legal & covenants did not run in this run.")).toBeVisible();
  expect(screen.getByText("Downside did not run in this run.")).toBeVisible();
  expect(screen.getByText("No forecast model was published for this run.")).toBeVisible();
  expect(screen.queryByRole("img")).toBeNull();
});
