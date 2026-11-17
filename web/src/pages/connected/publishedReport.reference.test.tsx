import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { RunContext } from "../library/parts/RunContext";
import { containsReference, type Table } from "./publishedReport";
import { FindingParagraph, PublishedTable } from "./ReportContent";

// A gap as modules spell it in a cell or sentence: the report-wide id after the empty-set mark
// ("∅ G12", "∅ G12 n.m.", and "∅ [G12]" where prose marks it), and a run code.
const referenced = [
  "Lease detail not disclosed ∅ G12.",
  "Basis as run 20261117-094923-01.",
  "∅ G3 n.m.",
  "Net leverage ∅ G4 at FY2025; see ∅ [G31].",
];
const ordinary = [
  "Gross debt at 2024 year end includes finance leases.",
  "Covenant headroom of 12.5x on a net basis.",
  "Run-rate EBITDA, cash-flow-based, pre-IFRS 16.",
  "Rated A (stable) at 31 December 2024; 20241231 balance.",
  "Tier-2 capital, 2026-12-31 maturity, USD 1,250 million.",
  "Group G7 comparison, 12-34-56 reference-free.",
  // Ordinary prose with a parenthesised G and digits is not a gap id.
  "Group of Seven (G7) demand is weak.",
  "The G20 economies (G20) slowed.",
  "Eurozone and G10 currencies (G10) moved.",
  "Series G preferred (G1) ranks last.",
  "Class A-2 notes (G2) rank pari passu.",
  "Gen 3 (G3) vehicles, Tranche F2 (G2) maturity, 1.5x (G1).",
  "Exposure to advanced economies (G7) is limited; net leverage is 3.2x at FY2025.",
  "Gap G12 is open; the (G12, G13) pair and [G12] stay as written.",
];

it.each(referenced)("treats a gap id or run code as a source reference: %s", (text) => {
  expect(containsReference(text)).toBe(true);
});

it.each(ordinary)("does not treat ordinary text as a source reference: %s", (text) => {
  expect(containsReference(text)).toBe(false);
});

it("leaves a module code to the module's name, which is how a findings page draws it", () => {
  expect(containsReference("Restated by CP-2A for FY2024.")).toBe(false);
});

function plainTable(cells: string[]): Table {
  return {
    type: "table",
    line: 10,
    headers: ["Item", "Note"],
    rows: cells.map((cell, index) => ({ line: 12 + index, cells: [`Row ${String(index)}`, cell] })),
  };
}

it.each(referenced)(
  "holds %s back from a plain table but leaves its trace control and Evidence link",
  (text) => {
    render(
      <PublishedTable
        table={plainTable([text])}
        href="#evidence/x-12"
        rowSource={(line, name) => <a href={`#trace-${String(line)}`}>Sources for {name}</a>}
      />,
    );
    expect(screen.getByRole("link", { name: "In Evidence" })).toHaveAttribute(
      "href",
      "#evidence/x-12",
    );
    expect(screen.getByRole("link", { name: "Sources for Row 0" })).toBeInTheDocument();
    expect(document.body.textContent).not.toContain(text);
  },
);

it("draws the same text as stored on the Evidence page", () => {
  render(<PublishedTable table={plainTable(referenced)} evidence />);
  for (const text of referenced) expect(screen.getByText(text)).toBeInTheDocument();
});

it.each(ordinary)("draws ordinary text in a plain table: %s", (text) => {
  render(<PublishedTable table={plainTable([text])} href="#evidence/x-12" />);
  expect(screen.getByText(text)).toBeInTheDocument();
  expect(screen.queryByRole("link", { name: "In Evidence" })).toBeNull();
});

function paragraph(text: string) {
  return render(
    <RunContext.Provider value={{ traces: { t: {} } as never, open: () => undefined }}>
      <FindingParagraph
        block={{ type: "text", line: 3, end: 3, text }}
        trace="t"
        href="#evidence/x-3"
      />
    </RunContext.Provider>,
  );
}

it.each(ordinary)("draws a finding paragraph holding ordinary text as written: %s", (text) => {
  paragraph(text);
  expect(screen.getByText(text)).toBeInTheDocument();
  expect(screen.queryByRole("link", { name: "Read this passage in Evidence" })).toBeNull();
});

it.each(referenced)("sends a finding paragraph holding %s to Evidence", (text) => {
  paragraph(text);
  expect(screen.getByRole("link", { name: "Read this passage in Evidence" })).toHaveAttribute(
    "href",
    "#evidence/x-3",
  );
  expect(document.body.textContent).not.toContain(text);
});
