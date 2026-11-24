import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Coverage, Fact, Issuer } from "../coverageData";
import { TrendView } from "./Trend";

const SHA = "c".repeat(64);

function issuer(key: string, name: string): Issuer {
  return {
    key,
    name,
    sector: null,
    runs: [
      {
        key: `${key}1`,
        folder: `${key}-run`,
        asOf: "2026-03-31",
        pathway: "credit_snapshot",
        pathwayTitle: "Full credit assessment",
        cells: {},
        other: [],
      },
    ],
  };
}

function fact(who: string, period: string, text: string, unit: string): Fact {
  return {
    ...base(who, period, text),
    at: Number(text),
    unit,
  };
}

/** A gap the module states for a period: no figure, its own words. */
function gap(who: string, period: string, text: string): Fact {
  return { ...base(who, period, text), at: null, gap: true };
}

function base(who: string, period: string, text: string): Fact {
  return {
    field: "lev",
    issuer: who,
    run: `${who}1`,
    period,
    row: null,
    text,
    at: null,
    basis: "Issuer-adjusted EBITDA.",
    line: 3,
    output: `${who}-run/CP-1.md`,
    sha256: SHA,
  };
}

const issuers = [
  issuer("a", "Alpha plc"),
  issuer("b", "Beta SA"),
  issuer("c", "Gamma AG"),
  issuer("d", "Delta Ltd"),
];
const field = {
  id: "lev",
  module: "CP-1",
  group: "Leverage",
  label: "Net debt / EBITDA",
  kind: "number" as const,
  series: "period" as const,
};
const data: Coverage = {
  columns: [{ code: "CP-1", title: "Canonical data foundation" }],
  issuers,
  fields: [field],
  facts: [
    fact("a", "FY2023", "3.2", "x"),
    fact("a", "FY2024", "4.1", "x"),
    fact("a", "FY2025", "4.6", "x"),
    fact("b", "FY2024", "5.0", "x"),
    fact("b", "FY2025", "4.6", "x"),
    fact("c", "FY2025", "6.0", "x"),
    fact("d", "FY2025", "12", "%"),
  ],
};

function show(unit = "x") {
  const view = render(<TrendView data={data} issuers={issuers} field={field} />);
  fireEvent.click(screen.getByRole("button", { name: unit }));
  return view;
}

const panel = (name: string) => screen.getByRole("article", { name });
const dots = (name: string) => [...panel(name).querySelectorAll("circle")];

describe("TrendView small multiples", () => {
  it("draws one panel per issuer of the chosen unit, with its name", () => {
    show("x");
    expect(screen.getAllByRole("article")).toHaveLength(3);
    expect(within(panel("Alpha plc")).getByRole("heading", { level: 3 }).textContent).toBe(
      "Alpha plc",
    );
    expect(screen.queryByRole("article", { name: "Delta Ltd" })).toBeNull();
  });

  it("describes each chart with the figures as written", () => {
    show("x");
    expect(
      within(panel("Alpha plc")).getByRole("img", {
        name: "Alpha plc: 3.2x, 4.1x, 4.6x across FY2023, FY2024, FY2025",
      }),
    ).toBeTruthy();
    expect(
      within(panel("Gamma AG")).getByRole("img", { name: "Gamma AG: 6.0x across FY2025" }),
    ).toBeTruthy();
  });

  it("draws a line only from three points, and writes the values of shorter series", () => {
    show("x");
    expect(panel("Alpha plc").querySelector("polyline")).not.toBeNull();
    expect(panel("Beta SA").querySelector("polyline")).toBeNull();
    expect(panel("Gamma AG").querySelector("polyline")).toBeNull();
    expect(dots("Alpha plc")).toHaveLength(3);
    expect(dots("Beta SA")).toHaveLength(2);
    expect(dots("Gamma AG")).toHaveLength(1);
    expect(
      within(within(panel("Beta SA")).getByRole("list", { name: "Figures as written" }))
        .getAllByRole("listitem")
        .map((item) => item.textContent),
    ).toEqual(["FY2024 5.0x", "FY2025 4.6x"]);
    expect(within(panel("Gamma AG")).getAllByText("6.0x").length).toBeGreaterThan(0);
    // The last point of a line is labelled as text.
    expect(within(panel("Alpha plc")).getByText("4.6x", { selector: "p span" })).toBeTruthy();
  });

  it("puts every panel on one scale and one period axis", () => {
    show("x");
    const at = (name: string, value: string) =>
      dots(name).find((dot) => dot.getAttribute("data-value") === value);
    const a = at("Alpha plc", "4.6");
    const b = at("Beta SA", "4.6");
    expect(a?.getAttribute("cy")).toBeTruthy();
    expect(a?.getAttribute("cy")).toBe(b?.getAttribute("cy"));
    expect(a?.getAttribute("cx")).toBe(b?.getAttribute("cx"));
    // The highest figure of any panel sits above one of a lower panel.
    const high = Number(at("Gamma AG", "6.0")?.getAttribute("cy"));
    expect(high).toBeLessThan(Number(a?.getAttribute("cy")));
  });

  it("shows a period an issuer does not state as missing, never as a point", () => {
    show("x");
    expect(within(panel("Beta SA")).getByText("FY2023: no figure stated for this period")).toBeTruthy();
    const table = screen.getByRole("table", { name: "Net debt / EBITDA by period, x" });
    const row = within(table).getByRole("row", { name: /Beta SA/ });
    const cells = within(row).getAllByRole("cell");
    expect(cells.map((cell) => cell.textContent)).toEqual(["No figure", "5.0x", "4.6x"]);
    expect(within(row).getByRole("rowheader").textContent).toBe("Beta SA");
    expect(
      within(table)
        .getAllByRole("columnheader")
        .map((cell) => cell.textContent),
    ).toEqual(["Issuer", "FY2023", "FY2024", "FY2025"]);
  });

  it("offers a reporting-unit chooser and never mixes units", () => {
    render(<TrendView data={data} issuers={issuers} field={field} />);
    const group = screen.getByRole("group", { name: "Reporting unit" });
    expect(within(group).getAllByRole("button").map((b) => b.textContent)).toEqual(["%", "x"]);
    // It opens on the unit most issuers' newest runs state a figure in: x (three) over % (one).
    expect(screen.getAllByRole("article")).toHaveLength(3);
    expect(within(group).getByRole("button", { name: "x" }).getAttribute("aria-pressed")).toBe(
      "true",
    );
    expect(screen.queryByRole("article", { name: "Delta Ltd" })).toBeNull();
    fireEvent.click(within(group).getByRole("button", { name: "%" }));
    expect(screen.getAllByRole("article")).toHaveLength(1);
    expect(screen.getByRole("article", { name: "Delta Ltd" })).toBeTruthy();
  });

  it("counts issuers, not figures, and keeps the sorted order on a tie", () => {
    const list = [issuer("a", "Alpha plc"), issuer("d", "Delta Ltd")];
    const facts = [
      ...["FY2021", "FY2022", "FY2023", "FY2024", "FY2025"].map((p) => fact("a", p, "3.0", "x")),
      fact("d", "FY2025", "12", "%"),
    ];
    render(<TrendView data={{ ...data, issuers: list, facts }} issuers={list} field={field} />);
    // One issuer each: the tie keeps % (sorted first), though x has more figures.
    expect(screen.getByRole("button", { name: "%" }).getAttribute("aria-pressed")).toBe("true");
    expect(screen.getByRole("article", { name: "Delta Ltd" })).toBeTruthy();
  });

  it("draws no chooser for one unit", () => {
    render(
      <TrendView
        data={{ ...data, facts: data.facts.filter((item) => item.unit === "x") }}
        issuers={issuers}
        field={field}
      />,
    );
    expect(screen.queryByRole("group", { name: "Reporting unit" })).toBeNull();
  });

  it("says so when there is nothing to draw", () => {
    const text =
      "No newest run of these issuers states this figure, so there is no trend to draw.";
    const first = render(<TrendView data={data} issuers={issuers} field={undefined} />);
    expect(screen.getByRole("status").textContent).toBe(text);
    first.unmount();
    render(<TrendView data={{ ...data, facts: [] }} issuers={issuers} field={field} />);
    expect(screen.getByRole("status").textContent).toBe(text);
  });

  it("draws no module code, hash or file name", () => {
    const { container } = show("x");
    const text = container.textContent;
    expect(text).not.toMatch(/CP-\d|sha|\.md|c{16}/);
  });
});

const one = (who: string, name: string) => [issuer(who, name)];
const lines = (name: string) =>
  [...panel(name).querySelectorAll("[data-segment]")].map((item) =>
    item.tagName === "polyline"
      ? (item.getAttribute("points") ?? "")
      : `${item.getAttribute("x1") ?? ""},${item.getAttribute("y1") ?? ""}`,
  );

function view(facts: Fact[], list: Issuer[]) {
  return render(<TrendView data={{ ...data, issuers: list, facts }} issuers={list} field={field} />);
}

describe("TrendView breaks and missing periods", () => {
  it("breaks the line at a period the issuer does not state", () => {
    const list = [...one("a", "Alpha plc"), ...one("b", "Beta SA")];
    view(
      [
        fact("a", "FY2023", "3.2", "x"),
        fact("a", "FY2025", "4.6", "x"),
        fact("b", "FY2024", "5.0", "x"),
      ],
      list,
    );
    expect(dots("Alpha plc")).toHaveLength(2);
    expect(lines("Alpha plc")).toEqual([]);
    expect(panel("Alpha plc").querySelector("polyline")).toBeNull();
    // No drawn line joins the two dots: every line left is an axis or a gap mark.
    const joins = [...panel("Alpha plc").querySelectorAll("line")].filter(
      (item) =>
        item.getAttribute("x1") !== item.getAttribute("x2") &&
        item.getAttribute("y1") !== item.getAttribute("y2"),
    );
    expect(joins).toEqual([]);
  });

  it("draws one segment per run of consecutive stated periods; a lone point is a dot", () => {
    const list = [...one("a", "Alpha plc"), ...one("b", "Beta SA")];
    view(
      [
        fact("a", "FY2021", "3.0", "x"),
        fact("a", "FY2022", "3.2", "x"),
        fact("a", "FY2023", "3.4", "x"),
        fact("a", "FY2025", "4.6", "x"),
        fact("b", "FY2024", "5.0", "x"),
      ],
      list,
    );
    const segments = [...panel("Alpha plc").querySelectorAll("polyline")];
    expect(segments).toHaveLength(1);
    const xs = (segments[0]?.getAttribute("points") ?? "").split(" ").map((p) => p.split(",")[0]);
    const cx = dots("Alpha plc").map((dot) => dot.getAttribute("cx"));
    expect(xs).toEqual(cx.slice(0, 3));
    expect(xs).not.toContain(cx[3]);
  });

  it("says what is true of each period it does not draw, in the panel and the table", () => {
    const list = [...one("a", "Alpha plc"), ...one("b", "Beta SA")];
    view(
      [
        fact("a", "FY2022", "40", "%"),
        fact("a", "FY2023", "3.2", "x"),
        fact("a", "FY2024", "4.1", "x"),
        fact("a", "FY2024", "4.3", "x"),
        gap("a", "FY2025", "Not supplied: management did not disclose leverage."),
        ...["FY2021", "FY2022", "FY2023", "FY2024", "FY2025"].map((p) => fact("b", p, "5.0", "x")),
      ],
      list,
    );
    fireEvent.click(screen.getByRole("button", { name: "x" }));
    const missing = within(panel("Alpha plc"))
      .getByRole("list", { name: "Periods not drawn" })
      .querySelectorAll("li");
    expect([...missing].map((item) => item.textContent)).toEqual([
      "FY2021: no figure stated for this period",
      "FY2022: stated in another unit (%), not drawn here",
      "FY2024: states this period more than once (4.1x; 4.3x), so none is drawn",
      "FY2025: Not supplied: management did not disclose leverage.",
    ]);
    expect(panel("Alpha plc").textContent).not.toMatch(/Not stated/);
    const table = screen.getByRole("table");
    const row = within(table).getByRole("row", { name: /Alpha plc/ });
    expect(within(row).getAllByRole("cell").map((cell) => cell.textContent)).toEqual([
      "No figure",
      "In % only",
      "3.2x",
      "Stated more than once: 4.1x; 4.3x",
      "Not supplied: management did not disclose leverage.",
    ]);
  });

  it("leaves a gap reason carrying a source reference to Evidence", () => {
    const list = [...one("a", "Alpha plc"), ...one("b", "Beta SA")];
    view(
      [
        gap("a", "FY2024", "Not supplied: see annual-report.pdf"),
        fact("a", "FY2025", "3.0", "x"),
        fact("b", "FY2024", "5.0", "x"),
      ],
      list,
    );
    expect(
      within(panel("Alpha plc")).getByText("FY2024: the module's reason is in Evidence"),
    ).toBeTruthy();
    expect(document.body.textContent).not.toMatch(/annual-report/);
  });
});

describe("TrendView issuers with no figure to draw", () => {
  it("lists each issuer apart with its reason, never a zero", () => {
    const list = [
      ...one("a", "Alpha plc"),
      ...one("d", "Delta Ltd"),
      ...one("e", "Epsilon NV"),
      ...one("f", "Phi Oy"),
      ...one("g", "Gimel SpA"),
    ];
    view(
      [
        fact("a", "FY2024", "3.0", "x"),
        fact("a", "FY2025", "3.2", "x"),
        fact("d", "FY2025", "12", "%"),
        gap("e", "FY2025", "Not supplied: the issuer does not report EBITDA."),
        gap("g", "FY2025", "Not supplied: see annual-report.pdf"),
      ],
      list,
    );
    fireEvent.click(screen.getByRole("button", { name: "x" }));
    expect(screen.getAllByRole("article")).toHaveLength(1);
    const block = screen.getByRole("heading", { name: /^No figure to draw: / }).closest(".gap-hatch");
    expect(block?.className).toMatch(/border-dashed/);
    expect(block?.className).toMatch(/border-border-gap/);
    expect([...(block?.querySelectorAll("li") ?? [])].map((item) => item.textContent)).toEqual([
      "Delta Ltd: stated only in another unit (%), not drawn here",
      "Epsilon NV: Not supplied: the issuer does not report EBITDA.",
      "Phi Oy: no figure stated for this measure in its newest run",
      "Gimel SpA: the module's reason is in Evidence",
    ]);
    expect(block?.textContent).not.toMatch(/\b0\b/);
  });

  it("gives another unit as the reason before a stated gap, in either direction", () => {
    const list = [...one("a", "Alpha plc"), ...one("b", "Beta SA"), ...one("g", "Gimel SpA")];
    view(
      [
        fact("a", "FY2024", "3.0", "x"),
        fact("b", "FY2025", "40", "%"),
        fact("b", "FY2024", "38", "%"),
        gap("g", "FY2025", "Not supplied: the issuer does not report EBITDA."),
        fact("g", "FY2024", "1.2", "x"),
      ],
      list,
    );
    // x is stated by two issuers: the view opens there.
    const reasons = () =>
      [
        ...(screen
          .getByRole("heading", { name: /^No figure to draw: / })
          .closest(".gap-hatch")
          ?.querySelectorAll("li") ?? []),
      ].map((item) => item.textContent);
    expect(reasons()).toEqual(["Beta SA: stated only in another unit (%), not drawn here"]);
    fireEvent.click(screen.getByRole("button", { name: "%" }));
    expect(reasons()).toEqual([
      "Alpha plc: stated only in another unit (x), not drawn here",
      "Gimel SpA: stated only in another unit (x), not drawn here",
    ]);
  });

  it("draws no gap block when every issuer has a panel", () => {
    const list = issuers.slice(0, 3);
    view(
      data.facts.filter((item) => item.unit === "x"),
      list,
    );
    expect(screen.getAllByRole("article")).toHaveLength(3);
    expect(screen.queryByRole("heading", { name: /^No figure to draw/ })).toBeNull();
  });
});

describe("TrendView scale and labels", () => {
  it("labels the first and last stated values and states the shared scale", () => {
    show("x");
    const label = (name: string, which: string) =>
      panel(name).querySelector(`[data-label="${which}"]`)?.textContent;
    expect(label("Alpha plc", "first")).toBe("3.2x");
    expect(label("Alpha plc", "last")).toBe("4.6x");
    expect(label("Beta SA", "first")).toBe("5.0x");
    expect(label("Beta SA", "last")).toBe("4.6x");
    // One point is both first and last: one label.
    expect(panel("Gamma AG").querySelectorAll("[data-label]")).toHaveLength(1);
    expect(
      screen.getByText("Same scale in every panel: lowest stated figure 3.2x, highest 6.0x"),
    ).toBeTruthy();
  });

  it("draws zero at the panel bottom when every figure is positive", () => {
    show("x");
    const zero = panel("Alpha plc").querySelector("[data-zero]");
    expect(zero).not.toBeNull();
    expect(panel("Alpha plc").querySelector("[data-zero-label]")?.textContent).toBe("0");
    const bottom = Number(zero?.getAttribute("y1"));
    for (const dot of dots("Alpha plc")) expect(Number(dot.getAttribute("cy"))).toBeLessThan(bottom);
  });

  it("lifts zero off the panel bottom when a figure is negative", () => {
    const list = [...one("a", "Alpha plc"), ...one("b", "Beta SA")];
    view(
      [
        fact("a", "FY2024", "-0.40", "x"),
        fact("a", "FY2025", "1.5", "x"),
        fact("b", "FY2025", "3.0", "x"),
      ],
      list,
    );
    expect(
      screen.getByText("Same scale in every panel: lowest stated figure -0.40x, highest 3.0x"),
    ).toBeTruthy();
    for (const name of ["Alpha plc", "Beta SA"]) {
      const zero = Number(panel(name).querySelector("[data-zero]")?.getAttribute("y1"));
      expect(Number.isFinite(zero)).toBe(true);
      const bottom = Number(panel(name).querySelector("[data-bottom]")?.getAttribute("y1"));
      expect(zero).toBeLessThan(bottom);
    }
    const negative = dots("Alpha plc").find((dot) => dot.getAttribute("data-value") === "-0.40");
    const zero = Number(panel("Alpha plc").querySelector("[data-zero]")?.getAttribute("y1"));
    expect(Number(negative?.getAttribute("cy"))).toBeGreaterThan(zero);
  });

  it("keeps zero in the domain when every figure is negative", () => {
    view([fact("a", "FY2024", "-2.0", "x"), fact("a", "FY2025", "-1.0", "x")], one("a", "Alpha plc"));
    const zero = Number(panel("Alpha plc").querySelector("[data-zero]")?.getAttribute("y1"));
    for (const dot of dots("Alpha plc")) expect(Number(dot.getAttribute("cy"))).toBeGreaterThan(zero);
  });
});

type Box = { left: number; right: number; top: number; bottom: number };
/** A label's box from the attributes drawn: 7px per character, baseline less 11 to plus 3. */
function labelBoxes(name: string): Box[] {
  return [...panel(name).querySelectorAll("text[data-label]")].map((item) => {
    const lx = Number(item.getAttribute("x"));
    const ly = Number(item.getAttribute("y"));
    const width = item.textContent.length * 7;
    const anchor = item.getAttribute("text-anchor");
    const left = anchor === "end" ? lx - width : anchor === "middle" ? lx - width / 2 : lx;
    return { left, right: left + width, top: ly - 11, bottom: ly + 3 };
  });
}
const centres = (name: string) =>
  dots(name).map((dot) => ({ x: Number(dot.getAttribute("cx")), y: Number(dot.getAttribute("cy")) }));
const inside = (box: Box, p: { x: number; y: number }) =>
  p.x >= box.left && p.x <= box.right && p.y >= box.top && p.y <= box.bottom;
const meet = (a: Box, b: Box) =>
  a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;

function expectClear(name: string, count: number) {
  const boxes = labelBoxes(name);
  expect(boxes).toHaveLength(count);
  const points = centres(name);
  for (const box of boxes) {
    expect(box.left).toBeGreaterThanOrEqual(0);
    expect(box.right).toBeLessThanOrEqual(320);
    expect(box.top).toBeGreaterThanOrEqual(0);
    for (const point of points) expect(inside(box, point)).toBe(false);
    // The drawn line, sampled, never runs through a label.
    for (let i = 1; i < points.length; i += 1) {
      const a = points[i - 1];
      const b = points[i];
      if (!a || !b) continue;
      for (let t = 0; t <= 1; t += 0.02)
        expect(inside(box, { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t })).toBe(false);
    }
  }
  const [first, last] = boxes;
  if (first && last) expect(meet(first, last)).toBe(false);
}

const money = (who: string, period: string, text: string): Fact => ({
  ...fact(who, period, "0", "US$m"),
  text,
  at: Number(text.replace(/,/g, "")),
});

describe("TrendView value labels never overprint", () => {
  it("keeps two long figures apart", () => {
    view([money("a", "FY2024", "900.00"), money("a", "FY2025", "1,250.00")], one("a", "Alpha plc"));
    expect(panel("Alpha plc").querySelector('[data-label="first"]')?.textContent).toBe(
      "900.00 US$m",
    );
    expect(panel("Alpha plc").querySelector('[data-label="last"]')?.textContent).toBe(
      "1,250.00 US$m",
    );
    expectClear("Alpha plc", 2);
  });

  it("stacks two long figures at neighbouring periods of a long axis", () => {
    const periods = Array.from({ length: 12 }, (_, i) => `FY${String(2014 + i)}`);
    view(
      [
        money("a", "FY2024", "900.00"),
        money("a", "FY2025", "1,250.00"),
        ...periods.map((p) => money("b", p, "1,000.00")),
      ],
      [...one("a", "Alpha plc"), ...one("b", "Beta SA")],
    );
    expectClear("Alpha plc", 2);
    expectClear("Beta SA", 2);
  });

  it("keeps labels off the line and dots of a three-point negative series", () => {
    view(
      [fact("a", "FY2023", "-1.20", "x"), fact("a", "FY2024", "0.50", "x"), fact("a", "FY2025", "-0.80", "x")],
      one("a", "Alpha plc"),
    );
    expect(panel("Alpha plc").querySelector('[data-label="first"]')?.textContent).toBe("-1.20x");
    expectClear("Alpha plc", 2);
    view(
      [fact("b", "FY2023", "0.40", "x"), fact("b", "FY2024", "-1.20", "x"), fact("b", "FY2025", "2.10", "x")],
      one("b", "Beta SA"),
    );
    expectClear("Beta SA", 2);
  });

  it("keeps a single point's label inside the panel and off its dot", () => {
    view([money("a", "FY2025", "1,250,000.00")], one("a", "Alpha plc"));
    expectClear("Alpha plc", 1);
  });
});

describe("TrendView targets", () => {
  it("makes the table summary a 32px target, 44px on a phone", () => {
    show("x");
    const summary = screen.getByText("Table view", { selector: "summary" });
    for (const name of ["flex", "items-center", "min-h-8", "max-[480px]:min-h-11"])
      expect(summary.classList).toContain(name);
  });
});
