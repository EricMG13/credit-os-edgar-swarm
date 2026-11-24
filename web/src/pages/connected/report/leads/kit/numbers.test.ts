import { describe, expect, it } from "vitest";
import { difference, group, numberOf, percentOf, readCell, sum } from "./numbers";

describe("readCell", () => {
  it("reads a plain number, with commas and a unicode minus", () => {
    expect(readCell("7940")).toEqual({ kind: "number", text: "7940", value: 7940 });
    expect(readCell("1,250.5")).toEqual({ kind: "number", text: "1250.5", value: 1250.5 });
    expect(readCell("−302")).toEqual({ kind: "number", text: "-302", value: -302 });
  });
  it("keeps a stated gap with its reason and never makes it a number", () => {
    expect(readCell("Not supplied: source dash")).toEqual({
      kind: "gap",
      text: "Not supplied: source dash",
      reason: "source dash",
    });
    expect(readCell("Not calculable: negative signed prior base").kind).toBe("gap");
    expect(numberOf("Not supplied: no split")).toBeNull();
  });
  it("leaves other words as text: percentages with words, empty cells", () => {
    expect(readCell("20.6% reported").kind).toBe("text");
    expect(readCell("").kind).toBe("text");
    expect(numberOf("")).toBeNull();
  });
});

describe("exact arithmetic", () => {
  it("groups digits and uses a true minus, keeping decimals as written", () => {
    expect(group("7940")).toBe("7,940");
    expect(group("-2505")).toBe("−2,505");
    expect(group("6.50")).toBe("6.50");
    expect(group("Not supplied: x")).toBe("Not supplied: x");
  });
  it("adds and subtracts without float error", () => {
    expect(sum(["0.1", "0.2"])).toBe("0.3");
    expect(sum(["2347", "2038"])).toBe("4385");
    expect(sum(["1880", "-4385"])).toBe("-2505");
    expect(difference("24880", "19750")).toBe("5130");
    expect(difference("6.53", "6.27")).toBe("0.26");
  });
  it("refuses a sum or difference that has a gap or words in it", () => {
    expect(sum(["1", "Not supplied: x"])).toBeNull();
    expect(difference("5", "20.6% reported")).toBeNull();
    expect(sum([])).toBeNull();
  });
  it("states a share of two stated figures to two decimals", () => {
    expect(percentOf("2236", "3941")).toBe("56.74");
    expect(percentOf("1", "0")).toBeNull();
    expect(percentOf("Not supplied: x", "5")).toBeNull();
  });
});

describe("percentOf is exact decimal arithmetic, rounded half up to two places", () => {
  it("rounds 1.005 / 100 to 1.01, which floating point gets wrong", () => {
    expect(percentOf("1.005", "100")).toBe("1.01");
  });
  it("keeps the retained growth figures", () => {
    expect(percentOf("1355", "6585")).toBe("20.58");
    expect(percentOf("665", "3148")).toBe("21.12");
    expect(percentOf("-5", "8")).toBe("-62.50");
  });
});
