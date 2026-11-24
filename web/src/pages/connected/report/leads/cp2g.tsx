import { Fragment } from "react";
import { ChartTable, type TableCell } from "@/components/chart/ChartTable";
import { items, record, ticks, word } from "../../visuals/visualData";
import { scenarioShareLabel } from "../Downside";
import { forecastInput } from "../ForecastRecord";
import { GapPattern } from "../overview/figureParts";
import { forwardPath } from "../overview/stressData";
import { Bento, Tile } from "../overview/Tile";
import { LeadBlocked, LeadFigure, LeadGap, NEEDS, Trace } from "./parts";
import { blockedState, leadHref, readerCell } from "./read";
import type { LeadProps } from "./types";

const PATH_LABEL = "Net leverage path";
const DRIVERS = "Drivers by case";

type Path = NonNullable<ReturnType<typeof forwardPath>>;
type Point = Path["cases"][number]["points"][number];

const TONES = [
  { stroke: "stroke-chart-1", fill: "fill-chart-1" },
  { stroke: "stroke-chart-2", fill: "fill-chart-2" },
  { stroke: "stroke-chart-3", fill: "fill-chart-3" },
] as const;
const toneOf = (at: number) => TONES[at % TONES.length] ?? TONES[0];

/** The highest value the model states on any drawn point: selection only, never a computed figure. */
function peakOf(path: Path) {
  let best: { group: string; period: string; display: string; value: number } | null = null;
  for (const { group, points } of path.cases)
    for (const point of points)
      if (point.value !== null && (best === null || point.value > best.value))
        best = { group, period: point.period, display: point.display, value: point.value };
  return best;
}

const P = { width: 240, height: 150, left: 30, right: 230, top: 36, base: 118 } as const;

/** One scale for every case: the model's values placed between the axis ticks, nothing joined across a gap. */
function scaleOf(path: Path) {
  const scale = ticks(path.cases.flatMap(({ points }) => points.map((point) => point.value)));
  const lo = scale[0]?.value ?? 0;
  const hi = scale.at(-1)?.value ?? 1;
  const y = (value: number) => P.base - ((value - lo) / (hi - lo || 1)) * (P.base - P.top);
  return { scale, y };
}

function CasePanel({
  group,
  points,
  periods,
  tone,
  peak,
  mark,
  y,
  scale,
}: {
  group: string;
  points: readonly Point[];
  periods: readonly string[];
  tone: (typeof TONES)[number];
  peak: ReturnType<typeof peakOf>;
  /** The word set over the highest point: "Peak" only on a complete path. */
  mark: string;
  y: (value: number) => number;
  scale: ReturnType<typeof ticks>;
}) {
  const step = periods.length > 1 ? (P.right - P.left - 36) / (periods.length - 1) : 0;
  const x = (period: string) =>
    periods.length > 1 ? P.left + 18 + periods.indexOf(period) * step : (P.left + P.right) / 2;
  const placed = points.map((point) => ({
    ...point,
    x: x(point.period),
    y: point.value === null ? null : y(point.value),
  }));
  const gapId = `forward-gap-${group.replace(/\W+/g, "-")}`;
  return (
    <div data-case={group} className="flex min-w-0 flex-col gap-1">
      <h4 className="text-caption font-medium text-text-secondary">{group}</h4>
      <svg
        viewBox={`0 0 ${String(P.width)} ${String(P.height)}`}
        width="100%"
        className="block max-w-sm"
      >
        <defs>
          <GapPattern id={gapId} />
        </defs>
        {scale.map((tick) => (
          <Fragment key={tick.value}>
            <line
              x1={P.left}
              y1={y(tick.value)}
              x2={P.right}
              y2={y(tick.value)}
              className="stroke-border-hairline"
            />
            <text
              x="0"
              y={y(tick.value) + 4}
              fontSize="11"
              className="fill-text-tertiary font-mono"
            >
              {tick.label}x
            </text>
          </Fragment>
        ))}
        {placed.map((point) =>
          point.y === null ? (
            <rect
              key={point.period}
              data-gap={point.period}
              x={point.x - 16}
              y={P.top - 8}
              width="32"
              height={P.base - P.top + 16}
              rx="4"
              fill={`url(#${gapId})`}
              strokeDasharray="3 3"
              className="stroke-border-gap"
            />
          ) : null,
        )}
        {placed.map((point, at) => {
          const next = placed[at + 1];
          return point.y !== null && next?.y != null ? (
            <line
              key={`segment-${point.period}`}
              x1={point.x}
              y1={point.y}
              x2={next.x}
              y2={next.y}
              strokeWidth="2"
              className={tone.stroke}
            />
          ) : null;
        })}
        {placed.map((point) => {
          if (point.y === null) return null;
          const isPeak = peak?.group === group && peak.period === point.period;
          return (
            <Fragment key={point.period}>
              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                data-peak={isPeak ? point.display : undefined}
                className={tone.fill}
              />
              <text
                x={point.x}
                y={point.y - 9}
                textAnchor="middle"
                fontSize="11"
                className="fill-text-primary font-mono"
              >
                {point.display}
              </text>
              {isPeak && (
                <text
                  x={point.x}
                  y={point.y - 22}
                  textAnchor="middle"
                  fontSize="11"
                  className="fill-text-secondary font-body"
                >
                  {mark}
                </text>
              )}
            </Fragment>
          );
        })}
        {periods.map((period) => (
          <text
            key={period}
            x={x(period)}
            y={P.height - 8}
            textAnchor="middle"
            fontSize="11"
            className="fill-text-tertiary font-body"
          >
            {period}
          </text>
        ))}
      </svg>
    </div>
  );
}

/** Net leverage by case as small multiples on one shared scale: each case's points as the model displays them. */
function PathPanels({
  path,
  peak,
  mark,
}: {
  path: Path;
  peak: ReturnType<typeof peakOf>;
  mark: string;
}) {
  const periods = [...new Set(path.cases.flatMap(({ points }) => points.map((p) => p.period)))];
  const { scale, y } = scaleOf(path);
  const reading = path.cases
    .map(
      ({ group, points }) =>
        `${group}: ${points.map((point) => `${point.period} ${point.value === null ? "no figure" : point.display}`).join(", ")}`,
    )
    .join(". ");
  return (
    <div
      role="img"
      aria-label={`${path.measure}, one scale for every case. ${reading}.`}
      className="@container min-w-0"
    >
      <div
        aria-hidden="true"
        className="grid grid-cols-1 gap-x-6 gap-y-4 @xl:grid-cols-2 @4xl:grid-cols-3"
      >
        {path.cases.map(({ group, points }, at) => (
          <CasePanel
            key={group}
            group={group}
            points={points}
            periods={periods}
            tone={toneOf(at)}
            peak={peak}
            mark={mark}
            y={y}
            scale={scale}
          />
        ))}
      </div>
    </div>
  );
}

function ForwardPathTile({ view, href }: { view: LeadProps["view"]; href: string }) {
  const model = view.models[0];
  const path = model ? forwardPath(model) : null;
  if (!path)
    return (
      <LeadGap
        span={12}
        label={PATH_LABEL}
        kicker="Case paths"
        title="Net leverage by case"
        reason={
          model
            ? "The published model has no net leverage path."
            : "No forecast model was published for this run."
        }
      />
    );
  const peak = peakOf(path);
  const periods = [...new Set(path.cases.flatMap(({ points }) => points.map((p) => p.period)))];
  // "Peaks" only when every case states a figure for every period; otherwise the highest stated.
  const complete = path.cases.every(({ points }) =>
    periods.every((period) =>
      points.some((point) => point.period === period && point.value !== null),
    ),
  );
  const gaps = path.cases.flatMap(({ group, points }) =>
    points
      .filter((point) => point.value === null)
      .map(
        (point) =>
          `${group}, ${point.period}: ${readerCell(point.reason) || "no figure in the model"}.`,
      ),
  );
  return (
    <LeadFigure
      span={12}
      label={PATH_LABEL}
      kicker="Case paths"
      title={
        peak
          ? `${complete ? "Net leverage peaks at" : "Highest stated net leverage"} ${peak.display} (${peak.group}, ${peak.period})`
          : "Net leverage by case"
      }
      basis={`${path.measure}; every case on one scale`}
      legend={
        <a
          href="#forecast"
          className="inline-flex min-h-8 items-center text-small font-medium text-text-link underline"
        >
          Open the forecast
        </a>
      }
      trace={<Trace href={href} name="the forward credit model" />}
      figure={<PathPanels path={path} peak={peak} mark={complete ? "Peak" : "Highest"} />}
      table={{
        head: ["Case", ...periods],
        rows: path.cases.map(({ group, points }) => ({
          label: group,
          cells: periods.map((period): TableCell => {
            const point = points.find((item) => item.period === period);
            return point && point.value !== null && point.display ? point.display : { gap: true };
          }),
        })),
      }}
      notes={[
        <span key="limit" className="flex flex-col gap-0.5">
          <span>No limit is published with the model.</span>
          <span className="text-text-tertiary">{NEEDS.method}</span>
        </span>,
        ...gaps,
        ...path.limits,
      ]}
    />
  );
}

const DRIVER_NAMES: Record<string, string> = {
  revenue_growth: "Revenue growth",
  ebitda_margin: "EBITDA margin",
  capex_pct_revenue: "Capital expenditure as a share of revenue",
  tax_wc_pct_revenue: "Tax and working capital as a share of revenue",
  interest_rate: "Interest rate",
  dividends: "Dividends",
  debt_repayment: "Debt repayment",
};
const SHARES = new Set([
  "revenue_growth",
  "ebitda_margin",
  "capex_pct_revenue",
  "tax_wc_pct_revenue",
  "interest_rate",
]);
const CASES = [
  ["base_drivers", "Base case"],
  ["upside_drivers", "Upside case"],
  ["downside_drivers", "Downside drivers"],
] as const;

const driverName = (key: string) => DRIVER_NAMES[key] ?? key.replaceAll("_", " ");

function stated(key: string, value: unknown): TableCell {
  if (typeof value === "number")
    return SHARES.has(key) ? scenarioShareLabel(String(value)) : String(value);
  if (typeof value !== "string" || !value.trim()) return { gap: true };
  return SHARES.has(key) ? scenarioShareLabel(value.trim()) : readerCell(value) || { gap: true };
}

/** The block's amount units in words: scale 1 is millions and 1000 thousands (cpos_forecast). */
function amountUnits(document: Record<string, unknown>) {
  const currency = word(document.currency) || "currency not recorded";
  const magnitude =
    document.scale === 1000 ? "thousands" : document.scale === 1 ? "millions" : null;
  return magnitude
    ? `Amounts: ${currency} ${magnitude}, as recorded. Shares are shown as percentages.`
    : `Amounts as recorded; ${currency}. Shares are shown as percentages.`;
}

function shockLine(document: Record<string, unknown>) {
  const shock = document.downside_shock;
  if (shock === null || typeof shock !== "object") return "No downside shock is stated.";
  const { ebitda_decline: decline, rate_increase: rate } = record(shock);
  const share = (value: unknown) =>
    typeof value === "string" && value.trim() ? scenarioShareLabel(value.trim()) : "not stated";
  return `Downside shock: EBITDA decline ${share(decline)}, interest-rate increase ${share(rate)}.`;
}

/** The forecast block's drivers by case and year, as stated; a case's inherited driver in words. */
function DriversTile({
  entry,
  href,
}: {
  entry: LeadProps["entry"];
  href: (line?: number) => string;
}) {
  const input = forecastInput(entry);
  if (!input)
    return (
      <LeadGap
        span={12}
        label={DRIVERS}
        title="Forecast drivers by case"
        reason="The handoff has no machine-readable forecast inputs block."
      />
    );
  const document = input.value;
  const years = items(document.years).map((year) => {
    const stated = record(year).year;
    return typeof stated === "number" ? String(stated) : word(stated) || "Year not stated";
  });
  const cases = CASES.filter(([key]) => {
    const value = document[key];
    return value !== null && typeof value === "object";
  });
  const base = record(document.base_drivers);
  const keys = [...new Set(cases.flatMap(([key]) => Object.keys(record(document[key]))))];
  const values = (group: string, key: string) => items(record(record(document[group])[key]).values);
  const anyValue = cases.some(([group]) =>
    keys.some((key) => values(group, key).some((value) => value !== null && value !== "")),
  );
  if (!anyValue) {
    const reasons = keys.flatMap((key) => {
      const rationale = word(record(base[key]).rationale).trim();
      return rationale ? [`${driverName(key)}: ${readerCell(rationale)}`] : [];
    });
    return (
      <LeadGap
        span={12}
        label={DRIVERS}
        title="Forecast drivers by case"
        reason="The forecast block states no driver values."
      >
        {reasons.length > 0 && (
          <ul className="flex flex-col gap-1.5 text-small text-text-secondary">
            {reasons.map((text) => (
              <li key={text} className="wrap-anywhere">
                {text}
              </li>
            ))}
          </ul>
        )}
        <Trace href={href(input.line)} name="the forecast inputs" />
      </LeadGap>
    );
  }
  const rows = keys.map((key) => ({
    label: driverName(key),
    cells: cases.flatMap(([group]) => {
      const inherited = group !== "base_drivers" && record(document[group])[key] === undefined;
      const list = values(group, key);
      return years.map((_, at): TableCell => (inherited ? "As base" : stated(key, list[at])));
    }),
  }));
  const head = ["Driver", ...cases.flatMap(([, name]) => years.map((year) => `${name}, ${year}`))];
  return (
    <Tile
      span={12}
      label={DRIVERS}
      kicker="Drivers by case"
      title="Forecast drivers by case and year, as stated"
      trace={<Trace href={href(input.line)} name="the forecast inputs" />}
    >
      <p className="-mt-2 text-caption text-text-tertiary">
        {amountUnits(document)} A case shows “As base” where it keeps the base driver.
      </p>
      <ChartTable caption={DRIVERS} head={head} rows={rows} />
      <p className="border-t border-border-hairline pt-3 text-caption text-text-secondary">
        {shockLine(document)}
      </p>
    </Tile>
  );
}

/** CP-2G: where net leverage goes in each case of the published model, and the drivers behind it. */
export function ForwardLead(props: LeadProps) {
  const { entry, view } = props;
  const href = leadHref(props);
  const stopped = blockedState(entry);
  if (stopped)
    return (
      <Bento>
        <LeadBlocked span={12} label={PATH_LABEL} title={PATH_LABEL} reason={stopped.reason} />
      </Bento>
    );
  return (
    <Bento>
      <ForwardPathTile view={view} href={href()} />
      <DriversTile entry={entry} href={href} />
    </Bento>
  );
}
