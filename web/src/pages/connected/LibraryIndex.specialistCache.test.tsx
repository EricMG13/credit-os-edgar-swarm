import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { ReportLibrary } from "./LibraryIndex";

const run = {
  folder: "relative-run",
  issuer: "Acme",
  issuerKey: "acme",
  title: "Relative value",
  period: "FY2025",
  asOf: "2026-03-31",
  pathway: "relative_value",
  publicationVerified: true,
  modules: {},
  evidence: {
    sources: [],
    unused: [],
    unrecorded: [],
    noSourcesModules: [],
    handoffs: [],
    downloads: [],
    zip: null,
    record: { hashes: [], instructions: [], calls: [], cap: null },
  },
};
const catalogue = {
  real: [
    {
      id: "relative-run",
      issuer: "Acme",
      name: "Acme",
      title: "Relative value",
      date: "2026-03-31",
      period: "FY2025",
      sector: "Industrial",
      metrics: {},
    },
  ],
};

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

it("fetches a specialist card's report once per run across remounts", async () => {
  const fetch = vi.fn((url: string) =>
    Promise.resolve(
      Response.json(
        url === "/connected/library"
          ? { catalogue, workspace: { runs: { "relative-run": run } } }
          : {
              reportFolder: "relative-run",
              catalogue,
              workspace: { runs: { "relative-run": run }, outputs: {}, handoffs: {}, models: [] },
              chips: {},
            },
      ),
    ),
  );
  vi.stubGlobal("fetch", fetch);
  const snapshots = () => fetch.mock.calls.filter(([url]) => url !== "/connected/library").length;
  const first = render(<ReportLibrary />);
  await waitFor(() => {
    expect(snapshots()).toBe(1);
  });
  await new Promise((resolve) => setTimeout(resolve, 50));
  first.unmount();
  render(<ReportLibrary />);
  await screen.findAllByText("Acme");
  await new Promise((resolve) => setTimeout(resolve, 50));
  expect(snapshots()).toBe(1);
});
