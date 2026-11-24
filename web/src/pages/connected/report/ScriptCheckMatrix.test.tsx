import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { ScriptCheckOutcome, ScriptCheckRecord } from "../publishedReport";
import { ScriptCheckMatrix } from "./ScriptCheckMatrix";

function outcome(
  status: string,
  register: string | null,
  figure: string | null,
  row: string | null = null,
): ScriptCheckOutcome {
  return {
    figure,
    register,
    row,
    status,
    reason: null,
    script: null,
    stated: null,
    recomputed: null,
    recomputedLabel: null,
    tolerance: null,
    unit: null,
  };
}
function record(module: string, outcomes: ScriptCheckOutcome[]): ScriptCheckRecord {
  return { module, attempt: 1, response: null, counts: [], scripts: [], outcomes };
}

const records: ScriptCheckRecord[] = [
  record("CP-1", [
    outcome("agreed", "`T2.1`", "Net debt"),
    outcome("agreed", "`T2.1`", "Net debt"),
    outcome("disagreed", "`T2.1`", "Net debt"),
    outcome("agreed", "`T2.1`", "Net debt"),
    outcome("not checked", "## T3.4", "all"),
    outcome("weird-status", null, null),
  ]),
  record("CP-2", [
    outcome("agreed", "T2.1", "Net debt"),
    outcome("contradicted", "T3.4", "", "R9"),
  ]),
];

afterEach(cleanup);

/** The cell of the row named `label` under the column named `column`. */
function cell(label: string, column: string) {
  const table = screen.getByRole("table");
  const headers = within(table).getAllByRole("columnheader");
  const index = headers.findIndex((header) => within(header).queryByRole("link", { name: column }));
  if (index < 0) throw new Error(`no column ${column}`);
  const row = within(table).getByRole("rowheader", { name: label }).closest("tr");
  if (!row) throw new Error(`no row ${label}`);
  const found = within(row).getAllByRole("cell")[index - 1];
  if (!found) throw new Error(`no cell at ${label} / ${column}`);
  return found;
}

it("merges identical labels into one row and labels the rest by register and figure", () => {
  render(<ScriptCheckMatrix records={records} />);
  const labels = screen.getAllByRole("rowheader").map((header) => header.textContent);
  expect(labels).toEqual(["T2.1 · Net debt", "T3.4", "Check", "T3.4 · R9"]);
});

it("strips markdown marks from register labels", () => {
  render(<ScriptCheckMatrix records={records} />);
  expect(screen.getByRole("rowheader", { name: "T2.1 · Net debt" })).toBeInTheDocument();
  expect(screen.getByRole("rowheader", { name: "T3.4" })).toBeInTheDocument();
  expect(screen.queryByText(/`/)).toBeNull();
  expect(screen.queryByText(/##/)).toBeNull();
});

it("shows each status word once with a count only when several outcomes share it", () => {
  render(<ScriptCheckMatrix records={records} />);
  const mixed = cell("T2.1 · Net debt", "Financial foundation");
  expect(within(mixed).getByText("3 agreed")).toBeInTheDocument();
  expect(within(mixed).getByText("disagreed")).toBeInTheDocument();
  expect(within(mixed).queryByText("1 disagreed")).toBeNull();
  const single = cell("T2.1 · Net debt", "Fundamental credit");
  expect(within(single).getByText("agreed")).toBeInTheDocument();
});

it("draws a dash with hidden text where a module recorded no such check", () => {
  render(<ScriptCheckMatrix records={records} />);
  const empty = cell("T3.4", "Fundamental credit");
  expect(empty).not.toHaveTextContent("agreed");
  expect(empty).toHaveTextContent("—");
  const hidden = within(empty).getByText("no check recorded");
  expect(hidden).toHaveClass("sr-only");
});

it("links each column header to that module's checks, named by the module", () => {
  render(<ScriptCheckMatrix records={records} />);
  const link = screen.getByRole("link", { name: "Financial foundation" });
  expect(link).toHaveAttribute("href", "#evidence/checks/CP-1");
  expect(within(link).getByText("CP-1")).toHaveClass("font-mono");
  expect(screen.getByRole("link", { name: "Fundamental credit" })).toHaveAttribute(
    "href",
    "#evidence/checks/CP-2",
  );
});

it("shows only the chosen module's column and counts only its outcomes", () => {
  render(<ScriptCheckMatrix records={records} module="CP-2" />);
  expect(screen.getAllByRole("columnheader")).toHaveLength(2);
  expect(screen.getByRole("link", { name: "Fundamental credit" })).toBeInTheDocument();
  expect(screen.queryByRole("link", { name: "Financial foundation" })).toBeNull();
  expect(screen.getAllByRole("rowheader").map((header) => header.textContent)).toEqual([
    "T2.1 · Net debt",
    "T3.4 · R9",
  ]);
  const strip = screen.getByLabelText("Script check outcomes");
  expect(strip.textContent).not.toContain("disagreed");
});

it("keeps an unknown status word literal and quiet", () => {
  render(<ScriptCheckMatrix records={records} />);
  const unknown = cell("Check", "Financial foundation");
  const word = within(unknown).getByText("weird-status");
  expect(word).toBeInTheDocument();
  expect(word.closest("[class]")?.className).toMatch(/neutral/);
  expect(word.closest("[class]")?.className).not.toMatch(/yellow|brand/);
});

it("colours agreed as success and disagreed or contradicted as warning", () => {
  render(<ScriptCheckMatrix records={records} />);
  const agreed = within(cell("T2.1 · Net debt", "Fundamental credit")).getByText("agreed");
  expect(agreed.closest("[class]")?.className).toMatch(/brand/);
  const contradicted = within(cell("T3.4 · R9", "Fundamental credit")).getByText("contradicted");
  expect(contradicted.closest("[class]")?.className).toMatch(/yellow/);
});

it("counts every status in the strip exactly and orders them", () => {
  render(<ScriptCheckMatrix records={records} />);
  const strip = screen.getByLabelText("Script check outcomes");
  const labels = within(strip)
    .getAllByRole("term")
    .map((term) => term.textContent);
  const values = within(strip)
    .getAllByRole("definition")
    .map((value) => value.textContent);
  expect(labels).toEqual(["agreed", "disagreed", "contradicted", "not checked", "weird-status"]);
  expect(values).toEqual(["4", "1", "1", "1", "1"]);
});

it("orders other statuses alphabetically after the known ones", () => {
  render(
    <ScriptCheckMatrix
      records={[
        record("CP-1", [
          outcome("zeta", "T1", null),
          outcome("alpha", "T1", null),
          outcome("missing", "T1", null),
        ]),
      ]}
    />,
  );
  const strip = screen.getByLabelText("Script check outcomes");
  expect(
    within(strip)
      .getAllByRole("term")
      .map((term) => term.textContent),
  ).toEqual(["missing", "alpha", "zeta"]);
});

it("lays the table in a labelled, focusable scroll region with sticky first column", () => {
  render(<ScriptCheckMatrix records={records} />);
  const region = screen.getByRole("region", { name: "Script checks by module" });
  expect(region).toHaveAttribute("tabindex", "0");
  expect(region).toHaveClass("overflow-auto");
  expect(within(region).getByRole("table")).toBeInTheDocument();
  expect(screen.getByRole("columnheader", { name: "Check" })).toHaveClass("sticky", "left-0");
});

it.each([[[]], [[record("CP-1", [])]], [[record("CP-1", [outcome("agreed", "T1", null)])]]])(
  "renders nothing when the chosen module holds no outcomes",
  (held) => {
    const { container } = render(<ScriptCheckMatrix records={held} module="CP-9" />);
    expect(container).toBeEmptyDOMElement();
  },
);

it("renders nothing when no record holds an outcome", () => {
  const { container } = render(<ScriptCheckMatrix records={[record("CP-1", [])]} />);
  expect(container).toBeEmptyDOMElement();
});
