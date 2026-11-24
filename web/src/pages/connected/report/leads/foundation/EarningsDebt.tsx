import { cx } from "@/utils/cx";
import { GapPattern } from "../../overview/figureParts";
import { GapNote, Tile } from "../../overview/Tile";
import { FigureTile, ScrollFigure } from "../kit/LeadFrame";
import type { LeadProps } from "../types";
import {
  ED,
  LEV,
  dumbbellLayout,
  earningsReading,
  earningsTable,
  earningsTitle,
  leverageLayout,
  leverageReading,
  leverageWord,
  signed,
  type DumbbellMark,
  type DumbbellRow,
  type RatioMark,
} from "./earningsDebtGeometry";
import { earningsAgainstDebt, type EarningsAgainstDebt } from "./legacyData";

const LABEL = "Earnings against debt and leverage";
export const NO_EARNINGS =
  "The handoff states no net sales and EBITDA chart data for two periods in one unit.";
const NO_MEASURES = "No earnings or debt measure is stated for both periods.";
export const NO_LEVERAGE = "Total debt / EBITDA is not in the handoff.";
const NO_RATIO = "Total debt / EBITDA is not stated as a number for either period.";
const DERIVED_NOTE =
  "Changes and growth are derived from the stated figures. Leverage is on reported EBITDA.";
const DERIVED_ONLY = "Changes and growth are derived from the stated figures.";

const TICK = "fill-text-tertiary font-mono";
const PRIOR_RING = "fill-surface-card stroke-chart-3";
const GAP_ID = "earnings-debt-gap";

function Mark({ mark, row, side }: { mark: DumbbellMark; row: DumbbellRow; side: string }) {
  if (mark.kind === "gap")
    return (
      <rect
        data-gap={`${row.label} ${side}`}
        x={mark.x}
        y={row.y - 7}
        width={ED.gapMark}
        height="14"
        rx="3"
        fill={`url(#${GAP_ID})`}
        strokeDasharray="3 3"
        className="stroke-border-gap"
      />
    );
  const current = side === "current";
  return (
    <>
      {current ? (
        <circle
          data-mark={`${row.label} ${side}`}
          cx={mark.x}
          cy={row.y}
          r="5"
          className="fill-chart-1"
        />
      ) : (
        <circle
          data-mark={`${row.label} ${side}`}
          cx={mark.x}
          cy={row.y}
          r="4.5"
          strokeWidth="2"
          className={PRIOR_RING}
        />
      )}
      <text
        x={mark.label.x}
        y={mark.label.y}
        textAnchor={mark.label.anchor}
        fontSize="12"
        className={cx(
          "font-mono",
          current ? "fill-text-primary font-medium" : "fill-text-secondary",
        )}
      >
        {mark.text}
      </text>
    </>
  );
}

function DumbbellRowMarks({ row }: { row: DumbbellRow }) {
  const { prior, current, growth } = row;
  return (
    <g data-row={row.label}>
      <text x="0" y={row.y + 4} fontSize="13" className="fill-text-primary font-body">
        {row.label}
      </text>
      {prior.kind === "value" && current.kind === "value" && (
        <line
          x1={prior.x}
          x2={current.x}
          y1={row.y}
          y2={row.y}
          strokeWidth="2"
          className="stroke-chart-1"
        />
      )}
      <Mark mark={prior} row={row} side="prior" />
      <Mark mark={current} row={row} side="current" />
      {growth?.kind === "bar" && (
        <>
          <rect
            data-growth={row.label}
            x={growth.x}
            y={row.y - 5}
            width={growth.width}
            height="10"
            rx="2"
            className="fill-chart-1"
          />
          <text
            x={growth.label.x}
            y={growth.label.y}
            textAnchor={growth.label.anchor}
            fontSize="12"
            className="fill-text-primary font-mono"
          >
            {growth.text}
          </text>
        </>
      )}
      {growth?.kind === "none" && (
        <text x={ED.g0} y={row.y + 4} fontSize="11" className="fill-gap-text font-body">
          {growth.text}
        </text>
      )}
      {row.reasonLine && (
        <text x="0" y={row.y + 20} fontSize="11" className="fill-gap-text font-body">
          {row.reasonLine}
        </text>
      )}
    </g>
  );
}

type Dumbbells = ReturnType<typeof dumbbellLayout>;

function DumbbellPanel({ data, layout }: { data: EarningsAgainstDebt; layout: Dumbbells }) {
  const top = 30;
  return (
    <ScrollFigure label="Earnings and debt figure" size="wide">
      <svg
        viewBox={`0 0 ${String(ED.width)} ${String(layout.height)}`}
        width="100%"
        role="img"
        aria-label={earningsReading(data)}
        className="block"
      >
        <defs>
          <GapPattern id={GAP_ID} />
        </defs>
        <text x={ED.x0} y="16" fontSize="11" className="fill-text-tertiary font-body">
          {`${data.unit} · one scale from zero`}
        </text>
        {layout.growthTicks.length > 0 && (
          <text x={ED.g0} y="16" fontSize="11" className="fill-text-tertiary font-body">
            Growth, derived
          </text>
        )}
        {layout.ticks.map((tick) => (
          <g key={`m${String(tick.value)}`}>
            <line
              x1={tick.x}
              x2={tick.x}
              y1={top}
              y2={layout.axisY}
              className={tick.value === 0 ? "stroke-border-container" : "stroke-border-hairline"}
            />
            <text
              x={tick.x}
              y={layout.axisY + 18}
              textAnchor="middle"
              fontSize="11"
              className={TICK}
            >
              {tick.label}
            </text>
          </g>
        ))}
        {layout.growthTicks.map((tick) => (
          <line
            key={`g${String(tick.value)}`}
            x1={tick.x}
            x2={tick.x}
            y1={top}
            y2={layout.axisY}
            className={tick.value === 0 ? "stroke-border-container" : "stroke-border-hairline"}
          />
        ))}
        {layout.growthLabels.map((tick) => (
          <text
            key={`gl${String(tick.value)}`}
            x={tick.x}
            y={layout.axisY + 18}
            textAnchor="middle"
            fontSize="11"
            className={TICK}
          >
            {tick.label}
          </text>
        ))}
        {layout.separator !== null && (
          <line
            x1="0"
            x2={ED.width}
            y1={layout.separator}
            y2={layout.separator}
            className="stroke-border-hairline"
          />
        )}
        {layout.rows.map((row) => (
          <DumbbellRowMarks key={row.key} row={row} />
        ))}
      </svg>
    </ScrollFigure>
  );
}

const INK = {
  worse: { fill: "fill-warning-mark", stroke: "stroke-warning-mark", word: "fill-warning-text" },
  better: { fill: "fill-chart-1", stroke: "stroke-chart-1", word: "fill-success-text" },
  plain: { fill: "fill-chart-1", stroke: "stroke-chart-1", word: "fill-text-primary" },
} as const;

function RatioPoint({ mark, side, fill }: { mark: RatioMark; side: string; fill: string }) {
  if (mark.kind === "gap")
    return (
      <>
        <rect
          data-gap={`leverage ${side}`}
          x={mark.x - 22}
          y={LEV.bottom - 24}
          width="44"
          height="14"
          rx="3"
          fill={`url(#${GAP_ID}-ratio)`}
          strokeDasharray="3 3"
          className="stroke-border-gap"
        />
        <text
          x={mark.x}
          y={LEV.bottom - 32}
          textAnchor="middle"
          fontSize="11"
          className="fill-gap-text font-body"
        >
          not supplied
        </text>
      </>
    );
  const current = side === "current";
  return (
    <>
      {current ? (
        <circle data-ratio={side} cx={mark.x} cy={mark.y} r="6" className={fill} />
      ) : (
        <circle
          data-ratio={side}
          cx={mark.x}
          cy={mark.y}
          r="5"
          strokeWidth="2"
          className={PRIOR_RING}
        />
      )}
      <text
        x={mark.x}
        y={mark.labelY}
        textAnchor="middle"
        fontSize={current ? 14 : 13}
        className={cx(
          "font-mono",
          current ? "fill-text-primary font-medium" : "fill-text-secondary",
        )}
      >
        {mark.text}
      </text>
    </>
  );
}

type LeverageView = NonNullable<ReturnType<typeof leverageLayout>>;

function LeveragePanel({
  data,
  leverage,
  layout,
}: {
  data: EarningsAgainstDebt;
  leverage: NonNullable<EarningsAgainstDebt["leverage"]>;
  layout: LeverageView;
}) {
  const start = layout.axis.label(layout.axis.lo);
  const word = leverageWord(leverage);
  const ink = INK[word === "worse" || word === "better" ? word : "plain"];
  return (
    <svg
      viewBox={`0 0 ${String(LEV.width)} ${String(LEV.height)}`}
      width="100%"
      role="img"
      aria-label={leverageReading(leverage, start, layout.fromZero)}
      className="block"
    >
      <defs>
        <GapPattern id={`${GAP_ID}-ratio`} />
      </defs>
      <text x="0" y="16" fontSize="12" className="fill-text-primary font-body font-medium">
        Total debt / EBITDA
      </text>
      <text data-axis-start x="0" y="32" fontSize="11" className="fill-text-tertiary font-body">
        {layout.fromZero ? "own scale, from zero" : `own scale, from ${start}, not from zero`}
      </text>
      {layout.ticks.map((tick) => (
        <g key={tick.value}>
          <line
            x1={LEV.gridFrom}
            x2={LEV.width}
            y1={tick.y}
            y2={tick.y}
            className={
              tick.value === layout.axis.lo ? "stroke-border-container" : "stroke-border-hairline"
            }
          />
          <text x="0" y={tick.y + 4} fontSize="11" className={TICK}>
            {tick.label}
          </text>
        </g>
      ))}
      {!layout.fromZero && (
        <path
          data-axis-break
          d={`M${String(LEV.gridFrom - 4)} ${String(LEV.bottom + 9)} l8 -5 M${String(LEV.gridFrom - 4)} ${String(LEV.bottom + 14)} l8 -5`}
          fill="none"
          strokeWidth="1.25"
          className="stroke-text-tertiary"
        />
      )}
      {layout.arrow && (
        <>
          <line {...layout.arrow.line} strokeWidth="2" className={ink.stroke} />
          <polygon data-arrow points={layout.arrow.head} className={ink.fill} />
        </>
      )}
      <RatioPoint mark={layout.prior} side="prior" fill={ink.fill} />
      <RatioPoint mark={layout.current} side="current" fill={ink.fill} />
      {[data.priorLabel, data.currentLabel].map((period, at) => (
        <text
          key={period}
          x={at === 0 ? LEV.prior : LEV.current}
          y={LEV.bottom + 24}
          textAnchor="middle"
          fontSize="12"
          className="fill-text-secondary font-body"
        >
          {period}
        </text>
      ))}
      {leverage.change !== null && (
        <text
          data-direction={word ?? ""}
          x={LEV.width / 2 + 20}
          y={LEV.bottom + 50}
          textAnchor="middle"
          fontSize="12"
          className="fill-text-secondary font-body"
        >
          <tspan className="fill-text-primary font-mono">{`${signed(leverage.change)}x`}</tspan>
          {" derived"}
          {word && <tspan className={cx("font-medium", ink.word)}>{` · ${word}`}</tspan>}
        </text>
      )}
    </svg>
  );
}

function leverageNotes(data: EarningsAgainstDebt, layout: LeverageView | null) {
  if (!layout) return [];
  const sides = [
    [data.priorLabel, layout.prior],
    [data.currentLabel, layout.current],
  ] as const;
  return sides.flatMap(([period, mark]) =>
    mark.kind === "gap" ? [`Total debt / EBITDA, ${period} not supplied: ${mark.reason}.`] : [],
  );
}

/** Tile 1: the four money measures as dumbbells on one scale from zero, and leverage on its own axis. */
export function EarningsDebtTile({ lead }: { lead: LeadProps }) {
  const data = earningsAgainstDebt(lead.entry);
  if (!data)
    return (
      <Tile span={12} label={LABEL} kicker={LABEL} tone="gap">
        <GapNote>{NO_EARNINGS}</GapNote>
      </Tile>
    );
  const layout = data.measures.length ? dumbbellLayout(data) : null;
  const reported = data.measures.some((m) => m.key === "reportedEbitda");
  const ratio = data.leverage ? leverageLayout(data.leverage) : null;
  const notes = [
    ...(layout?.rows.flatMap((row) => row.longReasons) ?? []),
    ...leverageNotes(data, ratio),
  ];
  return (
    <FigureTile
      props={lead}
      span={12}
      label={LABEL}
      kicker={`${LABEL} · ${data.unit}, ${data.priorLabel} → ${data.currentLabel}`}
      title={earningsTitle(data)}
      line={data.tableLine}
      source="the earnings and debt figures"
      legend={[
        { tone: "prior", text: data.priorLabel },
        { tone: "primary", text: data.currentLabel },
      ]}
      notes={notes}
      table={earningsTable(data)}
    >
      <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,800fr)_minmax(0,296fr)] lg:gap-6">
        {layout ? <DumbbellPanel data={data} layout={layout} /> : <GapNote>{NO_MEASURES}</GapNote>}
        {!data.leverage ? (
          <GapNote>{NO_LEVERAGE}</GapNote>
        ) : ratio ? (
          <LeveragePanel data={data} leverage={data.leverage} layout={ratio} />
        ) : (
          <GapNote>{NO_RATIO}</GapNote>
        )}
      </div>
      {data.absent.length > 0 && (
        <p data-absent className="text-caption wrap-anywhere text-gap-text">
          {`Not in this handoff: ${data.absent.map((item) => item.reason).join(" ")}`}
        </p>
      )}
      {data.measures.length > 0 && (
        <p className="text-caption text-text-secondary">{reported ? DERIVED_NOTE : DERIVED_ONLY}</p>
      )}
    </FigureTile>
  );
}
