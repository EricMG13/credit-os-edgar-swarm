import { cx } from "@/utils/cx";
import { MiniSlope, Slope } from "../../overview/marks";
import { Figure, GapNote } from "../../overview/Tile";
import { FigureTile, GapTile } from "../kit/LeadFrame";
import { Dumbbell, GapSlot, LINE, SIZE, useFigureWidth } from "../kit/marks";
import { Grid, TickLabels } from "../kit/marks/parts";
import type { LeadProps } from "../types";
import {
  barLayout,
  changeText,
  contiguous,
  dumbbellRows,
  earningsReading,
  earningsTable,
  leverageGaps,
  leverageMarks,
  leverageReading,
  leverageWord,
  lineLayout,
  periodSpan,
} from "./earningsDebtGeometry";
import {
  earningsAgainstDebt,
  figureGap,
  type EarningsAgainstDebt,
  type LeverageSeries,
} from "./foundationData";

const LABEL = "Earnings and debt";
const KICKER = "Earnings against debt and leverage";
/** Below this measured width the overview Slope's fixed text would shrink under 11 px. */
const SLOPE_WIDTH = 400;

const FILL = { primary: "fill-chart-1", secondary: "fill-chart-2" } as const;
const STROKE = { primary: "stroke-chart-1", secondary: "stroke-chart-2" } as const;

/** One period: one bar per measure from zero, earnings teal, debt navy, gaps hatched with the reason. */
function PeriodBars({ data, width }: { data: EarningsAgainstDebt; width: number }) {
  const layout = barLayout(data, width);
  const period = data.periods[0]?.label ?? "";
  return (
    <svg
      viewBox={`0 0 ${String(width)} ${String(layout.height)}`}
      width="100%"
      role="img"
      aria-label={earningsReading(data, period)}
      data-layout={layout.narrow ? "narrow" : "wide"}
      className="block"
    >
      <Grid
        ticks={layout.ticks}
        x={layout.x}
        strong={0}
        bands={
          layout.narrow
            ? layout.rows.map((row) => [row.barY - 3, row.barY + 19] as const)
            : [[0, layout.plotBottom] as const]
        }
      />
      {layout.rows.map((row) => (
        <g key={row.label} data-row={row.label}>
          <text
            data-part="label"
            x="0"
            y={row.top + 12}
            fontSize={SIZE.label}
            className="fill-text-primary font-body font-medium"
          >
            {row.labelLines.map((line, at) => (
              <tspan key={`${String(at)}-${line}`} x="0" y={row.top + 12 + at * LINE}>
                {line}
              </tspan>
            ))}
          </text>
          {row.value ? (
            <>
              <rect
                data-bar={row.label}
                data-value={row.value.value}
                data-series={row.series}
                x={layout.x(0)}
                y={row.barY}
                width={Math.max(layout.x(row.value.value) - layout.x(0), 1)}
                height="16"
                rx="2"
                className={FILL[row.series]}
              />
              <text
                data-part="value"
                x={layout.x(row.value.value) + 6}
                y={row.barY + 12}
                fontSize={SIZE.value}
                className="fill-text-primary font-mono font-medium"
              >
                {row.value.text}
              </text>
            </>
          ) : (
            <>
              <GapSlot
                x={layout.left}
                y={row.barY + 2}
                width={Math.min(120, layout.right - layout.left)}
                height={12}
                reason={row.reason.join(" ")}
              />
              <text
                data-part="reason"
                x={layout.left}
                y={row.barY + 32}
                fontSize={SIZE.label}
                className="fill-gap-text font-body"
              >
                {row.reason.map((line, at) => (
                  <tspan
                    key={`${String(at)}-${line}`}
                    x={layout.left}
                    y={row.barY + 32 + at * LINE}
                  >
                    {line}
                  </tspan>
                ))}
              </text>
            </>
          )}
        </g>
      ))}
      <TickLabels ticks={layout.ticks} x={layout.x} y={layout.plotBottom + 16} width={width} />
    </svg>
  );
}

/** The module's reasons for the periods a panel does not draw, under it, in the gap ink. */
function Reasons({ lines, x, y }: { lines: readonly string[]; x: number; y: number }) {
  if (!lines.length) return null;
  return (
    <text data-part="reason" x={x} y={y} fontSize={SIZE.label} className="fill-gap-text font-body">
      {lines.map((line, at) => (
        <tspan key={`${String(at)}-${line}`} x={x} y={y + at * LINE}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

/** Three or more periods: a line per measure across every stated period, one scale from zero. */
function PeriodLines({ data, width }: { data: EarningsAgainstDebt; width: number }) {
  const layout = lineLayout(data, width);
  const labels = data.periods.map((period) => period.label);
  const { top, height, margin } = layout.plot;
  return (
    <svg
      viewBox={`0 0 ${String(width)} ${String(layout.height)}`}
      width="100%"
      role="img"
      aria-label={earningsReading(data, labels.join(", "))}
      className="block"
    >
      {layout.panels.map((panel) => (
        <g key={panel.label} data-panel={panel.label}>
          <text
            data-part="label"
            x={panel.left}
            y={panel.top + 12}
            fontSize={SIZE.label}
            className="fill-text-primary font-body font-medium"
          >
            {panel.label}
          </text>
          {layout.ticks.map((tick) => {
            const y = layout.y(tick.value) + panel.top;
            return (
              <g key={tick.value}>
                <line
                  x1={panel.left + margin}
                  x2={panel.left + panel.width}
                  y1={y}
                  y2={y}
                  className={tick.value === 0 ? "stroke-text-tertiary" : "stroke-border-hairline"}
                />
                {panel.ticks && (
                  <text
                    data-part="tick"
                    x={panel.left + margin - 6}
                    y={y + 4}
                    textAnchor="end"
                    fontSize={SIZE.tick}
                    className="fill-text-tertiary font-mono"
                  >
                    {tick.label}
                  </text>
                )}
              </g>
            );
          })}
          {panel.segments.map((segment) => (
            <line
              key={`${String(segment.x1)}-${String(segment.x2)}`}
              data-segment={panel.label}
              {...segment}
              strokeWidth="2"
              className={STROKE[panel.series]}
            />
          ))}
          {panel.points.map((point, at) => (
            <g key={point.label}>
              {point.value ? (
                <>
                  <circle
                    data-point={`${panel.label} ${point.label}`}
                    data-value={point.value.value}
                    cx={point.x}
                    cy={point.value.y}
                    r={at === panel.points.length - 1 ? 5 : 4}
                    className={FILL[panel.series]}
                  />
                  <text
                    data-part="value"
                    x={point.x}
                    y={point.value.y - 9}
                    textAnchor="middle"
                    fontSize={SIZE.value}
                    className="fill-text-primary font-mono"
                  >
                    {point.value.text}
                  </text>
                </>
              ) : (
                <GapSlot
                  x={point.x - 7}
                  y={panel.top + top}
                  width={14}
                  height={height}
                  reason={`${panel.label} ${point.label}`}
                />
              )}
              <text
                data-part="period"
                x={point.x}
                y={panel.top + top + height + 18}
                textAnchor="middle"
                fontSize={SIZE.tick}
                className="fill-text-secondary font-body"
              >
                {(panel.periodLines[at] ?? []).map((line, n) => (
                  <tspan
                    key={`${String(n)}-${line}`}
                    x={point.x}
                    y={panel.top + top + height + 18 + n * 13}
                  >
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          ))}
          <Reasons
            lines={panel.reasons}
            x={panel.left}
            y={
              panel.top +
              top +
              height +
              24 +
              Math.max(1, ...panel.periodLines.map((lines) => lines.length)) * 13
            }
          />
        </g>
      ))}
    </svg>
  );
}

function Money({ data }: { data: EarningsAgainstDebt }) {
  const [ref, width] = useFigureWidth(640);
  const comparison = data.comparison;
  const figure =
    data.periods.length === 1 ? (
      <PeriodBars data={data} width={width} />
    ) : data.periods.length === 2 && comparison ? (
      <Dumbbell
        rows={dumbbellRows(data)}
        width={width}
        periods={{ prior: comparison.from, current: comparison.to }}
        unit={data.unit}
        legend={false}
      />
    ) : (
      <PeriodLines data={data} width={width} />
    );
  return (
    <div ref={ref} className="w-full min-w-0">
      {figure}
    </div>
  );
}

/** Leverage: the overview Slope on its own scale with the stated values, or figures and a MiniSlope. */
function Leverage({ leverage, basis }: { leverage: LeverageSeries; basis: string | null }) {
  const [ref, width] = useFigureWidth(408);
  const marks = leverageMarks(leverage);
  const word = leverageWord(leverage);
  const gaps = leverageGaps(leverage);
  // One stated figure is written, not drawn: a slope needs two.
  const drawn = marks.length > 1 && contiguous(leverage.values);
  const reading = leverageReading(leverage);
  return (
    <div ref={ref} data-leverage className="flex w-full min-w-0 flex-col gap-2">
      <p className="text-caption font-medium text-text-primary">
        {leverage.label}
        <span className="font-normal text-text-tertiary"> · own scale</span>
      </p>
      {drawn && width >= SLOPE_WIDTH && (
        <Slope marks={marks} tone={leverage.tone} suffix="x" label={reading} />
      )}
      {(!drawn || width < SLOPE_WIDTH) && (
        <div className="flex flex-col gap-2">
          <ul aria-label={reading} className="flex flex-wrap gap-x-4 gap-y-1 text-small">
            {marks.map((mark) => (
              <li key={mark.label} className="flex items-baseline gap-1.5">
                <span className="text-caption text-text-secondary">{mark.label}</span>
                <Figure>{mark.text}</Figure>
              </li>
            ))}
          </ul>
          {drawn && marks.length > 1 && (
            <div className="max-w-60">
              <MiniSlope marks={marks} tone={leverage.tone} label={reading} />
            </div>
          )}
        </div>
      )}
      {leverage.change !== null && (
        <p data-change className="text-small text-text-secondary">
          <Figure className="font-medium">{`${changeText(leverage.change)}x`}</Figure>
          {word && (
            <span
              data-tone={word}
              className={cx(
                "font-medium",
                word === "worse" ? "text-warning-text" : "text-success-text",
              )}
            >
              {` · ${word}`}
            </span>
          )}
        </p>
      )}
      {gaps.map((gap) => (
        <p key={gap} data-gap-reason className="text-caption wrap-anywhere text-gap-text">
          {gap}
        </p>
      ))}
      {basis && (
        <p data-basis className="text-caption wrap-anywhere text-text-tertiary">
          {basis}
        </p>
      )}
    </div>
  );
}

function legendOf(data: EarningsAgainstDebt) {
  const labels = data.periods.map((period) => period.label);
  const debt = data.measures.some((measure) => measure.key === "grossDebt");
  const earnings = data.measures.some((measure) => measure.key !== "grossDebt");
  const latest = data.comparison?.to ?? labels[0] ?? "";
  const series =
    labels.length > 2 || (labels.length === 2 && !data.comparison)
      ? { earnings: "Earnings", debt: "Gross debt" }
      : { earnings: `${latest} earnings`, debt: `${latest} gross debt` };
  const gap = data.measures.some((measure) =>
    measure.values.some((value) => value.cell?.kind !== "number"),
  );
  return [
    ...(data.comparison && labels.length === 2
      ? [{ tone: "prior" as const, text: data.comparison.from }]
      : []),
    ...(earnings ? [{ tone: "primary" as const, text: series.earnings }] : []),
    ...(debt ? [{ tone: "secondary" as const, text: series.debt }] : []),
    ...(data.leverage?.tone === "worse"
      ? [{ tone: "signal" as const, text: "Leverage, worse" }]
      : []),
    ...(gap ? [{ tone: "gap" as const, text: "Not stated" }] : []),
  ];
}

/** Tile 1: earnings and gross debt on one US$ scale from zero, and leverage on its own scale. */
export function EarningsDebtTile({ lead }: { lead: LeadProps }) {
  const data = earningsAgainstDebt(lead.entry);
  if (!data)
    return (
      <GapTile span={12} label={LABEL} kicker={LABEL}>
        {figureGap(lead.entry, "earnings") ?? ""}
      </GapTile>
    );
  const labels = data.periods.map((period) => period.label);
  return (
    <FigureTile
      props={lead}
      span={12}
      label={LABEL}
      kicker={`${KICKER} · ${data.unit}, ${periodSpan(labels)}`}
      title={LABEL}
      line={data.tableLine}
      source="the earnings and debt figures"
      legend={legendOf(data)}
      table={earningsTable(data)}
    >
      <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_408px]">
        {data.measures.length ? (
          <Money data={data} />
        ) : (
          <GapNote>{data.absent.map((item) => item.reason).join(" ")}</GapNote>
        )}
        {data.leverage ? (
          <Leverage leverage={data.leverage} basis={data.leverageBasis} />
        ) : (
          <p className="text-caption text-gap-text">Total debt / EBITDA is not in the handoff.</p>
        )}
      </div>
      {data.measures.length > 0 && data.absent.length > 0 && (
        <p data-absent className="text-caption wrap-anywhere text-gap-text">
          {data.absent.map((item) => item.reason).join(" ")}
        </p>
      )}
    </FigureTile>
  );
}
