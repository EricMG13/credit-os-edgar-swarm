import { Fragment } from "react";
import { blocked, unitLabel, withUnit } from "../../publishedReport";
import { word } from "../../visuals/visualData";
import { Key } from "../overview/figureParts";
import { basisNotes } from "../overview/figureData";
import { bulletGeometry, type HeadroomTest } from "../overview/stressData";
import { Bento, Tile } from "../overview/Tile";
import { bulletTable, Bullets, leadTests } from "./bullet";
import { withDraws } from "./draws";
import { LeadFigure, LeadGap, MapTile, Trace } from "./parts";
import {
  chartOf,
  columnOf,
  leadHref,
  mapOf,
  readerCell,
  registerTable,
  rowName,
  WITHHELD,
} from "./read";
import type { LeadProps } from "./types";

type Href = (line?: number) => string;

const TITLE = "Covenant headroom";

const MAPS = [
  { name: "legal entities", title: "Legal entities", span: 4 },
  { name: "intercreditor", title: "Intercreditor", span: 6 },
] as const;

const shown = (test: HeadroomTest, cell: HeadroomTest["current"]) =>
  cell.value === null ? cell.text : withUnit(cell.text, test.unit);

/** The first test the figure can draw, as its reading: current against threshold, as written. */
function reading(tests: readonly HeadroomTest[]) {
  const lead = tests.find((test) => bulletGeometry(test) !== null);
  if (!lead) return TITLE;
  const headroom = lead.headroom ? `, headroom ${lead.headroom}` : "";
  return `${lead.label} ${shown(lead, lead.current)} against a threshold of ${shown(lead, lead.threshold)}${headroom}`;
}

function Headroom({ entry, href }: { entry: LeadProps["entry"]; href: Href }) {
  const chart = chartOf(entry, TITLE);
  const tests = chart.state === "ready" ? leadTests(chart.table, chart.descriptor) : null;
  if (chart.state !== "ready" || !tests?.length)
    return (
      <LeadGap
        span={8}
        label={TITLE}
        title={TITLE}
        reason={
          chart.state === "gap"
            ? chart.reason
            : chart.state === "ready"
              ? "The covenant table is not in its fixed shape."
              : chart.state === "withheld"
                ? WITHHELD
                : "The module wrote no covenant headroom table."
        }
        trace={
          chart.state === "withheld" ? <Trace href={href(chart.line)} name={TITLE} /> : undefined
        }
      />
    );
  const { table, descriptor } = chart;
  const unit = word(descriptor.unit);
  const rowHref = (at: number) => href(table.rowLines?.[at] ?? table.line);
  return (
    <LeadFigure
      span={8}
      label={TITLE}
      kicker={TITLE}
      title={reading(tests)}
      basis={
        unit
          ? `${unitLabel(unit)} · each test on its own scale from zero`
          : "Each test in its own unit, on its own scale from zero"
      }
      legend={
        <>
          <Key tone="primary">Current</Key>
          <span className="flex items-center gap-1.5 text-caption text-text-secondary">
            <span aria-hidden="true" className="h-2.5 w-0.5 bg-text-primary" />
            Threshold
          </span>
        </>
      }
      trace={<Trace href={href(table.line)} name={TITLE} />}
      figure={<Bullets label="Covenant tests" tests={tests} href={rowHref} />}
      table={bulletTable(tests, rowHref)}
      notes={basisNotes(table)}
    />
  );
}

const BASKET_FIELDS = ["Estimated Capacity", "Remaining Capacity", "Status"] as const;

function Baskets({ entry, href }: { entry: LeadProps["entry"]; href: Href }) {
  const label = "Baskets and capacity";
  const table = registerTable(entry, "T4C.5", ["Capacity Type", "Basket / Test"]);
  if (!table?.rows.length)
    return (
      <LeadGap
        span={6}
        label={label}
        title={label}
        reason="The module wrote no basket and capacity register."
      />
    );
  const name = columnOf(table, "Basket / Test");
  const fields = BASKET_FIELDS.map((field) => ({ field, at: columnOf(table, field) })).filter(
    ({ at }) => at >= 0,
  );
  return (
    <Tile span={6} label={label} title={label} className="w-full self-start">
      <ul aria-label={label} className="flex flex-col">
        {table.rows.map(({ line, cells }, index) => {
          const basket = rowName(readerCell(cells[name] ?? ""), index);
          return (
            <li
              key={line}
              className="flex items-start justify-between gap-3 border-t border-border-hairline py-2.5 first:border-t-0 first:pt-0"
            >
              <span className="flex min-w-0 flex-col gap-1">
                <span className="text-small font-medium wrap-anywhere text-text-primary">
                  {basket}
                </span>
                <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-0.5 text-caption">
                  {fields.map(({ field, at }) => (
                    <Fragment key={field}>
                      <dt className="text-text-tertiary">{field}</dt>
                      <dd className="wrap-anywhere text-text-secondary">
                        {readerCell(cells[at] ?? "")}
                      </dd>
                    </Fragment>
                  ))}
                </dl>
              </span>
              <Trace href={href(line)} name={basket} />
            </li>
          );
        })}
      </ul>
    </Tile>
  );
}

/** CP-4: how much room each test leaves, and who stands where. */
export const LegalLead = withDraws(
  function LegalLead(props: LeadProps) {
    const { entry } = props;
    if (blocked(entry)) return null;
    const href = leadHref(props);
    return (
      <Bento>
        <Headroom entry={entry} href={href} />
        {MAPS.map(({ name, title, span }) => (
          <MapTile
            key={name}
            map={mapOf(entry, name)}
            span={span}
            label={title}
            title={title}
            href={href}
            absent={`The module wrote no ${title.toLowerCase()} map.`}
          />
        ))}
        <Baskets entry={entry} href={href} />
      </Bento>
    );
  },
  ["figures", "maps"],
);
