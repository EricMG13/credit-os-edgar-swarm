// The first cases read the retained TransDigm FY2024 CP-1 handoff (outdated evidence: shape and
// scope only); expected values are written out by hand from its `Chart data: debt maturities`.
// The adversarial cases are synthetic, built from the module contract (the CP-1 debt maturities
// chart table); not a real handoff.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { entry, section, table } from "../../overview/rows.fixture";
import { cp1Entry, leadProps } from "../fixtures/load";
import { MaturityTile } from "./Maturity";

afterEach(cleanup);

const HEADERS = ["Period", "Debt maturing", "Reporting unit", "Basis and limitation"];

function wall(
  rows: string[][],
  charts = [{ title: "Debt maturities", table: 10, unit: "US$m", columns: [1] }],
) {
  return entry("CP-1", charts, [
    section(
      "Chart data: debt maturities",
      9,
      table(
        10,
        HEADERS,
        rows.map((row) => [...row, "US$m", "Unaudited."]),
      ),
    ),
  ]);
}

const draw = (data: ReturnType<typeof wall>) => {
  render(<MaturityTile lead={leadProps(data)} />);
  return screen.getByRole("region", { name: "Debt maturities" });
};
const height = (element: Element | null) => Number(element?.getAttribute("height"));
const left = (element: Element | null) => Number(element?.getAttribute("x"));
const bar = (tile: HTMLElement, label: string) => tile.querySelector(`[data-bar="${label}"]`);

describe("MaturityTile on the retained handoff", () => {
  it("titles the one strictly largest dated year and names the unit", () => {
    const tile = draw(cp1Entry());
    expect(
      within(tile).getByRole("heading", {
        name: "Debt maturing: FY2028 6,637 is the largest dated year",
      }),
    ).toBeVisible();
    expect(within(tile).getByText("Debt maturities · US$m")).toBeVisible();
  });
  it("draws each dated bar in proportion and the undated bucket after an axis break", () => {
    const tile = draw(cp1Entry());
    expect(height(bar(tile, "FY2028")) / height(bar(tile, "FY2029"))).toBeCloseTo(6637 / 4768, 6);
    // The undated bar is inset by 0.75 for its stroke, as on the Overview wall.
    expect((height(bar(tile, "Thereafter")) + 0.75) / height(bar(tile, "FY2028"))).toBeCloseTo(
      12637 / 6637,
      6,
    );
    expect(tile.querySelector("[data-axis-break]")).not.toBeNull();
    const slot = left(bar(tile, "FY2026")) - left(bar(tile, "FY2025"));
    expect(left(bar(tile, "FY2029")) - left(bar(tile, "FY2028"))).toBeCloseTo(slot, 6);
    expect(left(bar(tile, "Thereafter")) - left(bar(tile, "FY2029"))).toBeGreaterThan(slot + 10);
    expect(within(tile).getByRole("img")).toHaveAttribute("width", "100%");
    expect(within(tile).getByRole("img").getAttribute("viewBox")).toBe("0 0 520 220");
  });
  it("draws the two small years at the 2 px minimum and says so", () => {
    const tile = draw(cp1Entry());
    expect(height(bar(tile, "FY2026"))).toBe(2);
    expect(height(bar(tile, "FY2027"))).toBe(2);
    expect(height(bar(tile, "FY2025"))).toBeGreaterThan(2);
    expect(within(tile).getByText("FY2026 and FY2027 drawn at a 2 px minimum.")).toBeVisible();
  });
  it("brackets the first three dated years with their exact sum, labelled derived, and no judgement", () => {
    const tile = draw(cp1Entry());
    expect(tile.querySelector("[data-bracket]")?.getAttribute("data-bracket")).toBe("764");
    expect(within(tile).getByText("764 in FY2025–FY2027, derived")).toBeInTheDocument();
    expect(tile.textContent).not.toMatch(/before FY2028|only|wall of|refinancing risk/i);
  });
  it("says every amount in the aria-label, with the derived sum", () => {
    const tile = draw(cp1Entry());
    expect(within(tile).getByRole("img").getAttribute("aria-label")).toBe(
      "Debt maturing by period, US$m: FY2025 580, FY2026 92, FY2027 92, FY2028 6,637, FY2029 4,768, " +
        "Thereafter 12,637. 764 in FY2025–FY2027, derived.",
    );
  });
  it("has one trace control, the link to the full wall and a table view; no page citation", () => {
    const tile = draw(cp1Entry());
    expect(within(tile).getAllByRole("link", { name: /Source for/ })).toHaveLength(1);
    expect(
      within(tile).getByRole("link", { name: "Source for the maturity wall" }),
    ).toHaveAttribute("href", expect.stringContaining("#evidence/"));
    expect(within(tile).getByRole("link", { name: "Full wall on Overview" })).toHaveAttribute(
      "href",
      "#overview",
    );
    const rows = within(tile)
      .getAllByRole("row")
      .map((row) => [...row.querySelectorAll("th, td")].map((cell) => cell.textContent));
    expect(rows).toEqual([
      ["Period", "Amount"],
      ["FY2025", "580"],
      ["FY2026", "92"],
      ["FY2027", "92"],
      ["FY2028", "6,637"],
      ["FY2029", "4,768"],
      ["Thereafter", "12,637"],
      ["FY2025–FY2027, derived", "764"],
    ]);
    // Every basis note of the retained table cites a page, so none is drawn here.
    expect(tile.textContent).not.toMatch(/p153|p144|Annual p/);
  });
});

describe("MaturityTile states", () => {
  it("draws no bracket with fewer than three dated years", () => {
    const tile = draw(
      wall([
        ["FY2026", "500"],
        ["FY2027", "800"],
        ["Thereafter", "900"],
      ]),
    );
    expect(tile.querySelector("[data-bracket]")).toBeNull();
    expect(within(tile).queryByText(/, derived$/)).toBeNull();
    expect(
      within(tile).getByRole("heading", {
        name: "Debt maturing: FY2027 800 is the largest dated year",
      }),
    ).toBeVisible();
  });
  it("draws a stated gap as a gap with its reason, and then no bracket and no ranking title", () => {
    const tile = draw(
      wall([
        ["FY2026", "500"],
        ["FY2027", "Not supplied: the schedule stops here"],
        ["FY2028", "1,250"],
        ["FY2029", "300"],
      ]),
    );
    expect(bar(tile, "FY2027")).toBeNull();
    expect(tile.querySelector('[data-gap="FY2027"]')).not.toBeNull();
    expect(within(tile).getByText("FY2027: the schedule stops here.")).toBeVisible();
    expect(tile.querySelector("[data-bracket]")).toBeNull();
    expect(within(tile).getByRole("heading", { name: "Debt maturing by period" })).toBeVisible();
    expect(height(bar(tile, "FY2028")) / height(bar(tile, "FY2026"))).toBeCloseTo(1250 / 500, 6);
  });
  it("keeps a year with no row on the axis as a gap slot, and does not bracket across it", () => {
    const tile = draw(
      wall([
        ["FY2026", "600"],
        ["FY2028", "300"],
        ["FY2029", "200"],
      ]),
    );
    expect(tile.querySelector('[data-gap="FY2027"]')).not.toBeNull();
    expect(within(tile).getByText("No row")).toBeInTheDocument();
    expect(within(tile).getByText("FY2027: no row in the schedule for this year.")).toBeVisible();
    expect(tile.querySelector("[data-bracket]")).toBeNull();
    expect(tile.querySelector("[data-axis-break]")).toBeNull();
  });
  it("keeps a stated zero as a value at the minimum height, and gives no ranking for a tie", () => {
    const tile = draw(
      wall([
        ["FY2026", "0"],
        ["FY2027", "700"],
        ["FY2028", "700"],
      ]),
    );
    expect(bar(tile, "FY2026")).not.toBeNull();
    expect(tile.querySelector('[data-gap="FY2026"]')).toBeNull();
    expect(tile.querySelector("[data-bracket]")?.getAttribute("data-bracket")).toBe("1400");
    expect(within(tile).getByText("1,400 in FY2026–FY2028, derived")).toBeInTheDocument();
    expect(within(tile).getByRole("heading", { name: "Debt maturing by period" })).toBeVisible();
  });
  it("leaves the amounts to the table view when a long axis has no room for their labels", () => {
    const years = Array.from({ length: 13 }, (_, at) => [
      `FY${String(2020 + at)}`,
      String(100 + at),
    ]);
    const tile = draw(wall(years));
    expect(tile.querySelectorAll("[data-bar]")).toHaveLength(13);
    expect(within(tile).getByText("The amounts are in the table view.")).toBeVisible();
    expect(within(tile).getByRole("img").querySelector("text.font-mono")).toBeNull();
    expect(within(tile).getAllByRole("row")).toHaveLength(15);
  });
  it("does not draw a schedule that states a period twice", () => {
    const tile = draw(
      wall([
        ["FY2026", "500"],
        ["FY2026", "600"],
        ["FY2027", "700"],
      ]),
    );
    expect(
      within(tile).getByText(
        "The maturity schedule states FY2026 more than once; the wall is not drawn.",
      ),
    ).toBeVisible();
    expect(within(tile).queryByRole("img")).toBeNull();
  });
  it("keeps a reason that names a source in Evidence", () => {
    const tile = draw(
      wall([
        ["FY2026", "500"],
        ["FY2027", "Not supplied: see p. 153 of issuer_10-K.htm"],
      ]),
    );
    expect(within(tile).getByText("FY2027: Detail is in Evidence.")).toBeVisible();
    expect(tile.textContent).not.toMatch(/10-K|153/);
  });
  it("draws the gap when no period states an amount", () => {
    const tile = draw(wall([["FY2026", "Not supplied: no schedule"]]));
    expect(
      within(tile).getByText("The maturity schedule states no amount for any period."),
    ).toBeVisible();
    expect(within(tile).queryByRole("img")).toBeNull();
  });
  it("says why when the handoff has no maturity table or the module did not run", () => {
    const tile = draw(wall([["FY2026", "500"]], []));
    expect(
      within(tile).getByText("Financial foundation's handoff has no debt maturities table."),
    ).toBeVisible();
    expect(within(tile).queryByRole("link", { name: /Source for/ })).toBeNull();
    cleanup();
    const props = leadProps(cp1Entry());
    render(<MaturityTile lead={{ ...props, view: { ...props.view, entries: [] } }} />);
    expect(screen.getByText("Financial foundation did not run in this run.")).toBeVisible();
  });
});
