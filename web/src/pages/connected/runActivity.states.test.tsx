import { act, cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { ConnectedApp } from "./ConnectedApp";

const live = (over: Record<string, unknown> = {}) => ({
  id: "20261117-000000-01",
  issuer_name: "Alpha",
  pathway: "credit_snapshot",
  status: "running",
  reason: "",
  submitted_by: "",
  started_at: "2026-11-17T07:00:00Z",
  name_differs: false,
  stalled: false,
  files: 2,
  modules: [
    ["CP-0", "done"],
    ["CP-1", "running"],
    ["Report", "waiting"],
  ],
  ...over,
});
const stopped = (over: Record<string, unknown> = {}) => ({
  id: "20261117-000000-01",
  issuer_name: "Alpha",
  pathway: "credit_snapshot",
  status: "failed",
  reason: "",
  ended_at: "2026-11-17T08:00:04Z",
  submitted_by: "",
  ...over,
});
const list = (runs: unknown[], ended: unknown[] = [], updated = "2026-11-17T08:00:00Z") => ({
  updated,
  held: "",
  unreadable: 0,
  runs,
  ended,
  ended_total: ended.length,
});

type Answer = () => Response;
const ok = (body: unknown) => () => Response.json(body);
const refused = () => Response.json({ error: "boom" }, { status: 500 });

/** Serves `/connected/activity` from the answers in order, the last one again and again. */
function serve(...answers: Answer[]) {
  let calls = 0;
  vi.stubGlobal(
    "fetch",
    vi.fn((path: string) => {
      if (path !== "/connected/activity") throw new Error(`Unexpected request ${path}`);
      const answer = answers[Math.min(calls, answers.length - 1)];
      calls += 1;
      if (!answer) throw new Error("No answer given");
      return Promise.resolve(answer());
    }),
  );
}

/** Moves the fake clock on and lets the page's promises settle inside act. */
async function wait(ms: number) {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(ms);
  });
}

function open() {
  render(<ConnectedApp path="/runs" mode="synthetic" />);
  return wait(50);
}

// The page is a lazy chunk; load it once, on the real clock, so the fake clock never waits for it.
beforeAll(async () => {
  await import("./RunActivity");
});

beforeEach(() => {
  vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout", "Date"] });
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe("a poll that fails", () => {
  it("on the first read is an alert with a way to the library, not the empty state", async () => {
    serve(refused);
    await open();
    const alert = screen.getByRole("alert");
    expect(within(alert).getByText("Run activity could not be read")).toBeVisible();
    expect(within(alert).getByText(/reads it again every few seconds/)).toBeVisible();
    expect(within(alert).getByRole("link", { name: "Open the library" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(alert.querySelector("svg")).not.toBeNull();
    expect(screen.queryByRole("heading", { name: "Run activity could not be read" })).toBeNull();
    expect(screen.queryByText("No run in progress")).toBeNull();
  });

  it("after a good read keeps the list and the counts, and says it could not refresh", async () => {
    serve(ok(list([live()])), refused, ok(list([live()])));
    await open();
    await wait(5000);
    expect(screen.getByRole("link", { name: "Alpha" })).toBeVisible();
    expect(screen.getByText("Running", { selector: "dt" }).nextElementSibling).toHaveTextContent(
      "1",
    );
    expect(screen.getByText("Updated 17 Nov 2026, 08:00 UTC")).toBeVisible();
    const alert = screen.getByRole("alert");
    expect(within(alert).getByText("Run activity could not be refreshed")).toBeVisible();
    expect(alert).toHaveTextContent("Showing the list as it was at 17 Nov 2026, 08:00 UTC");
    expect(within(alert).getByRole("link", { name: "Open the library" })).toBeVisible();
    await wait(5000);
    expect(screen.queryByRole("alert")).toBeNull();
    expect(screen.getByRole("link", { name: "Alpha" })).toBeVisible();
  });

  it("reads an answer without a list as a failed read, not as an empty list", async () => {
    serve(ok(list([live()])), ok({ updated: "2026-11-17T08:00:05Z", held: "" }));
    await open();
    await wait(5000);
    expect(screen.getByRole("alert")).toHaveTextContent("Run activity could not be refreshed");
    expect(screen.getByRole("link", { name: "Alpha" })).toBeVisible();
    expect(screen.queryByText("No run in progress")).toBeNull();
  });
});

describe("the tables of waiting and ended runs", () => {
  it("are not cut off by a panel that hides overflow", async () => {
    serve(
      ok(
        list(
          [live(), live({ id: "20261117-000000-02", issuer_name: "Beta", status: "queued" })],
          [stopped({ id: "20261110-000000-03", issuer_name: "Gamma" })],
        ),
      ),
    );
    await open();
    for (const name of ["Waiting runs", "Runs that ended without a report"]) {
      const group = screen.getByRole("grid", { name }).closest("section");
      for (
        let node = screen.getByRole("grid", { name }).parentElement;
        node && node !== group;
        node = node.parentElement
      )
        expect(node.className, `${name}: ${node.className}`).not.toMatch(/overflow-hidden/);
    }
  });
});
