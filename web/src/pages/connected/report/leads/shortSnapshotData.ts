import type { OutputEntry } from "../../publishedReport";
import { safeText } from "./kit/reader";
import { difference, group, readCell, signOf } from "./kit/numbers";
import { allTables, tableWith } from "./kit/tables";
import { tone } from "../../signal";

/*
 * Reads what the CP-L10 contract names. The current method (src/deploy_vii/methods/cpl10.md, ruling
 * 2026-11-11 M6) writes `### Key figures`: exactly one table `Measure | Value | Period | Source`.
 * The earlier bounded change screen (bindings/cpl10.py: TL10.1 to TL10.5) names no columns and is
 * not part of the current method; a change screen is therefore drawn only from a table carrying
 * `Topic`, `Prior` and `Current` columns, and any other table with a `Topic` column is a gap that says
 * what was expected. Nothing else is read.
 */

const KEY_FIGURE_HEADERS = ["Measure", "Value", "Period", "Source"] as const;
export const MOST_FIGURES = 6;

export type Figure =
  | { kind: "value"; text: string; period: string }
  | { kind: "gap"; text: string; reason: string; period: string };

export type KeyFigure = {
  measure: string;
  line: number;
  current: Figure;
  /** The same measure in an earlier period, when the table states both. */
  prior: Figure | null;
  /** Exact `current - prior`, derived, when both are plain numbers with the same unit text. */
  change: {
    text: string;
    /** The size of the change with the figures' own unit text, no sign: "0.40x". */
    size: string;
    sign: -1 | 0 | 1;
    tone: "better" | "worse" | "flat" | "none";
  } | null;
  /** Both figures as numbers for a mark. */
  marks: { prior: number; current: number } | null;
};

const TONE_KEYS: Record<string, string> = {
  "total leverage": "leverage",
  "net leverage": "net_leverage",
  "interest coverage": "coverage",
  "interest cover": "coverage",
  liquidity: "liquidity",
  "net debt": "net_debt",
  "gross debt": "gross_debt",
  "free cash flow": "free_cash_flow",
  revenue: "revenue",
  "undrawn committed facilities": "undrawn",
};

const norm = (text: string) => text.trim().replace(/\s+/g, " ").toLowerCase();

/** A value as `prefix number suffix` ("3.10x" is `""`, `3.10`, `x`), the number plain. */
function split(text: string) {
  const match = /^([^\d\-−]*?)(-?[\d,]+(?:\.\d+)?)(\D*)$/.exec(text.trim().replaceAll("−", "-"));
  const number = match?.[2]?.replaceAll(",", "");
  return match && number !== undefined && readCell(number).kind === "number"
    ? { prefix: (match[1] ?? "").trim(), number, suffix: (match[3] ?? "").trim() }
    : null;
}

function figureOf(value: string, period: string): Figure {
  const reading = readCell(value);
  const when = safeText(period);
  if (reading.kind === "gap")
    return {
      kind: "gap",
      text: safeText(value),
      reason: safeText(reading.reason),
      period: when,
    };
  return { kind: "value", text: safeText(value), period: when };
}

const yearOf = (period: string) => /(\d{4})(?!.*\d{4})/.exec(period)?.[1];

function pair(measure: string, a: { fig: Figure; line: number }, b: { fig: Figure; line: number }) {
  const years = [yearOf(a.fig.period), yearOf(b.fig.period)];
  if (!years[0] || !years[1] || years[0] === years[1]) return null;
  const [prior, current] = years[0] < years[1] ? [a, b] : [b, a];
  const p = prior.fig.kind === "value" ? split(prior.fig.text) : null;
  const c = current.fig.kind === "value" ? split(current.fig.text) : null;
  let change: KeyFigure["change"] = null;
  let marks: KeyFigure["marks"] = null;
  if (p && c) {
    marks = { prior: Number(p.number), current: Number(c.number) };
    const exact =
      p.prefix === c.prefix && p.suffix === c.suffix ? difference(c.number, p.number) : null;
    const sign = signOf(exact);
    if (exact !== null && (sign === 1 || sign === 0 || sign === -1)) {
      const key = TONE_KEYS[norm(measure)];
      const size = `${c.prefix}${c.prefix ? " " : ""}${group(exact.replace(/^-/, ""))}${c.suffix}`;
      change = { text: exact, size, sign, tone: key ? tone(key, exact) : "none" };
    }
  }
  return {
    measure,
    line: current.line,
    current: current.fig,
    prior: prior.fig,
    change,
    marks,
  } satisfies KeyFigure;
}

export type KeyFigures =
  { state: "ready"; line: number; figures: KeyFigure[] } | { state: "gap"; reason: string };

/** The key figures, one per measure, with prior and current where the table states the measure in two periods. */
export function readKeyFigures(entry: OutputEntry): KeyFigures {
  const found = allTables(entry).filter(({ table }) =>
    KEY_FIGURE_HEADERS.every((name) => table.headers.includes(name)),
  );
  if (found.length === 0)
    return { state: "gap", reason: "This page could not read the key figures from the handoff." };
  if (found.length > 1)
    return {
      state: "gap",
      reason:
        "This page could not read the key figures from the handoff because they appear more than once.",
    };
  const [only] = found;
  const table = only?.table;
  if (!table?.rows.length)
    return {
      state: "gap",
      reason: "This page could not read a row of the key figures from the handoff.",
    };
  const at = (name: string) => table.headers.indexOf(name);
  const rows = table.rows.map((row) => ({
    measure: safeText(row.cells[at("Measure")] ?? ""),
    fig: figureOf(row.cells[at("Value")] ?? "", row.cells[at("Period")] ?? ""),
    line: row.line,
  }));
  const used = new Set<number>();
  const figures: KeyFigure[] = [];
  rows.forEach((row, index) => {
    if (used.has(index)) return;
    const same = rows
      .map((other, otherIndex) => ({ other, otherIndex }))
      .filter(
        ({ other, otherIndex }) =>
          otherIndex !== index && norm(other.measure) === norm(row.measure),
      );
    const [match] = same;
    const joined =
      same.length === 1 && match && !used.has(match.otherIndex)
        ? pair(row.measure, row, match.other)
        : null;
    if (joined && match) {
      used.add(match.otherIndex);
      figures.push(joined);
    } else
      figures.push({
        measure: row.measure,
        line: row.line,
        current: row.fig,
        prior: null,
        change: null,
        marks: null,
      });
  });
  return { state: "ready", line: table.line, figures };
}

type ChangeItem = {
  topic: string;
  prior: string;
  current: string;
  /** The module's own reader-text line, where the table has one. */
  text: string | null;
  /** The direction word, only when the table states it. */
  direction: string | null;
  line: number;
};
export type ChangeScreen =
  { state: "ready"; line: number; items: ChangeItem[] } | { state: "gap"; reason: string } | null;

const TEXT_HEADERS = ["Change", "What changed", "Reading"];

/** The change screen, when the handoff carries a table with a Topic column; nothing otherwise. */
export function readChangeScreen(entry: OutputEntry): ChangeScreen {
  const candidates = allTables(entry).filter(
    ({ table }) =>
      table.headers.includes("Topic") &&
      !KEY_FIGURE_HEADERS.every((name) => table.headers.includes(name)),
  );
  if (candidates.length === 0) return null;
  const table = tableWith(entry, ["Topic", "Prior", "Current"]);
  if (candidates.length > 1 || !table)
    return {
      state: "gap",
      reason:
        "This page could not read the change screen from the handoff because the table is not in a shape this page reads.",
    };
  const at = (name: string) => table.headers.indexOf(name);
  const textAt = TEXT_HEADERS.map(at).find((index) => index >= 0) ?? -1;
  const directionAt = at("Direction");
  const items = table.rows.map((row): ChangeItem => {
    const text = textAt < 0 ? "" : (row.cells[textAt] ?? "").trim();
    const direction = directionAt < 0 ? "" : (row.cells[directionAt] ?? "").trim();
    return {
      topic: safeText(row.cells[at("Topic")] ?? ""),
      prior: safeText(row.cells[at("Prior")] ?? ""),
      current: safeText(row.cells[at("Current")] ?? ""),
      text: text ? safeText(text) : null,
      direction: direction ? safeText(direction) : null,
      line: row.line,
    };
  });
  if (!items.length)
    return {
      state: "gap",
      reason: "This page could not read a row of the change screen from the handoff.",
    };
  return { state: "ready", line: table.line, items };
}
