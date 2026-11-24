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
  expect(
    within(call).getByRole("heading", { name: "The call · Committee decision" }),
  ).toBeVisible();
  expect(within(call).getByText("Watchlist")).toBeVisible();
  expect(
    within(call).getByText("Gross leverage rose to 6.53x despite stronger earnings."),
  ).toHaveClass("text-h1");
  expect(within(call).getByText("3 · all delivered")).toBeVisible();
  const confidence = screen.getByRole("region", { name: "Confidence" });
  expect(within(confidence).getByText("53")).toBeVisible();
  expect(within(confidence).getByText("Low")).toHaveClass("text-warning-text");
  expect(
    within(confidence).getByRole("img", {
      name: "Confidence 53 of 100, band Low. Security selection scored 56, band Low.",
    }),
  ).toBeVisible();
  expect(within(confidence).getByText("Committee decision 53")).toBeInTheDocument();
  expect(within(confidence).getByText("Security selection 56")).toBeInTheDocument();
  const clearance = screen.getByRole("region", { name: "Evidence clearance" });
  expect(within(clearance).getByText("Pass with Remediation.")).toBeVisible();
  expect(within(clearance).queryByText("Delivered")).toBeNull();
  expect(
    within(clearance).getByText(
      "Issue counts by severity and committee use are not typed in this run.",
    ),
  ).toBeVisible();
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
  const change = screen.getByRole("region", { name: "What would change the view" });
  expect(change).not.toHaveClass("bg-info-fill");
  expect(
    within(change).getByText(
      "The two outcomes, resolved favourably and resolved adversely, are not typed in this run; the module's passage is quoted above as written.",
    ),
  ).toBeVisible();
});

it("draws a passage the lead did not write as a gap, and nothing without a credit view", () => {
  const lead = entry("CP-2", [text("Bottom line", "Credit is stable.")]);
  const { unmount } = render(
    <JudgementRow snapshot={snapshot} run={run} view={view([lead], lead)} />,
  );
  expect(
    screen.getAllByText("Not established for this run. The module's handoff has no such passage."),
  ).toHaveLength(2);
  expect(
    screen.getByText(/The two outcomes, resolved favourably and resolved adversely/),
  ).toBeVisible();
  unmount();
  const { container } = render(<JudgementRow snapshot={snapshot} run={run} view={view([])} />);
  expect(container).toBeEmptyDOMElement();
});

it("keeps the counter passage whole under its own heading, one trace per paragraph, and never splits it by position", () => {
  const lead = entry("CP-6", [
    text(
      "Contrary evidence and what would change the view",
      "Cash generation improved.",
      "Liquidity is thin.",
      "A refinancing of the 2028 notes would soften the view.",
    ),
  ]);
  render(<JudgementRow snapshot={snapshot} run={run} view={view([lead], lead)} />);
  const counter = screen.getByRole("region", {
    name: "Contrary evidence and what would change the view",
  });
  expect(within(counter).getByText("Cash generation improved.")).toBeVisible();
  expect(within(counter).getByText("Liquidity is thin.")).toBeVisible();
  expect(
    within(counter).getByText("A refinancing of the 2028 notes would soften the view."),
  ).toBeVisible();
  expect(within(counter).getAllByRole("link", { name: /^Source for / })).toHaveLength(3);
  const outcomes = screen.getByRole("region", { name: "What would change the view" });
  expect(within(outcomes).queryByText(/Liquidity is thin|refinancing/)).toBeNull();
  expect(within(outcomes).getByText(/are not typed in this run/)).toBeVisible();
});

it("names the modules that were not delivered in the run facts, by name and state", () => {
  const lead = committee();
  const states = { "CP-6": "Delivered with gaps", "CP-4": "Not assessable", "CP-1C": "Not run" };
  const modules = Object.entries(states).map(([id, state]) => ({
    id,
    name: { "CP-6": "Committee decision", "CP-4": "Legal & covenants", "CP-1C": "Peer benchmark" }[
      id
    ],
    state,
    outputs: [],
  }));
  render(
    <CallRow
      snapshot={snapshot}
      run={run}
      view={{ ...view([lead], lead), modules } as unknown as ReportView}
    />,
  );
  expect(
    screen.getByText(
      "3 · all delivered except Legal & covenants (not assessable), Peer benchmark (not run)",
    ),
  ).toBeVisible();
});

function compared(currentBias: string | null, priorBias: string | null, bottom: string) {
  const prior = { ...run, folder: "run-0", asOf: "2024-03-31", issuerKey: "nb" } as PublishedRun;
  const current = {
    ...run,
    issuerKey: "nb",
    pathway: "full",
    changes: {
      pack: {
        prior: { run: "run-0", as_of: "2024-03-31", pathway: "full" },
        current: { as_of: "2025-03-31", pathway: "full" },
      },
    },
  } as unknown as PublishedRun;
  prior.pathway = "full";
  prior.modules = priorBias ? { "CP-6": { outputs: ["run-0/cp6"], default: "run-0/cp6" } } : {};
  const snap = {
    catalogue: { real: [] },
    workspace: {
      runs: { k0: prior, k1: current },
      outputs: {
        "run-0/cp6": {
          id: "run-0/cp6",
          run: "k0",
          module: "CP-6",
          sha256: "p".repeat(64),
          label: "CP-6",
          href: "",
        },
      },
      handoffs: {
        ["p".repeat(64)]: [
          {
            heading: "Decision",
            level: 3,
            line: 2,
            blocks: [
              {
                type: "text",
                line: 3,
                end: 3,
                text: `Final Action Bias: ${String(priorBias)}. R.`,
              },
            ],
          },
        ],
      },
      models: [],
    },
    chips: {},
  } as unknown as Snapshot;
  const lead = entry(
    "CP-6",
    currentBias ? [text("Decision", `Final Action Bias: ${currentBias}. Watched.`)] : [],
  );
  const changes = entry("CP-8", [text("Bottom line", bottom)]);
  return { snap, current, lead, changes };
}

it("draws the comparison verdict large with the stance was → now, both read from the handoffs", () => {
  const { snap, current, lead, changes } = compared(
    "Watchlist",
    "Requires More Work",
    "About the same: the credit picture has not changed.",
  );
  render(<CallRow snapshot={snap} run={current} view={view([lead, changes], lead)} />);
  const tile = screen.getByRole("region", { name: "Since the earlier run" });
  expect(within(tile).getByText("About the same")).toHaveClass("text-h3");
  expect(within(tile).getByText("Requires More Work")).toBeVisible();
  expect(within(tile).getAllByText("Watchlist")[0]).toHaveClass("text-warning-text");
  expect(within(tile).getByText("Stance was Requires More Work, now Watchlist.")).toHaveClass(
    "sr-only",
  );
  expect(
    within(tile).getByText("About the same: the credit picture has not changed."),
  ).toBeVisible();
});

it("draws no verdict word and no stance chips that the handoffs do not state", () => {
  const { snap, current, lead, changes } = compared(
    "Watchlist",
    null,
    "Leverage rose while cover held.",
  );
  render(<CallRow snapshot={snap} run={current} view={view([lead, changes], lead)} />);
  const tile = screen.getByRole("region", { name: "Since the earlier run" });
  expect(within(tile).queryByText(/^(Better|Worse|About the same)$/)).toBeNull();
  expect(within(tile).queryByText(/Stance was/)).toBeNull();
  expect(within(tile).getByText("Leverage rose while cover held.")).toBeVisible();
});

it("counts a module delivered with gaps as delivered, and says when no module ran", () => {
  const lead = committee();
  const one = (state: string) => ({ id: "CP-6", name: "Committee decision", state, outputs: [] });
  const { unmount } = render(
    <CallRow
      snapshot={snapshot}
      run={run}
      view={
        { ...view([lead], lead), modules: [one("Delivered with gaps")] } as unknown as ReportView
      }
    />,
  );
  expect(screen.getByText("1 · all delivered")).toBeVisible();
  unmount();
  render(<CallRow snapshot={snapshot} run={run} view={{ ...view([lead], lead), modules: [] }} />);
  expect(screen.getByText("No module ran")).toBeVisible();
  expect(screen.queryByText(/0 · all delivered/)).toBeNull();
});

it("gives the reason in place when the comparison does not stand", () => {
  const mismatched = {
    ...run,
    changes: {
      pack: null,
      problem: "The comparison does not match the listed issuer, dates and pathway.",
    },
  } as unknown as PublishedRun;
  render(<CallRow snapshot={snapshot} run={mismatched} view={view([])} />);
  const tile = screen.getByRole("region", { name: "Since the earlier run" });
  expect(
    within(tile).getByText("The comparison does not match the listed issuer, dates and pathway."),
  ).toBeVisible();
});

it("heads the confidence, clearance and since-earlier tiles with real headings", () => {
  const lead = committee();
  render(<CallRow snapshot={snapshot} run={run} view={view([lead], lead)} />);
  for (const name of ["Confidence", "Evidence clearance", "Since the earlier run"])
    expect(
      within(screen.getByRole("region", { name })).getByRole("heading", { level: 3, name }),
    ).toBeVisible();
});

it("never prints a gap reason that cites a source, and never calls words the module wrote a missing figure", () => {
  const cp1 = foundation();
  const revenue = cp1.sections.find(({ heading }) => heading === "Chart data: revenue and EBITDA");
  const block = revenue?.blocks[0];
  if (block?.type !== "table") throw new Error("fixture");
  const reference =
    "Not supplied: not stated in northbridge-filing.txt page 4 [E3] CP-1-GAP-12 0123456789abcdef";
  (block.rows[1] as { cells: string[] }).cells[2] = reference;
  const { unmount } = render(<FigureRow snapshot={snapshot} run={run} view={view([cp1])} />);
  const ebitda = screen.getByRole("region", { name: "Adjusted EBITDA" });
  expect(within(ebitda).getByText("FY2024: not supplied")).toBeVisible();
  expect(ebitda).not.toHaveTextContent(/northbridge-filing|CP-1|GAP-12|0123456789abcdef/);
  unmount();
  (block.rows[1] as { cells: string[] }).cells[2] = "approximately 410";
  render(<FigureRow snapshot={snapshot} run={run} view={view([cp1])} />);
  const words = screen.getByRole("region", { name: "Adjusted EBITDA" });
  expect(within(words).getByText("n.a.")).toBeVisible();
  expect(
    within(words).getByText("FY2024: not shown here, the cell is not one figure"),
  ).toBeVisible();
  expect(words).not.toHaveTextContent(/not supplied/i);
});
