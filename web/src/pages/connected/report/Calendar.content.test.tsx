import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
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

const row = (date: string, precision: string, name: string, status = "Scheduled") => [
  date,
  precision,
  "2026-09-30",
  name,
  status,
  "file",
  "Wall",
];

/** A browser window of this width: the axis switches at 720px, the table disclosure at 641px. */
function mockViewport(width: number) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn((query: string) => {
      const limit = Number(/(\d+)px/.exec(query)?.[1]);
      return {
        matches: query.includes("max-width") ? width <= limit : width >= limit,
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      };
    }),
  );
}

beforeEach(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      disconnect() {}
    },
  );
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

function draw(data: string[][]) {
  render(<Calendar calendar={buildCalendar([handoff(data)], "current")} />);
}

const ends = () => ({
  start: document.querySelector("[data-axis-end='start']")?.textContent,
  end: document.querySelector("[data-axis-end='end']")?.textContent,
});
const reading = () => screen.getByRole("heading", { level: 3, name: /dated event/ }).textContent;
const groupName = () =>
  screen.getByRole("group", { name: /^Events on a time axis/ }).getAttribute("aria-label");

const mixed = [
  row("2025", "year", "Plan year"),
  row("2025-Q3", "quarter", "Refinancing window"),
  row("2025-08", "month", "Rating review"),
  row("2025-08-14", "day", "Covenant test"),
];

// C7
it("C7: the phone list heads a month, a quarter and a year by the period each states", () => {
  mockViewport(390);
  draw(mixed);
  const list = screen.getByRole("list", { name: "Events in date order" });
  expect(
    within(list)
      .getAllByRole("heading", { level: 4 })
      .map((h) => h.textContent),
  ).toEqual(["2025", "2025 Q3", "Aug 2025"]);
});

it("C7: the phone list never heads a month no event states", () => {
  mockViewport(390);
  draw([row("2025", "year", "Plan year"), row("2026-Q2", "quarter", "Spring window")]);
  const list = screen.getByRole("list", { name: "Events in date order" });
  expect(
    within(list)
      .getAllByRole("heading", { level: 4 })
      .map((h) => h.textContent),
  ).toEqual(["2025", "2026 Q2"]);
});

it("C7: a month event and a day event in one month share one month heading", () => {
  mockViewport(390);
  draw([
    row("2025-08-14", "day", "Covenant test"),
    row("2025-08", "month", "Rating review"),
    row("2025-Q3", "quarter", "Refinancing window"),
  ]);
  const list = screen.getByRole("list", { name: "Events in date order" });
  expect(
    within(list)
      .getAllByRole("heading", { level: 4 })
      .map((h) => h.textContent),
  ).toEqual(["2025 Q3", "Aug 2025"]);
});

// C8
it("C8: a year-only first event prints its own text, not a computed 2025-01-01", () => {
  mockViewport(1440);
  draw([row("2025", "year", "Plan year"), row("2026-Q3", "quarter", "Window")]);
  expect(ends()).toEqual({ start: "2025", end: "2026-Q3" });
  expect(reading()).toBe("2 dated events, 2025 to 2026-Q3");
  expect(groupName()).toBe("Events on a time axis: 2 events, 2025 to 2026-Q3");
  expect(document.body.textContent).not.toContain("2025-01-01");
  expect(document.body.textContent).not.toContain("2026-09-30 to");
});

it("C8: a single event prints no axis range and none of its padding", () => {
  mockViewport(1440);
  draw([row("2026-06-30", "day", "Lone event")]);
  expect(document.querySelector("[data-axis-end]")).toBeNull();
  expect(reading()).toBe("1 dated event");
  expect(groupName()).toBe("Events on a time axis: 1 event");
  expect(document.body.textContent).not.toContain("2026-05-31");
  expect(document.body.textContent).not.toContain("2026-07-30");
});

it("C8: a year-only last event is printed as 2026, never 2026-12-31", () => {
  mockViewport(1440);
  draw([row("2025-03-01", "day", "Notes issued"), row("2026", "year", "Plan year")]);
  expect(ends()).toEqual({ start: "2025-03-01", end: "2026" });
  expect(reading()).toBe("2 dated events, 2025-03-01 to 2026");
});

it("C8: the quarter that reaches furthest ends the range, though a day event starts later", () => {
  mockViewport(1440);
  draw([
    row("2026-02-10", "day", "Start"),
    row("2026-Q3", "quarter", "Window"),
    row("2026-08-01", "day", "Inside the window"),
  ]);
  expect(ends()).toEqual({ start: "2026-02-10", end: "2026-Q3" });
});

it("C8: the phone axis prints the same recorded words", () => {
  mockViewport(390);
  draw([row("2025", "year", "Plan year"), row("2026-Q3", "quarter", "Window")]);
  expect(ends()).toEqual({ start: "2025", end: "2026-Q3" });
});

// C12
const LONG = [
  "Springing leverage covenant test date",
  "Revolving credit facility commitment termination",
  "Senior notes maturity and mandatory redemption",
];
const dense = [
  row("2026-01-05", "day", LONG[0] ?? ""),
  row("2026-01-07", "day", LONG[1] ?? ""),
  row("2026-01-09", "day", LONG[2] ?? ""),
  row("2026-01-11", "day", "Rating action"),
  row("2026-01-13", "day", "AGM"),
  row("2026-12-31", "day", "Year end"),
];

it("C12: a label cut on the wide axis is whole in the open table beneath", () => {
  mockViewport(1440);
  vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(1200);
  draw(dense);
  const table = screen.getByRole("table", { name: "Published events" });
  expect(table.closest("details")).toHaveAttribute("open");
  const axis = within(screen.getByRole("group", { name: /^Events on a time axis/ }));
  for (const name of LONG) {
    const cut = axis
      .getByRole("button", { name: new RegExp(`^${name},`) })
      .querySelector("[data-event-label] .truncate");
    expect(cut).not.toBeNull();
    expect(within(table).getByRole("rowheader", { name })).toBeInTheDocument();
  }
});

it("C12: on the phone every list row carries the full event name, uncut", () => {
  mockViewport(390);
  draw(dense);
  expect(
    screen.getByRole("table", { name: "Published events" }).closest("details"),
  ).not.toHaveAttribute("open");
  const list = screen.getByRole("list", { name: "Events in date order" });
  const names = within(list)
    .getAllByRole("button")
    .map((button) => button.querySelector(".text-small")?.textContent);
  expect(names).toEqual([...LONG, "Rating action", "AGM", "Year end"]);
  expect(list.querySelector(".truncate")).toBeNull();
  expect(list.textContent).not.toContain("…");
});
