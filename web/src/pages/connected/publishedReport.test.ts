import { describe, expect, it } from "vitest";
import {
  classifySections,
  comparisonRows,
  comparisonForRun,
  type PublishedRun,
  displayColumns,
  readParagraph,
  publishedHref,
  runPathway,
  runTiming,
} from "./publishedReport";

describe("published handoff boundaries", () => {
  it("uses the actual pathway and displays one as-of date", () => {
    expect(runPathway({ pathway: "credit_snapshot" })).toBe("Full credit assessment");
    expect(runTiming({ asOf: "2025-03-31", period: "As of 31 March 2025" })).toBe(
      "As of 31 March 2025",
    );
    expect(runTiming({ asOf: "2025-03-31", period: "FY2024" })).toBe("As of 2025-03-31 · FY2024");
  });

  it("sets earlier citations aside while preserving substantive brackets and punctuation", () => {
    expect(
      readParagraph("Cash fell [p. 12]. Losses were reported [sic]. Debt stayed flat. [CP-1]"),
    ).toEqual({
      body: "Cash fell. Losses were reported [sic]. Debt stayed flat.",
      basis: "[p. 12] [CP-1]",
    });
  });
  it("classifies passages, registrations and inter-module bodies by ancestry", () => {
    const headings: [string, number][] = [
      ["Findings", 2],
      ["Bottom line", 3],
      ["Source register", 3],
      ["Downstream owners", 3],
      ["Hidden descendant", 4],
      ["Credit drivers", 3],
      ["Sources", 2],
      ["Annual filings", 3],
    ];
    const locations = headings.map(([heading, level], line) => ({
      heading,
      level,
      line,
      blocks: [],
    }));
    expect(classifySections(locations).map(({ role }) => role)).toEqual([
      "finding",
      "passage",
      "registers",
      "hidden",
      "hidden",
      "finding",
      "sources",
      "sources",
    ]);
  });

  it("keeps the exact basis in trace and preserves identifiers in evidence tables only", () => {
    expect(
      readParagraph("- **Cash was USD 0m.**\nBasis: report.pdf, page 7; report.pdf, page 8."),
    ).toEqual({
      body: "**Cash was USD 0m.**",
      basis: "report.pdf, page 7; report.pdf, page 8.",
    });
    const headers = ["Cash", "Source", "Evidence ID", "Next module", "Downstream revenue"];
    expect(displayColumns(headers, false)).toEqual([0, 4]);
    expect(displayColumns(headers, true)).toEqual([0, 1, 2, 4]);
  });

  it("accepts only served workspace files and rejects path segments that change the target", () => {
    expect(publishedHref("downloads/test-run/CP-2.md", "test-run")).toBe(
      "/library/downloads/test-run/CP-2.md",
    );
    expect(publishedHref("downloads/other/CP-2.md", "test-run")).toBeNull();
    expect(publishedHref("downloads/test-run/%2e%2e/other.md", "test-run")).toBeNull();
    expect(publishedHref("downloads/test-run/a%2Fb.md", "test-run")).toBeNull();
    expect(publishedHref("https://example.com/CP-2.md", "test-run")).toBeNull();
  });
  it("carries authored changes and withholds a claimed delta across conflicting units", () => {
    const measure = {
      key: "cash",
      label: "Cash",
      prior: { value: "0", unit: "US$m", period: "FY2025" },
      current: { value: "20", unit: "GBPm", period: "FY2026" },
      difference: "20",
      unit: "GBPm",
    };
    const rows = comparisonRows({
      pack: { measures: [measure] },
      verdicts: {
        measures: {
          cash: {
            kind: "comparable",
            label: "Comparable",
            analysis_change: "The newer analysis uses a different cash perimeter.",
          },
        },
      },
    });
    expect(rows[0]).toEqual([
      "Cash",
      "0 US$m (FY2025)",
      "20 GBPm (FY2026)",
      "—",
      "Reporting units differ.",
      "The newer analysis uses a different cash perimeter.",
    ]);
  });

  it("keeps a same-period revision in Evidence without presenting it as issuer movement", () => {
    const change = {
      pack: {
        measures: [
          {
            key: "debt",
            label: "Total debt",
            unit: "US$m",
            same_period: true,
            prior: { value: "110", unit: "US$m", period: "FY2025" },
            current: { value: "100", unit: "US$m", period: "FY2025" },
            difference: "-10",
          },
        ],
      },
      verdicts: {
        measures: {
          debt: {
            kind: "comparable",
            label: "Same definition",
            analysis_change: "The updated filing reclassifies 10 US$m.",
          },
        },
      },
    };
    expect(comparisonRows(change)[0]).toEqual([
      "Total debt",
      "110 US$m (FY2025)",
      "100 US$m (FY2025)",
      "-10 US$m",
      "Same definition · Same-period analysis change",
      "The updated filing reclassifies 10 US$m.",
    ]);
    expect(comparisonRows(change, "reader")[0]?.[3]).toBe("—");
  });

  it("binds a comparison to the exact prior issuer, dates and pathway", () => {
    const earlier = {
      folder: "earlier",
      issuerKey: "issuer:alpha",
      asOf: "2024-12-31",
      pathway: "credit_snapshot",
    } as PublishedRun;
    const change = {
      pack: {
        prior: {
          run: "earlier",
          as_of: "2024-12-31",
          pathway: "credit_snapshot",
          format: "earlier",
        },
        current: { as_of: "2025-03-31", pathway: "credit_snapshot" },
        measures: [],
      },
    };
    const current = { ...earlier, folder: "current", asOf: "2025-03-31", changes: change };
    expect(comparisonForRun(current, { earlier, current })).toBe(change);
    for (const mismatched of [
      { ...earlier, issuerKey: "issuer:beta" },
      { ...earlier, asOf: "2024-12-30" },
      { ...earlier, pathway: "lite_credit_assessment" },
    ]) {
      expect(comparisonForRun(current, { earlier: mismatched, current })).toMatchObject({
        pack: null,
        problem: expect.any(String) as unknown,
      });
    }
  });
});
