import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type {
  Changes as PublishedChanges,
  OutputEntry,
  PublishedRun,
  Section,
  Snapshot,
} from "../publishedReport";
import { Changes } from "./Changes";

const run = { folder: "current" } as PublishedRun;
const snapshot = { chips: {} } as unknown as Snapshot;

function renderChanges(change: PublishedChanges | null, entries: OutputEntry[] = []) {
  return render(<Changes snapshot={snapshot} run={run} entries={entries} change={change} />);
}

const LEDGER = [
  ["E1", "C1", "Segment margins are not disclosed", "Remaining", "\u2014"],
  [
    "E2",
    "\u2014",
    "Revolver terms were unavailable",
    "Closed",
    "Amended credit agreement supplied",
  ],
  ["\u2014", "C2", "Hedge book not provided", "New", "\u2014"],
  ["E3", "\u2014", "Lease schedule not reconciled", "Parked", ""],
];

function cp8(ledger: string[][], module = "CP-8", heading = "Limitations ledger"): OutputEntry {
  const sections: Section[] = [
    { heading: "Findings", level: 2, line: 1, blocks: [] },
    {
      heading,
      level: 3,
      line: 10,
      blocks: [
        {
          type: "table",
          headers: ["Earlier ref", "Current ref", "Limitation", "Status", "What closed it"],
          line: 11,
          rows: ledger.map((cells, index) => ({ line: 12 + index, cells })),
        },
      ],
    },
  ];
  return {
    selected: true,
    output: { id: "a", module, label: "a", href: "", sha256: "a".repeat(64) },
    sections,
  };
}

describe("connected report Changes", () => {
  it("compares published maturities without turning a missing earlier value into zero", () => {
    renderChanges({
      pack: {
        maturity_profile: {
          unit: "US$m",
          rows: [
            { period: "FY2026", prior: "0", current: "100" },
            { period: "FY2027", prior: null, current: "1250" },
          ],
        },
      },
    });
    const chart = screen.getByRole("figure", { name: "Debt maturity schedules" });
    fireEvent.click(within(chart).getByRole("radio", { name: "Table" }));
    const values = within(chart).getByRole("table");
    const zero = within(values).getByRole("row", { name: /FY2026/ });
    const missing = within(values).getByRole("row", { name: /FY2027/ });
    expect(within(zero).getByText("0", { exact: true })).toBeInTheDocument();
    expect(within(missing).queryByText("0", { exact: true })).toBeNull();
    expect(within(missing).getByText("1250", { exact: true })).toBeInTheDocument();
  });

  it("keeps a missing or unreadable comparison distinct from a first run", () => {
    const { rerender } = renderChanges(null);
    expect(screen.getByText("No comparison was recorded for this run.")).toBeInTheDocument();
    rerender(
      <Changes
        snapshot={snapshot}
        run={run}
        entries={[]}
        change={{
          first_run: true,
          problem: "The comparison could not be read.",
        }}
      />,
    );
    expect(screen.getByText("The comparison could not be read.")).toBeInTheDocument();
    expect(screen.queryByText("No earlier run to compare.")).toBeNull();
  });

  it.each([
    ["a missing comparison", null],
    ["a comparison not produced", { first_run: false, pack: null, note: "Changes: not produced" }],
    ["an unreadable comparison", { first_run: false, problem: "Unreadable: pack.json" }],
  ] as const)("offers the Overview and the comparison evidence on %s", (_state, change) => {
    renderChanges(change);
    expect(screen.getByRole("link", { name: "Open the Overview" })).toHaveAttribute(
      "href",
      "#overview",
    );
    expect(screen.getByRole("link", { name: "Review comparison evidence" })).toHaveAttribute(
      "href",
      "#evidence/record",
    );
  });

  it("draws a first run's single Overview action and no evidence link", () => {
    renderChanges({ first_run: true });
    expect(screen.getAllByRole("link", { name: "Open the Overview" })).toHaveLength(1);
    expect(screen.queryByRole("link", { name: "Review comparison evidence" })).toBeNull();
  });

  it("lets the change cards stand on the page, not inside the section's card", () => {
    const measures = [
      {
        key: "net_leverage",
        label: "Net leverage",
        prior: { value: "3", unit: "x", period: "FY2025" },
        current: { value: "2", unit: "x", period: "FY2026" },
        difference: -1,
        unit: "x",
      },
    ];
    renderChanges({ pack: { measures } });
    const heading = screen.getByRole("heading", { name: "Changes since the last run" });
    expect(screen.getByText("Net leverage").closest("li")).not.toBeNull();
    expect(heading.closest("section")?.className).not.toMatch(/shadow-1|rounded-ds-lg/);
    expect(screen.queryByRole("link", { name: "Open the Overview" })).toBeNull();
  });

  it("keeps a sentence-only state in its card", () => {
    renderChanges(null);
    const heading = screen.getByRole("heading", { name: "Changes since the last run" });
    expect(heading.closest("section")?.className).toMatch(/shadow-1/);
  });

  it("draws an h2 and skips no heading level, charts included", () => {
    const { container } = renderChanges({
      pack: {
        maturity_profile: {
          unit: "US$m",
          rows: [{ period: "FY2026", prior: "10", current: "100" }],
        },
      },
    });
    const levels = Array.from(container.querySelectorAll("h1,h2,h3,h4,h5,h6"), (node) =>
      Number(node.tagName.slice(1)),
    );
    expect(levels).toContain(2);
    levels.forEach((level, at) => {
      expect(level).toBeLessThanOrEqual((levels[at - 1] ?? 1) + 1);
    });
  });

  it("shows the compared bottom lines and the verdict's reason without a module code", () => {
    renderChanges({
      pack: {
        measures: [],
        modules: [
          {
            module: "CP-2",
            title: "Fundamental credit",
            ran_prior: true,
            ran_current: true,
            prior_bottom_line: "Credit is stable; Liquidity (CP-2D) is ample.",
            current_bottom_line: "Credit is stable; Liquidity (CP-2D) is thin.",
          },
        ],
      },
      verdicts: {
        modules: {
          "CP-2": {
            status: "Unchanged",
            cause: "Follows Liquidity (CP-2D)",
            why: "The view follows Financial foundation (CP-1), which did not change.",
          },
        },
      },
    });
    expect(screen.getByText("Credit is stable; Liquidity is ample.")).toBeInTheDocument();
    expect(screen.getByText("Credit is stable; Liquidity is thin.")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Follows Liquidity · The view follows Financial foundation, which did not change.",
      ),
    ).toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/\(CP-[A-Za-z0-9]+\)/);
  });

  it("groups CP-8's limitations ledger by status without its reference columns", () => {
    renderChanges({ first_run: false }, [cp8(LEDGER)]);
    const ledger = screen.getByRole("region", { name: "Limitations" });
    const groups = within(ledger)
      .getAllByRole("heading", { level: 3 })
      .map((h) => h.textContent);
    expect(groups).toEqual(["Closed (1)", "Remaining (1)", "New (1)", "Parked (1)"]);
    expect(within(ledger).getByText("Revolver terms were unavailable")).toBeVisible();
    expect(within(ledger).getByText("Amended credit agreement supplied")).toBeVisible();
    expect(within(ledger).getByText("Lease schedule not reconciled")).toBeVisible();
    expect(within(ledger).queryByText(/^(E1|E2|E3|C1|C2)$/)).toBeNull();
    expect(within(ledger).getAllByRole("button", { name: /^Show sources for/ })).toHaveLength(4);
    expect(screen.queryByRole("link", { name: "Limitations ledger" })).toBeNull();
  });

  it("names the module in a ledger cell instead of drawing its code", () => {
    renderChanges({ first_run: false }, [
      cp8([["—", "—", "Covenant headroom", "Closed", "CP-2A: covenant headroom restated"]]),
    ]);
    const ledger = screen.getByRole("region", { name: "Limitations" });
    expect(within(ledger).getByText("Downside: covenant headroom restated")).toBeVisible();
    expect(ledger.textContent).not.toMatch(/CP-2A/);
  });

  it("leaves a Gap ledger of another module and non-CP-8 ledgers out of the typed group", () => {
    renderChanges({ first_run: false }, [cp8(LEDGER, "CP-2", "Gap ledger")]);
    expect(screen.queryByRole("region", { name: "Limitations" })).toBeNull();
  });

  it("orders other statuses after the named ones and draws no placeholder as a closing note", () => {
    renderChanges({ first_run: false }, [
      cp8([
        ["E1", "\u2014", "Hedge book is thin", "Watching", "\u2014"],
        ["E2", "\u2014", "Pension terms are old", "No longer stated", "\u2014"],
        ["E3", "\u2014", "Leases are open", "Remaining", "\u2014"],
      ]),
    ]);
    const ledger = screen.getByRole("region", { name: "Limitations" });
    const groups = within(ledger)
      .getAllByRole("heading", { level: 3 })
      .map((h) => h.textContent);
    expect(groups).toEqual(["Remaining (1)", "No longer stated (1)", "Watching (1)"]);
    expect(within(ledger).queryByText("\u2014")).toBeNull();
  });

  const HEADERS = ["Earlier ref", "Current ref", "Limitation", "Status", "What closed it"];
  function ledgerOf(headers: string[], rows: string[][]) {
    const entry = cp8([]);
    const block = entry.sections[1]?.blocks[0];
    if (block?.type !== "table") throw new Error("fixture has no table");
    block.headers = headers;
    block.rows = rows.map((cells, index) => ({ line: 12 + index, cells }));
    return entry;
  }

  it("draws a status cell without its marks and sorts it as the plain status", () => {
    renderChanges({ first_run: false }, [
      ledgerOf(HEADERS, [
        ["E1", "\u2014", "Margins", "**Remaining**", "\u2014"],
        ["E2", "\u2014", "Revolver", "**Closed**", "Filing"],
      ]),
    ]);
    const ledger = screen.getByRole("region", { name: "Limitations" });
    const groups = within(ledger)
      .getAllByRole("heading", { level: 3 })
      .map((h) => h.textContent);
    expect(groups).toEqual(["Closed (1)", "Remaining (1)"]);
  });

  it("shows a module named as Name (CP-x) without its code, in the status, text, note and trace name", () => {
    renderChanges({ first_run: false }, [
      ledgerOf(HEADERS, [
        [
          "E1",
          "\u2014",
          "Covenant view from **Financial foundation (CP-1)** is stale",
          "Closed by Financial foundation (CP-1)",
          "Updated in Liquidity (CP-2D) and **Credit (CP-2)**",
        ],
      ]),
    ]);
    const ledger = screen.getByRole("region", { name: "Limitations" });
    expect(ledger.textContent).not.toMatch(/\(CP-/);
    expect(within(ledger).getByText("Updated in Liquidity and", { exact: false })).toBeVisible();
    expect(within(ledger).getByText("Financial foundation", { selector: "strong" })).toBeVisible();
    expect(within(ledger).getByRole("button").getAttribute("aria-label")).toBe(
      "Show sources for Covenant view from Financial foundation is stale",
    );
  });

  it.each([
    ["changes: first run of this pathway", "First run of this pathway."],
    [
      "changes: first run of this pathway (not used: 20261115-114658-01: it was launched with an explicit module subset)",
      "First run of this pathway. An earlier run exists but could not be used for comparison.",
    ],
    [
      "changes: not produced \u2014 cpos_live_not_accepted: CP-8 not accepted within bounds",
      "The comparison was planned but not produced for this run.",
    ],
    [
      "changes: not produced \u2014 the comparison pack could not be built (no accepted handoffs)",
      "The comparison was planned but not produced for this run.",
    ],
    [
      "changes: not compared: the run folder is not inside a runs folder",
      "This run was not compared with an earlier run.",
    ],
    ["see CP-8-GAP-003", "No comparison was recorded for this run."],
  ])("draws the launcher note %j as a fixed sentence", (note, shown) => {
    const { container } = renderChanges({ note });
    expect(screen.getByText(shown)).toBeVisible();
    expect(container.textContent).not.toMatch(/changes:|CP-|cpos_|\d{8}-\d{6}/);
  });

  it("titles the ledger and falls back to the generic table when a column is missing", () => {
    const { unmount } = renderChanges({ first_run: false }, [ledgerOf(HEADERS, LEDGER)]);
    expect(screen.getByRole("heading", { level: 2, name: "Limitations ledger" })).toBeVisible();
    unmount();
    renderChanges({ first_run: false }, [
      ledgerOf(HEADERS.slice(0, 4), [["E1", "C1", "Margins", "Remaining"]]),
    ]);
    expect(screen.queryByRole("region", { name: "Limitations" })).toBeNull();
    expect(screen.getByText("Margins")).toBeVisible();
  });

  it("draws a gap card for a passage the CP-8 handoff lacks", () => {
    const entry = cp8(LEDGER);
    entry.sections.splice(1, 0, {
      heading: "Bottom line",
      level: 3,
      line: 2,
      blocks: [{ type: "text", line: 3, end: 3, text: "Little changed." }],
    });
    renderChanges(null, [entry]);
    expect(screen.getByText("Segment margins are not disclosed")).toBeInTheDocument();
    const gap = screen.getByRole("heading", { name: "Key findings" }).closest("section");
    expect(gap).toHaveTextContent("Not established for this run");
  });
});
