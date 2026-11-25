import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import type { OutputEntry, Section, Table } from "../publishedReport";
import {
  amountColumns,
  barExclusions,
  compactColumns,
  heldInEvidence,
  moduleRecords,
  numericColumns,
  readableTitle,
  statedGap,
  unitColumn,
} from "./moduleRecords";

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
        ["Instrument", "Carrying Value"],
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

  it("keeps a cited title's words without the reference, and module names in place of codes", () => {
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
    expect(cited).toBe("Debt schedule");
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

const FIXTURES = path.join(import.meta.dirname, "../../../../../tests/fixtures/live_2026_11_15");
const cellsOf = (line: string) =>
  line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((cell) => cell.trim());

/** The first table under a heading of a retained handoff, as the published report parses it. */
function fixtureTable(file: string, heading: string): Table {
  const lines = readFileSync(path.join(FIXTURES, file), "utf8").split("\n");
  const start = lines.findIndex((line) => line === `### ${heading}`);
  const at = lines.findIndex((line, index) => index > start && line.startsWith("|"));
  const rows: Table["rows"] = [];
  for (let index = at + 2; lines[index]?.startsWith("|"); index += 1)
    rows.push({ line: index + 1, cells: cellsOf(lines[index] ?? "") });
  return { type: "table", line: at + 1, headers: cellsOf(lines[at] ?? ""), rows };
}

const ACCEPTED = "earnings_update-CP-1-draft3-accepted.md";
const RELATIVE = "relative_value-CP-1-draft1.md";
const rowLine = (item: Table, first: string) =>
  item.rows.find(({ cells }) => cells[0] === first)?.line ?? -1;

describe("readableTitle", () => {
  it.each([
    "Q4 2025 results",
    "H1 2026 liquidity",
    "B2 notes",
    "A320 deliveries",
    "Debt maturity in 2028",
    "Cash flow from operations",
  ])("keeps %s intact", (heading) => {
    expect(readableTitle(heading)).toBe(heading);
  });

  it("keeps a chart's own title intact after its drawing prefix", () => {
    expect(readableTitle("Chart data: Q3 revenue bridge")).toBe("Q3 revenue bridge");
  });

  it.each([
    ["T4.18 Debt instruments", "Debt instruments"],
    ["T2B.7 - Covenant register", "Covenant register"],
    ["T6E.4 — Monitoring triggers", "Monitoring triggers"],
    ["T2R.1 – Rating drivers", "Rating drivers"],
    ["TL10.2 Lender list", "Lender list"],
    ["T2DS.6 Break points", "Break points"],
    ["P3 Priorities", "Priorities"],
  ])("strips the register code of %s", (heading, title) => {
    expect(readableTitle(heading)).toBe(title);
  });

  it.each([
    ["Income statement (annual.pdf)", "Income statement"],
    ["Cash flow per 10-K p. 44", "Cash flow"],
    ["Revenue (FY2024) from annual.pdf", "Revenue (FY2024)"],
    ["Income statement — annual.pdf", "Income statement"],
    ["Debt maturity in 2028 per annual.pdf", "Debt maturity in 2028"],
    ["Balance sheet annual.pdf restated", "Balance sheet restated"],
    [
      "T4.5 Cash flow statement TDG_2024-09-30_10-K_0001260221-24-000083_tdg-20240930.htm.jsonl",
      "Cash flow statement",
    ],
  ])("keeps the words of %s and drops only its reference", (heading, title) => {
    expect(readableTitle(heading)).toBe(title);
  });

  it("names a table untitled only when nothing readable remains", () => {
    expect(readableTitle("annual.pdf")).toBe("Untitled table");
    expect(readableTitle("T4.1 annual.pdf, page 12")).toBe("Untitled table");
  });
});

describe("heldInEvidence", () => {
  it.each([
    ["T4.1 Source register", "registers"],
    ["T4.2 Entity period key", "finding"],
    ["Entity keys", "passage"],
    ["T4.11 Definition conflict register", "registers"],
  ])("holds %s (%s) in Evidence", (heading, role) => {
    expect(heldInEvidence(heading, role)).toBe(true);
  });

  it.each([
    ["Risk register", "registers"],
    ["Debt by issuing entity", "finding"],
    ["T4.4 Income statement", "finding"],
    ["Chart data: source register", "drawing"],
    ["Source register", "calculations"],
  ])("keeps %s (%s) off the Evidence list", (heading, role) => {
    expect(heldInEvidence(heading, role)).toBe(false);
  });
});

describe("bars only for a column of like amounts", () => {
  it("leaves an aggregate control row out of the scale and draws it no bar", () => {
    const debt = fixtureTable(RELATIVE, "T4.18 Debt instruments");
    const principal = amountColumns(debt).get(3);
    const control = rowLine(debt, "Term loans — aggregate control, not additive");
    expect(control).toBeGreaterThan(0);
    expect(principal?.share("8702", control)).toBeNull();
    // Tranche J (3632) is the largest instrument once the control total is left out.
    expect(principal?.share("3632", rowLine(debt, "Tranche J"))).toBe(1);
  });

  it.each([
    ["Subtotal", "Secured subtotal"],
    ["Total", "Total debt"],
    ["Not additive", "Memo: not additive"],
  ])("draws no bar for a %s row", (_, label) => {
    const item = table(
      1,
      ["Instrument", "Principal"],
      [
        ["A", "100"],
        ["B", "50"],
        [label, "150"],
      ],
    );
    const column = amountColumns(item).get(1);
    expect(column?.share("150", 5)).toBeNull();
    expect(column?.share("100", 3)).toBe(1);
  });

  it("bars the principal of the accepted draft's debt instruments, one currency in two wordings", () => {
    const debt = fixtureTable(ACCEPTED, "T4.18 Debt instruments");
    const columns = amountColumns(debt, "Debt instruments");
    expect(columns.has(3)).toBe(true);
    // The financing adjustment (-188) is a row the table does not mark as a total, so it is
    // barred on the same scale, in the secondary tone for its sign; no row is guessed out.
    const adjustment = rowLine(debt, "Financing cost adjustment");
    expect(columns.get(2)?.share("-188", adjustment)).toBeCloseTo(188 / 2727);
    expect(columns.get(2)?.negative("-188")).toBe(true);
    expect(columns.get(2)?.share("2727", rowLine(debt, "2029 secured notes"))).toBe(1);
    expect(barExclusions(debt, "Debt instruments")).toEqual([]);
    expect(columns.has(12)).toBe(false);
  });

  it("draws no bars in a bridge, by its title, its first column or its opening and closing rows", () => {
    const bridge = fixtureTable(ACCEPTED, "Chart data: EBITDA bridge");
    // Untitled, its closing row is the sum of the others: an unlabelled total, so no bars either.
    expect(amountColumns(bridge).size).toBe(0);
    expect(amountColumns(bridge, "EBITDA bridge").size).toBe(0);
    const walk = table(
      1,
      ["Liquidity walk", "Amount"],
      [
        ["Cash", "100"],
        ["Draws", "50"],
      ],
    );
    expect(amountColumns(walk).size).toBe(0);
    const rolled = table(
      1,
      ["Step", "Cash"],
      [
        ["Opening cash", "100"],
        ["Free cash flow", "50"],
        ["Closing cash", "150"],
      ],
    );
    expect(amountColumns(rolled).size).toBe(0);
  });

  it("draws no bars where the rows are different measures", () => {
    for (const first of ["Item", "Metrics", "Measure", "Line item", "KPI", "Indicators"])
      expect(
        amountColumns(
          table(
            1,
            [first, "Amount"],
            [
              ["Revenue", "7940"],
              ["Headcount", "16600"],
            ],
          ),
        ).size,
      ).toBe(0);
  });

  it("draws no bars for years, ranks, tests, maturities, orders, counts or scores", () => {
    const years = table(
      1,
      ["Instrument", "Amount"],
      [
        ["A", "2028"],
        ["B", "2031"],
      ],
    );
    expect(amountColumns(years).size).toBe(0);
    for (const header of [
      "Debt rank",
      "Cash test",
      "Debt maturity",
      "Drawn order",
      "Number of debt facilities",
      "Debt count",
      "Liquidity score",
      "Debt #",
    ])
      expect(
        amountColumns(
          table(
            1,
            ["Instrument", header],
            [
              ["A", "1"],
              ["B", "3"],
            ],
          ),
        ).size,
      ).toBe(0);
    const maturing = fixtureTable(ACCEPTED, "Chart data: debt maturities");
    expect([...amountColumns(maturing, "Debt maturities").keys()]).toEqual([1]);
    // A word that only contains one of them ("Discounted", "Account") is no rank or count.
    const discounted = table(
      1,
      ["Period", "Discounted cash flow"],
      [
        ["FY2024", "10"],
        ["FY2025", "20"],
      ],
    );
    expect(amountColumns(discounted).size).toBe(1);
  });

  it("reads one currency however it is worded, and two scales as unlike", () => {
    const of = (first: string, second: string) =>
      amountColumns(
        table(
          1,
          ["Instrument", "Currency", "Principal"],
          [
            ["A", first, "500"],
            ["B", second, "400"],
          ],
        ),
      ).size;
    expect(of("USD", "USD reporting currency")).toBe(1);
    expect(of("USD millions", "US$m")).toBe(1);
    expect(of("$", "USD")).toBe(1);
    expect(of("EUR", "USD")).toBe(0);
    expect(of("USD millions", "USD billions")).toBe(0);
    expect(of("units", "Units")).toBe(1);
    expect(of("tonnes", "units")).toBe(0);
  });
});

describe("numericColumns", () => {
  it("finds the columns whose every figure is a number, a stated gap standing in", () => {
    const income = fixtureTable(ACCEPTED, "T4.4 Income statement");
    expect([...numericColumns(income)]).toEqual([1, 2]);
  });

  it("takes commas, a sign, parentheses and a trailing %, x or bps as numbers", () => {
    const item = table(
      1,
      ["Name", "A", "B", "C", "D"],
      [
        ["a", "(1,234)", "6.53x", "25%", "18619; 22967"],
        ["b", "-28", "+0.5x", "275 bps", "1"],
        ["c", "Not supplied: source dash", "", "275bps", "2"],
      ],
    );
    expect([...numericColumns(item)]).toEqual([1, 2, 3]);
    expect(numericColumns(table(1, ["A", "B"], [["x", ""]])).size).toBe(0);
  });
});

describe("unitColumn", () => {
  it("names a unit column that states one value in every row, as written", () => {
    const income = fixtureTable(ACCEPTED, "T4.4 Income statement");
    expect(unitColumn(income)).toEqual({ column: 3, header: "Unit", value: "USD millions" });
    const maturing = fixtureTable(ACCEPTED, "Chart data: debt maturities");
    expect(unitColumn(maturing)).toEqual({ column: 2, header: "Reporting unit", value: "US$m" });
  });

  it("keeps a unit column whose rows differ or leave one blank", () => {
    expect(unitColumn(fixtureTable(ACCEPTED, "T4.18 Debt instruments"))).toBeNull();
    const blank = table(
      1,
      ["Period", "Cash", "Currency"],
      [
        ["FY2024", "1", "USD"],
        ["FY2023", "2", ""],
      ],
    );
    expect(unitColumn(blank)).toBeNull();
  });
});

describe("compactColumns", () => {
  it("shows a wide register's instrument, rank, principal, coupon and maturity", () => {
    const debt = fixtureTable(ACCEPTED, "T4.18 Debt instruments");
    const shown = compactColumns(debt, [...Array(16).keys()]);
    expect(shown?.map((column) => debt.headers[column])).toEqual([
      "Instrument",
      "Ranking",
      "Principal",
      "Coupon or Margin",
      "Maturity",
    ]);
  });

  it("falls back to the first six columns, and leaves seven columns or fewer whole", () => {
    const headers = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const item = table(1, headers, [headers]);
    expect(compactColumns(item, [0, 1, 2, 3, 4, 5, 6, 7])).toEqual([0, 1, 2, 3, 4, 5]);
    expect(compactColumns(item, [0, 1, 2, 3, 4, 5, 6])).toBeNull();
  });

  it("takes a rate but never the rate type", () => {
    const headers = ["Facility", "Rate type", "Rate", "Amount", "B", "C", "D", "E"];
    const item = table(1, headers, [headers]);
    expect(compactColumns(item, [0, 1, 2, 3, 4, 5, 6, 7])).toEqual([0, 3, 2]);
  });
});

describe("statedGap", () => {
  it.each([
    ["Not supplied: tranche allocation unavailable", "Not supplied"],
    ["Not stated", "Not stated"],
    ["not stated", "not stated"],
    ["Withheld: commercial terms", "Withheld"],
    ["Not calculable", "Not calculable"],
    ["Not modelled", "Not modelled"],
    ["Not applicable: notes", "Not applicable"],
  ])("draws %s as %s", (cell, words) => {
    expect(statedGap(cell)).toBe(words);
  });

  it.each(["1871", "Nothing to note", "Not Ready", "Senior subordinated", ""])(
    "reads %s as no stated gap",
    (cell) => {
      expect(statedGap(cell)).toBeNull();
    },
  );
});

describe("H1: bars leave out only rows the table itself marks as totals", () => {
  it("bars every segment of the retained segment schedule, none of them a total", () => {
    const segments = fixtureTable(ACCEPTED, "Segment schedule");
    const sales = amountColumns(segments).get(2);
    expect(sales?.share("3941", rowLine(segments, "Power & Control"))).toBe(1);
    expect(sales?.share("3809", rowLine(segments, "Airframe"))).toBeCloseTo(3809 / 3941);
    expect(barExclusions(segments)).toEqual([]);
  });

  it.each([
    "Total",
    "Subtotal",
    "Sum",
    "Group",
    "Consolidated",
    "Aggregate",
    "Net debt",
    "Total debt",
    "Segment total",
    "Less cash",
    "**Notes**",
  ])("leaves the row %s out of the scale and names it", (name) => {
    const item = table(
      1,
      ["Item name", "Principal"],
      [
        ["Notes", "100"],
        ["Loan", "50"],
        [name, "400"],
      ],
    );
    const bars = amountColumns(item).get(1);
    expect(bars?.share("100", 3)).toBe(1);
    expect(bars?.share("50", 4)).toBe(0.5);
    expect(bars?.share("400", 5)).toBeNull();
    expect(barExclusions(item)).toEqual([name.replaceAll("**", "")]);
  });

  it.each([
    "Power & Control",
    "Group A notes",
    "Control systems",
    "Netherlands notes",
  ])("keeps %s as a peer: a word inside a name says nothing", (name) => {
    const item = table(
      1,
      ["Item name", "Principal"],
      [
        [name, "100"],
        ["Loan", "50"],
        ["Bond", "20"],
      ],
    );
    expect(amountColumns(item).get(1)?.share("100", 3)).toBe(1);
    expect(barExclusions(item)).toEqual([]);
  });

  it("draws no bars where an unlabelled row is the sum of the others", () => {
    const item = table(
      1,
      ["Item name", "Principal"],
      [
        ["Notes", "100"],
        ["Loan", "50"],
        ["All debt", "150"],
      ],
    );
    expect(amountColumns(item).size).toBe(0);
  });
});
