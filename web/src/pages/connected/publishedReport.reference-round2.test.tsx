import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { RunContext } from "../library/parts/RunContext";
import { containsReference } from "./publishedReport";
import { FindingParagraph, PublishedTable } from "./ReportContent";
import { ForecastScope } from "./visuals/LegacyForecast";
import { chartTable } from "./visuals/visualData";

// Literal reader examples, chosen independently of the production patterns.
const ordinary = [
  "A gap remains between the Group of Seven (G7) economies.",
  "No series is available for the Group of Seven (G7) economies.",
  "The margin rose eleven pp. 3 quarters running.",
  "The margin rose twenty-one pp. 3 quarters running.",
  "The margin rose one hundred pp. 3 quarters running.",
  "A gap remains between the Group of Seven (G7).",
  "Thresholds are not comparable across the Group of Seven (G7).",
  "Leverage is 1.5x (G1).",
  "Let leverage (G1) equal 3.2x.",
  "A gap remains between the G20 economies (G20).",
  "A gap remains between the Group of Eight (G8) economies.",
  "A gap remains between the Group of Twenty-One (G21).",
  "Leverage (G1) = 3.2x.",
  "The margin rose seventy-three pp. 12 fiscal quarters running.",
];

const references = [
  "Lease detail not available (G12).",
  "Threshold unknown (G12).",
  "Threshold absent (G12).",
  "Lease detail pending (G12).",
  "(G12).",
  "(G12);",
  "See p. 1000 for the covenant.",
  "See pages 1024–1026 for the covenant.",
  "See page 2025 for the covenant.",
  "The covenant is on p. 1000.",
  "The trigger is on pp. 1024–1026.",
  "A gap remains between the Group of Seven (G7); threshold unknown (G12).",
  "Group of Seven demand is unknown (G12).",
  "Missing threshold at leverage 3.20x (G12).",
  "The trigger is on p. 10000.",
  "See pp. 3 quarters after the summary for the covenant.",
];

it.each(ordinary)("retains the ordinary chart qualification: %s", (text) => {
  expect(containsReference(text)).toBe(false);
  expect(chartTable(basisTable(text)).rows[0]?.cells).toEqual(["3.20", text]);
});

it.each(references)("keeps the actual chart citation in Evidence: %s", (text) => {
  expect(containsReference(text)).toBe(true);
  expect(chartTable(basisTable(text)).rows[0]?.cells).toEqual([
    "3.20",
    "Qualification recorded in Evidence.",
  ]);
  expect(chartTable({ ...basisTable(text), evidenceInDrawer: false }).rows[0]?.cells).toEqual([
    "3.20",
    text,
    "annual-report.pdf",
  ]);
});

function basisTable(basis: string) {
  return {
    line: 20,
    headers: ["Period", "Coverage", "Basis and limitation", "Source"],
    rows: [["FY2025", "3.20", basis, "annual-report.pdf"]],
    evidenceInDrawer: true,
  };
}

it.each(ordinary)("retains the full ordinary passage and its trace: %s", (text) => {
  render(
    <RunContext.Provider value={{ traces: { t: {} } as never, open: () => undefined }}>
      <FindingParagraph
        block={{ type: "text", line: 3, end: 3, text }}
        trace="t"
        href="#evidence/x-3"
      />
    </RunContext.Provider>,
  );
  expect(screen.getByText(text)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Show sources for this passage" })).toBeInTheDocument();
  expect(screen.queryByRole("link", { name: "Read this passage in Evidence" })).toBeNull();
});

it.each(references)("holds back the actual plain-table citation with its trace: %s", (text) => {
  render(
    <PublishedTable
      table={{
        type: "table",
        line: 10,
        headers: ["Item", "Note"],
        rows: [{ line: 12, cells: ["Coverage", text] }],
      }}
      href="#evidence/x-12"
      rowSource={(line) => <a href={`#trace-${String(line)}`}>Sources for Coverage</a>}
    />,
  );
  expect(screen.getByRole("link", { name: "In Evidence" })).toHaveAttribute(
    "href",
    "#evidence/x-12",
  );
  expect(screen.getByRole("link", { name: "Sources for Coverage" })).toBeInTheDocument();
  expect(document.body.textContent).not.toContain(text);
});

it("retains the ordinary model scope and holds its adjacent source-bearing sentence in the record", () => {
  render(
    <ForecastScope
      model={{
        cashflow: {
          notes: [
            "Base case is limited: A gap remains between the Group of Seven (G7) economies.",
            "Base case is limited: The margin rose eleven pp. 3 quarters running.",
            "Base case is limited: Threshold unknown (G12).",
            "Base case is limited: See p. 1000 for the covenant.",
          ],
        },
      }}
    />,
  );
  expect(
    screen.getByText(
      "Base case is limited: A gap remains between the Group of Seven (G7) economies.",
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByText("Base case is limited: The margin rose eleven pp. 3 quarters running."),
  ).toBeInTheDocument();
  expect(document.body.textContent).not.toContain("Threshold unknown (G12).");
  expect(document.body.textContent).not.toContain("See p. 1000 for the covenant.");
});
