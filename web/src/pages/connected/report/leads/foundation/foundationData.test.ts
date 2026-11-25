// Expected values are written out by hand from the retained TransDigm CP-1 handoffs
// (tests/fixtures/live_2026_11_15/: earnings_update-CP-1-draft3-accepted.md, relative_value-CP-1-draft1.md,
// distressed-CP-1-draft1.md, earnings_update-CP-1-draft1.md), not computed by the code under test.
// The handoffs are outdated evidence (FY2024): shape and scope only. Mutated entries
// (fixtures/mutations.ts) are test inputs, not real handoffs.
import { describe, expect, it } from "vitest";
import type { OutputEntry } from "../../../publishedReport";
import type { Reading } from "../kit/numbers";
import {
  cp1Entry,
  distressedCp1Entry,
  earningsUpdateCp1Draft1Entry,
  relativeValueCp1Entry,
} from "../fixtures/load";
import {
  addRow,
  dropTable,
  edited,
  ltmCp1,
  setCell,
  setLabelled,
  threePeriodCp1,
  withRows,
} from "../fixtures/mutations";
import {
  basisText,
  bridgeKind,
  bridgeKinds,
  cashLadder,
  earningsAgainstDebt,
  ebitdaBridge,
  figureGap,
  NO_ADJUSTMENT,
  netDebtView,
  segmentView,
  statedPeriods,
  type PeriodCell,
} from "./foundationData";

const accepted = cp1Entry();
const relative = relativeValueCp1Entry();
const distressed = distressedCp1Entry();
const draft1 = earningsUpdateCp1Draft1Entry();

/** A reading as a short string: the number text, `gap: <reason>`, `text: <words>`, or null. */
const shown = (cell: Reading | null | undefined) => {
  if (!cell) return null;
  if (cell.kind === "gap") return `gap: ${cell.reason}`;
  return cell.kind === "text" ? `text: ${cell.text}` : cell.text;
};
const cells = (values: readonly PeriodCell[] | undefined) =>
  values?.map((value) => [value.label, shown(value.cell)]);

// ------------------------------------------------------------------------------------------------

describe("statedPeriods: the periods the figures cover", () => {
  it("lists FY2023 and FY2024 for the accepted handoff, annual, compared", () => {
    const periods = statedPeriods(accepted);
    expect(periods.labels).toEqual(["FY2023", "FY2024"]);
    expect(periods.kind).toBe("annual");
    expect(periods.comparison).toEqual({ from: "FY2023", to: "FY2024" });
    expect(periods.gaps).toEqual([]);
    expect(periods.tables.map((t) => t.table)).toEqual([
      "Revenue and EBITDA",
      "Net debt data",
      "Leverage",
      "Liquidity",
      "Income statement",
      "Cash flow statement",
      "Segment schedule",
    ]);
  });
  it("lists the one period of the relative value handoff and draws no comparison", () => {
    const periods = statedPeriods(relative);
    expect(periods.labels).toEqual(["FY2024"]);
    expect(periods.kind).toBe("annual");
    expect(periods.comparison).toBeNull();
  });
  it("lists all three periods of the three-period mutation, FY2022 first", () => {
    const periods = statedPeriods(threePeriodCp1());
    expect(periods.labels).toEqual(["FY2022", "FY2023", "FY2024"]);
    expect(periods.comparison).toEqual({ from: "FY2023", to: "FY2024" });
  });
  it("lists an LTM period as its own kind beside the annual periods", () => {
    const periods = statedPeriods(ltmCp1());
    expect(periods.labels).toEqual(["FY2023", "FY2024", "LTM Dec-2024"]);
    expect(periods.periods.map((p) => p.kind)).toEqual(["annual", "annual", "other"]);
    expect(periods.kind).toBe("other");
    expect(periods.comparison).toEqual({ from: "FY2023", to: "FY2024" });
  });
  it("states a repeated year as a gap for that table, with the reason", () => {
    const twice = addRow(accepted, "Net debt data", [
      "FY2024 / 2024-09-30",
      "1",
      "1",
      "0",
      "US$m",
      "Mutation.",
    ]);
    expect(statedPeriods(twice).gaps).toEqual([
      { table: "Net debt data", reason: "FY2024 is stated more than once." },
    ]);
    expect(statedPeriods(twice).labels).toEqual(["FY2023", "FY2024"]);
  });
});

// ------------------------------------------------------------------------------------------------

describe("earningsAgainstDebt", () => {
  it("reads the four measures of both accepted periods on US$m, with each exact change", () => {
    const data = earningsAgainstDebt(accepted);
    expect(data?.unit).toBe("US$m");
    expect(data?.periods.map((p) => p.label)).toEqual(["FY2023", "FY2024"]);
    expect(data?.comparison).toEqual({ from: "FY2023", to: "FY2024" });
    expect(
      data?.measures.map((m) => [m.key, m.label, ...(cells(m.values) ?? []), m.change]),
    ).toEqual([
      ["sales", "Revenue", ["FY2023", "6585"], ["FY2024", "7940"], "1355"],
      ["reportedEbitda", "EBITDA (Reported)", ["FY2023", "3148"], ["FY2024", "3813"], "665"],
      ["adjustedEbitda", "Adjusted EBITDA", ["FY2023", "3395"], ["FY2024", "4173"], "778"],
      ["grossDebt", "Gross debt", ["FY2023", "19750"], ["FY2024", "24880"], "5130"],
    ]);
    expect(data?.absent).toEqual([]);
  });
  it("returns no growth rate: the module writes none (ruling i)", () => {
    const measure = earningsAgainstDebt(accepted)?.measures[0];
    expect(measure && "growth" in measure).toBe(false);
  });
  it("reads total debt / EBITDA with the owner's tone: a rise of 0.26 is worse", () => {
    const leverage = earningsAgainstDebt(accepted)?.leverage;
    expect(cells(leverage?.values)).toEqual([
      ["FY2023", "6.27"],
      ["FY2024", "6.53"],
    ]);
    expect(leverage?.change).toBe("0.26");
    expect(leverage?.tone).toBe("worse");
  });
  it("reads the leverage basis from the table's own cell, leaving out the clause that cites pages", () => {
    const data = earningsAgainstDebt(accepted);
    expect(data?.leverageBasis).toBe(
      "Carrying debt; reported EBITDA; dividend-only pro forma 6.02x after 2024-10-18.",
    );
    expect(data?.leverage?.bases).toEqual([
      "Carrying debt; reported EBITDA; before subsequent events.",
      "Carrying debt; reported EBITDA; dividend-only pro forma 6.02x after 2024-10-18.",
    ]);
  });
  it("gives figures for the single-period relative value handoff, and no comparison", () => {
    const data = earningsAgainstDebt(relative);
    expect(data?.periods.map((p) => p.label)).toEqual(["FY2024"]);
    expect(data?.comparison).toBeNull();
    expect(data?.measures.map((m) => [m.key, ...(cells(m.values) ?? []), m.change])).toEqual([
      ["sales", ["FY2024", "7940"], null],
      ["reportedEbitda", ["FY2024", "3813"], null],
      ["adjustedEbitda", ["FY2024", "4173"], null],
      ["grossDebt", ["FY2024", "24880"], null],
    ]);
    expect(cells(data?.leverage?.values)).toEqual([["FY2024", "6.53"]]);
    expect(data?.leverage?.change).toBeNull();
    expect(data?.leverage?.tone).toBe("none");
    expect(data?.leverageBasis).toBe(
      "Carrying debt and reported EBITDA, not EBITDA As Defined; Before October payments and draw; subsequent-event table keeps adjustments separate.",
    );
  });
  it("reads the distressed handoff's basis without its calculation id or page citation", () => {
    const data = earningsAgainstDebt(distressed);
    expect(data?.measures.map((m) => m.change)).toEqual(["1355", "665", "778", "5130"]);
    expect(data?.leverageBasis).toBe(
      "Carrying-value debt divided by issuer unadjusted EBITDA 3813 US$m; October distribution excluded.",
    );
  });
  it("reads the draft 1 handoff the same as the accepted one", () => {
    const data = earningsAgainstDebt(draft1);
    expect(data?.measures.map((m) => m.change)).toEqual(["1355", "665", "778", "5130"]);
    expect(data?.tableLine).toBe(392);
  });
  it("draws every period of the three-period mutation, gaps in place with their reason", () => {
    const data = earningsAgainstDebt(threePeriodCp1());
    expect(data?.periods.map((p) => p.label)).toEqual(["FY2022", "FY2023", "FY2024"]);
    expect(data?.measures.map((m) => cells(m.values))).toEqual([
      [
        ["FY2022", "gap: outside the comparison scope"],
        ["FY2023", "6585"],
        ["FY2024", "7940"],
      ],
      [
        ["FY2022", "2646"],
        ["FY2023", "3148"],
        ["FY2024", "3813"],
      ],
      [
        ["FY2022", "2646"],
        ["FY2023", "3395"],
        ["FY2024", "4173"],
      ],
      [
        ["FY2022", "gap: outside the comparison scope"],
        ["FY2023", "19750"],
        ["FY2024", "24880"],
      ],
    ]);
    expect(data?.measures.map((m) => m.change)).toEqual(["1355", "665", "778", "5130"]);
    expect(cells(data?.leverage?.values)?.[0]).toEqual([
      "FY2022",
      "gap: outside the comparison scope",
    ]);
  });
  it("still reads the annual periods beside an LTM row, and lists the LTM period", () => {
    const data = earningsAgainstDebt(ltmCp1());
    expect(data?.periods.map((p) => p.label)).toEqual(["FY2023", "FY2024", "LTM Dec-2024"]);
    expect(data?.comparison).toEqual({ from: "FY2023", to: "FY2024" });
    const sales = data?.measures.find((m) => m.key === "sales");
    expect(cells(sales?.values)).toEqual([
      ["FY2023", "6585"],
      ["FY2024", "7940"],
      ["LTM Dec-2024", "8000"],
    ]);
    expect(sales?.change).toBe("1355");
    const reported = data?.measures.find((m) => m.key === "reportedEbitda");
    expect(reported?.values[2]).toEqual({ label: "LTM Dec-2024", cell: null, line: null });
  });
  it("names a measure the handoff does not carry instead of drawing it", () => {
    const gone = earningsAgainstDebt(dropTable(accepted, "Net debt data"));
    expect(gone?.measures.map((m) => m.key)).toEqual(["sales", "reportedEbitda", "adjustedEbitda"]);
    expect(gone?.absent).toEqual([
      { label: "Gross debt", reason: "Gross debt is not in the handoff." },
    ]);
  });
  it("keeps a stated gap as a gap: no change, never zero", () => {
    const gap = earningsAgainstDebt(
      setCell(accepted, "Net debt data", 1, "Gross debt", "Not supplied: not extracted"),
    );
    const debt = gap?.measures.find((m) => m.key === "grossDebt");
    expect(shown(debt?.values[1]?.cell)).toBe("gap: not extracted");
    expect(debt?.change).toBeNull();
  });
  it("keeps words where a number is expected as words, with no change", () => {
    const words = earningsAgainstDebt(
      setCell(accepted, "Chart data: revenue and EBITDA", 1, "Revenue", "about 7,900"),
    );
    const sales = words?.measures.find((m) => m.key === "sales");
    expect(shown(sales?.values[1]?.cell)).toBe("text: about 7,900");
    expect(sales?.change).toBeNull();
  });
  it("keeps a stated zero as a value and a negative change as negative", () => {
    const zero = earningsAgainstDebt(
      setCell(accepted, "Chart data: revenue and EBITDA", 1, "Revenue", "0"),
    );
    const sales = zero?.measures.find((m) => m.key === "sales");
    expect(shown(sales?.values[1]?.cell)).toBe("0");
    expect(sales?.change).toBe("-6585");
  });
  it("refuses a measure in another unit, or in more than one unit", () => {
    const allGbp = edited(accepted, (table, at) =>
      at === "Net debt data"
        ? {
            ...table,
            rows: table.rows.map((r) => ({
              ...r,
              cells: r.cells.map((c) => (c === "US$m" ? "GBPm" : c)),
            })),
          }
        : table,
    );
    expect(earningsAgainstDebt(allGbp)?.absent).toEqual([
      { label: "Gross debt", reason: "Gross debt is stated in another unit." },
    ]);
    const mixed = setCell(accepted, "Net debt data", 0, "Reporting unit", "GBPm");
    expect(earningsAgainstDebt(mixed)?.absent).toEqual([
      { label: "Gross debt", reason: "Gross debt is not stated in one unit." },
    ]);
  });
  it("names a repeated year as the reason a measure is not drawn", () => {
    const twice = addRow(accepted, "Net debt data", [
      "FY2024 / 2024-09-30",
      "1",
      "1",
      "0",
      "US$m",
      "Mutation.",
    ]);
    expect(earningsAgainstDebt(twice)?.absent).toEqual([
      { label: "Gross debt", reason: "Net debt data: FY2024 is stated more than once." },
    ]);
  });
  it("draws an empty or gap-only table as stated: empty is a reason, gaps stay gaps", () => {
    const empty = earningsAgainstDebt(withRows(accepted, "Net debt data", []));
    expect(empty?.absent).toEqual([
      { label: "Gross debt", reason: "Net debt data: No period is stated." },
    ]);
    const gapsOnly = earningsAgainstDebt(
      withRows(accepted, "Net debt data", [
        [
          "FY2024 / 2024-09-30",
          "Not supplied: x",
          "Not supplied: x",
          "Not supplied: x",
          "US$m",
          "-",
        ],
      ]),
    );
    const debt = gapsOnly?.measures.find((m) => m.key === "grossDebt");
    expect(cells(debt?.values)).toEqual([
      ["FY2023", null],
      ["FY2024", "gap: x"],
    ]);
  });
  it("asserts no leverage basis the table does not state", () => {
    const noBasis = earningsAgainstDebt(
      setCell(accepted, "Chart data: leverage", 1, "Basis and limitation", ""),
    );
    expect(noBasis?.leverageBasis).toBeNull();
    const cited = earningsAgainstDebt(
      setCell(accepted, "Chart data: leverage", 1, "Basis and limitation", "Annual p120."),
    );
    expect(cited?.leverageBasis).toBe("Detail is in Evidence.");
  });
  it("returns nothing when no measure table is readable", () => {
    let none: OutputEntry = accepted;
    for (const heading of [
      "Chart data: revenue and EBITDA",
      "Net debt data",
      "T4.4 Income statement",
    ])
      none = dropTable(none, heading);
    expect(earningsAgainstDebt(none)).toBeNull();
  });
});

// ------------------------------------------------------------------------------------------------

describe("basisText", () => {
  it("keeps the module's clauses and leaves out those that cite a source or calculation", () => {
    expect(basisText("Reported cash; annual p120, p152; excludes receivables.")).toBe(
      "Reported cash; excludes receivables.",
    );
    expect(basisText("Calculated C3; annual filing pages 71 and 120.")).toBe(
      "Detail is in Evidence.",
    );
    expect(basisText("")).toBeNull();
  });
});

// ------------------------------------------------------------------------------------------------

type Ladder = NonNullable<ReturnType<typeof cashLadder>>;
const ladderRows = (ladder: Ladder | null) =>
  ladder?.steps.map((s) => [s.key, s.kind, s.label, ...s.values.map((v) => shown(v.cell))]);

describe("cashLadder: the handoff's own levels and deductions, as written", () => {
  it("walks the accepted handoff's stated rows for FY2023 and FY2024, no plug and no end level", () => {
    const ladder = cashLadder(accepted);
    expect(ladder?.unit).toBe("US$m");
    expect(ladder?.periods.map((p) => p.label)).toEqual(["FY2023", "FY2024"]);
    expect(ladder?.comparison).toEqual({ from: "FY2023", to: "FY2024" });
    expect(ladderRows(ladder)).toEqual([
      ["ebitda", "level", "EBITDA (Adjusted)", "3395", "4173"],
      ["interest", "deduction", "Cash Interest Paid", "1160", "1158"],
      ["taxes", "deduction", "Cash taxes paid", "260", "539"],
      ["cfo", "level", "Net Cash from Operating Activities", "1375", "2045"],
      ["capex", "deduction", "Capital expenditures", "-139", "-165"],
      ["fcf", "level", "Levered free cash flow", "1236", "1880"],
      ["dividends", "deduction", "Dividends and dividend equivalent payments", "-38", "-2038"],
      [
        "repurchases",
        "deduction",
        "Repurchases of common stock",
        "gap: source dash",
        "gap: source dash",
      ],
      [
        "afterDistributions",
        "level",
        "Discretionary cash flow after distributions",
        "1198",
        "-158",
      ],
      [
        "acquisitions",
        "deduction",
        "Acquisition of businesses, net of cash acquired",
        "-762",
        "-2347",
      ],
    ]);
  });
  it("says how each deduction is written: paid amounts positive, other outflows signed", () => {
    expect(cashLadder(accepted)?.steps.map((s) => s.sign)).toEqual([
      null,
      "paid",
      "paid",
      null,
      "signed",
      null,
      "signed",
      "signed",
      null,
      "signed",
    ]);
  });
  it("matches an income-taxes-paid label form too", () => {
    const other = setLabelled(
      accepted,
      "T4.5 Cash flow statement",
      "Cash taxes paid",
      "Line item",
      "Income taxes paid, net",
    );
    const taxes = cashLadder(other)?.steps.find((s) => s.key === "taxes");
    expect([taxes?.label, ...(cells(taxes?.values) ?? [])]).toEqual([
      "Income taxes paid, net",
      ["FY2023", "260"],
      ["FY2024", "539"],
    ]);
  });
  it('matches the distressed handoff\'s "Cash taxes paid, net of refunds" and keeps the stated repurchase gap', () => {
    const ladder = cashLadder(distressed);
    expect(ladderRows(ladder)).toEqual([
      ["ebitda", "level", "EBITDA (Adjusted)", "3395", "4173"],
      ["interest", "deduction", "Cash Interest Paid", "1160", "1158"],
      ["taxes", "deduction", "Cash taxes paid, net of refunds", "260", "539"],
      ["cfo", "level", "Net Cash from Operating Activities", "1375", "2045"],
      ["capex", "deduction", "Capital expenditures", "-139", "-165"],
      ["fcf", "level", "Levered free cash flow", "1236", "1880"],
      ["dividends", "deduction", "Dividends and dividend equivalent payments", "-38", "-2038"],
      [
        "repurchases",
        "deduction",
        "Repurchases of common stock",
        "gap: source dash",
        "gap: source dash",
      ],
      ["afterDistributions", "level", "Cash flow after distributions", null, null],
      [
        "acquisitions",
        "deduction",
        "Acquisition of businesses, net of cash acquired",
        "-762",
        "-2347",
      ],
    ]);
    const after = ladder?.steps.find((s) => s.key === "afterDistributions");
    expect(after?.stated).toBe(false);
    expect(after?.absent).toBe("Cash flow after distributions is not in the handoff.");
  });
  it("reads the single-period relative value ladder with its own label forms", () => {
    expect(ladderRows(cashLadder(relative))).toEqual([
      ["ebitda", "level", "EBITDA (Adjusted)", "4173"],
      ["interest", "deduction", "Cash Interest Paid", "1158"],
      ["taxes", "deduction", "Cash Taxes Paid", "539"],
      ["cfo", "level", "Net Cash from Operating Activities", "2045"],
      ["capex", "deduction", "Capital expenditures", "-165"],
      ["fcf", "level", "Free cash flow, levered after working capital", "1880"],
      ["dividends", "deduction", "Dividends and dividend equivalent payments", "-2038"],
      ["repurchases", "deduction", "Repurchases of common stock", "gap: source dash"],
      [
        "afterDistributions",
        "level",
        "Discretionary cash flow after dividends and equivalents",
        "-158",
      ],
      ["acquisitions", "deduction", "Acquisition of businesses, net of cash acquired", "-2347"],
    ]);
    expect(cashLadder(relative)?.comparison).toBeNull();
  });
  it("carries every period of the three-period mutation: FY2022 all stated gaps", () => {
    const ladder = cashLadder(threePeriodCp1());
    expect(ladder?.periods.map((p) => p.label)).toEqual(["FY2022", "FY2023", "FY2024"]);
    expect(ladder?.steps.map((s) => shown(s.values[0]?.cell))).toEqual(
      Array(10).fill("gap: outside the comparison scope"),
    );
    expect(shown(ladder?.steps[0]?.values[2]?.cell)).toBe("4173");
  });
  it("shows a stated tax gap in place with its reason", () => {
    const gap = cashLadder(
      setLabelled(
        accepted,
        "T4.5 Cash flow statement",
        "Cash taxes paid",
        "FY2024",
        "Not supplied: refund netting unclear",
      ),
    );
    const taxes = gap?.steps.find((s) => s.key === "taxes");
    expect(cells(taxes?.values)).toEqual([
      ["FY2023", "260"],
      ["FY2024", "gap: refund netting unclear"],
    ]);
  });
  it("requires one match: two tax rows make the step absent with the reason", () => {
    const twice = addRow(accepted, "T4.5 Cash flow statement", [
      "Cash taxes paid, foreign",
      "1",
      "1",
      "USD millions",
      "Mutation",
      "-",
    ]);
    const taxes = cashLadder(twice)?.steps.find((s) => s.key === "taxes");
    expect(taxes?.stated).toBe(false);
    expect(taxes?.absent).toBe("Cash taxes paid matches more than one row of the statement.");
    expect(taxes?.values.map((v) => v.cell)).toEqual([null, null]);
  });
  it("refuses a step in another unit", () => {
    const other = setLabelled(
      accepted,
      "T4.5 Cash flow statement",
      "Capital expenditures",
      "Unit",
      "EUR millions",
    );
    const capex = cashLadder(other)?.steps.find((s) => s.key === "capex");
    expect(capex?.stated).toBe(false);
    expect(capex?.absent).toBe("Capital expenditures is stated in another unit.");
  });
  it("keeps the ladder when the income statement is missing, with the EBITDA step absent", () => {
    const ladder = cashLadder(dropTable(accepted, "T4.4 Income statement"));
    expect(ladder?.steps[0]).toMatchObject({
      key: "ebitda",
      stated: false,
      absent: "EBITDA (Adjusted): Income statement is not in the handoff.",
    });
  });
  it("is absent when the cash flow statement is", () => {
    expect(cashLadder(dropTable(accepted, "T4.5 Cash flow statement"))).toBeNull();
  });
});

// ------------------------------------------------------------------------------------------------

describe("netDebtView", () => {
  it("reads gross debt, cash, net debt and net leverage for every accepted period", () => {
    const view = netDebtView(accepted);
    expect(view?.unit).toBe("US$m");
    expect(
      view?.periods.map((p) => [p.label, p.gross.text, p.cash.text, p.net.text, p.leverage?.text]),
    ).toEqual([
      ["FY2023", "19750", "3472", "16278", "5.17"],
      ["FY2024", "24880", "6261", "18619", "4.88"],
    ]);
    expect(view?.comparison).toEqual({ from: "FY2023", to: "FY2024" });
  });
  it("lists every stated adjustment in handoff order, dates as written with a gap's reason", () => {
    const view = netDebtView(accepted);
    expect(
      view?.adjustments.map((a) => [
        a.event,
        shown(a.date),
        a.amount.text,
        a.netDebt.text,
        a.leverage.text,
        a.unit,
      ]),
    ).toEqual([
      ["Remaining securitization draw", "text: 2024-10-16", "0", "18619", "4.88", "US$m"],
      [
        "Special dividend and dividend equivalent settlement",
        "text: 2024-10-18",
        "4348",
        "22967",
        "6.02",
        "US$m",
      ],
      [
        "Common-stock repurchases",
        "gap: the source states first quarter FY2025 only",
        "316",
        "18935",
        "4.97",
        "US$m",
      ],
      [
        "Raptor acquisition working-capital settlement received",
        "gap: the source states first quarter FY2025 only",
        "-1",
        "18618",
        "4.88",
        "US$m",
      ],
      [
        "CPI acquisition working-capital settlement paid",
        "gap: the source states first quarter FY2025 only",
        "1",
        "18620",
        "4.88",
        "US$m",
      ],
    ]);
    expect(view?.adjustments[0]?.amount).toEqual({ kind: "number", text: "0", value: 0 });
    expect(view?.noAdjustments).toBe(false);
    expect(view?.noAdjustmentsWords).toBeNull();
  });
  it("states liquidity per period and the handoff's own cash plus available revolver figure", () => {
    const view = netDebtView(accepted);
    expect(view?.liquidity.map((l) => [l.label, l.cash.text, l.undrawn.text])).toEqual([
      ["FY2023", "3472", "755"],
      ["FY2024", "6261", "843"],
    ]);
    expect(view?.liquidityTotal?.label).toBe("Cash plus available revolver");
    expect(cells(view?.liquidityTotal?.values)).toEqual([
      ["FY2023", "4227"],
      ["FY2024", "7104"],
    ]);
  });
  it("gives the relative value handoff's one period, its two stated adjustments and no liquidity total", () => {
    const view = netDebtView(relative);
    expect(
      view?.periods.map((p) => [p.label, p.gross.text, p.cash.text, p.net.text, p.leverage?.text]),
    ).toEqual([["FY2024", "24880", "6261", "18619", "4.88"]]);
    expect(view?.comparison).toBeNull();
    expect(
      view?.adjustments.map((a) => [
        a.event,
        shown(a.date),
        a.amount.text,
        a.netDebt.text,
        a.leverage.text,
      ]),
    ).toEqual([
      [
        "Special dividend and vested dividend equivalents paid",
        "gap: the source states October 2024 only for the combined payment",
        "4348",
        "22967",
        "6.02",
      ],
      [
        "Remaining securitization availability drawn",
        "gap: the source states October 2024 only",
        "0",
        "22967",
        "6.02",
      ],
    ]);
    expect(view?.liquidity.map((l) => [l.label, l.cash.text, l.undrawn.text])).toEqual([
      ["FY2024", "6261", "1006"],
    ]);
    expect(view?.liquidityTotal).toBeNull();
  });
  it("reads the distressed handoff's adjustments in its own order", () => {
    expect(netDebtView(distressed)?.adjustments.map((a) => [a.event, shown(a.date)])).toEqual([
      ["Remaining securitization availability drawn", "text: 2024-10-16"],
      ["Special dividend and vested dividend equivalents paid", "text: 2024-10-18"],
    ]);
  });
  it("returns no adjustment, and the module's words, for the contract's none row", () => {
    const none = netDebtView(
      withRows(accepted, "Post-balance-sheet adjustments", [
        [
          NO_ADJUSTMENT,
          "—",
          "—",
          "—",
          "—",
          "US$m",
          "Synthetic; the annual report and its notes were read.",
        ],
      ]),
    );
    expect(none?.adjustments).toEqual([]);
    expect(none?.noAdjustments).toBe(true);
    expect(none?.noAdjustmentsWords).toEqual({
      event: "None found in the sources read",
      basis: "Synthetic; the annual report and its notes were read.",
    });
  });
  it("returns no adjustment and no none row when the table is absent", () => {
    const gone = netDebtView(dropTable(accepted, "Post-balance-sheet adjustments"));
    expect(gone?.adjustments).toEqual([]);
    expect(gone?.noAdjustments).toBe(false);
  });
  it("keeps an adjustment whose pro forma is a stated gap, with its reason", () => {
    const gap = netDebtView(
      setCell(
        accepted,
        "Post-balance-sheet adjustments",
        1,
        "Pro forma net debt",
        "Not supplied: pricing pending",
      ),
    );
    expect(shown(gap?.adjustments[1]?.netDebt)).toBe("gap: pricing pending");
  });
  it("reads every period of the three-period mutation, FY2022's gaps in place", () => {
    const view = netDebtView(threePeriodCp1());
    expect(view?.periods.map((p) => [p.label, shown(p.net), shown(p.leverage)])).toEqual([
      ["FY2022", "gap: outside the comparison scope", "gap: outside the comparison scope"],
      ["FY2023", "16278", "5.17"],
      ["FY2024", "18619", "4.88"],
    ]);
  });
  it("orders by year when the table lists the later year first", () => {
    const flipped = edited(accepted, (table, at) =>
      at === "Net debt data" ? { ...table, rows: [...table.rows].reverse() } : table,
    );
    expect(netDebtView(flipped)?.periods.map((p) => [p.label, p.net.text])).toEqual([
      ["FY2023", "16278"],
      ["FY2024", "18619"],
    ]);
  });
  it("is a gap for a repeated year or an empty table", () => {
    const twice = addRow(accepted, "Net debt data", [
      "FY2024 / 2024-09-30",
      "1",
      "1",
      "0",
      "US$m",
      "-",
    ]);
    expect(netDebtView(twice)).toBeNull();
    expect(netDebtView(withRows(accepted, "Net debt data", []))).toBeNull();
  });
});

// ------------------------------------------------------------------------------------------------

describe("ebitdaBridge", () => {
  it("reads the accepted steps as written, reconciles exactly, and returns no add-back total", () => {
    const bridge = ebitdaBridge(accepted);
    expect(bridge?.steps.map((s) => [s.kind, s.label, s.cell.text])).toEqual([
      ["opening", "EBITDA (Reported)", "3813"],
      ["change", "Acquisition transaction and integration-related expenses", "70"],
      ["change", "Non-cash stock and deferred compensation expense", "217"],
      ["change", "Refinancing costs", "58"],
      ["change", "Other, net", "15"],
      ["closing", "EBITDA (Adjusted)", "4173"],
    ]);
    expect(bridge?.reconciles).toBe(true);
    expect(bridge && "addBacks" in bridge).toBe(false);
    expect(bridge && bridgeKinds(bridge)).toEqual(["opening", "increase", "closing"]);
  });
  it("reads the distressed and relative value bridges with their own step labels", () => {
    expect(ebitdaBridge(distressed)?.steps.map((s) => s.label)).toEqual([
      "FY2024 reported EBITDA",
      "Acquisition transaction and integration-related expenses",
      "Non-cash stock and deferred compensation expense",
      "Refinancing costs",
      "Other, net",
      "FY2024 EBITDA As Defined",
    ]);
    expect(ebitdaBridge(distressed)?.reconciles).toBe(true);
    expect(ebitdaBridge(relative)?.reconciles).toBe(true);
  });
  it("calls a negative step a decrease and a stated zero no change, never an add-back", () => {
    const bridge = ebitdaBridge(
      withRows(accepted, "Chart data: EBITDA bridge", [
        ["EBITDA (Reported)", "100", "US$m", "-"],
        ["Disposal", "-10", "US$m", "-"],
        ["Other", "0", "US$m", "-"],
        ["EBITDA (Adjusted)", "90", "US$m", "-"],
      ]),
    );
    expect(bridge?.steps.map((s) => bridgeKind(s))).toEqual([
      "opening",
      "decrease",
      "no change",
      "closing",
    ]);
    expect(bridge?.reconciles).toBe(true);
  });
  it("does not reconcile a bridge whose step is altered or a gap; the gap is its own kind", () => {
    expect(
      ebitdaBridge(setCell(accepted, "Chart data: EBITDA bridge", 2, "Amount", "218"))?.reconciles,
    ).toBe(false);
    const gap = ebitdaBridge(
      setCell(accepted, "Chart data: EBITDA bridge", 2, "Amount", "Not supplied: not stated"),
    );
    expect(gap?.reconciles).toBe(false);
    expect(gap && bridgeKinds(gap)).toEqual(["opening", "increase", "gap", "closing"]);
  });
  it("reconciles numerically equal decimals (3148.0 + 1025 = 4173)", () => {
    const decimals = withRows(accepted, "Chart data: EBITDA bridge", [
      ["EBITDA (Reported)", "3148.0", "US$m", "x"],
      ["Add-backs", "1025", "US$m", "x"],
      ["EBITDA (Adjusted)", "4173", "US$m", "x"],
    ]);
    expect(ebitdaBridge(decimals)?.reconciles).toBe(true);
  });
});

// ------------------------------------------------------------------------------------------------

type View = NonNullable<ReturnType<typeof segmentView>>;
const segmentRows = (view: View | null, part: "segments" | "apart" = "segments") =>
  view?.[part].map((s) => [
    s.name,
    ...s.sales.map((v) => shown(v.cell)),
    ...s.ebitda.map((v) => shown(v.cell)),
  ]);

describe("segmentView: net sales and EBITDA per segment as written, no sum, no ratio", () => {
  it("reads the accepted schedule's two periods by year, corporate apart", () => {
    const view = segmentView(accepted);
    expect(view?.unit).toBe("US$m");
    expect(view?.periods.map((p) => p.label)).toEqual(["FY2023", "FY2024"]);
    expect([view?.salesLabel, view?.ebitdaLabel]).toEqual(["Net sales", "EBITDA As Defined"]);
    expect(segmentRows(view)).toEqual([
      ["Power & Control", "3316", "3941", "1866", "2236"],
      ["Airframe", "3094", "3809", "1547", "1962"],
      ["Non-aviation", "175", "190", "71", "81"],
    ]);
    expect(segmentRows(view, "apart")).toEqual([
      [
        "Unallocated corporate",
        "gap: no separate revenue line",
        "gap: no separate revenue line",
        "-89",
        "-106",
      ],
    ]);
    expect(view && ("salesTotal" in view || "ebitdaTotal" in view)).toBe(false);
  });
  it("reads the distressed schedule written one row per segment and measure", () => {
    const view = segmentView(distressed);
    expect([view?.salesLabel, view?.ebitdaLabel]).toEqual(["Revenue", "EBITDA As Defined"]);
    expect(segmentRows(view)).toEqual([
      ["Power & Control", "3316", "3941", "1866", "2236"],
      ["Airframe", "3094", "3809", "1547", "1962"],
      ["Non-aviation", "175", "190", "71", "81"],
    ]);
    expect(segmentRows(view, "apart")).toEqual([
      [
        "Corporate and eliminations",
        "gap: no separate revenue row",
        "gap: no separate revenue row",
        "-89",
        "-106",
      ],
    ]);
  });
  it("reads the relative value schedule's one period: segment totals, never the sub-lines summed", () => {
    const view = segmentView(relative);
    expect(view?.periods.map((p) => p.label)).toEqual(["FY2024"]);
    expect(view?.comparison).toBeNull();
    expect(segmentRows(view)).toEqual([
      ["Power & Control", "3941", "2236"],
      ["Airframe", "3809", "1962"],
      ["Non-aviation", "190", "81"],
    ]);
    expect(segmentRows(view, "apart")).toEqual([
      ["Corporate and eliminations", "gap: no monetary corporate revenue line", null],
      ["Unallocated corporate", null, "-106"],
    ]);
  });
  it("reads a wide schedule's segment rows and leaves out sub-lines and group totals", () => {
    const wide = withRows(distressed, "Segment schedule", [
      ["Alpha revenue", "10", "12", "USD millions", "-", "-"],
      ["Alpha — Defense sales", "4", "5", "USD millions", "-", "-"],
      ["Alpha — Commercial", "6", "7", "USD millions", "-", "-"],
      ["Total Beta", "20", "0", "USD millions", "-", "-"],
      ["Total segment revenue", "30", "12", "USD millions", "-", "-"],
      ["Alpha EBITDA As Defined", "-1", "2", "USD millions", "-", "-"],
      ["Total EBITDA As Defined", "9", "9", "USD millions", "-", "-"],
    ]);
    const view = segmentView(wide);
    expect(segmentRows(view)).toEqual([
      ["Alpha", "10", "12", "-1", "2"],
      ["Beta", "20", "0", null, null],
    ]);
    expect(view?.apart).toEqual([]);
  });
  it("keeps a business unit whose sales are a gap as a unit with the gap", () => {
    const gap = segmentView(
      setCell(accepted, "Segment schedule", 1, "Net sales", "Not supplied: no line"),
    );
    expect(gap?.segments.map((s) => s.name)).toEqual([
      "Power & Control",
      "Airframe",
      "Non-aviation",
    ]);
    expect(shown(gap?.segments[1]?.sales[1]?.cell)).toBe("gap: no line");
  });
  it("is a gap when one figure is stated twice", () => {
    const twice = addRow(accepted, "Segment schedule", [
      "Airframe",
      "FY2024",
      "1",
      "1",
      "USD millions",
      "-",
      "-",
    ]);
    expect(segmentView(twice)).toBeNull();
  });
  it("is a gap when the schedule is in more than one unit", () => {
    expect(
      segmentView(setCell(accepted, "Segment schedule", 0, "Unit", "EUR millions")),
    ).toBeNull();
  });
});

// ------------------------------------------------------------------------------------------------

describe("figureGap: why a figure is not drawn, true of this handoff", () => {
  it("is null for every figure of the three real handoffs", () => {
    for (const entry of [accepted, relative, distressed])
      for (const figure of ["earnings", "ladder", "netDebt", "bridge", "segments"] as const)
        expect(figureGap(entry, figure), figure).toBeNull();
  });
  it("names an absent table, a repeated year, a twice-stated figure and units", () => {
    expect(figureGap(dropTable(accepted, "Segment schedule"), "segments")).toBe(
      "The segment schedule is not in the handoff.",
    );
    expect(figureGap(dropTable(accepted, "T4.5 Cash flow statement"), "ladder")).toBe(
      "Cash flow statement is not in the handoff.",
    );
    const twice = addRow(accepted, "Net debt data", [
      "FY2024 / 2024-09-30",
      "1",
      "1",
      "0",
      "US$m",
      "-",
    ]);
    expect(figureGap(twice, "netDebt")).toBe("Net debt data: FY2024 is stated more than once.");
    const segmentTwice = addRow(accepted, "Segment schedule", [
      "Airframe",
      "FY2024",
      "1",
      "1",
      "USD millions",
      "-",
      "-",
    ]);
    expect(figureGap(segmentTwice, "segments")).toBe(
      "The segment schedule states Airframe net sales more than once for FY2024.",
    );
    expect(
      figureGap(
        setCell(accepted, "Chart data: EBITDA bridge", 0, "Reporting unit", "EURm"),
        "bridge",
      ),
    ).toBe("The EBITDA bridge is not stated in one unit.");
    expect(figureGap(withRows(accepted, "Chart data: EBITDA bridge", []), "bridge")).toBe(
      "The EBITDA bridge states fewer than an opening, a step and a closing.",
    );
  });
  it("gives every measure's reason when no earnings measure is readable", () => {
    let none: OutputEntry = accepted;
    for (const heading of [
      "Chart data: revenue and EBITDA",
      "Net debt data",
      "T4.4 Income statement",
    ])
      none = dropTable(none, heading);
    expect(figureGap(none, "earnings")).toBe(
      "Revenue is not in the handoff. EBITDA (Reported): Income statement is not in the handoff. " +
        "Adjusted EBITDA is not in the handoff. Gross debt is not in the handoff.",
    );
  });
});
