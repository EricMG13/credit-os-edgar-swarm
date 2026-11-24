import type { OutputEntry } from "../../publishedReport";
import { changeSign } from "../../signal";
import { difference, group, readCell } from "./kit/numbers";
import { cellAt, locate, said, saidText, type Said } from "./validationData";

// ---------------------------------------------------------------------------------------------
// What changed: the analysis

const KNOWN_STATUS = [
  "Unchanged",
  "Strengthened",
  "Weakened",
  "Reversed",
  "New",
  "Not run this time",
] as const;
export type StatusShape = "unchanged" | "up" | "down" | "reversed" | "new" | "not-run" | "other";

const SHAPE: Record<(typeof KNOWN_STATUS)[number], StatusShape> = {
  Unchanged: "unchanged",
  Strengthened: "up",
  Weakened: "down",
  Reversed: "reversed",
  New: "new",
  "Not run this time": "not-run",
};

type ModuleChange = {
  name: string;
  status: string;
  cause: string;
  why: string;
  line: number;
};

type StatusCount = { word: string; shape: StatusShape; count: number };

export type AnalysisChanges = {
  line: number;
  counts: StatusCount[];
  modules: ModuleChange[];
};

/** The module cell is "Plain name (CP-x)": the page shows the plain name only. */
const plainName = (cell: string | undefined) => {
  const value = said(cell);
  return value.kind === "text" ? value.text.replace(/\s*\(CP-[A-Za-z0-9]+\)\s*$/i, "") : "A module";
};
const words = (value: Said, otherwise: string) =>
  value.kind === "text" ? value.text : saidText(value) || otherwise;

/** The analysis register's status words, counted exactly; zero counts are not listed. */
export function analysisChanges(entry: OutputEntry): AnalysisChanges | null {
  const found = locate(entry, ["Module", "Status", "Cause", "Why"]);
  if (found.state !== "found" || found.table.rows.length === 0) return null;
  const { table } = found;
  const modules = table.rows.map((row): ModuleChange => ({
    name: plainName(cellAt(table, row, "Module")),
    status: words(said(cellAt(table, row, "Status")), "Status not stated"),
    cause: words(said(cellAt(table, row, "Cause")), "Not stated"),
    why: words(said(cellAt(table, row, "Why")), "Not stated"),
    line: row.line,
  }));
  const order = new Map<string, StatusCount>(
    KNOWN_STATUS.map((word) => [word.toLowerCase(), { word, shape: SHAPE[word], count: 0 }]),
  );
  for (const { status } of modules) {
    const key = status.toLowerCase();
    const seen = order.get(key) ?? { word: status, shape: "other", count: 0 };
    seen.count += 1;
    order.set(key, seen);
  }
  return {
    line: table.line,
    modules,
    counts: [...order.values()].filter((item) => item.count > 0),
  };
}

// ---------------------------------------------------------------------------------------------
// What changed: the issuer

export type Measured = {
  /** The cell as the handoff wrote it. */
  text: string;
  /** The plain number, commas stripped. */
  number: string;
  /** `x`, `%`, a unit word, or "" for a bare number. */
  unit: string;
  period: string | null;
};

const VALUE = /^(-?[\d,]+(?:\.\d+)?)(x|%)?(?:\s+([^\s()]+))?(?:\s+\(([^)]*)\))?$/;

/** A measure cell: value, unit attached for x and %, period in brackets. Anything else is words. */
export function measured(cell: string): Measured | null {
  const text = cell.trim().replaceAll("−", "-");
  const match = VALUE.exec(text);
  const number = match?.[1];
  if (!match || number === undefined || readCell(number).kind !== "number") return null;
  if (match[2] !== undefined && match[3] !== undefined) return null;
  return {
    text: cell.trim(),
    number: number.replaceAll(",", ""),
    unit: match[2] ?? match[3] ?? "",
    period: match[4] ?? null,
  };
}

export type Move = {
  label: string;
  earlier: Measured;
  current: Measured;
  /** `current - earlier`, exact and derived; the same unit on both sides. */
  change: string;
  unit: string;
  cause: string;
  line: number;
};

export type WordRow = {
  label: string;
  /** What the row says of each run, in the handoff's words; null where the row is a single statement. */
  earlier: string | null;
  current: string | null;
  cause: string;
  effect: string | null;
  line: number;
};

export type IssuerChanges = {
  line: number;
  /** The first unit group's five largest moves, largest first. */
  moves: Move[];
  unit: string | null;
  /** Every other row, in the register's order. */
  words: WordRow[];
  scale: { lo: number; hi: number; place: (value: number) => number } | null;
};

const HELD_BACK = /^(?:Correction|Method change)$/i;
const NOT_COMPARABLE = /^Not comparable\b/i;
const MOVES = 5;
export const TRACK = { left: 8, right: 400 } as const;

function niceStep(span: number) {
  const raw = span / 4;
  const power = 10 ** Math.floor(Math.log10(raw));
  const factor = raw / power;
  return (factor <= 1 ? 1 : factor <= 2 ? 2 : factor <= 5 ? 5 : 10) * power;
}

/** One axis for a set of values: from zero (or the lowest value below zero) to a round top. */
export function trackScale(values: readonly number[]) {
  const min = Math.min(0, ...values);
  const max = Math.max(0, ...values);
  const step = niceStep(max - min || 1);
  const clean = (value: number) => Number(value.toPrecision(12));
  const lo = clean(Math.floor(min / step) * step);
  const hi = clean(Math.max(Math.ceil(max / step) * step, lo + step));
  return {
    lo,
    hi,
    place: (value: number) => TRACK.left + ((value - lo) / (hi - lo)) * (TRACK.right - TRACK.left),
  };
}

export const unitName = (unit: string) =>
  unit === "x" ? "multiples (x)" : unit === "%" ? "percent (%)" : unit || "plain numbers";

/** The size of a change, unsigned, with its unit attached. */
export function amountWords(change: string, unit: string) {
  const attached = unit === "x" || unit === "%" ? unit : unit ? ` ${unit}` : "";
  return `${group(change.replace(/^-/, ""))}${attached}`;
}

/** `current - earlier` as the page writes a derived change: sign, thousands, unit attached. */
export function changeWords(change: string, unit: string) {
  const sign = changeSign(change);
  return `${sign === 1 ? "+" : sign === -1 ? "−" : ""}${amountWords(change, unit)}`;
}

const display = (value: Said, otherwise: string) => words(value, otherwise);

export function issuerChanges(entry: OutputEntry): IssuerChanges | null {
  const found = locate(entry, ["Measure or fact", "Earlier", "Current", "Cause"]);
  if (found.state !== "found" || found.table.rows.length === 0) return null;
  const { table } = found;
  type Candidate = { row: WordRow; earlier: Measured; current: Measured; change: string };
  const rows = table.rows.map((row) => {
    const earlier = cellAt(table, row, "Earlier") ?? "";
    const current = cellAt(table, row, "Current") ?? "";
    const effect = said(cellAt(table, row, "Effect on the credit view"));
    const cause = display(said(cellAt(table, row, "Cause")), "Not stated");
    const label = saidText(said(cellAt(table, row, "Measure or fact"))) || "A measure";
    const plain: WordRow = {
      label,
      earlier: display(said(earlier), "Not stated"),
      current: display(said(current), "Not stated"),
      cause,
      effect: effect.kind === "text" ? effect.text : null,
      line: row.line,
    };
    const a = measured(earlier);
    const b = measured(current);
    const change = a && b && a.unit === b.unit ? difference(b.number, a.number) : null;
    const held =
      HELD_BACK.test(cause) || (effect.kind === "text" && NOT_COMPARABLE.test(effect.text));
    const candidate: Candidate | null =
      a && b && change !== null && !held ? { row: plain, earlier: a, current: b, change } : null;
    return { plain, candidate };
  });
  const [first] = rows.flatMap(({ candidate }) => (candidate ? [candidate] : []));
  const unit = first?.earlier.unit ?? null;
  const same = rows.flatMap(({ candidate }) =>
    candidate && candidate.earlier.unit === unit ? [candidate] : [],
  );
  const ranked = same
    .map((candidate, order) => ({ candidate, order }))
    .sort(
      (a, b) =>
        Math.abs(Number(b.candidate.change)) - Math.abs(Number(a.candidate.change)) ||
        a.order - b.order,
    )
    .slice(0, MOVES)
    .map(({ candidate }) => candidate);
  const drawn = new Set(ranked.map((item) => item.row.line));
  const moves = ranked.map((item): Move => ({
    label: item.row.label,
    earlier: item.earlier,
    current: item.current,
    change: item.change,
    unit: item.earlier.unit,
    cause: item.row.cause,
    line: item.row.line,
  }));
  return {
    line: table.line,
    moves,
    unit,
    words: rows.flatMap(({ plain }) => (drawn.has(plain.line) ? [] : [plain])),
    scale: moves.length
      ? trackScale(
          moves.flatMap((move) => [Number(move.earlier.number), Number(move.current.number)]),
        )
      : null,
  };
}
