import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { PublishedChanges } from "../../publishedReport";
import { Dumbbell } from "./Dumbbell";
import { maturityColumns, usableProfile } from "./MaturityPair";
import { ModuleMatrix } from "./ModuleMatrix";

describe("Dumbbell", () => {
  it("places the dots on a zero-based axis so the length is the size of the move", () => {
    const { container } = render(<Dumbbell before={2} after={4} tone="worse" />);
    const dots = [...container.querySelectorAll<HTMLElement>("span.size-3")];
    const left = dots.map((dot) => Number.parseFloat(dot.style.left));
    expect(left[0]).toBeLessThan(left[1] ?? 0);
    expect(left[1]).toBeCloseTo(92, 5);
    expect(left[0]).toBeCloseTo(50, 5);
  });

  it("draws a zero line when a figure is negative", () => {
    const { container } = render(<Dumbbell before={-1} after={3} tone={null} />);
    expect(container.querySelector("span.w-px")).not.toBeNull();
  });
});

describe("maturityColumns", () => {
  const rows = [
    { period: "FY2026", prior: "10", current: "5" },
    { period: "FY2029", prior: null, current: "7" },
    { period: "Thereafter", prior: "3", current: "3" },
  ];
  it("spaces year periods truly, leaves unstated years empty and puts the rest after a break", () => {
    const { columns, after } = maturityColumns(rows);
    expect(columns.map((c) => [c.label, c.row === null])).toEqual([
      ["FY2026", false],
      ["2027", true],
      ["2028", true],
      ["FY2029", false],
    ]);
    expect(after.map((c) => c.label)).toEqual(["Thereafter"]);
  });

  it("keeps the listed order when the periods are not distinct years", () => {
    const { columns, after } = maturityColumns([
      { period: "Year 1", prior: "1", current: "2" },
      { period: "Year 2", prior: "1", current: "2" },
    ]);
    expect(columns.map((c) => c.label)).toEqual(["Year 1", "Year 2"]);
    expect(after).toEqual([]);
  });

  it("is unusable without a unit, distinct periods or any stated figure", () => {
    expect(usableProfile({ unit: "US$m", rows })).toBe(true);
    expect(usableProfile({ unit: "", rows })).toBe(false);
    expect(
      usableProfile({ unit: "US$m", rows: [{ period: "FY2026", prior: null, current: null }] }),
    ).toBe(false);
    expect(usableProfile({ unit: "US$m", rows: [rows[0]!, rows[0]!] })).toBe(false);
  });
});

describe("ModuleMatrix", () => {
  const change: PublishedChanges = {
    pack: {
      modules: [
        ["CP-1", "Financial foundation"],
        ["CP-2", "Fundamental credit"],
        ["CP-3", "Security selection"],
        ["CP-4", "Legal and covenants"],
        ["CP-5", "Evidence validation"],
      ].map(([module, title]) => ({
        module: module ?? "",
        title: title ?? "",
        ran_prior: true,
        ran_current: true,
        prior_bottom_line: "Before.",
        current_bottom_line: "Now.",
      })),
    },
    verdicts: {
      modules: {
        "CP-1": { status: "Unchanged", cause: "None", why: "" },
        "CP-2": { status: "Weakened", cause: "New period", why: "" },
        "CP-3": { status: "New", cause: "New source", why: "" },
        "CP-4": { status: "Not run this time", cause: "Unresolved", why: "" },
      },
    },
  };

  it("marks one column per module, keeps the exact status word and marks nothing for an unstated status", () => {
    render(<ModuleMatrix change={change} source={() => undefined} />);
    const table = screen.getByRole("table", { name: "Module conclusions against the earlier run" });
    const mark = (name: string) => {
      const row = within(table).getByRole("row", { name: new RegExp(name) });
      return [...row.querySelectorAll("td .sr-only")].map((node) => node.textContent);
    };
    expect(mark("Financial foundation")).toEqual(["Unchanged"]);
    expect(mark("Fundamental credit")).toEqual(["Revised"]);
    expect(mark("Security selection")).toEqual(["New"]);
    expect(mark("Legal and covenants")).toEqual(["Missing"]);
    expect(mark("Evidence validation")).toEqual([]);
    expect(within(table).getByText("Weakened")).toBeVisible();
    expect(within(table).getByText("Explanation not stated")).toBeVisible();
  });
});
