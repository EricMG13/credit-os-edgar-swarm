// Synthetic, built from the module contract (src/deploy_vii/bindings/cp1d.py and
// src/deploy_workflow/owners/cp1d.py: T1D.2 assessment, the Step | Amount bridge, T1D.6 leverage);
// not a real handoff — unproven on a real run. No CP-1D handoff has been retained.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { entry, section, table } from "../overview/rows.fixture";
import { bridgeGeometry, readBridge, readLeverage } from "./earningsQualityData";
import { EarningsQualityLead } from "./earningsQuality";
import { leadProps } from "./fixtures/load";

afterEach(cleanup);

const STEPS = ["Step", "Amount", "Reporting unit", "Basis and limitation"];
const BRIDGE = [
  ["Adjusted EBITDA, statements", "3813", "US$m", "Reported in the statements."],
  ["Run-rate savings", "200", "US$m", "Management proposal."],
  ["Integration costs", "100", "US$m", "Management proposal."],
  ["Pro forma acquisition", "60", "US$m", "Management proposal."],
  ["Management financing-case EBITDA", "4173", "US$m", "Closing amount."],
];
const ASSESS = [
  "Add-back",
  "Achievability",
  "Recurrence",
  "Source-supported amount",
  "Share accepted",
  "Treatment",
  "Accepted amount",
  "Not accepted",
  "Evidence",
];
const ASSESSMENT = [
  [
    "Run-rate savings",
    "Partly supported",
    "One-time",
    "120",
    "0.6",
    "Accepted in part",
    "120",
    "80",
    "p",
  ],
  ["INTEGRATION costs", "supported", "One-time", "100", "1", "Accepted in full", "100", "0", "p"],
  ["Pro forma acquisition", "Not supported", "One-time", "0", "0", "Excluded", "0", "60", "p"],
];
const LEVERAGE_HEAD = [
  "Basis",
  "EBITDA",
  "Operating cash flow",
  "Operating cash flow / EBITDA",
  "Total leverage",
  "Net leverage",
];
const LEVERAGE = [
  ["Statements (CP-1)", "3813", "2000", "52.45", "6.1", "5.0"],
  ["Management financing case", "4173", "2000", "47.93", "5.6x", "4.6x"],
  ["Supported", "4013", "2000", "49.84", "7.4x", "5.9x"],
];

function quality(
  bridge: string[][] | null = BRIDGE,
  assessment: string[][] | null = ASSESSMENT,
  leverage: string[][] | null = LEVERAGE,
) {
  return entry(
    "CP-1D",
    [],
    [
      { heading: "Findings", level: 2, line: 3, blocks: [] },
      ...(assessment
        ? [section("T1D.2 Add-back assessment", 10, table(11, ASSESS, assessment))]
        : []),
      ...(bridge ? [section("Chart data: EBITDA bridge", 20, table(21, STEPS, bridge))] : []),
      ...(leverage
        ? [
            section(
              "T1D.6 Cash conversion and restated leverage",
              40,
              table(41, LEVERAGE_HEAD, leverage),
            ),
          ]
        : []),
    ],
  );
}

const attr = (element: Element | null | undefined, name: string) =>
  Number(element?.getAttribute(name));
const bar = (label: string) => document.querySelector(`[data-step="${label}"]`);
const width = (label: string) => attr(bar(label), "width");

describe("earningsQualityData", () => {
  it("reads a reconciling bridge, matches support by exact name ignoring case, and sums exactly", () => {
    const bridge = readBridge(quality());
    if (bridge.state !== "ready") throw new Error(bridge.reason);
    expect(bridge.opening).toMatchObject({ amount: "3813", value: 3813 });
    expect(bridge.closing).toMatchObject({ amount: "4173" });
    expect(bridge.changes.map((step) => step.support)).toEqual([
      "Partly supported",
      "Supported",
      "Not supported",
    ]);
    expect(bridge.total).toBe("360");
    expect(bridge.bySupport).toEqual([
      { word: "Supported", count: 1, total: "100" },
      { word: "Partly supported", count: 1, total: "200" },
      { word: "Not supported", count: 1, total: "60" },
    ]);
  });

  it("states no support when the assessment is absent or does not name the add-back", () => {
    const none = readBridge(quality(BRIDGE, null));
    expect(none.state === "ready" && none.supportStated).toBe(false);
    const other = readBridge(
      quality(BRIDGE, [["Something else", "Supported", "", "", "", "", "", "", ""]]),
    );
    expect(other.state === "ready" && other.changes.map((step) => step.support)).toEqual([
      null,
      null,
      null,
    ]);
    // Two assessment rows with one name cannot be matched: neither is used.
    const twice = readBridge(
      quality(BRIDGE, [
        ["Run-rate savings", "Supported", "", "", "", "", "", "", ""],
        ["run-rate savings", "Not supported", "", "", "", "", "", "", ""],
      ]),
    );
    expect(twice.state === "ready" && twice.changes[0]?.support).toBeNull();
    // A word the contract does not name is not support.
    const odd = readBridge(
      quality(BRIDGE, [["Run-rate savings", "Probably fine", "", "", "", "", "", "", ""]]),
    );
    expect(odd.state === "ready" && odd.changes[0]?.support).toBeNull();
  });

  it("a bridge that does not reconcile, a gap amount or words are gaps that list the stated steps", () => {
    const off = readBridge(quality([...BRIDGE.slice(0, 4), ["Closing", "4200", "US$m", ""]]));
    expect(off).toMatchObject({ state: "gap" });
    if (off.state === "gap") {
      expect(off.reason).toContain("do not reconcile");
      expect(off.reason).toContain("4,173 (derived)");
      expect(off.stated).toHaveLength(5);
      expect(off.stated[1]).toEqual({ label: "Run-rate savings", text: "200 US$m" });
    }
    const hole = readBridge(
      quality([
        BRIDGE[0] ?? [],
        ["Run-rate savings", "Not supplied: not quantified", "US$m", ""],
        BRIDGE[4] ?? [],
      ]),
    );
    expect(hole).toMatchObject({ state: "gap" });
    expect(hole.state === "gap" && hole.reason).toContain("not quantified");
    const words = readBridge(
      quality([BRIDGE[0] ?? [], ["Savings", "about 200", "US$m", ""], BRIDGE[4] ?? []]),
    );
    expect(words.state === "gap" && words.reason).toContain("where an amount was expected");
  });

  it("refuses units that differ, and no step table", () => {
    const mixed = readBridge(
      quality([...BRIDGE.slice(0, 3), ["Pro forma", "60", "EUR m", ""], BRIDGE[4] ?? []]),
    );
    expect(mixed.state === "gap" && mixed.reason).toContain("not in one stated reporting unit");
    expect(readBridge(quality(null)).state).toBe("gap");
  });

  it("draws the axis from a round number below the opening total, and from zero when a level is not above it", () => {
    const bridge = readBridge(quality());
    if (bridge.state !== "ready") throw new Error("not ready");
    const geometry = bridgeGeometry(bridge);
    expect(geometry).toMatchObject({ lo: 3600, hi: 4200, truncated: true });
    const small = readBridge(
      quality([
        ["Opening", "0", "US$m", ""],
        ["Add", "5", "US$m", ""],
        ["Closing", "5", "US$m", ""],
      ]),
    );
    if (small.state !== "ready") throw new Error("not ready");
    expect(bridgeGeometry(small)).toMatchObject({ lo: 0, truncated: false });
  });

  it("reads reported and restated leverage only where both are stated, with the exact difference", () => {
    const leverage = readLeverage(quality());
    if (leverage.state !== "ready") throw new Error(leverage.reason);
    expect(leverage.measures[0]).toMatchObject({ kind: "pair", change: "1.3", tone: "worse" });
    expect(leverage.measures[1]).toMatchObject({ kind: "pair", change: "0.9" });
    const gap = readLeverage(
      quality(BRIDGE, ASSESSMENT, [
        LEVERAGE[0] ?? [],
        ["Supported", "", "", "", "Not supplied: EBITDA not stated", "5.9x"],
      ]),
    );
    expect(gap.state === "ready" && gap.measures[0]).toMatchObject({
      kind: "gap",
      measure: "Total leverage",
    });
    expect(gap.state === "ready" && gap.measures[1]).toMatchObject({ kind: "pair", change: "0.9" });
    expect(readLeverage(quality(BRIDGE, ASSESSMENT, [LEVERAGE[0] ?? []])).state).toBe("gap");
    expect(readLeverage(quality(BRIDGE, ASSESSMENT, null)).state).toBe("gap");
  });
});

describe("no source reference in what is drawn", () => {
  const CITED = "see C07 in T1D.2 per 10-K p 45";
  it("screens an amount that is words, in the reason and in the listed steps", () => {
    const bridge = readBridge(
      quality([BRIDGE[0] ?? [], ["Savings", CITED, "US$m", ""], BRIDGE[4] ?? []]),
    );
    if (bridge.state !== "gap") throw new Error("expected a gap");
    const text = JSON.stringify(bridge);
    expect(text).not.toMatch(/C07|T1D\.2|p 45|10-K/);
    expect(bridge.reason).toContain("Detail is in Evidence.");
    expect(bridge.stated[1]?.text).toContain("Detail is in Evidence.");
    render(
      <EarningsQualityLead
        {...leadProps(quality([BRIDGE[0] ?? [], ["Savings", CITED, "US$m", ""], BRIDGE[4] ?? []]))}
      />,
    );
    expect(document.body.textContent).not.toMatch(/C07|T1D\.2|p 45/);
    cleanup();
  });

  it("screens a gap reason, a basis note and a leverage cell that name a source", () => {
    const bridge = readBridge(
      quality([
        BRIDGE[0] ?? [],
        ["Savings", `Not supplied: ${CITED}`, "US$m", ""],
        BRIDGE[4] ?? [],
      ]),
    );
    expect(JSON.stringify(bridge)).not.toMatch(/C07|T1D\.2|p 45/);
    const noted = readBridge(
      quality(
        BRIDGE.map((row, at) => (at === 1 ? [row[0] ?? "", row[1] ?? "", "US$m", CITED] : row)),
      ),
    );
    expect(noted.state === "ready" && noted.notes.join(" ")).not.toMatch(/C07|T1D\.2/);
    const lev = readLeverage(
      quality(BRIDGE, ASSESSMENT, [LEVERAGE[0] ?? [], ["Supported", "", "", "", CITED, "5.9x"]]),
    );
    expect(JSON.stringify(lev)).not.toMatch(/C07|T1D\.2|p 45/);
  });
});

describe("derived figures say so", () => {
  it("labels the add-back total, the per-word sums and the leverage change as derived, in the table view too", () => {
    render(<EarningsQualityLead {...leadProps(quality())} />);
    expect(document.querySelector("[data-total]")).toHaveTextContent("derived");
    expect(document.querySelector("[data-by-support]")).toHaveTextContent("derived");
    const leverage = screen.getByRole("region", { name: "Leverage restated" });
    expect(within(leverage).getByText("Change (derived)")).toBeInTheDocument();
    for (const svg of leverage.querySelectorAll("svg[aria-label]"))
      expect(svg.getAttribute("aria-label")).toContain("(derived)");
  });
});

describe("EarningsQualityLead", () => {
  it("draws every bar in proportion on one cut axis, the two totals cut", () => {
    render(<EarningsQualityLead {...leadProps(quality())} />);
    expect(width("Run-rate savings") / width("Integration costs")).toBeCloseTo(2, 6);
    expect(width("Integration costs") / width("Pro forma acquisition")).toBeCloseTo(100 / 60, 6);
    expect(
      width("Adjusted EBITDA, statements") / width("Management financing-case EBITDA"),
    ).toBeCloseTo((3813 - 3600) / (4173 - 3600), 6);
    expect(document.querySelectorAll("[data-axis-cut]")).toHaveLength(2);
    // Each add-back starts where the last ended.
    const end = (label: string) => attr(bar(label), "x") + width(label);
    expect(attr(bar("Integration costs"), "x")).toBeCloseTo(end("Run-rate savings"), 6);
    expect(attr(bar("Pro forma acquisition"), "x")).toBeCloseTo(end("Integration costs"), 6);
    expect(screen.getByText(/The axis starts at 3,600, not zero/)).toBeVisible();
  });

  it("colours each add-back by its stated word, with the word beside it, and totals as derived sums", () => {
    render(<EarningsQualityLead {...leadProps(quality())} />);
    expect(bar("Run-rate savings")?.getAttribute("class")).toContain("fill-chart-2");
    expect(bar("Integration costs")?.getAttribute("class")).toContain("fill-chart-1");
    expect(bar("Pro forma acquisition")?.getAttribute("class")).toContain("fill-warning-mark");
    const tile = screen.getByRole("region", { name: "Add-back bridge" });
    expect(within(tile).getByText("Supported", { selector: "p" })).toBeVisible();
    expect(tile.querySelector("[data-total]")).toHaveTextContent(
      "Add-backs total 360 US$m derived",
    );
    expect(tile.querySelector("[data-by-support]")).toHaveTextContent(
      "Supported 100 · Partly supported 200 · Not supported 60 derived",
    );
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      "Adjusted EBITDA, statements 3,813 to Management financing-case EBITDA 4,173 through 3 add-backs",
    );
  });

  it("never infers support: without the assessment every add-back is neutral and the legend says so", () => {
    render(<EarningsQualityLead {...leadProps(quality(BRIDGE, null))} />);
    for (const label of ["Run-rate savings", "Integration costs", "Pro forma acquisition"])
      expect(bar(label)?.getAttribute("class")).toContain("fill-chart-3");
    expect(screen.getByText("Support is not stated per add-back")).toBeVisible();
    expect(document.querySelector("[data-by-support]")).toBeNull();
    expect(screen.getAllByText("Support not stated")).toHaveLength(3);
  });

  it("matched add-backs are coloured and the others neutral with their own legend entry", () => {
    render(
      <EarningsQualityLead
        {...leadProps(
          quality(BRIDGE, [["Integration costs", "Supported", "", "", "", "", "", "", ""]]),
        )}
      />,
    );
    expect(bar("Integration costs")?.getAttribute("class")).toContain("fill-chart-1");
    expect(bar("Run-rate savings")?.getAttribute("class")).toContain("fill-chart-3");
    expect(screen.getByText("Support not stated for this add-back")).toBeVisible();
    expect(screen.getByText("Support is not stated for 2 add-backs.")).toBeVisible();
  });

  it("draws the gap with the stated steps listed when the bridge does not reconcile", () => {
    render(
      <EarningsQualityLead
        {...leadProps(quality([...BRIDGE.slice(0, 4), ["Closing", "4200", "US$m", ""]]))}
      />,
    );
    const tile = screen.getByRole("region", { name: "Add-back bridge" });
    expect(within(tile).getByText(/do not reconcile/)).toBeVisible();
    expect(within(tile).getByText("200 US$m")).toBeVisible();
    expect(tile.querySelector("svg")).toBeNull();
  });

  it("draws reported and restated leverage on one axis with the derived gap labelled", () => {
    render(<EarningsQualityLead {...leadProps(quality())} />);
    const tile = screen.getByRole("region", { name: "Leverage restated" });
    const total = tile.querySelector('[data-measure="Total leverage"]');
    const a = attr(total?.querySelector("[data-reported]"), "cx");
    const b = attr(total?.querySelector("[data-restated]"), "cx");
    // The scale starts at zero: a mark's distance from the axis start is in proportion to its figure.
    expect((a - 24) / (b - 24)).toBeCloseTo(6.1 / 7.4, 6);
    const net = tile.querySelector('[data-measure="Net leverage"]');
    const c = attr(net?.querySelector("[data-reported]"), "cx");
    const d = attr(net?.querySelector("[data-restated]"), "cx");
    expect((c - 24) / (d - 24)).toBeCloseTo(5.0 / 5.9, 6);
    expect(total?.getAttribute("aria-label")).toBe(
      "Total leverage: 6.1x on the statements, 7.4x on supported earnings; restated is higher by 1.3x (derived).",
    );
    expect(within(tile).getAllByText("+1.3x derived")[0]).toBeVisible();
    expect(within(tile).getByText(/Restated is higher by 1.3x/)).toHaveTextContent("worse");
  });

  it("draws a leverage measure with a missing multiple as a gap with the handoff's reason", () => {
    render(
      <EarningsQualityLead
        {...leadProps(
          quality(BRIDGE, ASSESSMENT, [
            LEVERAGE[0] ?? [],
            ["Supported", "", "", "", "Not supplied: EBITDA not stated", "5.9x"],
          ]),
        )}
      />,
    );
    const tile = screen.getByRole("region", { name: "Leverage restated" });
    expect(tile.querySelector('[data-measure="Total leverage"]')).toBeNull();
    expect(
      within(tile).getByText(/Not drawn: on supported earnings EBITDA not stated/),
    ).toBeVisible();
    expect(tile.querySelector('[data-measure="Net leverage"]')).not.toBeNull();
  });

  it("each figure has one trace control and a table view; no source reference is drawn", () => {
    render(<EarningsQualityLead {...leadProps(quality())} />);
    expect(screen.getByRole("link", { name: "Source for the add-back bridge" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Source for restated leverage" })).toBeVisible();
    expect(screen.getAllByText("Table view")).toHaveLength(2);
    expect(document.body.textContent).not.toMatch(/CP-1D|T1D\.|\.pdf|\.xlsx/);
  });

  it("with no tables draws gaps in words, and a blocked module is the frame's one gap", () => {
    const { unmount } = render(<EarningsQualityLead {...leadProps(quality(null, null, null))} />);
    expect(
      screen.getByText("The handoff has no bridge table with Step and Amount columns."),
    ).toBeVisible();
    expect(screen.getByText(/no table of leverage by earnings basis/)).toBeVisible();
    unmount();
    const blocked = entry(
      "CP-1D",
      [],
      [
        { heading: "Findings", level: 2, line: 3, blocks: [] },
        {
          heading: "Bottom line",
          level: 3,
          line: 4,
          blocks: [
            { type: "text", line: 5, end: 5, text: "Not assessable: no bridge was supplied." },
          ],
        },
      ],
    );
    render(<EarningsQualityLead {...leadProps(blocked)} />);
    expect(screen.getByText("Not assessable: no bridge was supplied.")).toBeVisible();
  });

  it("draws a bridge with no add-backs and one with a deduction", () => {
    const { unmount } = render(
      <EarningsQualityLead
        {...leadProps(
          quality(
            [
              ["Opening", "100", "US$m", ""],
              ["Closing", "100", "US$m", ""],
            ],
            null,
            null,
          ),
        )}
      />,
    );
    expect(screen.getByRole("heading", { level: 3, name: /through 0 add-backs/ })).toBeVisible();
    unmount();
    render(
      <EarningsQualityLead
        {...leadProps(
          quality(
            [
              ["Opening", "100", "US$m", ""],
              ["Reversal", "-10", "US$m", ""],
              ["Closing", "90", "US$m", ""],
            ],
            null,
            null,
          ),
        )}
      />,
    );
    expect(bar("Reversal")).not.toBeNull();
    expect(bar("Reversal")?.closest("svg")?.textContent).toBe("−10");
  });
});
