import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import type { PublishedRun } from "../publishedReport";
import type { buildReportView } from "../reportView";
import { Forecast } from "./Forecast";

type View = ReturnType<typeof buildReportView>;
const run = { folder: "current" } as PublishedRun;
const CASH_PROXY = "Cash proxy (not issuer free cash flow)";
const value = (exact: string) => ({ status: "value", exact, display: exact });

type Column = { label: string; group: string; start?: string; end?: string };

/** The Forecast page for one model: each case's periods, then each row's cells in column order. */
function page(columns: Column[], rows: Record<string, unknown[]>) {
  const model = {
    id: "model",
    issuerKey: "issuer",
    runId: "current",
    runFolder: "current",
    href: "",
    download: "",
    sources: [],
    cashflow: {
      units: "USD millions",
      limits: [],
      columns,
      rows: Object.entries(rows).map(([label, cells]) => ({
        label,
        band: "Cash",
        kind: "money",
        total: false,
        cells,
      })),
    },
  };
  const view = {
    catalogue: undefined,
    lead: undefined,
    entries: [],
    modules: [],
    models: [model],
  } as View;
  return render(<Forecast view={view} run={run} />);
}

const columnsOf = (cases: Record<string, string[]>): Column[] =>
  Object.entries(cases).flatMap(([group, periods]) => periods.map((label) => ({ label, group })));
const calendarYear = (label: string) => {
  const year = label.slice(2, 6);
  return { start: `${year}-01-01`, end: `${year}-12-31` };
};

const NO_COMMON_PERIOD =
  "The cases publish no period in common, so no scenario comparison is drawn.";
const ANY_OMISSION = /omitted|left out|cannot be compared/i;

it("draws no comparison of cases that publish no period in common, and says so", () => {
  const { container } = page(
    columnsOf({
      "Base case": ["FY2026E", "FY2027E"],
      "Downside case": ["FY2028E", "FY2029E"],
    }),
    {
      [CASH_PROXY]: ["10", "11", "5", "6"].map(value),
      Revenue: ["100", "101", "80", "81"].map(value),
    },
  );

  expect(screen.queryByRole("figure", { name: "Cash proxy by scenario" })).toBeNull();
  expect(screen.queryByRole("table", { name: "Scenario comparison" })).toBeNull();
  expect(screen.queryByText(/^Cash proxy values/)).toBeNull();
  expect(
    within(screen.getByRole("region", { name: "Scenario comparison" })).getByText(NO_COMMON_PERIOD),
  ).toBeInTheDocument();
  expect(
    within(screen.getByLabelText("Statement columns")).queryByRole("option", {
      name: "Compare scenarios",
    }),
  ).toBeNull();
  // Nothing was excluded, so nothing says a period is omitted, and no cell is drawn as unpublished.
  expect(container.textContent).not.toMatch(ANY_OMISSION);
  expect(container.textContent).not.toContain("Not published");

  // Each case's own figures stay: its card, and its own columns in the statement.
  const items = within(screen.getByRole("list", { name: "Forecast cases" })).getAllByRole(
    "listitem",
  );
  const caseItem = (name: string) => {
    const item = items.find((node) => node.textContent.startsWith(name));
    if (!item) throw new Error(`No case figure for ${name}`);
    return item;
  };
  const base = caseItem("Base case");
  const downside = caseItem("Downside case");
  expect(base).toHaveTextContent("11");
  expect(base).toHaveTextContent("FY2027E");
  expect(downside).toHaveTextContent("6");
  expect(downside).toHaveTextContent("FY2029E");
  const statement = () => within(screen.getByRole("table", { name: "Cash flow model" }));
  for (const cell of ["100", "101"])
    expect(statement().getByRole("cell", { name: cell })).toBeInTheDocument();
  fireEvent.click(
    within(screen.getByRole("group", { name: "Case" })).getByRole("button", {
      name: /^Downside case/,
    }),
  );
  for (const cell of ["80", "81"])
    expect(statement().getByRole("cell", { name: cell })).toBeInTheDocument();
  expect(screen.queryByRole("figure", { name: "Cash proxy by scenario" })).toBeNull();
});

it("compares the shared periods and names the period left out, without saying the cases cannot be compared", () => {
  const { container } = page(
    [
      ...["FY2026E", "FY2027E", "FY2028E"].map((label) => ({
        label,
        group: "Base case",
        ...calendarYear(label),
      })),
      ...["FY2026E", "FY2027E"].map((label) => ({
        label,
        group: "Downside case",
        ...calendarYear(label),
      })),
      { label: "FY2028E", group: "Downside case", start: "2028-07-01", end: "2028-12-31" },
    ],
    {
      [CASH_PROXY]: ["10", "11", "12", "5", "6", "7"].map(value),
      Revenue: ["100", "101", "102", "80", "81", "82"].map(value),
    },
  );

  const comparison = within(screen.getByRole("figure", { name: "Cash proxy by scenario" }));
  fireEvent.click(comparison.getByRole("radio", { name: "Table" }));
  const table = within(screen.getByRole("table", { name: "Scenario comparison" }));
  expect(table.getAllByRole("columnheader").map((header) => header.textContent)).toEqual([
    "Case",
    "FY2026E",
    "FY2027E",
  ]);
  expect(table.getByRole("row", { name: /^Downside case/ })).toHaveTextContent("5.006.00");

  expect(container.textContent).not.toMatch(/cannot be compared|omitted|no period in common/i);
  const leftOut =
    "Periods left out of the scenario comparison: FY2028E (recorded start and end dates do not match between cases, or are incomplete or invalid).";
  const notices = screen.getAllByRole("status").map((status) => status.textContent);
  // Beside the case cards, the statement's column choice and the comparison itself.
  expect(notices.filter((text) => text === leftOut)).toHaveLength(3);

  fireEvent.change(screen.getByLabelText("Statement columns"), { target: { value: "compare" } });
  const periods = within(screen.getByLabelText("Comparison period"));
  expect(periods.getAllByRole("option").map((option) => option.textContent)).toEqual([
    "FY2026E",
    "FY2027E",
  ]);
});

it("says nothing is omitted when no case is selected and the cases share no period", () => {
  // No cash proxy row, so the page has no case cards and no selected case.
  const { container } = page(
    columnsOf({
      "Base case": ["FY2026E", "FY2027E"],
      "Downside case": ["FY2028E", "FY2029E"],
    }),
    { Revenue: ["100", "101", "80", "81"].map(value) },
  );
  expect(screen.queryByRole("radiogroup", { name: "Forecast case" })).toBeNull();
  expect(container.textContent).not.toMatch(ANY_OMISSION);
  const trends = screen.getByText("Cash flow trends by line item").closest("details");
  if (!trends) throw new Error("The trends section is missing");
  expect(within(trends).getByRole("status")).toHaveTextContent(NO_COMMON_PERIOD);
  // No line-item comparison is drawn over columns each case leaves blank for the other.
  expect(screen.queryByRole("figure", { name: "Revenue" })).toBeNull();
});

it("names an excluded period when no case is selected, and still draws no comparison", () => {
  const { container } = page(
    [
      ...columnsOf({
        "Base case": ["FY2026E", "FY2027E"],
        "Downside case": ["FY2028E", "FY2029E"],
      }),
      { label: "FY2030E", group: "Base case", start: "2030-01-01", end: "2030-12-31" },
      { label: "FY2030E", group: "Downside case", start: "2030-07-01", end: "2030-12-31" },
    ],
    { Revenue: ["100", "101", "80", "81", "110", "90"].map(value) },
  );
  const trends = screen.getByText("Cash flow trends by line item").closest("details");
  if (!trends) throw new Error("The trends section is missing");
  expect(within(trends).getByRole("status")).toHaveTextContent(
    "Periods left out of the scenario comparison: FY2030E (recorded start and end dates do not match between cases, or are incomplete or invalid). No other period is published by more than one case, so no scenario comparison is drawn.",
  );
  expect(screen.queryByRole("figure", { name: "Revenue" })).toBeNull();
  expect(container.textContent).not.toMatch(/omitted|cannot be compared|no period in common/i);
});

it("marks a period a case does not publish apart from a figure it publishes as unavailable", () => {
  page(
    columnsOf({
      "Base case": ["FY2026E", "FY2027E", "FY2028E", "FY2029E", "FY2030E"],
      "Downside case": ["FY2026E", "FY2027E", "FY2028E"],
    }),
    {
      [CASH_PROXY]: [
        ...["10", "11", "12", "13", "14"].map(value),
        value("5"),
        { status: "na", exact: null, display: "n.a.", reason: "Not calculable" },
        { status: "na", exact: null, display: "n.a." },
      ],
    },
  );
  const comparison = within(screen.getByRole("figure", { name: "Cash proxy by scenario" }));
  fireEvent.click(comparison.getByRole("radio", { name: "Table" }));
  const downside = within(comparison.getByRole("row", { name: /^Downside case/ }));
  expect(
    downside
      .getAllByRole("cell")
      .slice(0, 5)
      .map((cell) => cell.textContent),
  ).toEqual(["5.00", "Not calculable", "n.a.not available", "Not published", "Not published"]);
  const base = within(comparison.getByRole("row", { name: /^Base case/ }));
  expect(base.queryByText("Not published")).toBeNull();
});

it("marks an unpublished period in the line-item comparison when no case is selected", () => {
  page(
    columnsOf({
      "Base case": ["FY2026E", "FY2027E", "FY2028E"],
      "Downside case": ["FY2026E", "FY2027E"],
    }),
    { Revenue: ["100", "101", "102", "80", "81"].map(value) },
  );
  const chart = within(screen.getByRole("figure", { name: "Revenue" }));
  fireEvent.click(chart.getByRole("radio", { name: "Table" }));
  expect(
    within(chart.getByRole("row", { name: /^Downside case/ }))
      .getAllByRole("cell")
      .map((cell) => cell.textContent),
  ).toEqual(["80", "81", "Not published"]);
  expect(
    within(chart.getByRole("row", { name: /^Base case/ }))
      .getAllByRole("cell")
      .map((cell) => cell.textContent),
  ).toEqual(["100", "101", "102"]);
});

it("says why more than six cases are not charted, and nothing about their periods", () => {
  const groups = ["Base case", ...["A", "B", "C", "D", "E", "F"].map((name) => `Case ${name}`)];
  const { container } = page(
    groups.flatMap((group) => [
      { label: "FY2026E", group },
      { label: "FY2027E", group },
    ]),
    { [CASH_PROXY]: groups.flatMap((_, index) => [String(index), String(index + 10)]).map(value) },
  );
  const tooMany = "More than six cases are published, so the cash proxy comparison is not drawn.";
  expect(
    within(screen.getByRole("region", { name: "Scenario comparison" })).getByRole("note"),
  ).toHaveTextContent(tooMany);
  expect(screen.queryByRole("figure", { name: "Cash proxy by scenario" })).toBeNull();
  // Every period is shared and none is excluded: no notice says otherwise.
  expect(container.textContent).not.toMatch(/period basis|omitted|left out|in common/i);
  expect(
    within(screen.getByLabelText("Statement columns")).getByRole("option", {
      name: "Compare scenarios",
    }),
  ).toBeInTheDocument();
});
