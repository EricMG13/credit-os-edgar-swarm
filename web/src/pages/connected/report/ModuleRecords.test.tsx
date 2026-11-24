import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { RunContext } from "@/pages/library/parts/RunContext";
import {
  evidencePath,
  type OutputEntry,
  type Section,
  type Snapshot,
  type Table,
} from "../publishedReport";
import { sectionTraces } from "../ReportContent";
import { traceKey } from "../reportView";
import { ModuleRecords } from "./ModuleRecords";

afterEach(cleanup);

const table = (line: number, headers: string[], rows: string[][]): Table => ({
  type: "table",
  line,
  headers,
  rows: rows.map((cells, at) => ({ line: line + 2 + at, cells })),
});
const text = (line: number, value: string) => ({
  type: "text" as const,
  line,
  end: line,
  text: value,
});
const section = (heading: string, level: number, line: number, blocks: Section["blocks"] = []) => ({
  heading,
  level,
  line,
  blocks,
});

function entryOf(sections: Section[]): OutputEntry {
  return {
    selected: true,
    output: { id: "a", module: "CP-1", label: "a", href: "", sha256: "a".repeat(64) },
    sections,
  };
}

const REFERENCE = "10-K_0001260221-24-000083_tdg-20240930.htm.jsonl, page 120";
const statement = table(
  11,
  ["Line item", "FY2024", "FY2023", "Unit"],
  [
    ["Net sales", "7940", "6585", "USD millions"],
    ["Operating income", "3,463", "2,839", "USD millions"],
  ],
);
const debt = table(
  21,
  ["Instrument", "Principal", "Spread (bps)", "Maturity", "Note"],
  [
    ["Term loan I", "1,871", "275", "2028", "Secured"],
    ["Term loan J", "(3,742)", "250", "2031", REFERENCE],
    ["Revolver", "Not supplied: synthetic", "225", "2029", ""],
  ],
);
const risks = table(71, ["Risk", "Probability", "Impact"], [["Refinancing", "Low", "High"]]);
const calc = table(41, ["ID", "Result"], [["C01", "24880"]]);
const source = table(51, ["Source", "File"], [["S1", "x.pdf"]]);

const SECTIONS: Section[] = [
  section("Findings", 2, 1),
  section("Bottom line", 3, 2, [text(3, "Leverage rose.")]),
  section("T4.4 Income statement", 3, 10, [statement]),
  section("T4.18 Debt instruments", 3, 19, [text(20, "All money columns are USD millions."), debt]),
  section("T4.1 Source register", 3, 50, [source]),
  section("Risk register", 3, 70, [risks]),
  section("Calculations", 2, 40, [calc]),
];
const FOLDER = "tdg-2024";

function draw(sections: Section[] = SECTIONS) {
  const entry = entryOf(sections);
  const open = vi.fn();
  const traces = sectionTraces({ chips: {} } as Snapshot, entry, entry.sections);
  const view = render(
    <RunContext.Provider value={{ traces, open }}>
      <ModuleRecords run={{ folder: FOLDER }} entry={entry} />
    </RunContext.Provider>,
  );
  return { entry, open, ...view };
}

const openRecords = () => {
  fireEvent.click(screen.getByRole("button", { name: "Show records" }));
};
const kinds = () => within(screen.getByRole("group", { name: "Record kind" }));

it("is closed by default, stating its count, with no table drawn", () => {
  draw();
  const region = screen.getByRole("region", { name: "Statements and records" });
  expect(
    within(region).getByRole("heading", { level: 3, name: "Statements and records" }),
  ).toBeInTheDocument();
  expect(within(region).getByText("4 tables · 1 held in Evidence")).toBeInTheDocument();
  const toggle = within(region).getByRole("button", { name: "Show records" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(toggle).toHaveAttribute("aria-controls");
  expect(screen.queryByRole("table")).toBeNull();
  expect(screen.queryByRole("group", { name: "Record kind" })).toBeNull();
});

it("opens to the kinds that hold a table, in order, with their counts", () => {
  draw();
  openRecords();
  const toggle = screen.getByRole("button", { name: "Hide records" });
  expect(toggle).toHaveAttribute("aria-expanded", "true");
  expect(document.getElementById(toggle.getAttribute("aria-controls") ?? "")).not.toBeNull();
  expect(
    kinds()
      .getAllByRole("button")
      .map((item) => item.textContent),
  ).toEqual(["Statements 2", "Registers 1", "Calculations 1"]);
  expect(kinds().getByRole("button", { name: "Statements 2" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  expect(screen.getByRole("heading", { level: 4, name: "Income statement" })).toBeInTheDocument();
  fireEvent.click(toggle);
  expect(screen.queryByRole("table")).toBeNull();
});

it("switches kind and table, and resets the table when the kind changes", () => {
  draw();
  openRecords();
  const tablesGroup = () => screen.getByRole("group", { name: "Table" });
  fireEvent.click(within(tablesGroup()).getByRole("button", { name: "Debt instruments" }));
  expect(screen.getByRole("heading", { level: 4, name: "Debt instruments" })).toBeInTheDocument();
  expect(screen.getByText("All money columns are USD millions.")).toBeInTheDocument();

  fireEvent.click(kinds().getByRole("button", { name: "Registers 1" }));
  expect(screen.queryByRole("group", { name: "Table" })).toBeNull();
  expect(screen.getByRole("heading", { level: 4, name: "Risk register" })).toBeInTheDocument();
  expect(screen.getByText("Refinancing")).toBeInTheDocument();

  fireEvent.click(kinds().getByRole("button", { name: "Statements 2" }));
  expect(screen.getByRole("heading", { level: 4, name: "Income statement" })).toBeInTheDocument();
  expect(within(tablesGroup()).getByRole("button", { name: "Income statement" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
});

it("draws a statement table with period columns as plain figures, without bars", () => {
  const { container } = draw();
  openRecords();
  expect(screen.getByText("7940")).toBeInTheDocument();
  expect(screen.getByText("3,463")).toBeInTheDocument();
  expect(container.querySelector('[style*="width"]')).toBeNull();
});

function openDebt() {
  openRecords();
  fireEvent.click(
    within(screen.getByRole("group", { name: "Table" })).getByRole("button", {
      name: "Debt instruments",
    }),
  );
  return screen.getByRole("region", { name: "Debt instruments" });
}

it("bars an amount column with the figures as written and a stated gap in words", () => {
  draw();
  const wide = openDebt();
  expect(wide).toHaveAttribute("tabindex", "0");
  expect(within(wide).getByRole("table")).toHaveAccessibleName(
    "Debt instruments · bars on one scale per column",
  );
  const rows = within(wide).getAllByRole("row");
  const first = rows.find((row) => row.textContent.includes("Term loan I"));
  const second = rows.find((row) => row.textContent.includes("Term loan J"));
  const revolver = rows.find((row) => row.textContent.includes("Revolver"));
  if (!first || !second || !revolver) throw new Error("debt rows were not drawn");
  expect(within(first).getByText("1,871")).toBeInTheDocument();
  expect(first.querySelector('[style*="width"]')).toHaveStyle({ width: "50%" });
  expect(within(second).getByText("(3,742)")).toBeInTheDocument();
  expect(second.querySelector('[style*="width"]')).toHaveStyle({ width: "100%" });
  expect(second.querySelector('[style*="width"]')).toHaveClass("bg-chart-2");
  expect(within(revolver).getByText("Not supplied: synthetic")).toBeInTheDocument();
  expect(revolver.querySelector('[style*="width"]')).toBeNull();
  expect(within(revolver).queryByText("0")).toBeNull();
  expect(within(revolver).getByLabelText("Empty in the handoff")).toHaveTextContent("—");
  expect(within(first).getByText("275")).toBeInTheDocument();
});

it("draws a source reference cell as an Evidence link, never as text", () => {
  const { entry } = draw();
  const wide = openDebt();
  expect(within(wide).queryByText(/tdg-20240930/)).toBeNull();
  expect(within(wide).getByRole("link", { name: "In Evidence" })).toHaveAttribute(
    "href",
    evidencePath(FOLDER, entry, 24),
  );
});

it("gives every row a trace control that opens the row's trace", () => {
  const { entry, open } = draw();
  const wide = openDebt();
  for (const name of ["Term loan I", "Term loan J", "Revolver"])
    expect(
      within(wide).getByRole("button", { name: `Show sources for ${name}` }),
    ).toBeInTheDocument();
  fireEvent.click(within(wide).getByRole("button", { name: "Show sources for Term loan J" }));
  expect(open).toHaveBeenCalledWith(traceKey(entry, 24));

  fireEvent.click(kinds().getByRole("button", { name: "Calculations 1" }));
  fireEvent.click(screen.getByRole("button", { name: "Show sources for C01" }));
  expect(open).toHaveBeenLastCalledWith(traceKey(entry, 43));
});

it("lists the registers held in Evidence with links to their place", () => {
  const { entry } = draw();
  openRecords();
  const held = screen.getByRole("list", { name: "Held in Evidence" });
  expect(within(held).getByRole("link", { name: "Source register" })).toHaveAttribute(
    "href",
    evidencePath(FOLDER, entry, 50),
  );
  expect(screen.getByRole("link", { name: "Open this module in Evidence" })).toHaveAttribute(
    "href",
    evidencePath(FOLDER, entry),
  );
});

it("states the singular count and draws only the Evidence list when no table is drawn", () => {
  draw([section("Findings", 2, 1), section("T4.4 Income statement", 3, 10, [statement])]);
  expect(screen.getByText("1 table")).toBeInTheDocument();
  cleanup();
  draw([section("Findings", 2, 1), section("T4.1 Source register", 3, 50, [source])]);
  expect(screen.getByText("1 held in Evidence")).toBeInTheDocument();
  openRecords();
  expect(screen.queryByRole("group", { name: "Record kind" })).toBeNull();
  expect(screen.getByRole("link", { name: "Source register" })).toBeInTheDocument();
});

it("draws nothing when the module has no tables and nothing held in Evidence", () => {
  const { container } = draw([
    section("Findings", 2, 1),
    section("Bottom line", 3, 2, [text(3, "Leverage rose.")]),
  ]);
  expect(container).toBeEmptyDOMElement();
});
