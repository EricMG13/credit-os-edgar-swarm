import type { OutputEntry, Table } from "../../publishedReport";
import type { SourceTable } from "../../visuals/visualData";
import { writtenTable } from "../Downside";
import { Tile } from "../overview/Tile";
import { CompactGap, LeadGap, TableRegion, Trace } from "./parts";
import { chartsStartingWith, IN_EVIDENCE, readerCell, WITHHELD } from "./read";

/** A published chart table as the handoff's own table, for its table view. */
const asTable = (table: SourceTable): Table => ({
  type: "table",
  line: table.line,
  headers: table.headers,
  rows: table.rows.map((cells, at) => ({ line: table.rowLines?.[at] ?? table.line, cells })),
});

/**
 * The module's charts a lead does not draw by name, in the handoff's order: a stated gap with its
 * reason, a table the store withheld with the page's reason and its trace, a published one as its
 * table. A lead that draws its module's figures draws these too, since the frame then draws none.
 */
export function OtherCharts({
  entry,
  href,
  drawn,
}: {
  entry: OutputEntry;
  href: (line?: number) => string;
  drawn: readonly string[];
}) {
  const charts = chartsStartingWith(entry, "").filter(({ title }) => !drawn.includes(title));
  return charts.map(({ title, chart }) => {
    const name = readerCell(title) || "Chart";
    if (chart.state === "gap")
      return <LeadGap key={title} span={6} label={name} title={name} reason={chart.reason} />;
    if (chart.state === "withheld")
      return (
        <LeadGap
          key={title}
          span={6}
          label={name}
          title={name}
          reason={WITHHELD}
          trace={<Trace href={href(chart.line)} name={name} />}
        />
      );
    if (chart.state !== "ready") return null;
    const table = writtenTable(asTable(chart.table), (line) => href(line));
    return (
      <Tile
        key={title}
        span={12}
        label={name}
        title={name}
        trace={<Trace href={href(chart.table.line)} name={name} />}
        className="w-full self-start"
      >
        {table ? <TableRegion label={name} table={table} /> : <CompactGap>{WITHHELD}</CompactGap>}
      </Tile>
    );
  });
}

const ROW_NOTES = [/^Reporting unit$/i, /^Basis and limitation$/i];

/**
 * A chart table's own per-row "Reporting unit" and "Basis and limitation" columns, for a lead's table
 * view: their headings, each row's cells as a working page shows them, and `shared`, the one basis
 * every row states (a note under the figure that no row is detached from), else none.
 */
export function rowBasis(table: SourceTable) {
  const columns = ROW_NOTES.map((name) => table.headers.findIndex((header) => name.test(header)));
  const kept = columns.filter((at) => at >= 0);
  const cells = (row: number) => kept.map((at) => readerCell(table.rows[row]?.[at] ?? "") || null);
  const basis = columns[1] ?? -1;
  const notes =
    basis < 0 ? [] : [...new Set(table.rows.map((row) => readerCell(row[basis] ?? "")))];
  const [only] = notes;
  return {
    head: kept.map((at) => table.headers[at] ?? ""),
    cells,
    shared: notes.length === 1 && only && only !== IN_EVIDENCE ? [only] : [],
  };
}
