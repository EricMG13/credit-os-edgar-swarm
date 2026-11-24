import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
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

const LEVERAGE: Sections[number] = {
  heading: "Leverage",
  level: 3,
  line: 29,
  blocks: [
    {
      type: "table",
      headers: ["Year", "Leverage"],
      line: 30,
      rows: [{ line: 31, cells: ["2026", "4.1x"] }],
    },
  ],
};

const TRANSMISSION: Sections[number] = {
  heading: "Transmission",
  level: 3,
  line: 39,
  blocks: [
    {
      type: "table",
      headers: ["From", "Relationship", "Edge type", "To", "Evidence"],
      line: 40,
      rows: [{ line: 41, cells: ["A", "Owns", "Ownership", "B", "Source 1"] }],
    },
  ],
};

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
      charts: [{ title: "Leverage", table: 30, kind: "periods" }],
      maps: [{ name: "credit-risk transmission", table: 40 }],
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

/** The names of the page's blocks in the order they are drawn: header, figures, findings, limitations. */
function drawn() {
  const marks = [...document.querySelectorAll("h2, h3, section[aria-label]")];
  const names = marks.map((node) => node.getAttribute("aria-label") ?? node.textContent);
  // A tile names its region and its heading alike: each block is listed once, where it first appears.
  const unique = names.filter((name, at) => names.indexOf(name) === at);
  return unique.filter((name) =>
    [
      "Credit analysis",
      "credit-risk transmission",
      "Key findings",
      CONTRARY,
      "Limitations of this module",
    ].includes(name),
  );
}

afterEach(cleanup);

it("draws the module's figures directly under the header, before the findings and Limitations", () => {
  renderModule([
    passage("Limitations", 2),
    passage("Bottom line", 4),
    passage("Key findings", 6),
    passage(CONTRARY, 8),
    TRANSMISSION,
  ]);
  expect(drawn()).toEqual([
    "Credit analysis",
    "credit-risk transmission",
    "Key findings",
    CONTRARY,
    "Limitations of this module",
  ]);
});

it("draws the Limitations gap last when the module wrote none", () => {
  renderModule([passage("Bottom line", 4), passage("Key findings", 6), passage(CONTRARY, 8)]);
  expect(drawn()).toEqual([
    "Credit analysis",
    "Key findings",
    CONTRARY,
    "Limitations of this module",
  ]);
  expect(screen.getByRole("region", { name: "Limitations of this module" })).toHaveTextContent(
    "Not established for this run",
  );
});

it("draws only the header and the records when only the bottom line is owed", () => {
  renderModule([passage("Bottom line", 4), FINANCIALS], "CP-1");
  expect(drawn()).toEqual(["Credit analysis"]);
  expect(screen.queryByRole("region", { name: "Key findings" })).toBeNull();
  // The table is not in the flow: it is reachable in the records region, after the header.
  expect(screen.queryByRole("heading", { name: "Financials and credit metrics" })).toBeNull();
  const header = screen.getByRole("region", { name: "Credit analysis" });
  const records = screen.getByRole("region", { name: "Statements and records" });
  expect(header.compareDocumentPosition(records)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  fireEvent.click(within(records).getByRole("button", { name: "Show records" }));
  expect(
    within(records).getByRole("heading", { name: "Financials and credit metrics" }),
  ).toBeInTheDocument();
});

it("still draws the header and the way to Evidence when the handoff has no sections", () => {
  renderModule([]);
  expect(screen.getByRole("region", { name: "Credit analysis" })).toBeInTheDocument();
  expect(screen.getByText(/no findings in this report format/)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Open Evidence" })).toBeInTheDocument();
  expect(screen.queryByRole("region", { name: "Statements and records" })).toBeNull();
});

it("draws no chart card for a chart descriptor and keeps its table under Chart tables", () => {
  renderModule([
    passage("Bottom line", 4),
    passage("Key findings", 6),
    passage(CONTRARY, 8),
    passage("Limitations", 10),
    LEVERAGE,
  ]);
  expect(screen.queryByRole("heading", { name: "Leverage" })).toBeNull();
  // The navigator lists the page's sections, never a chart that is not drawn.
  const sections = within(screen.getByRole("list", { name: "On this page" }));
  expect(sections.queryByRole("button", { name: "Leverage" })).toBeNull();
  const records = within(screen.getByRole("region", { name: "Statements and records" }));
  fireEvent.click(records.getByRole("button", { name: "Show records" }));
  const kinds = within(records.getByRole("group", { name: "Record kind" }));
  fireEvent.click(kinds.getByRole("button", { name: /^Chart tables/ }));
  expect(records.getByRole("heading", { name: "Leverage" })).toBeInTheDocument();
  expect(records.getByText("4.1x")).toBeInTheDocument();
});
