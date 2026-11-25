// Reads the retained TransDigm FY2024 CP-1 handoff (outdated evidence: shape and scope only) and
// mutations of it (`fixtures/mutations.ts`: tables dropped); a mutation is not a real handoff.
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { cp1Entry, leadProps } from "../fixtures/load";
import { dropTable, edited } from "../fixtures/mutations";
import { FoundationLead } from "./Foundation";

afterEach(cleanup);

const regions = () =>
  screen.getAllByRole("region").map((region) => region.getAttribute("aria-label"));

it("draws the seven tiles of the mockup, in its order and spans", () => {
  render(<FoundationLead {...leadProps(cp1Entry())} />);
  // The first four tiles belong to their own owners (names theirs); the last three are drawn here.
  expect(regions()).toHaveLength(7);
  expect(regions().slice(4)).toEqual(["Segments", "Debt maturities", "Periods"]);
  const spans = screen
    .getAllByRole("region")
    .map((region) => /lg:col-span-(\d+)/.exec(region.className)?.[1]);
  expect(spans).toEqual(["12", "7", "5", "6", "6", "5", "7"]);
});

it("keeps the periods tile as tall as its content, not stretched to the wall beside it", () => {
  render(<FoundationLead {...leadProps(cp1Entry())} />);
  const periods = screen.getByRole("region", { name: "Periods" });
  expect(periods.parentElement?.className).toMatch(/\bcontents\b/);
  expect(periods.parentElement?.className).toMatch(/lg:\[&>section\]:self-start/);
});

it("lists the figures it draws itself, so the frame does not draw the typed figures again", () => {
  expect(FoundationLead.draws).toEqual(["figures"]);
});

it("draws one plain gap for an absent figure, in that figure's place", () => {
  render(<FoundationLead {...leadProps(dropTable(cp1Entry(), "Segment schedule"))} />);
  expect(regions()).toHaveLength(7);
  const segments = screen.getByRole("region", { name: "Segments" });
  expect(segments.textContent).toBe("Segments · The segment schedule is not in the handoff.");
  expect(segments.className).not.toMatch(/gap-hatch/);
});

it("draws a single gap, not seven, when the handoff carries no figure at all", () => {
  render(<FoundationLead {...leadProps(edited(cp1Entry(), () => null))} />);
  expect(regions()).toEqual(["Financial foundation"]);
  expect(screen.getByRole("region").textContent).toBe(
    "Financial foundation · Financial foundation states no figure this lead can draw.",
  );
  expect(screen.queryAllByRole("img")).toHaveLength(0);
});

it("draws nothing for a blocked or unreadable module: the frame states it in the header", () => {
  const entry = cp1Entry();
  const props = leadProps({ ...entry, output: { ...entry.output, parseError: "unreadable" } });
  const { container } = render(<FoundationLead {...props} />);
  expect(container).toBeEmptyDOMElement();
});
