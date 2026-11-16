import { ChevronDown } from "@untitledui/icons";
import { useId, useState, type ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import type { SourceTable } from "./visualData";

export const EVENT_HEADERS = [
  "Event date",
  "Date precision",
  "Published",
  "Event",
  "Status",
  "Source",
  "Credit relevance",
];

const EVENT_LANES = ["Historical", "Scheduled", "Scenario", "User reminder"] as const;
const DAY = 86_400_000;
function dayOf(text: string) {
  const date = Date.parse(text);
  return Number.isFinite(date) && new Date(date).toISOString().slice(0, 10) === text ? date : null;
}

function dateSpan(date: string, precision: string) {
  if (precision === "day") {
    const from = /^\d{4}-\d{2}-\d{2}$/.test(date) ? dayOf(date) : null;
    return from === null ? null : { from, to: from };
  }
  const match =
    precision === "year"
      ? /^(\d{4})$/.exec(date)
      : precision === "quarter"
        ? /^(\d{4})-Q([1-4])$/.exec(date)
        : precision === "month"
          ? /^(\d{4})-(0[1-9]|1[0-2])$/.exec(date)
          : null;
  if (!match) return null;
  const year = Number(match[1]);
  const part = Number(match[2]);
  const month = precision === "year" ? 1 : precision === "quarter" ? (part - 1) * 3 + 1 : part;
  const length = precision === "year" ? 12 : precision === "quarter" ? 3 : 1;
  const from = dayOf(`${match[1] ?? ""}-${String(month).padStart(2, "0")}-01`);
  if (from === null) return null;
  const end = new Date(from);
  end.setUTCFullYear(year, month - 1 + length, 1);
  return { from, to: end.getTime() - DAY };
}

export function eventRecords(table: SourceTable) {
  if (table.headers.join("\0") !== EVENT_HEADERS.join("\0")) return [];
  return table.rows.flatMap(
    (
      [
        date = "",
        precision = "",
        published = "",
        event = "",
        status = "",
        source = "",
        relevance = "",
      ],
      index,
    ) => {
      const category = EVENT_LANES.find(
        (lane) => status === lane || status.startsWith(`${lane} — `),
      );
      const span = dateSpan(date, precision);
      if (!category || !event || !span) return [];
      return [
        { index, date, precision, published, event, status, source, relevance, category, ...span },
      ];
    },
  );
}

type EventRecord = ReturnType<typeof eventRecords>[number];
type Active = { index: number; from: "row" | "marker" } | null;

const MARKS: Record<EventRecord["category"], string> = {
  Historical: "bg-text-tertiary",
  Scheduled: "bg-action",
  Scenario: "border border-dashed border-action bg-surface-card",
  "User reminder": "border border-action bg-surface-card",
};

function Mark({ category }: { category: EventRecord["category"] }) {
  return (
    <span
      aria-hidden="true"
      className={cx("inline-block size-2.5 flex-none rounded-ds-full", MARKS[category])}
    />
  );
}

function yearOf(event: EventRecord) {
  return Number(event.date.slice(0, 4));
}

function byYear(events: EventRecord[]) {
  const groups: { year: number; events: EventRecord[] }[] = [];
  for (const event of events) {
    const last = groups.at(-1);
    if (last?.year === yearOf(event)) last.events.push(event);
    else groups.push({ year: yearOf(event), events: [event] });
  }
  return groups;
}

function gapText(from: number, to: number) {
  return `No events ${String(from)}${to > from ? ` to ${String(to)}` : ""}`;
}

function Gap({ from, to }: { from: number; to: number }) {
  return (
    <span className="flex items-start px-1 text-text-tertiary">
      <span aria-hidden="true">⋯</span>
      <span className="sr-only">{gapText(from, to)}</span>
    </span>
  );
}

function focusRow(id: string) {
  const row = document.getElementById(id);
  if (!row) return;
  row.focus();
  if (typeof row.scrollIntoView === "function") row.scrollIntoView({ block: "nearest" });
}

function Marker({
  event,
  rowId,
  lit,
  onActive,
}: {
  event: EventRecord;
  rowId: string;
  lit: boolean;
  onActive: (active: boolean) => void;
}) {
  const { date, precision, status, category } = event;
  return (
    <button
      type="button"
      tabIndex={-1}
      aria-label={`${event.event}, ${date}, ${precision}, ${status}`}
      aria-controls={rowId}
      data-event-category={category}
      data-event-precision={precision}
      data-active={lit}
      className="flex size-3.5 items-center justify-center rounded-ds-full data-[active=true]:ring-2 data-[active=true]:ring-focus max-[480px]:pointer-events-none"
      onClick={() => {
        focusRow(rowId);
      }}
      onMouseEnter={() => {
        onActive(true);
      }}
      onMouseLeave={() => {
        onActive(false);
      }}
      onFocus={() => {
        onActive(true);
      }}
      onBlur={() => {
        onActive(false);
      }}
    >
      <Mark category={category} />
    </button>
  );
}

type Hidden = ReadonlySet<EventRecord["category"]>;

function Legend({
  events,
  hidden,
  onToggle,
}: {
  events: EventRecord[];
  hidden: Hidden;
  onToggle: (category: EventRecord["category"]) => void;
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

type Drawing = {
  events: EventRecord[];
  evidenceInDrawer: boolean;
  rowDetail?: (index: number) => ReactNode;
};

function YearStrip({
  events: all,
  hidden,
  onToggle,
  groups,
  active,
  rowId,
  setActive,
}: {
  events: EventRecord[];
  hidden: Hidden;
  onToggle: (category: EventRecord["category"]) => void;
  groups: ReturnType<typeof byYear>;
  active: Active;
  rowId: (index: number) => string;
  setActive: (active: Active) => void;
}) {
  return (
    <div role="group" aria-label="Events by year" className="grid gap-2">
      <Legend events={all} hidden={hidden} onToggle={onToggle} />
      <div className="flex flex-wrap items-start gap-x-2 gap-y-3">
        {groups.map(({ year, events }, at) => {
          const before = groups[at - 1]?.year;
          return (
            <div key={year} className="contents">
              {before !== undefined && year - before > 1 ? (
                <Gap from={before + 1} to={year - 1} />
              ) : null}
              <div
                role="group"
                aria-label={`${String(year)}, ${events.length === 1 ? "1 event" : `${String(events.length)} events`}`}
                className="grid gap-1"
              >
                <div className="flex max-w-24 flex-wrap gap-0.5">
                  {events.map((event) => (
                    <Marker
                      key={event.index}
                      event={event}
                      rowId={rowId(event.index)}
                      lit={active?.index === event.index && active.from === "row"}
                      onActive={(on) => {
                        setActive(on ? { index: event.index, from: "marker" } : null);
                      }}
                    />
                  ))}
                </div>
                <span className="text-small tabular-nums text-text-secondary">{year}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EventRow({
  event,
  rowId,
  panelId,
  open,
  lit,
  showSource,
  rowDetail,
  onToggle,
  onActive,
}: {
  event: EventRecord;
  rowId: string;
  panelId: string;
  open: boolean;
  lit: boolean;
  showSource: boolean;
  rowDetail: Drawing["rowDetail"];
  onToggle: () => void;
  onActive: (active: boolean) => void;
}) {
  return (
    <li
      id={rowId}
      tabIndex={-1}
      data-active={lit}
      className={cx(
        "grid gap-x-3 gap-y-1 border-t border-border-hairline py-2 md:py-1 text-small first:border-t-0 outline-hidden focus:ring-2 focus:ring-focus focus:ring-inset data-[active=true]:bg-action-subtle md:items-start",
        rowDetail
          ? "md:grid-cols-[7.5rem_auto_minmax(0,5fr)_minmax(0,4fr)_13rem_auto]"
          : "md:grid-cols-[7.5rem_auto_minmax(0,5fr)_minmax(0,4fr)_auto]",
      )}
      onMouseEnter={() => {
        onActive(true);
      }}
      onMouseLeave={() => {
        onActive(false);
      }}
      onFocus={() => {
        onActive(true);
      }}
      onBlur={() => {
        onActive(false);
      }}
    >
      <div className="flex items-center gap-2 md:contents">
        <span className="tabular-nums text-text-secondary">
          {event.date} · {event.precision}
        </span>
        <span className="flex items-center self-center md:h-[22px] md:self-start">
          <Mark category={event.category} />
          <span className="sr-only">{event.category}</span>
        </span>
      </div>
      <span className="min-w-0 font-medium break-words">{event.event}</span>
      <span className="min-w-0 break-words text-text-secondary">{event.relevance}</span>
      <div className="flex flex-wrap items-center gap-5 md:contents">
        {rowDetail ? <div className="min-w-0 md:-my-[3px]">{rowDetail(event.index)}</div> : null}
        <button
          type="button"
          aria-label={`Details for ${event.event}`}
          aria-expanded={open}
          aria-controls={panelId}
          className="relative flex size-7 flex-none cursor-pointer items-center justify-center self-center rounded-ds-sm border border-transparent bg-transparent text-text-tertiary transition-colors duration-150 hover:border-border-control hover:bg-action-subtle hover:text-action focus-visible:border-border-control focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 motion-reduce:transition-none md:-my-[3px] md:self-start max-[480px]:after:absolute max-[480px]:after:-inset-[9px]"
          onClick={onToggle}
        >
          <ChevronDown aria-hidden="true" className={cx("size-4", open && "rotate-180")} />
        </button>
      </div>
      <div
        id={panelId}
        hidden={!open}
        className="grid gap-0.5 text-text-secondary md:col-start-3 md:col-end-[-1]"
      >
        <p>{event.status}</p>
        <p>Published {event.published}</p>
        {showSource ? <p>{event.source}</p> : null}
      </div>
    </li>
  );
}

function EventDrawing({ events, evidenceInDrawer, rowDetail }: Drawing) {
  const prefix = useId();
  const [active, setActive] = useState<Active>(null);
  const [all, setAll] = useState(false);
  const [opened, setOpened] = useState<ReadonlySet<number>>(new Set());
  const [hidden, setHidden] = useState<Hidden>(new Set());
  const groups = byYear(events.filter((event) => !hidden.has(event.category)));
  const toggleCategory = (category: EventRecord["category"]) => {
    setHidden((prev) => {
      const next = new Set(prev);
      if (!next.delete(category)) next.add(category);
      return next;
    });
  };
  const rowId = (index: number) => `${prefix}-row-${String(index)}`;
  const toggle = (index: number) => {
    setOpened((prev) => {
      const next = new Set(prev);
      if (!next.delete(index)) next.add(index);
      return next;
    });
  };
  return (
    <div className="grid gap-4">
      <YearStrip
        events={events}
        hidden={hidden}
        onToggle={toggleCategory}
        groups={groups}
        active={active}
        rowId={rowId}
        setActive={setActive}
      />
      <div role="group" aria-label="Events in date order" className="grid gap-2 md:gap-0">
        <div className="md:pb-2">
          <Button
            color="secondary"
            className="max-[480px]:min-h-11"
            size="sm"
            aria-pressed={all}
            onClick={() => {
              setAll((prev) => !prev);
            }}
          >
            {all ? "Hide all details" : "Show all details"}
          </Button>
        </div>
        {groups.length ? null : (
          <p role="status" className="text-small text-text-secondary">
            No categories are selected.
          </p>
        )}
        <div>
          {groups.map(({ year, events: members }) => (
            <div
              key={year}
              role="group"
              aria-labelledby={`${prefix}-year-${String(year)}`}
              className="grid gap-1 md:gap-0 md:border-t md:border-border-hairline md:first:border-t-0 md:grid-cols-[3rem_minmax(0,1fr)]"
            >
              <span
                id={`${prefix}-year-${String(year)}`}
                className="font-semibold tabular-nums text-text-primary md:pt-1.5"
              >
                {year}
              </span>
              <ul className="min-w-0">
                {members.map((event) => (
                  <EventRow
                    key={event.index}
                    event={event}
                    rowId={rowId(event.index)}
                    panelId={`${rowId(event.index)}-details`}
                    open={all || opened.has(event.index)}
                    lit={active?.index === event.index && active.from === "marker"}
                    showSource={!evidenceInDrawer}
                    rowDetail={rowDetail}
                    onToggle={() => {
                      toggle(event.index);
                    }}
                    onActive={(on) => {
                      setActive(on ? { index: event.index, from: "row" } : null);
                    }}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function eventLane(table: SourceTable, rowDetail?: (index: number) => ReactNode) {
  const events = eventRecords(table);
  if (!events.length || events.length !== table.rows.length) return null;
  events.sort((a, b) => a.from - b.from || a.to - b.to || a.index - b.index);
  return (
    <EventDrawing
      events={events}
      evidenceInDrawer={table.evidenceInDrawer === true}
      rowDetail={rowDetail}
    />
  );
}
