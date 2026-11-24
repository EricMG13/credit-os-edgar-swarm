import { withUnit } from "../../publishedReport";
import { Key } from "../overview/figureParts";
import { basisNotes } from "../overview/figureData";
import type { HeadroomTest } from "../overview/stressData";
import { Bullets, leadTests } from "./bullet";
import { Bento, Figure } from "../overview/Tile";
import { LeadBlocked, LeadFigure, LeadGap, NEEDS, Trace } from "./parts";
import {
  blockedState,
  chartOf,
  columnOf,
  leadHref,
  readerCell,
  registerTable,
  rowName,
} from "./read";
import type { LeadProps } from "./types";

const TRIGGERS = "Rating triggers";
const REGISTER = "Rating register";

type Trigger = { agency: string; test: HeadroomTest; line: number };

const shown = (test: HeadroomTest, cell: HeadroomTest["current"]) =>
  cell.value === null ? cell.text : withUnit(cell.text, test.unit);

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
              ? "The trigger table has no trigger, threshold or current column."
              : "This handoff has no rating trigger table."
        }
        needs={chart.state === "absent" ? NEEDS.proof : undefined}
      />
    );
  const { table } = chart;
  const triggers = tests.map((test, at): Trigger => ({
    agency: readerCell(table.rows[at]?.[0] ?? "") || "Agency not stated",
    test,
    line: table.rowLines?.[at] ?? table.line,
  }));
  const agencies = [...new Set(triggers.map((trigger) => trigger.agency))];
  return (
    <LeadFigure
      span={8}
      label={TRIGGERS}
      kicker="Agency triggers"
      title="Where the issuer stands against each agency trigger"
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
        head: ["Trigger", "Agency", "Threshold", "Current", "Direction"],
        rows: triggers.map(({ agency, test, line }) => ({
          label: test.label,
          cells: [
            agency,
            shown(test, test.threshold) || null,
            shown(test, test.current) || null,
            test.direction || null,
          ],
          end: <Trace href={href(line)} name={test.label} />,
        })),
        endHeading: "Source",
      }}
      notes={basisNotes(table)}
    />
  );
}

function Register({ entry, href }: { entry: LeadProps["entry"]; href: (line?: number) => string }) {
  const found = registerTable(entry, "T2R.1", ["agency", "rating", "outlook/watch"]);
  if (!found)
    return (
      <LeadGap
        span={4}
        label={REGISTER}
        title={REGISTER}
        reason="This handoff has no rating register."
        needs={NEEDS.proof}
      />
    );
  const at = {
    agency: columnOf(found, "agency"),
    rating: columnOf(found, "rating"),
    outlook: columnOf(found, "outlook/watch"),
    issuer: columnOf(found, "issuer/instrument"),
  };
  const cell = (cells: string[], column: number) =>
    column < 0 ? "" : readerCell(cells[column] ?? "");
  return (
    <LeadFigure
      span={4}
      label={REGISTER}
      title="Ratings as the agencies state them"
      figure={
        <ul aria-label={REGISTER} className="flex flex-col">
          {found.rows.map(({ cells, line }, index) => (
            <li
              key={line}
              className="flex flex-col gap-1 border-t border-border-hairline py-3 first:border-t-0"
            >
              <span className="flex items-start justify-between gap-2 text-caption text-text-tertiary">
                {rowName(cell(cells, at.agency), index)}
                <Trace href={href(line)} name={rowName(cell(cells, at.agency), index)} />
              </span>
              <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <Figure className="text-h3 font-medium">
                  {cell(cells, at.rating) || "Not stated"}
                </Figure>
                {cell(cells, at.outlook) && (
                  <span className="rounded-ds-xs border border-border-hairline px-1.5 text-caption text-text-secondary">
                    {cell(cells, at.outlook)}
                  </span>
                )}
              </span>
              {cell(cells, at.issuer) && (
                <span className="text-small wrap-anywhere text-text-secondary">
                  {cell(cells, at.issuer)}
                </span>
              )}
            </li>
          ))}
        </ul>
      }
    />
  );
}

/** CP-2H: where each agency's triggers stand, and the ratings now in force. */
export function RatingsLead(props: LeadProps) {
  const { entry } = props;
  const href = leadHref(props);
  const stopped = blockedState(entry);
  if (stopped)
    return (
      <Bento>
        <LeadBlocked
          span={12}
          label="Ratings migration"
          title="Ratings migration"
          reason={stopped.reason}
        />
      </Bento>
    );
  return (
    <Bento>
      <Triggers entry={entry} href={href} />
      <Register entry={entry} href={href} />
    </Bento>
  );
}
