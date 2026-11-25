import { expect, it } from "vitest";
import type { PublishedRun, Section, Snapshot } from "../../publishedReport";
import { committeeStance, earlierStance, runStanceRead } from "./changeData";

const decision = (bias: string): Section[] => [
  {
    heading: "Decision",
    level: 3,
    line: 3,
    blocks: [{ type: "text", line: 4, end: 4, text: `Final Action Bias: ${bias}. Reason.` }],
  },
];

function published(folder: string, asOf: string, prior?: string): PublishedRun {
  return {
    folder,
    issuer: "Acme",
    issuerKey: "acme",
    asOf,
    period: "FY",
    pathway: "full",
    modules: { "CP-6": { outputs: [`${folder}/cp6`], default: `${folder}/cp6` } },
    changes: prior
      ? {
          pack: {
            prior: { run: prior, as_of: "2025-03-31", pathway: "full" },
            current: { as_of: asOf, pathway: "full" },
          },
        }
      : null,
    evidence: {},
  } as unknown as PublishedRun;
}

function snapshot(): Snapshot {
  const output = (folder: string, sha256: string) => ({
    id: `${folder}/cp6`,
    run: `${folder}Key`,
    module: "CP-6",
    sha256,
    label: "CP-6",
    href: "",
  });
  return {
    catalogue: { real: [] },
    workspace: {
      runs: {
        oldKey: published("old", "2025-03-31"),
        newKey: published("new", "2026-03-31", "old"),
      },
      outputs: {
        "old/cp6": output("old", "o".repeat(64)),
        "new/cp6": output("new", "n".repeat(64)),
      },
      handoffs: {
        ["o".repeat(64)]: decision("Requires More Work"),
        ["n".repeat(64)]: decision("Watchlist"),
      },
      models: [],
    },
    chips: {},
  };
}

it("reads each run's stance from its own committee decision, and the earlier run's through the comparison", () => {
  const snap = snapshot();
  const runs = snap.workspace.runs;
  expect(runStanceRead(snap, "newKey", runs.newKey as PublishedRun)).toEqual({
    stance: "Watchlist",
    unread: false,
    held: true,
  });
  expect(runStanceRead(snap, "oldKey", runs.oldKey as PublishedRun)).toEqual({
    stance: "Requires More Work",
    unread: false,
    held: true,
  });
  expect(earlierStance(snap, runs.newKey as PublishedRun)).toEqual({
    stance: "Requires More Work",
    unread: false,
    held: true,
  });
  expect(earlierStance(snap, runs.oldKey as PublishedRun)).toBeUndefined();
});

it("says a run held only as a summary is not in the run list, and draws no move for a comparison that does not match", () => {
  const snap = snapshot();
  const record = {
    ...(snap.workspace.runs.oldKey as PublishedRun),
    history: { modules: [], earlierFormat: true, earlierMethods: false },
  };
  expect(runStanceRead(snap, "oldKey", record)).toEqual({ unread: false, held: false });
  snap.workspace.runs.oldKey = record;
  expect(earlierStance(snap, snap.workspace.runs.newKey as PublishedRun)).toEqual({
    unread: false,
    held: false,
  });
  const mismatched = { ...(snap.workspace.runs.newKey as PublishedRun), asOf: "2026-06-30" };
  expect(earlierStance(snap, mismatched)).toBeUndefined();
});

it("says the page could not read a stance when the decision passage states one it does not know", () => {
  const entry = (text: string) =>
    ({
      output: { module: "CP-6", id: "x", label: "CP-6", href: "", sha256: "s" },
      sections: [
        {
          heading: "Decision",
          level: 3,
          line: 3,
          blocks: [{ type: "text", line: 4, end: 4, text }],
        },
      ],
      selected: true,
    }) as never;
  expect(committeeStance(entry("Final Action Bias: Hold. The view."))).toEqual({ unread: true });
  expect(committeeStance(entry("Final Action Bias: Watchlist. The view."))).toEqual({
    stance: "Watchlist",
    unread: false,
  });
  expect(committeeStance(entry("The committee met."))).toEqual({ unread: false });
  expect(committeeStance(entry("**Final Action Bias:** Watchlist. The view."))).toEqual({
    stance: "Watchlist",
    unread: false,
  });
  expect(committeeStance(entry("**Final Action Bias:** Hold. The view."))).toEqual({
    unread: true,
  });
  expect(committeeStance(undefined)).toEqual({ unread: false });
});
