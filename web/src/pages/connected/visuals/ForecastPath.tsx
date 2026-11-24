import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Segmented } from "@/components/kit/Segmented";
import { cx } from "@/utils/cx";
import { GapNote, Tile } from "../report/overview/Tile";
import {
  fiscalYear,
  peakOf,
  type Limit,
  type Measure,
  type MeasureCase,
  type MeasureCell,
  type WallYear,
} from "../report/forecastData";
import { ticks } from "./visualData";

export type PathLimits = { limits: Limit[]; reason: string | null; trace?: ReactNode };
export type PathWall = {
  years: WallYear[];
  wall?: WallYear | null;
  unit?: string;
  offAxis?: string[];
  reason: string | null;
  trace?: ReactNode;
};

/** The chart draws at most this many cases against each other, as the cash proxy does. */
const MOST_CASES = 6;
/** The axis reaches a maturity wall at most this many years after the last forecast year. */
const WALL_REACH = 3;
const SERIES = ["stroke-chart-1", "stroke-chart-2", "stroke-chart-5", "stroke-chart-6"] as const;
const DOTS = ["fill-chart-1", "fill-chart-2", "fill-chart-5", "fill-chart-6"] as const;
/** Cases other than the selected one are also told apart by dash, not by colour alone. */
const DASHES = ["6 3", "2 3", "8 3 2 3", "4 2"] as const;
const BORDERS = ["border-chart-1", "border-chart-2", "border-chart-5", "border-chart-6"] as const;
const SWATCH = ["bg-chart-1", "bg-chart-2", "bg-chart-5", "bg-chart-6"] as const;

const BOX = { left: 52, right: 20, top: 36 } as const;
/** The plot is taller where the tile is wide, so the lead keeps its rank beside a tall neighbour. */
const plotBottom = (width: number) => (width >= 700 ? 396 : 276);
const LANE_HEIGHT = 56;
const THINNEST = 2;

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

/** One slot per fiscal year from the first drawn year to the last, the wall included when near. */
function axisSlots(measure: Measure, drawn: MeasureCase[], wall: WallYear | null | undefined) {
  const periods = [...new Set([...measure.periods, ...drawn.flatMap((c) => [...c.cells.keys()])])];
  const labels = new Map<number, string>();
  for (const period of periods) {
    const year = fiscalYear(period);
    if (year !== null) labels.set(year, period);
  }
  const forecastYears = [...labels.keys()];
  if (!forecastYears.length) return [];
  const first = Math.min(...forecastYears);
  const last = Math.max(...forecastYears);
  const actual = measure.actual ? fiscalYear(measure.actual.period) : null;
  const start = actual !== null && actual < first ? actual : first;
  const end = wall && wall.year > last && wall.year - last <= WALL_REACH ? wall.year : last;
  return Array.from({ length: end - start + 1 }, (_, at): Slot => {
    const year = start + at;
    const label =
      labels.get(year) ??
      (year === actual
        ? (measure.actual?.period ?? "")
        : `FY${String(year)}${year > last || year < first ? "" : "E"}`);
    return { year, label, forecast: year >= first && year <= last };
  });
}

function drawnCases(measure: Measure, group: string | undefined) {
  // A selected case the measure has no row for is not replaced by another case.
  const selected =
    group === undefined ? measure.cases[0] : measure.cases.find((item) => item.group === group);
  if (!selected) return { selected: undefined, drawn: [] };
  const all = measure.compared && measure.cases.length <= MOST_CASES;
  const drawn = all ? measure.cases : [selected];
  return { selected, drawn };
}

function geometry(width: number, slots: Slot[], values: number[], lane: boolean) {
  const right = width - BOX.right;
  const step = (right - BOX.left) / Math.max(1, slots.length);
  const first = slots[0]?.year ?? 0;
  const x = (year: number) => BOX.left + (year - first + 0.5) * step;
  const bottom = plotBottom(width);
  const scale = ticks(values);
  const low = scale[0]?.value ?? 0;
  const high = scale.at(-1)?.value ?? 1;
  const y = (value: number) => bottom - ((value - low) / (high - low || 1)) * (bottom - BOX.top);
  const base = bottom + 120;
  return {
    x,
    y,
    step,
    right,
    scale,
    bottom,
    axis: bottom + 24,
    lane: bottom + 54,
    base,
    height: lane ? base + 8 : bottom + 36,
  };
}
type Geometry = ReturnType<typeof geometry>;

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

function Hatch({ id }: { id: string }) {
  return (
    <pattern
      id={id}
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
            x1={BOX.left}
            x2={g.right}
            y1={g.y(tick.value)}
            y2={g.y(tick.value)}
            className={tick.value === 0 ? "stroke-border-container" : "stroke-border-hairline"}
          />
          <text
            x={BOX.left - 10}
            y={g.y(tick.value) + 4}
            textAnchor="end"
            className="fill-text-tertiary font-mono text-[11px]"
          >
            {tick.label}x
          </text>
        </g>
      ))}
    </g>
  );
}

function GapColumns({ selected, slots, g }: { selected: MeasureCase; slots: Slot[]; g: Geometry }) {
  return (
    <g>
      {slots
        .filter((slot) => slot.forecast && cellAt(selected, slot)?.value == null)
        .map((slot) => {
          const cell = cellAt(selected, slot);
          const cx0 = g.x(slot.year);
          const half = Math.min(48, g.step * 0.3);
          return (
            <g key={slot.year} data-gap={cell?.period ?? slot.label}>
              <rect
                x={cx0 - half}
                y={BOX.top}
                width={half * 2}
                height={g.bottom - BOX.top}
                rx="6"
                fill="url(#forecast-path-hatch)"
                strokeDasharray="4 3"
                className="stroke-border-gap"
              />
              <rect
                x={cx0 - 42}
                y={g.bottom - 90}
                width="84"
                height="20"
                rx="4"
                className="fill-surface-canvas"
              />
              <text
                x={cx0}
                y={g.bottom - 76}
                textAnchor="middle"
                className="fill-gap-text text-[11px]"
              >
                {cell ? "Not calculated" : "Not published"}
              </text>
            </g>
          );
        })}
    </g>
  );
}

function Limits({ limits, g }: { limits: Limit[]; g: Geometry }) {
  return (
    <g>
      {limits.map((limit) => (
        <g key={limit.label} data-limit={limit.label}>
          <line
            x1={BOX.left}
            x2={g.right}
            y1={g.y(limit.value)}
            y2={g.y(limit.value)}
            strokeWidth="1.5"
            strokeDasharray="6 3"
            className="stroke-warning-mark"
          />
          <text
            x={BOX.left + 6}
            y={g.y(limit.value) - 6}
            textAnchor="start"

            strokeWidth="3"
            paintOrder="stroke"
            className="stroke-surface-card fill-warning-text text-[11px]"
          >
            {`${limit.text}x ${limit.label}`}
          </text>
        </g>
      ))}
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
        const at = drawn.indexOf(item);
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
                strokeWidth={on ? 2.5 : 1.5}
                strokeDasharray={on ? undefined : DASHES[at % DASHES.length]}
                strokeLinecap="round"
                className={SERIES[at % SERIES.length]}
              />
            ))}
            {slots.map((slot) => {
              const cell = cellAt(item, slot);
              return cell?.value == null ? null : (
                <circle
                  key={slot.year}
                  cx={g.x(slot.year)}
                  cy={g.y(cell.value)}
                  r={on ? 5.5 : 3.5}

                  strokeWidth="2"
                  className={cx("stroke-surface-card", DOTS[at % DOTS.length])}
                />
              );
            })}
          </g>
        );
      })}
    </g>
  );
}

function Labels({ selected, slots, g }: { selected: MeasureCase; slots: Slot[]; g: Geometry }) {
  const cells = slots.flatMap((slot) => cellAt(selected, slot) ?? []);
  const peak = peakOf(cells);
  const last = [...cells].reverse().find((cell) => cell.value !== null);
  const shown = [...new Set([peak, last])].filter((cell): cell is MeasureCell => cell != null);
  return (
    <g className="stroke-surface-card" strokeWidth="3" paintOrder="stroke">
      {shown.map((cell) => (
        <text
          key={cell.period}
          x={g.x(fiscalYear(cell.period) ?? 0)}
          y={g.y(cell.value ?? 0) - 12}
          textAnchor="middle"
          className="fill-text-primary font-mono text-[13px] font-medium"
        >
          {cell === peak && cells.filter((c) => c.value !== null).length > 1
            ? `${cell.display} peak`
            : cell.display}
        </text>
      ))}
    </g>
  );
}

function Actual({ measure, g }: { measure: Measure; g: Geometry }) {
  const actual = measure.actual;
  const year = actual && fiscalYear(actual.period);
  if (!actual || actual.value === null || year == null) return null;
  return (
    <g>
      <circle
        cx={g.x(year)}
        cy={g.y(actual.value)}
        r="5"
        strokeWidth="2"
        className="fill-surface-card stroke-chart-3"
      />
      <text
        x={g.x(year)}
        y={g.y(actual.value) - 12}
        textAnchor="middle"

        strokeWidth="3"
        paintOrder="stroke"
        className="stroke-surface-card fill-text-primary font-mono text-[13px] font-medium"
      >
        {actual.display}
      </text>
    </g>
  );
}

function Axis({ slots, g, wall }: { slots: Slot[]; g: Geometry; wall?: WallYear | null }) {
  const narrow = g.step < 64;
  return (
    <g>
      {slots.map((slot) => (
        <text
          key={slot.year}
          x={g.x(slot.year)}
          y={g.axis}
          textAnchor="middle"
          className={cx(
            "font-mono",
            narrow ? "text-[11px]" : "text-[12px]",
            wall?.year === slot.year ? "fill-chart-2 font-medium" : "fill-text-secondary",
          )}
        >
          {narrow ? slot.label.replace(/^FY\d{2}/u, "FY") : slot.label}
        </text>
      ))}
    </g>
  );
}

function WallRule({ wall, slots, g }: { wall?: WallYear | null; slots: Slot[]; g: Geometry }) {
  if (!wall || !slots.some((slot) => slot.year === wall.year)) return null;
  const x = g.x(wall.year);
  return (
    <g data-wall={wall.label}>
      <line
        x1={x}
        x2={x}
        y1={BOX.top - 8}
        y2={g.bottom + 8}
        strokeWidth="1.5"
        className="stroke-chart-2"
      />
      <text
        x={Math.max(BOX.left + 70, Math.min(x, g.right - 70))}
        y={BOX.top - 16}
        textAnchor="middle"
        className="fill-chart-2 text-[12px] font-medium"
      >
        {`${wall.label} maturity wall`}
      </text>
    </g>
  );
}

function Lane({ wall, slots, g }: { wall: PathWall; slots: Slot[]; g: Geometry }) {
  const placed = wall.years.filter((item) => slots.some((slot) => slot.year === item.year));
  const most = Math.max(0, ...placed.map((item) => item.cell?.value ?? 0));
  const width = Math.min(56, g.step * 0.5);
  return (
    <g>
      <text x={BOX.left} y={g.lane - 8} className="fill-text-secondary text-[11px]">
        {`Debt maturing in the year${wall.unit ? `, ${wall.unit}` : ""}`}
      </text>
      <line
        x1={BOX.left}
        x2={g.right}
        y1={g.base}
        y2={g.base}
        className="stroke-border-container"
      />
      {placed.map((item) => {
        const x = g.x(item.year);
        const amount = item.cell?.value;
        if (!item.cell) return null;
        if (amount == null)
          return (
            <rect
              key={item.year}
              x={x - width / 2}
              y={g.base - 10}
              width={width}
              height="10"
              fill="url(#forecast-path-hatch)"
              strokeDasharray="3 2"
              className="stroke-border-gap"
            />
          );
        const height =
          most > 0 && amount > 0 ? Math.max(THINNEST, (amount / most) * LANE_HEIGHT) : 0;
        return (
          <g key={item.year}>
            <rect
              x={x - width / 2}
              y={g.base - height}
              width={width}
              height={height}
              className="fill-chart-2"
            />
            <text
              x={x}
              y={g.base - height - 6}
              textAnchor="middle"
              className="fill-text-primary font-mono text-[12px]"
            >
              {item.cell.text}
            </text>
          </g>
        );
      })}
    </g>
  );
}

function reading(drawn: MeasureCase[], slots: Slot[], limits: Limit[], wall?: WallYear | null) {
  const cases = drawn.map(
    (item) =>
      `${item.name}: ${slots
        .filter((slot) => slot.forecast)
        .map((slot) => `${slot.label} ${cellAt(item, slot)?.display || "not published"}`)
        .join(", ")}`,
  );
  const marks = [
    ...limits.map((limit) => `limit ${limit.label} ${limit.text}x`),
    ...(wall?.cell ? [`${wall.label} maturity wall ${wall.cell.text}`] : []),
  ];
  return `Net leverage by case. ${cases.join("; ")}.${marks.length ? ` ${marks.join("; ")}.` : ""}`;
}

function notes(
  measure: Measure,
  selected: MeasureCase,
  slots: Slot[],
  limits: PathLimits,
  wall: PathWall,
) {
  const out: { text: string; trace?: ReactNode }[] = [];
  if (measure.notice) out.push({ text: measure.notice });
  if (measure.cases.length > MOST_CASES && measure.compared)
    out.push({ text: "More than six cases are published, so only the selected case is drawn." });
  for (const slot of slots) {
    const cell = cellAt(selected, slot);
    if (slot.forecast && cell && cell.value === null)
      out.push({ text: `${cell.period}: ${cell.reason || "not calculated by the model"}.` });
  }
  if (limits.reason) out.push({ text: limits.reason, trace: limits.trace });
  if (wall.reason) out.push({ text: wall.reason, trace: wall.trace });
  for (const item of wall.years)
    if (item.cell?.value === null && slots.some((slot) => slot.year === item.year))
      out.push({ text: `${item.label}: ${item.cell.reason ?? "not supplied"}.` });
  const beyond = wall.years.filter(
    (item) => item.cell?.value != null && !slots.some((slot) => slot.year === item.year),
  );
  if (beyond.length)
    out.push({
      text: `Beyond this axis: ${beyond.map((item) => `${item.label} ${item.cell?.text ?? ""}`).join(", ")}.`,
    });
  if (wall.offAxis?.length)
    out.push({ text: `Not on the fiscal-year axis: ${wall.offAxis.join(", ")}.` });
  return out;
}

function Legend({
  drawn,
  selected,
  measure,
  limits,
  wall,
  wallOnAxis,
}: {
  drawn: MeasureCase[];
  selected: MeasureCase;
  measure: Measure;
  limits: PathLimits;
  wall: PathWall;
  wallOnAxis: boolean;
}) {
  // The gap key is shown only where a year of the selected case is drawn as a gap.
  const gap = measure.periods.some((period) => selected.cells.get(period)?.value == null);
  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-caption text-text-secondary">
      {drawn.map((item, at) => (
        <li key={item.group} className="flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className={
              item === selected
                ? cx("h-0.5 w-5 rounded-ds-full", SWATCH[at % SWATCH.length])
                : cx("w-5 border-t-2 border-dashed", BORDERS[at % BORDERS.length])
            }
          />
          <span className={item === selected ? "font-medium text-text-primary" : undefined}>
            {item.name}
          </span>
        </li>
      ))}
      {measure.actual?.value != null && (
        <li className="flex items-center gap-1.5">
          <span aria-hidden="true" className="size-2.5 rounded-ds-full border-2 border-chart-3" />
          Actual, {measure.actual.period}
        </li>
      )}
      {limits.limits.length > 0 && (
        <li className="flex items-center gap-1.5">
          <span aria-hidden="true" className="w-5 border-t-2 border-dashed border-warning-mark" />
          Limit, Legal &amp; covenants
          {limits.trace}
        </li>
      )}
      {wallOnAxis && (
        <li className="flex items-center gap-1.5">
          <span aria-hidden="true" className="h-3 w-0.5 bg-chart-2" />
          Maturity wall, Financial foundation
          {wall.trace}
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

function PathTable({
  drawn,
  slots,
  actual,
}: {
  drawn: MeasureCase[];
  slots: Slot[];
  actual: Measure["actual"];
}) {
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
            {drawn.map((item) => (
              <th key={item.group} scope="col" className="py-2 pr-4 font-medium">
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {actual?.value != null && (
            <tr className="border-b border-border-hairline">
              <th scope="row" className="py-2 pr-4 text-left font-mono font-normal">
                {actual.period}
              </th>
              <td colSpan={drawn.length} className="py-2 pr-4 font-mono tabular-nums">
                {actual.display}
              </td>
            </tr>
          )}
          {slots
            .filter((slot) => slot.forecast)
            .map((slot) => (
              <tr key={slot.year} className="border-b border-border-hairline">
                <th scope="row" className="py-2 pr-4 text-left font-mono font-normal">
                  {slot.label}
                </th>
                {drawn.map((item) => {
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
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

function Chart({
  measure,
  selected,
  drawn,
  limits,
  wall,
}: {
  measure: Measure;
  selected: MeasureCase;
  drawn: MeasureCase[];
  limits: PathLimits;
  wall: PathWall;
}) {
  const { ref, width } = useMeasuredWidth(872);
  const slots = axisSlots(measure, drawn, wall.wall);
  const values = [
    ...drawn.flatMap((item) => [...item.cells.values()].map((cell) => cell.value)),
    measure.actual?.value ?? null,
    ...limits.limits.map((limit) => limit.value),
  ].filter((v): v is number => v !== null);
  const lane = wall.years.some((item) => slots.some((slot) => slot.year === item.year));
  const g = geometry(width, slots, values, lane);
  return (
    <div ref={ref} className="min-w-0">
      <svg
        role="img"
        aria-label={reading(
          drawn,
          slots,
          limits.limits,
          slots.some((slot) => slot.year === wall.wall?.year) ? wall.wall : null,
        )}
        width={width}
        height={g.height}
        viewBox={`0 0 ${String(width)} ${String(g.height)}`}
        className="block max-w-full"
      >
        <defs>
          <Hatch id="forecast-path-hatch" />
        </defs>
        <Grid g={g} />
        <GapColumns selected={selected} slots={slots} g={g} />
        <Limits limits={limits.limits} g={g} />
        <WallRule wall={wall.wall} slots={slots} g={g} />
        <Actual measure={measure} g={g} />
        <Lines drawn={drawn} selected={selected} slots={slots} g={g} />
        <Labels selected={selected} slots={slots} g={g} />
        <Axis slots={slots} g={g} wall={wall.wall} />
        {lane && <Lane wall={wall} slots={slots} g={g} />}
      </svg>
    </div>
  );
}

/**
 * The lead: net leverage by case on a fiscal-year axis, the published leverage limits dashed and
 * the maturity wall marked. A year the selected case does not publish, or publishes without a
 * value, is a hatched column; no line is joined across it.
 */
export function LeveragePath({
  measure,
  group,
  caseName,
  basis,
  limits,
  wall,
  trace,
}: {
  measure: Measure | null;
  group: string | undefined;
  caseName: string | undefined;
  basis: string;
  limits: PathLimits;
  wall: PathWall;
  trace?: ReactNode;
}) {
  const [view, setView] = useState("chart");
  const { selected, drawn } = measure
    ? drawnCases(measure, group)
    : { selected: undefined, drawn: [] };
  const periods = measure?.periods ?? [];
  const span = periods.length ? `, ${periods[0] ?? ""} to ${periods.at(-1) ?? ""}` : "";
  return (
    <Tile
      span={8}
      label="Net leverage path"
      kicker={basis}
      title={
        drawn.length > 1
          ? `Net leverage by case${span}`
          : `Net leverage, ${caseName ?? selected?.name ?? "model"}${span}`
      }
      trace={trace}
    >
      {!measure || !selected ? (
        <GapNote>
          {!measure
            ? "The model publishes no net leverage figure."
            : measure.cases.length === 0
              ? "The model's net leverage row has no dated forecast year."
              : `No net leverage figure for ${caseName ?? "the selected case"}.`}
        </GapNote>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Legend
              drawn={drawn}
              selected={selected}
              measure={measure}
              limits={limits}
              wall={wall}
              wallOnAxis={axisSlots(measure, drawn, wall.wall).some(
                (slot) => slot.year === wall.wall?.year,
              )}
            />
            <Segmented
              label="Net leverage view"
              segments={[
                { key: "chart", label: "Chart" },
                { key: "table", label: "Table" },
              ]}
              current={view}
              onSelect={setView}
            />
          </div>
          <figure className="m-0 min-w-0">
            {view === "chart" ? (
              <Chart
                measure={measure}
                selected={selected}
                drawn={drawn}
                limits={limits}
                wall={wall}
              />
            ) : (
              <PathTable
                drawn={drawn}
                slots={axisSlots(measure, drawn, wall.wall)}
                actual={measure.actual}
              />
            )}
          </figure>
          <ul className="grid gap-1 text-small text-text-secondary">
            {notes(measure, selected, axisSlots(measure, drawn, wall.wall), limits, wall).map(
              (note) => (
                <li key={note.text} className="flex items-start gap-2">
                  <span>{note.text}</span>
                  {note.trace}
                </li>
              ),
            )}
          </ul>
        </>
      )}
    </Tile>
  );
}
