// The retained CP-0 handoff is synthetic and thin (two areas); the larger and adversarial cases are
// synthetic too, built from the module contract (src/deploy_vii/methods/cp0.md); not a real handoff.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { entry, section, table } from "../overview/rows.fixture";
import { cp0Entry, leadProps } from "./fixtures/load";
import { SourceReadinessLead } from "./sourceReadiness";
import { readinessState, sourceReadiness } from "./sourceReadinessData";

afterEach(cleanup);

const HEADERS = ["Area", "Readiness", "Key limitation"];

function readiness(rows: string[][], headers = HEADERS, extra: ReturnType<typeof section>[] = []) {
  return entry(
    "CP-0",
    [],
    [section("Source-readiness summary", 7, table(9, headers, rows)), ...extra],
  );
}

const FIVE = [
  ["Financial foundation", "READY", "None stated by the issuer."],
  ["Earnings delta", "Ready with limitations", "Only two annual periods are available."],
  ["Peer benchmark", "CONDITIONAL", "Peer financials were not supplied."],
  ["Acquisition financing", "Blocked", "The financing agreement is unreadable."],
  ["Committee decision", "Not ready", "No prior deliverable was supplied."],
];

describe("readiness states", () => {
  it("reads the contract's values and the library's words, in any case or spacing", () => {
    expect(readinessState("READY")).toBe("ready");
    expect(readinessState(" Ready ")).toBe("ready");
    expect(readinessState("READY_WITH_LIMITATIONS")).toBe("limited");
    expect(readinessState("Ready with limitations")).toBe("limited");
    expect(readinessState("ready-with-limitations")).toBe("limited");
    expect(readinessState("CONDITIONAL")).toBe("conditional");
    expect(readinessState("BLOCKED")).toBe("blocked");
    expect(readinessState("Not ready")).toBe("blocked");
  });
  it("does not guess at any other word", () => {
    for (const word of ["", "Mostly ready", "PARTIAL", "RUN", "Ready, with gaps"])
      expect(readinessState(word)).toBeNull();
  });
});

// Quoted from the retained review reviews/2026-11-12-module-output-adversarial/latest-run-tdg-proof-snapshot-opus-002.md
// (lines 70, 83 and 155: outdated TransDigm evidence, shape only). The review prints the middle two
// headers as "..." so their names here are stand-ins; the last row is synthetic.
const CONSUMER_HEADERS = [
  "Consumer",
  "Readiness",
  "Evidence demand",
  "Available support",
  "Bounded limitations carried",
  "Command",
];
const CONSUMER_ROWS = [
  ["CP-2G", "READY_WITH_LIMITATIONS", "Forecast inputs", "Filings", "No Q1 filing.", "RUN"],
  [
    "CP-8",
    "CONDITIONAL",
    "Needs a prior deliverable to compare",
    "None",
    "Context states no prior case attached",
    "DO NOT RUN until a prior deliverable is supplied or scope is changed",
  ],
  ["CP-1", "READY", "Statements", "Filings", "", "DO NOT RUN"],
];

describe("the consumer shape of the readiness table", () => {
  const result = () => sourceReadiness(readiness(CONSUMER_ROWS, CONSUMER_HEADERS));
  it("reads the consumer as the area and the bounded limitation as the reason", () => {
    const found = result();
    if (found.kind !== "ready") throw new Error("expected rows");
    expect(found.rows[0]).toMatchObject({ state: "limited", reason: "No Q1 filing." });
    expect(found.rows[1]).toMatchObject({
      state: "conditional",
      reason: "Context states no prior case attached",
    });
    for (const row of found.rows) expect(row.area).not.toMatch(/CP-/);
  });
  it("never draws the Command column, and does not show a DO NOT RUN row as plainly ready", () => {
    const found = result();
    if (found.kind !== "ready") throw new Error("expected rows");
    expect(JSON.stringify(found.rows)).not.toMatch(/DO NOT RUN|RUN/);
    expect(found.rows[2]).toMatchObject({
      state: "conditional",
      reason: "Held back by the source review.",
    });
    expect(found.counts).toEqual({ ready: 0, limited: 1, conditional: 2, blocked: 0 });
  });
  it("draws the three rows with no pipeline words on the page", () => {
    const { container } = lead(readiness(CONSUMER_ROWS, CONSUMER_HEADERS));
    expect(container.textContent).not.toMatch(/DO NOT RUN|CP-|READY_WITH/);
    const list = screen.getByRole("list", { name: "Readiness by area" });
    expect(within(list).getAllByRole("listitem")).toHaveLength(3);
    expect(within(list).getByText("Context states no prior case attached")).toBeVisible();
  });
  it("reads the earlier real run's shape, whose free-text column is named in its review", () => {
    const found = sourceReadiness(
      readiness(
        [["Legal and covenant package", "CONDITIONAL", "No executed agreement.", "DO NOT RUN"]],
        ["Canonical consumer", "Readiness", "Evidence demand and available support", "Command"],
      ),
    );
    if (found.kind !== "ready") throw new Error("expected rows");
    expect(found.rows[0]).toMatchObject({
      area: "Legal and covenant package",
      state: "conditional",
      reason: "No executed agreement.",
    });
  });
});

describe("sourceReadiness data", () => {
  it("reads the retained handoff: two areas with their limitation, the source column left out", () => {
    const result = sourceReadiness(cp0Entry());
    expect(result).toMatchObject({
      kind: "ready",
      line: 9,
      counts: { ready: 0, limited: 1, conditional: 1, blocked: 0 },
      hasEvidenceTable: false,
    });
    if (result.kind !== "ready") throw new Error("expected rows");
    expect(result.rows.map(({ area, state, reason }) => [area, state, reason])).toEqual([
      ["Financial statements", "limited", "Only the synthetic filing is available"],
      ["Acquisition financing", "conditional", "Financing terms are absent"],
    ]);
  });
  it("counts five areas by state, keeping the handoff's order", () => {
    const result = sourceReadiness(readiness(FIVE));
    if (result.kind !== "ready") throw new Error("expected rows");
    expect(result.counts).toEqual({ ready: 1, limited: 1, conditional: 1, blocked: 2 });
    expect(result.rows.map((row) => row.area)).toEqual(FIVE.map((row) => row[0]));
  });
  it("is absent without the table, with another header, with no rows, or when two tables carry it", () => {
    expect(sourceReadiness(entry("CP-0", [], []))).toEqual({ kind: "absent" });
    expect(sourceReadiness(readiness(FIVE, ["Consumer", "Readiness", "Key limitation"]))).toEqual({
      kind: "absent",
    });
    expect(sourceReadiness(readiness([]))).toEqual({ kind: "absent" });
    const twice = readiness(FIVE, HEADERS, [section("Other", 40, table(41, HEADERS, FIVE))]);
    expect(sourceReadiness(twice)).toEqual({ kind: "absent" });
  });
  it("is unrecognised when any row uses another word, never drawing the others", () => {
    const result = sourceReadiness(readiness([...FIVE, ["Segments", "Mostly ready", "x"]]));
    expect(result).toEqual({ kind: "unrecognised", line: 9 });
  });
  it("points to Evidence for a reason or an area that names a source, and says so for an empty one", () => {
    const result = sourceReadiness(
      readiness([
        [
          "Financial foundation",
          "CONDITIONAL",
          "The 10-K tdg-20240930.htm.jsonl, page 45 is partial.",
        ],
        ["Debt terms", "READY", ""],
        ["Source pack hash 0123456789abcdef0123456789abcdef", "READY", "Complete."],
      ]),
    );
    if (result.kind !== "ready") throw new Error("expected rows");
    expect(result.rows.map(({ area, reason }) => [area, reason])).toEqual([
      ["Financial foundation", "Reason is in Evidence."],
      ["Debt terms", "No limitation stated."],
      ["Detail is in Evidence.", "Complete."],
    ]);
  });
  it("names a module by its page name, never by its code", () => {
    const result = sourceReadiness(
      readiness([["CP-8", "CONDITIONAL", "Needs a prior deliverable."]]),
    );
    if (result.kind !== "ready") throw new Error("expected rows");
    expect(result.rows[0]?.area).not.toMatch(/CP-/);
    expect(result.rows[0]?.area.length).toBeGreaterThan(3);
  });
  it("sees a table with an Evidence or Conflict header, and nothing else, as the P2 items", () => {
    const withEvidence = readiness(FIVE, HEADERS, [
      section("Located", 30, table(31, ["Item", "Evidence located"], [["a", "b"]])),
    ]);
    const withConflicts = readiness(FIVE, HEADERS, [
      section("Issues", 30, table(31, ["Conflict", "Severity"], [["a", "b"]])),
    ]);
    const neither = readiness(FIVE, HEADERS, [
      section("Other", 30, table(31, ["Date", "Event"], [["a", "b"]])),
    ]);
    for (const [handoff, expected] of [
      [withEvidence, true],
      [withConflicts, true],
      [neither, false],
    ] as const) {
      const result = sourceReadiness(handoff);
      expect(result.kind === "ready" && result.hasEvidenceTable).toBe(expected);
    }
  });
});

const lead = (handoff = cp0Entry()) => render(<SourceReadinessLead {...leadProps(handoff)} />);
const rowOf = (name: string) =>
  within(screen.getByRole("list", { name: "Readiness by area" }))
    .getByText(name)
    .closest("li") as HTMLElement;

describe("SourceReadinessLead", () => {
  it("draws one row per area with the state as a shape and its word, and the reason in words", () => {
    lead(readiness(FIVE));
    const rows = within(screen.getByRole("list", { name: "Readiness by area" })).getAllByRole(
      "listitem",
    );
    expect(rows).toHaveLength(5);
    const shapes = rows.map((row) => row.querySelector("[data-state]")?.getAttribute("data-state"));
    expect(shapes).toEqual(["ready", "limited", "conditional", "blocked", "blocked"]);
    const shapeKinds = rows.map((row) =>
      row.querySelector("[data-shape]")?.getAttribute("data-shape"),
    );
    expect(shapeKinds).toEqual(["dot", "half-dot", "ring", "slash", "slash"]);
    expect(within(rowOf("Peer benchmark")).getByText("Conditional")).toBeVisible();
    expect(
      within(rowOf("Peer benchmark")).getByText("Peer financials were not supplied."),
    ).toBeVisible();
    expect(within(rowOf("Committee decision")).getByText("Blocked")).toBeVisible();
    expect(within(rowOf("Earnings delta")).getByText("Ready with limitations")).toBeVisible();
  });
  it("puts the row's state in its own column and in no other", () => {
    lead(readiness(FIVE));
    const columns = ["ready", "limited", "conditional", "blocked"];
    for (const [area, state] of [
      ["Financial foundation", "ready"],
      ["Earnings delta", "limited"],
      ["Peer benchmark", "conditional"],
      ["Acquisition financing", "blocked"],
    ]) {
      const mark = rowOf(area as string).querySelector("[data-state]") as HTMLElement;
      expect(mark.className).toContain(
        `lg:col-start-${String(columns.indexOf(state as string) + 2)}`,
      );
    }
  });
  it("shows four counts of areas above the matrix, plain row counts", () => {
    lead(readiness(FIVE));
    const strip = screen.getByRole("group", { name: "Areas by readiness" });
    const counts = [...strip.querySelectorAll("[data-count]")].map((item) => [
      item.getAttribute("data-count"),
      item.querySelector("[data-number]")?.textContent,
    ]);
    expect(counts).toEqual([
      ["ready", "1"],
      ["limited", "1"],
      ["conditional", "1"],
      ["blocked", "2"],
    ]);
    expect(strip).toHaveTextContent("areas");
    expect(strip).toHaveTextContent("area");
  });
  it("titles the figure with counts of its rows and keeps one trace control", () => {
    lead(readiness(FIVE));
    expect(
      screen.getByRole("heading", { name: "1 of 5 areas are ready; 3 are conditional or blocked" }),
    ).toBeVisible();
    expect(screen.getAllByRole("link", { name: /Source for/ })).toHaveLength(1);
    expect(screen.getByRole("link", { name: /Source for/ })).toHaveAttribute(
      "href",
      expect.stringContaining("/report/run#evidence/"),
    );
  });
  it("hides the shapes from assistive technology, the word beside each is what they read", () => {
    const { container } = lead(readiness(FIVE));
    const shapes = container.querySelectorAll("[data-shape]");
    expect(shapes.length).toBeGreaterThan(5);
    for (const shape of shapes) expect(shape.getAttribute("aria-hidden")).toBe("true");
  });
  it("carries a table view with every area, state and reason", () => {
    lead(readiness(FIVE));
    const view = screen.getByText("Table view").closest("details") as HTMLElement;
    const cells = [...view.querySelectorAll("tbody tr")].map((row) =>
      [...row.querySelectorAll("td")].map((cell) => cell.textContent),
    );
    expect(cells[2]).toEqual([
      "Peer benchmark",
      "Conditional",
      "Peer financials were not supplied.",
    ]);
    expect(cells).toHaveLength(5);
  });
  it("draws no source reference, and the retained handoff's source column stays out", () => {
    const { container } = lead();
    expect(container.textContent).not.toMatch(/Filing p\.|\.md|sha256|CP-0/);
    expect(
      within(screen.getByRole("list", { name: "Readiness by area" })).getByText(
        "Only the synthetic filing is available",
      ),
    ).toBeVisible();
    expect(screen.queryByText("Filing p.1")).toBeNull();
  });
  it("says in words that the key evidence located and the conflicts are not in the handoff", () => {
    lead();
    expect(
      screen.getByText("Key evidence located and conflicts are not in this handoff."),
    ).toBeVisible();
  });
  it("does not say so when the handoff has a table that could hold them", () => {
    lead(
      readiness(FIVE, HEADERS, [
        section("Located", 30, table(31, ["Item", "Evidence"], [["a", "b"]])),
      ]),
    );
    expect(screen.queryByText(/not in this handoff/)).toBeNull();
    expect(screen.getByRole("list", { name: "Readiness by area" })).toBeInTheDocument();
  });
  it("draws no matrix and one gap for a state it does not recognise", () => {
    lead(readiness([...FIVE, ["Segments", "Mostly ready", "x"]]));
    expect(
      screen.getByText("The readiness table uses states this page does not recognise."),
    ).toBeVisible();
    expect(screen.queryByRole("img")).toBeNull();
    expect(screen.queryByRole("list")).toBeNull();
    expect(screen.queryByText("Peer benchmark")).toBeNull();
  });
  it("draws one gap when the table is absent", () => {
    lead(entry("CP-0", [], []));
    expect(screen.getByText("Source readiness states no readiness by area.")).toBeVisible();
    expect(screen.queryByRole("img")).toBeNull();
    expect(screen.queryByText(/not in this handoff/)).toBeNull();
  });
  it("collapses to one chip column below lg and wraps the reason under the area", () => {
    lead(readiness(FIVE));
    const row = rowOf("Peer benchmark");
    expect(row.className).toContain("grid-cols-[1fr_auto]");
    expect(row.className).toContain("lg:grid-cols-");
    const reason = within(row).getByText("Peer financials were not supplied.");
    expect(reason.className).toContain("col-span-2");
    expect(reason.className).toContain("lg:col-span-1");
  });
});
