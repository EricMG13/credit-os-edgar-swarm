// Synthetic, built from the mark contracts in kit/marks/index.ts; not a real handoff. Expected
// positions are written out by hand from the scale (domain → pixel range), not read back from
// the marks' own layout code.
import { render } from "@testing-library/react";
import { Bullet, Dumbbell, niceAxis, Waterfall, type DumbbellRow, type WaterfallRow } from ".";

const WIDE = 1100;
const PHONE = 340;
const CHAR = 7;

const num = (element: Element, name: string) => Number(element.getAttribute(name));

type Box = { left: number; right: number; top: number; bottom: number; what: string };

/** Every line of text as an estimated box: 7 px a character, the font size tall. */
function textBoxes(svg: SVGSVGElement): Box[] {
  return [...svg.querySelectorAll("text")].flatMap((text) => {
    if (text.closest('[data-part="legend"]')) return [];
    // Text written inside a bar on purpose (the bullet's value in card colour) is not a collision.
    if (text.getAttribute("class")?.includes("fill-surface-card")) return [];
    const size = num(text, "font-size");
    const anchor = text.getAttribute("text-anchor") ?? "start";
    const spans = text.querySelectorAll("tspan:not([data-part])");
    const lines = spans.length
      ? [...spans].map((span) => ({
          content: span.textContent,
          x: num(span, "x"),
          y: num(span, "y"),
        }))
      : [{ content: text.textContent, x: num(text, "x"), y: num(text, "y") }];
    return lines.map(({ content, x, y }) => {
      const width = content.length * CHAR;
      const left = anchor === "end" ? x - width : anchor === "middle" ? x - width / 2 : x;
      return {
        left,
        right: left + width,
        top: y - size * 0.8,
        bottom: y + size * 0.2,
        what: content,
      };
    });
  });
}

/** Every drawn mark: bars, gap slots, rings and dots, the limit rule. */
function markBoxes(svg: SVGSVGElement): Box[] {
  const rects = [...svg.querySelectorAll("rect[data-bar], g[data-gap] > rect")].map((rect) => ({
    left: num(rect, "x"),
    right: num(rect, "x") + num(rect, "width"),
    top: num(rect, "y"),
    bottom: num(rect, "y") + num(rect, "height"),
    what: rect.getAttribute("data-label") ?? "rect",
  }));
  const circles = [
    ...svg.querySelectorAll("circle[data-prior], circle[data-current], circle[data-mark]"),
  ].map((circle) => {
    const [cx, cy, r] = [num(circle, "cx"), num(circle, "cy"), num(circle, "r") + 1];
    return { left: cx - r, right: cx + r, top: cy - r, bottom: cy + r, what: "circle" };
  });
  const rules = [...svg.querySelectorAll('line[data-mark="limit"]')].map((line) => ({
    left: num(line, "x1") - 1,
    right: num(line, "x1") + 1,
    top: num(line, "y1"),
    bottom: num(line, "y2"),
    what: "limit",
  }));
  return [...rects, ...circles, ...rules];
}

const hits = (a: Box, b: Box) =>
  a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;

function expectReadable(svg: SVGSVGElement, width: number) {
  const texts = [...svg.querySelectorAll("text")];
  expect(texts.length).toBeGreaterThan(0);
  for (const text of texts) {
    expect(num(text, "font-size")).toBeGreaterThanOrEqual(11);
    expect(text.getAttribute("class") ?? "").not.toMatch(/text-\[(?:[0-9]|10)(?:\.\d+)?px\]/);
  }
  expect(svg.getAttribute("viewBox")?.split(" ")[2]).toBe(String(width));
  const collisions = textBoxes(svg).flatMap((text) =>
    markBoxes(svg)
      .filter((mark) => hits(text, mark))
      .map((mark) => `${text.what} on ${mark.what}`),
  );
  expect(collisions).toEqual([]);
  for (const box of textBoxes(svg)) {
    expect(box.left).toBeGreaterThanOrEqual(-0.5);
    expect(box.right).toBeLessThanOrEqual(width + 0.5);
  }
}

const svgOf = (container: HTMLElement) => container.querySelector("svg") as SVGSVGElement;

// ---------------------------------------------------------------------------------------------
describe("niceAxis", () => {
  it("runs from zero at the ticks() steps when asked to", () => {
    const axis = niceAxis([3813, 4173], { zero: true });
    expect(axis.ticks.map((tick) => tick.value)).toEqual([0, 1000, 2000, 3000, 4000, 5000]);
    expect(axis.cut).toBe(false);
  });

  it("cuts the axis where values sit high: CP-1's bridge starts at 3,600 and ends at 4,200", () => {
    const axis = niceAxis([3813, 3883, 4100, 4158, 4173], { zero: false });
    expect(axis.ticks.map((tick) => tick.label)).toEqual(["3,600", "3,800", "4,000", "4,200"]);
    expect(axis.cut).toBe(true);
    expect(axis.place(3600, 180, 440)).toBe(180);
    expect(axis.place(4200, 180, 440)).toBe(440);
  });

  it("does not cut when the values spread down towards zero, and never clips a value", () => {
    expect(niceAxis([2.71, 6.53], { zero: false }).start).toBe(0);
    expect(niceAxis([5, 9], { zero: false, start: 6 }).start).toBe(0);
    expect(niceAxis([6.27, 6.53, 6.02], { zero: false, start: 5 }).start).toBe(5);
  });

  it("brackets negative values and writes the minus sign and suffix", () => {
    const axis = niceAxis([-158, 4173], { zero: false });
    expect(axis.ticks[0]?.label).toBe("−2,000");
    expect(niceAxis([0.5, 1.2], { zero: true, suffix: "x" }).ticks.at(-1)?.label).toBe("1.4x");
  });

  it("draws an axis for no values or text that is not a number", () => {
    expect(niceAxis([], { zero: true }).ticks.length).toBeGreaterThan(1);
    expect(niceAxis([Number.NaN], { zero: false }).cut).toBe(false);
  });
});

// ---------------------------------------------------------------------------------------------
const BRIDGE: WaterfallRow[] = [
  { kind: "level", label: "Reported EBITDA", value: 3813, text: "3,813" },
  { kind: "step", label: "Acquisition and integration", value: 70, text: "70" },
  { kind: "step", label: "Stock compensation", value: 217, text: "217" },
  { kind: "step", label: "Refinancing costs", value: 58, text: "58" },
  { kind: "step", label: "Other", value: 15, text: "15" },
  { kind: "closing", label: "EBITDA As Defined", value: 4173, text: "4,173" },
];

const bars = (container: HTMLElement) =>
  [...container.querySelectorAll("rect[data-bar]")].map((rect) => ({
    kind: rect.getAttribute("data-bar"),
    label: rect.getAttribute("data-label"),
    x: num(rect, "x"),
    y: num(rect, "y"),
    width: num(rect, "width"),
  }));

describe("Waterfall", () => {
  it("draws each step in proportion on one cut scale, the break on both totals", () => {
    const { container } = render(
      <Waterfall rows={BRIDGE} unit="USD m" width={WIDE} axisStart="auto" />,
    );
    const drawn = bars(container);
    expect(drawn.map((bar) => bar.kind)).toEqual([
      "level",
      "step",
      "step",
      "step",
      "step",
      "closing",
    ]);
    // Axis 3,600 … 4,200: every unit is the same number of pixels, steps and totals alike.
    const perUnit = (drawn[2]?.width ?? 0) / 217;
    expect((drawn[1]?.width ?? 0) / 70).toBeCloseTo(perUnit, 6);
    expect((drawn[3]?.width ?? 0) / 58).toBeCloseTo(perUnit, 6);
    expect((drawn[0]?.width ?? 0) / (3813 - 3600)).toBeCloseTo(perUnit, 6);
    expect((drawn[5]?.width ?? 0) / (4173 - 3600)).toBeCloseTo(perUnit, 6);
    // Each step starts where the running total stood.
    expect(drawn[1]?.x).toBeCloseTo((drawn[0]?.x ?? 0) + (drawn[0]?.width ?? 0), 6);
    expect(container.querySelectorAll("[data-axis-break]")).toHaveLength(2);
    expect(container.textContent).toContain("Axis starts at 3,600, marked on the total bars.");
    expect(container.textContent).toContain("+217");
    expect(svgOf(container).getAttribute("aria-label")).toBe(
      "Waterfall, USD m: Reported EBITDA 3,813, plus Acquisition and integration 70, plus Stock compensation 217, plus Refinancing costs 58, plus Other 15, equals EBITDA As Defined 4,173. Axis starts at 3,600, cut.",
    );
  });

  it("from zero by default: no break mark, totals measured from zero", () => {
    const { container } = render(<Waterfall rows={BRIDGE} unit="USD m" width={WIDE} />);
    const drawn = bars(container);
    expect(container.querySelector("[data-axis-break]")).toBeNull();
    expect((drawn[0]?.width ?? 0) / 3813).toBeCloseTo((drawn[5]?.width ?? 0) / 4173, 6);
  });

  it("draws a fall leftward with its minus sign, never by colour alone", () => {
    const rows: WaterfallRow[] = [
      { kind: "level", label: "Free cash flow", value: 1880, text: "1,880" },
      { kind: "step", label: "Special dividend", value: -2038, text: "-2,038" },
      { kind: "closing", label: "After distributions", value: -158, text: "−158" },
    ];
    const { container } = render(<Waterfall rows={rows} unit="USD m" width={WIDE} />);
    const [level, fall, closing] = bars(container);
    // The fall ends at the left: its right edge is where the level ended.
    expect((fall?.x ?? 0) + (fall?.width ?? 0)).toBeCloseTo(
      (level?.x ?? 0) + (level?.width ?? 0),
      6,
    );
    expect((fall?.width ?? 0) / 2038).toBeCloseTo((level?.width ?? 0) / 1880, 6);
    // The negative closing lies left of zero, to its own size.
    expect((closing?.width ?? 0) / 158).toBeCloseTo((level?.width ?? 0) / 1880, 6);
    expect(closing?.x).toBeLessThan(level?.x ?? 0);
    const values = [...container.querySelectorAll('[data-part="value"]')].map((t) => t.textContent);
    expect(values).toEqual(["1,880", "−2,038", "−158"]);
    expectReadable(svgOf(container), WIDE);
  });

  it("draws a step the module did not state as the hatched slot with its reason, never zero", () => {
    const rows: WaterfallRow[] = [
      { kind: "level", label: "Free cash flow", value: 1880, text: "1,880" },
      { kind: "gap", label: "Repurchases", reason: "Not supplied: source dash" },
      { kind: "step", label: "Dividend", value: -2038, text: "−2,038" },
      { kind: "closing", label: "After distributions", value: -158, text: "−158" },
    ];
    const { container } = render(<Waterfall rows={rows} unit="USD m" width={WIDE} />);
    expect(container.querySelector('[data-gap="Not supplied: source dash"] rect')).not.toBeNull();
    expect(bars(container).map((bar) => bar.label)).toEqual([
      "Free cash flow",
      "After distributions",
    ]);
    expect(container.querySelector('[data-part="reason"]')?.textContent).toBe(
      "Not supplied: source dash",
    );
    // The step after the gap has no known start: written, not placed.
    expect(container.querySelector('[data-part="unplaced"]')?.textContent).toBe(
      "−2,038 · not placed: an earlier step is not stated",
    );
    expect(svgOf(container).getAttribute("aria-label")).toContain(
      "Repurchases not stated: Not supplied: source dash",
    );
  });

  it("keeps a stated zero as a value: a bar and its figure, not a gap", () => {
    const rows: WaterfallRow[] = [
      { kind: "level", label: "Opening", value: 100, text: "100" },
      { kind: "step", label: "Other", value: 0, text: "0" },
      { kind: "closing", label: "Closing", value: 100, text: "100" },
    ];
    const { container } = render(<Waterfall rows={rows} unit="USD m" width={WIDE} />);
    expect(container.querySelector('[data-step="Other"]')).not.toBeNull();
    expect(container.querySelector("[data-gap]")).toBeNull();
    expect([...container.querySelectorAll('[data-part="value"]')][1]?.textContent).toBe("0");
  });

  it.each([WIDE, PHONE])(
    "at %i px: real text sizes, no label on a mark, nothing off the edge",
    (width) => {
      const { container } = render(
        <Waterfall
          rows={BRIDGE}
          unit="USD m"
          width={width}
          axisStart="auto"
          legend={{ level: "Reported EBITDA", step: "Add-back", closing: "EBITDA As Defined" }}
        />,
      );
      expectReadable(svgOf(container), width);
    },
  );

  it("wide puts labels beside the bars; narrow puts each label above its bar", () => {
    const wide = render(<Waterfall rows={BRIDGE} unit="USD m" width={WIDE} />);
    expect(svgOf(wide.container).getAttribute("data-layout")).toBe("wide");
    const wideLabels = [...wide.container.querySelectorAll('[data-part="label"]')];
    const wideBars = bars(wide.container);
    wideLabels.forEach((label, at) => {
      expect(num(label, "y")).toBeGreaterThan(wideBars[at]?.y ?? 0);
    });
    expect(Math.min(...wideBars.map((bar) => bar.x))).toBeGreaterThan(100);
    wide.unmount();

    const narrow = render(<Waterfall rows={BRIDGE} unit="USD m" width={PHONE} />);
    expect(svgOf(narrow.container).getAttribute("data-layout")).toBe("narrow");
    const labels = [...narrow.container.querySelectorAll('[data-part="label"]')];
    const drawn = bars(narrow.container);
    labels.forEach((label, at) => {
      // The label's baseline is above the top of its own bar.
      expect(num(label, "y")).toBeLessThanOrEqual(drawn[at]?.y ?? 0);
    });
    // One measure per row, the bars starting at the left edge.
    expect(Math.min(...drawn.map((bar) => bar.x))).toBeLessThan(2);
  });
});

// ---------------------------------------------------------------------------------------------
const PAIRS: DumbbellRow[] = [
  {
    label: "Net sales",
    prior: { value: 6585, text: "6,585" },
    current: { value: 7940, text: "7,940" },
    change: "+1,355",
    note: "up",
  },
  {
    label: "Gross debt",
    prior: { value: 19750, text: "19,750" },
    current: { value: 24880, text: "24,880" },
    change: "+5,130",
    note: "up, worse",
    tone: "worse",
  },
  {
    label: "Lease liabilities",
    prior: { value: 410, text: "410" },
    current: { value: 290, text: "290" },
    change: "−120",
    note: "down",
  },
  {
    label: "Restricted cash",
    prior: { gap: "Not supplied: outside the comparison scope" },
    current: { value: 843, text: "843" },
  },
];
const PERIODS = { prior: "FY2023", current: "FY2024" };

const dots = (container: HTMLElement, side: "prior" | "current") =>
  [...container.querySelectorAll(`circle[data-${side}]`)].map((circle) => ({
    value: num(circle, `data-${side}`),
    x: num(circle, "cx"),
  }));

describe("Dumbbell", () => {
  it("places ring and dot on one scale from zero, in proportion", () => {
    const { container } = render(
      <Dumbbell rows={PAIRS} width={WIDE} periods={PERIODS} unit="USD m" />,
    );
    const marks = [...dots(container, "prior"), ...dots(container, "current")];
    const zero = (() => {
      const [a, b] = marks;
      // From two marks, x = zero + k · value.
      const k = ((b?.x ?? 0) - (a?.x ?? 0)) / ((b?.value ?? 1) - (a?.value ?? 0));
      return { at: (a?.x ?? 0) - k * (a?.value ?? 0), k };
    })();
    for (const mark of marks) expect(mark.x).toBeCloseTo(zero.at + zero.k * mark.value, 6);
    expect(zero.k).toBeGreaterThan(0);
    expect(
      container.querySelector('circle[data-current="24880"]')?.getAttribute("class"),
    ).toContain("fill-warning-mark");
    expect(container.textContent).toContain("up, worse");
  });

  it("draws a side the module did not state as the hatched strip and its reason, never zero", () => {
    const { container } = render(
      <Dumbbell rows={PAIRS} width={WIDE} periods={PERIODS} unit="USD m" />,
    );
    const gap = container.querySelector('[data-row="Restricted cash"] [data-gap]');
    expect(gap?.getAttribute("data-gap")).toBe(
      "FY2023: Not supplied: outside the comparison scope",
    );
    expect(container.querySelector('[data-row="Restricted cash"] circle[data-prior]')).toBeNull();
    expect(container.textContent).toContain("FY2023: Not supplied: outside the comparison scope");
    expect(svgOf(container).getAttribute("aria-label")).toContain(
      "Restricted cash FY2023 not stated: Not supplied: outside the comparison scope and 843 in FY2024",
    );
  });

  it("keeps a stated zero as a value and draws negatives left of zero", () => {
    const rows: DumbbellRow[] = [
      {
        label: "Other income",
        prior: { value: 0, text: "0" },
        current: { value: -40, text: "−40" },
      },
      { label: "Sales", prior: { value: 100, text: "100" }, current: { value: 120, text: "120" } },
    ];
    const { container } = render(
      <Dumbbell rows={rows} width={WIDE} periods={PERIODS} unit="USD m" />,
    );
    expect(container.querySelector("[data-gap]")).toBeNull();
    const zeroX = num(container.querySelector('circle[data-prior="0"]') as Element, "cx");
    const minus = num(container.querySelector('circle[data-current="-40"]') as Element, "cx");
    const hundred = num(container.querySelector('circle[data-prior="100"]') as Element, "cx");
    expect(minus).toBeLessThan(zeroX);
    expect((zeroX - minus) / 40).toBeCloseTo((hundred - zeroX) / 100, 6);
  });

  it("states a cut axis under the scale", () => {
    const rows: DumbbellRow[] = [
      {
        label: "Leverage",
        prior: { value: 6.27, text: "6.27x" },
        current: { value: 6.53, text: "6.53x" },
      },
    ];
    const { container } = render(
      <Dumbbell rows={rows} width={WIDE} periods={PERIODS} unit="x" axisStart={6} />,
    );
    expect(container.querySelector('[data-part="axis-note"]')?.textContent).toBe(
      "Axis starts at 6.0, not at zero.",
    );
  });

  it("writes each figure outward, away from the other mark", () => {
    const { container } = render(
      <Dumbbell rows={PAIRS} width={WIDE} periods={PERIODS} unit="USD m" />,
    );
    const lease = container.querySelector('[data-row="Lease liabilities"]') as Element;
    const [left, right] = [...lease.querySelectorAll('[data-part="value"]')];
    // The current 290 is the lower figure: it is written to the left, the prior 410 to the right.
    expect(left?.textContent).toBe("290");
    expect(left?.getAttribute("data-side")).toBe("current");
    expect(right?.textContent).toBe("410");
  });

  it.each([WIDE, PHONE])(
    "at %i px: real text sizes, no label on a mark, nothing off the edge",
    (width) => {
      const { container } = render(
        <Dumbbell rows={PAIRS} width={width} periods={PERIODS} unit="USD m" />,
      );
      expectReadable(svgOf(container), width);
    },
  );

  it("narrow puts each label above its row's marks", () => {
    const { container } = render(
      <Dumbbell rows={PAIRS} width={PHONE} periods={PERIODS} unit="USD m" />,
    );
    expect(svgOf(container).getAttribute("data-layout")).toBe("narrow");
    for (const row of PAIRS) {
      const group = container.querySelector(`[data-row="${row.label}"]`) as Element;
      const label = [...container.querySelectorAll('[data-part="label"]')].find(
        (text) => text.textContent === row.label,
      ) as Element;
      const cy = num(group.querySelector("circle") as Element, "cy");
      expect(num(label, "y")).toBeLessThan(cy - 6);
    }
  });
});

// ---------------------------------------------------------------------------------------------
describe("Bullet", () => {
  const limit = { value: 12, text: "12.0%" };

  it("measures value, limit and proposed on one scale from zero", () => {
    const { container } = render(
      <Bullet
        name="Single-name exposure"
        width={WIDE}
        value={{ value: 9, text: "9.0%" }}
        proposed={{ value: 6, text: "6.0%" }}
        limit={limit}
      />,
    );
    const bar = container.querySelector('rect[data-bar="value"]') as Element;
    const rule = num(container.querySelector('[data-mark="limit"]') as Element, "x1");
    const ring = num(container.querySelector('[data-mark="proposed"]') as Element, "cx");
    const zero = num(bar, "x");
    expect(num(bar, "width") / 9).toBeCloseTo((rule - zero) / 12, 6);
    expect((ring - zero) / 6).toBeCloseTo((rule - zero) / 12, 6);
    expect(container.textContent).not.toContain("above the limit");
  });

  it("writes the word for a figure beyond the limit, not colour alone", () => {
    const { container } = render(
      <Bullet
        name="Single-name exposure"
        width={WIDE}
        value={{ value: 9.5, text: "9.5%" }}
        proposed={{ value: 12.6, text: "12.6%" }}
        limit={limit}
      />,
    );
    expect(container.textContent).toContain("Proposed 12.6%, above the limit");
    expect(container.querySelector('[data-mark="proposed"]')?.getAttribute("class")).toContain(
      "stroke-warning-mark",
    );
    const over = render(
      <Bullet
        name="Sector"
        width={WIDE}
        value={{ value: 21.5, text: "21.5%" }}
        limit={{ value: 20, text: "20.0%" }}
      />,
    );
    expect(over.container.textContent).toContain("Current 21.5%, above the limit");
    expect(over.container.querySelector('[data-bar="beyond"]')).not.toBeNull();
    const floor = render(
      <Bullet
        name="Cover"
        width={WIDE}
        limitKind="min"
        value={{ value: 1.8, text: "1.8x" }}
        limit={{ value: 2, text: "2.0x" }}
      />,
    );
    expect(floor.container.textContent).toContain("Current 1.8x, below the limit");
  });

  it("draws a value the module did not state as the hatched slot with its reason", () => {
    const { container } = render(
      <Bullet
        name="CCC bucket"
        width={WIDE}
        value={{ gap: "Not supplied: no portfolio file" }}
        limit={limit}
      />,
    );
    expect(container.querySelector('[data-gap="Not supplied: no portfolio file"]')).not.toBeNull();
    expect(container.querySelector('[data-bar="value"]')).toBeNull();
    expect(container.querySelector('[data-part="reason"]')?.textContent).toBe(
      "Current: Not supplied: no portfolio file",
    );
  });

  it("keeps a stated zero as a value and draws a negative value left of zero", () => {
    const zero = render(
      <Bullet name="Exposure" width={WIDE} value={{ value: 0, text: "0.0%" }} limit={limit} />,
    );
    expect(zero.container.querySelector('[data-bar="value"]')?.getAttribute("data-value")).toBe(
      "0",
    );
    expect(zero.container.querySelector("[data-gap]")).toBeNull();
    const negative = render(
      <Bullet
        name="Net position"
        width={WIDE}
        value={{ value: -3, text: "−3.0" }}
        limit={{ value: 6, text: "6.0" }}
      />,
    );
    const bar = negative.container.querySelector('[data-bar="value"]') as Element;
    const rule = num(negative.container.querySelector('[data-mark="limit"]') as Element, "x1");
    const zeroX = num(bar, "x") + num(bar, "width");
    expect(num(bar, "width") / 3).toBeCloseTo((rule - zeroX) / 6, 6);
  });

  it.each([WIDE, PHONE])(
    "at %i px: real text sizes, no label on a mark, nothing off the edge",
    (width) => {
      for (const proposed of [
        { value: 12.6, text: "12.6%" },
        { value: 11.9, text: "11.9%" },
      ]) {
        const { container, unmount } = render(
          <Bullet
            name="Single-name exposure"
            width={width}
            value={{ value: 11.5, text: "11.5%" }}
            proposed={proposed}
            limit={limit}
          />,
        );
        expectReadable(svgOf(container), width);
        unmount();
      }
    },
  );

  it("narrow puts the name above the bar", () => {
    const { container } = render(
      <Bullet
        name="Single-name exposure"
        width={PHONE}
        value={{ value: 9, text: "9.0%" }}
        limit={limit}
      />,
    );
    expect(svgOf(container).getAttribute("data-layout")).toBe("narrow");
    const name = num(container.querySelector('[data-part="label"]') as Element, "y");
    expect(name).toBeLessThan(num(container.querySelector('[data-bar="value"]') as Element, "y"));
  });
});
