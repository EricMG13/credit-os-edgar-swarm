import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import type { OutputEntry, PublishedRun } from "../publishedReport";
import type { buildReportView } from "../reportView";
import { Forecast } from "./Forecast";

type View = ReturnType<typeof buildReportView>;

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
      sha256: "d".repeat(64),
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
    `/report/current#evidence/Debt%20maturities~${"d".repeat(64)}-21`,
  );
  fireEvent.click(figure.getByRole("radio", { name: "Table" }));
  expect(figure.getByRole("cell", { name: "0.00" })).toBeInTheDocument();
  expect(figure.getByRole("cell", { name: "Not supplied: schedule ends" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Financial foundation" })).toHaveAttribute(
    "href",
    "#modules/CP-1",
  );
  expect(screen.getAllByText("No dated proposal was evaluated").length).toBeGreaterThanOrEqual(2);
  expect(screen.getByText("Module not assessable.")).toBeInTheDocument();
  expect(screen.queryByRole("figure", { name: "Liquidity bridge" })).toBeNull();
  expect(screen.queryByText("237")).toBeNull();
  expect(screen.queryByText("Retained maturity schedule")).toBeNull();
  expect(screen.queryByText("Issuer dates")).toBeNull();
  expect(screen.queryByText("Operating model")).toBeNull();
});

it("spells out a ratio chart caption while retaining its stored x unit", () => {
  const ratio = entry("CP-2G", "Interest cover", { value: "3.10" });
  const descriptor = ratio.output.charts?.[0];
  const table = ratio.sections[0]?.blocks[0];
  if (!descriptor || table?.type !== "table") throw new Error("Missing ratio fixture");
  descriptor.unit = "x";
  table.headers[1] = "Interest cover";
  for (const row of table.rows) row.cells[2] = "x";
  const view: View = {
    catalogue: undefined,
    lead: undefined,
    entries: [ratio],
    models: [],
    modules: [{ id: "CP-2G", name: "Forward credit model", state: "Delivered", outputs: [ratio] }],
  };
  render(<Forecast view={view} run={run} />);
  expect(
    within(screen.getByRole("figure", { name: "Interest cover" })).getByText("x (times)"),
  ).toBeInTheDocument();
  expect(descriptor.unit).toBe("x");
  expect(table.rows[0]?.cells[2]).toBe("x");
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
  expect(
    screen.getByText("The chart data did not fit the required table form, so no chart is drawn."),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Source table" })).toHaveAttribute(
    "href",
    `/report/current#evidence/Covenants~${"d".repeat(64)}-21`,
  );
  expect(screen.queryByRole("figure")).toBeNull();
  expect(screen.queryByText("725")).toBeNull();
});

it("provides local section jumps only for visible Forecast content", () => {
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
      columns: [
        { label: "FY2027E", group: "Base case" },
        { label: "FY2028E", group: "Base case" },
        { label: "FY2027E", group: "Downside case" },
        { label: "FY2028E", group: "Downside case" },
      ],
      rows: [
        {
          label: "Cash proxy (not issuer free cash flow)",
          band: "Cash",
          total: true,
          cells: [
            { status: "value", exact: "10", display: "10" },
            { status: "value", exact: "12", display: "12" },
            { status: "value", exact: "5", display: "5" },
            { status: "value", exact: "6", display: "6" },
          ],
        },
      ],
    },
    register: {
      heading: "Forecast assumptions",
      headers: ["Item"],
      intro: "Recorded assumption.",
      rows: [["Debt"]],
    },
  };
  const view: View = {
    catalogue: undefined,
    lead: undefined,
    entries: [],
    modules: [],
    models: [model as unknown as View["models"][number]],
  };
  render(<Forecast view={view} run={run} />);
  const options = within(screen.getByLabelText("Jump to section"));
  expect(options.getByRole("option", { name: "Cases" })).toHaveValue("forecast-cases");
  expect(options.getByRole("option", { name: "Cash flow model" })).toHaveValue("forecast-model");
  expect(options.getByRole("option", { name: "Assumptions" })).toHaveValue("forecast-assumptions");
  expect(options.getByRole("option", { name: "Run charts" })).toHaveValue("forecast-run-charts");

  const targets = new Map<string, ReturnType<typeof vi.fn>>();
  for (const id of [
    "forecast-cases",
    "forecast-model",
    "forecast-assumptions",
    "forecast-run-charts",
  ]) {
    const target = document.getElementById(id);
    if (!target) throw new Error(`Missing Forecast section target: ${id}`);
    const scrollIntoView = vi.fn();
    target.scrollIntoView = scrollIntoView;
    targets.set(id, scrollIntoView);
  }
  fireEvent.change(screen.getByLabelText("Jump to section"), {
    target: { value: "forecast-model" },
  });
  expect(document.activeElement).toBe(document.getElementById("forecast-model"));
  expect(targets.get("forecast-model")).toHaveBeenCalledWith({ block: "start" });
  expect(screen.getByLabelText("Jump to section")).toHaveValue("");
  expect(window.location.hash).toBe("");
});

it("omits section jumps when those Forecast sections are not present", () => {
  const view: View = {
    catalogue: undefined,
    lead: undefined,
    entries: [],
    modules: [],
    models: [],
  };
  render(<Forecast view={view} run={run} />);
  expect(screen.queryByRole("navigation", { name: "Forecast sections" })).toBeNull();
  expect(screen.queryByLabelText("Jump to section")).toBeNull();
  expect(document.getElementById("forecast-cases")).toBeNull();
  expect(document.getElementById("forecast-model")).toBeNull();
  expect(document.getElementById("forecast-assumptions")).toBeNull();
  expect(document.getElementById("forecast-run-charts")).not.toBeNull();
});
