import { ChartWithTable } from "@/components/chart/ChartWithTable";
import { cx } from "@/utils/cx";
import type { MaturityProfile } from "../../publishedReport";
import { amount, distinct } from "../../visuals/visualData";
import { PublishedSource } from "../PublishedTrace";
import type { maturityTraces } from "../comparisonTrace";

type Traces = ReturnType<typeof maturityTraces>;
type Row = MaturityProfile["rows"][number];
type Column = { key: string; label: string; row: Row | null };

const HEIGHT = 144;
const YEAR = /(?<!\d)((?:19|20)\d{2})(?!\d)/;

/** Columns for the stated periods: consecutive years at true spacing when every period is a year, else as listed. */
function maturityColumns(rows: readonly Row[]): { columns: Column[]; after: Column[] } {
  const dated = rows.flatMap((row) => {
    const year = YEAR.exec(row.period)?.[1];
    return year ? [{ row, year: Number(year) }] : [];
  });
  const undated = rows.filter((row) => !YEAR.test(row.period));
  const years = dated.map(({ year }) => year);
  const trailing = undated.map((row) => ({ key: row.period, label: row.period, row }));
  if (
    !dated.length ||
    new Set(years).size !== years.length ||
    Math.max(...years) - Math.min(...years) > 40
  )
    return { columns: rows.map((row) => ({ key: row.period, label: row.period, row })), after: [] };
  const [first, last] = [Math.min(...years), Math.max(...years)];
  const columns = Array.from({ length: last - first + 1 }, (_, at): Column => {
    const year = first + at;
    const found = dated.find((item) => item.year === year);
    return { key: String(year), label: found?.row.period ?? String(year), row: found?.row ?? null };
  });
  return { columns, after: trailing };
}

function Bar({
  value,
  cell,
  scale,
  fill,
  name,
}: {
  value: number | null;
  cell: string | null;
  scale: number;
  fill: string;
  name: string;
}) {
  if (value === null)
    return (
      <span
        className="gap-hatch block h-6 w-3 rounded-t-ds-xs border border-dashed border-border-gap"
        title={`${name}: not stated`}
      />
    );
  return (
    <span
      className={cx("block w-3 rounded-t-ds-xs", fill)}
      style={{ height: `${String(Math.max(2, (Math.abs(value) / scale) * HEIGHT))}px` }}
      title={`${name}: ${cell ?? ""}`}
    />
  );
}

function Wall({ column, scale }: { column: Column; scale: number }) {
  const { row } = column;
  const prior = row ? amount(row.prior ?? "") : null;
  const current = row ? amount(row.current ?? "") : null;
  return (
    <div className="flex w-14 flex-none flex-col items-center gap-1">
      <div className="flex items-end gap-1" style={{ height: `${String(HEIGHT)}px` }}>
        {row ? (
          <>
            <Bar
              value={prior}
              cell={row.prior}
              scale={scale}
              fill="bg-chart-3"
              name="Earlier run"
            />
            <Bar
              value={current}
              cell={row.current}
              scale={scale}
              fill="bg-chart-1"
              name="Current run"
            />
          </>
        ) : null}
      </div>
      <span className="h-px w-full bg-border-container" />
      <span className="font-mono text-caption text-text-secondary tabular-nums">
        {column.label}
      </span>
    </div>
  );
}

/** The two debt maturity schedules side by side, per period, on one axis and one scale. */
export function MaturityPair({ profile, traces }: { profile: MaturityProfile; traces?: Traces }) {
  const { columns, after } = maturityColumns(profile.rows);
  const values = profile.rows.flatMap((row) => [
    amount(row.prior ?? ""),
    amount(row.current ?? ""),
  ]);
  const scale = Math.max(...values.map((value) => Math.abs(value ?? 0)), 1);
  return (
    <ChartWithTable
      title="Debt maturity schedules"
      as="h3"
      note={profile.unit}
      actions={
        <MaturitySources
          name="Debt maturity schedules"
          prior={traces?.prior?.table}
          current={traces?.current.table}
        />
      }
      chart={
        <div className="grid gap-3">
          <p className="flex flex-wrap items-center gap-4 text-caption text-text-secondary">
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true" className="size-2.5 rounded-ds-xs bg-chart-3" />
              Earlier run
            </span>
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true" className="size-2.5 rounded-ds-xs bg-chart-1" />
              Current run
            </span>
            <span>{profile.unit}</span>
          </p>
          <div
            className="overflow-x-auto"
            role="region"
            aria-label="Maturity walls"
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
          >
            <div className="flex min-w-max items-end gap-1 pb-1">
              {columns.map((column) => (
                <Wall key={column.key} column={column} scale={scale} />
              ))}
              {after.length > 0 && (
                <span aria-hidden="true" className="px-2 pb-6 font-mono text-text-tertiary">
                  //
                </span>
              )}
              {after.map((column) => (
                <Wall key={column.key} column={column} scale={scale} />
              ))}
            </div>
          </div>
        </div>
      }
      table={{
        head: ["Period", "Earlier run", "Current run"],
        endHeading: "Sources",
        rows: profile.rows.map((row) => {
          const prior = traces?.prior?.row(row.period, row.prior, profile.unit);
          const current = traces?.current.row(row.period, row.current, profile.unit);
          return {
            label: row.period,
            cells: [row.prior, row.current],
            end:
              prior || current ? (
                <MaturitySources name={row.period} prior={prior} current={current} />
              ) : undefined,
          };
        }),
      }}
    />
  );
}

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

function MaturitySources({
  name,
  prior,
  current,
}: {
  name: string;
  prior?: string;
  current?: string;
}) {
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
