// Expected values are written out by hand from the retained TransDigm CP-1 handoffs (accepted
// FY2024, relative value and distressed drafts; outdated evidence: shape and scope only), not
// computed by the code under test. The Disposal, altered-step and gap cases are mutations of the
// accepted handoff (fixtures/mutations.ts), not real handoffs. Ruling (i): no "+360" bracket, no
// add-back total, no "largest step" note; a negative step is a decrease, never an add-back.
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { containsReference, type OutputEntry } from "../../../publishedReport";
import { cp1Entry, distressedCp1Entry, leadProps, relativeValueCp1Entry } from "../fixtures/load";
import { dropTable, setCell, withRows } from "../fixtures/mutations";
import { EbitdaBridgeTile } from "./EbitdaBridge";

afterEach(cleanup);

const BRIDGE = "Chart data: EBITDA bridge";

function draw(entry: OutputEntry) {
  render(<EbitdaBridgeTile lead={leadProps(entry)} />);
  const tile = screen.getByRole("region", { name: "EBITDA bridge" });
  return {
    tile,
    bars: [...tile.querySelectorAll("rect[data-bar]")],
    svg: tile.querySelector("svg[role='img']"),
  };
}

const num = (element: Element | undefined, name: string) => Number(element?.getAttribute(name));
const parts = (tile: HTMLElement, part: string) =>
  [...tile.querySelectorAll(`[data-part="${part}"]`)].map((node) => node.textContent);
const labels = (tile: HTMLElement) =>
  [...tile.querySelectorAll('[data-part="label"]')].map((label) =>
    [...label.querySelectorAll("tspan")].map((line) => line.textContent).join(" "),
  );

function openTable(tile: HTMLElement) {
  fireEvent.click(within(tile).getByRole("button", { name: /Table view/ }));
  return within(within(tile).getByRole("table"))
    .getAllByRole("row")
    .map((row) => [...row.querySelectorAll("th, td")].map((cell) => cell.textContent));
}

function expectNoDerived(tile: HTMLElement) {
  const text = `${tile.textContent} ${tile.querySelector("svg")?.getAttribute("aria-label") ?? ""}`;
  for (const banned of [/\+360/, /\b360\b/, /derived/i, /÷/, /largest/i, /add-back/i, /lift/i])
    expect(text).not.toMatch(banned);
}

describe("EBITDA bridge: the accepted CP-1", () => {
  it("titles the tile plainly, kicker with the unit, one trace control", () => {
    const { tile } = draw(cp1Entry());
    expect(within(tile).getByRole("heading", { level: 3 }).textContent).toBe(
      "Reported to adjusted EBITDA",
    );
    expect(tile.textContent).toContain("EBITDA bridge · US$m");
    expect(
      within(tile).getAllByRole("link", { name: /Source for the EBITDA bridge/ }),
    ).toHaveLength(1);
  });

  it("draws the stated steps in proportion on an axis cut at 3,600, marked on both totals", () => {
    const { tile, bars } = draw(cp1Entry());
    // Hand: 3,813 + 70 = 3,883; + 217 = 4,100; + 58 = 4,158; + 15 = 4,173.
    expect(
      bars.map((bar) => [bar.getAttribute("data-bar"), num(bar, "data-from"), num(bar, "data-to")]),
    ).toEqual([
      ["level", 3600, 3813],
      ["step", 3813, 3883],
      ["step", 3883, 4100],
      ["step", 4100, 4158],
      ["step", 4158, 4173],
      ["closing", 3600, 4173],
    ]);
    const perUnit = num(bars[2], "width") / 217;
    expect(num(bars[1], "width") / 70).toBeCloseTo(perUnit, 6);
    expect(num(bars[4], "width") / 15).toBeCloseTo(perUnit, 6);
    expect(num(bars[0], "width") / (3813 - 3600)).toBeCloseTo(perUnit, 6);
    expect(num(bars[5], "width") / (4173 - 3600)).toBeCloseTo(perUnit, 6);
    expect(tile.querySelectorAll("[data-axis-break]")).toHaveLength(2);
    expect(tile.textContent).toContain("Axis starts at 3,600, marked on the total bars.");
  });

  it("labels each step as written and signs it", () => {
    const { tile } = draw(cp1Entry());
    expect(labels(tile)).toEqual([
      "EBITDA (Reported)",
      "Acquisition transaction and integration-related expenses",
      "Non-cash stock and deferred compensation expense",
      "Refinancing costs",
      "Other, net",
      "EBITDA (Adjusted)",
    ]);
    expect(parts(tile, "value")).toEqual(["3,813", "+70", "+217", "+58", "+15", "4,173"]);
    expect(parts(tile, "legend-text")).toEqual(["Opening", "Increase", "Closing"]);
  });

  it("reads every step in the aria-label, no total of the changes", () => {
    const { svg } = draw(cp1Entry());
    expect(svg?.getAttribute("aria-label")).toBe(
      "EBITDA bridge, US$m: EBITDA (Reported) 3,813, plus Acquisition transaction and integration-related expenses 70, plus Non-cash stock and deferred compensation expense 217, plus Refinancing costs 58, plus Other, net 15, equals EBITDA (Adjusted) 4,173. Axis starts at 3,600, cut.",
    );
  });

  it("opens the table view from the button: step, signed amount, kind", () => {
    const { tile } = draw(cp1Entry());
    expect(openTable(tile)).toEqual([
      ["Step", "Amount, US$m", "Kind"],
      ["EBITDA (Reported)", "3,813", "Opening"],
      ["Acquisition transaction and integration-related expenses", "+70", "Increase"],
      ["Non-cash stock and deferred compensation expense", "+217", "Increase"],
      ["Refinancing costs", "+58", "Increase"],
      ["Other, net", "+15", "Increase"],
      ["EBITDA (Adjusted)", "4,173", "Closing"],
    ]);
  });

  it("writes no bracket, no sum, no largest step and no source reference", () => {
    const { tile } = draw(cp1Entry());
    openTable(tile);
    expectNoDerived(tile);
    expect(tile.querySelector("[data-bracket]")).toBeNull();
    expect(containsReference(tile.textContent)).toBe(false);
    expect(tile.textContent).not.toMatch(/annual p71|C05|CP-1/);
  });
});

describe("EBITDA bridge: other handoffs and mutations", () => {
  it("a Disposal −10 step is a decrease drawn leftward, never an add-back", () => {
    const entry = withRows(cp1Entry(), BRIDGE, [
      ["EBITDA (Reported)", "3813", "US$m", "Opening."],
      ["Acquisition costs", "70", "US$m", "Step."],
      ["Disposal", "-10", "US$m", "Step."],
      ["EBITDA (Adjusted)", "3873", "US$m", "Closing."],
    ]);
    const { tile, bars, svg } = draw(entry);
    // Hand: 3,813 + 70 = 3,883; 3,883 − 10 = 3,873.
    const disposal = tile.querySelector('[data-step="Disposal"]') ?? undefined;
    expect([num(disposal, "data-from"), num(disposal, "data-to")]).toEqual([3883, 3873]);
    expect(num(disposal, "x") + num(disposal, "width")).toBeCloseTo(
      num(bars[1], "x") + num(bars[1], "width"),
      6,
    );
    expect(parts(tile, "value")).toContain("−10");
    expect(parts(tile, "legend-text")).toEqual(["Opening", "Increase or decrease", "Closing"]);
    expect(svg?.getAttribute("aria-label")).toContain("less Disposal 10");
    expect(openTable(tile)[3]).toEqual(["Disposal", "−10", "Decrease"]);
    expectNoDerived(tile);
  });

  it("a bridge whose stated amounts do not add up is not drawn; the amounts stay in the table", () => {
    const entry = setCell(cp1Entry(), BRIDGE, 2, "Amount", "218");
    const { tile, svg } = draw(entry);
    expect(svg).toBeNull();
    expect(tile.textContent).toContain(
      "This page did not draw the bridge because its steps do not add up to the closing figure.",
    );
    expect(within(tile).getByRole("heading", { level: 3 }).textContent).toBe(
      "Reported to adjusted EBITDA",
    );
    expect(openTable(tile)[3]).toEqual([
      "Non-cash stock and deferred compensation expense",
      "+218",
      "Increase",
    ]);
    expectNoDerived(tile);
  });

  it("a stated gap step is the hatched gap row with its reason; the steps after it are written", () => {
    const entry = setCell(cp1Entry(), BRIDGE, 2, "Amount", "Not supplied: not stated");
    const { tile, bars } = draw(entry);
    expect(tile.querySelector('[data-gap="Not supplied: not stated"] rect')).not.toBeNull();
    expect(parts(tile, "reason")).toEqual(["Not supplied: not stated"]);
    expect(parts(tile, "unplaced")).toEqual([
      "+58 · not placed: an earlier step is not stated",
      "+15 · not placed: an earlier step is not stated",
    ]);
    expect(bars.map((bar) => bar.getAttribute("data-label"))).toEqual([
      "EBITDA (Reported)",
      "Acquisition transaction and integration-related expenses",
      "EBITDA (Adjusted)",
    ]);
    expect(parts(tile, "legend-text")).toContain("Not stated");
    expect(openTable(tile)[3]).toEqual([
      "Non-cash stock and deferred compensation expense",
      "Not supplied: not stated",
      "Not stated",
    ]);
  });

  it("distressed and relative value: their own step labels, as written", () => {
    const distressed = draw(distressedCp1Entry());
    expect(labels(distressed.tile)[0]).toBe("FY2024 reported EBITDA");
    expect(labels(distressed.tile).at(-1)).toBe("FY2024 EBITDA As Defined");
    expect(parts(distressed.tile, "value")).toEqual([
      "3,813",
      "+70",
      "+217",
      "+58",
      "+15",
      "4,173",
    ]);
    cleanup();
    const relative = draw(relativeValueCp1Entry());
    expect(labels(relative.tile)[0]).toBe("EBITDA (Reported)");
    expect(relative.bars).toHaveLength(6);
  });

  it("without the bridge table: the one gap tile with the true reason", () => {
    render(<EbitdaBridgeTile lead={leadProps(dropTable(cp1Entry(), BRIDGE))} />);
    const tile = screen.getByRole("region", { name: "EBITDA bridge" });
    expect(tile.textContent).toBe(
      "EBITDA bridge · This page could not read the EBITDA bridge from the handoff.",
    );
  });

  it("in another unit per row: the gap tile says so", () => {
    render(
      <EbitdaBridgeTile
        lead={leadProps(setCell(cp1Entry(), BRIDGE, 0, "Reporting unit", "EURm"))}
      />,
    );
    expect(screen.getByRole("region", { name: "EBITDA bridge" }).textContent).toContain(
      "This page could not read the EBITDA bridge in one unit from the handoff.",
    );
  });
});
