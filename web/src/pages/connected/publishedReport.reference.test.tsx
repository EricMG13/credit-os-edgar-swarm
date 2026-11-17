import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { containsReference, type Table } from "./publishedReport";
import { PublishedTable } from "./ReportContent";

const referenced = [
  "Lease detail not disclosed (G12).",
  "Basis as run 20261117-094923-01.",
  "See (G3) and (G31)",
];
const ordinary = [
  "Gross debt at 2024 year end includes finance leases.",
  "Covenant headroom of 12.5x on a net basis.",
  "Run-rate EBITDA, cash-flow-based, pre-IFRS 16.",
  "Rated A (stable) at 31 December 2024; 20241231 balance.",
  "Tier-2 capital, 2026-12-31 maturity, USD 1,250 million.",
  "Group G7 comparison, 12-34-56 reference-free.",
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
