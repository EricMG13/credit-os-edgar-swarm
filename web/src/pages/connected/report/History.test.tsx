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

/** A run the server sends only as a summary (react_frontend/sources.py `scoped`): no modules. */
function summary(folder: string, asOf: string | null, earlierFormat = false): PublishedRun {
  const record = published(folder, asOf, {
    history: { modules: ["CP-6"], earlierFormat, earlierMethods: false },
  }) as unknown as Record<string, unknown>;
  delete record.modules;
  return record as unknown as PublishedRun;
}

/** As the server scopes it: the opened run and its validated prior in full, every other run a summary. */
function setup() {
  const prior = { run: "old", as_of: "2025-03-31", pathway: "full" };
  const runs: Record<string, PublishedRun> = {
    oldKey: published("old", "2025-03-31"),
    midKey: summary("mid", "2025-09-30"),
    earlyKey: summary("early", "2024-03-31", true),
    newKey: published("new", "2026-03-31", {
      changes: { pack: { prior, current: { as_of: "2026-03-31", pathway: "full" } } },
    }),
    otherKey: { ...summary("other", "2026-06-30"), issuerKey: "beta" },
  };
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
  expect(items.map((item) => /\d{1,2} \w+ \d{4}/.exec(item.textContent)?.[0])).toEqual([
    "31 March 2026",
    "30 September 2025",
    "31 March 2025",
    "31 March 2024",
  ]);
});

it("reads the stance of each run the page holds, and sends the reader to the run for the others", () => {
  const items = rows();
  expect(within(row(items, 0)).getByText("Watchlist")).toBeTruthy();
  expect(within(row(items, 1)).getByText("Stance not in the run list")).toBeTruthy();
  expect(within(row(items, 2)).getByText("Requires More Work")).toBeTruthy();
  expect(within(row(items, 3)).getByText("Stance not in the run list")).toBeTruthy();
  expect(screen.queryByText("Stance not stated")).toBeNull();
});

it("says a stance is not stated only for a run it holds in full whose committee states none", () => {
  const { snapshot, runs } = setup();
  const bare = published("new", "2026-03-31", { modules: {} });
  runs.newKey = bare;
  render(<RunHistory snapshot={snapshot} run={bare} issuer="Acme" />);
  const items = within(screen.getByRole("list", { name: "Runs, newest first" })).getAllByRole(
    "listitem",
  );
  expect(within(row(items, 0)).getByText("Stance not stated")).toBeTruthy();
});

it("claims no order between runs of the same as-of date", () => {
  const { snapshot, runs } = setup();
  runs.twinKey = summary("twin", "2025-09-30");
  render(<RunHistory snapshot={snapshot} run={runs.newKey as PublishedRun} issuer="Acme" />);
  const items = within(screen.getByRole("list", { name: "Runs, newest first" })).getAllByRole(
    "listitem",
  );
  const same = items.filter((item) => within(item).queryByText("Same as-of date"));
  expect(same).toHaveLength(2);
  expect(same.every((item) => item.textContent.includes("30 September 2025"))).toBe(true);
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
  expect(within(row(items, 1)).getByText(/1 module run: /)).toBeTruthy();
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
  runs.midKey = summary("mid", null);
  snapshot.workspace.runs = runs;
  render(<RunHistory snapshot={snapshot} run={runs.newKey as PublishedRun} issuer="Acme" />);
  expect(screen.getAllByRole("listitem")).toHaveLength(4);
  expect(screen.getByText("As-of date not recorded")).toBeTruthy();
  expect(screen.queryByText("2026-06-30")).toBeNull();
});

it("lays the runs tile on the report's 12-column grid", () => {
  rows();
  const tile = screen.getByRole("region", { name: "Runs of Acme" });
  expect(tile.parentElement).toHaveClass("lg:grid-cols-12");
});

it("says it could not read a stance when the decision states one this page does not know", () => {
  const { snapshot, runs } = setup();
  snapshot.workspace.handoffs["n".repeat(64)] = decision("Hold");
  render(<RunHistory snapshot={snapshot} run={runs.newKey as PublishedRun} issuer="Acme" />);
  const items = within(screen.getByRole("list", { name: "Runs, newest first" })).getAllByRole(
    "listitem",
  );
  expect(
    within(row(items, 0)).getByText("This page could not read a stance from the decision"),
  ).toBeTruthy();
  expect(within(row(items, 0)).queryByText("Stance not stated")).toBeNull();
});
