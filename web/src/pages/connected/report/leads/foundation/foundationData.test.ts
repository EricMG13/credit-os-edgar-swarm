// Expected values are written out by hand from the retained TransDigm FY2024 CP-1 handoff
// (tests/fixtures/live_2026_11_15/earnings_update-CP-1-draft3-accepted.md), not computed by the code
// under test. The handoff is outdated evidence: shape and scope only.
import { describe, expect, it } from "vitest";
import type { Block, OutputEntry, Table } from "../../../publishedReport";
import { cp1Entry } from "../fixtures/load";
import {
  cashLadder,
  earningsAgainstDebt,
  ebitdaBridge,
  netDebtView,
  segmentView,
} from "./foundationData";

const entry = cp1Entry();

/** The same handoff with one table replaced or a cell edited, for the adversarial cases. */
function edited(change: (table: Table, heading: string) => Table | null): OutputEntry {
  return {
    ...entry,
    sections: entry.sections.map((section) => ({
      ...section,
      blocks: section.blocks.flatMap((block): Block[] => {
        if (block.type !== "table") return [block];
        const next = change(block, section.heading);
        return next ? [next] : [];
      }),
    })),
  };
}
const setCell = (heading: string, row: number, column: string, text: string) =>
  edited((table, at) => {
    if (at !== heading) return table;
    const index = table.headers.indexOf(column);
    return {
      ...table,
      rows: table.rows.map((item, n) =>
        n === row
          ? { ...item, cells: item.cells.map((cell, m) => (m === index ? text : cell)) }
          : item,
      ),
    };
  });
const dropTable = (heading: string) => edited((table, at) => (at === heading ? null : table));

describe("earningsAgainstDebt", () => {
  const data = earningsAgainstDebt(entry);
  it("reads the four money measures of both periods on one unit", () => {
    expect(data?.unit).toBe("US$m");
    expect(data?.priorLabel).toBe("FY2023");
    expect(data?.currentLabel).toBe("FY2024");
    const row = (key: string) => data?.measures.find((m) => m.key === key);
    expect([row("sales")?.pair.prior.cell.text, row("sales")?.pair.current.cell.text]).toEqual([
      "6585",
      "7940",
    ]);
    expect([
      row("reportedEbitda")?.pair.prior.cell.text,
      row("reportedEbitda")?.pair.current.cell.text,
    ]).toEqual(["3148", "3813"]);
    expect([
      row("adjustedEbitda")?.pair.prior.cell.text,
      row("adjustedEbitda")?.pair.current.cell.text,
    ]).toEqual(["3395", "4173"]);
    expect([
      row("grossDebt")?.pair.prior.cell.text,
      row("grossDebt")?.pair.current.cell.text,
    ]).toEqual(["19750", "24880"]);
  });
  it("derives each change exactly and the growth to two decimals", () => {
    const row = (key: string) => data?.measures.find((m) => m.key === key);
    expect(row("sales")?.change).toBe("1355");
    expect(row("sales")?.growth).toBe("20.58");
    expect(row("reportedEbitda")?.change).toBe("665");
    expect(row("reportedEbitda")?.growth).toBe("21.12");
    expect(row("adjustedEbitda")?.growth).toBe("22.92");
    expect(row("grossDebt")?.change).toBe("5130");
    expect(row("grossDebt")?.growth).toBe("25.97");
  });
  it("reads total debt / EBITDA with the owner's tone: a rise is worse", () => {
    expect(data?.leverage?.pair.prior.cell.text).toBe("6.27");
    expect(data?.leverage?.pair.current.cell.text).toBe("6.53");
    expect(data?.leverage?.change).toBe("0.26");
    expect(data?.leverage?.tone).toBe("worse");
  });
  it("names a measure the handoff does not carry instead of drawing it", () => {
    const gone = earningsAgainstDebt(dropTable("Net debt data"));
    expect(gone?.measures.map((m) => m.key)).toEqual(["sales", "reportedEbitda", "adjustedEbitda"]);
    expect(gone?.absent).toEqual([
      { label: "Gross debt", reason: "Gross debt is not in the handoff." },
    ]);
  });
  it("keeps a stated gap as a gap: no change, no growth, never zero", () => {
    const gap = earningsAgainstDebt(
      setCell("Net debt data", 1, "Gross debt", "Not supplied: not extracted"),
    );
    const debt = gap?.measures.find((m) => m.key === "grossDebt");
    expect(debt?.pair.current.cell).toMatchObject({ kind: "gap", reason: "not extracted" });
    expect(debt?.change).toBeNull();
    expect(debt?.growth).toBeNull();
  });
  it("refuses a measure stated for other periods or in another unit", () => {
    const unit = earningsAgainstDebt(
      edited((table, at) =>
        at === "Net debt data"
          ? {
              ...table,
              rows: table.rows.map((r) => ({
                ...r,
                cells: r.cells.map((c) => (c === "US$m" ? "GBPm" : c)),
              })),
            }
          : table,
      ),
    );
    expect(unit?.absent.map((a) => a.reason)).toContain(
      "Gross debt is stated in a different unit.",
    );
  });
  it("returns nothing when the anchor table is missing", () => {
    expect(earningsAgainstDebt(dropTable("Chart data: revenue and EBITDA"))).toBeNull();
  });
});

describe("cashLadder", () => {
  const ladder = cashLadder(entry);
  it("walks FY2024 from EBITDA As Defined to free cash flow after acquisitions and distributions", () => {
    expect(ladder?.currentLabel).toBe("FY2024");
    expect(ladder?.steps.map((s) => s.key)).toEqual([
      "start",
      "interest",
      "taxes",
      "remainder",
      "cfo",
      "capex",
      "fcf",
      "outflows",
      "end",
    ]);
    expect(ladder?.steps.map((s) => s.current.text)).toEqual([
      "4173",
      "-1158",
      "-539",
      "-431",
      "2045",
      "-165",
      "1880",
      "-4385",
      "-2505",
    ]);
  });
  it("carries FY2023 beneath: 3,395, 1,375, 1,236 and 436 as the levels", () => {
    expect(ladder?.steps.map((s) => s.prior.text)).toEqual([
      "3395",
      "-1160",
      "-260",
      "-600",
      "1375",
      "-139",
      "1236",
      "-800",
      "436",
    ]);
  });
  it("labels exactly the derived steps: the remainder, the outflow sum and the end level", () => {
    expect(ladder?.steps.filter((s) => s.current.derived).map((s) => s.key)).toEqual([
      "remainder",
      "outflows",
      "end",
    ]);
    expect(ladder?.outflowParts.current).toEqual(["-2347", "-2038"]);
  });
  it("shows a missing tax line as a gap and does not derive the remainder from it", () => {
    const table = entry.sections.find((s) => s.heading === "T4.5 Cash flow statement")?.blocks[0];
    if (table?.type !== "table") throw new Error("fixture lost T4.5");
    const index = table.rows.findIndex((r) => r.cells[0] === "Cash taxes paid");
    const gap = cashLadder(
      setCell("T4.5 Cash flow statement", index, "FY2024", "Not supplied: refund netting unclear"),
    );
    const taxes = gap?.steps.find((s) => s.key === "taxes");
    expect(taxes?.current).toMatchObject({ value: null, reason: "refund netting unclear" });
    expect(gap?.steps.find((s) => s.key === "remainder")?.current.value).toBeNull();
    expect(gap?.steps.find((s) => s.key === "cfo")?.current.text).toBe("2045");
    expect(gap?.steps.find((s) => s.key === "end")?.current.text).toBe("-2505");
  });
  it("is absent when the statement or its anchor rows are", () => {
    expect(cashLadder(dropTable("T4.5 Cash flow statement"))).toBeNull();
  });
});

describe("netDebtView", () => {
  const view = netDebtView(entry);
  it("reads gross debt, cash and net debt for both periods", () => {
    expect(view?.unit).toBe("US$m");
    expect(view?.periods.map((p) => [p.label, p.gross.text, p.cash.text, p.net.text])).toEqual([
      ["FY2023", "19750", "3472", "16278"],
      ["FY2024", "24880", "6261", "18619"],
    ]);
  });
  it("reads net debt / EBITDA for each period from the leverage table", () => {
    expect(view?.periods.map((p) => p.leverage?.text)).toEqual(["5.17", "4.88"]);
  });
  it("draws the largest stated adjustment as the pro forma and lists the others in words", () => {
    expect(view?.proForma).toMatchObject({
      event: "Special dividend and dividend equivalent settlement",
      date: "2024-10-18",
    });
    expect(view?.proForma?.amount.text).toBe("4348");
    expect(view?.proForma?.netDebt.text).toBe("22967");
    expect(view?.proForma?.leverage.text).toBe("6.02");
    expect(view?.otherAdjustments.map((a) => a.event)).toEqual([
      "Remaining securitization draw",
      "Common-stock repurchases",
      "Raptor acquisition working-capital settlement received",
      "CPI acquisition working-capital settlement paid",
    ]);
  });
  it("states liquidity cash and undrawn facilities per period", () => {
    expect(view?.liquidity.map((l) => [l.label, l.cash.text, l.undrawn.text])).toEqual([
      ["FY2023", "3472", "755"],
      ["FY2024", "6261", "843"],
    ]);
  });
  it("draws no pro forma when no adjustment row states one", () => {
    const none = netDebtView(dropTable("Post-balance-sheet adjustments"));
    expect(none?.proForma).toBeNull();
    expect(none?.otherAdjustments).toEqual([]);
  });
  it("ignores an adjustment whose pro forma net debt is a gap", () => {
    const gap = netDebtView(
      setCell(
        "Post-balance-sheet adjustments",
        1,
        "Pro forma net debt",
        "Not supplied: not stated",
      ),
    );
    expect(gap?.proForma?.event).not.toBe("Special dividend and dividend equivalent settlement");
  });
});

describe("ebitdaBridge", () => {
  const bridge = ebitdaBridge(entry);
  it("reads the steps in order with opening, changes and closing", () => {
    expect(bridge?.steps.map((s) => [s.kind, s.cell.text])).toEqual([
      ["opening", "3813"],
      ["change", "70"],
      ["change", "217"],
      ["change", "58"],
      ["change", "15"],
      ["closing", "4173"],
    ]);
  });
  it("reconciles exactly and totals the add-backs as 360", () => {
    expect(bridge?.reconciles).toBe(true);
    expect(bridge?.addBacks).toBe("360");
  });
  it("does not call a bridge reconciled when a step is altered", () => {
    const off = ebitdaBridge(setCell("Chart data: EBITDA bridge", 2, "Amount", "218"));
    expect(off?.reconciles).toBe(false);
  });
  it("has no add-back total when a step is a gap", () => {
    const gap = ebitdaBridge(
      setCell("Chart data: EBITDA bridge", 2, "Amount", "Not supplied: not stated"),
    );
    expect(gap?.reconciles).toBe(false);
    expect(gap?.addBacks).toBeNull();
  });
});

describe("segmentView", () => {
  const view = segmentView(entry);
  it("reads the latest period only, one row per business unit", () => {
    expect(view?.period).toBe("FY2024");
    expect(view?.segments.map((s) => [s.name, s.sales.text, s.ebitda.text])).toEqual([
      ["Power & Control", "3941", "2236"],
      ["Airframe", "3809", "1962"],
      ["Non-aviation", "190", "81"],
    ]);
  });
  it("lists unallocated corporate apart, with its stated EBITDA and no sales", () => {
    expect(view?.apart.map((s) => [s.name, s.ebitda.text])).toEqual([
      ["Unallocated corporate", "-106"],
    ]);
    expect(view?.apart[0]?.sales.kind).toBe("gap");
  });
  it("sums segment sales to 7,940 and EBITDA including corporate to 4,173 (derived)", () => {
    expect(view?.salesTotal).toBe("7940");
    expect(view?.ebitdaTotal).toBe("4173");
    expect(view?.groupSales?.text).toBe("7940");
    expect(view?.groupEbitda?.text).toBe("4173");
  });
  it("keeps a business unit whose sales are a gap as a unit with the gap, and gives no sales total", () => {
    const gap = segmentView(setCell("Segment schedule", 1, "Net sales", "Not supplied: no line"));
    expect(gap?.segments.map((s) => s.name)).toEqual([
      "Power & Control",
      "Airframe",
      "Non-aviation",
    ]);
    expect(gap?.segments[1]?.sales).toMatchObject({ kind: "gap", reason: "no line" });
    expect(gap?.salesTotal).toBeNull();
  });
});

describe("review fixes", () => {
  it("reads prior and current by year when Net debt data lists the later year first", () => {
    const flipped = edited((table, at) =>
      at === "Net debt data" ? { ...table, rows: [...table.rows].reverse() } : table,
    );
    const view = netDebtView(flipped);
    expect(view?.periods.map((p) => [p.label, p.net.text])).toEqual([
      ["FY2023", "16278"],
      ["FY2024", "18619"],
    ]);
  });
  it("keeps an adjustment whose pro forma is a stated gap, listed with its reason, never dropped", () => {
    const gap = netDebtView(
      setCell(
        "Post-balance-sheet adjustments",
        1,
        "Pro forma net debt",
        "Not supplied: pricing pending",
      ),
    );
    const listed = [gap?.proForma, ...(gap?.otherAdjustments ?? [])].map((a) => a?.event);
    expect(listed).toContain("Special dividend and dividend equivalent settlement");
    const dividend = gap?.otherAdjustments.find((a) => a.event.startsWith("Special dividend"));
    expect(dividend?.netDebt).toMatchObject({ kind: "gap", reason: "pricing pending" });
  });
  it("calls a bridge reconciled when the sum equals the closing figure numerically (3148.0 + 1025 = 4173)", () => {
    const decimals = edited((table, at) =>
      at === "Chart data: EBITDA bridge"
        ? {
            ...table,
            rows: [
              { ...table.rows[0]!, cells: ["EBITDA (Reported)", "3148.0", "US$m", "x"] },
              { ...table.rows[1]!, cells: ["Add-backs", "1025", "US$m", "x"] },
              { ...table.rows[5]!, cells: ["EBITDA (Adjusted)", "4173", "US$m", "x"] },
            ],
          }
        : table,
    );
    expect(ebitdaBridge(decimals)?.reconciles).toBe(true);
  });
});
