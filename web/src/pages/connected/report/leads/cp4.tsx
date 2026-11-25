import { blocked, unitLabel } from "../../publishedReport";
import { word } from "../../visuals/visualData";
import { Key } from "../overview/figureParts";
import { basisNotes } from "../overview/figureData";
import { Bento, Tile } from "../overview/Tile";
import { Bullets, leadTests } from "./bullet";
import { withDraws } from "./draws";
import { KeyValues, LeadFigure, LeadGap, MapTile, Trace } from "./parts";
import { chartOf, columnOf, leadHref, mapOf, readerCell, registerTable, rowName } from "./read";
import type { LeadProps } from "./types";
import { ChartGap, writtenTable } from "./written";

type Href = (line?: number) => string;

const TITLE = "Covenant headroom";

const MAPS = [
  { name: "legal entities", title: "Legal entities", span: 4, noun: "a legal entities map" },
  { name: "intercreditor", title: "Intercreditor", span: 6, noun: "an intercreditor map" },
] as const;

function Headroom({ entry, href }: { entry: LeadProps["entry"]; href: Href }) {
  const chart = chartOf(entry, TITLE);
  const tests = chart.state === "ready" ? leadTests(chart.table, chart.descriptor) : null;
  if (chart.state !== "ready" || !tests?.length)
    return (
      <ChartGap
        chart={chart}
        span={8}
        label={TITLE}
        title={TITLE}
        href={href}
        unread="This page could not read the covenant headroom table the handoff has."
        absent="This page could not read a covenant headroom table from the handoff."
      />
    );
  const { table, descriptor } = chart;
  const unit = word(descriptor.unit);
  const rowHref = (at: number) => href(table.rowLines?.[at] ?? table.line);
  return (
    <LeadFigure
      span={8}
      label={TITLE}
      title={TITLE}
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
      table={writtenTable(table, href)}
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
        reason="This page could not read a basket and capacity register from the handoff."
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
                <KeyValues
                  items={fields.map(({ field, at }) => ({
                    key: field,
                    value: readerCell(cells[at] ?? ""),
                  }))}
                />
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
        {MAPS.map(({ name, title, span, noun }) => (
          <MapTile
            key={name}
            map={mapOf(entry, name)}
            span={span}
            label={title}
            title={title}
            href={href}
            absent={`This page could not read ${noun} from the handoff.`}
          />
        ))}
        <Baskets entry={entry} href={href} />
      </Bento>
    );
  },
  ["figures", "maps"],
);
