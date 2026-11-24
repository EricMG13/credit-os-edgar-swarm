import { cx } from "@/utils/cx";
import { GapPattern } from "../../overview/figureParts";
import { Figure, GapNote, Tile } from "../../overview/Tile";
import { Derived, FigureTile, ScrollFigure } from "../kit/LeadFrame";
import { group } from "../kit/numbers";
import type { LeadProps } from "../types";
import { netDebtView, type NetDebtView } from "./legacyData";
import {
  ND,
  NL,
  adjustmentText,
  dateOf,
  eventOf,
  leverageStrip,
  liquidityLines,
  netDebtChange,
  netDebtLayout,
  netDebtNotes,
  netDebtReading,
  netDebtTable,
  netDebtTitle,
  proFormaEquation,
  readingX,
  stripReading,
  type PeriodBar,
  type ProFormaBar,
} from "./netDebtGeometry";

const LABEL = "Net debt";
export const NO_NET_DEBT = "The handoff states no net debt table.";
export const NO_STRIP = "Net debt / EBITDA is not in the handoff.";

const TICK = "fill-text-tertiary font-mono";
const GAP_ID = "net-debt-gap";
const PF_ID = "net-debt-pro-forma";

function GapSlot({ id, x, y, width }: { id: string; x: number; y: number; width: number }) {
  return (
    <rect
      data-gap={id}
      x={x + 0.5}
      y={y + 0.5}
      width={width - 1}
      height={ND.bar - 1}
      rx="2"
      fill={`url(#${GAP_ID})`}
      strokeDasharray="3 3"
      className="stroke-border-gap"
    />
  );
}

function PeriodRow({ bar }: { bar: PeriodBar }) {
  const fill = bar.kind === "prior" ? "fill-chart-3" : "fill-chart-1";
  return (
    <g data-row={bar.label}>
      <text x="0" y={bar.y + 12} fontSize="12" className="fill-text-primary font-body font-medium">
        {bar.label}
      </text>
      {bar.cash && (
        <>
          <rect
            data-cash={bar.label}
            x={bar.cash.x}
            y={bar.y + 0.5}
            width={bar.cash.width}
            height={ND.bar - 1}
            rx="2"
            className="fill-surface-selected stroke-chart-1"
          />
          {bar.cash.width >= 34 && (
            <text
              x={bar.cash.x + bar.cash.width / 2}
              y={bar.y + 12}
              textAnchor="middle"
              fontSize="11"
              className="fill-text-secondary font-body"
            >
              cash
            </text>
          )}
        </>
      )}
      {bar.net && (
        <rect
          data-bar={`${bar.label} net`}
          data-value-zero={bar.net.zero ? "" : undefined}
          x={bar.net.x}
          y={bar.y}
          width={bar.net.width}
          height={ND.bar}
          rx={Math.min(2, bar.net.width / 2)}
          className={fill}
        />
      )}
      {bar.net?.zero && (
        <line
          data-zero={bar.label}
          x1={bar.net.x}
          x2={bar.net.x}
          y1={bar.y - 2}
          y2={bar.y + ND.bar + 2}
          strokeWidth="2"
          className={bar.kind === "prior" ? "stroke-chart-3" : "stroke-chart-1"}
        />
      )}
      {bar.netGap && (
        <GapSlot id={`${bar.label} net`} x={bar.netGap.x} y={bar.y} width={bar.netGap.width} />
      )}
      {bar.cashGap && (
        <GapSlot id={`${bar.label} cash`} x={bar.cashGap.x} y={bar.y} width={bar.cashGap.width} />
      )}
      {bar.gross !== null && (
        <line
          data-gross={bar.label}
          x1={bar.gross}
          x2={bar.gross}
          y1={bar.y - 4}
          y2={bar.y + ND.bar + 4}
          strokeWidth="1.5"
          className="stroke-text-primary"
        />
      )}
      <text
        x={readingX(bar.reading)}
        y={bar.y + 34}
        fontSize="12"
        className="fill-text-secondary font-mono"
      >
        {bar.reading}
      </text>
    </g>
  );
}

function ProFormaRow({ bar }: { bar: ProFormaBar }) {
  return (
    <g data-row="Pro forma">
      <text x="0" y={bar.y + 12} fontSize="12" className="fill-warning-text font-body font-medium">
        Pro forma
      </text>
      {bar.whole && (
        <rect
          data-bar="Pro forma"
          x={bar.whole.x}
          y={bar.y}
          width={bar.whole.width}
          height={ND.bar}
          rx="2"
          className="fill-warning-mark"
        />
      )}
      {bar.base && (
        <rect
          data-bar="Pro forma base"
          x={bar.base.x}
          y={bar.y}
          width={bar.base.width}
          height={ND.bar}
          rx="2"
          className="fill-chart-1"
        />
      )}
      {bar.change && (
        <rect
          data-bar="Pro forma change"
          x={bar.change.x + 0.75}
          y={bar.y + 0.75}
          width={Math.max(0, bar.change.width - 1.5)}
          height={ND.bar - 1.5}
          rx="2"
          fill={`url(#${PF_ID})`}
          strokeWidth="1.5"
          strokeDasharray={bar.change.reduces ? "3 2" : undefined}
          className="stroke-warning-mark"
        />
      )}
      <line
        data-pro-forma-end
        x1={bar.end}
        x2={bar.end}
        y1={bar.y - 4}
        y2={bar.y + ND.bar + 4}
        strokeWidth="2"
        className="stroke-warning-mark"
      />
      <text
        x={readingX(bar.reading)}
        y={bar.y + 34}
        fontSize="12"
        className="fill-text-secondary font-mono"
      >
        {bar.reading}
      </text>
    </g>
  );
}

function Bars({ view }: { view: NetDebtView }) {
  const layout = netDebtLayout(view);
  const crosses = (layout.ticks[0]?.value ?? 0) < 0;
  return (
    <ScrollFigure label="Net debt figure" size="narrow">
      <svg
        viewBox={`0 0 ${String(ND.width)} ${String(layout.height)}`}
        width="100%"
        role="img"
        aria-label={netDebtReading(view, crosses)}
        className="block"
      >
        <defs>
          <GapPattern id={GAP_ID} />
          <pattern
            id={PF_ID}
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect width="6" height="6" className="fill-warning-fill" />
            <line x1="0" y1="0" x2="0" y2="6" strokeWidth="2" className="stroke-warning-mark" />
          </pattern>
        </defs>
        {layout.ticks.map((tick) => (
          <g key={tick.value}>
            <line
              x1={tick.x}
              x2={tick.x}
              y1="2"
              y2={layout.axisY}
              className={tick.value === 0 ? "stroke-border-container" : "stroke-border-hairline"}
            />
            <text
              x={tick.x}
              y={layout.axisY + 16}
              textAnchor={tick.x > ND.width - 24 ? "end" : "middle"}
              fontSize="11"
              className={TICK}
            >
              {tick.label}
            </text>
          </g>
        ))}
        {layout.bars.map((bar) => (
          <PeriodRow key={bar.label} bar={bar} />
        ))}
        {layout.proForma && <ProFormaRow bar={layout.proForma} />}
      </svg>
    </ScrollFigure>
  );
}

function Strip({ view }: { view: NetDebtView }) {
  const strip = leverageStrip(view);
  if (!strip) return <p className="text-caption text-gap-text">{NO_STRIP}</p>;
  const start = strip.axis.label(strip.axis.lo);
  return (
    <div className="flex flex-col gap-1.5">
      <h4 className="text-caption font-medium text-text-primary">
        {"Net debt / EBITDA "}
        <span data-axis-start className="font-normal text-text-tertiary">
          {strip.fromZero ? "· own scale, from zero" : `· own scale, from ${start}, not from zero`}
        </span>
      </h4>
      <ScrollFigure label="Net debt to EBITDA figure" size="narrow">
        <svg
          viewBox={`0 0 ${String(NL.width)} ${String(strip.height)}`}
          width="100%"
          role="img"
          aria-label={stripReading(strip)}
          className="block"
        >
          {strip.ticks.map((tick) => (
            <g key={tick.value}>
              <line
                x1={tick.x}
                x2={tick.x}
                y1="2"
                y2={strip.axisY}
                className="stroke-border-hairline"
              />
              <text
                x={tick.x}
                y={strip.axisY + 16}
                textAnchor="middle"
                fontSize="11"
                className={TICK}
              >
                {tick.label}
              </text>
            </g>
          ))}
          {strip.marks.map((mark) => {
            const pro = mark.kind === "proForma";
            return (
              <g key={mark.label} data-strip={mark.label}>
                <text
                  x="0"
                  y={mark.y + 4}
                  fontSize="12"
                  className={cx(
                    "font-body",
                    pro ? "fill-warning-text font-medium" : "fill-text-secondary",
                  )}
                >
                  {mark.label}
                </text>
                {mark.value ? (
                  <>
                    {mark.kind === "prior" ? (
                      <circle
                        cx={mark.value.x}
                        cy={mark.y}
                        r="4.5"
                        strokeWidth="2"
                        className="fill-surface-card stroke-chart-3"
                      />
                    ) : (
                      <circle
                        cx={mark.value.x}
                        cy={mark.y}
                        r="5"
                        className={pro ? "fill-warning-mark" : "fill-chart-1"}
                      />
                    )}
                    <text
                      x={mark.value.labelX}
                      y={mark.y + 4}
                      textAnchor={mark.value.anchor}
                      fontSize="12"
                      className={cx(
                        "font-mono",
                        pro ? "fill-warning-text font-medium" : "fill-text-primary",
                      )}
                    >
                      {mark.value.text}
                    </text>
                  </>
                ) : (
                  <text x={NL.x0} y={mark.y + 4} fontSize="11" className="fill-gap-text font-body">
                    {mark.reason}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </ScrollFigure>
    </div>
  );
}

function Liquidity({ view }: { view: NetDebtView }) {
  const lines = liquidityLines(view);
  if (!lines.length) return null;
  return (
    <div role="group" aria-label="Liquidity" className="flex flex-col gap-1 text-caption">
      <p className="text-text-secondary">Liquidity: cash plus undrawn committed facilities</p>
      <ul className="flex flex-col gap-0.5">
        {lines.map((line) => (
          <li
            key={line.label}
            className="flex flex-wrap items-baseline gap-x-2 text-text-secondary"
          >
            <span className="w-16 flex-none text-text-primary">{line.label}</span>
            <Figure>{line.cash}</Figure>
            <span>+</span>
            <Figure>{line.undrawn}</Figure>
            {line.total !== null && (
              <>
                <span>=</span>
                <Figure className="font-medium">{line.total}</Figure>
                <Derived />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Direction({ view }: { view: NetDebtView }) {
  const moved = netDebtChange(view);
  if (!moved) return null;
  return (
    <p data-direction={moved.word} className="text-caption text-text-secondary">
      {`Net debt ${moved.word} `}
      <Figure>{group(moved.change.replace(/^-/, ""))}</Figure>
      {` from ${moved.from.label} to ${moved.to.label}`}
      <Derived />
      {moved.tone && (
        <span
          className={cx(
            "font-medium",
            moved.tone === "worse" ? "text-warning-text" : "text-success-text",
          )}
        >
          {` · ${moved.tone}`}
        </span>
      )}
    </p>
  );
}

/** Tile 3: net debt with cash to gross debt per period, and the pro forma where a row states it. */
export function NetDebtTile({ lead }: { lead: LeadProps }) {
  const view = netDebtView(lead.entry);
  if (!view)
    return (
      <Tile span={5} label={LABEL} kicker={LABEL} tone="gap" className="self-start">
        <GapNote>{NO_NET_DEBT}</GapNote>
      </Tile>
    );
  const layout = netDebtLayout(view);
  const pf = view.proForma;
  const periods = view.periods.map((p) => p.label).join(" → ");
  return (
    <FigureTile
      props={lead}
      span={5}
      label={LABEL}
      kicker={`${LABEL} · ${view.unit}, ${periods}${pf ? ", with the pro forma" : ""}`}
      title={netDebtTitle(view)}
      line={view.tableLine}
      source="net debt"
      legend={[
        ...view.periods.map((p, at) => ({
          tone: at === view.periods.length - 1 ? ("primary" as const) : ("prior" as const),
          text: `${p.label} net debt`,
        })),
        { tone: "undated" as const, text: "Cash, to gross debt" },
        ...(pf ? [{ tone: "signal" as const, text: "Pro forma" }] : []),
      ]}
      notes={netDebtNotes(view, layout)}
      table={netDebtTable(view)}
    >
      <Bars view={view} />
      {pf && (
        <p data-pro-forma className="text-caption wrap-anywhere text-text-secondary">
          <span className="font-medium text-warning-text">Pro forma</span>
          {` ${eventOf(pf)}, ${dateOf(pf)}: ${proFormaEquation(view.periods.at(-1), pf)}.`}
        </p>
      )}
      <Direction view={view} />
      <Strip view={view} />
      {view.otherAdjustments.length > 0 && (
        <div className="flex flex-col gap-1 text-caption">
          <p className="text-text-secondary">Other stated adjustments</p>
          <ul data-adjustments className="flex flex-col gap-0.5 text-text-secondary">
            {view.otherAdjustments.map((item) => (
              <li key={item.line} className="wrap-anywhere">
                {adjustmentText(item)}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Liquidity view={view} />
    </FigureTile>
  );
}
