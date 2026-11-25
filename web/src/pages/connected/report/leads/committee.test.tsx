// Synthetic, built from the module contract (src/deploy_vii/cp6_committee.py: the Final-bias
// register, T6A.4 "Bear cross-examination" and the portfolio-limits chart); not a real handoff.
// No real CP-6 handoff is retained. The thin case uses the retained synthetic CP-6 fixture.
// Every expected value below is written out by hand.
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import type { OutputEntry, Section } from "../../publishedReport";
import { entry as buildEntry, table } from "../overview/rows.fixture";
import { CommitteeLead } from "./committee";
import { ledger, limitReason, limits, stance } from "./committeeData";
import { cp6Entry, leadProps } from "./fixtures/load";

afterEach(cleanup);

let at = 0;
const tbl = (heading: string, headers: string[], ...rows: string[][]): Section => ({
  heading,
  level: 3,
  line: (at += 20),
  blocks: [table((at += 2), headers, rows)],
});
const text = (heading: string, paragraph: string): Section => ({
  heading,
  level: 3,
  line: (at += 20),
  blocks: [{ type: "text", line: (at += 2), end: at, text: paragraph }],
});
const cp6 = (...sections: Section[]): OutputEntry =>
  buildEntry("CP-6", [], [{ heading: "Findings", level: 2, line: 1, blocks: [] }, ...sections]);

const BIAS_HEADERS = [
  "Item",
  "Action bias",
  "Rationale",
  "Conditions",
  "Confidence",
  "Basis",
  "Limitation",
];
const bias = (word: string, conditions: string, confidence: string) =>
  tbl("T6-FINAL Final bias", BIAS_HEADERS, [
    "Recommendation",
    word,
    "Cover is thin.",
    conditions,
    confidence,
    "n/a",
    "None",
  ]);
const LEDGER_HEADERS = [
  "Item",
  "CP-2 row",
  "Counter-case",
  "Evidence for",
  "Evidence against",
  "What would change the view",
  "Basis",
];
const claim = (n: number, over: Partial<Record<string, string>> = {}) => [
  `r${String(n)}`,
  over["point"] ?? `Point ${String(n)}`,
  over["counter"] ?? `Counter ${String(n)}`,
  over["for"] ?? `For ${String(n)}`,
  over["against"] ?? `Against ${String(n)}`,
  over["change"] ?? `Change ${String(n)}`,
  "n/a",
];
const LIMIT_HEADERS = [
  "Limit",
  "Current exposure",
  "Proposed exposure",
  "Limit value",
  "Reporting unit",
  "Basis and limitation",
];
const LIMITS = tbl(
  "Chart data: portfolio limits",
  LIMIT_HEADERS,
  ["Max single issuer", "2.37", "2.40", "2.50", "% NAV", "Snapshot."],
  ["Max unrated", "3.73", "Not supplied: no proposal", "5.00", "% NAV", "Snapshot."],
);

describe("stance", () => {
  it("reads the action bias and confidence from the Final-bias table, as written", () => {
    const found = stance(cp6(bias("Underweight", "Refinance by 2027; Cover above 3x", "Medium")));
    expect(found).toMatchObject({
      state: "stated",
      word: "Underweight",
      confidence: "Medium",
      source: "table",
    });
    expect(found.state === "stated" && found.conditions).toEqual({
      kind: "list",
      items: [
        { kind: "text", text: "Refinance by 2027" },
        { kind: "text", text: "Cover above 3x" },
      ],
    });
  });
  it("parses the challenge sentence with a strict pattern when there is no table", () => {
    const found = stance(
      cp6(
        text(
          "Committee challenge",
          "Action bias: Neutral (confidence Low). The cover is thin. Conditions: none.\nBasis: x",
        ),
      ),
    );
    expect(found).toMatchObject({ word: "Neutral", confidence: "Low", source: "sentence" });
  });
  it("does not guess from a sentence that is not exactly that shape", () => {
    expect(stance(cp6(text("Committee challenge", "The action bias is Neutral."))).state).toBe(
      "gap",
    );
    expect(
      stance(cp6(text("Committee challenge", "Action bias: Neutral confidence Low."))).state,
    ).toBe("gap");
    expect(stance(cp6()).state).toBe("gap");
  });
  it("keeps a stated gap as a gap, with its reason", () => {
    expect(stance(cp6(bias("Not supplied: no committee view", "x", "Low")))).toEqual({
      state: "gap",
      reason: "no committee view",
    });
  });
  it("refuses a Final-bias table with two rows", () => {
    const two = tbl(
      "F",
      BIAS_HEADERS,
      ["a", "Neutral", "r", "c", "Low", "b", "l"],
      ["b", "Overweight", "r", "c", "High", "b", "l"],
    );
    expect(stance(cp6(two)).state).toBe("gap");
  });
  it("leaves out a conditions cell that cites a source and keeps the rest", () => {
    const found = stance(cp6(bias("Neutral", "Refinance by 2027; see annual.pdf p. 4", "High")));
    expect(found.state === "stated" && found.conditions).toEqual({
      kind: "list",
      items: [{ kind: "text", text: "Refinance by 2027" }, { kind: "evidence" }],
    });
  });
});

describe("ledger", () => {
  it("reads one row per CP-2 row with its four cells", () => {
    const found = ledger(
      cp6(tbl("T6A.4 Bear cross-examination", LEDGER_HEADERS, claim(1), claim(2))),
    );
    expect(found.state === "rows" && found.rows.map((row) => row.evidenceFor)).toEqual([
      { kind: "text", text: "For 1" },
      { kind: "text", text: "For 2" },
    ]);
  });
  it("reads the handoff's own empty row as none, with its reason", () => {
    const empty = tbl("T", LEDGER_HEADERS, [
      "None",
      "Not supplied: None in the CP-6 submission (challenges)",
      "Not supplied: None in the CP-6 submission (challenges)",
      "Not supplied: None in the CP-6 submission (challenges)",
      "Not supplied: None in the CP-6 submission (challenges)",
      "Not supplied: None in the CP-6 submission (challenges)",
      "Not supplied: None in the CP-6 submission (challenges)",
    ]);
    expect(ledger(cp6(empty))).toEqual({
      state: "none",
      reason: "None in the Committee decision submission (challenges)",
    });
  });
  it("is absent without the table and refuses two", () => {
    expect(ledger(cp6()).state).toBe("absent");
    const one = tbl("A", LEDGER_HEADERS, claim(1));
    expect(ledger(cp6(one, one)).state).toBe("duplicate");
  });
});

describe("limitReason", () => {
  const n = (text: string) => ({ kind: "number", text, value: Number(text) }) as const;
  const gap = { kind: "gap", reason: "no snapshot" } as const;
  const words = { kind: "text", text: "about two" } as const;
  it("takes numbers, zero as a stated value, and a gap in current or proposed (drawn in place)", () => {
    expect(
      limitReason({ current: n("2.37"), proposed: n("2.40"), limit: n("2.50") }, "% NAV"),
    ).toBeNull();
    expect(limitReason({ current: n("0"), proposed: n("0"), limit: n("5") }, "% NAV")).toBeNull();
    expect(limitReason({ current: gap, proposed: gap, limit: n("5") }, "% NAV")).toBeNull();
  });
  it("gives no bullet for a limit that is a gap, for words, a negative value or no unit", () => {
    expect(limitReason({ current: n("1"), proposed: n("1"), limit: gap }, "x")).toBe(
      "Limit value is not supplied: no snapshot.",
    );
    expect(limitReason({ current: n("1"), proposed: n("1"), limit: words }, "x")).toBe(
      "Limit value is not a number.",
    );
    expect(limitReason({ current: words, proposed: n("1"), limit: n("2") }, "x")).toBe(
      "Current exposure is not a number.",
    );
    expect(limitReason({ current: n("1"), proposed: words, limit: n("2") }, "x")).toBe(
      "Proposed exposure is not a number.",
    );
    expect(limitReason({ current: n("-1"), proposed: n("1"), limit: n("2") }, "x")).toBe(
      "A negative exposure cannot be drawn on a scale from zero.",
    );
    expect(limitReason({ current: n("1"), proposed: n("1"), limit: n("2") }, null)).toBe(
      "The reporting unit is not stated.",
    );
  });
});

describe("limits", () => {
  it("reads the retained synthetic chart table by its headers", () => {
    const found = limits(cp6Entry());
    expect(found?.rows.map((row) => [row.name, row.unit])).toEqual([
      ["Max single issuer exposure", "% NAV"],
      ["Max unrated exposure", "% NAV"],
    ]);
  });
  it("is null without the table, with two, or with an unstated unit it draws a gap row", () => {
    expect(limits(cp6())).toBeNull();
    expect(limits(cp6(LIMITS, LIMITS))).toBeNull();
    const noUnit = tbl("L", LIMIT_HEADERS, ["Max", "1", "1", "2", "Not supplied: unit", "n"]);
    expect(limits(cp6(noUnit))?.rows[0]?.reason).toBe("The reporting unit is not stated.");
  });
});

const renderLead = (entry: OutputEntry) => render(<CommitteeLead {...leadProps(entry)} />);
const FULL = () =>
  cp6(
    bias("Underweight", "Refinance by 2027; Cover above 3x", "Medium"),
    tbl("T6A.4 Bear cross-examination", LEDGER_HEADERS, claim(1), claim(2)),
    LIMITS,
  );

describe("CommitteeLead", () => {
  it("draws the stance as written, the caption, the confidence meter and the conditions", () => {
    const { container } = renderLead(FULL());
    const tile = screen.getByRole("region", { name: "Committee stance" });
    expect(within(tile).getByRole("heading", { level: 3 }).textContent).toBe("Committee stance");
    expect(tile.querySelector("[data-action-bias]")?.textContent).toBe("Underweight");
    expect(within(tile).getByText("Confidence Medium")).toBeVisible();
    expect(
      within(tile).getByText("As written by the module; the stance is not a typed field."),
    ).toBeVisible();
    expect(
      [...container.querySelectorAll("[data-step]")].map((step) =>
        step.getAttribute("data-filled"),
      ),
    ).toEqual(["true", "true", "false"]);
    expect([...tile.querySelectorAll("ul li")].map((item) => item.textContent)).toEqual([
      "Refinance by 2027",
      "Cover above 3x",
    ]);
  });
  it("draws the gap when no action bias is stated", () => {
    renderLead(cp6Entry());
    expect(screen.getByText(/The handoff states no action bias\./)).toBeVisible();
  });
  it("draws one ledger row per claim with a verdict gap that is always the same designed words", () => {
    renderLead(FULL());
    const tile = screen.getByRole("region", { name: "Challenged points" });
    expect(within(tile).getByRole("heading", { level: 3 }).textContent).toBe("Challenged points");
    const rows = tile.querySelectorAll("ol > li");
    expect(rows).toHaveLength(2);
    expect(rows[0]?.querySelector('[data-cell="point"]')?.textContent).toContain("Point 1");
    expect(rows[0]?.querySelector('[data-cell="for"]')?.textContent).toContain("For 1");
    expect(rows[1]?.querySelector('[data-cell="counter"]')?.textContent).toContain("Counter 2");
    expect(rows[1]?.querySelector('[data-cell="against"]')?.textContent).toContain("Against 2");
    expect(rows[0]?.querySelector('[data-cell="change"]')?.textContent).toContain("Change 1");
    for (const row of rows)
      expect(row.querySelector('[data-cell="verdict"]')?.textContent).toContain(
        "No verdict is stated per claim.",
      );
  });
  it("caps the ledger at eight rows and holds the rest in a details", () => {
    const many = cp6(
      bias("Neutral", "x", "Low"),
      tbl("T6A.4", LEDGER_HEADERS, ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => claim(n))),
    );
    renderLead(many);
    const tile = screen.getByRole("region", { name: "Challenged points" });
    const lists = tile.querySelectorAll("ol");
    expect(lists[0]?.children).toHaveLength(8);
    const more = tile.querySelector("details");
    expect(more?.querySelector("summary")?.textContent).toBe("Show 2 more points");
    expect(more?.querySelectorAll("li")).toHaveLength(2);
    expect(within(tile).getByRole("heading", { level: 3 }).textContent).toBe("Challenged points");
  });
  it("trims a long case to two lines with Show more, and draws a stated gap and a citation as such", () => {
    const long = "A long statement about the credit case. ".repeat(8).trim();
    renderLead(
      cp6(
        tbl(
          "T6A.4",
          LEDGER_HEADERS,
          claim(1, {
            for: long,
            against: "Not supplied: nothing was found",
            change: "See annual.pdf page 3",
          }),
        ),
      ),
    );
    const row = document.querySelector("ol > li") as HTMLElement;
    const forCell = row.querySelector('[data-cell="for"]') as HTMLElement;
    expect(forCell.querySelector("p.line-clamp-2")).not.toBeNull();
    expect(within(forCell).getByText("Show more")).toBeVisible();
    expect(
      within(row.querySelector('[data-cell="against"]') as HTMLElement).getByText(
        "Not supplied: nothing was found",
      ),
    ).toBeVisible();
    expect(
      within(row.querySelector('[data-cell="change"]') as HTMLElement).getByText(
        "Detail is in Evidence.",
      ),
    ).toBeVisible();
    expect(row.textContent).not.toContain("annual.pdf");
  });
  it("draws a gap for a ledger that is absent or empty", () => {
    renderLead(cp6(bias("Neutral", "x", "Low")));
    expect(
      screen.getByText(/The handoff has no cross-examination of the credit case\./),
    ).toBeVisible();
  });
  it("draws each limit as the kit bullet in proportion, and the unsupplied proposal as a gap", () => {
    const { container } = renderLead(FULL());
    const tile = screen.getByRole("region", { name: "Portfolio limits" });
    const first = tile.querySelector('[data-limit="Max single issuer"]') as HTMLElement;
    const bar = first.querySelector('[data-bar="value"]') as Element;
    const limit = first.querySelector('[data-mark="limit"]') as Element;
    const proposed = first.querySelector('[data-mark="proposed"]') as Element;
    const zero = Number(bar.getAttribute("x"));
    const share = (x: number) => (x - zero) / (Number(limit.getAttribute("x1")) - zero);
    expect(share(zero + Number(bar.getAttribute("width")))).toBeCloseTo(2.37 / 2.5, 6);
    expect(share(Number(proposed.getAttribute("cx")))).toBeCloseTo(2.4 / 2.5, 6);
    expect(first.querySelector("svg")?.getAttribute("aria-label")).toBe(
      "Max single issuer, % NAV: Current 2.37 % NAV; Proposed 2.40 % NAV; Limit 2.50 % NAV. Scale from zero.",
    );
    const second = tile.querySelector('[data-limit="Max unrated"]') as HTMLElement;
    expect(second.querySelector('[data-mark="proposed"]')).toBeNull();
    expect(within(second).getByText("Proposed: Not supplied: no proposal")).toBeVisible();
    expect(container.querySelectorAll("[data-limit]")).toHaveLength(2);
  });
  it("draws no limits tile when the chart table is not in the handoff", () => {
    renderLead(cp6(bias("Neutral", "x", "Low")));
    expect(screen.queryByRole("region", { name: "Portfolio limits" })).toBeNull();
  });
  it("draws one trace control per figure and no source reference", () => {
    const { container } = renderLead(FULL());
    expect(screen.getAllByRole("link", { name: /Source for/ })).toHaveLength(3);
    expect(container.textContent).not.toMatch(/\bCP-\d|T6A|T2\./);
  });
  it("draws the thin synthetic handoff with its limits and gaps, never a verdict", () => {
    const { container } = renderLead(cp6Entry());
    expect(container.querySelectorAll('[data-cell="verdict"]')).toHaveLength(0);
    expect(screen.getByRole("region", { name: "Portfolio limits" })).toBeVisible();
  });
  it("draws the challenged point as the row's subject, with the module's own column names and no bull or bear words", () => {
    const { container } = renderLead(
      cp6(
        bias("Neutral", "x", "Low"),
        tbl(
          "T6A.4",
          LEDGER_HEADERS,
          claim(1, {
            point: "Weakness: leverage is high and rising",
            for: "Gross debt rose from 19,750 to 24,880 while EBITDA rose less.",
            counter: "EBITDA growth may outpace debt.",
            against: "Cash covers the 2026 maturity.",
          }),
        ),
      ),
    );
    const row = container.querySelector("ol > li") as HTMLElement;
    expect(row.querySelector('[data-cell="point"]')?.textContent).toBe(
      "Challenged pointWeakness: leverage is high and rising",
    );
    const labels = [...row.querySelectorAll("p")]
      .filter((p) => p.className.includes("font-medium text-text-tertiary"))
      .map((p) => p.textContent);
    expect(labels).toEqual([
      "Challenged point",
      "Counter-case",
      "Evidence for this point",
      "Evidence against this point",
      "What would change the view",
      "Verdict",
    ]);
    expect(row.querySelector('[data-cell="for"]')?.textContent).toContain("Gross debt rose");
    expect(container.textContent).not.toMatch(/bull|bear|case for|case against/i);
  });
  it("wraps very long words", () => {
    const long = "y".repeat(200);
    renderLead(cp6(tbl("T", LEDGER_HEADERS, claim(1, { counter: long }))));
    expect(screen.getAllByText(long)[0]?.className).toContain("wrap-anywhere");
  });
});

describe("a gap reason that names a source", () => {
  const named = tbl("Chart data: portfolio limits", LIMIT_HEADERS, [
    "Max single issuer",
    "2.37",
    "Not supplied: awaiting CP-2 data in Limits.xlsx",
    "2.50",
    "% NAV",
    "Snapshot.",
  ]);
  it("is drawn as the in-Evidence sentence in the bullet note, the aria label and the table view", () => {
    const { container } = renderLead(cp6(named));
    expect(screen.getByText("Proposed: Not supplied: Detail is in Evidence.")).toBeVisible();
    expect(container.textContent).not.toMatch(/Limits\.xlsx|CP-2|Funda/);
    const tile = screen.getByRole("region", { name: "Portfolio limits" });
    fireEvent.click(within(tile).getByRole("button", { name: /Table view/ }));
    const table = tile.querySelector("table") as HTMLElement;
    expect(table.textContent).toContain("Not supplied: Detail is in Evidence.");
  });
  it("is kept out of a gap in current, drawn in place, and of a gap in the limit", () => {
    const current = tbl("Chart data: portfolio limits", LIMIT_HEADERS, [
      "Max",
      "Not supplied: see Limits.xlsx for CP-2",
      "1",
      "2",
      "% NAV",
      "n",
    ]);
    const { container } = renderLead(cp6(current));
    expect(screen.getByText("Current: Not supplied: Detail is in Evidence.")).toBeVisible();
    expect(container.textContent).not.toMatch(/xlsx|CP-2/);
    const limit = tbl("Chart data: portfolio limits", LIMIT_HEADERS, [
      "Max",
      "1",
      "1",
      "Not supplied: see Limits.xlsx for CP-2",
      "% NAV",
      "n",
    ]);
    cleanup();
    const second = renderLead(cp6(limit));
    expect(screen.getByText("Limit value is not supplied: Detail is in Evidence.")).toBeVisible();
    expect(second.container.textContent).not.toMatch(/xlsx|CP-2/);
  });
});

describe("layout, titles and what the lead draws", () => {
  it("names each tile plainly, with no count", () => {
    renderLead(FULL());
    const titles = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
    expect(titles).toEqual(["Committee stance", "Challenged points", "Portfolio limits"]);
  });
  it("says it draws figures and events itself", () => {
    expect(CommitteeLead.draws).toEqual(["figures", "events"]);
  });
  it("stacks the stance and the watch items in one column, so neither is stretched by the ledger", () => {
    const { container } = renderLead(cp6Entry());
    const column = screen.getByRole("region", { name: "Watch items" }).parentElement as HTMLElement;
    expect(column.className).toContain("flex-col");
    expect(column.className).toContain("lg:col-span-5");
    expect(container.querySelector('section[aria-label="Committee stance"]')).not.toBeNull();
  });
  it("marks a proposed exposure above its limit with the words, in text and aria", () => {
    const { container } = renderLead(
      cp6(
        tbl("Chart data: portfolio limits", LIMIT_HEADERS, [
          "Max single issuer",
          "11.0",
          "12.6",
          "12.0",
          "% NAV",
          "n",
        ]),
      ),
    );
    const bullet = container.querySelector("[data-limit]") as HTMLElement;
    expect(within(bullet).getByText("Proposed 12.6 % NAV, above the limit")).toBeVisible();
    expect(bullet.querySelector("svg")?.getAttribute("aria-label")).toContain(
      "Proposed 12.6 % NAV, above the limit",
    );
    expect(bullet.querySelector("svg")?.getAttribute("aria-label")).not.toContain(
      "Current 11.0 % NAV, above",
    );
  });
  it("says nothing of the limit when the exposure is within it or equal to it", () => {
    const { container } = renderLead(
      cp6(
        tbl("Chart data: portfolio limits", LIMIT_HEADERS, [
          "Max",
          "12.0",
          "12.00",
          "12.0",
          "% NAV",
          "n",
        ]),
      ),
    );
    expect(container.textContent).not.toContain("above the limit");
  });
  it("draws the decision-and-watch events as a plain list, dates as written, with no source column", () => {
    renderLead(cp6Entry());
    const tile = screen.getByRole("region", { name: "Watch items" });
    expect(within(tile).getByRole("heading", { level: 3 }).textContent).toBe("Watch items");
    const items = [...tile.querySelectorAll("ul > li")].map((item) => item.textContent);
    expect(items).toEqual([
      "2025-03-31Synthetic noteScheduled — matures",
      "2025-06Synthetic callHistorical — noted",
      "2025-Q3Synthetic reviewScenario — modelled",
      "2026Synthetic maturityScheduled — maturity",
    ]);
    expect(tile.textContent).not.toMatch(/Filing|Memo/);
  });
  it("draws no watch tile when the handoff has no events table", () => {
    renderLead(cp6(bias("Neutral", "x", "Low")));
    expect(screen.queryByRole("region", { name: "Watch items" })).toBeNull();
  });
});

describe("disclosures", () => {
  it("makes every Show more summary a real target with a marker and the token focus ring", () => {
    const long = "A long statement about the credit case. ".repeat(8).trim();
    const { container } = renderLead(
      cp6(
        bias("Neutral", "a; b; c; d; e; f", "Low"),
        tbl("T6A.4", LEDGER_HEADERS, claim(1, { for: long })),
        tbl(
          "Events: Decision and watch",
          ["Event date", "Event", "Status"],
          ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => [
            `2026-0${String(n)}`,
            `Event ${String(n)}`,
            "Scheduled",
          ]),
        ),
      ),
    );
    const summaries = [...container.querySelectorAll("details > summary")];
    expect(summaries.map((summary) => summary.textContent)).toEqual([
      "Show 2 more",
      "Show 1 more",
      "Show more",
    ]);
    for (const summary of summaries) {
      expect(summary.className).toContain("min-h-8");
      expect(summary.className).toContain("max-[480px]:min-h-11");
      expect(summary.className).toContain("focus-visible:outline-2");
      expect(summary.querySelector("svg")).not.toBeNull();
    }
  });
});
