import { act, cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConnectedApp } from "./ConnectedApp";
import type { Snapshot } from "./publishedReport";

const EVIDENCE = {
  sources: [],
  unused: [],
  unrecorded: [],
  noSourcesModules: [],
  handoffs: [],
  zip: null,
  downloads: [],
  record: { hashes: [], instructions: [], calls: [], cap: null },
};

function snapshot(): Snapshot {
  const id = "northbridge-2026/outputs/CP-1.md";
  const text = (line: number) => ({
    type: "text",
    line,
    end: line,
    text: `Sentence ${String(line)}.`,
  });
  return {
    catalogue: {
      real: [
        {
          id: "northbridge-2026",
          name: "Northbridge",
          issuer: "Northbridge",
          title: "Full credit assessment",
          date: "2026-10-31",
          sector: "Industrials",
          period: "FY2026",
          metrics: {},
        },
      ],
    },
    workspace: {
      runs: {
        north: {
          folder: "northbridge-2026",
          issuer: "Northbridge",
          issuerKey: "northbridge-2026",
          title: "Full credit assessment",
          period: "FY2026",
          asOf: "2026-10-31",
          pathway: "credit_snapshot",
          modules: { "CP-1": { outputs: [id], default: id } },
          changes: { first_run: true },
          evidence: EVIDENCE,
        },
      },
      outputs: {
        [id]: {
          id,
          run: "north",
          module: "CP-1",
          label: "Financial foundation",
          href: id,
          sha256: "digest",
          state: { established: true, declared: null },
        },
      },
      handoffs: {
        digest: [
          { heading: "Findings", level: 2, line: 5, blocks: [] },
          { heading: "Bottom line", level: 3, line: 10, blocks: [text(11)] },
          { heading: "Key findings", level: 3, line: 20, blocks: [text(21)] },
          { heading: "Limitations", level: 3, line: 30, blocks: [text(31)] },
        ],
      },
      models: [],
    },
    chips: {},
  } as unknown as Snapshot;
}

function useSnapshot() {
  vi.stubGlobal(
    "fetch",
    vi.fn(() => Promise.resolve(Response.json(snapshot()))),
  );
}

function open(hash: string) {
  window.history.replaceState(null, "", `/report/northbridge-2026${hash}`);
  render(<ConnectedApp path="/report/northbridge-2026" mode="synthetic" />);
}

type Callback = (entries: { target: Element; isIntersecting: boolean }[]) => void;
const observers: { callback: Callback; observed: Element[]; options?: IntersectionObserverInit }[] =
  [];

class FakeObserver {
  private readonly record: (typeof observers)[number];
  constructor(callback: Callback, options?: IntersectionObserverInit) {
    this.record = { callback, observed: [], options };
    observers.push(this.record);
  }
  observe(target: Element) {
    this.record.observed.push(target);
  }
  disconnect() {
    this.record.observed = [];
  }
  unobserve() {}
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  observers.length = 0;
  window.history.replaceState(null, "", "/");
});

const sectionButtons = () =>
  within(screen.getByRole("list", { name: "On this page" })).getAllByRole("button");

describe("report wayfinding", () => {
  it("marks the section in the top third of the scroll container, and no other", async () => {
    vi.stubGlobal("IntersectionObserver", FakeObserver);
    useSnapshot();
    open("#modules/CP-1");
    await screen.findByLabelText("Module");
    const live = observers.filter((item) => item.observed.length > 0);
    expect(live).toHaveLength(1);
    const [spy] = live;
    if (!spy) throw new Error("no observer");
    expect(spy.observed.map((node) => node.id)).toEqual(["finding-10", "finding-20", "finding-30"]);
    expect(spy.options?.root).toBe(screen.getByRole("main"));
    expect(spy.options?.rootMargin).toBe("0px 0px -66% 0px");
    const third = spy.observed[2];
    if (!third) throw new Error("no third section");
    act(() => {
      spy.callback([{ target: third, isIntersecting: true }]);
    });
    expect(sectionButtons().map((button) => button.getAttribute("aria-current"))).toEqual([
      null,
      null,
      "location",
    ]);
  });

  it("renders the navigator and still activates an entry on click without IntersectionObserver", async () => {
    expect("IntersectionObserver" in globalThis).toBe(false);
    useSnapshot();
    open("#modules/CP-1");
    await screen.findByLabelText("Module");
    const second = sectionButtons()[1];
    if (!second) throw new Error("no second entry");
    for (const id of ["finding-10", "finding-20", "finding-30"]) {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView = vi.fn();
    }
    fireEvent.click(second);
    expect(sectionButtons().map((button) => button.getAttribute("aria-current"))).toEqual([
      null,
      "location",
      null,
    ]);
  });

  it("marks Overview as the current tab on the calendar", async () => {
    useSnapshot();
    open("#calendar");
    const nav = await screen.findByRole("navigation", { name: "Report sections" });
    const current = within(nav)
      .getAllByRole("link")
      .filter((link) => link.getAttribute("aria-current") === "page");
    expect(current.map((link) => link.textContent)).toEqual(["Overview"]);
  });

  it("offers the Report tab and no Report history link", async () => {
    useSnapshot();
    open("");
    const nav = await screen.findByRole("navigation", { name: "Report sections" });
    expect(within(nav).getByRole("link", { name: "Report" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Report history" })).toBeNull();
  });
});
