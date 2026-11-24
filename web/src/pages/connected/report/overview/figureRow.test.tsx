import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import type { OutputEntry, PublishedRun, Section, Snapshot } from "../../publishedReport";
import type { ReportView } from "../../reportView";
import { FigureRow } from "./FigureRow";

afterEach(cleanup);

/** A line by its whole text, where part of it (the change) sits in its own no-wrap span. */
const wholeLine = (content: string) => (_: string, element: Element | null) =>
  element?.tagName === "P" && element.textContent === content;

let line = 100;
const chart = (name: string, headers: string[], ...rows: string[][]): Section => ({
  heading: `Chart data: ${name}`,
  level: 3,
  line: (line += 1),
  blocks: [
    {
      type: "table" as const,
      line: (line += 1),
      headers,
      rows: rows.map((cells) => ({ line: (line += 1), cells })),
    },
  ],
});

const LEVERAGE = ["Period", "Total debt / EBITDA", "Net debt / EBITDA", "Reporting unit", "Basis"];
const REVENUE = ["Period", "Revenue", "Adjusted EBITDA", "Reporting unit", "Basis"];

/** A foundation whose leverage chart has the rows given; the other charts are plain FY2023→FY2024. */
function foundation(leverage: Section, extra: Partial<OutputEntry["output"]> = {}): OutputEntry {
  return {
    output: {
      id: "CP-1-1",
      module: "CP-1",
      label: "CP-1",
      href: "CP-1.md",
      sha256: "a".repeat(64),
      ...extra,
    },
    sections: [
      leverage,
      chart(
        "interest cover",
        ["Period", "EBITDA / cash interest", "Reporting unit", "Basis"],
        ["FY2023", "3.20", "x", "Stated."],
        ["FY2024", "4.00", "x", "Stated."],
      ),
      chart(
        "liquidity",
        ["Period", "Cash", "Undrawn committed facilities", "Reporting unit", "Basis"],
        ["FY2023", "300", "450", "US$m", "Stated."],
        ["FY2024", "275", "400", "US$m", "Stated."],
      ),
      chart(
        "revenue and EBITDA",
        REVENUE,
        ["FY2023", "2,100", "410", "US$m", "Stated."],
        ["FY2024", "2,250", "450", "US$m", "Stated."],
      ),
    ],
    selected: true,
  };
}

const run = { folder: "run-1" } as unknown as PublishedRun;
const snapshot = {} as Snapshot;
const view = (entry: OutputEntry) => ({ entries: [entry], models: [] }) as unknown as ReportView;
const draw = (entry: OutputEntry) =>
  render(<FigureRow snapshot={snapshot} run={run} view={view(entry)} />);
const gross = () => screen.getByRole("region", { name: "Total debt / EBITDA" });

describe("the latest figure is the latest period, never the last row", () => {
  it("reads rows written newest first in period order: leverage fell, so it is better", () => {
    draw(
      foundation(
        chart(
          "leverage",
          LEVERAGE,
          ["FY2024", "4.00", "3.50", "x", "Stated."],
          ["FY2023", "5.00", "4.50", "x", "Stated."],
        ),
      ),
    );
    const tile = gross();
    expect(within(tile).getByText("4.00x", { selector: "span" })).toBeVisible();
    expect(within(tile).getByText(wholeLine("from 5.00x in FY2023 (-1.00x)"))).toBeVisible();
    expect(within(tile).getByText("Better")).toBeVisible();
    expect(within(tile).queryByText("Worse")).toBeNull();
    expect(
      within(tile).getByRole("img", {
        name: "Total debt / EBITDA: 5.00x in FY2023, 4.00x in FY2024.",
      }),
    ).toBeVisible();
  });

  it("draws a neutral gap with no trace control when a period cannot be ordered", () => {
    draw(
      foundation(
        chart(
          "leverage",
          LEVERAGE,
          ["FY2024", "4.00", "3.50", "x", "Stated."],
          ["Q1 2025", "5.00", "4.50", "x", "Stated."],
        ),
      ),
    );
    const tile = gross();
    expect(tile).toHaveTextContent("n.a.");
    expect(tile).toHaveTextContent("Not shown here");
    expect(tile).not.toHaveTextContent(/Not supplied|5\.00x|4\.00x|Better|Worse/);
    expect(within(tile).queryByRole("link")).toBeNull();
    expect(within(tile).queryByRole("button")).toBeNull();
    expect(within(tile).queryByRole("img")).toBeNull();
  });

  it.each([
    ["periods of mixed forms", "FY2023", "2024-09-30"],
    ["a period that repeats", "FY2024", "FY2024"],
  ])("refuses a latest for %s", (_, first, second) => {
    draw(
      foundation(
        chart(
          "leverage",
          LEVERAGE,
          [first, "5.00", "4.50", "x", "Stated."],
          [second, "4.00", "3.50", "x", "Stated."],
        ),
      ),
    );
    expect(gross()).toHaveTextContent("Not shown here");
    expect(within(gross()).queryByRole("link")).toBeNull();
  });

  it("draws no change or chip when the prior period is not a year earlier, and says why", () => {
    draw(
      foundation(
        chart(
          "leverage",
          LEVERAGE,
          ["FY2022", "5.00", "4.50", "x", "Stated."],
          ["FY2024", "4.00", "3.50", "x", "Stated."],
        ),
      ),
    );
    const tile = gross();
    expect(within(tile).getByText("4.00x", { selector: "span" })).toBeVisible();
    expect(within(tile).getByText("No period a year earlier to compare.")).toBeVisible();
    expect(tile).not.toHaveTextContent(/Better|Worse|-1\.00x|from 5\.00x/);
  });

  it("compares dated periods a year apart by their dates", () => {
    draw(
      foundation(
        chart(
          "leverage",
          LEVERAGE,
          ["2023-09-30", "5.00", "4.50", "x", "Stated."],
          ["2024-03-31", "4.50", "4.00", "x", "Stated."],
          ["2024-09-30", "4.00", "3.50", "x", "Stated."],
        ),
      ),
    );
    expect(within(gross()).getByText(wholeLine("from 5.00x in 2023-09-30 (-1.00x)"))).toBeVisible();
  });
});

describe("each figure's basis", () => {
  it("draws the latest basis, and no change or chip across two bases", () => {
    draw(
      foundation(
        chart(
          "leverage",
          [
            "Period",
            "Total debt / EBITDA",
            "Net debt / EBITDA",
            "Reporting unit",
            "Basis and limitation",
          ],
          ["FY2023", "5.00", "4.50", "x", "Reported."],
          ["FY2024", "4.00", "3.50", "x", "Pro forma for the disposal."],
        ),
      ),
    );
    const tile = gross();
    expect(within(tile).getByText("Pro forma for the disposal.")).toBeVisible();
    expect(tile).not.toHaveTextContent(/Better|Worse|-1\.00x/);
    expect(
      within(tile).getByText(
        "Not compared with FY2023: the two periods are stated on different bases.",
      ),
    ).toBeVisible();
  });

  it("links a basis that cites a source to Evidence and prints none of it", () => {
    draw(
      foundation(
        chart(
          "leverage",
          LEVERAGE,
          ["FY2023", "5.00", "4.50", "x", "As in notes_2024.pdf page 88."],
          ["FY2024", "4.00", "3.50", "x", "As in notes_2024.pdf page 88."],
        ),
      ),
    );
    const tile = gross();
    expect(within(tile).getByRole("link", { name: "Read the reason in Evidence" })).toBeVisible();
    expect(tile).not.toHaveTextContent(/notes_2024|page 88/);
    expect(within(tile).getByText("Better")).toBeVisible();
  });

  it("shows the latest figure's period on every small tile", () => {
    draw(foundation(chart("leverage", LEVERAGE, ["FY2024", "4.00", "3.50", "x", "Stated."])));
    for (const name of ["Revenue", "EBITDA / cash interest", "Adjusted EBITDA", "Cash"])
      expect(within(screen.getByRole("region", { name })).getByText("FY2024")).toBeVisible();
  });
});

describe("a period the module did not supply between stated periods", () => {
  const gapped = () =>
    foundation(
      chart(
        "leverage",
        LEVERAGE,
        ["FY2021", "3.20", "2.90", "x", "Stated."],
        ["FY2022", "3.00", "2.70", "x", "Stated."],
        ["FY2023", "Not supplied: restated", "Not supplied: restated", "x", "Stated."],
        ["FY2024", "2.80", "2.25", "x", "Stated."],
      ),
    );

  it("breaks the slope at the gap, marks the gap, and states the period and the reason", () => {
    draw(gapped());
    const tile = gross();
    const mark = within(tile).getByRole("img");
    expect(mark).toHaveAccessibleName(
      "Total debt / EBITDA: 3.20x in FY2021, 3.00x in FY2022, no figure in FY2023, 2.80x in FY2024.",
    );
    expect(mark.querySelectorAll("[data-segment]")).toHaveLength(1);
    expect(mark.querySelectorAll("[data-gap]")).toHaveLength(1);
    expect(within(tile).getByText("FY2023: restated")).toBeVisible();
    expect(tile).not.toHaveTextContent(/Better|Worse/);
  });

  it("breaks the dot strip and the small slope at the gap too", () => {
    const entry = gapped();
    const revenue = entry.sections[3]?.blocks[0];
    if (revenue?.type !== "table") throw new Error("fixture");
    revenue.rows = [
      { line: 1, cells: ["FY2021", "1,900", "400", "US$m", "Stated."] },
      { line: 2, cells: ["FY2022", "Not supplied: restated", "405", "US$m", "Stated."] },
      { line: 3, cells: ["FY2023", "2,100", "410", "US$m", "Stated."] },
      { line: 4, cells: ["FY2024", "2,250", "450", "US$m", "Stated."] },
    ];
    draw(entry);
    const net = within(screen.getByRole("region", { name: "Net debt / EBITDA" })).getByRole("img");
    expect(net.querySelectorAll("[data-segment]")).toHaveLength(1);
    expect(net.querySelectorAll("[data-gap]")).toHaveLength(1);
    const tile = screen.getByRole("region", { name: "Revenue" });
    const mini = within(tile).getByRole("img");
    expect(mini.querySelectorAll("[data-segment]")).toHaveLength(1);
    expect(mini.querySelectorAll("[data-gap]")).toHaveLength(1);
    expect(within(tile).getByText("FY2022: restated")).toBeVisible();
  });
});

describe("gap reasons in the reader's words", () => {
  it("names module codes in a gap reason, and links one that cites a source", () => {
    const entry = foundation(
      chart(
        "leverage",
        LEVERAGE,
        ["FY2023", "Not supplied: CP-1C did not reconcile the peer set.", "4.50", "x", "Stated."],
        [
          "FY2024",
          "Not supplied: not stated in notes_2024.pdf page 88 [E3].",
          "3.50",
          "x",
          "Stated.",
        ],
      ),
    );
    draw(entry);
    const tile = gross();
    expect(
      within(tile).getByText("FY2023: Peer benchmark did not reconcile the peer set."),
    ).toBeVisible();
    expect(within(tile).getByText("FY2024: not supplied")).toBeVisible();
    expect(within(tile).getByRole("link", { name: "Read the reason in Evidence" })).toBeVisible();
    expect(tile).not.toHaveTextContent(/CP-1C|notes_2024|E3/);
  });
});

describe("the true reason a figure is not drawn", () => {
  it.each([
    [
      "two matching columns",
      chart(
        "leverage",
        ["Period", "Total debt / EBITDA", "Total debt / EBITDA (pro forma)", "Reporting unit"],
        ["FY2024", "4.00", "3.90", "x"],
      ),
      "The 'leverage' chart table has more than one Total debt / EBITDA column.",
    ],
    [
      "two reporting units",
      chart(
        "leverage",
        LEVERAGE,
        ["FY2023", "5.00", "4.50", "x", "Stated."],
        ["FY2024", "4.00", "3.50", "%", "Stated."],
      ),
      "The 'leverage' chart table states more than one reporting unit.",
    ],
    [
      "no reporting unit",
      chart("leverage", LEVERAGE, ["FY2024", "4.00", "3.50", "", "Stated."]),
      "The 'leverage' chart table states no reporting unit for a period.",
    ],
    [
      "no table",
      chart("covenants", LEVERAGE, ["FY2024", "4.00", "3.50", "x", "Stated."]),
      "The financial foundation has no 'leverage' chart table.",
    ],
  ])("states it for %s", (_, leverage, reason) => {
    draw(foundation(leverage));
    expect(within(gross()).getByText(reason)).toBeVisible();
    expect(gross()).not.toHaveTextContent("Not supplied in this run's financial foundation.");
  });

  it("states it for a handoff that could not be read", () => {
    draw(
      foundation(chart("leverage", LEVERAGE, ["FY2024", "4.00", "3.50", "x", "Stated."]), {
        parseError: "bad table",
      }),
    );
    expect(
      within(gross()).getByText(
        "The financial foundation's handoff could not be read; it is in Evidence.",
      ),
    ).toBeVisible();
  });
});

type Box = { left: number; right: number; top: number; bottom: number };
const num = (element: Element, name: string) => Number(element.getAttribute(name));

/** A text label's box, from its position, anchor and font size (monospace, 0.6 em a glyph). */
function labelBox(text: Element): Box {
  const size = Number(/text-\[(\d+)px\]/.exec(text.getAttribute("class") ?? "")?.[1] ?? 12);
  const width = text.textContent.length * size * 0.6;
  const x = num(text, "x");
  const y = num(text, "y");
  const anchor = text.getAttribute("text-anchor") ?? "start";
  const left = anchor === "middle" ? x - width / 2 : anchor === "end" ? x - width : x;
  return { left, right: left + width, top: y - size * 0.8, bottom: y + size * 0.2 };
}

/** Whether a drawn line passes through a box (Liang-Barsky clipping). */
function crosses(line: Element, box: Box) {
  const [x1, y1, x2, y2] = ["x1", "y1", "x2", "y2"].map((name) => num(line, name)) as [
    number,
    number,
    number,
    number,
  ];
  let [from, to] = [0, 1];
  const edges = [
    [x1 - x2, x1 - box.left],
    [x2 - x1, box.right - x1],
    [y1 - y2, y1 - box.top],
    [y2 - y1, box.bottom - y1],
  ] as const;
  for (const [p, q] of edges) {
    if (p === 0) {
      if (q < 0) return false;
      continue;
    }
    const t = q / p;
    if (p < 0) from = Math.max(from, t);
    else to = Math.min(to, t);
    if (from > to) return false;
  }
  return true;
}

/** The figure labels of a mark (not its axis ticks) that a connector or gridline strikes. */
function struck(mark: Element, lines: string) {
  const labels = [...mark.querySelectorAll("text")].filter(
    (text) => !/text-\[11px\]/.test(text.getAttribute("class") ?? ""),
  );
  return labels.flatMap((text) =>
    [...mark.querySelectorAll(lines)].some((line) => crosses(line, labelBox(text)))
      ? [text.textContent]
      : [],
  );
}

describe("mark labels sit clear of the lines", () => {
  const cases = [
    ["FY2023", "3.75", "3.00"],
    ["FY2024", "2.80", "2.25"],
  ];
  it("keeps every dot-strip label off its connector", () => {
    draw(foundation(chart("leverage", LEVERAGE, ...cases.map((row) => [...row, "x", "Stated."]))));
    const mark = within(screen.getByRole("region", { name: "Net debt / EBITDA" })).getByRole("img");
    expect(within(mark).getByText("3.00x")).toBeTruthy();
    expect(struck(mark, "[data-segment]")).toEqual([]);
  });

  it("keeps every slope label off its line and its gridlines", () => {
    draw(
      foundation(
        chart(
          "leverage",
          LEVERAGE,
          ["FY2022", "3.10", "2.60", "x", "Stated."],
          ...cases.map((row) => [...row, "x", "Stated."]),
        ),
      ),
    );
    const mark = within(gross()).getByRole("img");
    expect(within(mark).getByText("2.80x")).toBeTruthy();
    expect(struck(mark, "line")).toEqual([]);
  });
});

describe("the small figure tiles", () => {
  it("draw the better or worse word inline, unboxed, and never break a change after its minus", () => {
    draw(foundation(chart("leverage", LEVERAGE, ["FY2024", "4.00", "3.50", "x", "Stated."])));
    const revenue = screen.getByRole("region", { name: "Revenue" });
    const better = within(revenue).getByText("Better");
    expect(better).toHaveClass("whitespace-nowrap");
    expect(better).not.toHaveClass("border");
    const cash = screen.getByRole("region", { name: "Cash" });
    expect(within(cash).getByText("(-US$25m)")).toHaveClass("whitespace-nowrap");
  });

  it("are tiles with the small head, the title a real h3", () => {
    draw(foundation(chart("leverage", LEVERAGE, ["FY2024", "4.00", "3.50", "x", "Stated."])));
    const cover = screen.getByRole("region", { name: "EBITDA / cash interest" });
    const heading = within(cover).getByRole("heading", {
      level: 3,
      name: "EBITDA / cash interest",
    });
    expect(heading).toHaveClass("text-small");
    expect(cover).not.toHaveClass("lg:col-span-12");
  });

  it("set the two large figures below the bottom line's size", () => {
    draw(foundation(chart("leverage", LEVERAGE, ["FY2024", "4.00", "3.50", "x", "Stated."])));
    expect(within(gross()).getByText("4.00x", { selector: "span" })).toHaveClass("text-metric");
    expect(within(gross()).getByText("4.00x", { selector: "span" })).not.toHaveClass(
      "text-display",
    );
  });
});

describe("the trace control of a tile with no figure", () => {
  it("is drawn only where there is a table row to trace", () => {
    draw(foundation(chart("covenants", LEVERAGE, ["FY2024", "4.00", "3.50", "x", "Stated."])));
    expect(within(gross()).queryByRole("link", { name: /^Source for / })).toBeNull();
    cleanup();
    draw(
      foundation(
        chart(
          "leverage",
          LEVERAGE,
          ["FY2023", "5.00", "4.50", "x", "Stated."],
          ["FY2024", "4.00", "3.50", "%", "Stated."],
        ),
      ),
    );
    expect(
      within(gross()).getByRole("link", { name: "Source for Total debt / EBITDA" }),
    ).toBeVisible();
  });
});
