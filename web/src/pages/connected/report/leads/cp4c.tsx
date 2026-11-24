import { Fragment, useState } from "react";
import { Segmented } from "@/components/kit/Segmented";
import { blocked, unitLabel, withUnit } from "../../publishedReport";
import { items, record, ticks, word, type SourceTable } from "../../visuals/visualData";
import { basisNotes, readCell, type Cell } from "../overview/figureData";
import { Key } from "../overview/figureParts";
import { Bento, GapNote, Tile } from "../overview/Tile";
import { Bridge, bridgeSteps } from "./bridge";
import { BarLine, spoken } from "./cp3c";
import { LeadBlocked, LeadFigure, LeadGap, NEEDS, Trace } from "./parts";
import {
  blockedReason,
  chartOf,
  chartsStartingWith,
  columnOf,
  leadHref,
  readerCell,
  registerTable,
  type Chart,
} from "./read";
import type { LeadProps } from "./types";

type Href = (line?: number) => string;
type Entry = LeadProps["entry"];

const TITLE = "Value allocation";
const RECOVERY = "Recovery by class";
const IN_EVIDENCE = "Not assessable; the reason is recorded in Evidence.";

/** Every value allocation the module published, and those it states as gaps, in its order. */
function allocations(entry: Entry) {
  const drawn = chartsStartingWith(entry, TITLE);
  const gaps = items(entry.output.chartGaps)
    .map((gap) => word(record(gap).title))
    .filter((title) => title.startsWith(TITLE) && !drawn.some((item) => item.title === title))
    .map((title) => ({ title, chart: chartOf(entry, title) }));
  return [...drawn, ...gaps];
}

/** "Value allocation — scenario 1" → "Scenario 1"; the title itself when it names no scenario. */
function scenarioName(title: string) {
  const rest = title.slice(TITLE.length).replace(/^\s*[—–:-]\s*/, "");
  return rest ? rest.charAt(0).toUpperCase() + rest.slice(1) : title;
}

function AllocationFigure({ title, chart }: { title: string; chart: Chart }) {
  if (chart.state !== "ready")
    return (
      <GapNote>
        {chart.state === "gap" ? chart.reason : "The module wrote no value allocation table."}
      </GapNote>
    );
  const { steps, unit, why } = bridgeSteps(chart.table);
  if (why)
    return (
      <p role="note" className="text-small text-text-secondary">
        {why}
      </p>
    );
  return (
    <Bridge
      steps={steps}
      unit={unit}
      label={`${title} in ${unitLabel(unit)}: ${steps.map((step) => `${step.label} ${step.cell.text}`).join(", ")}.`}
    />
  );
}

function stepTable(chart: Chart, href: Href) {
  if (chart.state !== "ready") return undefined;
  const { steps } = bridgeSteps(chart.table);
  return {
    head: ["Step", "Amount"],
    rows: steps.map((step) => ({
      label: step.label,
      cells: [step.cell.text || null],
      end: <Trace href={href(step.line)} name={step.label} />,
    })),
    endHeading: "Source",
  };
}

function ValueAllocation({ entry, href }: { entry: Entry; href: Href }) {
  const scenarios = allocations(entry);
  const [chosen, choose] = useState(scenarios[0]?.title ?? "");
  const current = scenarios.find((item) => item.title === chosen) ?? scenarios[0];
  if (!current)
    return (
      <LeadGap
        span={8}
        label={TITLE}
        title={TITLE}
        reason="The module wrote no value allocation table."
        needs={NEEDS.proof}
      />
    );
  const { chart } = current;
  const read = chart.state === "ready" ? bridgeSteps(chart.table) : null;
  const first = read?.steps[0];
  const last = read?.steps.at(-1);
  const reading =
    read && !read.why && first && last
      ? `${first.label} ${first.cell.text} to ${last.label.toLowerCase()} ${last.cell.text}`
      : TITLE;
  const table = stepTable(chart, href);
  return (
    <LeadFigure
      span={8}
      label={TITLE}
      kicker={scenarios.length > 1 ? TITLE : current.title}
      title={reading}
      basis={read?.unit ? unitLabel(read.unit) : undefined}
      legend={
        <>
          {scenarios.length > 1 && (
            <Segmented
              label="Scenario"
              segments={scenarios.map((item) => ({
                key: item.title,
                label: scenarioName(item.title),
              }))}
              current={current.title}
              onSelect={choose}
            />
          )}
          {read && !read.why && (
            <>
              <Key tone="primary">Value and residual</Key>
              <Key tone="secondary">Cost or distribution</Key>
            </>
          )}
        </>
      }
      trace={
        chart.state === "ready" ? (
          <Trace href={href(chart.table.line)} name={current.title} />
        ) : undefined
      }
      figure={<AllocationFigure title={current.title} chart={chart} />}
      table={table}
      notes={[
        "The handoff does not state the fulcrum class.",
        NEEDS.method,
        ...(chart.state === "ready" ? basisNotes(chart.table) : []),
      ]}
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
      name: readerCell(row[name] ?? ""),
      scenario: readerCell(row[scenario] ?? ""),
      claim: readCell(row[claim] ?? "", scope, unit),
      recovery: readCell(row[recovery] ?? "", scope, unit),
      percent: readCell(row[percent] ?? "", [row[percent] ?? ""], ""),
      line: table.rowLines?.[index] ?? table.line,
    };
  });
  const classes = [...new Set(rows.map((row) => row.name))];
  return classes.flatMap((item) => rows.filter((row) => row.name === item));
}

const percentText = (cell: Cell) => (cell.value === null ? cell.text : withUnit(cell.text, "%"));
const percentSpoken = (cell: Cell) =>
  cell.value === null ? spoken(cell).replace(/^not supplied/, "% not supplied") : percentText(cell);

function RecoveryByClass({ entry, href }: { entry: Entry; href: Href }) {
  const chart = chartOf(entry, RECOVERY);
  const rows = chart.state === "ready" ? recoveries(chart.table) : null;
  if (chart.state !== "ready" || !rows?.length)
    return (
      <LeadGap
        span={4}
        label={RECOVERY}
        title={RECOVERY}
        reason={
          chart.state === "gap" ? chart.reason : "The module wrote no recovery by class table."
        }
        needs={chart.state === "gap" ? undefined : NEEDS.proof}
      />
    );
  const unit = word(chart.descriptor.unit);
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
      span={4}
      label={RECOVERY}
      title={RECOVERY}
      basis={unit ? `${unitLabel(unit)} · recovery % as stated` : undefined}
      legend={
        <>
          <Key tone="primary">Claim</Key>
          <Key tone="secondary">Recovery</Key>
        </>
      }
      trace={<Trace href={href(chart.table.line)} name={RECOVERY} />}
      figure={
        <div role="img" aria-label={reading} className="flex flex-col">
          {rows.map((row, at) => (
            <Fragment key={row.index}>
              {rows[at - 1]?.name !== row.name && (
                <span className="border-t border-border-hairline pt-3 text-small font-medium wrap-anywhere text-text-primary first:border-t-0 first:pt-0">
                  {row.name}
                </span>
              )}
              <div className="flex flex-col gap-1 py-2">
                <span className="flex items-baseline justify-between gap-2 text-caption text-text-tertiary">
                  {row.scenario}
                  <span
                    className={
                      row.percent.value === null
                        ? "text-gap-text"
                        : "font-mono text-small text-text-primary tabular-nums"
                    }
                  >
                    {percentText(row.percent)}
                  </span>
                </span>
                <BarLine name="Claim" cell={row.claim} top={top} tone="primary" />
                <BarLine name="Recovery" cell={row.recovery} top={top} tone="secondary" />
              </div>
            </Fragment>
          ))}
        </div>
      }
      table={{
        head: [...RECOVERY_COLUMNS],
        rows: rows.map((row) => ({
          label: row.name,
          cells: [row.scenario, row.claim.text, row.recovery.text, row.percent.text].map(
            (cell) => cell || null,
          ),
          end: <Trace href={href(row.line)} name={`${row.name}, ${row.scenario}`} />,
        })),
        endHeading: "Source",
      }}
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
        reason="The module wrote no plan treatment register."
        needs={NEEDS.proof}
      />
    );
  const path = columnOf(table, "path");
  const fields = PLAN_FIELDS.map((field) => ({ field, at: columnOf(table, field) })).filter(
    ({ at }) => at >= 0,
  );
  return (
    <Tile span={12} label={label} title={label}>
      <ul aria-label={label} className="flex flex-col">
        {table.rows.map(({ line, cells }) => {
          const name = readerCell(cells[path] ?? "");
          return (
            <li
              key={line}
              className="flex items-start justify-between gap-3 border-t border-border-hairline py-2.5 first:border-t-0 first:pt-0"
            >
              <span className="flex min-w-0 flex-col gap-1">
                <span className="text-small font-medium wrap-anywhere text-text-primary">
                  {name}
                </span>
                <dl className="grid grid-cols-1 gap-x-3 gap-y-0.5 text-caption sm:grid-cols-[9rem_minmax(0,1fr)]">
                  {fields.map(({ field, at }) => (
                    <Fragment key={field}>
                      <dt className="text-text-tertiary">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </dt>
                      <dd className="wrap-anywhere text-text-secondary">
                        {readerCell(cells[at] ?? "")}
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

/** CP-4C: who is paid from the value in a restructuring, class by class. */
export function RestructuringLead(props: LeadProps) {
  const { entry } = props;
  const href = leadHref(props);
  const reason = blockedReason(entry);
  if (reason !== null || blocked(entry) || entry.output.state?.established === false)
    return (
      <Bento>
        <LeadBlocked span={12} label={TITLE} title={TITLE} reason={reason ?? IN_EVIDENCE} />
      </Bento>
    );
  return (
    <Bento>
      <ValueAllocation entry={entry} href={href} />
      <RecoveryByClass entry={entry} href={href} />
      <PlanTreatment entry={entry} href={href} />
    </Bento>
  );
}
