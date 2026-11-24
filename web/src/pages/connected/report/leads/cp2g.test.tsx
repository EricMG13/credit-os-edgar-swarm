import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { entry } from "../overview/rows.fixture";
import { ForwardLead } from "./cp2g";
import { bottomLine, leadProps } from "./lead.fixture";
import { fixtureEntry, retained } from "./markdown.fixture";

afterEach(cleanup);

// Outdated evidence: TransDigm as of 2024-09-30; sol-high-001-resume drivers, sol-medium declined.
const high = () =>
  fixtureEntry("CP-2G", retained("tdg_sol_high_2026_11_13", "CP-2G-forecast-block.md"));
const declined = () =>
  fixtureEntry("CP-2G", retained("sol_medium_run_2026_11_09", "CP-2G-forecast-block.md"));

const cell = (display: string, exact: string | null) =>
  exact === null
    ? { exact, display, reason: "the inputs do not state this period", status: "na" }
    : { exact, display, reason: null, status: "value" };

// A synthetic calculation-JSON grid in the shape the model publishes (cashflow.py).
const model = {
  cashflow: {
    columns: [
      { label: "LTM", group: "Last twelve months", start: null, end: null },
      { label: "FY2025E", group: "Base case", start: "2025-04-01", end: "2026-03-31" },
      { label: "FY2026E", group: "Base case", start: "2026-04-01", end: "2027-03-31" },
      { label: "FY2025E", group: "Downside case", start: "2025-04-01", end: "2026-03-31" },
      { label: "FY2026E", group: "Downside case", start: "2026-04-01", end: "2027-03-31" },
    ],
    rows: [
      {
        band: "Credit metrics",
        label: "Net leverage (net debt / Adj EBITDA)",
        kind: "multiple",
        total: false,
        cells: [
          cell("n.a.", null),
          cell("5.90x", "5.9"),
          cell("n.a.", null),
          cell("6.40x", "6.4"),
          cell("7.10x", "7.1"),
        ],
      },
    ],
    limits: ["Arithmetic over stated inputs; not analytical review."],
  },
};

it("draws net leverage by case as the model displays it, the peak, the gap period and the link", () => {
  render(<ForwardLead {...leadProps(high(), [], [model])} />);
  const tile = screen.getByRole("region", { name: "Net leverage path" });
  expect(tile.className).toMatch(/lg:col-span-12/);
  expect(within(tile).getByRole("heading")).toHaveTextContent(
    "Highest stated net leverage 7.10x (Downside case, FY2026E)",
  );
  const figure = within(tile).getByRole("img");
  expect(figure).toHaveAccessibleName(
    /Base case: FY2025E 5\.90x, FY2026E no figure\. Downside case: FY2025E 6\.40x, FY2026E 7\.10x/,
  );
  for (const text of ["5.90x", "6.40x", "7.10x"])
    expect(within(figure).getByText(text)).toBeInTheDocument();
  expect(figure.querySelectorAll("[data-gap]")).toHaveLength(1);
  expect(figure.querySelector("[data-peak]")).toHaveAttribute("data-peak", "7.10x");
  expect(within(figure).queryByText("0")).toBeNull();
  expect(
    within(tile).getByText("Base case, FY2026E: the inputs do not state this period."),
  ).toBeVisible();
  expect(within(tile).getByText("No limit is published with the model.")).toBeVisible();
  expect(within(tile).getByRole("link", { name: "Open the forecast" })).toHaveAttribute(
    "href",
    "#forecast",
  );
  expect(within(tile).getByRole("link", { name: "Open the forecast" })).toHaveClass("min-h-8");
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(within(tile).getByRole("row", { name: /Downside case/ })).toHaveTextContent("7.10x");
});

it("says why when the published model has no net leverage path", () => {
  render(<ForwardLead {...leadProps(high(), [], [{ cashflow: {} }])} />);
  expect(
    within(screen.getByRole("region", { name: "Net leverage path" })).getByText(
      "The published model has no net leverage path.",
    ),
  ).toBeVisible();
});

it("lists the retained drivers by case and year as stated, inheritance as words", () => {
  render(<ForwardLead {...leadProps(high(), [], [model])} />);
  const tile = screen.getByRole("region", { name: "Drivers by case" });
  const head = within(tile)
    .getAllByRole("columnheader")
    .map((item) => item.textContent);
  expect(head.slice(0, 4)).toEqual([
    "Driver",
    "Base case, 2025",
    "Base case, 2026",
    "Base case, 2027",
  ]);
  expect(head).toContain("Downside drivers, 2027");
  const row = (driver: string, kase: string) => {
    const cells = within(within(tile).getByRole("row", { name: new RegExp(`^${driver}`) }))
      .getAllByRole("cell")
      .map((item) => item.textContent);
    const from = head.indexOf(`${kase}, 2025`) - 1;
    return cells.slice(from, from + 3);
  };
  expect(row("Revenue growth", "Base case")).toEqual(["12%", "12%", "12%"]);
  expect(row("Revenue growth", "Upside case")).toEqual(["16.2%", "16.2%", "16.2%"]);
  expect(row("Revenue growth", "Downside drivers")).toEqual(["0%", "0%", "0%"]);
  expect(row("EBITDA margin", "Base case")).toEqual(["52.56%", "52.56%", "52.56%"]);
  expect(row("EBITDA margin", "Upside case")).toEqual(["As base", "As base", "As base"]);
  expect(row("Interest rate", "Base case")).toEqual(["6.13%", "6.13%", "6.13%"]);
  expect(row("Dividends", "Upside case")).toEqual(["4348", "38", "38"]);
  expect(row("Debt repayment", "Base case")).toEqual(["580", "92", "92"]);
  expect(
    within(tile).getByText("Downside shock: EBITDA decline 20%, interest-rate increase 1.84%."),
  ).toBeVisible();
  expect(within(tile).getByText(/USD millions/)).toBeVisible();
});

it("states a declined forecast block with the drivers' own reasons, never zeros", () => {
  render(<ForwardLead {...leadProps(declined())} />);
  const tile = screen.getByRole("region", { name: "Drivers by case" });
  expect(within(tile).getByText("The forecast block states no driver values.")).toBeVisible();
  expect(
    within(tile).getByText(
      "Revenue growth: No driver selected before required dependency and forecast-scope gates clear.",
    ),
  ).toBeVisible();
  expect(within(tile).queryByRole("table")).toBeNull();
  expect(within(tile).queryByText("0%")).toBeNull();
  expect(
    within(screen.getByRole("region", { name: "Net leverage path" })).getByText(
      "No forecast model was published for this run.",
    ),
  ).toBeVisible();
});

it("draws a blocked module as Not assessable", () => {
  const stopped = entry(
    "CP-2G",
    [],
    bottomLine("Not assessable: the downside module was blocked."),
  );
  render(<ForwardLead {...leadProps(stopped, [], [model])} />);
  const tile = screen.getByRole("region", { name: "Net leverage path" });
  expect(within(tile).getByText("Not assessable")).toBeVisible();
  expect(within(tile).getByText("The downside module was blocked.")).toBeVisible();
  expect(screen.queryByRole("region", { name: "Drivers by case" })).toBeNull();
});

it("says the path peaks only when every period of every case has a figure", () => {
  const complete = structuredClone(model);
  const [row] = complete.cashflow.rows;
  if (!row) throw new Error("one row");
  row.cells[2] = cell("6.10x", "6.1");
  render(<ForwardLead {...leadProps(high(), [], [complete])} />);
  expect(
    within(screen.getByRole("region", { name: "Net leverage path" })).getByRole("heading"),
  ).toHaveTextContent("Net leverage peaks at 7.10x (Downside case, FY2026E)");
});

const forecastBlock = (document: Record<string, unknown>) =>
  entry(
    "CP-2G",
    [],
    [
      {
        heading: "Forecast inputs (machine-readable)",
        level: 3,
        line: 1,
        blocks: [
          {
            type: "text",
            line: 3,
            end: 5,
            text: `\`\`\`json\n${JSON.stringify(document)}\n\`\`\``,
          },
        ],
      },
    ],
  );

it("shows a negative share driver as a percentage, its digits unrounded", () => {
  const made = forecastBlock({
    currency: "USD",
    scale: 1,
    years: [{ year: 2025 }, { year: 2026 }, { year: 2027 }],
    base_drivers: { revenue_growth: { values: ["0.12", "0.12", "0.12"] } },
    downside_drivers: { revenue_growth: { values: ["-0.05", "-0.025", "0"] } },
  });
  render(<ForwardLead {...leadProps(made)} />);
  const tile = screen.getByRole("region", { name: "Drivers by case" });
  const growth = within(tile).getByRole("row", { name: /^Revenue growth/ });
  expect(
    within(growth)
      .getAllByRole("cell")
      .map((item) => item.textContent),
  ).toEqual(["12%", "12%", "12%", "-5%", "-2.5%", "0%"]);
  expect(within(tile).getByText(/Shares are shown as percentages/)).toBeVisible();
});
