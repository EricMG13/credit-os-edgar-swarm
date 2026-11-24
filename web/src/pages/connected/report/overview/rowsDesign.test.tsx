// Review part 2: the wall fits its tile, the stack labels its segments, the downside dumbbell
// against the covenant limit, and a trace record every structure and stress tile resolves.
import { cleanup, render, screen, within } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry, Snapshot } from "../../publishedReport";
import { PublishedTraceProvider } from "../PublishedTrace";
import { StressRow } from "./StressRow";
import { StructureRow } from "./StructureRow";
import { measuredAt } from "./resize.fixture";
import { entry, rowProps, section, table } from "./rows.fixture";

afterEach(cleanup);

const BASIS = ["Reporting unit", "Basis and limitation"];

const foundation = (stack: string[][]) =>
  entry(
    "CP-1",
    [
      { title: "Debt maturities", table: 10, unit: "US$m", columns: [1] },
      {
        title: "Debt stack",
        table: 30,
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
        table(
          10,
          ["Period", "Debt maturing", ...BASIS],
          [
            ["FY2026", "500", "US$m", ""],
            ["FY2027", "300", "US$m", ""],
            ["FY2028", "1,250", "US$m", ""],
          ],
        ),
      ),
      section(
        "Chart data: debt stack",
        29,
        table(30, ["Facility", "Ranking", "Secured", "Amount", "Leverage", ...BASIS], stack),
      ),
    ],
  );

const STACK = [
  ["Term loan", "1", "Yes", "1,200", "2.4", "US$m", ""],
  ["Senior notes", "2", "No", "800", "4.0", "US$m", ""],
  ["Subordinated notes", "3", "No", "Not supplied: not stated", "", "US$m", ""],
];

it("fits the maturity wall to its tile at a desktop width, with no sideways scroll", () => {
  const restore = measuredAt(755);
  try {
    render(<StructureRow {...rowProps([foundation(STACK)])} />);
    const wall = screen.getByRole("region", { name: "Maturity wall" });
    const figure = within(wall).getByRole("img");
    expect(figure).toHaveAttribute("width", "100%");
    expect(figure).toHaveAttribute("viewBox", "0 0 755 300");
    expect(screen.queryByRole("region", { name: /scrolls sideways/ })).toBeNull();
    const last = [...wall.querySelectorAll("[data-bar]")].at(-1);
    expect(Number(last?.getAttribute("x")) + Number(last?.getAttribute("width"))).toBeLessThan(755);
  } finally {
    restore();
  }
});

it("labels each stack segment beside it, bracketed to the segment, with no dead space", () => {
  render(<StructureRow {...rowProps([foundation(STACK)])} />);
  const tile = screen.getByRole("region", { name: "Capital structure by rank" });
  const figure = within(tile).getByRole("img");
  const segments = [...figure.querySelectorAll("[data-segment], [data-gap]")];
  expect(figure.querySelectorAll("[data-bracket]")).toHaveLength(segments.length);
  const labels = within(tile).getAllByRole("listitem");
  const top = (item?: Element) =>
    Number.parseFloat((item as HTMLElement | undefined)?.style.top ?? "");
  // The first claim's label sits at its segment's middle; each next label lower, never above it.
  const loan = figure.querySelector('[data-segment="Term loan"]');
  const middle = Number(loan?.getAttribute("y")) + Number(loan?.getAttribute("height")) / 2;
  expect(Math.abs(top(labels[0]) + 18 - middle)).toBeLessThanOrEqual(1);
  expect(top(labels[1])).toBeGreaterThan(top(labels[0]));
  expect(top(labels[2])).toBeGreaterThan(top(labels[1]));
  const frame = labels[0]?.parentElement;
  expect(Number.parseFloat(frame?.style.height ?? "")).toBe(Number(figure.getAttribute("height")));
});

const HEADS = ["Test", "Threshold", "Current", "Headroom", "Direction", ...BASIS];
const covenants = (label: string, unit = "x") =>
  entry(
    "CP-4",
    [
      {
        title: "Covenant headroom",
        table: 43,
        label: [0],
        threshold: 1,
        current: 2,
        headroom: 3,
        direction: 4,
      },
    ],
    [
      section(
        "Chart data: covenant headroom",
        42,
        table(43, HEADS, [[label, "5.0", "4.2", "0.8x", "Passes at or below", unit, ""]]),
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
          ["Stressed FCF (USD millions)", "10.00", "0.00", "-5.1250", "Filing p.2"],
          ["All-in cover (x)", "3.10", "2.00", "1.40", "Filing p.1"],
          ["Net leverage (x)", "1.25", "2.50", "Not calculated: net debt is missing", "Filing p.1"],
        ],
      ),
    ),
  ],
);

// Round 2, N1: the dumbbell against a covenant limit matched by name is withdrawn. The legal
// module's "Net leverage" (5.0, current 4.2x) and the downside module's "Net leverage (x)"
// (control 1.25x) are different definitions; a covenant level is drawn only on the covenant tile.
it("draws no covenant limit and makes no covenant claim on the downside tile", () => {
  render(<StressRow {...rowProps([downside, covenants("Net leverage")])} />);
  const tile = screen.getByRole("region", { name: "Downside scenarios" });
  expect(tile.querySelector("[data-limit]")).toBeNull();
  expect(tile).not.toHaveTextContent(/covenant limit|against the covenant/i);
  expect(within(tile).getByRole("img").getAttribute("aria-label")).not.toMatch(/covenant/i);
});

const SHA = (digit: string) => digit.repeat(64);
const hashed = (item: OutputEntry, digit: string): OutputEntry => ({
  ...item,
  output: { ...item.output, sha256: SHA(digit) },
});

const bottomLine = (module: string, text: string) =>
  entry(
    module,
    [],
    [
      { heading: "Findings", level: 2, line: 1, blocks: [] },
      {
        heading: "Bottom line",
        level: 3,
        line: 3,
        blocks: [{ type: "text", line: 4, end: 4, text }],
      },
    ],
  );

function traced(entries: OutputEntry[], draw: (props: ReturnType<typeof rowProps>) => ReactNode) {
  const props = rowProps(entries, [{ cashflow: { columns: [], rows: [] } }]);
  render(
    <PublishedTraceProvider
      snapshot={{} as Snapshot}
      folder="run"
      entries={entries}
      route="overview"
    >
      {draw(props)}
    </PublishedTraceProvider>,
  );
}

it("gives every stress tile a trace record the trace drawer resolves, ready or blocked", () => {
  const model = bottomLine("CP-2G", "The model ran.");
  for (const entries of [
    [hashed(covenants("Net leverage"), "4"), hashed(downside, "2"), hashed(model, "7")],
    [
      hashed(bottomLine("CP-4", "Not assessable: no executed document."), "4"),
      hashed(bottomLine("CP-2A", "Not assessable: no forecast."), "2"),
      hashed(model, "7"),
    ],
  ]) {
    traced(entries, (props) => <StressRow {...props} />);
    for (const name of ["covenant headroom", "the downside scenarios", "the forward path"])
      expect(screen.getByRole("button", { name: `Show sources for ${name}` })).toBeVisible();
    cleanup();
  }
});

it("gives the structure tiles a trace record when the foundation is blocked", () => {
  const blocked = hashed(bottomLine("CP-1", "Not assessable: no filing."), "1");
  traced([blocked], (props) => <StructureRow {...props} />);
  for (const name of ["the maturity wall", "the capital structure"])
    expect(screen.getByRole("button", { name: `Show sources for ${name}` })).toBeVisible();
});
