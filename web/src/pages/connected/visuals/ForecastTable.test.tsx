import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import { ForecastTable } from "./ForecastTable";
import type { Grid } from "./LegacyForecast";

const period =
  "Base period is the twelve months to 30 June 2026; Financial foundation prints these twelve-month figures in the H1 2026 column of its credit-metrics table.";
const interest =
  "Base interest is cash interest paid on debt only (USD 776 million); forecast interest_rate is all-in and includes VICI and GLPI cash rent recorded as interest, so forecast interest is not comparable with the base-period cell and coverage on forecast interest is all-in cover.";
function fixture(): Grid {
  return {
    columns: [
      { label: "YTD (H1 2026)", group: "Year to date", start: "2026-01-01", end: "2026-06-30" },
      { label: "FY2027E", group: "Base case", start: "2027-01-01", end: "2027-12-31" },
    ],
    rows: [
      {
        label: "Revenue",
        band: "Operating",
        total: false,
        cells: [
          { status: "value", exact: "11648", display: "11,648" },
          { status: "value", exact: "11812.2368", display: "11,812.24" },
        ],
      },
      {
        label: "Interest",
        band: "Cash",
        total: false,
        cells: [
          { status: "value", exact: "776", display: "776" },
          { status: "value", exact: "2141", display: "2,141" },
        ],
      },
      {
        label: "Zero cash",
        band: "Cash",
        total: false,
        cells: [
          { status: "value", exact: "0", display: "0.00" },
          { status: "value", exact: "0", display: "0.00" },
        ],
      },
      {
        label: "Gross profit",
        band: "Operating",
        total: false,
        cells: [
          {
            status: "na",
            exact: null,
            display: "n.a.",
            reason: "The input does not record gross profit.",
          },
          { status: "nm", exact: null, display: "n.m.", reason: "This line is not projected." },
        ],
      },
    ],
  };
}

it("keeps exact period labels, dates and values with the period and interest qualifications under the table", () => {
  render(
    <ForecastTable
      grid={fixture()}
      title="Model"
      limits={[period, interest]}
      source={(name) => <a href="#inputs">{name} source</a>}
    />,
  );
  const header = screen.getByRole("columnheader", { name: "YTD (H1 2026)" });
  expect(header).toHaveAttribute("title", "2026-01-01 to 2026-06-30");
  expect(header).not.toHaveTextContent(period);
  expect(screen.getByRole("list", { name: "Period qualifications" })).toHaveTextContent(period);
  const row = screen.getByRole("row", { name: /^Interest/ });
  expect(row).not.toHaveTextContent(interest);
  expect(screen.getByRole("list", { name: "Period qualifications" })).toHaveTextContent(interest);
  expect(within(row).getByRole("cell", { name: "776" })).toBeInTheDocument();
  expect(within(row).getByRole("cell", { name: "2,141" })).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: "11,812.24" })).toHaveAttribute("title", "11812.2368");
});

it("draws a period qualification once, under the table, not in a column header", () => {
  const grid = fixture();
  const second = grid.columns[1];
  if (!second) throw new Error("Missing fixture column");
  second.label = "YTD (FY2027)";
  render(
    <ForecastTable
      grid={grid}
      title="Model"
      limits={["Base period is FY2027; PQ-TEXT"]}
      source={(name) => <a href="#inputs">{name} source</a>}
    />,
  );
  for (const header of screen.getAllByRole("columnheader"))
    expect(header).not.toHaveTextContent("PQ-TEXT");
  const hits = screen.getAllByText(/PQ-TEXT/);
  expect(hits).toHaveLength(1);
  const item = hits[0]?.closest("li");
  expect(item).toHaveTextContent("YTD (FY2027)");
  expect(item).toContainElement(screen.getByRole("link", { name: /source$/ }));
  const table = screen.getByRole("table");
  expect(
    table.compareDocumentPosition(item as Node) & Node.DOCUMENT_POSITION_FOLLOWING,
  ).toBeTruthy();
});

it("keeps zero visible and restores each unavailable row and its exact reasons on request", () => {
  render(<ForecastTable grid={fixture()} title="Model" limits={[]} />);
  expect(screen.getAllByRole("cell", { name: "0.00" })).toHaveLength(2);
  expect(screen.queryByRole("rowheader", { name: "Gross profit" })).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "Show 1 unavailable rows and reasons" }));
  expect(screen.getByRole("rowheader", { name: "Gross profit" })).toBeInTheDocument();
  expect(screen.getByText("The input does not record gross profit.")).toBeVisible();
  expect(screen.getByText("This line is not projected.")).toBeVisible();
  expect(screen.getByRole("button", { name: "Hide unavailable rows" })).toHaveAttribute(
    "aria-expanded",
    "true",
  );
});

it("retains qualifications at table level when the period association is ambiguous or absent", () => {
  const grid = fixture();
  const first = grid.columns[0];
  if (!first) throw new Error("Missing fixture column");
  grid.columns[1] = { ...first };
  render(<ForecastTable grid={grid} title="Model" limits={[period]} />);
  expect(screen.getByText("Base-period qualification")).toBeInTheDocument();
  expect(screen.getByText(period)).toBeInTheDocument();
  expect(screen.queryByText("Period qualification — recorded label retained")).toBeNull();
});

it("never hides an unknown cell state or a numeric operand even when its status says unavailable", () => {
  const grid = fixture();
  grid.rows = [
    {
      label: "Unknown state",
      band: "",
      total: false,
      cells: [
        { status: "unknown", display: "?" },
        { status: "unknown", display: "?" },
      ],
    },
    {
      label: "Operand present",
      band: "",
      total: false,
      cells: [
        { status: "na", exact: "0", display: "n.a." },
        { status: "nm", exact: null, display: "n.m." },
      ],
    },
  ];
  render(<ForecastTable grid={grid} title="Model" limits={[]} />);
  expect(screen.getByRole("rowheader", { name: "Unknown state" })).toBeInTheDocument();
  expect(screen.getByRole("rowheader", { name: "Operand present" })).toBeInTheDocument();
  expect(screen.queryByRole("button")).toBeNull();
});

it("does not bind a shortened period token to a longer recorded period", () => {
  const grid = fixture();
  const first = grid.columns[0];
  if (!first) throw new Error("Missing fixture column");
  first.label = "YTD (H1 202)";
  render(<ForecastTable grid={grid} title="Model" limits={[period]} />);
  expect(screen.getByText("Base-period qualification")).toBeInTheDocument();
  expect(screen.getByText(period)).toBeInTheDocument();
  expect(screen.queryByText("Period qualification — recorded label retained")).toBeNull();
});

it("shows an entirely unavailable table and every reason without requiring expansion", () => {
  const grid = fixture();
  grid.rows = grid.rows.filter((row) => row.label === "Gross profit");
  render(<ForecastTable grid={grid} title="Model" limits={[]} />);
  expect(screen.getByRole("rowheader", { name: "Gross profit" })).toBeInTheDocument();
  expect(screen.getByText("The input does not record gross profit.")).toBeVisible();
  expect(screen.getByText("This line is not projected.")).toBeVisible();
  expect(screen.queryByRole("button")).toBeNull();
});

it("collapses columns whose every cell is n.a. behind one disclosure and restores them on request", () => {
  const na = { status: "na", exact: null, display: "n.a.", reason: "Not recorded." };
  const grid: Grid = {
    columns: [
      { label: "A", group: "Base case", start: "", end: "" },
      { label: "B", group: "Base case", start: "", end: "" },
      { label: "FY2027E", group: "Base case", start: "", end: "" },
    ],
    rows: [
      {
        label: "Revenue",
        band: "",
        total: false,
        cells: [na, na, { status: "value", exact: "0", display: "0" }],
      },
    ],
  };
  render(<ForecastTable grid={grid} title="Model" limits={[]} />);
  expect(screen.getAllByRole("columnheader").map((header) => header.textContent)).toEqual([
    "Line item",
    "Base case",
    "FY2027E",
  ]);
  expect(screen.getAllByRole("cell")).toHaveLength(1);
  const button = screen.getByRole("button", { name: "Show 2 columns with no values" });
  expect(button).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(button);
  expect(screen.getByRole("columnheader", { name: "A" })).toBeInTheDocument();
  expect(screen.getByRole("columnheader", { name: "B" })).toBeInTheDocument();
  expect(screen.getAllByRole("cell")).toHaveLength(3);
  expect(screen.getByRole("button", { name: "Hide columns with no values" })).toHaveAttribute(
    "aria-expanded",
    "true",
  );
});

it("draws the interest-basis qualification once, under the table, not in the row header", () => {
  render(
    <ForecastTable
      grid={fixture()}
      title="Model"
      limits={["Base interest is IQ-TEXT"]}
      source={(name) => <a href="#inputs">{name} source</a>}
    />,
  );
  for (const header of screen.getAllByRole("rowheader", { name: /^Interest/ }))
    expect(header.textContent).toBe("Interest");
  const hits = screen.getAllByText(/IQ-TEXT/);
  expect(hits).toHaveLength(1);
  const item = hits[0]?.closest("li");
  expect(item).toHaveTextContent("Interest");
  expect(item).toContainElement(screen.getByRole("link", { name: /source$/ }));
  expect(
    screen.getByRole("table").compareDocumentPosition(item as Node) &
      Node.DOCUMENT_POSITION_FOLLOWING,
  ).toBeTruthy();
});

it("draws period and interest qualifications in one list", () => {
  const grid = fixture();
  const second = grid.columns[1];
  if (!second) throw new Error("Missing fixture column");
  second.label = "YTD (FY2027)";
  render(
    <ForecastTable
      grid={grid}
      title="Model"
      limits={["Base period is FY2027; PQ-TEXT", "Base interest is IQ-TEXT"]}
    />,
  );
  const lists = screen.getAllByRole("list");
  expect(lists).toHaveLength(1);
  expect(screen.getAllByText(/PQ-TEXT/)).toHaveLength(1);
  expect(screen.getAllByText(/IQ-TEXT/)).toHaveLength(1);
  expect(lists[0]).toHaveTextContent("PQ-TEXT");
  expect(lists[0]).toHaveTextContent("IQ-TEXT");
});
