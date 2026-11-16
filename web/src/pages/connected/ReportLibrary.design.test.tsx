import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConnectedApp } from "./ConnectedApp";
import { Changes } from "./report/Changes";
import type { Changes as PublishedChanges, PublishedRun, Snapshot } from "./publishedReport";

const EMPTY_EVIDENCE = {
  sources: [],
  unused: [],
  unrecorded: [],
  noSourcesModules: [],
  handoffs: [],
  zip: null,
  downloads: [],
  record: { hashes: [], instructions: [], calls: [], cap: null },
};

function librarySnapshot() {
  const north = {
    id: "northbridge-2026",
    name: "Northbridge",
    issuer: "Northbridge",
    title: "Full credit assessment",
    date: "2026-10-31",
    sector: "Industrials",
    period: "FY2026",
    metrics: {},
  };
  const south = {
    ...north,
    id: "southbridge-2026",
    name: "Southbridge",
    sector: "Retail",
  };
  const run = (entry: typeof north, pathway: string) => ({
    folder: entry.id,
    issuer: entry.issuer,
    issuerKey: entry.id,
    title: entry.title,
    period: entry.period,
    asOf: entry.date,
    pathway,
    modules: {},
    changes: { first_run: true },
    evidence: EMPTY_EVIDENCE,
  });
  return {
    catalogue: { real: [north, south] },
    workspace: {
      runs: {
        north: run(north, "credit_snapshot"),
        south: run(south, "lite_credit_assessment"),
      },
      outputs: {},
      handoffs: {},
      models: [],
    },
    chips: {},
  };
}

function useSnapshot(snapshot: unknown) {
  vi.stubGlobal(
    "fetch",
    vi.fn((path: string) => {
      if (path !== "/connected/snapshot") throw new Error(`Unexpected request ${path}`);
      return Promise.resolve(Response.json(snapshot));
    }),
  );
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  window.history.replaceState(null, "", "/");
});

describe("connected library and report design", () => {
  it("filters by sector and pathway and keeps filters available to reset an empty result", async () => {
    const snapshot = librarySnapshot() as unknown as Snapshot;
    const north = snapshot.workspace.runs.north;
    if (!north) throw new Error("Northbridge fixture is missing");
    north.issuerKey = "north-group";
    const northPrior = {
      id: "northbridge-2025",
      name: "Northbridge",
      issuer: "Northbridge",
      title: "Lite credit assessment",
      date: "2025-10-31",
      sector: "Retail",
      period: "FY2025",
      metrics: {},
    };
    snapshot.catalogue.real.push(northPrior);
    snapshot.workspace.runs.prior = {
      ...north,
      folder: northPrior.id,
      asOf: northPrior.date,
      pathway: "lite_credit_assessment",
    };
    useSnapshot(snapshot);
    render(<ConnectedApp path="/" mode="synthetic" />);
    expect(await screen.findByRole("heading", { name: "Northbridge" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Southbridge" })).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Sector"), { target: { value: "Retail" } });
    fireEvent.change(screen.getByLabelText("Pathway"), {
      target: { value: "Lite credit assessment" },
    });
    expect(screen.queryByRole("heading", { name: "Northbridge" })).toBeNull();
    fireEvent.change(screen.getByLabelText("Sector"), { target: { value: "all" } });
    fireEvent.change(screen.getByLabelText("Pathway"), { target: { value: "all" } });

    fireEvent.change(screen.getByLabelText("Sector"), { target: { value: "Industrials" } });
    expect(screen.queryByRole("heading", { name: "Southbridge" })).toBeNull();
    fireEvent.change(screen.getByLabelText("Pathway"), {
      target: { value: "Lite credit assessment" },
    });
    expect(screen.getByText("No issuers match these filters.")).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Sector"), { target: { value: "all" } });
    expect(screen.getByRole("heading", { name: "Southbridge" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("radio", { name: "List" }));
    expect(screen.getByRole("columnheader", { name: "Issuer" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("radio", { name: "Cards" }));
    expect(screen.getByRole("heading", { name: "Southbridge" })).toBeInTheDocument();

    cleanup();
    window.history.replaceState(null, "", "/report/northbridge-2026");
    render(<ConnectedApp path="/report/northbridge-2026" mode="synthetic" />);
    expect(await screen.findByText("Synthetic test")).toBeInTheDocument();
    expect(screen.getByText("Finished")).toBeInTheDocument();
  });

  it("switches Changes between cards and a table using the same published values", () => {
    const change = {
      pack: {
        prior: { run: "previous", as_of: "2025-10-31", pathway: "credit_snapshot" },
        current: { as_of: "2026-10-31", pathway: "credit_snapshot" },
        measures: [
          {
            key: "net_leverage",
            label: "Net leverage",
            prior: { value: "3.2", unit: "x", period: "FY2025" },
            current: { value: "3.8", unit: "x", period: "FY2026" },
            difference: "0.6",
            comparable: "yes",
          },
        ],
      },
      verdicts: {
        measures: { net_leverage: { kind: "comparable", label: "Comparable" } },
      },
    } as unknown as PublishedChanges;
    const run = {
      folder: "current",
      changes: change,
      modules: {},
      evidence: EMPTY_EVIDENCE,
    } as unknown as PublishedRun;
    const snapshot = { workspace: { runs: {} } } as unknown as Snapshot;
    render(<Changes snapshot={snapshot} run={run} entries={[]} change={change} />);
    expect(screen.getByText("Net leverage")).toBeInTheDocument();
    expect(screen.queryByRole("columnheader", { name: "Earlier" })).toBeNull();
    fireEvent.click(screen.getByRole("radio", { name: "Table" }));
    expect(screen.getByRole("columnheader", { name: "Earlier" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "3.2x (FY2025)" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "3.8x (FY2026)" })).toBeInTheDocument();
  });

  it("shows published calendar events under Dates to watch and keeps their evidence link", async () => {
    const snapshot = librarySnapshot() as unknown as Snapshot;
    const run = snapshot.workspace.runs.north;
    if (!run) throw new Error("Northbridge fixture is missing");
    const id = "northbridge-2026/outputs/CP-1.md";
    run.modules = { "CP-1": { outputs: [id], default: id } };
    snapshot.workspace.outputs[id] = {
      id,
      module: "CP-1",
      label: "Financial foundation",
      href: id,
      sha256: "handoff-digest",
      events: [{ lane: "Scheduled", table: 42 }],
      state: { established: true, declared: null },
    };
    snapshot.workspace.handoffs["handoff-digest"] = [
      {
        heading: "Events",
        level: 2,
        line: 40,
        blocks: [
          {
            type: "table",
            line: 42,
            headers: [
              "Event date",
              "Date precision",
              "Published",
              "Event",
              "Status",
              "Source",
              "Credit relevance",
            ],
            rows: [
              {
                line: 44,
                cells: [
                  "2027-03-15",
                  "day",
                  "2026-10-31",
                  "Refinancing maturity",
                  "Scheduled",
                  "Debt schedule, page 4",
                  "Liquidity pressure",
                ],
              },
            ],
          },
        ],
      },
    ];
    useSnapshot(snapshot);
    window.history.replaceState(null, "", "/report/northbridge-2026");
    render(<ConnectedApp path="/report/northbridge-2026" mode="synthetic" />);
    expect(await screen.findByRole("heading", { name: "Dates to watch" })).toBeInTheDocument();
    expect(screen.getByText("Refinancing maturity")).toBeInTheDocument();
    expect(screen.getByText("2027-03-15 · day")).toBeInTheDocument();
    const evidence = screen
      .getAllByRole("link", { name: "Evidence" })
      .find((link) => link.getAttribute("href")?.includes("#evidence/"));
    expect(evidence).toBeDefined();
    expect(evidence).toHaveAttribute("href", expect.stringMatching(/#evidence\//));
  });
});
