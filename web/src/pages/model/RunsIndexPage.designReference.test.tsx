import { cleanup, render, screen } from "@testing-library/react";
import { App } from "@/App";
import type { LoadResult } from "@/data";
import { fixtureSlice, must } from "./slice/test-fixture";

// OQ-01 (README R10), ruling L7: the static app is a design reference fed by saved samples, so the
// models index says so once, with the words of the note on the other pages, inside its own padded
// frame. The shipped build, with no data file, shows none.
const TITLE = "Design reference with sample data";

const ok = (model: unknown): LoadResult => ({
  kind: "ok",
  data: { schema: "credit-os-data/1", issuers: [], model },
});

afterEach(() => {
  cleanup();
  window.location.hash = "";
});

function open(result: LoadResult, hash = "#/model/runs") {
  window.location.hash = hash;
  return render(<App result={result} />);
}

describe("the design-reference note on the financial models index", () => {
  it.each(["#/model/runs", "#/model"])("is drawn once at %s, naming the saved example", (hash) => {
    open(ok(fixtureSlice()), hash);
    expect(screen.getAllByText(TITLE)).toHaveLength(1);
    expect(screen.getByRole("main")).toHaveTextContent(/saved example/i);
    expect(screen.getByRole("main")).toHaveTextContent(/not connected to the run service/);
  });

  it("is the first thing in the page's own frame, ahead of the h1", () => {
    open(ok(fixtureSlice()));
    const frame = must(screen.getByRole("main").firstElementChild);
    expect(frame).toHaveClass("p-8");
    const note = must(frame.firstElementChild);
    expect(note).toHaveAttribute("role", "note");
    expect(note).toHaveTextContent(TITLE);
    const [h1] = screen.getAllByRole("heading", { level: 1 });
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(note.compareDocumentPosition(h1 as Node)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });

  it("is drawn once beside an unreadable run too", () => {
    const slice = fixtureSlice() as { runs: unknown[] };
    slice.runs.push("nope");
    open(ok(slice));
    expect(screen.getAllByText(TITLE)).toHaveLength(1);
  });

  it.each([
    ["no data file", { kind: "missing" } as const],
    ["a newer data file", { kind: "newer", schema: "credit-os-data/2" } as const],
  ])("is not drawn when there is %s", (_, result) => {
    open(result);
    expect(screen.queryByText(TITLE)).toBeNull();
    cleanup();
    open(result, "#/model");
    expect(screen.queryByText(TITLE)).toBeNull();
  });

  it("is not drawn where the data file holds no model, so no sample is shown", () => {
    open({ kind: "ok", data: { schema: "credit-os-data/1", issuers: [] } });
    expect(screen.getByText("No model has been delivered yet")).toBeInTheDocument();
    expect(screen.queryByText(TITLE)).toBeNull();
  });
});
