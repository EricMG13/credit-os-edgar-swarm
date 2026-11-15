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
const TRACK_GRID =
  "grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]";

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
  return (
    <div className="grid gap-5">
      <div
        className="grid gap-3 rounded-ds-md border border-border-hairline p-4"
        role="group"
        aria-label="Event lanes on a shared date axis"
      >
        <div className={TRACK_GRID}>
          <span />
          <div
            className="mx-1 flex flex-wrap justify-between gap-x-1 text-small tabular-nums text-text-secondary"
            role="group"
            aria-label="Date axis"
          >
            <time dateTime={iso(start)}>{iso(start)}</time>
            {end === start ? null : <time dateTime={iso(end)}>{iso(end)}</time>}
          </div>
        </div>
        {EVENT_LANES.map((category) => {
          const members = events.filter((event) => event.category === category);
          if (!members.length) return null;
          return (
            <section key={category} className="grid gap-3" aria-label={category}>
              <h5 className="font-semibold text-small text-text-primary">{category}</h5>
              {members.map(
                ({
                  index,
                  date,
                  precision,
                  event,
                  status,
                  from,
                  to,
                  relevance,
                  published,
                  source,
                }) => (
                  <div key={index} className={TRACK_GRID}>
                    <div className="min-w-0 text-small">
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
                    <div className="relative mx-1 h-4">
                      <span
                        className="absolute inset-x-0 top-1/2 border-t border-border-control"
                        aria-hidden="true"
                      />
                      <i
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
                    </div>
                  </div>
                ),
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
