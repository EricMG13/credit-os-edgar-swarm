import { useState } from "react";
import { cx } from "@/utils/cx";
import {
  factsOf,
  fieldUnits,
  figure,
  latestRun,
  trend,
  type Coverage,
  type CoverageRun,
  type Fact,
  type Field,
  type Issuer,
  type TrendSeries,
} from "../coverageData";
import { Chip } from "@/components/kit/Chip";
import { card } from "../layout";
import { prose } from "./shared";

type Stated = Fact & { at: number };
type Dot = { fact: Stated; index: number };
type Scale = { y: (value: number) => number; low: Stated | undefined; high: Stated | undefined };
/** Why a period draws no point, by what the run itself states for it. */
type Missing = { long: string; short: string };

const WIDTH = 320;
const HEIGHT = 150;
const PAD = { left: 20, right: 12, top: 20, bottom: 26 };
const PLOT_WIDTH = WIDTH - PAD.left - PAD.right;
const PLOT_HEIGHT = HEIGHT - PAD.top - PAD.bottom;
const BOTTOM = PAD.top + PLOT_HEIGHT;
/** From this many points a series is drawn as lines; fewer are dots (two with a connector) and written values. */
const LINE_FROM = 3;
const IN_EVIDENCE = "the module's reason is in Evidence";

const isStated = (fact: Fact | null | undefined): fact is Stated =>
  fact != null && fact.at !== null;

/** The module's own reason for a stated gap, when it can be drawn on a working page. */
const gapReason = (fact: Fact): string => prose(fact.text) ?? IN_EVIDENCE;

const unitsOf = (facts: readonly Fact[]): string =>
  [...new Set(facts.map((fact) => fact.unit || "no unit stated"))].join(", ");

/** What is true of a period the run's panel draws no point for. */
function missingAt(facts: readonly Fact[], period: string, unit: string): Missing {
  const here = facts.filter((fact) => fact.period === period);
  const inUnit = here.filter((fact) => fact.at !== null && (fact.unit ?? "") === unit);
  if (inUnit.length > 1) {
    const texts = inUnit.map(figure).join("; ");
    return {
      long: `states this period more than once (${texts}), so none is drawn`,
      short: `Stated more than once: ${texts}`,
    };
  }
  const stated = here.find((fact) => fact.at === null);
  if (stated) {
    const reason = gapReason(stated);
    return { long: reason, short: reason === IN_EVIDENCE ? "Reason in Evidence" : reason };
  }
  const other = here.filter((fact) => fact.at !== null);
  if (other.length > 0) {
    const units = unitsOf(other);
    return { long: `stated in another unit (${units}), not drawn here`, short: `In ${units} only` };
  }
  return { long: "no figure stated for this period", short: "No figure" };
}

/** Why an issuer's newest run gives no panel in this unit: another unit first, then its stated gap. */
function absentReason(facts: readonly Fact[], unit: string): string {
  const other = facts.filter((fact) => fact.at !== null && (fact.unit ?? "") !== unit);
  if (other.length > 0) return `stated only in another unit (${unitsOf(other)}), not drawn here`;
  const gaps = facts.filter((fact) => fact.at === null);
  if (gaps.length > 0) return [...new Set(gaps.map(gapReason))].join("; ");
  if (facts.length > 0) return "states figures in this unit without a period, so none is drawn";
  return "no figure stated for this measure in its newest run";
}

/** The unit most issuers' newest runs state a figure in; a tie keeps the sorted order. */
function openingUnit(
  units: readonly string[],
  issuers: readonly Issuer[],
  factsFor: (run: CoverageRun) => Fact[],
): string {
  const count = new Map<string, number>();
  for (const issuer of issuers) {
    const run = latestRun(issuer);
    const stated = run ? factsFor(run).filter((fact) => fact.at !== null) : [];
    for (const item of new Set(stated.map((fact) => fact.unit ?? "")))
      count.set(item, (count.get(item) ?? 0) + 1);
  }
  return units.reduce((best, item) =>
    (count.get(item) ?? 0) > (count.get(best) ?? 0) ? item : best,
  );
}

/** One scale for every panel, always holding zero: from the lowest figure (or zero) to the highest (or zero). */
function scaleOf(series: readonly TrendSeries[]): Scale {
  const stated = series.flatMap((item) => item.points.filter(isStated));
  const pick = (better: (a: number, b: number) => boolean) =>
    stated.reduce<Stated | undefined>(
      (found, fact) => (!found || better(fact.at, found.at) ? fact : found),
      undefined,
    );
  const low = pick((a, b) => a < b);
  const high = pick((a, b) => a > b);
  const bottom = Math.min(0, low?.at ?? 0);
  const top = Math.max(0, high?.at ?? 0);
  const span = top > bottom ? top - bottom : 1;
  return { y: (value) => PAD.top + ((top - value) / span) * PLOT_HEIGHT, low, high };
}

const x = (index: number, count: number): number =>
  PAD.left + ((index + 0.5) / count) * PLOT_WIDTH;

/** Stated points cut into runs of consecutive periods; a line never crosses a missing period. */
function segmentsOf(dots: readonly Dot[]): Dot[][] {
  const runs: Dot[][] = [];
  for (const dot of dots) {
    const open = runs.at(-1);
    const prev = open?.at(-1);
    if (open && prev && prev.index === dot.index - 1) open.push(dot);
    else runs.push([dot]);
  }
  return runs.filter((run) => run.length > 1);
}

function Lines({ dots, at }: { dots: readonly Dot[]; at: (dot: Dot) => string }) {
  const segments = segmentsOf(dots);
  if (dots.length >= LINE_FROM)
    return segments.map((run) => (
      <polyline
        key={run[0]?.index}
        data-segment=""
        points={run.map(at).join(" ")}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    ));
  return segments.map((run) => {
    const [from, to] = at(run[0] as Dot).split(",");
    const [x2, y2] = at(run[1] as Dot).split(",");
    return (
      <line
        key={run[0]?.index}
        data-segment=""
        x1={from}
        y1={to}
        x2={x2}
        y2={y2}
        stroke="currentColor"
        strokeWidth={1}
      />
    );
  });
}

/** SVG font size of a value label; its width is estimated at 7 units a character. */
const LABEL_FONT = 11;
const CHAR = 7;
const ASCENT = 11;
const DESCENT = 3;
const EDGE = 1;
const DOT_R = 4;
type Point = { x: number; y: number };
type Box = { left: number; right: number; top: number; bottom: number };
type Anchor = "start" | "end" | "middle";
type Side = "above" | "below";
type Label = { which: "first" | "last"; text: string; x: number; y: number; anchor: Anchor; box: Box };
type End = { which: "first" | "last"; at: Point; toward: Point | undefined; text: string };

/** Where a label sits across: the first leans left of its dot, the last right, never past an edge. */
function across(end: End, width: number, single: boolean): { x: number; anchor: Anchor } {
  const { which, at } = end;
  if (single) {
    const x = Math.min(Math.max(at.x, EDGE + width / 2), WIDTH - EDGE - width / 2);
    return { x, anchor: "middle" };
  }
  if (which === "first")
    return at.x + 4 - width < EDGE ? { x: EDGE, anchor: "start" } : { x: at.x + 4, anchor: "end" };
  return at.x - 4 + width > WIDTH - EDGE
    ? { x: WIDTH - EDGE, anchor: "end" }
    : { x: at.x - 4, anchor: "start" };
}

function place(end: End, side: Side, single: boolean): Label {
  const width = end.text.length * CHAR;
  const { x, anchor } = across(end, width, single);
  const y = side === "above" ? end.at.y - 8 : end.at.y + 16;
  const left = anchor === "end" ? x - width : anchor === "middle" ? x - width / 2 : x;
  const box = { left, right: left + width, top: y - ASCENT, bottom: y + DESCENT };
  return { which: end.which, text: end.text, x, y, anchor, box };
}

/** Away from the line: below when the neighbouring line rises from the dot, above otherwise. */
function sides(end: End): Side[] {
  return end.toward && end.toward.y < end.at.y ? ["below", "above"] : ["above", "below"];
}

const inBox = (box: Box, p: Point, pad = 0): boolean =>
  p.x >= box.left - pad && p.x <= box.right + pad && p.y >= box.top - pad && p.y <= box.bottom + pad;

const meet = (a: Box, b: Box): boolean =>
  a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;

/** A label is clear when it stays above the period axis and off every dot and drawn line. */
function clear(label: Label, points: readonly Point[], lines: readonly [Point, Point][]): boolean {
  const { box } = label;
  if (box.top < 0 || box.bottom > BOTTOM + 6) return false;
  if (points.some((p) => inBox(box, p, DOT_R))) return false;
  return lines.every(([a, b]) =>
    Array.from({ length: 41 }, (_, i) => i / 40).every(
      (t) => !inBox(box, { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }, 1),
    ),
  );
}

/** Both labels, on the first pair of sides that keeps them clear and apart; else the higher dot's above. */
function layout(ends: readonly End[], points: readonly Point[], lines: readonly [Point, Point][]): Label[] {
  const single = ends.length === 1;
  const [a, b] = ends;
  if (!a) return [];
  if (!b) {
    const options = sides(a).map((side) => place(a, side, true));
    return [options.find((label) => clear(label, points, lines)) ?? (options[0] as Label)];
  }
  const pairs = sides(a).flatMap((sa) => sides(b).map((sb) => [place(a, sa, single), place(b, sb, single)]));
  const found = pairs.find(
    ([la, lb]) =>
      la && lb && clear(la, points, lines) && clear(lb, points, lines) && !meet(la.box, lb.box),
  );
  if (found) return found;
  const aHigher = a.at.y <= b.at.y;
  return [place(a, aHigher ? "above" : "below", single), place(b, aHigher ? "below" : "above", single)];
}

function EndLabels({ dots, count, y }: { dots: readonly Dot[]; count: number; y: (v: number) => number }) {
  const points = dots.map((dot) => ({ x: x(dot.index, count), y: y(dot.fact.at) }));
  const lines = dots.flatMap((dot, i): [Point, Point][] => {
    const prev = dots[i - 1];
    const from = points[i - 1];
    const to = points[i];
    return prev && from && to && prev.index === dot.index - 1 ? [[from, to]] : [];
  });
  const end = (which: "first" | "last", i: number, toward: number): End[] => {
    const dot = dots[i];
    const at = points[i];
    return dot && at ? [{ which, at, toward: points[toward], text: figure(dot.fact) }] : [];
  };
  const ends =
    dots.length === 1 ? end("first", 0, 1) : [...end("first", 0, 1), ...end("last", dots.length - 1, dots.length - 2)];
  return layout(ends, points, lines).map((label) => (
    <text
      key={label.which}
      data-label={label.which}
      x={label.x.toFixed(2)}
      y={label.y.toFixed(2)}
      textAnchor={label.anchor}
      fontSize={LABEL_FONT}
      className="fill-text-primary font-mono"
    >
      {label.text}
    </text>
  ));
}

function Panel({
  series,
  periods,
  scale,
  facts,
  unit,
}: {
  series: TrendSeries;
  periods: readonly string[];
  scale: Scale;
  facts: readonly Fact[];
  unit: string;
}) {
  const { y } = scale;
  const dots: Dot[] = series.points.flatMap((fact, index) =>
    isStated(fact) ? [{ fact, index }] : [],
  );
  const missing = periods.flatMap((period, index) =>
    isStated(series.points[index]) ? [] : [{ period, ...missingAt(facts, period, unit) }],
  );
  const at = (dot: Dot) => `${x(dot.index, periods.length).toFixed(2)},${y(dot.fact.at).toFixed(2)}`;
  const last = dots.at(-1);
  const step = Math.ceil(periods.length / 6);
  const zero = y(0).toFixed(2);
  const label = `${series.name}: ${dots.map((dot) => figure(dot.fact)).join(", ")} across ${dots
    .map((dot) => dot.fact.period)
    .join(", ")}`;
  return (
    <article
      aria-label={series.name}
      className="flex min-w-0 flex-col gap-3 rounded-ds-lg border border-border-subtle bg-surface-card p-4"
    >
      <h3 className="text-small font-semibold wrap-anywhere">{series.name}</h3>
      <svg
        role="img"
        aria-label={label}
        viewBox={`0 0 ${String(WIDTH)} ${String(HEIGHT)}`}
        className="h-auto w-full text-chart-1"
      >
        <line
          data-bottom=""
          x1={PAD.left}
          x2={WIDTH - PAD.right}
          y1={BOTTOM}
          y2={BOTTOM}
          stroke="var(--color-border-subtle)"
        />
        <line
          data-zero=""
          x1={PAD.left}
          x2={WIDTH - PAD.right}
          y1={zero}
          y2={zero}
          stroke="var(--color-text-tertiary)"
          strokeWidth={1}
        />
        <text
          data-zero-label=""
          x={PAD.left - 4}
          y={zero}
          textAnchor="end"
          dominantBaseline="middle"
          className="fill-text-tertiary font-mono text-caption"
        >
          0
        </text>
        {periods.map((period, index) =>
          index % step === 0 ? (
            <text
              key={period}
              x={x(index, periods.length)}
              y={HEIGHT - 8}
              textAnchor="middle"
              className="fill-text-tertiary text-caption"
            >
              {period}
            </text>
          ) : null,
        )}
        {missing.map(({ period }) => {
          const gx = x(periods.indexOf(period), periods.length);
          return (
            <line
              key={period}
              data-gap={period}
              x1={gx}
              x2={gx}
              y1={BOTTOM}
              y2={BOTTOM - 14}
              stroke="var(--color-text-tertiary)"
              strokeWidth={2}
              strokeDasharray="2 2"
            />
          );
        })}
        <Lines dots={dots} at={at} />
        {dots.map((dot) => (
          <circle
            key={dot.index}
            data-value={dot.fact.text}
            data-period={dot.fact.period ?? ""}
            cx={x(dot.index, periods.length).toFixed(2)}
            cy={y(dot.fact.at).toFixed(2)}
            r={4}
            fill="currentColor"
          />
        ))}
        <EndLabels dots={dots} count={periods.length} y={y} />
      </svg>
      {dots.length < LINE_FROM ? (
        <ul
          aria-label="Figures as written"
          className="m-0 flex list-none flex-wrap gap-x-4 gap-y-1 p-0 font-mono text-small tabular-nums"
        >
          {dots.map((dot) => (
            <li key={dot.index}>
              <span className="text-text-tertiary">{dot.fact.period}</span>{" "}
              <span>{figure(dot.fact)}</span>
            </li>
          ))}
        </ul>
      ) : (
        last && (
          <p className="m-0 font-mono text-small tabular-nums">
            <span className="text-text-tertiary">{last.fact.period}</span>{" "}
            <span>{figure(last.fact)}</span>
          </p>
        )
      )}
      {missing.length > 0 && (
        <ul
          aria-label="Periods not drawn"
          className="m-0 grid list-none gap-1 p-0 text-caption text-text-tertiary"
        >
          {missing.map((item) => (
            <li key={item.period}>{`${item.period}: ${item.long}`}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

function TableView({
  field,
  unit,
  periods,
  series,
  factsFor,
}: {
  field: Field;
  unit: string;
  periods: readonly string[];
  series: readonly TrendSeries[];
  factsFor: (run: CoverageRun) => Fact[];
}) {
  return (
    <details className="rounded-ds-lg border border-border-subtle bg-surface-card p-4">
      <summary className="flex min-h-8 cursor-pointer items-center text-small font-medium max-[480px]:min-h-11">
        Table view
      </summary>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-small tabular-nums">
          <caption className="pb-2 text-left text-text-secondary">
            {`${field.label} by period, ${unit || "no unit stated"}`}
          </caption>
          <thead>
            <tr className="border-b border-border-subtle text-left">
              <th scope="col" className="p-2 font-semibold">
                Issuer
              </th>
              {periods.map((period) => (
                <th key={period} scope="col" className="p-2 font-semibold whitespace-nowrap">
                  {period}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {series.map((item) => (
              <tr key={item.name} className="border-b border-border-subtle last:border-b-0">
                <th scope="row" className="p-2 text-left font-semibold wrap-anywhere">
                  {item.name}
                </th>
                {periods.map((period, index) => {
                  const fact = item.points[index];
                  return (
                    <td
                      key={period}
                      className={cx("p-2", fact ? "font-mono" : "text-caption text-text-tertiary")}
                    >
                      {fact ? figure(fact) : missingAt(factsFor(item.run), period, unit).short}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}

/** Issuers whose newest run gives no figure in this unit: listed apart, with the truthful reason. */
function Absent({ rows, unit }: { rows: readonly { issuer: Issuer; reason: string }[]; unit: string }) {
  if (rows.length === 0) return null;
  return (
    <div className="gap-hatch grid gap-2 rounded-ds-lg border border-dashed border-border-gap p-4">
      <div className="grid gap-2 rounded-ds-sm bg-surface-card p-3">
        <h3 className="font-semibold text-text-primary">
          {`No figure to draw: the newest run states none in ${unit || "no unit stated"}`}
        </h3>
        <ul className="m-0 grid list-none gap-1 p-0 text-small text-gap-text">
          {rows.map(({ issuer, reason }) => (
            <li key={issuer.key}>
              <span className="font-medium text-text-primary">{issuer.name}</span>
              {`: ${reason}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * A figure down the module's own periods as small multiples: one panel per issuer's newest run,
 * all on one scale and one period axis, in one reporting unit. Nothing is averaged or scored.
 */
export function TrendView({
  data,
  issuers,
  field,
}: {
  data: Coverage;
  issuers: Issuer[];
  field: Field | undefined;
}) {
  const units = field ? fieldUnits(data, issuers, field.id) : [];
  const [picked, setPicked] = useState<string | null>(null);
  if (!field || units.length === 0)
    return (
      <p role="status" className={card}>
        No newest run of these issuers states this figure, so there is no trend to draw.
      </p>
    );
  const factsFor = (run: CoverageRun) => factsOf(data, run.key, field.id);
  const unit =
    picked !== null && units.includes(picked) ? picked : openingUnit(units, issuers, factsFor);
  const { periods, series } = trend(data, issuers, field.id, unit);
  const scale = scaleOf(series);
  const drawn = new Set(series.map((item) => item.run.key));
  const absent = issuers.flatMap((issuer) => {
    const run = latestRun(issuer);
    if (run && drawn.has(run.key)) return [];
    return [{ issuer, reason: absentReason(run ? factsFor(run) : [], unit) }];
  });
  return (
    <div className="grid gap-4">
      {units.length > 1 && (
        <div role="group" aria-label="Reporting unit" className="flex flex-wrap gap-2">
          {units.map((item) => (
            <Chip
              key={item}
              pressed={item === unit}
              onPress={() => {
                setPicked(item);
              }}
            >
              {item || "No unit stated"}
            </Chip>
          ))}
        </div>
      )}
      <p className="m-0 text-small text-text-secondary">
        One panel per issuer, from its newest run, on one scale. Periods are matched as written, so
        issuers with different year ends sit at different points. Each figure is as its module
        wrote it; bases can differ between issuers.
      </p>
      {scale.low && scale.high && (
        <p className="m-0 text-small text-text-secondary">
          {`Same scale in every panel: lowest stated figure ${figure(scale.low)}, highest ${figure(scale.high)}`}
        </p>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {series.map((item) => (
          <Panel
            key={item.name}
            series={item}
            periods={periods}
            scale={scale}
            facts={factsFor(item.run)}
            unit={unit}
          />
        ))}
      </div>
      <Absent rows={absent} unit={unit} />
      <TableView
        field={field}
        unit={unit}
        periods={periods}
        series={series}
        factsFor={factsFor}
      />
    </div>
  );
}
