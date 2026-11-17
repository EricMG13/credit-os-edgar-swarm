import { cleanup, render, screen } from "@testing-library/react";
import { App } from "@/App";
import type { LoadResult } from "@/data";
import { edited, fixtureSlice, must } from "../slice/test-fixture";

// OQ-01 (README R10), ruling L7: the static app is a design reference fed by saved samples, so the
// model frame says so once, with the words of the note on the other pages, inside its own padded
// frame (the page's p-8 stays main's first child). The shipped build, with no data file, shows none.
const TITLE = "Design reference with sample data";
const FORMS = ["front", "analysis", "statements", "portfolio-fit", "limitations", "forecast"];
const ADDRESS = (form: string) => `#/model/transdigm/2025-06-30/${form}`;

const ok = (model: unknown): LoadResult => ({
  kind: "ok",
  data: { schema: "credit-os-data/1", issuers: [], model },
});

// jsdom lays nothing out and has no scrollIntoView, which a trace item page calls on arrival.
beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn();
});

afterEach(() => {
  cleanup();
  window.location.hash = "";
});

function open(hash: string, result: LoadResult = ok(fixtureSlice())) {
  window.location.hash = hash;
  return render(<App result={result} />);
}

describe("the design-reference note in the model frame", () => {
  it.each(FORMS)("is drawn once on the %s page, naming the saved example", (form) => {
    open(ADDRESS(form));
    expect(screen.getAllByText(TITLE)).toHaveLength(1);
    expect(screen.getByRole("main")).toHaveTextContent(/saved example/i);
    expect(screen.getByRole("main")).toHaveTextContent(/not connected to the run service/);
  });

  it.each(FORMS)("is the first thing in the page's own frame on the %s page", (form) => {
    open(ADDRESS(form));
    const frame = must(screen.getByRole("main").firstElementChild);
    expect(frame).toHaveClass("p-8");
    const note = must(frame.firstElementChild);
    expect(note).toHaveAttribute("role", "note");
    expect(note).toHaveTextContent(TITLE);
    const [h1] = screen.getAllByRole("heading", { level: 1 });
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(note.compareDocumentPosition(h1 as Node)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });

  it("is drawn whether or not the run's header sets the sample flag, and says it only once", () => {
    for (const sample of [true, false]) {
      open(ADDRESS("front"), ok(edited(["runs", 0, "header", "sample"], sample)));
      expect(screen.getAllByText(TITLE)).toHaveLength(1);
      expect(screen.queryByText("Sample data")).toBeNull();
      cleanup();
    }
  });

  it.each([
    ["no data file", { kind: "missing" } as const],
    ["a newer data file", { kind: "newer", schema: "credit-os-data/2" } as const],
  ])("is not drawn on any model page when there is %s", (_, result) => {
    for (const form of FORMS) {
      open(ADDRESS(form), result);
      expect(screen.queryByText(TITLE)).toBeNull();
      cleanup();
    }
  });

  it("is not drawn where the data file holds no model, so no sample is shown", () => {
    open(ADDRESS("front"), {
      kind: "ok",
      data: { schema: "credit-os-data/1", issuers: [] },
    });
    expect(screen.queryByText(TITLE)).toBeNull();
  });
});
