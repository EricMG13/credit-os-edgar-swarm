import { useState } from "react";
import { ChartTable } from "@/components/chart/ChartTable";
import { Segmented } from "@/components/kit/Segmented";
import { cx } from "@/utils/cx";
import type { MaturityProfile } from "../../publishedReport";
import { amount, distinct } from "../../visuals/visualData";
import { PublishedSource } from "../PublishedTrace";
import type { maturityTraces } from "../comparisonTrace";
import { Figure, Tile } from "../overview/Tile";

type Traces = ReturnType<typeof maturityTraces>;
type Row = MaturityProfile["rows"][number];

const HEIGHT = 128;

/** Whether the profile can be drawn: a unit, distinct periods and at least one stated figure. */
export function usableProfile(profile: MaturityProfile) {
  const periods = profile.rows.map((row) => row.period);
  const values = profile.rows.flatMap((row) => [
    amount(row.prior ?? ""),
    amount(row.current ?? ""),
  ]);
  return (
    Boolean(profile.unit) &&
    periods.length > 0 &&
    distinct(periods) &&
    values.some((v) => v !== null)
  );
}

/** One side of one period: a bar when the cell is a number, its own words when it is not, a gap when absent. */
function Bar({
  cell,
  value,
  axis,
  current,
}: {
  cell: string | null;
  value: number | null;
  axis: { low: number; high: number };
  current: boolean;
}) {
  const span = axis.high - axis.low || 1;
  const label = (
    <Figure className="max-w-16 text-center text-caption leading-tight wrap-anywhere">
      {cell ?? "Not stated"}
    </Figure>
  );
  if (value === null)
    return (
      <div className="flex w-16 flex-col items-center justify-end gap-1">
        {label}
        <span
          className="gap-hatch block h-8 w-full rounded-t-ds-xs border border-dashed border-border-gap"
          data-gap
        />
      </div>
    );
  const up = (Math.max(value, 0) / span) * HEIGHT;
  const down = (Math.max(-value, 0) / span) * HEIGHT;
  return (
    <div className="flex w-16 flex-col items-center">
      {label}
      <div className="flex flex-col" style={{ height: `${String(HEIGHT)}px` }}>
        <div
          className="flex flex-col justify-end"
          style={{ height: `${String((axis.high / span) * HEIGHT)}px` }}
        >
          <span
            data-bar={current ? "current" : "earlier"}
            className={cx(
              "block w-16 rounded-t-ds-xs",
              current ? "bg-chart-1" : "border-2 border-chart-3 bg-surface-subtle",
            )}
            style={{ height: `${String(Math.max(up, value > 0 ? 2 : 0))}px` }}
          />
        </div>
        <span
          className={cx(
            "block w-16 rounded-b-ds-xs",
            current ? "bg-chart-1" : "border-2 border-chart-3 bg-surface-subtle",
          )}
          style={{ height: `${String(down)}px` }}
        />
      </div>
    </div>
  );
}

function Walls({ rows }: { rows: readonly Row[] }) {
  const values = rows
    .flatMap((row) => [amount(row.prior ?? ""), amount(row.current ?? "")])
    .filter((value): value is number => value !== null);
  const axis = { low: Math.min(0, ...values), high: Math.max(0, ...values) };
  return (
    <div className="grid gap-3">
      <p className="flex flex-wrap items-center gap-x-5 gap-y-1 text-caption text-text-secondary">
        <span className="flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className="size-3 rounded-ds-xs border-2 border-chart-3 bg-surface-subtle"
          />
          Earlier run: outlined bar
        </span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="size-3 rounded-ds-xs bg-chart-1" />
          This run: solid bar
        </span>
      </p>
      <div
        className="overflow-x-auto"
        role="region"
        aria-label="Maturity walls"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
      >
        <div className="flex min-w-max gap-3 pb-1">
          {rows.map((row) => (
            <div key={row.period} className="flex min-w-36 flex-1 flex-col gap-2">
              <div className="flex items-end justify-center gap-2 border-b border-border-container">
                <Bar cell={row.prior} value={amount(row.prior ?? "")} axis={axis} current={false} />
                <Bar cell={row.current} value={amount(row.current ?? "")} axis={axis} current />
              </div>
              <span className="text-center font-mono text-caption text-text-secondary wrap-anywhere">
                {row.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Sources({ name, prior, current }: { name: string; prior?: string; current?: string }) {
  if (!prior && !current) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {prior && (
        <PublishedSource
          href={prior}
          name={`${name}, earlier run`}
          linkLabel={`Earlier run source for ${name}`}
        >
          Earlier source
        </PublishedSource>
      )}
      {current && (
        <PublishedSource href={current} name={`${name}, current run`}>
          Current source
        </PublishedSource>
      )}
    </div>
  );
}

/** The two debt maturity schedules per stated period, in the pack's order, on one scale. */
export function MaturityPair({ profile, traces }: { profile: MaturityProfile; traces?: Traces }) {
  const [view, setView] = useState<"chart" | "table">("chart");
  return (
    <Tile
      span={12}
      label="Maturities then and now"
      kicker={`Debt maturing by period, ${profile.unit}`}
      title="Debt maturities, earlier run against this run"
      trace={
        <div className="flex items-center gap-3">
          <Sources
            name="Debt maturity schedules"
            prior={traces?.prior?.table}
            current={traces?.current.table}
          />
          <Segmented
            label="Maturities view"
            current={view}
            onSelect={(key) => {
              setView(key === "table" ? "table" : "chart");
            }}
            segments={[
              { key: "chart", label: "Chart" },
              { key: "table", label: "Table" },
            ]}
          />
        </div>
      }
    >
      {view === "chart" ? (
        <Walls rows={profile.rows} />
      ) : (
        <ChartTable
          caption="Debt maturity schedules"
          head={["Period", "Earlier run", "Current run"]}
          endHeading="Sources"
          rows={profile.rows.map((row) => {
            const prior = traces?.prior?.row(row.period, row.prior, profile.unit);
            const current = traces?.current.row(row.period, row.current, profile.unit);
            return {
              label: row.period,
              cells: [row.prior, row.current],
              end:
                prior || current ? (
                  <Sources name={row.period} prior={prior} current={current} />
                ) : undefined,
            };
          })}
        />
      )}
    </Tile>
  );
}
