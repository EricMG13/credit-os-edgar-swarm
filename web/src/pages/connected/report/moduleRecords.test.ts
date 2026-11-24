import { describe, expect, it } from "vitest";
import type { OutputEntry, Section, Table } from "../publishedReport";
import { amountColumns, moduleRecords } from "./moduleRecords";

const table = (line: number, headers: string[], rows: string[][]): Table => ({
  type: "table",
  line,
  headers,
  rows: rows.map((cells, at) => ({ line: line + 2 + at, cells })),
});
const text = (line: number, value: string) => ({
  type: "text" as const,
  line,
  end: line,
  text: value,
});
const section = (heading: string, level: number, line: number, blocks: Section["blocks"] = []) => ({
  heading,
  level,
  line,
  blocks,
});

function entry(sections: Section[], extra: Partial<OutputEntry["output"]> = {}): OutputEntry {
  return {
    selected: true,
    output: { id: "a", module: "CP-1", label: "a", href: "", sha256: "a".repeat(64), ...extra },
    sections,
  };
}

const statement = table(
  11,
  ["Line item", "FY2024", "FY2023", "Unit"],
  [["Net sales", "7940", "6585", "USD millions"]],
);
const debt = table(
  21,
  ["Instrument", "Principal", "Spread (bps)"],
  [["Term loan I", "1,871", "275"]],
);
const chart = table(31, ["Period", "Total debt / EBITDA"], [["FY2024", "6.53"]]);
const calc = table(41, ["ID", "Result"], [["C01", "24880"]]);
const source = table(51, ["Source", "File"], [["S1", "x.pdf"]]);
const entity = table(61, ["Entity", "Period"], [["Issuer", "FY2024"]]);
const risks = table(71, ["Risk", "Probability", "Impact"], [["Refinancing", "Low", "High"]]);
const confidence = table(81, ["Input", "Value"], [["Coverage", "High"]]);

const sections: Section[] = [
  section("Findings", 2, 1),
  section("Bottom line", 3, 2, [text(3, "Leverage rose.")]),
  section("T4.4 Income statement", 3, 10, [statement]),
  section("T4.18 Debt instruments", 3, 19, [text(20, "All money columns are USD millions."), debt]),
  section("Chart data: leverage", 3, 30, [chart, text(35, "Reported EBITDA basis.")]),
  section("T4.1 Source register", 3, 50, [source]),
  section("T4.2 Entity period key", 3, 60, [entity]),
  section("Risk register", 3, 70, [risks]),
  section("Confidence inputs", 3, 80, [confidence]),
  section("Forecast inputs (machine-readable)", 3, 90, [table(91, ["Key", "Value"], [["g", "1"]])]),
  section("Calculations", 2, 40, [calc]),
];

describe("moduleRecords", () => {
  const records = moduleRecords(entry(sections, { charts: [{ table: 31, title: "Leverage" }] }));
  const byKind = (kind: string) => records.tables.filter((item) => item.kind === kind);

  it("puts the module's own tables under Statements, coded or not, without the code", () => {
    expect(byKind("statements").map(({ title }) => title)).toEqual([
      "Income statement",
      "Debt instruments",
    ]);
    expect(byKind("statements")[1]?.notes.map(({ line }) => line)).toEqual([20]);
  });

  it("puts a chart's table under Chart tables by the chart's title, with its qualification", () => {
    const [drawn] = byKind("charts");
    expect(drawn?.title).toBe("Leverage");
    expect(drawn?.table).toBe(chart);
    expect(drawn?.notes.map(({ line }) => line)).toEqual([35]);
  });

  it("draws a drawn register and the calculations, and holds every other register in Evidence", () => {
    expect(byKind("registers").map(({ title }) => title)).toEqual(["Risk register"]);
    expect(byKind("calculations").map(({ table: item }) => item)).toEqual([calc]);
    expect(records.evidence.map(({ title }) => title)).toEqual([
      "Source register",
      "Entity period key",
      "Confidence inputs",
    ]);
  });

  it("leaves machinery the page never draws out of both lists", () => {
    const all = [
      ...records.tables.map(({ title }) => title),
      ...records.evidence.map(({ title }) => title),
    ];
    expect(all.join("|")).not.toMatch(/Forecast inputs/);
  });

  it("loses no table of a reader section: each is drawn or listed in Evidence", () => {
    const drawn = new Set(records.tables.map(({ table: item }) => item.line));
    const held = new Set(records.evidence.map(({ line }) => line));
    for (const item of sections) {
      if (/machine-readable/.test(item.heading)) continue;
      for (const block of item.blocks)
        if (block.type === "table") expect(drawn.has(block.line) || held.has(item.line)).toBe(true);
    }
  });

  it("names a second table of one section apart from the first", () => {
    const two = moduleRecords(
      entry([section("Findings", 2, 1), section("Segment schedule", 3, 2, [statement, debt])]),
    );
    expect(two.tables.map(({ title }) => title)).toEqual([
      "Segment schedule",
      "Segment schedule · table 2",
    ]);
  });
});

describe("amountColumns", () => {
  it("bars an amount column by its largest absolute value, leaving rates and periods plain", () => {
    const columns = amountColumns(
      table(
        1,
        ["Instrument", "Principal", "Spread (bps)", "Maturity"],
        [
          ["A", "1,871", "275", "2028"],
          ["B", "(3,742)", "250", "2030"],
        ],
      ),
    );
    expect([...columns.keys()]).toEqual([1]);
    expect(columns.get(1)?.share("1,871")).toBeCloseTo(0.5);
    expect(columns.get(1)?.share("(3,742)")).toBe(1);
    expect(columns.get(1)?.negative("(3,742)")).toBe(true);
  });

  it("keeps a stated gap in an amount column, drawing no bar for it, and never reads it as zero", () => {
    const columns = amountColumns(
      table(
        1,
        ["Period", "Cash"],
        [
          ["FY2024", "275"],
          ["FY2025", "100"],
          ["FY2023", "Not supplied: synthetic"],
          ["FY2022", ""],
        ],
      ),
    );
    expect(columns.get(1)?.share("Not supplied: synthetic")).toBeNull();
    expect(columns.get(1)?.share("")).toBeNull();
    expect(columns.get(1)?.share("275")).toBe(1);
  });

  it("bars only a named value with two figures or more, never a generic Value column", () => {
    expect(
      amountColumns(
        table(
          1,
          ["Item", "Value"],
          [
            ["A", "1"],
            ["B", "2"],
          ],
        ),
      ).size,
    ).toBe(0);
    expect(amountColumns(table(1, ["Period", "Cash"], [["FY2024", "275"]])).size).toBe(0);
    const carrying = amountColumns(
      table(
        1,
        ["Item", "Carrying Value"],
        [
          ["A", "1"],
          ["B", "2"],
        ],
      ),
    );
    expect(carrying.get(1)?.share("1")).toBe(0.5);
  });

  it("draws a zero as a figure with no length, and no bars when the largest value is zero", () => {
    const columns = amountColumns(table(1, ["Period", "Cash"], [["FY2024", "0"]]));
    expect(columns.size).toBe(0);
    const mixed = amountColumns(
      table(
        1,
        ["Period", "Cash"],
        [
          ["FY2024", "0"],
          ["FY2023", "10"],
        ],
      ),
    );
    expect(mixed.get(1)?.share("0")).toBe(0);
  });

  it("does not bar a column with any text that is neither a number nor a stated gap", () => {
    const columns = amountColumns(table(1, ["Period", "Net debt"], [["FY2024", "18619; 22967"]]));
    expect(columns.size).toBe(0);
  });

  it("does not bar statement period columns or ratio columns", () => {
    expect(amountColumns(statement).size).toBe(0);
    expect(amountColumns(chart).size).toBe(0);
  });
});

describe("review cases", () => {
  it("draws no bars where rows state different currencies or units", () => {
    const mixed = table(
      1,
      ["Instrument", "Currency", "Principal"],
      [
        ["EUR notes", "EUR", "500"],
        ["USD notes", "USD", "400"],
      ],
    );
    expect(amountColumns(mixed).size).toBe(0);
    const one = table(
      1,
      ["Instrument", "Currency", "Principal"],
      [
        ["A", "USD", "500"],
        ["B", "USD", "400"],
      ],
    );
    expect(amountColumns(one).size).toBe(1);
  });

  it.each([
    "Revenue growth",
    "Net debt to EBITDA (x)",
    "Revenue CAGR",
    "Cash conversion",
    "Days cash",
  ])("draws no bars in a %s column", (header) => {
    expect(
      amountColumns(
        table(
          1,
          ["Period", header],
          [
            ["FY2024", "4.2"],
            ["FY2023", "3.9"],
          ],
        ),
      ).size,
    ).toBe(0);
  });

  it("keeps tables about an issuing entity or identity on the page; holds entity keys in Evidence", () => {
    const records = moduleRecords(
      entry([
        section("Findings", 2, 1),
        section("Debt by issuing entity", 3, 2, [table(3, ["Entity", "Debt"], [["A", "1"]])]),
        section("Guarantor identity and coverage", 3, 10, [
          table(11, ["Guarantor", "Share"], [["B", "1"]]),
        ]),
        section("T4.2 Entity period key", 3, 20, [
          table(21, ["Entity", "Period"], [["A", "FY2024"]]),
        ]),
      ]),
    );
    expect(records.tables.map(({ title }) => title)).toEqual([
      "Debt by issuing entity",
      "Guarantor identity and coverage",
    ]);
    expect(records.evidence.map(({ title }) => title)).toEqual(["Entity period key"]);
  });

  it("tells apart tables of the same title in different sections", () => {
    const records = moduleRecords(
      entry([
        section("Findings", 2, 1),
        section("Maturities", 3, 2, [table(3, ["Year", "Amount"], [["2028", "1"]])]),
        section("Maturities", 3, 10, [table(11, ["Year", "Amount"], [["2029", "1"]])]),
      ]),
    );
    expect(records.tables.map(({ title }) => title)).toEqual([
      "Maturities",
      "Maturities · table 2",
    ]);
  });

  it("draws no title that cites a source, and module names in place of codes", () => {
    const records = moduleRecords(
      entry([
        section("Findings", 2, 1),
        section(
          "Debt schedule per TDG_2024-09-30_10-K_0001260221-24-000083_tdg-20240930.htm.jsonl",
          3,
          2,
          [table(3, ["Year", "Amount"], [["2028", "1"]])],
        ),
        section("Inputs from CP-1", 3, 10, [table(11, ["Year", "Amount"], [["2029", "1"]])]),
      ]),
    );
    const [cited, coded] = records.tables.map(({ title }) => title);
    expect(cited).toBe("Untitled table");
    expect(coded).not.toMatch(/CP-1/);
  });

  it("drops register codes of any shape and tells repeated held registers apart", () => {
    const records = moduleRecords(
      entry([
        section("Findings", 2, 1),
        section("T2B.1 - Register", 3, 2, [table(3, ["A", "B"], [["x", "1"]])]),
        section("T2B.2 - Register", 3, 10, [table(11, ["A", "B"], [["x", "1"]])]),
        section("Analytical appendix", 3, 20),
        section("T2DS.6 Break points", 4, 21, [table(22, ["A", "B"], [["x", "1"]])]),
      ]),
    );
    expect(records.evidence.map(({ title }) => title)).toEqual([
      "Register",
      "Register · 2",
      "Break points",
    ]);
  });
});
