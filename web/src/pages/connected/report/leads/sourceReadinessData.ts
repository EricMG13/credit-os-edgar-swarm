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

export const IN_EVIDENCE = "Detail is in Evidence.";
export const REASON_IN_EVIDENCE = "Reason is in Evidence.";
export const NO_LIMITATION = "No limitation stated.";

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

/** The `Area | Readiness | Key limitation` table as rows, or why there is nothing to draw. */
export function sourceReadiness(entry: OutputEntry): SourceReadiness {
  const table = tableWith(entry, ["Area", "Readiness", "Key limitation"]);
  if (!table || table.rows.length === 0) return { kind: "absent" };
  const [area, readiness, limitation] = ["Area", "Readiness", "Key limitation"].map((name) =>
    columnOf(table, name),
  );
  const states = table.rows.map((row) => readinessState(row.cells[readiness ?? -1]));
  if (states.some((state) => state === null)) return { kind: "unrecognised", line: table.line };
  const rows = table.rows.map((row, at) => ({
    area: readable(row.cells[area ?? -1] ?? "", IN_EVIDENCE),
    state: states[at] ?? "blocked",
    reason: containsReference(row.cells[limitation ?? -1] ?? "")
      ? REASON_IN_EVIDENCE
      : readable(row.cells[limitation ?? -1] ?? "", NO_LIMITATION),
    line: row.line,
  }));
  const counts = { ready: 0, limited: 0, conditional: 0, blocked: 0 };
  for (const row of rows) counts[row.state] += 1;
  const hasEvidenceTable = allTables(entry).some(
    ({ table: other }) => other !== table && other.headers.some(evidenceHeader),
  );
  return { kind: "ready", line: table.line, rows, counts, hasEvidenceTable };
}
