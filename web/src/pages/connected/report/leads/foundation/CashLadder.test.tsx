// Expected values are written out by hand from the retained TransDigm FY2024 CP-1 handoff
// (outdated evidence: shape and scope only), not computed by the code under test. The short-ladder
// case is synthetic, built from the module contract (foundationData.ts cashLadder); not a real handoff.
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
import { CashLadderTile } from "./CashLadder";
import { cashLadder } from "./foundationData";
import { LADDER, ladderConnectors, ladderGeometry, wrapLines } from "./ladderGeometry";

afterEach(cleanup);

const base = cp1Entry();
const CASH = "T4.5 Cash flow statement";

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
/** The handoff with the FY2024 cell of each named statement row replaced. */
const withCells = (heading: string, cells: Record<string, string>) =>
  edited((found, at) =>
    at !== heading
      ? found
      : {
          ...found,
          rows: found.rows.map((row) => {
            const text = cells[row.cells[0] ?? ""];
            return text === undefined
              ? row
              : { ...row, cells: row.cells.map((c, m) => (m === 1 ? text : c)) };
          }),
        },
  );

function draw(entry: OutputEntry) {
  const view = render(<CashLadderTile lead={leadProps(entry)} />);
  const tile = screen.getByRole("region", { name: "Cash conversion" });
  return { tile, view, mark: (selector: string) => tile.querySelector(selector) };
}
const num = (element: Element | null, name: string) => Number(element?.getAttribute(name));
const right = (element: Element | null) => num(element, "x") + num(element, "width");

// One scale from -4,000 to 6,000 (ticks of 2,000 bracket -2,505 and 4,173) over x 212..468.
const PER = (468 - 212) / 10000;
const ZERO = 212 + 4000 * PER;

describe("ladder geometry", () => {
  it("wraps long labels by words and keeps a long word whole", () => {
    expect(wrapLines("Free cash flow after acquisitions and distributions", 30)).toEqual([
      "Free cash flow after",
      "acquisitions and distributions",
    ]);
    expect(wrapLines("Supercalifragilistic word", 5)).toEqual(["Supercalifragilistic", "word"]);
  });

  it("places levels from zero and each deduction from the running level, on one scale", () => {
    const data = cashLadder(base);
    if (!data) throw new Error("fixture lost the ladder");
    const geometry = ladderGeometry(data);
    expect(geometry.ticks.map((tick) => tick.label)).toEqual([
      "−4,000",
      "−2,000",
      "0",
      "2,000",
      "4,000",
      "6,000",
    ]);
    expect(geometry.zeroX).toBeCloseTo(ZERO, 6);
    const spans = geometry.rows.map((row) =>
      row.current.state === "bar" ? [row.current.span.from, row.current.span.to] : null,
    );
    // 4,173 − 1,158 = 3,015; − 539 = 2,476; − 431 = 2,045; − 165 = 1,880; − 4,385 = −2,505.
    expect(spans).toEqual([
      [0, 4173],
      [4173, 3015],
      [3015, 2476],
      [2476, 2045],
      [0, 2045],
      [2045, 1880],
      [0, 1880],
      [1880, -2505],
      [0, -2505],
    ]);
    expect(geometry.mismatch).toBe(false);
    // Every row carries into the next.
    expect(ladderConnectors(geometry.rows)).toHaveLength(8);
    // Rows never overlap: each starts where the previous one ends.
    geometry.rows.slice(1).forEach((row, at) => {
      const above = geometry.rows[at];
      expect(row.y).toBe((above?.y ?? 0) + (above?.height ?? 0));
    });
    expect(geometry.rows[0]?.y).toBe(LADDER.top);
  });
});

describe("CashLadderTile on the retained handoff", () => {
  it("draws each bar in proportion to its stated amount, deductions hanging from the level above", () => {
    const { mark } = draw(base);
    const start = mark('[data-step="start"]');
    const cfo = mark('[data-step="cfo"]');
    const interest = mark('[data-step="interest"]');
    const outflows = mark('[data-step="outflows"]');
    const end = mark('[data-step="end"]');
    expect(num(start, "width") / num(cfo, "width")).toBeCloseTo(4173 / 2045, 6);
    expect(num(interest, "width") / num(start, "width")).toBeCloseTo(1158 / 4173, 6);
    expect(num(outflows, "width") / num(start, "width")).toBeCloseTo(4385 / 4173, 6);
    expect(num(start, "x")).toBeCloseTo(ZERO, 6);
    expect(right(interest)).toBeCloseTo(right(start), 6);
    // The negative end level is drawn left of zero, ending at the zero line.
    expect(right(end)).toBeCloseTo(ZERO, 6);
    expect(num(end, "width")).toBeCloseTo(2505 * PER, 6);
    expect(num(mark("[data-zero]"), "x1")).toBeCloseTo(ZERO, 6);
    // FY2023 levels beneath, on the same scale.
    expect(num(mark('[data-prior="start"]'), "width") / num(start, "width")).toBeCloseTo(
      3395 / 4173,
      6,
    );
    expect(num(mark('[data-prior="end"]'), "width")).toBeCloseTo(436 * PER, 6);
    expect(mark('[data-prior="interest"]')).toBeNull();
  });

  it("hatches the remainder and labels every derived step", () => {
    const { tile, mark } = draw(base);
    expect(mark('[data-step="remainder"]')?.getAttribute("fill")).toMatch(/^url\(#ladder-gap-/);
    expect(mark('[data-step="interest"]')?.getAttribute("fill")).toBeNull();
    expect(within(tile).getByText("derived; not itemised here")).toBeInTheDocument();
    expect(within(within(tile).getByRole("img")).getAllByText("derived")).toHaveLength(2);
    expect(within(tile).getByText("2,347 + 2,038")).toBeInTheDocument();
    expect(within(tile).getAllByText("−2,505").length).toBeGreaterThan(0);
  });

  it("titles from the stated levels and states every step in the aria-label", () => {
    const { tile } = draw(base);
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      "Cash from operations 2,045 after interest, tax and other items; −2,505 after acquisitions and distributions",
    );
    expect(
      within(tile).getByText(
        "Cash conversion · US$m, FY2024 from EBITDA As Defined; FY2023 beneath",
      ),
    ).toBeVisible();
    expect(within(tile).getByRole("img").getAttribute("aria-label")).toBe(
      "FY2024 cash conversion, US$m: EBITDA As Defined 4,173; less cash interest paid 1,158; less cash taxes 539; " +
        "less other items, not itemised here 431, derived; cash from operations 2,045; less capex 165; " +
        "free cash flow after capex 1,880; less acquisitions and distributions 4,385, derived; " +
        "free cash flow after acquisitions and distributions −2,505, negative, derived. " +
        "FY2023: EBITDA As Defined 3,395; less cash interest paid 1,160; less cash taxes 260; " +
        "less other items, not itemised here 600, derived; cash from operations 1,375; less capex 139; " +
        "free cash flow after capex 1,236; less acquisitions and distributions 800, derived; " +
        "free cash flow after acquisitions and distributions 436, derived.",
    );
    expect(within(tile).getByRole("img")).toHaveAttribute("width", "100%");
    expect(within(tile).getByRole("img").getAttribute("viewBox")).toMatch(/^0 0 610 \d+/);
  });

  it("has one trace control, a table view with the basis of each row, and no source reference", () => {
    const { tile, view } = draw(base);
    expect(within(tile).getByRole("link", { name: "Source for cash conversion" })).toHaveAttribute(
      "href",
      expect.stringContaining("/report/run#evidence/"),
    );
    expect(within(tile).getAllByRole("link")).toHaveLength(1);
    const rows = [...(tile.querySelector("table")?.querySelectorAll("tr") ?? [])].map((row) =>
      [...row.children].map((cell) => cell.textContent),
    );
    expect(rows[0]).toEqual(["Step", "FY2024", "FY2023", "Basis"]);
    expect(rows[1]).toEqual(["EBITDA As Defined", "4,173", "3,395", "stated"]);
    expect(rows[4]).toEqual(["Other items, not itemised here", "−431", "−600", "derived"]);
    expect(rows[9]).toEqual([
      "Free cash flow after acquisitions and distributions",
      "−2,505 (negative)",
      "436",
      "derived",
    ]);
    const text = view.container.textContent;
    expect(containsReference(text)).toBe(false);
    expect(text).not.toMatch(/\.jsonl|page \d|CP-1|T4\.5/);
    expect(containsReference(within(tile).getByRole("img").getAttribute("aria-label") ?? "")).toBe(
      false,
    );
    expect(within(tile).queryByText(/do not sum exactly/)).toBeNull();
  });

  it("wraps the long end label onto two lines", () => {
    const { tile } = draw(base);
    const lines = [...tile.querySelectorAll("tspan")].map((span) => span.textContent);
    expect(lines).toContain("Free cash flow after");
    expect(lines).toContain("acquisitions and distributions");
  });
});

describe("CashLadderTile states", () => {
  it("draws a stated gap hatched with its reason, no bar, and does not derive what depends on it", () => {
    const { tile, mark } = draw(
      withCells(CASH, { "Cash taxes paid": "Not supplied: refund netting unclear" }),
    );
    expect(mark('[data-step="taxes"]')).toBeNull();
    expect(mark('[data-gap="taxes"]')).not.toBeNull();
    expect(mark('[data-step="remainder"]')).toBeNull();
    expect(mark('[data-gap="remainder"]')).not.toBeNull();
    expect(
      within(tile).getByText("Cash taxes, FY2024: Not supplied: refund netting unclear."),
    ).toBeVisible();
    expect(
      within(tile).getByText(
        "Other items, not itemised here, FY2024: Not itemised: an input is not stated.",
      ),
    ).toBeVisible();
    // Stated levels still draw, from their own figures.
    expect(num(mark('[data-step="cfo"]'), "width")).toBeCloseTo(2045 * PER, 6);
    expect(mark('[data-step="interest"]')).not.toBeNull();
    expect(within(tile).getByRole("img").getAttribute("aria-label")).toContain(
      "cash taxes not stated",
    );
    expect(within(tile).getAllByText("Not stated").length).toBeGreaterThan(0);
  });

  it("does not place a deduction under a gap: the value is shown, the bar is not drawn", () => {
    const { tile, mark } = draw(
      withCells(CASH, { "Cash Interest Paid": "Not supplied: not extracted" }),
    );
    expect(mark('[data-gap="interest"]')).not.toBeNull();
    expect(mark('[data-step="taxes"]')).toBeNull();
    expect(mark('[data-gap="taxes"]')).toBeNull();
    expect(within(tile).getByText("Not drawn: a step above it is not stated")).toBeInTheDocument();
    expect(within(tile).getAllByText("−539").length).toBeGreaterThan(0);
  });

  it("keeps a stated zero as a value", () => {
    const { tile, mark } = draw(
      withCells(CASH, { "Capital expenditures": "0", "Levered free cash flow": "2045" }),
    );
    const capex = mark('[data-step="capex"]');
    expect(capex).not.toBeNull();
    expect([capex?.getAttribute("data-from"), capex?.getAttribute("data-to")]).toEqual([
      "2045",
      "2045",
    ]);
    expect(mark('[data-gap="capex"]')).toBeNull();
    expect(within(tile).getByRole("img").getAttribute("aria-label")).toContain("; capex 0;");
    expect(mark("[data-mismatch]")).toBeNull();
  });

  it("draws levels as stated and marks a step that does not reconcile", () => {
    const { tile, mark } = draw(withCells(CASH, { "Levered free cash flow": "1885" }));
    const fcf = mark('[data-step="fcf"]');
    const gap = mark('[data-mismatch="fcf"]');
    expect(num(fcf, "width")).toBeCloseTo(1885 * PER, 6);
    // 2,045 − 165 = 1,880 against 1,885 stated: a hatched step from 1,880 to 1,885, drawn at least 4 wide.
    expect([gap?.getAttribute("data-from"), gap?.getAttribute("data-to")]).toEqual([
      "1880",
      "1885",
    ]);
    expect(num(gap, "x")).toBeCloseTo(ZERO + 1880 * PER, 6);
    expect(num(gap, "width")).toBe(4);
    expect(
      within(tile).getByText("Levels are drawn as stated; the steps do not sum exactly."),
    ).toBeVisible();
    expect(within(tile).getByRole("img").getAttribute("aria-label")).toContain(
      "Levels are drawn as stated; the steps do not sum exactly.",
    );
  });

  it("draws a short ladder: only the anchors stated, every other step a gap with its reason", () => {
    const unit = "USD millions";
    const short = synthetic(
      "CP-1",
      [],
      [
        section(
          "T4.4 Income statement",
          9,
          table(
            10,
            ["Line item", "FY2024", "FY2023", "Unit"],
            [["EBITDA (Adjusted)", "500", "400", unit]],
          ),
        ),
        section(
          CASH,
          19,
          table(
            20,
            ["Line item", "FY2024", "FY2023", "Unit"],
            [["Net Cash from Operating Activities", "-50", "120", unit]],
          ),
        ),
      ],
    );
    const { tile, mark } = draw(short);
    expect(tile.querySelectorAll("[data-step]")).toHaveLength(2);
    expect(tile.querySelectorAll("[data-gap]")).toHaveLength(7);
    expect(
      within(within(tile).getByRole("img")).getByText("Cash interest paid is not in the handoff"),
    ).toBeInTheDocument();
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      "Cash from operations −50 after interest, tax and other items",
    );
    // A negative stated level is drawn left of zero.
    const cfo = mark('[data-step="cfo"]');
    expect(right(cfo)).toBeCloseTo(num(mark("[data-zero]"), "x1"), 6);
    expect(num(mark('[data-step="start"]'), "width") / num(cfo, "width")).toBeCloseTo(500 / 50, 6);
    expect(within(tile).getByRole("img").getAttribute("aria-label")).toContain(
      "cash from operations −50, negative;",
    );
  });

  it("draws the gap tile when the anchors are absent, with no figure and no trace", () => {
    const { tile } = draw(edited((found, at) => (at === CASH ? null : found)));
    expect(
      within(tile).getByText(
        "The financial foundation does not state EBITDA As Defined and cash from operations in one unit.",
      ),
    ).toBeVisible();
    expect(within(tile).queryByRole("img")).toBeNull();
    expect(within(tile).queryByRole("link")).toBeNull();
  });
});
