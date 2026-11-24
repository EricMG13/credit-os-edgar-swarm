import { useState } from "react";
import { Segmented } from "@/components/kit/Segmented";
import { cellsOf, forecastMeasure, type Measure, type MeasureCell } from "./forecastData";
import type { ForecastSource } from "./ForecastRecord";
import { GapNote, Tile } from "./overview/Tile";

const VIEWS = [
  { key: "chart", label: "Chart" },
  { key: "table", label: "Table" },
] as const;

const W = 524;
const H = 252;
const LEFT = 44;
const RIGHT = 8;
const TOP = 20;
const BASELINE = 208;
const STUB = 18;
const MIN_INSIDE = 16;

type Part = { name: string; cell: MeasureCell | undefined };
type Slot = { period: string; parts: [Part, Part] };

/** A round tick step so that about four steps cover `max`. */
function stepFor(max: number) {
  const raw = max / 4;
  if (!(raw > 0)) return 1;
  const power = 10 ** Math.floor(Math.log10(raw));
  return ([1, 2, 2.5, 5, 10].find((m) => m * power >= raw) ?? 10) * power;
}

function reasonOf(cell: MeasureCell | undefined) {
  return cell ? cell.reason || "No value published" : "Not published for this case";
}

const isNegative = (cell: MeasureCell | undefined) => (cell?.value ?? 0) < 0;

function Chart({ slots }: { slots: Slot[] }) {
  const stacked = (slot: Slot) =>
    slot.parts.reduce((sum, { cell }) => sum + Math.max(cell?.value ?? 0, 0), 0);
  const max = Math.max(0, ...slots.map(stacked));
  const step = stepFor(max);
  const top = Math.max(step, Math.ceil(max / step) * step);
  const ticks = Array.from({ length: Math.round(top / step) + 1 }, (_, at) =>
    Number((at * step).toPrecision(12)),
  );
  const scale = (BASELINE - TOP) / top;
  const slotWidth = (W - LEFT - RIGHT) / slots.length;
  const barWidth = Math.min(56, slotWidth * 0.5);
  const description = slots
    .flatMap(({ period, parts }) =>
      parts.map(
        ({ name, cell }) => `${name} ${period} ${cell?.value == null ? "n.a." : cell.display}`,
      ),
    )
    .join(", ");
  return (
    <svg
      role="img"
      aria-label={description}
      viewBox={`0 0 ${String(W)} ${String(H)}`}
      className="h-auto w-full min-w-[30rem]"
    >
      <defs>
        <pattern id="uses-of-cash-stub" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 6 L6 0" className="stroke-border-container" strokeWidth="1" />
        </pattern>
      </defs>
      {ticks.map((tick) => (
        <g key={tick}>
          <line
            x1={LEFT}
            x2={W - RIGHT}
            y1={BASELINE - tick * scale}
            y2={BASELINE - tick * scale}
            className="stroke-border-hairline"
          />
          <text
            x={LEFT - 6}
            y={BASELINE - tick * scale + 4}
            textAnchor="end"
            className="fill-text-tertiary font-mono text-[11px]"
          >
            {tick}
          </text>
        </g>
      ))}
      {slots.map((slot, at) => {
        const x = LEFT + slotWidth * at + (slotWidth - barWidth) / 2;
        let level = 0;
        return (
          <g key={slot.period}>
            {slot.parts.map(({ name, cell }, index) => {
              const fill = index === 0 ? "fill-chart-2" : "fill-chart-1";
              if (isNegative(cell)) return null;
              if (cell?.value == null) {
                const y = BASELINE - level * scale - STUB;
                return (
                  <g key={name}>
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={STUB}
                      fill="url(#uses-of-cash-stub)"
                      className="stroke-border-gap"
                      strokeDasharray="3 3"
                    />
                    <text
                      x={x + barWidth + 4}
                      y={y + STUB / 2 + 4}
                      className="fill-text-secondary font-mono text-[11px]"
                    >
                      n.a.
                    </text>
                  </g>
                );
              }
              const height = cell.value * scale;
              const y = BASELINE - level * scale - height;
              level += cell.value;
              const inside = height >= MIN_INSIDE;
              return (
                <g key={name}>
                  <rect x={x} y={y} width={barWidth} height={height} className={fill} />
                  <text
                    x={inside ? x + barWidth / 2 : x + barWidth + 4}
                    y={y + height / 2 + 4}
                    textAnchor={inside ? "middle" : "start"}
                    className={`font-mono text-[11px] ${inside ? "fill-white" : "fill-text-secondary"}`}
                  >
                    {cell.display}
                  </text>
                </g>
              );
            })}
            <text
              x={x + barWidth / 2}
              y={BASELINE + 18}
              textAnchor="middle"
              className="fill-text-tertiary font-mono text-[11px]"
            >
              {slot.period}
            </text>
          </g>
        );
      })}
      <line
        x1={LEFT}
        x2={W - RIGHT}
        y1={BASELINE}
        y2={BASELINE}
        className="stroke-border-container"
      />
    </svg>
  );
}

function Legend() {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-small text-text-secondary">
      {[
        ["bg-chart-2", "Distributions"],
        ["bg-chart-1", "Debt repayment"],
      ].map(([swatch, name]) => (
        <li key={name} className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={`inline-block size-3 rounded-ds-xs ${swatch ?? ""}`}
          />
          {name}
        </li>
      ))}
    </ul>
  );
}

/** Distributions and debt repayments by year, stacked from zero on one scale; never summed. */
export function UsesOfCash({
  model,
  group,
  caseName,
  units,
  source,
}: {
  model: unknown;
  group: string | undefined;
  caseName: string | undefined;
  units: string;
  source?: ForecastSource;
}) {
  const [view, setView] = useState("chart");
  const measures: [string, Measure | null][] = [
    ["Distributions", forecastMeasure(model, /^Distributions$/u)],
    ["Debt repayment", forecastMeasure(model, /^Debt repayment$/u)],
  ];
  const tile = {
    span: 5,
    label: "Uses of cash",
    title: `Uses of cash, ${caseName ?? "selected case"}`,
    kicker: "Distributions and debt repayments by year as the model publishes them",
    trace: source?.("Uses of cash", { case: caseName, rawGroup: group, row: "Distributions" }),
  } as const;
  if (measures.every(([, measure]) => measure === null))
    return (
      <Tile {...tile}>
        <GapNote>The model publishes no distributions or debt repayment rows.</GapNote>
      </Tile>
    );
  const byName = measures.map(([name, measure]) => ({
    name,
    cells: new Map((measure ? cellsOf(measure, group) : []).map((cell) => [cell.period, cell])),
  }));
  const periods = [...new Set(byName.flatMap(({ cells }) => [...cells.keys()]))].sort();
  const slots: Slot[] = periods.map((period) => ({
    period,
    parts: byName.map(({ name, cells }) => ({ name, cell: cells.get(period) })) as [Part, Part],
  }));
  const notes = slots.flatMap(({ period, parts }) =>
    parts.flatMap(({ name, cell }) =>
      isNegative(cell)
        ? [`${period} ${name}: ${cell?.display ?? ""} (negative, not stacked)`]
        : cell?.value == null
          ? [`${period} ${name}: ${reasonOf(cell)}`]
          : [],
    ),
  );
  return (
    <Tile {...tile}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Legend />
        <Segmented label="Uses of cash view" segments={VIEWS} current={view} onSelect={setView} />
      </div>
      <p className="text-caption text-text-tertiary">{units || "Units not recorded"}</p>
      {view === "chart" ? (
        <>
          <div
            role="region"
            aria-label="Uses of cash chart"
            // At a phone's width the chart keeps legible labels and scrolls inside its tile.
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            className="relative min-w-0 overflow-x-auto"
          >
            <Chart slots={slots} />
          </div>
          {notes.length > 0 && (
            <ul className="list-disc pl-5 text-small text-text-secondary">
              {notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <div
          role="region"
          aria-label="Uses of cash table"
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
          className="relative min-w-0 overflow-x-auto"
        >
          <table className="w-full border-collapse text-small">
            <caption className="sr-only">Distributions and debt repayment by period</caption>
            <thead>
              <tr className="text-left text-caption text-text-tertiary">
                <th scope="col" className="py-2 pr-3 font-medium">
                  Period
                </th>
                <th scope="col" className="px-3 py-2 font-medium">
                  Distributions
                </th>
                <th scope="col" className="py-2 pl-3 font-medium">
                  Debt repayment
                </th>
              </tr>
            </thead>
            <tbody>
              {slots.map(({ period, parts }) => (
                <tr key={period} className="border-t border-border-hairline">
                  <th scope="row" className="py-2 pr-3 text-left font-mono font-medium">
                    {period}
                  </th>
                  {parts.map(({ name, cell }) => (
                    <td
                      key={name}
                      className={`px-3 py-2 font-mono tabular-nums ${cell?.value == null ? "text-gap-text" : "text-text-primary"}`}
                    >
                      {cell?.value == null ? reasonOf(cell) : cell.display}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Tile>
  );
}
