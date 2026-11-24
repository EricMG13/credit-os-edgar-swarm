// Synthetic, built from the module contract (src/deploy_vii/cp6_committee.py: the Final-bias
// register, T6A.4 "Bear cross-examination" and the portfolio-limits chart); not a real handoff.
// No real CP-6 handoff is retained. The thin case uses the retained synthetic CP-6 fixture.
// Every expected value below is written out by hand.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import type { OutputEntry, Section } from "../../publishedReport";
import { entry as buildEntry, table } from "../overview/rows.fixture";
import { CommitteeLead } from "./committee";
import { bulletMarks, ledger, limits, stance } from "./committeeData";
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
  `T2.${String(n)}`,
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

describe("bulletMarks", () => {
  const n = (text: string) => ({ kind: "number", text, value: Number(text) }) as const;
  it("puts current, proposed and limit on one scale from zero", () => {
    const marks = bulletMarks({ current: n("2.37"), proposed: n("2.40"), limit: n("2.50") });
    if ("reason" in marks) throw new Error(marks.reason);
    expect(marks.top).toBe(3);
    expect(marks.ticks.map((tick) => tick.label)).toEqual(["0", "1", "2", "3"]);
    const share = (x: number | null) => ((x ?? Number.NaN) - 8) / (400 - 8);
    expect(share(marks.current)).toBeCloseTo(2.37 / 3, 9);
    expect(share(marks.proposed)).toBeCloseTo(2.4 / 3, 9);
    expect(share(marks.limit)).toBeCloseTo(2.5 / 3, 9);
  });
  it("keeps zero as a stated value on the scale", () => {
    const marks = bulletMarks({ current: n("0"), proposed: n("0"), limit: n("5") });
    if ("reason" in marks) throw new Error(marks.reason);
    expect(marks.current).toBe(8);
    expect(marks.proposed).toBe(8);
  });
  it("draws no bullet for a gap, words or a negative value, and says why", () => {
    const gap = { kind: "gap", reason: "no snapshot" } as const;
    const words = { kind: "text", text: "about two" } as const;
    expect(bulletMarks({ current: gap, proposed: n("1"), limit: n("2") })).toEqual({
      reason: "Current exposure is not supplied: no snapshot.",
    });
    expect(bulletMarks({ current: n("1"), proposed: n("1"), limit: words })).toEqual({
      reason: "Limit value is not a number.",
    });
    expect(bulletMarks({ current: n("1"), proposed: words, limit: n("2") })).toEqual({
      reason: "Proposed exposure is not a number.",
    });
    expect(bulletMarks({ current: n("-1"), proposed: n("1"), limit: n("2") })).toEqual({
      reason: "A negative exposure cannot be drawn on a scale from zero.",
    });
  });
  it("leaves a proposed exposure that is not supplied out of the scale", () => {
    const marks = bulletMarks({
      current: n("3.73"),
      proposed: { kind: "gap", reason: "no proposal" },
      limit: n("5.00"),
    });
    if ("reason" in marks) throw new Error(marks.reason);
    expect(marks.proposed).toBeNull();
    expect(marks.ticks.map((tick) => tick.label)).toEqual(["0", "2", "4", "6"]);
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
    expect(limits(cp6(noUnit))?.rows[0]?.bullet).toEqual({
      reason: "The reporting unit is not stated.",
    });
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
    expect(within(tile).getByRole("heading", { level: 3 }).textContent).toBe(
      "Underweight, confidence Medium",
    );
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
    expect(screen.getByText("The handoff states no action bias.")).toBeVisible();
  });
  it("draws one ledger row per claim with a verdict gap that is always the same designed words", () => {
    renderLead(FULL());
    const tile = screen.getByRole("region", { name: "The case for against the case against" });
    expect(within(tile).getByRole("heading", { level: 3 }).textContent).toBe(
      "2 claims cross-examined",
    );
    const rows = tile.querySelectorAll("ol > li");
    expect(rows).toHaveLength(2);
    expect(rows[0]?.querySelector('[data-cell="for"]')?.textContent).toContain("For 1");
    const against = rows[1]?.querySelector('[data-cell="against"]')?.textContent ?? "";
    expect(against.indexOf("Counter 2")).toBeGreaterThan(-1);
    expect(against.indexOf("Counter 2")).toBeLessThan(against.indexOf("Against 2"));
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
    const tile = screen.getByRole("region", { name: "The case for against the case against" });
    const lists = tile.querySelectorAll("ol");
    expect(lists[0]?.children).toHaveLength(8);
    const more = tile.querySelector("details");
    expect(more?.querySelector("summary")?.textContent).toBe("Show 2 more claims");
    expect(more?.querySelectorAll("li")).toHaveLength(2);
    expect(within(tile).getByRole("heading", { level: 3 }).textContent).toBe(
      "10 claims cross-examined",
    );
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
      screen.getByText("The handoff has no cross-examination of the credit case."),
    ).toBeVisible();
  });
  it("draws each limit as a bullet in proportion, and the unsupplied proposal as a gap mark", () => {
    const { container } = renderLead(FULL());
    const tile = screen.getByRole("region", { name: "Portfolio limits" });
    const first = tile.querySelector('[data-limit="Max single issuer"]') as HTMLElement;
    const bar = Number(first.querySelector('[data-mark="current"]')?.getAttribute("width"));
    const limitX = Number(first.querySelector('[data-mark="limit"]')?.getAttribute("x1"));
    expect(bar / (limitX - 8)).toBeCloseTo(2.37 / 2.5, 9);
    expect(first.querySelector('[data-mark="proposed"]')).not.toBeNull();
    expect(first.querySelector("svg")?.getAttribute("aria-label")).toBe(
      "Max single issuer: current 2.37 % NAV, proposed 2.40 % NAV, limit 2.50 % NAV, on one scale from zero.",
    );
    const second = tile.querySelector('[data-limit="Max unrated"]') as HTMLElement;
    expect(second.querySelector('[data-mark="proposed"]')).toBeNull();
    expect(second.querySelector('[data-mark="proposed-gap"]')).not.toBeNull();
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
    const table = container.querySelector("details table") as HTMLElement;
    expect(table.textContent).toContain("Not supplied: Detail is in Evidence.");
  });
  it("is kept out of a whole-bullet gap too", () => {
    const current = tbl("Chart data: portfolio limits", LIMIT_HEADERS, [
      "Max",
      "Not supplied: see Limits.xlsx for CP-2",
      "1",
      "2",
      "% NAV",
      "n",
    ]);
    const { container } = renderLead(cp6(current));
    expect(
      screen.getByText("Current exposure is not supplied: Detail is in Evidence."),
    ).toBeVisible();
    expect(container.textContent).not.toMatch(/xlsx|CP-2/);
  });
});
