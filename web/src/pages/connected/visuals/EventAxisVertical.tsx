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

/**
 * A period is a bracket from its own row to the last row dated inside it, in its own column. The
 * as-of rule counts as dated inside a period it falls in, so the rule reads as within the period.
 */
function brackets(items: Item[]): { drawn: Bracket[]; columns: number } {
  const ends: number[] = [];
  const drawn: Bracket[] = [];
  items.forEach((item, at) => {
    if (item.kind !== "event" || !isPeriod(item.event)) return;
    const { event } = item;
    // Items after the period's row are dated at or after its start, so only its end needs testing.
    const inside = items.flatMap((other, to) => {
      if (to < at || other.kind === "month") return [];
      const time = other.kind === "event" ? other.event.from : other.asOf.time;
      return time < endOf(event) ? [to] : [];
    });
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
  rowId,
  onSelect,
}: {
  item: Extract<Item, { kind: "event" }>;
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
      className="group grid min-h-11 w-full cursor-pointer grid-cols-[2rem_minmax(0,1fr)] items-start rounded-ds-sm text-left focus-visible:ring-2 focus-visible:ring-focus"
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

/** The as-of rule across the whole width; its words start clear of the period brackets. */
function AsOfRow({ asOf, columns }: { asOf: AsOf; columns: number }) {
  return (
    <div className="relative flex h-7 items-center text-caption font-medium text-action">
      <span
        data-as-of-rule={asOf.text}
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 border-t-2 border-action"
      />
      <span
        data-as-of-label=""
        className="relative bg-surface-card px-1.5 whitespace-nowrap"
        style={{ marginLeft: `${String(columns * BRACKET_PX)}px` }}
      >{`As of ${asOf.text}`}</span>
    </div>
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
        <ol
          role="list"
          aria-label="Events in date order"
          className="grid grid-cols-subgrid grid-rows-subgrid"
          style={{ gridColumn: "1 / -1", gridRow: `1 / span ${String(Math.max(items.length, 1))}` }}
        >
          {items.map((item, at) => (
            <li
              key={item.key}
              data-rail-month={item.kind === "month" ? "" : undefined}
              className="relative z-10 min-w-0"
              style={{
                gridColumn: item.kind === "asOf" ? "1 / -1" : `${String(rail)} / -1`,
                gridRow: at + 1,
              }}
            >
              {item.kind === "event" ? (
                <RailRow item={item} rowId={rowId} onSelect={onSelect} />
              ) : item.kind === "month" ? (
                <h4 className="flex h-7 items-center gap-2 text-caption font-medium text-text-tertiary tabular-nums">
                  <span aria-hidden="true" className="flex w-8 flex-none justify-center">
                    <span className="w-3 border-t border-text-tertiary" />
                  </span>
                  {item.label}
                </h4>
              ) : (
                <AsOfRow asOf={item.asOf} columns={columns} />
              )}
            </li>
          ))}
        </ol>
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
