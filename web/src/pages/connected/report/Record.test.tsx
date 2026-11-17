import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import type { PublishedRun, Snapshot } from "../publishedReport";
import { ReportEvidence } from "./Evidence";

const evidence = {
  sources: [],
  unused: [],
  unrecorded: [],
  noSourcesModules: [],
  handoffs: [],
  zip: null,
  downloads: [],
  record: { hashes: [], instructions: [], calls: [], cap: null },
};

function showRecord(run: Partial<PublishedRun>) {
  vi.stubGlobal("fetch", () => new Promise(() => {}));
  const snapshot = {
    workspace: { runs: {}, outputs: {}, handoffs: {}, models: [] },
    chips: {},
  } as unknown as Snapshot;
  return render(
    <ReportEvidence
      snapshot={snapshot}
      run={{ folder: "case", evidence, ...run } as unknown as PublishedRun}
      entries={[]}
      target="record"
      mode="synthetic"
    />,
  );
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

it("shows why an unreadable comparison could not be read, where Changes sends the reader", () => {
  const problem = "Unreadable: changes/pack.json is not valid JSON";
  showRecord({ changes: { problem } });
  expect(screen.getByText("Comparison problem:")).toBeVisible();
  expect(screen.getByText(problem)).toBeVisible();
});
