import { render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import type { OutputEntry } from "../publishedReport";
import { EVENT_HEADERS } from "../visuals/EventLane";
import { buildCalendar, Calendar } from "./Calendar";

const HASH = "2".repeat(64);
const evidence = (line: number) => `/report/current#evidence/CP-2D-1~${HASH}-${String(line)}`;

function handoff(rows: { line: number; cells: string[] }[], gap?: string): OutputEntry {
  return {
    selected: true,
    output: {
      module: "CP-2D",
      id: "CP-2D-1",
      label: "CP-2D",
      href: "",
      sha256: HASH,
      events: [{ table: 20, lane: "Financing", ...(gap ? { gap } : {}) }],
    },
    sections: [
      {
        heading: "Events: Financing",
        line: 19,
        level: 3,
        blocks: [{ type: "table", line: 20, headers: EVENT_HEADERS, rows }],
      },
    ],
  };
}

const numbered = (rows: string[][]) => rows.map((cells, index) => ({ line: 22 + index, cells }));
const fine = ["2025-06", "month", "2024-11-07", "Fine", "Historical — noted", "Filing p.1", "Wall"];
const refDate = [
  "annual-report-2024.pdf p.12",
  "day",
  "2024-11-07",
  "RefDate",
  "Scheduled — x",
  "Filing p.1",
  "Wall",
];
const refStatus = [
  "2025-06-30",
  "day",
  "2024-11-07",
  "RefStatus",
  "Per CP-2D-GAP-007",
  "Filing p.1",
  "Wall",
];
const unplacedGrid = () =>
  within(screen.getByRole("grid", { name: "Events not placed on the calendar" }));

it("draws no source reference from any cell of an unplaced row and keeps its source control", () => {
  render(
    <Calendar
      calendar={buildCalendar([handoff(numbered([refDate, refStatus, fine]))], "current")}
    />,
  );
  const grid = unplacedGrid();
  expect(grid.queryByText(/annual-report-2024\.pdf/)).toBeNull();
  expect(grid.queryByText(/CP-2D-GAP-007/)).toBeNull();
  expect(document.body.textContent).not.toMatch(/annual-report-2024\.pdf|CP-2D-GAP-007/);
  expect(grid.getAllByText("See Evidence")).toHaveLength(2);
  expect(grid.getByRole("link", { name: "Source for RefDate · Liquidity" })).toHaveAttribute(
    "href",
    evidence(22),
  );
  expect(grid.getByRole("link", { name: "Source for RefStatus · Liquidity" })).toHaveAttribute(
    "href",
    evidence(23),
  );
});

it("says events are listed only when a gap card lists unplaced rows", () => {
  const recorded = buildCalendar(
    [handoff(numbered([fine]), "No event dates were disclosed by the issuer.")],
    "current",
  );
  render(<Calendar calendar={recorded} />);
  expect(screen.queryByText(/events and date gaps are listed below/)).toBeNull();
  expect(
    screen.getByText("No dates could be placed on the calendar; the date gaps are listed below."),
  ).toBeInTheDocument();
});

it("plots the readable rows and lists a row of the wrong cell count as unreadable", () => {
  const calendar = buildCalendar(
    [handoff(numbered([fine, ["2025-07", "month"], refDate]))],
    "current",
  );
  expect(calendar.rows.map(({ cells, href }) => [cells[3], href])).toEqual([
    ["Fine", evidence(22)],
  ]);
  render(<Calendar calendar={calendar} />);
  const grid = unplacedGrid();
  expect(grid.getAllByRole("row")).toHaveLength(3);
  const unreadable = within(grid.getByRole("row", { name: /could not be read/ }));
  expect(unreadable.getByRole("link")).toHaveAttribute("href", evidence(23));
  expect(unreadable.queryByText("Not recorded")).toBeNull();
  expect(grid.getByRole("row", { name: /RefDate/ })).toBeInTheDocument();
});

it("plots and lists each row of a table whose rows share a source line, and says so", () => {
  const rows = [
    { line: 22, cells: fine },
    { line: 22, cells: [...fine.slice(0, 3), "Second", ...fine.slice(4)] },
    { line: 22, cells: refDate },
    { line: 0, cells: [...fine.slice(0, 3), "Unlined", ...fine.slice(4)] },
  ];
  const calendar = buildCalendar([handoff(rows)], "current");
  expect(calendar.rows.map(({ cells, href }) => [cells[3], href])).toEqual([
    ["Fine", evidence(22)],
    ["Second", evidence(22)],
    ["Unlined", evidence(20)],
  ]);
  expect(calendar.gaps).toHaveLength(1);
  expect(calendar.gaps[0]?.reason).toContain("The event table does not identify each event row.");
  render(<Calendar calendar={calendar} />);
  const grid = unplacedGrid();
  expect(grid.getAllByRole("row")).toHaveLength(2);
  expect(grid.getByRole("link", { name: "Source for RefDate · Liquidity" })).toHaveAttribute(
    "href",
    evidence(22),
  );
});
