import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { moduleReadiness } from "./moduleReadiness";
import { ReadinessRail, type ReadinessSource } from "./ReadinessRail";

afterEach(cleanup);

const ROWS = [
  { label: "Documents inspected", met: true },
  { label: "Purpose chosen", met: true },
  { label: "Decisions made", met: false, detail: "0 of 2" },
  { label: "Summary approved", met: false },
];
const CAP = { value: 0, max: 25, label: "USD 0.00 of USD 25.00" };

function rail(
  modules = moduleReadiness(["CP-0", "CP-1", "CP-MODEL", "CP-4", "CP-6"]),
  source: ReadinessSource = "unchecked",
  cap: typeof CAP | null = CAP,
) {
  render(
    <ReadinessRail
      rows={ROWS}
      cap={cap}
      capTitle="Spending cap for this run"
      pathway="Full credit assessment"
      modules={modules}
      source={source}
    />,
  );
  return screen.getByRole("complementary", { name: "Readiness" });
}

describe("the readiness rail", () => {
  it("states the cap in one line of mono and names the meter by it", () => {
    const aside = rail();
    const line = within(aside).getByText("USD 0.00 of USD 25.00", { exact: true });
    expect(line).toHaveClass("tabular-nums");
    expect(line.parentElement?.parentElement?.className).toContain("[&_span]:font-mono");
    expect(
      within(aside).getByRole("progressbar", { name: "USD 0.00 of USD 25.00" }),
    ).toHaveAttribute("aria-valuenow", "0");
    expect(within(aside).getByText("Spending cap for this run")).toBeInTheDocument();
  });

  it("says the cap is unavailable when the service sent none", () => {
    const aside = rail(undefined, "unchecked", null);
    expect(within(aside).getByText("Unavailable")).toBeInTheDocument();
    expect(within(aside).queryByRole("progressbar")).toBeNull();
  });

  it("lists what Submit still needs as four status rows", () => {
    const aside = rail();
    const needs = within(aside).getByRole("list", { name: "Before Submit" });
    const items = within(needs).getAllByRole("listitem");
    expect(items.map((item) => item.textContent)).toEqual([
      "MetDocuments inspected",
      "MetPurpose chosen",
      "Not metDecisions made0 of 2",
      "Not metSummary approved",
    ]);
  });

  it("before a review lists the planned modules by stage, by name, and says when they are checked", () => {
    const aside = rail();
    const modules = within(aside).getByRole("list", { name: "Modules" });
    expect(
      within(modules)
        .getAllByRole("list")
        .map((list) => list.getAttribute("aria-label")),
    ).toEqual(["Sources", "Financials", "Structure and market", "Validation and decision"]);
    expect(modules).toHaveTextContent("01Sources");
    expect(modules).toHaveTextContent("05Validation and decision");
    expect(within(modules).getByText("Legal & covenants")).toBeInTheDocument();
    expect(aside).toHaveTextContent("4 modules · Full credit assessment");
    expect(aside).toHaveTextContent(
      "Each module is checked against your documents when you review the run.",
    );
    // No module code, no forecast, and no state before the service has judged one.
    expect(aside).not.toHaveTextContent(/CP-|Cash flow model/);
    expect(within(modules).queryByText(/^(Ready|Conditional|Not assessable)$/)).toBeNull();
  });

  it("after a review draws ready, conditional and blocked with the service's reasons", () => {
    const aside = rail(
      moduleReadiness([], {
        modules: ["CP-0", "CP-1", "CP-4", "CP-6"],
        items: [
          {
            id: "run:claims",
            scope: "run",
            outcome: "check",
            reason: "Financials are management claims, not filed statements.",
          },
          {
            id: "CP-1:report",
            scope: "CP-1",
            outcome: "gap",
            reason: "No file is recognised as a financial report.",
          },
          {
            id: "CP-4:agreement",
            scope: "CP-4",
            outcome: "will_refuse",
            reason: "No executed agreement is among the files.",
          },
        ],
      }),
      "review",
    );
    const row = (name: string) => within(aside).getByText(name).closest("li") as HTMLElement;
    expect(row("Source readiness")).toHaveTextContent("Ready");
    expect(row("Financial foundation")).toHaveTextContent(
      "ConditionalNo file is recognised as a financial report.",
    );
    const blocked = row("Legal & covenants");
    expect(blocked).toHaveTextContent("Not assessableNo executed agreement is among the files.");
    expect(blocked).toHaveClass("border-dashed", "border-warning-mark");
    expect(row("Committee decision")).toHaveTextContent("Ready");
    const whole = within(aside).getByRole("list", { name: "Limits on the whole run" });
    expect(whole).toHaveTextContent(
      "Whole runConditionalFinancials are management claims, not filed statements.",
    );
    expect(aside).toHaveTextContent("As the service checked them for this review.");
  });

  it("marks states kept from the last review as such", () => {
    const aside = rail(moduleReadiness([], { modules: ["CP-0"], items: [] }), "last");
    expect(aside).toHaveTextContent(
      "From your last review. Review the run again to check changes.",
    );
    expect(aside).toHaveTextContent("1 module · Full credit assessment");
  });
});
