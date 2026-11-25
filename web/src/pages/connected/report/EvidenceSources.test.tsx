import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry, Snapshot } from "../publishedReport";
import { citationsByFile, EvidenceSources, type SourceGroup } from "./EvidenceSources";

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
const alt: OutputEntry = {
  ...h1,
  selected: false,
  output: { ...h1.output, id: "case/CP-1-alt.md", sha256: "b".repeat(64) },
};
const groups: SourceGroup[] = [
  { label: "Used by a module", rows: [source] },
  {
    label: "Supplied, not used",
    rows: [{ ...source, name: "Spare.txt", readBy: [], sha256: "e".repeat(64) }],
  },
  { label: "Not recorded as used", rows: [] },
];

it("collects what each file is cited as, from the chips that name it, with where each sits", () => {
  const cited = citationsByFile(snapshot({ "case/CP-1.md:5": [chip({})] }), [h1]);
  expect(cited.byFile.get("Issuer.txt")).toEqual([
    { sha, label: "Cited pages 2–3", entry: h1, line: 5 },
  ]);
});

it("draws the used and the supplied-not-used files as separate tables with exact hashes", () => {
  render(
    <EvidenceSources
      folder="case"
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
  expect(spare.getByText("Not read by any module")).toBeVisible();
  expect(spare.getByText("Spare.txt")).toBeVisible();
  expect(spare.getByText("e".repeat(64))).toBeVisible();
  expect(spare.getByText("No citation names this file")).toBeVisible();
  expect(screen.queryByRole("table", { name: "Not recorded as used" })).toBeNull();
});

it("states a source's missing type, date and hash instead of leaving the cell blank", () => {
  render(
    <EvidenceSources
      folder="case"
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
      folder="case"
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
      folder="case"
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
      folder="case"
      entries={[h1]}
      sourceGroups={groups}
      modules={["CP-1"]}
      snapshot={snapshot(chips)}
    />,
  );
  expect(screen.getByText("Cited pages 2–3")).toBeVisible();
  expect(screen.queryByText(/page 9|page 7/)).toBeNull();
});

it("shows a citation whose page the bridge does not attest as written, not as not cited", () => {
  const unattested = chip({ label: "annual.pdf p. 84", pageHref: null });
  render(
    <EvidenceSources
      folder="case"
      entries={[h1]}
      sourceGroups={groups}
      modules={["CP-1"]}
      snapshot={snapshot({ "case/CP-1.md:5": [unattested] })}
    />,
  );
  expect(screen.getByText("annual.pdf p. 84")).toBeVisible();
});

it("matches a citation to a source that records no hash by file name, and says so", () => {
  render(
    <EvidenceSources
      folder="case"
      entries={[h1]}
      sourceGroups={[{ label: "Used by a module", rows: [{ ...source, sha256: null }] }]}
      modules={["CP-1"]}
      snapshot={snapshot({ "case/CP-1.md:5": [chip({})] })}
    />,
  );
  expect(screen.getByText("Cited pages 2–3")).toBeVisible();
  expect(screen.getByText("Matched by file name; the source has no hash")).toBeVisible();
  expect(screen.getByText("No hash recorded")).toBeVisible();
});

it("says use was not recorded for files in the unrecorded group, not that no module read them", () => {
  render(
    <EvidenceSources
      folder="case"
      entries={[h1]}
      sourceGroups={[
        {
          label: "Not recorded as used",
          rows: [{ ...source, name: "Loose.txt", readBy: [] }],
        },
      ]}
      modules={["CP-1"]}
      snapshot={snapshot({})}
    />,
  );
  expect(screen.getByText("Use not recorded")).toBeVisible();
  expect(screen.queryByText("No module")).toBeNull();
});

it("states the module scope of the citations when one module is selected", () => {
  render(
    <EvidenceSources
      folder="case"
      entries={[h1]}
      module="CP-1"
      sourceGroups={groups}
      modules={["CP-1"]}
      snapshot={snapshot({})}
    />,
  );
  expect(screen.getByRole("columnheader", { name: "Cited in Financial foundation" })).toBeVisible();
  expect(screen.getByText("No citation in Financial foundation names this file")).toBeVisible();
});

it("shows a citation under a different hash, with the cited hash reachable", () => {
  const other = "9".repeat(64);
  render(
    <EvidenceSources
      folder="case"
      entries={[h1]}
      sourceGroups={groups}
      modules={["CP-1"]}
      snapshot={snapshot({ "case/CP-1.md:5": [chip({ sha256: other })] })}
    />,
  );
  expect(screen.getByText("Cited as p. 2 under a different hash")).toBeVisible();
  expect(screen.getByText(other)).toBeVisible();
  expect(screen.getByText(sha)).toBeVisible();
  const used = within(screen.getByRole("table", { name: "Used by a module" }));
  expect(used.queryByText("No citation names this file")).toBeNull();
});

it("counts only the designated handoffs' citations", () => {
  render(
    <EvidenceSources
      folder="case"
      entries={[h1, alt]}
      sourceGroups={groups}
      modules={["CP-1"]}
      snapshot={snapshot({ "case/CP-1-alt.md:5": [chip({ pageHref: `${base}?page=9` })] })}
    />,
  );
  expect(screen.queryByText(/9/)).toBeNull();
  expect(screen.getAllByText("No citation names this file").length).toBeGreaterThan(0);
});

const gapChip = (reason: string, label: string) =>
  chip({ file: null, source: null, sha256: null, pageHref: null, href: null, label, reason });

it("counts the citations that name no file or a file not in the inventory, with a link to the first of each", () => {
  render(
    <EvidenceSources
      folder="case"
      entries={[h1]}
      sourceGroups={groups}
      modules={["CP-1"]}
      snapshot={snapshot({
        "case/CP-1.md:7": [
          gapChip("page cited without a source key", "p.1 · no key"),
          gapChip("page cited without a source key", "p.2 · no key"),
        ],
        "case/CP-1.md:9": [
          gapChip(
            "the Basis file is not in the Source readiness inventory",
            "annual.txt p.2 · not in inventory",
          ),
          gapChip("the row cites no page or register", "no page"),
        ],
      })}
    />,
  );
  const list = within(
    screen.getByRole("list", { name: "Citations not matched to a supplied file" }),
  );
  expect(list.getByText("2 citations give a page and name no file")).toBeVisible();
  expect(
    list.getByText("1 citation names a file that is not in the source inventory"),
  ).toBeVisible();
  const links = list.getAllByRole("link");
  expect(links.map((link) => link.getAttribute("href"))).toEqual([
    `/report/case#evidence/case%2FCP-1.md~${"a".repeat(64)}-7`,
    `/report/case#evidence/case%2FCP-1.md~${"a".repeat(64)}-9`,
  ]);
});

it("draws no such line when every citation names a file", () => {
  render(
    <EvidenceSources
      folder="case"
      entries={[h1]}
      sourceGroups={groups}
      modules={["CP-1"]}
      snapshot={snapshot({ "case/CP-1.md:5": [chip({})] })}
    />,
  );
  expect(
    screen.queryByRole("list", { name: "Citations not matched to a supplied file" }),
  ).toBeNull();
});
