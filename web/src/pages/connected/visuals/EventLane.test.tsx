import { render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import { assignLanes, EVENT_HEADERS, eventLane } from "./EventLane";

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
