import { ArrowRight, Calendar as CalendarIcon } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import type { PublishedRun, Snapshot } from "../../publishedReport";
import type { ReportView } from "../../reportView";
import { buildCalendar, upcomingCalendarRows } from "../Calendar";
import { Tile } from "./Tile";

type RowProps = { snapshot: Snapshot; run: PublishedRun; view: ReportView };
type WatchRow = NonNullable<ReturnType<typeof upcomingCalendarRows>>[number];

const SHOWN = 5;
const DAY = 86_400_000;

/** Where each event falls between the first and the last, as a share of the axis; one date sits mid-axis. */
function positions(rows: readonly WatchRow[]) {
  const start = Math.min(...rows.map((row) => row.from));
  const span = Math.max(...rows.map((row) => row.from)) - start;
  const seen = new Map<number, number>();
  return rows.map((row) => {
    const day = Math.floor(row.from / DAY);
    const stack = seen.get(day) ?? 0;
    seen.set(day, stack + 1);
    return { left: span === 0 ? 50 : ((row.from - start) / span) * 100, stack };
  });
}

/** The first of January of each year the axis crosses. */
function yearTicks(rows: readonly WatchRow[]) {
  const start = Math.min(...rows.map((row) => row.from));
  const end = Math.max(...rows.map((row) => row.from));
  const ticks: { year: number; left: number }[] = [];
  for (
    let year = new Date(start).getUTCFullYear() + 1;
    year <= new Date(end).getUTCFullYear();
    year++
  ) {
    ticks.push({ year, left: ((Date.UTC(year, 0, 1) - start) / (end - start)) * 100 });
  }
  return ticks;
}

/** A true time axis: numbered marks placed by date; marks on one day stack upward. */
function Axis({ rows }: { rows: readonly WatchRow[] }) {
  const marks = positions(rows);
  return (
    <div aria-hidden="true" className="relative mx-4 h-24">
      <span className="absolute inset-x-0 top-16 border-t border-connector" />
      {yearTicks(rows).map(({ year, left }) => (
        <span
          key={year}
          className="absolute top-[58px] flex -translate-x-1/2 flex-col items-center gap-1"
          style={{ left: `${String(left)}%` }}
        >
          <span className="h-3 border-l border-connector" />
          <span className="font-mono text-caption text-text-tertiary tabular-nums">{year}</span>
        </span>
      ))}
      {marks.map(({ left, stack }, index) => (
        <span
          key={index}
          className="absolute flex size-6 -translate-x-1/2 items-center justify-center rounded-ds-full border-2 border-action bg-surface-card font-mono text-caption text-text-primary tabular-nums"
          style={{ left: `${String(left)}%`, top: `${String(52 - Math.min(stack, 2) * 22)}px` }}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}

function Event({ event, index }: { event: WatchRow; index: number }) {
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
          {event.cells[0]}
        </span>
      </p>
      <p className="text-small font-medium text-text-primary">{event.cells[3] || "Dated event"}</p>
      <p className="text-caption text-text-secondary">
        {event.owner}
        {event.cells[6] ? ` · ${event.cells[6]}` : ""}
      </p>
      {event.cells[4] && <p className="text-caption text-text-secondary">{event.cells[4]}</p>}
      {event.timingWithinRecordedPeriod && (
        <p className="text-caption text-text-secondary">
          Timing falls within the recorded period; the exact date is unresolved.
        </p>
      )}
      <Button href={event.href} color="link-gray" size="sm">
        Evidence
      </Button>
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
  const shown = rows.slice(0, SHOWN);
  return (
    <>
      <Axis rows={shown} />
      <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-4">
        {shown.map((event, index) => (
          <Event key={`${event.href}-${String(index)}`} event={event} index={index} />
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
      {calendar.rows.length === 0 ? (
        <p className="text-small text-text-secondary" role="status">
          No dated events were recorded in this run.
        </p>
      ) : (
        <Watch rows={upcomingCalendarRows(calendar.rows, run.asOf)} />
      )}
    </Tile>
  );
}
