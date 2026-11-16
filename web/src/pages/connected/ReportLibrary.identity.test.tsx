import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { ReportReader } from "./ReportLibrary";
import { IdentityBand } from "./report/IdentityBand";
import { readerText } from "./publishedReport";
import type { Block, OutputEntry, PublishedRun, Section, Snapshot } from "./publishedReport";

const GAP_DESCRIPTION = "Business description not in this run";
const GAP_RATINGS = "Ratings not entered for this run";

const table = (line: number, headers: string[], rows: string[][]): Block => ({
  type: "table",
  line,
  headers,
  rows: rows.map((cells, index) => ({ line: line + 2 + index, cells })),
});
const section = (heading: string, line: number, blocks: Block[]): Section => ({
  heading,
  level: 3,
  line,
  blocks,
});
const profile = (rows: string[][]) =>
  section("Company profile", 10, [table(12, ["Field", "Detail"], rows)]);
const register = (cells: string[]) =>
  section("company_description - Register", 20, [
    table(22, ["Issuer", "Business description", "Country", "Sector"], [cells]),
  ]);

type Rating = {
  label: string;
  agency: string;
  scope: "issuer" | "facility";
  outlook: string;
  date: string;
};

function fixture({
  handoff,
  ratings,
  sector = "",
}: {
  handoff?: Section[];
  ratings?: Rating[];
  sector?: string;
} = {}) {
  const modules = handoff ? { "CP-1A": { outputs: ["cp1a"], default: "cp1a" } } : {};
  const run = {
    folder: "acme",
    issuer: "Acme",
    asOf: "2026-11-16",
    period: "FY2026",
    pathway: "credit_snapshot",
    modules,
    evidence: { sources: [], unused: [], unrecorded: [], handoffs: [], downloads: [], zip: null },
  } as unknown as PublishedRun;
  return {
    catalogue: {
      real: [
        {
          id: "acme",
          name: "Acme",
          issuer: "Acme",
          title: "",
          date: "",
          period: "FY2026",
          sector,
          metrics: {},
          ratings,
        },
      ],
    },
    workspace: {
      runs: { acmeKey: run },
      outputs: handoff
        ? {
            cp1a: {
              id: "cp1a",
              run: "acmeKey",
              module: "CP-1A",
              sha256: "a".repeat(64),
              label: "CP-1A",
              href: "",
            },
          }
        : {},
      handoffs: handoff ? { ["a".repeat(64)]: handoff } : {},
      models: [],
    },
    chips: {},
  } as unknown as Snapshot;
}

async function band(snapshot: Snapshot, hash = "#overview") {
  window.history.replaceState(null, "", `/${hash}`);
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue(Response.json(snapshot)));
  render(<ReportReader id="acme" mode="synthetic" />);
  return await screen.findByRole("region", { name: "Company" });
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  window.history.replaceState(null, "", "/");
});

const ratings: Rating[] = [
  { label: "B1", agency: "Moody's", scope: "issuer", outlook: "Stable", date: "2026-09-30" },
  { label: "B+", agency: "S&P", scope: "facility", outlook: "Positive", date: "2026-08-15" },
];

it("draws each rating as a tile, in order, with Facility beside a facility agency", async () => {
  const el = await band(fixture({ ratings }));
  const text = el.textContent;
  const order = ["Moody's", "B1", "Stable", "S&P", "Facility", "B+", "Positive"].map((word) =>
    text.indexOf(word),
  );
  expect(order.every((at) => at >= 0)).toBe(true);
  expect(order).toEqual([...order].sort((a, b) => a - b));
  expect(el.querySelector('[title="as of 2026-09-30"]')).not.toBeNull();
  expect(el.querySelector('[title="as of 2026-08-15"]')).not.toBeNull();
  expect(within(el).queryByText(GAP_RATINGS)).toBeNull();
});

it("draws the handoff's description and sector exactly", async () => {
  const el = await band(
    fixture({
      handoff: [
        profile([
          ["Business", "Designs and makes proprietary aircraft components."],
          ["Sector and segments", "Aerospace and defence components"],
        ]),
      ],
    }),
  );
  expect(within(el).getByText("Designs and makes proprietary aircraft components.")).toBeVisible();
  expect(within(el).getByText("Aerospace and defence components")).toBeVisible();
  expect(
    within(el).getByRole("button", { name: "Show sources for Business description" }),
  ).toBeInTheDocument();
});

it("prefers the catalogue sector over the handoff's", async () => {
  const el = await band(
    fixture({
      sector: "Aerospace & defense",
      handoff: [
        profile([
          ["Business", "Designs and makes proprietary aircraft components."],
          ["Sector and segments", "Aerospace and defence components"],
        ]),
      ],
    }),
  );
  expect(within(el).getByText("Aerospace & defense")).toBeVisible();
  expect(within(el).queryByText("Aerospace and defence components")).toBeNull();
});

it("prefers the company_description register over a Company profile table", async () => {
  const el = await band(
    fixture({
      handoff: [
        profile([["Business", "From the profile."]]),
        register(["Acme", "From the register.", "UK", "Industrial sector"]),
      ],
    }),
  );
  expect(within(el).getByText("From the register.")).toBeVisible();
  expect(within(el).queryByText("From the profile.")).toBeNull();
  expect(within(el).getByText("Industrial sector")).toBeVisible();
});

it("shows both gaps with no CP-1A and no ratings", async () => {
  const el = await band(fixture());
  expect(within(el).getByText(GAP_DESCRIPTION)).toBeVisible();
  expect(within(el).getByText(GAP_RATINGS)).toBeVisible();
});

it("shows the gap rather than guess between two Business rows", async () => {
  const el = await band(
    fixture({
      handoff: [
        profile([
          ["Business", "First."],
          ["Business", "Second."],
        ]),
      ],
    }),
  );
  expect(within(el).getByText(GAP_DESCRIPTION)).toBeVisible();
  expect(within(el).queryByText("First.")).toBeNull();
  expect(within(el).queryByText("Second.")).toBeNull();
});

it("sits between the heading and the report navigation on every tab", async () => {
  for (const hash of ["#overview", "#modules", "#forecast", "#evidence"]) {
    const el = await band(fixture({ ratings }), hash);
    const heading = screen.getByRole("heading", { level: 1 });
    const nav = screen.getByRole("navigation", { name: "Report sections" });
    expect(heading.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(el.compareDocumentPosition(nav) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(el.tagName).toBe("SECTION");
    cleanup();
  }
});

const bandEntry = (sections: Section[]) =>
  ({
    selected: true,
    output: { module: "CP-1A", id: "x", label: "CP-1A" },
    sections,
  }) as unknown as OutputEntry;
const emptyCatalogue = {
  id: "a",
  name: "A",
  issuer: "A",
  title: "",
  date: "",
  period: "",
  sector: "",
  metrics: {},
};

it("shows the unambiguous profile sector when Business rows are ambiguous", () => {
  render(
    <IdentityBand
      catalogue={emptyCatalogue}
      folder="f"
      entries={[
        bandEntry([
          section("Company profile", 10, [
            table(
              12,
              ["Field", "Detail"],
              [
                ["Business", "One."],
                ["Business", "Two."],
                ["Sector and segments", "Aero"],
              ],
            ),
          ]),
        ]),
      ]}
    />,
  );
  const el = screen.getByRole("region", { name: "Company" });
  expect(within(el).queryByText("Aero")).not.toBeNull();
  cleanup();
});

it("falls back to the profile sector when the register Sector cell is empty", () => {
  render(
    <IdentityBand
      catalogue={emptyCatalogue}
      folder="f"
      entries={[
        bandEntry([
          profile([
            ["Business", "P."],
            ["Sector and segments", "Aero"],
          ]),
          register(["A", "R.", "UK", ""]),
        ]),
      ]}
    />,
  );
  const el = screen.getByRole("region", { name: "Company" });
  expect(within(el).queryByText("R.")).not.toBeNull();
  expect(within(el).queryByText("Aero")).not.toBeNull();
  cleanup();
});

const outlookStatus = (el: HTMLElement, word: string) => {
  const holder = within(el).getByText(word).closest("span") as HTMLElement;
  return ["text-success-text", "text-error-text"].filter((name) => holder.className.includes(name));
};

it("colours the outlook only for Positive and Negative, by its first word", async () => {
  const outlooks = ["Positive", "Negative watch", "Stable", "Developing"];
  const el = await band(
    fixture({
      ratings: outlooks.map((outlook, index) => ({
        label: `R${String(index)}`,
        agency: `Agency ${String(index)}`,
        scope: "issuer" as const,
        outlook,
        date: "2026-09-30",
      })),
    }),
  );
  expect(outlookStatus(el, "Positive")).toEqual(["text-success-text"]);
  expect(outlookStatus(el, "Negative watch")).toEqual(["text-error-text"]);
  expect(outlookStatus(el, "Stable")).toEqual([]);
  expect(outlookStatus(el, "Developing")).toEqual([]);
});

it("draws handoff company text through readerText, and the catalogue sector as entered", async () => {
  const raw = "Makes components; see CP-2A for the downside case.";
  const el = await band(fixture({ handoff: [profile([["Business", raw]])] }));
  const shown = readerText(raw);
  expect(shown).not.toContain("CP-2A");
  const span = within(el).getByText(shown);
  expect(span.textContent).toBe(shown);
  expect(span.getAttribute("title")).toBe(shown);
  cleanup();
  const own = await band(fixture({ sector: "Sector CP-1 note" }));
  expect(within(own).getByText("Sector CP-1 note")).toBeVisible();
});

it("draws a handoff sector through readerText", async () => {
  const raw = "Aerospace, see CP-2A";
  const el = await band(fixture({ handoff: [profile([["Sector and segments", raw]])] }));
  expect(within(el).getByText(readerText(raw))).toBeVisible();
  expect(readerText(raw)).not.toContain("CP-2A");
});
