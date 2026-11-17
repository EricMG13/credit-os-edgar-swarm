import type { RecordBlock } from "../slice";
import { TableCard } from "./TableCard";
import { TraceControl } from "./TraceControl";

/**
 * The risk matrix (C7). Its Chart side, the heat grid, is not drawn: the kit has no such chart, so
 * the Table side stands alone in the table card, with its trace control for the block and one per risk.
 *
 * Where the block has no trace of its own and every row carries one, the table-level control is not
 * drawn: a "no source recorded" marker beside a table whose rows each have a control would be wrong
 * (ruling L9b; the connected app builds its risk matrix this way). Otherwise it is drawn, marker included.
 */
export function MatrixBlock({ block }: { block: Extract<RecordBlock, { kind: "matrix" }> }) {
  const rowsTraced = block.rows.length > 0 && block.rows.every((row) => row.trace !== null);
  return (
    <TableCard
      title={block.title}
      note={block.note}
      label="Table side of the risk matrix"
      size="text-h3"
      trace={
        block.trace === null && rowsTraced
          ? null
          : { key: block.trace, label: "Show sources for the risk matrix" }
      }
      head={block.columns.slice()}
      endHeading="Sources"
      rows={block.rows.map((row) => ({
        label: row.risk,
        cells: [row.probability, row.impact],
        end: <TraceControl trace={row.trace} label="Show sources for this risk" />,
      }))}
    />
  );
}
