import { readFileSync } from "node:fs";
import path from "node:path";
import { cleanup, render, screen } from "@testing-library/react";
import { App } from "./App";
import type { LoadResult } from "./data";

// OQ-01 (README R10): the static app is a design reference fed by saved samples. Every page that
// draws them says so, once, in the frame. A page with no sample behind it does not.
type Fixture = {
  issuers?: { id: string; name: string }[];
  slice?: unknown;
  params: Record<string, Record<string, string>[]>;
};
const read = (group: string): Fixture =>
  JSON.parse(
    readFileSync(path.join(import.meta.dirname, "../fixtures", `${group}.json`), "utf8"),
  ) as Fixture;
const library = read("library");
const model = read("model");
const run = read("run");
const signal = read("signal");

const ok: LoadResult = {
  kind: "ok",
  data: {
    schema: "credit-os-data/1",
    issuers: library.issuers ?? [],
    library: library.slice,
    model: model.slice,
    run: run.slice,
    signal: signal.slice,
  },
};

const TITLE = "Design reference with sample data";
const fill = (pattern: string, set: Record<string, string>) =>
  pattern.replace(/:(\w+)/g, (_, name: string) => set[name] ?? "");
const hashes = (fx: Fixture, only?: string) =>
  Object.entries(fx.params)
    .filter(([pattern]) => only === undefined || pattern.startsWith(only))
    .map(([pattern, sets]) => `#${fill(pattern, sets[0] ?? {})}`);

// jsdom lays nothing out and has no scrollIntoView, which the trace item page calls on arrival.
beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn();
});

afterEach(() => {
  cleanup();
  window.location.hash = "";
});

function open(hash: string, result: LoadResult = ok) {
  window.location.hash = hash;
  return render(<App result={result} />);
}

describe("the design-reference line on the static pages", () => {
  const RUN_PAGES = [
    ...(run.params["/run/start/:draft"] ?? []).map((s) => `#/run/start/${s["draft"] ?? ""}`),
    ...(run.params["/run/activity/:run"] ?? []).map((s) => `#/run/activity/${s["run"] ?? ""}`),
  ];

  it("covers every run start step and every run activity page the fixture holds", () => {
    expect(RUN_PAGES).toHaveLength(7 + 11);
  });

  it.each(RUN_PAGES)("is drawn once on %s and names the saved example", (hash) => {
    open(hash);
    expect(screen.getAllByText(TITLE)).toHaveLength(1);
    expect(screen.getByRole("main")).toHaveTextContent(/saved example/i);
    expect(screen.getByRole("main")).toHaveTextContent(/not connected to the run service/);
  });

  it.each(hashes(library))("is drawn once on the library page %s", (hash) => {
    open(hash);
    expect(screen.getAllByText(TITLE)).toHaveLength(1);
  });

  it("is drawn on the component kit, which is all sample figures, even with no data file", () => {
    open("#/kit", { kind: "missing" });
    expect(screen.getAllByText(TITLE)).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1, name: "Component kit" })).toBeInTheDocument();
  });

  it.each(["#/run/start/start", "#/run/activity/finished"])(
    "is a note ahead of the page on %s, not a heading",
    (hash) => {
      open(hash);
      const note = screen.getByText(TITLE).closest("[role=note]");
      const [h1] = screen.getAllByRole("heading", { level: 1 });
      expect(note).not.toBeNull();
      expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
      expect(note?.compareDocumentPosition(h1 as Node)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    },
  );

  it("is not drawn on a Signal page", () => {
    open(hashes(signal)[0] ?? "");
    expect(screen.queryByText(TITLE)).toBeNull();
  });

  it.each([
    ["no data file", { kind: "missing" } as const],
    ["a newer data file", { kind: "newer", schema: "credit-os-data/2" } as const],
  ])("is not drawn when there is %s: no sample is shown", (_, result) => {
    open("#/run/start/start", result);
    expect(screen.queryByText(TITLE)).toBeNull();
    open("#/", result);
    expect(screen.queryByText(TITLE)).toBeNull();
  });

  it("is not drawn when the group has no slice, so the page shows no sample", () => {
    open("#/run/start/start", {
      kind: "ok",
      data: { schema: "credit-os-data/1", issuers: [] },
    });
    expect(screen.getByText("No run data in this library")).toBeInTheDocument();
    expect(screen.queryByText(TITLE)).toBeNull();
  });
});
