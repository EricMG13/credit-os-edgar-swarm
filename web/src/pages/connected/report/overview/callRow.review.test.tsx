// Coordinator review, part 1, items A3–A6, B10, B17, C20–C21: the call row draws only the
// modules' words, groups nothing into good or bad, and states every missing side.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry, PublishedRun, Section, Snapshot } from "../../publishedReport";
import type { ReportView } from "../../reportView";
import { CallRow } from "./CallRow";
import { measuredAt } from "./resize.fixture";

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

function entry(
  module: string,
  sections: Section[],
  extra: Partial<OutputEntry["output"]> = {},
): OutputEntry {
  return {
    output: {
      id: `${module}-1`,
      module,
      label: module,
      href: `${module}.md`,
      sha256: "a".repeat(64),
      ...extra,
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
  period: "FY2025",
  asOf: "2026-03-31",
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

const decision = (bias: string) => text("Decision", `Final Action Bias: ${bias}. Reason.`);

it("draws every stance in one neutral chip with its own word, Avoid and Add Exposure alike", () => {
  for (const bias of ["Avoid", "Add Exposure", "Watchlist"]) {
    const lead = entry("CP-6", [text("Bottom line", "The view."), decision(bias)]);
    const { unmount } = render(<CallRow snapshot={snapshot} run={run} view={view([lead], lead)} />);
    const chip = within(screen.getByRole("region", { name: "The call" })).getByText(bias);
    expect(chip.className).not.toMatch(/warning|success|error/);
    expect(chip.querySelector("svg")).toBeNull();
    unmount();
  }
});

it("draws the confidence band in its own word, neutral, whatever the band", () => {
  for (const band of ["Low", "High", "Moderate"]) {
    const lead = entry("CP-6", [text("Bottom line", "The view.")], {
      confidence: { value: 120, band },
    });
    const { unmount } = render(<CallRow snapshot={snapshot} run={run} view={view([lead], lead)} />);
    const tile = screen.getByRole("region", { name: "Confidence" });
    const word = within(tile).getByText(band);
    expect(word.className).not.toMatch(/warning|success|error/);
    expect(tile.querySelector(".fill-warning-mark")).toBeNull();
    unmount();
  }
});

it("labels the run's own timing as the run states it, never as the financials' date", () => {
  const lead = entry("CP-6", [text("Bottom line", "The view.")]);
  render(<CallRow snapshot={snapshot} run={run} view={view([lead], lead)} />);
  const call = screen.getByRole("region", { name: "The call" });
  expect(within(call).queryByText("Financials as of")).toBeNull();
  expect(within(call).getByText("Timing")).toBeVisible();
});

it("counts the modules as the pipeline does and names each state that is not delivered in its own words", () => {
  const lead = entry("CP-6", [text("Bottom line", "The view.")]);
  const gaps = entry("CP-1", [text("Bottom line", "Figures.")], { chartGaps: ["x"] } as never);
  const broken = entry("CP-2A", [text("Bottom line", "Stress.")], { parseError: "bad" });
  const changes = entry("CP-8", [text("Bottom line", "About the same.")]);
  const v = view([lead, gaps, broken, changes], lead);
  const ran = (id: string) => ({ outputs: [`${id}-1`], default: `${id}-1` });
  const withModules = {
    ...run,
    modules: {
      "CP-1": ran("CP-1"),
      "CP-2A": ran("CP-2A"),
      "CP-6": ran("CP-6"),
      "CP-8": ran("CP-8"),
    },
  } as unknown as PublishedRun;
  render(<CallRow snapshot={snapshot} run={withModules} view={v} />);
  expect(
    screen.getByText(
      "3 · 1 delivered; delivered with gaps: Financial foundation; could not be read: Downside",
    ),
  ).toBeVisible();
});

it("shows CP-8's opening words as written and draws no verdict word of its own", () => {
  const prior = { ...run, folder: "run-0", asOf: "2025-03-31", issuerKey: "nb", pathway: "full" };
  const current = {
    ...run,
    issuerKey: "nb",
    pathway: "full",
    changes: {
      pack: {
        prior: { run: "run-0", as_of: "2025-03-31", pathway: "full" },
        current: { as_of: "2026-03-31", pathway: "full" },
      },
    },
  } as unknown as PublishedRun;
  const snap = {
    catalogue: { real: [] },
    workspace: { runs: { k0: prior, k1: current }, outputs: {}, handoffs: {}, models: [] },
    chips: {},
  } as unknown as Snapshot;
  const lead = entry("CP-6", [text("Bottom line", "The view."), decision("Watchlist")]);
  for (const sentence of [
    "Better — or worse — cannot be judged, the bases differ.",
    "Better; but leverage is worse and the stance moved to Avoid.",
    "Better: no. Worse: yes.",
  ]) {
    const changes = entry("CP-8", [text("Bottom line", sentence)]);
    const { unmount } = render(
      <CallRow snapshot={snap} run={current} view={view([lead, changes], lead)} />,
    );
    const tile = screen.getByRole("region", { name: "Since the earlier run" });
    expect(within(tile).getByText(sentence)).toBeVisible();
    expect(within(tile).queryByText(/^(Better|Worse|About the same)$/)).toBeNull();
    expect(within(tile).getByText("Stance was not stated, now Watchlist.")).toHaveClass("sr-only");
    expect(within(tile).getByText("Not stated")).toBeVisible();
    unmount();
  }
});

it("shows or links every bottom-line paragraph, each with its own trace", () => {
  const lead = entry("CP-6", [
    text(
      "Bottom line",
      "Leverage rose.",
      "The view follows annual_report.pdf page 4.",
      "Cover held at 2.1x.",
    ),
  ]);
  render(<CallRow snapshot={snapshot} run={run} view={view([lead], lead)} />);
  const call = screen.getByRole("region", { name: "The call" });
  expect(call).not.toHaveTextContent(/annual_report/);
  // The desktop copy of the continuation (the phone copy behind Read on holds the same).
  const desktop = call.querySelector<HTMLElement>(".hidden.md\\:flex");
  if (!desktop) throw new Error("no desktop continuation");
  expect(within(desktop).getByText("Cover held at 2.1x.")).toBeInTheDocument();
  expect(
    within(desktop).getByRole("link", { name: "Read this passage in Evidence" }),
  ).toBeInTheDocument();
  expect(within(desktop).getAllByRole("link", { name: /^Source for / })).toHaveLength(2);
  expect(within(call).getAllByRole("link", { name: "Source for the bottom line" })).toHaveLength(1);
});

it("names the second score's band, and says when the second module recorded no score", () => {
  const lead = entry("CP-6", [text("Bottom line", "The view.")], {
    confidence: { value: 53, band: "Low" },
  });
  const scored = entry("CP-3", [text("Bottom line", "Pick.")], {
    confidence: { value: 56, band: "Moderate" },
  });
  const { unmount } = render(
    <CallRow snapshot={snapshot} run={run} view={view([lead, scored], lead)} />,
  );
  expect(
    within(screen.getByRole("region", { name: "Confidence" })).getByText(
      "Security selection 56 · Moderate",
    ),
  ).toBeVisible();
  unmount();
  const unscored = entry("CP-3", [text("Bottom line", "Pick.")]);
  render(<CallRow snapshot={snapshot} run={run} view={view([lead, unscored], lead)} />);
  expect(
    within(screen.getByRole("region", { name: "Confidence" })).getByText(
      "Security selection: no score recorded",
    ),
  ).toBeVisible();
});

it("links from the run facts to the limitations and dates on this page", () => {
  const lead = entry("CP-6", [text("Bottom line", "The view.")]);
  render(<CallRow snapshot={snapshot} run={run} view={view([lead], lead)} />);
  const nav = screen.getByRole("navigation", { name: "On this page" });
  expect(within(nav).getByRole("link", { name: "What this run could not do" })).toHaveAttribute(
    "href",
    "#overview/limitations",
  );
  expect(within(nav).getByRole("link", { name: "Dates to watch" })).toHaveAttribute(
    "href",
    "#overview/dates",
  );
});

// Coordinator review, part 2, items 3–5.

it("makes a short bottom line the display size at desktop and a step smaller on a phone", () => {
  const lead = entry("CP-6", [
    text("Bottom line", "Leverage rose.", "Cover held at 2.1x.", "Liquidity covers two years."),
  ]);
  render(<CallRow snapshot={snapshot} run={run} view={view([lead], lead)} />);
  const call = screen.getByRole("region", { name: "The call" });
  expect(within(call).getByText("Leverage rose.")).toHaveClass("text-h2", "lg:text-display");
  const more = within(call).getByText("Read on");
  expect(more.tagName).toBe("SUMMARY");
  expect(more.closest("details")).not.toHaveAttribute("open");
});

it("does not repeat the lead module's name as a link in the call tile", () => {
  const lead = entry("CP-6", [text("Bottom line", "The view.")]);
  render(<CallRow snapshot={snapshot} run={run} view={view([lead], lead)} />);
  const call = screen.getByRole("region", { name: "The call" });
  expect(within(call).queryByRole("link", { name: "Committee decision" })).toBeNull();
  expect(
    within(call).getByRole("heading", { name: "The call · Committee decision" }),
  ).toBeVisible();
});

it("states the untyped clearance counts in one line, not a gap well, and adds no module link", () => {
  const lead = entry("CP-6", [text("Bottom line", "The view.")]);
  const validation = entry("CP-5", [text("Bottom line", "Pass with Remediation.")]);
  render(<CallRow snapshot={snapshot} run={run} view={view([lead, validation], lead)} />);
  const tile = screen.getByRole("region", { name: "Evidence clearance" });
  const gap = within(tile).getByText(
    "Issue counts by severity and committee use are not typed in this run.",
  );
  expect(gap.tagName).toBe("P");
  expect(tile.querySelector(".min-h-24")).toBeNull();
  expect(within(tile).queryByRole("link", { name: "Evidence validation" })).toBeNull();
});

it("gives the confidence score the same trace control as every other tile", () => {
  const lead = entry(
    "CP-6",
    [text("Bottom line", "The view."), text("Confidence inputs", "Inputs.")],
    {
      confidence: { value: 53, band: "Low" },
    },
  );
  render(<CallRow snapshot={snapshot} run={run} view={view([lead], lead)} />);
  const tile = screen.getByRole("region", { name: "Confidence" });
  expect(
    within(tile).getByRole("link", { name: "Source for the confidence score" }),
  ).toHaveAttribute("href", expect.stringMatching(/#evidence\//));
});

it("shows or links every paragraph of the validation module's bottom line, each with its trace", () => {
  const lead = entry("CP-6", [text("Bottom line", "The view.")]);
  const validation = entry("CP-5", [
    text(
      "Bottom line",
      "Pass with Remediation.",
      "Four material issues remain.",
      "See register EV-1 in ledger.xlsx.",
    ),
  ]);
  render(<CallRow snapshot={snapshot} run={run} view={view([lead, validation], lead)} />);
  const tile = screen.getByRole("region", { name: "Evidence clearance" });
  expect(within(tile).getByText("Pass with Remediation.")).toBeVisible();
  expect(within(tile).getByText("Four material issues remain.")).toBeVisible();
  expect(within(tile).getByRole("link", { name: "Read this passage in Evidence" })).toBeVisible();
  expect(tile).not.toHaveTextContent(/ledger\.xlsx/);
  expect(within(tile).getAllByRole("link", { name: /^Source for / })).toHaveLength(3);
});

// Coordinator review, round 2, part 2: D2, D4, D8, D9, D10.

it("sizes the bottom line by its length on the ramp, never below the headline figures", () => {
  const short = entry("CP-6", [text("Bottom line", "Leverage rose.")]);
  const { unmount } = render(<CallRow snapshot={snapshot} run={run} view={view([short], short)} />);
  expect(screen.getByText("Leverage rose.")).toHaveClass("text-h2", "lg:text-display");
  unmount();
  const words =
    "Gross leverage rose to 6.53x despite stronger earnings, and the declared dividend paid in October reverses the apparent year-end net deleveraging.";
  const long = entry("CP-6", [text("Bottom line", words)]);
  render(<CallRow snapshot={snapshot} run={run} view={view([long], long)} />);
  const shown = screen.getByText(words);
  expect(shown).toHaveClass("text-h3", "lg:text-metric");
  expect(shown.className).not.toMatch(/text-display/);
});

it("shows the bottom line's continuation in full from md and behind Read on only below md", () => {
  const lead = entry("CP-6", [text("Bottom line", "Leverage rose.", "Cover held at 2.1x.")]);
  render(<CallRow snapshot={snapshot} run={run} view={view([lead], lead)} />);
  const call = screen.getByRole("region", { name: "The call" });
  const copies = within(call).getAllByText("Cover held at 2.1x.");
  expect(copies).toHaveLength(2);
  expect(copies.some((copy) => copy.closest(".hidden.md\\:flex"))).toBe(true);
  expect(within(call).getByText("Read on").closest("details")).toHaveClass("md:hidden");
});

it("names the clearance trace apart from the validation module's own bottom-line trace", () => {
  const lead = entry("CP-6", [text("Bottom line", "The view.")]);
  const validation = entry("CP-5", [text("Bottom line", "Pass with Remediation.")]);
  render(<CallRow snapshot={snapshot} run={run} view={view([lead, validation], lead)} />);
  const tile = screen.getByRole("region", { name: "Evidence clearance" });
  expect(
    within(tile).getByRole("link", { name: "Source for the evidence clearance" }),
  ).toBeVisible();
});

it("lets no tile in the call row stretch past its content", () => {
  const lead = entry("CP-6", [text("Bottom line", "The view.")]);
  render(<CallRow snapshot={snapshot} run={run} view={view([lead], lead)} />);
  for (const name of ["The call", "Since the earlier run"]) {
    const tile = screen.getByRole("region", { name });
    expect(tile.className).not.toMatch(/\bflex-1\b|justify-between/);
  }
  expect(document.body.innerHTML).not.toMatch(/text-\[\d+px\]/);
});

it("keeps the meter's scale labels at least 12 px on screen when the meter is drawn small", () => {
  const restore = measuredAt(204);
  const lead = entry("CP-6", [text("Bottom line", "The view.")], {
    confidence: { value: 53, band: "Low" },
  });
  render(<CallRow snapshot={snapshot} run={run} view={view([lead], lead)} />);
  const meter = within(screen.getByRole("region", { name: "Confidence" })).getByRole("img");
  for (const label of meter.querySelectorAll("text"))
    expect(Number(label.getAttribute("font-size")) * (204 / 408)).toBeGreaterThanOrEqual(12);
  restore();
});
