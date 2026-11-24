import { describe, expect, it } from "vitest";
import type { OutputEntry, PublishedChanges, Section } from "../../publishedReport";
import { classifyMeasures, ledgerLists, statusColumn, verdictSentence } from "./model";

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
  it("ranks the largest relative move first and keeps unmoved, revised and not assessable apart", () => {
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
        ],
      },
      verdicts: {
        measures: {
          ...verdicts(["small", "big", "flat", "same"]).measures,
          none: { kind: "not_comparable", label: "L", reason: "Different basis" },
        },
      },
    };
    const groups = classifyMeasures(change, (label) => `#trace/${label}`);
    expect(groups.moved.map((item) => item.key)).toEqual(["big", "small"]);
    expect(groups.revised.map((item) => item.key)).toEqual(["same"]);
    expect(groups.unmoved.map((item) => item.key)).toEqual(["flat"]);
    expect(groups.notAssessable.map((item) => item.key)).toEqual(["none"]);
    expect(groups.moved[0]).toMatchObject({
      before: "2x (FY2025)",
      after: "4x (FY2026)",
      beforeValue: 2,
      afterValue: 4,
      href: "#trace/Measure big",
    });
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
        ],
      ),
    ]);
    const change: PublishedChanges = {
      pack: { measures: [measure("big", "2", "4", 2), measure("small", "10", "11", 1)] },
      verdicts: verdicts(["big", "small"]),
    };
    const { moved } = classifyMeasures(change, () => undefined, entry);
    expect(moved.map((item) => [item.key, item.cause, item.effect])).toEqual([
      ["big", "Unresolved", "Weaker cover"],
      ["small", "New period", null],
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

describe("ledgerLists", () => {
  it("lists New limitations as added and Closed as removed, with what closed them", () => {
    const entry = entryWith([
      table(
        "Limitations ledger",
        ["Earlier ref", "Current ref", "Limitation", "Status", "What closed it"],
        [
          ["E1", "—", "Revolver terms unavailable", "**Closed**", "Amended agreement supplied"],
          ["—", "C2", "Hedge book not provided", "New", "—"],
          ["E3", "C3", "Lease schedule open", "Remaining", ""],
        ],
      ),
    ]);
    expect(ledgerLists(entry)).toEqual({
      added: [{ text: "Hedge book not provided", note: null, line: 13 }],
      removed: [
        { text: "Revolver terms unavailable", note: "Amended agreement supplied", line: 12 },
      ],
    });
  });

  it("is empty without a ledger", () => {
    expect(ledgerLists(entryWith([]))).toBeNull();
    expect(ledgerLists(undefined)).toBeNull();
  });
});

describe("verdictSentence", () => {
  it("is the first Bottom line paragraph in the module's words, without a reference", () => {
    const entry = entryWith([
      { heading: "Findings", level: 2, line: 1, blocks: [] },
      {
        heading: "Bottom line",
        level: 3,
        line: 2,
        blocks: [
          {
            type: "text",
            line: 3,
            end: 3,
            text: "Credit is about the same as in the earlier run.",
          },
        ],
      },
    ]);
    expect(verdictSentence(entry)).toBe("Credit is about the same as in the earlier run.");
    expect(verdictSentence(undefined)).toBeNull();
  });
});
