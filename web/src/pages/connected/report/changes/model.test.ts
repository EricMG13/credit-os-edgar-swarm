import { describe, expect, it } from "vitest";
import type { OutputEntry, PublishedChanges, Section } from "../../publishedReport";
import { classifyMeasures, issuerFacts, ledgerOf, statusColumn, verdictOf } from "./model";

const side = (value: string, unit = "x", period = "FY2025") => ({ value, unit, period });
const measure = (key: string, prior: string, current: string, difference: number, extra = {}) => ({
  key,
  label: `Measure ${key}`,
  prior: side(prior),
  current: side(current, "x", "FY2026"),
  difference,
  unit: "x",
  ...extra,
});
const verdicts = (keys: string[], kind = "comparable") => ({
  measures: Object.fromEntries(keys.map((key) => [key, { kind, label: "Label", reason: "Why" }])),
});

function entryWith(sections: Section[]): OutputEntry {
  return {
    selected: true,
    output: { id: "a", module: "CP-8", label: "a", href: "", sha256: "a".repeat(64) },
    sections,
  };
}
const table = (heading: string, headers: string[], rows: string[][]): Section => ({
  heading,
  level: 3,
  line: 10,
  blocks: [
    {
      type: "table",
      headers,
      line: 11,
      rows: rows.map((cells, index) => ({ line: 12 + index, cells })),
    },
  ],
});

describe("classifyMeasures", () => {
  it("keeps the pack's order and groups by what the pack says, never by a computed size", () => {
    const change: PublishedChanges = {
      pack: {
        measures: [
          measure("small", "10", "11", 1),
          measure("big", "2", "4", 2),
          measure("flat", "5", "5", 0),
          measure("same", "3", "3.5", 0.5, {
            current: side("3.5", "x", "FY2025"),
            same_period: true,
          }),
          measure("none", "1", "2", 1),
          measure("units", "1", "2", 1, { current: side("2", "US$m", "FY2026") }),
          measure("empty", "", "2", 2),
        ],
      },
      verdicts: {
        measures: {
          ...verdicts(["small", "big", "flat", "same", "units", "empty"]).measures,
          none: { kind: "not_comparable", label: "L", reason: "Different basis" },
        },
      },
    };
    const groups = classifyMeasures(change, (label) => `#trace/${label}`);
    expect(groups.moved.map((item) => item.key)).toEqual(["small", "big", "empty"]);
    expect(groups.revised.map((item) => item.key)).toEqual(["same"]);
    expect(groups.unmoved.map((item) => item.key)).toEqual(["flat"]);
    expect(groups.notAssessable.map((item) => item.key)).toEqual(["none", "units"]);
    expect(groups.moved[1]).toMatchObject({
      before: "2x (FY2025)",
      after: "4x (FY2026)",
      beforeValue: 2,
      afterValue: 4,
      href: "#trace/Measure big",
    });
  });

  it("replaces a reason that cites a source with a pointer to the comparison evidence", () => {
    const change: PublishedChanges = {
      pack: { measures: [measure("a", "1", "2", 1)] },
      verdicts: {
        measures: { a: { kind: "comparable", label: "L", reason: "Per filing.pdf p. 3" } },
      },
    };
    expect(classifyMeasures(change, () => undefined).moved[0]?.reason).toBe(
      "See comparison evidence.",
    );
  });

  it("never turns a missing side into zero", () => {
    const change: PublishedChanges = {
      pack: {
        measures: [
          {
            key: "net_leverage",
            label: "Net leverage",
            prior: { value: null, unit: "x" },
            current: side("3"),
            difference: null,
            unit: "x",
          },
        ],
      },
    };
    const [item] = classifyMeasures(change, () => undefined).notAssessable;
    expect(item?.before).toBe("Not stated");
    expect(item?.beforeValue).toBeNull();
  });

  it("reads the stated cause and effect of a measure from the issuer table, as written", () => {
    const entry = entryWith([
      table(
        "What changed: the issuer",
        ["Measure or fact", "Earlier", "Current", "Cause", "Effect on the credit view"],
        [
          ["Measure big", "2x", "4x", "Unresolved", "Weaker cover"],
          ["Measure small", "10x", "11x", "New period", "—"],
          ["measure referenced", "1x", "2x", "Per filing.pdf p. 3", ""],
          ["Measure blank", "1x", "2x", "—", ""],
        ],
      ),
    ]);
    const change: PublishedChanges = {
      pack: {
        measures: [
          measure("big", "2", "4", 2),
          measure("small", "10", "11", 1),
          measure("referenced", "1", "2", 1),
          measure("blank", "1", "2", 1),
          measure("elsewhere", "1", "2", 1),
        ],
      },
      verdicts: verdicts(["big", "small", "referenced", "blank", "elsewhere"]),
    };
    const { moved } = classifyMeasures(change, () => undefined, entry);
    expect(moved.map((item) => [item.key, item.cause, item.effect])).toEqual([
      ["big", { kind: "written", text: "Unresolved" }, "Weaker cover"],
      ["small", { kind: "written", text: "New period" }, null],
      ["referenced", { kind: "referenced" }, null],
      ["blank", { kind: "absent" }, null],
      ["elsewhere", { kind: "unmatched" }, null],
    ]);
  });
});

describe("statusColumn", () => {
  it.each([
    ["Unchanged", "unchanged"],
    ["Strengthened", "revised"],
    ["Weakened", "revised"],
    ["Reversed", "revised"],
    ["New", "new"],
    ["Not run this time", "missing"],
    ["", null],
    ["Something else", null],
  ])("%j sits in %j", (status, column) => {
    expect(statusColumn(status)).toBe(column);
  });
});

describe("ledgerOf", () => {
  const rows = [
    ["E1", "—", "Revolver terms unavailable", "**Closed**", "Amended agreement supplied"],
    ["—", "C2", "Hedge book not provided", "New", "—"],
    ["E3", "C3", "Lease schedule open", "Remaining", ""],
    ["—", "C4", "Per filing.pdf p. 3 the swap is unclear", "New", "—"],
    ["E5", "—", "Pension terms old", "Watching", ""],
    ["E6", "—", "Segment margins", "Parked", ""],
  ];
  const headers = ["Earlier ref", "Current ref", "Limitation", "Status", "What closed it"];
  const ledger = (h = headers, r = rows) =>
    ledgerOf(entryWith([table("Limitations ledger", h, r)]), "cur");

  it("groups every status: added and removed first, then Remaining, Parked, the rest by name", () => {
    const result = ledger();
    if (!result || "table" in result) throw new Error("expected groups");
    expect(result.groups.map((g) => [g.heading, g.items.length])).toEqual([
      ["Added", 2],
      ["Removed", 1],
      ["Remaining", 1],
      ["Parked", 1],
      ["Watching", 1],
    ]);
    expect(result.groups[1]?.items[0]).toMatchObject({
      text: "Revolver terms unavailable",
      note: "Amended agreement supplied",
    });
  });

  it("keeps a row that cites a source as a link to Evidence, not a missing row", () => {
    const result = ledger();
    if (!result || "table" in result) throw new Error("expected groups");
    expect(result.groups[0]?.items[1]).toMatchObject({ text: null });
    expect(result.groups[0]?.items[1]?.href).toMatch(/^\/report\/cur#evidence\//);
  });

  it("falls back to the table when a Status column is missing", () => {
    const result = ledger(headers.slice(0, 3), [["E1", "C1", "Margins"]]);
    expect(result).toHaveProperty("table");
  });

  it("is null without a ledger", () => {
    expect(ledgerOf(entryWith([]), "cur")).toBeNull();
    expect(ledgerOf(undefined, "cur")).toBeNull();
  });
});

describe("issuerFacts", () => {
  it("returns the issuer-table rows that are not pack measures, with a link each", () => {
    const entry = entryWith([
      table(
        "What changed: the issuer",
        ["Measure or fact", "Earlier", "Current", "Cause", "Effect on the credit view"],
        [
          ["Net leverage", "6x", "7x", "Unresolved", "Worse"],
          ["New term loan B of US$600m signed", "—", "Signed", "New source", "More debt"],
        ],
      ),
    ]);
    const facts = issuerFacts(entry, "cur", new Set(["net leverage"]));
    expect(facts).toHaveLength(1);
    expect(facts[0]).toMatchObject({
      label: { kind: "written", text: "New term loan B of US$600m signed" },
      before: { kind: "absent" },
      after: { kind: "written", text: "Signed" },
    });
    expect(facts[0]?.href).toMatch(/^\/report\/cur#evidence\//);
  });
});

describe("verdictOf", () => {
  const bottom = (...texts: string[]) =>
    entryWith([
      { heading: "Findings", level: 2, line: 1, blocks: [] },
      {
        heading: "Bottom line",
        level: 3,
        line: 2,
        blocks: texts.map((text, at) => ({
          type: "text" as const,
          line: 3 + at,
          end: 3 + at,
          text,
        })),
      },
    ]);

  it("is the first paragraph whole, never split at a full stop", () => {
    const verdict = verdictOf(
      bottom(
        "About the same: net leverage is approx. 7x. Cover is steady.",
        "Worse: Acme Inc. rose.",
      ),
      "cur",
    );
    expect(verdict?.first.text).toBe(
      "About the same: net leverage is approx. 7x. Cover is steady.",
    );
    expect(verdict?.body).toHaveLength(1);
  });

  it("keeps a clean second paragraph and links a later one that cites a source", () => {
    const verdict = verdictOf(
      bottom(
        "See filing.pdf p. 3 for the position.",
        "Cover is steady.",
        "Per report.pdf p. 2 more.",
      ),
      "cur",
    );
    expect(verdict?.first.text).toBeNull();
    expect(verdict?.body.map((item) => (item.kind === "text" ? item.text : "table"))).toEqual([
      "Cover is steady.",
      null,
    ]);
  });

  it("is null without a Bottom line", () => {
    expect(verdictOf(entryWith([]), "cur")).toBeNull();
    expect(verdictOf(undefined, "cur")).toBeNull();
  });
});
