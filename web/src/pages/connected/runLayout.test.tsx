import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConnectedApp } from "./ConnectedApp";
import { RunActivity, RunReadOnly } from "./RunActivity";

const ID = "20261124-210000-01";
const run = {
  id: ID,
  status: "running",
  issuer_name: "Northbridge",
  as_of: "2025-03-31",
  pathway: "credit_snapshot",
  modules: [
    ["CP-0", "done"],
    ["CP-1", "running"],
    ["CP-4", "waiting"],
    ["Report", "waiting"],
  ],
  cap: "25",
  spent: "7.4",
  settled_spent: "6.1",
  held: "1.3",
  started_at: "2026-11-24T21:00:00Z",
  observed_at: "2026-11-24T21:04:10Z",
  events: [{ kind: "module_started", at: "2026-11-24T21:03:00Z", module: "CP-1" }],
  reason: "",
};

function serve(body: unknown, status = 200) {
  vi.stubGlobal(
    "fetch",
    vi.fn(() => Promise.resolve(Response.json(body, { status }))),
  );
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("Run progress layout", () => {
  it("draws the live run as the staged pipeline with the Report as its own last stage", async () => {
    serve(run);
    render(<ConnectedApp path={`/run/${ID}`} mode="live" />);
    const pipeline = await screen.findByRole("list", { name: "Modules in this run" });
    expect(
      within(pipeline)
        .getAllByRole("heading", { level: 3 })
        .map((heading) => heading.textContent),
    ).toEqual(["Sources1", "Financials1", "Structure and market1", "Report delivery1"]);
    const running = within(pipeline).getByText("Financial foundation").closest("li");
    expect(running).toHaveTextContent("Running");
    expect(running).toHaveAttribute("aria-current", "step");
    expect(running?.querySelector("[data-edge='running']")).toHaveClass("pipeline-flow");
    // Only the path into the running module moves.
    expect(pipeline.querySelectorAll(".pipeline-flow")).toHaveLength(1);
  });

  it("makes the pipeline the h2 of its region, with the stage names beneath it", async () => {
    serve(run);
    render(<ConnectedApp path={`/run/${ID}`} mode="live" />);
    await screen.findByRole("list", { name: "Modules in this run" });
    const region = screen.getByRole("region", { name: "Pipeline" });
    expect(
      within(region).getByRole("heading", { level: 2, name: "Module pipeline" }),
    ).toBeVisible();
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBeGreaterThan(0);
    expect(screen.queryAllByRole("heading").map((h) => h.tagName)).not.toContain("H4");
  });

  it("moves nothing on a run that has ended", async () => {
    serve({
      ...run,
      status: "capped",
      reason: "Stopped at the cap.",
      ended_at: "2026-11-24T21:05:00Z",
    });
    render(<ConnectedApp path={`/run/${ID}`} mode="live" />);
    const pipeline = await screen.findByRole("list", { name: "Modules in this run" });
    expect(pipeline.querySelector(".pipeline-flow, .pipeline-flow-y")).toBeNull();
  });

  it("draws spend against the cap as one meter with a visible track and the cap marked", async () => {
    serve(run);
    render(<ConnectedApp path={`/run/${ID}`} mode="live" />);
    const amount = await screen.findByText("USD 7.40");
    expect(amount).toHaveClass("font-mono");
    const region = screen.getByRole("region", { name: "Spend" });
    const meter = within(region).getByRole("progressbar", {
      name: /USD 7.40 of USD 25.00 cap usage/,
    });
    expect(meter).toHaveClass("border", "bg-surface-subtle");
    expect(within(region).getByText("Cap USD 25.00")).toBeVisible();
    // One meter in the tile; the modules' progress is the pipeline's own.
    expect(within(region).getAllByRole("progressbar")).toHaveLength(1);
    expect(screen.getByRole("progressbar", { name: "1 of 3 modules" })).toBeVisible();
    expect(screen.queryByText("Synthetic test")).toBeNull();
  });

  it("puts spend before the pipeline in reading order, beside it from lg up", async () => {
    serve(run);
    render(<ConnectedApp path={`/run/${ID}`} mode="live" />);
    const spend = await screen.findByRole("region", { name: "Spend" });
    const pipeline = screen.getByRole("region", { name: "Pipeline" });
    expect(spend.compareDocumentPosition(pipeline) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(spend).toHaveClass("lg:col-start-10", "lg:row-start-1");
    expect(pipeline).toHaveClass("lg:col-start-1", "lg:row-start-1");
  });

  it("draws the loading page in the same layout as the loaded one", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => new Promise(() => undefined)),
    );
    const { unmount } = render(<ConnectedApp path={`/run/${ID}`} mode="synthetic" />);
    const loading = (
      await screen.findByRole("status", { name: "Loading run progress" })
    ).querySelectorAll("section");
    const shapes = [...loading].map((tile) => [tile.getAttribute("aria-label"), tile.className]);
    unmount();
    vi.unstubAllGlobals();
    serve(run);
    render(<ConnectedApp path={`/run/${ID}`} mode="synthetic" />);
    await screen.findByRole("list", { name: "Modules in this run" });
    for (const [label, classes] of shapes) {
      expect(screen.getByRole("region", { name: label ?? "" }).className).toBe(classes);
    }
  });

  it("marks a synthetic run from the first paint, before the run has loaded", () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => new Promise(() => undefined)),
    );
    render(<ConnectedApp path={`/run/${ID}`} mode="synthetic" />);
    expect(screen.getByText("Synthetic test")).toBeVisible();
    expect(screen.getByRole("status", { name: "Loading run progress" })).toBeVisible();
  });

  const stopped = {
    ...run,
    status: "failed",
    stopped_by: "checker",
    reason: "The checks rejected a draft.",
    ended_at: "2026-11-24T21:03:30Z",
  };

  it("names only the earliest unaccepted module when the checks stopped a run with several in flight", async () => {
    serve({
      ...stopped,
      modules: [
        ["CP-0", "done"],
        ["CP-2", "stopped"],
        ["CP-3", "stopped"],
        ["CP-4", "stopped"],
        ["Report", "waiting"],
      ],
      events: [
        { kind: "module_started", at: "2026-11-24T21:03:00Z", module: "CP-2" },
        { kind: "module_started", at: "2026-11-24T21:03:01Z", module: "CP-3" },
        { kind: "module_started", at: "2026-11-24T21:03:02Z", module: "CP-4" },
        { kind: "draft_rejected", at: "2026-11-24T21:03:20Z", module: "CP-2" },
        { kind: "stopped", at: "2026-11-24T21:03:30Z" },
      ],
    });
    render(<ConnectedApp path={`/run/${ID}`} mode="live" />);
    const alert = await screen.findByRole("alert");
    expect(within(alert).getByText(/Where it stopped: Fundamental credit\./)).toBeVisible();
    expect(alert).not.toHaveTextContent("Security selection");
    expect(alert).not.toHaveTextContent("Where it stopped: Fundamental credit, ");
  });

  it("draws the stop notice, with its action inside, when the record gives no reason", async () => {
    serve({ ...stopped, reason: "" });
    render(<ConnectedApp path={`/run/${ID}`} mode="live" />);
    const alert = await screen.findByRole("alert");
    expect(within(alert).getByText("Run failed.")).toBeVisible();
    expect(within(alert).getByText("The run record gives no reason.")).toBeVisible();
    const again = within(alert).getByRole("link", { name: "Use this run’s inputs" });
    expect(again).toHaveAttribute("href", `/start?from=${ID}`);
    // One such control, not one in the header as well.
    expect(screen.getAllByRole("link", { name: "Use this run’s inputs" })).toHaveLength(1);
  });

  it("says where a stopped run stopped and what to do, inside its notice", async () => {
    serve({
      ...stopped,
      modules: [
        ["CP-0", "done"],
        ["CP-4", "stopped"],
        ["Report", "waiting"],
      ],
      events: [
        { kind: "module_started", at: "2026-11-24T21:03:00Z", module: "CP-4" },
        { kind: "stopped", at: "2026-11-24T21:03:30Z" },
      ],
    });
    render(<ConnectedApp path={`/run/${ID}`} mode="live" />);
    const alert = await screen.findByRole("alert");
    expect(within(alert).getByText(/Where it stopped: Legal & covenants\./)).toBeVisible();
    expect(within(alert).getByText(/Review the inputs in a new draft/)).toBeVisible();
    expect(screen.queryByRole("link", { name: "Open report" })).toBeNull();
  });

  it("draws the three tiles as gaps, not blanks or zeros, when the service cannot be reached", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.reject(new TypeError("Failed to fetch"))),
    );
    render(<ConnectedApp path={`/run/${ID}`} mode="live" />);
    expect(await screen.findByText("The service cannot be reached")).toBeVisible();
    expect(screen.getByText("Progress is not known while this run cannot be read.")).toBeVisible();
    expect(screen.getByText("Spend is not known.")).toBeVisible();
    expect(screen.queryByText(/USD 0/)).toBeNull();
  });
});

describe("Run activity layout", () => {
  const live = (id: string, issuer: string) => ({
    id,
    issuer_name: issuer,
    pathway: "credit_snapshot",
    status: "running",
    reason: "",
    submitted_by: "",
    started_at: "",
    name_differs: false,
    stalled: false,
    files: 1,
    modules: [
      ["CP-0", "done"],
      ["CP-1", "running"],
    ],
  });

  it("draws runs in flight before the runs that ended, with modules done of total in mono", async () => {
    serve({
      updated: "2026-11-24T21:04:10Z",
      held: "",
      runs: [live("a", "Alder Metals")],
      ended: [
        {
          id: "b",
          issuer_name: "Birch Retail",
          pathway: "credit_snapshot",
          status: "failed",
          reason: "The checks rejected a draft.",
          ended_at: "2026-11-23T10:00:00Z",
          submitted_by: "",
        },
      ],
      ended_total: 1,
    });
    render(<RunActivity mode="synthetic" />);
    const running = await screen.findByRole("region", { name: "Running" });
    expect(within(running).getByText("1 of 2")).toHaveClass("font-mono");
    const ended = screen.getByRole("region", { name: "Ended without a report" });
    expect(running.compareDocumentPosition(ended) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    // The reason is on the row, in words, beside the state.
    const row = within(ended).getByRole("link", { name: "Birch Retail" }).closest("tr");
    expect(row).toHaveTextContent("Failed");
    expect(row).toHaveTextContent("The checks rejected a draft.");
    expect(screen.getByText("Synthetic test")).toBeVisible();
  });

  it("draws no synthetic chip for a live service", async () => {
    serve({ updated: "2026-11-24T21:04:10Z", held: "", runs: [], ended: [] });
    render(<RunActivity mode="live" />);
    expect(await screen.findByText("No run in progress")).toBeVisible();
    expect(screen.queryByText("Synthetic test")).toBeNull();
  });

  it("explains a read-only preview as a gap with a way back", () => {
    render(<RunReadOnly />);
    expect(screen.getByRole("heading", { level: 1, name: "Run activity" })).toBeVisible();
    expect(screen.getByText(/not available in a read-only preview/)).toBeVisible();
    expect(screen.getByRole("link", { name: "Back to Library" })).toHaveAttribute("href", "/");
  });
});
