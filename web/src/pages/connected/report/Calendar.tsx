import { Table as KitTable } from "@/components/application/table/table";
import { Button } from "@/components/base/buttons/button";
import { ArrowRight } from "@untitledui/icons";
import { useId } from "react";
import { Missing } from "@/components/gap/Missing";
import { TRACE_HOST } from "@/pages/library/parts/TraceControl";
import { moduleName } from "../api";
import {
  type Block,
  blocked,
  containsReference,
  evidencePath,
  type OutputEntry,
  readerText,
  type Table,
} from "../publishedReport";
import { EventAxis } from "../visuals/EventAxis";
import { EVENT_HEADERS, eventRecords } from "../visuals/EventLane";
import { publishedTables, word } from "../visuals/visualData";
import { Bento, Tile } from "./overview/Tile";
import { PublishedSource } from "./PublishedTrace";

type EventLocation = { owner: string; href: string };
type CalendarRow = EventLocation & { cells: string[]; from: number; to: number };
type UnplacedEvent = { href: string; cells: string[]; unreadable?: boolean };
type CalendarGap = EventLocation & { title: string; reason: string; unplaced?: UnplacedEvent[] };

const UNPLACED_REASON = "The recorded event name, status, date or precision could not be plotted.";
const UNIDENTIFIED_REASON = "The event table does not identify each event row.";
const UNREADABLE_REASON = "An event row could not be read.";
const UNREADABLE_ROW = "This row could not be read";

/** A reference in a status keeps the lane before it, so the lane still reads (`isHistoricalStatus`). */
function eventDisplay(cells: string[]) {
  return cells.map((text, index) => {
    const relevant =
      index === 6
        ? ((
            {
              Wall: "Maturity wall",
              Cost: "Cost-related event",
              Rating: "Rating-related event",
            } as Record<string, string>
          )[text] ?? text)
        : text;
    if (!containsReference(relevant)) return relevant;
    if (index === 4) {
      const lane = /^(Historical|Scheduled|Scenario|User reminder)(?: — |$)/.exec(text)?.[1];
      return lane ? `${lane} — See Evidence` : "See Evidence";
    }
    if (index === 3) {
      const name = text
        .replace(
          /(?:\s+(?:per|from|in|see)\s+)?[\w.-]+\.(?:pdf|docx?|xlsx?|xlsm|csv|tsv|txt|md|jsonl?|html?|zip)\b(?:\s*,?\s*(?:p\.|page)\s*\d+(?:[-–]\d+)?)?/gi,
          "",
        )
        .trim()
        .replace(/[\s,;:(]+$/, "");
      return name && !containsReference(name) ? name : "See Evidence";
    }
    return "See Evidence";
  });
}

function readableCells(cells: unknown): cells is string[] {
  return (
    Array.isArray(cells) &&
    cells.length === EVENT_HEADERS.length &&
    cells.every((cell) => typeof cell === "string")
  );
}

/** Whether every row has its own Evidence line, after the table's and shared with no other row. */
function identifiesEachRow(block: Table) {
  const lines = block.rows.map(({ line }) => line);
  return (
    lines.every((line) => Number.isSafeInteger(line) && line > block.line) &&
    new Set(lines).size === lines.length
  );
}

/** As at 1778835: a table whose rows are not each identified is withheld as a whole. */
function unidentifiedReason(block: Table, placed: number) {
  if (!block.rows.every(({ cells }) => readableCells(cells))) {
    return "The event table could not be read.";
  }
  return placed === block.rows.length ? UNIDENTIFIED_REASON : UNPLACED_REASON;
}

function placeEvents(block: Table, entry: OutputEntry, folder: string, owner: string) {
  const readable = block.rows.flatMap(({ cells }, index) => (readableCells(cells) ? [index] : []));
  const events = eventRecords({
    line: block.line,
    headers: EVENT_HEADERS,
    rows: readable.map((index) => block.rows[index]?.cells ?? []),
  });
  if (!identifiesEachRow(block)) {
    return { rows: [], reason: unidentifiedReason(block, events.length), unplaced: [] };
  }
  const href = (index: number) =>
    evidencePath(folder, entry, block.rows[index]?.line ?? block.line);
  const placed = new Set(events.map(({ index }) => readable[index]));
  const rows: CalendarRow[] = events.flatMap(({ index, from, to }) => {
    const at = readable[index] ?? -1;
    const row = block.rows[at];
    return row ? [{ owner, href: href(at), cells: eventDisplay(row.cells), from, to }] : [];
  });
  const unplaced: UnplacedEvent[] = block.rows.flatMap(({ cells }, index) => {
    if (placed.has(index)) return [];
    return readableCells(cells)
      ? [
          {
            href: href(index),
            cells: eventDisplay(cells),
          },
        ]
      : [{ href: href(index), cells: [], unreadable: true }];
  });
  const reason = [
    unplaced.some((event) => !event.unreadable) ? UNPLACED_REASON : "",
    unplaced.some((event) => event.unreadable) ? UNREADABLE_REASON : "",
  ]
    .filter(Boolean)
    .join(" ");
  return { rows, reason, unplaced };
}

function tableProblem(block: Table, blocks: Block[], readable: ReturnType<typeof publishedTables>) {
  if (blocks.filter((item) => item.type === "table" && item.line === block.line).length > 1) {
    return "The event table could not be read.";
  }
  if (block.headers.join("\0") === EVENT_HEADERS.join("\0")) return null;
  return readable.has(block.line) ? UNPLACED_REASON : "The event table could not be read.";
}

export function buildCalendar(entries: OutputEntry[], folder: string) {
  const calendars = entries.map((entry) => entryCalendar(entry, folder));
  const rows = calendars.flatMap(({ rows }) => rows);
  const gaps = calendars.flatMap(({ gaps }) => gaps);
  rows.sort((a, b) => a.from - b.from || a.to - b.to);
  return { rows, gaps };
}

function entryCalendar(entry: OutputEntry, folder: string) {
  const rows: CalendarRow[] = [];
  const gaps: CalendarGap[] = [];
  const { output, sections, selected } = entry;
  if (!selected || !output.events?.length || output.parseError) return { rows, gaps };
  const owner = [moduleName(output.module), output.state?.declared].filter(Boolean).join(" · ");
  const assessable = output.state?.established !== false && !blocked(entry);
  const tables = publishedTables(sections);
  const blocks = sections.flatMap((section) => section.blocks);
  const seen = new Set<number>();
  for (const descriptor of output.events) {
    addCalendarEvent(
      descriptor,
      entry,
      folder,
      owner,
      assessable,
      tables,
      blocks,
      seen,
      rows,
      gaps,
    );
  }
  return { rows, gaps };
}

function addCalendarEvent(
  descriptor: NonNullable<OutputEntry["output"]["events"]>[number],
  entry: OutputEntry,
  folder: string,
  owner: string,
  assessable: boolean,
  tables: ReturnType<typeof publishedTables>,
  blocks: Block[],
  seen: Set<number>,
  rows: CalendarRow[],
  gaps: CalendarGap[],
) {
  const title = word(descriptor.lane);
  if (!title || descriptor.table <= 0 || seen.has(descriptor.table)) return;
  const block = blocks.find((item) => item.type === "table" && item.line === descriptor.table);
  if (block?.type !== "table" || !block.rows.length) return;
  seen.add(block.line);
  const href = evidencePath(folder, entry, block.line);
  const gap = word(descriptor.gap);
  if (gap) {
    gaps.push({ owner, href, title, reason: gap });
    return;
  }
  if (!assessable) return;
  addPlacedEvents(block, entry, folder, owner, href, title, tables, blocks, rows, gaps);
}

function addPlacedEvents(
  block: Table,
  entry: OutputEntry,
  folder: string,
  owner: string,
  href: string,
  title: string,
  tables: ReturnType<typeof publishedTables>,
  blocks: Block[],
  rows: CalendarRow[],
  gaps: CalendarGap[],
) {
  const problem = tableProblem(block, blocks, tables);
  if (problem) {
    gaps.push({ owner, href, title, reason: problem });
    return;
  }
  const placed = placeEvents(block, entry, folder, owner);
  rows.push(...placed.rows);
  if (placed.reason) {
    const unplaced = placed.unplaced.length ? placed.unplaced : undefined;
    gaps.push({ owner, href, title, reason: placed.reason, unplaced });
  }
}

/** The as-of date as a timestamp, or null when it is not a real YYYY-MM-DD date. */
function asOfTimestamp(asOf: string | null | undefined) {
  if (!asOf || !/^\d{4}-\d{2}-\d{2}$/u.test(asOf)) return null;
  const timestamp = Date.parse(`${asOf}T00:00:00Z`);
  if (!Number.isFinite(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== asOf) {
    return null;
  }
  return timestamp;
}

export function upcomingCalendarRows(rows: CalendarRow[], asOf: string | null) {
  const timestamp = asOfTimestamp(asOf);
  if (timestamp === null) return null;
  return rows
    .filter(({ cells, to }) => !isHistoricalStatus(cells[4] ?? "") && to >= timestamp)
    .map((row) => ({
      ...row,
      timingWithinRecordedPeriod: row.from < timestamp && timestamp <= row.to,
    }));
}

function isHistoricalStatus(status: string) {
  return status === "Historical" || status.startsWith("Historical — ");
}

function EventSource({ href, name }: { href: string; name: string }) {
  return (
    <PublishedSource href={href} name={name} linkLabel={`Source for ${name}`}>
      View source
    </PublishedSource>
  );
}

const TABLE_HEAD = [
  "Event",
  "Event date",
  "Date precision",
  "Published",
  "Status",
  "Credit relevance",
  "Module",
  "Evidence trace",
];

function focusRow(id: string) {
  const row = document.getElementById(id);
  if (!row) return;
  row.focus();
  if (typeof row.scrollIntoView === "function") row.scrollIntoView({ block: "nearest" });
}

function EventsTable({ rows, rowId }: { rows: CalendarRow[]; rowId: (index: number) => string }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full border-collapse text-body">
        <caption className="sr-only">Published events</caption>
        <thead>
          <tr className="border-b-2 border-border-hairline">
            {TABLE_HEAD.map((heading) => (
              <th
                key={heading}
                scope="col"
                className="px-3 py-2 text-left font-medium whitespace-nowrap text-text-tertiary"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ cells, owner, href }, index) => (
            <tr
              key={index}
              id={rowId(index)}
              tabIndex={-1}
              className="group/trace relative border-b border-border-hairline outline-hidden focus:ring-2 focus:ring-focus focus:ring-inset"
            >
              <th scope="row" className="px-3 py-2 text-left font-medium">
                {eventName(cells)}
              </th>
              {[cells[0], cells[1], cells[2], cells[4], cells[6], owner].map((value, at) => (
                <td key={at} className="px-3 py-2 text-left align-top">
                  {value || <Missing />}
                </td>
              ))}
              <td className="px-3 py-2 align-top">
                <EventSource href={href} name={`${eventName(cells)} · ${owner}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function eventName(cells: string[]) {
  return cells[3] ?? "event";
}

function CalendarFigure({ rows, asOf }: { rows: CalendarRow[]; asOf: string | null | undefined }) {
  const prefix = useId();
  const rowId = (index: number) => `${prefix}-row-${String(index)}`;
  const events = eventRecords({
    line: 0,
    headers: EVENT_HEADERS,
    rows: rows.map(({ cells }) => cells),
  });
  const time = asOfTimestamp(asOf);
  return (
    <Tile span={12} label="Dated events" title="Published events">
      <figure aria-label="Published events" className="grid min-w-0 gap-4">
        {events.length ? (
          <EventAxis
            events={events}
            asOf={time === null || !asOf ? null : { time, text: asOf }}
            rowId={rowId}
            onSelect={(index) => {
              focusRow(rowId(index));
            }}
          />
        ) : null}
        <EventsTable rows={rows} rowId={rowId} />
      </figure>
    </Tile>
  );
}

function UnplacedTable({ owner, events }: { owner: string; events: UnplacedEvent[] }) {
  const shown = (text: string | undefined) => text || "Not recorded";
  return (
    <KitTable aria-label="Events not placed on the calendar" size="sm">
      <KitTable.Header>
        <KitTable.Head id="event" isRowHeader label="Event" />
        <KitTable.Head id="date" label="Recorded date" />
        <KitTable.Head id="precision" label="Date precision" />
        <KitTable.Head id="published" label="Published" />
        <KitTable.Head id="status" label="Status" />
        <KitTable.Head id="relevance" label="Credit relevance" />
        <KitTable.Head id="evidence" label="Evidence" />
      </KitTable.Header>
      <KitTable.Body items={events.map((event, index) => ({ ...event, id: String(index) }))}>
        {({ id, href, cells, unreadable }) => {
          const name = unreadable ? UNREADABLE_ROW : shown(cells[3]);
          const values = unreadable
            ? ["", "", "", "", ""]
            : [0, 1, 2, 4, 6].map((at) => shown(cells[at]));
          return (
            <KitTable.Row id={id}>
              <KitTable.Cell>{name}</KitTable.Cell>
              {values.map((value, at) => (
                <KitTable.Cell
                  key={at}
                  className={at === 0 || at === 2 ? "tabular-nums" : undefined}
                >
                  {value}
                </KitTable.Cell>
              ))}
              <KitTable.Cell>
                <EventSource href={href} name={`${name} · ${owner}`} />
              </KitTable.Cell>
            </KitTable.Row>
          );
        }}
      </KitTable.Body>
    </KitTable>
  );
}

export function Calendar({
  calendar,
  asOf,
}: {
  calendar: ReturnType<typeof buildCalendar>;
  asOf?: string | null;
}) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-h2">Issuer calendar</h2>
        <Button href="#overview" color="link-gray" size="sm" iconTrailing={ArrowRight}>
          Back to Overview
        </Button>
      </div>
      <p className="reading-copy text-body text-text-secondary">
        Events keep their recorded status (Historical or Scheduled) regardless of the run’s as-of
        date. Dates can be precise to the day, month, quarter or year.
      </p>
      <Bento>
        {calendar.rows.length ? (
          <CalendarFigure rows={calendar.rows} asOf={asOf} />
        ) : (
          <Tile span={12} label="Dated events" tone="gap">
            <p>
              {calendar.gaps.some(({ unplaced }) => unplaced?.some((event) => !event.unreadable))
                ? "No published events could be plotted. See the events and recorded gaps below."
                : calendar.gaps.length
                  ? "No events could be plotted. See the recorded gaps below."
                  : "No dated events were published for this run."}
            </p>
          </Tile>
        )}
        {calendar.gaps.map(({ owner, href, title, reason, unplaced }) => (
          <Tile key={href} span={12} label={title} title={title} tone="gap" className={TRACE_HOST}>
            <p>{owner}</p>
            <p role="note">
              {containsReference(reason)
                ? "An event gap is recorded in Evidence."
                : readerText(reason)}
            </p>
            {unplaced ? (
              <UnplacedTable owner={owner} events={unplaced} />
            ) : (
              <EventSource href={href} name={title} />
            )}
          </Tile>
        ))}
      </Bento>
    </>
  );
}
