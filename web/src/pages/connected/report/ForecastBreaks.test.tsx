import { render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import type { OutputEntry } from "../publishedReport";
import type { ReportView } from "../reportView";
import { WhatBreaks } from "./ForecastBreaks";

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

const wall = {
  years: [{ year: 2028, label: "FY2028", cell: { text: "1,250", value: 1250, reason: null } }],
  wall: { year: 2028, label: "FY2028", cell: { text: "1,250", value: 1250, reason: null } },
  unit: "USD millions",
  offAxis: [],
  reason: null,
};

it("sets liquidity before the wall beside the wall, both as published, and draws no shortfall", () => {
  render(
    <WhatBreaks
      view={view([])}
      folder="current"
      model={model([value("212"), value("295"), value("397")])}
      group="Base case"
      caseName="Base case"
      wall={wall}
      units="USD millions"
    />,
  );
  const tile = within(screen.getByRole("region", { name: "What breaks, and when" }));
  expect(tile.getByText("397")).toBeInTheDocument();
  expect(tile.getByText(/Accessible liquidity, FY2027E/)).toBeInTheDocument();
  expect(tile.getByText("1,250")).toBeInTheDocument();
  expect(tile.getByText(/Debt maturing, FY2028/)).toBeInTheDocument();
  expect(tile.getByText("No module states a shortfall figure at the wall.")).toBeInTheDocument();
  // Delivery computes no difference of the two figures.
  expect(tile.queryByText(/853/)).toBeNull();
});

it("draws stress scenarios as small multiples with each cell as published and gaps in words", () => {
  render(
    <WhatBreaks
      view={view([downside()])}
      folder="current"
      model={model([value("212"), value("295"), value("397")])}
      group="Base case"
      caseName="Base case"
      wall={wall}
      units="USD millions"
    />,
  );
  const stress = within(screen.getByRole("group", { name: "Point-in-time stress" }));
  expect(stress.getByText("All-in cover (x)")).toBeInTheDocument();
  expect(stress.getByText("3.10")).toBeInTheDocument();
  expect(stress.getByText("2.00")).toBeInTheDocument();
  expect(stress.getAllByText("Cost shock").length).toBeGreaterThan(0);
  expect(
    stress.getByText(/Cost shock, Net leverage \(x\): net debt is missing/),
  ).toBeInTheDocument();
});

it("names why a part cannot be drawn: no wall, no downside module", () => {
  render(
    <WhatBreaks
      view={view([])}
      folder="current"
      model={model([value("212")], ["FY2025E"])}
      group="Base case"
      caseName="Base case"
      wall={{ years: [], reason: "Financial foundation did not run in this run." }}
      units="USD millions"
    />,
  );
  expect(screen.getByText("Financial foundation did not run in this run.")).toBeInTheDocument();
  expect(screen.getByText("Downside did not run in this run.")).toBeInTheDocument();
});
