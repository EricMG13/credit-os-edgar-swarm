import { act, cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { ConnectedApp } from "./ConnectedApp";

const ID = "20261117-000000-77";
const RUN_URL = `/connected/activity/${ID}`;
const REPORT_URL = `/connected/report/${ID}`;
const REPORT = { id: ID, issuer: "alpha", asOf: "2026-10-31", pathway: "credit_snapshot" };

const finished = {
  id: ID,
  status: "finished",
  issuer_name: "Alpha",
  as_of: "2026-10-31",
  pathway: "credit_snapshot",
  modules: [
    ["CP-0", "done"],
    ["Report", "done"],
  ],
  cap: "25",
  spent: "0",
  settled_spent: "0",
  held: "0",
  started_at: "2026-10-31T17:31:00Z",
  ended_at: "2026-10-31T17:32:14Z",
  observed_at: "2026-10-31T17:35:00Z",
  events: [{ kind: "delivered", at: "2026-10-31T17:32:01Z" }],
  reason: "",
};

type Handler = () => Response;

/** Serves each path from a handler that may change between calls; counts every request. */
function serve(handlers: Record<string, Handler>) {
  const calls: Record<string, number> = {};
  vi.stubGlobal(
    "fetch",
    vi.fn((path: string) => {
      const handler = handlers[path];
      if (!handler) throw new Error(`Unexpected request ${path}`);
      calls[path] = (calls[path] ?? 0) + 1;
      return Promise.resolve(handler());
    }),
  );
  return calls;
}

const json =
  (body: unknown, status = 200) =>
  () =>
    Response.json(body, { status });

/** Moves the fake clock on and lets the page's promises settle inside act. */
async function wait(ms: number) {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(ms);
  });
}

function open() {
  render(<ConnectedApp path={`/run/${ID}`} mode="synthetic" />);
  return wait(50);
}

// The page is a lazy chunk; load it once, on the real clock, so the fake clock never waits for it.
beforeAll(async () => {
  await import("./RunProgress");
});

beforeEach(() => {
  vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout", "Date"] });
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe("a run address the service does not know", () => {
  it("says so in an alert with a way back, not the service's own word", async () => {
    serve({ [RUN_URL]: json({ error: "unknown run" }, 404) });
    await open();
    const alert = screen.getByRole("alert");
    expect(within(alert).getByText("This run was not found")).toBeVisible();
    expect(within(alert).getByRole("link", { name: "Back to Run activity" })).toHaveAttribute(
      "href",
      "/runs",
    );
    expect(document.body).not.toHaveTextContent("unknown run");
    // The heading is not the breadcrumb's own words.
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/^Run$/);
  });

  it("does not ask again", async () => {
    const calls = serve({ [RUN_URL]: json({ error: "unknown run" }, 404) });
    await open();
    await wait(10_000);
    expect(calls[RUN_URL]).toBe(1);
  });
});

describe("a service that cannot be reached", () => {
  it("says so, keeps trying, and offers Try again", async () => {
    let up = false;
    const calls = serve({
      [RUN_URL]: () => {
        if (!up) throw new TypeError("Failed to fetch");
        return Response.json(finished);
      },
      [REPORT_URL]: json(REPORT),
    });
    await open();
    const alert = screen.getByRole("alert");
    expect(within(alert).getByText("The service cannot be reached")).toBeVisible();
    expect(document.body).not.toHaveTextContent("Failed to fetch");
    const before = calls[RUN_URL] ?? 0;
    up = true;
    await act(async () => {
      within(alert).getByRole("button", { name: "Try again" }).click();
      await vi.advanceTimersByTimeAsync(50);
    });
    expect(calls[RUN_URL]).toBe(before + 1);
    expect(screen.queryByRole("alert")).toBeNull();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Alpha");
  });

  it("says the run could not be loaded when the service answers with an error", async () => {
    serve({ [RUN_URL]: json({ error: "run activity is unavailable" }, 500) });
    await open();
    const alert = screen.getByRole("alert");
    expect(within(alert).getByText("The run could not be loaded")).toBeVisible();
    expect(within(alert).getByRole("button", { name: "Try again" })).toBeVisible();
    expect(document.body).not.toHaveTextContent("run activity is unavailable");
  });
});

describe("a finished run whose report is not published", () => {
  it("waits a short while, then says no report was published and stops asking", async () => {
    const calls = serve({
      [RUN_URL]: json(finished),
      [REPORT_URL]: json({ error: "unknown report" }, 404),
    });
    await open();
    expect(screen.getByText(/Waiting for the report/)).toBeVisible();
    expect(screen.queryByRole("alert")).toBeNull();
    await wait(12_000);
    expect(screen.queryByText(/Waiting for the report/)).toBeNull();
    const alert = screen.getByRole("alert");
    expect(within(alert).getByText("No report was published for this run")).toBeVisible();
    expect(within(alert).getByRole("button", { name: "Check for report" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Use this run’s inputs" })).toHaveAttribute(
      "href",
      `/start?from=${ID}`,
    );
    const asked = calls[REPORT_URL];
    await wait(30_000);
    expect(calls[REPORT_URL]).toBe(asked);
    expect(asked).toBeLessThanOrEqual(8);
  });

  it("Check for report asks once more and opens the report when it has appeared", async () => {
    let published = false;
    const calls = serve({
      [RUN_URL]: json(finished),
      [REPORT_URL]: () =>
        published
          ? Response.json(REPORT)
          : Response.json({ error: "unknown report" }, { status: 404 }),
    });
    await open();
    await wait(12_000);
    const asked = calls[REPORT_URL] ?? 0;
    published = true;
    await act(async () => {
      screen.getByRole("button", { name: "Check for report" }).click();
      await vi.advanceTimersByTimeAsync(50);
    });
    expect(calls[REPORT_URL]).toBe(asked + 1);
    expect(screen.queryByRole("alert")).toBeNull();
    expect(screen.getByRole("link", { name: "Open report" })).toHaveAttribute(
      "href",
      `/report/${ID}`,
    );
  });

  it("Check for report with the report still missing answers at once and leaves the pressed button where it is", async () => {
    const calls = serve({
      [RUN_URL]: json(finished),
      [REPORT_URL]: json({ error: "unknown report" }, 404),
    });
    await open();
    await wait(12_000);
    const asked = calls[REPORT_URL] ?? 0;
    const button = screen.getByRole("button", { name: "Check for report" });
    button.focus();
    await act(async () => {
      button.click();
      await vi.advanceTimersByTimeAsync(50);
    });
    expect(calls[REPORT_URL]).toBe(asked + 1);
    expect(screen.queryByText(/Waiting for the report/)).toBeNull();
    expect(screen.getByRole("button", { name: "Check for report" })).toBe(button);
    expect(document.activeElement).toBe(button);
    await wait(30_000);
    expect(calls[REPORT_URL]).toBe(asked + 1);
  });

  it("keeps one alert in place while the report keeps failing", async () => {
    const calls = serve({
      [RUN_URL]: json(finished),
      [REPORT_URL]: json({ error: "internal error" }, 500),
    });
    const added: string[] = [];
    const removed: string[] = [];
    const watch = new MutationObserver((records) => {
      for (const record of records) {
        for (const [nodes, into] of [
          [record.addedNodes, added],
          [record.removedNodes, removed],
        ] as const)
          nodes.forEach((node) => {
            if (
              node instanceof Element &&
              (node.matches("[role=alert]") || node.querySelector("[role=alert]"))
            )
              into.push(node.textContent);
          });
      }
    });
    watch.observe(document.body, { childList: true, subtree: true });
    await open();
    await wait(9_000);
    watch.takeRecords();
    watch.disconnect();
    expect(calls[REPORT_URL]).toBeGreaterThanOrEqual(3);
    expect(screen.getAllByRole("alert")).toHaveLength(1);
    expect(screen.getByText("The report could not be loaded")).toBeVisible();
    expect(added).toHaveLength(1);
    expect(removed).toHaveLength(0);
  });

  it("decides once per look whether the wait is over, so no clock reading leaves the page waiting without a timer", async () => {
    // Every reading of the clock moves it on 5 s. A page that reads it twice in one look (once to
    // choose the state, once to choose whether to ask again) sees the 10 s wait end between the
    // two readings, shows "Waiting" and sets no timer.
    let now = 1_000_000;
    const clock = vi.spyOn(Date, "now").mockImplementation(() => (now += 5000));
    try {
      serve({
        [RUN_URL]: json(finished),
        [REPORT_URL]: json({ error: "unknown report" }, 404),
      });
      await open();
      expect(screen.getByText(/Waiting for the report/)).toBeVisible();
      await wait(2100);
      expect(screen.queryByText(/Waiting for the report/)).toBeNull();
      expect(
        within(screen.getByRole("alert")).getByText("No report was published for this run"),
      ).toBeVisible();
    } finally {
      clock.mockRestore();
    }
  });
});

describe("a run that stopped", () => {
  const events = [
    { kind: "module_started", at: "2026-10-31T17:31:10Z", module: "CP-4" },
    { kind: "draft_rejected", at: "2026-10-31T17:31:20Z", module: "CP-4" },
    { kind: "draft_rejected", at: "2026-10-31T17:31:30Z", module: "CP-4" },
    { kind: "draft_rejected", at: "2026-10-31T17:31:40Z", module: "CP-4" },
    { kind: "stopped", at: "2026-10-31T17:31:41Z" },
  ];
  const stopped = {
    ...finished,
    status: "failed",
    reason: "The run stopped because a module's answer did not pass the checks. Start it again.",
    stopped_by: "checker",
    modules: [
      ["CP-0", "done"],
      ["CP-4", "stopped"],
      ["CP-2", "waiting"],
      ["Report", "waiting"],
    ],
    ended_at: "2026-10-31T17:31:41Z",
    events,
  };

  function row(name: string) {
    const modules = screen.getByRole("list", { name: "Modules in this run" });
    const item = within(modules).getByText(name, { selector: "span" }).closest("li");
    if (!item) throw new Error(`no row for ${name}`);
    return item;
  }

  it("reads a module the run stopped at as Not assessable, with what the record shows", async () => {
    serve({ [RUN_URL]: json(stopped) });
    await open();
    const legal = row("Legal & covenants");
    expect(legal).toHaveTextContent("Not assessable");
    expect(legal).not.toHaveTextContent("Interrupted");
    expect(legal).toHaveTextContent(
      "The run stopped here after the checks rejected its draft 3 times.",
    );
    expect(row("Fundamental credit")).toHaveTextContent("Not run");
    expect(row("Report")).toHaveTextContent("Not run");
  });

  it("draws the reason in an alert that says what it explains", async () => {
    serve({ [RUN_URL]: json(stopped) });
    await open();
    const alert = screen.getByRole("alert");
    expect(within(alert).getByText("Why this run ended without a report")).toBeVisible();
    expect(within(alert).getByText(stopped.reason)).toBeVisible();
  });

  it("draws a failed run's reason as an error and a capped run's as a warning", async () => {
    serve({ [RUN_URL]: json(stopped) });
    await open();
    expect(screen.getByRole("alert")).toHaveTextContent("Error:");
    cleanup();
    serve({
      [RUN_URL]: json({ ...stopped, status: "capped", reason: "Stopped at the spending cap." }),
    });
    await open();
    expect(screen.getByRole("alert")).toHaveTextContent("Warning:");
    expect(screen.getByRole("alert")).toHaveTextContent("Stopped at the spending cap.");
  });

  it("keeps Interrupted for a run the service lost", async () => {
    serve({ [RUN_URL]: json({ ...stopped, status: "interrupted" }) });
    await open();
    expect(row("Legal & covenants")).toHaveTextContent("Interrupted");
    expect(row("Legal & covenants")).not.toHaveTextContent("Not assessable");
  });

  it("says a single rejection in the singular and none as none", async () => {
    serve({
      [RUN_URL]: json({
        ...stopped,
        events: [events[0], events[1], events[4]],
      }),
    });
    await open();
    expect(row("Legal & covenants")).toHaveTextContent(
      "The run stopped here after the checks rejected its draft once.",
    );
    cleanup();
    serve({ [RUN_URL]: json({ ...stopped, events: [events[0], events[4]] }) });
    await open();
    expect(row("Legal & covenants")).toHaveTextContent("The run stopped here.");
  });

  it("gives it only to the module the checks stopped, not to a module an earlier launch left stopped", async () => {
    // The first launch ended in delivery with the changes module not produced; the relaunch
    // stopped at the legal module on the checks.
    serve({
      [RUN_URL]: json({
        ...stopped,
        modules: [
          ["CP-4", "stopped"],
          ["CP-8", "stopped"],
          ["Report", "stopped"],
        ],
        events: [
          { kind: "module_started", at: "2026-10-31T17:20:00Z", module: "CP-8" },
          { kind: "delivery_started", at: "2026-10-31T17:20:10Z" },
          { kind: "stopped", at: "2026-10-31T17:20:11Z" },
          ...events,
        ],
      }),
    });
    await open();
    expect(row("Legal & covenants")).toHaveTextContent("Not assessable");
    for (const name of ["Changes since the last run", "Report"]) {
      expect(row(name)).toHaveTextContent("Interrupted");
      expect(row(name)).not.toHaveTextContent("Not assessable");
      expect(row(name)).not.toHaveTextContent("The run stopped here");
    }
  });

  it("does not give it when delivery failed with the changes module not produced", async () => {
    serve({
      [RUN_URL]: json({
        ...stopped,
        reason: "The run stopped for a reason the service did not classify.",
        stopped_by: "",
        modules: [
          ["CP-0", "done"],
          ["CP-8", "stopped"],
          ["Report", "stopped"],
        ],
        events: [
          { kind: "module_started", at: "2026-10-31T17:31:10Z", module: "CP-8" },
          { kind: "delivery_started", at: "2026-10-31T17:31:20Z" },
          { kind: "stopped", at: "2026-10-31T17:31:21Z" },
        ],
      }),
    });
    await open();
    for (const name of ["Changes since the last run", "Report"]) {
      expect(row(name)).toHaveTextContent("Interrupted");
      expect(row(name)).not.toHaveTextContent("Not assessable");
      expect(row(name)).not.toHaveTextContent("The run stopped here");
    }
  });

  it("does not give it when the scheduler failed the run after a clean exit", async () => {
    serve({
      [RUN_URL]: json({
        ...stopped,
        reason: "The run finished, but the library would not list it, so it has no report.",
        stopped_by: "",
        modules: [
          ["CP-0", "done"],
          ["CP-8", "stopped"],
          ["Report", "done"],
        ],
        events: [
          { kind: "module_started", at: "2026-10-31T17:31:10Z", module: "CP-8" },
          { kind: "delivery_started", at: "2026-10-31T17:31:20Z" },
          { kind: "delivered", at: "2026-10-31T17:31:30Z" },
        ],
      }),
    });
    await open();
    expect(row("Changes since the last run")).toHaveTextContent("Interrupted");
    expect(row("Changes since the last run")).not.toHaveTextContent("Not assessable");
    expect(row("Changes since the last run")).not.toHaveTextContent("The run stopped here");
    expect(row("Report")).toHaveTextContent("Finished");
  });

  it.each([
    ["a model provider's call", { stopped_by: "provider" }],
    ["the approval for paid model calls", { stopped_by: "ruling" }],
    ["an interruption", { stopped_by: "interrupted" }],
    [
      "a launcher that exited",
      {
        stopped_by: "",
        modules: [
          ["CP-0", "done"],
          ["CP-4", "running"],
        ],
      },
    ],
  ])(
    "keeps Interrupted, and does not blame the checks, when %s ended the run",
    async (_cause, change) => {
      serve({ [RUN_URL]: json({ ...stopped, ...change }) });
      await open();
      const legal = row("Legal & covenants");
      expect(legal).toHaveTextContent("Interrupted");
      expect(legal).not.toHaveTextContent("Not assessable");
      expect(legal).not.toHaveTextContent("The run stopped here");
      expect(legal).not.toHaveTextContent("checks rejected");
    },
  );
});
