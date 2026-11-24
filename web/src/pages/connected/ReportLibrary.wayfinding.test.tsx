import {
  act,
  configure,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ConnectedApp } from "./ConnectedApp";
import type { Snapshot } from "./publishedReport";

// The first render of the whole reader can pass the 1 s default on a busy machine.
configure({ asyncUtilTimeout: 5000 });

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

function snapshot(name = "Northbridge"): Snapshot {
  const id = "northbridge-2026/outputs/CP-1.md";
  const second = "northbridge-2026/outputs/CP-2.md";
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
          name,
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
          modules: {
            "CP-1": { outputs: [id], default: id },
            "CP-2": { outputs: [second], default: second },
          },
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
        [second]: {
          id: second,
          run: "north",
          module: "CP-2",
          label: "Fundamental credit",
          href: second,
          sha256: "digest-2",
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
        "digest-2": [
          { heading: "Findings", level: 2, line: 5, blocks: [] },
          { heading: "Bottom line", level: 3, line: 10, blocks: [text(11)] },
        ],
      },
      models: [],
    },
    chips: {},
  } as unknown as Snapshot;
}

function useSnapshot(name?: string) {
  vi.stubGlobal(
    "fetch",
    vi.fn(() => Promise.resolve(Response.json(snapshot(name)))),
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

beforeEach(() => {
  Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
    configurable: true,
    writable: true,

    value: vi.fn(),
  });
});

afterEach(() => {
  Reflect.deleteProperty(HTMLElement.prototype, "scrollIntoView");
  cleanup();
  vi.unstubAllGlobals();
  observers.length = 0;
  window.history.replaceState(null, "", "/");
});

const modulesNav = () => screen.findByRole("navigation", { name: "Modules in this run" });
const current = (nav: HTMLElement) =>
  within(nav)
    .getAllByRole("link")
    .filter((link) => link.getAttribute("aria-current") === "page")
    .map((link) => link.getAttribute("aria-label") ?? link.textContent);

describe("module wayfinding", () => {
  it("lists the run's modules by stage and marks the open module as current", async () => {
    useSnapshot();
    open("#modules/CP-1");
    const nav = await modulesNav();
    expect(
      within(nav)
        .getAllByRole("heading", { level: 3 })
        .map((node) => node.textContent),
    ).toEqual(["Financials", "Credit"]);
    expect(current(nav)).toEqual(["Financial foundation, Delivered"]);
    expect(
      within(nav).getByRole("link", { name: "Financial foundation, Delivered" }),
    ).toHaveAttribute("href", "#modules/CP-1");
    expect(within(nav).getByRole("link", { name: /^Fundamental credit, / })).toHaveAttribute(
      "href",
      "#modules/CP-2",
    );
  });

  it("draws no section list and watches no scroll position on the module page", async () => {
    vi.stubGlobal("IntersectionObserver", FakeObserver);
    useSnapshot();
    open("#modules/CP-1");
    await modulesNav();
    expect(screen.queryByRole("list", { name: "On this page" })).toBeNull();
    expect(screen.queryByLabelText("Jump to section")).toBeNull();
    expect(observers.filter((item) => item.observed.length > 0)).toHaveLength(0);
  });

  it("opens the module page of a clicked link and moves the current mark to it", async () => {
    useSnapshot();
    open("#modules/CP-1");
    const nav = await modulesNav();
    fireEvent.click(within(nav).getByRole("link", { name: /^Fundamental credit, / }));
    await waitFor(() => {
      expect(window.location.hash).toBe("#modules/CP-2");
    });
    expect(
      await screen.findByRole("heading", { level: 2, name: "Fundamental credit" }),
    ).toBeVisible();
    expect(current(await modulesNav())).toEqual([expect.stringMatching(/^Fundamental credit, /)]);
  });

  it("ends a module page with a link to the next module in stage order", async () => {
    useSnapshot();
    open("#modules/CP-1");
    await modulesNav();
    expect(screen.getByRole("link", { name: "Next module: Fundamental credit" })).toHaveAttribute(
      "href",
      "#modules/CP-2",
    );
  });
});

describe("report wayfinding", () => {
  it("marks Overview as the current tab on the calendar", async () => {
    useSnapshot();
    open("#calendar");
    const nav = await screen.findByRole("navigation", { name: "Report sections" });
    const current = within(nav)
      .getAllByRole("link")
      .filter((link) => link.getAttribute("aria-current") === "page");
    expect(current.map((link) => link.textContent)).toEqual(["Overview"]);
  });

  it("keeps the reader on Forecast when the skip link is activated", async () => {
    useSnapshot();
    open("#forecast");
    await screen.findByRole("navigation", { name: "Report sections" });
    // jsdom does not navigate to a fragment, so a hash or tab assertion cannot fail here. A
    // cancelled click is what stops a browser from changing the hash and so the tab.
    expect(fireEvent.click(screen.getByRole("link", { name: "Skip to content" }))).toBe(false);
    expect(document.activeElement).toBe(screen.getByRole("main"));
  });

  it("keeps the six report tabs at least 44px tall on a phone", async () => {
    useSnapshot();
    open("");
    const nav = await screen.findByRole("navigation", { name: "Report sections" });
    const links = within(nav).getAllByRole("link");
    expect(links).toHaveLength(6);
    for (const link of links) expect(link).toHaveClass("max-[480px]:min-h-11");
  });

  it("offers the History tab and no Report history link", async () => {
    useSnapshot();
    open("");
    const nav = await screen.findByRole("navigation", { name: "Report sections" });
    expect(within(nav).getByRole("link", { name: "History" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Report history" })).toBeNull();
  });

  it("titles the document by page and issuer, and restores it on unmount", async () => {
    useSnapshot("Caesars Entertainment");
    window.history.replaceState(null, "", "/report/northbridge-2026#forecast");
    const view = render(<ConnectedApp path="/report/northbridge-2026" mode="synthetic" />);
    await screen.findByRole("navigation", { name: "Report sections" });
    expect(document.title).toBe("Forecast — Caesars Entertainment — Credit OS");
    act(() => {
      window.location.hash = "#calendar";
    });
    await waitFor(() => {
      expect(document.title).toBe("Issuer calendar — Caesars Entertainment — Credit OS");
    });
    view.unmount();
    expect(document.title).toBe("Credit OS");
  });
});
