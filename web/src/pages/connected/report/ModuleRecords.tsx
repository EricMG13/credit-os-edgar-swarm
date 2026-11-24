import { ArrowRight, ChevronDown, ChevronUp } from "@untitledui/icons";
import { useId, useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { Select } from "@/components/base/select/select";
import { BarCell } from "@/components/kit/BarCell";
import { Segmented } from "@/components/kit/Segmented";
import {
  displayColumns,
  evidencePath,
  readerText,
  type OutputEntry,
  type PublishedRun,
} from "../publishedReport";
import { FindingParagraph, PublishedTable } from "../ReportContent";
import { traceKey } from "../reportView";
import { GapNote, Tile } from "./overview/Tile";
import {
  amountColumns,
  compactColumns,
  moduleRecords,
  numericColumns,
  RECORD_KINDS,
  statedGap,
  unitColumn,
  type AmountColumn,
  type HeldRecord,
  type RecordTable,
} from "./moduleRecords";

type Run = Pick<PublishedRun, "folder">;

const TOGGLE =
  "flex min-h-8 flex-none cursor-pointer items-center gap-1.5 rounded-ds-sm border border-border-control px-3 text-small font-medium text-text-secondary outline-focus-ring transition duration-100 ease-linear hover:bg-surface-subtle hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 max-[480px]:min-h-11";

/** A link's own hit area: 32 px, 44 px on a phone. */
const TARGET = "min-h-8 max-[480px]:min-h-11";

const plural = (count: number, word: string) => `${String(count)} ${word}${count === 1 ? "" : "s"}`;

function countLine(tables: number, held: number) {
  const parts = tables ? [plural(tables, "table")] : [];
  if (held) parts.push(`${String(held)} held in Evidence`);
  return parts.join(" · ");
}

/** A figure over its bar on the column's one scale; a gap, a total or an aggregate row has no
 * share and keeps its words. */
function amountsOf(bars: Map<number, AmountColumn>) {
  return {
    columns: new Set(bars.keys()),
    draw: (column: number, cell: string, line: number) => {
      const bar = bars.get(column);
      const share = bar?.share(cell, line) ?? null;
      if (!bar || share === null) return undefined;
      return (
        <BarCell text={cell} share={share} tone={bar.negative(cell) ? "secondary" : "primary"} />
      );
    },
  };
}

/** A stated gap of the compact view: its leading words, the full text for every reader. */
function gapChip(_column: number, cell: string) {
  const words = statedGap(cell);
  if (words === null) return undefined;
  const text = readerText(cell);
  return (
    <span
      title={text}
      className="inline-flex items-center rounded-ds-xs border border-dashed border-border-gap px-1.5 text-caption whitespace-nowrap text-gap-text"
    >
      <span aria-hidden="true">{words}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
}

const SCALE_NOTE = "Bars: one scale per column; totals and aggregate rows have no bar.";

/** How the chosen table is drawn: its columns (compact when wide), numerals, bars and one unit. */
function tableForm(record: RecordTable, all: boolean) {
  const { table } = record;
  const displayed = displayColumns(table.headers, false, table.rows);
  const found = unitColumn(table);
  const unit = found && displayed.length > 1 && displayed.includes(found.column) ? found : null;
  const shown = unit ? displayed.filter((column) => column !== unit.column) : displayed;
  const compact = compactColumns(table, shown);
  const columns = all || !compact ? shown : compact;
  const bars = amountColumns(table, record.title);
  const drawnBars = new Map([...bars].filter(([column]) => columns.includes(column)));
  const numeric = new Set([...numericColumns(table)].filter((column) => !bars.has(column)));
  return { displayed, unit, compact, columns, drawnBars, numeric };
}

function RecordGap({ run, entry, record }: { run: Run; entry: OutputEntry; record: RecordTable }) {
  return (
    <GapNote>
      {record.table.rows.length
        ? "This table has no columns drawn on this page."
        : "This table has no rows in the handoff."}{" "}
      <Button href={evidencePath(run.folder, entry, record.table.line)} color="link-gray" size="sm">
        Open it in Evidence
      </Button>
    </GapNote>
  );
}

function RecordDrawing({
  run,
  entry,
  record,
}: {
  run: Run;
  entry: OutputEntry;
  record: RecordTable;
}) {
  const [all, setAll] = useState(false);
  const form = tableForm(record, all);
  if (!record.table.rows.length || !form.displayed.length)
    return <RecordGap run={run} entry={entry} record={record} />;
  const { unit, compact, drawnBars } = form;
  return (
    <div className="flex min-w-0 flex-col gap-2">
      {(unit ?? compact) && (
        <div className="flex flex-wrap items-center justify-between gap-2">
          {unit && (
            <p className="text-caption text-text-tertiary">
              <span>{`${unit.header}: `}</span>
              <span>{unit.value}</span>
            </p>
          )}
          {compact && (
            <button
              type="button"
              aria-pressed={all}
              className={TOGGLE}
              onClick={() => {
                setAll(!all);
              }}
            >
              All columns
            </button>
          )}
        </div>
      )}
      <PublishedTable
        table={record.table}
        heading={record.title}
        traceAt={(line) => traceKey(entry, line)}
        rowHref={(line) => evidencePath(run.folder, entry, line)}
        amounts={drawnBars.size ? amountsOf(drawnBars) : undefined}
        columns={form.columns}
        numeric={form.numeric}
        region
        wideBars
        drawCell={compact && !all ? gapChip : undefined}
      />
      {drawnBars.size > 0 && <p className="text-caption text-text-tertiary">{SCALE_NOTE}</p>}
    </div>
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

const PILLS = 6;

/** The tables of one kind: pills for six or fewer, a select beyond, so the chooser stays short. */
function TableChooser({
  own,
  current,
  onSelect,
}: {
  own: RecordTable[];
  current: string;
  onSelect: (key: string) => void;
}) {
  if (own.length > PILLS)
    return (
      <div className="w-full max-w-md min-w-0">
        <Select
          label="Table"
          value={current}
          placeholder="Choose a table"
          onChange={(key) => {
            if (key !== null) onSelect(String(key));
          }}
        >
          {own.map((item) => (
            <Select.Item
              key={tableKey(item)}
              id={tableKey(item)}
              label={item.title}
              value={{ id: tableKey(item), label: item.title }}
            />
          ))}
        </Select>
      </div>
    );
  return (
    <Segmented
      label="Table"
      segments={own.map((item) => ({
        key: tableKey(item),
        // A long title wraps inside its segment rather than widening the page at 390 px.
        label: <span className="py-1 text-left whitespace-normal">{item.title}</span>,
      }))}
      current={current}
      onSelect={onSelect}
    />
  );
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
        <TableChooser
          own={own}
          current={tableKey(record)}
          onSelect={(key) => {
            setChoice({ kind, table: key });
          }}
        />
      )}
      <ChosenRecord key={tableKey(record)} run={run} entry={entry} record={record} />
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
          <li key={item.line} className="flex items-center">
            <Button
              href={evidencePath(run.folder, entry, item.line)}
              color="link-gray"
              size="sm"
              className={TARGET}
            >
              {item.title}
            </Button>
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <Button
          href={evidencePath(run.folder, entry)}
          color="link-gray"
          size="sm"
          iconTrailing={ArrowRight}
          className={TARGET}
        >
          Open this module in Evidence
        </Button>
      </div>
    </div>
  );
}

const TITLE = "Statements and records";

/**
 * The module's statements, registers, calculations and chart tables, in one tile closed by
 * default; the registers the page does not draw are listed by name with their place in Evidence.
 * `anchorId` names the title so the page navigator can scroll to it and focus it.
 */
export function ModuleRecords({
  run,
  entry,
  anchorId,
}: {
  run: Run;
  entry: OutputEntry;
  anchorId?: string;
}) {
  const [open, setOpen] = useState(false);
  const body = useId();
  const { tables, evidence } = moduleRecords(entry);
  if (!tables.length && !evidence.length) return null;
  const Chevron = open ? ChevronUp : ChevronDown;
  const toggle = (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={open ? body : undefined}
      className={TOGGLE}
      onClick={() => {
        setOpen(!open);
      }}
    >
      {open ? "Hide records" : "Show records"}
      <Chevron aria-hidden="true" className="size-4" />
    </button>
  );
  const title = anchorId ? (
    <span
      id={anchorId}
      tabIndex={-1}
      className="scroll-mt-4 rounded-ds-xs outline-focus-ring focus-visible:outline-2"
    >
      {TITLE}
    </span>
  ) : (
    TITLE
  );
  return (
    <Tile span={12} label={TITLE} title={title} trace={toggle}>
      <p className="-mt-3 text-caption text-text-tertiary">
        {countLine(tables.length, evidence.length)}
      </p>
      {open && (
        <div id={body} className="flex min-w-0 flex-col gap-4">
          {tables.length > 0 && <RecordTabs run={run} entry={entry} tables={tables} />}
          {evidence.length > 0 && <HeldInEvidence run={run} entry={entry} held={evidence} />}
        </div>
      )}
    </Tile>
  );
}
