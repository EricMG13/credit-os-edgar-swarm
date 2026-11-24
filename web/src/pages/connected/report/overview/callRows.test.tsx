import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry, PublishedRun, Section, Snapshot } from "../../publishedReport";
import type { ReportView } from "../../reportView";
import { CallRow } from "./CallRow";
import { FigureRow } from "./FigureRow";
import { JudgementRow } from "./JudgementRow";

afterEach(cleanup);

let line = 0;
const text = (heading: string, ...paragraphs: string[]): Section => ({
  heading,
  level: 3,
  line: (line += 1),
  blocks: paragraphs.map((paragraph) => ({
    type: "text" as const,
    line: (line += 1),
    end: line,
    text: paragraph,
  })),
});
const table = (heading: string, headers: string[], ...rows: string[][]): Section => ({
  heading,
  level: 3,
  line: (line += 1),
  blocks: [
    {
      type: "table" as const,
      line: (line += 1),
      headers,
      rows: rows.map((cells) => ({ line: (line += 1), cells })),
    },
  ],
});

function entry(
  module: string,
  sections: Section[],
  confidence?: { value: number; band: string },
): OutputEntry {
  return {
    output: {
      id: `${module}-1`,
      module,
      label: module,
      href: `${module}.md`,
      sha256: "a".repeat(64),
      ...(confidence && { confidence }),
    },
    sections: [
      { heading: module, level: 1, line: (line += 1), blocks: [] },
      { heading: "Findings", level: 2, line: (line += 1), blocks: [] },
      ...sections,
    ],
    selected: true,
  };
}

const run = {
  folder: "run-1",
  issuer: "Northbridge",
  title: "Full credit assessment",
  period: "As of 2025-03-31",
  asOf: "2025-03-31",
  pathway: null,
  modules: {},
  changes: { first_run: true },
} as unknown as PublishedRun;
const snapshot = { workspace: { runs: {} } } as unknown as Snapshot;

function view(entries: OutputEntry[], lead?: OutputEntry): ReportView {
  return {
    entries,
    lead,
    modules: entries.map(({ output }) => ({
      id: output.module,
      name: output.module,
      state: "Delivered",
      outputs: [],
    })),
    models: [],
    catalogue: undefined,
  } as unknown as ReportView;
}

const committee = () =>
  entry(
    "CP-6",
    [
      text("Bottom line", "Gross leverage rose to 6.53x despite stronger earnings."),
      text(
        "Key findings",
        "Distributions exceed free cash flow.",
        "The view follows annual_report.pdf.",
      ),
      text("Contrary evidence and what would change the view", "Cash generation improved."),
      text("Decision", "Final Action Bias: Watchlist. The secured layer is watched."),
    ],
    { value: 53, band: "Low" },
  );

const foundation = () =>
  entry("CP-1", [
    table(
      "Chart data: leverage",
      ["Period", "Total debt / EBITDA", "Net debt / EBITDA", "Reporting unit", "Basis"],
      ["FY2023", "3.75", "3.00", "x", "Stated."],
      ["FY2024", "2.80", "2.25", "x", "Stated."],
    ),
    table(
      "Chart data: interest cover",
      ["Period", "EBITDA / cash interest", "Reporting unit", "Basis"],
      ["FY2023", "3.20", "x", "Stated."],
      ["FY2024", "4.00", "x", "Stated."],
    ),
    table(
      "Chart data: liquidity",
      ["Period", "Cash", "Undrawn committed facilities", "Reporting unit", "Basis"],
      ["FY2023", "300", "450", "US$m", "Stated."],
      ["FY2024", "275", "400", "US$m", "Stated."],
    ),
    table(
      "Chart data: revenue and EBITDA",
      ["Period", "Revenue", "Adjusted EBITDA", "Reporting unit", "Basis"],
      ["FY2023", "2,100", "410", "US$m", "Stated."],
      ["FY2024", "2,250", "Not supplied: the measure is not stated", "US$m", "Stated."],
    ),
  ]);

it("draws the call: stance, bottom line, confidence, clearance and the changes sentence", () => {
  const lead = committee();
  const validation = entry("CP-5", [text("Bottom line", "Pass with Remediation.")]);
  const selection = entry("CP-3", [text("Bottom line", "Requires more work.")], {
    value: 56,
    band: "Low",
  });
  render(
    <CallRow snapshot={snapshot} run={run} view={view([lead, validation, selection], lead)} />,
  );
  const call = screen.getByRole("region", { name: "The call" });
  expect(within(call).getByText("Watchlist")).toBeVisible();
  expect(
    within(call).getByText("Gross leverage rose to 6.53x despite stronger earnings."),
  ).toHaveClass("text-h1");
  expect(within(call).getByText("3 · all delivered")).toBeVisible();
  const confidence = screen.getByRole("region", { name: "Confidence" });
  expect(within(confidence).getByText("53")).toBeVisible();
  expect(within(confidence).getByText("Low")).toHaveClass("text-warning-text");
  expect(within(confidence).getByText("56")).toBeVisible();
  const clearance = screen.getByRole("region", { name: "Evidence clearance" });
  expect(within(clearance).getByText("Pass with Remediation.")).toBeVisible();
  expect(within(clearance).getByText("Delivered")).toBeVisible();
  expect(
    within(screen.getByRole("region", { name: "Since the earlier run" })).getByText(
      "No earlier run to compare.",
    ),
  ).toBeVisible();
});

it("draws each missing part of the call as a gap, with no score or stance invented", () => {
  render(<CallRow snapshot={snapshot} run={{ ...run, changes: null }} view={view([])} />);
  expect(screen.getByText("No credit view is available for this run.")).toBeVisible();
  expect(screen.getByText("No confidence score was recorded for this credit view.")).toBeVisible();
  expect(screen.getByText("Evidence validation is not part of this run.")).toBeVisible();
  expect(
    screen.getByText("No comparison with an earlier run is shown for this run."),
  ).toBeVisible();
  expect(screen.queryByText("Watchlist")).toBeNull();
  expect(screen.queryByText(/^\d+$/)).toBeNull();
});

it("draws no stance chip for a lead that states no action bias", () => {
  const lead = entry("CP-2", [text("Bottom line", "Credit is stable.")]);
  render(<CallRow snapshot={snapshot} run={run} view={view([lead], lead)} />);
  expect(screen.getByText("Credit is stable.")).toBeVisible();
  expect(screen.queryByText(/Watchlist|Avoid|Starter Position|Requires More Work/)).toBeNull();
});

it("draws the headline figures from the foundation's chart tables, each with its own mark", () => {
  const cp1 = foundation();
  render(<FigureRow snapshot={snapshot} run={run} view={view([cp1])} />);
  const gross = screen.getByRole("region", { name: "Total debt / EBITDA" });
  expect(within(gross).getByText("2.80x", { selector: "span" })).toBeVisible();
  expect(within(gross).getByText("from 3.75x in FY2023 (-0.95x)")).toBeVisible();
  expect(within(gross).getByText("Better")).toBeVisible();
  expect(
    within(gross).getByRole("img", {
      name: "Total debt / EBITDA: 3.75x in FY2023, 2.80x in FY2024.",
    }),
  ).toBeVisible();
  const net = screen.getByRole("region", { name: "Net debt / EBITDA" });
  expect(within(net).getByText("2.25x", { selector: "span" })).toBeVisible();
  expect(
    within(screen.getByRole("region", { name: "Revenue" })).getByText("US$2,250m"),
  ).toBeVisible();
  const cash = screen.getByRole("region", { name: "Cash" });
  expect(
    within(cash).getByRole("img", {
      name: "Cash US$275m beside Undrawn committed facilities US$400m in FY2024.",
    }),
  ).toBeVisible();
  const marks = screen.getAllByRole("img").map((mark) => mark.getAttribute("viewBox"));
  expect(marks).toHaveLength(5);
});

it("draws a figure the module did not supply as a gap in its own words, never as a number", () => {
  render(<FigureRow snapshot={snapshot} run={run} view={view([foundation()])} />);
  const ebitda = screen.getByRole("region", { name: "Adjusted EBITDA" });
  expect(within(ebitda).getByText("n.a.")).toBeVisible();
  expect(within(ebitda).getByText("FY2024: the measure is not stated")).toBeVisible();
  expect(within(ebitda).getByText("US$410m in FY2023")).toBeVisible();
  expect(within(ebitda).queryByRole("img")).toBeNull();
  expect(within(ebitda).queryByText(/Better|Worse/)).toBeNull();
  expect(within(ebitda).queryByText(/US\$0m|NaN/)).toBeNull();
});

it("draws one gap for the whole row when the foundation did not run", () => {
  render(<FigureRow snapshot={snapshot} run={run} view={view([])} />);
  expect(
    screen.getByText(
      "Not established for this run: the financial foundation has no figures to draw.",
    ),
  ).toBeVisible();
  expect(screen.queryByRole("img")).toBeNull();
});

it("draws a missing chart table as that tile's gap and keeps the others", () => {
  const cp1 = foundation();
  cp1.sections = cp1.sections.filter(({ heading }) => heading !== "Chart data: interest cover");
  render(<FigureRow snapshot={snapshot} run={run} view={view([cp1])} />);
  const cover = screen.getByRole("region", { name: "Interest cover" });
  expect(within(cover).getByText("Not supplied in this run's financial foundation.")).toBeVisible();
  expect(screen.getByRole("region", { name: "Total debt / EBITDA" })).toBeVisible();
});

it("numbers the lead's findings in its own words and links a paragraph that cites a source", () => {
  const lead = committee();
  render(<JudgementRow snapshot={snapshot} run={run} view={view([lead], lead)} />);
  const findings = screen.getByRole("region", { name: "Key findings" });
  const items = within(findings).getAllByRole("listitem");
  expect(items).toHaveLength(2);
  expect(items[0]).toHaveTextContent("01Distributions exceed free cash flow.");
  expect(within(findings).queryByText(/annual_report\.pdf/)).toBeNull();
  expect(
    within(findings).getByRole("link", { name: "Read this passage in Evidence" }),
  ).toBeVisible();
  const counter = screen.getByRole("region", {
    name: "Contrary evidence and what would change the view",
  });
  expect(counter).toHaveClass("bg-info-fill");
  expect(within(counter).getByText("Cash generation improved.")).toBeVisible();
});

it("draws a passage the lead did not write as a gap, and nothing without a credit view", () => {
  const lead = entry("CP-2", [text("Bottom line", "Credit is stable.")]);
  const { unmount } = render(
    <JudgementRow snapshot={snapshot} run={run} view={view([lead], lead)} />,
  );
  expect(
    screen.getAllByText("Not established for this run. The module's handoff has no such passage."),
  ).toHaveLength(2);
  unmount();
  const { container } = render(<JudgementRow snapshot={snapshot} run={run} view={view([])} />);
  expect(container).toBeEmptyDOMElement();
});
