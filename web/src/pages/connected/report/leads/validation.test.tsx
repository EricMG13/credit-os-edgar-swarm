// Synthetic, built from the module contract (src/deploy_vii/cp5_integrity.py registers and
// methods/cp5.md); not a real handoff. No real CP-5 handoff is retained. The empty/thin case uses
// the retained synthetic CP-5 fixture. Every expected value below is written out by hand.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import type { OutputEntry, Section } from "../../publishedReport";
import { entry as buildEntry, table } from "../overview/rows.fixture";
import { cp5Entry, leadProps } from "./fixtures/load";
import { ClearanceLead } from "./validation";
import { clearance, issues, moduleIntegrity, remediation } from "./validationData";

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
const FINDINGS: Section = { heading: "Findings", level: 2, line: 1, blocks: [] };
const cp5 = (...sections: Section[]): OutputEntry =>
  buildEntry("CP-5", [], [FINDINGS, ...sections]);

const VERDICT = tbl(
  "T5B.8 Integrity verdict",
  ["Item", "Value"],
  ["Status", "Restricted over the evaluated set"],
  ["Evaluated set", "CP-1, CP-2"],
  ["Not evaluated", "CP-3"],
  ["Scope", "Describes the evaluated set only: a module outside it is not implied to pass"],
);
const GAPS = tbl(
  "T5B.5 Integrity gaps",
  ["Gap ID", "Gap", "Why it matters", "Affected modules", "Severity", "Action"],
  [
    "CP-5-GAP-001",
    "Debt schedule missing",
    "Maturities unknown",
    "CP-1, CP-2D",
    "Critical",
    "Obtain the signed debt schedule",
  ],
  ["CP-5-GAP-002", "Cover ratio dated", "Stale", "CP-2", "Minor", "Re-check the cover ratio"],
  [
    "CP-5-GAP-003",
    "Owner unknown",
    "Cannot assign",
    "Report level",
    "Material",
    "Not supplied: owner not named",
  ],
);
const CONTRADICTIONS = tbl(
  "T5B.3 Cross-module contradictions",
  ["Contradiction", "Claims", "Nature", "Severity", "Rationale"],
  ["Leverage differs", "A vs B", "Numeric", "Material", "Two modules state different leverage"],
  ["Cash differs", "C vs D", "Numeric", "Critical", "Cash is stated twice"],
);
const INTEGRITY = tbl(
  "T5B.6 Module integrity status",
  ["Module", "Head status", "CP-5 findings", "Result"],
  ["CP-1", "accepted", "None", "Evaluated: no finding"],
  ["CP-2", "restricted", "CP-5-GAP-002", "Evaluated with findings"],
  ["CP-3", "blocked (up the input chain)", "None", "Blocked upstream: not evaluated"],
  ["CP-4", "accepted", "None", "Something unexpected"],
);
const full = () => cp5(VERDICT, GAPS, CONTRADICTIONS, INTEGRITY);

describe("clearance", () => {
  it("reads the status word from the verdict row and shows the scope apart", () => {
    expect(clearance(full())).toMatchObject({
      status: "Restricted",
      scope: "over the evaluated set",
      notEvaluated: "Security selection",
      shape: "half",
      source: "verdict",
    });
  });
  it("shapes Accepted as filled and an unknown word as a neutral ring", () => {
    const word = (status: string) =>
      clearance(cp5(tbl("V", ["Item", "Value"], ["Status", status])))?.shape;
    expect(word("Accepted over the evaluated set")).toBe("filled");
    expect(word("Cleared over the evaluated set")).toBe("filled");
    expect(word("Blocked over the evaluated set")).toBe("slash");
    expect(word("Pending review")).toBe("ring");
  });
  it("falls back to the module's first bottom-line sentence, then to nothing", () => {
    const written = cp5(text("Bottom line", "Evidence is thin. A second sentence follows."));
    expect(clearance(written)).toMatchObject({
      status: "Evidence is thin.",
      shape: null,
      source: "bottom line",
    });
    expect(clearance(cp5())).toBeNull();
  });
  it("does not guess when two tables both carry a Status row", () => {
    const two = cp5(VERDICT, tbl("Other", ["Item", "Value"], ["Status", "Accepted"]));
    expect(clearance(two)).toBeNull();
  });
  it("treats a stated gap in the Status row as no verdict", () => {
    const gap = cp5(tbl("V", ["Item", "Value"], ["Status", "Not supplied: not assessed"]));
    expect(clearance(gap)).toBeNull();
  });
});

describe("issues", () => {
  it("counts the rows of both registers by severity word, in the handoff's order", () => {
    const found = issues(full());
    expect(found.total).toBe(5);
    expect(
      found.groups.map((group) => [
        group.severity.word,
        group.pips.filter((pip) => pip.kind === "gap").length,
        group.pips.filter((pip) => pip.kind === "contradiction").length,
      ]),
    ).toEqual([
      ["Critical", 1, 1],
      ["Minor", 1, 0],
      ["Material", 1, 1],
    ]);
  });
  it("keeps any other severity word as written, unranked, in the handoff's order", () => {
    const odd = cp5(
      tbl(
        "G",
        ["Gap ID", "Gap", "Why it matters", "Affected modules", "Severity", "Action"],
        ["g1", "a", "b", "CP-1", "High", "Fix"],
        ["g2", "a", "b", "CP-1", "Not supplied: not rated", "Fix"],
        ["g3", "a", "b", "CP-1", "Minor", "Fix"],
        ["g4", "a", "b", "CP-1", "Critical (blocks committee)", "Fix"],
        ["g5", "a", "b", "CP-1", "Critical", "Fix"],
        ["g6", "a", "b", "CP-1", "minor", "Fix"],
      ),
    );
    expect(
      issues(odd).groups.map((group) => [
        group.severity.word,
        group.severity.known,
        group.pips.length,
      ]),
    ).toEqual([
      ["High", false, 1],
      ["Severity not stated", false, 1],
      ["Minor", true, 1],
      ["Critical (blocks committee)", false, 1],
      ["Critical", true, 1],
      ["minor", false, 1],
    ]);
  });
  it("does not count a register row of None in every cell as an issue", () => {
    const four = cp5(
      tbl(
        "C",
        ["Contradiction", "Claims", "Nature", "Severity", "Rationale"],
        ["None", "None", "None", "None", "None"],
        ["Leverage differs", "A vs B", "Numeric", "Material", "Two modules differ"],
      ),
      GAPS,
    );
    const found = issues(four);
    expect(found.total).toBe(4);
    expect(found.contradictions).toMatchObject({ state: "rows" });
    expect(
      found.contradictions.state === "rows" && found.contradictions.issues.map((i) => i.line),
    ).toHaveLength(1);
    const onlyNone = issues(
      cp5(
        tbl(
          "C",
          ["Contradiction", "Claims", "Nature", "Severity", "Rationale"],
          ["None", "None", "None", "None", "None"],
        ),
      ),
    );
    expect(onlyNone.contradictions.state).toBe("none");
    expect(onlyNone.total).toBe(0);
  });
  it("reads the handoff's own None row as a stated absence and draws no pip", () => {
    const none = cp5(
      tbl(
        "G",
        ["Gap ID", "Gap", "Why it matters", "Affected modules", "Severity", "Action"],
        [
          "None",
          "Not supplied: None in this CP-5 review (integrity gaps)",
          "Not supplied: None in this CP-5 review (integrity gaps)",
          "Not supplied: None in this CP-5 review (integrity gaps)",
          "Not supplied: None in this CP-5 review (integrity gaps)",
          "Not supplied: None in this CP-5 review (integrity gaps)",
        ],
      ),
    );
    const found = issues(none);
    expect(found.total).toBe(0);
    expect(found.gaps.state).toBe("none");
    expect(found.contradictions.state).toBe("absent");
  });
  it("treats the synthetic Item | Value placeholders as no register, with their reason kept", () => {
    const found = issues(cp5Entry());
    expect(found.gaps.state).toBe("absent");
    expect(found.contradictions.state).toBe("absent");
    expect(found.total).toBe(0);
    expect(found.placeholders).toEqual(["nothing to report"]);
  });
  it("refuses a duplicated register instead of choosing one", () => {
    const twice = cp5(CONTRADICTIONS, CONTRADICTIONS);
    expect(issues(twice).contradictions.state).toBe("duplicate");
    expect(issues(twice).total).toBe(0);
  });
  it("lists the remediation actions in the handoff's order, with no priority of our own", () => {
    expect(remediation(full())?.map((item) => item.action)).toEqual([
      { kind: "text", text: "Obtain the signed debt schedule" },
      { kind: "text", text: "Re-check the cover ratio" },
      { kind: "gap", reason: "owner not named" },
    ]);
    expect(remediation(cp5(VERDICT))).toBeNull();
  });
  it("names modules in the affected list and keeps a stated report level", () => {
    const [first, second] = remediation(full()) ?? [];
    expect(first?.affected).toEqual(["Financial foundation", "Liquidity"]);
    expect(second?.affected).toEqual(["Fundamental credit"]);
  });
});

describe("module integrity", () => {
  it("reads one row per module with the shape of its result", () => {
    expect(moduleIntegrity(full())?.map((item) => [item.name, item.shape])).toEqual([
      ["Financial foundation", "filled"],
      ["Fundamental credit", "half"],
      ["Security selection", "slash"],
      ["Legal & covenants", "ring"],
    ]);
  });
  it("is absent when the table is", () => {
    expect(moduleIntegrity(cp5(VERDICT))).toBeNull();
  });
});

const render5 = (entry: OutputEntry) => render(<ClearanceLead {...leadProps(entry)} />);

describe("ClearanceLead", () => {
  it("draws the status word with its shape, the scope quietly and the listed issues as pips", () => {
    const { container } = render5(full());
    const tile = screen.getByRole("region", { name: "Clearance" });
    expect(within(tile).getByRole("heading", { level: 3 }).textContent).toBe("Clearance");
    expect(tile.querySelector("[data-clearance]")?.textContent).toBe("Restricted");
    expect(within(tile).getByText("over the evaluated set")).toBeVisible();
    expect(tile.querySelector('[data-shape="half"]')).not.toBeNull();
    expect(within(tile).getByText("Not evaluated: Security selection")).toBeVisible();
    expect(container.querySelectorAll("[data-pip]")).toHaveLength(5);
    expect(container.querySelectorAll('[data-pip="gap"]')).toHaveLength(3);
    expect(container.querySelectorAll('[data-pip="contradiction"]')).toHaveLength(2);
    expect(
      within(tile).getByRole("img", { name: "Critical: 2 listed (1 gap, 1 contradiction)." }),
    ).toBeVisible();
    expect(within(tile).queryByText(/Counted from/)).toBeNull();
    // The words in the handoff's order: gaps register first.
    const words = [...tile.querySelectorAll("ul[aria-label] > li")].map((item) =>
      item.textContent.replace(/\d+/, ""),
    );
    expect(words).toEqual(["Critical", "Minor", "Material"]);
  });
  it("draws one trace control per figure and no source reference on the page", () => {
    const { container } = render5(full());
    const links = screen.getAllByRole("link", { name: /Source for/ });
    expect(links).toHaveLength(2);
    expect(container.textContent).not.toMatch(/CP-5-GAP|T5B|\bCP-\d/);
  });
  it("lists the module integrity chips with a shape and a word each", () => {
    const { container } = render5(full());
    const chips = [...container.querySelectorAll("[data-module-result]")];
    expect(chips.map((chip) => chip.getAttribute("data-module-result"))).toEqual([
      "Evaluated: no finding",
      "Evaluated with findings",
      "Blocked upstream: not evaluated",
      "Something unexpected",
    ]);
    expect(
      chips.map((chip) => chip.querySelector("[data-shape]")?.getAttribute("data-shape")),
    ).toEqual(["filled", "half", "slash", "ring"]);
  });
  it("draws the remediation list in the module's order with severity and affected modules", () => {
    render5(full());
    const tile = screen.getByRole("region", { name: "Remediation" });
    expect(within(tile).getByRole("heading", { level: 3 }).textContent).toBe("Remediation");
    const items = [...tile.querySelectorAll("ol > li")].map((item) => item.textContent);
    expect(items[0]).toContain(
      "CriticalObtain the signed debt scheduleAffects: Financial foundation, Liquidity",
    );
    expect(items[1]).toContain("MinorRe-check the cover ratio");
    expect(items[2]).toContain("MaterialAction not supplied: owner not named");
    expect(tile.textContent).not.toMatch(/priority|first/i);
  });
  it("says the page could not read a list of issues, with no pip and no zero, for the thin synthetic handoff", () => {
    const { container } = render5(cp5Entry());
    expect(container.querySelectorAll("[data-pip]")).toHaveLength(0);
    expect(
      screen.getByText(
        "This page could not read a list of gaps or contradictions from the handoff. It reads: nothing to report.",
      ),
    ).toBeVisible();
    expect(screen.queryByText("No issues are listed.")).toBeNull();
    // The thin handoff still has its bottom line, drawn as the status fallback.
    expect(screen.getAllByText("The synthetic issuer shows one observed item.")[0]).toBeVisible();
    expect(
      screen.getByText(/This page could not read the gap actions from the handoff\./),
    ).toBeVisible();
  });
  it("says no issues are listed only when both registers state none", () => {
    const empty = (headers: string[]) =>
      tbl("R", headers, [
        "None",
        ...headers.slice(1).map(() => "Not supplied: None in this CP-5 review"),
      ]);
    render5(
      cp5(
        VERDICT,
        empty(["Gap ID", "Gap", "Why it matters", "Affected modules", "Severity", "Action"]),
        empty(["Contradiction", "Claims", "Nature", "Severity", "Rationale"]),
      ),
    );
    expect(screen.getByText("No issues are listed.")).toBeVisible();
    expect(screen.getByText(/No gap actions are listed\./)).toBeVisible();
    expect(screen.getAllByText("Restricted")[0]).toBeVisible();
  });
  it("draws counts from the one register present and says the page could not read the other", () => {
    const { container } = render5(cp5(VERDICT, CONTRADICTIONS));
    expect(container.querySelectorAll("[data-pip]")).toHaveLength(2);
    expect(
      screen.getByText("This page could not read the list of gaps from the handoff."),
    ).toBeVisible();
  });
  it("shows a status that cites a source as a gap-free fallback, never the citation", () => {
    const { container } = render5(
      cp5(
        tbl("V", ["Item", "Value"], ["Status", "Restricted, see annual.pdf"]),
        text("Bottom line", "Evidence is thin."),
      ),
    );
    expect(container.textContent).not.toContain("annual.pdf");
    expect(screen.getAllByText("Evidence is thin.")[0]).toBeVisible();
  });
  it("wraps very long text and keeps a long action readable", () => {
    const long = "x".repeat(300);
    const { container } = render5(
      cp5(
        VERDICT,
        tbl(
          "G",
          ["Gap ID", "Gap", "Why it matters", "Affected modules", "Severity", "Action"],
          ["g", "g", "w", "CP-1", "Critical", long],
        ),
      ),
    );
    const action = screen.getAllByText(long)[0] as HTMLElement;
    expect(action.className).toContain("wrap-anywhere");
    expect(container.querySelector("svg[width]")).not.toBeNull();
  });
  it("does not draw an invented use-restriction field", () => {
    const { container } = render5(full());
    expect(container.textContent).not.toMatch(/use restriction|committee use/i);
  });
  it("gives every pip svg an explicit size and keeps Material off the teal 'better' colour", () => {
    const { container } = render5(full());
    const svgs = [...container.querySelectorAll("svg[data-group]")];
    expect(svgs).toHaveLength(3);
    for (const svg of svgs) {
      expect(Number(svg.getAttribute("width"))).toBeGreaterThanOrEqual(12);
      expect(Number(svg.getAttribute("height"))).toBeGreaterThanOrEqual(12);
      expect(svg.getAttribute("class")).toContain("flex-none");
      // The viewBox is as wide as the svg, so a pip is drawn at its own size and not squeezed.
      expect(svg.getAttribute("viewBox")?.split(" ")[2]).toBe(svg.getAttribute("width"));
    }
    // Two Material pips, each 22 px of the row: the svg is as wide as its pips.
    expect(container.querySelector('svg[data-group="Material"]')?.getAttribute("width")).toBe("44");
    const material = container.querySelectorAll('[data-pip][data-severity="Material"]');
    expect(material).toHaveLength(2);
    for (const pip of material) {
      expect(pip.getAttribute("class")).not.toContain("fill-chart-1");
      expect(pip.getAttribute("class")).toContain("warning-mark");
    }
    const critical = container.querySelector('[data-pip][data-severity="Critical"]');
    expect(critical?.getAttribute("class")).toContain("fill-warning-mark");
    expect(critical?.getAttribute("class")).not.toBe(material[0]?.getAttribute("class"));
  });
});

describe("only exact words get a mark", () => {
  const result = (word: string) =>
    moduleIntegrity(
      cp5(
        tbl(
          "M",
          ["Module", "Head status", "CP-5 findings", "Result"],
          ["CP-1", "accepted", "None", word],
        ),
      ),
    )?.[0]?.shape;
  const status = (word: string) =>
    clearance(cp5(tbl("V", ["Item", "Value"], ["Status", `${word} over the evaluated set`])))
      ?.shape;
  it("gives a mark only to the three results the module writes", () => {
    expect(result("Evaluated: no finding")).toBe("filled");
    expect(result("Evaluated with findings")).toBe("half");
    expect(result("Blocked upstream: not evaluated")).toBe("slash");
    expect(result("Not blocked; no findings")).toBe("ring");
    expect(result("Not blocked")).toBe("ring");
    expect(result("Evaluated with findings, partly blocked")).toBe("ring");
  });
  it("gives a mark only to an exact status word; any other wording is drawn as written, neutral", () => {
    expect(status("Accepted")).toBe("filled");
    expect(status("Cleared")).toBe("filled");
    expect(status("Restricted")).toBe("half");
    expect(status("Accepted with restrictions")).toBe("ring");
    expect(status("Not restricted")).toBe("ring");
    expect(status("Not cleared")).toBe("ring");
    expect(status("Cleared pending review")).toBe("ring");
  });
  it("draws 'Accepted with restrictions' as written beside a neutral mark, never the cleared mark", () => {
    const { container } = render5(
      cp5(
        tbl(
          "V",
          ["Item", "Value"],
          ["Status", "Accepted with restrictions over the evaluated set"],
        ),
      ),
    );
    expect(container.querySelector("[data-clearance]")?.textContent).toBe(
      "Accepted with restrictions",
    );
    expect(container.querySelector('[data-shape="filled"]')).toBeNull();
    expect(container.querySelector('[data-shape="ring"]')).not.toBeNull();
  });
  it("sends an action or opening sentence that names a register id to Evidence", () => {
    const { container } = render5(
      cp5(
        tbl(
          "G",
          ["Gap ID", "Gap", "Why it matters", "Affected modules", "Severity", "Action"],
          ["g", "g", "w", "CP-1", "Critical", "Resolve T5B.5 row 2 first"],
        ),
        text("Bottom line", "See T5B.8 for the verdict."),
      ),
    );
    expect(container.textContent).not.toMatch(/T5B/);
    expect(screen.getAllByText("Detail is in Evidence.").length).toBeGreaterThan(0);
  });
});

describe("titles and what the lead draws", () => {
  it("names each tile plainly, with no count and no ordering claim", () => {
    render5(full());
    const titles = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
    expect(titles).toEqual(["Clearance", "Remediation"]);
  });
  it("draws no typed figure, event lane or map", () => {
    expect(ClearanceLead.draws).toEqual([]);
  });
  it("uses the one gap tile when the status, the issues and the actions are all absent", () => {
    render5(cp5());
    expect(
      screen.getByText(/This page could not read a clearance status from the handoff\./),
    ).toBeVisible();
    expect(
      screen.getByText(/This page could not read the gap actions from the handoff\./),
    ).toBeVisible();
    expect(screen.queryByRole("img")).toBeNull();
  });
});
