import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { containsReference, readerText, unitLabel } from "../../../publishedReport";
import { basisNotes, figureSource, unitOf, type FigureSource } from "../../overview/figureData";
import { GapPattern } from "../../overview/figureParts";
import { WALL, wallGeometry, wallSlots } from "../../overview/structureData";
import { GapNote, Tile } from "../../overview/Tile";
import { FigureTile } from "../kit/LeadFrame";
import { group, sum } from "../kit/numbers";
import type { LeadProps } from "../types";

const LABEL = "Debt maturities";
const UNDATED = "cp1-wall-undated";
const GAP = "cp1-wall-gap";

/** The compact wall: the Overview wall's geometry, scaled into a smaller box. */
const BOX = { width: 520, height: 220, base: 180, top: 60, gapMark: 24, thinnest: 2 } as const;
const SX = BOX.width / WALL.width;
const SY = (BOX.base - BOX.top) / (WALL.base - WALL.top);
/** Below this slot width an amount label would run into its neighbour; the table view has it. */
const CROWDED = 44;

type Ready = Extract<FigureSource, { state: "ready" }>;
type WallMark = ReturnType<typeof wallGeometry>["marks"][number];
type Mark = WallMark & {
  x: number;
  width: number;
  centreX: number;
  drawn: number | null;
  least: boolean;
};

const reader = (text: string) =>
  containsReference(text) ? "Detail is in Evidence." : readerText(text);
/** A sentence ends with one full stop, even when the handoff's words already carry it. */
const sentence = (text: string) => (/[.!?]$/.test(text) ? text : `${text}.`);

/** Each Overview mark placed in the compact box; a stated small amount keeps a 2 px minimum. */
function compact(marks: WallMark[], bar: number): Mark[] {
  return marks.map((mark) => {
    const scaled = mark.height === null ? null : mark.height * SY;
    return {
      ...mark,
      label: reader(mark.label),
      centreX: mark.centre * SX,
      x: (mark.centre - bar / 2) * SX,
      width: bar * SX,
      drawn: scaled === null ? null : Math.max(BOX.thinnest, scaled),
      least: scaled !== null && scaled < BOX.thinnest,
    };
  });
}

const amountText = (mark: Mark) =>
  mark.cell === null
    ? "No row in the schedule"
    : mark.drawn === null
      ? `Not supplied: ${reader(mark.cell.reason ?? "no amount in the handoff")}`
      : group(mark.cell.text);

/** The first three dated slots summed exactly, only when the table has three dated amounts. */
function bracketOf(marks: Mark[]) {
  const dated = marks.filter((mark) => !mark.undated);
  const stated = dated.filter((mark) => mark.cell !== null);
  const three = dated.slice(0, 3);
  const [first, , third] = three;
  if (stated.length < 3 || !first || !third || three.some((mark) => mark.drawn === null))
    return null;
  const total = sum(three.map((mark) => mark.cell?.text ?? ""));
  if (total === null) return null;
  const top = Math.min(...three.map((mark) => BOX.base - (mark.drawn ?? 0) - 20));
  const span = `${first.label}–${third.label}`;
  return {
    total,
    span,
    text: `${group(total)} in ${span}, derived`,
    x1: first.x,
    x2: third.x + third.width,
    y: Math.max(28, top - 6),
  };
}

/** "FY2028 6,637 is the largest dated year" only when one dated amount is strictly the largest. */
function titleOf(marks: Mark[]) {
  const dated = marks.filter((mark) => !mark.undated);
  const values = dated.flatMap((mark) =>
    mark.drawn === null || mark.cell?.value == null ? [] : [mark.cell.value],
  );
  if (!dated.length || values.length !== dated.length) return "Debt maturing by period";
  const top = Math.max(...values);
  const largest = dated.filter((mark) => mark.cell?.value === top);
  const [only] = largest;
  return largest.length === 1 && only?.cell
    ? `Debt maturing: ${only.label} ${group(only.cell.text)} is the largest dated year`
    : "Debt maturing by period";
}

function Shape({ mark }: { mark: Mark }) {
  if (mark.drawn === null)
    return (
      <rect
        data-gap={mark.label}
        x={mark.x + 0.5}
        y={BOX.base - BOX.gapMark}
        width={mark.width - 1}
        height={BOX.gapMark}
        rx="3"
        fill={`url(#${GAP})`}
        strokeDasharray="3 3"
        className="stroke-border-gap"
      />
    );
  return mark.undated ? (
    <rect
      data-bar={mark.label}
      x={mark.x + 0.75}
      y={BOX.base - mark.drawn + 0.75}
      width={mark.width - 1.5}
      height={Math.max(0.5, mark.drawn - 0.75)}
      rx="2"
      fill={`url(#${UNDATED})`}
      strokeWidth="1.5"
      className="stroke-chart-1"
    />
  ) : (
    <rect
      data-bar={mark.label}
      x={mark.x}
      y={BOX.base - mark.drawn}
      width={mark.width}
      height={mark.drawn}
      rx={Math.min(2, mark.drawn / 2)}
      className="fill-chart-1"
    />
  );
}

function Labels({ mark, crowded }: { mark: Mark; crowded: boolean }) {
  const top = BOX.base - (mark.drawn ?? BOX.gapMark) - 6;
  return (
    <>
      {!crowded && (
        <text
          x={mark.centreX}
          y={top}
          textAnchor="middle"
          fontSize={mark.drawn === null ? 11 : 12}
          className={
            mark.drawn === null ? "fill-gap-text font-body" : "fill-text-primary font-mono"
          }
        >
          {mark.drawn === null
            ? mark.cell
              ? "Not supplied"
              : "No row"
            : group(mark.cell?.text ?? "")}
        </text>
      )}
      <text
        x={mark.centreX}
        y={BOX.base + 18}
        textAnchor="middle"
        fontSize="11"
        className="fill-text-secondary font-body"
      >
        {mark.label}
      </text>
    </>
  );
}

function Axis({ breakAt }: { breakAt: number | null }) {
  const y = BOX.base;
  if (breakAt === null)
    return <line x1="0" y1={y} x2={BOX.width} y2={y} className="stroke-connector" />;
  const b = breakAt * SX;
  return (
    <>
      <line x1="0" y1={y} x2={b - 6} y2={y} className="stroke-connector" />
      <line x1={b + 6} y1={y} x2={BOX.width} y2={y} className="stroke-connector" />
      <path
        data-axis-break
        d={`M${String(b - 9)} ${String(y + 7)} ${String(b - 1)} ${String(y - 7)}M${String(b + 1)} ${String(y + 7)} ${String(b + 9)} ${String(y - 7)}`}
        strokeWidth="1.25"
        fill="none"
        className="stroke-text-tertiary"
      />
    </>
  );
}

function wallReading(marks: Mark[], unit: string, bracket: ReturnType<typeof bracketOf>) {
  const parts = marks.map(
    (mark) =>
      `${mark.label} ${mark.cell === null ? "no row" : mark.drawn === null ? "not supplied" : group(mark.cell.text)}`,
  );
  return `Debt maturing by period${unit ? `, ${unit}` : ""}: ${parts.join(", ")}.${bracket ? ` ${bracket.text}.` : ""}`;
}

/** "A", "A and B", "A, B and C". */
function listOf(labels: string[]) {
  return labels.length > 1
    ? `${labels.slice(0, -1).join(", ")} and ${labels.at(-1) ?? ""}`
    : (labels[0] ?? "");
}

function slotWidth(marks: Mark[]) {
  const widths = marks.slice(1).flatMap((mark, at) => {
    const before = marks[at];
    return before && before.undated === mark.undated ? [mark.centreX - before.centreX] : [];
  });
  return widths.length ? Math.min(...widths) : Infinity;
}

function MaturityFigure({ lead, source }: { lead: LeadProps; source: Ready }) {
  const unit = unitOf(source.descriptor);
  const kicker = unitLabel(unit) ? `${LABEL} · ${unitLabel(unit)}` : LABEL;
  const labels = source.table.rows.map((row) => row[0] ?? "");
  const twice = labels.find((label, at) => labels.indexOf(label) !== at);
  const slots = wallSlots(source.table, source.descriptor, unit);
  const common = {
    props: lead,
    span: 5 as const,
    label: LABEL,
    kicker,
    line: source.table.line,
    source: "the maturity wall",
  };
  // The wall keeps one row per period; a period stated twice would silently lose a row.
  if (twice !== undefined)
    return (
      <FigureTile {...common} title="Debt maturing by period">
        <GapNote>
          The maturity schedule states {reader(twice)} more than once; the wall is not drawn.
        </GapNote>
      </FigureTile>
    );
  if (!slots)
    return (
      <FigureTile {...common} title="Debt maturing by period">
        <GapNote>The maturity schedule states no amount for any period.</GapNote>
      </FigureTile>
    );
  const geometry = wallGeometry(slots.dated, slots.undated);
  const marks = compact(geometry.marks, geometry.bar);
  const bracket = bracketOf(marks);
  const crowded = slotWidth(marks) < CROWDED;
  const least = marks.filter((mark) => mark.least).map((mark) => mark.label);
  const notes = [
    ...marks
      .filter((mark) => mark.drawn === null)
      .map((mark) =>
        mark.cell === null
          ? `${mark.label}: no row in the schedule for this year.`
          : sentence(`${mark.label}: ${reader(mark.cell.reason ?? "no amount in the handoff")}`),
      ),
    ...(least.length ? [`${listOf(least)} drawn at a 2 px minimum.`] : []),
    ...(crowded ? ["The amounts are in the table view."] : []),
    ...basisNotes(source.table),
  ];
  const legend = [
    { tone: "primary" as const, text: "Dated period" },
    ...(slots.undated.length
      ? [{ tone: "undated" as const, text: "After the axis break: no single year" }]
      : []),
    ...(marks.some((mark) => mark.drawn === null)
      ? [{ tone: "gap" as const, text: "Not supplied" }]
      : []),
  ];
  return (
    <FigureTile
      {...common}
      title={titleOf(marks)}
      legend={legend}
      notes={notes}
      table={{
        caption: `Debt maturing by period${unitLabel(unit) ? `, ${unitLabel(unit)}` : ""}`,
        headers: ["Period", "Amount"],
        rows: [
          ...marks.map((mark) => [mark.label, amountText(mark)]),
          ...(bracket ? [[`${bracket.span}, derived`, group(bracket.total)]] : []),
        ],
      }}
    >
      <svg
        viewBox={`0 0 ${String(BOX.width)} ${String(BOX.height)}`}
        width="100%"
        role="img"
        aria-label={wallReading(marks, unitLabel(unit), bracket)}
      >
        <defs>
          <pattern
            id={UNDATED}
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect width="6" height="6" className="fill-surface-selected" />
            <line x1="0" y1="0" x2="0" y2="6" strokeWidth="2" className="stroke-chart-1" />
          </pattern>
          <GapPattern id={GAP} />
        </defs>
        {marks.map((mark) => (
          <Shape key={mark.label} mark={mark} />
        ))}
        <Axis breakAt={geometry.breakAt} />
        {marks.map((mark) => (
          <Labels key={mark.label} mark={mark} crowded={crowded} />
        ))}
        {bracket && (
          <g data-bracket={bracket.total}>
            <path
              d={`M${String(bracket.x1)} ${String(bracket.y + 4)}V${String(bracket.y)}H${String(bracket.x2)}V${String(bracket.y + 4)}`}
              strokeWidth="1"
              fill="none"
              className="stroke-text-tertiary"
            />
            <text
              x={(bracket.x1 + bracket.x2) / 2}
              y={bracket.y - 6}
              textAnchor="middle"
              fontSize="11"
              className="fill-text-secondary font-body"
            >
              {bracket.text}
            </text>
          </g>
        )}
      </svg>
      <div>
        <Button color="link-gray" size="sm" href="#overview" iconTrailing={ArrowRight}>
          Full wall on Overview
        </Button>
      </div>
    </FigureTile>
  );
}

/** Tile 6 of the financial foundation: the compact maturity wall, the full one is on Overview. */
export function MaturityTile({ lead }: { lead: LeadProps }) {
  const source = figureSource(lead.view, "CP-1", "Debt maturities", "Financial foundation");
  if (source.state === "gap")
    return (
      <Tile span={5} label={LABEL} kicker={LABEL} tone="gap">
        <GapNote>{source.reason}</GapNote>
      </Tile>
    );
  return <MaturityFigure lead={lead} source={source} />;
}
