import {
  act,
  cleanup,
  configure,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConnectedApp } from "./ConnectedApp";
import type { Snapshot } from "./publishedReport";

// The first render of the whole reader can pass the 1 s default on a busy machine.
configure({ asyncUtilTimeout: 5000 });
// Shorter than the test's own limit, so a missing effect fails on its assertion.
const SETTLE = { timeout: 2000 };

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

function open(hash: string) {
  vi.stubGlobal(
    "fetch",
    vi.fn(() => Promise.resolve(Response.json(snapshot()))),
  );
  window.history.replaceState(null, "", `/report/northbridge-2026${hash}`);
  render(<ConnectedApp path="/report/northbridge-2026" mode="synthetic" />);
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  window.history.replaceState(null, "", "/");
});

// The shell's `main` is what scrolls, so each page of the report starts at its top and Back
// returns to the place the reader left.
describe("report page changes", () => {
  it("opens the page for a new address at its top", async () => {
    open("#modules/CP-1");
    await screen.findByLabelText("Module");
    const main = screen.getByRole("main");
    main.scrollTop = 1500;
    fireEvent.scroll(main);
    act(() => {
      window.location.hash = "#changes";
    });
    await waitFor(() => {
      expect(main.scrollTop).toBe(0);
    }, SETTLE);
    expect(window.location.hash).toBe("#changes");
  });

  it("returns to the place the reader left when they go Back", async () => {
    open("#modules/CP-1");
    await screen.findByLabelText("Module");
    const main = screen.getByRole("main");
    main.scrollTop = 1500;
    fireEvent.scroll(main);
    act(() => {
      window.location.hash = "#changes";
    });
    await waitFor(() => {
      expect(main.scrollTop).toBe(0);
    }, SETTLE);
    act(() => {
      window.history.back();
    });
    await waitFor(() => {
      expect(window.location.hash).toBe("#modules/CP-1");
    }, SETTLE);
    await waitFor(() => {
      expect(main.scrollTop).toBe(1500);
    }, SETTLE);
  });
});
