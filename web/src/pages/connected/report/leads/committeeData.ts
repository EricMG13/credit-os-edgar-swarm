import { readParagraph, type OutputEntry } from "../../publishedReport";
import { difference, readCell, signOf } from "./kit/numbers";
import { safeText } from "./kit/reader";
import { cellAt, locate, said, saidText, type Said } from "./validationData";

// ---------------------------------------------------------------------------------------------
// Stance

export type Conditions = { kind: "list"; items: Said[] } | { kind: "gap"; reason: string } | null;

export type Stance =
  | {
      state: "stated";
      /** The action bias exactly as the handoff states it. */
      word: string;
      /** The confidence as stated, or null when the handoff gives none. */
      confidence: string | null;
      source: "table" | "sentence";
      conditions: Conditions;
      line: number;
    }
  | { state: "gap"; reason: string | null };

const SENTENCE =
  /^Action bias: ([A-Za-z][A-Za-z ]*[A-Za-z]) \(confidence ([A-Za-z][A-Za-z ]*[A-Za-z])\)\./;

/** The Conditions cell as a short list: split only at a semicolon or a line end. */
function conditionsOf(cell: string | undefined): Conditions {
  const value = said(cell);
  if (value.kind === "gap") return { kind: "gap", reason: value.reason };
  if (value.kind === "empty") return null;
  const parts = (cell ?? "")
    .split(/\s*(?:;|\n)\s*/)
    .map((part) => part.trim())
    .filter((part) => part !== "" && part.toLowerCase() !== "none stated");
  return parts.length ? { kind: "list", items: parts.map(said) } : null;
}

function sentenceStance(entry: OutputEntry): Stance | null {
  for (const { blocks } of entry.sections) {
    for (const block of blocks) {
      if (block.type !== "text") continue;
      const body = readParagraph(block.text).body.replaceAll("**", "");
      const match = SENTENCE.exec(body);
      if (match?.[1] && match[2])
        return {
          state: "stated",
          word: match[1],
          confidence: match[2],
          source: "sentence",
          conditions: null,
          line: block.line,
        };
    }
  }
  return null;
}

/** The action bias and confidence as written: the Final-bias table, else the challenge sentence. */
export function stance(entry: OutputEntry): Stance {
  const found = locate(entry, ["Action bias", "Rationale", "Conditions", "Confidence"]);
  if (found.state === "found") {
    const { table } = found;
    const [row] = table.rows;
    if (table.rows.length === 1 && row) {
      const word = said(cellAt(table, row, "Action bias"));
      const confidence = said(cellAt(table, row, "Confidence"));
      if (word.kind === "text")
        return {
          state: "stated",
          word: word.text,
          confidence: confidence.kind === "text" ? confidence.text : null,
          source: "table",
          conditions: conditionsOf(cellAt(table, row, "Conditions")),
          line: row.line,
        };
      return { state: "gap", reason: word.kind === "gap" ? word.reason : null };
    }
  }
  return sentenceStance(entry) ?? { state: "gap", reason: null };
}

// ---------------------------------------------------------------------------------------------
// Bull against bear ledger

export type LedgerRow = {
  line: number;
  /** The challenged point: the CP-2 row the module cross-examined, as it wrote it. */
  point: Said;
  evidenceFor: Said;
  counterCase: Said;
  evidenceAgainst: Said;
  wouldChange: Said;
};

export type Ledger =
  | { state: "rows"; rows: LedgerRow[]; line: number }
  | { state: "none"; reason: string | null }
  | { state: "absent" | "duplicate" };

const LEDGER_HEADERS = [
  "CP-2 row",
  "Counter-case",
  "Evidence for",
  "Evidence against",
  "What would change the view",
];

/** The handoff's own empty row: every cell a stated gap, empty, or `None`. */
const isNoneRow = (cells: string[]) =>
  cells.every(
    (cell) => ["gap", "empty"].includes(said(cell).kind) || cell.trim().toLowerCase() === "none",
  );

export function ledger(entry: OutputEntry): Ledger {
  const found = locate(entry, LEDGER_HEADERS);
  if (found.state !== "found") return found;
  const { table } = found;
  const real = table.rows.filter((row) => !isNoneRow(row.cells));
  if (real.length === 0) {
    const [none] = table.rows;
    const gap = none?.cells.map(said).find((cell) => cell.kind === "gap");
    return { state: "none", reason: gap?.kind === "gap" ? gap.reason : null };
  }
  return {
    state: "rows",
    line: table.line,
    rows: real.map((row) => ({
      line: row.line,
      point: said(cellAt(table, row, "CP-2 row")),
      evidenceFor: said(cellAt(table, row, "Evidence for")),
      counterCase: said(cellAt(table, row, "Counter-case")),
      evidenceAgainst: said(cellAt(table, row, "Evidence against")),
      wouldChange: said(cellAt(table, row, "What would change the view")),
    })),
  };
}

export const ledgerCells = (row: LedgerRow) => [
  saidText(row.point),
  saidText(row.evidenceFor),
  saidText(row.counterCase),
  saidText(row.evidenceAgainst),
  saidText(row.wouldChange),
];

// ---------------------------------------------------------------------------------------------
// Portfolio limits

export type Figure =
  | { kind: "number"; text: string; value: number }
  | { kind: "gap"; reason: string }
  | { kind: "text"; text: string };

function figure(cell: string | undefined): Figure {
  const reading = readCell(cell ?? "");
  if (reading.kind === "number") return reading;
  if (reading.kind === "gap") return { kind: "gap", reason: safeText(reading.reason) };
  return { kind: "text", text: safeText(reading.text) };
}

export const BULLET = { left: 8, right: 400 } as const;

export type Bullet = {
  /** The scale's top: a round number at or above every stated value; the scale starts at zero. */
  top: number;
  ticks: { label: string; x: number }[];
  current: number;
  /** The proposed exposure's place, or null where it is not supplied. */
  proposed: number | null;
  limit: number;
  /** Stated against stated: true only when the figure is above the limit value. */
  currentAbove: boolean;
  proposedAbove: boolean;
};

const above = (value: Figure, limit: Figure) =>
  value.kind === "number" &&
  limit.kind === "number" &&
  signOf(difference(value.text, limit.text)) === 1;

function niceStep(span: number) {
  const raw = span / 4;
  const power = 10 ** Math.floor(Math.log10(raw));
  const factor = raw / power;
  return (factor <= 1 ? 1 : factor <= 2 ? 2 : factor <= 5 ? 5 : 10) * power;
}

const trimmed = (value: number) => String(Number(value.toPrecision(12)));

/**
 * Current and proposed exposure marked against the limit on one scale from zero. A gap, a word or
 * a negative value in current or limit gives no bullet (`reason`); a proposed exposure that is
 * not supplied is left out and drawn as the gap mark.
 */
export function bulletMarks(values: {
  current: Figure;
  proposed: Figure;
  limit: Figure;
}): Bullet | { reason: string } {
  const { current, proposed, limit } = values;
  const named = {
    current: "Current exposure",
    proposed: "Proposed exposure",
    limit: "Limit value",
  };
  for (const key of ["current", "limit"] as const) {
    const item = values[key];
    if (item.kind === "gap")
      return { reason: `${named[key]} is not supplied: ${item.reason.replace(/\.$/, "")}.` };
    if (item.kind === "text") return { reason: `${named[key]} is not a number.` };
  }
  if (proposed.kind === "text") return { reason: `${named.proposed} is not a number.` };
  if (current.kind !== "number" || limit.kind !== "number") return { reason: "Not a number." };
  const stated = [
    current.value,
    limit.value,
    ...(proposed.kind === "number" ? [proposed.value] : []),
  ];
  if (stated.some((value) => value < 0))
    return { reason: "A negative exposure cannot be drawn on a scale from zero." };
  const max = Math.max(...stated);
  const step = max > 0 ? niceStep(max) : 1;
  const top = Math.max(Math.ceil(max / step) * step, step);
  const x = (value: number) => BULLET.left + (value / top) * (BULLET.right - BULLET.left);
  const count = Math.round(top / step);
  return {
    top,
    ticks: Array.from({ length: count + 1 }, (_, at) => ({
      label: trimmed(at * step),
      x: x(at * step),
    })),
    current: x(current.value),
    proposed: proposed.kind === "number" ? x(proposed.value) : null,
    limit: x(limit.value),
    currentAbove: above(current, limit),
    proposedAbove: above(proposed, limit),
  };
}

export type Limit = {
  name: string;
  unit: string | null;
  current: Figure;
  proposed: Figure;
  limit: Figure;
  line: number;
  bullet: Bullet | { reason: string };
};

export type Limits = { line: number; rows: Limit[] };

/** The portfolio-limits chart table, found by its headers; null when absent, duplicated or empty. */
export function limits(entry: OutputEntry): Limits | null {
  const found = locate(entry, [
    "Limit",
    "Current exposure",
    "Proposed exposure",
    "Limit value",
    "Reporting unit",
  ]);
  if (found.state !== "found" || found.table.rows.length === 0) return null;
  const { table } = found;
  const rows = table.rows.map((row): Limit => {
    const unit = said(cellAt(table, row, "Reporting unit"));
    const values = {
      current: figure(cellAt(table, row, "Current exposure")),
      proposed: figure(cellAt(table, row, "Proposed exposure")),
      limit: figure(cellAt(table, row, "Limit value")),
    };
    return {
      name: saidText(said(cellAt(table, row, "Limit"))) || "A limit",
      unit: unit.kind === "text" ? unit.text : null,
      ...values,
      line: row.line,
      bullet:
        unit.kind === "text"
          ? bulletMarks(values)
          : { reason: "The reporting unit is not stated." },
    };
  });
  return { line: table.line, rows };
}

// ---------------------------------------------------------------------------------------------
// Watch items

export type WatchItem = {
  date: string;
  event: string;
  status: string | null;
  line: number;
};

export type Watch = { line: number; items: WatchItem[] };

const asWritten = (value: Said) => (value.kind === "text" ? value.text : saidText(value));

/** The module's decision-and-watch events, dates as written; null when the table is absent. */
export function watch(entry: OutputEntry): Watch | null {
  const found = locate(entry, ["Event date", "Event", "Status"]);
  if (found.state !== "found" || found.table.rows.length === 0) return null;
  const { table } = found;
  return {
    line: table.line,
    items: table.rows.map((row) => {
      const status = said(cellAt(table, row, "Status"));
      return {
        date: asWritten(said(cellAt(table, row, "Event date"))) || "Date not stated",
        event: asWritten(said(cellAt(table, row, "Event"))) || "Event not stated",
        status: status.kind === "text" ? status.text : null,
        line: row.line,
      };
    }),
  };
}
