import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Segmented } from "@/components/kit/Segmented";
import { cx } from "@/utils/cx";
import { GapNote, Tile } from "../report/overview/Tile";
import {
  absentText,
  extremeOf,
  fiscalYear,
  periodList,
  type Measure,
  type MeasureCase,
  type MeasureCell,
  type ScheduleYear,
} from "../report/forecastData";
import { ticks } from "./visualData";

/** The maturity schedule as its module publishes it, drawn on the same fiscal-year axis. */
export type PathSchedule = {
  years: ScheduleYear[];
  offAxis: ScheduleYear[];
  unit?: string;
  /** Why there is no schedule, drawn in the designed gap or blocked state by the caller. */
  gap?: ReactNode;
  trace?: ReactNode;
};

/** The chart draws at most this many cases against each other, as the cash proxy does. */
const MOST_CASES = 6;
/** The axis reaches a scheduled maturity at most this many years after the last forecast year. */
const REACH = 3;
const SERIES = ["stroke-chart-1", "stroke-chart-2", "stroke-chart-5", "stroke-chart-6"] as const;
const DOTS = ["fill-chart-1", "fill-chart-2", "fill-chart-5", "fill-chart-6"] as const;
/** The cases other than the selected one each have their own dash, so none differs by colour alone. */
const DASHES = ["7 4", "2 3", "9 3 2 3", "4 2 1 2"] as const;

const TOP = 28;
const LEFT = 52;
const BOTTOM = 268;
const AXIS = BOTTOM + 24;
const LANE_TOP = BOTTOM + 52;
const LANE_BASE = BOTTOM + 112;
const LANE_HEIGHT = 44;
const THINNEST = 2;
const LABEL_GAP = 16;

/** The drawing's width in CSS pixels, so text keeps its size at every width. */
function useMeasuredWidth(fallback: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(fallback);
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new ResizeObserver(([entry]) => {
      const next = Math.round(entry?.contentRect.width ?? 0);
      if (next > 0) setWidth(Math.max(300, next));
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, []);
  return { ref, width };
}

type Slot = { year: number; label: string; forecast: boolean };

/** The cases drawn: all of them when they share a period, else the selected case alone. */
function drawnCases(measure: Measure, group: string | undefined) {
  // A selected case the measure has no row for is not replaced by another case.
  const selected =
    group === undefined ? measure.cases[0] : measure.cases.find((item) => item.group === group);
  if (!selected) return { selected: undefined, drawn: [] };
  const all = measure.compared && measure.cases.length <= MOST_CASES;
  return { selected, drawn: all ? measure.cases : [selected] };
}

/**
 * One slot per fiscal year, from the actual year (when earlier) through the drawn cases' periods,
 * reaching scheduled maturities up to `REACH` years past the last forecast year. Only the drawn
 * cases' periods are forecast slots: with no comparison, the selected case's own periods alone.
 */
function axisSlots(measure: Measure, drawn: MeasureCase[], schedule: PathSchedule) {
  const labels = new Map<number, string>();
  for (const period of drawn.flatMap((item) => [...item.cells.keys()])) {
    const year = fiscalYear(period);
    if (year !== null) labels.set(year, period);
  }
  const years = [...labels.keys()];
  if (!years.length) return [];
  const first = Math.min(...years);
  const last = Math.max(...years);
  const actual = measure.actual ? fiscalYear(measure.actual.period) : null;
  const start = actual !== null && actual < first ? actual : first;
  const scheduled = schedule.years
    .map(({ year }) => year)
    .filter((year) => year > last && year - last <= REACH);
  const end = Math.max(last, ...scheduled);
  return Array.from({ length: end - start + 1 }, (_, at): Slot => {
    const year = start + at;
    const forecast = year >= first && year <= last;
    const label =
      labels.get(year) ??
      (year === actual
        ? (measure.actual?.period ?? "")
        : `FY${String(year)}${forecast ? "E" : ""}`);
    return { year, label, forecast };
  });
}

function cellAt(item: MeasureCase, slot: Slot): MeasureCell | undefined {
  return [...item.cells.values()].find((cell) => fiscalYear(cell.period) === slot.year);
}

/** Line segments between consecutive years where both cells are values; never across a gap. */
function segments(item: MeasureCase, slots: Slot[]) {
  const out: { from: MeasureCell; to: MeasureCell }[] = [];
  slots.forEach((slot, at) => {
    const next = slots[at + 1];
    const from = cellAt(item, slot);
    const to = next && cellAt(item, next);
    if (from?.value != null && to?.value != null) out.push({ from, to });
  });
  return out;
}

function geometry(width: number, slots: Slot[], values: number[], lane: boolean) {
  const wide = width >= 640;
  const right = width - (wide ? 132 : 60);
  const step = (right - LEFT) / Math.max(1, slots.length);
  const first = slots[0]?.year ?? 0;
  const x = (year: number) => LEFT + (year - first + 0.5) * step;
  const scale = ticks(values);
  const low = scale[0]?.value ?? 0;
  const high = scale.at(-1)?.value ?? 1;
  const y = (value: number) => BOTTOM - ((value - low) / (high - low || 1)) * (BOTTOM - TOP);
  return { x, y, step, right, width, wide, scale, height: lane ? LANE_BASE + 10 : AXIS + 14 };
}
type Geometry = ReturnType<typeof geometry>;

/** The style of the case at `at` among the drawn cases; the selected case is solid. */
function styleOf(drawn: MeasureCase[], selected: MeasureCase, item: MeasureCase) {
  const at = drawn.indexOf(item);
  const others = drawn.filter((other) => other !== selected);
  const dash = item === selected ? undefined : DASHES[others.indexOf(item) % DASHES.length];
  return {
    stroke: SERIES[at % SERIES.length] ?? SERIES[0],
    fill: DOTS[at % DOTS.length] ?? DOTS[0],
    dash,
  };
}

type Label = {
  key: string;
  x: number;
  y: number;
  text: string;
  anchor: "start" | "middle" | "end";
};

/** Pushes labels that share a column apart so none overprints another. */
function spread(labels: Label[]) {
  const columns = new Map<number, Label[]>();
  for (const label of labels) columns.set(label.x, [...(columns.get(label.x) ?? []), label]);
  for (const column of columns.values()) {
    column.sort((a, b) => a.y - b.y);
    column.forEach((label, at) => {
      const above = column[at - 1];
      if (above && label.y - above.y < LABEL_GAP) label.y = above.y + LABEL_GAP;
    });
    const overflow = (column.at(-1)?.y ?? 0) - (BOTTOM - 4);
    if (overflow > 0) for (const label of column) label.y -= overflow;
    const underflow = TOP + 4 - (column[0]?.y ?? TOP + 4);
    if (underflow > 0) for (const label of column) label.y += underflow;
  }
  return labels;
}

function pointLabels(
  drawn: MeasureCase[],
  selected: MeasureCase,
  slots: Slot[],
  g: Geometry,
  measure: Measure,
) {
  const labels: Label[] = [];
  // The actual year's figure is labelled with its own period, so it is never read as a forecast.
  const actual = measure.actual;
  const actualYear = actual ? fiscalYear(actual.period) : null;
  if (actual && actual.value !== null && actualYear !== null)
    labels.push({
      key: "actual",
      x: g.x(actualYear) - 10,
      y: g.y(actual.value) + 4,
      text: `${actual.display} ${actual.period}`,
      anchor: "end",
    });
  for (const item of drawn) {
    const cells = slots.flatMap((slot) => cellAt(item, slot) ?? []);
    const last = [...cells].reverse().find((cell) => cell.value !== null);
    if (last)
      labels.push({
        key: `${item.group}-end`,
        x: g.x(fiscalYear(last.period) ?? 0) + 10,
        y: g.y(last.value ?? 0) + 4,
        text: g.wide ? `${last.display} ${item.name}` : last.display,
        anchor: "start",
      });
    if (item !== selected) continue;
    // The selected case's highest published year, by value and year: a selection, labelled so.
    const highest = extremeOf(cells, "highest");
    for (const cell of highest?.cells ?? [])
      if (cell !== last)
        labels.push({
          key: `${item.group}-${cell.period}`,
          x: g.x(fiscalYear(cell.period) ?? 0),
          y: g.y(cell.value ?? 0) - 12,
          text: `${cell.display} · ${cell.period}`,
          anchor: "middle",
        });
  }
  return spread(labels);
}

function Hatch() {
  return (
    <pattern
      id="forecast-path-hatch"
      width="7"
      height="7"
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)"
    >
      <rect width="7" height="7" className="fill-surface-canvas" />
      <line x1="0" y1="0" x2="0" y2="7" strokeWidth="1.5" className="stroke-border-container" />
    </pattern>
  );
}

function Grid({ g }: { g: Geometry }) {
  return (
    <g>
      {g.scale.map((tick) => (
        <g key={tick.value}>
          <line
            x1={LEFT}
            x2={g.right}
            y1={g.y(tick.value)}
            y2={g.y(tick.value)}
            className={tick.value === 0 ? "stroke-border-container" : "stroke-border-hairline"}
          />
          <text
            x={LEFT - 10}
            y={g.y(tick.value) + 4}
            textAnchor="end"
            className="fill-text-tertiary font-mono text-caption"
          >
            {tick.label}x
          </text>
        </g>
      ))}
    </g>
  );
}

/** The selected case's years with no figure, hatched in place. */
function GapColumns({ selected, slots, g }: { selected: MeasureCase; slots: Slot[]; g: Geometry }) {
  return (
    <g>
      {slots
        .filter((slot) => slot.forecast && cellAt(selected, slot)?.value == null)
        .map((slot) => {
          const cell = cellAt(selected, slot);
          const centre = g.x(slot.year);
          const half = Math.min(46, g.step * 0.32);
          return (
            <g key={slot.year} data-gap={cell?.period ?? slot.label}>
              <rect
                x={centre - half}
                y={TOP}
                width={half * 2}
                height={BOTTOM - TOP}
                rx="6"
                fill="url(#forecast-path-hatch)"
                strokeDasharray="4 3"
                className="stroke-border-gap"
              />
              <text
                x={centre}
                y={TOP + 16}
                textAnchor="middle"
                strokeWidth="4"
                paintOrder="stroke"
                className="fill-gap-text stroke-surface-canvas text-caption"
              >
                {cell ? "Not calculated" : "Not published"}
              </text>
            </g>
          );
        })}
    </g>
  );
}

/** A small hatched mark at the foot of each year another case does not give a figure for. */
function OtherGaps({
  drawn,
  selected,
  slots,
  g,
}: {
  drawn: MeasureCase[];
  selected: MeasureCase;
  slots: Slot[];
  g: Geometry;
}) {
  const others = drawn.filter((item) => item !== selected);
  return (
    <g>
      {others.flatMap((item, at) =>
        slots
          .filter((slot) => slot.forecast && cellAt(item, slot)?.value == null)
          .map((slot) => (
            <rect
              key={`${item.group}-${String(slot.year)}`}
              data-case-gap={`${item.group} ${cellAt(item, slot)?.period ?? slot.label}`}
              x={g.x(slot.year) - 5 + at * 12}
              y={BOTTOM - 14}
              width="10"
              height="10"
              rx="2"
              fill="url(#forecast-path-hatch)"
              strokeDasharray="2 1"
              className={styleOf(drawn, selected, item).stroke}
            />
          )),
      )}
    </g>
  );
}

function Lines({
  drawn,
  selected,
  slots,
  g,
}: {
  drawn: MeasureCase[];
  selected: MeasureCase;
  slots: Slot[];
  g: Geometry;
}) {
  // The selected case is drawn last, over the others.
  const order = [...drawn.filter((item) => item !== selected), selected];
  return (
    <g>
      {order.map((item) => {
        const style = styleOf(drawn, selected, item);
        const on = item === selected;
        return (
          <g key={item.group}>
            {segments(item, slots).map(({ from, to }) => (
              <line
                key={from.period}
                data-segment={item.group}
                x1={g.x(fiscalYear(from.period) ?? 0)}
                y1={g.y(from.value ?? 0)}
                x2={g.x(fiscalYear(to.period) ?? 0)}
                y2={g.y(to.value ?? 0)}
                strokeWidth={on ? 2.5 : 1.75}
                strokeDasharray={style.dash}
                strokeLinecap="round"
                className={style.stroke}
              />
            ))}
            {slots.map((slot) => {
              const cell = cellAt(item, slot);
              return cell?.value == null ? null : (
                <circle
                  key={slot.year}
                  cx={g.x(slot.year)}
                  cy={g.y(cell.value)}
                  r={on ? 5.5 : 4}
                  strokeWidth="2"
                  className={cx("stroke-surface-card", style.fill)}
                />
              );
            })}
          </g>
        );
      })}
    </g>
  );
}

function Labels({ labels }: { labels: Label[] }) {
  return (
    <g>
      {labels.map((label) => (
        <text
          key={label.key}
          data-label={label.key}
          x={label.x}
          y={label.y}
          textAnchor={label.anchor}
          strokeWidth="4"
          paintOrder="stroke"
          className="fill-text-primary stroke-surface-card font-mono text-small font-medium"
        >
          {label.text}
        </text>
      ))}
    </g>
  );
}

function Actual({ measure, g }: { measure: Measure; g: Geometry }) {
  const actual = measure.actual;
  const year = actual ? fiscalYear(actual.period) : null;
  if (!actual || actual.value === null || year === null) return null;
  return (
    <g>
      <circle
        cx={g.x(year)}
        cy={g.y(actual.value)}
        r="5"
        strokeWidth="2"
        className="fill-surface-card stroke-chart-3"
      />
    </g>
  );
}

function Axis({ slots, g }: { slots: Slot[]; g: Geometry }) {
  const narrow = g.step < 64;
  return (
    <g>
      {slots.map((slot) => (
        <text
          key={slot.year}
          x={g.x(slot.year)}
          y={AXIS}
          textAnchor="middle"
          className="fill-text-secondary font-mono text-caption"
        >
          {narrow ? slot.label.replace(/^FY\d{2}/u, "FY") : slot.label}
        </text>
      ))}
    </g>
  );
}

/** The maturity schedule as written, by fiscal year, under the path on the same axis. */
/** A cell's own words for why it has no amount, short enough for the lane: "Not supplied". */
const gapWords = (text: string) => /^(Not \w+)/u.exec(text.trim())?.[1] ?? "No amount";

/** The maturity schedule as written, by fiscal year, under the path on the same axis. A year with
 * several rows draws each, side by side; a year with no row draws nothing. */
function Lane({ schedule, slots, g }: { schedule: PathSchedule; slots: Slot[]; g: Geometry }) {
  const placed = schedule.years.filter((item) => slots.some((slot) => slot.year === item.year));
  const most = Math.max(0, ...placed.map((item) => item.cell?.value ?? 0));
  return (
    <g>
      <text x={LEFT} y={LANE_TOP - 10} className="fill-text-secondary text-caption">
        {`Debt maturing in the year${schedule.unit ? `, ${schedule.unit}` : ""}`}
      </text>
      <line
        x1={LEFT}
        x2={g.right}
        y1={LANE_BASE}
        y2={LANE_BASE}
        className="stroke-border-container"
      />
      {placed.map((item) => {
        const same = placed.filter((other) => other.year === item.year);
        const room = Math.min(56, g.step * 0.6) / same.length;
        const width = Math.max(8, room - 4);
        const x = g.x(item.year) - (same.length * room) / 2 + same.indexOf(item) * room + room / 2;
        if (!item.cell) return null;
        const amount = item.cell.value;
        if (amount === null) {
          const [first = "", second = ""] = gapWords(item.cell.text).split(" ");
          return (
            <g key={item.key} data-lane-gap={item.label}>
              <rect
                x={x - width / 2}
                y={LANE_BASE - 14}
                width={width}
                height="14"
                fill="url(#forecast-path-hatch)"
                strokeDasharray="3 2"
                className="stroke-border-gap"
              />
              <text
                x={x}
                y={LANE_BASE - 34}
                textAnchor="middle"
                className="fill-gap-text text-caption"
              >
                {g.step < 96 ? first : `${first} ${second}`}
              </text>
              {g.step < 96 && (
                <text
                  x={x}
                  y={LANE_BASE - 20}
                  textAnchor="middle"
                  className="fill-gap-text text-caption"
                >
                  {second}
                </text>
              )}
            </g>
          );
        }
        const height =
          most > 0 && amount > 0 ? Math.max(THINNEST, (amount / most) * LANE_HEIGHT) : 0;
        return (
          <g key={item.key}>
            <rect
              x={x - width / 2}
              y={LANE_BASE - height}
              width={width}
              height={height}
              className="fill-chart-2"
            />
            <text
              x={x}
              y={LANE_BASE - height - 6}
              textAnchor="middle"
              className="fill-text-primary font-mono text-caption"
            >
              {item.cell.text}
            </text>
          </g>
        );
      })}
    </g>
  );
}

function reading(drawn: MeasureCase[], slots: Slot[], schedule: PathSchedule) {
  const cases = drawn.map(
    (item) =>
      `${item.name}: ${slots
        .filter((slot) => slot.forecast)
        .map((slot) => {
          const cell = cellAt(item, slot);
          return `${slot.label} ${!cell ? "not published" : cell.value === null ? "not calculated" : cell.display}`;
        })
        .join(", ")}`,
  );
  const placed = schedule.years.filter((item) => slots.some((slot) => slot.year === item.year));
  const lane = placed.length
    ? ` Debt maturing: ${placed.map((item) => `${item.label} ${item.cell?.text ?? ""}`).join(", ")}.`
    : "";
  return `Net leverage by case. ${cases.join("; ")}.${lane}`;
}

function missingNotes(drawn: MeasureCase[], slots: Slot[]) {
  return drawn.flatMap((item) => {
    const absent = slots.filter((slot) => slot.forecast && !cellAt(item, slot));
    const blank = slots.flatMap((slot) => {
      const cell = slot.forecast ? cellAt(item, slot) : undefined;
      return cell && cell.value === null ? [cell] : [];
    });
    return [
      ...(absent.length
        ? [`${item.name}: ${periodList(absent.map(({ label }) => label))} not published.`]
        : []),
      ...blank.map(
        (cell) => `${item.name}, ${cell.period}: ${cell.reason || "not calculated by the model"}.`,
      ),
    ];
  });
}

function notes(measure: Measure, drawn: MeasureCase[], slots: Slot[], schedule: PathSchedule) {
  const out: string[] = [];
  if (measure.notice) out.push(measure.notice);
  if (measure.cases.length > MOST_CASES && measure.compared)
    out.push("More than six cases are published, so only the selected case is drawn.");
  if (measure.others.length)
    out.push(
      `The model also publishes ${periodList(measure.others)}; this chart reads ${measure.label}.`,
    );
  out.push(...missingNotes(drawn, slots));
  for (const item of schedule.years)
    if (item.cell?.value === null && slots.some((slot) => slot.year === item.year))
      out.push(`Debt maturing, ${item.label}: ${item.cell.text}.`);
  const beyond = schedule.years.filter(
    (item) => item.cell && !slots.some((slot) => slot.year === item.year),
  );
  if (beyond.length)
    out.push(
      `Debt maturing beyond this axis: ${beyond.map((item) => `${item.label} ${item.cell?.text ?? ""}`).join(", ")}.`,
    );
  if (schedule.offAxis.length)
    out.push(
      `Debt maturing, not by fiscal year: ${schedule.offAxis.map((item) => `${item.label} ${item.cell?.text ?? ""}`).join(", ")}.`,
    );
  return out;
}

function Swatch({ dash, stroke }: { dash: string | undefined; stroke: string }) {
  return (
    <svg aria-hidden="true" width="24" height="8" className="flex-none">
      <line
        x1="1"
        y1="4"
        x2="23"
        y2="4"
        strokeWidth="2.5"
        strokeDasharray={dash}
        strokeLinecap="round"
        className={stroke}
      />
    </svg>
  );
}

function Legend({
  drawn,
  selected,
  measure,
  slots,
  schedule,
}: {
  drawn: MeasureCase[];
  selected: MeasureCase;
  measure: Measure;
  slots: Slot[];
  schedule: PathSchedule;
}) {
  const gap = slots.some((slot) => slot.forecast && cellAt(selected, slot)?.value == null);
  const lane = schedule.years.some((item) => slots.some((slot) => slot.year === item.year));
  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-caption text-text-secondary">
      {drawn.map((item) => {
        const style = styleOf(drawn, selected, item);
        return (
          <li key={item.group} className="flex items-center gap-1.5">
            <Swatch dash={style.dash} stroke={style.stroke} />
            <span className={item === selected ? "font-medium text-text-primary" : undefined}>
              {item.name}
            </span>
          </li>
        );
      })}
      {measure.actual?.value != null && (
        <li className="flex items-center gap-1.5">
          <span aria-hidden="true" className="size-2.5 rounded-ds-full border-2 border-chart-3" />
          Actual, {measure.actual.period}
        </li>
      )}
      {lane && (
        <li className="flex items-center gap-1.5">
          <span aria-hidden="true" className="h-2.5 w-2 bg-chart-2" />
          Debt maturing, Financial foundation
          {schedule.trace}
        </li>
      )}
      {gap && (
        <li className="flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className="gap-hatch size-3 rounded-ds-xs border border-dashed border-border-gap"
          />
          No figure for {selected.name}
        </li>
      )}
    </ul>
  );
}

type TableRow = {
  key: string;
  label: string;
  year: number;
  forecast: Slot | null;
  actual: boolean;
};

/** One row per period label as published: an actual year and a forecast year are different
 * columns of the model, so FY2025 and FY2025E are different rows, and an actual is never put in a
 * case's column. */
function tableRows(slots: Slot[], measure: Measure, schedule: PathSchedule): TableRow[] {
  const actual = measure.actual?.value != null ? measure.actual : null;
  const rows: TableRow[] = [];
  if (actual) {
    const year = fiscalYear(actual.period) ?? 0;
    rows.push({
      key: `actual-${actual.period}`,
      label: actual.period,
      year,
      forecast: null,
      actual: true,
    });
  }
  for (const slot of slots) {
    if (slot.forecast)
      rows.push({
        key: `forecast-${slot.label}`,
        label: slot.label,
        year: slot.year,
        forecast: slot,
        actual: false,
      });
    else if (
      !rows.some((row) => row.year === slot.year) &&
      schedule.years.some((item) => item.year === slot.year)
    )
      rows.push({
        key: `debt-${slot.label}`,
        label: slot.label,
        year: slot.year,
        forecast: null,
        actual: false,
      });
  }
  return rows.sort((a, b) => a.year - b.year || Number(b.actual) - Number(a.actual));
}

function PathTable({
  drawn,
  slots,
  measure,
  schedule,
}: {
  drawn: MeasureCase[];
  slots: Slot[];
  measure: Measure;
  schedule: PathSchedule;
}) {
  const actual = measure.actual?.value != null ? measure.actual : null;
  const lane = schedule.years.some((item) => slots.some((slot) => slot.year === item.year));
  const rows = tableRows(slots, measure, schedule);
  // A year's maturities sit once, on the forecast row of that year where there is one.
  const debtRow = (year: number) =>
    rows.find((row) => row.year === year && row.forecast) ?? rows.find((row) => row.year === year);
  return (
    <div
      role="region"
      aria-label="Net leverage table"
      // The wide read-only table must be reachable for keyboard scrolling.
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className="relative min-w-0 overflow-x-auto"
    >
      <table className="w-full border-collapse text-small">
        <caption className="sr-only">Net leverage by case</caption>
        <thead>
          <tr className="border-b border-border-hairline text-left text-caption text-text-tertiary">
            <th scope="col" className="py-2 pr-4 font-medium">
              Period
            </th>
            {actual && (
              <th scope="col" className="py-2 pr-4 font-medium">
                Actual
              </th>
            )}
            {drawn.map((item) => (
              <th key={item.group} scope="col" className="py-2 pr-4 font-medium">
                {item.name}
              </th>
            ))}
            {lane && (
              <th scope="col" className="py-2 pr-4 font-medium">
                {`Debt maturing${schedule.unit ? `, ${schedule.unit}` : ""}`}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const owed =
              debtRow(row.year) === row
                ? schedule.years.filter((item) => item.year === row.year)
                : [];
            return (
              <tr key={row.key} className="border-b border-border-hairline">
                <th scope="row" className="py-2 pr-4 text-left font-mono font-normal">
                  {row.label}
                </th>
                {actual && (
                  <td className="py-2 pr-4 font-mono tabular-nums">
                    {row.actual ? actual.display : ""}
                  </td>
                )}
                {drawn.map((item) => {
                  const slot = row.forecast;
                  if (!slot) return <td key={item.group} className="py-2 pr-4" />;
                  const cell = cellAt(item, slot);
                  const text = !cell
                    ? "Not published"
                    : cell.value === null
                      ? cell.reason || cell.display
                      : cell.display;
                  return (
                    <td
                      key={item.group}
                      className={cx(
                        "py-2 pr-4",
                        cell?.value == null ? "text-gap-text" : "font-mono tabular-nums",
                      )}
                    >
                      {text}
                    </td>
                  );
                })}
                {lane && (
                  <td className="py-2 pr-4">
                    {owed.map((item) => (
                      <span
                        key={item.key}
                        className={cx(
                          "block",
                          item.cell?.value == null ? "text-gap-text" : "font-mono tabular-nums",
                        )}
                      >
                        {owed.length > 1 ? `${item.label}: ` : ""}
                        {item.cell?.text}
                      </span>
                    ))}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Chart({
  measure,
  selected,
  drawn,
  slots,
  schedule,
}: {
  measure: Measure;
  selected: MeasureCase;
  drawn: MeasureCase[];
  slots: Slot[];
  schedule: PathSchedule;
}) {
  const { ref, width } = useMeasuredWidth(872);
  const values = [
    ...drawn.flatMap((item) => [...item.cells.values()].map((cell) => cell.value)),
    measure.actual?.value ?? null,
  ].filter((value): value is number => value !== null);
  const lane = schedule.years.some((item) => slots.some((slot) => slot.year === item.year));
  const g = geometry(width, slots, values, lane);
  return (
    <div ref={ref} className="min-w-0">
      <svg
        role="img"
        aria-label={reading(drawn, slots, schedule)}
        width={width}
        height={g.height}
        viewBox={`0 0 ${String(width)} ${String(g.height)}`}
        className="block max-w-full"
      >
        <defs>
          <Hatch />
        </defs>
        <Grid g={g} />
        <GapColumns selected={selected} slots={slots} g={g} />
        <OtherGaps drawn={drawn} selected={selected} slots={slots} g={g} />
        <Actual measure={measure} g={g} />
        <Lines drawn={drawn} selected={selected} slots={slots} g={g} />
        <Labels labels={pointLabels(drawn, selected, slots, g, measure)} />
        <Axis slots={slots} g={g} />
        {lane && <Lane schedule={schedule} slots={slots} g={g} />}
      </svg>
    </div>
  );
}

/**
 * The lead: net leverage by case on a fiscal-year axis with the maturity schedule under it. A
 * year the selected case does not publish, or publishes without a value, is a hatched column; no
 * line is joined across it. Covenant levels are not drawn on the model's path: the model's
 * figures are not covenant tests.
 */
export function LeveragePath({
  measure,
  rows = [],
  group,
  caseName,
  schedule,
  trace,
}: {
  measure: Measure | null;
  /** Every net leverage row the model publishes, to say what is true when none is read. */
  rows?: string[];
  group: string | undefined;
  caseName: string | undefined;
  schedule: PathSchedule;
  trace?: ReactNode;
}) {
  const [view, setView] = useState("chart");
  const { selected, drawn } = measure
    ? drawnCases(measure, group)
    : { selected: undefined, drawn: [] };
  const slots = measure && selected ? axisSlots(measure, drawn, schedule) : [];
  const forecast = slots.filter((slot) => slot.forecast);
  const span = forecast.length
    ? `, ${forecast[0]?.label ?? ""} to ${forecast.at(-1)?.label ?? ""}`
    : "";
  return (
    <Tile
      span={8}
      label="Net leverage path"
      title={
        drawn.length > 1
          ? "Net leverage by case"
          : `Net leverage, ${caseName ?? selected?.name ?? "model"}`
      }
      kicker={span ? span.slice(2) : undefined}
      className="lg:self-start"
      trace={
        <div className="flex flex-none items-center gap-2">
          {measure && selected && (
            <Segmented
              label="Net leverage view"
              segments={[
                { key: "chart", label: "Chart" },
                { key: "table", label: "Table" },
              ]}
              current={view}
              onSelect={setView}
            />
          )}
          {trace}
        </div>
      }
    >
      {!measure || !selected ? (
        <GapNote>
          {absentText(
            { measure, rows, what: "net leverage", basis: "net debt over Adj EBITDA" },
            caseName,
          )}
        </GapNote>
      ) : (
        <>
          <Legend
            drawn={drawn}
            selected={selected}
            measure={measure}
            slots={slots}
            schedule={schedule}
          />
          <figure className="m-0 min-w-0">
            {view === "chart" ? (
              <Chart
                measure={measure}
                selected={selected}
                drawn={drawn}
                slots={slots}
                schedule={schedule}
              />
            ) : (
              <PathTable drawn={drawn} slots={slots} measure={measure} schedule={schedule} />
            )}
          </figure>
          {schedule.gap}
          <ul className="grid gap-1 text-small text-text-secondary">
            {notes(measure, drawn, slots, schedule).map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </>
      )}
    </Tile>
  );
}
