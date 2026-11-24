import { useId, type FC } from "react";
import { GapPattern } from "../overview/figureParts";
import { FigureTile, GapTile, LeadFrame, ScrollFigure } from "./kit/LeadFrame";
import { safeText } from "./kit/reader";
import {
  groupScale,
  readPeerBenchmark,
  withUnit,
  type PeerGroup,
  type PeerRow,
  type PeerTable,
} from "./peerBenchmarkData";
import type { LeadProps } from "./types";

/*
 * CP-1C peer benchmark lead. Synthetic contract: built from the launcher's two range tables
 * (src/deploy_workflow/owners/cpos_launch_tables.py `_peer_range`); no retained real handoff exists
 * (CP-1C is blocked at the peer-data gate in every retained run), so this lead is unproven on a real run.
 */

const WIDTH = 640;
const LANE = 14;
const GLYPH = 6.8;
const span = (text: string) => text.length * GLYPH + 6;

type Label = { text: string; x: number; anchor: "start" | "middle" | "end"; kind: string };

/** Greedy lanes: a label drops to the next line when it would overlap one already placed on this line. */
function lanes(labels: Label[]) {
  const placed: { from: number; to: number; lane: number }[] = [];
  return [...labels]
    .sort((a, b) => a.x - b.x)
    .map((label) => {
      const width = span(label.text);
      const from =
        label.anchor === "end"
          ? label.x - width
          : label.anchor === "middle"
            ? label.x - width / 2
            : label.x;
      let lane = 0;
      while (placed.some((p) => p.lane === lane && from < p.to && from + width > p.from)) lane += 1;
      placed.push({ from, to: from + width, lane });
      return { ...label, lane };
    });
}

function peersText(row: PeerRow) {
  if (row.count.kind === "gap") return "Peer count not supplied";
  return `${String(row.count.value)} ${row.count.value === 1 ? "peer" : "peers"}`;
}

function reading(row: PeerRow) {
  const unit = row.unit;
  const { drawing } = row;
  const count = peersText(row);
  if (drawing.kind === "conflict")
    return `${row.metric}: ${drawing.message}, so no range is drawn. ${count}.`;
  const stated = (label: string, value: PeerRow["low"]) =>
    `${label} ${value.kind === "number" ? withUnit(value.text, unit) : "not supplied"}`;
  const parts = [
    stated("peer low", row.low),
    stated("median", row.median),
    stated("peer high", row.high),
    stated("issuer", row.issuer),
  ];
  return `${row.metric}: ${parts.join(", ")}. ${count}.`;
}

function GapSlot({
  x,
  y,
  width,
  text,
  id,
}: {
  x: number;
  y: number;
  width: number;
  text: string;
  id: string;
}) {
  const card = span(text);
  return (
    <>
      <rect
        data-gap={text}
        x={x}
        y={y}
        width={width}
        height="20"
        rx="4"
        fill={`url(#${id})`}
        strokeDasharray="3 3"
        className="stroke-border-gap"
      />
      <rect
        x={x + width / 2 - card / 2 - 2}
        y={y + 2}
        width={card + 4}
        height="16"
        rx="3"
        className="fill-surface-card"
      />
      <text
        x={x + width / 2}
        y={y + 14}
        textAnchor="middle"
        fontSize="11"
        className="fill-gap-text font-body"
      >
        {text}
      </text>
    </>
  );
}

function Strip({ row, scale }: { row: PeerRow; scale: ReturnType<typeof groupScale> }) {
  const id = `peer-gap-${useId().replaceAll(":", "")}`;
  const { drawing, unit } = row;
  if (drawing.kind !== "strip") {
    const text = drawing.kind === "conflict" ? "Stated values conflict" : "Peer range not supplied";
    return (
      <ScrollFigure label="Peer range figure" size="wide">
        <svg
          viewBox={`0 0 ${String(WIDTH)} 36`}
          width="100%"
          role="img"
          aria-label={reading(row)}
          data-row={row.metric}
        >
          <defs>
            <GapPattern id={id} />
          </defs>
          <GapSlot x={88} y={8} width={464} text={text} id={id} />
        </svg>
      </ScrollFigure>
    );
  }
  const x = scale.x;
  const top: Label[] = [
    { text: `low ${withUnit(row.low.text, unit)}`, x: x(drawing.low), anchor: "end", kind: "low" },
    {
      text: `high ${withUnit(row.high.text, unit)}`,
      x: x(drawing.high),
      anchor: "start",
      kind: "high",
    },
    ...(drawing.median === null
      ? []
      : [
          {
            text: `median ${withUnit(row.median.text, unit)}`,
            x: x(drawing.median),
            anchor: "middle" as const,
            kind: "median",
          },
        ]),
  ];
  const placed = lanes(top);
  const laneCount = Math.max(...placed.map((label) => label.lane)) + 1;
  const bandY = 8 + laneCount * LANE + 6;
  const centre = bandY + 8;
  const height = bandY + 16 + 30;
  const bandFrom = x(drawing.low);
  const bandTo = x(drawing.high);
  const issuerX = drawing.issuer === null ? null : x(drawing.issuer);
  const tickLines = scale.ticks.map((tick) => (
    <line
      key={tick.label}
      x1={tick.x}
      x2={tick.x}
      y1="2"
      y2={height - 2}
      className="stroke-border-hairline"
    />
  ));
  const issuerAnchor =
    issuerX === null ? "middle" : issuerX < 130 ? "start" : issuerX > 510 ? "end" : "middle";
  return (
    <svg
      viewBox={`0 0 ${String(WIDTH)} ${String(height)}`}
      width="100%"
      role="img"
      aria-label={reading(row)}
      data-row={row.metric}
    >
      <defs>
        <GapPattern id={id} />
      </defs>
      {tickLines}
      <rect
        data-band
        data-low={row.low.text}
        data-high={row.high.text}
        x={bandFrom}
        y={bandY}
        width={Math.max(3, bandTo - bandFrom)}
        height="16"
        rx="3"
        className="fill-chart-3"
      />
      {drawing.median !== null && (
        <line
          data-median={row.median.text}
          x1={x(drawing.median)}
          x2={x(drawing.median)}
          y1={bandY - 4}
          y2={bandY + 20}
          strokeWidth="2.5"
          className="stroke-text-tertiary"
        />
      )}
      {placed.map((label) => (
        <text
          key={label.kind}
          data-label={label.kind}
          x={label.x + (label.anchor === "end" ? -2 : label.anchor === "start" ? 2 : 0)}
          y={8 + (label.lane + 1) * LANE - 3}
          textAnchor={label.anchor}
          fontSize="11"
          className="fill-text-secondary font-mono"
        >
          {label.text}
        </text>
      ))}
      {issuerX !== null && (
        <>
          <circle
            data-issuer={row.issuer.text}
            cx={issuerX}
            cy={centre}
            r="7"
            strokeWidth="2"
            className="fill-chart-1 stroke-surface-card"
          />
          <text
            x={issuerX}
            y={centre + 28}
            textAnchor={issuerAnchor}
            fontSize="12"
            className="fill-text-primary font-mono"
          >
            issuer {withUnit(row.issuer.text, unit)}
          </text>
        </>
      )}
      {issuerX === null && (
        <GapSlot x={88} y={centre + 14} width={150} text="Issuer not supplied" id={id} />
      )}
    </svg>
  );
}

function Axis({ scale, unit }: { scale: ReturnType<typeof groupScale>; unit: string }) {
  return (
    <svg
      viewBox={`0 0 ${String(WIDTH)} 22`}
      width="100%"
      aria-hidden="true"
      focusable="false"
      data-axis
    >
      {scale.ticks.map((tick) => (
        <text
          key={tick.label}
          x={tick.x}
          y="14"
          textAnchor="middle"
          fontSize="11"
          className="fill-text-tertiary font-mono"
        >
          {/^[%x]$/i.test(unit) ? `${tick.label}${unit}` : tick.label}
        </text>
      ))}
    </svg>
  );
}

function Group({ group, showUnit }: { group: PeerGroup; showUnit: boolean }) {
  const scale = groupScale(group);
  return (
    <div className="flex min-w-0 flex-col gap-3">
      {showUnit && group.unit && (
        <p className="text-caption text-text-tertiary">Reporting unit: {safeText(group.unit)}</p>
      )}
      <ol className="flex min-w-0 flex-col gap-4">
        {group.rows.map((row) => (
          <li key={`${row.metric}-${String(row.line)}`} className="flex min-w-0 flex-col gap-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
              <h4 className="text-small font-medium text-text-primary">{row.metric}</h4>
              <span className="font-mono text-caption text-text-secondary">{peersText(row)}</span>
            </div>
            {row.drawing.kind === "conflict" && (
              <p className="text-caption text-gap-text">
                The stated values conflict, so no range is drawn.
              </p>
            )}
            <Strip row={row} scale={scale} />
          </li>
        ))}
      </ol>
      {group.rows.some(({ drawing }) => drawing.kind === "strip") && (
        <Axis scale={scale} unit={group.unit} />
      )}
    </div>
  );
}

function PeerTile({ props, table, wide }: { props: LeadProps; table: PeerTable; wide: boolean }) {
  const basis = [...new Set(table.rows.flatMap(({ basis: note }) => (note ? [note] : [])))];
  const notes = [...table.rows.flatMap((row) => row.notes), ...basis];
  return (
    <FigureTile
      props={props}
      span={wide ? 12 : 6}
      label={`Peer range, ${table.kind === "percent" ? "percent metrics" : "multiples"}`}
      kicker={table.kind === "percent" ? "Percent metrics" : "Multiples"}
      title="Peer range"
      line={table.line}
      source={`the peer range, ${table.kind === "percent" ? "percent metrics" : "multiples"}`}
      legend={[
        { tone: "prior", text: "Peer low to peer high" },
        { tone: "primary", text: "Issuer" },
        ...(table.rows.some(
          (row) =>
            row.drawing.kind !== "strip" ||
            row.issuer.kind !== "number" ||
            row.median.kind !== "number",
        )
          ? [{ tone: "gap" as const, text: "Not supplied or conflicting" }]
          : []),
      ]}
      notes={notes}
      table={{
        caption: `Peer range, ${table.kind === "percent" ? "percent metrics" : "multiples"}`,
        headers: ["Metric", "Issuer", "Peer low", "Peer median", "Peer high", "Peer count", "Unit"],
        rows: table.rows.map((row) => [
          row.metric,
          safeText(row.issuer.text),
          safeText(row.low.text),
          safeText(row.median.text),
          safeText(row.high.text),
          safeText(row.count.text),
          safeText(row.unit),
        ]),
      }}
    >
      <div className="flex min-w-0 flex-col gap-6">
        {table.groups.map((group) => (
          <Group
            key={group.unit || group.rows[0]?.metric}
            group={group}
            showUnit={table.groups.length > 1}
          />
        ))}
      </div>
    </FigureTile>
  );
}

function Content(props: LeadProps) {
  const read = readPeerBenchmark(props.entry);
  if (!read.tables.length)
    return (
      <GapTile span={12} label="Peer range" kicker="Peer range">
        {read.gaps.join(" ")}
      </GapTile>
    );
  const wide = read.tables.length === 1 && read.gaps.length === 0;
  return (
    <>
      {read.tables.map((table) => (
        <PeerTile key={table.kind} props={props} table={table} wide={wide} />
      ))}
      {read.gaps.map((gap) => (
        <GapTile key={gap} span={6} label="Peer range not drawn" kicker="Peer range">
          {gap}
        </GapTile>
      ))}
      {!read.outliers && (
        <GapTile span={12} label="Outliers and the peer table" kicker="Outliers and the peer table">
          Outliers and the peer table are not in this handoff.
        </GapTile>
      )}
    </>
  );
}

/** CP-1C: a range strip per metric, the issuer marked; percent metrics and multiples on separate axes. */
export const PeerBenchmarkLead: FC<LeadProps> & {
  draws?: readonly ("figures" | "events" | "maps")[];
} = function PeerBenchmarkLead(props) {
  return (
    <LeadFrame props={props}>
      <Content {...props} />
    </LeadFrame>
  );
};
// The peer range strips are the module's typed range figures, drawn by this lead.
PeerBenchmarkLead.draws = ["figures"];
