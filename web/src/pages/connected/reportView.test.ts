import { describe, expect, it } from "vitest";
import { foundationMetrics, traceKey } from "./reportView";
import type { CatalogueRun, OutputEntry, Section, Snapshot } from "./publishedReport";
import { findingBlocks, traceForLine } from "./ReportContent";
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
    sha256: "a".repeat(64),
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
    const b = foundation([], { run: "first", id: "foundation-b", sha256: "b".repeat(64) });
    const c = foundation([], { run: "second", id: "foundation-a", sha256: "c".repeat(64) });
    expect(new Set([a, b, c].map((entry) => traceKey(entry, 22))).size).toBe(3);
  });

  it("derives a figure trace from its own rows and a row trace from only the selected row", () => {
    const section = table(
      "Chart data: debt maturities",
      ["Period", "Debt", "Reporting unit", "Basis and limitation"],
      [
        ["FY2027", "0.00", "US$m", "Filing page 14"],
        ["FY2028", "80", "US$m", "Filing page 20"],
      ],
      20,
    );
    const entry = foundation([section]);
    const chip = { source: "filing.txt", excerpt: "The maturity schedule", sha256: "first-source" };
    const snapshot = {
      chips: {
        "foundation-a:22": [chip],
        "foundation-a:23": [chip],
        "foundation-b:22": [{ source: "wrong.txt" }],
      },
    } as unknown as Snapshot;

    const figure = traceForLine(snapshot, entry, 2, 21);
    expect(figure?.evidenceItem).toBe(`foundation-a~${"a".repeat(64)}-21`);
    expect(figure?.derivation.children).toMatchObject([
      { label: "Basis", value: "Filing page 14\nFiling page 20" },
      { label: "filing.txt" },
    ]);
    const row = traceForLine(snapshot, entry, 2, 22);
    expect(row?.statement).toContain("0.00");
    expect(row?.derivation.children[0]?.value).toBe("Filing page 14");
    expect(row?.evidenceItem).toBe(`foundation-a~${"a".repeat(64)}-22`);
  });

  it.each([
    [
      ["Trigger", "Threshold", "Signal", "Why It Matters", "Credit Impact", "Source"],
      ["Cover", "Below 3.1x", "Cover is 3.1x", "Cash", "Headroom", "Source p. 1"],
    ],
    [
      ["Trigger", "Threshold / Signal", "Why It Matters", "Credit Impact", "Source / Limitation"],
      ["Cover", "Below 3.1x", "Cash", "Headroom", "Source p. 1; limit is indicative"],
    ],
  ])("only promotes a known monitoring register in its owning module (%j)", (headers, row) => {
    const monitoring = {
      ...table("T2.12 Monitoring triggers", headers, [row], 20),
      level: 4,
    };
    const sections = [
      { heading: "Findings", line: 1, level: 2, blocks: [] },
      { heading: "Analytical appendix", line: 10, level: 3, blocks: [] },
      monitoring,
    ];
    const finance = foundation(sections);
    const credit = { ...finance, output: { ...finance.output, module: "CP-2" } };
    expect(findingBlocks(sections, finance)).toEqual([]);
    expect(findingBlocks(sections, credit)).toEqual([monitoring]);
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

it("uses retained page text rather than a claim-only chip as the trace excerpt", () => {
  const section = table(
    "Chart data: debt",
    ["Period", "Debt", "Source"],
    [["FY2026", "776", "Filing"]],
    20,
  );
  const entry = foundation([section], {
    run: "case",
    id: "case/foundation",
    sha256: "a".repeat(64),
  });
  const sha256 = "b".repeat(64);
  const href = `/connected/sources/case/${sha256}/filing.txt`;
  const missing = {
    source: "missing.txt",
    quote: "776",
    excerpt: null,
    reason: "page not in source text",
  };
  const snapshot = {
    chips: {
      "case/foundation:22": [
        missing,
        {
          file: "filing.txt",
          source: "filing.txt",
          quote: "776",
          excerpt: "Interest expense was 776 in the retained filing.",
          sha256,
          href,
          pageHref: `${href}?page=2`,
        },
      ],
    },
  } as unknown as Snapshot;
  const trace = traceForLine(snapshot, entry, 0, 22);
  expect(trace?.excerpt?.quote).toBe("Interest expense was 776 in the retained filing.");
  expect(trace?.sourceLinks).toEqual([
    { label: "Open cited source page 2: filing.txt", href: `${href}?page=2` },
    { label: "Open source file: filing.txt", href },
  ]);
  snapshot.chips["case/foundation:22"] = [missing as Snapshot["chips"][string][number]];
  expect(traceForLine(snapshot, entry, 0, 22)?.excerpt).toBeNull();
});
