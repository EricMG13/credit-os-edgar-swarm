import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { ReportEvidence } from "./Evidence";
import type { OutputEntry, PublishedRun, Snapshot } from "../publishedReport";

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

const entry = (module: string): OutputEntry => ({
  output: { id: module, sha256: "a".repeat(64), module, label: module, href: `${module}.md` },
  selected: true,
  sections: [],
});

function renderEvidence(target: string) {
  return render(
    <ReportEvidence
      snapshot={
        {
          workspace: { runs: {}, outputs: {}, handoffs: {}, models: [] },
          chips: {},
        } as unknown as Snapshot
      }
      run={{ folder: "case", evidence } as unknown as PublishedRun}
      entries={[entry("CP-1"), entry("CP-2G")]}
      target={target}
      mode="synthetic"
    />,
  );
}

const filter = () => screen.getByRole<HTMLSelectElement>("combobox", { name: /Module/ });

afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/");
});

it("keeps the page where it is while the Module filter is browsed, and applies it on request", () => {
  renderEvidence("sources");
  // An arrow key on the closed list changes its value and nothing else.
  fireEvent.change(filter(), { target: { value: "CP-2G" } });
  fireEvent.change(filter(), { target: { value: "CP-1" } });
  expect(window.location.hash).toBe("");
  expect(filter()).toHaveValue("CP-1");
  fireEvent.click(screen.getByRole("button", { name: "Apply filter" }));
  expect(window.location.hash).toBe("#evidence/sources/CP-1");
});

it("offers nothing to apply while the choice is the filter already in force", () => {
  renderEvidence("sources/CP-1");
  expect(filter()).toHaveValue("CP-1");
  expect(screen.getByRole("button", { name: "Apply filter" })).toBeDisabled();
  fireEvent.change(filter(), { target: { value: "" } });
  expect(screen.getByRole("button", { name: "Apply filter" })).toBeEnabled();
  fireEvent.click(screen.getByRole("button", { name: "Apply filter" }));
  expect(window.location.hash).toBe("#evidence/sources");
});
