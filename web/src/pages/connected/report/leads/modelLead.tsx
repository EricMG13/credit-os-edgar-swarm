import { ArrowRight } from "@untitledui/icons";
import { useId, type FC } from "react";
import { Button } from "@/components/base/buttons/button";
import { GapPattern } from "../overview/figureParts";
import { forwardPath, pathGeometry, PATH } from "../overview/stressData";
import { Tile } from "../overview/Tile";
import { FigureTile, GapTile, LeadFrame } from "./kit/LeadFrame";
import { safeText } from "./kit/reader";
import type { LeadProps } from "./types";

/*
 * CP-MODEL lead. The model is the run's published forecast: the page reads only the net leverage row
 * of its cash-flow grid through `forwardPath` (the Overview's own reader) and draws it on a larger
 * canvas; the forecast itself, all of its rows and its assumptions, are on the Forecast page.
 * Tested on a faked model of the shape `forwardPath` reads (see overview/StressRow.test.tsx);
 * no retained real published model is used. No value is singled out (no high, no peak): every
 * period's figure is the model's own, and the table view lists them all.
 */

type Path = NonNullable<ReturnType<typeof forwardPath>>;

const PLOT = { width: 640, height: 300, left: 60, right: 470, top: 34, base: 250 } as const;
const LABEL_WIDTH = 16;

/** One look per case: a colour, a dash and a marker shape, so no two cases share any of them. */
const LOOKS = [
  { stroke: "stroke-chart-1", fill: "fill-chart-1", dash: "", shape: "circle" },
  { stroke: "stroke-chart-2", fill: "fill-chart-2", dash: "6 4", shape: "square" },
  { stroke: "stroke-chart-4", fill: "fill-chart-4", dash: "2 3", shape: "diamond" },
  { stroke: "stroke-chart-5", fill: "fill-chart-5", dash: "8 3 2 3", shape: "triangle" },
] as const;
type Look = (typeof LOOKS)[number];
const lookOf = (at: number): Look => LOOKS[at % LOOKS.length] ?? LOOKS[0];

const reasonOf = (text: string) => (text.trim() ? safeText(text) : "no figure in the model");

/** A case's marker at a point: its own shape, in its own colour. */
function Marker({
  look,
  x,
  y,
  size = 5,
  ...rest
}: {
  look: Look;
  x: number;
  y: number;
  size?: number;
  "data-point"?: string;
}) {
  const common = { className: `${look.fill} stroke-surface-card`, strokeWidth: 1.5, ...rest };
  if (look.shape === "circle") return <circle cx={x} cy={y} r={size} {...common} />;
  if (look.shape === "square")
    return <rect x={x - size} y={y - size} width={size * 2} height={size * 2} {...common} />;
  const points =
    look.shape === "diamond"
      ? `${String(x)},${String(y - size - 1)} ${String(x + size + 1)},${String(y)} ${String(x)},${String(y + size + 1)} ${String(x - size - 1)},${String(y)}`
      : `${String(x)},${String(y - size - 1)} ${String(x + size + 1)},${String(y + size)} ${String(x - size - 1)},${String(y + size)}`;
  return <polygon points={points} {...common} />;
}

/** `name` broken into lines of at most `width` characters at spaces. */
function wrap(name: string, width: number) {
  const lines: string[] = [];
  for (const word of name.split(/\s+/)) {
    const last = lines.at(-1);
    if (last !== undefined && `${last} ${word}`.length <= width)
      lines[lines.length - 1] = `${last} ${word}`;
    else lines.push(word);
  }
  return lines;
}

/** End labels in order of height, each at least its own height clear of the one above. */
function spread<T extends { y: number; lines: string[] }>(ends: T[]) {
  const placed: (T & { top: number })[] = [];
  for (const end of ends) {
    const above = placed.at(-1);
    const floor = above ? above.top + above.lines.length * 14 + 6 : -Infinity;
    placed.push({ ...end, top: Math.max(end.y - 4, floor) });
  }
  return placed;
}

function PathFigure({ path }: { path: Path }) {
  const id = `model-gap-${useId().replaceAll(":", "")}`;
  const geometry = pathGeometry(path.cases);
  const xs = geometry.periods.map(({ x }) => x);
  const [from = 0] = xs;
  const to = xs.at(-1) ?? from;
  const x = (value: number) =>
    to === from
      ? (PLOT.left + PLOT.right) / 2
      : PLOT.left + ((value - from) / (to - from)) * (PLOT.right - PLOT.left);
  const y = (value: number) =>
    PLOT.top + ((value - PATH.top) / (PATH.base - PATH.top)) * (PLOT.base - PLOT.top);
  const slots = path.cases.map((item, at) => {
    const line = geometry.lines[at] ?? [];
    const cells = geometry.periods.map(({ period }) => {
      const point = line.find((candidate) => candidate.period === period);
      return {
        period,
        x: x(geometry.periods.find((candidate) => candidate.period === period)?.x ?? from),
        display: point?.display ?? "",
        figure: point?.y == null ? null : { x: x(point.x), y: y(point.y) },
      };
    });
    return { group: item.group, look: lookOf(at), cells };
  });
  const ends = slots
    .map(({ group, cells }, at) => {
      const last = cells.filter((cell) => cell.figure).at(-1);
      return last?.figure
        ? {
            at,
            lines: [...wrap(group, LABEL_WIDTH), last.display],
            x: last.figure.x,
            y: last.figure.y,
          }
        : null;
    })
    .filter((end) => end !== null)
    .sort((a, b) => a.y - b.y);
  const endLabels = spread(ends);
  const every = geometry.periods.length > 9 ? 2 : 1;
  const reading = path.cases
    .map(
      ({ group, points }) =>
        `${group}: ${points.map((point) => `${point.period} ${point.value === null ? "no figure" : point.display}`).join(", ")}`,
    )
    .join(". ");
  return (
    <svg
      viewBox={`0 0 ${String(PLOT.width)} ${String(PLOT.height)}`}
      width="100%"
      role="img"
      aria-label={`${path.measure}, from zero. ${reading}.`}
    >
      <defs>
        <GapPattern id={id} />
      </defs>
      {geometry.ticks.map((tick) => (
        <g key={tick.label}>
          <line
            x1={PLOT.left}
            x2={PLOT.right + 8}
            y1={y(tick.y)}
            y2={y(tick.y)}
            className="stroke-border-hairline"
          />
          <text
            x={PLOT.left - 8}
            y={y(tick.y) + 4}
            textAnchor="end"
            fontSize="11"
            className="fill-text-tertiary font-mono"
          >
            {tick.label}x
          </text>
        </g>
      ))}
      {slots.map(({ group, look, cells }) =>
        cells.flatMap((cell, index) => {
          const next = cells[index + 1];
          // Only neighbouring periods that both have a figure are joined: nothing is drawn across a gap.
          return cell.figure && next?.figure
            ? [
                <line
                  key={`${group}-${cell.period}`}
                  data-line={group}
                  x1={cell.figure.x}
                  y1={cell.figure.y}
                  x2={next.figure.x}
                  y2={next.figure.y}
                  strokeWidth="2.5"
                  strokeDasharray={look.dash || undefined}
                  className={look.stroke}
                />,
              ]
            : [];
        }),
      )}
      {slots.map(({ group, look, cells }) =>
        cells.flatMap((cell, index) => {
          if (cell.figure)
            return [
              <Marker
                key={`${group}-${cell.period}`}
                data-point={`${group} ${cell.period}`}
                look={look}
                x={cell.figure.x}
                y={cell.figure.y}
              />,
            ];
          // No figure for this case in this period: a hatched slot on the case's own line, at the
          // height of its nearest stated neighbour (a place for the mark, not a value).
          const near =
            cells
              .slice(0, index)
              .reverse()
              .find((other) => other.figure) ??
            cells.slice(index + 1).find((other) => other.figure);
          return near?.figure
            ? [
                <rect
                  key={`${group}-${cell.period}-gap`}
                  data-gap={`${group} ${cell.period}`}
                  x={cell.x - 13}
                  y={near.figure.y - 8}
                  width="26"
                  height="16"
                  rx="4"
                  fill={`url(#${id})`}
                  strokeDasharray="3 3"
                  className={look.stroke}
                />,
              ]
            : [];
        }),
      )}
      {endLabels.map((end) => (
        <text
          key={end.at}
          data-case-label={slots[end.at]?.group}
          x={end.x + 14}
          y={end.top + 10}
          fontSize="12"
          className="fill-text-secondary font-body"
        >
          {end.lines.map((line, index) => (
            <tspan
              key={line}
              x={end.x + 14}
              dy={index === 0 ? 0 : 14}
              className={index === end.lines.length - 1 ? "fill-text-primary font-mono" : undefined}
            >
              {line}
            </tspan>
          ))}
        </text>
      ))}
      {geometry.periods.map(({ period, x: px }, index) =>
        index % every === 0 || index === geometry.periods.length - 1 ? (
          <text
            key={period}
            x={x(px)}
            y={PLOT.base + 24}
            textAnchor="middle"
            fontSize="11"
            className="fill-text-tertiary font-body"
          >
            {period}
          </text>
        ) : null,
      )}
    </svg>
  );
}

/** The legend: each case's own line, dash and marker, then the hatched slot when a period has no figure. */
function Legend({ path, gaps }: { path: Path; gaps: boolean }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-caption text-text-secondary">
      {path.cases.map(({ group }, at) => {
        const look = lookOf(at);
        return (
          <li key={group} className="flex items-center gap-1.5">
            <svg viewBox="0 0 28 14" width="28" height="14" aria-hidden="true" focusable="false">
              <line
                x1="0"
                x2="28"
                y1="7"
                y2="7"
                strokeWidth="2.5"
                strokeDasharray={look.dash || undefined}
                className={look.stroke}
              />
              <Marker look={look} x={14} y={7} size={4} />
            </svg>
            {group}
          </li>
        );
      })}
      {gaps && (
        <li className="flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className="gap-hatch size-3 flex-none rounded-[3px] border border-dashed border-border-gap"
          />
          No figure in the model
        </li>
      )}
    </ul>
  );
}

function ForwardTile({ props, path }: { props: LeadProps; path: Path }) {
  const gaps = path.cases.flatMap(({ group, points }) =>
    points
      .filter((point) => point.value === null)
      .map((point) => `${group}, ${point.period}: ${reasonOf(point.reason)}.`),
  );
  return (
    <FigureTile
      props={props}
      span={8}
      label="Forward net leverage"
      kicker={`${path.measure}, from zero`}
      title="Net leverage by case"
      source="the forward path"
      notes={[...gaps, ...path.limits]}
      table={{
        caption: path.measure,
        headers: ["Case", "Period", "As the model states it"],
        rows: path.cases.flatMap(({ group, points }) =>
          points.map((point) => [
            group,
            point.period,
            point.value === null ? "No figure" : point.display,
          ]),
        ),
      }}
    >
      <Legend path={path} gaps={gaps.length > 0} />
      <PathFigure path={path} />
    </FigureTile>
  );
}

/** Just the way to the Forecast page: a compact tile beside the chart. */
function OpenForecast() {
  return (
    <Tile span={4} label="Open the forecast" className="self-start">
      <div>
        <Button color="link-gray" size="sm" href="#forecast" iconTrailing={ArrowRight}>
          Open the forecast
        </Button>
      </div>
    </Tile>
  );
}

function Content(props: LeadProps) {
  const [model] = props.view.models;
  const path = model ? forwardPath(model) : null;
  return (
    <>
      {path ? (
        <ForwardTile props={props} path={path} />
      ) : (
        <GapTile span={8} label="Forward net leverage" kicker="Net leverage by case">
          {model
            ? "The published model states no net leverage path."
            : "No published model for this run."}
        </GapTile>
      )}
      <OpenForecast />
    </>
  );
}

/** CP-MODEL: net leverage by case from the published model, and the way to the Forecast page. */
export const ModelLead: FC<LeadProps> & { draws?: readonly ("figures" | "events" | "maps")[] } =
  function ModelLead(props) {
    return (
      <LeadFrame props={props}>
        <Content {...props} />
      </LeadFrame>
    );
  };
// This lead draws no typed figure, event lane or map of the module's own.
ModelLead.draws = [];
