// Expected values are written out by hand from the retained TransDigm FY2024 CP-1 handoff
// (leads/fixtures/cp1_tdg_fy2024.json), not computed by the code under test. The handoff is outdated
// evidence: shape and scope only. The adversarial cases edit cells of that handoff.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import type { Block, OutputEntry, Table } from "../../../publishedReport";
import { containsReference } from "../../../publishedReport";
import { cp1Entry, leadProps } from "../fixtures/load";
import { EarningsDebtTile, NO_EARNINGS, NO_LEVERAGE } from "./EarningsDebt";
import { ED, LEV, inSentence, movement, ratioAxis } from "./earningsDebtGeometry";

afterEach(cleanup);

const base = cp1Entry();

function edited(change: (table: Table, heading: string) => Table | null): OutputEntry {
  return {
    ...base,
    sections: base.sections.map((section) => ({
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

function draw(entry: OutputEntry = base) {
  render(<EarningsDebtTile lead={leadProps(entry)} />);
  return screen.getByRole("region", { name: "Earnings against debt and leverage" });
}
const num = (element: Element | null | undefined, name: string) =>
  Number(element?.getAttribute(name));
const mark = (tile: HTMLElement, name: string) => tile.querySelector(`[data-mark="${name}"]`);
const svgs = (tile: HTMLElement) => within(tile).getAllByRole("img");

describe("words", () => {
  it("lowers a plain label in a sentence and keeps an acronym", () => {
    expect(inSentence("Reported EBITDA")).toBe("reported EBITDA");
    expect(inSentence("Gross debt")).toBe("gross debt");
    expect(inSentence("EBITDA As Defined")).toBe("EBITDA As Defined");
  });
  it("says rose, fell or was unchanged with the size of the change", () => {
    expect(movement("5130")).toBe("rose 5,130");
    expect(movement("-20")).toBe("fell 20");
    expect(movement("0")).toBe("was unchanged");
  });
  it("puts a ratio on round ticks just around its values, not from zero", () => {
    expect(ratioAxis([6.27, 6.53])).toMatchObject({
      lo: 6.2,
      hi: 6.6,
      ticks: [6.2, 6.3, 6.4, 6.5, 6.6],
    });
    expect(ratioAxis([5.17, 4.88, 6.02])).toMatchObject({ lo: 4.5, hi: 6.5 });
    // A value on a round tick gets a step of room either side; a positive ratio never goes below zero.
    expect(ratioAxis([4])).toMatchObject({ lo: 3.9, hi: 4.1 });
    expect(ratioAxis([0, 2]).lo).toBe(0);
  });
});

describe("EarningsDebtTile on the retained handoff", () => {
  it("titles the reading from the two stated changes, with no judgement", () => {
    const tile = draw();
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      "Gross debt rose 5,130 while reported EBITDA rose 665",
    );
    expect(
      within(tile).getByText("Earnings against debt and leverage · US$m, FY2023 → FY2024"),
    ).toBeVisible();
  });

  it("states the reading of each panel with every number, derived figures named", () => {
    const [left, right] = svgs(draw());
    expect(left?.getAttribute("aria-label")).toBe(
      "FY2023 to FY2024 on one US$m scale from zero: net sales 6,585 to 7,940, up 20.58% (derived); " +
        "reported EBITDA 3,148 to 3,813, up 21.12% (derived); EBITDA As Defined 3,395 to 4,173, up 22.92% (derived); " +
        "gross debt 19,750 to 24,880, up 25.97% (derived).",
    );
    expect(right?.getAttribute("aria-label")).toBe(
      "Total debt to EBITDA on its own scale from 6.2x, not from zero: 6.27x to 6.53x, +0.26x (derived), worse.",
    );
  });

  it("draws one dumbbell per measure in order, on one scale from zero, positions proportional", () => {
    const tile = draw();
    expect(
      [...tile.querySelectorAll("[data-row]")].map((row) => row.getAttribute("data-row")),
    ).toEqual(["Net sales", "Reported EBITDA", "EBITDA As Defined", "Gross debt"]);
    const from = (name: string) => num(mark(tile, name), "cx") - ED.x0;
    expect(from("Net sales current") / from("Net sales prior")).toBeCloseTo(7940 / 6585, 6);
    expect(from("Gross debt current") / from("Reported EBITDA current")).toBeCloseTo(
      24880 / 3813,
      6,
    );
    expect(from("Gross debt prior") / from("EBITDA As Defined prior")).toBeCloseTo(19750 / 3395, 6);
    expect(mark(tile, "Net sales prior")).toHaveClass("stroke-chart-3", "fill-surface-card");
    expect(mark(tile, "Net sales current")).toHaveClass("fill-chart-1");
    const [left] = svgs(tile);
    for (const label of ["6,585", "7,940", "3,148", "3,813", "19,750", "24,880"])
      expect(within(left as HTMLElement).getByText(label)).toBeInTheDocument();
    expect(within(left as HTMLElement).getByText("Growth, derived")).toBeInTheDocument();
  });

  it("draws growth bars proportional to the derived growth, with signed labels", () => {
    const tile = draw();
    const width = (name: string) => num(tile.querySelector(`[data-growth="${name}"]`), "width");
    expect(width("Gross debt") / width("Net sales")).toBeCloseTo(25.97 / 20.58, 6);
    expect(width("EBITDA As Defined") / width("Reported EBITDA")).toBeCloseTo(22.92 / 21.12, 6);
    const [left] = svgs(tile);
    for (const label of ["+20.58%", "+21.12%", "+22.92%", "+25.97%"])
      expect(within(left as HTMLElement).getByText(label)).toBeInTheDocument();
  });

  it("draws leverage on its own scale, not from zero, with an arrow and the word worse", () => {
    const tile = draw();
    const [, right] = svgs(tile);
    const panel = right as HTMLElement;
    expect(within(panel).getByText("own scale, from 6.2x, not from zero")).toBeInTheDocument();
    expect(panel.querySelector("[data-axis-break]")).not.toBeNull();
    const rise = (side: string) =>
      LEV.bottom - num(panel.querySelector(`[data-ratio="${side}"]`), "cy");
    expect(rise("current") / rise("prior")).toBeCloseTo((6.53 - 6.2) / (6.27 - 6.2), 6);
    expect(panel.querySelector('[data-ratio="current"]')).toHaveClass("fill-warning-mark");
    expect(panel.querySelector("[data-arrow]")).toHaveClass("fill-warning-mark");
    expect(panel.querySelector('[data-direction="worse"]')).toHaveTextContent(
      "+0.26x derived · worse",
    );
    for (const label of ["6.27x", "6.53x"])
      expect(within(panel).getByText(label)).toBeInTheDocument();
  });

  it("states the basis note because reported EBITDA is read, and has one trace control", () => {
    const tile = draw();
    expect(
      within(tile).getByText(
        "Changes and growth are derived from the stated figures. Leverage is on reported EBITDA.",
      ),
    ).toBeVisible();
    expect(
      within(tile).getByRole("link", { name: "Source for the earnings and debt figures" }),
    ).toHaveAttribute("href", expect.stringContaining("/report/run#evidence/"));
    expect(within(tile).getAllByRole("link")).toHaveLength(1);
    expect(tile.querySelector("[data-absent]")).toBeNull();
  });

  it("carries every number in the table view, derived columns named", () => {
    const tile = draw();
    const table = within(tile).getByRole("table");
    expect(
      within(table)
        .getAllByRole("columnheader")
        .map((cell) => cell.textContent),
    ).toEqual(["Measure", "FY2023", "FY2024", "Change (derived)", "Growth % (derived)"]);
    const rows = within(table)
      .getAllByRole("row")
      .slice(1)
      .map((row) =>
        within(row)
          .getAllByRole("cell")
          .map((cell) => cell.textContent),
      );
    expect(rows).toEqual([
      ["Net sales", "6,585", "7,940", "+1,355", "+20.58%"],
      ["Reported EBITDA", "3,148", "3,813", "+665", "+21.12%"],
      ["EBITDA As Defined", "3,395", "4,173", "+778", "+22.92%"],
      ["Gross debt", "19,750", "24,880", "+5,130", "+25.97%"],
      ["Total debt / EBITDA", "6.27x", "6.53x", "+0.26x, worse", "Not applicable: a ratio"],
    ]);
  });

  it("draws no source reference anywhere on the tile", () => {
    const tile = draw();
    for (const text of [...tile.querySelectorAll("text, p, h3, td")].map(
      (n) => n.textContent ?? "",
    ))
      expect(containsReference(text)).toBe(false);
  });
});

describe("EarningsDebtTile states", () => {
  it("draws a stated gap as the hatched mark with its reason, no growth bar, never zero", () => {
    const tile = draw(setCell("Net debt data", 1, "Gross debt", "Not supplied: not extracted"));
    expect(tile.querySelector('[data-gap="Gross debt current"]')).toHaveAttribute(
      "fill",
      "url(#earnings-debt-gap)",
    );
    expect(mark(tile, "Gross debt current")).toBeNull();
    expect(mark(tile, "Gross debt prior")).not.toBeNull();
    expect(tile.querySelector('[data-growth="Gross debt"]')).toBeNull();
    expect(within(tile).getByText("FY2024 not supplied: not extracted")).toBeInTheDocument();
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      "Reported EBITDA rose 665",
    );
    expect(svgs(tile)[0]?.getAttribute("aria-label")).toContain(
      "gross debt 19,750 to not supplied.",
    );
    // A gap is words: no mono figure carries it.
    for (const node of tile.querySelectorAll("text.font-mono"))
      expect(node.textContent).not.toMatch(/supplied/i);
  });

  it("lists a measure the handoff does not carry in one line, never drawn", () => {
    const tile = draw(dropTable("Net debt data"));
    expect(tile.querySelector('[data-row="Gross debt"]')).toBeNull();
    expect(tile.querySelector("[data-absent]")).toHaveTextContent(
      "Not in this handoff: Gross debt is not in the handoff.",
    );
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      "Reported EBITDA rose 665",
    );
  });

  it("refuses a measure in another unit and says so", () => {
    const tile = draw(
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
    expect(tile.querySelector("[data-absent]")).toHaveTextContent(
      "Gross debt is stated in a different unit.",
    );
  });

  it("draws a stated zero as a value at zero, distinct from a gap, and does not compute growth on it", () => {
    const tile = draw(setCell("Chart data: revenue and EBITDA", 0, "Revenue", "0"));
    expect(num(mark(tile, "Net sales prior"), "cx")).toBeCloseTo(ED.x0, 6);
    expect(tile.querySelector('[data-gap^="Net sales"]')).toBeNull();
    expect(tile.querySelector('[data-growth="Net sales"]')).toBeNull();
    expect(within(tile).getByText("not calculable")).toBeInTheDocument();
    expect(svgs(tile)[0]?.getAttribute("aria-label")).toContain(
      "net sales 0 to 7,940, up 7,940 (derived)",
    );
  });

  it("puts a negative figure left of zero on a scale that brackets it", () => {
    const tile = draw(setCell("Chart data: revenue and EBITDA", 1, "Revenue", "-200"));
    const [left] = svgs(tile);
    const zero = within(left as HTMLElement).getByText("0");
    expect(num(mark(tile, "Net sales current"), "cx")).toBeLessThan(num(zero, "x"));
    expect(within(left as HTMLElement).getByText("−200")).toBeInTheDocument();
    // −6,785 on 6,585 is −103.04%: the growth bar runs left of its zero.
    expect(within(left as HTMLElement).getByText("−103.04%")).toBeInTheDocument();
    expect(left?.getAttribute("aria-label")).toContain(
      "net sales 6,585 to −200, down 103.04% (derived)",
    );
  });

  it("says better, with no arrow colour of worse, when leverage falls", () => {
    const tile = draw(setCell("Chart data: leverage", 1, "Total debt / EBITDA", "6.00"));
    const panel = svgs(tile)[1] as HTMLElement;
    expect(panel.querySelector('[data-direction="better"]')).toHaveTextContent(
      "−0.27x derived · better",
    );
    expect(panel.querySelector("[data-arrow]")).toHaveClass("fill-chart-1");
    expect(within(tile).queryByText(/worse/)).toBeNull();
  });

  it("says unchanged and draws no arrow when leverage is flat", () => {
    const tile = draw(setCell("Chart data: leverage", 1, "Total debt / EBITDA", "6.27"));
    const panel = svgs(tile)[1] as HTMLElement;
    expect(panel.querySelector('[data-direction="unchanged"]')).not.toBeNull();
    expect(panel.querySelector("[data-arrow]")).toBeNull();
    expect(within(tile).queryByText(/worse|better/)).toBeNull();
  });

  it("draws the leverage gap note when the handoff has no leverage table", () => {
    const tile = draw(dropTable("Chart data: leverage"));
    expect(within(tile).getByText(NO_LEVERAGE)).toBeVisible();
    expect(svgs(tile)).toHaveLength(1);
  });

  it("draws the gap tile, with no figure, when only one period is stated", () => {
    const tile = draw(
      edited((table, at) =>
        at === "Chart data: revenue and EBITDA" ? { ...table, rows: table.rows.slice(1) } : table,
      ),
    );
    expect(within(tile).getByText(NO_EARNINGS)).toBeVisible();
    expect(within(tile).queryByRole("img")).toBeNull();
  });
});
