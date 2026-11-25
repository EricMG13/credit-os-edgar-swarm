// Expected values are written out by hand from the retained TransDigm CP-1 handoffs
// (tests/fixtures/live_2026_11_15/: earnings_update-CP-1-draft3-accepted.md, relative_value-CP-1-draft1.md,
// distressed-CP-1-draft1.md), not computed by the code under test. The handoffs are outdated
// evidence (FY2024): shape and scope only. The one-adjustment, none-row, three-period and edited
// entries (fixtures/mutations.ts) are test inputs, not real handoffs.
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import type { OutputEntry } from "../../../publishedReport";
import { containsReference } from "../../../publishedReport";
import { cp1Entry, distressedCp1Entry, leadProps, relativeValueCp1Entry } from "../fixtures/load";
import { dropTable, setCell, threePeriodCp1, withRows } from "../fixtures/mutations";
import { NO_ADJUSTMENT } from "./foundationData";
import { NetDebtTile } from "./NetDebt";

afterEach(cleanup);

const ADJUSTMENTS = "Post-balance-sheet adjustments";
const DIVIDEND = [
  "Special dividend and dividend equivalent settlement",
  "2024-10-18",
  "4348",
  "22967",
  "6.02",
  "US$m",
  "Standalone September adjustment / reported EBITDA 3813.",
];
/** The accepted handoff with only its dividend row: exactly one adjustment states a pro forma. */
const oneAdjustment = () => withRows(cp1Entry(), ADJUSTMENTS, [DIVIDEND]);

function draw(entry: OutputEntry = cp1Entry()) {
  render(<NetDebtTile lead={leadProps(entry)} />);
  return screen.getByRole("region", { name: "Net debt" });
}

function everything(tile: HTMLElement) {
  const labels = [...tile.querySelectorAll("[aria-label]")].map(
    (node) => node.getAttribute("aria-label") ?? "",
  );
  return [tile.textContent, ...labels].join(" ");
}

/** No equation, sum, ratio or movement sentence; no source reference. */
function noAnalysis(tile: HTMLElement) {
  const text = everything(tile);
  expect(text).not.toMatch(/÷|derived|growth|=| \+ /i);
  expect(text).not.toMatch(/\b(rose|fell|reverses)\b/);
  expect(text).not.toMatch(/does not add|not gross debt less cash/i);
  expect(containsReference(text)).toBe(false);
}

const attr = (node: Element | null | undefined, name: string) => Number(node?.getAttribute(name));
const bar = (tile: HTMLElement, label: string) =>
  tile.querySelector(`[data-row="${label}"] rect[data-bar]`);
const readings = (tile: HTMLElement) =>
  [...tile.querySelectorAll("[data-part=reading]")].map((node) =>
    [...node.querySelectorAll("tspan")].map((span) => span.textContent).join(" "),
  );
const listed = (tile: HTMLElement) =>
  [...tile.querySelectorAll("[data-adjustments] li")].map((li) =>
    [...li.children].map((part) => part.textContent),
  );

describe("Net debt: the accepted handoff, FY2023 and FY2024", () => {
  it("titles the tile plainly, the unit and periods in the kicker", () => {
    const tile = draw();
    expect(within(tile).getByRole("heading", { level: 3 }).textContent).toBe("Net debt");
    expect(tile.textContent).toContain("Net debt, US$m · FY2023 → FY2024");
  });

  it("draws each period's net debt and its cash to gross debt as stated, proportional from zero", () => {
    const tile = draw();
    const [fy23, fy24] = [bar(tile, "FY2023"), bar(tile, "FY2024")];
    expect(attr(fy23, "data-value")).toBe(16278);
    expect(attr(fy24, "data-value")).toBe(18619);
    expect(fy23?.getAttribute("class")).toContain("fill-chart-3");
    expect(fy24?.getAttribute("class")).toContain("fill-chart-1");
    const zero = attr(fy23, "x");
    expect(attr(fy24, "x")).toBe(zero);
    const perUnit = attr(fy24, "width") / 18619;
    expect(attr(fy23, "width")).toBeCloseTo(16278 * perUnit, 6);
    // Cash starts where net debt ends and has its own stated length; gross debt is marked where stated.
    const cash = tile.querySelector('[data-cash="FY2024"]');
    expect(attr(cash, "x") - 0.5).toBeCloseTo(zero + 18619 * perUnit, 6);
    expect(attr(cash, "width") + 1).toBeCloseTo(6261 * perUnit, 6);
    expect(attr(tile.querySelector('[data-gross="FY2023"]'), "x1")).toBeCloseTo(
      zero + 19750 * perUnit,
      6,
    );
    expect(attr(tile.querySelector('[data-gross="FY2024"]'), "x1")).toBeCloseTo(
      zero + 24880 * perUnit,
      6,
    );
    expect(readings(tile)).toEqual([
      "Net 16,278 · cash 3,472 · gross debt 19,750",
      "Net 18,619 · cash 6,261 · gross debt 24,880",
    ]);
  });

  it("with five stated pro formas draws no pro forma bar and lists every adjustment in handoff order", () => {
    const tile = draw();
    expect(tile.querySelector("[data-pro-forma]")).toBeNull();
    expect(tile.querySelector('[data-row="Pro forma"]')).toBeNull();
    expect(tile.textContent).toContain(
      "Stated adjustments · date · amount · pro forma net debt · pro forma net leverage",
    );
    expect(listed(tile)).toEqual([
      ["Remaining securitization draw", "2024-10-16 · 0 · 18,619 · 4.88x"],
      [
        "Special dividend and dividend equivalent settlement",
        "2024-10-18 · 4,348 · 22,967 · 6.02x",
      ],
      [
        "Common-stock repurchases",
        "Not supplied: the source states first quarter FY2025 only · 316 · 18,935 · 4.97x",
      ],
      [
        "Raptor acquisition working-capital settlement received",
        "Not supplied: the source states first quarter FY2025 only · −1 · 18,618 · 4.88x",
      ],
      [
        "CPI acquisition working-capital settlement paid",
        "Not supplied: the source states first quarter FY2025 only · 1 · 18,620 · 4.88x",
      ],
    ]);
  });

  it("joins net debt / EBITDA FY2023 → FY2024 with the overview DotStrip", () => {
    const tile = draw();
    const strip = within(tile).getByRole("img", { name: /Net debt \/ EBITDA/ });
    expect(strip.getAttribute("aria-label")).toBe(
      "Net debt / EBITDA on its own scale: FY2023 5.17x, FY2024 4.88x.",
    );
    expect(strip.textContent).toContain("5.17x");
    expect(strip.textContent).toContain("4.88x");
    // No pro forma here: no signal colour.
    expect(strip.querySelector(".fill-warning-mark")).toBeNull();
  });

  it("shows the stated liquidity total beside the stated cash and undrawn facilities, never a sum", () => {
    const tile = draw();
    const well = within(tile).getByRole("group", { name: "Liquidity" });
    expect(well.textContent).toContain("Liquidity · Cash plus available revolver");
    const rows = [...well.querySelectorAll("[data-liquidity]")].map((row) => row.textContent);
    expect(rows).toEqual([
      "FY20234,227cash 3,472 · undrawn committed facilities 755",
      "FY20247,104cash 6,261 · undrawn committed facilities 843",
    ]);
  });

  it("prints no equation, sum or movement sentence, and has one trace control", () => {
    const tile = draw();
    noAnalysis(tile);
    expect(within(tile).getAllByRole("link", { name: /Source for/ })).toHaveLength(1);
  });

  it("opens the table view from the button: every period, then every adjustment as written", () => {
    const tile = draw();
    fireEvent.click(within(tile).getByRole("button", { name: /Table view/ }));
    const rows = within(within(tile).getByRole("table"))
      .getAllByRole("row")
      .map((row) => [...row.querySelectorAll("th, td")].map((cell) => cell.textContent));
    expect(rows.slice(0, 3)).toEqual([
      [
        "Period or adjustment",
        "Date",
        "Amount",
        "Gross debt",
        "Cash",
        "Net debt",
        "Net debt / EBITDA",
      ],
      ["FY2023", "Not applicable", "Not applicable", "19,750", "3,472", "16,278", "5.17x"],
      ["FY2024", "Not applicable", "Not applicable", "24,880", "6,261", "18,619", "4.88x"],
    ]);
    expect(rows[5]).toEqual([
      "Pro forma: Common-stock repurchases",
      "Not supplied: the source states first quarter FY2025 only",
      "316",
      "Not stated",
      "Not stated",
      "18,935",
      "4.97x",
    ]);
    expect(rows).toHaveLength(8);
  });
});

describe("Net debt: exactly one stated pro forma", () => {
  it("draws it as a solid signal-coloured bar with a seam where the reported net debt ends", () => {
    const tile = draw(oneAdjustment());
    const pro = tile.querySelector("[data-pro-forma]");
    expect(attr(pro, "data-value")).toBe(22967);
    expect(pro?.getAttribute("class")).toContain("fill-warning-mark");
    // Solid, not the hatch (hatch means not known).
    expect(pro?.getAttribute("fill")).toBeNull();
    expect(tile.querySelector('[data-row="Pro forma"] [data-gap]')).toBeNull();
    const fy24 = bar(tile, "FY2024");
    const perUnit = attr(fy24, "width") / 18619;
    expect(attr(pro, "width")).toBeCloseTo(22967 * perUnit, 6);
    const seam = tile.querySelector("[data-seam]");
    expect(seam?.getAttribute("class")).toContain("stroke-surface-card");
    expect(attr(seam, "x1")).toBeCloseTo(attr(fy24, "x") + 18619 * perUnit, 6);
    expect(readings(tile)[2]).toBe(
      "Net 22,967 · Special dividend and dividend equivalent settlement · 2024-10-18 · amount 4,348",
    );
    expect(tile.querySelector("[data-adjustments]")).toBeNull();
    expect(tile.textContent).toContain("Pro forma net debt");
    noAnalysis(tile);
  });

  it("joins the leverage strip FY2023 → FY2024 → pro forma, the pro forma mark orange with its word", () => {
    const tile = draw(oneAdjustment());
    const strip = within(tile).getByRole("img", { name: /Net debt \/ EBITDA/ });
    expect(strip.getAttribute("aria-label")).toBe(
      "Net debt / EBITDA on its own scale: FY2023 5.17x, FY2024 4.88x, pro forma 6.02x.",
    );
    expect(strip.textContent).toContain("Pro forma");
    expect(strip.querySelector("circle.fill-warning-mark")).not.toBeNull();
    expect(strip.querySelectorAll("line[stroke-dasharray]")).toHaveLength(2);
  });

  it("draws no bar when the one pro forma states no amount: it is listed", () => {
    const tile = draw(
      withRows(cp1Entry(), ADJUSTMENTS, [
        DIVIDEND.map((cell, at) => (at === 2 ? "Not supplied: not split" : cell)),
      ]),
    );
    expect(tile.querySelector("[data-pro-forma]")).toBeNull();
    expect(listed(tile)[0]?.[1]).toBe("2024-10-18 · Not supplied: not split · 22,967 · 6.02x");
  });
});

describe("Net debt: other real handoffs and gap states", () => {
  it("draws the relative value handoff's one period, its two adjustments listed, no comparison", () => {
    const tile = draw(relativeValueCp1Entry());
    expect(tile.textContent).toContain("Net debt, US$m · FY2024");
    expect(
      [...tile.querySelectorAll("rect[data-bar]")].map((b) => b.getAttribute("data-bar")),
    ).toEqual(["FY2024"]);
    expect(tile.querySelector("[data-pro-forma]")).toBeNull();
    expect(listed(tile)).toEqual([
      [
        "Special dividend and vested dividend equivalents paid",
        "Not supplied: the source states October 2024 only for the combined payment · 4,348 · 22,967 · 6.02x",
      ],
      [
        "Remaining securitization availability drawn",
        "Not supplied: the source states October 2024 only · 0 · 22,967 · 6.02x",
      ],
    ]);
    // One stated ratio: written, not drawn as a strip.
    expect(within(tile).queryByRole("img", { name: /Net debt \/ EBITDA/ })).toBeNull();
    expect(within(tile).getByRole("list", { name: /Net debt \/ EBITDA/ }).textContent).toBe(
      "FY20244.88x",
    );
    const well = within(tile).getByRole("group", { name: "Liquidity" });
    expect(well.textContent).not.toContain("revolver");
    expect([...well.querySelectorAll("[data-liquidity]")].map((r) => r.textContent)).toEqual([
      "FY2024cash 6,261 · undrawn committed facilities 1,006",
    ]);
    noAnalysis(tile);
  });

  it("lists the distressed handoff's two adjustments in its own order", () => {
    const tile = draw(distressedCp1Entry());
    expect(listed(tile).map(([event]) => event)).toEqual([
      "Remaining securitization availability drawn",
      "Special dividend and vested dividend equivalents paid",
    ]);
    noAnalysis(tile);
  });

  it("draws the three-period mutation's FY2022 as the hatched gap with its reason, in place", () => {
    const tile = draw(threePeriodCp1());
    expect(tile.textContent).toContain("Net debt, US$m · FY2022 → FY2023 → FY2024");
    const row = tile.querySelector('[data-row="FY2022"]');
    expect(row?.querySelector("rect[data-bar]")).toBeNull();
    expect(row?.querySelector("[data-gap]")?.getAttribute("data-gap")).toBe(
      "Not supplied: outside the comparison scope",
    );
    expect(readings(tile)[0]).toBe("Not supplied: outside the comparison scope");
    expect(tile.textContent).toContain("FY2022: Not supplied: outside the comparison scope");
    noAnalysis(tile);
  });

  it("draws the stated figures when they do not add up, and says nothing about it", () => {
    const tile = draw(setCell(cp1Entry(), "Net debt data", 1, "Cash", "6000"));
    const fy24 = bar(tile, "FY2024");
    const perUnit = attr(fy24, "width") / 18619;
    expect(attr(tile.querySelector('[data-cash="FY2024"]'), "width") + 1).toBeCloseTo(
      6000 * perUnit,
      6,
    );
    expect(attr(tile.querySelector('[data-gross="FY2024"]'), "x1")).toBeCloseTo(
      attr(fy24, "x") + 24880 * perUnit,
      6,
    );
    expect(readings(tile)[1]).toBe("Net 18,619 · cash 6,000 · gross debt 24,880");
    noAnalysis(tile);
  });

  it("draws a stated net cash position leftward from zero, its reading from the plot's start", () => {
    const tile = draw(
      setCell(
        setCell(cp1Entry(), "Net debt data", 1, "Net debt", "-500"),
        "Net debt data",
        1,
        "Cash",
        "25380",
      ),
    );
    const fy24 = bar(tile, "FY2024");
    const fy23 = bar(tile, "FY2023");
    // FY2023 starts at zero; FY2024's bar ends there, drawn to the left.
    expect(attr(fy24, "x") + attr(fy24, "width")).toBeCloseTo(attr(fy23, "x"), 6);
    const perUnit = attr(fy23, "width") / 16278;
    expect(attr(fy24, "width")).toBeCloseTo(500 * perUnit, 6);
    // Cash beyond a negative net debt is not drawn as a segment; the stated figures are written.
    expect(tile.querySelector('[data-cash="FY2024"]')).toBeNull();
    expect(readings(tile)[1]).toBe("Net −500 · cash 25,380 · gross debt 24,880");
    const starts = [...tile.querySelectorAll("[data-part=reading]")].map((r) =>
      r.getAttribute("x"),
    );
    expect(new Set(starts).size).toBe(1);
    noAnalysis(tile);
  });

  it("states the contract's none row in the module's own words, as a plain line", () => {
    const tile = draw(
      withRows(cp1Entry(), ADJUSTMENTS, [
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
    expect(tile.querySelector("[data-adjustments]")).toBeNull();
    expect(tile.querySelector("[data-pro-forma]")).toBeNull();
    expect(tile.querySelector("[data-no-adjustments]")?.textContent).toBe(
      "None found in the sources read. Synthetic; the annual report and its notes were read.",
    );
  });

  it("is the gap tile with the true reason when the net debt table is absent", () => {
    const tile = draw(dropTable(cp1Entry(), "Net debt data"));
    expect(within(tile).queryByRole("img")).toBeNull();
    expect(within(tile).queryByRole("link")).toBeNull();
    expect(tile.textContent).toContain("Net debt data is not in the handoff.");
  });
});
