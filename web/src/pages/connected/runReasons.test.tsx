import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConnectedApp } from "./ConnectedApp";

const REASON = "the delivery does not record CP-1's handoff and CP-2D is missing";
const PLAIN =
  "the delivery does not record Financial foundation's handoff and Liquidity is missing";

function serve(entries: Record<string, unknown>) {
  vi.stubGlobal(
    "fetch",
    vi.fn((path: string) => {
      if (!Object.hasOwn(entries, path)) throw new Error(`Unexpected request ${path}`);
      return Promise.resolve(Response.json(entries[path]));
    }),
  );
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("a reason the service wrote is drawn in the reader's words", () => {
  const live = {
    id: "harbour-2026-11",
    issuer_name: "Harbour Packaging",
    pathway: "credit_snapshot",
    status: "queued",
    reason: "waiting for CP-1",
    submitted_by: "",
    started_at: "",
    name_differs: false,
    stalled: false,
    files: 1,
    modules: [["CP-0", "waiting"]],
  };

  it("names modules in Run activity's ended table, held note and waiting note", async () => {
    serve({
      "/connected/activity": {
        updated: "2026-11-17T08:00:00Z",
        held: "held while CP-1 is rebuilt",
        runs: [live],
        ended: [
          {
            id: "20261117-000000-33",
            issuer_name: "Alpha",
            pathway: "credit_snapshot",
            status: "failed",
            reason: `not listed: ${REASON}`,
            ended_at: "2026-11-17T07:10:00Z",
            submitted_by: "",
          },
        ],
        ended_total: 1,
      },
    });
    render(<ConnectedApp path="/runs" mode="synthetic" />);
    const ended = await screen.findByRole("region", { name: "Ended without a report" });
    expect(await within(ended).findByText(`not listed: ${PLAIN}`)).toBeVisible();
    expect(screen.getByText("held while Financial foundation is rebuilt")).toBeVisible();
    expect(screen.getByText("waiting for Financial foundation")).toBeVisible();
    expect(document.body).not.toHaveTextContent(/\bCP-/);
  });

  it("names modules in a running card's note", async () => {
    serve({
      "/connected/activity": {
        updated: "2026-11-17T08:00:00Z",
        held: "",
        runs: [{ ...live, status: "running", reason: "paused at CP-2D" }],
      },
    });
    render(<ConnectedApp path="/runs" mode="synthetic" />);
    expect(await screen.findByText("paused at Liquidity")).toBeVisible();
    expect(document.body).not.toHaveTextContent(/\bCP-/);
  });

  it("names modules in a run page's reason and held note", async () => {
    const run = {
      id: "test-run",
      status: "running",
      issuer_name: "Alpha",
      pathway: "credit_snapshot",
      modules: [["CP-0", "done"]],
      as_of: "2026-10-31",
      cap: "25",
      spent: "0",
      started_at: "2026-11-17T07:00:00Z",
      observed_at: "2026-11-17T08:00:00Z",
      events: [],
      reason: `not listed: ${REASON}`,
      held_reason: "held while CP-1 is rebuilt",
    };
    serve({ "/connected/activity/test-run": run });
    render(<ConnectedApp path="/run/test-run" mode="synthetic" />);
    expect(await screen.findByText(`not listed: ${PLAIN}`)).toBeVisible();
    expect(screen.getByText("held while Financial foundation is rebuilt")).toBeVisible();
    expect(document.body).not.toHaveTextContent(/\bCP-/);
  });
});
