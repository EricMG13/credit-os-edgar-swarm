import { render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import * as eventLaneModule from "./EventLane";

const { EVENT_HEADERS, eventLane } = eventLaneModule;

function row(date: string, name: string) {
  return [date, "day", "—", name, "Scheduled — Contract", "Source", "Debt"];
}

it("draws one row per event with its title and exact date, label column twice the track", () => {
  const rows = [
    row("2000-01-01", "First"),
    row("2000-01-02", "Second"),
    row("2020-01-01", "Third"),
  ];
  render(eventLane({ line: 0, headers: EVENT_HEADERS, rows }));
  const events = within(screen.getByRole("region", { name: "Scheduled" })).getAllByRole("img");
  expect(events).toHaveLength(3);
  const grids = events.map((marker) => {
    const grid = marker.closest("[class*='grid-cols-']");
    if (!grid) throw new Error("event row has no grid");
    return grid;
  });
  expect(new Set(grids).size).toBe(3);
  [
    ["First", "2000-01-01"],
    ["Second", "2000-01-02"],
    ["Third", "2020-01-01"],
  ].forEach(([title, date], index) => {
    const grid = within(grids[index] as HTMLElement);
    expect(grid.getByText(title ?? "")).toBeInTheDocument();
    expect(grid.getByText(new RegExp(date ?? ""))).toBeInTheDocument();
    expect(grids[index]).toHaveClass("md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]");
    expect(grids[index]).not.toHaveClass("md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]");
  });
});

it("no longer exports the lane-sharing function", () => {
  expect("assignLanes" in eventLaneModule).toBe(false);
});
