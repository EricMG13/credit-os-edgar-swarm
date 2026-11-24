import { useEffect, useRef, useState } from "react";
import { cx } from "@/utils/cx";
import { VerticalAxis } from "./EventAxisVertical";
import {
  endOf,
  EVENT_LANES,
  isPeriod,
  Legend,
  Mark,
  SPAN_STYLE,
  type EventRecord,
} from "./EventLane";

const DAY = 86_400_000;
/** The plot's width before it is measured (the axis scrolls below 720px, so the plot is this wide at least). */
const FALLBACK_PX = 560;
/** One row of labelled marks; a target is at most this tall (44px on a phone). */
const ROW_PX = 48;
/** Half the widest hit area, so neighbouring targets never overlap. */
const HALF_HIT_PX = 22;
const LABEL_GAP_PX = 6;
/** A label may reach this far past the plot into its margin. */
const BOUND_PX = 12;
/** The least width worth drawing a truncated label in. */
const MIN_LABEL_PX = 56;
/** The widths a crowded lane's names are cut to, widest first. */
const NARROW_PX = [160, 112, 84];
/** A lane taking more rows than this draws shorter labels. */
const ROW_CAP = 3;
/** A period bar this wide can carry its own label. */
const INSIDE_MIN_PX = 72;
const TICK_GAP_PX = 72;
const PAD_DAYS = 30;
/** The phone layout draws the axis down the page. */
const PHONE_QUERY = "(max-width: 640px)";
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
/** Under about two years the axis is ticked by month, otherwise by year. */
const MONTH_TICK_RANGE = 2 * 366 * DAY;

type Category = EventRecord["category"];

const isoDate = (time: number) => new Date(time).toISOString().slice(0, 10);

type Side = "right" | "left" | "inside";

type Placed = {
  event: EventRecord;
  /** Left edge, percent of the plot. */
  start: number;
  /** A period's recorded width, percent of the plot; 0 for a day. */
  width: number;
  row: number;
  side: Side;
  /** The most pixels the label may take; the text decides the rest. */
  labelPx: number;
  /** A crowded label gives up its date (the title and the table keep it) to keep the name. */
  dateless: boolean;
};

/** Text widths: measured on a canvas in the page's own fonts, estimated where there is no canvas. */
type Measure = (text: string, mono: boolean) => number;

const ESTIMATE: Measure = (text, mono) => text.length * (mono ? 7.4 : 7.2);

/** A 2d canvas for measuring text, or null where there is none (jsdom reports one as an error). */
function measuringContext() {
  if (typeof navigator !== "undefined" && /jsdom/i.test(navigator.userAgent)) return null;
  try {
    return document.createElement("canvas").getContext("2d");
  } catch {
    return null;
  }
}

const fontOf = (element: Element | null) => {
  if (!element) return "";
  const { fontStyle, fontWeight, fontSize, fontFamily } = getComputedStyle(element);
  return fontSize && fontFamily ? `${fontStyle} ${fontWeight} ${fontSize} ${fontFamily}` : "";
};

type Fonts = { mono: string; name: string };

/** A measuring function for the label fonts; it re-reads them when the page's fonts finish loading. */
function useTextWidth() {
  const mono = useRef<HTMLSpanElement>(null);
  const name = useRef<HTMLSpanElement>(null);
  const canvas = useRef<CanvasRenderingContext2D | null>(null);
  const [fonts, setFonts] = useState<Fonts | null>(null);
  useEffect(() => {
    canvas.current = measuringContext();
    if (!canvas.current) return;
    const read = () => {
      setFonts({ mono: fontOf(mono.current), name: fontOf(name.current) });
    };
    read();
    void (document as Partial<Document>).fonts?.ready.then(read);
  }, []);
  const measure: Measure = (text, isMono) => {
    const font = fonts?.[isMono ? "mono" : "name"];
    const context = canvas.current;
    if (!context || !font) return ESTIMATE(text, isMono);
    context.font = font;
    return context.measureText(text).width;
  };
  const probes = (
    <>
      <span
        ref={mono}
        aria-hidden="true"
        className="invisible absolute font-mono text-caption tabular-nums"
      />
      <span ref={name} aria-hidden="true" className="invisible absolute text-small font-medium" />
    </>
  );
  return { measure, probes };
}

/** What a label takes: the date in mono, a gap, then the name. */
const labelWidth = (event: EventRecord, measure: Measure) =>
  Math.ceil(measure(event.date, true) + 6 + measure(event.event, false)) + 2;

type Extent = { left: number; right: number };

type Frame = { startPx: number; widthPx: number; period: boolean };

function extentOf({ startPx, widthPx, period }: Frame, side: Side, label: number): Extent {
  const left = period ? startPx : startPx - HALF_HIT_PX;
  const right = period ? startPx + Math.max(widthPx, 2 * HALF_HIT_PX) : startPx + HALF_HIT_PX;
  if (side === "inside") return { left, right };
  return side === "left"
    ? { left: left - LABEL_GAP_PX - label, right }
    : { left, right: right + LABEL_GAP_PX + label };
}

const overlaps = (a: Extent, b: Extent) =>
  a.left < b.right + LABEL_GAP_PX && b.left < a.right + LABEL_GAP_PX;

/** A side, the width its label takes in the packing, and the most it may use before it truncates. */
type Choice = { side: Side; label: number; max: number; dateless?: boolean };

/** The sides a label can take, best first, each with the room it has inside the plot. */
function choices(frame: Frame, wanted: number, plotPx: number): Choice[] {
  const hit = extentOf(frame, "inside", 0);
  const sides = [
    { side: "right" as const, room: Math.floor(plotPx + BOUND_PX - hit.right - LABEL_GAP_PX) },
    { side: "left" as const, room: Math.floor(hit.left - LABEL_GAP_PX + BOUND_PX) },
  ];
  const inside = Math.floor(frame.widthPx - 10);
  const roomy = frame.period && frame.widthPx >= INSIDE_MIN_PX;
  const within: Choice = { side: "inside", label: inside, max: inside };
  if (roomy && inside >= wanted) return [within];
  const whole = sides
    .filter(({ room }) => room >= wanted)
    .map(({ side, room }) => ({ side, label: wanted, max: room }));
  if (whole.length) return whole;
  if (roomy && inside >= wanted * 0.6) return [within];
  const [best] = [...sides].sort((a, b) => b.room - a.room);
  if (best && best.room >= MIN_LABEL_PX)
    return [{ side: best.side, label: best.room, max: best.room }];
  const side = best?.side ?? "right";
  return roomy ? [within] : [{ side, label: MIN_LABEL_PX, max: MIN_LABEL_PX }];
}

/** How much of each label a lane draws: whole, then the name alone, then the name cut to a width. */
type Mode = { dateless: boolean; cap: number };
const MODES: Mode[] = [
  { dateless: false, cap: Infinity },
  { dateless: true, cap: Infinity },
  ...NARROW_PX.map((cap) => ({ dateless: true, cap })),
];

type Option = Choice & { extent: Extent };

/** The first row, from the top, where one of the options overlaps nothing. */
function slot(rows: Extent[][], options: Option[]) {
  for (let row = 0; ; row += 1) {
    const option = options.find((candidate) =>
      (rows[row] ?? []).every((other) => !overlaps(candidate.extent, other)),
    );
    if (option) return { row, option };
  }
}

/** Stack labelled marks into sub-rows so no label or hit area covers another. */
function stack(
  events: EventRecord[],
  min: number,
  range: number,
  plotPx: number,
  measure: Measure,
  mode: Mode,
): Placed[] {
  const pct = (time: number) => (time - min) / range;
  const rows: Extent[][] = [];
  return [...events]
    .sort((a, b) => a.from - b.from || a.to - b.to || a.index - b.index)
    .map((event) => {
      const start = pct(event.from) * 100;
      const width = isPeriod(event) ? (pct(endOf(event)) - pct(event.from)) * 100 : 0;
      const frame = {
        startPx: (start / 100) * plotPx,
        widthPx: (width / 100) * plotPx,
        period: isPeriod(event),
      };
      const whole = labelWidth(event, measure);
      const name = Math.ceil(measure(event.event, false)) + 2;
      const wanted = mode.dateless ? Math.min(name, mode.cap) : whole;
      const options = choices(frame, wanted, plotPx).map((choice) => ({
        ...choice,
        max: Math.min(choice.max, mode.cap),
        dateless: mode.dateless,
        extent: extentOf(frame, choice.side, choice.label),
      }));
      const { row, option } = slot(rows, options);
      (rows[row] ??= []).push(option.extent);
      return {
        event,
        start,
        width,
        row,
        side: option.side,
        labelPx: option.max,
        dateless: mode.dateless,
      };
    });
}

const rowCount = (placed: Placed[]) => Math.max(0, ...placed.map(({ row }) => row + 1));

/**
 * Pack a lane with whole labels; when that takes more than a few rows, give up each label's date,
 * then narrow the names, until the lane is short or the names are as narrow as they go.
 */
function place(
  events: EventRecord[],
  min: number,
  range: number,
  plotPx: number,
  measure: Measure,
): Placed[] {
  let placed: Placed[] = [];
  for (const mode of MODES) {
    placed = stack(events, min, range, plotPx, measure, mode);
    if (rowCount(placed) <= ROW_CAP) break;
  }
  return placed;
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

function EventLabel({
  event,
  side,
  px,
  dateless,
}: {
  event: EventRecord;
  side: Side;
  px: number;
  dateless: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      data-event-label=""
      data-label-side={side}
      className={cx(
        "pointer-events-none absolute flex items-baseline gap-1.5 overflow-hidden whitespace-nowrap",
        side === "inside" && "top-1/2 left-1.5 -translate-y-1/2 text-caption",
        side === "left" && "top-1/2 right-full mr-1.5 -translate-y-1/2 flex-row-reverse text-right",
        side === "right" && "top-1/2 left-full ml-1.5 -translate-y-1/2 text-left",
      )}
      style={{ maxWidth: `${String(px)}px` }}
    >
      {dateless ? null : (
        <span
          className={cx(
            "flex-none font-mono text-text-secondary tabular-nums",
            side !== "inside" && "text-caption",
          )}
        >
          {event.date}
        </span>
      )}
      <span
        className={cx(
          "min-w-0 truncate font-medium text-text-primary",
          side !== "inside" && "text-small",
        )}
      >
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
  const { event, start, width, row, side, labelPx, dateless } = item;
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
      <EventLabel event={event} side={side} px={labelPx} dateless={dateless} />
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

type AsOf = { time: number; text: string };
type Range = ReturnType<typeof axisRange>;

/** Whether the viewport is a phone's, where the axis runs down the page instead of across. */
function usePhone() {
  const [phone, setPhone] = useState(
    () => typeof window.matchMedia === "function" && window.matchMedia(PHONE_QUERY).matches,
  );
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const query = window.matchMedia(PHONE_QUERY);
    const read = () => {
      setPhone(query.matches);
    };
    read();
    query.addEventListener("change", read);
    return () => {
      query.removeEventListener("change", read);
    };
  }, []);
  return phone;
}

function HorizontalAxis({
  events,
  asOf,
  hidden,
  label,
  range: { min, max, range, firstDay, lastDay },
  rowId,
  onSelect,
}: {
  events: EventRecord[];
  asOf: AsOf | null;
  hidden: ReadonlySet<Category>;
  label: string;
  range: Range;
  rowId: (index: number) => string;
  onSelect: (index: number) => void;
}) {
  const [plot, plotPx] = usePlotWidth();
  const { measure, probes } = useTextWidth();
  const x = (time: number) => ((time - min) / range) * 100;
  const lanes = EVENT_LANES.filter(
    (lane) => !hidden.has(lane) && events.some((event) => event.category === lane),
  ).map((lane) => {
    const placed = place(
      events.filter((event) => event.category === lane),
      min,
      range,
      plotPx,
      measure,
    );
    return { lane, placed, rows: Math.max(...placed.map(({ row }) => row)) + 1 };
  });
  const ticks = axisTicks(min, max, plotPx);
  const right = asOf !== null && x(asOf.time) > 80;
  return (
    <>
      <div
        role="group"
        aria-label={label}
        className="overflow-x-auto"
        data-testid="event-axis"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
      >
        <div className="relative min-w-[720px]">
          {probes}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 bottom-7 left-28"
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
            </div>
          </div>
          {asOf ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-6 right-0 bottom-7 left-28"
            >
              <div className="absolute inset-y-0 right-4 left-4">
                <div
                  data-as-of-rule={asOf.text}
                  className="absolute inset-y-0 border-l-2 border-action"
                  style={{ left: `${String(x(asOf.time))}%` }}
                />
              </div>
            </div>
          ) : null}
          <div className="relative flex h-6 items-end text-caption text-text-tertiary">
            <span className="w-28 flex-none" />
            <div ref={plot} className="relative mx-4 h-full flex-1">
              {ticks.map(({ key, label: tick, time }) => (
                <span
                  key={key}
                  className="absolute bottom-0 pl-1 whitespace-nowrap tabular-nums"
                  style={{ left: `${String(x(time))}%` }}
                >
                  {tick}
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
              <span className="sticky left-0 z-10 flex h-12 w-28 flex-none items-center gap-1.5 bg-surface-card text-small text-text-secondary">
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
    </>
  );
}

/**
 * The calendar on one true time axis: a lane per recorded status category, x proportional to
 * date, every event labelled with its date and name. A day event is a mark; an event with only a
 * period is a span of the recorded width. On a phone the axis runs down the page instead.
 */
export function EventAxis({
  events,
  asOf,
  rowId,
  onSelect,
}: {
  events: EventRecord[];
  /** The run's as-of date as a timestamp and its text, already validated. */
  asOf: AsOf | null;
  rowId: (index: number) => string;
  onSelect: (index: number) => void;
}) {
  const [hidden, setHidden] = useState<ReadonlySet<Category>>(new Set());
  const phone = usePhone();
  const toggle = (category: Category) => {
    setHidden((prev) => {
      const next = new Set(prev);
      if (!next.delete(category)) next.add(category);
      return next;
    });
  };
  const range = axisRange(events, asOf?.time ?? null);
  const count = events.length === 1 ? "1 event" : `${String(events.length)} events`;
  const label = `Events on a time axis: ${count}, ${range.firstDay} to ${range.lastDay}`;
  const shown = events.filter((event) => !hidden.has(event.category));
  return (
    <div className="grid min-w-0 gap-3">
      <Legend events={events} hidden={hidden} onToggle={toggle} />
      {shown.length ? null : (
        <p role="status" className="text-small text-text-secondary">
          No categories are selected.
        </p>
      )}
      {phone ? (
        <VerticalAxis
          events={shown}
          asOf={asOf}
          label={label}
          firstDay={range.firstDay}
          lastDay={range.lastDay}
          rowId={rowId}
          onSelect={onSelect}
        />
      ) : (
        <HorizontalAxis
          events={events}
          asOf={asOf}
          hidden={hidden}
          label={label}
          range={range}
          rowId={rowId}
          onSelect={onSelect}
        />
      )}
    </div>
  );
}
