import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { OutputEntry, PublishedRun, Section, Snapshot, Table } from "./publishedReport";
import { evidencePath } from "./publishedReport";
import type { buildReportView } from "./reportView";
import { PublishedTable, findingBlocks, recordSections } from "./ReportContent";
import { Modules } from "./report/Modules";

type View = ReturnType<typeof buildReportView>;
const text = (heading: string, line: number): Section => ({
  heading,
  level: 3,
  line,
  blocks: [{ type: "text", line: line + 1, text: `${heading} prose.`, end: line + 1 }],
});
const tableSection = (heading: string, line: number): Section => ({
  heading,
  level: 3,
  line,
  blocks: [
    {
      type: "table",
      headers: ["Item", "Value"],
      line: line + 1,
      rows: [{ line: line + 2, cells: ["Row", "1"] }],
    },
  ],
});
const FINDINGS: Section = { heading: "Findings", level: 2, line: 1, blocks: [] };
const CP1 = [
  ["Bottom line", "text"],
  ["Leverage and coverage: what the numbers say", "text"],
  ["Limitations", "text"],
  ["T4.2 Entity period key", "table"],
  ["T4.4 Income statement", "table"],
  ["Segment schedule", "table"],
  ["T4.5 Cash flow statement", "table"],
  ["T4.6 Balance sheet", "table"],
  ["T4.18 Debt instruments", "table"],
  ["Net debt data", "table"],
  ["Financials and credit metrics", "table"],
  ["T4.10 KPI dashboard", "table"],
  ["T4.13 Readiness", "table"],
  ["Confidence inputs", "table"],
] as const;
function entryOf(module: string, sections: Section[]): OutputEntry {
  return {
    selected: true,
    output: { id: "a", module, label: "a", href: "", sha256: "a".repeat(64) },
    sections: [FINDINGS, ...sections],
  };
}
const cp1 = () =>
  entryOf(
    "CP-1",
    CP1.map(([heading, kind], index) =>
      kind === "text" ? text(heading, 10 + index * 10) : tableSection(heading, 10 + index * 10),
    ),
  );
function page(entry: OutputEntry) {
  const view: View = {
    entries: [entry],
    modules: [{ id: entry.output.module, name: "Module", state: "Delivered", outputs: [entry] }],
    catalogue: undefined,
    lead: undefined,
    models: [],
  };
  const run = { folder: "retained case", issuer: "Issuer", asOf: "2026-10-31" } as PublishedRun;
  return render(
    <Modules
      snapshot={{ chips: {} } as Snapshot}
      run={run}
      view={view}
      module={entry.output.module}
    />,
  );
}

describe("coded registers leave the module page", () => {
  it("keeps readable sections and removes coded and audit sections", () => {
    const entry = cp1();
    expect(findingBlocks(entry.sections, entry).map((s) => s.heading)).toEqual([
      "Bottom line",
      "Leverage and coverage: what the numbers say",
      "Limitations",
      "Segment schedule",
      "Net debt data",
      "Financials and credit metrics",
    ]);
    expect(recordSections(entry.sections, entry).map((s) => s.heading)).toEqual([
      "T4.2 Entity period key",
      "T4.4 Income statement",
      "T4.5 Cash flow statement",
      "T4.6 Balance sheet",
      "T4.18 Debt instruments",
      "T4.10 KPI dashboard",
      "T4.13 Readiness",
      "Confidence inputs",
    ]);
  });

  it("draws Statements and records with links into Evidence and no register code", () => {
    const entry = cp1();
    const { container } = page(entry);
    expect(screen.getByRole("heading", { name: "Statements and records" })).toBeInTheDocument();
    const labels: [string, string][] = [
      ["Entity period key", "T4.2 Entity period key"],
      ["Income statement", "T4.4 Income statement"],
      ["Cash flow statement", "T4.5 Cash flow statement"],
      ["Balance sheet", "T4.6 Balance sheet"],
      ["Debt instruments", "T4.18 Debt instruments"],
      ["KPI dashboard", "T4.10 KPI dashboard"],
      ["Readiness", "T4.13 Readiness"],
      ["Confidence inputs", "Confidence inputs"],
    ];
    for (const [label, heading] of labels) {
      const line = entry.sections.find((s) => s.heading === heading)?.line ?? -1;
      expect(screen.getByRole("link", { name: label })).toHaveAttribute(
        "href",
        evidencePath("retained case", entry, line),
      );
    }
    expect(screen.getByRole("link", { name: "Open this module in Evidence" })).toHaveAttribute(
      "href",
      evidencePath("retained case", entry),
    );
    expect(container.textContent).not.toContain("T4.4");
    expect(screen.getByRole("button", { name: "Statements and records" })).toBeInTheDocument();
  });

  it("draws no card for a module without coded sections", () => {
    page(entryOf("CP-1", [text("Bottom line", 10), tableSection("Segment schedule", 20)]));
    expect(screen.queryByRole("heading", { name: "Statements and records" })).toBeNull();
  });

  it("still promotes a monitoring register in CP-2A", () => {
    const monitoring: Section = {
      heading: "T2B.7 Monitoring sensitivity flags",
      level: 3,
      line: 20,
      blocks: [
        {
          type: "table",
          headers: [
            "Indicator",
            "Leading / Lagging",
            "Threshold or Qualitative Signal",
            "Limitation",
          ],
          line: 21,
          rows: [
            { line: 22, cells: ["Cover", "Leading", "Below 3x", "Indicative"] },
            { line: 23, cells: ["Rating", "Lagging", "Downgrade", "Indicative"] },
          ],
        },
      ],
    };
    const entry = entryOf("CP-2A", [monitoring]);
    expect(findingBlocks(entry.sections, entry).map((s) => s.heading)).toEqual([
      monitoring.heading,
    ]);
    expect(recordSections(entry.sections, entry)).toEqual([]);
  });
});

describe("wide tables pin their first column", () => {
  const wide = (count: number): Table => ({
    type: "table",
    headers: Array.from({ length: count }, (_, i) => `H${String(i)}`),
    line: 1,
    rows: [{ line: 2, cells: Array.from({ length: count }, (_, i) => `v${String(i)}`) }],
  });
  it("sticks the first column at five columns", () => {
    render(<PublishedTable table={wide(5)} />);
    expect(screen.getByRole("columnheader", { name: "H0" })).toHaveClass("sticky");
    expect(screen.getByRole("cell", { name: "v0" })).toHaveClass("sticky");
    expect(screen.getByRole("columnheader", { name: "H1" })).not.toHaveClass("sticky");
  });
  it("leaves four columns unchanged", () => {
    render(<PublishedTable table={wide(4)} />);
    expect(screen.getByRole("columnheader", { name: "H0" })).not.toHaveClass("sticky");
    expect(screen.getByRole("cell", { name: "v0" })).not.toHaveClass("sticky");
  });
});
