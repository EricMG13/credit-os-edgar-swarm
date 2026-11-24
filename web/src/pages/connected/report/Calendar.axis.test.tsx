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
  return within(screen.getByRole("group", { name: /^Events on a time axis/ }));
}

const widthOf = (button: HTMLElement) =>
  Number.parseFloat(button.querySelector<HTMLElement>("[data-span-bar]")?.style.width ?? "");

it("draws a period-only event as a span of its recorded width and a day event as a mark", () => {
  const axis = draw();
  const day = axis.getByRole("button", { name: "Day event, 2027-06-30, day, Scheduled" });
  expect(day).toHaveAttribute("data-event-shape", "mark");
  expect(day.querySelector("[data-span-bar]")).toBeNull();
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
  expect(region.firstElementChild).toHaveClass("min-w-[720px]");
  expect(region).toHaveAttribute("tabindex", "0");
  const styled = Array.from(document.querySelectorAll<HTMLElement>("[style]"));
  expect(styled.length).toBeGreaterThan(0);
  styled.forEach((element) => {
    expect(element.getAttribute("style")).not.toMatch(/#[0-9a-f]{3,8}\b|rgb|hsl/i);
  });
  expect(document.querySelectorAll("style, script")).toHaveLength(0);
  expect(document.body.innerHTML).not.toMatch(/(?:fill|stroke|color)="#/i);
});

const ids = ["2026-01-15", "2026-06-30", "2026-10-01"];
const oneYear = [
  row(ids[0] ?? "", "day", "Notes issued", "Historical"),
  row(ids[1] ?? "", "day", "Covenant test", "Scheduled"),
  row(ids[2] ?? "", "day", "Review", "User reminder"),
];

it("labels both axis ends and ticks months when every event is in one year", () => {
  const axis = draw(undefined, oneYear);
  expect(document.querySelector("[data-axis-end='start']")).toHaveTextContent("2026-01-15");
  expect(document.querySelector("[data-axis-end='end']")).toHaveTextContent("2026-10-01");
  const ticks = Array.from(document.querySelectorAll("[data-axis-tick]")).map((tick) =>
    tick.getAttribute("data-axis-tick"),
  );
  expect(ticks.length).toBeGreaterThan(2);
  expect(ticks).toEqual(expect.arrayContaining(["2026-02", "2026-06"]));
  expect(ticks).not.toContain("2026-01");
  expect(axis.getByRole("button", { name: /Notes issued/ })).toBeInTheDocument();
  expect(screen.getByRole("group", { name: /2026-01-15 to 2026-10-01/ })).toBeInTheDocument();
});

it("ticks years once the range passes two years", () => {
  draw(undefined, rows);
  const ticks = Array.from(document.querySelectorAll("[data-axis-tick]")).map((tick) =>
    tick.getAttribute("data-axis-tick"),
  );
  expect(ticks).toEqual(["2027", "2028"]);
});

it("pads a single event so the axis renders with both ends dated", () => {
  const axis = draw(undefined, [row("2026-06-30", "day", "Lone event", "Scheduled")]);
  const lone = axis.getByRole("button", { name: /Lone event/ });
  expect(Number.parseFloat(lone.style.left)).toBeCloseTo(50, 5);
  expect(document.querySelector("[data-axis-end='start']")).toHaveTextContent("2026-05-31");
  expect(document.querySelector("[data-axis-end='end']")).toHaveTextContent("2026-07-30");
  expect(document.querySelector("[data-axis-tick]")).not.toBeNull();
});

it("draws each event's date and name beside its mark", () => {
  const axis = draw(undefined, oneYear);
  const button = axis.getByRole("button", { name: /Covenant test/ });
  expect(button).toHaveTextContent("2026-06-30");
  expect(button).toHaveTextContent("Covenant test");
});

it("gives every mark and span a hit area of 32px, 44px on a phone, and one legend", () => {
  const axis = draw();
  const button = axis.getByRole("button", { name: /Day event/ });
  expect(button).toHaveClass("h-11", "w-8", "max-[480px]:w-11");
  expect(axis.getByRole("button", { name: /Quarter event/ })).toHaveClass("h-11", "min-w-8");
  expect(screen.getAllByRole("group", { name: "Show categories" })).toHaveLength(1);
  const toggle = screen.getByRole("button", { name: "Scenario, 1 event" });
  expect(toggle).toHaveClass("min-h-8", "max-[480px]:min-h-11");
});

it("moves a label to the left of a mark at the right end so it stays inside the plot", () => {
  const axis = draw(undefined, oneYear);
  const last = axis.getByRole("button", { name: /Review/ });
  expect(last.querySelector(".right-full")).not.toBeNull();
  const first = axis.getByRole("button", { name: /Notes issued/ });
  expect(first.querySelector(".left-full")).not.toBeNull();
});

it("draws the calendar the same way with and without an as-of date", () => {
  const { unmount } = render(<Calendar calendar={buildCalendar([handoff(oneYear)], "current")} />);
  expect(screen.getByRole("table", { name: "Published events" })).toBeInTheDocument();
  expect(document.querySelector("[data-as-of-rule]")).toBeNull();
  unmount();
  render(<Calendar calendar={buildCalendar([handoff(oneYear)], "current")} asOf="2026-08-01" />);
  expect(screen.getByRole("table", { name: "Published events" })).toBeInTheDocument();
  expect(document.querySelector("[data-as-of-rule='2026-08-01']")).not.toBeNull();
  expect(screen.getByText("As of 2026-08-01")).toBeInTheDocument();
  expect(document.querySelector("[data-axis-end='start']")).toHaveTextContent("2026-01-15");
});

it("widens the axis to an as-of date outside the events", () => {
  draw("2027-03-01", oneYear);
  expect(document.querySelector("[data-axis-end='end']")).toHaveTextContent("2027-03-01");
});

it("keeps the table to six columns and stacks each row below 640px", () => {
  draw(undefined, oneYear);
  const table = screen.getByRole("table", { name: "Published events" });
  expect(
    within(table)
      .getAllByRole("columnheader")
      .map((cell) => cell.textContent),
  ).toEqual(["Event", "Date", "Status", "Credit relevance", "Module", "Evidence trace"]);
  expect(table.querySelector("tr[id]")).toHaveClass("max-[640px]:block");
  expect(table.closest("[tabindex]")).toBeNull();
  expect(within(table).getAllByText("Published", { exact: false }).length).toBeGreaterThan(0);
});

it("lays the page out as a header, the axis tile above the table tile and gaps as tiles", () => {
  draw(undefined, oneYear);
  expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(1);
  expect(screen.queryByText("Back to Overview")).toBeNull();
  expect(screen.getByRole("link", { name: "Overview" })).toHaveAttribute("href", "#overview");
  const tiles = screen.getAllByRole("region");
  const names = tiles.map((tile) => tile.getAttribute("aria-label"));
  expect(names.indexOf("Dated events")).toBeLessThan(names.indexOf("Event list"));
  expect(screen.getByRole("heading", { level: 3, name: /3 dated events/ })).toBeInTheDocument();
});
