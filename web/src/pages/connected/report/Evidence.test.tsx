import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { hasRecordedGap, ReportEvidence } from "./Evidence";
import type { OutputEntry, PublishedRun, Snapshot } from "../publishedReport";

const emptyEvidence = {
  sources: [],
  unused: [],
  unrecorded: [],
  noSourcesModules: [],
  handoffs: [],
  zip: null,
  downloads: [],
  record: { hashes: [], instructions: [], calls: [], cap: null },
};

function evidenceEntry(
  module: string,
  id: string,
  selected: boolean,
  blocks: OutputEntry["sections"][number]["blocks"],
): OutputEntry {
  return {
    output: {
      id,
      sha256: "a".repeat(64),
      module,
      label: "Saved alternate",
      href: `${id}.md`,
    },
    selected,
    sections: [{ heading: "Gaps", level: 2, line: 4, blocks }],
  };
}

function renderGaps(entries: OutputEntry[], module = "CP-1") {
  return renderEvidence(entries, `gaps/${module}`);
}

function renderEvidence(
  entries: OutputEntry[],
  target: string,
  evidence: PublishedRun["evidence"] = emptyEvidence,
) {
  const run = { folder: "case", evidence } as unknown as PublishedRun;
  const snapshot = {
    workspace: { runs: {}, outputs: {}, handoffs: {}, models: [] },
    chips: {},
  } as unknown as Snapshot;
  return render(
    <ReportEvidence
      snapshot={snapshot}
      run={run}
      entries={entries}
      target={target}
      mode="synthetic"
    />,
  );
}

afterEach(cleanup);

describe("published evidence gaps", () => {
  it("does not count an explicit None handoff as a gap", () => {
    expect(hasRecordedGap([{ type: "text", line: 46, end: 46, text: "None." }])).toBe(false);
  });

  it("counts actual text and structured gap records", () => {
    expect(
      hasRecordedGap([
        { type: "text", line: 46, end: 46, text: "No current facility headroom was supplied." },
      ]),
    ).toBe(true);
    expect(
      hasRecordedGap([
        {
          type: "table",
          line: 47,
          headers: ["Item", "Reason"],
          rows: [{ line: 48, cells: ["Liquidity", "No dated forecast"] }],
        },
      ]),
    ).toBe(true);
    expect(hasRecordedGap([])).toBe(false);
  });

  it("excludes no-gap rows and the comparison ledger from gap counts", () => {
    expect(
      hasRecordedGap([
        {
          type: "table",
          line: 47,
          headers: ["Gap", "Severity"],
          rows: [{ line: 48, cells: ["None", ""] }],
        },
      ]),
    ).toBe(false);
    expect(
      hasRecordedGap([
        {
          type: "table",
          line: 47,
          headers: ["Earlier ref", "Current ref", "Limitation"],
          rows: [{ line: 48, cells: ["E1", "C1", "Different scope"] }],
        },
      ]),
    ).toBe(false);
  });

  it("renders each row from every module output, preserves effects, and links to the row line", () => {
    const saved = evidenceEntry("CP-1", "CP-1/alternate.md", false, [
      {
        type: "table",
        line: 5,
        headers: ["Gap", "Severity", "Effect"],
        rows: [
          { line: 6, cells: ["None.", "", "No effect"] },
          {
            line: 7,
            cells: ["Refinancing data unavailable", "High", "Could increase liquidity pressure"],
          },
        ],
      },
    ]);
    renderGaps([
      saved,
      evidenceEntry("CP-2G", "CP-2G/gaps.md", true, [
        { type: "text", line: 12, end: 12, text: "Different module gap." },
      ]),
    ]);

    expect(screen.getByRole("heading", { name: "Gaps 1" })).toBeVisible();
    expect(screen.getByText("Effect: Could increase liquidity pressure")).toBeVisible();
    expect(screen.getByText("Financial foundation (CP-1) · Saved alternate")).toBeVisible();
    expect(screen.getByRole("link", { name: "Open source" })).toHaveAttribute(
      "href",
      `/report/case#evidence/${encodeURIComponent(saved.output.id)}~${saved.output.sha256}-7`,
    );
    expect(screen.queryByText("Different module gap.")).toBeNull();
  });

  it("uses the gap text instead of a gap identifier and preserves unrecognized severity", () => {
    const entry = evidenceEntry("CP-1", "CP-1/gaps.md", true, [
      {
        type: "table",
        line: 5,
        headers: ["Gap ID", "Gap", "Severity", "Effect"],
        rows: [
          { line: 6, cells: ["G-01", "None.", "", "No effect"] },
          {
            line: 7,
            cells: ["G-02", "Missing covenant schedule", "Critical", "Could hide a breach"],
          },
        ],
      },
    ]);
    renderGaps([entry]);
    expect(screen.getByRole("heading", { name: "Gaps 1" })).toBeVisible();
    expect(screen.getByRole("row", { name: /Missing covenant schedule/ })).toHaveTextContent(
      "Critical",
    );
    expect(screen.getByRole("row", { name: /Could hide a breach/ })).toHaveTextContent(
      "Effect: Could hide a breach",
    );
    expect(screen.queryByText("G-02")).toBeNull();
  });

  it("preserves fallback titles, zero details, row order and source lines with sparse cells", () => {
    const entry = evidenceEntry("CP-1", "CP-1/fallback.md", true, [
      {
        type: "table",
        line: 5,
        headers: ["ID", "Severity", "Description", "Amount", "Empty", "Reason"],
        rows: [
          { line: 6, cells: ["G-1", " Critical ", " Missing debt ", "0", "", " Last "] },
          { line: 7, cells: ["G-2", "", "Sparse trailing cells"] },
          { line: 8, cells: ["G-3", "High"] },
          { line: 9, cells: ["G-4", "High", " N/A "] },
        ],
      },
    ]);
    renderGaps([entry]);
    expect(screen.getByRole("heading", { name: "Gaps 2" })).toBeVisible();
    const row = screen.getByRole("row", { name: /Missing debt/ });
    expect(row).toHaveTextContent("Critical");
    expect(row).toHaveTextContent("ID: G-1 Amount: 0 Reason: Last");
    expect(row).not.toHaveTextContent("Empty:");
    expect(screen.getByRole("row", { name: /Sparse trailing cells/ })).toBeVisible();
    const links = screen.getAllByRole("link", { name: "Open source" });
    expect(links.map((link) => link.getAttribute("href"))).toEqual(
      [6, 7].map(
        (line) =>
          `/report/case#evidence/${encodeURIComponent(entry.output.id)}~${entry.output.sha256}-${String(line)}`,
      ),
    );
  });

  it("keeps the first-column fallback and excludes only paired comparison ledgers", () => {
    expect(
      hasRecordedGap([
        {
          type: "table",
          line: 5,
          headers: ["ID", "Severity"],
          rows: [{ line: 6, cells: ["0", "Low"] }],
        },
      ]),
    ).toBe(true);
    expect(
      hasRecordedGap([
        {
          type: "table",
          line: 5,
          headers: ["Earlier ref", "Gap"],
          rows: [{ line: 6, cells: ["E1", "Missing current evidence"] }],
        },
      ]),
    ).toBe(true);
  });

  it("handles empty lists and an unknown module filter without showing another module's rows", () => {
    const empty = renderGaps([]);
    expect(screen.getByText("No recorded gaps for Financial foundation (CP-1).")).toBeVisible();
    empty.unmount();
    renderGaps(
      [
        evidenceEntry("CP-2G", "CP-2G/gaps.md", true, [
          { type: "text", line: 12, end: 12, text: "Different module gap." },
        ]),
      ],
      "CP-unknown",
    );
    expect(screen.getByText("No recorded gaps for CP-unknown.")).toBeVisible();
    expect(screen.queryByText("Different module gap.")).toBeNull();
  });
});

it("does not repeat the retained-preview notice inside the Evidence page", () => {
  const run = { folder: "case", evidence: emptyEvidence } as unknown as PublishedRun;
  const snapshot = {
    workspace: { runs: {}, outputs: {}, handoffs: {}, models: [] },
    chips: {},
    preview: { reason: "Retained method check; listing withheld." },
  } as unknown as Snapshot;
  render(
    <ReportEvidence snapshot={snapshot} run={run} entries={[]} target="summary" mode="synthetic" />,
  );
  expect(screen.queryByRole("note")).toBeNull();
  expect(screen.getByRole("heading", { name: "Evidence" })).toBeInTheDocument();
});

it("keeps filtered summary counts, alternate handoffs and source identities across evidence tabs", () => {
  const entries = [
    evidenceEntry("CP-1", "selected", true, []),
    evidenceEntry("CP-1", "alternate", false, []),
    evidenceEntry("CP-2G", "other", true, []),
  ];
  const source = {
    name: "Issuer filing",
    type: "PDF",
    documentDate: "2026-10-31",
    readBy: ["CP-1"],
    sha256: "source-digest",
  };
  const evidence = {
    ...emptyEvidence,
    sources: [source],
    unused: [{ ...source, name: "Other module", readBy: ["CP-2G"] }],
    unrecorded: [{ ...source, name: "Use unknown", sha256: null }],
  };
  const summary = renderEvidence(entries, "summary/CP-1", evidence);
  expect(screen.getByText("1 designated handoffs · 2 source files")).toBeVisible();
  expect(
    screen.getByRole("link", { name: "Financial foundation (CP-1) · Saved alternate" }),
  ).toHaveAttribute("href", `/report/case#evidence/alternate~${"a".repeat(64)}`);
  expect(screen.queryByRole("link", { name: /CP-2G/ })).toBeNull();
  summary.unmount();
  const sources = renderEvidence(entries, "sources/CP-1", evidence);
  expect(screen.getByText("Issuer filing")).toBeVisible();
  expect(screen.getByText("source-digest")).toBeVisible();
  expect(screen.getByText("Use unknown")).toBeVisible();
  expect(screen.queryByText("Other module")).toBeNull();
  expect(screen.queryByText("Supplied but unnamed in handoffs")).toBeNull();
  sources.unmount();
  renderEvidence(entries, "sources/CP-unknown", evidence);
  expect(screen.getByText("No issuer files are listed for CP-unknown.")).toBeVisible();
  expect(screen.queryByText("Issuer filing")).toBeNull();
});

it("does not admit a stale evidence address or display the handoff list for it", () => {
  const entry = evidenceEntry("CP-1", "saved", true, []);
  renderEvidence([entry], `saved~${"b".repeat(64)}`);
  expect(screen.getByRole("alert")).toHaveTextContent("Evidence link unavailable");
  expect(screen.queryByRole("heading", { name: "Handoffs" })).toBeNull();
  expect(screen.queryByRole("heading", { name: "Run evidence" })).toBeNull();
});
