import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type {
  PublishedChanges,
  OutputEntry,
  PublishedRun,
  Section,
  Snapshot,
} from "../publishedReport";
import { ReportChanges } from "./Changes";

const run = { folder: "current" } as PublishedRun;
const snapshot = { chips: {} } as unknown as Snapshot;

function renderChanges(change: PublishedChanges | null, entries: OutputEntry[] = []) {
  return render(<ReportChanges snapshot={snapshot} run={run} entries={entries} change={change} />);
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

function issuerEntry(rows: string[][]): OutputEntry {
  return {
    selected: true,
    output: { id: "a", module: "CP-8", label: "a", href: "", sha256: "a".repeat(64) },
    sections: [
      {
        heading: "What changed: the issuer",
        level: 3,
        line: 10,
        blocks: [
          {
            type: "table",
            headers: [
              "Measure or fact",
              "Earlier",
              "Current",
              "Cause",
              "Effect on the credit view",
            ],
            line: 11,
            rows: rows.map((cells, index) => ({ line: 12 + index, cells })),
          },
        ],
      },
    ],
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
            {
              period: "2030 and thereafter",
              prior: "1,250m",
              current: "Not supplied: schedule absent",
            },
          ],
        },
      },
    });
    const tile = screen.getByRole("region", { name: "Maturities then and now" });
    const walls = within(within(tile).getByRole("region", { name: "Maturity walls" }));
    expect(walls.getAllByText("Not stated")).toHaveLength(1);
    expect(walls.getByText("1,250m")).toBeInTheDocument();
    expect(walls.getByText("Not supplied: schedule absent")).toBeInTheDocument();
    expect(walls.getByText("2030 and thereafter")).toBeInTheDocument();
    fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
    const values = within(tile).getByRole("table");
    const missing = within(values).getByRole("row", { name: /FY2027/ });
    expect(within(missing).queryByText("0", { exact: true })).toBeNull();
    expect(within(missing).getByText("1250", { exact: true })).toBeInTheDocument();
    expect(within(values).getByRole("row", { name: /FY2026/ })).toHaveTextContent("0");
  });

  it("keeps a missing or unreadable comparison distinct from a first run", () => {
    const { rerender } = renderChanges(null);
    expect(screen.getByText("No comparison was recorded for this run.")).toBeInTheDocument();
    rerender(
      <ReportChanges
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

  it("draws each moved measure in the pack's order with earlier, current and the stated cause", () => {
    const measure = (key: string, prior: string, current: string, difference: number) => ({
      key,
      label: `Measure ${key}`,
      prior: { value: prior, unit: "x", period: "FY2025" },
      current: { value: current, unit: "x", period: "FY2026" },
      difference,
      unit: "x",
    });
    renderChanges(
      {
        pack: { measures: [measure("small", "10", "11", 1), measure("big", "2", "4", 2)] },
        verdicts: {
          measures: {
            small: { kind: "comparable", label: "L", reason: "Why" },
            big: { kind: "comparable", label: "L", reason: "Why" },
          },
        },
      },
      [
        issuerEntry([
          ["Measure big", "2x", "4x", "Unresolved", "Cover is thinner"],
          ["Measure small", "10x", "11x", "New period", "—"],
        ]),
      ],
    );
    const list = screen.getByRole("list", { name: "Measures that moved" });
    const rows = within(list).getAllByRole("listitem");
    expect(rows.map((row) => within(row).getByRole("heading").textContent)).toEqual([
      "Measure small",
      "Measure big",
    ]);
    const [small, big] = rows as [HTMLElement, HTMLElement];
    expect(within(big).getByText("Cause: Unresolved")).toBeVisible();
    expect(within(big).getByText("Cover is thinner")).toBeVisible();
    expect(within(small).getByText("Cause: New period")).toBeVisible();
    expect(within(big).getByText("2x (FY2025)")).toBeVisible();
    expect(within(big).getByText("4x (FY2026)")).toBeVisible();
    expect(big.querySelector('[data-mark="dumbbell"]')).not.toBeNull();
  });

  const one = (cause: string | null, label = "Net leverage"): [PublishedChanges, OutputEntry[]] => [
    {
      pack: {
        measures: [
          {
            key: "net_leverage",
            label: "Net leverage",
            prior: { value: "3", unit: "x", period: "FY2025" },
            current: { value: "2", unit: "x", period: "FY2026" },
            difference: -1,
            unit: "x",
          },
        ],
      },
      verdicts: { measures: { net_leverage: { kind: "comparable", label: "L" } } },
    },
    cause === null ? [] : [issuerEntry([[label, "3x", "2x", cause, ""]])],
  ];

  it("says a cause is not stated only when its cell is empty", () => {
    renderChanges(...one("—"));
    expect(screen.getByText("Cause not stated")).toBeVisible();
  });

  it("links to Evidence for a cause that cites a source or whose row it cannot match", () => {
    const { unmount } = renderChanges(...one("Per filing.pdf p. 3"));
    expect(screen.queryByText("Cause not stated")).toBeNull();
    expect(screen.getByRole("link", { name: "Read this cause in Evidence" })).toBeVisible();
    unmount();
    renderChanges(...one("New period", "Another name"));
    expect(screen.queryByText("Cause not stated")).toBeNull();
    expect(
      screen.getByRole("link", { name: "The cause is in the comparison, in Evidence" }),
    ).toBeVisible();
  });

  it("sets a long cause as plain text, not a chip", () => {
    const long = "The refinancing closed after the period end and added a term loan. ".repeat(3);
    renderChanges(...one(long.trim()));
    const line = screen.getByText(/^Cause: The refinancing closed/);
    expect(line.tagName).toBe("P");
    expect(line.className).not.toMatch(/rounded|border/);
  });

  it("points to the comparison evidence where a verdict's reason cites a source", () => {
    renderChanges({
      pack: {
        measures: [
          {
            key: "net_leverage",
            label: "Net leverage",
            prior: { value: "3", unit: "x", period: "FY2025" },
            current: { value: "2", unit: "x", period: "FY2026" },
            difference: -1,
            unit: "x",
          },
        ],
      },
      verdicts: {
        measures: {
          net_leverage: { kind: "comparable", label: "L", reason: "Per filing.pdf p. 3" },
        },
      },
    });
    expect(screen.getByText("See comparison evidence.")).toBeVisible();
    expect(document.body.textContent).not.toMatch(/filing\.pdf/);
  });

  it("collapses the measures that did not move behind a headed count", () => {
    renderChanges({
      pack: {
        measures: [
          {
            key: "flat",
            label: "Measure flat",
            prior: { value: "5", unit: "x", period: "FY2025" },
            current: { value: "5", unit: "x", period: "FY2026" },
            difference: 0,
            unit: "x",
          },
        ],
      },
      verdicts: { measures: { flat: { kind: "comparable", label: "L" } } },
    });
    expect(screen.getByRole("heading", { name: "Measures that did not move" })).toBeVisible();
    expect(screen.getByText("Show the 1 measure").closest("details")).not.toHaveAttribute("open");
    expect(screen.getByText("No measure moved between the two runs.")).toBeVisible();
  });

  it("draws the first sentence of the Bottom line as the verdict, the rest as body, one trace", () => {
    const entry = cp8([]);
    entry.sections.splice(1, 0, {
      heading: "Bottom line",
      level: 3,
      line: 2,
      blocks: [
        {
          type: "text",
          line: 3,
          end: 3,
          text: "Credit is about the same as before. Leverage is flat and cover is steady.",
        },
      ],
    });
    renderChanges(
      {
        pack: {
          prior: { run: "r", as_of: "2025-03-31", pathway: "full" },
          current: { as_of: "2025-06-30", pathway: "full" },
          measures: [],
        },
      },
      [entry],
    );
    const verdict = screen.getByRole("region", { name: "Verdict" });
    expect(within(verdict).getByText("Credit is about the same as before.").className).toMatch(
      /text-h1/,
    );
    expect(within(verdict).getByText("Leverage is flat and cover is steady.")).toBeVisible();
    expect(within(verdict).getAllByRole("link", { name: "Source" })).toHaveLength(1);
    expect(within(verdict).getByText("Earlier run, as of 2025-03-31")).toBeVisible();
    expect(within(verdict).getByText(/Stance, earlier → current/)).toBeVisible();
    expect(
      screen.queryByText(
        /Not established for this run: the handoff has no such passage\.[\s\S]*Bottom line/,
      ),
    ).toBeNull();
  });

  it("draws the stance gap even when an as-of date is missing", () => {
    renderChanges({ pack: { measures: [] } });
    expect(screen.getByText(/Stance, earlier → current/)).toBeVisible();
  });

  it("links to Evidence when the Bottom line cites a source, instead of claiming no verdict", () => {
    const entry = cp8([]);
    entry.sections.splice(1, 0, {
      heading: "Bottom line",
      level: 3,
      line: 2,
      blocks: [{ type: "text", line: 3, end: 3, text: "See filing.pdf p. 3 for the position." }],
    });
    renderChanges({ pack: { measures: [] } }, [entry]);
    expect(screen.getByRole("link", { name: "Read the verdict in Evidence" })).toBeVisible();
    expect(screen.queryByText("The comparison does not state a verdict in a sentence.")).toBeNull();
  });

  it("keeps the evidence link with a pack and offers no Overview action", () => {
    renderChanges({ pack: { measures: [] } }, [cp8([])]);
    expect(screen.queryByRole("link", { name: "Open the Overview" })).toBeNull();
    expect(screen.getByRole("link", { name: "Review comparison evidence" })).toHaveAttribute(
      "href",
      expect.stringMatching(/^\/report\/current#evidence\//),
    );
  });

  it("draws the designed gap in place of the measures when the pack carries none", () => {
    renderChanges({ pack: { measures: [], modules: [] } });
    expect(
      screen.getByText("The comparison carries no measures for these two runs."),
    ).toBeVisible();
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

  it("draws nothing, not a stray 0, for a pack that compared no modules", () => {
    const { container } = renderChanges({ pack: { measures: [], modules: [] } });
    expect(screen.queryByText("0")).toBeNull();
    expect(container.textContent).not.toMatch(/(?<![\d.,])0(?![\d.,])/);
    expect(screen.queryByRole("heading", { name: "What changed in the analysis" })).toBeNull();
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
  const withPack: PublishedChanges = { pack: { measures: [] } };
  const added = () => within(screen.getByRole("region", { name: "Limitations added" }));
  const removed = () => within(screen.getByRole("region", { name: "Limitations removed" }));

  it("lists CP-8's new limitations as added and closed ones as removed, without reference columns", () => {
    renderChanges(withPack, [cp8(LEDGER)]);
    expect(added().getByText("Hedge book not provided")).toBeVisible();
    expect(removed().getByText("Revolver terms were unavailable")).toBeVisible();
    expect(removed().getByText("Closed by: Amended credit agreement supplied")).toBeVisible();
    expect(screen.queryByText("Lease schedule not reconciled")).toBeNull();
    expect(screen.queryByText(/^(E1|E2|E3|C1|C2)$/)).toBeNull();
  });

  it("names the module in a ledger cell instead of drawing its code", () => {
    renderChanges(withPack, [
      cp8([["—", "—", "Covenant headroom", "Closed", "CP-2A: covenant headroom restated"]]),
    ]);
    expect(removed().getByText("Closed by: Downside: covenant headroom restated")).toBeVisible();
    expect(document.body.textContent).not.toMatch(/CP-2A/);
  });

  it("leaves a Gap ledger of another module out of the lists", () => {
    renderChanges(withPack, [cp8(LEDGER, "CP-2", "Gap ledger")]);
    expect(screen.queryByRole("region", { name: "Limitations added" })).toBeNull();
  });

  it("draws none recorded when no row is new or closed, never a closing placeholder", () => {
    renderChanges(withPack, [
      cp8([
        ["E1", "\u2014", "Hedge book is thin", "Watching", "\u2014"],
        ["E3", "\u2014", "Leases are open", "Remaining", "\u2014"],
      ]),
    ]);
    expect(added().getByText("None recorded")).toBeVisible();
    expect(removed().getByText("None recorded")).toBeVisible();
  });

  it("reads a status without its marks", () => {
    renderChanges(withPack, [
      ledgerOf(HEADERS, [
        ["E1", "\u2014", "Margins", "**Remaining**", "\u2014"],
        ["E2", "\u2014", "Revolver", "**Closed**", "Filing"],
      ]),
    ]);
    expect(removed().getByText("Revolver")).toBeVisible();
    expect(screen.queryByText("Margins")).toBeNull();
  });

  it("shows a module named as Name (CP-x) without its code", () => {
    renderChanges(withPack, [
      ledgerOf(HEADERS, [
        [
          "E1",
          "\u2014",
          "Covenant view from **Financial foundation (CP-1)** is stale",
          "Closed",
          "Updated in Liquidity (CP-2D) and **Credit (CP-2)**",
        ],
      ]),
    ]);
    expect(document.body.textContent).not.toMatch(/\(CP-/);
    expect(removed().getByText("Covenant view from Financial foundation is stale")).toBeVisible();
  });

  it("links a limitation that cites a source to Evidence instead of dropping it", () => {
    renderChanges(withPack, [
      ledgerOf(HEADERS, [["—", "C1", "Per filing.pdf p. 3 the swap is unclear", "New", "—"]]),
    ]);
    expect(added().queryByText("None recorded")).toBeNull();
    expect(added().getByRole("link", { name: "Read this limitation in Evidence" })).toHaveAttribute(
      "href",
      expect.stringMatching(/^\/report\/current#evidence\//),
    );
    expect(document.body.textContent).not.toMatch(/filing\.pdf/);
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

  it("draws a gap tile for a passage the CP-8 handoff lacks", () => {
    const entry = cp8(LEDGER);
    renderChanges(withPack, [entry]);
    const gap = screen.getByRole("heading", { name: "Key findings" }).closest("section");
    expect(gap).toHaveTextContent("Not established for this run");
    expect(screen.queryByRole("heading", { name: "Bottom line" })).toBeNull();
  });

  it("draws the Key findings, contrary evidence and limitations a handoff writes, once each", () => {
    const entry = cp8(LEDGER);
    const passage = (heading: string, text: string, line: number) => ({
      heading,
      level: 3,
      line,
      blocks: [{ type: "text" as const, line: line + 1, end: line + 1, text }],
    });
    entry.sections.splice(
      1,
      0,
      passage("Key findings", "Leverage rose half a turn.", 2),
      passage(
        "Contrary evidence and what would change the view",
        "A refinancing would reverse it.",
        4,
      ),
      passage("Limitations", "The earlier run is compared in substance only.", 6),
    );
    renderChanges(withPack, [entry]);
    expect(screen.getAllByText("Leverage rose half a turn.")).toHaveLength(1);
    expect(screen.getAllByText("A refinancing would reverse it.")).toHaveLength(1);
    expect(screen.getAllByText("The earlier run is compared in substance only.")).toHaveLength(1);
    expect(screen.queryByRole("heading", { name: "What changed: the issuer" })).toBeNull();
  });
});
