import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { Bridge, BridgeLegend, type Step } from "./bridge";

afterEach(cleanup);

const step = (label: string, text: string, value: number, line: number): Step => ({
  label,
  cell: { text, value, reason: null },
  line,
});

// The synthetic proof handoff's bridge (proof/handoffs/CP-2D.md).
const STEPS = [
  step("Opening accessible liquidity", "900", 900, 4),
  step("Free cash flow", "120", 120, 5),
  step("Debt repayment", "-450", -450, 6),
  step("Closing accessible liquidity", "570", 570, 7),
];

const draw = () =>
  render(<Bridge steps={STEPS} unit="US$m" label="Liquidity bridge: 900 to 570" />);

const bars = () => [...document.querySelectorAll<HTMLElement>("[data-bar]")];
const left = (item: HTMLElement) => Number.parseFloat(item.style.left);
const right = (item: HTMLElement) => left(item) + Number.parseFloat(item.style.width);

// Review 4, Q3(a): the bridge reads as a waterfall.
it("draws the opening and closing as full levels, a rise and a fall in their own tones", () => {
  draw();
  expect(bars().map((bar) => bar.dataset.tone)).toEqual(["level", "adds", "uses", "level"]);
  expect(bars().map((bar) => bar.className.match(/bg-waterfall-\w+/)?.[0])).toEqual([
    "bg-waterfall-total",
    "bg-waterfall-up",
    "bg-waterfall-down",
    "bg-waterfall-total",
  ]);
  const [opening, , , closing] = bars();
  // Levels stand on zero: the scale starts at zero for these figures.
  expect(left(opening as HTMLElement)).toBe(0);
  expect(left(closing as HTMLElement)).toBe(0);
  // Every figure as written, once, and the sign as written.
  for (const text of ["900", "120", "-450", "570"]) expect(screen.getByText(text)).toBeVisible();
});

it("joins each bar's end to the next bar's start with a step connector", () => {
  draw();
  const [opening, rise, fall, closing] = bars() as [
    HTMLElement,
    HTMLElement,
    HTMLElement,
    HTMLElement,
  ];
  const joins = [...document.querySelectorAll<HTMLElement>("[data-connector]")];
  // Two segments per join (out of one row, into the next), three joins.
  expect(joins.map((join) => join.dataset.connector)).toEqual([
    "0-out",
    "0-in",
    "1-out",
    "1-in",
    "2-out",
    "2-in",
  ]);
  const at = (name: string) =>
    left(joins.find((join) => join.dataset.connector === name) as HTMLElement);
  expect(at("0-out")).toBeCloseTo(right(opening));
  expect(at("0-in")).toBeCloseTo(left(rise));
  expect(at("1-out")).toBeCloseTo(right(rise));
  expect(at("1-in")).toBeCloseTo(right(fall));
  expect(at("2-out")).toBeCloseTo(left(fall));
  expect(at("2-in")).toBeCloseTo(right(closing));
});

it("names each tone in words: levels, adds, uses", () => {
  render(<BridgeLegend />);
  for (const word of ["Opening and closing", "Adds", "Uses"])
    expect(screen.getByText(word)).toBeVisible();
});
