import {
  containsReference,
  readerText,
  type OutputEntry,
  type Row,
  type Table,
} from "../../publishedReport";
import { bottomLine } from "../overview/read";
import { readCell } from "./kit/numbers";
import { allTables } from "./kit/tables";

/** What a lead draws where a handoff passage cites a source: the trace control has it. */
export const IN_EVIDENCE = "Detail is in Evidence.";

/** A handoff's words, reference-free and with module codes named; null when they cite a source. */
export function safeText(text: string): string | null {
  const trimmed = text.trim();
  return trimmed === "" || containsReference(trimmed) ? null : readerText(trimmed);
}

/** One cell as a lead may draw it: words, the handoff's stated gap, a source citation, or nothing. */
export type Said =
  | { kind: "text"; text: string }
  | { kind: "gap"; reason: string }
  | { kind: "evidence" }
  | { kind: "empty" };

export function said(cell: string | undefined): Said {
  const text = (cell ?? "").trim();
  if (text === "") return { kind: "empty" };
  const reading = readCell(text);
  if (reading.kind === "gap")
    return { kind: "gap", reason: safeText(reading.reason) ?? IN_EVIDENCE };
  const safe = safeText(text);
  return safe === null ? { kind: "evidence" } : { kind: "text", text: safe };
}

/** The words of a `Said` as a table view writes them. */
export function saidText(value: Said): string {
  if (value.kind === "text") return value.text;
  if (value.kind === "gap") return `Not supplied: ${value.reason}`;
  return value.kind === "evidence" ? IN_EVIDENCE : "";
}

export type Located = { state: "found"; table: Table } | { state: "absent" | "duplicate" };

/** The one table of the entry carrying all these headers, or why there is none. Never by heading. */
export function locate(entry: OutputEntry, headers: readonly string[]): Located {
  const found = allTables(entry).filter(({ table }) =>
    headers.every((name) => table.headers.includes(name)),
  );
  const [only] = found;
  if (found.length > 1) return { state: "duplicate" };
  return only ? { state: "found", table: only.table } : { state: "absent" };
}

export const cellAt = (table: Table, row: Row, header: string) =>
  row.cells[table.headers.indexOf(header)];

// ---------------------------------------------------------------------------------------------
// Severity

export type Severity = {
  /** The word as the handoff wrote it (Critical, Material and Minor in their one spelling). */
  word: string;
  rank: number;
  /** Critical, Material or Minor; any other word is drawn as written with a neutral mark. */
  known: boolean;
  stated: boolean;
};

const KNOWN_SEVERITY = ["Critical", "Material", "Minor"] as const;
const NOT_STATED_RANK = 4;

export function severityOf(cell: string | undefined): Severity {
  const value = said(cell);
  if (value.kind !== "text")
    return { word: "Severity not stated", rank: NOT_STATED_RANK, known: false, stated: false };
  const at = KNOWN_SEVERITY.findIndex((word) => word.toLowerCase() === value.text.toLowerCase());
  const known = KNOWN_SEVERITY[at];
  return known === undefined
    ? { word: value.text, rank: 3, known: false, stated: true }
    : { word: known, rank: at, known: true, stated: true };
}

// ---------------------------------------------------------------------------------------------
// The two issue registers

export type Issue = {
  kind: "gap" | "contradiction";
  severity: Severity;
  line: number;
  /** Gaps register only. */
  action: Said | null;
  affected: string[] | "evidence" | null;
};

export type Register =
  | { state: "rows"; issues: Issue[]; line: number }
  | { state: "none"; reason: string | null; line: number }
  | { state: "absent" | "duplicate" };

const GAP_HEADERS = ["Gap", "Why it matters", "Affected modules", "Severity", "Action"];
const CONTRADICTION_HEADERS = ["Contradiction", "Claims", "Nature", "Severity", "Rationale"];

/** The handoff's own empty row: first cell `None`, every other cell a stated gap or empty. */
function noneRow(row: Row) {
  const [first = "", ...rest] = row.cells;
  return (
    first.trim().toLowerCase() === "none" &&
    rest.every((cell) => ["gap", "empty"].includes(said(cell).kind))
  );
}

const reasonOf = (row: Row) => {
  const gap = row.cells.map(said).find((cell) => cell.kind === "gap");
  return gap?.kind === "gap" ? gap.reason : null;
};

function affectedOf(cell: string | undefined): Issue["affected"] {
  const text = (cell ?? "").trim();
  if (text === "" || readCell(text).kind === "gap") return null;
  if (containsReference(text)) return "evidence";
  return text
    .split(/[,;]/)
    .map((part) => readerText(part.trim()))
    .filter((part) => part !== "");
}

function readRegister(entry: OutputEntry, headers: string[], kind: Issue["kind"]): Register {
  const found = locate(entry, headers);
  if (found.state !== "found") return found;
  const { table } = found;
  const rows = table.rows.filter((row) => !noneRow(row));
  const [none] = table.rows.filter(noneRow);
  if (rows.length === 0)
    return { state: "none", reason: none ? reasonOf(none) : null, line: table.line };
  return {
    state: "rows",
    line: table.line,
    issues: rows.map((row) => ({
      kind,
      severity: severityOf(cellAt(table, row, "Severity")),
      line: row.line,
      action: kind === "gap" ? said(cellAt(table, row, "Action")) : null,
      affected: kind === "gap" ? affectedOf(cellAt(table, row, "Affected modules")) : null,
    })),
  };
}

export type Pip = { kind: Issue["kind"]; line: number };
export type Group = { severity: Severity; pips: Pip[] };

export type Issues = {
  gaps: Register;
  contradictions: Register;
  /** One group per severity word, Critical first; one pip per listed issue. */
  groups: Group[];
  total: number;
  /** The reasons stated by a synthetic `Item | Value` register placeholder, when there is one. */
  placeholders: string[];
};

/**
 * `Item | Value` registers that only say `Not supplied: …`: the synthetic shape. They are no issue
 * register; their reason is shown, and no count is drawn from them.
 */
function placeholderReasons(entry: OutputEntry) {
  const reasons = allTables(entry).flatMap(({ heading, table }) => {
    const [row] = table.rows;
    const [label, value] = table.headers;
    if (table.headers.length !== 2 || label !== "Item" || value !== "Value") return [];
    if (!/register/i.test(heading) || table.rows.length !== 1 || !row) return [];
    const stated = said(row.cells[1]);
    return stated.kind === "gap" ? [stated.reason] : [];
  });
  return [...new Set(reasons)];
}

export function issues(entry: OutputEntry): Issues {
  const gaps = readRegister(entry, GAP_HEADERS, "gap");
  const contradictions = readRegister(entry, CONTRADICTION_HEADERS, "contradiction");
  const listed = [gaps, contradictions].flatMap((register) =>
    register.state === "rows" ? register.issues : [],
  );
  const words = new Map<string, Group>();
  for (const issue of listed) {
    const key = issue.severity.word.toLowerCase();
    const group = words.get(key) ?? { severity: issue.severity, pips: [] };
    group.pips.push({ kind: issue.kind, line: issue.line });
    words.set(key, group);
  }
  const groups = [...words.values()].sort((a, b) => a.severity.rank - b.severity.rank);
  return {
    gaps,
    contradictions,
    groups,
    total: listed.length,
    placeholders: placeholderReasons(entry),
  };
}

/** The gaps register's actions in priority order: Critical first, the handoff's order within a rank. */
export function remediation(entry: OutputEntry) {
  const { gaps } = issues(entry);
  if (gaps.state !== "rows") return null;
  return gaps.issues
    .map((issue, order) => ({ issue, order }))
    .sort((a, b) => a.issue.severity.rank - b.issue.severity.rank || a.order - b.order)
    .map(({ issue }) => issue);
}

// ---------------------------------------------------------------------------------------------
// Clearance verdict

export type Shape = "filled" | "half" | "slash" | "ring";

export type Clearance = {
  /** The status as the verdict row wrote it, without the "over the evaluated set" scope. */
  status: string | null;
  scope: string | null;
  notEvaluated: string | null;
  limit: string | null;
  shape: Shape | null;
  source: "verdict" | "bottom line";
  line: number;
};

const SCOPE_SUFFIX = /\s+over the evaluated set\s*\.?$/i;

export function shapeOf(status: string): Shape {
  if (/^(?:accepted|cleared)\b/i.test(status)) return "filled";
  if (/^restricted\b/i.test(status)) return "half";
  if (/^(?:blocked|rejected|refused|not cleared|not accepted)\b/i.test(status)) return "slash";
  return "ring";
}

/** The verdict table: `Item | Value` carrying a `Status` row. More than one such table: none. */
function verdictRows(entry: OutputEntry) {
  const found = allTables(entry).filter(
    ({ table }) =>
      table.headers.length === 2 &&
      table.headers[0] === "Item" &&
      table.headers[1] === "Value" &&
      table.rows.some((row) => (row.cells[0] ?? "").trim() === "Status"),
  );
  const [only] = found;
  return found.length === 1 && only ? only.table : null;
}

const row = (table: Table, label: string) =>
  table.rows.find((candidate) => (candidate.cells[0] ?? "").trim() === label);

/** The clearance as the verdict states it; else the module's first bottom-line sentence; else null. */
export function clearance(entry: OutputEntry): Clearance | null {
  const verdict = verdictRows(entry);
  const status = verdict && row(verdict, "Status");
  const stated = status && said(status.cells[1]);
  if (verdict && status && stated?.kind === "text") {
    const word = stated.text.replace(SCOPE_SUFFIX, "").trim();
    const detail = (label: string) => {
      const value = said(row(verdict, label)?.cells[1]);
      return value.kind === "text" ? value.text : null;
    };
    const outside = detail("Not evaluated");
    return {
      status: word === "" ? stated.text : word,
      scope: SCOPE_SUFFIX.test(stated.text) ? "over the evaluated set" : null,
      notEvaluated: outside !== null && outside.toLowerCase() !== "none" ? outside : null,
      limit: detail("Scope"),
      shape: shapeOf(word),
      source: "verdict",
      line: status.line,
    };
  }
  const [first] = bottomLine(entry);
  if (first?.text) {
    const [sentence = first.text] = first.text.split(/(?<=[.!?])\s+/);
    return {
      status: sentence,
      scope: null,
      notEvaluated: null,
      limit: null,
      shape: null,
      source: "bottom line",
      line: first.line,
    };
  }
  return null;
}

// ---------------------------------------------------------------------------------------------
// Module integrity

export type ModuleIntegrity = {
  name: string;
  head: string | null;
  result: string;
  shape: Shape;
  line: number;
};

export function resultShape(result: string): Shape {
  if (/blocked|not evaluated/i.test(result)) return "slash";
  if (/with findings/i.test(result)) return "half";
  if (/no finding/i.test(result)) return "filled";
  return "ring";
}

export function moduleIntegrity(entry: OutputEntry): ModuleIntegrity[] | null {
  const found = locate(entry, ["Module", "Head status", "CP-5 findings", "Result"]);
  if (found.state !== "found" || found.table.rows.length === 0) return null;
  const { table } = found;
  return table.rows.map((item) => {
    const result = said(cellAt(table, item, "Result"));
    const head = said(cellAt(table, item, "Head status"));
    const written = result.kind === "text" ? result.text : saidText(result) || "Not stated";
    return {
      name: saidText(said(cellAt(table, item, "Module"))) || "A module",
      head: head.kind === "text" ? head.text : null,
      result: written,
      shape: result.kind === "text" ? resultShape(written) : "ring",
      line: item.line,
    };
  });
}
