import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import type {
  CatalogueRun,
  OutputEntry,
  PublishedRun,
  Section,
  Snapshot,
  Table,
} from "../publishedReport";
import type { ReportView } from "../reportView";
import type { LeadProps } from "./leads/types";
import { placeProse } from "./ModuleProse";
import { Modules } from "./Modules";

// Cases from the coordinator's review of the module frame (2026-11-24); each names its item.

const lead = vi.hoisted(() => ({
  current: undefined as undefined | (((props: LeadProps) => unknown) & { draws?: string[] }),
}));
vi.mock("./leads", () => ({ leadFor: () => lead.current }));

afterEach(cleanup);
beforeEach(() => {
  lead.current = undefined;
});

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

function page(
  sections: Section[],
  {
    module = "CP-2",
    name = "Fundamental credit",
    extra = {},
    catalogue,
  }: {
    module?: string;
    name?: string;
    extra?: Partial<OutputEntry["output"]>;
    catalogue?: CatalogueRun;
  } = {},
) {
  const entry: OutputEntry = {
    selected: true,
    output: {
      id: `r/${module}.md`,
      module,
      label: "a",
      href: "",
      sha256: "a".repeat(64),
      ...extra,
    },
    sections,
  };
  const view = {
    entries: [entry],
    modules: [{ id: module, name, state: "Delivered", outputs: [entry] }],
    catalogue,
    lead: undefined,
    models: [],
  } as unknown as ReportView;
  const run = { folder: "r", issuer: "Issuer", asOf: "2026-10-31", modules: {} } as PublishedRun;
  return render(
    <Modules snapshot={{ chips: {} } as Snapshot} run={run} view={view} module={module} />,
  );
}

const findings = section("Findings", 2, 1);
const bottom = section("Bottom line", 3, 2, [text(3, "The credit is sound but thin.")]);

it("3: draws a table written in the Limitations passage inside the limitations block", () => {
  page([
    findings,
    bottom,
    section("Limitations", 3, 10, [
      text(11, "Only one period was supplied."),
      table(12, ["Limitation", "Effect"], [["No FY2022", "One step only"]]),
    ]),
  ]);
  const limits = screen.getByRole("region", { name: "Limitations of this module" });
  expect(within(limits).getByText("Only one period was supplied.")).toBeVisible();
  expect(within(limits).getByRole("cell", { name: "No FY2022" })).toBeVisible();
});

it("4: draws a drawing section's prose with no table as the stated gap for that visual", () => {
  page([
    findings,
    bottom,
    section("Map: transmission", 3, 20, [
      text(21, "Not supplied: no relationships were documented."),
    ]),
  ]);
  const gap = screen.getByRole("region", { name: "transmission" });
  expect(within(gap).getByText("Not supplied: no relationships were documented.")).toBeVisible();
});

it("6: keeps a chart gap's word and its source link when the reason cites a source", () => {
  page(
    [
      findings,
      bottom,
      section("Chart data: liquidity", 3, 30, [table(31, ["Period", "Cash"], [["FY2024", "1"]])]),
    ],
    {
      extra: {
        chartGaps: [
          {
            table: 31,
            title: "Liquidity",
            gap: "Not supplied: see TDG_2024-09-30_10-K_0001260221-24-000083_tdg-20240930.htm.jsonl, page 63",
          },
        ],
        maps: [{ table: 31, name: "Transmission", gap: "Withheld: no executed documents" }],
      },
    },
  );
  const limits = screen.getByRole("region", { name: "Limitations of this module" });
  expect(within(limits).getByText(/^Not supplied\. The reason cites a source/)).toBeVisible();
  expect(within(limits).queryByText(/10-K/)).toBeNull();
  expect(
    within(limits).getAllByRole("link", { name: "Source table in Evidence" })[0],
  ).toHaveAttribute("href", expect.stringContaining("#evidence/"));
  // A map that carries a gap is a limitation too.
  expect(within(limits).getByText("Transmission: not drawn")).toBeVisible();
  expect(within(limits).getByText("Withheld: no executed documents")).toBeVisible();
});

it("7: keeps the portfolio-limits chart on the committee page with its mandate note", () => {
  page(
    [
      findings,
      bottom,
      section("Chart data: portfolio limits", 3, 40, [
        table(41, ["Limit", "Current", "Maximum"], [["Single name", "2%", "5%"]]),
      ]),
    ],
    {
      module: "CP-6",
      name: "Committee decision",
      extra: { charts: [{ table: 41, title: "Portfolio limits", kind: "limits" }] },
    },
  );
  const tile = screen.getByRole("region", { name: "Portfolio limits" });
  expect(tile).toHaveTextContent(/portfolio limits could not be checked against the mandate/i);
});

it("8: draws one Key findings region for a passage that holds only its Basis line", () => {
  page([
    findings,
    bottom,
    section("Key findings", 3, 5, [text(6, "Basis: annual report, page 4")]),
  ]);
  expect(screen.getAllByRole("region", { name: "Key findings" })).toHaveLength(1);
});

it("9: keeps drawing, after the lead, the kinds the lead does not draw", () => {
  const sections = [
    findings,
    bottom,
    section("Map: transmission", 3, 20, [table(21, ["From", "To", "Kind"], [["A", "B", "Fact"]])]),
    section("Events: dates", 3, 30, [table(31, ["Date", "Event"], [["2026-01-01", "Maturity"]])]),
  ];
  const extra = {
    maps: [{ table: 21, name: "Transmission" }],
    events: [{ table: 31, lane: "Dates" }],
  };
  const Lead = vi.fn(() => <section aria-label="Lead">lead</section>);
  lead.current = Object.assign(Lead, { draws: ["maps"] });
  page(sections, { extra });
  expect(screen.getByRole("region", { name: "Lead" })).toBeInTheDocument();
  expect(screen.queryByRole("region", { name: "Transmission" })).toBeNull();
  const dates = screen.getByRole("region", { name: "Dates" });
  expect(screen.getByRole("region", { name: "Lead" }).compareDocumentPosition(dates)).toBe(
    Node.DOCUMENT_POSITION_FOLLOWING,
  );
  cleanup();
  // A lead that lists nothing leaves every kind to the frame.
  lead.current = Object.assign(
    vi.fn(() => <section aria-label="Lead">lead</section>),
    {},
  );
  page(sections, { extra });
  expect(screen.getByRole("region", { name: "Transmission" })).toBeInTheDocument();
  expect(screen.getByRole("region", { name: "Dates" })).toBeInTheDocument();
});

it("10: keeps register and entity-key sections off the page and a table's note with its table", () => {
  page([
    findings,
    bottom,
    section("T4.2 Entity period key", 3, 10, [
      text(11, "Balance-sheet observations are instants."),
      table(12, ["Entity Name", "Fiscal Year End"], [["Issuer", "September 30"]]),
    ]),
    section("T4.18 Debt instruments", 3, 20, [
      text(21, "All money columns below are USD millions."),
      table(
        22,
        ["Instrument", "Principal"],
        [
          ["Notes", "500"],
          ["Loan", "250"],
        ],
      ),
    ]),
    section("Financial interpretation", 3, 30, [text(31, "Operating improvement is genuine.")]),
  ]);
  expect(screen.queryByRole("region", { name: "Entity period key" })).toBeNull();
  expect(screen.queryByRole("region", { name: "Debt instruments" })).toBeNull();
  expect(screen.queryByText("All money columns below are USD millions.")).toBeNull();
  expect(screen.getByRole("region", { name: "Financial interpretation" })).toBeVisible();
  fireEvent.click(screen.getByRole("button", { name: "Show records" }));
  expect(screen.getByText("All money columns below are USD millions.")).toBeVisible();
});

it("10: reads a long section in two columns and pairs short ones side by side", () => {
  const prose = (line: number, words: number) => ({
    section: section(`S${String(line)}`, 3, line),
    title: `S${String(line)}`,
    paragraphs: [],
    typed: [],
    words,
  });
  const spans = placeProse([prose(1, 400), prose(2, 50), prose(3, 50), prose(4, 50)]).map(
    ({ span }) => span,
  );
  expect(spans).toEqual([12, 6, 6, 12]);
});

const metrics = {
  leverage: {
    value: "6.53",
    unit: "x",
    period: "FY2024",
    basis: "Total debt over reported EBITDA",
    prior: { value: "6.27", period: "FY2023" },
    change: "0.26",
  },
  cash: { value: "6261", unit: "US$m", period: "FY2024", basis: "Reported" },
};

it("11: draws the CP-1 strip from the catalogue, each figure with its period, basis and prior", () => {
  page([findings, bottom], {
    module: "CP-1",
    name: "Financial foundation",
    catalogue: { id: "r", metrics } as unknown as CatalogueRun,
  });
  const strip = within(screen.getByLabelText("Headline figures"));
  expect(strip.getByText("6.53x")).toBeVisible();
  expect(strip.getByText(/from 6\.27x in FY2023/)).toBeVisible();
  expect(strip.getByText("+0.26x worse")).toBeVisible();
  expect(strip.getByText("FY2024 · Total debt over reported EBITDA")).toBeVisible();
  // No change is drawn where the catalogue gives none; an absent figure is a gap, never zero.
  expect(strip.getByText("FY2024 · Reported")).toBeVisible();
  expect(strip.getAllByText("Not shown here").length).toBeGreaterThan(0);
  expect(strip.queryByText("0")).toBeNull();
});

it("11: draws no strip for another module or a catalogue that states no headline figure", () => {
  page([findings, bottom], { catalogue: { id: "r", metrics } as unknown as CatalogueRun });
  expect(screen.queryByLabelText("Headline figures")).toBeNull();
});

it("14: states the basis from the entity period key and puts the code after the name", () => {
  page(
    [
      findings,
      bottom,
      section("T4.2 Entity period key", 3, 10, [
        table(
          12,
          [
            "Entity Name",
            "Fiscal Year End",
            "Reporting Currency",
            "Reporting Unit",
            "Accounting Basis",
            "Available Periods",
          ],
          [["Issuer", "September 30", "USD", "millions", "US GAAP", "FY2024; FY2023"]],
        ),
      ]),
    ],
    { module: "CP-1", name: "Financial foundation" },
  );
  const header = screen.getByRole("region", { name: "Financial foundation" });
  expect(
    within(header).getByText(
      "Fiscal year end September 30 · USD millions · US GAAP · FY2024; FY2023",
    ),
  ).toBeVisible();
  const name = within(header).getByRole("heading", { level: 2, name: "Financial foundation" });
  const code = within(header).getByText("CP-1");
  expect(name.compareDocumentPosition(code)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
});

it.each([
  [{ value: 72, band: "Medium" }, ["72", "/ 100", "Medium"]],
  [{ value: 0, band: "Insufficient Information" }, ["0", "/ 100", "Insufficient Information"]],
  [{ missing: "the scorer refused the inputs" }, ["Not scored: the scorer refused the inputs"]],
])(
  "20: draws the page's confidence %j with its trace to the scored inputs",
  async (confidence, words) => {
    page(
      [
        findings,
        bottom,
        section("Confidence inputs", 3, 50, [
          table(51, ["Input", "Value"], [["Coverage", "High"]]),
        ]),
      ],
      { extra: { confidence } },
    );
    const score = within(screen.getByRole("group", { name: "Confidence score" }));
    for (const word of words) expect(score.getByText(word)).toBeVisible();
    fireEvent.click(score.getByRole("button", { name: "Show sources for the confidence score" }));
    expect(await screen.findByRole("dialog")).toHaveTextContent("Coverage");
  },
);

const profile = (rows: string[][]) =>
  section("Company profile", 3, 60, [table(61, ["Field", "Value"], rows)]);
const businessPage = (sections: Section[]) =>
  page([findings, bottom, ...sections], { module: "CP-1A", name: "Business & governance" });

it("21: draws the business description on Business & governance, register over profile", () => {
  businessPage([
    section("T1A.1 company_description", 3, 70, [
      table(
        71,
        ["Issuer", "Business description", "Sector"],
        [["I", "Makes aircraft parts.", "Aerospace"]],
      ),
    ]),
    profile([["Business", "From the profile."]]),
  ]);
  const header = screen.getByRole("region", { name: "Business & governance" });
  expect(within(header).getByText("Makes aircraft parts.")).toBeVisible();
  expect(within(header).getByText("Aerospace")).toBeVisible();
  expect(within(header).queryByText("From the profile.")).toBeNull();
  expect(within(header).getByRole("link", { name: "Business description" })).toHaveAttribute(
    "href",
    expect.stringContaining("#evidence/"),
  );
});

it("21: draws the gap rather than guess between two Business rows", () => {
  businessPage([
    profile([
      ["Business", "First."],
      ["Business", "Second."],
    ]),
  ]);
  const header = screen.getByRole("region", { name: "Business & governance" });
  expect(within(header).getByText("Business description not in this run")).toBeVisible();
  expect(within(header).queryByText("First.")).toBeNull();
});

it("21: prints no description that cites a file, and names modules in place of codes", () => {
  businessPage([
    profile([
      ["Business", "Per TDG_2024-09-30_10-K_0001260221-24-000083_tdg-20240930.htm.jsonl, page 4"],
    ]),
  ]);
  expect(screen.getByText("Business description in Evidence")).toBeVisible();
  expect(screen.queryByText(/10-K/)).toBeNull();
  cleanup();
  businessPage([profile([["Business", "Described by CP-1 as an aerospace supplier."]])]);
  expect(screen.queryByText(/CP-1 as/)).toBeNull();
});

it("21: draws no business description on other modules", () => {
  page([findings, bottom, profile([["Business", "Makes parts."]])]);
  expect(screen.queryByText("Makes parts.")).toBeNull();
  expect(screen.queryByText("Business description not in this run")).toBeNull();
});

it("17: draws a typed table's section as one region of its name, without the register code", () => {
  page([
    findings,
    bottom,
    section("T2.12 Monitoring triggers", 3, 80, [
      table(
        81,
        ["Trigger", "Threshold", "Signal", "Why It Matters", "Credit Impact"],
        [["Interest cover", "Below 3.1x", "Falling", "Lower cash cover", "Less headroom"]],
      ),
    ]),
  ]);
  expect(screen.getAllByRole("region", { name: "Monitoring triggers" })).toHaveLength(1);
  expect(screen.getByRole("region", { name: "Monitoring triggers table" })).toBeVisible();
  expect(document.body.textContent).not.toContain("T2.12");
});
