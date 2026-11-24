import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry } from "../../publishedReport";
import { entry, table } from "../overview/rows.fixture";
import { LiquidityLead } from "./cp2d";
import { bottomLine, EVENT_HEADERS, leadProps, tableSection } from "./lead.fixture";

afterEach(cleanup);

const STEPS = ["Step", "Amount", "Reporting unit", "Basis and limitation"];

// The synthetic proof handoff's bridge (proof/handoffs/CP-2D.md); no real CP-2D handoff is retained.
function liquidity(rows: string[][], extra: OutputEntry["sections"] = []) {
  const made = entry(
    "CP-2D",
    [
      {
        title: "Liquidity bridge",
        table: 22,
        unit: "US$m",
        columns: [1],
        kind: "waterfall",
        amount: 1,
      },
    ],
    [tableSection("Chart data: liquidity bridge", table(22, STEPS, rows)), ...extra],
  );
  made.output.events = [{ lane: "Financing", table: 31, gap: null }];
  return made;
}

const BRIDGE = [
  ["Opening accessible liquidity", "900", "US$m", "Synthetic."],
  ["Free cash flow", "120", "US$m", "Synthetic."],
  ["Debt repayment", "-450", "US$m", "Synthetic."],
  ["Closing accessible liquidity", "570", "US$m", "Synthetic."],
];

const EVENTS = tableSection(
  "Events: Financing",
  table(31, EVENT_HEADERS, [
    [
      "2026",
      "year",
      "2024-11-07",
      "Synthetic maturity",
      "Scheduled — maturity",
      "Filing p.2",
      "Wall",
    ],
    [
      "2025-03-31",
      "day",
      "2024-11-07",
      "Synthetic note",
      "Scheduled — matures",
      "Filing p.1",
      "Wall",
    ],
  ]),
);

it("draws the bridge from opening to closing with each step as written, and its table", () => {
  render(<LiquidityLead {...leadProps(liquidity(BRIDGE, [EVENTS]))} />);
  const tile = screen.getByRole("region", { name: "Liquidity bridge" });
  const figure = within(tile).getByRole("img");
  expect(figure).toHaveAccessibleName(/900.*570/);
  for (const text of ["900", "+120", "-450", "570"])
    expect(within(figure).getByText(text)).toBeInTheDocument();
  expect(within(tile).getByText("US$m")).toBeVisible();
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(within(tile).getByRole("cell", { name: "-450" })).toBeVisible();
  expect(
    within(tile)
      .getAllByRole("link", { name: /Source for/ })
      .at(-1),
  ).toHaveAttribute("href", expect.stringContaining("#evidence/"));
});

it("keeps a bridge that does not reconcile, or has a stated gap, out of the figure", () => {
  const broken = BRIDGE.map((row) => [...row]);
  (broken[3] as string[])[1] = "600";
  render(<LiquidityLead {...leadProps(liquidity(broken))} />);
  const tile = screen.getByRole("region", { name: "Liquidity bridge" });
  expect(within(tile).queryByRole("img")).toBeNull();
  expect(within(tile).getByText(/does not reconcile/)).toBeVisible();
  cleanup();
  const gap = BRIDGE.map((row) => [...row]);
  (gap[1] as string[])[1] = "Not supplied: cash flow not stated";
  render(<LiquidityLead {...leadProps(liquidity(gap))} />);
  const again = screen.getByRole("region", { name: "Liquidity bridge" });
  expect(within(again).queryByRole("img")).toBeNull();
  expect(
    within(again).getByText(/Free cash flow is not supplied: cash flow not stated/),
  ).toBeVisible();
  expect(within(again).queryByText("0")).toBeNull();
});

it("lists the funding dates earliest first and states the runway gap", () => {
  render(<LiquidityLead {...leadProps(liquidity(BRIDGE, [EVENTS]))} />);
  const dates = screen.getByRole("list", { name: "Funding dates" });
  expect(
    within(dates)
      .getAllByRole("listitem")
      .map((item) => item.textContent),
  ).toEqual([expect.stringContaining("2025-03-31"), expect.stringContaining("2026")]);
  const runway = screen.getByRole("region", { name: "Runway" });
  expect(within(runway).getByText("This handoff states no runway figure.")).toBeVisible();
  expect(within(runway).getByText(/methodology/)).toBeVisible();
});

it("says why when the module wrote no bridge, and draws a blocked module as Not assessable", () => {
  const none = entry("CP-2D", [], []);
  render(<LiquidityLead {...leadProps(none)} />);
  expect(
    within(screen.getByRole("region", { name: "Liquidity bridge" })).getByText(
      "This liquidity handoff has no liquidity bridge table.",
    ),
  ).toBeVisible();
  cleanup();
  const stopped = entry(
    "CP-2D",
    [],
    bottomLine("Not assessable: no cash flow statement was supplied."),
  );
  render(<LiquidityLead {...leadProps(stopped)} />);
  const tile = screen.getByRole("region", { name: "Liquidity bridge" });
  expect(within(tile).getByText("Not assessable")).toBeVisible();
  expect(within(tile).getByText("No cash flow statement was supplied.")).toBeVisible();
  expect(screen.queryByRole("region", { name: "Runway" })).toBeNull();
});

it("draws no source reference or module code in a bridge step's label or a gap's reason", () => {
  const named = BRIDGE.map((row) => [...row]);
  (named[1] as string[])[0] = "Free cash flow (CP-2G)";
  (named[2] as string[])[0] = "Repayment per indenture.pdf p. 7";
  render(<LiquidityLead {...leadProps(liquidity(named))} />);
  const tile = screen.getByRole("region", { name: "Liquidity bridge" });
  expect(within(tile).getByRole("img")).toHaveAccessibleName(/In Evidence -450/);
  expect(tile.textContent).not.toMatch(/indenture|CP-2G/);
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(tile.textContent).not.toMatch(/indenture|CP-2G/);
  cleanup();
  const gap = BRIDGE.map((row) => [...row]);
  (gap[1] as string[])[1] = "Not supplied: see cash_flow.xlsx tab 2";
  render(<LiquidityLead {...leadProps(liquidity(gap))} />);
  const again = screen.getByRole("region", { name: "Liquidity bridge" });
  expect(again.textContent).not.toMatch(/cash_flow\.xlsx/);
});
