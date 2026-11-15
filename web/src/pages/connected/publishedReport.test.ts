import { describe, expect, it } from "vitest";
import {
  classifySections,
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
});
