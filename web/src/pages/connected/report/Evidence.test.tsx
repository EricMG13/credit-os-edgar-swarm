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
  const run = { folder: "case", evidence: emptyEvidence } as unknown as PublishedRun;
  const snapshot = {
    workspace: { runs: {}, outputs: {}, handoffs: {}, models: [] },
    chips: {},
  } as unknown as Snapshot;
  return render(
    <ReportEvidence
      snapshot={snapshot}
      run={run}
      entries={entries}
      target={`gaps/${module}`}
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
