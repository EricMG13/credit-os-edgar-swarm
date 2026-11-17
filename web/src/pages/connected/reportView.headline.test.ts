import { describe, expect, it } from "vitest";
import type { CatalogueRun, OutputEntry, Section } from "./publishedReport";
import { evidencePath } from "./publishedReport";
import { headlineSources } from "./reportView";

const SHA = "a".repeat(64);
const NOT_STATED = "Not supplied: the measure is not stated";

const chart = (title: string, headers: string[], rows: string[][], at = 10): Section => ({
  heading: `Chart data: ${title}`,
  level: 3,
  line: at,
  blocks: [
    {
      type: "table",
      line: at + 2,
      headers: ["Period", ...headers, "Reporting unit", "Basis and limitation"],
      rows: rows.map((cells, i) => ({ line: at + 4 + i, cells })),
    },
  ],
});

const sections = (adjusted = false): Section[] => [
  chart(
    "leverage",
    adjusted
      ? ["Total debt / adjusted EBITDA", "Net debt / adjusted EBITDA"]
      : ["Total debt / EBITDA", "Net debt / EBITDA"],
    [
      ["FY2023", "3.75", "3.00", "x", "Synthetic."],
      ["FY2024", "2.80", "2.25", "x", "Synthetic."],
    ],
    10,
  ),
  chart(
    "revenue and EBITDA",
    ["Revenue", "Adjusted EBITDA"],
    [
      ["FY2023", "2,100", "410", "US$m", "Synthetic."],
      ["FY2024", "2,250", NOT_STATED, "US$m", "Synthetic."],
    ],
    30,
  ),
];

const entry = (blocks: Section[] = sections(), module = "CP-1"): OutputEntry => ({
  output: { id: "run/CP-1.md", module, label: "x", href: "x", sha256: SHA },
  sections: blocks,
  selected: true,
});

const catalogue = (metrics: CatalogueRun["metrics"]): CatalogueRun => ({
  id: "run",
  name: "Run",
  issuer: "A",
  title: "",
  date: "2025-03-31",
  sector: "",
  period: "FY2024",
  metrics,
});
const figure = (value: string | number | null, unit = "x", period = "FY2024") => ({
  value,
  unit,
  period,
});
const FULL = {
  net_leverage: figure("2.25"),
  leverage: figure("2.80"),
  revenue: figure("2,250", "US$m"),
};

describe("headlineSources", () => {
  it("addresses the row each figure is read from, and the row that says one is not supplied", () => {
    const source = entry();
    expect(headlineSources(source, catalogue(FULL), "run")).toEqual({
      net_leverage: { href: evidencePath("run", source, 15), period: "FY2024" },
      leverage: { href: evidencePath("run", source, 15), period: "FY2024" },
      revenue: { href: evidencePath("run", source, 35), period: "FY2024" },
      adjusted_ebitda: {
        href: evidencePath("run", source, 35),
        period: "FY2024",
        reason: NOT_STATED,
      },
    });
  });

  it("reads an adjusted heading as the reported one", () => {
    const source = entry(sections(true));
    expect(headlineSources(source, catalogue(FULL), "run").net_leverage).toEqual({
      href: evidencePath("run", source, 15),
      period: "FY2024",
    });
  });

  it("gives no source where the row states another value, another period or none", () => {
    const sources = headlineSources(
      entry(),
      catalogue({
        net_leverage: figure("2.26"),
        leverage: figure("2.80", "x", "FY2022"),
        revenue: figure("2,250", "US$m", ""),
      }),
      "run",
    );
    expect(Object.keys(sources)).toEqual(["adjusted_ebitda"]);
  });

  it("states no reason when the module did not say the figure was not supplied", () => {
    const rows = sections();
    const [, revenue] = rows;
    const table = revenue?.blocks[0];
    if (table?.type !== "table") throw new Error("the fixture has a revenue table");
    const last = table.rows[1];
    if (!last) throw new Error("the fixture has an FY2024 row");
    last.cells[2] = "";
    expect(headlineSources(entry(rows), catalogue(FULL), "run").adjusted_ebitda).toBeUndefined();
  });

  it("gives no source when a heading matches two columns", () => {
    const rows = [
      chart(
        "leverage",
        ["Total debt / EBITDA", "Total debt / adjusted EBITDA", "Net debt / EBITDA"],
        [["FY2024", "2.80", "2.80", "2.25", "x", "Synthetic."]],
      ),
    ];
    const sources = headlineSources(entry(rows), catalogue(FULL), "run");
    expect(sources.leverage).toBeUndefined();
    expect(sources.net_leverage).toBeDefined();
  });

  it("gives none for a handoff that is not Financial foundation, or has no entry or catalogue", () => {
    expect(headlineSources(entry(sections(), "CP-6"), catalogue(FULL), "run")).toEqual({});
    expect(headlineSources(undefined, catalogue(FULL), "run")).toEqual({});
    expect(headlineSources(entry(), undefined, "run")).toEqual({});
  });
});
