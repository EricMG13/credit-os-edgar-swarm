import { ArrowRight, ChevronDown, ChevronUp } from "@untitledui/icons";
import { useId, useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { BarCell } from "@/components/kit/BarCell";
import { Segmented } from "@/components/kit/Segmented";
import { TraceControl, TRACE_HOST } from "@/pages/library/parts/TraceControl";
import {
  containsReference,
  displayColumns,
  evidencePath,
  readerText,
  type OutputEntry,
  type PublishedRun,
  type Table,
} from "../publishedReport";
import { FindingParagraph, PublishedTable } from "../ReportContent";
import { traceKey } from "../reportView";
import { richParts } from "../richText";
import { GapNote } from "./overview/Tile";
import {
  amountColumns,
  moduleRecords,
  RECORD_KINDS,
  type AmountColumn,
  type HeldRecord,
  type RecordTable,
} from "./moduleRecords";

type Run = Pick<PublishedRun, "folder">;

const TOGGLE =
  "flex min-h-8 flex-none cursor-pointer items-center gap-1.5 rounded-ds-sm border border-border-control px-3 text-small font-medium text-text-secondary outline-focus-ring transition duration-100 ease-linear hover:bg-surface-subtle hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 max-[480px]:min-h-11";
const EMPTY = "Empty in the handoff";

const plural = (count: number, word: string) => `${String(count)} ${word}${count === 1 ? "" : "s"}`;

function countLine(tables: number, held: number) {
  const parts = tables ? [plural(tables, "table")] : [];
  if (held) parts.push(`${String(held)} held in Evidence`);
  return parts.join(" · ");
}

/** A first column that stays in view while a wide table scrolls sideways, as `PublishedTable` pins it. */
const pinned = (wide: boolean, first: boolean, background: string) =>
  wide && first ? ` sm:sticky sm:left-0 sm:min-w-56 ${background}` : "";

function AmountCell({
  cell,
  column,
  href,
}: {
  cell: string;
  column: AmountColumn | undefined;
  href: string;
}) {
  if (containsReference(cell))
    return (
      <Button href={href} color="link-gray" size="sm">
        In Evidence
      </Button>
    );
  if (!cell.trim()) return <span aria-label={EMPTY}>—</span>;
  const share = column?.share(cell) ?? null;
  if (!column || share === null) return richParts(cell, readerText);
  return (
    <BarCell text={cell} share={share} tone={column.negative(cell) ? "secondary" : "primary"} />
  );
}

/** `PublishedTable`'s drawing, with each amount column's figures over bars on one scale per column. */
function AmountTable({
  run,
  entry,
  record,
  bars,
}: {
  run: Run;
  entry: OutputEntry;
  record: RecordTable;
  bars: Map<number, AmountColumn>;
}) {
  const { table, title } = record;
  const columns = displayColumns(table.headers, false, table.rows);
  const wide = columns.length >= 5;
  const scrolls = wide ? { role: "region", "aria-label": title, tabIndex: 0 } : {};
  return (
    <div
      {...scrolls}
      className="relative min-w-0 overflow-x-auto rounded-ds-md border border-border-hairline"
    >
      <table className="w-full border-collapse text-sm">
        <caption className="sr-only">{`${title} · bars on one scale per column`}</caption>
        <thead className="bg-surface-subtle text-text-secondary">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                scope="col"
                className={`px-3 py-2.5 text-left font-semibold${pinned(wide, column === columns[0], "bg-surface-subtle")}`}
              >
                {richParts(table.headers[column] ?? "", readerText)}
              </th>
            ))}
            <th scope="col" className="px-2 py-2.5 text-left font-semibold">
              <span className="sr-only">Sources</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr
              key={row.line}
              className={`${TRACE_HOST} border-t border-border-hairline align-top`}
            >
              {columns.map((column) => (
                <td
                  key={column}
                  className={`px-3 py-2.5 text-text-secondary${bars.has(column) ? " min-w-32" : ""}${pinned(wide, column === columns[0], "bg-surface-card")}`}
                >
                  <AmountCell
                    cell={row.cells[column] ?? ""}
                    column={bars.get(column)}
                    href={evidencePath(run.folder, entry, row.line)}
                  />
                </td>
              ))}
              <td className="px-2 py-1.5">
                <TraceControl
                  trace={traceKey(entry, row.line)}
                  label={`Show sources for ${readerText(row.cells[0] || "this row")}`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const drawable = (table: Table) =>
  table.rows.length > 0 && displayColumns(table.headers, false, table.rows).length > 0;

function RecordDrawing({
  run,
  entry,
  record,
}: {
  run: Run;
  entry: OutputEntry;
  record: RecordTable;
}) {
  const bars = amountColumns(record.table);
  if (!drawable(record.table))
    return (
      <GapNote>
        This table has no columns drawn on this page.{" "}
        <Button
          href={evidencePath(run.folder, entry, record.table.line)}
          color="link-gray"
          size="sm"
        >
          Open it in Evidence
        </Button>
      </GapNote>
    );
  if (bars.size) return <AmountTable run={run} entry={entry} record={record} bars={bars} />;
  return (
    <PublishedTable
      table={record.table}
      heading={record.title}
      traceAt={(line) => traceKey(entry, line)}
      rowHref={(line) => evidencePath(run.folder, entry, line)}
    />
  );
}

function ChosenRecord({
  run,
  entry,
  record,
}: {
  run: Run;
  entry: OutputEntry;
  record: RecordTable;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-3">
      <h4 className="text-body font-semibold text-text-primary">{record.title}</h4>
      {record.notes.map((note) => (
        <FindingParagraph
          key={note.line}
          block={note}
          trace={traceKey(entry, note.line)}
          href={evidencePath(run.folder, entry, note.line)}
        />
      ))}
      <RecordDrawing run={run} entry={entry} record={record} />
    </div>
  );
}

const tableKey = (record: RecordTable) => String(record.table.line);

function kindSegments(tables: RecordTable[]) {
  return RECORD_KINDS.flatMap(([kind, label]) => {
    const count = tables.filter((record) => record.kind === kind).length;
    if (!count) return [];
    return [
      {
        key: kind,
        label: (
          <>
            {label} <span className="font-mono tabular-nums">{String(count)}</span>
          </>
        ),
      },
    ];
  });
}

/** The kind tabs, the table tabs when the kind holds more than one, and the chosen table. */
function RecordTabs({
  run,
  entry,
  tables,
}: {
  run: Run;
  entry: OutputEntry;
  tables: RecordTable[];
}) {
  const kinds = kindSegments(tables);
  const [choice, setChoice] = useState<{ kind: string; table: string | null }>({
    kind: kinds[0]?.key ?? "",
    table: null,
  });
  const kind = kinds.find(({ key }) => key === choice.kind)?.key ?? kinds[0]?.key;
  const own = tables.filter((record) => record.kind === kind);
  const record = own.find((item) => tableKey(item) === choice.table) ?? own[0];
  if (!kind || !record) return null;
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <Segmented
        label="Record kind"
        segments={kinds}
        current={kind}
        onSelect={(key) => {
          setChoice({ kind: key, table: null });
        }}
      />
      {own.length > 1 && (
        <Segmented
          label="Table"
          segments={own.map((item) => ({
            key: tableKey(item),
            // A long title wraps inside its segment rather than widening the page at 390 px.
            label: <span className="py-1 text-left whitespace-normal">{item.title}</span>,
          }))}
          current={tableKey(record)}
          onSelect={(key) => {
            setChoice({ kind, table: key });
          }}
        />
      )}
      <ChosenRecord run={run} entry={entry} record={record} />
    </div>
  );
}

function HeldInEvidence({
  run,
  entry,
  held,
}: {
  run: Run;
  entry: OutputEntry;
  held: HeldRecord[];
}) {
  const id = useId();
  return (
    <div className="flex min-w-0 flex-col gap-2 border-t border-border-hairline pt-4">
      <h4 id={id} className="text-small font-semibold text-text-primary">
        Held in Evidence
      </h4>
      <ul aria-labelledby={id} className="grid gap-1">
        {held.map((item) => (
          <li key={item.line} className="flex min-h-8 items-center max-[480px]:min-h-11">
            <Button href={evidencePath(run.folder, entry, item.line)} color="link-gray" size="sm">
              {item.title}
            </Button>
          </li>
        ))}
      </ul>
      <div className="flex min-h-8 items-center max-[480px]:min-h-11">
        <Button
          href={evidencePath(run.folder, entry)}
          color="link-gray"
          size="sm"
          iconTrailing={ArrowRight}
        >
          Open this module in Evidence
        </Button>
      </div>
    </div>
  );
}

/**
 * The module's statements, registers, calculations and chart tables, in one region closed by
 * default; the registers the page does not draw are listed by name with their place in Evidence.
 */
export function ModuleRecords({ run, entry }: { run: Run; entry: OutputEntry }) {
  const [open, setOpen] = useState(false);
  const heading = useId();
  const body = useId();
  const { tables, evidence } = moduleRecords(entry);
  if (!tables.length && !evidence.length) return null;
  const Chevron = open ? ChevronUp : ChevronDown;
  return (
    <section
      aria-labelledby={heading}
      className="flex min-w-0 flex-col gap-4 rounded-ds-lg border border-border-subtle bg-surface-card p-5 sm:p-6 lg:col-span-12"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-1">
          <h3 id={heading} className="text-h4 font-medium text-balance text-text-primary">
            Statements and records
          </h3>
          <p className="text-caption text-text-tertiary">
            {countLine(tables.length, evidence.length)}
          </p>
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={body}
          className={TOGGLE}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "Hide records" : "Show records"}
          <Chevron aria-hidden="true" className="size-4" />
        </button>
      </div>
      {open && (
        <div id={body} className="flex min-w-0 flex-col gap-4">
          {tables.length > 0 && <RecordTabs run={run} entry={entry} tables={tables} />}
          {evidence.length > 0 && <HeldInEvidence run={run} entry={entry} held={evidence} />}
        </div>
      )}
    </section>
  );
}
