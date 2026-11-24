import { ArrowRight, Calendar as CalendarIcon } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import type { PublishedRun, Snapshot } from "../../publishedReport";
import type { ReportView } from "../../reportView";
import { buildCalendar, upcomingCalendarRows } from "../Calendar";
import { asOfDate } from "../../runFigures";
import { cx } from "@/utils/cx";
import { SourceLink } from "./sourceLink";
import { GapNote, Tile } from "./Tile";

type RowProps = { snapshot: Snapshot; run: PublishedRun; view: ReportView };
type WatchRow = NonNullable<ReturnType<typeof upcomingCalendarRows>>[number];

const SHOWN = 5;
/** Marks nearer than this share of the axis go on separate lanes so they never overprint. */
const NEAR = 18;
const LANES = 3;
const LANE = 30;

/** One dated event as the reader sees it: the same date and name from several modules is one event. */
type Event = { key: string; date: string; name: string; from: number; rows: WatchRow[] };

function events(rows: readonly WatchRow[]): Event[] {
  const found = new Map<string, Event>();
  for (const row of rows) {
    const name = row.cells[3] || "Dated event";
    const key = `${row.cells[0] ?? ""}|${name}`;
    const known = found.get(key);
    if (known) known.rows.push(row);
    else found.set(key, { key, date: row.cells[0] ?? "", name, from: row.from, rows: [row] });
  }
  return [...found.values()];
}

const shown = (date: string) => asOfDate(date);
const owners = (event: Event) => [...new Set(event.rows.map((row) => row.owner))].join(", ");

/** Where each event falls between the first and the last, and the lane that keeps it clear. */
function positions(list: readonly Event[]) {
  const start = Math.min(...list.map((event) => event.from));
  const span = Math.max(...list.map((event) => event.from)) - start;
  const ends: number[] = [];
  return list.map((event) => {
    const left = span === 0 ? 50 : ((event.from - start) / span) * 100;
    const free = ends.findIndex((end) => left - end >= NEAR);
    const lane = free >= 0 ? free : Math.min(ends.length, LANES - 1);
    ends[lane] = left;
    return { left, lane };
  });
}

/** The first of January of each year the axis crosses. */
function yearTicks(list: readonly Event[]) {
  const start = Math.min(...list.map((event) => event.from));
  const end = Math.max(...list.map((event) => event.from));
  const ticks: { year: number; left: number }[] = [];
  for (
    let year = new Date(start).getUTCFullYear() + 1;
    year <= new Date(end).getUTCFullYear();
    year++
  )
    ticks.push({ year, left: ((Date.UTC(year, 0, 1) - start) / (end - start)) * 100 });
  return ticks;
}

/** The dates at the axis ends; one date is labelled once, under its mark in the middle. */
function AxisEnds({ list }: { list: readonly Event[] }) {
  const first = list.reduce((a, b) => (b.from < a.from ? b : a));
  const last = list.reduce((a, b) => (b.from > a.from ? b : a));
  const label = "absolute top-[100px] font-mono text-caption text-text-tertiary tabular-nums";
  if (first.from === last.from)
    return (
      <span data-axis-label className={`${label} left-1/2 -translate-x-1/2`}>
        {shown(first.date)}
      </span>
    );
  return (
    <>
      <span data-axis-label className={`${label} left-0`}>
        {shown(first.date)}
      </span>
      <span data-axis-label className={`${label} right-0`}>
        {shown(last.date)}
      </span>
    </>
  );
}

/** A true time axis: numbered marks placed by date, each on a lane that keeps it clear of its neighbours. */
function Axis({ list }: { list: readonly Event[] }) {
  const marks = positions(list);
  return (
    <div aria-hidden="true" className="relative mx-4 h-[120px]">
      <span className="absolute inset-x-0 top-[84px] border-t border-connector" />
      {yearTicks(list).map(({ year, left }) => (
        <span
          key={year}
          className="absolute top-[78px] flex -translate-x-1/2 flex-col items-center gap-0.5"
          style={{ left: `${String(left)}%` }}
        >
          <span className="h-3 border-l border-connector" />
          <span className="font-mono text-caption text-text-tertiary tabular-nums">{year}</span>
        </span>
      ))}
      {marks.map(({ left, lane }, index) => (
        <span
          key={list[index]?.key}
          data-mark
          className="absolute -translate-x-1/2"
          style={{ left: `${String(left)}%`, top: `${String(72 - lane * LANE)}px` }}
        >
          <span className="relative flex size-6 items-center justify-center rounded-ds-full border-2 border-action bg-surface-card font-mono text-caption text-text-primary tabular-nums">
            {index + 1}
            <span
              className={cx(
                "absolute top-0.5 hidden max-w-24 truncate text-caption whitespace-nowrap text-text-secondary lg:block",
                left > 70 ? "right-7" : "left-7",
              )}
            >
              {list[index]?.name}
            </span>
          </span>
        </span>
      ))}
      <AxisEnds list={list} />
    </div>
  );
}

function EventItem({ event, index }: { event: Event; index: number }) {
  const [row] = event.rows;
  return (
    <li className="grid content-start gap-1 border-t border-border-hairline pt-3">
      <p className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className="flex size-5 flex-none items-center justify-center rounded-ds-full border border-action font-mono text-caption text-text-primary tabular-nums"
        >
          {index + 1}
        </span>
        <span className="font-mono text-small text-text-primary tabular-nums">
          {shown(event.date)}
        </span>
      </p>
      <p className="text-small font-medium text-text-primary">{event.name}</p>
      <p className="text-caption text-text-secondary">
        {owners(event)}
        {row?.cells[6] ? ` · ${row.cells[6]}` : ""}
      </p>
      {row?.cells[4] && <p className="text-caption text-text-secondary">{row.cells[4]}</p>}
      {row?.timingWithinRecordedPeriod && (
        <p className="text-caption text-text-secondary">
          Timing falls within the recorded period; the exact date is unresolved.
        </p>
      )}
      <span className="flex flex-wrap gap-1">
        {event.rows.map((item, at) => {
          const name = `${event.name} on ${shown(event.date)} from ${item.owner}`;
          return (
            <SourceLink
              key={`${item.href}-${String(at)}`}
              href={item.href}
              label={`Source for ${name}`}
            />
          );
        })}
      </span>
    </li>
  );
}

function Watch({ rows }: { rows: readonly WatchRow[] | null }) {
  if (rows === null)
    return (
      <p className="text-small text-text-secondary" role="status">
        This run needs a valid as-of date to identify upcoming events.
      </p>
    );
  if (rows.length === 0)
    return (
      <p className="text-small text-text-secondary" role="status">
        No recorded event dates fall on or after this run’s as-of date.
      </p>
    );
  const list = events(rows).slice(0, SHOWN);
  return (
    <>
      <Axis list={list} />
      <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-4">
        {list.map((event, index) => (
          <EventItem key={event.key} event={event} index={index} />
        ))}
      </ol>
    </>
  );
}

/** Dates to watch on a true time axis; a run with no recorded dates says so in place. */
export function DatesRow({ run, view }: RowProps) {
  const calendar = buildCalendar(view.entries, run.folder);
  return (
    <Tile span={12} label="Dates to watch">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <h3
          id="overview-dates"
          tabIndex={-1}
          className="flex items-center gap-2.5 text-small font-medium text-text-primary"
        >
          <CalendarIcon aria-hidden="true" className="size-4 text-text-secondary" />
          Dates to watch
        </h3>
        <Button href="#calendar" color="secondary" size="sm" iconTrailing={ArrowRight}>
          Open issuer calendar
        </Button>
      </div>
      {calendar.rows.length === 0 && calendar.gaps.length > 0 ? (
        <GapNote>
          No recorded event could be placed on the time axis. The issuer calendar lists the recorded
          gaps.
        </GapNote>
      ) : calendar.rows.length === 0 ? (
        <p className="text-small text-text-secondary" role="status">
          No dated events were recorded in this run.
        </p>
      ) : (
        <Watch rows={upcomingCalendarRows(calendar.rows, run.asOf)} />
      )}
    </Tile>
  );
}
