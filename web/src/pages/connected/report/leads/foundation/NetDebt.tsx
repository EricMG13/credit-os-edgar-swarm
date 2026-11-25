import { cx } from "@/utils/cx";
import { DotStrip } from "../../overview/marks";
import { Figure, Well } from "../../overview/Tile";
import { FigureTile, GapTile } from "../kit/LeadFrame";
import { GapSlot, LINE, SIZE, useFigureWidth } from "../kit/marks";
import { Grid, TickLabels } from "../kit/marks/parts";
import { safeText } from "../kit/reader";
import type { LeadProps } from "../types";
import { figureGap, netDebtView, type NetDebtView, type ProForma } from "./foundationData";
import {
  ADJUSTMENT_ORDER,
  adjacent,
  adjustmentFacts,
  barsLayout,
  barsReading,
  liquidityLines,
  netDebtTable,
  proFormaOf,
  stripEntries,
  stripGaps,
  stripMarks,
  stripReading,
  type LiquidityLine,
  type NetBar,
  type Stated,
} from "./netDebtGeometry";

const LABEL = "Net debt";
/** Below this measured width the overview DotStrip's fixed text would shrink under 11 px. */
const STRIP_WIDTH = 408;

const NET_FILL = {
  prior: "fill-chart-3",
  current: "fill-chart-1",
  proForma: "fill-warning-mark",
} as const;
const CASH = {
  prior: "fill-surface-card stroke-chart-3",
  current: "fill-surface-selected stroke-chart-1",
  proForma: "",
} as const;

function BarRow({ bar, x }: { bar: NetBar; x: (value: number) => number }) {
  const pro = bar.kind === "proForma";
  return (
    <g data-row={bar.label}>
      <text
        data-part="label"
        x="0"
        y={bar.top + 12}
        fontSize={SIZE.label}
        className={cx("font-body font-medium", pro ? "fill-warning-text" : "fill-text-primary")}
      >
        {bar.label}
      </text>
      {bar.net && (
        <rect
          data-bar={bar.label}
          data-value={bar.net.value}
          {...(pro ? { "data-pro-forma": "" } : {})}
          x={bar.net.x}
          y={bar.barY}
          width={Math.max(bar.net.width, 1.5)}
          height="16"
          rx={Math.min(2, bar.net.width / 2)}
          className={NET_FILL[bar.kind]}
        />
      )}
      {bar.seam !== null && (
        <line
          data-seam={bar.seam}
          x1={bar.seam}
          x2={bar.seam}
          y1={bar.barY}
          y2={bar.barY + 16}
          strokeWidth="2"
          className="stroke-surface-card"
        />
      )}
      {bar.cash && (
        <rect
          data-cash={bar.label}
          x={bar.cash.x + 0.5}
          y={bar.barY + 0.5}
          width={Math.max(bar.cash.width - 1, 1)}
          height="15"
          rx="2"
          className={CASH[bar.kind]}
        />
      )}
      {bar.netGap && (
        <GapSlot
          x={bar.netGap.x}
          y={bar.barY + 1}
          width={bar.netGap.width}
          height={14}
          reason={bar.netGap.reason}
        />
      )}
      {bar.cashGap && (
        <GapSlot
          x={bar.cashGap.x}
          y={bar.barY + 1}
          width={bar.cashGap.width}
          height={14}
          reason={bar.cashGap.reason}
        />
      )}
      {bar.gross !== null && (
        <line
          data-gross={bar.label}
          x1={bar.gross}
          x2={bar.gross}
          y1={bar.barY - 3}
          y2={bar.barY + 19}
          strokeWidth="1.5"
          className="stroke-text-primary"
        />
      )}
      <text
        data-part="reading"
        x={x(0) < 1 ? 0 : x(0)}
        y={bar.barY + 16 + 15}
        fontSize={SIZE.label}
        className={cx("font-body", bar.netGap ? "fill-gap-text" : "fill-text-secondary")}
      >
        {bar.reading.map((line, at) => (
          <tspan
            key={`${String(at)}-${line}`}
            x={x(0) < 1 ? 0 : x(0)}
            y={bar.barY + 31 + at * LINE}
          >
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

function Bars({ view, proForma }: { view: NetDebtView; proForma: ProForma | null }) {
  const [ref, width] = useFigureWidth(412);
  const layout = barsLayout(view, proForma, width);
  return (
    <div ref={ref} className="w-full min-w-0">
      <svg
        viewBox={`0 0 ${String(width)} ${String(layout.height)}`}
        width="100%"
        role="img"
        aria-label={barsReading(view, proForma)}
        data-layout={layout.beside ? "wide" : "narrow"}
        className="block"
      >
        <Grid
          ticks={layout.ticks}
          x={layout.x}
          strong={0}
          bands={layout.bars.map((bar) => [bar.barY - 3, bar.barY + 19] as const)}
        />
        {layout.bars.map((bar) => (
          <BarRow key={bar.label} bar={bar} x={layout.x} />
        ))}
        <TickLabels ticks={layout.ticks} x={layout.x} y={layout.plotBottom + 16} width={width} />
      </svg>
    </div>
  );
}

/** Net debt / EBITDA: the overview DotStrip, FY → FY → pro forma, or the figures where it cannot fit. */
function Strip({ view, proForma }: { view: NetDebtView; proForma: ProForma | null }) {
  const [ref, width] = useFigureWidth(412);
  const entries = stripEntries(view, proForma);
  const marks = stripMarks(entries);
  if (!marks.length && entries.every((entry) => entry.cell === null)) return null;
  const drawn = marks.length > 1 && adjacent(entries) && width >= STRIP_WIDTH;
  const pro = entries.some((entry) => entry.proForma && entry.cell?.kind === "number");
  const reading = stripReading(entries);
  return (
    <div ref={ref} className="flex w-full min-w-0 flex-col gap-1.5">
      <h4 className="text-caption font-medium text-text-primary">
        Net debt / EBITDA
        <span className="font-normal text-text-tertiary"> · own scale</span>
      </h4>
      {drawn ? (
        // The pro forma mark takes the signal colour, with its word "Pro forma" as its row's label.
        <DotStrip marks={marks} tone={pro ? "worse" : "none"} suffix="x" label={reading} />
      ) : (
        <ul aria-label={reading} className="flex flex-wrap gap-x-4 gap-y-1 text-small">
          {marks.map((mark) => (
            <li key={mark.label} className="flex items-baseline gap-1.5">
              <span
                className={cx(
                  "text-caption",
                  mark.label === "Pro forma"
                    ? "font-medium text-warning-text"
                    : "text-text-secondary",
                )}
              >
                {mark.label}
              </span>
              <Figure>{mark.text}</Figure>
            </li>
          ))}
        </ul>
      )}
      {stripGaps(entries).map((gap) => (
        <p key={gap} className="text-caption wrap-anywhere text-gap-text">
          {gap}
        </p>
      ))}
    </div>
  );
}

/** Every stated adjustment, in handoff order, as written: none is chosen or ranked. */
function Adjustments({ items }: { items: readonly ProForma[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      <h4 className="text-caption font-medium text-text-primary">
        Stated adjustments
        <span className="font-normal text-text-tertiary">{` · ${ADJUSTMENT_ORDER}`}</span>
      </h4>
      <ul data-adjustments className="flex flex-col gap-1.5">
        {items.map((item) => {
          const [date, ...figures] = adjustmentFacts(item);
          return (
            <li key={item.line} className="flex flex-col text-caption wrap-anywhere">
              <span className="text-text-primary">{safeText(item.event)}</span>
              <span className="text-text-secondary">
                {date}
                {figures.map((figure, at) => (
                  <span key={`${String(at)}-${figure}`}>
                    {" · "}
                    <Figure>{figure}</Figure>
                  </span>
                ))}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** A stated figure in mono; a gap or words as written, in the gap ink. */
function Value({ value, strong = false }: { value: Stated; strong?: boolean }) {
  return value.number ? (
    <Figure className={cx(strong && "font-medium")}>{value.text}</Figure>
  ) : (
    <span className="text-gap-text">{value.text}</span>
  );
}

/** Cash and undrawn facilities as stated; one line when both are the same stated gap. */
function Parts({ line }: { line: LiquidityLine }) {
  const { cash, undrawn } = line;
  if (!cash && !undrawn) return null;
  if (cash && undrawn && !cash.number && !undrawn.number && cash.text === undrawn.text)
    return <span className="text-gap-text">{cash.text}</span>;
  const missing = { text: "not stated", number: false };
  return (
    <span>
      {"cash "}
      <Value value={cash ?? missing} />
      {" · undrawn committed facilities "}
      <Value value={undrawn ?? missing} />
    </span>
  );
}

/** The stated liquidity per period: the handoff's own total where it writes one, and its parts. */
function Liquidity({ view }: { view: NetDebtView }) {
  const lines = liquidityLines(view);
  if (!lines.length) return null;
  const total = view.liquidityTotal?.label;
  return (
    <Well>
      <div role="group" aria-label="Liquidity" className="flex flex-col gap-1.5 text-caption">
        <p className="font-medium text-text-primary">
          Liquidity
          {total && <span className="font-normal text-text-tertiary">{` · ${total}`}</span>}
        </p>
        <ul className="flex flex-col gap-1">
          {lines.map((line) => (
            <li
              key={line.label}
              data-liquidity={line.label}
              className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 text-text-secondary"
            >
              <span className="w-16 flex-none text-text-primary">{line.label}</span>
              {line.total && <Value value={line.total} strong />}
              <Parts line={line} />
            </li>
          ))}
        </ul>
      </div>
    </Well>
  );
}

function legendOf(view: NetDebtView, proForma: ProForma | null) {
  const labels = view.periods.map((p) => p.label);
  const earlier = labels.slice(0, -1);
  const latest = labels.at(-1);
  const gap = view.periods.some((p) => [p.net, p.cash, p.gross].some((c) => c.kind !== "number"));
  return [
    ...(earlier.length ? [{ tone: "prior" as const, text: `${earlier.join(", ")} net debt` }] : []),
    ...(latest ? [{ tone: "primary" as const, text: `${latest} net debt` }] : []),
    { tone: "undated" as const, text: "Cash, to gross debt" },
    ...(proForma ? [{ tone: "signal" as const, text: "Pro forma net debt" }] : []),
    ...(gap ? [{ tone: "gap" as const, text: "Not stated" }] : []),
  ];
}

/** Tile 3: net debt per stated period with cash to gross debt, the stated adjustments, liquidity. */
export function NetDebtTile({ lead }: { lead: LeadProps }) {
  const view = netDebtView(lead.entry);
  if (!view)
    return (
      <GapTile span={5} label={LABEL} kicker={LABEL}>
        {figureGap(lead.entry, "netDebt") ?? ""}
      </GapTile>
    );
  const proForma = proFormaOf(view);
  const listed = proForma ? view.adjustments.length > 1 : view.adjustments.length > 0;
  const none = view.noAdjustmentsWords;
  return (
    <FigureTile
      props={lead}
      span={5}
      label={LABEL}
      kicker={`Net debt, ${view.unit} · ${view.periods.map((p) => p.label).join(" → ")}`}
      title={LABEL}
      line={view.tableLine}
      source="net debt"
      legend={legendOf(view, proForma)}
      table={netDebtTable(view)}
    >
      <Bars view={view} proForma={proForma} />
      {listed && <Adjustments items={view.adjustments} />}
      {view.noAdjustments && none && (
        <p data-no-adjustments className="text-caption wrap-anywhere text-text-secondary">
          {[`${safeText(none.event)}.`, none.basis ?? ""].join(" ").trim()}
        </p>
      )}
      <Strip view={view} proForma={proForma} />
      <Liquidity view={view} />
    </FigureTile>
  );
}
