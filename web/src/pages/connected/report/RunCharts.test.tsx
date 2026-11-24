import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import type { OutputEntry } from "../publishedReport";
import type { buildReportView } from "../reportView";
import { RunCharts } from "./RunCharts";

type View = ReturnType<typeof buildReportView>;

const SHA = "d".repeat(64);

function entry(options: { established?: boolean; limitation?: string } = {}): OutputEntry {
  const { established = true, limitation } = options;
  return {
    selected: true,
    output: {
      id: "debt",
      sha256: SHA,
      module: "CP-1",
      label: "",
      href: "",
      state: { established, declared: null },
      summary: limitation ? { bottomLine: "", confidence: "", limitation, line: 5 } : null,
      charts: [
        { title: "Debt maturities", table: 21, columns: [1], unit: "US$m" },
        { title: "Interest cover", table: 31, columns: [1], unit: "x" },
      ],
      chartGaps: [{ title: "Recorded gap", table: 50, gap: "No dated proposal was evaluated" }],
    },
    sections: [
      {
        heading: "Chart data: debt maturities",
        level: 3,
        line: 20,
        blocks: [
          {
            type: "table",
            line: 21,
            headers: ["Period", "Debt", "Reporting unit"],
            rows: [
              { line: 23, cells: ["FY2026", "1,250.50", "US$m"] },
              { line: 24, cells: ["FY2027", "Not supplied: schedule ends", "US$m"] },
            ],
          },
        ],
      },
      {
        heading: "Chart data: interest cover",
        level: 3,
        line: 30,
        blocks: [
          {
            type: "table",
            line: 31,
            headers: ["Period", "Cover"],
            rows: [{ line: 33, cells: ["FY2026", "3.10"] }],
          },
        ],
      },
    ],
  };
}

function viewOf(output: OutputEntry): View {
  return {
    catalogue: undefined,
    lead: undefined,
    entries: [output],
    models: [],
    modules: [{ id: "CP-1", name: "Financial foundation", state: "Delivered", outputs: [output] }],
  };
}

const rowOf = (title: string) => {
  const row = screen
    .getAllByRole("listitem")
    .find((item) => item.querySelector(":scope > div > span")?.textContent === title);
  if (!row) throw new Error(`No chart row for ${title}`);
  return within(row);
};

it("is a titled section, open by default, with one row per chart and gap under its module", () => {
  render(<RunCharts view={viewOf(entry())} folder="current" />);
  const section = within(screen.getByRole("region", { name: "Chart tables from this run" }));
  expect(section.getByRole("heading", { name: "Chart tables from this run" })).toBeInTheDocument();
  expect(section.getByRole("link", { name: "Financial foundation" })).toHaveAttribute(
    "href",
    "#modules/CP-1",
  );
  expect(section.getAllByRole("listitem")).toHaveLength(3);
  expect(
    rowOf("Debt maturities").getByText("US$m", { selector: "div > span" }),
  ).toBeInTheDocument();
  expect(rowOf("Interest cover").getByText("x (times)")).toBeInTheDocument();
  // The disclosures start closed; no table is open until asked.
  for (const details of document.querySelectorAll("details"))
    expect(details).not.toHaveAttribute("open");
});

it("holds the exact cells and the gap chip in a closed disclosure", () => {
  render(<RunCharts view={viewOf(entry())} folder="current" />);
  const row = rowOf("Debt maturities");
  fireEvent.click(row.getByText("Table for Debt maturities"));
  const region = row.getByRole("region", { name: "Debt maturities table" });
  expect(region).toHaveAttribute("tabindex", "0");
  expect(region.className).toContain("overflow-x-auto");
  const table = within(region);
  expect(table.getByRole("table", { name: "Debt maturities" })).toBeInTheDocument();
  expect(table.getByRole("columnheader", { name: "Debt" })).toBeInTheDocument();
  const amount = table.getByRole("cell", { name: "1,250.50" });
  expect(amount.firstElementChild?.className).toContain("font-mono");
  expect(amount.firstElementChild?.className).toContain("tabular-nums");
  const chip = table.getByText("Not supplied: schedule ends");
  expect(chip.className).toContain("gap-hatch");
  expect(chip.className).toContain("border-dashed");
  expect(chip.className).toContain("text-gap-text");
});

it("traces each chart to its table line in Evidence", () => {
  render(<RunCharts view={viewOf(entry())} folder="current" />);
  expect(rowOf("Debt maturities").getByRole("link", { name: "Source table" })).toHaveAttribute(
    "href",
    `/report/current#evidence/debt~${SHA}-21`,
  );
  expect(rowOf("Interest cover").getByRole("link", { name: "Source table" })).toHaveAttribute(
    "href",
    `/report/current#evidence/debt~${SHA}-31`,
  );
  expect(rowOf("Recorded gap").getByRole("link", { name: "Source table" })).toHaveAttribute(
    "href",
    `/report/current#evidence/debt~${SHA}-50`,
  );
  expect(rowOf("Recorded gap").getByRole("note")).toHaveTextContent(
    "No dated proposal was evaluated",
  );
});

it("withholds a not-established module's charts and draws its limitation as the reason", () => {
  const limitation = "No covenant document was supplied, so no test can be drawn.";
  render(<RunCharts view={viewOf(entry({ established: false, limitation }))} folder="current" />);
  expect(screen.queryByRole("table")).toBeNull();
  expect(screen.queryByText(/Table for/)).toBeNull();
  expect(rowOf("Debt maturities").getByRole("note")).toHaveTextContent(limitation);
  expect(rowOf("Debt maturities").getByText("Not established for this run")).toBeInTheDocument();
  expect(rowOf("Debt maturities").getByRole("link", { name: "Source table" })).toHaveAttribute(
    "href",
    `/report/current#evidence/debt~${SHA}-21`,
  );
});

it("holds back a page-citing limitation and traces it to the limitation line", () => {
  const limitation = "No test can be drawn; the only sight of the covenant is on p. 4.";
  render(<RunCharts view={viewOf(entry({ established: false, limitation }))} folder="current" />);
  expect(rowOf("Debt maturities").getByRole("note")).toHaveTextContent("See Evidence.");
  expect(document.body.textContent).not.toMatch(/p\. 4/);
  expect(rowOf("Debt maturities").getByRole("link", { name: "Source table" })).toHaveAttribute(
    "href",
    `/report/current#evidence/debt~${SHA}-5`,
  );
});

it("says a withheld module without a limitation is not assessable", () => {
  render(<RunCharts view={viewOf(entry({ established: false }))} folder="current" />);
  expect(screen.getAllByText("Module not assessable.").length).toBeGreaterThanOrEqual(2);
});

it("states that no charts were published when there are none", () => {
  const empty = entry();
  empty.output.charts = [];
  empty.output.chartGaps = [];
  render(<RunCharts view={viewOf(empty)} folder="current" />);
  expect(screen.getByText("No charts were published for this run.")).toBeInTheDocument();
});
