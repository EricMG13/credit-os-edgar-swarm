import { cleanup, render, screen } from "@testing-library/react";
import { Badge } from "@/components/base/badges/badges";
import { showFixture } from "../test-helpers";

afterEach(() => {
  cleanup();
});

// S6-010: a run's label chip was a Badge, which never wraps: the fixture's own long label ran past a
// 390 px page and one unbroken label pushed Stop run off a 1440 px page. jsdom reads no stylesheet,
// so the class list is what a test can check; the browser probe s6-long-label.mjs measures it.
const LONG = "Full credit review with every optional module and a late cut-off";

describe("a run's label chips", () => {
  it("wrap, stay inside their row and break an unbroken label, on a run page", () => {
    showFixture("/run/activity/many-modules");
    const chip = screen.getByText(LONG);
    expect(chip).toHaveClass("size-auto", "max-w-full", "whitespace-normal", "wrap-anywhere");
    expect(chip).not.toHaveClass("whitespace-nowrap");
    expect(chip).not.toHaveClass("size-max");
  });

  it("wrap in the same way on a run that cannot be read", () => {
    showFixture("/run/activity/unreadable");
    const chip = screen.getByText("As of Q3 FY2026");
    expect(chip).toHaveClass("size-auto", "max-w-full", "whitespace-normal", "wrap-anywhere");
    expect(chip).not.toHaveClass("whitespace-nowrap");
    expect(chip).not.toHaveClass("size-max");
  });

  it("leave the run state chip as it was: one line", () => {
    showFixture("/run/activity/many-modules");
    const state = screen.getAllByText("Running")[0];
    expect(state?.closest("span.whitespace-nowrap")).not.toBeNull();
  });
});

describe("the shared Badge", () => {
  it("still draws on one line unless its caller says otherwise", () => {
    render(<Badge>Fresh</Badge>);
    expect(screen.getByText("Fresh")).toHaveClass("whitespace-nowrap");
    expect(screen.getByText("Fresh")).not.toHaveClass("whitespace-normal");
  });
});
