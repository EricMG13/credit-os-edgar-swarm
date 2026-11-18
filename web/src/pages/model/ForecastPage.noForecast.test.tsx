import { cleanup, render, screen } from "@testing-library/react";
import { App } from "@/App";
import type { LoadResult } from "@/data";
import { edited, fixtureSlice } from "./slice/test-fixture";

// S5-001, ruling L8: a run that published no forecast draws the Forecast page as one fixed
// sentence, not as a run that could not be read.
const SENTENCE = "No forecast was published for this run.";
const ADDRESS = "#/model/transdigm/2025-06-30/forecast";

const ok = (model: unknown): LoadResult => ({
  kind: "ok",
  data: { schema: "credit-os-data/1", issuers: [], model },
});

afterEach(() => {
  cleanup();
  window.location.hash = "";
});

function open(model: unknown) {
  window.location.hash = ADDRESS;
  return render(<App result={ok(model)} />);
}

describe("the Forecast page of a run with no forecast", () => {
  it("draws the one fixed sentence, once, inside the run's frame", () => {
    open(edited(["runs", 0, "forecast"], undefined));
    expect(screen.getAllByText(SENTENCE)).toHaveLength(1);
    expect(screen.getByRole("main")).toContainElement(screen.getByText(SENTENCE));
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("TransDigm Group");
  });

  it("draws the same sentence for a forecast written as null", () => {
    open(edited(["runs", 0, "forecast"], null));
    expect(screen.getAllByText(SENTENCE)).toHaveLength(1);
  });

  it("is not the unreadable notice, and draws no case choice, chart or table", () => {
    open(edited(["runs", 0, "forecast"], undefined));
    expect(screen.queryByText("This part of the library could not be read")).toBeNull();
    expect(screen.queryAllByRole("radio")).toHaveLength(0);
    expect(screen.queryAllByRole("figure")).toHaveLength(0);
    expect(screen.queryByText("Two cases")).toBeNull();
  });

  it("is not drawn for a run that has a forecast, which draws its cases", () => {
    open(fixtureSlice());
    expect(screen.queryByText(SENTENCE)).toBeNull();
    expect(screen.getByText("Two cases")).toBeInTheDocument();
  });
});
