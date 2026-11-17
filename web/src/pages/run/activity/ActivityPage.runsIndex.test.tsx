// S6-007: the Runs breadcrumb opens an index of the slice's runs (CM-090: in progress, the queue,
// and ended), not the one current run. Expected rows are written out from the run fixture, not
// derived from the page's own grouping.
import { cleanup, fireEvent, screen, within } from "@testing-library/react";
import { matchRoute } from "../../route-table";
import { routes } from "../routes";
import { fixture, show, showFixture } from "../test-helpers";

afterEach(() => {
  cleanup();
});

const BASE = ["Full credit review", "As of Q3 FY2026"];
const LONG = "Full credit review with every optional module and a late cut-off";

/** The text of one row: issuer, its state word if the row draws one, the labels, the time line. */
const row = (state: string, labels: string[], note: string) =>
  `TransDigm Group${state}${labels.join("")}${note}`;

const GROUPS: [string, [string, string][]][] = [
  [
    "In progress",
    [
      ["running", row("", BASE, "Started today at 14:38")],
      ["starting", row("", BASE, "Started today at 14:38")],
      ["many-modules", row("", [...BASE, LONG], "Started today at 14:38")],
    ],
  ],
  ["Queue", [["queued", row("", BASE, "Not started yet")]]],
  [
    "Ended",
    [
      ["finished", row("Finished", BASE, "Finished today at 15:16")],
      ["failed", row("Failed", BASE, "Stopped today at 14:48")],
      ["capped", row("Capped", BASE, "Stopped today at 15:09")],
      ["rejected", row("Rejected", BASE, "Rejected today at 14:37")],
      ["interrupted", row("Interrupted", BASE, "Interrupted today at 14:56")],
    ],
  ],
  ["State not known", [["unreadable", `TransDigm Group${BASE.join("")}`]]],
];

const group = (title: string) => {
  const section = screen.getByRole("heading", { level: 2, name: title }).closest("section");
  if (section === null) throw new Error(`no section holds the heading ${title}`);
  return section;
};

describe("the Runs index route", () => {
  it("is a route of its own with the title Runs and no home", () => {
    const route = routes.find((r) => r.path === "/run/runs");
    expect(route?.title).toBe("Runs");
    expect(route?.home).toBeUndefined();
    expect(route?.layout).toBeUndefined();
  });

  it("shadows none of the run routes and none of them shadows it", () => {
    const paths = (hash: string) => matchRoute(hash, routes)?.route.path;
    expect(paths("/run/start")).toBe("/run/start");
    expect(paths("/run/start/runs")).toBe("/run/start/:draft");
    expect(paths("/run/activity")).toBe("/run/activity");
    expect(paths("/run/activity/runs")).toBe("/run/activity/:run");
    expect(paths("/run/runs")).toBe("/run/runs");
  });

  it("leaves the bare run address and #/run/activity drawing the current run", () => {
    for (const hash of ["/run", "/run/activity"]) {
      cleanup();
      showFixture(hash);
      expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("TransDigm Group");
      expect(screen.getAllByText("Running").length).toBeGreaterThan(0);
    }
  });
});

describe("the Runs index page", () => {
  beforeEach(() => showFixture("/run/runs"));

  it("has one h1, Runs, and the design-reference note ahead of it", () => {
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Runs");
    expect(screen.getAllByText("Design reference with sample data")).toHaveLength(1);
  });

  it("groups the runs as in progress, the queue, ended and state not known, in that order", () => {
    const headings = screen.getAllByRole("heading", { level: 2 }).map((h) => h.textContent);
    expect(headings).toEqual(GROUPS.map(([title]) => title));
  });

  it.each(GROUPS)(
    "lists %s with each run's labels and time line, as the slice holds them",
    (title, rows) => {
      const items = within(group(title)).getAllByRole("listitem");
      expect(items.map((li) => li.textContent)).toEqual(rows.map(([, text]) => text));
      const links = within(group(title)).getAllByRole("link");
      expect(links.map((a) => a.getAttribute("href"))).toEqual(
        rows.map(([id]) => `#/run/activity/${id}`),
      );
    },
  );

  it("names the state of an ended run with a badge and leaves the live groups to their heading", () => {
    expect(within(group("In progress")).queryByText("Running")).toBeNull();
    expect(within(group("Queue")).queryByText("Queued")).toBeNull();
    for (const word of ["Finished", "Failed", "Capped", "Rejected", "Interrupted"]) {
      expect(within(group("Ended")).getByText(word)).toBeVisible();
    }
  });

  it("draws the long label whole, in the row, and leaves no run with a record of none", () => {
    expect(within(group("In progress")).getByText(LONG)).toBeVisible();
    expect(screen.getAllByRole("link", { name: "TransDigm Group" })).toHaveLength(10);
  });

  it("draws the index from the slice: a run added to the slice is listed, in its group", () => {
    cleanup();
    const slice = structuredClone(fixture.slice) as { runs: Record<string, unknown>[] };
    const queued = slice.runs.find((r) => r["id"] === "queued");
    if (queued === undefined) throw new Error("the fixture lacks the queued run");
    slice.runs.push({ ...queued, id: "next", issuer: "Northbridge Holdings" });
    show("/run/runs", slice);
    const link = within(group("Queue")).getByRole("link", { name: "Northbridge Holdings" });
    expect(link.getAttribute("href")).toBe("#/run/activity/next");
  });
});

describe("the Runs index page without runs", () => {
  // The reader requires a slice to agree with itself: no run record means no Start or Run started
  // draft (they name a run), so the slice keeps its first draft alone.
  const bare = (runs: unknown[], keepDraft: boolean) => {
    const slice = structuredClone(fixture.slice) as { drafts: Record<string, unknown>[] };
    const [first] = slice.drafts;
    return {
      ...slice,
      drafts: keepDraft && first !== undefined ? [{ ...first, previous: null, next: null }] : [],
      runs,
      current: null,
    };
  };

  it("says there are none and offers a new run when the slice lists none", () => {
    show("/run/runs", bare([{ kind: "none", id: "none" }], true));
    expect(screen.getByText("No runs yet")).toBeVisible();
    expect(within(screen.getByRole("main")).queryByRole("list")).toBeNull();
    expect(screen.getByRole("link", { name: "Start a run" }).getAttribute("href")).toBe(
      "#/run/start/no-documents",
    );
  });

  it("offers no new run when the slice has no draft either", () => {
    show("/run/runs", bare([], false));
    expect(screen.getByText("No runs yet")).toBeVisible();
    expect(screen.queryByRole("link", { name: "Start a run" })).toBeNull();
  });

  it("says so when the library holds no run data", () => {
    show("/run/runs", undefined);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Runs");
    expect(screen.getByText("No run data in this library")).toBeVisible();
  });
});

describe("the Runs breadcrumb", () => {
  it.each([
    "running",
    "queued",
    "starting",
    "finished",
    "failed",
    "capped",
    "rejected",
    "interrupted",
    "many-modules",
    "unreadable",
  ])("on the %s run opens the index, not the current run", async (id) => {
    showFixture(`/run/activity/${id}`);
    const trail = screen.getByRole("navigation", { name: "Breadcrumb" });
    const link = within(trail).getByRole("link", { name: "Runs" });
    expect(link.getAttribute("href")).toBe("#/run/runs");
    fireEvent.click(link);
    expect((await screen.findByRole("heading", { level: 1, name: "Runs" })).textContent).toBe(
      "Runs",
    );
    expect(screen.getByRole("heading", { level: 2, name: "Ended" })).toBeVisible();
  });
});
