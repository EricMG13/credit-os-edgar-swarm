import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import type { OutputEntry } from "../publishedReport";
import { EVENT_HEADERS } from "../visuals/EventLane";
import { buildCalendar, Calendar } from "./Calendar";

function entry(module: string, cells: string[], selected = true): OutputEntry {
  return {
    selected,
    output: {
      module,
      id: module,
      label: module,
      href: "",
      sha256: module,
      events: [{ table: 20, lane: "Dated events" }],
    },
    sections: [
      {
        heading: "Events: Dated events",
        line: 19,
        level: 3,
        blocks: [{ type: "table", line: 20, headers: EVENT_HEADERS, rows: [{ line: 22, cells }] }],
      },
    ],
  };
}

it("keeps same-date contributions distinct with their original row traces and separate date precision", () => {
  const event = [
    "2027-Q2",
    "quarter",
    "2026-09-30",
    "Notes due",
    "Scheduled — Contract",
    "agreement.pdf",
    "Refinancing",
  ];
  const first = entry("CP-2D", event);
  first.output.events?.push({ table: 20, lane: "Same published table" });
  const second = entry("CP-3C", event);
  const scenario = entry("CP-4", [
    "2027-04-15",
    "day",
    "Not supplied: publication date was absent",
    "Consent outcome",
    "Scenario — Conditional",
    "approval.pdf",
    "Possible waiver noted in approval.pdf",
  ]);
  const alternative = entry(
    "CP-3C",
    [...event.slice(0, 3), "Earlier revision", ...event.slice(4)],
    false,
  );
  render(
    <Calendar calendar={buildCalendar([first, alternative, second, scenario], "retained case")} />,
  );
  const figure = within(screen.getByRole("figure", { name: "Published events" }));
  const scheduled = within(figure.getByRole("region", { name: "Scheduled" }));
  expect(scheduled.getAllByRole("img", { name: /Notes due, 2027-Q2, quarter/ })).toHaveLength(2);
  expect(
    within(figure.getByRole("region", { name: "Scenario" })).getByRole("img"),
  ).toHaveAccessibleName(/Consent outcome, 2027-04-15, day/);
  expect(scheduled.getByRole("link", { name: "Source for Notes due · Liquidity" })).toHaveAttribute(
    "href",
    "/report/retained%20case#evidence/0-22",
  );
  expect(
    scheduled.getByRole("link", { name: "Source for Notes due · Refinancing & LME" }),
  ).toHaveAttribute("href", "/report/retained%20case#evidence/2-22");
  expect(figure.queryByText(/approval\.pdf|agreement\.pdf|Earlier revision/)).toBeNull();
  fireEvent.click(figure.getByRole("radio", { name: "Table" }));
  expect(figure.getAllByRole("cell", { name: "2026-09-30" })).toHaveLength(2);
  expect(
    figure.getByRole("cell", { name: "Not supplied: publication date was absent" }),
  ).toBeInTheDocument();
  expect(
    figure.getByRole("link", { name: "Source for Notes due · Refinancing & LME" }),
  ).toHaveAttribute("href", "/report/retained%20case#evidence/2-22");
});

it("keeps recorded gaps as reasons and leaves a mismatched precision unplotted", () => {
  const gap = entry(
    "CP-6",
    EVENT_HEADERS.map(() => "Not supplied: no review date"),
  );
  gap.output.events = [
    { table: 20, lane: "Decision and watch", gap: "No review date was assigned." },
  ];
  const invalid = entry("CP-0", [
    "2027-02-29",
    "day",
    "2026-09-30",
    "Invalid date",
    "Historical — Published",
    "file.pdf",
    "Period",
  ]);
  render(<Calendar calendar={buildCalendar([gap, invalid], "current")} />);
  expect(screen.getByText("No review date was assigned.")).toBeInTheDocument();
  expect(screen.getByText(/recorded dates or precision could not be plotted/)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Source for Decision and watch" })).toHaveAttribute(
    "href",
    "/report/current#evidence/0-20",
  );
  expect(screen.queryByRole("figure")).toBeNull();
});
