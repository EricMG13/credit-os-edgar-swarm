import { expect, it } from "vitest";
import type { OutputEntry } from "../../publishedReport";
import { entry, section, table } from "../overview/rows.fixture";
import { bottomLine, EVENT_HEADERS } from "./lead.fixture";
import { fixtureEntry, retained } from "./markdown.fixture";
import {
  blockedReason,
  blockedState,
  chartOf,
  eventsOf,
  leadingMillions,
  mapOf,
  registerTable,
  sectionParagraphs,
} from "./read";

const H3 = retained("esg", "CP-2E-h3.md");
const H4 = retained("esg", "CP-2E-h4.md");

it("finds a register by its id whatever the title says after it, and only with its headers", () => {
  // Retained real output (TransDigm FY2024, outdated): the two runs title T2F.4 differently.
  const h3 = fixtureEntry("CP-2E", H3);
  const h4 = fixtureEntry("CP-2E", H4);
  expect(registerTable(h3, "T2F.4", ["Metric", "Amount"])?.headers[0]).toBe("Metric");
  expect(registerTable(h4, "T2F.4", ["Metric", "Amount"])).toBeDefined();
  expect(registerTable(h3, "T2F.4", ["Metric", "Not a header"])).toBeUndefined();
  expect(registerTable(h3, "T2F", ["Metric", "Amount"])).toBeUndefined();
});

it("does not take T2F.50 for T2F.5", () => {
  const made = entry("CP-2E", [], [section("T2F.50 Other", 1, table(2, ["A", "B"], [["1", "2"]]))]);
  expect(registerTable(made, "T2F.5", ["A"])).toBeUndefined();
});

it("reads a chart table, its stated gap, or neither", () => {
  const made = entry(
    "CP-4",
    [{ title: "Covenant headroom", table: 3 }],
    [section("Chart data: covenant headroom", 1, table(3, ["Test", "Threshold"], [["A", "1"]]))],
  );
  made.output.chartGaps = [{ title: "Rating triggers", table: 9, gap: "no agency trigger stated" }];
  expect(chartOf(made, "Covenant headroom").state).toBe("ready");
  expect(chartOf(made, "Rating triggers")).toEqual({
    state: "gap",
    reason: "No agency trigger stated",
  });
  expect(chartOf(made, "Liquidity bridge")).toEqual({ state: "absent" });
});

const edges = (rows: string[][], gap: string | null = null): OutputEntry => {
  const made = entry(
    "CP-1A",
    [],
    [
      section(
        "Map: ownership and control",
        1,
        table(3, ["From", "Relationship", "Edge type", "To", "Evidence"], rows),
      ),
    ],
  );
  made.output.maps = [{ name: "ownership and control", table: 3, gap }];
  return made;
};

it("reads a map's edges, and a map whose rows state a gap as that gap", () => {
  const ready = mapOf(
    edges([["Parent", "Owns", "Ownership", "Issuer", "Filing p.1"]]),
    "ownership and control",
  );
  expect(ready.state === "ready" && ready.edges[0]).toMatchObject({ from: "Parent", to: "Issuer" });
  const stated = mapOf(
    edges([["Not supplied: guarantor exhibit absent", "x", "Guarantee", "y", "z"]]),
    "ownership and control",
  );
  expect(stated).toMatchObject({ state: "gap", reason: "Guarantor exhibit absent" });
  expect(
    mapOf(edges([], "the intercreditor agreement is absent"), "ownership and control"),
  ).toMatchObject({
    state: "gap",
    reason: "The intercreditor agreement is absent",
  });
  expect(mapOf(edges([]), "legal entities")).toEqual({ state: "absent" });
});

it("orders dated events by date and keeps each one's stated precision", () => {
  const made = entry(
    "CP-2D",
    [],
    [
      section(
        "Events: Financing",
        1,
        table(
          3,
          [
            "Event date",
            "Date precision",
            "Published",
            "Event",
            "Status",
            "Source",
            "Credit relevance",
          ],
          [
            ["2026", "year", "2024-11-07", "Late", "Scheduled — maturity", "Filing", "Wall"],
            ["2025-03-31", "day", "2024-11-07", "Early", "Scheduled — matures", "Filing", "Wall"],
          ],
        ),
      ),
    ],
  );
  made.output.events = [{ lane: "Financing", table: 3, gap: null }];
  expect(eventsOf(made, "Financing")?.map(({ event, precision }) => [event, precision])).toEqual([
    ["Early", "day"],
    ["Late", "year"],
  ]);
  expect(eventsOf(made, "Hedges")).toBeNull();
});

it("gives the blocked module's first paragraph after its prefix, and nothing naming a source", () => {
  const blockedEntry = (text: string) =>
    entry(
      "CP-4",
      [],
      [
        { heading: "Findings", level: 2, line: 1, blocks: [] },
        {
          heading: "Bottom line",
          level: 3,
          line: 2,
          blocks: [{ type: "text", line: 3, end: 3, text }],
        },
      ],
    );
  expect(
    blockedReason(
      blockedEntry(
        "Not assessable: no executed governing document available. The source set holds no credit agreement.",
      ),
    ),
  ).toBe("No executed governing document available. The source set holds no credit agreement.");
  expect(
    blockedReason(blockedEntry("Not assessable: Acme Holdings Inc. did not publish its accounts.")),
  ).toBe("Acme Holdings Inc. did not publish its accounts.");
  expect(blockedReason(blockedEntry("Not assessable: no filings were supplied"))).toBe(
    "No filings were supplied",
  );
  expect(blockedReason(blockedEntry("Not assessable: see TDG_10-K.htm, page 3."))).toBeNull();
  expect(blockedReason(blockedEntry("Leverage is high."))).toBeNull();
});

it("reads a stated leading amount exactly and nothing else", () => {
  expect(leadingMillions("+USD 57.89 million annual cash interest")).toEqual({
    currency: "USD",
    value: 57.89,
  });
  expect(leadingMillions("USD 5,789 million", "USD")).toEqual({ currency: "USD", value: 5789 });
  expect(leadingMillions("Approximately +USD 30 million annual interest costs")).toBeNull();
  expect(leadingMillions("EUR 5 million", "USD")).toBeNull();
  expect(leadingMillions("Not calculable: no base")).toBeNull();
});

it("draws a passage's paragraphs and keeps one that names a source in Evidence", () => {
  const made = entry("CP-DR", [], []);
  made.sections = [
    {
      heading: "Causal synthesis and scenarios",
      level: 3,
      line: 1,
      blocks: [
        { type: "text", line: 2, end: 2, text: "The downside path starts with a traffic shock." },
        { type: "text", line: 4, end: 4, text: "See TDG_10-K.htm, page 7." },
      ],
    },
  ];
  expect(sectionParagraphs(made, "Causal synthesis and scenarios")).toEqual([
    { line: 2, text: "The downside path starts with a traffic shock." },
    { line: 4, text: null },
  ]);
});

it("states a blocked module's reason, or the Evidence fallback, whenever it is blocked", () => {
  const made = (text: string) => entry("CP-2", [], [...bottomLine(text)]);
  const fallback = { reason: "Not assessable; the reason is recorded in Evidence." };
  expect(blockedState(made("Not assessable: no filings were supplied"))).toEqual({
    reason: "No filings were supplied",
  });
  expect(blockedState(made("Not assessable: see TDG_10-K.htm, page 3."))).toEqual(fallback);
  expect(blockedState(made("Leverage is high."))).toBeNull();
  const unestablished = made("Leverage is high.");
  unestablished.output.state = { established: false, declared: null };
  expect(blockedState(unestablished)).toEqual(fallback);
});

it("draws a map's edges and dated events without their source references or module codes", () => {
  const made = edges([
    ["Retail", "Drives EBITDA per annual_report.pdf p. 12", "Documentary Fact", "CP-2A", "S1"],
  ]);
  const map = mapOf(made, "ownership and control");
  expect(map.state === "ready" && map.edges[0]).toMatchObject({
    from: "Retail",
    relationship: "In Evidence",
    type: "Documentary Fact",
    to: "Downside",
  });
  made.sections.push(
    section(
      "Events: Issuer history",
      20,
      table(21, EVENT_HEADERS, [
        [
          "2024-03-01",
          "day",
          "2024-03-01",
          "Notes issued (offering_memo.pdf p. 3)",
          "Historical — CP-2D",
          "S2",
          "Debt",
        ],
      ]),
    ),
  );
  made.output.events = [{ lane: "Issuer history", table: 21 }];
  expect(eventsOf(made, "Issuer history")?.[0]).toMatchObject({
    event: "In Evidence",
    status: "Historical — Liquidity",
  });
});
