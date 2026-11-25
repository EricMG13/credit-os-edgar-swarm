import { Key } from "../overview/figureParts";
import type { HeadroomTest } from "../overview/stressData";
import { Bullets, leadTests, shown } from "./bullet";
import { Bento, Figure } from "../overview/Tile";
import { withDraws } from "./draws";
import { OtherCharts, rowBasis, sourceOf, writtenTable } from "./written";
import { LeadFigure, LeadGap, Trace } from "./parts";
import {
  chartOf,
  columnOf,
  leadHref,
  readerCell,
  registerTable,
  rowName,
  WITHHELD,
  drawsNothing,
} from "./read";
import type { LeadProps } from "./types";

const TRIGGERS = "Rating triggers";
const REGISTER = "Rating register";

type Trigger = { agency: string; test: HeadroomTest; line: number };

function Triggers({ entry, href }: { entry: LeadProps["entry"]; href: (line?: number) => string }) {
  const chart = chartOf(entry, TRIGGERS);
  const tests =
    chart.state === "ready" ? leadTests(chart.table, { ...chart.descriptor, label: 1 }) : null;
  if (chart.state !== "ready" || !tests)
    return (
      <LeadGap
        span={8}
        label={TRIGGERS}
        title={TRIGGERS}
        reason={
          chart.state === "gap"
            ? chart.reason
            : chart.state === "ready"
              ? "This page could not read a trigger, threshold and current value from the trigger table."
              : chart.state === "withheld"
                ? WITHHELD
                : "This page could not read rating triggers."
        }
        trace={
          chart.state === "withheld" ? (
            <Trace href={href(chart.line)} name={TRIGGERS} />
          ) : chart.state === "ready" ? (
            <Trace href={href(chart.table.line)} name={TRIGGERS} />
          ) : undefined
        }
      />
    );
  const { table } = chart;
  const triggers = tests.map((test, at): Trigger => ({
    agency: readerCell(table.rows[at]?.[0] ?? "") || "Agency not stated",
    test,
    line: table.rowLines?.[at] ?? table.line,
  }));
  const agencies = [...new Set(triggers.map((trigger) => trigger.agency))];
  const basis = rowBasis(table);
  return (
    <LeadFigure
      span={8}
      label={TRIGGERS}
      title={TRIGGERS}
      legend={
        <>
          <Key tone="primary">Current</Key>
          <span className="flex items-center gap-1.5 text-caption text-text-secondary">
            <span aria-hidden="true" className="h-2.5 w-0.5 bg-text-primary" />
            Threshold
          </span>
        </>
      }
      trace={<Trace href={href(table.line)} name={TRIGGERS} />}
      figure={
        <div className="flex flex-col gap-4">
          {agencies.map((agency) => (
            <div key={agency} role="group" aria-label={agency} className="flex flex-col gap-2">
              <h4 className="text-small font-medium text-text-primary">{agency}</h4>
              {(() => {
                const own = triggers.filter((trigger) => trigger.agency === agency);
                return (
                  <Bullets
                    label={`${agency} triggers`}
                    tests={own.map((trigger) => trigger.test)}
                    href={(at) => href(own[at]?.line)}
                  />
                );
              })()}
            </div>
          ))}
        </div>
      }
      table={{
        head: ["Trigger", "Agency", "Threshold", "Current", "Direction", ...basis.head],
        rows: triggers.map(({ agency, test, line }, at) => ({
          label: test.label,
          cells: [
            agency,
            shown(test, test.threshold) || null,
            shown(test, test.current) || null,
            test.direction || null,
            ...basis.cells(at),
          ],
          end: <Trace href={href(line)} name={test.label} />,
        })),
        endHeading: "Source",
      }}
      notes={basis.shared}
    />
  );
}

/**
 * The rating register, every column drawn: each rating with its outlook, status and effective date
 * beside it (a superseded rating reads as superseded), the instrument under it, and the register as
 * written in the table view.
 */
function Register({ entry, href }: { entry: LeadProps["entry"]; href: (line?: number) => string }) {
  const found = registerTable(entry, "T2R.1", ["agency", "rating", "outlook/watch"]);
  if (!found)
    return (
      <LeadGap
        span={4}
        label={REGISTER}
        title={REGISTER}
        reason="This page could not read a rating register."
      />
    );
  const at = {
    agency: columnOf(found, "agency"),
    rating: columnOf(found, "rating"),
    outlook: columnOf(found, "outlook/watch"),
    issuer: columnOf(found, "issuer/instrument"),
    date: columnOf(found, "effective date"),
    status: columnOf(found, "status"),
  };
  const cell = (cells: string[], column: number) =>
    column < 0 ? "" : readerCell(cells[column] ?? "");
  return (
    <LeadFigure
      span={4}
      label={REGISTER}
      title={REGISTER}
      trace={<Trace href={href(found.line)} name={REGISTER} />}
      figure={
        <ul aria-label={REGISTER} className="flex flex-col">
          {found.rows.map(({ cells, line }, index) => {
            const name = rowName(cell(cells, at.agency), index);
            const chips = [cell(cells, at.outlook), cell(cells, at.status)].filter(Boolean);
            const date = cell(cells, at.date);
            return (
              <li
                key={line}
                className="flex flex-col gap-1 border-t border-border-hairline py-3 first:border-t-0"
              >
                <span className="flex items-start justify-between gap-2 text-caption text-text-tertiary">
                  {name}
                  <Trace href={href(line)} name={name} />
                </span>
                <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <Figure className="text-h3 font-medium">
                    {cell(cells, at.rating) || "Not stated"}
                  </Figure>
                  {chips.map((chip, place) => (
                    <span
                      key={place}
                      className="rounded-ds-xs border border-border-hairline px-1.5 text-caption text-text-secondary"
                    >
                      {chip}
                    </span>
                  ))}
                </span>
                {date && (
                  <span className="flex flex-wrap items-baseline gap-x-1.5 text-caption">
                    <span className="text-text-tertiary">Effective date</span>
                    <span className="font-mono text-text-secondary tabular-nums">{date}</span>
                  </span>
                )}
                {cell(cells, at.issuer) && (
                  <span className="text-small wrap-anywhere text-text-secondary">
                    {cell(cells, at.issuer)}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      }
      table={writtenTable(sourceOf(found), href)}
    />
  );
}

/** CP-2H: where each agency's triggers stand, and the ratings now in force. */
export const RatingsLead = withDraws(
  function RatingsLead(props: LeadProps) {
    const { entry } = props;
    if (drawsNothing(entry)) return null;
    const href = leadHref(props);
    return (
      <Bento>
        <Triggers entry={entry} href={href} />
        <Register entry={entry} href={href} />
        <OtherCharts entry={entry} module="CP-2H" href={href} drawn={[TRIGGERS]} />
      </Bento>
    );
  },
  ["figures"],
);
