import { cx } from "@/utils/cx";
import { GapNote, Tile } from "../../overview/Tile";
import { FigureTile, ScrollFigure } from "../kit/LeadFrame";
import type { LeadProps } from "../types";
import {
  BRIDGE,
  amountText,
  bridgeGeometry,
  bridgeReading,
  bridgeTable,
  bridgeTitle,
  largestStep,
  signed,
  type BridgeBar,
  type BridgeGeometry,
} from "./bridgeGeometry";
import { ebitdaBridge, type EbitdaBridge } from "./legacyData";
import { readerSafe } from "./ladderGeometry";

const LABEL = "EBITDA bridge";
const KICKER = "Reported to adjusted EBITDA";

/** Two short slashes across a total bar where the axis is cut. */
function BreakMark({ bar, baseX }: { bar: BridgeBar; baseX: number }) {
  const [top, bottom] = [bar.y, bar.y + BRIDGE.bar];
  const at = (offset: number) => String(baseX + offset);
  return (
    <path
      data-axis-break={bar.step.kind}
      d={`M${at(6)} ${String(bottom)} ${at(10)} ${String(top)}M${at(11)} ${String(bottom)} ${at(15)} ${String(top)}`}
      strokeWidth="1.5"
      fill="none"
      className="stroke-surface-card"
    />
  );
}

function BarRow({ bar, geometry }: { bar: BridgeBar; geometry: BridgeGeometry }) {
  const total = bar.step.kind !== "change";
  const baseline = bar.y + 12;
  const right = bar.x + bar.width;
  return (
    <g>
      <text
        x="0"
        y={baseline}
        fontSize="12"
        className={cx("font-body", total ? "fill-text-primary font-medium" : "fill-text-secondary")}
      >
        {bar.labelLines.map((line, at) => (
          <tspan key={`${String(at)}-${line}`} x="0" y={baseline + at * BRIDGE.line}>
            {line}
          </tspan>
        ))}
      </text>
      <rect
        data-step={bar.step.kind}
        data-from={bar.from}
        data-to={bar.to}
        x={bar.x}
        y={bar.y}
        width={Math.max(bar.width, 1)}
        height={BRIDGE.bar}
        rx="2"
        className={total ? "fill-chart-1" : "fill-chart-2"}
      />
      {total && geometry.axis.truncated && <BreakMark bar={bar} baseX={geometry.baseX} />}
      <text
        x={right + 6}
        y={baseline}
        fontSize="12"
        className={cx("fill-text-primary font-mono", total && "font-medium")}
      >
        {bar.text}
      </text>
    </g>
  );
}

function Bridge({ data, geometry }: { data: EbitdaBridge; geometry: BridgeGeometry }) {
  const plotBottom = geometry.height - BRIDGE.axis;
  const { bracket } = geometry;
  const middle = bracket ? (bracket.top + bracket.bottom) / 2 : 0;
  const connectors = geometry.bars
    .slice(0, -1)
    .map((bar, at) => {
      const next = geometry.bars[at + 1];
      return next ? `M${String(bar.out)} ${String(bar.y + BRIDGE.bar)}V${String(next.y)}` : "";
    })
    .join("");
  return (
    <ScrollFigure label="EBITDA bridge figure" size="narrow">
      <svg
        viewBox={`0 0 ${String(BRIDGE.width)} ${String(geometry.height)}`}
        width="100%"
        role="img"
        aria-label={bridgeReading(data, geometry.axis)}
        className="block"
      >
        {geometry.ticks.map((tick, at) => (
          <g key={tick.value}>
            <line
              x1={tick.x}
              x2={tick.x}
              y1={BRIDGE.top - 4}
              y2={plotBottom}
              className={at === 0 ? "stroke-text-tertiary" : "stroke-border-hairline"}
            />
            <text
              x={tick.x}
              y={plotBottom + 16}
              textAnchor="middle"
              fontSize="11"
              className="fill-text-tertiary font-mono"
            >
              {tick.label}
            </text>
          </g>
        ))}
        <path
          d={connectors}
          fill="none"
          strokeWidth="1"
          strokeDasharray="2 2"
          className="stroke-connector"
        />
        {geometry.bars.map((bar) => (
          <BarRow key={`${String(bar.step.line)}-${bar.label}`} bar={bar} geometry={geometry} />
        ))}
        {bracket && data.addBacks !== null && (
          <g data-bracket="">
            <path
              d={`M${String(BRIDGE.bracketX - 6)} ${String(bracket.top)}H${String(BRIDGE.bracketX)}V${String(bracket.bottom)}H${String(BRIDGE.bracketX - 6)}`}
              fill="none"
              strokeWidth="1"
              className="stroke-text-tertiary"
            />
            <text
              x={BRIDGE.bracketX + 8}
              y={middle - 2}
              fontSize="11"
              className="fill-text-secondary font-body"
            >
              Add-backs total
            </text>
            <text
              x={BRIDGE.bracketX + 8}
              y={middle + 12}
              fontSize="12"
              className="fill-text-primary font-mono font-medium"
            >
              {signed(data.addBacks)}
              <tspan fontSize="11" className="fill-text-tertiary font-body font-normal">
                , derived
              </tspan>
            </text>
          </g>
        )}
      </svg>
    </ScrollFigure>
  );
}

/** The stated amounts when the bridge is not drawn: a plain table, gap cells hatched with the reason. */
function StatedSteps({ data }: { data: EbitdaBridge }) {
  return (
    <div className="max-w-full overflow-x-auto">
      <table className="w-full min-w-max border-collapse text-caption text-text-secondary">
        <caption className="sr-only">EBITDA bridge steps as stated, {data.unit}</caption>
        <thead>
          <tr>
            {["Step", `Amount, ${data.unit}`].map((header) => (
              <th
                key={header}
                scope="col"
                className="border-b border-border-hairline px-2 py-1.5 text-left font-medium text-text-tertiary"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.steps.map((step) => (
            <tr key={`${String(step.line)}-${step.label}`}>
              <td className="border-b border-border-hairline px-2 py-1.5 text-left">
                {readerSafe(step.label)}
              </td>
              <td className="border-b border-border-hairline px-2 py-1.5 text-right">
                {step.cell.kind === "number" ? (
                  <span className="font-mono text-text-primary tabular-nums">
                    {amountText(step)}
                  </span>
                ) : (
                  <span
                    data-gap={step.label}
                    className="gap-hatch inline-block rounded-ds-xs border border-dashed border-border-gap px-2 py-0.5 text-gap-text"
                  >
                    <span className="rounded-ds-xs bg-surface-card px-1">{amountText(step)}</span>
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Tile 4: reported EBITDA through each stated add-back to EBITDA As Defined. */
export function EbitdaBridgeTile({ lead }: { lead: LeadProps }) {
  const data = ebitdaBridge(lead.entry);
  if (!data)
    return (
      <Tile span={6} label={LABEL} kicker={KICKER} tone="gap" className="self-start">
        <GapNote>The financial foundation has no EBITDA bridge table.</GapNote>
      </Tile>
    );
  const geometry = bridgeGeometry(data);
  const common = {
    props: lead,
    span: 6 as const,
    label: LABEL,
    kicker: `${KICKER} · ${data.unit}`,
    title: bridgeTitle(data),
    line: data.tableLine,
    source: "the EBITDA bridge",
  };
  if (!geometry) {
    const mismatch = data.steps.every((step) => step.cell.kind === "number");
    return (
      <FigureTile {...common}>
        <GapNote>
          {mismatch
            ? "The bridge steps do not add up to the closing figure."
            : "The bridge is not drawn: a step is not stated as a number."}
        </GapNote>
        <StatedSteps data={data} />
      </FigureTile>
    );
  }
  const largest = largestStep(data);
  const start = geometry.ticks[0]?.label ?? "0";
  return (
    <FigureTile
      {...common}
      legend={[
        { tone: "primary", text: "Totals" },
        { tone: "secondary", text: "Add-backs" },
      ]}
      notes={[
        geometry.axis.truncated
          ? `Axis starts at ${start}, marked on the two total bars.`
          : `Axis starts at ${start}.`,
        ...(largest ? [largest] : []),
      ]}
      table={bridgeTable(data)}
    >
      <Bridge data={data} geometry={geometry} />
    </FigureTile>
  );
}
