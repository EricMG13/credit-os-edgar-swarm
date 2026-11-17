import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry, PublishedRun, Snapshot } from "../publishedReport";
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

function handoffEntry(sections: OutputEntry["sections"]): OutputEntry {
  return {
    output: { id: "out", sha256: "a".repeat(64), module: "CP-1", label: "Handoff", href: "out.md" },
    selected: true,
    sections,
  };
}

function renderHandoff(entry: OutputEntry, line?: number) {
  const run = { folder: "case", evidence } as unknown as PublishedRun;
  const snapshot = {
    workspace: { runs: {}, outputs: {}, handoffs: {}, models: [] },
    chips: {},
  } as unknown as Snapshot;
  return render(
    <ReportEvidence
      snapshot={snapshot}
      run={run}
      entries={[entry]}
      target={`out~${"a".repeat(64)}${line === undefined ? "" : `-${String(line)}`}`}
      mode="synthetic"
    />,
  );
}

afterEach(cleanup);

const sources = {
  heading: "Sources",
  level: 2,
  line: 6,
  blocks: [{ type: "text" as const, line: 7, end: 7, text: "Filing, pages 1 to 3." }],
};

it("draws no module code as a heading for a handoff's title line", () => {
  renderHandoff(handoffEntry([{ heading: "CP-1", level: 1, line: 1, blocks: [] }, sources]));
  expect(screen.getByRole("heading", { name: "Sources" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "CP-1" })).toBeNull();
  expect(screen.queryAllByRole("heading").filter((item) => /\bCP-/.test(item.textContent))).toEqual(
    [],
  );
});

it("keeps text that sits under the title line and names the module instead of its code", () => {
  renderHandoff(
    handoffEntry([
      {
        heading: "CP-1",
        level: 1,
        line: 1,
        blocks: [{ type: "text", line: 2, end: 2, text: "Prepared for the committee." }],
      },
      sources,
    ]),
  );
  expect(screen.getByText("Prepared for the committee.")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Financial foundation" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "CP-1" })).toBeNull();
});

// Only the handoff's own title, a level-1 section headed by a bare module code, is the module's
// name. Any other level-1 section is module-written and is drawn as written.
it("draws a module-written level-1 heading as written, beside the title", () => {
  renderHandoff(
    handoffEntry([
      { heading: "CP-1", level: 1, line: 1, blocks: [] },
      {
        heading: "Appendix: covenant definitions",
        level: 1,
        line: 8,
        blocks: [{ type: "text", line: 9, end: 9, text: "Net debt excludes leases." }],
      },
      sources,
    ]),
  );
  expect(
    screen.getByRole("heading", { name: "Appendix: covenant definitions" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Net debt excludes leases.")).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "Financial foundation" })).toBeNull();
  expect(screen.queryByRole("heading", { name: "CP-1" })).toBeNull();
});

it("draws a title-only level-1 section whose heading says more than the module code", () => {
  renderHandoff(
    handoffEntry([
      {
        heading: "CP-1 for Northbridge Credit (NB), as of 2026-03-31",
        level: 1,
        line: 1,
        blocks: [],
      },
      sources,
    ]),
  );
  expect(
    screen.getByRole("heading", { name: /for Northbridge Credit \(NB\), as of 2026-03-31/ }),
  ).toBeInTheDocument();
});

it("still draws the title section for a location that points at the title line", () => {
  renderHandoff(handoffEntry([{ heading: "CP-1", level: 1, line: 1, blocks: [] }, sources]), 1);
  expect(screen.queryByText("This location is unavailable in the published handoff.")).toBeNull();
  expect(screen.getByRole("heading", { name: "Financial foundation" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "CP-1" })).toBeNull();
});
