// Synthetic, built from the module contract (src/deploy_workflow/owners/cpos_launch_tables.py
// `_peer_range`, apps/issuer-library/credit_os/handoff_fields.py ROW_CHARTS "range"); not a real
// handoff — unproven on a real run. CP-1C is blocked at the peer-data gate in every retained run.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { entry, section, table } from "../overview/rows.fixture";
import { leadProps } from "./fixtures/load";
import { PeerBenchmarkLead } from "./peerBenchmark";
import { PEER_HEADINGS, readPeerBenchmark, valueOf } from "./peerBenchmarkData";

afterEach(cleanup);

const HEAD = [
  "Metric",
  "Issuer",
  "Peer low",
  "Peer median",
  "Peer high",
  "Peer count",
  "Reporting unit",
  "Basis and limitation",
];

const PERCENT = [
  [
    "EBITDA margin",
    "31.2",
    "18.5",
    "24.0",
    "33.1",
    "7",
    "%",
    "Two peers excluded as not comparable.",
  ],
  ["FFO / debt", "Not supplied: issuer FFO is not stated", "8.0", "12.5", "19.0", "7", "%", ""],
  [
    "Cash conversion",
    "55.0",
    "Not supplied: only two peers reported it",
    "Not supplied: only two peers reported it",
    "Not supplied: only two peers reported it",
    "2",
    "%",
    "",
  ],
  ["Conflicting metric", "15", "30", "10", "20", "5", "%", ""],
];
const MULTIPLES = [
  ["Total leverage", "6.1", "3.2", "4.5", "5.8", "7", "x", ""],
  ["Interest cover", "1.9", "2.0", "3.0", "4.5", "1", "x", ""],
  ["Equal to median", "3.0", "2.0", "3.0", "4.0", "7", "x", ""],
];

const bottom = (text: string) => ({
  heading: "Bottom line",
  level: 3,
  line: 4,
  blocks: [{ type: "text" as const, line: 5, end: 5, text }],
});

function peers(percent: string[][] | null, multiples: string[][] | null, extra = []) {
  return entry(
    "CP-1C",
    [],
    [
      { heading: "Findings", level: 2, line: 3, blocks: [] },
      bottom("Peer data is limited. Detail follows."),
      ...(percent ? [section(PEER_HEADINGS.percent, 9, table(10, HEAD, percent))] : []),
      ...(multiples ? [section(PEER_HEADINGS.multiples, 29, table(30, HEAD, multiples))] : []),
      ...extra,
    ],
  );
}

const num = (element: Element | null | undefined, name: string) =>
  Number(element?.getAttribute(name));

describe("peerBenchmarkData: what the contract tables say", () => {
  it("reads a stated zero as a value, a stated gap with its reason, and words as unreadable", () => {
    expect(valueOf("0")).toMatchObject({ kind: "number", value: 0 });
    expect(valueOf("Not supplied: no data")).toMatchObject({ kind: "gap", reason: "no data" });
    expect(valueOf("about 5")).toMatchObject({ kind: "unreadable" });
    expect(valueOf("1,250.5")).toMatchObject({ kind: "number", value: 1250.5 });
  });

  it("classifies each row: strip, gap (band missing) and conflict (values out of order)", () => {
    const read = readPeerBenchmark(peers(PERCENT, MULTIPLES));
    const [percent, multiples] = read.tables;
    expect(percent?.rows.map((row) => row.drawing.kind)).toEqual([
      "strip",
      "strip",
      "gap",
      "conflict",
    ]);
    expect(percent?.rows[0]?.drawing).toMatchObject({
      low: 18.5,
      median: 24,
      high: 33.1,
      issuer: 31.2,
    });
    // The issuer is missing: the band is still a strip.
    expect(percent?.rows[1]?.drawing).toMatchObject({ kind: "strip", issuer: null });
    expect(multiples?.rows.map((row) => row.drawing.kind)).toEqual(["strip", "strip", "strip"]);
  });

  it("a median outside the band conflicts; low equal to high is a valid degenerate strip", () => {
    const read = readPeerBenchmark(
      peers(
        [
          ["Outside", "5", "10", "25", "20", "3", "%", ""],
          ["Single", "5", "10", "10", "10", "1", "%", ""],
          ["Zero low", "1", "0", "0.5", "2", "3", "%", ""],
          ["Words", "x", "about 5", "6", "9", "3", "%", ""],
        ],
        null,
      ),
    );
    const kinds = read.tables[0]?.rows.map((row) => row.drawing.kind);
    expect(kinds).toEqual(["conflict", "strip", "strip", "gap"]);
    expect(read.tables[0]?.rows[2]?.drawing).toMatchObject({ low: 0 });
    expect(read.tables[0]?.rows[3]?.notes.join(" ")).toContain("where a number was expected");
  });

  it("groups rows by their stated unit so that one scale never spans two units", () => {
    const read = readPeerBenchmark(
      peers(
        [
          ["Margin", "10", "5", "8", "12", "4", "%", ""],
          ["Spread", "10", "5", "8", "12", "4", "pp", ""],
        ],
        null,
      ),
    );
    expect(read.tables[0]?.groups.map((group) => group.unit)).toEqual(["%", "pp"]);
  });

  it("reports an absent, repeated, empty or column-short table in words and reads the other", () => {
    const missing = readPeerBenchmark(peers(PERCENT, null));
    expect(missing.tables).toHaveLength(1);
    expect(missing.gaps).toEqual(["The peer range for multiples is not in this handoff."]);
    const twice = readPeerBenchmark(
      peers(PERCENT, MULTIPLES, [
        section(PEER_HEADINGS.percent, 50, table(51, HEAD, PERCENT)),
      ] as never),
    );
    expect(twice.gaps[0]).toContain("appears more than once");
    const short = peers(null, null, [
      section(PEER_HEADINGS.percent, 9, table(10, ["Metric", "Issuer"], [["a", "1"]])),
    ] as never);
    expect(readPeerBenchmark(short).gaps[0]).toContain("lacks the columns Peer low");
    const empty = readPeerBenchmark(peers([], null));
    expect(empty.gaps[0]).toBe("The peer range for percent metrics has no rows.");
  });
});

describe("PeerBenchmarkLead", () => {
  it("draws the band, the median tick and the issuer in proportion on one axis per unit", () => {
    const { container } = render(<PeerBenchmarkLead {...leadProps(peers(PERCENT, MULTIPLES))} />);
    const tile = screen.getByRole("region", { name: "Peer range, percent metrics" });
    const row = tile.querySelector('[data-row="EBITDA margin"]');
    const band = row?.querySelector("[data-band]");
    const median = num(row?.querySelector("[data-median]"), "x1");
    const high = num(band, "x") + num(band, "width");
    const issuer = num(row?.querySelector("[data-issuer]"), "cx");
    expect((issuer - median) / (high - median)).toBeCloseTo((31.2 - 24) / (33.1 - 24), 6);
    expect(num(band, "width") / (issuer - num(band, "x"))).toBeCloseTo(
      (33.1 - 18.5) / (31.2 - 18.5),
      6,
    );
    // The two rows that state a band share one axis: a value in each lands in proportion.
    const margin = tile.querySelector('[data-row="FFO / debt"] [data-band]');
    expect(num(margin, "width") / num(band, "width")).toBeCloseTo((19.0 - 8.0) / (33.1 - 18.5), 6);
    expect(container.querySelectorAll("[data-axis]")).toHaveLength(2);
  });

  it("keeps percent metrics and multiples in separate tiles with their own labels", () => {
    render(<PeerBenchmarkLead {...leadProps(peers(PERCENT, MULTIPLES))} />);
    const percent = screen.getByRole("region", { name: "Peer range, percent metrics" });
    const multiples = screen.getByRole("region", { name: "Peer range, multiples" });
    expect(within(percent).getByRole("heading", { level: 3 })).toHaveTextContent(/^Peer range$/);
    expect(within(multiples).getByRole("heading", { level: 3 })).toHaveTextContent(/^Peer range$/);
    expect(percent.querySelector('[data-row="Total leverage"]')).toBeNull();
    expect(within(multiples).getByText("issuer 6.1x")).toBeVisible();
    expect(within(percent).getByText("issuer 31.2%")).toBeVisible();
  });

  it("states no position against the median and no computed sentence, in text, aria-label or table", () => {
    render(<PeerBenchmarkLead {...leadProps(peers(PERCENT, MULTIPLES))} />);
    const multiples = screen.getByRole("region", { name: "Peer range, multiples" });
    expect(multiples.querySelector('[data-row="Total leverage"]')?.getAttribute("aria-label")).toBe(
      "Total leverage: peer low 3.2x, median 4.5x, peer high 5.8x, issuer 6.1x. 7 peers.",
    );
    expect(document.body.textContent).not.toMatch(
      /above the peer median|below the peer median|at the peer median|derived|percentile|rank/i,
    );
  });

  it("prints the peer count, singular for one peer", () => {
    render(<PeerBenchmarkLead {...leadProps(peers(PERCENT, MULTIPLES))} />);
    const multiples = screen.getByRole("region", { name: "Peer range, multiples" });
    expect(within(multiples).getByText("1 peer")).toBeVisible();
    expect(within(multiples).getAllByText("7 peers")).toHaveLength(2);
  });

  it("draws the band with a hatched issuer slot and the reason when the issuer is missing", () => {
    render(<PeerBenchmarkLead {...leadProps(peers(PERCENT, MULTIPLES))} />);
    const tile = screen.getByRole("region", { name: "Peer range, percent metrics" });
    const row = tile.querySelector('[data-row="FFO / debt"]');
    expect(row?.querySelector("[data-band]")).not.toBeNull();
    expect(row?.querySelector("[data-issuer]")).toBeNull();
    expect(row?.querySelector('[data-gap="Issuer not supplied"]')).not.toBeNull();
    expect(within(tile).getByText("FFO / debt, issuer: issuer FFO is not stated.")).toBeVisible();
  });

  it("draws only the labelled gap row when the band is not stated, and never a strip for conflicting values", () => {
    render(<PeerBenchmarkLead {...leadProps(peers(PERCENT, MULTIPLES))} />);
    const tile = screen.getByRole("region", { name: "Peer range, percent metrics" });
    const gap = tile.querySelector('[data-row="Cash conversion"]');
    expect(gap?.querySelector("[data-band]")).toBeNull();
    expect(gap?.querySelector('[data-gap="Peer range not supplied"]')).not.toBeNull();
    expect(
      within(tile).getByText("Cash conversion, peer low: only two peers reported it."),
    ).toBeVisible();
    const conflict = tile.querySelector('[data-row="Conflicting metric"]');
    expect(conflict?.querySelector("[data-band]")).toBeNull();
    expect(conflict?.querySelector("[data-issuer]")).toBeNull();
    expect(
      within(tile).getByText("The stated values conflict, so no range is drawn."),
    ).toBeVisible();
  });

  it("draws a stated zero as a value on the axis, not as a gap", () => {
    render(
      <PeerBenchmarkLead
        {...leadProps(peers([["Zero low", "1", "0", "0.5", "2", "3", "%", ""]], null))}
      />,
    );
    const row = document.querySelector('[data-row="Zero low"]');
    expect(row?.querySelector("[data-band]")?.getAttribute("data-low")).toBe("0");
    expect(row?.querySelectorAll("[data-gap]")).toHaveLength(0);
  });

  it("gives every figure one trace control and a table view, and no source reference", () => {
    render(<PeerBenchmarkLead {...leadProps(peers(PERCENT, MULTIPLES))} />);
    expect(screen.getAllByRole("link", { name: /Source for the peer range/ })).toHaveLength(2);
    expect(screen.getAllByText("Table view")).toHaveLength(2);
    const text = document.body.textContent;
    expect(text).not.toMatch(/CP-1C|\.xlsx|\.pdf|T1C/);
  });

  it("notes that outliers and the peer table are not in this handoff, unless an outlier table exists", () => {
    const { unmount } = render(<PeerBenchmarkLead {...leadProps(peers(PERCENT, MULTIPLES))} />);
    expect(screen.getByText("Outliers and the peer table are not in this handoff.")).toBeVisible();
    unmount();
    render(
      <PeerBenchmarkLead
        {...leadProps(
          peers(PERCENT, MULTIPLES, [
            section("Outlier register", 70, table(71, ["Peer", "Outlier"], [["A", "No"]])),
          ] as never),
        )}
      />,
    );
    expect(screen.queryByText("Outliers and the peer table are not in this handoff.")).toBeNull();
  });

  it("with no range table at all draws one gap tile naming the true condition, never the bottom line", () => {
    render(<PeerBenchmarkLead {...leadProps(peers(null, null))} />);
    expect(screen.getByText(/No peer range table is in this handoff\./)).toBeVisible();
    // The module wrote "Peer data is limited." as its bottom line: that sentence is not the reason.
    expect(screen.queryByText(/Peer data is limited/)).toBeNull();
    expect(screen.queryByRole("img")).toBeNull();
    expect(document.querySelectorAll(".gap-hatch").length).toBeGreaterThan(0);
  });

  it("names the true condition for each gap: repeated, short of columns, empty", () => {
    const twice = peers(PERCENT, null, [
      section(PEER_HEADINGS.percent, 50, table(51, HEAD, PERCENT)),
    ] as never);
    const short = peers(null, null, [
      section(PEER_HEADINGS.percent, 9, table(10, ["Metric", "Issuer"], [["a", "1"]])),
    ] as never);
    const cases: [ReturnType<typeof peers>, RegExp][] = [
      [twice, /appears more than once/],
      [short, /lacks the columns Peer low/],
      [peers([], null), /has no rows/],
    ];
    for (const [input, words] of cases) {
      const { unmount } = render(<PeerBenchmarkLead {...leadProps(input)} />);
      expect(screen.getAllByText(words).length).toBeGreaterThan(0);
      expect(screen.queryByText(/Peer data is limited/)).toBeNull();
      unmount();
    }
  });

  it("reads the multiples table when its heading uses a hyphen or an en dash for the em dash", () => {
    for (const dash of ["-", "\u2013"]) {
      const heading = `Chart data: peer range ${dash} multiples`;
      const input = entry(
        "CP-1C",
        [],
        [
          { heading: "Findings", level: 2, line: 3, blocks: [] },
          section(heading, 29, table(30, HEAD, MULTIPLES)),
        ],
      );
      const read = readPeerBenchmark(input);
      expect(
        read.tables.map((item) => item.kind),
        heading,
      ).toEqual(["multiples"]);
      expect(read.gaps).toEqual(["The peer range for percent metrics is not in this handoff."]);
    }
  });

  it("a blocked module draws nothing: the frame states it", () => {
    const blocked = entry(
      "CP-1C",
      [],
      [
        { heading: "Findings", level: 2, line: 3, blocks: [] },
        bottom("Not assessable: the peer data gate was not passed."),
      ],
    );
    const { container } = render(<PeerBenchmarkLead {...leadProps(blocked)} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("declares that it draws the module's typed figures", () => {
    expect(PeerBenchmarkLead.draws).toEqual(["figures"]);
  });

  it("draws one row when the table has one row", () => {
    render(
      <PeerBenchmarkLead
        {...leadProps(peers(null, [["Total leverage", "6.1", "3.2", "4.5", "5.8", "7", "x", ""]]))}
      />,
    );
    const tile = screen.getByRole("region", { name: "Peer range, multiples" });
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      "Peer range for 1 multiple",
    );
    expect(tile.querySelectorAll("[data-band]")).toHaveLength(1);
  });

  it("draws different units on their own axes", () => {
    const { container } = render(
      <PeerBenchmarkLead
        {...leadProps(
          peers(
            [
              ["Margin", "10", "5", "8", "12", "4", "%", ""],
              ["Spread", "10", "50", "80", "120", "4", "pp", ""],
            ],
            null,
          ),
        )}
      />,
    );
    expect(container.querySelectorAll("[data-axis]")).toHaveLength(2);
    const margin = container.querySelector('[data-row="Margin"] [data-issuer]');
    const spread = container.querySelector('[data-row="Spread"] [data-issuer]');
    // Both issuers state 10, but against different bands on different axes they sit at different places.
    expect(num(margin, "cx")).not.toBeCloseTo(num(spread, "cx"), 0);
    expect(screen.getByText("Reporting unit: pp")).toBeVisible();
  });
});
