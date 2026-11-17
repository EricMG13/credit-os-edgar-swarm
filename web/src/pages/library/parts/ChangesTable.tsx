import type { Changes } from "../slice";
import { TableCard } from "./TableCard";
import { TraceControl } from "./TraceControl";
import { toTableCell } from "./chartCell";

/**
 * The kit's table right-aligns and never wraps a column after the first. The change words (columns
 * 4 to 6: kind, direction, cause and effect) are text, so they read from the left, and the cause and
 * effect, a sentence pair, wraps inside a minimum width; the table scrolls sideways when it needs to.
 */
const WORDS_CLASS =
  "[&_tr>:nth-child(4)]:text-left [&_tr>:nth-child(5)]:text-left [&_tr>:nth-child(6)]:text-left [&_td:nth-child(6)]:min-w-72 [&_td:nth-child(6)]:whitespace-normal";

/** A delivered word as a table cell: the kit's table rejects an empty string, so a blank one is drawn as missing. */
const word = (text: string | null) => (text === null || text.trim() === "" ? null : text);

/**
 * The Table side of the Changes presentation, earlier against current: this page's one toggle is Cards
 * or Table. Each row keeps what its card shows: the kind, the delivered direction words (missing where
 * the change has none) and the cause then the effect, as the card draws them.
 */
export function ChangesTable({ data }: { data: Extract<Changes, { kind: "compared" }> }) {
  return (
    <TableCard
      title="Earlier against current"
      note={data.tableNote}
      label="Table side of the presentation"
      size="text-h4"
      trace={null}
      head={[
        "Change",
        data.earlierLabel,
        data.currentLabel,
        "Kind",
        "Direction",
        "Cause and effect",
      ]}
      endHeading="Sources"
      tableClass={WORDS_CLASS}
      rows={data.changes.map((change) => ({
        label: change.measure,
        cells: [
          toTableCell(change.from),
          toTableCell(change.current),
          word(change.kind),
          word(change.change),
          word(`${change.cause} ${change.effect}`.trim()),
        ],
        end: <TraceControl trace={change.trace} label="Show sources for this change" />,
      }))}
    />
  );
}
