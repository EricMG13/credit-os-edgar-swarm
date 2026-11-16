import { describe, expect, it } from "vitest";
import cases from "./signal.cases.json";
import { changeText, exactDifference, tone } from "./signal";

describe("signal answer key", () => {
  it.each(cases.exactDifference)("exactDifference(%s, %s)", (current, prior, expected) => {
    expect(exactDifference(current ?? "", prior ?? "")).toBe(expected);
  });
  it.each(cases.changeText)("changeText(%s, %s)", (change, unit, expected) => {
    expect(changeText(change, unit)).toBe(expected);
  });
  it.each(cases.tone)("tone(%s, %s)", (key, change, expected) => {
    expect(tone(key, change)).toBe(expected);
  });
});
