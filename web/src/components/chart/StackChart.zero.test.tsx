import { render, screen, within } from "@testing-library/react";
import { StackChart, type StackPart } from "./StackChart";

// X1-024 and C4-004: a facility with no balance is a legend row with no segment, never a failure.
const DRAWN: StackPart = { name: "Term loan", value: 80, text: "80", share: "100%" };
const ZERO: StackPart = { name: "Revolver drawn", value: 0, text: "0", share: "0%" };
const TABLE = {
  head: ["Instrument", "Amount", "Share"],
  rows: [
    { label: "Term loan", cells: ["80", "100%"] },
    { label: "Revolver drawn", cells: ["0", "0%"] },
  ],
};

function segments(container: HTMLElement) {
  return [...container.querySelectorAll(".recharts-wrapper [data-segment]")];
}

function legendRows() {
  const legend = screen.getByRole("list", { name: "Ranked legend" });
  return within(legend).getAllByRole("listitem");
}

describe("StackChart with a part that has no balance", () => {
  it("draws a part of zero as a legend row with no segment and no swatch", () => {
    const { container } = render(
      <StackChart title="Debt by instrument" parts={[DRAWN, ZERO]} table={TABLE} />,
    );
    expect(segments(container).map((s) => s.getAttribute("data-part"))).toEqual(["Term loan"]);
    const rows = legendRows();
    expect(
      rows.map((li) => [...li.children].map((c) => c.textContent).filter((t) => t !== "")),
    ).toEqual([
      ["Term loan", "80", "100%"],
      ["Revolver drawn", "0", "0%"],
    ]);
    expect(rows.map((li) => li.querySelector("svg") !== null)).toEqual([true, false]);
  });

  it("rounds the end of the last segment that is drawn, not of the last part", () => {
    const { container } = render(
      <StackChart title="Debt by instrument" parts={[DRAWN, ZERO]} table={TABLE} />,
    );
    expect(segments(container).map((s) => s.hasAttribute("data-end"))).toEqual([true]);
  });

  it("keeps the colour a part takes by its rank when an earlier part has no segment", () => {
    const parts: StackPart[] = [
      { name: "Revolver", value: 0, text: "0" },
      { name: "Term loan", value: 80, text: "80" },
      { name: "Notes", value: 20, text: "20" },
    ];
    const { container } = render(
      <StackChart
        title="Debt by instrument"
        parts={parts}
        table={{
          head: ["Instrument", "Amount"],
          rows: parts.map((p) => ({ label: p.name, cells: [p.text] })),
        }}
      />,
    );
    expect(segments(container).map((s) => s.getAttribute("fill"))).toEqual([
      "var(--color-chart-2)",
      "var(--color-chart-3)",
    ]);
    expect(segments(container).map((s) => s.hasAttribute("data-end"))).toEqual([false, true]);
  });

  it("lists a part whose balance is not stated, with the source's words, and draws no segment", () => {
    const parts: StackPart[] = [
      { name: "Senior secured", value: 1200, text: "1,200" },
      { name: "Senior notes", value: 0, text: "0" },
      { name: "Subordinated notes", value: null, text: "Not supplied: balance not stated" },
    ];
    const { container } = render(
      <StackChart
        title="Debt stack"
        parts={parts}
        table={{
          head: ["Facility", "Amount"],
          rows: parts.map((p) => ({ label: p.name, cells: [p.text] })),
        }}
      />,
    );
    expect(segments(container).map((s) => s.getAttribute("data-part"))).toEqual(["Senior secured"]);
    const rows = legendRows();
    expect(
      rows.map((li) => [...li.children].map((c) => c.textContent).filter((t) => t !== "")),
    ).toEqual([
      ["Senior secured", "1,200"],
      ["Senior notes", "0"],
      ["Subordinated notes", "Not supplied: balance not stated"],
    ]);
    expect(rows.map((li) => li.querySelector("svg") !== null)).toEqual([true, false, false]);
  });

  it("draws a stack of parts none of which has a balance as the legend alone", () => {
    const { container } = render(
      <StackChart
        title="Debt by instrument"
        parts={[ZERO, { ...ZERO, name: "Undrawn notes" }]}
        table={{
          ...TABLE,
          rows: [
            { label: "Revolver drawn", cells: ["0", "0%"] },
            { label: "Undrawn notes", cells: ["0", "0%"] },
          ],
        }}
      />,
    );
    expect(segments(container)).toEqual([]);
    expect(legendRows()).toHaveLength(2);
  });

  it("still throws on a negative value, and on a value that is not a number", () => {
    const quiet = vi.spyOn(console, "error").mockImplementation(() => undefined);
    for (const value of [-1, Number.NaN]) {
      expect(() =>
        render(<StackChart title="T" parts={[DRAWN, { ...ZERO, value }]} table={TABLE} />),
      ).toThrow(/"Revolver drawn".*zero or more/);
    }
    quiet.mockRestore();
  });
});
