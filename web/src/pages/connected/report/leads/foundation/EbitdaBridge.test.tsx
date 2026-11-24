// Expected values are written out by hand from the retained TransDigm FY2024 CP-1 handoff
// (outdated evidence: shape and scope only), not computed by the code under test. The bridges built
// with `bridgeEntry` are synthetic, built from the module contract (foundationData.ts ebitdaBridge,
// `Chart data: EBITDA bridge` with Step | Amount | Reporting unit); not a real handoff.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import {
  containsReference,
  type Block,
  type OutputEntry,
  type Table,
} from "../../../publishedReport";
import { entry as synthetic, section, table } from "../../overview/rows.fixture";
import { cp1Entry, leadProps } from "../fixtures/load";
import { bridgeAxis, bridgeGeometry, largestStep } from "./bridgeGeometry";
import { EbitdaBridgeTile } from "./EbitdaBridge";
import { ebitdaBridge } from "./foundationData";

afterEach(cleanup);

const base = cp1Entry();
const HEADING = "Chart data: EBITDA bridge";

function edited(change: (table: Table, heading: string) => Table | null): OutputEntry {
  return {
    ...base,
    sections: base.sections.map((part) => ({
      ...part,
      blocks: part.blocks.flatMap((block): Block[] => {
        if (block.type !== "table") return [block];
        const next = change(block, part.heading);
        return next ? [next] : [];
      }),
    })),
  };
}
const setAmount = (row: number, text: string) =>
  edited((found, at) =>
    at !== HEADING
      ? found
      : {
          ...found,
          rows: found.rows.map((item, n) =>
            n === row ? { ...item, cells: item.cells.map((c, m) => (m === 1 ? text : c)) } : item,
          ),
        },
  );

function bridgeEntry(steps: [string, string][]) {
  return synthetic(
    "CP-1",
    [],
    [
      section(
        HEADING,
        9,
        table(
          10,
          ["Step", "Amount", "Reporting unit", "Basis and limitation"],
          steps.map(([label, amount]) => [label, amount, "US$m", "Issuer add-back."]),
        ),
      ),
    ],
  );
}

function draw(entry: OutputEntry) {
  const view = render(<EbitdaBridgeTile lead={leadProps(entry)} />);
  const tile = screen.getByRole("region", { name: "EBITDA bridge" });
  const bars = [...tile.querySelectorAll("[data-step]")];
  return { tile, view, bars };
}
const num = (element: Element | undefined | null, name: string) =>
  Number(element?.getAttribute(name));
const right = (element: Element | undefined) => num(element, "x") + num(element, "width");

describe("bridge axis", () => {
  it("cuts the axis below the opening by half the spread, at the step ticks give for one and a half spreads", () => {
    // Positions 3,813 .. 4,173: spread 360, edge 3,633; ticks over 540 step by 200; floor to 3,600.
    const axis = bridgeAxis([3813, 3883, 4100, 4158, 4173, 4173]);
    expect(axis).toMatchObject({ start: 3600, end: 4200, truncated: true });
    expect(axis.ticks.map((tick) => tick.label)).toEqual(["3,600", "3,800", "4,000", "4,200"]);
  });
  it("runs through zero when the cut would reach it, and brackets a negative position", () => {
    expect(bridgeAxis([10, 50, 50])).toMatchObject({ start: 0, end: 50, truncated: false });
    const negative = bridgeAxis([-50, 20, 20]);
    expect(negative.truncated).toBe(false);
    expect(negative.ticks[0]?.label).toBe("−60");
  });
  it("keeps a flat bridge drawable", () => {
    expect(bridgeAxis([100, 100])).toMatchObject({ truncated: true });
    expect(bridgeAxis([0, 0]).truncated).toBe(false);
  });
});

describe("EbitdaBridgeTile on the retained handoff", () => {
  it("draws the totals from the axis start and each add-back floating from the running total, in proportion", () => {
    const { bars } = draw(base);
    const [opening, acquisition, stock, refinancing, other, closing] = bars;
    expect(bars.map((bar) => bar.getAttribute("data-step"))).toEqual([
      "opening",
      "change",
      "change",
      "change",
      "change",
      "closing",
    ]);
    // Axis 3,600 .. 4,200 over x 184 .. 424: 0.4 px a unit.
    expect(num(opening, "x")).toBeCloseTo(184, 6);
    expect(num(opening, "width")).toBeCloseTo((3813 - 3600) * 0.4, 6);
    expect(num(closing, "width") / num(opening, "width")).toBeCloseTo(573 / 213, 6);
    expect(num(stock, "width") / num(acquisition, "width")).toBeCloseTo(217 / 70, 6);
    expect(num(acquisition, "x")).toBeCloseTo(right(opening), 6);
    expect(num(stock, "x")).toBeCloseTo(right(acquisition), 6);
    expect(right(other)).toBeCloseTo(right(closing), 6);
    expect(num(refinancing, "width")).toBeCloseTo(58 * 0.4, 6);
  });

  it("marks the axis break on both totals, says where it starts and brackets the derived add-back total", () => {
    const { tile } = draw(base);
    expect(
      [...tile.querySelectorAll("[data-axis-break]")].map((m) => m.getAttribute("data-axis-break")),
    ).toEqual(["opening", "closing"]);
    expect(
      within(tile).getByText("Axis starts at 3,600, marked on the two total bars."),
    ).toBeVisible();
    const svg = within(tile).getByRole("img");
    for (const label of [
      "+70",
      "+217",
      "+58",
      "+15",
      "3,813",
      "4,173",
      "Add-backs total",
      "3,600",
      "4,200",
    ])
      expect(within(svg).getByText(label)).toBeInTheDocument();
    expect(tile.querySelector("[data-bracket]")?.textContent).toBe("Add-backs total+360, derived");
    expect(
      within(tile).getByText(
        "Largest step: Non-cash stock and deferred compensation expense, +217.",
      ),
    ).toBeVisible();
    expect(tile.textContent).not.toMatch(/Stock compensation is the largest/);
  });

  it("titles from the stated totals and the exact sum, and reads every step aloud", () => {
    const { tile } = draw(base);
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      "Add-backs lift EBITDA (Reported) by 360 to EBITDA (Adjusted)",
    );
    expect(within(tile).getByText("Reported to adjusted EBITDA · US$m")).toBeVisible();
    expect(within(tile).getByRole("img").getAttribute("aria-label")).toBe(
      "EBITDA bridge, US$m: EBITDA (Reported) 3,813, plus Acquisition transaction and integration-related expenses 70, " +
        "plus Non-cash stock and deferred compensation expense 217, plus Refinancing costs 58, plus Other, net 15, " +
        "equals EBITDA (Adjusted) 4,173. Add-backs total +360, derived. Axis starts at 3,600.",
    );
    expect(within(tile).getByRole("img")).toHaveAttribute("width", "100%");
  });

  it("wraps a long step label, has one trace control, a table view and no source reference", () => {
    const { tile, view } = draw(base);
    const lines = [...tile.querySelectorAll("tspan")].map((span) => span.textContent);
    expect(lines).toEqual(
      expect.arrayContaining(["Acquisition transaction and", "integration-related expenses"]),
    );
    expect(
      within(tile).getByRole("link", { name: "Source for the EBITDA bridge" }),
    ).toHaveAttribute("href", expect.stringContaining("/report/run#evidence/"));
    expect(within(tile).getAllByRole("link")).toHaveLength(1);
    const rows = [...(tile.querySelector("table")?.querySelectorAll("tr") ?? [])].map((row) =>
      [...row.children].map((cell) => cell.textContent),
    );
    expect(rows[0]).toEqual(["Step", "Amount, US$m", "Kind"]);
    expect(rows[1]).toEqual(["EBITDA (Reported)", "3,813", "opening total"]);
    expect(rows[3]).toEqual(["Non-cash stock and deferred compensation expense", "+217", "change"]);
    expect(rows[6]).toEqual(["EBITDA (Adjusted)", "4,173", "closing total"]);
    expect(rows[7]).toEqual(["Add-backs total", "+360", "derived: sum of the changes"]);
    const text = view.container.textContent;
    expect(containsReference(text)).toBe(false);
    // The handoff's basis cells cite pages ("annual p71"); none is drawn.
    expect(text).not.toMatch(/p71|realization status|CP-1/);
  });
});

describe("EbitdaBridgeTile states", () => {
  it("does not draw a bridge whose steps do not reach the closing figure, and lists the stated amounts", () => {
    const { tile, bars } = draw(setAmount(2, "218"));
    expect(bars).toHaveLength(0);
    expect(within(tile).queryByRole("img")).toBeNull();
    expect(
      within(tile).getByText("The bridge steps do not add up to the closing figure."),
    ).toBeVisible();
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      "EBITDA (Reported) to EBITDA (Adjusted), steps stated",
    );
    const cells = [...(tile.querySelector("table")?.querySelectorAll("td") ?? [])].map(
      (cell) => cell.textContent,
    );
    expect(cells).toEqual(expect.arrayContaining(["+218", "4,173", "3,813"]));
    expect(within(tile).queryByText(/Add-backs total/)).toBeNull();
    expect(
      within(tile).getByRole("link", { name: "Source for the EBITDA bridge" }),
    ).toBeInTheDocument();
  });

  it("shows a gap step hatched with its reason and draws no bridge", () => {
    const { tile, bars } = draw(setAmount(2, "Not supplied: not stated"));
    expect(bars).toHaveLength(0);
    expect(
      within(tile).getByText("The bridge is not drawn: a step is not stated as a number."),
    ).toBeVisible();
    const gap = tile.querySelector('[data-gap="Non-cash stock and deferred compensation expense"]');
    expect(gap?.textContent).toBe("Not supplied: not stated");
    expect(gap?.className).toContain("gap-hatch");
  });

  it("draws a negative change leftward with a true minus, from the running total", () => {
    const data = bridgeEntry([
      ["Opening", "100"],
      ["Cut", "-20"],
      ["Add", "50"],
      ["Closing", "130"],
    ]);
    const { tile, bars } = draw(data);
    const [opening, cut, add] = bars;
    // Positions 80 .. 130: spread 50, edge 55; ticks over 75 step by 20; axis 40 .. 140 over 184 .. 424.
    expect(
      within(tile).getByText("Axis starts at 40, marked on the two total bars."),
    ).toBeVisible();
    expect(right(cut)).toBeCloseTo(right(opening), 6);
    expect(num(cut, "width") / num(add, "width")).toBeCloseTo(20 / 50, 6);
    expect(num(cut, "x")).toBeCloseTo(184 + (80 - 40) * 2.4, 6);
    expect(within(within(tile).getByRole("img")).getByText("−20")).toBeInTheDocument();
    expect(within(tile).getByRole("img").getAttribute("aria-label")).toContain(
      "less Cut 20, plus Add 50",
    );
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      "Add-backs lift Opening by 30 to Closing",
    );
    expect(within(tile).getByText("Largest step: Add, +50.")).toBeVisible();
  });

  it("keeps a stated zero step as a value and names no largest step on a tie", () => {
    const data = bridgeEntry([
      ["Opening", "100"],
      ["Nil", "0"],
      ["First", "10"],
      ["Second", "10"],
      ["Closing", "120"],
    ]);
    const { tile, bars } = draw(data);
    const nil = bars[1];
    expect([nil?.getAttribute("data-from"), nil?.getAttribute("data-to")]).toEqual(["100", "100"]);
    expect(within(within(tile).getByRole("img")).getByText("0")).toBeInTheDocument();
    expect(within(tile).queryByText(/Largest step/)).toBeNull();
    const parsed = ebitdaBridge(data);
    expect(parsed && largestStep(parsed)).toBeNull();
  });

  it("starts the axis at zero, with no break mark, when the cut would pass zero", () => {
    const { tile, bars } = draw(
      bridgeEntry([
        ["Opening", "10"],
        ["Add", "40"],
        ["Closing", "50"],
      ]),
    );
    expect(tile.querySelector("[data-axis-break]")).toBeNull();
    expect(within(tile).getByText("Axis starts at 0.")).toBeVisible();
    expect(num(bars[2], "width") / num(bars[0], "width")).toBeCloseTo(50 / 10, 6);
  });

  it("draws the gap tile when the handoff has no bridge table", () => {
    const { tile } = draw(edited((found, at) => (at === HEADING ? null : found)));
    expect(
      within(tile).getByText("The financial foundation has no EBITDA bridge table."),
    ).toBeVisible();
    expect(within(tile).queryByRole("img")).toBeNull();
    expect(within(tile).queryByRole("link")).toBeNull();
  });

  it("returns no geometry unless the bridge reconciles", () => {
    const off = ebitdaBridge(setAmount(2, "218"));
    expect(off && bridgeGeometry(off)).toBeNull();
  });
});
