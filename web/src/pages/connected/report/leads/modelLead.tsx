import { ArrowRight } from "@untitledui/icons";
import { useId } from "react";
import { Button } from "@/components/base/buttons/button";
import { containsReference, readerText } from "../../publishedReport";
import { GapPattern } from "../overview/figureParts";
import { forwardPath, pathGeometry, PATH } from "../overview/stressData";
import { GapNote, Tile } from "../overview/Tile";
import { FigureTile, LeadFrame } from "./kit/LeadFrame";
import type { LeadProps } from "./types";

/*
 * CP-MODEL lead. The model is the run's published forecast: the page reads only the net leverage row
 * of its cash-flow grid through `forwardPath` (the Overview's own reader) and draws it on a larger
 * canvas; the forecast itself, all of its rows and its assumptions, are on the Forecast page.
 * Tested on a faked model of the shape `forwardPath` reads (see overview/StressRow.test.tsx);
 * no retained real published model is used.
 */

type Path = NonNullable<ReturnType<typeof forwardPath>>;

const PLOT = { width: 640, height: 300, left: 60, right: 480, top: 34, base: 250 } as const;
const LABEL_WIDTH = 18;
const DASH = ["", "6 4", "2 3", "8 3 2 3"] as const;

const safe = (text: string) => (text && !containsReference(text) ? readerText(text) : "");

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

/** End labels in order of height, each at least a line clear of the one above. */
function spread<T extends { y: number; lines: string[] }>(ends: T[]) {
  const placed: (T & { top: number })[] = [];
  for (const end of ends) {
    const above = placed.at(-1);
    const floor = above ? above.top + above.lines.length * 14 + 4 : -Infinity;
    placed.push({ ...end, top: Math.max(end.y - 4, floor) });
  }
  return placed;
}

const GLYPH = 7.5;
type Box = { x0: number; x1: number; y0: number; y1: number };

/** The box of one line of 12 px text: its left edge, baseline and width. */
const box = (x: number, baseline: number, width: number): Box => ({
  x0: x,
  x1: x + width,
  y0: baseline - 12,
  y1: baseline + 3,
});
const touches = (a: Box, b: Box) => a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;
const RISE = [-12, 22, -28, 38, -44, 54] as const;

/**
 * Peak labels clear of each other and of `avoid` (axis labels, end labels): beside the mark when it
 * is near the left edge (never over the axis), else centred on it; above it, then below, then
 * further out until nothing overlaps.
 */
function placePeaks(marks: ({ x: number; y: number; text: string } | null)[], avoid: Box[]) {
  const taken = [...avoid];
  return marks.map((mark) => {
    if (!mark) return null;
    const near = mark.x - PLOT.left < 48;
    const width = GLYPH * mark.text.length;
    const x = near ? mark.x + 10 : mark.x;
    const left = near ? x : x - width / 2;
    const candidates = RISE.map((rise) => ({
      y: mark.y + rise,
      at: box(left, mark.y + rise, width),
    }));
    const pick =
      candidates.find(({ y, at }) => y - 12 >= 0 && !taken.some((other) => touches(at, other))) ??
      candidates[0];
    if (pick) taken.push(pick.at);
    return {
      x,
      y: pick?.y ?? mark.y - 12,
      text: mark.text,
      anchor: near ? "start" : "middle",
    } as const;
  });
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
        display: point?.display ?? "",
        figure: point?.y == null ? null : { x: x(point.x), y: y(point.y), value: point.value ?? 0 },
        reason: point?.reason ?? "",
      };
    });
    return { group: item.group, cells };
  });
  const gapPeriods = geometry.periods.filter(({ period }) =>
    slots.some(({ cells }) => cells.find((cell) => cell.period === period)?.figure === null),
  );
  const peaks = slots.map(({ cells }) =>
    cells.reduce<(typeof cells)[number] | null>(
      (best, cell) =>
        cell.figure && (!best?.figure || cell.figure.value > best.figure.value) ? cell : best,
      null,
    ),
  );
  // End labels, kept apart vertically.
  const ends = slots
    .map(({ group, cells }, at) => {
      const last = cells.filter((cell) => cell.figure).at(-1)?.figure;
      return last ? { at, lines: wrap(group, LABEL_WIDTH), x: last.x, y: last.y } : null;
    })
    .filter((end) => end !== null)
    .sort((a, b) => a.y - b.y);
  const endLabels = spread(ends);
  const tickBoxes = geometry.ticks.map((tick) =>
    box(
      PLOT.left - 8 - GLYPH * (tick.label.length + 1),
      y(tick.y) + 4,
      GLYPH * (tick.label.length + 1),
    ),
  );
  const endBoxes = endLabels.flatMap((end) =>
    end.lines.map((line, at) => box(end.x + 12, end.top + 10 + at * 14, GLYPH * line.length)),
  );
  const peakAt = placePeaks(
    peaks.map((peak) =>
      peak?.figure ? { x: peak.figure.x, y: peak.figure.y, text: `peak ${peak.display}` } : null,
    ),
    [...tickBoxes, ...endBoxes],
  );
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
      {gapPeriods.map(({ period, x: px }) => (
        <rect
          key={period}
          data-gap={period}
          x={x(px) - 18}
          y={PLOT.top - 8}
          width="36"
          height={PLOT.base - PLOT.top + 16}
          rx="4"
          fill={`url(#${id})`}
          strokeDasharray="3 3"
          className="stroke-border-gap"
        />
      ))}
      {slots.map(({ group, cells }, at) =>
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
                  strokeDasharray={DASH[Math.min(at, DASH.length - 1)]}
                  className={at === 0 ? "stroke-chart-1" : "stroke-chart-2"}
                />,
              ]
            : [];
        }),
      )}
      {slots.map(({ group, cells }, at) =>
        cells.flatMap((cell) =>
          cell.figure
            ? [
                <circle
                  key={`${group}-${cell.period}`}
                  data-point={`${group} ${cell.period}`}
                  cx={cell.figure.x}
                  cy={cell.figure.y}
                  r="4.5"
                  strokeWidth="2"
                  className={
                    at === 0
                      ? "fill-chart-1 stroke-surface-card"
                      : "fill-surface-card stroke-chart-2"
                  }
                />,
              ]
            : [],
        ),
      )}
      {peakAt.map((peak, at) =>
        peak ? (
          <text
            key={slots[at]?.group}
            data-peak={slots[at]?.group}
            x={peak.x}
            y={peak.y}
            textAnchor={peak.anchor}
            fontSize="12"
            className="fill-text-primary font-mono"
          >
            {peak.text}
          </text>
        ) : null,
      )}
      {endLabels.map((end) => (
        <text
          key={end.at}
          data-case-label={slots[end.at]?.group}
          x={end.x + 12}
          y={end.top + 10}
          fontSize="12"
          className="fill-text-secondary font-body"
        >
          {end.lines.map((line, index) => (
            <tspan key={line} x={end.x + 12} dy={index === 0 ? 0 : 14}>
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

function peakOf(case_: Path["cases"][number]) {
  return case_.points.reduce<(typeof case_.points)[number] | null>(
    (best, point) =>
      point.value !== null && (best?.value == null || point.value > best.value) ? point : best,
    null,
  );
}

function ForwardTile({ props, path }: { props: LeadProps; path: Path }) {
  const [base] = path.cases;
  const peak = base ? peakOf(base) : null;
  const gaps = path.cases.flatMap(({ group, points }) =>
    points
      .filter((point) => point.value === null)
      .map(
        (point) => `${group}, ${point.period}: ${safe(point.reason) || "no figure in the model"}.`,
      ),
  );
  return (
    <FigureTile
      props={props}
      span={7}
      label="Forward net leverage"
      kicker="Net leverage by case, from zero"
      title={
        base && peak
          ? `${path.measure}: ${base.group} peaks at ${peak.display} in ${peak.period}`
          : path.measure
      }
      source="the forward path"
      legend={[
        ...path.cases.map((item, at) => ({
          tone: at === 0 ? ("primary" as const) : ("secondary" as const),
          text: item.group,
        })),
        ...(gaps.length ? [{ tone: "gap" as const, text: "No figure in the model" }] : []),
      ]}
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
      <PathFigure path={path} />
    </FigureTile>
  );
}

function OpenForecast({ path }: { path: Path | null }) {
  return (
    <Tile
      span={5}
      label="Open the forecast"
      kicker="The full forward model"
      title="The forecast page holds the whole model"
    >
      {path && (
        <ul className="flex flex-col gap-1 text-small text-text-secondary">
          {path.cases.map(({ group }) => (
            <li key={group}>{group}</li>
          ))}
        </ul>
      )}
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
        <Tile
          span={7}
          label="Forward net leverage"
          kicker="Not drawn"
          tone="gap"
          className="self-start"
        >
          <GapNote>The published model states no net leverage path.</GapNote>
        </Tile>
      )}
      <OpenForecast path={path} />
    </>
  );
}

/** CP-MODEL: net leverage by case from the published model, and the way to the Forecast page. */
export function ModelLead(props: LeadProps) {
  return (
    <LeadFrame props={props}>
      <Content {...props} />
    </LeadFrame>
  );
}
