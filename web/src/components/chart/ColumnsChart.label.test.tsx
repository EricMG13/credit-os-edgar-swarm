import { render } from "@testing-library/react";
import { ColumnsChart } from "./ColumnsChart";

// X1-019: a bar that reaches the top tick must not push its raised label out of the drawing.
const FONT_SIZE = 12;
/** The mock's fix for three-series groups: the middle label one line higher. */
const MIDDLE_RAISE = 16;

function renderThree(notes: number) {
  return render(
    <ColumnsChart
      title="Maturities by year"
      groups={["FY25", "FY26", "FY27"]}
      series={[
        { name: "Term loan", values: [60, 70, 80], labels: ["60", "70", "80"] },
        { name: "Notes", values: [notes, 50, 40], labels: [String(notes), "50", "40"] },
        { name: "Revolver", values: [20, 30, 35], labels: ["20", "30", "35"] },
      ]}
      yTicks={[
        { value: 0, label: "0" },
        { value: 50, label: "50" },
        { value: 100, label: "100" },
      ]}
      table={{
        head: ["Group", "Term loan", "Notes", "Revolver"],
        rows: [
          { label: "FY25", cells: ["60", String(notes), "20"] },
          { label: "FY26", cells: ["70", "50", "30"] },
          { label: "FY27", cells: ["80", "40", "35"] },
        ],
      }}
    />,
  );
}

function labels(container: HTMLElement) {
  return [...container.querySelectorAll(".recharts-wrapper [data-label]")].map((t) => ({
    series: t.getAttribute("data-series") ?? "",
    text: t.textContent,
    /** The text's baseline in the drawing's own coordinates; its first line rises above it. */
    y: Number(t.getAttribute("y")),
  }));
}

describe("ColumnsChart label room in a group of three series", () => {
  it("keeps the raised middle label inside the drawing when its bar reaches the top tick", () => {
    const { container } = renderThree(100);
    const all = labels(container);
    expect(all.find((l) => l.series === "Notes" && l.text === "100")).toBeDefined();
    for (const label of all) {
      expect(label.y, `${label.series} ${label.text}`).toBeGreaterThanOrEqual(FONT_SIZE);
    }
  });

  it("still lifts the middle label one line above a neighbour at the same height", () => {
    const { container } = renderThree(60);
    const first = (series: string) => labels(container).find((l) => l.series === series)?.y;
    // FY25: Term loan and Notes are both 60, so their bars end at the same height.
    expect(first("Term loan")).toBeDefined();
    expect((first("Term loan") ?? 0) - (first("Notes") ?? 0)).toBeCloseTo(MIDDLE_RAISE, 5);
  });
});
