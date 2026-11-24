import { render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import type { PublishedRun, Section, Snapshot } from "../publishedReport";
import { RunHistory } from "./History";

const decision = (bias: string): Section[] => [
  {
    heading: "Decision",
    level: 3,
    line: 3,
    blocks: [{ type: "text", line: 4, end: 4, text: `Final Action Bias: ${bias}. Reason.` }],
  },
];

function published(folder: string, asOf: string | null, extra = {}): PublishedRun {
  return {
    folder,
    issuer: "Acme",
    issuerKey: "acme",
    asOf,
    period: "FY",
    pathway: "full",
    modules: { "CP-6": { outputs: [`${folder}/cp6`], default: `${folder}/cp6` } },
    changes: null,
    evidence: {},
    ...extra,
  } as unknown as PublishedRun;
}

function setup() {
  const runs: Record<string, PublishedRun> = {
    oldKey: published("old", "2025-03-31"),
    midKey: published("mid", "2025-09-30", { modules: {} }),
    earlyKey: published("early", "2024-03-31", {
      modules: undefined,
      history: { modules: ["CP-6"], earlierFormat: true, earlierMethods: false },
    }),
    newKey: published("new", "2026-03-31"),
    otherKey: { ...published("other", "2026-06-30"), issuerKey: "beta" },
  };
  delete (runs.earlyKey as unknown as Record<string, unknown>).modules;
  const output = (folder: string, sha256: string) => ({
    id: `${folder}/cp6`,
    run: `${folder}Key`,
    module: "CP-6",
    sha256,
    label: "CP-6",
    href: "",
  });
  const snapshot = {
    catalogue: { real: [] },
    workspace: {
      runs,
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
  } as unknown as Snapshot;
  return { snapshot, runs };
}

function row(items: HTMLElement[], index: number) {
  const item = items[index];
  if (!item) throw new Error(`no row ${String(index)}`);
  return item;
}

function rows() {
  const { snapshot, runs } = setup();
  render(<RunHistory snapshot={snapshot} run={runs.newKey as PublishedRun} issuer="Acme" />);
  return within(screen.getByRole("list", { name: "Runs, newest first" })).getAllByRole("listitem");
}

it("lists this issuer's runs newest first with the as-of date and the heading", () => {
  const items = rows();
  expect(screen.getByRole("heading", { name: "Runs of Acme" })).toBeTruthy();
  expect(items.map((item) => /\d{4}-\d{2}-\d{2}/.exec(item.textContent)?.[0])).toEqual([
    "2026-03-31",
    "2025-09-30",
    "2025-03-31",
    "2024-03-31",
  ]);
});

it("reads each run's stance from its own decision and states none otherwise", () => {
  const items = rows();
  expect(within(row(items, 0)).getByText("Watchlist")).toBeTruthy();
  expect(within(row(items, 1)).getByText("Stance not stated")).toBeTruthy();
  expect(within(row(items, 2)).getByText("Requires More Work")).toBeTruthy();
  expect(within(row(items, 3)).getByText("Stance not stated")).toBeTruthy();
});

it("marks only the current run", () => {
  const items = rows();
  expect(screen.getAllByText("This run")).toHaveLength(1);
  expect(within(row(items, 0)).getByText("This run")).toBeTruthy();
});

it("shows pathway, finished state, labels, modules run and the two links", () => {
  const items = rows();
  expect(within(row(items, 0)).getByText("full")).toBeTruthy();
  expect(within(row(items, 0)).getByText(/Finished/)).toBeTruthy();
  expect(within(row(items, 0)).getByText(/1 module run: /)).toBeTruthy();
  expect(within(row(items, 1)).getByText("0 modules run")).toBeTruthy();
  expect(within(row(items, 3)).getByText("Earlier format")).toBeTruthy();
  const overview = within(row(items, 2)).getByRole("link", { name: "Open overview" });
  const changes = within(row(items, 2)).getByRole("link", { name: "What changed" });
  expect(overview.getAttribute("href")).toMatch(/old.*#overview$/);
  expect(changes.getAttribute("href")).toMatch(/old.*#changes$/);
});

it("says who started each run is not published", () => {
  rows();
  expect(screen.getByText("Who started each run is not published with the report.")).toBeTruthy();
});

it("leaves out runs of another issuer and says when the date is missing", () => {
  const { snapshot, runs } = setup();
  runs.midKey = published("mid", null, { modules: {} });
  snapshot.workspace.runs = runs;
  render(<RunHistory snapshot={snapshot} run={runs.newKey as PublishedRun} issuer="Acme" />);
  expect(screen.getAllByRole("listitem")).toHaveLength(4);
  expect(screen.getByText("As-of date not recorded")).toBeTruthy();
  expect(screen.queryByText("2026-06-30")).toBeNull();
});
