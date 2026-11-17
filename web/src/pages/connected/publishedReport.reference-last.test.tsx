import { render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import { RunContext } from "../library/parts/RunContext";
import { containsReference } from "./publishedReport";
import { FindingParagraph, PublishedTable } from "./ReportContent";
import { ForecastScope } from "./visuals/LegacyForecast";
import { chartTable } from "./visuals/visualData";

// Independent literal passages: adding duration modifiers does not turn a quantity into a page.
const ordinary = [
  "The margin rose eleven pp. 3 consecutive fiscal quarters running.",
  "The margin rose twenty-one pp. 3 consecutive fiscal quarters running.",
  "The margin rose one hundred pp. 3 consecutive full fiscal quarters running.",
  "Coverage fell three pp. 4 consecutive year-end reporting quarters in a row.",
  "The margin rose seventy-three pp. 12 consecutive full fiscal months after refinancing.",
  "The margin rose 1.5 pp. 3 consecutive fiscal quarters running.",
];

const references = [
  "pp. 3",
  "p. 3",
  "pages 3",
  "p1000",
  "pp. 3 quarters after the summary give the covenant.",
  "Annual report, pp. 3 fiscal quarters after the summary give the covenant.",
  "The report (pp. 3 fiscal quarters after the summary) gives the covenant.",
  "pp. 3 consecutive fiscal quarters after the summary give the covenant.",
  "Annual report, pp. 3 consecutive fiscal quarters after the summary give the covenant.",
  "The report (pp. 3 consecutive fiscal quarters after the summary) gives the covenant.",
  "See pp. 3 consecutive fiscal quarters after the summary for the covenant.",
  "The covenant is at pp. 3 consecutive fiscal quarters after the summary.",
  "The covenant is on pp. 3 consecutive fiscal quarters after the summary.",
  "The trigger is cited as pp. 3 consecutive fiscal quarters after the summary.",
  "The report cites pp. 3; consecutive fiscal quarters remain unavailable.",
  "The report cites pp. 3: consecutive fiscal quarters remain unavailable.",
  "The margin rose eleven pp. 3 consecutive fiscal quarters running; see p. 1000.",
  "The margin rose eleven pp. 3 consecutive fiscal quarters running; annual-report.pdf.",
  "The margin rose eleven pp. 3 consecutive fiscal quarters running; threshold unknown (G12).",
  "The margin rose eleven pp. 3 consecutive fiscal quarters running; (G12).",
  "The margin rose eleven pp. 3 consecutive fiscal quarters running; run 20261117-094923-01.",
];

function basisTable(text: string) {
  return {
    line: 20,
    headers: ["Period", "Coverage", "Basis and limitation", "Source"],
    rows: [["FY2025", "3.20", text, "annual-report.pdf"]],
    evidenceInDrawer: true,
  };
}

it.each([
  ...ordinary.map((text) => ({ text, reference: false })),
  ...references.map((text) => ({ text, reference: true })),
])("keeps the exact phrase boundary across actual readers: $text", ({ text, reference }) => {
  expect(containsReference(text)).toBe(reference);
  expect(chartTable(basisTable(text)).rows[0]?.cells).toEqual([
    "3.20",
    reference ? "Qualification recorded in Evidence." : text,
  ]);
  expect(chartTable({ ...basisTable(text), evidenceInDrawer: false }).rows[0]?.cells).toEqual([
    "3.20",
    text,
    "annual-report.pdf",
  ]);
  const table = {
    type: "table" as const,
    line: 10,
    headers: ["Item", "Note"],
    rows: [{ line: 12, cells: ["Coverage", text] }],
  };
  const scopeText = `Base case is limited: ${text}`;
  render(
    <>
      <div data-testid="finding">
        <RunContext.Provider value={{ traces: { t: {} } as never, open: () => undefined }}>
          <FindingParagraph
            block={{ type: "text", line: 3, end: 3, text }}
            trace="t"
            href="#evidence/x-3"
          />
        </RunContext.Provider>
      </div>
      <div data-testid="table">
        <PublishedTable
          table={table}
          href="#evidence/x-12"
          rowSource={() => <a href="#trace-12">Sources for Coverage</a>}
        />
      </div>
      <div data-testid="scope">
        <ForecastScope model={{ cashflow: { notes: [scopeText] } }} />
      </div>
      <div data-testid="evidence">
        <PublishedTable table={table} evidence />
      </div>
    </>,
  );
  const finding = within(screen.getByTestId("finding"));
  const plainTable = within(screen.getByTestId("table"));
  const scope = within(screen.getByTestId("scope"));
  expect(
    finding.getByRole("button", { name: "Show sources for this passage" }),
  ).toBeInTheDocument();
  expect(plainTable.getByRole("link", { name: "Sources for Coverage" })).toBeInTheDocument();
  expect(within(screen.getByTestId("evidence")).getByText(text)).toBeInTheDocument();
  if (reference) {
    expect(finding.queryByText(text)).toBeNull();
    expect(finding.getByRole("link", { name: "Read this passage in Evidence" })).toHaveAttribute(
      "href",
      "#evidence/x-3",
    );
    expect(plainTable.queryByText(text)).toBeNull();
    expect(plainTable.getByRole("link", { name: "In Evidence" })).toHaveAttribute(
      "href",
      "#evidence/x-12",
    );
    expect(scope.queryByText(scopeText)).toBeNull();
  } else {
    expect(finding.getByText(text)).toBeInTheDocument();
    expect(plainTable.getByText(text)).toBeInTheDocument();
    expect(scope.getByText(scopeText)).toBeInTheDocument();
  }
});
