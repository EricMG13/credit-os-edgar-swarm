// Expected values are written out by hand from the retained TransDigm FY2024 CP-1 handoff
// (leads/fixtures/cp1_tdg_fy2024.json), not computed by the code under test. The handoff is outdated
// evidence: shape and scope only. The adversarial cases edit cells of that handoff.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import type { Block, OutputEntry, Table } from "../../../publishedReport";
import { containsReference } from "../../../publishedReport";
import { cp1Entry, leadProps } from "../fixtures/load";
import { NO_NET_DEBT, NO_STRIP, NetDebtTile } from "./NetDebt";
import { ND, NL } from "./netDebtGeometry";

afterEach(cleanup);

const base = cp1Entry();
const NET = "Net debt data";
const ADJUSTMENTS = "Post-balance-sheet adjustments";
const EVENT = "Special dividend and dividend equivalent settlement";

function edited(
  change: (table: Table, heading: string) => Table | null,
  from: OutputEntry = base,
): OutputEntry {
  return {
    ...from,
    sections: from.sections.map((section) => ({
      ...section,
      blocks: section.blocks.flatMap((block): Block[] => {
        if (block.type !== "table") return [block];
        const next = change(block, section.heading);
        return next ? [next] : [];
      }),
    })),
  };
}
const setCell = (
  heading: string,
  row: number,
  column: string,
  text: string,
  from: OutputEntry = base,
) =>
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
  }, from);
const dropTable = (heading: string, from: OutputEntry = base) =>
  edited((table, at) => (at === heading ? null : table), from);

function draw(entry: OutputEntry = base) {
  render(<NetDebtTile lead={leadProps(entry)} />);
  return screen.getByRole("region", { name: "Net debt" });
}
const num = (element: Element | null | undefined, name: string) =>
  Number(element?.getAttribute(name));
const at = (tile: HTMLElement, selector: string) => tile.querySelector(selector);
const bars = (tile: HTMLElement) => within(tile).getAllByRole("img")[0] as HTMLElement;
const strip = (tile: HTMLElement) => within(tile).getAllByRole("img")[1] as HTMLElement;

describe("NetDebtTile on the retained handoff", () => {
  it("titles the reading from the stated figures and the stated pro forma", () => {
    const tile = draw();
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      `Net debt rose from 16,278 to 18,619; pro forma for ${EVENT} it is 22,967`,
    );
    expect(
      within(tile).getByText("Net debt · US$m, FY2023 → FY2024, with the pro forma"),
    ).toBeVisible();
  });

  it("states the reading with every number; the pro forma sum is named derived", () => {
    expect(bars(draw()).getAttribute("aria-label")).toBe(
      "Net debt, US$m, on one scale from zero: FY2023 net 16,278, cash 3,472, gross debt 19,750; " +
        "FY2024 net 18,619, cash 6,261, gross debt 24,880; " +
        `pro forma for ${EVENT}, 2024-10-18: net debt 22,967 = 18,619 + 4,348, derived; ` +
        "gross debt pro forma is not stated.",
    );
  });

  it("draws net debt, cash beyond it and gross debt in proportion to the stated figures", () => {
    const tile = draw();
    const width = (selector: string) => num(at(tile, selector), "width");
    const net23 = width('[data-bar="FY2023 net"]');
    const net24 = width('[data-bar="FY2024 net"]');
    expect(num(at(tile, '[data-bar="FY2023 net"]'), "x")).toBeCloseTo(ND.x0, 6);
    expect(net24 / net23).toBeCloseTo(18619 / 16278, 6);
    expect(width('[data-cash="FY2024"]') / net24).toBeCloseTo(6261 / 18619, 6);
    expect(width('[data-cash="FY2023"]') / net23).toBeCloseTo(3472 / 16278, 6);
    expect((num(at(tile, '[data-gross="FY2024"]'), "x1") - ND.x0) / net24).toBeCloseTo(
      24880 / 18619,
      6,
    );
    expect(at(tile, '[data-bar="FY2023 net"]')).toHaveClass("fill-chart-3");
    expect(at(tile, '[data-bar="FY2024 net"]')).toHaveClass("fill-chart-1");
    expect(at(tile, '[data-cash="FY2024"]')).toHaveClass("fill-surface-selected", "stroke-chart-1");
    const svg = bars(tile);
    expect(
      within(svg).getByText("Net 16,278 · cash 3,472 · gross debt 19,750"),
    ).toBeInTheDocument();
    expect(
      within(svg).getByText("Net 18,619 · cash 6,261 · gross debt 24,880"),
    ).toBeInTheDocument();
  });

  it("draws the pro forma from the FY2024 net debt plus the event's amount, in the signal colour", () => {
    const tile = draw();
    const net24 = num(at(tile, '[data-bar="FY2024 net"]'), "width");
    expect(num(at(tile, '[data-bar="Pro forma base"]'), "width")).toBeCloseTo(net24, 6);
    // The change rect is inset 0.75 a side for its stroke.
    expect((num(at(tile, '[data-bar="Pro forma change"]'), "width") + 1.5) / net24).toBeCloseTo(
      4348 / 18619,
      6,
    );
    expect((num(at(tile, "[data-pro-forma-end]"), "x1") - ND.x0) / net24).toBeCloseTo(
      22967 / 18619,
      6,
    );
    expect(at(tile, '[data-bar="Pro forma change"]')).toHaveClass("stroke-warning-mark");
    expect(at(tile, '[data-row="Pro forma"] [data-cash]')).toBeNull();
    expect(
      within(bars(tile)).getByText("Net 22,967 = 18,619 + 4,348, derived"),
    ).toBeInTheDocument();
    expect(at(tile, "[data-pro-forma]")).toHaveTextContent(
      `Pro forma ${EVENT}, 2024-10-18: net debt 22,967 = 18,619 + 4,348, derived.`,
    );
    expect(at(tile, "[data-pro-forma]")).toHaveClass("wrap-anywhere");
    expect(within(tile).getByText("Gross debt pro forma is not stated.")).toBeVisible();
    expect(at(tile, "[data-pro-forma] span")).toHaveClass("text-warning-text");
    expect(at(tile, '[data-row="Pro forma"] text')).toHaveTextContent("Pro forma");
  });

  it("says net debt is up, derived, and worse by the owner's table", () => {
    expect(at(draw(), '[data-direction="up"]')).toHaveTextContent(
      "Net debt up 2,341 from FY2023 to FY2024 derived · worse",
    );
  });

  it("draws net debt / EBITDA on its own axis, the pro forma orange with its word", () => {
    const tile = draw();
    const svg = strip(tile);
    expect(svg.getAttribute("aria-label")).toBe(
      "Net debt to EBITDA on its own scale from 4.5x, not from zero: FY2023 5.17x, FY2024 4.88x, pro forma 6.02x.",
    );
    expect(within(tile).getByText("· own scale, from 4.5x, not from zero")).toBeVisible();
    const x = (label: string) => num(svg.querySelector(`[data-strip="${label}"] circle`), "cx");
    expect((x("Pro forma") - NL.x0) / (x("FY2024") - NL.x0)).toBeCloseTo(
      (6.02 - 4.5) / (4.88 - 4.5),
      6,
    );
    expect(svg.querySelector('[data-strip="Pro forma"] circle')).toHaveClass("fill-warning-mark");
    expect(within(svg).getByText("6.02x pro forma")).toBeInTheDocument();
  });

  it("lists the other stated adjustments with their stated facts only", () => {
    const items = [...(at(draw(), "[data-adjustments]")?.children ?? [])].map(
      (li) => li.textContent,
    );
    expect(items).toEqual([
      "Remaining securitization draw, 2024-10-16: amount 0, pro forma net debt 18,619, 4.88x.",
      "Common-stock repurchases, date not stated: amount 316, pro forma net debt 18,935, 4.97x.",
      "Raptor acquisition working-capital settlement received, date not stated: amount −1, pro forma net debt 18,618, 4.88x.",
      "CPI acquisition working-capital settlement paid, date not stated: amount 1, pro forma net debt 18,620, 4.88x.",
    ]);
  });

  it("states liquidity per period with the exact sum labelled derived", () => {
    const group = within(draw()).getByRole("group", { name: "Liquidity" });
    expect(
      within(group).getByText("Liquidity: cash plus undrawn committed facilities"),
    ).toBeVisible();
    const lines = [...group.querySelectorAll("li")].map((li) => li.textContent);
    expect(lines).toEqual(["FY20233,472+755=4,227 derived", "FY20246,261+843=7,104 derived"]);
  });

  it("has one trace control, the table view of periods and pro forma, and no source reference", () => {
    const tile = draw();
    expect(within(tile).getAllByRole("link")).toHaveLength(1);
    expect(within(tile).getByRole("link", { name: "Source for net debt" })).toHaveAttribute(
      "href",
      expect.stringContaining("/report/run#evidence/"),
    );
    const rows = within(within(tile).getByRole("table"))
      .getAllByRole("row")
      .map((row) =>
        within(row)
          .queryAllByRole("cell")
          .map((cell) => cell.textContent),
      );
    expect(rows.slice(1)).toEqual([
      ["FY2023", "19,750", "3,472", "16,278", "5.17x"],
      ["FY2024", "24,880", "6,261", "18,619", "4.88x"],
      [
        `Pro forma: ${EVENT}, 2024-10-18; amount 4,348`,
        "Not stated",
        "Not stated",
        "22,967",
        "6.02x",
      ],
    ]);
    for (const text of [...tile.querySelectorAll("text, p, li, h3, h4, td")].map(
      (node) => node.textContent,
    ))
      expect(containsReference(text)).toBe(false);
    expect(
      within(tile).queryByText("Net debt is not gross debt less cash in the handoff."),
    ).toBeNull();
  });
});

describe("NetDebtTile states", () => {
  it("notes a net debt that is not gross less cash, and drops the = when the pro forma does not add", () => {
    const tile = draw(setCell(NET, 1, "Net debt", "18000"));
    expect(
      within(tile).getByText("Net debt is not gross debt less cash in the handoff."),
    ).toBeVisible();
    expect(at(tile, "[data-pro-forma]")).toHaveTextContent(
      `Pro forma ${EVENT}, 2024-10-18: net debt 22,967; FY2024 18,000; amount 4,348.`,
    );
    expect(at(tile, "[data-pro-forma]")?.textContent).not.toContain("=");
  });

  it("draws a cash gap as the hatched slot with its reason, not a segment", () => {
    const tile = draw(setCell(NET, 1, "Cash", "Not supplied: restricted cash unclear"));
    expect(at(tile, '[data-gap="FY2024 cash"]')).toHaveAttribute("fill", "url(#net-debt-gap)");
    expect(at(tile, '[data-cash="FY2024"]')).toBeNull();
    expect(
      within(bars(tile)).getByText("Net 18,619 · cash not supplied · gross debt 24,880"),
    ).toBeInTheDocument();
    expect(
      within(tile).getByText("FY2024 cash not supplied: restricted cash unclear."),
    ).toBeVisible();
  });

  it("draws a net debt gap as the hatched slot, never a zero-length bar", () => {
    const tile = draw(setCell(NET, 0, "Net debt", "Not supplied: not calculated"));
    expect(at(tile, '[data-gap="FY2023 net"]')).not.toBeNull();
    expect(at(tile, '[data-bar="FY2023 net"]')).toBeNull();
    expect(at(tile, '[data-zero="FY2023"]')).toBeNull();
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      `Net debt was 18,619 at FY2024; pro forma for ${EVENT} it is 22,967`,
    );
    for (const node of tile.querySelectorAll("text.font-mono"))
      expect(node.textContent).not.toMatch(/Not supplied/);
  });

  it("draws a stated zero as a value of zero length, distinct from a gap", () => {
    const tile = draw(setCell(NET, 0, "Net debt", "0"));
    expect(num(at(tile, '[data-bar="FY2023 net"]'), "width")).toBe(0);
    expect(at(tile, '[data-zero="FY2023"]')).not.toBeNull();
    expect(at(tile, '[data-gap="FY2023 net"]')).toBeNull();
    expect(
      within(bars(tile)).getByText("Net 0 · cash 3,472 · gross debt 19,750"),
    ).toBeInTheDocument();
  });

  it("draws a net cash position left of zero on a scale that brackets it, and calls the fall better", () => {
    let entry = setCell(NET, 1, "Gross debt", "1000");
    entry = setCell(NET, 1, "Cash", "3000", entry);
    entry = setCell(NET, 1, "Net debt", "-2,000", entry);
    const tile = draw(dropTable(ADJUSTMENTS, entry));
    const svg = bars(tile);
    const zero = within(svg).getByText("0");
    const bar = at(tile, '[data-bar="FY2024 net"]');
    expect(num(bar, "x")).toBeLessThan(num(zero, "x"));
    expect(num(bar, "x") + num(bar, "width")).toBeCloseTo(num(zero, "x"), 6);
    expect(at(tile, '[data-cash="FY2024"]')).toBeNull();
    expect(svg.getAttribute("aria-label")).toContain("on one scale through zero");
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      "Net debt fell from 16,278 to −2,000",
    );
    expect(at(tile, '[data-direction="down"]')).toHaveTextContent("· better");
  });

  it("draws no pro forma where no row states one", () => {
    const tile = draw(dropTable(ADJUSTMENTS));
    expect(at(tile, '[data-row="Pro forma"]')).toBeNull();
    expect(at(tile, "[data-pro-forma]")).toBeNull();
    expect(at(tile, "[data-adjustments]")).toBeNull();
    expect(within(tile).queryByText("Gross debt pro forma is not stated.")).toBeNull();
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      "Net debt rose from 16,278 to 18,619",
    );
    expect(strip(tile).querySelector('[data-strip="Pro forma"]')).toBeNull();
  });

  it("keeps a period without a stated ratio on the strip as words, and says when no ratio is stated", () => {
    const partly = draw(dropTable("Chart data: leverage"));
    expect(within(strip(partly)).getAllByText("not stated")).toHaveLength(2);
    cleanup();
    const none = draw(dropTable(ADJUSTMENTS, dropTable("Chart data: leverage")));
    expect(within(none).getByText(NO_STRIP)).toBeVisible();
  });

  it("wraps a very long event name instead of running off the figure", () => {
    const long = `${"Extraordinarily-long-event-name-".repeat(8)}settlement`;
    const tile = draw(setCell(ADJUSTMENTS, 1, "Event", long));
    expect(at(tile, "[data-pro-forma]")).toHaveTextContent(long);
    expect(at(tile, "[data-pro-forma]")).toHaveClass("wrap-anywhere");
    for (const node of bars(tile).querySelectorAll("text"))
      expect(node.textContent).not.toContain(long);
  });

  it("names the unit the table states", () => {
    const tile = draw(
      edited((table, heading) =>
        heading === NET
          ? {
              ...table,
              rows: table.rows.map((r) => ({
                ...r,
                cells: r.cells.map((c) => (c === "US$m" ? "EUR millions" : c)),
              })),
            }
          : table,
      ),
    );
    expect(within(tile).getByText(/^Net debt · EURm, FY2023 → FY2024/)).toBeVisible();
  });

  it("draws one stated period as a figure, not a gap (round 2: one period is a valid shape)", () => {
    const tile = draw(
      edited((table, heading) =>
        heading === NET ? { ...table, rows: table.rows.slice(1) } : table,
      ),
    );
    expect(within(tile).queryByText(NO_NET_DEBT)).toBeNull();
    expect(within(tile).getByText(/^Net debt · US\$m, FY2024, with the pro forma/)).toBeVisible();
    expect(within(tile).getAllByRole("img").length).toBeGreaterThan(0);
  });

  it("draws the gap tile when the net debt table is absent", () => {
    const tile = draw(edited((table, heading) => (heading === NET ? null : table)));
    expect(within(tile).getByText(NO_NET_DEBT)).toBeVisible();
    expect(within(tile).queryByRole("img")).toBeNull();
  });
});
