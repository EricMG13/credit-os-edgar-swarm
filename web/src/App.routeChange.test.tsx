import { readFileSync } from "node:fs";
import path from "node:path";
import { act, cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { App } from "./App";
import type { LoadResult } from "./data";

// S1-002 and the findings merged into it: the static app routes on the hash, so a page change
// reloads nothing. The page must still be named in the tab and the history list, open at its top,
// and give keyboard focus and a screen reader a place to start.
type Fixture = { issuers?: { id: string; name: string }[]; slice?: unknown };
const read = (group: string): Fixture =>
  JSON.parse(
    readFileSync(path.join(import.meta.dirname, "../fixtures", `${group}.json`), "utf8"),
  ) as Fixture;
const library = read("library");

const ok: LoadResult = {
  kind: "ok",
  data: {
    schema: "credit-os-data/1",
    issuers: library.issuers ?? [],
    library: library.slice,
    model: read("model").slice,
    run: read("run").slice,
    signal: read("signal").slice,
  },
};

const HALDEN = "#/library/halden-aerostructures";
const RUN = `${HALDEN}/2026-09-30`;
const OVERVIEW = `${RUN}/overview`;
const CHANGES = `${RUN}/changes`;
const TRACE = `${RUN}/evidence/trace`;

// jsdom lays nothing out and has no scrollIntoView, which the trace item page calls on arrival.
beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn();
});

afterEach(() => {
  cleanup();
  document.title = "";
  window.location.hash = "";
});

const settle = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 30);
  });

/** Opens `hash` as a page load does: nothing is shown first, and no route change is announced. */
function open(hash: string, result: LoadResult = ok) {
  window.location.hash = hash;
  return render(<App result={result} />);
}

/** Follows an address: the hash changes and React draws the new page. */
async function follow(hash: string) {
  await act(async () => {
    window.location.hash = hash;
    await settle();
  });
}

async function travel(step: "back" | "forward") {
  await act(async () => {
    window.history[step]();
    await settle();
  });
}

const announcement = () => document.querySelector("[aria-live=polite]")?.textContent;

describe("the document title", () => {
  it.each([
    ["#/library/home", "Library — Credit OS"],
    [`${HALDEN}/history`, "Report history — Halden Aerostructures — Credit OS"],
    [OVERVIEW, "Overview — Halden Aerostructures — As of 30 Sep 2026 — Credit OS"],
    [
      `${HALDEN}/2026-06-30/changes`,
      "Changes — Halden Aerostructures — As of 30 Jun 2026 — Credit OS",
    ],
    [
      `${RUN}/modules/capital-structure`,
      "Modules — Capital structure — Halden Aerostructures — As of 30 Sep 2026 — Credit OS",
    ],
    [
      `${RUN}/modules`,
      "Modules — Business profile — Halden Aerostructures — As of 30 Sep 2026 — Credit OS",
    ],
    [
      `${RUN}/evidence`,
      "Evidence — Summary — Halden Aerostructures — As of 30 Sep 2026 — Credit OS",
    ],
    [TRACE, "Evidence — Trace — Halden Aerostructures — As of 30 Sep 2026 — Credit OS"],
    [`${TRACE}/T-0014`, "Evidence — Trace — Halden Aerostructures — As of 30 Sep 2026 — Credit OS"],
    [
      `${RUN}/evidence/gaps`,
      "Evidence — Gaps — Halden Aerostructures — As of 30 Sep 2026 — Credit OS",
    ],
    [
      `${RUN}/evidence/record`,
      "Evidence — Record — Halden Aerostructures — As of 30 Sep 2026 — Credit OS",
    ],
    ["#/model/runs", "Financial models — Credit OS"],
    [
      "#/model/transdigm/2025-06-30/front",
      "Front page — TransDigm Group — As of 30 June 2025 — Credit OS",
    ],
    [
      "#/model/transdigm/2025-06-30/forecast",
      "Forecast — TransDigm Group — As of 30 June 2025 — Credit OS",
    ],
    ["#/run/start/start", "Start a run — Credit OS"],
    ["#/run/activity/finished", "Run activity — Credit OS"],
    ["#/kit", "Component kit — Credit OS"],
    ["#/nowhere", "Page not found — Credit OS"],
  ])("at %s reads %j", (hash, title) => {
    open(hash);
    expect(document.title).toBe(title);
  });

  it("names the page and no issuer when the address names an issuer or run the library lacks", () => {
    open(`${HALDEN}/1999-01-01/overview`);
    expect(document.title).toBe("Overview — Credit OS");
    cleanup();
    open("#/library/no-such-issuer/history");
    expect(document.title).toBe("Report history — Credit OS");
  });

  it.each([
    ["no data file", { kind: "missing" } as const, "#/", "Library — Credit OS"],
    ["no data file", { kind: "missing" } as const, "#/model", "Financial models — Credit OS"],
    [
      "a newer data file",
      { kind: "newer", schema: "credit-os-data/2" } as const,
      "#/",
      "Library — Credit OS",
    ],
    ["no data file", { kind: "missing" } as const, "#/kit", "Component kit — Credit OS"],
    ["no data file", { kind: "missing" } as const, "#/nowhere", "Page not found — Credit OS"],
  ])("with %s at %s reads %j", (_, result, hash, title) => {
    open(hash, result);
    expect(document.title).toBe(title);
  });

  it("follows the page through a route change", async () => {
    open(OVERVIEW);
    await follow(CHANGES);
    expect(document.title).toBe("Changes — Halden Aerostructures — As of 30 Sep 2026 — Credit OS");
    await follow(`${RUN}/modules/recovery`);
    expect(document.title).toBe(
      "Modules — Recovery — Halden Aerostructures — As of 30 Sep 2026 — Credit OS",
    );
  });
});

describe("focus and the spoken name on a route change", () => {
  it("leaves focus and the spoken name alone on first load", () => {
    open(OVERVIEW);
    expect(document.activeElement).toBe(document.body);
    expect(announcement()).toBe("");
  });

  it("moves focus from a rail link to the page and says the new page's name", async () => {
    open(OVERVIEW);
    const rail = screen.getByRole("link", { name: "Model" });
    rail.focus();
    expect(document.activeElement).toBe(rail);
    await follow("#/model/runs");
    expect(document.activeElement).toBe(screen.getByRole("main"));
    expect(announcement()).toBe("Financial models — Credit OS");
  });

  it("moves focus off the body when the control that held it has gone", async () => {
    open(OVERVIEW);
    await follow(CHANGES);
    expect(document.activeElement).toBe(screen.getByRole("main"));
    expect(announcement()).toBe("Changes — Halden Aerostructures — As of 30 Sep 2026 — Credit OS");
  });

  it("does the same for a module chosen in the navigator and an Evidence tab", async () => {
    open(`${RUN}/modules/business-profile`);
    await follow(`${RUN}/modules/capital-structure`);
    expect(document.activeElement).toBe(screen.getByRole("main"));
    expect(announcement()).toMatch(/^Modules — Capital structure — /);
    await follow(TRACE);
    await follow(`${RUN}/evidence/gaps`);
    expect(document.activeElement).toBe(screen.getByRole("main"));
    expect(announcement()).toMatch(/^Evidence — Gaps — /);
  });

  it("keeps focus where the page put it, the row an item address names", async () => {
    open(TRACE);
    await follow(`${TRACE}/T-0014`);
    const main = screen.getByRole("main");
    expect(document.activeElement).not.toBe(main);
    expect(main).toContainElement(document.activeElement as HTMLElement);
    // T-0014 is the row "Net leverage 4.6x": the page focuses its derivation control.
    expect(document.activeElement).toHaveAccessibleName("Show how Net leverage 4.6x was derived");
  });

  // J6-003 and S4-004: Enter on a tab replaces the page, and with it the tab. The reader's place is
  // the tab, so the next Tab is the next tab, not the top of the page.
  const activate = async (link: HTMLElement) => {
    link.focus();
    await act(async () => {
      fireEvent.click(link);
      await settle();
    });
  };

  it("keeps focus on a run tab the reader used, drawn again by the page it opened", async () => {
    open(OVERVIEW);
    const tabs = screen.getByRole("navigation", { name: "Run pages" });
    await activate(within(tabs).getByRole("link", { name: "Changes" }));
    expect(window.location.hash).toBe(CHANGES);
    const again = within(screen.getByRole("navigation", { name: "Run pages" })).getByRole("link", {
      name: "Changes",
    });
    expect(again).toHaveAttribute("aria-current", "page");
    expect(document.activeElement).toBe(again);
    expect(announcement()).toBe("Changes — Halden Aerostructures — As of 30 Sep 2026 — Credit OS");
  });

  it("keeps focus on an Evidence tab the reader used", async () => {
    open(`${RUN}/evidence/summary`);
    await activate(
      within(screen.getByRole("navigation", { name: "Evidence sections" })).getByRole("link", {
        name: /^Trace/,
      }),
    );
    expect(window.location.hash).toBe(TRACE);
    expect(document.activeElement).toHaveAttribute("aria-current", "page");
    expect(document.activeElement).toHaveTextContent(/^Trace/);
  });

  it("keeps focus on the module the reader chose in the navigator", async () => {
    open(`${RUN}/modules/business-profile`);
    await activate(screen.getByRole("link", { name: /^Capital structure,/ }));
    expect(window.location.hash).toBe(`${RUN}/modules/capital-structure`);
    expect(document.activeElement).toHaveAccessibleName(/^Capital structure,/);
    expect(document.activeElement).toHaveAttribute("aria-current", "page");
  });

  it("puts focus on that link without scrolling the page away from its name", async () => {
    // A long navigator keeps the chosen module below the first screen: the focus must not carry
    // main down to it (S3-001: the new module opens at its name and bottom line).
    open(`${RUN}/modules/business-profile`);
    const link = screen.getByRole("link", { name: /^Capital structure,/ });
    const focus = vi.spyOn(HTMLElement.prototype, "focus");
    try {
      await activate(link);
      const index = focus.mock.contexts.lastIndexOf(document.activeElement);
      expect(index).toBeGreaterThanOrEqual(0);
      expect(focus.mock.calls[index]).toEqual([{ preventScroll: true }]);
    } finally {
      focus.mockRestore();
    }
  });

  it("falls back to the page when the link the reader used is not drawn again", async () => {
    open(OVERVIEW);
    await activate(within(screen.getByRole("main")).getByRole("link", { name: "Library" }));
    expect(window.location.hash).toBe("#/library/home");
    expect(document.activeElement).toBe(screen.getByRole("main"));
  });
});

describe("scroll on a route change", () => {
  const scrollTo = (offset: number) => {
    const main = screen.getByRole("main");
    main.scrollTop = offset;
    fireEvent.scroll(main);
  };
  const offset = () => screen.getByRole("main").scrollTop;

  it("opens the page it follows at its top, not at the offset of the page it left", async () => {
    open(OVERVIEW);
    scrollTo(700);
    await follow(CHANGES);
    expect(offset()).toBe(0);
  });

  it("returns Back and Forward to the offset each page was left at", async () => {
    open(OVERVIEW);
    scrollTo(700);
    await follow(CHANGES);
    scrollTo(314);
    await travel("back");
    expect(window.location.hash).toBe(OVERVIEW);
    expect(offset()).toBe(700);
    await travel("forward");
    expect(window.location.hash).toBe(CHANGES);
    expect(offset()).toBe(314);
  });

  it("opens a page followed a second time at its top, not where it was left before", async () => {
    open(OVERVIEW);
    await follow(CHANGES);
    scrollTo(314);
    await follow(OVERVIEW);
    scrollTo(200);
    await follow(CHANGES);
    expect(offset()).toBe(0);
  });

  it("moves focus again on Back and says the page it returns to", async () => {
    open(OVERVIEW);
    await follow(CHANGES);
    screen.getByRole("link", { name: "Model" }).focus();
    await travel("back");
    expect(document.activeElement).toBe(screen.getByRole("main"));
    expect(announcement()).toBe("Overview — Halden Aerostructures — As of 30 Sep 2026 — Credit OS");
  });
});
