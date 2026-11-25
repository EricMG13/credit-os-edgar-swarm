import { Fragment } from "react";
import { blocked, withUnit } from "../../publishedReport";
import { ticks, type SourceTable } from "../../visuals/visualData";
import { basisNotes, readCell } from "../overview/figureData";
import { Key } from "../overview/figureParts";
import { Bento, GapNote, Tile } from "../overview/Tile";
import { withDraws } from "./draws";
import { LeadFigure, LeadGap, Trace } from "./parts";
import {
  chartOf,
  columnOf,
  leadHref,
  readerCell,
  readerCellOf,
  registerTable,
  rowName,
  WITHHELD,
} from "./read";
import type { LeadProps } from "./types";

type Href = (line?: number) => string;

const TITLE = "Yield against maturity";
const COLUMNS = [
  "Instrument",
  "Maturity date",
  "Yield",
  "Spread",
  "Quote date",
  "Source class",
] as const;
const DAY = 86_400_000;

/** A stated calendar date as a time, or null for any other text. */
function dayOf(text: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) return null;
  const time = Date.parse(`${text}T00:00:00Z`);
  return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === text ? time : null;
}

function quotes(table: SourceTable) {
  const at = COLUMNS.map((name) => columnOf(table, name));
  if (at.some((column) => column < 0)) return null;
  const [name = 0, maturity = 1, yieldAt = 2] = at;
  const scope = table.rows.map((row) => row[yieldAt] ?? "");
  return table.rows.map((row, index) => {
    const unit = row.at(-2) ?? "";
    const cell = readerCellOf(readCell(row[yieldAt] ?? "", scope, unit));
    return {
      name: readerCell(row[name] ?? "") || "Instrument not stated",
      maturity: readerCell(row[maturity] ?? ""),
      day: dayOf(row[maturity] ?? ""),
      cell,
      unit,
      cells: at.map((column) => row[column] ?? ""),
      line: table.rowLines?.[index] ?? table.line,
      index,
    };
  });
}

type Quote = NonNullable<ReturnType<typeof quotes>>[number];

/** Why a quote is not placed: its stated gap, a yield below zero, or its maturity date. */
function unplacedReason(row: Quote) {
  if (row.cell.value === null) return row.cell.text || "Not supplied";
  if (row.cell.value < 0) return "Stated yield below zero; not placed.";
  return `maturity date ${row.maturity || "not stated"}`;
}
type Placed = Quote & { day: number; value: number };

const W = { width: 400, height: 236, left: 36, right: 384, top: 14, base: 200 } as const;

/**
 * The date axis: 1 January of each year inside the domain, at most five labels; within one year,
 * the earliest and latest stated maturity dates (points are sorted by date).
 */
function dateTicks(low: number, high: number, points: readonly Placed[]) {
  const first = new Date(low).getUTCFullYear() + 1;
  const last = new Date(high).getUTCFullYear();
  const years = Array.from({ length: Math.max(0, last - first + 1) }, (_, at) => first + at);
  const step = Math.ceil(years.length / 5) || 1;
  if (years.length)
    return years
      .filter((_, at) => at % step === 0)
      .map((year) => ({ label: String(year), time: Date.UTC(year, 0, 1) }));
  const ends = [points[0], points.at(-1)].flatMap((point) => (point ? [point] : []));
  return [...new Map(ends.map((point) => [point.maturity, point.day])).entries()].map(
    ([label, time]) => ({ label, time }),
  );
}

function Scatter({ points, label }: { points: Placed[]; label: string }) {
  const days = points.map((point) => point.day);
  const pad = Math.max(120 * DAY, (Math.max(...days) - Math.min(...days)) * 0.06);
  const low = Math.min(...days) - pad;
  const high = Math.max(...days) + pad;
  const scale = ticks(points.map((point) => point.value));
  const top = scale.at(-1)?.value ?? 1;
  const x = (time: number) => W.left + ((time - low) / (high - low)) * (W.right - W.left);
  const y = (value: number) => W.base - (value / (top || 1)) * (W.base - W.top);
  return (
    <div className="grid min-w-0 grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
      <svg
        viewBox={`0 0 ${String(W.width)} ${String(W.height)}`}
        width="100%"
        role="img"
        aria-label={label}
        className="block"
      >
        {scale.map((tick) => (
          <Fragment key={tick.value}>
            <line
              x1={W.left}
              x2={W.right}
              y1={y(tick.value)}
              y2={y(tick.value)}
              className={tick.value === 0 ? "stroke-connector" : "stroke-border-hairline"}
            />
            <text
              x={W.left - 6}
              y={y(tick.value) + 4}
              textAnchor="end"
              fontSize="12"
              className="fill-text-tertiary font-mono"
            >
              {tick.label}
            </text>
          </Fragment>
        ))}
        {dateTicks(low, high, points).map(({ label: date, time }) => (
          <Fragment key={date}>
            <line
              x1={x(time)}
              x2={x(time)}
              y1={W.base}
              y2={W.base + 4}
              className="stroke-connector"
            />
            <text
              x={x(time)}
              y={W.base + 18}
              textAnchor="middle"
              fontSize="12"
              className="fill-text-tertiary font-mono"
            >
              {date}
            </text>
          </Fragment>
        ))}
        {points.map((point, at) => {
          const cx = x(point.day);
          const cy = y(point.value);
          return (
            <g key={point.index}>
              <circle data-point={point.name} cx={cx} cy={cy} r="4.5" className="fill-chart-1" />
              <text
                x={cx}
                y={cy - 9}
                textAnchor="middle"
                fontSize="12"
                className="fill-text-primary font-mono font-medium"
              >
                {at + 1}
              </text>
            </g>
          );
        })}
      </svg>
      <ol aria-label="Instruments by maturity" className="flex min-w-0 flex-col">
        {points.map((point, at) => (
          <li
            key={point.index}
            className="grid grid-cols-[1.5rem_minmax(0,1fr)_auto] items-baseline gap-2 border-t border-border-hairline py-2 first:border-t-0 first:pt-0"
          >
            <span className="font-mono text-small text-text-tertiary">{at + 1}</span>
            <span className="flex min-w-0 flex-col">
              <span className="text-small wrap-anywhere text-text-primary">{point.name}</span>
              <span className="font-mono text-caption text-text-tertiary">{point.maturity}</span>
            </span>
            <span className="font-mono text-small font-medium text-text-primary tabular-nums">
              {withUnit(point.cell.text, point.unit)}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function YieldFigure({ entry, href }: { entry: LeadProps["entry"]; href: Href }) {
  const chart = chartOf(entry, TITLE);
  const rows = chart.state === "ready" ? quotes(chart.table) : null;
  if (chart.state !== "ready" || !rows)
    return (
      <LeadGap
        span={8}
        label={TITLE}
        title={TITLE}
        reason={
          chart.state === "gap"
            ? chart.reason
            : chart.state === "ready"
              ? "The yield table is not in its fixed shape."
              : chart.state === "withheld"
                ? WITHHELD
                : "The module wrote no yield against maturity table."
        }
        trace={
          chart.state === "withheld" ? <Trace href={href(chart.line)} name={TITLE} /> : undefined
        }
      />
    );
  const candidates = rows
    .flatMap((row): Placed[] =>
      row.day !== null && row.cell.value !== null && row.cell.value >= 0
        ? [{ ...row, day: row.day, value: row.cell.value }]
        : [],
    )
    .sort((a, b) => a.day - b.day);
  // One axis only for one unit: yields in two units are not placed against each other.
  const units = new Set(candidates.map((row) => row.unit));
  const placed = units.size === 1 ? candidates : [];
  const unit = placed[0]?.unit ?? "";
  const unplotted = rows
    .filter((row) => !candidates.some((point) => point.index === row.index))
    .map((row) => `${row.name}: ${unplacedReason(row)}`);
  const reading = `Yield against maturity date${unit ? `, in ${unit}` : ""}. ${placed
    .map(
      (point) =>
        `${point.name} matures ${point.maturity} at ${withUnit(point.cell.text, point.unit)}.`,
    )
    .join(" ")}`;
  return (
    <LeadFigure
      span={8}
      label={TITLE}
      kicker="Market-implied risk"
      title="Observed yield by maturity date"
      basis={unit ? `Yield in ${unit}, from zero; maturity on a date axis` : undefined}
      legend={<Key tone="primary">Observed yield</Key>}
      trace={<Trace href={href(chart.table.line)} name={TITLE} />}
      figure={
        placed.length ? (
          <Scatter points={placed} label={reading} />
        ) : (
          <GapNote>
            {units.size > 1
              ? "The yields are stated in more than one unit."
              : "No instrument has both a stated yield and a maturity date."}
          </GapNote>
        )
      }
      table={{
        head: [...COLUMNS],
        rows: rows.map((row) => ({
          label: row.name,
          cells: row.cells.slice(1).map((cell) => readerCell(cell) || null),
          end: <Trace href={href(row.line)} name={row.name} />,
        })),
        endHeading: "Source",
      }}
      notes={[...unplotted, ...basisNotes(chart.table)]}
    />
  );
}

const IMPLIED_FIELDS = [
  { name: "Model", test: /^model$/i },
  { name: "Horizon", test: /^horizon$/i },
  { name: "Recovery", test: /^recovery$/i },
  { name: "Implied", test: /^implied\b/i },
] as const;

function Implied({ entry, href }: { entry: LeadProps["entry"]; href: Href }) {
  const label = "Market-implied default";
  const table = registerTable(entry, "T3E.5", ["model", "horizon"]);
  if (!table?.rows.length)
    return (
      <LeadGap
        span={4}
        label={label}
        title={label}
        reason="The module wrote no implied risk register."
      />
    );
  const security = table.headers.findIndex((header) => /^security/i.test(header.trim()));
  const fields = IMPLIED_FIELDS.flatMap(({ name, test }) => {
    const at = table.headers.findIndex((header) => test.test(header.trim()));
    return at < 0 ? [] : [{ name: name === "Implied" ? (table.headers[at] ?? name) : name, at }];
  });
  return (
    <Tile span={4} label={label} title={label} className="w-full self-start">
      <ul aria-label={label} className="flex flex-col">
        {table.rows.map(({ line, cells }, index) => {
          const name = rowName(security < 0 ? "" : readerCell(cells[security] ?? ""), index);
          return (
            <li
              key={line}
              className="flex items-start justify-between gap-3 border-t border-border-hairline py-2.5 first:border-t-0 first:pt-0"
            >
              <span className="flex min-w-0 flex-col gap-1">
                <span className="text-small font-medium wrap-anywhere text-text-primary">
                  {name}
                </span>
                <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-0.5 text-caption">
                  {fields.map((field) => (
                    <Fragment key={field.name}>
                      <dt className="text-text-tertiary">{field.name}</dt>
                      <dd className="wrap-anywhere text-text-secondary">
                        {readerCell(cells[field.at] ?? "")}
                      </dd>
                    </Fragment>
                  ))}
                </dl>
              </span>
              <Trace href={href(line)} name={name} />
            </li>
          );
        })}
      </ul>
    </Tile>
  );
}

/** CP-3D: where the market prices the issuer's debt, and what that implies. */
export const MarketLead = withDraws(
  function MarketLead(props: LeadProps) {
    const { entry } = props;
    if (blocked(entry)) return null;
    const href = leadHref(props);
    return (
      <Bento>
        <YieldFigure entry={entry} href={href} />
        <Implied entry={entry} href={href} />
      </Bento>
    );
  },
  ["figures"],
);
