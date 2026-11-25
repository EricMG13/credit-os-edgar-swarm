import type { ReactNode } from "react";
import type { SourceTable } from "../../visuals/visualData";
import { Disclosure, LeadGap, Trace, type LeadTable } from "./parts";
import { readerCell, rowName, WITHHELD, type Chart } from "./read";

type Span = Parameters<typeof LeadGap>[0]["span"];
type Href = (line?: number) => string;

/** Columns that name where a row comes from: they go to the row's trace, never to a cell. */
const SOURCE_COLUMN = /^(?:sources?|evidence|evidence id|source trace)$/i;

/**
 * A handoff table as a table view shows it: every column the module wrote, in its order, each
 * cell as written for a reader (its per-row unit and basis included); a source column goes to
 * the row's trace only. Undefined for a table with no rows.
 */
export function writtenTable(table: SourceTable, href: Href): LeadTable | undefined {
  const shown = table.headers.flatMap((header, at) =>
    SOURCE_COLUMN.test(header.trim()) ? [] : [at],
  );
  const [first = 0, ...rest] = shown;
  if (!table.rows.length || !shown.length) return undefined;
  return {
    head: shown.map((at) => readerCell(table.headers[at] ?? "")),
    rows: table.rows.map((row, index) => {
      const label = rowName(readerCell(row[first] ?? ""), index);
      return {
        label,
        cells: rest.map((at) => readerCell(row[at] ?? "") || null),
        end: <Trace href={href(table.rowLines?.[index] ?? table.line)} name={label} />,
      };
    }),
    endHeading: "Source",
  };
}

/**
 * A figure the page does not draw, in its place: the module's stated reason; the table the
 * handoff has but the page could not draw or read (`unread`), with the table as written behind a
 * disclosure; or, with no such table, `absent`.
 */
export function ChartGap({
  chart,
  span,
  label,
  title,
  href,
  unread,
  absent,
  children,
}: {
  chart: Chart;
  span: Span;
  label: string;
  title: ReactNode;
  href: Href;
  /** Why a table the handoff has, published or not, is not drawn. */
  unread?: string;
  absent: string;
  children?: ReactNode;
}) {
  if (chart.state === "gap" || chart.state === "absent")
    return (
      <LeadGap
        span={span}
        label={label}
        title={title}
        reason={chart.state === "gap" ? chart.reason : absent}
      >
        {children}
      </LeadGap>
    );
  const written = writtenTable(chart.table, href);
  return (
    <LeadGap
      span={span}
      label={label}
      title={title}
      reason={chart.state === "withheld" ? WITHHELD : (unread ?? WITHHELD)}
      trace={<Trace href={href(chart.table.line)} name={label} />}
    >
      {written && <Disclosure label={label} summary="The table as written" table={written} />}
      {children}
    </LeadGap>
  );
}
