import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import type { OutputEntry, PublishedRun } from "../publishedReport";
import type { buildReportView } from "../reportView";
import { Forecast } from "./Forecast";

const run = { folder: "current" } as PublishedRun;

function entry(
  module: string,
  title: string,
  options: { selected?: boolean; established?: boolean; value?: string } = {},
): OutputEntry {
  const { selected = true, established = true, value = "0.00" } = options;
  return {
    selected,
    output: {
      id: title,
      sha256: title,
      module,
      label: "",
      href: "",
      state: { established, declared: null },
      charts: [{ title, table: 21, columns: [1], unit: "US$m" }],
      chartGaps: [{ title: "Recorded gap", table: 30, gap: "No dated proposal was evaluated" }],
      events: [{ lane: "Issuer dates", table: 21 }],
      maps: [{ name: "Operating model", table: 21 }],
    },
    sections: [
      {
        heading: "Chart data: figures",
        level: 3,
        line: 20,
        blocks: [
          {
            type: "table",
            line: 21,
            headers: ["Period", "Debt", "Reporting unit", "Basis and limitation"],
            rows: [
              { line: 23, cells: ["FY2026", value, "US$m", "Fiscal year end."] },
              { line: 24, cells: ["FY2027", "Not supplied: schedule ends", "US$m", "Filed."] },
            ],
          },
          { type: "text", line: 30, end: 30, text: "No dated proposal was evaluated" },
        ],
      },
    ],
  };
}

it("draws the designated run figure with a same-output trace even when no model was published", () => {
  const alternative = entry("CP-1", "Retained maturity schedule", { selected: false, value: "75" });
  const selected = entry("CP-1", "Debt maturities");
  const withheld = entry("CP-2D", "Liquidity bridge", { established: false, value: "237" });
  const view: ReturnType<typeof buildReportView> = {
    catalogue: undefined,
    lead: undefined,
    entries: [alternative, selected, withheld],
    models: [],
    modules: [
      {
        id: "CP-1",
        name: "Financial foundation",
        state: "Delivered",
        outputs: [alternative, selected],
      },
      { id: "CP-2D", name: "Liquidity", state: "Not assessable", outputs: [withheld] },
    ],
  };
  render(<Forecast view={view} run={run} />);
  expect(screen.getByText(/No forecast model was published/)).toBeInTheDocument();
  const figure = within(screen.getByRole("figure", { name: "Debt maturities" }));
  expect(figure.getByRole("link", { name: "Source table" })).toHaveAttribute(
    "href",
    "/report/current#evidence/1-21",
  );
  fireEvent.click(figure.getByRole("radio", { name: "Table" }));
  expect(figure.getByRole("cell", { name: "0.00" })).toBeInTheDocument();
  expect(figure.getByRole("cell", { name: "Not supplied: schedule ends" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Financial foundation" })).toHaveAttribute(
    "href",
    "#modules/CP-1",
  );
  expect(screen.getAllByText("No dated proposal was evaluated")).toHaveLength(2);
  expect(screen.getByText("Module not assessable.")).toBeInTheDocument();
  expect(screen.queryByRole("figure", { name: "Liquidity bridge" })).toBeNull();
  expect(screen.queryByText("237")).toBeNull();
  expect(screen.queryByText("Retained maturity schedule")).toBeNull();
  expect(screen.queryByText("Issuer dates")).toBeNull();
  expect(screen.queryByText("Operating model")).toBeNull();
});

it("shows the recorded build rejection and keeps its raw table in Evidence", () => {
  const returned = entry("CP-4", "Covenants", { value: "725" });
  returned.output.charts = [];
  returned.output.chartGaps = [];
  returned.output.issue =
    "Events: legal is not in its fixed table; Chart data: figures is not in its fixed table";
  const view: ReturnType<typeof buildReportView> = {
    catalogue: undefined,
    lead: undefined,
    entries: [returned],
    models: [],
    modules: [{ id: "CP-4", name: "Legal terms", state: "Delivered", outputs: [returned] }],
  };
  render(<Forecast view={view} run={run} />);
  expect(screen.getByRole("heading", { name: "Figures" })).toBeInTheDocument();
  expect(screen.getByText("Sent back by the build.")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Source table" })).toHaveAttribute(
    "href",
    "/report/current#evidence/0-21",
  );
  expect(screen.queryByRole("figure")).toBeNull();
  expect(screen.queryByText("725")).toBeNull();
});
