import { act, cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { ConnectedApp } from "./ConnectedApp";

const EMPTY = { catalogue: { real: [] }, workspace: { runs: {} } };
const ENTRY = {
  id: "alpha-2026-10",
  name: "Alpha Foods",
  issuer: "Alpha Foods",
  title: "Lite credit assessment",
  date: "2026-10-31",
  sector: "Food",
  period: "FY2026",
  metrics: {},
};
const FILLED = {
  catalogue: { real: [ENTRY] },
  workspace: {
    runs: { alpha: { folder: ENTRY.id, issuerKey: "alpha", pathway: "lite_credit_assessment" } },
  },
};

type Answer = () => Response;

/** Serves `/connected/library` from the answers in order, the last one again and again; counts requests. */
function serve(...answers: Answer[]) {
  const calls = { library: 0 };
  vi.stubGlobal(
    "fetch",
    vi.fn((path: string) => {
      if (path !== "/connected/library") throw new Error(`Unexpected request ${path}`);
      const answer = answers[Math.min(calls.library, answers.length - 1)];
      calls.library += 1;
      if (!answer) throw new Error("No answer given");
      return Promise.resolve(answer());
    }),
  );
  return calls;
}

const ok = (body: unknown) => () => Response.json(body);
const refused = () => Response.json({ error: "boom" }, { status: 500 });
const unreachable = () => {
  throw new TypeError("Failed to fetch");
};

// The page is a lazy chunk; load it once so the tests wait for the service, not the chunk.
beforeAll(async () => {
  await import("./LibraryIndex");
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

function open() {
  render(<ConnectedApp path="/" mode="synthetic" />);
}

/** The empty state the page shows: its root holds the icon, the title, the sentence and the action. */
async function emptyState() {
  const title = await screen.findByRole("heading", { level: 2, name: "No reports yet" });
  const root = title.parentElement?.parentElement;
  if (!root) throw new Error("The empty state has no root");
  return root;
}

describe.each([
  ["an index with no report", ok(EMPTY)],
  ["no index at all", ok(null)],
])("a library with nothing in it (%s)", (_name, answer) => {
  it("is the empty state: icon, title, one sentence and the next action", async () => {
    serve(answer);
    open();
    const root = await emptyState();
    expect(root.querySelector("svg")).not.toBeNull();
    expect(within(root).getByText(/appears here once a run has finished/)).toBeVisible();
    expect(within(root).getByRole("link", { name: "Start a run" })).toHaveAttribute(
      "href",
      "/start",
    );
  });

  it("offers no filter or layout control, because there is nothing to filter", async () => {
    serve(answer);
    open();
    await emptyState();
    expect(screen.queryByLabelText("Sector")).toBeNull();
    expect(screen.queryByLabelText("Pathway")).toBeNull();
    expect(screen.queryByLabelText("Search issuers")).toBeNull();
    expect(screen.queryByRole("radio")).toBeNull();
    expect(screen.queryByText("Cards")).toBeNull();
  });
});

describe("a library with a report", () => {
  it("keeps its filters and layout controls and draws no empty state", async () => {
    serve(ok(FILLED));
    open();
    expect(await screen.findByRole("heading", { name: "Alpha Foods" })).toBeVisible();
    expect(screen.getByLabelText("Sector")).toBeVisible();
    expect(screen.getByLabelText("Pathway")).toBeVisible();
    expect(screen.getByLabelText("Search issuers")).toBeVisible();
    expect(screen.getByText("Cards")).toBeVisible();
    expect(screen.queryByRole("heading", { name: "No reports yet" })).toBeNull();
  });
});

describe("a library that cannot be read", () => {
  it("says so in an alert with an icon and a Try again action, not a plain line", async () => {
    serve(refused);
    open();
    const alert = await screen.findByRole("alert");
    expect(within(alert).getByText("The library could not be loaded")).toBeVisible();
    expect(alert.querySelector("svg")).not.toBeNull();
    expect(within(alert).getByRole("button", { name: "Try again" })).toBeVisible();
    expect(screen.queryByText("The published library could not be loaded.")).toBeNull();
    expect(screen.queryByText("No reports yet")).toBeNull();
  });

  it("names a service that cannot be reached, never the browser's own word", async () => {
    serve(unreachable);
    open();
    const alert = await screen.findByRole("alert");
    expect(within(alert).getByText("The service cannot be reached")).toBeVisible();
    expect(within(alert).getByRole("button", { name: "Try again" })).toBeVisible();
    expect(document.body).not.toHaveTextContent("Failed to fetch");
  });

  it("asks again on Try again, keeps the alert until the answer, then shows the library", async () => {
    const calls = serve(refused, ok(FILLED));
    open();
    const alert = await screen.findByRole("alert");
    expect(calls.library).toBe(1);
    await act(async () => {
      within(alert).getByRole("button", { name: "Try again" }).click();
      await Promise.resolve();
    });
    expect(await screen.findByRole("heading", { name: "Alpha Foods" })).toBeVisible();
    expect(calls.library).toBe(2);
    expect(screen.queryByRole("alert")).toBeNull();
  });

  it("keeps the alert when the second answer is a failure too", async () => {
    const calls = serve(refused, refused);
    open();
    const alert = await screen.findByRole("alert");
    await act(async () => {
      within(alert).getByRole("button", { name: "Try again" }).click();
      await Promise.resolve();
    });
    expect(calls.library).toBe(2);
    expect(screen.getByRole("alert")).toHaveTextContent("The library could not be loaded");
    expect(screen.getByRole("button", { name: "Try again" })).toBeVisible();
  });
});
