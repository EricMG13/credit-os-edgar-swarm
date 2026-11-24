import { useId } from "react";
import { cx } from "@/utils/cx";
import { GapPattern } from "../../overview/figureParts";
import { GapNote, Tile } from "../../overview/Tile";
import { FigureTile, ScrollFigure } from "../kit/LeadFrame";
import type { LeadProps } from "../types";
import { cashLadder, type CashLadder } from "./legacyData";
import {
  LADDER,
  ladderConnectors,
  ladderGeometry,
  ladderNotes,
  ladderReading,
  ladderTable,
  ladderTitle,
  valueText,
  type LadderGeometry,
  type LadderRow,
} from "./ladderGeometry";

const LABEL = "Cash conversion";

function RowLabel({ row }: { row: LadderRow }) {
  const level = row.step.kind === "level";
  const x = level ? 0 : LADDER.indent;
  const baseline = row.y + 10;
  return (
    <text
      x={x}
      y={baseline}
      fontSize="12"
      className={cx("font-body", level ? "fill-text-primary font-medium" : "fill-text-secondary")}
    >
      {row.labelLines.map((line, at) => (
        <tspan key={`${String(at)}-${line}`} x={x} y={baseline + at * LADDER.line}>
          {at === 0 && !level ? `− ${line}` : line}
        </tspan>
      ))}
      {row.tag && (
        <tspan
          x={x}
          y={baseline + row.labelLines.length * LADDER.line}
          fontSize="11"
          className="fill-text-tertiary font-normal"
        >
          {row.tag}
        </tspan>
      )}
    </text>
  );
}

function CurrentMark({ row, hatch }: { row: LadderRow; hatch: string }) {
  const { current, step } = row;
  if (current.state === "gap")
    return (
      <rect
        data-gap={step.key}
        x={LADDER.plotLeft + 0.5}
        y={row.y + 0.5}
        width={LADDER.plotRight - LADDER.plotLeft - 1}
        height={LADDER.bar - 1}
        rx="2"
        fill={`url(#${hatch})`}
        strokeDasharray="3 3"
        className="stroke-border-gap"
      />
    );
  if (current.state === "unplaced") return null;
  const { span } = current;
  const remainder = step.key === "remainder";
  return (
    <rect
      data-step={step.key}
      data-from={span.from}
      data-to={span.to}
      x={span.x}
      y={row.y}
      width={Math.max(span.width, 1)}
      height={LADDER.bar}
      rx="2"
      fill={remainder ? `url(#${hatch})` : undefined}
      strokeDasharray={remainder ? "2 2" : undefined}
      className={
        remainder ? "stroke-border-gap" : step.kind === "level" ? "fill-chart-1" : "fill-chart-2"
      }
    />
  );
}

function RowMarks({ row, hatch }: { row: LadderRow; hatch: string }) {
  const { step } = row;
  const numbers = row.y + 10;
  return (
    <g>
      <CurrentMark row={row} hatch={hatch} />
      {row.prior && (
        <rect
          data-prior={step.key}
          x={row.prior.x}
          y={row.y + LADDER.bar + 2}
          width={Math.max(row.prior.width, 1)}
          height={LADDER.priorBar}
          rx="1"
          className="fill-chart-3"
        />
      )}
      {row.mismatch && (
        <rect
          data-mismatch={step.key}
          data-from={row.mismatch.from}
          data-to={row.mismatch.to}
          x={row.mismatch.x}
          y={row.y + LADDER.bar / 2 - 3}
          width={Math.max(row.mismatch.width, 4)}
          height="6"
          fill={`url(#${hatch})`}
          className="stroke-warning-mark"
          strokeWidth="1"
        />
      )}
      {row.sub.map((line, at) => (
        <text
          key={`${String(at)}-${line}`}
          x={LADDER.plotLeft}
          y={
            row.y +
            LADDER.bar +
            (step.kind === "level" ? 2 + LADDER.priorBar : 0) +
            12 +
            at * LADDER.sub
          }
          fontSize="11"
          className={cx(
            row.current.state === "bar"
              ? "fill-text-secondary font-mono"
              : "fill-gap-text font-body",
          )}
        >
          {line}
        </text>
      ))}
      <text
        x={LADDER.currentX}
        y={numbers}
        textAnchor="end"
        fontSize={step.current.value === null ? 11 : 12}
        className={cx(
          step.current.value === null ? "fill-gap-text font-body" : "fill-text-primary font-mono",
          step.kind === "level" && "font-medium",
        )}
      >
        {valueText(step.current)}
      </text>
      <text
        x={LADDER.priorX}
        y={numbers}
        textAnchor="end"
        fontSize={step.prior.value === null ? 11 : 12}
        className={
          step.prior.value === null ? "fill-gap-text font-body" : "fill-text-secondary font-mono"
        }
      >
        {valueText(step.prior)}
      </text>
    </g>
  );
}

function Ladder({ data, geometry }: { data: CashLadder; geometry: LadderGeometry }) {
  const hatch = `ladder-gap-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const plotBottom = geometry.height - LADDER.axis;
  return (
    <ScrollFigure label="Cash conversion figure" size="wide">
      <svg
        viewBox={`0 0 ${String(LADDER.width)} ${String(geometry.height)}`}
        width="100%"
        role="img"
        aria-label={ladderReading(data, geometry.mismatch)}
        className="block"
      >
        <defs>
          <GapPattern id={hatch} />
        </defs>
        <text
          x={LADDER.currentX}
          y="16"
          textAnchor="end"
          fontSize="11"
          className="fill-text-primary font-body font-medium"
        >
          {data.currentLabel}
        </text>
        <text
          x={LADDER.priorX}
          y="16"
          textAnchor="end"
          fontSize="11"
          className="fill-text-tertiary font-body"
        >
          {data.priorLabel}
        </text>
        {geometry.ticks.map((tick) => (
          <g key={tick.value}>
            <line
              x1={tick.x}
              x2={tick.x}
              y1={LADDER.top - 6}
              y2={plotBottom}
              data-zero={tick.value === 0 ? "" : undefined}
              className={tick.value === 0 ? "stroke-text-tertiary" : "stroke-border-hairline"}
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
          d={ladderConnectors(geometry.rows).join("")}
          fill="none"
          strokeWidth="1"
          strokeDasharray="2 2"
          className="stroke-connector"
        />
        {geometry.rows.map((row) => (
          <g key={row.step.key}>
            <RowLabel row={row} />
            <RowMarks row={row} hatch={hatch} />
          </g>
        ))}
      </svg>
    </ScrollFigure>
  );
}

/** Tile 2: cash conversion from EBITDA As Defined to free cash flow after acquisitions and distributions. */
export function CashLadderTile({ lead }: { lead: LeadProps }) {
  const data = cashLadder(lead.entry);
  if (!data)
    return (
      <Tile span={7} label={LABEL} kicker={LABEL} tone="gap" className="self-start">
        <GapNote>
          The financial foundation does not state EBITDA As Defined and cash from operations in one
          unit.
        </GapNote>
      </Tile>
    );
  const geometry = ladderGeometry(data);
  return (
    <FigureTile
      props={lead}
      span={7}
      label={LABEL}
      kicker={`Cash conversion · ${data.unit}, ${data.currentLabel} from EBITDA As Defined; ${data.priorLabel} beneath`}
      title={ladderTitle(data)}
      line={data.line}
      source="cash conversion"
      legend={[
        { tone: "primary", text: `${data.currentLabel} level` },
        { tone: "prior", text: `${data.priorLabel} level` },
        { tone: "secondary", text: "Deduction" },
        { tone: "gap", text: "Derived, not itemised here" },
      ]}
      notes={ladderNotes(data, geometry)}
      table={ladderTable(data)}
    >
      <Ladder data={data} geometry={geometry} />
    </FigureTile>
  );
}
