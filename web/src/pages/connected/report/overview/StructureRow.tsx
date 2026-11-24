import { useEffect, useRef, useState } from "react";
import { unitLabel, type PublishedRun, type Snapshot } from "../../publishedReport";
import type { ReportView } from "../../reportView";
import { basisNotes, figureSource, unitOf, type FigureSource } from "./figureData";
import {
  FigureGap,
  FigureHead,
  FigureNotes,
  FigureSourceControl,
  GapPattern,
  Key,
} from "./figureParts";
import {
  STACK,
  WALL,
  stackGeometry,
  stackRows,
  wallGeometry,
  wallWidth,
  wallSlots,
  type StackRow,
} from "./structureData";
import { Figure, Tile } from "./Tile";

type RowProps = { snapshot: Snapshot; run: PublishedRun; view: ReportView };
type Ready = Extract<FigureSource, { state: "ready" }>;

const MATURITIES = "Debt maturities";
const DEBT_STACK = "Debt stack";

type WallMark = ReturnType<typeof wallGeometry>["marks"][number];

function WallMarkShape({ mark, bar }: { mark: WallMark; bar: number }) {
  const x = mark.centre - bar / 2;
  if (mark.height === null)
    return (
      <rect
        data-gap={mark.label}
        x={x + 0.5}
        y={WALL.base - WALL.gapMark}
        width={bar - 1}
        height={WALL.gapMark}
        rx="3"
        fill="url(#wall-gap)"
        strokeDasharray="3 3"
        className="stroke-border-gap"
      />
    );
  return mark.undated ? (
    <rect
      data-bar={mark.label}
      x={x + 0.75}
      y={WALL.base - mark.height + 0.75}
      width={bar - 1.5}
      height={Math.max(0.5, mark.height - 0.75)}
      rx="2.5"
      fill="url(#wall-undated)"
      strokeWidth="1.5"
      className="stroke-chart-1"
    />
  ) : (
    <rect
      data-bar={mark.label}
      x={x}
      y={WALL.base - mark.height}
      width={bar}
      height={mark.height}
      rx={Math.min(3, mark.height / 2)}
      className="fill-chart-1"
    />
  );
}

function WallLabels({ mark }: { mark: WallMark }) {
  const top = WALL.base - (mark.height ?? WALL.gapMark) - 10;
  return (
    <>
      <text
        x={mark.centre}
        y={top}
        textAnchor="middle"
        fontSize={mark.height === null ? 11 : 13}
        className={mark.height === null ? "fill-gap-text font-body" : "fill-text-primary font-mono"}
      >
        {mark.height === null ? (mark.cell ? "Not supplied" : "No row") : mark.cell?.text}
      </text>
      <text
        x={mark.centre}
        y={WALL.base + 24}
        textAnchor="middle"
        fontSize="12"
        className="fill-text-secondary font-body"
      >
        {mark.label}
      </text>
    </>
  );
}

function WallAxis({ breakAt, end }: { breakAt: number | null; end: number }) {
  if (breakAt === null)
    return <line x1="0" y1={WALL.base} x2={end} y2={WALL.base} className="stroke-connector" />;
  return (
    <>
      <line x1="0" y1={WALL.base} x2={breakAt - 6} y2={WALL.base} className="stroke-connector" />
      <line x1={breakAt + 6} y1={WALL.base} x2={end} y2={WALL.base} className="stroke-connector" />
      <path
        data-axis-break
        d={`M${String(breakAt - 9)} ${String(WALL.base + 8)} ${String(breakAt - 1)} ${String(WALL.base - 8)}M${String(breakAt + 1)} ${String(WALL.base + 8)} ${String(breakAt + 9)} ${String(WALL.base - 8)}`}
        strokeWidth="1.25"
        fill="none"
        className="stroke-text-tertiary"
      />
    </>
  );
}

function wallReading(marks: WallMark[], unit: string) {
  const parts = marks.map(
    (mark) => `${mark.label} ${mark.height === null ? "not supplied" : (mark.cell?.text ?? "")}`,
  );
  return `Debt maturing by period${unit ? `, ${unit}` : ""}: ${parts.join(", ")}.`;
}

/** The frame's width in pixels once laid out; null before then. */
function useFrameWidth() {
  const frame = useRef<HTMLDivElement>(null);
  const [measured, setMeasured] = useState<number | null>(null);
  useEffect(() => {
    const node = frame.current;
    if (!node) return;
    const observer = new ResizeObserver(([item]) => {
      setMeasured(item?.contentRect.width ?? null);
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, []);
  return { frame, width: wallWidth(measured) };
}

function MaturityWall({ source }: { source: Ready }) {
  const { frame, width } = useFrameWidth();
  const unit = unitOf(source.descriptor);
  const slots = wallSlots(source.table, source.descriptor, unit);
  if (!slots) return <FigureGap reason="The maturity schedule states no amount for any period." />;
  const { marks, bar, breakAt } = wallGeometry(slots.dated, slots.undated, width);
  const gaps = marks.filter((mark) => mark.height === null);
  const notes = [
    ...gaps.map(
      (mark) => `${mark.label}: ${mark.cell?.reason ?? "no row in the schedule for this year"}.`,
    ),
    ...basisNotes(source.table),
  ];
  return (
    <>
      <div className="flex flex-wrap items-center gap-4">
        <Key tone="primary">Dated period</Key>
        {slots.undated.length > 0 && <Key tone="undated">After the axis break: no single year</Key>}
        {gaps.length > 0 && <Key tone="gap">Not supplied</Key>}
      </div>
      <div ref={frame} className="min-w-0">
        <svg
          viewBox={`0 0 ${String(width)} ${String(WALL.height)}`}
          width="100%"
          role="img"
          aria-label={wallReading(marks, unitLabel(unit))}
        >
          <defs>
            <pattern
              id="wall-undated"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <rect width="6" height="6" className="fill-surface-selected" />
              <line x1="0" y1="0" x2="0" y2="6" strokeWidth="2" className="stroke-chart-1" />
            </pattern>
            <GapPattern id="wall-gap" />
          </defs>
          {marks.map((mark) => (
            <WallMarkShape key={mark.label} mark={mark} bar={bar} />
          ))}
          <WallAxis breakAt={breakAt} end={width} />
          {marks.map((mark) => (
            <WallLabels key={mark.label} mark={mark} />
          ))}
        </svg>
      </div>
      <FigureNotes notes={notes} />
    </>
  );
}

const RANK_FILL = new Map<boolean | null, string>([
  [true, "fill-chart-1"],
  [false, "fill-chart-2"],
  [null, "fill-chart-3"],
]);
const RANK_KEY = new Map<boolean | null, "primary" | "secondary" | "prior">([
  [true, "primary"],
  [false, "secondary"],
  [null, "prior"],
]);

function StackList({ rows }: { rows: StackRow[] }) {
  return (
    <ol className="flex min-w-0 flex-1 flex-col gap-2.5">
      {rows.map((row) => (
        <li key={row.label} className="flex flex-col gap-0.5">
          <span className="flex items-baseline justify-between gap-3">
            <Key tone={row.amount.value === null ? "gap" : (RANK_KEY.get(row.secured) ?? "prior")}>
              <span className="text-small text-text-primary">{row.label}</span>
            </Key>
            {row.amount.value !== null && (
              <Figure className="text-small font-medium">{row.amount.text}</Figure>
            )}
          </span>
          <span className="pl-4 text-caption font-normal text-text-secondary">
            {row.amount.value === null
              ? `Not supplied: ${row.amount.reason ?? "no amount in the handoff"}`
              : [
                  row.secured === null ? null : row.secured ? "Secured" : "Not secured",
                  row.leverage?.value == null ? null : `${row.leverage.text}x cumulative leverage`,
                ]
                  .filter(Boolean)
                  .join(" · ")}
          </span>
        </li>
      ))}
    </ol>
  );
}

function stackReading(rows: StackRow[], unit: string) {
  const parts = rows.map(
    (row) => `${row.label} ${row.amount.value === null ? "not supplied" : row.amount.text}`,
  );
  return `Debt by rank${unit ? `, ${unit}` : ""}, first claim first: ${parts.join(", ")}.`;
}

function CapitalStack({ source }: { source: Ready }) {
  const unit = unitOf(source.descriptor);
  const rows = stackRows(source.table, source.descriptor, unit);
  if (!rows) return <FigureGap reason="The debt stack states no amount for any facility." />;
  const { segments, height } = stackGeometry(rows);
  return (
    <>
      <div className="flex items-start gap-4">
        <svg
          viewBox={`0 0 ${String(STACK.width)} ${String(height)}`}
          width={STACK.width}
          height={height}
          role="img"
          aria-label={stackReading(rows, unitLabel(unit))}
          className="flex-none"
        >
          <defs>
            <GapPattern id="stack-gap" />
          </defs>
          {segments.map((segment) =>
            segment.amount.value === null || segment.amount.value <= 0 ? (
              <rect
                key={segment.label}
                data-gap={segment.label}
                x="0.5"
                y={segment.y + 0.5}
                width={STACK.width - 1}
                height={segment.height - 1}
                rx="2"
                fill="url(#stack-gap)"
                strokeDasharray="3 3"
                className="stroke-border-gap"
              />
            ) : (
              <rect
                key={segment.label}
                data-segment={segment.label}
                x="0"
                y={segment.y}
                width={STACK.width}
                height={segment.height}
                rx="2"
                className={RANK_FILL.get(segment.secured)}
              />
            ),
          )}
        </svg>
        <StackList rows={rows} />
      </div>
      <FigureNotes notes={basisNotes(source.table)} />
    </>
  );
}

/** Row 4, structure: when the debt falls due, and who is ahead of whom. */
export function StructureRow({ run, view }: RowProps) {
  const wall = figureSource(view, "CP-1", MATURITIES, "Financial foundation");
  const stack = figureSource(view, "CP-1", DEBT_STACK, "Financial foundation");
  const unit = (source: FigureSource) =>
    source.state === "ready" ? unitLabel(unitOf(source.descriptor)) : "";
  return (
    <>
      <Tile span={8} label="Maturity wall">
        <FigureHead
          title="Maturity wall"
          basis={["Debt maturing by period", unit(wall)].filter(Boolean).join(", ")}
          source={
            <FigureSourceControl
              folder={run.folder}
              entry={wall.entry}
              line={wall.state === "ready" ? wall.table.line : undefined}
              name="the maturity wall"
            />
          }
        />
        {wall.state === "ready" ? (
          <MaturityWall source={wall} />
        ) : (
          <FigureGap reason={wall.reason} />
        )}
      </Tile>
      <Tile span={4} label="Capital structure by rank">
        <FigureHead
          title="Capital structure by rank"
          basis={["Amount", unit(stack)].filter(Boolean).join(", ") + "; first claim at the top"}
          source={
            <FigureSourceControl
              folder={run.folder}
              entry={stack.entry}
              line={stack.state === "ready" ? stack.table.line : undefined}
              name="the capital structure"
            />
          }
        />
        {stack.state === "ready" ? (
          <CapitalStack source={stack} />
        ) : (
          <FigureGap reason={stack.reason} />
        )}
      </Tile>
    </>
  );
}
