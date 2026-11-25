// Expected values are written out by hand from the retained TransDigm CP-1 handoffs (accepted
// FY2024, relative value draft 1 single period FY2024, distressed draft 1; outdated evidence:
// shape and scope only), not computed by the code under test. The three-period case and the
// edited cells are mutations of the accepted handoff (fixtures/mutations.ts), not real handoffs.
// The ladder is the handoff's own stated rows (ruling i): no plug, no invented end level, no sum.
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { containsReference, type OutputEntry } from "../../../publishedReport";
import { cp1Entry, distressedCp1Entry, leadProps, relativeValueCp1Entry } from "../fixtures/load";
import { dropTable, setLabelled, threePeriodCp1 } from "../fixtures/mutations";
import { CashLadderTile } from "./CashLadder";

afterEach(cleanup);

const CASH = "T4.5 Cash flow statement";

function draw(entry: OutputEntry) {
  render(<CashLadderTile lead={leadProps(entry)} />);
  const tile = screen.getByRole("region", { name: "Cash conversion" });
  const all = (selector: string) => [...tile.querySelectorAll(selector)];
  return { tile, all, svg: tile.querySelector("svg[role='img']") };
}

const num = (element: Element | undefined, name: string) => Number(element?.getAttribute(name));
const spans = (elements: Element[]) =>
  elements.map((bar) => [
    bar.getAttribute("data-label"),
    num(bar, "data-from"),
    num(bar, "data-to"),
  ]);
const parts = (tile: HTMLElement, part: string) =>
  [...tile.querySelectorAll(`[data-part="${part}"]`)].map((node) => node.textContent);

/** Row labels, each wrapped label's lines joined with a space. */
const labels = (tile: HTMLElement) =>
  [...tile.querySelectorAll('[data-part="label"]')].map((label) =>
    [...label.querySelectorAll("tspan")].map((line) => line.textContent).join(" "),
  );

function openTable(tile: HTMLElement) {
  fireEvent.click(within(tile).getByRole("button", { name: /Table view/ }));
  const table = within(tile).getByRole("table");
  const rows = within(table)
    .getAllByRole("row")
    .map((row) => [...row.querySelectorAll("th, td")].map((cell) => cell.textContent));
  return rows;
}

/** Nothing the module did not write: no plug, no end level, no sum, no ratio. */
function expectNoDerived(tile: HTMLElement) {
  const text = `${tile.textContent} ${tile.querySelector("svg")?.getAttribute("aria-label") ?? ""}`;
  for (const banned of [
    /not itemised/i,
    /derived/i,
    /\+360/,
    /÷/,
    /Other items/i,
    /after acquisitions/i,
    /2,347 \+ 2,038/,
    /2,505/,
  ])
    expect(text).not.toMatch(banned);
}

describe("cash ladder: the accepted CP-1, FY2024 bars and FY2023 beneath", () => {
  it("titles the tile plainly and names the periods in the kicker", () => {
    const { tile } = draw(cp1Entry());
    expect(within(tile).getByRole("heading", { level: 3 }).textContent).toBe("Cash conversion");
    expect(tile.textContent).toContain("Cash conversion · US$m, FY2024; FY2023 beneath");
    expect(within(tile).getByRole("link", { name: /Source for cash conversion/ })).toBeTruthy();
  });

  it("draws each stated level from zero and each deduction from the bar above it, as written", () => {
    const { tile, all } = draw(cp1Entry());
    // Hand: 4,173 − 1,158 = 3,015; 3,015 − 539 = 2,476; 2,045 − 165 = 1,880;
    // 1,880 − 2,038 = −158; −158 − 2,347 = −2,505 (a bar end, never written).
    expect(spans(all("rect[data-bar]"))).toEqual([
      ["EBITDA (Adjusted)", 0, 4173],
      ["Cash Interest Paid", 4173, 3015],
      ["Cash taxes paid", 3015, 2476],
      ["Net Cash from Operating Activities", 0, 2045],
      ["Capital expenditures", 2045, 1880],
      ["Levered free cash flow", 0, 1880],
      ["Dividends and dividend equivalent payments", 1880, -158],
      ["Discretionary cash flow after distributions", 0, -158],
      ["Acquisition of businesses, net of cash acquired", -158, -2505],
    ]);
    expect(parts(tile, "value")).toEqual([
      "4,173",
      "−1,158",
      "−539",
      "2,045",
      "−165",
      "1,880",
      "−2,038",
      "−158",
      "−2,347",
    ]);
    expect(labels(tile)).toContain("Repurchases of common stock");
  });

  it("is proportional: one scale for every bar, current and earlier", () => {
    const { all } = draw(cp1Entry());
    const bars = all("rect[data-bar]");
    const perUnit = num(bars[0], "width") / 4173;
    const sizes = [4173, 1158, 539, 2045, 165, 1880, 2038, 158, 2347];
    bars.forEach((bar, at) => {
      expect(num(bar, "width") / (sizes[at] ?? 1)).toBeCloseTo(perUnit, 6);
    });
    const prior = all("rect[data-prior]");
    expect(num(prior[0], "width") / 3395).toBeCloseTo(perUnit, 6);
    // The stated CFO level is drawn where it is stated, not where the deductions above reach.
    const [ebitda, , taxes, cfo] = bars;
    expect(num(cfo, "x")).toBeCloseTo(num(ebitda, "x"), 6);
    expect(num(cfo, "width")).toBeLessThan(num(taxes, "x"));
  });

  it("draws FY2023 beneath as thin bars with its stated figures, walking the same way", () => {
    const { tile, all } = draw(cp1Entry());
    // Hand: 3,395 − 1,160 = 2,235; 2,235 − 260 = 1,975; 1,375 − 139 = 1,236; 1,236 − 38 = 1,198;
    // 1,198 − 762 = 436.
    expect(
      all("rect[data-prior]").map((bar) => [
        bar.getAttribute("data-prior"),
        num(bar, "data-from"),
        num(bar, "data-to"),
      ]),
    ).toEqual([
      ["EBITDA (Adjusted)", 0, 3395],
      ["Cash Interest Paid", 3395, 2235],
      ["Cash taxes paid", 2235, 1975],
      ["Net Cash from Operating Activities", 0, 1375],
      ["Capital expenditures", 1375, 1236],
      ["Levered free cash flow", 0, 1236],
      ["Dividends and dividend equivalent payments", 1236, 1198],
      ["Discretionary cash flow after distributions", 0, 1198],
      ["Acquisition of businesses, net of cash acquired", 1198, 436],
    ]);
    expect(parts(tile, "prior-value")).toEqual([
      "3,395",
      "−1,160",
      "−260",
      "1,375",
      "−139",
      "1,236",
      "−38",
      "1,198",
      "−762",
    ]);
    expect(parts(tile, "legend-text")).toEqual([
      "FY2024 level",
      "Deduction",
      "Not stated",
      "FY2023",
    ]);
  });

  it("draws the stated repurchase gap as the hatched slot with its reason, never dropped", () => {
    const { tile } = draw(cp1Entry());
    const reason = "Not supplied: source dash (FY2023 and FY2024)";
    expect(tile.querySelector(`[data-gap="${reason}"] rect`)).not.toBeNull();
    expect(parts(tile, "reason")).toEqual([reason]);
    expect(tile.querySelector('[data-step="Repurchases of common stock"]')).toBeNull();
  });

  it("joins a bar to the next only where the walk continues there", () => {
    const { tile } = draw(cp1Entry());
    const path = tile.querySelector("path.stroke-connector")?.getAttribute("d") ?? "";
    // EBITDA→interest→taxes, CFO→capex→FCF→dividends, after distributions→acquisitions: 6.
    // Not taxes→CFO (2,476 is not 2,045), nor across the repurchase gap.
    expect(path.match(/M/g)).toHaveLength(6);
  });

  it("reads every figure in its aria-label, the earlier in brackets", () => {
    const { svg } = draw(cp1Entry());
    expect(svg?.getAttribute("aria-label")).toBe(
      "Cash conversion, US$m, FY2024, FY2023 in brackets: EBITDA (Adjusted) 4,173 (FY2023 3,395), less Cash Interest Paid 1,158 (FY2023 −1,160), less Cash taxes paid 539 (FY2023 −260), Net Cash from Operating Activities 2,045 (FY2023 1,375), less Capital expenditures 165 (FY2023 −139), Levered free cash flow 1,880 (FY2023 1,236), less Dividends and dividend equivalent payments 2,038 (FY2023 −38), Repurchases of common stock not stated: Not supplied: source dash (FY2023 and FY2024), Discretionary cash flow after distributions −158 (FY2023 1,198), less Acquisition of businesses, net of cash acquired 2,347 (FY2023 −762). Axis starts at −4,000.",
    );
  });

  it("opens the table view from the button: every stated figure as written", () => {
    const { tile } = draw(cp1Entry());
    expect(openTable(tile)).toEqual([
      ["Step", "FY2023", "FY2024", "Kind"],
      ["EBITDA (Adjusted)", "3,395", "4,173", "Level"],
      ["Cash Interest Paid", "1,160", "1,158", "Deduction, as paid"],
      ["Cash taxes paid", "260", "539", "Deduction, as paid"],
      ["Net Cash from Operating Activities", "1,375", "2,045", "Level"],
      ["Capital expenditures", "−139", "−165", "Deduction, signed"],
      ["Levered free cash flow", "1,236", "1,880", "Level"],
      ["Dividends and dividend equivalent payments", "−38", "−2,038", "Deduction, signed"],
      [
        "Repurchases of common stock",
        "Not supplied: source dash",
        "Not supplied: source dash",
        "Deduction, signed",
      ],
      ["Discretionary cash flow after distributions", "1,198", "−158", "Level"],
      ["Acquisition of businesses, net of cash acquired", "−762", "−2,347", "Deduction, signed"],
    ]);
  });

  it("writes no plug, no end level, no sum and no source reference", () => {
    const { tile } = draw(cp1Entry());
    expectNoDerived(tile);
    openTable(tile);
    expectNoDerived(tile);
    expect(containsReference(tile.textContent)).toBe(false);
    expect(tile.textContent).not.toMatch(/CP-1|T4\.5|C\d{2}/);
  });

  it("notes how it is drawn, and no period list when both periods are drawn", () => {
    const { tile } = draw(cp1Entry());
    expect(tile.textContent).toContain(
      "Each level is drawn from zero at its stated figure; a deduction hangs from the bar above it.",
    );
    expect(tile.textContent).not.toContain("Drawn:");
  });
});

describe("cash ladder: other real handoffs and mutations", () => {
  it("relative value, one period: bars only, no earlier ticks, its own label forms", () => {
    const { tile, all } = draw(relativeValueCp1Entry());
    expect(tile.textContent).toContain("Cash conversion · US$m, FY2024");
    expect(tile.textContent).not.toContain("beneath");
    expect(all("[data-prior]")).toHaveLength(0);
    expect(spans(all("rect[data-bar]"))).toEqual([
      ["EBITDA (Adjusted)", 0, 4173],
      ["Cash Interest Paid", 4173, 3015],
      ["Cash Taxes Paid", 3015, 2476],
      ["Net Cash from Operating Activities", 0, 2045],
      ["Capital expenditures", 2045, 1880],
      ["Free cash flow, levered after working capital", 0, 1880],
      ["Dividends and dividend equivalent payments", 1880, -158],
      ["Discretionary cash flow after dividends and equivalents", 0, -158],
      ["Acquisition of businesses, net of cash acquired", -158, -2505],
    ]);
    expect(parts(tile, "reason")).toEqual(["Not supplied: source dash"]);
    expect(parts(tile, "legend-text")).toEqual(["FY2024 level", "Deduction", "Not stated"]);
    expect(openTable(tile)[0]).toEqual(["Step", "FY2024", "Kind"]);
    expectNoDerived(tile);
  });

  it("distressed: its tax label as written; the after-distributions level read from its KPI dashboard", () => {
    const { tile, all } = draw(distressedCp1Entry());
    expect(spans(all("rect[data-bar]")).slice(0, 3)).toEqual([
      ["EBITDA (Adjusted)", 0, 4173],
      ["Cash Interest Paid", 4173, 3015],
      ["Cash taxes paid, net of refunds", 3015, 2476],
    ]);
    // The distressed draft states the after-distributions level only in its KPI dashboard (−158):
    // the data layer reads it from there, so it is drawn as a level, not a gap.
    expect(spans(all("rect[data-bar]")).slice(3)).toEqual([
      ["Net Cash from Operating Activities", 0, 2045],
      ["Capital expenditures", 2045, 1880],
      ["Levered free cash flow", 0, 1880],
      ["Dividends and dividend equivalent payments", 1880, -158],
      ["DCF after cash dividends and equivalents", 0, -158],
      // Acquisitions hang from the stated level above (−158); the bar's end is a drawing position.
      ["Acquisition of businesses, net of cash acquired", -158, -2505],
    ]);
    // Only the repurchase line is a stated gap; nothing is unplaced.
    expect(parts(tile, "reason")).toEqual(["Not supplied: source dash (FY2023 and FY2024)"]);
    expect(parts(tile, "unplaced")).toEqual([]);
    expectNoDerived(tile);
  });

  it("three periods: FY2024 bars only, the other periods named and in the table", () => {
    const { tile, all } = draw(threePeriodCp1());
    expect(all("[data-prior]")).toHaveLength(0);
    expect(tile.textContent).toContain("Cash conversion · US$m, FY2024");
    expect(tile.textContent).toContain("Drawn: FY2024. FY2022 and FY2023 are in the table view.");
    expect(num(all("rect[data-bar]")[0], "data-to")).toBe(4173);
    const rows = openTable(tile);
    expect(rows[0]).toEqual(["Step", "FY2022", "FY2023", "FY2024", "Kind"]);
    expect(rows[1]).toEqual([
      "EBITDA (Adjusted)",
      "Not supplied: outside the comparison scope",
      "3,395",
      "4,173",
      "Level",
    ]);
  });

  it("a stated tax gap in FY2024 is drawn in place; the steps after it are written, not placed", () => {
    const entry = setLabelled(
      cp1Entry(),
      CASH,
      "Cash taxes paid",
      "FY2024",
      "Not supplied: refund netting unclear",
    );
    const { tile, all } = draw(entry);
    expect(tile.querySelector('[data-gap="Not supplied: refund netting unclear"]')).not.toBeNull();
    expect(spans(all("rect[data-bar]")).slice(0, 3)).toEqual([
      ["EBITDA (Adjusted)", 0, 4173],
      ["Cash Interest Paid", 4173, 3015],
      ["Net Cash from Operating Activities", 0, 2045],
    ]);
    // FY2023's 260 is still drawn beneath the gap slot, from FY2023's own walk.
    const taxes = tile.querySelector('[data-prior="Cash taxes paid"]');
    expect([num(taxes ?? undefined, "data-from"), num(taxes ?? undefined, "data-to")]).toEqual([
      2235, 1975,
    ]);
  });

  it("an FY2023 gap is written beneath with its period and reason", () => {
    const entry = setLabelled(
      cp1Entry(),
      CASH,
      "Capital expenditures",
      "FY2023",
      "Not supplied: restated",
    );
    const { tile } = draw(entry);
    expect(parts(tile, "prior-reason")).toEqual(["FY2023: Not supplied: restated"]);
    // The next earlier level is stated, so the FY2023 walk picks up again there.
    expect(parts(tile, "prior-unplaced")).toEqual([]);
    const fcf = tile.querySelector('[data-prior="Levered free cash flow"]');
    expect(num(fcf ?? undefined, "data-to")).toBe(1236);
  });

  it("words where a number is expected are a gap with the words, never zero", () => {
    const entry = setLabelled(cp1Entry(), CASH, "Capital expenditures", "FY2024", "about 165");
    const { tile } = draw(entry);
    expect(tile.querySelector('[data-gap="about 165"]')).not.toBeNull();
    expect(tile.querySelector('[data-step="Capital expenditures"]')).toBeNull();
  });

  it("a stated zero stays a figure, and a paid amount of zero is not written −0", () => {
    const entry = setLabelled(cp1Entry(), CASH, "Cash taxes paid", "FY2024", "0");
    const { tile } = draw(entry);
    expect(tile.querySelector('[data-step="Cash taxes paid"]')).not.toBeNull();
    expect(parts(tile, "value")[2]).toBe("0");
    expect(tile.textContent).not.toContain("−0");
  });

  it("a negative amount paid (a net refund) is drawn as the rise it is, signed +", () => {
    const entry = setLabelled(cp1Entry(), CASH, "Cash taxes paid", "FY2024", "-20");
    const { tile } = draw(entry);
    const taxes = tile.querySelector('[data-step="Cash taxes paid"]') ?? undefined;
    // Hand: 3,015 + 20 = 3,035.
    expect([num(taxes, "data-from"), num(taxes, "data-to")]).toEqual([3015, 3035]);
    expect(parts(tile, "value")[2]).toBe("+20");
    expect(openTable(tile)[3]).toEqual(["Cash taxes paid", "260", "−20", "Deduction, as paid"]);
  });

  it("a step the handoff does not state is a gap row with the reason, not dropped", () => {
    const entry = setLabelled(cp1Entry(), CASH, "Capital expenditures", "Unit", "EUR millions");
    const { tile } = draw(entry);
    expect(parts(tile, "reason")).toContain("Capital expenditures is stated in another unit.");
    expect(labels(tile)).toContain("Capital expenditures");
  });

  it("without a cash flow statement: the one gap tile with the true reason", () => {
    render(<CashLadderTile lead={leadProps(dropTable(cp1Entry(), CASH))} />);
    const tile = screen.getByRole("region", { name: "Cash conversion" });
    expect(tile.textContent).toBe("Cash conversion · Cash flow statement is not in the handoff.");
    expect(tile.querySelector("svg")).toBeNull();
  });
});
