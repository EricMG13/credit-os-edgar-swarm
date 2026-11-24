import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import type { OutputEntry } from "../publishedReport";
import { EVENT_HEADERS } from "../visuals/EventLane";
import { buildCalendar, Calendar } from "./Calendar";

function handoff(rows: string[][]): OutputEntry {
  return {
    selected: true,
    output: {
      module: "CP-2D",
      id: "CP-2D-1",
      label: "CP-2D",
      href: "",
      sha256: "2".repeat(64),
      events: [{ table: 20, lane: "Financing" }],
    },
    sections: [
      {
        heading: "Events: Financing",
        line: 19,
        level: 3,
        blocks: [
          {
            type: "table",
            line: 20,
            headers: EVENT_HEADERS,
            rows: rows.map((cells, index) => ({ line: 22 + index, cells })),
          },
        ],
      },
    ],
  };
}

const row = (date: string, precision: string, name: string, status: string) => [
  date,
  precision,
  "2026-09-30",
  name,
  status,
  "file",
  "Wall",
];

const rows = [
  row("2027-06-30", "day", "Day event", "Scheduled"),
  row("2027-Q2", "quarter", "Quarter event", "Scheduled"),
  row("2026-11", "month", "Month event", "Scenario — Conditional"),
  row("2028", "year", "Year event", "Historical"),
  row("2026-12-01", "day", "Reminder", "User reminder"),
];

function draw(asOf?: string | null, data = rows) {
  render(<Calendar calendar={buildCalendar([handoff(data)], "current")} asOf={asOf} />);
  return within(screen.getByRole("group", { name: "Events on a time axis" }));
}

const widthOf = (button: HTMLElement) => Number.parseFloat(button.style.width);

it("draws a period-only event as a span of its recorded width and a day event as a mark", () => {
  const axis = draw();
  const day = axis.getByRole("button", { name: "Day event, 2027-06-30, day, Scheduled" });
  expect(day).toHaveAttribute("data-event-shape", "mark");
  expect(day.style.width).toBe("");
  const spans = [
    axis.getByRole("button", { name: "Quarter event, 2027-Q2, quarter, Scheduled" }),
    axis.getByRole("button", { name: "Month event, 2026-11, month, Scenario — Conditional" }),
    axis.getByRole("button", { name: "Year event, 2028, year, Historical" }),
  ];
  spans.forEach((span) => {
    expect(span).toHaveAttribute("data-event-shape", "span");
    expect(widthOf(span)).toBeGreaterThan(0);
  });
  const [quarter, month, year] = spans.map(widthOf);
  expect(year).toBeGreaterThan(quarter ?? 0);
  expect(quarter).toBeGreaterThan(month ?? 0);
});

it("positions events in proportion to their dates", () => {
  const axis = draw();
  const left = (name: RegExp) => Number.parseFloat(axis.getByRole("button", { name }).style.left);
  const first = left(/Month event/);
  const reminder = left(/Reminder/);
  const day = left(/Day event/);
  expect(first).toBe(0);
  expect(reminder).toBeGreaterThan(first);
  expect(day).toBeGreaterThan(reminder);
  const dayMs = 86_400_000;
  const range = Date.UTC(2028, 11, 31) + dayMs - Date.UTC(2026, 10, 1);
  expect(day).toBeCloseTo(((Date.UTC(2027, 5, 30) - Date.UTC(2026, 10, 1)) / range) * 100, 5);
});

it("draws the as-of rule only for a valid date", () => {
  draw("2027-01-15");
  expect(screen.getByText("As of 2027-01-15")).toBeInTheDocument();
  expect(document.querySelector("[data-as-of-rule='2027-01-15']")).not.toBeNull();
});

it.each([undefined, null, "2027-02-30", "15/01/2027", "2027-1-5"])(
  "draws no as-of rule for %s",
  (asOf) => {
    draw(asOf);
    expect(screen.queryByText(/^As of /)).toBeNull();
    expect(document.querySelector("[data-as-of-rule]")).toBeNull();
  },
);

it("orders the lanes Historical, Scheduled, Scenario, User reminder", () => {
  draw();
  const lanes = screen
    .getAllByRole("group")
    .map((group) => group.getAttribute("aria-label") ?? "")
    .filter((name) => name.endsWith(" lane"));
  expect(lanes).toEqual([
    "Historical lane",
    "Scheduled lane",
    "Scenario lane",
    "User reminder lane",
  ]);
});

it("lists the table behind the axis in date order with a trace per row", () => {
  draw();
  const table = within(screen.getByRole("table", { name: "Published events" }));
  const names = table.getAllByRole("rowheader").map((cell) => cell.textContent);
  expect(names).toEqual(["Month event", "Reminder", "Quarter event", "Day event", "Year event"]);
  expect(table.getAllByRole("link", { name: /^Source for / })).toHaveLength(5);
  expect(table.getByRole("columnheader", { name: "Evidence trace" })).toBeInTheDocument();
});

it("stacks overlapping marks of one lane into separate sub-rows", () => {
  const axis = draw(null, [
    row("2027-06-30", "day", "First", "Scheduled"),
    row("2027-06-30", "day", "Second", "Scheduled"),
    row("2028-06-30", "day", "Far", "Scheduled"),
  ]);
  const top = (name: RegExp) => axis.getByRole("button", { name }).style.top;
  expect(top(/First/)).not.toBe(top(/Second/));
  expect(top(/Far/)).toBe(top(/First/));
});

it("focuses the matching table row when a mark is clicked", () => {
  const axis = draw();
  fireEvent.click(axis.getByRole("button", { name: /Day event/ }));
  const table = within(screen.getByRole("table", { name: "Published events" }));
  const target = table.getByRole("rowheader", { name: "Day event" }).closest("tr");
  expect(document.activeElement).toBe(target);
});

it("hides a lane when its legend entry is turned off", () => {
  draw();
  fireEvent.click(screen.getByRole("button", { name: "Scenario, 1 event" }));
  expect(screen.queryByRole("group", { name: "Scenario lane" })).toBeNull();
  expect(screen.queryByRole("button", { name: /Month event, 2026-11/ })).toBeNull();
  expect(screen.getByRole("button", { name: "Scenario, 1 event" })).toHaveAttribute(
    "aria-pressed",
    "false",
  );
});

it("scrolls the axis in its own region and carries no hex colour or inline script", () => {
  draw("2027-01-15");
  const region = screen.getByTestId("event-axis");
  expect(region).toHaveClass("overflow-x-auto");
  expect(region.firstElementChild).toHaveClass("min-w-[640px]");
  const styled = Array.from(document.querySelectorAll<HTMLElement>("[style]"));
  expect(styled.length).toBeGreaterThan(0);
  styled.forEach((element) => {
    expect(element.getAttribute("style")).not.toMatch(/#[0-9a-f]{3,8}\b|rgb|hsl/i);
  });
  expect(document.querySelectorAll("style, script")).toHaveLength(0);
  expect(document.body.innerHTML).not.toMatch(/(?:fill|stroke|color)="#/i);
});
