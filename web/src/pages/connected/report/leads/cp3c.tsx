import { Fragment } from "react";
import { cx } from "@/utils/cx";
import { blocked, unitLabel, type Row } from "../../publishedReport";
import { ticks, type SourceTable } from "../../visuals/visualData";
import { Key } from "../overview/figureParts";
import { basisNotes, readCell, type Cell } from "../overview/figureData";
import { Bento, GapNote, Tile } from "../overview/Tile";
import { withDraws } from "./draws";
import { LaneTile, LeadFigure, LeadGap, Trace } from "./parts";
import {
  chartOf,
  columnOf,
  eventsOf,
  leadHref,
  readerCell,
  readerCellOf,
  registerTable,
  rowName,
  WITHHELD,
} from "./read";
import type { LeadProps } from "./types";

const TITLE = "Refinancing need";
const MEASURES = ["Debt maturing", "Committed resources"] as const;

const TONE = { primary: "bg-chart-1", secondary: "bg-chart-2" } as const;

/** A stated amount as a bar from zero on a shared scale, or the stated gap as a hatched mark. */
export function BarLine({
  name,
  cell,
  top,
  tone,
}: {
  name: string;
  cell: Cell;
  top: number;
  tone: keyof typeof TONE;
}) {
  const placed = cell.value !== null && cell.value >= 0 && top > 0;
  return (
    <div className="grid grid-cols-[7.5rem_minmax(0,1fr)] items-center gap-2">
      <span className="text-caption text-text-secondary">{name}</span>
      {placed ? (
        <span className="flex min-w-0 items-center gap-2">
          <span className="relative h-3 min-w-0 flex-1">
            <span
              data-bar={cell.text}
              className={cx("absolute inset-y-0 left-0 rounded-ds-xs", TONE[tone])}
              style={{ width: `${String(((cell.value ?? 0) / top) * 100)}%` }}
            />
          </span>
          <span className="w-16 flex-none text-right font-mono text-small text-text-primary tabular-nums">
            {cell.text}
          </span>
        </span>
      ) : (
        <span className="flex min-w-0 items-start gap-2">
          {cell.value === null && (
            <span
              data-gap
              className="gap-hatch mt-0.5 h-3 w-8 flex-none rounded-ds-xs border border-dashed border-border-gap"
            />
          )}
          <span className="min-w-0 text-caption wrap-anywhere text-gap-text">
            {cell.text || "Not supplied"}
          </span>
        </span>
      )}
    </div>
  );
}

/** A cell for a figure's reading: the figure as written, or "not supplied" with the reason. */
export const spoken = (cell: Cell) =>
  cell.value === null ? `not supplied${cell.reason ? ` (${cell.reason})` : ""}` : cell.text;

function needRows(table: SourceTable) {
  const [debt, resources] = MEASURES.map((name) => columnOf(table, name));
  const period = columnOf(table, "Period");
  if (debt === undefined || resources === undefined || [debt, resources, period].includes(-1))
    return null;
  const scope = table.rows.flatMap((row) => [row[debt] ?? "", row[resources] ?? ""]);
  return table.rows.map((row, at) => ({
    period: readerCell(row[period] ?? "") || "Period not stated",
    line: table.rowLines?.[at] ?? table.line,
    cells: [debt, resources].map((column) =>
      readerCellOf(readCell(row[column] ?? "", scope, row.at(-2) ?? "")),
    ),
  }));
}

function NeedFigure({
  entry,
  href,
}: {
  entry: LeadProps["entry"];
  href: (line?: number) => string;
}) {
  const chart = chartOf(entry, TITLE);
  const rows = chart.state === "ready" ? needRows(chart.table) : null;
  if (chart.state !== "ready" || !rows)
    return (
      <LeadGap
        span={8}
        label={TITLE}
        title={TITLE}
        reason={
          chart.state === "gap"
            ? chart.reason
            : chart.state === "absent"
              ? "The module wrote no refinancing need table."
              : WITHHELD
        }
        trace={
          chart.state === "gap" || chart.state === "absent" ? undefined : (
            <Trace href={href(chart.table.line)} name={TITLE} />
          )
        }
      />
    );
  const units = new Set(chart.table.rows.map((row) => row.at(-2) ?? ""));
  const oneUnit = units.size === 1;
  const unit = oneUnit ? ([...units][0] ?? "") : "";
  const scale = ticks(rows.flatMap(({ cells }) => cells.map((cell) => cell.value)));
  const top = scale.at(-1)?.value ?? 0;
  const reading = `Debt maturing against committed resources${unit ? ` in ${unitLabel(unit)}` : ""}. ${rows
    .map(
      ({ period, cells: [debt, resources] }) =>
        `${period}: debt maturing ${debt ? spoken(debt) : "not supplied"}, committed resources ${resources ? spoken(resources) : "not supplied"}.`,
    )
    .join(" ")}`;
  return (
    <LeadFigure
      span={8}
      label={TITLE}
      kicker={TITLE}
      title="Debt maturing against committed resources, by period"
      basis={unit ? unitLabel(unit) : undefined}
      legend={
        oneUnit && (
          <>
            <Key tone="primary">Debt maturing</Key>
            <Key tone="secondary">Committed resources</Key>
            <Key tone="gap">Not supplied</Key>
          </>
        )
      }
      trace={<Trace href={href(chart.table.line)} name={TITLE} />}
      figure={
        // One scale only for one unit: amounts in two units are not drawn against each other.
        !oneUnit ? (
          <GapNote>The amounts are stated in more than one unit.</GapNote>
        ) : (
          <div role="img" aria-label={reading} className="flex flex-col">
            {rows.map(({ period, cells }, index) => (
              <div
                key={index}
                className="grid grid-cols-1 gap-1.5 border-t border-border-hairline py-3 first:border-t-0 first:pt-0 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-3"
              >
                <span className="font-mono text-small font-medium text-text-primary">{period}</span>
                <div className="flex min-w-0 flex-col gap-1.5">
                  {MEASURES.map((name, at) => (
                    <Fragment key={name}>
                      {cells[at] && (
                        <BarLine
                          name={name}
                          cell={cells[at]}
                          top={top}
                          tone={at === 0 ? "primary" : "secondary"}
                        />
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
      }
      table={{
        head: ["Period", ...MEASURES],
        rows: rows.map(({ period, line, cells }) => ({
          label: period,
          cells: cells.map((cell) => cell.text || null),
          end: <Trace href={href(line)} name={period} />,
        })),
        endHeading: "Source",
      }}
      notes={basisNotes(chart.table)}
    />
  );
}

const PATH_FIELDS = ["Feasibility", "Likelihood Direction"] as const;

function PathItem({ row, columns, index }: { row: Row; columns: number[]; index: number }) {
  return (
    <>
      <span className="text-small font-medium wrap-anywhere text-text-primary">
        {rowName(readerCell(row.cells[columns[0] ?? -1] ?? ""), index)}
      </span>
      <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-0.5 text-caption">
        {PATH_FIELDS.map((name, at) => {
          const cell = row.cells[columns[at + 1] ?? -1];
          return cell === undefined ? null : (
            <Fragment key={name}>
              <dt className="text-text-tertiary">{name === "Feasibility" ? name : "Likelihood"}</dt>
              <dd className="wrap-anywhere text-text-secondary">{readerCell(cell)}</dd>
            </Fragment>
          );
        })}
      </dl>
    </>
  );
}

function Paths({ entry, href }: { entry: LeadProps["entry"]; href: (line?: number) => string }) {
  const label = "Liability-management paths";
  const table = registerTable(entry, "T3D.6", ["Path Type", "Feasibility"]);
  if (!table?.rows.length)
    return (
      <LeadGap
        span={12}
        label={label}
        title={label}
        reason="The module wrote no liability-management path register."
      />
    );
  const columns = ["Path Type", ...PATH_FIELDS].map((name) => columnOf(table, name));
  return (
    <Tile span={12} label={label} title={label} className="w-full self-start">
      <ul aria-label={label} className="flex flex-col">
        {table.rows.map((row, index) => (
          <li
            key={row.line}
            className="flex items-start justify-between gap-3 border-t border-border-hairline py-2.5 first:border-t-0 first:pt-0"
          >
            <span className="flex min-w-0 flex-col gap-1">
              <PathItem row={row} columns={columns} index={index} />
            </span>
            <Trace
              href={href(row.line)}
              name={rowName(readerCell(row.cells[columns[0] ?? -1] ?? ""), index)}
            />
          </li>
        ))}
      </ul>
    </Tile>
  );
}

/** CP-3C: what falls due, against what is committed to meet it. */
export const RefinancingLead = withDraws(
  function RefinancingLead(props: LeadProps) {
    const { entry } = props;
    if (blocked(entry)) return null;
    const href = leadHref(props);
    return (
      <Bento>
        <NeedFigure entry={entry} href={href} />
        <div className="flex min-w-0 flex-col gap-4 self-start lg:col-span-4">
          <Paths entry={entry} href={href} />
          <LaneTile
            lane={eventsOf(entry, "Refinancing")}
            span={12}
            label="Refinancing dates"
            title="Refinancing dates"
            href={href}
          />
        </div>
      </Bento>
    );
  },
  ["figures", "events"],
);
