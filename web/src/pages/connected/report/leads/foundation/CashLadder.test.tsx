// Expected values are written out by hand from the retained TransDigm FY2024 CP-1 handoff
// (outdated evidence: shape and scope only), not computed by the code under test. The short-ladder
// case is synthetic, built from the module contract (foundationData.ts cashLadder); not a real handoff.
// Round 2 (ruling i): the data layer no longer derives the "not itemised" plug, the acquisitions and
// distributions sum or the end level; the ladder is the handoff's own stated rows. Tests that asserted
// those derived steps were updated or removed below (each marked "ruling i"); this tile is being
// rebuilt on foundationData's new contract.
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
import { cashLadder } from "./legacyData";
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
    // 4,173 − 1,158 = 3,015; − 539 = 2,476; cash from operations stated 2,045; − 165 = 1,880;
    // free cash flow 1,880; − 2,038 = −158; repurchases a stated gap; −158 stated; − 2,347.
    expect(spans).toEqual([
      [0, 4173],
      [4173, 3015],
      [3015, 2476],
      [0, 2045],
      [2045, 1880],
      [0, 1880],
      [1880, -158],
      null,
      [0, -158],
      [-158, -2505],
    ]);
    // Ruling i: no plug, so cash from operations (2,045) is not reached from 2,476 by stated steps.
    expect(geometry.mismatch).toBe(true);
    expect(ladderConnectors(geometry.rows).length).toBeGreaterThan(0);
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
    const after = mark('[data-step="afterDistributions"]');
    expect(num(start, "width") / num(cfo, "width")).toBeCloseTo(4173 / 2045, 6);
    expect(num(interest, "width") / num(start, "width")).toBeCloseTo(1158 / 4173, 6);
    expect(num(start, "x")).toBeCloseTo(ZERO, 6);
    expect(right(interest)).toBeCloseTo(right(start), 6);
    // The stated negative after-distributions level is drawn left of zero, ending at the zero line.
    expect(right(after)).toBeCloseTo(ZERO, 6);
    expect(num(after, "width")).toBeCloseTo(158 * PER, 6);
    expect(num(mark("[data-zero]"), "x1")).toBeCloseTo(ZERO, 6);
    // FY2023 levels beneath, on the same scale.
    expect(num(mark('[data-prior="start"]'), "width") / num(start, "width")).toBeCloseTo(
      3395 / 4173,
      6,
    );
    expect(num(mark('[data-prior="afterDistributions"]'), "width")).toBeCloseTo(1198 * PER, 6);
    expect(mark('[data-prior="interest"]')).toBeNull();
  });

  // Ruling i: "hatches the remainder and labels every derived step" is removed; the plug, the
  // outflow sum ("2,347 + 2,038") and the −2,505 end level are no longer in the data.

  it("titles from the stated levels and states every step in the aria-label", () => {
    const { tile } = draw(base);
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      /^Cash from operations 2,045 after interest, tax and other items$/,
    );
    expect(
      within(tile).getByText(
        "Cash conversion · US$m, FY2024 from EBITDA As Defined; FY2023 beneath",
      ),
    ).toBeVisible();
    // Ruling i: the reading names the stated rows only, with no derived step.
    const label = within(tile).getByRole("img").getAttribute("aria-label") ?? "";
    for (const part of [
      "EBITDA (Adjusted) 4,173",
      "Interest Paid 1,158",
      "cash taxes paid 539",
      "Cash from Operating Activities 2,045",
      "levered free cash flow 1,880",
      "less dividends and dividend equivalent payments 2,038",
      "repurchases of common stock not stated",
      "discretionary cash flow after distributions −158, negative",
      "less acquisition of businesses, net of cash acquired 2,347",
      "discretionary cash flow after distributions 1,198",
    ])
      expect(label).toContain(part);
    expect(label).not.toMatch(/derived|not itemised|2,505|4,385/);
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
    expect(rows[1]).toEqual(["EBITDA (Adjusted)", "4,173", "3,395", "stated"]);
    expect(rows[4]).toEqual(["Net Cash from Operating Activities", "2,045", "1,375", "stated"]);
    expect(rows[8]).toEqual([
      "Repurchases of common stock",
      "Not supplied: source dash",
      "Not supplied: source dash",
      "stated",
    ]);
    expect(rows[9]).toEqual([
      "Discretionary cash flow after distributions",
      "−158 (negative)",
      "1,198",
      "stated",
    ]);
    const text = view.container.textContent;
    expect(containsReference(text)).toBe(false);
    expect(text).not.toMatch(/\.jsonl|page \d|CP-1|T4\.5/);
    expect(containsReference(within(tile).getByRole("img").getAttribute("aria-label") ?? "")).toBe(
      false,
    );
    // Ruling i: with no plug, the stated steps do not reach the stated cash from operations.
    expect(within(tile).getAllByText(/do not sum exactly/).length).toBeGreaterThan(0);
  });

  it("wraps a long stated label onto two lines", () => {
    const { tile } = draw(base);
    const lines = [...tile.querySelectorAll("tspan")].map((span) => span.textContent);
    expect(lines).toContain("Net Cash from Operating");
    expect(lines).toContain("Activities");
  });
});

describe("CashLadderTile states", () => {
  it("draws a stated gap hatched with its reason, no bar, and does not derive what depends on it", () => {
    const { tile, mark } = draw(
      withCells(CASH, { "Cash taxes paid": "Not supplied: refund netting unclear" }),
    );
    expect(mark('[data-step="taxes"]')).toBeNull();
    expect(mark('[data-gap="taxes"]')).not.toBeNull();
    // Ruling i: no remainder step exists to derive.
    expect(mark('[data-step="remainder"]')).toBeNull();
    expect(
      within(tile).getByText("Cash taxes paid, FY2024: Not supplied: refund netting unclear."),
    ).toBeVisible();
    // Stated levels still draw, from their own figures.
    expect(num(mark('[data-step="cfo"]'), "width")).toBeCloseTo(2045 * PER, 6);
    expect(mark('[data-step="interest"]')).not.toBeNull();
    expect(within(tile).getByRole("img").getAttribute("aria-label")).toContain(
      "cash taxes paid not stated",
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
    expect(within(tile).getByRole("img").getAttribute("aria-label")).toContain(
      "; capital expenditures 0;",
    );
    expect(mark('[data-mismatch="fcf"]')).toBeNull();
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
    // Ten steps now (round 2): the eight not stated are gaps with their reason.
    expect(tile.querySelectorAll("[data-gap]")).toHaveLength(8);
    expect(
      within(within(tile).getByRole("img")).getByText("Cash interest paid is not in the handoff."),
    ).toBeInTheDocument();
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      "Cash from operations −50 after interest, tax and other items",
    );
    // A negative stated level is drawn left of zero.
    const cfo = mark('[data-step="cfo"]');
    expect(right(cfo)).toBeCloseTo(num(mark("[data-zero]"), "x1"), 6);
    expect(num(mark('[data-step="start"]'), "width") / num(cfo, "width")).toBeCloseTo(500 / 50, 6);
    expect(within(tile).getByRole("img").getAttribute("aria-label")).toContain(
      "Cash from Operating Activities −50, negative;",
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
