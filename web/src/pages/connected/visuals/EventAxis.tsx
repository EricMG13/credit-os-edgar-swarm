import { useEffect, useRef, useState } from "react";
import { cx } from "@/utils/cx";
import { EVENT_LANES, Legend, Mark, type EventRecord } from "./EventLane";

const DAY = 86_400_000;
/** The plot's width before it is measured (the axis scrolls below 720px, so the plot is this wide at least). */
const FALLBACK_PX = 560;
/** One row of labelled marks; a target is at most this tall (44px on a phone). */
const ROW_PX = 52;
/** Half the widest hit area, so neighbouring targets never overlap. */
const HALF_HIT_PX = 22;
const LABEL_GAP_PX = 6;
const LABEL_MAX_PX = 240;
const TICK_GAP_PX = 72;
const PAD_DAYS = 30;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
/** Under about two years the axis is ticked by month, otherwise by year. */
const MONTH_TICK_RANGE = 2 * 366 * DAY;

type Category = EventRecord["category"];

/** A day event is a point; one that only records a period keeps the period's width. */
const isPeriod = (event: EventRecord) => event.to > event.from;
const endOf = (event: EventRecord) => (isPeriod(event) ? event.to + DAY : event.from);
const isoDate = (time: number) => new Date(time).toISOString().slice(0, 10);

type Placed = {
  event: EventRecord;
  /** Left edge, percent of the plot. */
  start: number;
  /** A period's recorded width, percent of the plot; 0 for a day. */
  width: number;
  row: number;
  flip: boolean;
  /** Pixels the label may take. */
  labelPx: number;
};

/** What a label takes: the date in mono and the name, estimated per character. */
const labelWidth = (event: EventRecord) =>
  Math.min(LABEL_MAX_PX, event.date.length * 7.4 + 8 + event.event.length * 7);

type Extent = { left: number; right: number };

function extentOf(
  event: EventRecord,
  startPx: number,
  widthPx: number,
  flip: boolean,
  label: number,
) {
  const period = isPeriod(event);
  const left = period ? startPx : startPx - HALF_HIT_PX;
  const right = period ? startPx + Math.max(widthPx, 2 * HALF_HIT_PX) : startPx + HALF_HIT_PX;
  return flip
    ? { left: left - LABEL_GAP_PX - label, right }
    : { left, right: right + LABEL_GAP_PX + label };
}

const overlaps = (a: Extent, b: Extent) =>
  a.left < b.right + LABEL_GAP_PX && b.left < a.right + LABEL_GAP_PX;

/** Stack labelled marks into sub-rows so no label or hit area covers another. */
function place(events: EventRecord[], min: number, range: number, plotPx: number): Placed[] {
  const pct = (time: number) => (time - min) / range;
  const rows: Extent[][] = [];
  return [...events]
    .sort((a, b) => a.from - b.from || a.to - b.to || a.index - b.index)
    .map((event) => {
      const start = pct(event.from) * 100;
      const startPx = (start / 100) * plotPx;
      const width = isPeriod(event) ? (pct(endOf(event)) - pct(event.from)) * 100 : 0;
      const widthPx = (width / 100) * plotPx;
      const wanted = labelWidth(event);
      const rightFits = extentOf(event, startPx, widthPx, false, wanted).right <= plotPx + 16;
      const flip = !rightFits && startPx > plotPx - startPx;
      const room = flip
        ? startPx - HALF_HIT_PX - LABEL_GAP_PX + 16
        : plotPx - (startPx + Math.max(widthPx, HALF_HIT_PX)) - LABEL_GAP_PX + 16;
      const labelPx = Math.max(60, Math.min(wanted, room));
      const extent = extentOf(event, startPx, widthPx, flip, labelPx);
      const free = rows.findIndex((row) => row.every((other) => !overlaps(extent, other)));
      const row = free === -1 ? rows.length : free;
      (rows[row] ??= []).push(extent);
      return { event, start, width, row, flip, labelPx };
    });
}

type Tick = { key: string; label: string; time: number };

function monthStarts(min: number, max: number) {
  const first = new Date(min);
  const ticks: { year: number; month: number; time: number }[] = [];
  let year = first.getUTCFullYear();
  let month = first.getUTCMonth();
  for (;;) {
    const time = Date.UTC(year, month, 1);
    if (time >= max) return ticks;
    if (time >= min) ticks.push({ year, month, time });
    month += 1;
    if (month > 11) {
      month = 0;
      year += 1;
    }
  }
}

/** Month ticks under about two years, year ticks beyond; the first partial period is never labelled. */
function axisTicks(min: number, max: number, plotPx: number): Tick[] {
  if (max - min < MONTH_TICK_RANGE) {
    const months = monthStarts(min, max);
    const monthPx = plotPx / Math.max((max - min) / (30.4 * DAY), 1);
    const step = Math.max(1, Math.ceil(TICK_GAP_PX / monthPx));
    return months
      .filter((_, at) => at % step === 0)
      .map(({ year, month, time }, at) => ({
        key: `${String(year)}-${String(month + 1).padStart(2, "0")}`,
        label:
          month === 0 || at === 0
            ? `${MONTHS[month] ?? ""} ${String(year)}`
            : (MONTHS[month] ?? ""),
        time,
      }));
  }
  const first = new Date(min).getUTCFullYear();
  const last = new Date(max).getUTCFullYear();
  const years = Array.from({ length: last - first + 2 }, (_, at) => first + at).filter(
    (year) => Date.UTC(year, 0, 1) >= min && Date.UTC(year, 0, 1) < max,
  );
  const step = Math.max(1, Math.ceil(years.length / Math.max(2, Math.floor(plotPx / 56))));
  return years
    .filter((_, at) => at % step === 0)
    .map((year) => ({ key: String(year), label: String(year), time: Date.UTC(year, 0, 1) }));
}

/** The plot's measured width; the fallback holds until the browser reports one. */
function usePlotWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [px, setPx] = useState(FALLBACK_PX);
  useEffect(() => {
    const element = ref.current;
    if (!element || typeof ResizeObserver === "undefined") return;
    const read = () => {
      if (element.clientWidth > 0) setPx(element.clientWidth);
    };
    read();
    const observer = new ResizeObserver(read);
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, []);
  return [ref, px] as const;
}

const SPAN_STYLE: Record<Category, string> = {
  Historical: "border-text-tertiary bg-surface-subtle",
  Scheduled: "border-action bg-chart-1/50",
  Scenario: "border-dashed border-action bg-surface-card",
  "User reminder": "border-action bg-surface-card",
};

function EventLabel({ event, flip, px }: { event: EventRecord; flip: boolean; px: number }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        "pointer-events-none absolute top-1/2 flex -translate-y-1/2 items-baseline gap-1.5 overflow-hidden whitespace-nowrap",
        flip ? "right-full mr-1.5 flex-row-reverse text-right" : "left-full ml-1.5 text-left",
      )}
      style={{ width: `${String(px)}px` }}
    >
      <span className="flex-none font-mono text-caption text-text-secondary tabular-nums">
        {event.date}
      </span>
      <span className="min-w-0 truncate text-small font-medium text-text-primary">
        {event.event}
      </span>
    </span>
  );
}

function EventButton({
  item,
  rowId,
  plotPx,
  onSelect,
}: {
  item: Placed;
  rowId: string;
  plotPx: number;
  onSelect: () => void;
}) {
  const { event, start, width, row, flip, labelPx } = item;
  const { date, precision, status, category } = event;
  const period = isPeriod(event);
  return (
    <button
      type="button"
      aria-label={`${event.event}, ${date}, ${precision}, ${status}`}
      aria-controls={rowId}
      data-event-category={category}
      data-event-precision={precision}
      data-event-shape={period ? "span" : "mark"}
      title={`${event.event} · ${date}`}
      className={cx(
        "group absolute flex h-11 cursor-pointer items-center rounded-ds-sm focus-visible:ring-2 focus-visible:ring-focus",
        period
          ? "min-w-8 max-[480px]:min-w-11"
          : "w-8 -translate-x-1/2 justify-center max-[480px]:w-11",
      )}
      style={{
        left: `${String(start)}%`,
        top: `${String(row * ROW_PX + 4)}px`,
        ...(period ? { width: `${String(width)}%` } : {}),
      }}
      onClick={onSelect}
    >
      {period ? (
        <span
          data-span-bar=""
          className={cx(
            "absolute left-0 h-4 rounded-ds-xs border group-hover:ring-2 group-hover:ring-focus",
            SPAN_STYLE[category],
          )}
          style={{ width: `${String((width / 100) * plotPx)}px` }}
        />
      ) : (
        <span className="flex rounded-ds-full p-1.5 group-hover:ring-2 group-hover:ring-focus">
          <Mark category={category} />
        </span>
      )}
      <EventLabel event={event} flip={flip} px={labelPx} />
    </button>
  );
}

/** Both ends of the range, with a zero-width range padded so a lone event still has an axis. */
function axisRange(events: EventRecord[], asOf: number | null) {
  const times = [
    ...events.flatMap((event) => [event.from, endOf(event)]),
    ...(asOf === null ? [] : [asOf]),
  ];
  const low = Math.min(...times);
  const high = Math.max(...times);
  const padded = high === low;
  const min = padded ? low - PAD_DAYS * DAY : low;
  const max = padded ? high + PAD_DAYS * DAY : high;
  const periodEnd = events.some((event) => isPeriod(event) && endOf(event) === max);
  return {
    min,
    max,
    range: max - min,
    firstDay: isoDate(min),
    lastDay: isoDate(periodEnd ? max - DAY : max),
  };
}

/**
 * The calendar on one true time axis: a lane per recorded status category, x proportional to
 * date, every event labelled with its date and name. A day event is a mark; an event with only a
 * period is a span of the recorded width.
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
  const [plot, plotPx] = usePlotWidth();
  const toggle = (category: Category) => {
    setHidden((prev) => {
      const next = new Set(prev);
      if (!next.delete(category)) next.add(category);
      return next;
    });
  };
  const { min, max, range, firstDay, lastDay } = axisRange(events, asOf?.time ?? null);
  const x = (time: number) => ((time - min) / range) * 100;
  const lanes = EVENT_LANES.filter(
    (lane) => !hidden.has(lane) && events.some((event) => event.category === lane),
  ).map((lane) => {
    const placed = place(
      events.filter((event) => event.category === lane),
      min,
      range,
      plotPx,
    );
    return { lane, placed, rows: Math.max(...placed.map(({ row }) => row)) + 1 };
  });
  const ticks = axisTicks(min, max, plotPx);
  const right = asOf !== null && x(asOf.time) > 80;
  const count = events.length === 1 ? "1 event" : `${String(events.length)} events`;
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
        aria-label={`Events on a time axis: ${count}, ${firstDay} to ${lastDay}`}
        className="overflow-x-auto"
        data-testid="event-axis"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
      >
        <div className="relative min-w-[720px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 left-28"
          >
            <div className="absolute inset-y-0 right-4 left-4">
              {ticks.map(({ key, time }) => (
                <div
                  key={key}
                  data-axis-tick={key}
                  className="absolute inset-y-0 border-l border-border-hairline"
                  style={{ left: `${String(x(time))}%` }}
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
            <div ref={plot} className="relative mx-4 h-full flex-1">
              {ticks.map(({ key, label, time }) => (
                <span
                  key={key}
                  className="absolute bottom-0 pl-1 whitespace-nowrap tabular-nums"
                  style={{ left: `${String(x(time))}%` }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
          {asOf ? (
            <div className="relative flex h-5 items-center text-caption font-medium text-action">
              <span className="w-28 flex-none" />
              <div className="relative mx-4 h-full flex-1">
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
              <span className="sticky left-0 z-10 flex h-[52px] w-28 flex-none items-center gap-1.5 bg-surface-card text-small text-text-secondary">
                <Mark category={lane} />
                {lane}
              </span>
              <div className="relative mx-4 flex-1">
                {placed.map((item) => (
                  <EventButton
                    key={item.event.index}
                    item={item}
                    rowId={rowId(item.event.index)}
                    plotPx={plotPx}
                    onSelect={() => {
                      onSelect(item.event.index);
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
          <div className="relative flex h-7 items-center border-t border-border-hairline text-caption text-text-secondary">
            <span className="w-28 flex-none">Axis range</span>
            <div className="mx-4 flex flex-1 justify-between font-mono tabular-nums">
              <span data-axis-end="start">{firstDay}</span>
              <span data-axis-end="end">{lastDay}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="hidden text-caption text-text-tertiary max-[720px]:block">
        Scroll the axis sideways to see its whole range.
      </p>
    </div>
  );
}
