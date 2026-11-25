import { render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import type { OutputEntry } from "../publishedReport";
import type { ReportView } from "../reportView";
import { WhatBreaks } from "./ForecastBreaks";
import { readMeasure } from "./forecastData";

const value = (exact: string) => ({ status: "value", exact, display: exact });
const LIQUIDITY = "Accessible liquidity";

function model(cells: unknown[], labels = ["FY2025E", "FY2026E", "FY2027E"]) {
  return {
    cashflow: {
      units: "USD millions",
      columns: labels.map((label) => ({ label, group: "Base case" })),
      rows: [{ label: LIQUIDITY, band: "Cash", kind: "money", total: false, cells }],
    },
  };
}

function table(line: number, headers: string[], rows: string[][]) {
  return {
    type: "table" as const,
    line,
    headers,
    rows: rows.map((cells, at) => ({ line: line + 2 + at, cells })),
  };
}

function downside(bottomLine = "The issuer withstands the cost shock."): OutputEntry {
  return {
    selected: true,
    output: {
      id: "downside",
      sha256: "a".repeat(64),
      module: "CP-2A",
      label: "",
      href: "",
      state: { established: true, declared: null },
    },
    sections: [
      { heading: "Findings", level: 2, line: 16, blocks: [] },
      {
        heading: "Bottom line",
        level: 3,
        line: 18,
        blocks: [{ type: "text", line: 20, end: 20, text: bottomLine }],
      },
      {
        heading: "T2DS.1 Scenarios",
        level: 4,
        line: 94,
        blocks: [
          table(
            96,
            [
              "Scenario ID",
              "Name",
              "EBITDA decline s",
              "Cash-interest increase k",
              "Anchor",
              "What the assumption leaves out",
              "Category",
              "Confidence",
            ],
            [
              ["s00", "Control (unstressed)", "0", "0", "LTM", "n/a", "Fact", "High"],
              ["s01", "Cost shock", "0.1 (10%)", "0", "Held", "WC", "Interp", "Medium"],
            ],
          ),
        ],
      },
      {
        heading: "T2DS.4 Stressed flows and metrics",
        level: 4,
        line: 104,
        blocks: [
          table(
            106,
            ["Metric", "s00", "s01", "Source"],
            [
              ["All-in cover (x)", "3.10", "2.00", "Filing p.1"],
              ["Net leverage (x)", "1.25", "Not calculated: net debt is missing", "Filing p.1"],
            ],
          ),
        ],
      },
    ],
  };
}

const view = (entries: OutputEntry[]) =>
  ({ catalogue: undefined, lead: undefined, entries, modules: [], models: [] }) as ReportView;

function entryOf(module: string, sections: unknown[], established = true): OutputEntry {
  return {
    selected: true,
    output: {
      id: module,
      sha256: "e".repeat(64),
      module,
      label: "",
      href: "",
      state: { established, declared: null },
      charts:
        module === "CP-4"
          ? [
              {
                title: "Covenant headroom",
                table: 43,
                kind: "bullet",
                direction: 4,
                label: [0],
                threshold: 1,
                current: 2,
                headroom: 3,
                unit: "",
                columns: [1, 2],
              },
            ]
          : [],
    },
    sections,
  } as unknown as OutputEntry;
}
const bottom = (text: string) => ({
  heading: "Bottom line",
  level: 3,
  line: 18,
  blocks: [{ type: "text", line: 20, end: 20, text }],
});
const findings = { heading: "Findings", level: 2, line: 16, blocks: [] };

const liquidity = entryOf("CP-2D", [
  findings,
  bottom("Liquidity lasts to the horizon."),
  {
    heading: "T2E.5 Funding gap",
    level: 3,
    line: 40,
    blocks: [
      table(
        42,
        ["Line", "Value (USD millions)"],
        [
          ["Horizon", "2026-03-31"],
          ["Funding gap", "120.5"],
        ],
      ),
    ],
  },
]);
const legal = entryOf("CP-4", [
  findings,
  bottom("The covenants hold."),
  {
    heading: "Chart data: covenant headroom",
    level: 3,
    line: 41,
    blocks: [
      table(
        43,
        [
          "Test",
          "Threshold",
          "Current",
          "Headroom",
          "Direction",
          "Reporting unit",
          "Basis and limitation",
        ],
        [["Net leverage", "5.0", "4.2", "0.8x", "Passes at or below", "x", "Synthetic."]],
      ),
    ],
  },
]);
const forward = entryOf("CP-2G", [
  findings,
  bottom("The view."),
  {
    heading: "Limitations",
    level: 3,
    line: 30,
    blocks: [
      {
        type: "text",
        line: 32,
        end: 33,
        text: "- The break tests reuse watch levels, not covenant tests; covenant compliance belongs to the legal module.\n- Debt maturities and refinancing feasibility are not modelled; the maturity wall and funding gap belong to the liquidity and refinancing modules.",
      },
    ],
  },
]);

const schedule = {
  years: [
    { year: 2026, label: "FY2026", key: "FY2026", cell: { text: "500", value: 500, reason: null } },
    {
      year: 2028,
      label: "FY2028",
      key: "FY2028",
      cell: { text: "1,250", value: 1250, reason: null },
    },
  ],
  offAxis: [],
  unit: "US$m",
  reason: null,
};

function breaks(entries: OutputEntry[], cells = [value("212"), value("295"), value("397")]) {
  return render(
    <WhatBreaks
      view={view(entries)}
      folder="current"
      liquidity={readMeasure(model(cells), "accessible liquidity", /^Accessible liquidity\b/)}
      group="Base case"
      caseName="Base case"
      schedule={schedule}
      source={(name) => <button type="button">{`Show sources for ${name}`}</button>}
    />,
  );
}

it("states the liquidity module's funding gap as that module's figure, with horizon, unit and trace", () => {
  breaks([liquidity]);
  const part = within(screen.getByRole("region", { name: "Funding gap" }));
  expect(part.getByText("120.5")).toBeInTheDocument();
  // Named by the module and the row's own label, never the page's own wording.
  expect(part.getByText("Liquidity: Funding gap · 2026-03-31 · USD millions")).toBeInTheDocument();
  expect(part.queryByText(/horizon end/)).toBeNull();
  expect(part.getByRole("link", { name: "Source for Liquidity's Funding gap" })).toHaveAttribute(
    "href",
    expect.stringContaining("-45") as string,
  );
  expect(screen.queryByText(/No module states a shortfall/)).toBeNull();
});

it("names the modules it looked at when neither states a funding gap", () => {
  breaks([]);
  expect(
    within(screen.getByRole("region", { name: "Funding gap" })).getByText(
      "Liquidity did not run in this run. Refinancing & LME did not run in this run.",
    ),
  ).toBeInTheDocument();
});

it("shows the liquidity path and the maturity schedule apart, with a trace per figure, picking no sentence", () => {
  breaks([forward]);
  const path = within(screen.getByRole("region", { name: "Accessible liquidity, Base case" }));
  for (const [year, figure] of [
    ["FY2025E", "212"],
    ["FY2026E", "295"],
    ["FY2027E", "397"],
  ] as const) {
    expect(path.getByText(year)).toBeInTheDocument();
    expect(path.getByText(figure)).toBeInTheDocument();
    expect(
      path.getByRole("button", { name: `Show sources for Accessible liquidity, ${year}` }),
    ).toBeInTheDocument();
  }
  const debt = within(screen.getByRole("region", { name: "Debt maturing" }));
  expect(debt.getByText("FY2028")).toBeInTheDocument();
  expect(debt.getByText("1,250")).toBeInTheDocument();
  expect(path.queryByText("1,250")).toBeNull();
  // The page says what it does and links to the model's own limitations; it quotes no sentence.
  expect(
    screen.getByText(
      "This page shows the model's liquidity and the maturity schedule apart; it does not set one against the other.",
    ),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Forward credit model's limitations" })).toHaveAttribute(
    "href",
    "#modules/CP-2G",
  );
  expect(screen.queryByText(/refinancing feasibility/)).toBeNull();
});

it("shows each covenant test as the legal module writes it, with the model's caveat in words", () => {
  breaks([legal, forward]);
  const part = within(screen.getByRole("region", { name: "Covenant tests" }));
  expect(part.getByText("Net leverage")).toBeInTheDocument();
  expect(part.getByText("5.0 x")).toBeInTheDocument();
  expect(part.getByText("4.2 x")).toBeInTheDocument();
  expect(part.getByText("0.8x")).toBeInTheDocument();
  expect(part.getByText("Passes at or below")).toBeInTheDocument();
  expect(
    part.getByText("This forecast's figures are not set against the covenant tests above."),
  ).toBeInTheDocument();
  expect(part.queryByText(/break tests reuse/)).toBeNull();
  expect(part.getByRole("link", { name: "Source for the Net leverage test" })).toBeInTheDocument();
});

it("draws the legal module blocked in the designed blocked state with its reason", () => {
  const blockedLegal = entryOf("CP-4", [
    findings,
    bottom("Not assessable: no executed governing document available."),
  ]);
  breaks([blockedLegal]);
  const part = within(screen.getByRole("region", { name: "Covenant tests" }));
  expect(part.getByText("Not assessable")).toBeInTheDocument();
  expect(part.getByText(/no executed governing document available/)).toBeInTheDocument();
});

it("draws the stress scenarios as one small multiple with each cell's figure and gaps in words", () => {
  breaks([downside()]);
  const stress = within(screen.getByRole("group", { name: "Point-in-time stress" }));
  const reading = stress.getByRole("img").getAttribute("aria-label") ?? "";
  expect(reading).toContain("Control (unstressed): All-in cover (x) 3.10");
  expect(reading).toContain("Cost shock: All-in cover (x) 2.00, Net leverage (x) not calculated");
  expect(
    stress.getByText(/Cost shock, Net leverage \(x\): net debt is missing/),
  ).toBeInTheDocument();
});

it("names why a part cannot be drawn: no downside module, no liquidity for the case", () => {
  breaks([], []);
  expect(screen.getByText("Downside did not run in this run.")).toBeInTheDocument();
  expect(
    screen.getByText("The model publishes no accessible liquidity figure."),
  ).toBeInTheDocument();
});
