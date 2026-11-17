import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry, PublishedRun, Snapshot } from "../publishedReport";
import type { buildReportView } from "../reportView";
import { Modules } from "./Modules";

type View = ReturnType<typeof buildReportView>;
type Sections = OutputEntry["sections"];

const CONTRARY = "Contrary evidence and what would change the view";

const passage = (heading: string, line: number): Sections[number] => ({
  heading,
  level: 3,
  line,
  blocks: [{ type: "text", line: line + 1, end: line + 1, text: `${heading} says so.` }],
});

const FINANCIALS: Sections[number] = {
  heading: "Financials and credit metrics",
  level: 3,
  line: 20,
  blocks: [
    {
      type: "table",
      headers: ["Metric", "FY2026", "Unit"],
      line: 21,
      rows: [{ line: 22, cells: ["Net debt", "100", "US$m"] }],
    },
  ],
};

function renderModule(sections: Sections, module = "CP-2") {
  const entry: OutputEntry = {
    selected: true,
    output: {
      id: "a",
      module,
      label: "a",
      href: "",
      sha256: "a".repeat(64),
      charts: [{ title: "Leverage", table: 99, kind: "periods" }],
    },
    sections: [{ heading: "Findings", level: 2, line: 1, blocks: [] }, ...sections],
  };
  const view: View = {
    entries: [entry],
    modules: [{ id: module, name: "Credit analysis", state: "Delivered", outputs: [entry] }],
    catalogue: undefined,
    lead: undefined,
    models: [],
  };
  return render(
    <Modules
      view={view}
      run={{ folder: "case", issuer: "Issuer", asOf: "2026-10-31" } as PublishedRun}
      snapshot={{ chips: {} } as Snapshot}
    />,
  );
}

/** The reader's blocks in the order they are drawn: headings, the bottom-line band and the figures. */
function drawn() {
  const figures = document.getElementById("module-figures");
  if (!figures) throw new Error("the figures block is missing");
  const marks = [...document.querySelectorAll("h2, h3, section[aria-label], #module-figures")];
  const names = marks.map((node) =>
    node === figures ? "Figures" : (node.getAttribute("aria-label") ?? node.textContent),
  );
  return names.filter((name) =>
    ["Bottom line", "Figures", "Key findings", CONTRARY, "Limitations"].includes(name),
  );
}

afterEach(cleanup);

it("draws the figures after the prose passages and before Limitations", () => {
  renderModule([
    passage("Limitations", 2),
    passage("Bottom line", 4),
    passage("Key findings", 6),
    passage(CONTRARY, 8),
  ]);
  expect(drawn()).toEqual(["Bottom line", "Key findings", CONTRARY, "Figures", "Limitations"]);
});

it("draws the figures before the Limitations gap when the module wrote none", () => {
  renderModule([passage("Bottom line", 4), passage("Key findings", 6), passage(CONTRARY, 8)]);
  expect(drawn()).toEqual(["Bottom line", "Key findings", CONTRARY, "Figures", "Limitations"]);
});

it("draws the figures ahead of the other sections when only the bottom line is owed", () => {
  renderModule([passage("Bottom line", 4), FINANCIALS], "CP-1");
  const names = drawn();
  expect(names).toEqual(["Bottom line", "Figures"]);
  const figures = document.getElementById("module-figures");
  const table = screen.getByRole("heading", { name: "Financials and credit metrics" });
  expect(figures?.compareDocumentPosition(table)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
});

it("still draws the figures when the handoff has no sections", () => {
  renderModule([]);
  expect(screen.getByText(/no findings in this report format/)).toBeInTheDocument();
  expect(document.getElementById("module-figures")).not.toBeNull();
});

it("lists Figures and records in On this page where the page draws them", () => {
  renderModule([
    passage("Bottom line", 4),
    passage("Key findings", 6),
    passage(CONTRARY, 8),
    passage("Limitations", 10),
  ]);
  const labels = within(screen.getByRole("list", { name: "On this page" }))
    .getAllByRole("button")
    .map((button) => button.textContent);
  expect(labels).toEqual([
    "Bottom line",
    "Key findings",
    CONTRARY,
    "Figures and records",
    "Limitations",
  ]);
});
