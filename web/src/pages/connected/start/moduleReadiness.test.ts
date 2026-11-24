import { describe, expect, it } from "vitest";
import type { ReadinessItem } from "../api";
import { moduleReadiness } from "./moduleReadiness";

const item = (
  scope: string,
  outcome: string,
  reason: string,
  inherited_from: string[] = [],
): ReadinessItem => ({ id: `${scope}:${reason}`, scope, outcome, reason, inherited_from });

describe("moduleReadiness", () => {
  it("before a review lists the planned modules by stage, unchecked, without the forecast", () => {
    const shown = moduleReadiness([
      "CP-0",
      "CP-1",
      "CP-MODEL",
      "CP-1A",
      "CP-2",
      "CP-4",
      "CP-3",
      "CP-5",
      "CP-6",
    ]);
    expect(shown.count).toBe(8);
    expect(shown.run).toBeUndefined();
    expect(shown.groups).toEqual([
      {
        number: "01",
        name: "Sources",
        rows: [{ id: "CP-0", name: "Source readiness", state: "unchecked", reasons: [] }],
      },
      {
        number: "02",
        name: "Financials",
        rows: [{ id: "CP-1", name: "Financial foundation", state: "unchecked", reasons: [] }],
      },
      {
        number: "03",
        name: "Credit",
        rows: [
          { id: "CP-1A", name: "Business & governance", state: "unchecked", reasons: [] },
          { id: "CP-2", name: "Fundamental credit", state: "unchecked", reasons: [] },
        ],
      },
      {
        number: "04",
        name: "Structure and market",
        rows: [
          { id: "CP-4", name: "Legal & covenants", state: "unchecked", reasons: [] },
          { id: "CP-3", name: "Security selection", state: "unchecked", reasons: [] },
        ],
      },
      {
        number: "05",
        name: "Validation and decision",
        rows: [
          { id: "CP-5", name: "Evidence validation", state: "unchecked", reasons: [] },
          { id: "CP-6", name: "Committee decision", state: "unchecked", reasons: [] },
        ],
      },
    ]);
  });

  it("after a review takes the modules and states from the summary alone", () => {
    const shown = moduleReadiness(["CP-0", "CP-1", "CP-4"], {
      modules: ["CP-0", "CP-1", "CP-MODEL", "CP-3", "CP-4", "CP-4C", "CP-8"],
      items: [
        item("CP-1", "check", "No file is recognised as a financial report."),
        item("CP-3", "gap", "No quotes and no price talk were entered."),
        item("CP-4", "will_refuse", "No executed agreement is among the files."),
        item("CP-4", "limited", "The agreement has no schedules."),
        item("CP-4C", "will_refuse", "Expected to refuse because it reads CP-4.", ["CP-4"]),
        item("CP-0", "information", "This is the first run of this pathway."),
        item("CP-0", "ready", "Every file was read."),
      ],
    });
    const rows = Object.fromEntries(
      shown.groups.flatMap((group) => group.rows).map((row) => [row.id, row]),
    );
    expect(shown.count).toBe(6);
    expect(Object.keys(rows)).toEqual(["CP-0", "CP-1", "CP-3", "CP-4", "CP-4C", "CP-8"]);
    // Ready only where the service says so; a module it says nothing about is not called ready.
    expect(rows["CP-0"]).toMatchObject({ state: "ready", reasons: [] });
    expect(rows["CP-8"]).toMatchObject({ state: "unstated", reasons: [] });
    expect(rows["CP-1"]).toMatchObject({
      state: "conditional",
      reasons: ["No file is recognised as a financial report."],
    });
    expect(rows["CP-3"]).toMatchObject({ state: "conditional" });
    expect(rows["CP-4"]).toMatchObject({
      state: "blocked",
      reasons: ["No executed agreement is among the files.", "The agreement has no schedules."],
    });
    // A module code in the service's sentence is drawn by its name.
    expect(rows["CP-4C"]).toMatchObject({
      name: "Recovery & fulcrum",
      state: "blocked",
      reasons: ["Expected to refuse because it reads Legal & covenants."],
    });
    // A module the service adds (the comparison with an earlier run) is drawn in its stage.
    expect(shown.groups.at(-1)).toMatchObject({
      number: "05",
      name: "Validation and decision",
      rows: [{ id: "CP-8", name: "Changes since the last run", state: "unstated" }],
    });
  });

  it("never calls a module ready because the whole run, not the module, carries the limit", () => {
    const shown = moduleReadiness(["CP-0", "CP-1"], {
      modules: ["CP-0", "CP-1"],
      items: [item("run", "will_refuse", "No document could be read.")],
    });
    expect(shown.run).toMatchObject({ state: "blocked" });
    expect(shown.groups.flatMap((group) => group.rows.map((row) => row.state))).toEqual([
      "unstated",
      "unstated",
    ]);
  });

  it("draws limits on the whole run as their own row, and only limits", () => {
    const shown = moduleReadiness(["CP-0"], {
      modules: ["CP-0"],
      items: [
        item("run", "check", "Financials are management claims, not filed statements."),
        item("run", "information", "Lookups are off for a synthetic case."),
      ],
    });
    expect(shown.run).toEqual({
      id: "run",
      name: "Whole run",
      state: "conditional",
      reasons: ["Financials are management claims, not filed statements."],
    });
    expect(moduleReadiness(["CP-0"], { modules: ["CP-0"], items: [] }).run).toBeUndefined();
  });

  it("puts a module no stage names under Other, unnumbered, last", () => {
    const shown = moduleReadiness(["CP-0", "CP-9Z"]);
    expect(shown.groups.map((group) => [group.number, group.name])).toEqual([
      ["01", "Sources"],
      [undefined, "Other"],
    ]);
    expect(shown.groups[1]?.rows[0]?.name).toBe("CP-9Z");
  });
});
