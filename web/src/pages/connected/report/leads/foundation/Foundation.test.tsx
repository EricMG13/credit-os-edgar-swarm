import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { cp1Entry, leadProps } from "../fixtures/load";
import { FoundationLead } from "./Foundation";

afterEach(cleanup);

it("draws the six figure tiles and the periods gap for the retained TransDigm handoff, in the mockup's order", () => {
  render(<FoundationLead {...leadProps(cp1Entry())} />);
  const regions = screen.getAllByRole("region").map((region) => region.getAttribute("aria-label"));
  expect(regions).toHaveLength(7);
  expect(screen.getAllByRole("img").length).toBeGreaterThanOrEqual(6);
  // One trace control per figure tile; the gap tile has none.
  expect(screen.getAllByRole("link", { name: /^Source for / })).toHaveLength(6);
});

it("says why when the run's CP-1 is blocked, and draws no figure", () => {
  const entry = cp1Entry();
  const props = leadProps({
    ...entry,
    output: { ...entry.output, parseError: "unreadable" },
  });
  render(<FoundationLead {...props} />);
  expect(screen.queryAllByRole("img")).toHaveLength(0);
  expect(screen.getByText("Not assessable")).toBeInTheDocument();
});
