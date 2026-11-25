import type { OutputEntry } from "../../publishedReport";
import { changeBetween, periodKey, yearApart } from "./kit/changes";
import { group, readCell } from "./kit/numbers";
import { reasonText, safeText } from "./kit/reader";
import { allTables, periodLabel, tableWith } from "./kit/tables";
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

export type Figure =
  | { kind: "value"; text: string; period: string }
  | { kind: "gap"; text: string; reason: string; period: string };

export type KeyFigure = {
  measure: string;
  line: number;
  current: Figure;
  /** The same measure in an earlier period, when the table states both. */
  prior: Figure | null;
  /**
   * The one change the page may print: the exact prior to current difference of one measure, when
   * both periods are of one kind exactly a year apart and the unit text is the same.
   */
  change: {
    text: string;
    /** The size of the change with the figures' own unit text, no sign: "0.40x". */
    size: string;
    sign: -1 | 0 | 1;
    tone: "better" | "worse" | "flat" | "none";
  } | null;
  /** Both figures as numbers for a mark. */
  marks: { prior: number; current: number; suffix: string } | null;
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

/** A year apart in either order. */
const apart = (a: string, b: string) => yearApart(a, b) || yearApart(b, a);

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
      reason: reasonText(reading.reason),
      period: when,
    };
  return { kind: "value", text: safeText(value), period: when };
}

type Row = { fig: Figure; line: number };

/** Two rows of one measure as prior and current, only when their periods are a year apart. */
function pair(measure: string, a: Row, b: Row) {
  if (!apart(a.fig.period, b.fig.period)) return null;
  const [first, second] = [periodKey(a.fig.period), periodKey(b.fig.period)];
  if (!first || !second) return null;
  const [prior, current] = first.year < second.year ? [a, b] : [b, a];
  const p = prior.fig.kind === "value" ? split(prior.fig.text) : null;
  const c = current.fig.kind === "value" ? split(current.fig.text) : null;
  let change: KeyFigure["change"] = null;
  let marks: KeyFigure["marks"] = null;
  if (p && c) {
    marks = { prior: Number(p.number), current: Number(c.number), suffix: c.suffix };
    const unit = (part: NonNullable<typeof p>) => `${part.prefix}|${part.suffix}`;
    const made = changeBetween(
      { period: prior.fig.period, cell: p.number, unit: unit(p) },
      { period: current.fig.period, cell: c.number, unit: unit(c) },
    );
    const key = TONE_KEYS[norm(measure)];
    if (made && made.sign !== null) {
      const size = `${c.prefix}${c.prefix ? " " : ""}${group(made.text.replace(/^-/, ""))}${c.suffix}`;
      change = {
        text: made.text,
        size,
        sign: made.sign,
        tone: key ? tone(key, made.text) : "none",
      };
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
    return { state: "gap", reason: "This page could not read the key figures." };
  if (found.length > 1)
    return {
      state: "gap",
      reason: "This page could not read the key figures: they appear more than once.",
    };
  const [only] = found;
  const table = only?.table;
  if (!table?.rows.length)
    return {
      state: "gap",
      reason: "This page could not read a row of the key figures.",
    };
  const at = (name: string) => table.headers.indexOf(name);
  const rows = table.rows.map((row) => ({
    measure: safeText(row.cells[at("Measure")] ?? ""),
    fig: figureOf(row.cells[at("Value")] ?? "", periodLabel(row.cells[at("Period")] ?? "")),
    line: row.line,
  }));
  const used = new Set<number>();
  const figures: KeyFigure[] = [];
  rows.forEach((row, index) => {
    if (used.has(index)) return;
    // The first later row of the same measure in the period a year apart; any other period is its own figure.
    const matchAt = rows.findIndex(
      (other, otherIndex) =>
        otherIndex > index &&
        !used.has(otherIndex) &&
        norm(other.measure) === norm(row.measure) &&
        apart(row.fig.period, other.fig.period),
    );
    const other = matchAt >= 0 ? rows[matchAt] : undefined;
    const joined = other ? pair(row.measure, row, other) : null;
    if (joined) {
      used.add(matchAt);
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
        "This page could not read the change screen: its table is not in a shape this page reads.",
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
      reason: "This page could not read a row of the change screen.",
    };
  return { state: "ready", line: table.line, items };
}
