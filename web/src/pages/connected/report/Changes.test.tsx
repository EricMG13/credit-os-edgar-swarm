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
});
