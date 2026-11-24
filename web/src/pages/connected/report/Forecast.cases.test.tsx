import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import type { PublishedRun } from "../publishedReport";
import type { buildReportView } from "../reportView";
import { Forecast } from "./Forecast";

type View = ReturnType<typeof buildReportView>;
const run = { folder: "current" } as PublishedRun;
const value = (exact: string) => ({ status: "value", exact, display: exact });

type Columns = { label: string; group: string }[];
function gridOf(columns: Columns, rows: Record<string, unknown[]>) {
  return {
    columns,
    rows: Object.entries(rows).map(([label, cells]) => ({
      label,
      band: "Cash",
      kind: "money",
      total: false,
      cells,
    })),
  };
}

function viewOf(
  columns: Columns,
  rows: Record<string, unknown[]>,
  other?: ReturnType<typeof gridOf>,
) {
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
      ...gridOf(columns, rows),
      ...(other ? { other } : {}),
    },
  };
  return {
    catalogue: undefined,
    lead: undefined,
    entries: [],
    modules: [],
    models: [model],
  } as View;
}

const CASH_PROXY = "Cash proxy (not issuer free cash flow)";

const caseItems = () =>
  within(screen.getByRole("list", { name: "Forecast cases" })).getAllByRole("listitem");
/** The first span of a case figure is the case name. */
const nameOf = (item: HTMLElement) => item.querySelector("span")?.textContent ?? "";
const itemShowing = (figure: string) => {
  const item = caseItems().find((node) => within(node).queryByText(figure));
  if (!item) throw new Error(`No case figure shows ${figure}`);
  return item;
};
// These models publish no net leverage, so each case's button is named with that notice.
const selectCase = (name: string) =>
  fireEvent.click(
    within(screen.getByRole("group", { name: "Case" })).getByRole("button", {
      name: `${name}, no leverage path in the model`,
    }),
  );

it("shows each same-label case's own columns and marks its own cash proxy row current", () => {
  const view = viewOf(
    ["Base case", "Upside", "Upside case"].flatMap((group) => [
      { label: "FY2027E", group },
      { label: "FY2028E", group },
    ]),
    {
      [CASH_PROXY]: ["10", "12", "21", "22", "31", "32"].map(value),
      Revenue: ["100", "101", "202", "203", "304", "305"].map(value),
    },
  );
  render(<Forecast view={view} run={run} />);
  const names = caseItems().map((item) => item.textContent);
  expect(new Set(names).size).toBe(3);
  const buttons = within(screen.getByRole("group", { name: "Case" })).getAllByRole("button");
  expect(new Set(buttons.map((button) => button.textContent)).size).toBe(3);
  const comparison = within(screen.getByRole("figure", { name: "Cash proxy by scenario" }));
  fireEvent.click(comparison.getByRole("radio", { name: "Table" }));

  for (const [figure, own, peer, ownProxy] of [
    ["22", ["202", "203"], ["304", "305"], "22.00"],
    ["32", ["304", "305"], ["202", "203"], "32.00"],
  ] as const) {
    const name = nameOf(itemShowing(figure));
    fireEvent.click(
      within(screen.getByRole("group", { name: "Case" }))
        .getAllByRole("button")
        .filter((button) => button.textContent === name)[0] as HTMLElement,
    );
    expect(
      within(screen.getByRole("group", { name: "Case" }))
        .getAllByRole("button")
        .filter((button) => button.getAttribute("aria-pressed") === "true"),
    ).toHaveLength(1);
    const statement = within(screen.getByRole("table", { name: "Cash flow model" }));
    for (const cell of own) expect(statement.getByRole("cell", { name: cell })).toBeInTheDocument();
    for (const cell of [...peer, "100", "101"])
      expect(statement.queryByRole("cell", { name: cell })).toBeNull();
    const current = comparison
      .getAllByRole("row")
      .filter((row) => row.hasAttribute("aria-current"));
    expect(current).toHaveLength(1);
    expect(current[0]).toHaveTextContent(ownProxy);
  }
});

it("matches the selected case by raw group where the other grid is drawn as its own statement", () => {
  const periods = ["FY2027E", "FY2028E"];
  // The other grid has different rows, so the statement draws each grid alone: the main grid's
  // "Upside" has its same-label peer, "Upside case", only in the other grid.
  const view = viewOf(
    ["Base case", "Upside"].flatMap((group) => periods.map((label) => ({ label, group }))),
    {
      [CASH_PROXY]: ["10", "12", "21", "22"].map(value),
      Revenue: ["100", "101", "202", "203"].map(value),
    },
    gridOf(
      periods.map((label) => ({ label, group: "Upside case" })),
      { [CASH_PROXY]: ["31", "32"].map(value) },
    ),
  );
  render(<Forecast view={view} run={run} />);
  selectCase(nameOf(itemShowing("22")));
  const statement = within(screen.getByRole("table", { name: "Cash flow model" }));
  for (const cell of ["202", "203"])
    expect(statement.getByRole("cell", { name: cell })).toBeInTheDocument();
  for (const cell of ["100", "101"])
    expect(statement.queryByRole("cell", { name: cell })).toBeNull();
});

it("draws no period line on a case card that has only its placeholder column", () => {
  const reason = "no downside case was computed in this run";
  const view = viewOf(
    [
      { label: "FY2027E", group: "Base case" },
      { label: "FY2028E", group: "Base case" },
      { label: "Downside", group: "Downside case" },
    ],
    {
      [CASH_PROXY]: [
        value("10"),
        value("12"),
        { status: "na", exact: null, display: "n.a.", reason },
      ],
    },
  );
  render(<Forecast view={view} run={run} />);
  const base = caseItems().find((item) => nameOf(item) === "Base case");
  const downside = caseItems().find((item) => nameOf(item) === "Downside case");
  expect(base).toHaveTextContent("FY2028E");
  expect(downside).toHaveTextContent("n.a.");
  expect(downside).toHaveTextContent(reason);
  expect(
    [...(downside?.querySelectorAll("span") ?? [])].map((span) => span.textContent),
  ).not.toContain("Downside");
});

it("draws no module code in a case name on the Forecast page", () => {
  const view = viewOf(
    ["Base case", "Downside (CP-2G drivers)", "Downside drivers"].map((group) => ({
      label: "FY2027E",
      group,
    })),
    { [CASH_PROXY]: ["10", "7", "8"].map(value) },
  );
  const { container } = render(<Forecast view={view} run={run} />);
  expect(caseItems().filter((item) => nameOf(item).startsWith("Downside drivers"))).toHaveLength(2);
  expect(
    within(screen.getByRole("group", { name: "Case" }))
      .getAllByRole("button")
      .filter((button) => button.textContent.startsWith("Downside drivers")),
  ).toHaveLength(2);
  expect(container.textContent).not.toMatch(/CP-/);
});

const cardNames = () => caseItems().map(nameOf);

function showComparisonTable() {
  const comparison = within(screen.getByRole("figure", { name: "Cash proxy by scenario" }));
  fireEvent.click(comparison.getByRole("radio", { name: "Table" }));
  return within(screen.getByRole("table", { name: "Scenario comparison" }));
}

it("shows a case whose label no other case shares exactly as published", () => {
  // "CP" is also commercial paper: nothing rewrites a label because it starts that way.
  const groups = ["Base case", "CP-backstop downside", "Downside (CP-funded)", "CP-10"];
  const view = viewOf(
    groups.flatMap((group) => [
      { label: "FY2027E", group },
      { label: "FY2028E", group },
    ]),
    { [CASH_PROXY]: ["10", "12", "7", "8", "5", "6", "3", "4"].map(value) },
  );
  render(<Forecast view={view} run={run} />);
  const published = [...groups].sort();
  expect(cardNames().sort()).toEqual(published);
  expect(
    showComparisonTable()
      .getAllByRole("rowheader")
      .map((header) => header.textContent)
      .sort(),
  ).toEqual(published);
  fireEvent.change(screen.getByLabelText("Statement columns"), { target: { value: "compare" } });
  const statement = within(screen.getByRole("table", { name: "Cash flow model" }));
  for (const group of groups)
    expect(statement.getByRole("columnheader", { name: group })).toBeInTheDocument();
});

it("names two same-label cases apart, the same in the cards, statement, comparison and trends", () => {
  const periods = ["FY2027E", "FY2028E"];
  // The other grid has different rows, so the statement draws each grid as its own table.
  const view = viewOf(
    ["Base case", "Upside"].flatMap((group) => periods.map((label) => ({ label, group }))),
    {
      [CASH_PROXY]: ["10", "12", "21", "22"].map(value),
      Revenue: ["100", "101", "202", "203"].map(value),
    },
    gridOf(
      periods.map((label) => ({ label, group: "Upside case" })),
      { [CASH_PROXY]: ["31", "32"].map(value) },
    ),
  );
  render(<Forecast view={view} run={run} />);
  const nameOn = (figure: string) => nameOf(itemShowing(figure));
  const upside = nameOn("22");
  const upsideCase = nameOn("32");
  expect(upside).not.toBe(upsideCase);

  selectCase(upside);
  const main = within(screen.getByRole("table", { name: "Cash flow model" }));
  expect(main.getByRole("columnheader", { name: upside })).toBeInTheDocument();
  const trend = within(screen.getByRole("figure", { name: "Revenue" }));
  fireEvent.click(trend.getByRole("radio", { name: "Table" }));
  expect(trend.getAllByRole("rowheader").map((header) => header.textContent)).toEqual([upside]);
  expect(
    showComparisonTable()
      .getAllByRole("rowheader")
      .map((header) => header.textContent)
      .sort(),
  ).toEqual(["Base case", upside, upsideCase].sort());

  selectCase(upsideCase);
  const other = within(screen.getByRole("table", { name: "Other forecast cases" }));
  expect(other.getByRole("columnheader", { name: upsideCase })).toBeInTheDocument();

  // The raw group as reader text tells "Upside" apart; "Upside case" would only repeat the
  // label, so it takes a worded ordinal by raw-group order.
  expect([upside, upsideCase]).toEqual(["Upside case · Upside", "Upside case · second case"]);
});

it("adds no module code or number to a name it generates", () => {
  const view = viewOf(
    ["Base case", "Downside (CP-2G drivers)", "Downside drivers"].flatMap((group) => [
      { label: "FY2027E", group },
      { label: "FY2028E", group },
    ]),
    { [CASH_PROXY]: ["10", "12", "7", "8", "5", "6"].map(value) },
  );
  render(<Forecast view={view} run={run} />);
  const names = cardNames().sort();
  expect(names).toEqual([
    "Base case",
    "Downside drivers · Downside (Forward credit model drivers)",
    "Downside drivers · second case",
  ]);
  for (const name of names) expect(name).not.toMatch(/CP-|\d/);
  expect(
    showComparisonTable()
      .getAllByRole("rowheader")
      .map((header) => header.textContent)
      .sort(),
  ).toEqual(names);
});
