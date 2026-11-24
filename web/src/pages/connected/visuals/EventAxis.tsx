import { useState } from "react";
import { cx } from "@/utils/cx";
import { EVENT_LANES, Mark, type EventRecord } from "./EventLane";

const DAY = 86_400_000;
/** What one mark takes of the plot, in percent of the 640px minimum width, so marks never overlap. */
const MARK_PCT = 3.75;
const SPAN_MIN_PCT = 1.5;
const ROW_PX = 28;
const MAX_TICKS = 12;

type Category = EventRecord["category"];

/** A day event is a point; one that only records a period keeps the period's width. */
const isPeriod = (event: EventRecord) => event.to > event.from;
const endOf = (event: EventRecord) => (isPeriod(event) ? event.to + DAY : event.from);

type Placed = { event: EventRecord; start: number; width: number; row: number };

function place(events: EventRecord[], min: number, range: number): Placed[] {
  const pct = (time: number) => (range > 0 ? ((time - min) / range) * 100 : 50);
  const ends: number[] = [];
  return [...events]
    .sort((a, b) => a.from - b.from || a.to - b.to || a.index - b.index)
    .map((event) => {
      const period = isPeriod(event);
      const start = pct(event.from);
      const width = period ? Math.max(pct(endOf(event)) - start, SPAN_MIN_PCT) : 0;
      const left = period ? start : start - MARK_PCT / 2;
      const right = period ? start + width : start + MARK_PCT / 2;
      const free = ends.findIndex((end) => end <= left);
      const row = free === -1 ? ends.length : free;
      ends[row] = right;
      return { event, start, width, row };
    });
}

function yearTicks(min: number, max: number) {
  const first = new Date(min).getUTCFullYear();
  const last = new Date(max).getUTCFullYear();
  const years = Array.from({ length: last - first + 2 }, (_, at) => first + at).filter(
    (year) => Date.UTC(year, 0, 1) >= min && Date.UTC(year, 0, 1) <= max,
  );
  const step = Math.max(1, Math.ceil(years.length / MAX_TICKS));
  const shown = years.filter((_, at) => at % step === 0);
  return shown.length ? shown : [first];
}

const SPAN_STYLE: Record<Category, string> = {
  Historical: "border-text-tertiary bg-surface-subtle",
  Scheduled: "border-action bg-chart-1/50",
  Scenario: "border-dashed border-action bg-surface-card",
  "User reminder": "border-action bg-surface-card",
};

function Legend({
  events,
  hidden,
  onToggle,
}: {
  events: EventRecord[];
  hidden: ReadonlySet<Category>;
  onToggle: (category: Category) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Show categories"
      className="flex flex-wrap gap-x-2 gap-y-1 text-small"
    >
      {EVENT_LANES.map((lane) => {
        const count = events.filter((event) => event.category === lane).length;
        const off = hidden.has(lane);
        return count ? (
          <button
            key={lane}
            type="button"
            aria-pressed={!off}
            aria-label={`${lane}, ${String(count)} ${count === 1 ? "event" : "events"}`}
            className={cx(
              "flex cursor-pointer items-center gap-1.5 rounded-ds-sm px-1.5 py-0.5 focus-visible:ring-2 focus-visible:ring-focus max-[480px]:min-h-11",
              off ? "text-text-tertiary" : "text-text-secondary",
            )}
            onClick={() => {
              onToggle(lane);
            }}
          >
            <span className={cx("flex", off && "opacity-40 grayscale")}>
              <Mark category={lane} />
            </span>
            <span aria-hidden="true">
              {lane} <span className="tabular-nums">{count}</span>
            </span>
          </button>
        ) : null;
      })}
    </div>
  );
}

function EventButton({
  item,
  rowId,
  onSelect,
}: {
  item: Placed;
  rowId: string;
  onSelect: () => void;
}) {
  const { event, start, width, row } = item;
  const { date, precision, status, category } = event;
  const label = `${event.event}, ${date}, ${precision}, ${status}`;
  const period = isPeriod(event);
  return (
    <button
      type="button"
      aria-label={label}
      aria-controls={rowId}
      data-event-category={category}
      data-event-precision={precision}
      data-event-shape={period ? "span" : "mark"}
      title={`${event.event} · ${date}`}
      className={cx(
        "absolute flex cursor-pointer items-center justify-center focus-visible:ring-2 focus-visible:ring-focus",
        period
          ? cx("h-4 min-w-2 rounded-ds-xs border", SPAN_STYLE[category])
          : "size-6 -translate-x-1/2 rounded-ds-full hover:ring-2 hover:ring-focus",
      )}
      style={{
        left: `${String(start)}%`,
        top: `${String(row * ROW_PX + (period ? 6 : 2))}px`,
        ...(period ? { width: `${String(width)}%` } : {}),
      }}
      onClick={onSelect}
    >
      {period ? null : <Mark category={category} />}
    </button>
  );
}

/**
 * The calendar on one true time axis: a lane per recorded status category, x proportional to
 * date. A day event is a mark; an event with only a period is a span of the recorded width.
 */
export function EventAxis({
  events,
  asOf,
  rowId,
  onSelect,
}: {
  events: EventRecord[];
  /** The run's as-of date as a timestamp and its text, already validated. */
  asOf: { time: number; text: string } | null;
  rowId: (index: number) => string;
  onSelect: (index: number) => void;
}) {
  const [hidden, setHidden] = useState<ReadonlySet<Category>>(new Set());
  const toggle = (category: Category) => {
    setHidden((prev) => {
      const next = new Set(prev);
      if (!next.delete(category)) next.add(category);
      return next;
    });
  };
  const times = [
    ...events.flatMap((event) => [event.from, endOf(event)]),
    ...(asOf ? [asOf.time] : []),
  ];
  const min = Math.min(...times);
  const max = Math.max(...times);
  const range = max - min;
  const x = (time: number) => (range > 0 ? ((time - min) / range) * 100 : 50);
  const lanes = EVENT_LANES.filter(
    (lane) => !hidden.has(lane) && events.some((event) => event.category === lane),
  ).map((lane) => {
    const placed = place(
      events.filter((event) => event.category === lane),
      min,
      range,
    );
    return { lane, placed, rows: Math.max(...placed.map(({ row }) => row)) + 1 };
  });
  const ticks = yearTicks(min, max);
  const right = asOf !== null && x(asOf.time) > 80;
  return (
    <div className="grid min-w-0 gap-3">
      <Legend events={events} hidden={hidden} onToggle={toggle} />
      {lanes.length ? null : (
        <p role="status" className="text-small text-text-secondary">
          No categories are selected.
        </p>
      )}
      <div
        role="group"
        aria-label="Events on a time axis"
        className="overflow-x-auto"
        data-testid="event-axis"
      >
        <div className="relative min-w-[640px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 left-28"
          >
            <div className="absolute inset-y-0 right-3 left-3">
              {ticks.map((year) => (
                <div
                  key={year}
                  data-axis-tick={year}
                  className="absolute inset-y-0 border-l border-border-hairline"
                  style={{ left: `${String(x(Date.UTC(year, 0, 1)))}%` }}
                />
              ))}
              {asOf ? (
                <div
                  data-as-of-rule={asOf.text}
                  className="absolute inset-y-0 border-l-2 border-action"
                  style={{ left: `${String(x(asOf.time))}%` }}
                />
              ) : null}
            </div>
          </div>
          <div className="relative flex h-6 items-end text-caption text-text-tertiary">
            <span className="w-28 flex-none" />
            <div className="relative mx-3 h-full flex-1">
              {ticks.map((year) => (
                <span
                  key={year}
                  className="absolute bottom-0 pl-1 tabular-nums"
                  style={{ left: `${String(x(Date.UTC(year, 0, 1)))}%` }}
                >
                  {year}
                </span>
              ))}
            </div>
          </div>
          {asOf ? (
            <div className="relative flex h-5 items-center text-caption font-medium text-action">
              <span className="w-28 flex-none" />
              <div className="relative mx-3 h-full flex-1">
                <span
                  className={cx(
                    "absolute top-0 whitespace-nowrap",
                    right ? "-translate-x-full pr-1.5" : "pl-1.5",
                  )}
                  style={{ left: `${String(x(asOf.time))}%` }}
                >
                  {`As of ${asOf.text}`}
                </span>
              </div>
            </div>
          ) : null}
          {lanes.map(({ lane, placed, rows }) => (
            <div
              key={lane}
              role="group"
              aria-label={`${lane} lane`}
              className="flex border-t border-border-hairline"
              style={{ height: `${String(rows * ROW_PX + 8)}px` }}
            >
              <span className="sticky left-0 z-10 flex w-28 flex-none items-start gap-1.5 bg-surface-card pt-2 text-small text-text-secondary">
                <Mark category={lane} />
                {lane}
              </span>
              <div className="relative mx-3 flex-1">
                {placed.map((item) => (
                  <EventButton
                    key={item.event.index}
                    item={item}
                    rowId={rowId(item.event.index)}
                    onSelect={() => {
                      onSelect(item.event.index);
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
