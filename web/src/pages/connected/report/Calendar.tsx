import { ChartWithTable } from "@/components/chart/ChartWithTable";
import { TRACE_HOST } from "@/pages/library/parts/TraceControl";
import { moduleName } from "../api";
import { card, heading } from "../layout";
import { blocked, containsReference, evidencePath, type OutputEntry } from "../publishedReport";
import { EVENT_HEADERS, eventLane, eventRecords } from "../visuals/EventLane";
import { publishedTables, word } from "../visuals/visualData";
import { PublishedSource } from "./PublishedTrace";

type EventLocation = { owner: string; href: string };
type CalendarRow = EventLocation & { cells: string[]; from: number; to: number };
type CalendarGap = EventLocation & { title: string; reason: string };

function eventDisplay(cells: string[]) {
  return cells.map((text, index) =>
    [2, 3, 6].includes(index) && containsReference(text) ? "See Evidence" : text,
  );
}

export function buildCalendar(entries: OutputEntry[], folder: string) {
  const rows: CalendarRow[] = [];
  const gaps: CalendarGap[] = [];
  entries.forEach((entry, index) => {
    const { output, sections, selected } = entry;
    if (!selected || !output.events?.length || output.parseError) return;
    const owner = [moduleName(output.module).replace(/ \(CP-[^)]+\)$/, ""), output.state?.declared]
      .filter(Boolean)
      .join(" · ");
    const assessable = output.state?.established !== false && !blocked(entry);
    const tables = publishedTables(sections);
    const blocks = sections.flatMap((section) => section.blocks);
    const seen = new Set<number>();
    for (const descriptor of output.events) {
      const title = word(descriptor.lane);
      const table = tables.get(descriptor.table);
      if (!title || !table || table.line <= 0 || seen.has(table.line)) continue;
      const block = blocks.find((item) => item.type === "table" && item.line === table.line);
      if (block?.type !== "table") continue;
      seen.add(table.line);
      const href = evidencePath(folder, String(index), table.line);
      const gap = word(descriptor.gap);
      if (gap) {
        gaps.push({ owner, href, title, reason: gap });
        continue;
      }
      if (!assessable) continue;
      const events = eventRecords(table);
      if (events.length !== block.rows.length) {
        gaps.push({
          owner,
          href,
          title,
          reason: "The recorded dates or precision could not be plotted.",
        });
        continue;
      }
      const rowLines = block.rows.map(({ line }) => line);
      if (
        rowLines.some((line) => !Number.isSafeInteger(line) || line <= table.line) ||
        new Set(rowLines).size !== rowLines.length
      ) {
        gaps.push({ owner, href, title, reason: "The handoff does not identify each event row." });
        continue;
      }
      for (const { index: at, from, to } of events) {
        const row = block.rows[at];
        if (!row) continue;
        rows.push({
          owner,
          href: evidencePath(folder, String(index), row.line),
          cells: eventDisplay(row.cells),
          from,
          to,
        });
      }
    }
  });
  rows.sort((a, b) => a.from - b.from || a.to - b.to);
  return { rows, gaps };
}

function EventSource({ href, name }: { href: string; name: string }) {
  return (
    <PublishedSource href={href} name={name} linkLabel={`Source for ${name}`}>
      View source
    </PublishedSource>
  );
}

function CalendarFigure({ rows }: { rows: CalendarRow[] }) {
  const eventName = (cells: string[]) => cells[3] ?? "event";
  const chart = eventLane(
    {
      line: 0,
      headers: EVENT_HEADERS,
      rows: rows.map(({ cells }) => cells),
      evidenceInDrawer: true,
    },
    (index) => {
      const row = rows[index];
      return row ? (
        <p className={`${TRACE_HOST} flex flex-wrap items-center gap-x-2 text-text-secondary`}>
          <span>{row.owner}</span>
          <EventSource href={row.href} name={`${eventName(row.cells)} · ${row.owner}`} />
        </p>
      ) : null;
    },
  );
  return (
    <section className={`min-w-0 ${card}`}>
      <ChartWithTable
        title="Published events"
        as="h3"
        chart={chart}
        table={{
          head: [
            "Event",
            "Event date",
            "Date precision",
            "Published",
            "Status",
            "Credit relevance",
            "Module",
          ],
          rows: rows.map(({ cells, owner, href }) => ({
            label: eventName(cells),
            cells: [cells[0], cells[1], cells[2], cells[4], cells[6], owner].map(
              (value) => value || null,
            ),
            end: <EventSource href={href} name={`${eventName(cells)} · ${owner}`} />,
          })),
          endHeading: "Evidence",
        }}
      />
    </section>
  );
}

export function Calendar({ calendar }: { calendar: ReturnType<typeof buildCalendar> }) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-h2">Issuer calendar</h2>
        <a href="#overview" className="text-action underline">
          Back to Overview
        </a>
      </div>
      {calendar.rows.length ? (
        <CalendarFigure rows={calendar.rows} />
      ) : (
        <p className={card}>No dated events were published for this run.</p>
      )}
      {calendar.gaps.map(({ owner, href, title, reason }) => (
        <section className={`${TRACE_HOST} ${card}`} key={href}>
          <h3 className={heading}>{title}</h3>
          <p>{owner}</p>
          <p role="note">
            {containsReference(reason) ? "The handoff records a date gap in Evidence." : reason}
          </p>
          <EventSource href={href} name={title} />
        </section>
      ))}
    </>
  );
}
