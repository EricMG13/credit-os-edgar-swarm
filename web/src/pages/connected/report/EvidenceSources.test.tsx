import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry, Snapshot } from "../publishedReport";
import { citedPagesBySource, EvidenceSources, type SourceGroup } from "./EvidenceSources";

afterEach(cleanup);

const sha = "d".repeat(64);
const base = `/connected/sources/case/${sha}/Issuer.txt`;
const source = {
  name: "Issuer.txt",
  type: "txt",
  documentDate: "2025-03-31",
  readBy: ["CP-1"],
  sha256: sha,
};
const chip = (over: object) => ({
  label: "p. 2",
  quote: null,
  excerpt: null,
  file: "Issuer.txt",
  source: null,
  sha256: sha,
  reason: null,
  href: base,
  pageHref: `${base}?page=2&end=3`,
  ...over,
});
const snapshot = (chips: Snapshot["chips"]) => ({ chips }) as unknown as Snapshot;
const h1: OutputEntry = {
  selected: true,
  output: {
    id: "case/CP-1.md",
    module: "CP-1",
    label: "CP-1",
    href: "CP-1.md",
    sha256: "a".repeat(64),
  },
  sections: [],
};
const groups: SourceGroup[] = [
  { label: "Used by a module", rows: [source] },
  {
    label: "Supplied, not used",
    rows: [{ ...source, name: "Spare.txt", readBy: [], sha256: "e".repeat(64) }],
  },
  { label: "Not recorded as used", rows: [] },
];

it("collects the pages each cited file is cited at, from the chips that name it", () => {
  const pages = citedPagesBySource(snapshot({ "case/CP-1.md:5": [chip({})] }), [h1]);
  expect([...(pages.get(`Issuer.txt\u0000${sha}`) ?? [])]).toEqual(["Cited pages 2–3"]);
});

it("draws the used and the supplied-not-used files as separate tables with exact hashes", () => {
  render(
    <EvidenceSources
      entries={[h1]}
      sourceGroups={groups}
      modules={["CP-1", "CP-2"]}
      snapshot={snapshot({ "case/CP-1.md:5": [chip({})] })}
    />,
  );
  const used = within(screen.getByRole("table", { name: "Used by a module" }));
  const spare = within(screen.getByRole("table", { name: "Supplied, not used" }));
  expect(used.getByText("Issuer.txt")).toBeVisible();
  expect(used.getByText(sha)).toBeVisible();
  expect(used.getByText("Cited pages 2–3")).toBeVisible();
  expect(used.getByText("Read by Financial foundation")).toBeVisible();
  expect(spare.queryByText("Issuer.txt")).toBeNull();
  expect(spare.getByText("Spare.txt")).toBeVisible();
  expect(spare.getByText("e".repeat(64))).toBeVisible();
  expect(spare.getByText("Not cited")).toBeVisible();
  expect(screen.queryByRole("table", { name: "Not recorded as used" })).toBeNull();
});

it("states a source's missing type, date and hash instead of leaving the cell blank", () => {
  render(
    <EvidenceSources
      entries={[h1]}
      sourceGroups={[
        {
          label: "Used by a module",
          rows: [{ name: "x.txt", type: null, documentDate: null, readBy: [], sha256: null }],
        },
      ]}
      modules={[]}
      snapshot={snapshot({})}
    />,
  );
  expect(screen.getByText("Document type n.a.")).toBeVisible();
  expect(screen.getByText("Document date n.a.")).toBeVisible();
  expect(screen.getByText("No hash recorded")).toBeVisible();
});

it("names a file read by every module once", () => {
  render(
    <EvidenceSources
      entries={[h1]}
      sourceGroups={[
        { label: "Used by a module", rows: [{ ...source, readBy: ["CP-1", "CP-2"] }] },
      ]}
      modules={["CP-1", "CP-2"]}
      snapshot={snapshot({})}
    />,
  );
  expect(screen.getByText("Read by all 2 modules")).toBeVisible();
});

it("filters to one module's files and says so when it has none", () => {
  const view = render(
    <EvidenceSources
      entries={[h1]}
      sourceGroups={groups}
      module="CP-2"
      modules={["CP-1", "CP-2"]}
      snapshot={snapshot({})}
    />,
  );
  expect(screen.getByRole("heading", { name: "No source files recorded" })).toBeVisible();
  expect(screen.getByText("No issuer files are listed for Fundamental credit.")).toBeVisible();
  view.unmount();
});

it("ignores citations recorded in another run's or another module's handoffs", () => {
  const chips = {
    "other-run/CP-1.md:5": [chip({ pageHref: `${base}?page=9` })],
    "case/CP-2.md:5": [chip({ pageHref: `${base}?page=7` })],
    "case/CP-1.md:5": [chip({})],
  };
  render(
    <EvidenceSources
      entries={[h1]}
      sourceGroups={groups}
      modules={["CP-1"]}
      snapshot={snapshot(chips)}
    />,
  );
  expect(screen.getByText("Cited pages 2–3")).toBeVisible();
  expect(screen.queryByText(/page 9|page 7/)).toBeNull();
});
