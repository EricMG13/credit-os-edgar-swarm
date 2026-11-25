// Reads the retained TransDigm CP-1 handoffs (accepted FY2024, relative value and distressed draft
// 1, earnings update draft 1; outdated evidence: shape and scope only) and mutations of them
// (`fixtures/mutations.ts`: tables dropped, a third period); a mutation is not a real handoff.
// The chart lists below are written out by hand from the fixtures' `Chart data:` sections and chart
// descriptors, not computed by the code under test.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import type { OutputEntry } from "../../../publishedReport";
import {
  cp1Entry,
  distressedCp1Entry,
  earningsUpdateCp1Draft1Entry,
  leadProps,
  relativeValueCp1Entry,
} from "../fixtures/load";
import { dropTable, edited, threePeriodCp1 } from "../fixtures/mutations";
import { section, table } from "../../overview/rows.fixture";
import { FoundationLead } from "./Foundation";

afterEach(cleanup);

const regions = () =>
  screen.getAllByRole("region").map((region) => region.getAttribute("aria-label"));
const spans = () =>
  screen.getAllByRole("region").map((region) => /lg:col-span-(\d+)/.exec(region.className)?.[1]);

describe("the composition", () => {
  it("draws the eight tiles in rows of neighbours: 12, 7 + 5, 6 + 6, 6 + 6, then the wall", () => {
    render(<FoundationLead {...leadProps(cp1Entry())} />);
    expect(regions()).toEqual([
      "Earnings and debt",
      "Cash conversion",
      "Net debt",
      "EBITDA bridge",
      "Segments",
      "Interest cover",
      "Debt stack",
      "Debt maturities",
    ]);
    expect(spans()).toEqual(["12", "7", "5", "6", "6", "6", "6", "6"]);
  });

  it("adds the periods tile beside the wall only for three periods (or another kind, or a gap)", () => {
    render(<FoundationLead {...leadProps(threePeriodCp1())} />);
    expect(regions().slice(-2)).toEqual(["Debt maturities", "Periods"]);
    expect(spans()).toEqual(["12", "7", "5", "6", "6", "6", "6", "6", "6"]);
  });

  it("keeps every tile as tall as its content, never stretched to the tile beside it", () => {
    render(<FoundationLead {...leadProps(threePeriodCp1())} />);
    for (const name of ["Interest cover", "Debt stack", "Debt maturities", "Periods"]) {
      const tile = screen.getByRole("region", { name });
      const wrapper = tile.parentElement?.className ?? "";
      expect(wrapper, name).toMatch(/\bcontents\b/);
      expect(wrapper, name).toMatch(/lg:\[&>section\]:self-start/);
    }
  });

  it("gives every drawn figure exactly one trace control", () => {
    render(<FoundationLead {...leadProps(cp1Entry())} />);
    for (const name of ["Interest cover", "Debt stack", "EBITDA bridge"]) {
      const tile = screen.getByRole("region", { name });
      expect(within(tile).getAllByRole("link", { name: /Source for/ }), name).toHaveLength(1);
    }
  });

  it("lists the figures it draws itself, so the frame does not draw the typed figures again", () => {
    expect(FoundationLead.draws).toEqual(["figures"]);
  });
});

describe("gaps", () => {
  it("draws one plain gap for an absent figure, in that figure's place", () => {
    render(<FoundationLead {...leadProps(dropTable(cp1Entry(), "Segment schedule"))} />);
    expect(regions()).toHaveLength(8);
    const segments = screen.getByRole("region", { name: "Segments" });
    expect(segments.textContent).toBe("Segments · This page could not read the segment schedule.");
    expect(segments.className).not.toMatch(/gap-hatch/);
  });

  it("draws the interest cover and debt stack gaps in their places", () => {
    let entry = dropTable(cp1Entry(), "Chart data: interest cover");
    entry = dropTable(entry, "Chart data: debt stack");
    render(<FoundationLead {...leadProps(entry)} />);
    expect(screen.getByRole("region", { name: "Interest cover" }).textContent).toBe(
      "Interest cover · This page could not read interest cover.",
    );
    expect(screen.getByRole("region", { name: "Debt stack" }).textContent).toBe(
      "Debt stack · This page could not read the debt stack.",
    );
  });

  it("draws a single gap, not eight, when the handoff carries no figure at all", () => {
    render(<FoundationLead {...leadProps(edited(cp1Entry(), () => null))} />);
    expect(regions()).toEqual(["Financial foundation"]);
    expect(screen.getByRole("region").textContent).toBe(
      "Financial foundation · This page could not read a figure of the financial foundation.",
    );
    expect(screen.queryAllByRole("img")).toHaveLength(0);
  });

  it("draws nothing for a blocked or unreadable module: the frame states it in the header", () => {
    const entry = cp1Entry();
    const props = leadProps({ ...entry, output: { ...entry.output, parseError: "unreadable" } });
    const { container } = render(<FoundationLead {...props} />);
    expect(container).toBeEmptyDOMElement();
  });
});

// Every chart the store publishes for Financial foundation (its `Chart data:` sections, and the
// descriptor titles the library writes for them) must be drawn by this lead once the frame defers
// to it ("figures"). Hand-written: each fixture's charts and the tile that draws each.
const SEVEN = [
  "Leverage",
  "Interest cover",
  "Liquidity",
  "Debt maturities",
  "Revenue and EBITDA",
  "Debt stack",
  "EBITDA bridge",
];
const FIXTURES: [string, () => OutputEntry, string[]][] = [
  ["accepted", cp1Entry, SEVEN],
  ["relative value", relativeValueCp1Entry, SEVEN],
  ["distressed", distressedCp1Entry, SEVEN],
  ["earnings update draft 1", earningsUpdateCp1Draft1Entry, SEVEN],
  ["three-period mutation", threePeriodCp1, SEVEN],
];
/** The tile that draws each chart, and a figure the tile must show from that chart's table. */
const DRAWN_BY: Record<string, { tile: string; shows: RegExp }> = {
  Leverage: { tile: "Earnings and debt", shows: /6\.53/ },
  "Interest cover": { tile: "Interest cover", shows: /3\.29x/ },
  Liquidity: { tile: "Net debt", shows: /6,261/ },
  "Debt maturities": { tile: "Debt maturities", shows: /\d/ },
  "Revenue and EBITDA": { tile: "Earnings and debt", shows: /7,940/ },
  // The 2028 secured notes: 2,100 principal; 2,077 carrying value in the distressed draft.
  "Debt stack": { tile: "Debt stack", shows: /2028 secured notes[^]*2,(100|077)/i },
  "EBITDA bridge": { tile: "EBITDA bridge", shows: /4,173/ },
};

const chartTitles = (entry: OutputEntry) =>
  entry.sections
    .filter((section) => section.heading.startsWith("Chart data: "))
    .map((section) => section.heading.slice("Chart data: ".length))
    .map((title) => title.charAt(0).toUpperCase() + title.slice(1));
const descriptorTitles = (entry: OutputEntry) =>
  (entry.output.charts as { title: string }[] | undefined)?.map((chart) => chart.title) ?? [];

describe("every published chart of Financial foundation is drawn by the lead", () => {
  it("lists a published chart no tile draws as its stated rows, after the tiles (mutation)", () => {
    const base = cp1Entry();
    const entry: OutputEntry = {
      ...base,
      sections: [
        ...base.sections,
        section(
          "Chart data: add-back share",
          900,
          table(
            901,
            ["Period", "Add-back share", "Reporting unit", "Basis and limitation"],
            [["FY2024", "8.6", "%", "Test row."]],
          ),
        ),
      ],
    };
    render(<FoundationLead {...leadProps(entry)} />);
    expect(regions().slice(-2)).toEqual(["Debt maturities", "Add-back share"]);
    const tile = screen.getByRole("region", { name: "Add-back share" });
    expect(tile.querySelector('[data-cell="Add-back share"]')?.textContent).toBe("8.6");
  });

  for (const [name, make, expected] of FIXTURES)
    it(`${name}: ${String(expected.length)} charts, each in its tile with its figures`, () => {
      const entry = make();
      expect(chartTitles(entry)).toEqual(expected);
      expect(descriptorTitles(entry)).toEqual(expected);
      render(<FoundationLead {...leadProps(entry)} />);
      // Nothing is left to the stated-rows fallback: every chart is in one of the lead's own tiles.
      expect(regions()).toHaveLength(name === "three-period mutation" ? 9 : 8);
      for (const title of expected) {
        const drawn = DRAWN_BY[title];
        expect(drawn, title).toBeDefined();
        if (!drawn) continue;
        const tile = screen.getByRole("region", { name: drawn.tile });
        const reading = [...tile.querySelectorAll("svg[role='img']")]
          .map((svg) => svg.getAttribute("aria-label") ?? "")
          .join(" ");
        expect(tile.querySelector("svg[role='img']"), `${name}: ${title}`).not.toBeNull();
        expect(`${tile.textContent} ${reading}`, `${name}: ${title}`).toMatch(drawn.shows);
      }
    });
});
