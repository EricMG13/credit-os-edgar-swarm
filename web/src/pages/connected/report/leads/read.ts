import {
  blocked,
  containsReference,
  evidencePath,
  methodNote,
  readParagraph,
  readerText,
  type OutputEntry,
  type Table,
} from "../../publishedReport";
import { eventRecords } from "../../visuals/EventLane";
import { items, publishedTables, record, word, type SourceTable } from "../../visuals/visualData";
import type { LeadProps } from "./types";

type Descriptor = Record<string, unknown>;

/** The trace address of one line of the lead's own handoff. */
export const leadHref =
  ({ run, entry }: Pick<LeadProps, "run" | "entry">) =>
  (line?: number) =>
    evidencePath(run.folder, entry, line);

const escaped = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * A register the method names by id: the one table under a heading that starts with the id ("T2F.4 —
 * Floating exposure", "T2F.4 - Floating-rate exposure", "#### t2f.4 — hedge register") whose header
 * row holds every named header, in any letter case. Its cells are model-written text.
 */
export function registerTable(entry: OutputEntry, id: string, headers: readonly string[]) {
  const heading = new RegExp(`^[*\`]*${escaped(id)}(?![\\w.])`, "i");
  const wanted = headers.map((name) => name.toLowerCase());
  const matches = entry.sections
    .filter((section) => heading.test(section.heading.trim()))
    .flatMap(({ blocks }) => blocks)
    .filter((block): block is Table => block.type === "table")
    .filter((table) => {
      const own = table.headers.map((name) => name.trim().toLowerCase());
      return wanted.every((name) => own.includes(name));
    });
  return matches.length === 1 ? matches[0] : undefined;
}

/** A column's index by its header, in any letter case; -1 when the table has none or two. */
export function columnOf(table: Pick<Table, "headers">, name: string) {
  const at = table.headers.flatMap((header, index) =>
    header.trim().toLowerCase() === name.toLowerCase() ? [index] : [],
  );
  return at.length === 1 ? (at[0] ?? -1) : -1;
}

/** A cell for a working page: as written, with module codes as names; one naming a source stays in Evidence. */
export function readerCell(text: string) {
  const plain = text.replaceAll("**", "").replaceAll("`", "").trim();
  return containsReference(plain) ? "In Evidence" : readerText(plain);
}

export type Paragraph = { line: number; text: string | null };

/** The paragraphs the module wrote under a heading; `text` is null for one that names a source. */
export function sectionParagraphs(entry: OutputEntry, heading: string): Paragraph[] {
  return entry.sections
    .filter((section) => section.heading === heading)
    .flatMap(({ blocks }) => blocks)
    .flatMap((block) => (block.type === "text" && !methodNote(block.text) ? [block] : []))
    .map((block) => {
      const body = readParagraph(block.text).body.replaceAll("**", "").replaceAll("`", "");
      return { line: block.line, text: containsReference(body) ? null : readerText(body) };
    })
    .filter((paragraph) => paragraph.text !== "");
}

const NOT_ASSESSABLE = /^Not assessable:\s*/;

/**
 * Why a blocked module could not run, in its own words: the first sentence of its bottom line after
 * "Not assessable:". Null when that sentence names a source; the reason is then in Evidence.
 */
export function blockedReason(entry: OutputEntry) {
  if (!blocked(entry)) return null;
  const first = entry.sections
    .find((section) => section.heading === "Bottom line")
    ?.blocks.find((block) => block.type === "text");
  const body = first?.type === "text" ? readParagraph(first.text).body : "";
  const sentence = /^(.+?[.!?])(?:\s|$)/.exec(body.replace(NOT_ASSESSABLE, ""))?.[1] ?? "";
  const reason = sentence.replaceAll("**", "").replaceAll("`", "").trim();
  if (!reason || containsReference(reason)) return null;
  const text = readerText(reason);
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export type Chart =
  | { state: "ready"; descriptor: Descriptor; table: SourceTable }
  | { state: "gap"; reason: string }
  | { state: "absent" };

/** One of the module's published chart tables, the reason the module gives for not filling it, or neither. */
export function chartOf(entry: OutputEntry, title: string): Chart {
  const descriptor = items(entry.output.charts)
    .map(record)
    .find((chart) => chart.title === title);
  const table =
    descriptor && typeof descriptor.table === "number"
      ? publishedTables(entry.sections).get(descriptor.table)
      : undefined;
  if (descriptor && table) return { state: "ready", descriptor, table };
  const gap = items(entry.output.chartGaps)
    .map(record)
    .find((chart) => chart.title === title);
  const reason = word(gap?.gap).trim();
  if (gap && reason) return { state: "gap", reason: readerCell(capital(reason)) };
  return { state: "absent" };
}

/** Every published chart whose title starts with `prefix`, in the handoff's order. */
export function chartsStartingWith(entry: OutputEntry, prefix: string) {
  return items(entry.output.charts)
    .map(record)
    .flatMap((chart) => {
      const title = word(chart.title);
      return title.startsWith(prefix) ? [{ title, chart: chartOf(entry, title) }] : [];
    });
}

const capital = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export type Edge = { from: string; relationship: string; type: string; to: string; line: number };
export type MapRead =
  | { state: "ready"; edges: Edge[]; line: number }
  | { state: "gap"; reason: string; line?: number }
  | { state: "absent" };

const MAP = ["From", "Relationship", "Edge type", "To", "Evidence"];
const stated = (text: string) => text.trim() !== "" && !text.startsWith("Not supplied:");

/** A published `Map: <name>` edge table, every row an edge; or the reason it has none. */
export function mapOf(entry: OutputEntry, name: string): MapRead {
  const descriptor = items(entry.output.maps)
    .map(record)
    .find((map) => map.name === name);
  if (!descriptor) return { state: "absent" };
  const at = typeof descriptor.table === "number" ? descriptor.table : undefined;
  const reason = word(descriptor.gap).trim();
  if (reason) return { state: "gap", reason: readerCell(capital(reason)), line: at };
  const table = at === undefined ? undefined : publishedTables(entry.sections).get(at);
  if (!table || table.headers.join("\0") !== MAP.join("\0")) return { state: "absent" };
  const edges = table.rows.flatMap(([from = "", relationship = "", type = "", to = ""], index) =>
    [from, relationship, type, to].every(stated)
      ? [{ from, relationship, type, to, line: table.rowLines?.[index] ?? table.line }]
      : [],
  );
  if (edges.length !== table.rows.length || !edges.length) {
    const why = table.rows.flatMap((row) =>
      row.slice(0, 4).flatMap((cell) => /^Not supplied:\s*(\S.*)$/.exec(cell)?.[1] ?? []),
    )[0];
    return why ? { state: "gap", reason: readerCell(capital(why)), line: at } : { state: "absent" };
  }
  return { state: "ready", edges, line: table.line };
}

export type Dated = ReturnType<typeof eventRecords>[number] & { line: number };

/** The module's dated events of one lane, earliest first; precision as the module states it. */
export function eventsOf(entry: OutputEntry, lane: string) {
  const descriptor = items(entry.output.events)
    .map(record)
    .find((events) => events.lane === lane);
  if (!descriptor || typeof descriptor.table !== "number") return null;
  const table = publishedTables(entry.sections).get(descriptor.table);
  if (!table) return null;
  return eventRecords(table)
    .map((event) => ({ ...event, line: table.rowLines?.[event.index] ?? table.line }))
    .sort((a, b) => a.from - b.from || a.index - b.index);
}

const MONEY_LEAD = /^([+−-]?)([A-Z]{3}) ?(\d{1,3}(?:,\d{3})*(?:\.\d+)?|\d+(?:\.\d+)?) ?million\b/;

/**
 * The amount a cell states first, in millions of `currency`, when it opens "[+]USD 57.89 million…".
 * Null for any other form, another currency or a cell that states two amounts before a word.
 */
export function leadingMillions(text: string, currency?: string) {
  const match = MONEY_LEAD.exec(text.trim());
  if (!match || (currency && match[2] !== currency)) return null;
  const value = Number((match[3] ?? "").replaceAll(",", ""));
  if (!Number.isFinite(value)) return null;
  return { currency: match[2] ?? "", value: match[1] === "-" || match[1] === "−" ? -value : value };
}
