import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Changes as PublishedChanges, PublishedRun, Snapshot } from "../publishedReport";
import { Changes } from "./Changes";

const run = { folder: "current" } as PublishedRun;
const snapshot = {} as Snapshot;

function renderChanges(change: PublishedChanges | null) {
  return render(<Changes snapshot={snapshot} run={run} entries={[]} change={change} />);
}

describe("connected report Changes", () => {
  it("compares published maturities without turning a missing earlier value into zero", () => {
    renderChanges({
      pack: {
        maturity_profile: {
          unit: "US$m",
          rows: [
            { period: "FY2026", prior: "0", current: "100" },
            { period: "FY2027", prior: null, current: "1250" },
          ],
        },
      },
    });
    const chart = screen.getByRole("figure", { name: "Debt maturity schedules" });
    fireEvent.click(within(chart).getByRole("radio", { name: "Table" }));
    const values = within(chart).getByRole("table");
    const zero = within(values).getByRole("row", { name: /FY2026/ });
    const missing = within(values).getByRole("row", { name: /FY2027/ });
    expect(within(zero).getByText("0", { exact: true })).toBeInTheDocument();
    expect(within(missing).queryByText("0", { exact: true })).toBeNull();
    expect(within(missing).getByText("1250", { exact: true })).toBeInTheDocument();
  });

  it("keeps a missing or unreadable comparison distinct from a first run", () => {
    const { rerender } = renderChanges(null);
    expect(screen.getByText("No comparison was recorded for this run.")).toBeInTheDocument();
    rerender(
      <Changes
        snapshot={snapshot}
        run={run}
        entries={[]}
        change={{
          first_run: true,
          problem: "The comparison could not be read.",
        }}
      />,
    );
    expect(screen.getByText("The comparison could not be read.")).toBeInTheDocument();
    expect(screen.queryByText("No earlier run to compare.")).toBeNull();
  });

  it("draws an h2 and skips no heading level, charts included", () => {
    const { container } = renderChanges({
      pack: {
        maturity_profile: {
          unit: "US$m",
          rows: [{ period: "FY2026", prior: "10", current: "100" }],
        },
      },
    });
    const levels = Array.from(container.querySelectorAll("h1,h2,h3,h4,h5,h6"), (node) =>
      Number(node.tagName.slice(1)),
    );
    expect(levels).toContain(2);
    levels.forEach((level, at) => {
      expect(level).toBeLessThanOrEqual((levels[at - 1] ?? 1) + 1);
    });
  });

  it("shows the compared bottom lines and the verdict's reason without a module code", () => {
    renderChanges({
      pack: {
        measures: [],
        modules: [
          {
            module: "CP-2",
            title: "Fundamental credit",
            ran_prior: true,
            ran_current: true,
            prior_bottom_line: "Credit is stable; Liquidity (CP-2D) is ample.",
            current_bottom_line: "Credit is stable; Liquidity (CP-2D) is thin.",
          },
        ],
      },
      verdicts: {
        modules: {
          "CP-2": {
            status: "Unchanged",
            cause: "Follows Liquidity (CP-2D)",
            why: "The view follows Financial foundation (CP-1), which did not change.",
          },
        },
      },
    });
    expect(screen.getByText("Credit is stable; Liquidity is ample.")).toBeInTheDocument();
    expect(screen.getByText("Credit is stable; Liquidity is thin.")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Follows Liquidity · The view follows Financial foundation, which did not change.",
      ),
    ).toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/\(CP-[A-Za-z0-9]+\)/);
  });
});
