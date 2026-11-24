import { cx } from "@/utils/cx";
import { endOf, isPeriod, Mark, SPAN_STYLE, type EventRecord } from "./EventLane";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const BRACKET_PX = 10;
const RAIL_PX = 32;

type AsOf = { time: number; text: string };

type Item =
  | { kind: "month"; key: string; label: string }
  | { kind: "asOf"; key: string; asOf: AsOf }
  | { kind: "event"; key: string; event: EventRecord };

const monthKey = (time: number) => {
  const date = new Date(time);
  return `${String(date.getUTCFullYear())}-${String(date.getUTCMonth()).padStart(2, "0")}`;
};
const monthLabel = (time: number) => {
  const date = new Date(time);
  return `${MONTHS[date.getUTCMonth()] ?? ""} ${String(date.getUTCFullYear())}`;
};

type Stop = { time: number } & (
  { kind: "event"; event: EventRecord } | { kind: "asOf"; asOf: AsOf }
);

/** Events in date order, a month label wherever the month changes and the as-of rule in its place. */
function sequence(events: EventRecord[], asOf: AsOf | null): Item[] {
  const stops: Stop[] = [...events]
    .sort((a, b) => a.from - b.from || a.to - b.to || a.index - b.index)
    .map((event) => ({ time: event.from, kind: "event", event }));
  if (asOf) {
    const at = stops.findIndex(({ time }) => time >= asOf.time);
    stops.splice(at === -1 ? stops.length : at, 0, { time: asOf.time, kind: "asOf", asOf });
  }
  const items: Item[] = [];
  let month = "";
  for (const stop of stops) {
    if (monthKey(stop.time) !== month) {
      month = monthKey(stop.time);
      items.push({ kind: "month", key: `month-${month}`, label: monthLabel(stop.time) });
    }
    items.push(
      stop.kind === "event"
        ? { kind: "event", key: `event-${String(stop.event.index)}`, event: stop.event }
        : { kind: "asOf", key: "as-of", asOf: stop.asOf },
    );
  }
  return items;
}

type Bracket = { event: EventRecord; column: number; first: number; last: number };

/** A period is a bracket from its own row to the last row dated inside it, in its own column. */
function brackets(items: Item[]): { drawn: Bracket[]; columns: number } {
  const ends: number[] = [];
  const drawn: Bracket[] = [];
  items.forEach((item, at) => {
    if (item.kind !== "event" || !isPeriod(item.event)) return;
    const { event } = item;
    const inside = items.flatMap((other, to) =>
      other.kind === "event" && other.event.from < endOf(event) && to >= at ? [to] : [],
    );
    const last = Math.max(at, ...inside);
    const free = ends.findIndex((end) => end < at);
    const column = free === -1 ? ends.length : free;
    ends[column] = last;
    drawn.push({ event, column, first: at, last });
  });
  return { drawn, columns: ends.length };
}

function RailRow({
  item,
  line,
  rail,
  rowId,
  onSelect,
}: {
  item: Extract<Item, { kind: "event" }>;
  line: number;
  rail: number;
  rowId: (index: number) => string;
  onSelect: (index: number) => void;
}) {
  const { event } = item;
  const { date, precision, status, category } = event;
  return (
    <button
      type="button"
      aria-label={`${event.event}, ${date}, ${precision}, ${status}`}
      aria-controls={rowId(event.index)}
      data-event-category={category}
      data-event-precision={precision}
      data-event-shape={isPeriod(event) ? "span" : "mark"}
      className="group relative z-10 grid min-h-11 cursor-pointer grid-cols-[2rem_minmax(0,1fr)] items-start rounded-ds-sm text-left focus-visible:ring-2 focus-visible:ring-focus"
      style={{ gridColumn: `${String(rail)} / -1`, gridRow: line }}
      onClick={() => {
        onSelect(event.index);
      }}
    >
      <span className="flex justify-center pt-3.5">
        <span className="flex rounded-ds-full bg-surface-card p-1 group-hover:ring-2 group-hover:ring-focus">
          <Mark category={category} />
        </span>
      </span>
      <span className="grid min-w-0 py-1.5">
        <span className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-mono text-caption text-text-secondary tabular-nums">{date}</span>
          <span className="min-w-0 text-small font-medium text-text-primary">{event.event}</span>
        </span>
        <span className="text-caption text-text-tertiary">{status}</span>
      </span>
    </button>
  );
}

/**
 * The calendar on a phone: time runs down the page in date order. A left rail carries a mark per
 * event, a bracket per period and the month labels; the as-of date is a horizontal rule in place.
 */
export function VerticalAxis({
  events,
  asOf,
  label,
  firstDay,
  lastDay,
  rowId,
  onSelect,
}: {
  events: EventRecord[];
  asOf: AsOf | null;
  label: string;
  firstDay: string;
  lastDay: string;
  rowId: (index: number) => string;
  onSelect: (index: number) => void;
}) {
  const items = sequence(events, asOf);
  const { drawn, columns } = brackets(items);
  const rail = columns + 1;
  return (
    <div role="group" aria-label={label} data-testid="event-axis" className="grid min-w-0 gap-2">
      <div
        className="grid gap-x-0"
        style={{
          gridTemplateColumns: `repeat(${String(columns)}, ${String(BRACKET_PX)}px) ${String(RAIL_PX)}px minmax(0, 1fr)`,
        }}
      >
        <div
          aria-hidden="true"
          className="justify-self-center border-l border-border-hairline"
          style={{ gridColumn: rail, gridRow: `1 / span ${String(Math.max(items.length, 1))}` }}
        />
        {drawn.map(({ event, column, first, last }) => (
          <div
            key={event.index}
            aria-hidden="true"
            data-span-bracket={event.event}
            className={cx("mx-0.5 my-1 rounded-ds-xs border", SPAN_STYLE[event.category])}
            style={{
              gridColumn: column + 1,
              gridRow: `${String(first + 1)} / ${String(last + 2)}`,
            }}
          />
        ))}
        {items.map((item, at) => {
          if (item.kind === "event") {
            return (
              <RailRow
                key={item.key}
                item={item}
                line={at + 1}
                rail={rail}
                rowId={rowId}
                onSelect={onSelect}
              />
            );
          }
          if (item.kind === "month") {
            return (
              <div
                key={item.key}
                data-rail-month=""
                className="relative z-10 flex h-7 items-center gap-2 text-caption font-medium text-text-tertiary tabular-nums"
                style={{ gridColumn: `${String(rail)} / -1`, gridRow: at + 1 }}
              >
                <span className="flex w-8 flex-none justify-center">
                  <span className="w-3 border-t border-text-tertiary" />
                </span>
                {item.label}
              </div>
            );
          }
          return (
            <div
              key={item.key}
              className="relative z-10 flex h-7 items-center gap-2 text-caption font-medium text-action"
              style={{ gridColumn: "1 / -1", gridRow: at + 1 }}
            >
              <span className="whitespace-nowrap">{`As of ${item.asOf.text}`}</span>
              <span
                data-as-of-rule={item.asOf.text}
                aria-hidden="true"
                className="flex-1 border-t-2 border-action"
              />
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between gap-2 border-t border-border-hairline pt-1.5 text-caption text-text-secondary">
        <span>Axis range</span>
        <span className="flex gap-1 font-mono tabular-nums">
          <span data-axis-end="start">{firstDay}</span>
          <span aria-hidden="true">to</span>
          <span data-axis-end="end">{lastDay}</span>
        </span>
      </div>
    </div>
  );
}
