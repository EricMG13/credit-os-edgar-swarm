import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { PublishedChanges } from "../../publishedReport";
import { Dumbbell } from "./Dumbbell";
import { MaturityPair, usableProfile } from "./MaturityPair";
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

describe("MaturityPair", () => {
  const rows = [
    { period: "FY2026", prior: "10", current: "5" },
    { period: "FY2029", prior: null, current: "7" },
    { period: "Thereafter", prior: "3", current: "3" },
  ];
  it("spaces year periods truly, leaves unstated years empty and puts the rest after a break", () => {
    render(<MaturityPair profile={{ unit: "US$m", rows }} />);
    const walls = within(screen.getByRole("region", { name: "Maturity walls" }));
    const labels = walls
      .getAllByText(/^(FY2026|2027|2028|FY2029|Thereafter)$/)
      .map((n) => n.textContent);
    expect(labels).toEqual(["FY2026", "2027", "2028", "FY2029", "Thereafter"]);
    expect(walls.getByText("//")).toBeInTheDocument();
    expect(walls.getByTitle("Earlier run: not stated")).toBeInTheDocument();
  });

  it("is unusable without a unit, distinct periods or any stated figure", () => {
    expect(usableProfile({ unit: "US$m", rows })).toBe(true);
    expect(usableProfile({ unit: "", rows })).toBe(false);
    expect(
      usableProfile({ unit: "US$m", rows: [{ period: "FY2026", prior: null, current: null }] }),
    ).toBe(false);
    expect(usableProfile({ unit: "US$m", rows: [...rows.slice(0, 1), ...rows.slice(0, 1)] })).toBe(
      false,
    );
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
