import { render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import {
  assignLanes,
  AXIS_MIN_PX,
  EVENT_HEADERS,
  eventLane,
  LANE_GRID,
  LANE_MARGIN,
  LANE_TRACK,
} from "./EventLane";

const span = (from: number, to: number) => ({ from, to });

it("shares a lane when the earlier event and its label room end before the next starts", () => {
  expect(assignLanes([span(0, 5), span(20, 25), span(40, 45)], 10)).toEqual([0, 0, 0]);
});

it("opens a new lane when the next event starts inside the earlier label room", () => {
  expect(assignLanes([span(0, 5), span(3, 8), span(20, 25)], 10)).toEqual([0, 1, 0]);
});

it("keeps a long event's whole span and the second lane's label room occupied", () => {
  expect(assignLanes([span(0, 30), span(5, 10), span(12, 14), span(40, 41)], 10)).toEqual([
    0, 1, 2, 0,
  ]);
});

it("puts thirty one-day events thirty days apart in one lane", () => {
  const events = Array.from({ length: 30 }, (_, index) => span(index * 30, index * 30 + 1));
  expect(new Set(assignLanes(events, 10))).toEqual(new Set([0]));
});

it("loses no event and never overlaps two events in one lane, label room included", () => {
  let seed = 20261116;
  const next = () => {
    seed = (seed * 1_664_525 + 1_013_904_223) % 4_294_967_296;
    return seed / 4_294_967_296;
  };
  for (let run = 0; run < 500; run += 1) {
    const count = 1 + Math.floor(next() * 40);
    const events = Array.from({ length: count }, () => {
      const from = Math.floor(next() * 200);
      return span(from, from + Math.floor(next() * 40));
    }).sort((a, b) => a.from - b.from || a.to - b.to);
    const lanes = assignLanes(events, 10);
    expect(lanes).toHaveLength(events.length);
    const occupied = events.map((event, index) => ({
      lane: lanes[index],
      from: event.from,
      end: Math.max(event.to, event.from + 10),
    }));
    occupied.forEach((a, i) => {
      occupied.slice(i + 1).forEach((b) => {
        if (a.lane === b.lane) expect(a.end < b.from || b.end < a.from).toBe(true);
      });
    });
  }
});

function row(date: string, name: string) {
  return [date, "day", "—", name, "Scheduled — Contract", "Source", "Debt"];
}

it("draws far-apart events in one shared lane and crowded ones in another, keeping every event", () => {
  const rows = [
    row("2000-01-01", "First"),
    row("2000-01-02", "Crowded"),
    row("2010-01-01", "Second"),
    row("2020-01-01", "Third"),
  ];
  render(
    eventLane({ line: 0, headers: EVENT_HEADERS, rows }, (index) => (
      <p>{`Owner ${String(index)}`}</p>
    )),
  );
  const scheduled = within(screen.getByRole("region", { name: "Scheduled" }));
  expect(scheduled.getAllByRole("img")).toHaveLength(4);
  const lanes = document.querySelectorAll("[data-event-lane]");
  expect(lanes).toHaveLength(2);
  expect(lanes[0]?.querySelectorAll("[role=img]")).toHaveLength(3);
  for (const index of [0, 1, 2, 3])
    expect(scheduled.getByText(`Owner ${String(index)}`)).toBeVisible();
});

const SPACING_PX = 4;
const spacing = (classes: string, pattern: RegExp) =>
  SPACING_PX * Number(pattern.exec(classes)?.[1] ?? Number.NaN);

it("measures label room against the narrowest axis the drawn classes can produce", () => {
  const drawn =
    spacing(LANE_GRID, /(?:^|\s)min-w-(\d+)(?:\s|$)/) -
    spacing(LANE_GRID, /(?:^|\s)p-(\d+)(?:\s|$)/) -
    spacing(LANE_GRID, /(?:^|\s)pr-(\d+)(?:\s|$)/) -
    2 * spacing(LANE_TRACK, /(?:^|\s)mx-(\d+)(?:\s|$)/);
  expect(AXIS_MIN_PX).toBe(drawn);
});

it("does not let a capped label overlap an event that starts inside it at the minimum axis", () => {
  const day = (n: number) =>
    new Date(Date.UTC(2000, 0, 1) + n * 86_400_000).toISOString().slice(0, 10);
  const rows = [row(day(0), "A"), row(day(360), "B"), row(day(1000), "C")];
  render(eventLane({ line: 0, headers: EVENT_HEADERS, rows }));
  // B starts at 36% of the axis; a 224px label is 37.3% of a 600px axis, so B needs its own lane.
  expect(document.querySelectorAll("[data-event-lane]")).toHaveLength(2);
});

it("draws the track and both label containers with the one shared margin", () => {
  const day = (n: number) =>
    new Date(Date.UTC(2000, 0, 1) + n * 86_400_000).toISOString().slice(0, 10);
  render(
    eventLane({ line: 0, headers: EVENT_HEADERS, rows: [row(day(0), "A"), row(day(100), "B")] }),
  );
  const margin = (el: Element | null) =>
    /(?:^|\s)mx-\d+(?:\s|$)/u.exec(el?.className ?? "")?.[0].trim();
  expect(margin(document.querySelector("[aria-label='Date axis']"))).toBe(LANE_MARGIN);
  expect(margin(document.querySelector("[data-event-lane] > div"))).toBe(LANE_MARGIN);
  expect(LANE_TRACK.split(" ")).toContain(LANE_MARGIN);
  expect(margin(document.querySelector("[data-event-lane] .relative"))).toBe(LANE_MARGIN);
});
