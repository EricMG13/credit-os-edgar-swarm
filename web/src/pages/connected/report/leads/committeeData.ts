import { readParagraph, type OutputEntry } from "../../publishedReport";
import { readCell } from "./kit/numbers";
import { reasonText, safeText } from "./kit/reader";
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

/** The Conditions cell as written: one item per cell, never split into parts. */
function conditionsOf(cell: string | undefined): Conditions {
  const value = said(cell);
  if (value.kind === "gap") return { kind: "gap", reason: value.reason };
  if (value.kind === "empty" || (value.kind === "text" && /^none stated$/i.test(value.text)))
    return null;
  return { kind: "list", items: [value] };
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
  if (reading.kind === "gap") return { kind: "gap", reason: reasonText(reading.reason) };
  return { kind: "text", text: safeText(reading.text) };
}

export type Limit = {
  name: string;
  unit: string | null;
  current: Figure;
  proposed: Figure;
  limit: Figure;
  line: number;
  /** Why no bullet can be drawn for this limit; null when the kit bullet takes it as it stands. */
  reason: string | null;
};

/**
 * A bullet needs a stated limit and a number or a stated gap for current and proposed, all on one
 * scale from zero in one stated unit. A gap in current or proposed is drawn in place by the mark.
 */
export function limitReason(
  values: { current: Figure; proposed: Figure; limit: Figure },
  unit: string | null,
): string | null {
  if (unit === null) return "This page could not read the reporting unit.";
  const named = {
    limit: "Limit value",
    current: "Current exposure",
    proposed: "Proposed exposure",
  } as const;
  for (const key of ["limit", "current", "proposed"] as const) {
    const item = values[key];
    if (item.kind === "text")
      return `This page could not read the ${named[key].toLowerCase()} as a number.`;
    if (item.kind === "gap" && key === "limit")
      return `${named[key]} is not supplied: ${item.reason.replace(/\.$/, "")}.`;
    if (item.kind === "number" && item.value < 0)
      return "A negative exposure cannot be drawn on a scale from zero.";
  }
  return null;
}

export type Limits = { line: number; rows: Limit[] };

const LIMIT_HEADERS = [
  "Limit",
  "Current exposure",
  "Proposed exposure",
  "Limit value",
  "Reporting unit",
];
const WATCH_HEADERS = ["Event date", "Event", "Status"];
const WATCH_RELEVANCE = "Credit relevance";

/** Why a chart table is not drawn, in words: more than once, or not read at all. */
function tableGap(entry: OutputEntry, headers: string[], what: string) {
  const base = `This page could not read ${what}`;
  return locate(entry, headers).state === "duplicate"
    ? `${base} because it appears more than once.`
    : `${base}.`;
}

export const limitsGap = (entry: OutputEntry) =>
  tableGap(entry, LIMIT_HEADERS, "the portfolio limits");
export const watchGap = (entry: OutputEntry) => tableGap(entry, WATCH_HEADERS, "the watch items");

/** The portfolio-limits chart table, found by its headers; null when absent, duplicated or empty. */
export function limits(entry: OutputEntry): Limits | null {
  const found = locate(entry, LIMIT_HEADERS);
  if (found.state !== "found" || found.table.rows.length === 0) return null;
  const { table } = found;
  const rows = table.rows.map((row): Limit => {
    const unit = said(cellAt(table, row, "Reporting unit"));
    const values = {
      current: figure(cellAt(table, row, "Current exposure")),
      proposed: figure(cellAt(table, row, "Proposed exposure")),
      limit: figure(cellAt(table, row, "Limit value")),
    };
    const text = unit.kind === "text" ? unit.text : null;
    return {
      name: saidText(said(cellAt(table, row, "Limit"))) || "A limit",
      unit: text,
      ...values,
      line: row.line,
      reason: limitReason(values, text),
    };
  });
  return { line: table.line, rows };
}

// ---------------------------------------------------------------------------------------------
// Watch items

type WatchItem = {
  date: string;
  event: string;
  status: string | null;
  /** The module's Credit relevance cell, as written; null when the table has none or it is empty. */
  relevance: string | null;
  line: number;
};

export type Watch =
  | { kind: "items"; line: number; items: WatchItem[] }
  /** Every row states a gap in its date and its event: one gap, with the reasons as written. */
  | { kind: "gap"; line: number; reasons: string[] };

const asWritten = (value: Said) => (value.kind === "text" ? value.text : saidText(value));

/** The module's decision-and-watch events, dates as written; null when the table is absent. */
export function watch(entry: OutputEntry): Watch | null {
  const found = locate(entry, WATCH_HEADERS);
  if (found.state !== "found" || found.table.rows.length === 0) return null;
  const { table } = found;
  const rows = table.rows.map((row) => ({
    row,
    date: said(cellAt(table, row, "Event date")),
    event: said(cellAt(table, row, "Event")),
  }));
  if (rows.every(({ date, event }) => date.kind === "gap" && event.kind === "gap")) {
    const reasons = rows.flatMap(({ date, event }) =>
      [date, event].flatMap((cell) => (cell.kind === "gap" ? [cell.reason] : [])),
    );
    return { kind: "gap", line: table.line, reasons: [...new Set(reasons)] };
  }
  return {
    kind: "items",
    line: table.line,
    items: rows.map(({ row, date, event }) => {
      const status = said(cellAt(table, row, "Status"));
      const relevance = said(cellAt(table, row, WATCH_RELEVANCE));
      return {
        date: asWritten(date) || "Date not read",
        event: asWritten(event) || "Event not read",
        status: status.kind === "text" ? status.text : null,
        relevance: relevance.kind === "text" ? relevance.text : null,
        line: row.line,
      };
    }),
  };
}
