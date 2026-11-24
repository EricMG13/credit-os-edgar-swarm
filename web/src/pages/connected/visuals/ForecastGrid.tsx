import type { ReactNode } from "react";
import { TRACE_HOST } from "@/pages/library/parts/TraceControl";
import { cx } from "@/utils/cx";
import { containsReference, readerText } from "../publishedReport";
import { Key } from "../report/overview/figureParts";
import { word } from "./visualData";

type Cell = Record<string, unknown>;

export interface GridColumn {
  label: string;
  /** The column band this column sits under: "Actual", "Forecast · Base case". */
  band: string;
  /** The recorded date span, for the header's title. */
  title?: string;
}

export interface GridRow {
  label: string;
  band: string;
  /** What the row's figures are: accounts, ratios, growth rates. */
  family: string;
  total: boolean;
  cells: Cell[];
}

interface Gap {
  display: string;
  reason: string;
}

interface CellRun {
  start: number;
  span: number;
  cell: Cell;
  gap?: Gap;
}

const EVIDENCE_REASON = "Reason recorded in model evidence.";
const NO_FIGURE = "the model wrote no figure here; none is interpolated or shown as zero.";
const WITH_REASON = `${NO_FIGURE} Hover the cell or open the row's trace for the recorded reason.`;

/** A cell that holds no figure: n.a., n.m., not published, or any recorded reason. */
function gapOf(cell: Cell): Gap | undefined {
  const display = word(cell.display);
  const valued =
    typeof cell.status === "string"
      ? cell.status === "value"
      : !/^n\.[am]\.$/u.test(display) && !word(cell.reason);
  if (valued) return undefined;
  const reason = readerText(word(cell.reason));
  return { display, reason: containsReference(reason) ? EVIDENCE_REASON : reason };
}

const sameGap = (left?: Gap, right?: Gap) =>
  Boolean(left && right && left.display === right.display && left.reason === right.reason);

/** A row's cells, with consecutive like gaps under one band drawn as one spanning cell. */
function cellRuns(cells: Cell[], columns: GridColumn[]) {
  const runs: CellRun[] = [];
  cells.forEach((cell, index) => {
    const gap = gapOf(cell);
    const last = runs.at(-1);
    if (last && sameGap(last.gap, gap) && columns[last.start]?.band === columns[index]?.band)
      last.span += 1;
    else runs.push({ start: index, span: 1, cell, gap });
  });
  return runs;
}

/** Each gap word once, in the order the table first shows it, and whether any of its cells
 * records a reason. The reasons themselves stay on the cells and in the traces: a cell's reason
 * can be the model's qualification ledger, which the page draws only on Evidence. */
function gapWords(rows: { runs: CellRun[] }[]) {
  const words = new Map<string, boolean>();
  for (const { runs } of rows)
    for (const { gap } of runs)
      if (gap) words.set(gap.display, (words.get(gap.display) ?? false) || gap.reason !== "");
  return [...words];
}

function spans<T>(items: T[], keyOf: (item: T) => string) {
  const groups: { key: string; items: T[] }[] = [];
  for (const item of items) {
    const last = groups.at(-1);
    if (last?.key === keyOf(item)) last.items.push(item);
    else groups.push({ key: keyOf(item), items: [item] });
  }
  return groups;
}

/** "Accounts", "Accounts and growth rates", "Accounts, ratios and growth rates". */
function familyText(rows: GridRow[]) {
  const names = [...new Set(rows.map(({ family }) => family))].map((name, index) =>
    index ? name.toLowerCase() : name,
  );
  return names.length > 1
    ? `${names.slice(0, -1).join(", ")} and ${names.at(-1) ?? ""}`
    : (names[0] ?? "");
}

function GapCell({ run }: { run: CellRun & { gap: Gap } }) {
  const { display, reason } = run.gap;
  return (
    <td
      colSpan={run.span > 1 ? run.span : undefined}
      className="px-2 py-1.5"
      title={reason || undefined}
      aria-label={reason ? `${display} ${reason}` : undefined}
    >
      <span className="gap-hatch flex min-h-8 items-center justify-center rounded-ds-sm border border-dashed border-border-gap px-2">
        <span className="rounded-ds-xs bg-surface-card px-1.5 text-caption text-gap-text whitespace-nowrap">
          {display}
        </span>
      </span>
    </td>
  );
}

function ValueCell({ cell }: { cell: Cell }) {
  return (
    <td
      className="px-3 py-1.5 text-right font-mono text-mono whitespace-nowrap tabular-nums"
      title={word(cell.exact) || undefined}
    >
      {word(cell.display)}
    </td>
  );
}

function GridHead({ columns, traced }: { columns: GridColumn[]; traced: boolean }) {
  const head = "bg-surface-subtle px-3 py-2 text-caption text-text-secondary whitespace-nowrap";
  return (
    <thead className="border-b border-border-hairline">
      <tr>
        <th scope="col" rowSpan={2} className={cx(head, "sticky left-0 z-10 text-left")}>
          Measure
        </th>
        {spans(columns, ({ band }) => band).map(({ key, items }, index) => (
          <th
            key={index}
            scope="colgroup"
            colSpan={items.length}
            className={cx(head, "border-l border-border-hairline text-left text-text-primary")}
          >
            {key}
          </th>
        ))}
        {traced && (
          <th scope="col" rowSpan={2} className={cx(head, "text-right")}>
            Trace
          </th>
        )}
      </tr>
      <tr>
        {columns.map((column, index) => (
          <th
            key={index}
            scope="col"
            title={column.title}
            className={cx(head, "text-right font-mono text-text-primary")}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function GridBody({
  rows,
  width,
  source,
}: {
  rows: (GridRow & { runs: CellRun[] })[];
  width: number;
  source?: (row: string) => ReactNode;
}) {
  return spans(rows, ({ band }) => band).map(({ key, items }, group) => (
    <tbody key={group}>
      <tr className="border-b border-border-hairline bg-surface-subtle">
        <th
          scope="rowgroup"
          colSpan={width}
          className="px-3 py-1.5 text-left text-small font-semibold"
        >
          {key && `${key} `}
          <span className="font-normal text-text-secondary">{familyText(items)}</span>
        </th>
      </tr>
      {items.map((row, index) => (
        <tr
          key={index}
          className={cx(
            TRACE_HOST,
            "border-b border-border-hairline",
            row.total && "font-semibold",
          )}
        >
          <th
            scope="row"
            className="sticky left-0 z-10 min-w-40 max-w-64 bg-surface-card px-3 py-1.5 text-left text-small font-medium wrap-anywhere"
          >
            {row.label}
          </th>
          {row.runs.map((run) =>
            run.gap ? (
              <GapCell key={run.start} run={{ ...run, gap: run.gap }} />
            ) : (
              <ValueCell key={run.start} cell={run.cell} />
            ),
          )}
          {source && (
            <td className="px-2 py-1">
              <div className="flex justify-end">{source(row.label)}</div>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  ));
}

function GapKey({
  words,
  notes,
}: {
  words: [string, boolean][];
  notes?: Readonly<Record<string, string>>;
}) {
  if (!words.length) return null;
  return (
    <ul aria-label="Gap key" className="grid gap-1">
      {words.map(([display, reasoned]) => (
        <li key={display}>
          <Key tone="gap">
            <span>
              <span className="font-medium text-gap-text">{display}</span>:{" "}
              {notes?.[display] ?? (reasoned ? WITH_REASON : NO_FIGURE)}
            </span>
          </Key>
        </li>
      ))}
    </ul>
  );
}

/** The forecast grid: measures by column, given cells in mono, every other cell the gap cell in
 * place with its reason as its title and accessible name, one trace per row at the row's end, and one gap key under the table. */
export function ForecastGrid({
  name,
  columns,
  rows: inputRows,
  gapNotes,
  source,
}: {
  name: string;
  columns: GridColumn[];
  rows: GridRow[];
  /** What a gap word means where the grid itself made it ("Not published"). */
  gapNotes?: Readonly<Record<string, string>>;
  source?: (row: string) => ReactNode;
}) {
  const rows = inputRows.map((row) => ({ ...row, runs: cellRuns(row.cells, columns) }));
  return (
    <div className="grid min-w-0 gap-3">
      <div
        role="region"
        aria-label={`${name} table`}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- a phone scrolls it sideways
        tabIndex={0}
        className="relative min-w-0 overflow-x-auto rounded-ds-md border border-border-hairline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
      >
        <table className="w-full border-collapse text-small">
          <caption className="sr-only">{name}</caption>
          <GridHead columns={columns} traced={Boolean(source)} />
          <GridBody rows={rows} width={columns.length + (source ? 2 : 1)} source={source} />
        </table>
      </div>
      <GapKey words={gapWords(rows)} notes={gapNotes} />
    </div>
  );
}

/** A qualification the model records for the grid, drawn once under it with its trace. */
export function GridQualifications({
  items,
}: {
  items: { label: string; text: string; trace: ReactNode }[];
}) {
  if (!items.length) return null;
  return (
    <ul aria-label="Qualifications" className="grid gap-2">
      {items.map(({ label, text, trace }, index) => (
        <li
          key={index}
          className={cx(
            TRACE_HOST,
            "flex max-w-prose items-start gap-2 text-small text-text-secondary",
          )}
        >
          <div>
            <p className="font-semibold">{label}</p>
            <p>
              {containsReference(text)
                ? "Recorded qualification: review the model evidence."
                : readerText(text)}
            </p>
          </div>
          {trace}
        </li>
      ))}
    </ul>
  );
}
