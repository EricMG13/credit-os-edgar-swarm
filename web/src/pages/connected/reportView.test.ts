import { describe, expect, it } from "vitest";
import { foundationMetrics, traceKey } from "./reportView";
import type { CatalogueRun, OutputEntry, Section } from "./publishedReport";
import { calculationNodes } from "./report/calculations";
import { cashProxyCases, type Grid } from "./visuals/LegacyForecast";

function table(heading: string, headers: string[], cells: string[][], line: number): Section {
  return {
    heading,
    level: heading === "Calculations" ? 2 : 3,
    line,
    blocks: [
      {
        type: "table",
        headers,
        line: line + 1,
        rows: cells.map((row, index) => ({
          line: line + index + 2,
          cells: row,
        })),
      },
    ],
  };
}

function foundation(
  sections: Section[],
  options: { run: string; id: string; sha256: string } = {
    run: "first",
    id: "foundation-a",
    sha256: "first-hash",
  },
): OutputEntry {
  return { output: { ...options, module: "CP-1", label: "", href: "" }, selected: true, sections };
}

describe("reader data fidelity", () => {
  const period = table(
    "Period table",
    ["Period", "Start", "End"],
    [["FY2026", "2026-01-01", "2026-12-31"]],
    5,
  );
  const headers = ["Metric", "FY2026", "Unit"];
  const date = {
    id: "first",
    issuer: "A",
    name: "A",
    title: "",
    date: "2027-01-01",
    period: "",
    sector: "",
    metrics: { cash: { value: 0, unit: "US$m", period: "2026-12-31" } },
  } satisfies CatalogueRun;

  it("binds exact zero and refuses ambiguous metrics and mismatched period or currency", () => {
    const measures = table(
      "Financials and credit metrics",
      headers,
      [
        ["Total liquidity at period end", "0", "US$m"],
        ["Free cash flow (operating cash flow less capex), twelve months", "42", "GBPm"],
      ],
      10,
    );
    const input = foundation([period, measures]);
    expect(foundationMetrics(input, date)).toMatchObject([
      { metric: { label: "Available liquidity", value: { text: "$0m" } }, line: 12 },
    ]);
    expect(foundationMetrics(foundation([period, measures, measures]), date)).toEqual([]);
    expect(
      foundationMetrics(input, { ...date, metrics: { cash: { period: "2025-12-31" } } }),
    ).toEqual([]);
  });

  it("isolates trace identities for alternate outputs and other runs with the same row number", () => {
    const a = foundation([]);
    const b = foundation([], { run: "first", id: "foundation-b", sha256: "second-hash" });
    const c = foundation([], { run: "second", id: "foundation-a", sha256: "first-hash" });
    expect(new Set([a, b, c].map((entry) => traceKey(entry, 22))).size).toBe(3);
  });

  it("reads calculation links from the ledger and retains stated operands", () => {
    const calculations = table(
      "Calculations",
      ["ID", "Calculation", "Inputs", "Result", "Source"],
      [
        ["C11", "Debt", "2 + 3", "5", "filing.txt, page 1"],
        ["C14", "Net debt", "5 − 2", "3", "calculation C11"],
      ],
      50,
    );
    expect(calculationNodes(foundation([calculations]), "calculation C14")).toMatchObject([
      {
        label: "Net debt",
        value: "3",
        note: "C14 · 5 − 2 · calculation C11",
        children: [{ label: "Debt", value: "5", note: "C11 · 2 + 3 · filing.txt, page 1" }],
      },
    ]);
    expect(calculationNodes(foundation([calculations, calculations]), "calculation C14")).toEqual(
      [],
    );
  });

  it("keeps driver-only downside, missing and zero distinct on forecast paths", () => {
    const grid: Grid = {
      columns: ["FY2027E", "FY2028E"].map((label) => ({
        label,
        group: "Downside case",
        start: "",
        end: "",
      })),
      rows: [
        {
          label: "Cash proxy (not issuer free cash flow)",
          total: true,
          band: "",
          cells: [{ exact: "0", status: "value" }, { reason: "No model driver" }],
        },
      ],
    };
    expect(cashProxyCases(grid, null).rows).toEqual([
      { label: "Downside case", cells: ["0.00", "No model driver"] },
    ]);
    expect(
      cashProxyCases(
        grid,
        null,
        "Downside case is the stress case: a shock applied to the base-case drivers.",
      ).rows[0]?.label,
    ).toBe("Downside shock");
  });
});
