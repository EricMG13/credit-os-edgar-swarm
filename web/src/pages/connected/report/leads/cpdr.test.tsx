import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { entry, table } from "../overview/rows.fixture";
import { ResearchLead } from "./cpdr";
import { bottomLine, EVENT_HEADERS, leadProps, tableSection } from "./lead.fixture";

afterEach(cleanup);

// The synthetic proof handoff's catalysts (proof/handoffs/CP-DR.md) plus the real section names (TDG FY2024, outdated).
function research(withAll: boolean) {
  const made = entry(
    "CP-DR",
    [],
    withAll
      ? [
          tableSection(
            "Executive answer",
            table(5, ["Question", "Answer", "Source"], [["Competition", "Answered", "Filing"]]),
          ),
          {
            heading: "Causal synthesis and scenarios",
            level: 3,
            line: 20,
            blocks: [
              {
                type: "text" as const,
                line: 21,
                end: 21,
                text: "A traffic shock would lift leverage.",
              },
            ],
          },
          tableSection(
            "Events: Research catalysts",
            table(30, EVENT_HEADERS, [
              [
                "2025-06",
                "month",
                "2025-05-01",
                "Synthetic call",
                "Historical — noted",
                "Memo",
                "Cost",
              ],
              [
                "2025-03-31",
                "day",
                "2024-11-07",
                "Synthetic note",
                "Scheduled — matures",
                "Filing",
                "Wall",
              ],
            ]),
          ),
        ]
      : [],
  );
  if (withAll) made.output.events = [{ lane: "Research catalysts", table: 30, gap: null }];
  return made;
}

it("states why the question list is a gap, points to the executive answer and never invents coverage", () => {
  render(<ResearchLead {...leadProps(research(true))} />);
  const tile = screen.getByRole("region", { name: "Research questions and answers" });
  // Review 4, Q8: the reader's words, never "passage"; Q5: one compact full row.
  expect(tile.className).toMatch(/lg:col-span-12/);
  expect(
    within(tile).getByText("This page could not read the research questions and their answers."),
  ).toBeVisible();
  expect(within(tile).getByText("The answers are under Executive answer below.")).toBeVisible();
  expect(tile.textContent).not.toMatch(/passage|register|table/);
  // Ruling vii: no note on where the method puts coverage.
  expect(tile.textContent).not.toMatch(/no fixed place|methodology/);
  expect(within(tile).queryByText("Answered")).toBeNull();
  expect(within(tile).queryByText("0")).toBeNull();
});

it("draws the causal scenarios as written and the catalysts earliest first", () => {
  render(<ResearchLead {...leadProps(research(true))} />);
  expect(
    within(screen.getByRole("region", { name: "Causal scenarios" })).getByText(
      "A traffic shock would lift leverage.",
    ),
  ).toBeVisible();
  // Review 4, Q5: the catalysts sit beside the scenarios, not on a row of their own.
  const scenarios = screen.getByRole("region", { name: "Causal scenarios" });
  expect(scenarios.className).toMatch(/lg:col-span-8/);
  const catalysts = screen.getByRole("region", { name: "Research catalysts" });
  expect(catalysts.className).toMatch(/lg:col-span-4/);
  expect(scenarios.nextElementSibling).toBe(catalysts);
  const items = within(screen.getByRole("list", { name: "Research catalysts" })).getAllByRole(
    "listitem",
  );
  expect(items[0]).toHaveTextContent("2025-03-31");
  expect(items[1]).toHaveTextContent("2025-06");
  expect(within(items[0] as HTMLElement).getByRole("link", { name: /Source for/ })).toHaveAttribute(
    "href",
    expect.stringContaining("#evidence/"),
  );
});

it("says what is missing when the handoff has no scenarios, catalysts or executive answer", () => {
  render(<ResearchLead {...leadProps(research(false))} />);
  expect(screen.getByText("This page could not read causal scenarios.")).toBeVisible();
  const catalysts = screen.getByRole("region", { name: "Research catalysts" });
  expect(
    within(catalysts).getByText("This page could not read dated research catalysts."),
  ).toBeVisible();
  expect(screen.queryByText(/Executive answer/)).toBeNull();
});

it("draws nothing for a blocked module", () => {
  const { container } = render(
    <ResearchLead
      {...leadProps(
        entry("CP-DR", [], bottomLine("Not assessable: no research brief was approved.")),
      )}
    />,
  );
  expect(container).toBeEmptyDOMElement();
});
