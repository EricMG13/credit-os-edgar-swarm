import { containsReference, readerText, type OutputEntry } from "../../publishedReport";
import { allTables, columnOf, tableWith } from "./kit/tables";

export type ReadinessState = "ready" | "limited" | "conditional" | "blocked";

export const STATES: readonly ReadinessState[] = ["ready", "limited", "conditional", "blocked"];

/** The word each state is drawn with: the library's own readiness vocabulary. */
export const STATE_WORD: Record<ReadinessState, string> = {
  ready: "Ready",
  limited: "Ready with limitations",
  conditional: "Conditional",
  blocked: "Blocked",
};

/** The contract's four values, and the library's own "Not ready" for a blocked area. */
const NORMALISED: Record<string, ReadinessState> = {
  READY: "ready",
  READY_WITH_LIMITATIONS: "limited",
  READY_WITH_LIMITATION: "limited",
  CONDITIONAL: "conditional",
  BLOCKED: "blocked",
  NOT_READY: "blocked",
};

/** A readiness cell as one of the four states, or null for any other words. */
export function readinessState(cell: string | undefined): ReadinessState | null {
  const key = (cell ?? "")
    .replaceAll("*", "")
    .trim()
    .toUpperCase()
    .replace(/[\s-]+/g, "_");
  return Object.hasOwn(NORMALISED, key) ? (NORMALISED[key] ?? null) : null;
}

const IN_EVIDENCE = "Detail is in Evidence.";
const REASON_IN_EVIDENCE = "Reason is in Evidence.";
const NO_LIMITATION = "No limitation stated.";

export type ReadinessRow = {
  area: string;
  state: ReadinessState;
  /** The key limitation in words; the Evidence pointer where it names a source. */
  reason: string;
  line: number;
};

export type SourceReadiness =
  | { kind: "absent" }
  | { kind: "unrecognised"; line: number }
  | {
      kind: "ready";
      line: number;
      rows: ReadinessRow[];
      counts: Record<ReadinessState, number>;
      /** Whether a table of the entry could carry the key evidence located or the conflicts. */
      hasEvidenceTable: boolean;
    };

const readable = (text: string, fallback: string) =>
  containsReference(text) ? fallback : readerText(text).trim() || fallback;

/** A header that could hold the key evidence located or the conflicts and duplicates. */
const evidenceHeader = (header: string) => /evidence|conflict|duplicate/i.test(header);

/**
 * The handoff's two shapes of readiness table. `Area | Readiness | Key limitation` is the contract's;
 * `Consumer | Readiness | … | Bounded limitations carried | Command` is what a real run wrote
 * (TransDigm, retained reviews). The earlier real run named its consumer column `Canonical consumer`
 * and its free-text column `Evidence demand and available support`.
 */
const SHAPES = [
  { area: "Area", reason: "Key limitation" },
  { area: "Consumer", reason: "Bounded limitations carried" },
  { area: "Canonical consumer", reason: "Evidence demand and available support" },
] as const;

function readinessTable(entry: OutputEntry) {
  for (const shape of SHAPES) {
    const table = tableWith(entry, [shape.area, "Readiness", shape.reason]);
    if (table) return { table, ...shape };
  }
  return null;
}

/** The Command column says DO NOT RUN: pipeline words, never drawn, but the row is not plainly ready. */
const heldBack = (command: string | undefined) => /\bDO NOT RUN\b/i.test(command ?? "");
const HELD_BACK = "Held back by the source review.";

/** The readiness table as rows, or why there is nothing to draw. */
export function sourceReadiness(entry: OutputEntry): SourceReadiness {
  const found = readinessTable(entry);
  if (!found || found.table.rows.length === 0) return { kind: "absent" };
  const { table } = found;
  const [area, readiness, limitation, command] = [
    found.area,
    "Readiness",
    found.reason,
    "Command",
  ].map((name) => columnOf(table, name));
  const states = table.rows.map((row) => readinessState(row.cells[readiness ?? -1]));
  if (states.some((state) => state === null)) return { kind: "unrecognised", line: table.line };
  const rows = table.rows.map((row, at): ReadinessRow => {
    const held = heldBack(row.cells[command ?? -1]);
    const stated = states[at] ?? "blocked";
    const state = held && (stated === "ready" || stated === "limited") ? "conditional" : stated;
    const text = row.cells[limitation ?? -1] ?? "";
    const reason = containsReference(text)
      ? REASON_IN_EVIDENCE
      : readable(text, state === stated ? NO_LIMITATION : "");
    return {
      area: readable(row.cells[area ?? -1] ?? "", IN_EVIDENCE),
      state,
      reason: state === stated ? reason : `${HELD_BACK} ${reason}`.trim(),
      line: row.line,
    };
  });
  const counts = { ready: 0, limited: 0, conditional: 0, blocked: 0 };
  for (const row of rows) counts[row.state] += 1;
  const hasEvidenceTable = allTables(entry).some(
    ({ table: other }) => other !== table && other.headers.some(evidenceHeader),
  );
  return { kind: "ready", line: table.line, rows, counts, hasEvidenceTable };
}
