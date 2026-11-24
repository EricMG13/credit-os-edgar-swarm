import { describe, expect, it } from "vitest";
import { IN_EVIDENCE, namesSource, safeText } from "./reader";

describe("safeText", () => {
  it("passes plain reader wording and turns module codes into names", () => {
    expect(safeText("  Revenue detail is incomplete ")).toBe("Revenue detail is incomplete");
    expect(safeText("Net debt rose")).toBe("Net debt rose");
  });
  it.each([
    "Calculation C07; register T4.4 row D14.",
    "see C07 in T1D.2 per 10-K p 45",
    "Not supplied: not in TDG_10-K.htm page 45",
    "register T5B.5",
    "TL10.1 scope",
    "D12–D13; adjustments grow",
  ])("sends text that names a source to Evidence: %s", (text) => {
    expect(namesSource(text)).toBe(true);
    expect(safeText(text)).toBe(IN_EVIDENCE);
  });
  it("does not mistake ordinary words, quarters or amounts for identifiers", () => {
    for (const text of [
      "Q3 results",
      "FY2024 rose 4.4 points",
      "Cover of 3.1x",
      "Tranche C is secured",
    ])
      expect(namesSource(text), text).toBe(false);
  });
});
