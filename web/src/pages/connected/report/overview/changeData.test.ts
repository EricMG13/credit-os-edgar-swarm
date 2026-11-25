import { expect, it } from "vitest";
import type { PublishedRun, Section, Snapshot } from "../../publishedReport";
import { committeeStance, earlierStance, runStance } from "./changeData";

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
  expect(runStance(snap, "newKey", runs.newKey as PublishedRun)).toBe("Watchlist");
  expect(runStance(snap, "oldKey", runs.oldKey as PublishedRun)).toBe("Requires More Work");
  expect(earlierStance(snap, runs.newKey as PublishedRun)).toBe("Requires More Work");
  expect(earlierStance(snap, runs.oldKey as PublishedRun)).toBeUndefined();
});

it("states no stance for an earlier-format record or a comparison that does not match", () => {
  const snap = snapshot();
  const record = {
    ...(snap.workspace.runs.oldKey as PublishedRun),
    history: { modules: [], earlierFormat: true, earlierMethods: false },
  };
  expect(runStance(snap, "oldKey", record)).toBeUndefined();
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
  expect(committeeStance(undefined)).toEqual({ unread: false });
});
