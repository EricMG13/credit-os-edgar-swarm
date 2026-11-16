import type { ReactNode } from "react";
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
// Label room is an estimate: there is no layout to measure. A label is as wide as its longest
// own line (characters x LABEL_CHAR_PX) up to LABEL_MAX_PX, where it wraps. Room is measured
// against AXIS_MIN_PX, the narrowest axis the classes below can draw: LANE_GRID min-w-216 (864px)
// less p-4 (16px) and pr-60 (240px), less the track's mx-1 on both sides (8px) = 600px. A test
// reads the classes and fails if the two drift apart. Wider screens give the axis more pixels,
// so the same label then takes a smaller share of it.
// ponytail: LABEL_CHAR_PX is an average for 14px body text, so a run of wide capitals reads a
// little under its true width; and lines a caller adds through rowDetail (an opaque node) are
// not counted, so a label widened only by them (at most to LABEL_MAX_PX) can overlap a neighbour.
const LABEL_CHAR_PX = 7;
const LABEL_MAX_PX = 224;
export const AXIS_MIN_PX = 600;
export const LANE_GRID = "grid min-w-216 gap-3 p-4 pr-60";
export const LANE_TRACK = "relative mx-1 h-4";

type Span = { from: number; to: number };

/**
 * Assign each event to the first lane whose last event, label room included, ends strictly
 * before it starts; open a new lane only when none does. An event occupies
 * [from, max(to, from + room)]. Returns the lane of each input event, in input order.
 */
export function assignLanes(
  events: readonly Span[],
  labelRoom: number | ((index: number) => number),
): number[] {
  const room = (index: number) => (typeof labelRoom === "number" ? labelRoom : labelRoom(index));
  const lanes = new Array<number>(events.length).fill(0);
  const laneEnds: number[] = [];
  const order = events
    .map((event, index) => ({ ...event, index }))
    .sort((a, b) => a.from - b.from || a.to - b.to || a.index - b.index);
  for (const { from, to, index } of order) {
    const end = Math.max(to, from + room(index));
    const free = laneEnds.findIndex((laneEnd) => laneEnd < from);
    const lane = free === -1 ? laneEnds.length : free;
    laneEnds[lane] = end;
    lanes[index] = lane;
  }
  return lanes;
}

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

export function eventLane(table: SourceTable, rowDetail?: (index: number) => ReactNode) {
  const events = eventRecords(table);
  if (!events.length || events.length !== table.rows.length) return null;
  events.sort((a, b) => a.from - b.from || a.to - b.to || a.index - b.index);
  const start = events[0]?.from ?? 0;
  const end = Math.max(...events.map((event) => event.to));
  const axisWidth = Math.max(DAY, end - start);
  const position = (when: number) => ((when - start) / axisWidth) * 100;
  const iso = (time: number) => new Date(time).toISOString().slice(0, 10);
  const labelPx = (event: (typeof events)[number]) =>
    Math.min(
      LABEL_MAX_PX,
      LABEL_CHAR_PX *
        Math.max(
          event.event.length,
          `${event.date} · ${event.precision} · ${event.status}`.length,
          `${event.relevance} · Published ${event.published}${table.evidenceInDrawer ? "" : ` · ${event.source}`}`
            .length,
        ),
    );
  return (
    <div className="grid gap-5">
      <div className="overflow-x-auto rounded-ds-md border border-border-hairline">
        <div className={LANE_GRID} role="group" aria-label="Event lanes on a shared date axis">
          <div
            className="mx-1 flex flex-wrap justify-between gap-x-1 text-small tabular-nums text-text-secondary"
            role="group"
            aria-label="Date axis"
          >
            <time dateTime={iso(start)}>{iso(start)}</time>
            {end === start ? null : <time dateTime={iso(end)}>{iso(end)}</time>}
          </div>
          {EVENT_LANES.map((category) => {
            const members = events.filter((event) => event.category === category);
            if (!members.length) return null;
            const rooms = members.map((member) => (labelPx(member) / AXIS_MIN_PX) * axisWidth);
            const lanes = assignLanes(members, (index) => rooms[index] ?? 0);
            const laneMembers: (typeof members)[] = [];
            members.forEach((member, at) => {
              (laneMembers[lanes[at] ?? 0] ??= []).push(member);
            });
            return (
              <section key={category} className="grid gap-3" aria-label={category}>
                <h5 className="font-semibold text-small text-text-primary">{category}</h5>
                {laneMembers.map((laneEvents, lane) => (
                  <div key={lane} data-event-lane={lane} className="grid gap-1">
                    <div className={LANE_TRACK}>
                      <span
                        className="absolute inset-x-0 top-1/2 border-t border-border-control"
                        aria-hidden="true"
                      />
                      {laneEvents.map(({ index, date, precision, event, status, from, to }) => (
                        <i
                          key={index}
                          role="img"
                          aria-label={`${event}, ${date}, ${precision}, ${status}`}
                          data-event-precision={precision}
                          className={`absolute top-1/2 h-3 -translate-y-1/2 rounded-ds-full ${from === to ? "w-3 -translate-x-1/2" : "min-w-px"} ${category === "Scenario" ? "border border-dashed border-action bg-surface-card" : "bg-action"}`}
                          style={{
                            left: `${String(position(from))}%`,
                            width:
                              from === to ? undefined : `${String(position(to) - position(from))}%`,
                          }}
                        />
                      ))}
                    </div>
                    <div className="mx-1 grid">
                      {laneEvents.map(
                        ({
                          index,
                          date,
                          precision,
                          event,
                          status,
                          from,
                          relevance,
                          published,
                          source,
                        }) => (
                          <div
                            key={index}
                            className="col-start-1 row-start-1 min-w-0 w-max max-w-56 text-small"
                            style={{ marginLeft: `${String(position(from))}%` }}
                          >
                            <p className="font-medium break-words">{event}</p>
                            <p className="text-text-secondary">
                              {date} · {precision} · {status}
                            </p>
                            {rowDetail?.(index)}
                            <p className="text-text-secondary">
                              {relevance} · Published {published}
                              {table.evidenceInDrawer ? "" : ` · ${source}`}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
