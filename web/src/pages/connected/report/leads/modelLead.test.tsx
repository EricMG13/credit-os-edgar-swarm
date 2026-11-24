// The model is faked in the shape `forwardPath` reads (overview/StressRow.test.tsx); no retained real
// published model is used. The lead reads only the model's net leverage row: Synthetic, built from the
// published-model contract (overview/stressData.ts `forwardPath`); not a real run.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { entry } from "../overview/rows.fixture";
import { leadProps } from "./fixtures/load";
import { ModelLead } from "./modelLead";

afterEach(cleanup);

const cell = (display: string, exact: string | null) =>
  exact === null
    ? { exact, display, reason: "the inputs do not state this period", status: "na" }
    : { exact, display, reason: null, status: "value" };

const col = (label: string, group: string) => ({
  label,
  group,
  start: "2025-04-01",
  end: "2026-03-31",
});

function model(
  cases: Record<string, [string, string | null][]>,
  limits = ["Arithmetic over stated inputs; not analytical review."],
) {
  const columns: { label: string; group: string; start: string | null; end: string | null }[] = [
    { label: "LTM", group: "Last twelve months", start: null, end: null },
  ];
  const cells = [cell("n.a.", null)];
  for (const [group, values] of Object.entries(cases))
    values.forEach(([display, exact], at) => {
      columns.push(col(`FY${String(2025 + at)}E`, group));
      cells.push(cell(display, exact));
    });
  return {
    cashflow: {
      columns,
      rows: [
        {
          band: "Credit metrics",
          label: "Net leverage (net debt / Adj EBITDA)",
          kind: "multiple",
          total: false,
          cells,
        },
      ],
      limits,
    },
  };
}

const TWO = model({
  "Base case": [
    ["2.00x", "2.0"],
    ["n.a.", null],
    ["1.00x", "1.0"],
  ],
  "Downside case": [
    ["2.50x", "2.5"],
    ["3.50x", "3.5"],
    ["3.00x", "3.0"],
  ],
});

const module_ = entry("CP-MODEL", [], [{ heading: "Findings", level: 2, line: 3, blocks: [] }]);
const props = (models: unknown[]) => leadProps(module_, models);
const num = (element: Element | null | undefined, name: string) =>
  Number(element?.getAttribute(name));
const ZERO = 250;

describe("ModelLead", () => {
  it("draws each case from zero in proportion, and joins only neighbouring periods that both have a figure", () => {
    const { container } = render(<ModelLead {...props([TWO])} />);
    const point = (name: string) => container.querySelector(`[data-point="${name}"]`);
    const height = (name: string) => ZERO - num(point(name), "cy");
    expect(height("Downside case FY2026E") / height("Downside case FY2025E")).toBeCloseTo(
      3.5 / 2.5,
      6,
    );
    expect(height("Base case FY2027E") / height("Base case FY2025E")).toBeCloseTo(1.0 / 2.0, 6);
    expect(height("Downside case FY2027E") / height("Base case FY2027E")).toBeCloseTo(3.0, 6);
    // Base case has no figure for FY2026E: nothing joins FY2025E to FY2027E.
    expect(container.querySelectorAll('[data-line="Base case"]')).toHaveLength(0);
    expect(container.querySelectorAll('[data-line="Downside case"]')).toHaveLength(2);
  });

  it("draws the period with no figure as a hatched gap mark with the model's reason, never zero", () => {
    const { container } = render(<ModelLead {...props([TWO])} />);
    expect(container.querySelectorAll("[data-gap]")).toHaveLength(1);
    expect(container.querySelector('[data-gap="FY2026E"]')).not.toBeNull();
    expect(container.querySelector('[data-point="Base case FY2026E"]')).toBeNull();
    expect(
      screen.getByText("Base case, FY2026E: the inputs do not state this period."),
    ).toBeVisible();
  });

  it("labels each case at its line end and its peak with the model's own text", () => {
    const { container } = render(<ModelLead {...props([TWO])} />);
    expect(container.querySelector('[data-case-label="Base case"]')?.textContent).toBe("Base case");
    expect(container.querySelector('[data-case-label="Downside case"]')?.textContent).toBe(
      "Downside case",
    );
    expect(container.querySelector('[data-peak="Base case"]')?.textContent).toBe("high 2.00x");
    expect(container.querySelector('[data-peak="Downside case"]')?.textContent).toBe("high 3.50x");
    const tile = screen.getByRole("region", { name: "Forward net leverage" });
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
      "Base case: highest stated value 2.00x in FY2025E; Downside case: highest stated value 3.50x in FY2026E",
    );
    expect(within(tile).getByRole("img")).toHaveAccessibleName(
      "Net leverage (net debt / Adj EBITDA), from zero. Base case: FY2025E 2.00x, FY2026E no figure, FY2027E 1.00x. Downside case: FY2025E 2.50x, FY2026E 3.50x, FY2027E 3.00x. The highest stated value of each case is marked (derived).",
    );
  });

  it("shows the model's first limit sentences beneath, one trace control and a table view", () => {
    render(<ModelLead {...props([TWO])} />);
    expect(screen.getByText("Arithmetic over stated inputs; not analytical review.")).toBeVisible();
    expect(screen.getByRole("link", { name: "Source for the forward path" })).toBeVisible();
    expect(screen.getByText("Table view")).toBeVisible();
    expect(document.body.textContent).not.toMatch(/CP-MODEL|CP-2G/);
  });

  it("links to the Forecast page and names the cases", () => {
    render(<ModelLead {...props([TWO])} />);
    const tile = screen.getByRole("region", { name: "Open the forecast" });
    expect(within(tile).getByRole("link", { name: "Open the forecast" })).toHaveAttribute(
      "href",
      "#forecast",
    );
    expect(
      within(tile)
        .getAllByRole("listitem")
        .map((item) => item.textContent),
    ).toEqual(["Base case", "Downside case"]);
  });

  it("draws the gap and keeps the link when there is no model, or the model has no net leverage row", () => {
    const { unmount } = render(<ModelLead {...props([])} />);
    expect(screen.getByText("The published model states no net leverage path.")).toBeVisible();
    expect(screen.getByRole("link", { name: "Open the forecast" })).toHaveAttribute(
      "href",
      "#forecast",
    );
    expect(screen.queryByRole("img")).toBeNull();
    unmount();
    const noRow = { cashflow: { ...TWO.cashflow, rows: [] } };
    render(<ModelLead {...props([noRow])} />);
    expect(screen.getByText("The published model states no net leverage path.")).toBeVisible();
    expect(screen.getByRole("link", { name: "Open the forecast" })).toBeVisible();
  });

  it("draws one case with one period as a single point, and ignores a second model", () => {
    const one = model({ "Base case": [["2.00x", "2.0"]] });
    const { container } = render(<ModelLead {...props([one, TWO])} />);
    expect(container.querySelectorAll("[data-point]")).toHaveLength(1);
    expect(container.querySelectorAll("[data-line]")).toHaveLength(0);
    expect(container.querySelector('[data-case-label="Downside case"]')).toBeNull();
  });

  it("draws a case whose only stated value is zero as a value", () => {
    const { container } = render(
      <ModelLead
        {...props([
          model({
            "Base case": [
              ["0.00x", "0"],
              ["1.00x", "1.0"],
            ],
          }),
        ])}
      />,
    );
    expect(num(container.querySelector('[data-point="Base case FY2025E"]'), "cy")).toBe(ZERO);
    expect(container.querySelectorAll("[data-gap]")).toHaveLength(0);
  });

  it("keeps peak labels clear of the axis labels and of each other, at the first period or the second", () => {
    const peaks = model({
      "Base case": [
        ["5.10x", "5.1"],
        ["4.60x", "4.6"],
        ["4.10x", "4.1"],
      ],
      "Downside case": [
        ["4.90x", "4.9"],
        ["5.00x", "5.0"],
        ["n.a.", null],
      ],
    });
    const { container } = render(<ModelLead {...props([peaks])} />);
    // Estimated boxes: 7 px a character, 11 px high, from the baseline up.
    const boxOf = (text: Element) => {
      const x = num(text, "x");
      const width = 7 * text.textContent.length;
      const anchor = text.getAttribute("text-anchor");
      const x0 = anchor === "end" ? x - width : anchor === "middle" ? x - width / 2 : x;
      const y = num(text, "y");
      return { x0, x1: x0 + width, y0: y - 11, y1: y };
    };
    const overlap = (a: ReturnType<typeof boxOf>, b: ReturnType<typeof boxOf>) =>
      a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;
    const labels = [...container.querySelectorAll("[data-peak]")].map(boxOf);
    expect(labels).toHaveLength(2);
    const ticks = [...container.querySelectorAll("text")]
      .filter((text) => /^\d+x$/.test(text.textContent))
      .map(boxOf);
    expect(ticks.length).toBeGreaterThan(2);
    const [first, second] = labels;
    if (!first || !second) throw new Error("peak labels missing");
    expect(overlap(first, second)).toBe(false);
    for (const label of labels) {
      for (const tick of ticks) expect(overlap(label, tick)).toBe(false);
      // Clear of the axis: nothing is drawn left of the plot edge but the tick labels.
      expect(label.x0).toBeGreaterThanOrEqual(60);
    }
    expect(container.querySelector('[data-peak="Base case"]')?.textContent).toBe("high 5.10x");
    expect(container.querySelector('[data-peak="Downside case"]')?.textContent).toBe("high 5.00x");
  });

  it("keeps overlapping end labels apart", () => {
    const { container } = render(
      <ModelLead
        {...props([
          model({
            "Base case": [
              ["2.00x", "2.0"],
              ["2.00x", "2.0"],
            ],
            "Downside case": [
              ["2.10x", "2.1"],
              ["2.10x", "2.1"],
            ],
          }),
        ])}
      />,
    );
    const top = (name: string) => num(container.querySelector(`[data-case-label="${name}"]`), "y");
    expect(Math.abs(top("Base case") - top("Downside case"))).toBeGreaterThanOrEqual(14);
  });

  it("a blocked module is the frame's one gap", () => {
    const blocked = entry(
      "CP-MODEL",
      [],
      [
        { heading: "Findings", level: 2, line: 3, blocks: [] },
        {
          heading: "Bottom line",
          level: 3,
          line: 4,
          blocks: [{ type: "text", line: 5, end: 5, text: "Not assessable: no model inputs." }],
        },
      ],
    );
    render(<ModelLead {...leadProps(blocked, [TWO])} />);
    expect(screen.getByText("Not assessable: no model inputs.")).toBeVisible();
    expect(screen.queryByRole("img")).toBeNull();
  });
});
