import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { OutputEntry, PublishedRun, Section, Snapshot, Table } from "./publishedReport";
import { evidencePath } from "./publishedReport";
import type { buildReportView } from "./reportView";
import { PublishedTable, ReportFindings, findingBlocks, recordSections } from "./ReportContent";
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

  it("draws no Statements and records heading in the overview", () => {
    const entry = cp1();
    render(
      <ReportFindings
        snapshot={{ chips: {} } as Snapshot}
        run={{ folder: "retained case", issuer: "Issuer", asOf: "2026-10-31" } as PublishedRun}
        entry={entry}
        entryIndex={0}
        overview
      />,
    );
    expect(screen.queryByRole("heading", { name: "Statements and records" })).toBeNull();
  });

  it("draws the card, and so the navigator entry, when every section is a record", () => {
    const entry = entryOf("CP-1", [
      tableSection("T4.4 Income statement", 20),
      tableSection("Confidence inputs", 30),
    ]);
    page(entry);
    expect(screen.getByRole("heading", { name: "Statements and records" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Income statement" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Statements and records" })).toBeInTheDocument();
    expect(document.getElementById("statements-and-records")).not.toBeNull();
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

describe("scrollable table wrappers", () => {
  const columns = (count: number): Table => ({
    type: "table",
    headers: Array.from({ length: count }, (_, i) => `H${String(i)}`),
    line: 1,
    rows: [{ line: 2, cells: Array.from({ length: count }, (_, i) => `v${String(i)}`) }],
  });
  it("is a focusable region named by the section heading at five columns", () => {
    render(<PublishedTable table={columns(5)} heading="Net debt data" />);
    expect(screen.getByRole("region", { name: "Net debt data" })).toHaveAttribute("tabindex", "0");
  });
  it("is named Table when the caller passes no heading", () => {
    render(<PublishedTable table={columns(5)} />);
    expect(screen.getByRole("region", { name: "Table" })).toHaveAttribute("tabindex", "0");
  });
  it("gives a narrow table no role, no tab stop and no label", () => {
    const { container } = render(<PublishedTable table={columns(4)} heading="Net debt data" />);
    expect(screen.queryByRole("region")).toBeNull();
    expect(container.querySelector("[tabindex]")).toBeNull();
    expect(container.querySelector("[aria-label]")).toBeNull();
  });
  it("labels the region with the heading as drawn, without Markdown marks", () => {
    const section: Section = {
      heading: "Chart data: **Net** `debt`",
      level: 3,
      line: 40,
      blocks: [columns(5)],
    };
    const entry: OutputEntry = {
      selected: true,
      output: { id: "o", module: "CP-1", label: "o", href: "", sha256: "o".repeat(64) },
      sections: [FINDINGS, section],
    };
    render(
      <ReportFindings
        snapshot={{ chips: {} } as Snapshot}
        run={{ folder: "f", issuer: "I", asOf: "2026-10-31" } as PublishedRun}
        entry={entry}
        entryIndex={0}
      />,
    );
    expect(screen.getByRole("region", { name: "Net debt" })).toBeInTheDocument();
  });
});

describe("section headings drawn from handoff text", () => {
  it("start with a capital by CSS and keep the DOM text", () => {
    const section = text("stress scenario", 40);
    const entry: OutputEntry = {
      selected: true,
      output: { id: "o", module: "CP-1", label: "o", href: "", sha256: "o".repeat(64) },
      sections: [FINDINGS, section],
    };
    render(
      <ReportFindings
        snapshot={{ chips: {} } as Snapshot}
        run={{ folder: "f", issuer: "I", asOf: "2026-10-31" } as PublishedRun}
        entry={entry}
        entryIndex={0}
      />,
    );
    const heading = screen.getByRole("heading", { name: "stress scenario" });
    expect(heading.textContent).toBe("stress scenario");
    expect(heading).toHaveClass("first-letter:uppercase");
  });
});

describe("module page continuation paragraphs", () => {
  it("sit inside one card after the verdict band", () => {
    const entry: OutputEntry = {
      selected: true,
      output: { id: "o", module: "CP-1", label: "o", href: "", sha256: "o".repeat(64) },
      sections: [
        FINDINGS,
        {
          heading: "Bottom line",
          level: 3,
          line: 10,
          blocks: [
            { type: "text", line: 11, end: 11, text: "The verdict." },
            { type: "text", line: 12, end: 12, text: "First continuation." },
            { type: "text", line: 13, end: 13, text: "Second continuation." },
          ],
        },
      ],
    };
    render(
      <ReportFindings
        snapshot={{ chips: {} } as Snapshot}
        run={{ folder: "f", issuer: "I", asOf: "2026-10-31" } as PublishedRun}
        entry={entry}
        entryIndex={0}
      />,
    );
    const card = screen.getByText("First continuation.").closest("div.bg-surface-card");
    expect(card).not.toBeNull();
    expect(card).toContainElement(screen.getByText("Second continuation."));
    expect(card).not.toContainElement(screen.getByRole("region", { name: "Bottom line" }));
  });
});
