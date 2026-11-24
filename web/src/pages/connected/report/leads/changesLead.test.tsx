// Synthetic, built from the module contract (src/deploy_vii/methods/cp8.md, lines 140-200: the two
// registers, and rule 3 for the shape of an Earlier or Current cell); not a real handoff. No real
// CP-8 handoff is retained. Every expected value below is written out by hand.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import type { OutputEntry, Section } from "../../publishedReport";
import { entry as buildEntry, table } from "../overview/rows.fixture";
import { ChangesSummaryLead } from "./changesLead";
import {
  analysisChanges,
  changeWords,
  issuerChanges,
  measured,
  trackScale,
} from "./changesLeadData";
import { leadProps } from "./fixtures/load";

afterEach(cleanup);

let at = 0;
const tbl = (heading: string, headers: string[], ...rows: string[][]): Section => ({
  heading,
  level: 3,
  line: (at += 20),
  blocks: [table((at += 2), headers, rows)],
});
const cp8 = (...sections: Section[]): OutputEntry =>
  buildEntry("CP-8", [], [{ heading: "Findings", level: 2, line: 1, blocks: [] }, ...sections]);

const ISSUER_HEADERS = [
  "Measure or fact",
  "Earlier",
  "Current",
  "Cause",
  "Effect on the credit view",
];
const ANALYSIS_HEADERS = ["Module", "Status", "Cause", "Why"];
const issuer = (...rows: string[][]) => tbl("What changed: the issuer", ISSUER_HEADERS, ...rows);
const analysis = (...rows: string[][]) =>
  tbl("What changed: the analysis", ANALYSIS_HEADERS, ...rows);
const row = (
  label: string,
  earlier: string,
  current: string,
  cause = "New period",
  effect = "Same definition.",
) => [label, earlier, current, cause, effect];

const ISSUER = () =>
  issuer(
    row("Total debt / EBITDA", "6.27x (FY2023)", "6.53x (FY2024)"),
    row("Net debt / EBITDA", "5.10x (FY2023)", "6.00x (FY2024)"),
    row("Interest cover", "2.0x (FY2023)", "1.5x (FY2024)", "Unresolved"),
    row("Gross debt", "19750 US$m (2023-09-30)", "24880 US$m (2024-09-30)"),
    row("Cover B", "3.0x (FY2023)", "3.1x (FY2024)"),
    row("Cover C", "4.0x (FY2023)", "4.0x (FY2024)", "None"),
    row("Cover D", "1x (FY2023)", "1.05x (FY2024)"),
    row(
      "Restated leverage",
      "6.0x (FY2024)",
      "7.0x (FY2024)",
      "Correction",
      "Same definition: corrected.",
    ),
    row(
      "Basis moved",
      "1.0x (FY2023)",
      "9.0x (FY2024)",
      "New period",
      "Not comparable: the basis changed.",
    ),
    row("Cash", "2x (FY2023)", "Not stated"),
    row("Margin", "20.6% (FY2023)", "5x (FY2024)"),
    row("Refinancing", "—", "New term loan of 1,200", "New source", "Adds a 2029 maturity."),
    row("No material change", "—", "—", "None", "Nothing else moved."),
  );
const ANALYSIS = () =>
  analysis(
    ["Liquidity (CP-2D)", "Strengthened", "New period", "More cash."],
    ["Fundamental credit (CP-2)", "Strengthened", "New period", "Cover rose."],
    ["Refinancing & LME (CP-3C)", "Weakened", "Unresolved", "A wall appeared."],
    ["Ratings & triggers (CP-2H)", "Unchanged", "None", "Same."],
    ["Peer benchmark (CP-1C)", "Not run this time", "Method change", "No peer data."],
    ["Odd module (CP-9Z)", "Partially revised", "Unresolved", "Unclear."],
  );

describe("measured", () => {
  it("reads value, attached unit and period; commas stripped", () => {
    expect(measured("6.01x (FY2024)")).toMatchObject({
      number: "6.01",
      unit: "x",
      period: "FY2024",
    });
    expect(measured("6261 US$m (2024-09-30)")).toMatchObject({ number: "6261", unit: "US$m" });
    expect(measured("1,250 GBPm")).toMatchObject({ number: "1250", unit: "GBPm", period: null });
    expect(measured("−0.5%")).toMatchObject({ number: "-0.5", unit: "%" });
    expect(measured("0x")).toMatchObject({ number: "0", unit: "x" });
  });
  it("reads words, gaps and malformed numbers as not a measure", () => {
    for (const cell of [
      "Not stated",
      "about 6x",
      "Not supplied: x",
      "—",
      "1,2,3x",
      "6.5x US$m",
      "",
    ])
      expect(measured(cell)).toBeNull();
  });
});

describe("analysisChanges", () => {
  it("counts each status exactly, in the register's order, omitting zero counts", () => {
    const found = analysisChanges(cp8(ANALYSIS()));
    expect(found?.counts.map((item) => [item.word, item.count, item.shape])).toEqual([
      ["Unchanged", 1, "unchanged"],
      ["Strengthened", 2, "up"],
      ["Weakened", 1, "down"],
      ["Not run this time", 1, "not-run"],
      ["Partially revised", 1, "other"],
    ]);
    expect(found?.modules.map((item) => item.name)).toEqual([
      "Liquidity",
      "Fundamental credit",
      "Refinancing & LME",
      "Ratings & triggers",
      "Peer benchmark",
      "Odd module",
    ]);
  });
  it("counts a status that is not stated apart and never drops the row", () => {
    const found = analysisChanges(
      cp8(analysis(["A (CP-2)", "Not supplied: no view", "None", "x"])),
    );
    expect(found?.counts).toEqual([{ word: "Not supplied: no view", shape: "other", count: 1 }]);
  });
  it("is null for an absent, empty or duplicated register", () => {
    expect(analysisChanges(cp8())).toBeNull();
    expect(analysisChanges(cp8(analysis()))).toBeNull();
    expect(analysisChanges(cp8(ANALYSIS(), ANALYSIS()))).toBeNull();
  });
});

describe("issuerChanges", () => {
  const found = () => issuerChanges(cp8(ISSUER()));
  it("ranks the five largest moves of the first unit by exact difference", () => {
    expect(found()?.unit).toBe("x");
    expect(found()?.moves.map((move) => [move.label, move.change])).toEqual([
      ["Net debt / EBITDA", "0.90"],
      ["Interest cover", "-0.5"],
      ["Total debt / EBITDA", "0.26"],
      ["Cover B", "0.1"],
      ["Cover D", "0.05"],
    ]);
  });
  it("lists every other row in words, in the register's order, never ranking another unit", () => {
    expect(found()?.words.map((item) => item.label)).toEqual([
      "Gross debt",
      "Cover C",
      "Restated leverage",
      "Basis moved",
      "Cash",
      "Margin",
      "Refinancing",
      "No material change",
    ]);
  });
  it("keeps rows with a withheld or non-comparable difference out of the dumbbells", () => {
    const labels = found()?.moves.map((move) => move.label);
    expect(labels).not.toContain("Restated leverage");
    expect(labels).not.toContain("Basis moved");
  });
  it("keeps the cause as written, Unresolved included", () => {
    const cover = found()?.moves.find((move) => move.label === "Interest cover");
    expect(cover?.cause).toBe("Unresolved");
  });
  it("takes the first unit group in register order and moves the rest to words", () => {
    const money = issuerChanges(
      cp8(
        issuer(
          row("Gross debt", "19750 US$m", "24880 US$m"),
          row("Cover", "6.27x", "6.53x"),
          row("Cash", "1,000 US$m", "1,200 US$m"),
        ),
      ),
    );
    expect(money?.unit).toBe("US$m");
    expect(money?.moves.map((move) => [move.label, move.change])).toEqual([
      ["Gross debt", "5130"],
      ["Cash", "200"],
    ]);
    expect(money?.words.map((item) => item.label)).toEqual(["Cover"]);
  });
  it("keeps zero as a stated value and a negative on the scale", () => {
    const zero = issuerChanges(cp8(issuer(row("Cover", "0x (FY2023)", "1.5x (FY2024)"))));
    expect(zero?.moves[0]?.change).toBe("1.5");
    const negative = issuerChanges(cp8(issuer(row("Growth", "-2.0%", "3.0%"))));
    expect(negative?.scale?.lo).toBe(-2);
    expect(negative?.scale?.place(0)).toBeGreaterThan(8);
  });
  it("is null for an absent or duplicated register", () => {
    expect(issuerChanges(cp8())).toBeNull();
    expect(issuerChanges(cp8(ISSUER(), ISSUER()))).toBeNull();
  });
  it("writes an exact derived change with its sign and unit", () => {
    expect(changeWords("0.26", "x")).toBe("+0.26x");
    expect(changeWords("-0.5", "%")).toBe("−0.5%");
    expect(changeWords("5130", "US$m")).toBe("+5,130 US$m");
    expect(changeWords("0", "x")).toBe("0x");
  });
  it("builds one round axis from zero", () => {
    const scale = trackScale([5.1, 6.53, 1]);
    expect([scale.lo, scale.hi]).toEqual([0, 8]);
  });
});

const renderLead = (entry: OutputEntry) => render(<ChangesSummaryLead {...leadProps(entry)} />);

describe("ChangesSummaryLead", () => {
  it("draws a chip per status with its word and exact count, and no zero chip", () => {
    const { container } = renderLead(cp8(ANALYSIS(), ISSUER()));
    const chips = [...container.querySelectorAll("[data-status]")];
    expect(
      chips.map((chip) => [chip.getAttribute("data-status"), chip.getAttribute("data-count")]),
    ).toEqual([
      ["Unchanged", "1"],
      ["Strengthened", "2"],
      ["Weakened", "1"],
      ["Not run this time", "1"],
      ["Partially revised", "1"],
    ]);
    expect(chips[1]?.textContent).toBe("Strengthened2");
    expect(chips[1]?.querySelector('[data-shape="up"]')).not.toBeNull();
    expect(chips[4]?.querySelector('[data-shape="other"]')).not.toBeNull();
    expect(container.querySelector('[data-status="Reversed"]')).toBeNull();
    expect(screen.getByRole("heading", { level: 3, name: "6 modules compared" })).toBeVisible();
  });
  it("draws dumbbells in proportion on one scale, with the cause and derived change", () => {
    const { container } = renderLead(cp8(ANALYSIS(), ISSUER()));
    const net = container.querySelector('[data-move="Net debt / EBITDA"]') as HTMLElement;
    const ring = Number(net.querySelector('[data-mark="earlier"]')?.getAttribute("cx"));
    const dot = Number(net.querySelector('[data-mark="current"]')?.getAttribute("cx"));
    // The scale runs 0 to 8 over 8 to 400.
    expect(((ring - 8) / 392) * 8).toBeCloseTo(5.1, 9);
    expect(((dot - 8) / 392) * 8).toBeCloseTo(6, 9);
    expect(net.querySelector("svg")?.getAttribute("aria-label")).toBe(
      "Net debt / EBITDA: earlier 5.10x (FY2023), current 6.00x (FY2024); up 0.90x, derived. Scale 0 to 8, shared by these rows.",
    );
    expect(within(net).getByText("Earlier 5.10x (FY2023)")).toBeVisible();
    expect(within(net).getByText("↑ Up 0.90x")).toBeVisible();
    expect(net.textContent).toContain("derived");
    expect(within(net).getByText("Cause: New period")).toBeVisible();
    const cover = container.querySelector('[data-move="Interest cover"]') as HTMLElement;
    expect(within(cover).getByText("Cause: Unresolved")).toBeVisible();
    expect(within(cover).getByText("↓ Down 0.5x")).toBeVisible();
    expect(container.querySelectorAll("[data-move]")).toHaveLength(5);
  });
  it("lists rows of other units, facts and non-comparable rows in words", () => {
    const { container } = renderLead(cp8(ANALYSIS(), ISSUER()));
    const words = (label: string) =>
      (container.querySelector(`[data-words="${label}"]`) as HTMLElement).textContent;
    expect(words("Gross debt")).toContain(
      "Gross debt: 19750 US$m (2023-09-30) → 24880 US$m (2024-09-30)",
    );
    expect(words("Refinancing")).toContain("Refinancing: — → New term loan of 1,200");
    expect(words("Cash")).toContain("Cash: 2x (FY2023) → Not stated");
    expect(words("Basis moved")).toContain("Not comparable: the basis changed.");
    expect(words("No material change")).toBe("No material changeCause: NoneNothing else moved.");
  });
  it("holds rows beyond six in words behind Show more", () => {
    renderLead(cp8(ANALYSIS(), ISSUER()));
    const summary = screen.getByText("Show 2 more");
    expect(summary.closest("details")?.querySelectorAll("li")).toHaveLength(2);
  });
  it("links to the Changes page and has one trace control per figure", () => {
    renderLead(cp8(ANALYSIS(), ISSUER()));
    expect(screen.getByRole("link", { name: "Open Changes" })).toHaveAttribute("href", "#changes");
    expect(screen.getAllByRole("link", { name: /Source for/ })).toHaveLength(2);
  });
  it("draws no code, register id, file name or better/worse word", () => {
    const { container } = renderLead(cp8(ANALYSIS(), ISSUER()));
    expect(container.textContent).not.toMatch(/\bCP-\d|CP-[0-9A-Z]+\)|T\d\.\d|\.pdf/);
    expect(container.textContent).not.toMatch(/\b(?:better|worse|improved|deteriorated)\b/i);
  });
  it("says there is no comparison when neither register is in the handoff", () => {
    renderLead(cp8());
    expect(screen.getByText("This run has no comparison with an earlier run.")).toBeVisible();
    expect(screen.getByRole("link", { name: "Open Changes" })).toBeVisible();
    expect(screen.queryByRole("img")).toBeNull();
  });
  it("draws a gap for the one register that is absent and the other as usual", () => {
    renderLead(cp8(ISSUER()));
    expect(
      screen.getByText("The handoff has no register of changes to the analysis."),
    ).toBeVisible();
    expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
  });
  it("draws a gap for a duplicated register instead of choosing one", () => {
    renderLead(cp8(ANALYSIS(), ISSUER(), ISSUER()));
    expect(screen.getByText("The handoff has no register of changes at the issuer.")).toBeVisible();
  });
  it("draws only words when no row has numbers in one unit", () => {
    const { container } = renderLead(
      cp8(
        issuer(row("Refinancing", "—", "New term loan"), row("Cash", "Not stated", "1,200 US$m")),
      ),
    );
    expect(container.querySelectorAll("[data-move]")).toHaveLength(0);
    expect(
      screen.getByRole("heading", { level: 3, name: "Measures and facts, in words" }),
    ).toBeVisible();
  });
  it("wraps very long text", () => {
    const long = "z".repeat(240);
    const { container } = renderLead(cp8(issuer(row(long, "6.0x", "6.5x", "New period", "Same."))));
    expect((container.querySelector("[data-move] p") as HTMLElement).className).toContain(
      "wrap-anywhere",
    );
  });
});

describe("measures with no stated unit", () => {
  const bare = () =>
    cp8(
      issuer(
        row("Revenue (USD m)", "6,585 (FY2023)", "7,940 (FY2024)"),
        row("Employees", "15,000", "16,500"),
        row("Customers", "120", "130"),
      ),
    );
  it("never ranks bare numbers against each other: each is a row in words, with no scale", () => {
    const found = issuerChanges(bare());
    expect(found?.moves).toEqual([]);
    expect(found?.scale).toBeNull();
    expect(found?.words.map((item) => [item.label, item.earlier, item.current])).toEqual([
      ["Revenue (USD m)", "6,585 (FY2023)", "7,940 (FY2024)"],
      ["Employees", "15,000", "16,500"],
      ["Customers", "120", "130"],
    ]);
  });
  it("draws them as words, with no dumbbell and no ranking claim", () => {
    const { container } = renderLead(bare());
    expect(container.querySelectorAll("[data-move]")).toHaveLength(0);
    expect(container.textContent).not.toMatch(/plain numbers|largest/);
    expect(
      screen.getByRole("heading", { level: 3, name: "Measures and facts, in words" }),
    ).toBeVisible();
  });
  it("still ranks measures that state the same unit while leaving the bare ones in words", () => {
    const found = issuerChanges(
      cp8(issuer(row("Cover", "6.0x", "6.5x"), row("Employees", "15,000", "16,500"))),
    );
    expect(found?.moves.map((move) => move.label)).toEqual(["Cover"]);
    expect(found?.words.map((item) => item.label)).toEqual(["Employees"]);
  });
});

it("keeps a measure whose cell names a source out of the dumbbells", () => {
  const found = issuerChanges(
    cp8(issuer(row("Cover", "6.0x (see Annual.pdf)", "6.5x (FY2024)"), row("Debt", "1x", "2x"))),
  );
  expect(found?.moves.map((move) => move.label)).toEqual(["Debt"]);
  expect(found?.words[0]?.earlier).toBe("Detail is in Evidence.");
});
