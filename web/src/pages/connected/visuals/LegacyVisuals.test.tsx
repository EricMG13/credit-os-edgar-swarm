import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import { LegacyForecast, LegacyVisuals } from ".";

function fixture(headers: string[], rows: string[][]) {
  return [
    { blocks: [{ type: "table", line: 20, headers, rows: rows.map((cells) => ({ cells })) }] },
  ];
}

it("draws only classified source tables and switches to the exact published values and gap reasons", () => {
  const sections = fixture(
    ["Period", "Refinancing need", "Reporting unit", "Basis and limitation"],
    [
      ["FY2028", "250.00", "US$m", "Issuer statement"],
      ["FY2029", "Not supplied: No estimate", "US$m", "No estimate"],
    ],
  );
  const output = {
    charts: [
      { title: "Refinancing need", table: 20, unit: "US$m", columns: [1] },
      { title: "Wrong line", table: 99, columns: [1] },
    ],
  };
  render(
    <LegacyVisuals
      output={output}
      sections={sections}
      evidenceHref={(line) => `#line-${String(line)}`}
    />,
  );
  const figure = within(screen.getByRole("figure", { name: "Refinancing need" }));
  expect(figure.getByText("US$m")).toBeInTheDocument();
  expect(figure.getByRole("link", { name: "Source table" })).toHaveAttribute("href", "#line-20");
  expect(screen.queryByText("Wrong line")).toBeNull();
  fireEvent.click(figure.getByRole("radio", { name: "Table" }));
  expect(figure.getByRole("table", { name: "Refinancing need" })).toHaveTextContent("250.00");
  expect(figure.getByRole("table")).toHaveTextContent("Not supplied: No estimate");
});

it("keeps unhandled chart contracts visible as source tables and published gaps as reasons", () => {
  const output = {
    charts: [{ title: "Unsupported", table: 20, kind: "unknown" }],
    chartGaps: [{ title: "Debt stack", table: 21, gap: "Ranking was withheld" }],
  };
  render(<LegacyVisuals output={output} sections={fixture(["Line", "Value"], [["Debt", "10"]])} />);
  expect(screen.getByRole("table", { name: "Unsupported" })).toHaveTextContent("Debt10");
  expect(screen.queryByRole("radio", { name: "Chart" })).toBeNull();
  expect(screen.getByText("Ranking was withheld")).toBeInTheDocument();
});

it("renders the published model cell displays, cases, dates and reasons", () => {
  const model = {
    cashflow: {
      units: "US$m",
      columns: [{ group: "Base case", label: "FY2028E" }],
      rows: [
        {
          band: "Cash flow",
          label: "Closing cash",
          total: true,
          cells: [{ display: "250.00", exact: "250.004", status: "value" }],
        },
      ],
      other: {
        columns: [{ group: "Stress case", label: "FY2028E" }],
        rows: [
          {
            band: "Cash flow",
            label: "Closing cash",
            cells: [{ display: "n.a.", status: "na", reason: "Opening cash absent" }],
          },
        ],
      },
      notes: ["Model forecast"],
      limits: ["Conditional illustration"],
    },
  };
  render(<LegacyForecast model={model} />);
  expect(screen.getByRole("table", { name: "Cash flow model" })).toHaveTextContent("250.00");
  expect(screen.getByRole("table", { name: "Other forecast cases" })).toHaveTextContent(
    "Stress case",
  );
  expect(screen.getByRole("cell", { name: "n.a. Opening cash absent" })).toHaveTextContent("n.a.");
  expect(screen.getByText("Conditional illustration")).toBeInTheDocument();
});

const basis = ["Reporting unit", "Basis and limitation"];

it.each([
  [
    "Bridge",
    { kind: "waterfall", amount: 1, unit: "US$m" },
    ["Step", "Amount"],
    [
      ["Opening", "100", "US$m", "Evidence"],
      ["Change", "-20", "US$m", "Evidence"],
      ["Closing", "80", "US$m", "Evidence"],
    ],
    "-20",
  ],
  [
    "Prior and current results",
    { kind: "grouped", label: 0, periods: [1, 3], prior: 2, current: 4, unit: "US$m" },
    ["Measure", "Prior period", "Prior", "Current period", "Current"],
    [["Revenue", "FY2024", "100", "FY2025", "120", "US$m", "Evidence"]],
    "FY2025",
  ],
  [
    "Limits",
    { kind: "limits", label: 0, current: 1, proposed: 2, limit: 3 },
    ["Limit", "Current exposure", "Proposed exposure", "Limit value"],
    [["Foreign exchange", "-1.5", "2.0", "5.0", "%", "Evidence"]],
    "-1.5",
  ],
  [
    "Peer ratios",
    { kind: "range", label: 0, issuer: 1, low: 2, median: 3, high: 4 },
    ["Metric", "Issuer", "Peer low", "Peer median", "Peer high", "Peer count"],
    [["Leverage", "4.5", "2.0", "3.0", "6.0", "20", "x", "Evidence"]],
    "20",
  ],
  [
    "Market quotes",
    { kind: "scatter", label: 0, date: 1, yield: 2, unit: "%" },
    ["Instrument", "Maturity date", "Yield", "Spread", "Quote date", "Source class"],
    [["Senior notes", "2029-08-02", "4.25", "100", "2026-06-17", "Issuer", "%", "Evidence"]],
    "2029-08-02",
  ],
] satisfies [string, Record<string, unknown>, string[], string[][], string][])(
  "draws %s from its published column roles and keeps the source figures in the table",
  (title, roles, headers, rows, expected) => {
    render(
      <LegacyVisuals
        output={{ charts: [{ title, table: 20, ...roles }] }}
        sections={fixture([...headers, ...basis], rows)}
      />,
    );
    const figure = within(screen.getByRole("figure", { name: title }));
    fireEvent.click(figure.getByRole("radio", { name: "Table" }));
    expect(figure.getByRole("table", { name: title })).toHaveTextContent(expected);
  },
);

it("renders a published time lane and relationship without inferring exact dates or ownership", () => {
  const sections = [
    ...fixture(
      [
        "Event date",
        "Date precision",
        "Published",
        "Event",
        "Status",
        "Source",
        "Credit relevance",
      ],
      [
        [
          "2028-Q2",
          "quarter",
          "Not supplied: no publication date",
          "Notes due",
          "Scheduled — Contract",
          "Source A",
          "Refinancing",
        ],
      ],
    ),
    {
      blocks: [
        {
          type: "table",
          line: 30,
          headers: ["From", "Relationship", "Edge type", "To", "Evidence"],
          rows: [
            { cells: ["Company A", "guarantees debt for", "Guarantee", "Company B", "Source B"] },
          ],
        },
      ],
    },
  ];
  render(
    <LegacyVisuals
      output={{
        events: [{ lane: "Maturities", table: 20 }],
        maps: [{ name: "legal entities", table: 30 }],
      }}
      sections={sections}
    />,
  );
  const event = within(screen.getByRole("figure", { name: "Maturities" }));
  expect(event.getByText(/2028-Q2 · quarter/)).toBeInTheDocument();
  const map = within(screen.getByRole("figure", { name: "legal entities" }));
  expect(map.getByRole("list", { name: "Connection key" })).toHaveTextContent(
    "guarantees debt for",
  );
  fireEvent.click(map.getByRole("radio", { name: "Table" }));
  expect(map.getByRole("table")).toHaveTextContent("Source B");
});

it("charts published forecast series and renders the separately formatted figures", () => {
  const columns = ["FY2025E", "FY2026E", "FY2027E"].map((label) => ({ label, group: "Base case" }));
  const cells = [
    { display: "1,050", exact: "1050.004", status: "value" },
    { display: "n.a.", status: "na", reason: "Source absent" },
    { display: "1,125", exact: "1124.76", status: "value" },
  ];
  render(
    <LegacyForecast
      model={{ cashflow: { units: "US$m", columns, rows: [{ label: "Revenue", cells }] } }}
    />,
  );
  const figure = within(screen.getByRole("figure", { name: "Revenue" }));
  fireEvent.click(figure.getByRole("radio", { name: "Table" }));
  const table = figure.getByRole("table", { name: "Revenue" });
  expect(table).toHaveTextContent("1,050");
  expect(table).toHaveTextContent("n.a. Source absent");
  expect(table).toHaveTextContent("1,125");
  expect(table).not.toHaveTextContent("1050.004");
});

it("keeps unstated stack balances out of the plot while retaining their stated reasons", () => {
  const output = {
    charts: [{ title: "Debt stack", table: 20, kind: "stack", label: 0, amount: 3, unit: "US$m" }],
  };
  const sections = fixture(
    ["Facility", "Ranking", "Secured", "Amount", "Cumulative leverage", ...basis],
    [
      ["Senior secured", "1", "Yes", "1,200", "2.4", "US$m", "Evidence"],
      ["Senior notes", "2", "No", "0", "2.4", "US$m", "Evidence"],
      [
        "Subordinated notes",
        "3",
        "No",
        "Not supplied: balance not stated",
        "Not supplied: no balance",
        "US$m",
        "Evidence",
      ],
    ],
  );
  render(<LegacyVisuals output={output} sections={sections} />);
  const figure = within(screen.getByRole("figure", { name: "Debt stack" }));
  expect(figure.getAllByRole("img")).toHaveLength(1);
  expect(figure.getByRole("img")).toHaveAccessibleName("Senior secured 1,200");
  expect(figure.getByText("Not supplied: balance not stated")).toBeInTheDocument();
  fireEvent.click(figure.getByRole("radio", { name: "Table" }));
  expect(figure.getByRole("row", { name: /Senior notes/ })).toHaveTextContent("0");
  expect(figure.getByRole("table")).toHaveTextContent("Not supplied: no balance");
});

it("positions dated points and coarse intervals on one axis in separate status lanes", () => {
  const sections = fixture(
    ["Event date", "Date precision", "Published", "Event", "Status", "Source", "Credit relevance"],
    [
      [
        "2028-Q2",
        "quarter",
        "—",
        "Refinancing scenario",
        "Scenario — Conditional",
        "Source B",
        "Debt",
      ],
      [
        "2028-03-31",
        "day",
        "2028-04-01",
        "Bond retired",
        "Historical — Reported",
        "Source A",
        "Debt",
      ],
    ],
  );
  render(
    <LegacyVisuals
      output={{ events: [{ lane: "Debt calendar", table: 20 }] }}
      sections={sections}
    />,
  );
  const lane = within(screen.getByRole("group", { name: "Event lanes on a shared date axis" }));
  const history = within(lane.getByRole("region", { name: "Historical" }));
  const scenario = within(lane.getByRole("region", { name: "Scenario" }));
  const point = history.getByRole("img", { name: /Bond retired.*2028-03-31.*day/ });
  const range = scenario.getByRole("img", { name: /Refinancing scenario.*2028-Q2.*quarter/ });
  expect(point).toHaveStyle({ left: "0%" });
  expect(point.style.width).toBe("");
  expect(Number.parseFloat(range.style.left)).toBeGreaterThan(0);
  expect(Number.parseFloat(range.style.width)).toBeGreaterThan(98);
  expect(lane.getByRole("group", { name: "Date axis" })).toHaveTextContent("2028-03-312028-06-30");
});

it("draws each named node once and connects published parallel, return and self edges", () => {
  const sections = fixture(
    ["From", "Relationship", "Edge type", "To", "Evidence"],
    [
      ["A", "Owns first", "Ownership", "B", "Source 1"],
      ["A", "Guarantees second", "Guarantee", "B", "Source 2"],
      ["B", "Owns parent stake", "Ownership", "A", "Source 3"],
      ["B", "Own security", "Security", "B", "Source 4"],
    ],
  );
  render(
    <LegacyVisuals
      output={{ maps: [{ name: "legal entities", table: 20 }] }}
      sections={sections}
    />,
  );
  const figure = within(screen.getByRole("figure", { name: "legal entities" }));
  const graph = figure.getByRole("img", { name: /Directed relationship graph/ });
  expect(
    Array.from(graph.querySelectorAll("[data-map-node]"), (node) =>
      node.getAttribute("data-map-node"),
    ),
  ).toEqual(["A", "B"]);
  const paths = Array.from(graph.querySelectorAll("[data-map-edge] path"), (path) =>
    path.getAttribute("d"),
  );
  expect(paths).toHaveLength(4);
  expect(new Set(paths).size).toBe(4);
  expect(graph.querySelector('[data-map-edge="3"] title')).toHaveTextContent(
    "B → A · Ownership · Owns parent stake",
  );
  fireEvent.click(figure.getByRole("radio", { name: "Table" }));
  expect(figure.getByRole("table")).toHaveTextContent("Own security");
  expect(figure.getByRole("table")).toHaveTextContent("Source 4");
});

it("leaves invalid event dates and missing map endpoints in their source tables", () => {
  const sections = [
    ...fixture(
      [
        "Event date",
        "Date precision",
        "Published",
        "Event",
        "Status",
        "Source",
        "Credit relevance",
      ],
      [["2027-02-29", "day", "—", "Wrong date", "Historical — Reported", "Source A", "Debt"]],
    ),
    {
      blocks: [
        {
          type: "table",
          line: 30,
          headers: ["From", "Relationship", "Edge type", "To", "Evidence"],
          rows: [
            {
              cells: [
                "A",
                "Guarantees",
                "Guarantee",
                "Not supplied: issuer undisclosed",
                "Source B",
              ],
            },
          ],
        },
      ],
    },
  ];
  render(
    <LegacyVisuals
      output={{
        events: [{ lane: "Debt calendar", table: 20 }],
        maps: [{ name: "legal entities", table: 30 }],
      }}
      sections={sections}
    />,
  );
  expect(screen.queryByRole("figure")).toBeNull();
  expect(screen.getByRole("table", { name: "Debt calendar" })).toHaveTextContent("2027-02-29");
  expect(screen.getByRole("table", { name: "legal entities" })).toHaveTextContent(
    "Not supplied: issuer undisclosed",
  );
});
