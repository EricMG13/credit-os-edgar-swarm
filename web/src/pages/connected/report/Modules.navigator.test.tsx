import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry, PublishedRun, Snapshot } from "../publishedReport";
import type { buildReportView } from "../reportView";
import { Modules } from "./Modules";

type View = ReturnType<typeof buildReportView>;
type Sections = OutputEntry["sections"];

const text = (heading: string, line: number): Sections[number] => ({
  heading,
  level: 3,
  line,
  blocks: [{ type: "text", line: line + 1, end: line + 1, text: `${heading} says so.` }],
});

const FINANCIALS: Sections[number] = {
  heading: "Financials and credit metrics",
  level: 3,
  line: 10,
  blocks: [
    {
      type: "table",
      headers: ["Metric", "FY2026", "Unit"],
      line: 11,
      rows: [{ line: 12, cells: ["Net debt", "100", "US$m"] }],
    },
  ],
};

function renderModules(sections: Sections) {
  const entry: OutputEntry = {
    selected: true,
    output: { id: "a", module: "CP-1", label: "a", href: "", sha256: "a".repeat(64) },
    sections: [{ heading: "Findings", level: 2, line: 1, blocks: [] }, ...sections],
  };
  const view: View = {
    entries: [entry],
    modules: [
      { id: "CP-2", name: "Credit analysis", state: "Delivered", outputs: [] },
      { id: "CP-1", name: "Financial foundation", state: "Delivered", outputs: [entry] },
    ],
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

const onThisPage = () =>
  within(screen.getByRole("list", { name: "On this page" })).getAllByRole("button");

afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/");
});

it("names the first table section by its own title when the module wrote no Key findings", () => {
  renderModules([text("Bottom line", 4), FINANCIALS]);
  const labels = onThisPage().map((button) => button.textContent);
  expect(labels).toContain("Financials and credit metrics");
  expect(labels).not.toContain("Key findings");
});

it("keeps the Key findings entry on a module that wrote them", () => {
  renderModules([text("Bottom line", 4), text("Key findings", 6), FINANCIALS]);
  const labels = onThisPage().map((button) => button.textContent);
  expect(labels).toContain("Key findings");
  expect(labels).not.toContain("Financials and credit metrics");
});
