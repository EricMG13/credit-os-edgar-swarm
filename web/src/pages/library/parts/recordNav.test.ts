import type { RecordBlock } from "../slice";
import { recordSections } from "./recordNav";

const edges = (title: string): RecordBlock => ({ kind: "edges", title, steps: [] });
const gap = (title: string, nav: string | null): RecordBlock => ({
  kind: "gap",
  nav,
  title,
  reason: "Not in the files.",
});

describe("a module's navigator entries from its record blocks", () => {
  it("names a prose module's blocks by their own headings, not 'Records' (S3-026)", () => {
    const sections = recordSections([
      edges("Risks by probability and impact"),
      edges("Indicators to watch"),
    ]);
    expect(sections.map((s) => s.label)).toEqual([
      "Risks by probability and impact",
      "Indicators to watch",
    ]);
    expect(new Set(sections.map((s) => s.key)).size).toBe(2);
  });

  it("gives one entry for each distinct delivered label and none for a block with no label", () => {
    const blocks = [gap("A", "Hedges"), gap("B", "Hedges"), gap("C", null), gap("D", "Terms")];
    expect(recordSections(blocks).map((s) => s.label)).toEqual(["Hedges", "Terms"]);
  });

  it("keeps one 'Records' entry for a data module whose blocks all carry no label", () => {
    expect(recordSections([gap("A", null)]).map((s) => s.label)).toEqual(["Records"]);
  });

  it("has no entry for no block", () => {
    expect(recordSections([])).toEqual([]);
  });
});
