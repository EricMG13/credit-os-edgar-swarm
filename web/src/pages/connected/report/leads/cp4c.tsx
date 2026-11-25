import { Fragment, useState } from "react";
import { Segmented } from "@/components/kit/Segmented";
import { unitLabel } from "../../publishedReport";
import { ticks, word, type SourceTable } from "../../visuals/visualData";
import { basisNotes, readCell, type Cell } from "../overview/figureData";
import { Key } from "../overview/figureParts";
import { Bento, Tile } from "../overview/Tile";
import { Bridge, bridgeOf } from "./bridge";
import { spoken } from "./cp3c";
import { withDraws } from "./draws";
import {
  BarRow,
  CompactGap,
  GapCell,
  KeyValues,
  LeadFigure,
  LeadGap,
  statedGap,
  TableRegion,
  Trace,
} from "./parts";
import {
  chartOf,
  chartsStartingWith,
  columnOf,
  leadHref,
  readerCell,
  readerCellOf,
  registerTable,
  rowName,
  drawsNothing,
  withStatedUnit,
} from "./read";
import type { LeadProps } from "./types";
import { ChartGap, writtenTable } from "./written";

type Href = (line?: number) => string;
type Entry = LeadProps["entry"];

const TITLE = "Value allocation";
const RECOVERY = "Recovery by class";
const FULCRUM = "This page could not read a fulcrum class.";

/** "Value allocation — scenario 1" → "Scenario 1"; the title itself when it names no scenario. */
function scenarioName(title: string) {
  const rest = title.slice(TITLE.length).replace(/^\s*[—–:-]\s*/, "");
  return rest ? rest.charAt(0).toUpperCase() + rest.slice(1) : title;
}

function ValueAllocation({ entry, href }: { entry: Entry; href: Href }) {
  const scenarios = chartsStartingWith(entry, TITLE);
  const [chosen, choose] = useState(scenarios[0]?.title ?? "");
  const current = scenarios.find((item) => item.title === chosen) ?? scenarios[0];
  if (!current)
    return (
      <LeadGap
        span={8}
        label={TITLE}
        title={TITLE}
        reason="This page could not read a value allocation table."
      />
    );
  const { chart } = current;
  const read = bridgeOf(chart);
  const table = read ? writtenTable(read.table, href) : undefined;
  const scenario = scenarios.length > 1 && (
    <Segmented
      label="Scenario"
      segments={scenarios.map((item) => ({ key: item.title, label: scenarioName(item.title) }))}
      current={current.title}
      onSelect={choose}
    />
  );
  const trace = read && <Trace href={href(read.table.line)} name={current.title} />;
  return (
    <LeadFigure
      span={8}
      label={TITLE}
      kicker={current.title}
      title={TITLE}
      basis={read?.unit ? unitLabel(read.unit) : undefined}
      legend={
        read &&
        !read.why && (
          <>
            <Key tone="primary">Value and residual</Key>
            <Key tone="secondary">Cost or distribution</Key>
          </>
        )
      }
      trace={trace}
      controls={scenario}
      figure={
        <div className="flex min-w-0 flex-col gap-3">
          {!read ? (
            <CompactGap>
              {chart.state === "gap"
                ? chart.reason
                : "This page could not read a value allocation table."}
            </CompactGap>
          ) : read.why ? (
            <>
              <p role="note" className="text-small text-text-secondary">
                {read.why}
              </p>
              {table && <TableRegion label={TITLE} table={table} />}
            </>
          ) : (
            <Bridge
              steps={read.steps}
              unit={read.unit}
              label={`${current.title} in ${unitLabel(read.unit)}: ${read.steps.map((step) => `${step.label} ${step.cell.text}`).join(", ")}.`}
            />
          )}
          <CompactGap>{FULCRUM}</CompactGap>
        </div>
      }
      table={table}
      notes={read ? basisNotes(read.table) : []}
    />
  );
}

const RECOVERY_COLUMNS = ["Class", "Scenario", "Claim", "Recovery", "Recovery %"] as const;

function recoveries(table: SourceTable) {
  const at = RECOVERY_COLUMNS.map((name) => columnOf(table, name));
  if (at.some((column) => column < 0)) return null;
  const [name = 0, scenario = 1, claim = 2, recovery = 3, percent = 4] = at;
  const scope = table.rows.flatMap((row) => [row[claim] ?? "", row[recovery] ?? ""]);
  const rows = table.rows.map((row, index) => {
    const unit = row.at(-2) ?? "";
    return {
      index,
      name: readerCell(row[name] ?? "") || "Not stated",
      scenario: readerCell(row[scenario] ?? ""),
      unit,
      claim: readerCellOf(readCell(row[claim] ?? "", scope, unit)),
      recovery: readerCellOf(readCell(row[recovery] ?? "", scope, unit)),
      percent: readerCellOf(readCell(row[percent] ?? "", [row[percent] ?? ""], "")),
      line: table.rowLines?.[index] ?? table.line,
    };
  });
  const classes = [...new Set(rows.map((row) => row.name))];
  return classes.flatMap((item) => rows.filter((row) => row.name === item));
}

const percentSpoken = (cell: Cell) =>
  cell.value === null
    ? spoken(cell).replace(/^not supplied/, "% not supplied")
    : withStatedUnit(cell.text, "%");

/** A stated figure as written (`suffix` its unit sign), or its stated gap as the word and reason. */
function Stated({ cell, suffix = "" }: { cell: Cell; suffix?: string }) {
  const gap = cell.value === null ? statedGap(cell.text) : null;
  if (gap) return <GapCell word={gap.word} reason={gap.reason} />;
  if (!cell.text.trim()) return <GapCell word="Not stated" />;
  return (
    <span className="font-mono text-small text-text-primary tabular-nums">
      {cell.value === null || !suffix ? cell.text : withStatedUnit(cell.text, suffix)}
    </span>
  );
}

/** One amount on the shared scale: its name, its bar from zero where it is a number, its figure. */
function AmountRow({
  name,
  cell,
  top,
  tone,
}: {
  name: string;
  cell: Cell;
  top: number;
  tone: "primary" | "secondary";
}) {
  const placed = cell.value !== null && cell.value >= 0 && top > 0;
  return (
    <div className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-center gap-x-2 gap-y-1">
      <span className="text-caption text-text-secondary">{name}</span>
      {placed ? (
        <span className="flex min-w-0 items-center gap-2">
          <BarRow
            end={(cell.value ?? 0) / top}
            tone={tone}
            bar={{ "data-bar": cell.text }}
            className="flex-1"
          />
          <span className="flex-none text-right">
            <Stated cell={cell} />
          </span>
        </span>
      ) : (
        <Stated cell={cell} />
      )}
    </div>
  );
}

function RecoveryByClass({ entry, href }: { entry: Entry; href: Href }) {
  const chart = chartOf(entry, RECOVERY);
  const rows = chart.state === "ready" ? recoveries(chart.table) : null;
  if (chart.state !== "ready" || !rows?.length)
    return (
      <ChartGap
        chart={chart}
        span={12}
        label={RECOVERY}
        title={RECOVERY}
        href={href}
        unread="This page could not read the recovery by class table."
        absent="This page could not read a recovery by class table."
      />
    );
  const unit = word(chart.descriptor.unit);
  // One scale only for one unit: amounts in two units are not drawn against each other.
  const oneUnit = new Set(rows.map((row) => row.unit)).size === 1;
  const scale = ticks(rows.flatMap((row) => [row.claim.value, row.recovery.value]));
  const top = scale.at(-1)?.value ?? 0;
  const reading = `${RECOVERY}${unit ? ` in ${unitLabel(unit)}` : ""}. ${rows
    .map(
      (row) =>
        `${row.name}, ${row.scenario}: claim ${spoken(row.claim)}, recovery ${spoken(row.recovery)}, recovery ${percentSpoken(row.percent)}.`,
    )
    .join(" ")}`;
  return (
    <LeadFigure
      span={12}
      label={RECOVERY}
      title={RECOVERY}
      basis={unit ? `${unitLabel(unit)} · recovery % as stated` : undefined}
      legend={
        oneUnit && (
          <>
            <Key tone="primary">Claim</Key>
            <Key tone="secondary">Recovery</Key>
          </>
        )
      }
      trace={<Trace href={href(chart.table.line)} name={RECOVERY} />}
      figure={
        !oneUnit ? (
          <CompactGap>The claims and recoveries are stated in more than one unit.</CompactGap>
        ) : (
          <div role="img" aria-label={reading} className="flex flex-col">
            {rows.map((row, at) => (
              <Fragment key={row.index}>
                {rows[at - 1]?.name !== row.name && (
                  <span className="border-t border-border-hairline pt-3 text-small font-medium wrap-anywhere text-text-primary first:border-t-0 first:pt-0">
                    {row.name}
                  </span>
                )}
                <div className="flex flex-col gap-1 py-2">
                  <span className="flex flex-wrap items-baseline justify-between gap-2 text-caption text-text-tertiary">
                    {row.scenario}
                    <Stated cell={row.percent} suffix="%" />
                  </span>
                  <AmountRow name="Claim" cell={row.claim} top={top} tone="primary" />
                  <AmountRow name="Recovery" cell={row.recovery} top={top} tone="secondary" />
                </div>
              </Fragment>
            ))}
          </div>
        )
      }
      table={writtenTable(chart.table, href)}
      notes={basisNotes(chart.table)}
    />
  );
}

const PLAN_FIELDS = ["class treatment", "consent/vote", "probability class"] as const;

function PlanTreatment({ entry, href }: { entry: Entry; href: Href }) {
  const label = "Plan treatment";
  const table = registerTable(entry, "T4E.4", ["path", "class treatment"]);
  if (!table?.rows.length)
    return (
      <LeadGap
        span={12}
        label={label}
        title={label}
        reason="This page could not read a plan treatment register."
      />
    );
  const path = columnOf(table, "path");
  const fields = PLAN_FIELDS.map((field) => ({ field, at: columnOf(table, field) })).filter(
    ({ at }) => at >= 0,
  );
  return (
    <Tile span={12} label={label} title={label} className="w-full self-start">
      <ul aria-label={label} className="flex flex-col">
        {table.rows.map(({ line, cells }, index) => {
          const name = rowName(readerCell(cells[path] ?? ""), index);
          return (
            <li
              key={line}
              className="flex items-start justify-between gap-3 border-t border-border-hairline py-2.5 first:border-t-0 first:pt-0"
            >
              <span className="flex min-w-0 flex-col gap-1">
                <span className="text-small font-medium wrap-anywhere text-text-primary">
                  {name}
                </span>
                <KeyValues
                  items={fields.map(({ field, at }) => ({
                    key: field.charAt(0).toUpperCase() + field.slice(1),
                    value: readerCell(cells[at] ?? ""),
                  }))}
                />
              </span>
              <Trace href={href(line)} name={name} />
            </li>
          );
        })}
      </ul>
    </Tile>
  );
}

/** CP-4C: who is paid from the value in a restructuring, class by class. */
export const RestructuringLead = withDraws(
  function RestructuringLead(props: LeadProps) {
    const { entry } = props;
    if (drawsNothing(entry)) return null;
    const href = leadHref(props);
    return (
      <Bento>
        <ValueAllocation entry={entry} href={href} />
        {/* Recovery and plan treatment stack beside the allocation, each as tall as its content. */}
        <div className="flex min-w-0 flex-col gap-4 self-start lg:col-span-4">
          <RecoveryByClass entry={entry} href={href} />
          <PlanTreatment entry={entry} href={href} />
        </div>
      </Bento>
    );
  },
  ["figures"],
);
