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

// A chart-gap reason is module-written text. One that cites a page, or carries any other source
// reference, is held back on the Forecast surface (L16, AGENTS.md: source references only on Evidence
// and in the trace drawer): the panel states the gap in its standard form, "See Evidence." stands for
// the reason, and the figure's trace control reaches the stored reason unchanged. A reason with no
// reference is drawn whole, with only a module code named as the module (`readerText`).
const HELD_BACK = [
  "Not established: see Filing p.12 for the trigger text (CP-4).",
  "The 2027 to 2029 maturities are not stated; the company gives amounts for the next two years only (annual report p. 83), so the profile stops at 2026.",
  "Not established: see Filing page 12 for the trigger text.",
  "The trigger text is not stated in the summary; see the Filing, pages 12 to 14.",
  "The trigger text is cited only as pp. 12-14 of the Filing.",
  "Not established: the trigger is in NB-agreement.pdf.",
  "The trigger text is not stated; see p 12 of the Filing.",
  "The trigger text is cited only as pp 12 of the Filing.",
  "The trigger text is not stated; see pg. 12 of the Filing.",
  "The trigger text is cited at pg 12 of the Filing.",
  "The trigger text is not stated in the summary (p12).",
  "Page 7 of the Filing gives the trigger text.",
  "The maturities are in the annual report 2025 page 83, so the profile stops at 2026.",
  "The covenant is set out in the accounts at 31 December 2025 p. 12, not in the summary.",
] as const;

// The gap table's own line: the figure's trace control opens it in the Evidence drawer.
const GAP_LINE = `/report/current#evidence/legal~${"d".repeat(64)}-41`;

const DRAWN_WHOLE = [
  [
    "Coverage fell 2 pp. 3 quarters in a row, so no trend is drawn.",
    "Coverage fell 2 pp. 3 quarters in a row, so no trend is drawn.",
  ],
  [
    "Margin rose 150bp, 1.5 pp. 2 years running; leverage of 3.2x at FY2025 is the only point.",
    "Margin rose 150bp, 1.5 pp. 2 years running; leverage of 3.2x at FY2025 is the only point.",
  ],
  ["Coverage fell 1.5 pp, so no trend is drawn.", "Coverage fell 1.5 pp, so no trend is drawn."],
  [
    "Coverage fell 2 p.p. 3 quarters in a row; two pp. 3 quarters before that.",
    "Coverage fell 2 p.p. 3 quarters in a row; two pp. 3 quarters before that.",
  ],
  [
    "Rated by S&P. 2025 outlook stable; cut by S&P. 3 notches since.",
    "Rated by S&P. 2025 outlook stable; cut by S&P. 3 notches since.",
  ],
  [
    "The front page 2025 headline and the one-page 2026 outlook give no series.",
    "The front page 2025 headline and the one-page 2026 outlook give no series.",
  ],
  [
    "The homepage 2 years ago quoted 3% p.a. 5% later; app. 3 years of data.",
    "The homepage 2 years ago quoted 3% p.a. 5% later; app. 3 years of data.",
  ],
  [
    "No headroom series before 2024 was supplied (CP-4).",
    "No headroom series before 2024 was supplied (Legal & covenants).",
  ],
] as const;

it.each(HELD_BACK)("holds back the referencing chart gap reason %s as a stated gap", (stored) => {
  const entry = chartEntry([{ title: "Rating trigger headroom", table: 41, gap: stored }]);
  render(<Forecast view={chartView(entry)} run={run} />);
  expect(screen.getByRole("note").textContent).toBe("See Evidence.");
  expect(screen.getByText("Not established for this run")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Source table" })).toHaveAttribute("href", GAP_LINE);
  expect(document.body.textContent).not.toMatch(/\bp(?:p|g|age)?s?\.?\s*\d|\.pdf/i);
});

it.each(DRAWN_WHOLE)("draws the chart gap reason %s whole", (stored, drawn) => {
  const entry = chartEntry([{ title: "Rating trigger headroom", table: 41, gap: stored }]);
  render(<Forecast view={chartView(entry)} run={run} />);
  expect(screen.getByRole("note").textContent).toBe(drawn);
  expect(screen.getByText("Not established for this run")).toBeInTheDocument();
  expect(screen.queryByText("See Evidence.")).toBeNull();
});

it("holds back a withheld module's page-citing limitation and traces the figure to it", () => {
  const limitation =
    "No covenant document was supplied, so no test can be drawn; the only sight of the covenant is a summary on p. 4 of the annual report.";
  const entry = chartEntry([]);
  entry.output.state = { established: false, declared: null };
  entry.output.summary = { bottomLine: "", confidence: "", limitation, line: 5 };
  entry.output.charts = [{ title: "Rating trigger headroom", table: 21 }];
  entry.sections.unshift({
    heading: "Reader summary",
    level: 2,
    line: 3,
    blocks: [{ type: "text", line: 5, end: 5, text: limitation }],
  });
  render(<Forecast view={chartView(entry)} run={run} />);
  expect(screen.getByRole("note").textContent).toBe("See Evidence.");
  expect(screen.getByText("Not established for this run")).toBeInTheDocument();
  // The trace control opens the limitation's own line, not the chart's data table (line 21).
  expect(screen.getByRole("link", { name: "Source table" })).toHaveAttribute(
    "href",
    `/report/current#evidence/legal~${"d".repeat(64)}-5`,
  );
});

it("draws a withheld module's limitation whole when it cites no page", () => {
  const limitation = "No covenant document was supplied, so no test can be drawn.";
  const entry = chartEntry([]);
  entry.output.state = { established: false, declared: null };
  entry.output.summary = { bottomLine: "", confidence: "", limitation, line: 5 };
  entry.output.charts = [{ title: "Rating trigger headroom", table: 41 }];
  render(<Forecast view={chartView(entry)} run={run} />);
  expect(screen.getByRole("note").textContent).toBe(limitation);
  expect(screen.getByRole("link", { name: "Source table" })).toHaveAttribute("href", GAP_LINE);
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
  expect(screen.getByText("View model records in Evidence")).toBeInTheDocument();
  expect(document.body.textContent).not.toMatch(/handoff/i);
});
