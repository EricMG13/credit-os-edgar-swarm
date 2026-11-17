import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import type { OutputEntry, PublishedRun } from "../publishedReport";
import type { buildReportView } from "../reportView";
import { Forecast } from "./Forecast";

type View = ReturnType<typeof buildReportView>;
const run = { folder: "current" } as PublishedRun;

function chartEntry(
  chartGaps: { title: string; table: number; gap: string }[],
  issue?: string,
): OutputEntry {
  return {
    selected: true,
    output: {
      id: "legal",
      sha256: "d".repeat(64),
      module: "CP-4",
      label: "",
      href: "",
      state: { established: true, declared: null },
      charts: [],
      chartGaps,
      issue,
    },
    sections: [
      {
        heading: "Chart data: leverage",
        level: 3,
        line: 20,
        blocks: [{ type: "table", line: 21, headers: ["Period", "Debt"], rows: [] }],
      },
      {
        heading: "Gaps",
        level: 3,
        line: 40,
        blocks: [{ type: "text", line: 41, end: 41, text: "Recorded." }],
      },
    ],
  };
}

function chartView(entry: OutputEntry): View {
  return {
    catalogue: undefined,
    lead: undefined,
    entries: [entry],
    models: [],
    modules: [{ id: "CP-4", name: "Legal & covenants", state: "Delivered", outputs: [entry] }],
  };
}

it("draws a chart gap that cites a page as a pointer to Evidence, not as the cited sentence", () => {
  const entry = chartEntry([
    {
      title: "Rating trigger headroom",
      table: 41,
      gap: "Not established: see Filing p.12 for the trigger text (CP-4).",
    },
  ]);
  render(<Forecast view={chartView(entry)} run={run} />);
  expect(screen.getByText("See Evidence.")).toBeInTheDocument();
  expect(document.body.textContent).not.toMatch(/Filing p\.12|\bCP-/);
});

it("names a module by its name in a chart gap that cites no page", () => {
  const entry = chartEntry([
    { title: "Peer range", table: 42, gap: "No peer set was supplied (CP-1C)." },
  ]);
  render(<Forecast view={chartView(entry)} run={run} />);
  expect(screen.getByText("No peer set was supplied (Peer benchmark).")).toBeInTheDocument();
  expect(document.body.textContent).not.toMatch(/\bCP-/);
});

it("says why a chart was left out without describing the build", () => {
  const entry = chartEntry([], "Chart data: leverage is not in its fixed table");
  render(<Forecast view={chartView(entry)} run={run} />);
  expect(
    screen.getByText("The chart data did not fit the required table form, so no chart is drawn."),
  ).toBeInTheDocument();
  expect(document.body.textContent).not.toMatch(/Sent back|build/i);
});

it("labels the way to the forward credit evidence by the model, not by a hand-over", () => {
  const model = {
    id: "model",
    issuerKey: "issuer",
    runId: "run",
    runFolder: "current",
    href: "",
    download: "",
    sources: [],
    cashflow: {
      units: "USD millions",
      columns: [{ label: "FY2027E", group: "Base case" }],
      rows: [
        {
          label: "Revenue",
          band: "",
          total: false,
          cells: [{ status: "value", exact: "1", display: "1" }],
        },
      ],
    },
    register: { heading: "Forecast assumptions", headers: ["Item"], intro: "", rows: [["Debt"]] },
  };
  const view: View = {
    catalogue: undefined,
    lead: undefined,
    entries: [],
    modules: [],
    models: [model as unknown as View["models"][number]],
  };
  render(<Forecast view={view} run={run} />);
  expect(screen.getByText("Open the model evidence")).toBeInTheDocument();
  expect(document.body.textContent).not.toMatch(/handoff/i);
});
