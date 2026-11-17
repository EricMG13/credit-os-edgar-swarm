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

// A chart-gap reason is module-written text: delivery draws it whole, with only a module code
// named as the module (`readerText`). Nothing is removed from it, and a page citation stays.
const GAP_REASONS = [
  [
    "Not established: see Filing p.12 for the trigger text (CP-4).",
    "Not established: see Filing p.12 for the trigger text (Legal & covenants).",
  ],
  [
    "The 2027 to 2029 maturities are not stated; the company gives amounts for the next two years only (annual report p. 83), so the profile stops at 2026.",
    "The 2027 to 2029 maturities are not stated; the company gives amounts for the next two years only (annual report p. 83), so the profile stops at 2026.",
  ],
  [
    "Coverage fell 2 pp. 3 quarters in a row, so no trend is drawn.",
    "Coverage fell 2 pp. 3 quarters in a row, so no trend is drawn.",
  ],
  [
    "Not established: see Filing page 12 for the trigger text.",
    "Not established: see Filing page 12 for the trigger text.",
  ],
] as const;

it.each(GAP_REASONS)("draws the chart gap reason %s whole", (stored, drawn) => {
  const entry = chartEntry([{ title: "Rating trigger headroom", table: 41, gap: stored }]);
  render(<Forecast view={chartView(entry)} run={run} />);
  expect(screen.getByRole("note")).toHaveTextContent(drawn);
  expect(screen.getByRole("note").textContent).toBe(drawn);
  expect(screen.queryByText("See Evidence.")).toBeNull();
});

it("draws a withheld module's limitation whole as the reason of its chart", () => {
  const limitation =
    "No covenant document was supplied, so no test can be drawn; the only sight of the covenant is a summary on p. 4 of the annual report.";
  const entry = chartEntry([]);
  entry.output.state = { established: false, declared: null };
  entry.output.summary = { bottomLine: "", confidence: "", limitation, line: 5 };
  entry.output.charts = [{ title: "Rating trigger headroom", table: 41 }];
  render(<Forecast view={chartView(entry)} run={run} />);
  expect(screen.getByRole("note").textContent).toBe(limitation);
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
