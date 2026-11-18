import { edited, readRuns } from "./test-fixture";

// X1-024: a debt part with a zero balance is an ordinary figure, not a page that cannot be read.
const PART = ["runs", 0, "statements", "debt", "stack", "parts", 3] as const;
const PART_PATH = "runs[0].statements.debt.stack.parts[3]";

describe("readSlice: a debt part with no balance", () => {
  it("reads a part of zero, so the run's Model pages stay readable", () => {
    const result = readRuns(edited([...PART, "value"], 0));
    expect(result.kind).toBe("ok");
    if (result.kind !== "ok") return;
    const parts = result.data.runs[0]?.statements.debt.stack.parts ?? [];
    expect(parts[3]).toMatchObject({ name: "Receivables facility", value: 0 });
  });

  it("still refuses a negative part, and names it", () => {
    expect(readRuns(edited([...PART, "value"], -1))).toEqual({
      kind: "invalid",
      reason: `${PART_PATH}.value: expected a number of zero or more`,
    });
  });
});
