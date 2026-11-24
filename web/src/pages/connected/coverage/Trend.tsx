import { useState } from "react";
import { cx } from "@/utils/cx";
import {
  fieldUnits,
  figure,
  trend,
  type Coverage,
  type Fact,
  type Field,
  type Issuer,
  type TrendSeries,
} from "../coverageData";
import { Chip } from "../libraryRows/Chips";
import { card } from "../layout";

type Stated = Fact & { at: number };
type Dot = { fact: Stated; index: number };

const WIDTH = 320;
const HEIGHT = 140;
const PAD = { left: 12, right: 12, top: 12, bottom: 26 };
const PLOT_WIDTH = WIDTH - PAD.left - PAD.right;
const PLOT_HEIGHT = HEIGHT - PAD.top - PAD.bottom;
const BASELINE = PAD.top + PLOT_HEIGHT;
/** Where a figure is drawn only as dots and written values, not as a line. */
const LINE_FROM = 3;

const isStated = (fact: Fact | null): fact is Stated => fact !== null && fact.at !== null;

/** One scale for every panel: from zero (or the lowest figure) to the highest figure. */
function scaleOf(series: readonly TrendSeries[]): (value: number) => number {
  const values = series.flatMap((item) => item.points.flatMap((fact) => fact?.at ?? []));
  const low = Math.min(0, ...values);
  const high = Math.max(low + 1, ...values);
  return (value) => PAD.top + ((high - value) / (high - low)) * PLOT_HEIGHT;
}

const x = (index: number, count: number): number =>
  PAD.left + ((index + 0.5) / count) * PLOT_WIDTH;

function Panel({
  series,
  periods,
  y,
}: {
  series: TrendSeries;
  periods: readonly string[];
  y: (value: number) => number;
}) {
  const dots: Dot[] = series.points.flatMap((fact, index) =>
    isStated(fact) ? [{ fact, index }] : [],
  );
  const missing = periods.filter((_, index) => !isStated(series.points[index] ?? null));
  const at = (dot: Dot) => `${x(dot.index, periods.length).toFixed(2)},${y(dot.fact.at).toFixed(2)}`;
  const last = dots.at(-1);
  const step = Math.ceil(periods.length / 6);
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
          x1={PAD.left}
          x2={WIDTH - PAD.right}
          y1={BASELINE}
          y2={BASELINE}
          stroke="var(--color-border-subtle)"
        />
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
        {periods.map((period, index) =>
          isStated(series.points[index] ?? null) ? null : (
            <line
              key={period}
              data-gap={period}
              x1={x(index, periods.length)}
              x2={x(index, periods.length)}
              y1={BASELINE}
              y2={BASELINE - 14}
              stroke="var(--color-text-tertiary)"
              strokeWidth={2}
              strokeDasharray="2 2"
            />
          ),
        )}
        {dots.length >= LINE_FROM && (
          <polyline
            points={dots.map(at).join(" ")}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinejoin="round"
          />
        )}
        {dots.length === 2 && dots[0] && dots[1] && (
          <line
            x1={x(dots[0].index, periods.length)}
            y1={y(dots[0].fact.at)}
            x2={x(dots[1].index, periods.length)}
            y2={y(dots[1].fact.at)}
            stroke="currentColor"
            strokeWidth={1}
          />
        )}
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
      </svg>
      {dots.length < LINE_FROM ? (
        <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-1 p-0 font-mono text-small tabular-nums">
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
        <p className="m-0 text-caption text-text-tertiary">Not stated: {missing.join(", ")}</p>
      )}
    </article>
  );
}

function TableView({
  field,
  unit,
  periods,
  series,
}: {
  field: Field;
  unit: string;
  periods: readonly string[];
  series: readonly TrendSeries[];
}) {
  return (
    <details className="rounded-ds-lg border border-border-subtle bg-surface-card p-4">
      <summary className="cursor-pointer text-small font-medium">Table view</summary>
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
                      className={cx("p-2 font-mono", !fact && "text-text-tertiary")}
                    >
                      {fact ? figure(fact) : "Not stated"}
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
  const [picked, setPicked] = useState("");
  const unit = units.includes(picked) ? picked : (units[0] ?? "");
  if (!field || units.length === 0)
    return (
      <p role="status" className={card}>
        No newest run of these issuers states this figure, so there is no trend to draw.
      </p>
    );
  const { periods, series } = trend(data, issuers, field.id, unit);
  const y = scaleOf(series);
  return (
    <div className="grid gap-4">
      {units.length > 1 && (
        <div role="group" aria-label="Reporting unit" className="flex flex-wrap gap-2">
          {units.map((item) => (
            <Chip key={item} pressed={item === unit} onPress={() => {
                setPicked(item);
              }}>
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {series.map((item) => (
          <Panel key={item.name} series={item} periods={periods} y={y} />
        ))}
      </div>
      <TableView field={field} unit={unit} periods={periods} series={series} />
    </div>
  );
}
