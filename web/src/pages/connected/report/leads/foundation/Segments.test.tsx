// The first cases read the retained TransDigm FY2024 CP-1 handoff (outdated evidence: shape and
// scope only); expected values are written out by hand from its `Segment schedule`. The adversarial
// cases are synthetic, built from the module contract (the CP-1 segment schedule headers); not a real handoff.
// Round 2 (ruling i): the data layer returns no segment sums or group reconciliation; tests that
// asserted them were updated (marked "ruling i"). The ratio column is still the old tile's own
// geometry (segmentsGeometry), to be removed when the tile is rebuilt on foundationData.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { entry, section, table } from "../../overview/rows.fixture";
import { cp1Entry, leadProps } from "../fixtures/load";
import { readCell } from "../kit/numbers";
import { SegmentsTile } from "./Segments";
import { oneDecimal, ratioPercent, wrapName } from "./segmentsGeometry";

afterEach(cleanup);

const HEADERS = [
  "Business unit",
  "Period",
  "Net sales",
  "EBITDA As Defined",
  "Unit",
  "Basis",
  "Source",
];
const SOURCE = "issuer_10-K.htm.jsonl, pages 49–50";

function segments(rows: string[][], group: [string, string] | null = ["400", "120"]) {
  return entry(
    "CP-1",
    [],
    [
      section(
        "Segment schedule",
        10,
        table(
          12,
          HEADERS,
          rows.map((row) => [...row, "US$m", "Reported segment flow", SOURCE]),
        ),
      ),
      ...(group
        ? [
            section(
              "Chart data: revenue and EBITDA",
              30,
              table(
                32,
                ["Period", "Revenue", "Adjusted EBITDA", "Reporting unit", "Basis and limitation"],
                [
                  ["FY2023", "1", "1", "US$m", "Annual."],
                  ["FY2024", group[0], group[1], "US$m", "Annual."],
                ],
              ),
            ),
          ]
        : []),
    ],
  );
}

const draw = (data: ReturnType<typeof segments>) => {
  render(<SegmentsTile lead={leadProps(data)} />);
  return screen.getByRole("region", { name: "Segments" });
};
/** The mark carrying this data attribute value (jsdom's selector engine trips on "&" in a value). */
const byData = (tile: HTMLElement, attribute: string, value: string) =>
  [...tile.querySelectorAll(`[data-${attribute}]`)].find(
    (element) => element.getAttribute(`data-${attribute}`) === value,
  ) ?? null;
const width = (element: Element | null) => Number(element?.getAttribute("width"));
const left = (element: Element | null) => Number(element?.getAttribute("x"));

describe("oneDecimal", () => {
  it("rounds half up from the digits alone", () => {
    expect(oneDecimal("56.74")).toBe("56.7");
    expect(oneDecimal("51.55")).toBe("51.6");
    expect(oneDecimal("42.63")).toBe("42.6");
    expect(oneDecimal("99.95")).toBe("100.0");
    expect(oneDecimal("0.05")).toBe("0.1");
    expect(oneDecimal("7")).toBe("7.0");
  });
  it("rounds a negative away from zero and drops the sign of a zero", () => {
    expect(oneDecimal("-12.35")).toBe("-12.4");
    expect(oneDecimal("-0.04")).toBe("0.0");
  });
  it("refuses what is not a plain decimal", () => {
    expect(oneDecimal("56.7%")).toBeNull();
    expect(oneDecimal("Not supplied: x")).toBeNull();
  });
});

describe("ratioPercent", () => {
  const n = (text: string) => readCell(text);
  it("gives EBITDA ÷ sales to one decimal: 2,236 / 3,941 = 56.73…% → 56.7", () => {
    expect(ratioPercent(n("2236"), n("3941"))).toBe("56.7");
    expect(ratioPercent(n("1962"), n("3809"))).toBe("51.5");
    expect(ratioPercent(n("81"), n("190"))).toBe("42.6");
  });
  it("never rounds twice: 567.46 / 1,000 = 56.746% is 56.7, though the two-decimal string reads 56.75", () => {
    // percentOf("567.46", "1000") = "56.75" was asserted here; percentOf is removed from the kit (ruling i).
    expect(oneDecimal("56.75")).toBe("56.8");
    expect(ratioPercent(n("567.46"), n("1000"))).toBe("56.7");
  });
  it("keeps the sign of a loss and gives nothing for a zero or missing whole", () => {
    expect(ratioPercent(n("-50"), n("200"))).toBe("-25.0");
    expect(ratioPercent(n("5"), n("0"))).toBeNull();
    expect(ratioPercent(n("5"), n("Not supplied: no line"))).toBeNull();
  });
});

describe("wrapName", () => {
  it("keeps a short name on one line and breaks a long one at spaces", () => {
    expect(wrapName("Power & Control")).toEqual(["Power & Control"]);
    expect(wrapName("Aerospace Components and Systems Integration")).toEqual([
      "Aerospace",
      "Components and",
      "Systems",
      "Integration",
    ]);
    expect(wrapName("Supercalifragilisticexpialidocious")).toEqual([
      "Supercalifragilis",
      "ticexpialidocious",
    ]);
  });
});

describe("SegmentsTile on the retained handoff", () => {
  it("titles the tile from the period, with no derived sum (ruling i), and names unit and period", () => {
    const tile = draw(cp1Entry());
    expect(within(tile).getByRole("heading", { name: "Segments, FY2024" })).toBeVisible();
    expect(within(tile).getByText("Segments · US$m, FY2024")).toBeVisible();
  });
  it("draws every bar on one scale from zero, in proportion to the stated amounts", () => {
    const tile = draw(cp1Entry());
    const bar = (name: string) => byData(tile, "bar", name);
    expect(width(bar("Power & Control sales")) / width(bar("Airframe sales"))).toBeCloseTo(
      3941 / 3809,
      6,
    );
    expect(width(bar("Power & Control ebitda")) / width(bar("Power & Control sales"))).toBeCloseTo(
      2236 / 3941,
      6,
    );
    expect(width(bar("Non-aviation ebitda")) / width(bar("Airframe sales"))).toBeCloseTo(
      81 / 3809,
      6,
    );
    for (const name of ["Power & Control", "Airframe", "Non-aviation"])
      expect(left(bar(`${name} sales`))).toBe(left(bar(`${name} ebitda`)));
    expect(within(tile).getByText("One scale, 0 to 4,000")).toBeInTheDocument();
    expect(within(tile).getByRole("img")).toHaveAttribute("width", "100%");
  });
  it("labels the ratios derived and not a reported margin", () => {
    const tile = draw(cp1Entry());
    expect(
      ["Power & Control", "Airframe", "Non-aviation"].map(
        (name) => byData(tile, "ratio", name)?.textContent,
      ),
    ).toEqual(["56.7%", "51.5%", "42.6%"]);
    expect(within(tile).getAllByText("EBITDA ÷ sales, derived").length).toBeGreaterThanOrEqual(1);
    expect(
      within(tile).getByText(
        "EBITDA ÷ sales is the ratio of the two bars, derived; it is not a reported margin.",
      ),
    ).toBeVisible();
  });
  it("lists unallocated corporate apart in words, never as a bar", () => {
    const tile = draw(cp1Entry());
    expect(
      within(tile).getByText("Unallocated corporate: EBITDA −106; no separate revenue line"),
    ).toBeVisible();
    expect(tile.querySelector('[data-segment="Unallocated corporate"]')).toBeNull();
    expect(tile.querySelector('[data-bar^="Unallocated"]')).toBeNull();
  });
  it("states no segment sum or reconciliation (ruling i)", () => {
    const tile = draw(cp1Entry());
    expect(within(tile).queryByText(/sum to|sums to/)).toBeNull();
  });
  it("says every number in the aria-label and that the ratios are derived", () => {
    const tile = draw(cp1Entry());
    expect(within(tile).getByRole("img").getAttribute("aria-label")).toBe(
      "Segments FY2024, US$m, net sales and EBITDA As Defined: Power & Control 3,941 and 2,236, ratio 56.7%; " +
        "Airframe 3,809 and 1,962, ratio 51.5%; Non-aviation 190 and 81, ratio 42.6%; " +
        "Unallocated corporate: EBITDA −106; no separate revenue line. Ratios derived.",
    );
  });
  it("has one trace control and a table view, and draws no source reference", () => {
    const tile = draw(cp1Entry());
    expect(within(tile).getAllByRole("link", { name: /Source for/ })).toHaveLength(1);
    expect(
      within(tile).getByRole("link", { name: "Source for the segment figures" }),
    ).toHaveAttribute("href", expect.stringContaining("#evidence/"));
    const rows = within(tile)
      .getAllByRole("row")
      .map((row) => [...row.querySelectorAll("th, td")].map((cell) => cell.textContent));
    expect(rows).toEqual([
      ["Segment", "Net sales", "EBITDA As Defined", "EBITDA ÷ sales, derived"],
      ["Power & Control", "3,941", "2,236", "56.7%"],
      ["Airframe", "3,809", "1,962", "51.5%"],
      ["Non-aviation", "190", "81", "42.6%"],
      ["Unallocated corporate", "Not supplied: no separate revenue line", "−106", "Not ranked"],
    ]);
    expect(tile.textContent).not.toMatch(/jsonl|TDG_|pages 49|10-K/);
  });
});

describe("SegmentsTile states", () => {
  it("draws a gap cell as the hatched slot with the reason beneath: no bar, no ratio, no sales total", () => {
    const tile = draw(
      segments([
        ["Alpha", "FY2024", "300", "90"],
        ["Beta", "FY2024", "Not supplied: no line", "30"],
      ]),
    );
    expect(tile.querySelector('[data-bar="Beta sales"]')).toBeNull();
    expect(tile.querySelector('[data-gap="Beta sales"]')).not.toBeNull();
    expect(tile.querySelector('[data-bar="Beta ebitda"]')).not.toBeNull();
    expect(tile.querySelector('[data-ratio="Beta"]')).toBeNull();
    expect(within(tile).getByText("Beta net sales: no line.")).toBeVisible();
    expect(within(tile).getByRole("heading", { name: "Segments, FY2024" })).toBeVisible();
    expect(within(tile).queryByText(/Segment sales sum to/)).toBeNull();
    expect(within(tile).getByRole("img").getAttribute("aria-label")).toContain(
      "Beta not supplied and 30, no ratio",
    );
  });
  it("keeps a stated zero as a value: a zero-width bar labelled 0, and no ratio", () => {
    const tile = draw(
      segments([
        ["Alpha", "FY2024", "400", "120"],
        ["Beta", "FY2024", "0", "0"],
      ]),
    );
    const zero = tile.querySelector('[data-bar="Beta sales"]');
    expect(zero).not.toBeNull();
    expect(width(zero)).toBe(0);
    expect(tile.querySelector('[data-gap^="Beta"]')).toBeNull();
    expect(tile.querySelector('[data-ratio="Beta"]')).toBeNull();
    expect(within(tile).getAllByRole("row").at(-1)?.textContent).toBe("Beta00No ratio");
  });
  it("draws a segment loss to the left of zero on a scale that starts below zero", () => {
    const tile = draw(
      segments(
        [
          ["Alpha", "FY2024", "400", "160"],
          ["Beta", "FY2024", "200", "-50"],
        ],
        ["600", "110"],
      ),
    );
    const loss = tile.querySelector('[data-bar="Beta ebitda"]');
    const sales = tile.querySelector('[data-bar="Beta sales"]');
    // The loss ends at zero, where every positive bar starts.
    expect(left(loss) + width(loss)).toBeCloseTo(left(sales), 6);
    expect(left(sales)).toBeGreaterThan(140);
    expect(width(loss) / width(sales)).toBeCloseTo(50 / 200, 6);
    expect(tile.querySelector('[data-ratio="Beta"]')?.textContent).toBe("−25.0%");
    expect(within(tile).getByText(/^One scale, −\d/)).toBeInTheDocument();
    expect(within(tile).queryByText(/sums to/)).toBeNull(); // ruling i
  });
  it("states no sum even when the segments do not add to the group's figures (ruling i)", () => {
    const tile = draw(
      segments(
        [
          ["Alpha", "FY2024", "300", "90"],
          ["Beta", "FY2024", "90", "30"],
          ["Unallocated corporate", "FY2024", "Not supplied: none", "-10"],
        ],
        ["400", "100"],
      ),
    );
    expect(within(tile).queryByText(/sum to|sums to/)).toBeNull();
  });
  it("draws no reconciliation when the group's figures are not in the handoff", () => {
    const tile = draw(segments([["Alpha", "FY2024", "300", "90"]], null));
    expect(within(tile).queryByText(/sum to|sums to/, { ignore: "h3" })).toBeNull();
    expect(within(tile).getByRole("heading", { name: "Segments, FY2024" })).toBeVisible();
  });
  it("wraps a long name onto several lines inside the figure", () => {
    const tile = draw(
      segments([["Aerospace Components and Systems Integration", "FY2024", "300", "90"]]),
    );
    const name = tile.querySelector('[data-segment^="Aerospace"] text');
    expect(name?.querySelectorAll("tspan")).toHaveLength(4);
    expect(within(tile).getByRole("img").getAttribute("viewBox")).toMatch(/^0 0 516 /);
  });
  it("keeps a reason that names a source in Evidence", () => {
    const tile = draw(
      segments([
        ["Alpha", "FY2024", "300", "90"],
        ["Beta", "FY2024", "Not supplied: see p. 12 of issuer_10-K.htm", "30"],
      ]),
    );
    expect(within(tile).getByText("Beta net sales: Detail is in Evidence.")).toBeVisible();
    expect(tile.textContent).not.toMatch(/10-K|p\. 12/);
  });
  it("does not draw a business unit stated twice for the period", () => {
    const tile = draw(
      segments([
        ["Alpha", "FY2024", "300", "90"],
        ["Alpha", "FY2024", "310", "95"],
      ]),
    );
    // Round 2: the data layer refuses the schedule and says why (figureGap).
    expect(
      within(tile).getByText(
        "The segment schedule states Alpha net sales more than once for FY2024.",
      ),
    ).toBeVisible();
    expect(within(tile).queryByRole("img")).toBeNull();
  });
  it("draws the gap when every amount is a gap, and when the schedule is absent", () => {
    const all = draw(
      segments([["Alpha", "FY2024", "Not supplied: no line", "Not supplied: no line"]]),
    );
    expect(
      within(all).getByText("The segment schedule states no amount for any business unit."),
    ).toBeVisible();
    expect(within(all).queryByRole("img")).toBeNull();
    cleanup();
    const none = draw(entry("CP-1", [], []));
    expect(within(none).getByText("The segment schedule is not in the handoff.")).toBeVisible();
    expect(within(none).queryByRole("link", { name: /Source for/ })).toBeNull();
  });
});
