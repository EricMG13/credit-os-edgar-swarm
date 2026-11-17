import { readFileSync } from "node:fs";
import path from "node:path";
import { readSlice } from "./read";

type Json = Record<string, unknown>;

const fixture = JSON.parse(
  readFileSync(
    path.resolve(import.meta.dirname, "..", "..", "..", "fixtures", "library.json"),
    "utf8",
  ),
) as { slice: Json };

type Run = { overview: { dates: Json[] }; traces: Json };
type Slice = { issuers: { runs: Run[] }[] };

/** A deep copy of the fixture's slice whose first run's dates a test can break. */
function fresh(): { slice: Slice; dates: Json[]; traceKey: string } {
  const slice = structuredClone(fixture.slice) as unknown as Slice;
  const run = slice.issuers[0]?.runs[0];
  if (run === undefined) throw new Error("the fixture has no first run");
  const [traceKey] = Object.keys(run.traces);
  if (traceKey === undefined) throw new Error("the first run holds no trace");
  return { slice, dates: run.overview.dates, traceKey };
}

/** The first run's four dates as `readSlice` reads them. */
function datesRead(slice: Slice) {
  const result = readSlice(slice);
  if (result.kind !== "ok")
    throw new Error(result.kind === "invalid" ? result.reason : result.kind);
  const run = result.data.issuers[0]?.runs[0];
  if (run?.loading !== false) throw new Error("the first run is loaded");
  return run.overview.dates;
}

function invalidReason(slice: Slice): string {
  const result = readSlice(slice);
  if (result.kind !== "invalid") throw new Error(`expected invalid, got ${result.kind}`);
  return result.reason;
}

describe("readSlice, the optional trace of a date to watch", () => {
  it("reads a date with no trace key as null: the fixture's four dates carry none", () => {
    const { slice, dates } = fresh();
    expect(dates.map((d) => Object.hasOwn(d, "trace"))).toEqual([false, false, false, false]);
    expect(datesRead(slice).map((d) => d.trace)).toEqual([null, null, null, null]);
  });

  it("reads an explicit null as null", () => {
    const { slice, dates } = fresh();
    (dates[1] as Json)["trace"] = null;
    expect(datesRead(slice).map((d) => d.trace)).toEqual([null, null, null, null]);
  });

  it("reads a string that is a key of the run's traces", () => {
    const { slice, dates, traceKey } = fresh();
    (dates[2] as Json)["trace"] = traceKey;
    expect(datesRead(slice).map((d) => d.trace)).toEqual([null, null, traceKey, null]);
  });

  it.each([
    ["a number", 7],
    ["a boolean", false],
    ["an object", { key: "x" }],
    ["a list", ["x"]],
  ])("refuses %s, naming the date's trace path", (_, value) => {
    const { slice, dates } = fresh();
    (dates[3] as Json)["trace"] = value;
    const reason = invalidReason(slice);
    expect(reason).toContain("issuers[0].runs[0].overview.dates[3].trace");
    expect(reason).toContain("a string or null");
  });

  it("refuses a string that is not a key of the run's traces, so a control never points at nothing", () => {
    const { slice, dates } = fresh();
    (dates[0] as Json)["trace"] = "ghost";
    expect(invalidReason(slice)).toContain("issuers[0].runs[0].overview.dates[0].trace");
  });

  it("does not read a trace from the prototype", () => {
    const { slice, dates } = fresh();
    dates[0] = Object.assign(Object.create({ trace: "ghost" }) as Json, dates[0]);
    expect(datesRead(slice)[0]?.trace).toBeNull();
  });
});
