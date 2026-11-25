import { containsReference, readerText } from "../../../publishedReport";
import { GapPattern } from "../../overview/figureParts";
import { GapNote, Tile } from "../../overview/Tile";
import { plain } from "../kit/geometry";
import { FigureTile, ScrollFigure } from "../kit/LeadFrame";
import { difference, group, signOf, type Reading } from "../kit/numbers";
import type { LeadProps } from "../types";
import { figureGap } from "./foundationData";
import { segmentView, type Segment, type SegmentView } from "./legacyData";
import { SEG, ratioPercent, segmentGeometry, type BarMark } from "./segmentsGeometry";

const LABEL = "Segments";
const GAP_ID = "cp1-segment-gap";

/** Handoff words as the reader sees them; words that name a source stay in Evidence. */
const reader = (text: string) =>
  containsReference(text) ? "Detail is in Evidence." : readerText(text);
/** A sentence ends with one full stop, even when the handoff's words already carry it. */
const sentence = (text: string) => (/[.!?]$/.test(text) ? text : `${text}.`);

/** Why a cell is not drawn, in the handoff's words. */
const reasonOf = (reading: Reading) =>
  reading.kind === "gap"
    ? reader(reading.reason)
    : reading.kind === "text"
      ? "not stated as a number"
      : "";

/** A cell for the table view and the words: grouped number, or "Not supplied: reason". */
const cellText = (reading: Reading) =>
  reading.kind === "number" ? group(reading.text) : `Not supplied: ${reasonOf(reading)}`;

const percent = (ratio: string | null) => (ratio === null ? null : `${group(ratio)}%`);
const ratioOf = (segment: Segment) => ratioPercent(segment.ebitda, segment.sales);

function apartLine(segment: Segment) {
  const ebitda =
    segment.ebitda.kind === "number"
      ? `EBITDA ${group(segment.ebitda.text)}`
      : `EBITDA not supplied: ${reasonOf(segment.ebitda)}`;
  const sales =
    segment.sales.kind === "number"
      ? `net sales ${group(segment.sales.text)}`
      : reasonOf(segment.sales);
  return `${reader(segment.name)}: ${ebitda}; ${sales}`;
}

const equal = (a: string, b: string) => signOf(difference(a, b)) === 0;

/** The derived sums against the group's stated figures, each only when both numbers exist. */
function reconciliation(view: SegmentView) {
  const lines: string[] = [];
  const { salesTotal, ebitdaTotal, groupSales, groupEbitda } = view;
  if (salesTotal !== null && groupSales?.kind === "number")
    lines.push(
      `Segment sales sum to ${group(salesTotal)}${equal(salesTotal, groupSales.text) ? " =" : ";"} group net sales ${group(groupSales.text)} (derived).`,
    );
  if (ebitdaTotal !== null && groupEbitda?.kind === "number") {
    const subject = view.apart.length
      ? "Segment EBITDA with unallocated corporate sums to"
      : "Segment EBITDA sums to";
    lines.push(
      `${subject} ${group(ebitdaTotal)}${equal(ebitdaTotal, groupEbitda.text) ? " =" : ", against"} ${group(groupEbitda.text)} for the group (derived).`,
    );
  }
  return lines;
}

function reading(view: SegmentView) {
  const parts = view.segments.map((segment) => {
    const ratio = percent(ratioOf(segment));
    const say = (cell: Reading) => (cell.kind === "number" ? group(cell.text) : "not supplied");
    return `${reader(segment.name)} ${say(segment.sales)} and ${say(segment.ebitda)}${ratio ? `, ratio ${ratio}` : ", no ratio"}`;
  });
  const apart = view.apart.map(apartLine);
  return `Segments ${view.period}, ${view.unit}, net sales and EBITDA As Defined: ${[...parts, ...apart].join("; ")}. Ratios derived.`;
}

function Bar({
  mark,
  name,
  measure,
}: {
  mark: BarMark;
  name: string;
  measure: "sales" | "ebitda";
}) {
  const fill = measure === "sales" ? "fill-chart-1" : "fill-chart-2";
  if (mark.kind === "gap")
    return (
      <g>
        <rect
          data-gap={`${name} ${measure}`}
          x={mark.x + 0.5}
          y={mark.y + 0.5}
          width={SEG.gapSlot - 1}
          height={SEG.bar - 1}
          rx="2"
          fill={`url(#${GAP_ID})`}
          strokeDasharray="3 3"
          className="stroke-border-gap"
        />
        <text
          x={mark.x + SEG.gapSlot + 6}
          y={mark.y + 10}
          fontSize="11"
          className="fill-gap-text font-body"
        >
          Not supplied
        </text>
      </g>
    );
  return (
    <g>
      <rect
        data-bar={`${name} ${measure}`}
        x={mark.x}
        y={mark.y}
        width={mark.width}
        height={SEG.bar}
        rx={Math.min(2, mark.width / 2)}
        className={fill}
      />
      <text x={mark.labelX} y={mark.y + 10} fontSize="12" className="fill-text-primary font-mono">
        {group(mark.text)}
      </text>
    </g>
  );
}

function SegmentFigure({ view }: { view: SegmentView }) {
  const geometry = segmentGeometry(view.segments);
  const { blocks, ticks, zero, bottom, height } = geometry;
  const low = ticks[0];
  const high = ticks.at(-1);
  const apart = view.apart.map(apartLine);
  const sums = reconciliation(view);
  return (
    <>
      <ScrollFigure label="Segments figure" size="narrow">
        <svg
          viewBox={`0 0 ${String(SEG.width)} ${String(height)}`}
          width="100%"
          role="img"
          aria-label={reading(view)}
        >
          <defs>
            <GapPattern id={GAP_ID} />
          </defs>
          <text x={SEG.plotStart} y="14" fontSize="11" className="fill-text-tertiary font-body">
            One scale, {plain(low?.value ?? 0)} to {plain(high?.value ?? 0)}
          </text>
          <text
            x={SEG.width}
            y="14"
            textAnchor="end"
            fontSize="11"
            className="fill-text-tertiary font-body"
          >
            EBITDA ÷ sales, derived
          </text>
          {ticks.map((tick) => (
            <line
              key={tick.value}
              x1={tick.x}
              y1={SEG.top - 4}
              x2={tick.x}
              y2={bottom}
              className="stroke-border-hairline"
            />
          ))}
          <line x1={zero} y1={SEG.top - 4} x2={zero} y2={bottom} className="stroke-connector" />
          {blocks.map((block) => {
            const name = block.segment.name;
            return (
              <g key={`${name}-${String(block.segment.line)}`} data-segment={name}>
                <text fontSize="13" fontWeight="500" className="fill-text-primary font-body">
                  {block.lines.map((line, at) => (
                    <tspan key={`${line}-${String(at)}`} x="0" y={block.nameY[at]}>
                      {line}
                    </tspan>
                  ))}
                </text>
                <Bar mark={block.sales} name={name} measure="sales" />
                <Bar mark={block.ebitda} name={name} measure="ebitda" />
                {block.ratio !== null && (
                  <text
                    data-ratio={name}
                    x={SEG.width}
                    y={block.sales.y + 20}
                    textAnchor="end"
                    fontSize="13"
                    fontWeight="500"
                    className="fill-text-primary font-mono"
                  >
                    {percent(block.ratio)}
                  </text>
                )}
              </g>
            );
          })}
          {ticks.map((tick) => (
            <text
              key={tick.value}
              x={tick.x}
              y={height - 6}
              textAnchor="middle"
              fontSize="11"
              className="fill-text-tertiary font-mono"
            >
              {plain(tick.value)}
            </text>
          ))}
        </svg>
      </ScrollFigure>
      {(apart.length > 0 || sums.length > 0) && (
        <div className="flex flex-col gap-1 text-small text-text-secondary">
          {apart.map((line) => (
            <p key={line} className="wrap-anywhere">
              {line}
            </p>
          ))}
          {sums.map((line) => (
            <p key={line} className="wrap-anywhere">
              {line}
            </p>
          ))}
        </div>
      )}
    </>
  );
}

function notesOf(view: SegmentView) {
  const gaps = view.segments.flatMap((segment) =>
    (
      [
        ["net sales", segment.sales],
        ["EBITDA As Defined", segment.ebitda],
      ] as const
    ).flatMap(([measure, cell]) =>
      cell.kind === "number"
        ? []
        : [sentence(`${reader(segment.name)} ${measure}: ${reasonOf(cell)}`)],
    ),
  );
  return [
    ...gaps,
    "EBITDA ÷ sales is the ratio of the two bars, derived; it is not a reported margin.",
  ];
}

function tableOf(view: SegmentView) {
  const rows = view.segments.map((segment) => [
    reader(segment.name),
    cellText(segment.sales),
    cellText(segment.ebitda),
    percent(ratioOf(segment)) ?? "No ratio",
  ]);
  const apart = view.apart.map((segment) => [
    reader(segment.name),
    cellText(segment.sales),
    cellText(segment.ebitda),
    "Not ranked",
  ]);
  return {
    caption: `Segments ${view.period}, ${view.unit}: net sales, EBITDA As Defined and EBITDA ÷ sales (derived)`,
    headers: ["Segment", "Net sales", "EBITDA As Defined", "EBITDA ÷ sales, derived"],
    rows: [...rows, ...apart],
  };
}

/** Tile 5 of the financial foundation: latest-period net sales and EBITDA As Defined per segment. */
export function SegmentsTile({ lead }: { lead: LeadProps }) {
  const view = segmentView(lead.entry);
  if (!view)
    return (
      <Tile span={6} label={LABEL} kicker="Segments" tone="gap" className="self-start">
        <GapNote>
          {figureGap(lead.entry, "segments") ?? "The handoff has no segment schedule."}
        </GapNote>
      </Tile>
    );
  const names = view.segments.map((segment) => segment.name);
  const twice = names.find((name, at) => names.indexOf(name) !== at);
  if (twice !== undefined)
    return (
      <FigureTile
        props={lead}
        span={6}
        label={LABEL}
        kicker={`Segments · ${view.unit}, ${view.period}`}
        title={`Segments, ${view.period}`}
        line={view.tableLine}
        source="the segment figures"
      >
        <GapNote>
          The segment schedule states {reader(twice)} more than once for {view.period}; the segments
          are not drawn.
        </GapNote>
      </FigureTile>
    );
  const cells = view.segments.flatMap((segment) => [segment.sales, segment.ebitda]);
  const drawable = cells.some((cell) => cell.kind === "number");
  const title =
    view.salesTotal === null
      ? `Segments, ${view.period}`
      : `Segment net sales sum to ${group(view.salesTotal)} (derived) across ${String(view.segments.length)} segment${view.segments.length === 1 ? "" : "s"}, ${view.period}`;
  return (
    <FigureTile
      props={lead}
      span={6}
      label={LABEL}
      kicker={`Segments · ${view.unit}, ${view.period}`}
      title={drawable ? title : `Segments, ${view.period}`}
      line={view.tableLine}
      source="the segment figures"
      legend={
        drawable
          ? [
              { tone: "primary", text: "Net sales" },
              { tone: "secondary", text: "EBITDA As Defined" },
              ...(cells.some((cell) => cell.kind !== "number")
                ? [{ tone: "gap" as const, text: "Not supplied" }]
                : []),
            ]
          : []
      }
      notes={drawable ? notesOf(view) : []}
      table={drawable ? tableOf(view) : undefined}
    >
      {drawable ? (
        <SegmentFigure view={view} />
      ) : (
        <GapNote>
          {view.segments.length
            ? "The segment schedule states no amount for any business unit."
            : "The segment schedule lists no business unit."}
        </GapNote>
      )}
    </FigureTile>
  );
}
