import { containsReference, readerText, type OutputEntry } from "../../publishedReport";
import { bottomLine } from "../overview/read";
import { ticks } from "../../visuals/visualData";
import { difference, readCell, signOf } from "./kit/numbers";
import { allTables } from "./kit/tables";

/** The two range tables the launcher asks CP-1C for (cpos_launch_tables.py `_peer_range`). Note the em dash. */
export const PEER_HEADINGS = {
  percent: "Chart data: peer range — percent metrics",
  multiples: "Chart data: peer range — multiples",
} as const;
export type PeerKind = keyof typeof PEER_HEADINGS;

const REQUIRED = [
  "Metric",
  "Issuer",
  "Peer low",
  "Peer median",
  "Peer high",
  "Peer count",
  "Reporting unit",
] as const;

/** A text a working page may draw: no source reference, module codes as names; else a pointer. */
export const safe = (text: string) =>
  containsReference(text) ? "Detail is in Evidence." : readerText(text);

/** One stated value: a plain number, the handoff's own reason for not stating it, or words where a number belongs. */
export type Value =
  | { kind: "number"; text: string; value: number }
  | { kind: "gap"; text: string; reason: string }
  | { kind: "unreadable"; text: string; reason: string };

export function valueOf(cell: string): Value {
  const reading = readCell(cell);
  if (reading.kind === "number") return reading;
  if (reading.kind === "gap") return { ...reading, reason: safe(reading.reason) };
  return {
    kind: "unreadable",
    text: reading.text,
    reason: `The handoff states “${safe(reading.text)}” where a number was expected`,
  };
}

export type Count =
  { kind: "number"; value: number; text: string } | { kind: "gap"; reason: string; text: string };

function countOf(cell: string): Count {
  const text = cell.trim();
  if (/^\d+$/.test(text)) return { kind: "number", value: Number(text), text };
  const reading = readCell(cell);
  return {
    kind: "gap",
    text,
    reason:
      reading.kind === "gap"
        ? safe(reading.reason)
        : `The handoff states “${safe(text)}” where a whole number of peers was expected`,
  };
}

export type Side = "above" | "below" | "at";

/** What can be drawn for one metric. */
export type Drawing =
  /** The band is stated; the median and the issuer are drawn where stated. */
  | {
      kind: "strip";
      low: number;
      high: number;
      median: number | null;
      issuer: number | null;
      side: Side | null;
    }
  /** The band is not stated: only the labelled gap row. */
  | { kind: "gap" }
  /** The stated values contradict each other: no strip. */
  | { kind: "conflict"; message: string };

export type PeerRow = {
  metric: string;
  unit: string;
  line: number;
  issuer: Value;
  low: Value;
  median: Value;
  high: Value;
  count: Count;
  basis: string | null;
  drawing: Drawing;
  /** The reasons a value is missing, in the handoff's words, for the notes beneath the figure. */
  notes: string[];
};

const LABELS = {
  issuer: "Issuer",
  low: "Peer low",
  median: "Peer median",
  high: "Peer high",
} as const;

/** `a <= b`, exact over the stated texts. */
const atMost = (a: string, b: string) => (signOf(difference(b, a)) ?? -1) >= 0;

function drawingOf(row: Omit<PeerRow, "drawing" | "notes">): Drawing {
  const { low, median, high, issuer } = row;
  if (low.kind !== "number" || high.kind !== "number") return { kind: "gap" };
  if (!atMost(low.text, high.text))
    return {
      kind: "conflict",
      message: `Peer low ${low.text} is above peer high ${high.text}`,
    };
  if (
    median.kind === "number" &&
    !(atMost(low.text, median.text) && atMost(median.text, high.text))
  )
    return {
      kind: "conflict",
      message: `Peer median ${median.text} is outside the range ${low.text} to ${high.text}`,
    };
  const sign =
    issuer.kind === "number" && median.kind === "number"
      ? signOf(difference(issuer.text, median.text))
      : null;
  return {
    kind: "strip",
    low: low.value,
    high: high.value,
    median: median.kind === "number" ? median.value : null,
    issuer: issuer.kind === "number" ? issuer.value : null,
    side: sign === null ? null : sign > 0 ? "above" : sign < 0 ? "below" : "at",
  };
}

function notesOf(row: Omit<PeerRow, "drawing" | "notes">, drawing: Drawing) {
  const reasons = (["issuer", "low", "median", "high"] as const).flatMap((key) => {
    const value = row[key];
    return value.kind === "number"
      ? []
      : [`${row.metric}, ${LABELS[key].toLowerCase()}: ${value.reason}.`];
  });
  if (row.count.kind === "gap") reasons.push(`${row.metric}, peer count: ${row.count.reason}.`);
  if (drawing.kind === "conflict")
    reasons.push(
      `${row.metric}: the stated values conflict, so no range is drawn. ${drawing.message}.`,
    );
  return reasons;
}

export type PeerGroup = { unit: string; rows: PeerRow[] };
export type PeerTable = {
  kind: PeerKind;
  line: number;
  groups: PeerGroup[];
  rows: PeerRow[];
};

export type PeerRead = {
  /** The range tables that could be read; empty in the usual state (blocked at the peer-data gate). */
  tables: PeerTable[];
  /** Why a range table is not drawn, in words, one per table. */
  gaps: string[];
  /** A table with an "Outlier" column exists: its drawing is left to Evidence. */
  outliers: boolean;
};

function readRows(headers: string[], rows: { cells: string[]; line: number }[]) {
  const at = (name: string) => headers.indexOf(name);
  const basisAt = headers.indexOf("Basis and limitation");
  return rows.map(({ cells, line }): PeerRow => {
    const cell = (name: string) => cells[at(name)] ?? "";
    const base = {
      metric: safe(cell("Metric")),
      unit: cell("Reporting unit").trim(),
      line,
      issuer: valueOf(cell("Issuer")),
      low: valueOf(cell("Peer low")),
      median: valueOf(cell("Peer median")),
      high: valueOf(cell("Peer high")),
      count: countOf(cell("Peer count")),
      basis: basisAt < 0 || !(cells[basisAt] ?? "").trim() ? null : safe(cells[basisAt] ?? ""),
    };
    const drawing = drawingOf(base);
    return { ...base, drawing, notes: notesOf(base, drawing) };
  });
}

/** Rows sharing a stated unit share one axis; a row with no stated unit has an axis of its own. */
function groupByUnit(rows: PeerRow[]): PeerGroup[] {
  const groups = new Map<string, PeerGroup>();
  rows.forEach((row, at) => {
    const key = row.unit || `unit-not-stated-${String(at)}`;
    const group = groups.get(key) ?? { unit: row.unit, rows: [] };
    group.rows.push(row);
    groups.set(key, group);
  });
  return [...groups.values()];
}

/** The peer range tables of a CP-1C handoff, or why one is not drawn. */
export function readPeerBenchmark(entry: OutputEntry): PeerRead {
  const tables = allTables(entry);
  const read: PeerRead = {
    tables: [],
    gaps: [],
    outliers: tables.some(({ table }) => table.headers.some((header) => /outlier/i.test(header))),
  };
  const names = { percent: "percent metrics", multiples: "multiples" } as const;
  for (const kind of ["percent", "multiples"] as const) {
    const found = tables.filter(({ heading }) => heading === PEER_HEADINGS[kind]);
    const [one] = found;
    if (found.length > 1) {
      read.gaps.push(
        `The peer range for ${names[kind]} appears more than once in this handoff, so none is drawn.`,
      );
    } else if (!one) {
      read.gaps.push(`The peer range for ${names[kind]} is not in this handoff.`);
    } else {
      const missing = REQUIRED.filter((name) => !one.table.headers.includes(name));
      if (missing.length)
        read.gaps.push(
          `The peer range for ${names[kind]} lacks the column${missing.length > 1 ? "s" : ""} ${missing.join(", ")}.`,
        );
      else if (!one.table.rows.length)
        read.gaps.push(`The peer range for ${names[kind]} has no rows.`);
      else {
        const rows = readRows(one.table.headers, one.table.rows);
        read.tables.push({ kind, line: one.table.line, groups: groupByUnit(rows), rows });
      }
    }
  }
  return read;
}

/** The module's own first Bottom-line sentence when it can be drawn; else the one fixed statement. */
export function peerGapSentence(entry: OutputEntry) {
  const text = bottomLine(entry)[0]?.text;
  const first = text?.split(/(?<=[.!?])\s+/)[0]?.trim();
  return first ? first : "Peer data was not supplied for this run.";
}

export const AXIS = { left: 88, right: 552 } as const;

/** One shared axis from zero for the rows of a unit; only rows with a drawable strip place values on it. */
export function groupScale(group: PeerGroup) {
  const values = group.rows.flatMap(({ drawing }) =>
    drawing.kind === "strip" ? [drawing.low, drawing.high, drawing.median, drawing.issuer] : [],
  );
  const scale = ticks(values);
  const lo = scale[0]?.value ?? 0;
  const hi = scale.at(-1)?.value ?? 1;
  const x = (value: number) =>
    AXIS.left + ((value - lo) / (hi - lo || 1)) * (AXIS.right - AXIS.left);
  return { x, ticks: scale.map((tick) => ({ label: tick.label, x: x(tick.value) })) };
}

/** A figure with its unit as the module states it: `%` and `x` attach, any other unit follows. */
export function withUnit(text: string, unit: string) {
  const tidy = text.replace(/^-/, "−");
  if (!unit) return tidy;
  return /^[%x]$/i.test(unit) ? `${tidy}${unit}` : `${tidy} ${safe(unit)}`;
}

export const SIDE_WORDS: Record<Side, string> = {
  above: "above the peer median",
  below: "below the peer median",
  at: "at the peer median",
};
