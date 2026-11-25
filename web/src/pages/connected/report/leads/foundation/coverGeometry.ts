import type { TableViewData } from "../kit/LeadFrame";
import { LINE, NARROW, SIZE, fittingTicks, niceAxis, textWidth, wrap } from "../kit/marks";
import { legendHeight, type LegendItem } from "../kit/marks/parts";
import { group } from "../kit/numbers";
import { safeText } from "../kit/reader";
import type { InterestCover } from "./foundationData";

// Interest cover as a dot strip at the measured width: one row per stated period in time order on
// one scale from zero, the earlier periods as rings, the latest as the dot, consecutive stated
// periods joined (a line by period). A stated gap is the hatched slot with its reason in its row;
// words are written in place. No change is printed: none is stated, and the page computes none.

/** A figure as the reader sees it: the stated number grouped, with the table's unit. */
export function coverText(text: string, unit: string) {
  const grouped = group(text);
  return /^[x%]$/i.test(unit) ? `${grouped}${unit}` : `${grouped} ${unit}`;
}

type Mark =
  | { kind: "value"; value: number; text: string }
  | { kind: "gap"; reason: string }
  | { kind: "words"; text: string };

export type CoverRow = {
  label: string;
  mark: Mark;
  /** True for the latest stated number: drawn as the dot. */
  latest: boolean;
  top: number;
  /** The centre line of the row's mark. */
  y: number;
  /** The label's baseline (above the mark when narrow). */
  labelY: number;
  /** The reason's or words' lines, written in the row (gap and words rows only). */
  lines: string[];
};

export type CoverLayout = {
  narrow: boolean;
  width: number;
  height: number;
  plotLeft: number;
  plotRight: number;
  plotTop: number;
  plotBottom: number;
  rows: CoverRow[];
  ticks: { value: number; label: string }[];
  x: (value: number) => number;
  /** Segments between consecutive rows that both state a number: the line by period. */
  links: { from: [number, number]; to: [number, number] }[];
  legend: LegendItem[];
};

const PITCH = 30;
const AFTER = 10;

function markOf(cover: InterestCover, at: number): Mark {
  const cell = cover.values[at]?.cell;
  if (!cell) return { kind: "words", text: "" };
  if (cell.kind === "number")
    return { kind: "value", value: cell.value, text: coverText(cell.text, cover.unit) };
  if (cell.kind === "gap") return { kind: "gap", reason: safeText(cell.text) };
  return { kind: "words", text: safeText(cell.text) };
}

function legendOf(rows: readonly Pick<CoverRow, "label" | "mark" | "latest">[]): LegendItem[] {
  const stated = rows.filter((row) => row.mark.kind === "value");
  const latest = stated.find((row) => row.latest);
  const earlier = stated.filter((row) => !row.latest).map((row) => row.label);
  return [
    ...(earlier.length ? [{ tone: "prior" as const, text: earlier.join(", ") }] : []),
    ...(latest && stated.length > 1 ? [{ tone: "current" as const, text: latest.label }] : []),
    ...(rows.some((row) => row.mark.kind === "gap")
      ? [{ tone: "gap" as const, text: "Not stated" }]
      : []),
  ];
}

/** The rows' vertical layout from `top`: label above the mark when narrow, beside it when wide. */
function layRows(
  draft: Omit<CoverRow, "top" | "y" | "labelY" | "lines">[],
  top: number,
  narrow: boolean,
  plot: number,
) {
  let y = top;
  const rows = draft.map((row): CoverRow => {
    const { mark } = row;
    const lines =
      mark.kind === "gap"
        ? wrap(mark.reason, plot - 4)
        : mark.kind === "words"
          ? wrap(mark.text, plot)
          : [];
    const head = narrow ? LINE + 4 : 0;
    const body =
      mark.kind === "value" ? PITCH - AFTER : (mark.kind === "gap" ? 16 : 0) + lines.length * LINE;
    const centre = y + head + (mark.kind === "value" ? body / 2 : 8);
    const row_ = { ...row, top: y, y: centre, labelY: narrow ? y + 12 : centre + 4, lines };
    y += head + Math.max(body, narrow ? 0 : PITCH - AFTER) + AFTER;
    return row_;
  });
  return { rows, bottom: y - AFTER + 4 };
}

/** Where every row, mark and tick of the strip sits at `width` px. */
export function coverLayout(cover: InterestCover, width: number): CoverLayout {
  const narrow = width < NARROW;
  const marks = cover.periods.map((_, at) => markOf(cover, at));
  const lastValue = marks.map((mark) => mark.kind).lastIndexOf("value");
  const texts = marks.flatMap((mark) => (mark.kind === "value" ? [mark.text] : []));
  const room = Math.max(24, ...texts.map((text) => textWidth(text, SIZE.value))) + 14;
  const labelWidth = Math.max(56, ...cover.periods.map((period) => textWidth(period.label))) + 16;
  const plotLeft = narrow ? 8 : labelWidth;
  const plotRight = Math.max(plotLeft + 60, width - room);
  const draft = cover.periods.map((period, at) => ({
    label: period.label,
    mark: marks[at] ?? ({ kind: "words", text: "" } as const),
    latest: at === lastValue,
  }));
  const legend = legendOf(draft);
  const plotTop = legend.length ? legendHeight(legend, width) + 10 : 0;
  const { rows, bottom } = layRows(draft, plotTop + 6, narrow, plotRight - plotLeft);
  const values = marks.flatMap((mark) => (mark.kind === "value" ? [mark.value] : []));
  const axis = niceAxis([0, ...values], { zero: true, suffix: /^x$/i.test(cover.unit) ? "x" : "" });
  const x = (value: number) => axis.place(value, plotLeft, plotRight);
  const links = rows.slice(1).flatMap((row, at) => {
    const before = rows[at];
    if (before?.mark.kind !== "value" || row.mark.kind !== "value") return [];
    const from: [number, number] = [x(before.mark.value), before.y];
    return [{ from, to: [x(row.mark.value), row.y] as [number, number] }];
  });
  return {
    narrow,
    width,
    height: bottom + 22,
    plotLeft,
    plotRight,
    plotTop,
    plotBottom: bottom,
    rows,
    ticks: fittingTicks(axis, plotLeft, plotRight, (text) => textWidth(text, SIZE.tick)),
    x,
    links,
    legend,
  };
}

/** The figure's reading: every period with its figure as written, gaps with their reasons. */
export function coverReading(cover: InterestCover) {
  const parts = cover.periods.map((period, at) => {
    const mark = markOf(cover, at);
    if (mark.kind === "value") return `${period.label} ${mark.text}`;
    if (mark.kind === "gap") return `${period.label} not stated: ${mark.reason}`;
    return `${period.label} ${mark.text}`;
  });
  return `${cover.label}, ${cover.unit}, by period: ${parts.join(", ")}. Axis from 0.`;
}

/** The table view: each period, its figure as written, and the module's basis words. */
export function coverTable(cover: InterestCover): TableViewData {
  return {
    caption: `${cover.label}, ${cover.unit}`,
    headers: ["Period", `${cover.label}, ${cover.unit}`, "Basis and limitation"],
    rows: cover.periods.map((period, at) => {
      const cell = cover.values[at]?.cell;
      return [
        period.label,
        cell ? (cell.kind === "number" ? group(cell.text) : safeText(cell.text)) : "",
        cover.bases[at] ?? "",
      ];
    }),
  };
}
