import {
  comparisonRows,
  containsReference,
  evidencePath,
  methodNote,
  passages,
  readParagraph,
  readerText,
  type OutputEntry,
  type PublishedChanges,
} from "../../publishedReport";
import { namedTable } from "../../reportView";
import type { Table } from "../../publishedReport";
import { changeSign, tone } from "../../signal";
import { amount } from "../../visuals/visualData";

export type MeasureTone = "better" | "worse" | "flat";

/** What the CP-8 issuer table says about one measure's cause. */
export type Cause =
  | { kind: "written"; text: string }
  /** The cell cites a source: the page links to it in Evidence instead of drawing it. */
  | { kind: "referenced" }
  /** The row was found and its cell is empty. */
  | { kind: "absent" }
  /** No row of the issuer table carries this measure's name. */
  | { kind: "unmatched" }
  /** The comparison module has no handoff in this run: said once on the page, not per row. */
  | { kind: "noModule" };

export type MeasureChange = {
  key: string;
  label: string;
  /** The earlier and current figures as the pack states them, period included. */
  before: string;
  after: string;
  /** The same figures as numbers for drawing; null where the pack gives none. */
  beforeValue: number | null;
  afterValue: number | null;
  delta: string | null;
  tone: MeasureTone | null;
  /** The comparability sentence of the verdict; a reference is replaced by a pointer to Evidence. */
  reason: string;
  cause: Cause;
  effect: string | null;
  href: string | undefined;
};

export type MeasureGroups = {
  moved: MeasureChange[];
  revised: MeasureChange[];
  unmoved: MeasureChange[];
  notAssessable: MeasureChange[];
};

const plain = (text = "") =>
  text.replaceAll("**", "").replaceAll("`", "").trim().replace(/\s+/g, " ");
const nothing = (text: string) => text === "" || /^[—–-]$/.test(text);

function causeOf(cell: string | undefined): Cause {
  const text = readerText(plain(cell));
  if (nothing(text)) return { kind: "absent" };
  return containsReference(text) ? { kind: "referenced" } : { kind: "written", text };
}

/** A written cell in the module's words; null for a placeholder or a cell that cites a source. */
function written(cell: string | undefined) {
  const text = readerText(plain(cell));
  return nothing(text) || containsReference(text) ? null : text;
}

function issuerRows(entry: OutputEntry | undefined) {
  const table =
    entry &&
    namedTable(entry, "What changed: the issuer", [
      "Measure or fact",
      "Earlier",
      "Current",
      "Cause",
      "Effect on the credit view",
    ]);
  return new Map(table?.rows.map(({ cells }) => [plain(cells[0]).toLowerCase(), cells] as const));
}

/** The pack's own reading of comparability, as `comparisonRows` applies it. */
function comparable(
  change: PublishedChanges,
  measure: NonNullable<NonNullable<PublishedChanges["pack"]>["measures"]>[number],
) {
  return (
    change.verdicts?.measures?.[measure.key]?.kind === "comparable" &&
    (measure.prior?.unit ?? null) === (measure.current?.unit ?? null) &&
    measure.comparable !== "no" &&
    measure.prior?.value != null &&
    measure.current?.value != null
  );
}

/** The pack's measures in the pack's order, grouped by what the pack says about each. */
export function classifyMeasures(
  change: PublishedChanges,
  trace: (label: string) => string | undefined,
  entry?: OutputEntry,
): MeasureGroups {
  const rows = comparisonRows(change, "reader");
  const causes = issuerRows(entry);
  const groups: MeasureGroups = { moved: [], revised: [], unmoved: [], notAssessable: [] };
  (change.pack?.measures ?? []).forEach((measure, index) => {
    const [label = measure.label, before = "", after = "", delta = "—", reason = "", effect = ""] =
      rows[index] ?? [];
    const issuer = causes.get(plain(label).toLowerCase());
    const sign = measure.difference == null ? null : changeSign(String(measure.difference));
    const shown = delta !== "—";
    const toned = shown && sign !== null ? tone(measure.key, String(measure.difference)) : "none";
    const revision = reason.endsWith("Same-period analysis change");
    const item: MeasureChange = {
      key: measure.key,
      label,
      before,
      after,
      beforeValue: amountOf(measure.prior?.value),
      afterValue: amountOf(measure.current?.value),
      delta: shown && sign !== null ? delta : null,
      tone: toned === "none" ? null : toned,
      reason: stated(reason.replace(/ · Same-period analysis change$/, "")),
      cause: !entry ? { kind: "noModule" } : issuer ? causeOf(issuer[3]) : { kind: "unmatched" },
      effect: written(effect) ?? written(issuer?.[4]),
      href: trace(label),
    };
    if (!comparable(change, measure) || sign === null) groups.notAssessable.push(item);
    else if (revision && sign !== 0) groups.revised.push(item);
    else if (sign !== 0) groups.moved.push(item);
    else groups.unmoved.push(item);
  });
  return groups;
}

function stated(reason: string) {
  return containsReference(reason) ? "See comparison evidence." : reason;
}

function amountOf(value: string | number | null | undefined) {
  return value == null ? null : amount(String(value));
}

export type StatusColumn = "unchanged" | "revised" | "new" | "missing";

const COLUMNS: Record<string, StatusColumn> = {
  Unchanged: "unchanged",
  Strengthened: "revised",
  Weakened: "revised",
  Reversed: "revised",
  New: "new",
  "Not run this time": "missing",
};

/** Which column of the module matrix a CP-8 status belongs to; none for a status it does not name. */
export function statusColumn(status: string): StatusColumn | null {
  return Object.hasOwn(COLUMNS, status) ? (COLUMNS[status] ?? null) : null;
}

/** A cell of a CP-8 register in the module's words, or the fact that it cites a source or is empty. */
export type Cell = Cause;

const cellOf = causeOf;

/** The issuer-table rows that are not one of the pack's measures: facts such as a new facility or outlook. */
export function issuerFacts(
  entry: OutputEntry | undefined,
  folder: string,
  measureLabels: ReadonlySet<string>,
) {
  const table =
    entry &&
    namedTable(entry, "What changed: the issuer", [
      "Measure or fact",
      "Earlier",
      "Current",
      "Cause",
      "Effect on the credit view",
    ]);
  if (!entry || !table) return [];
  return table.rows
    .filter(({ cells }) => !measureLabels.has(plain(cells[0]).toLowerCase()))
    .map(({ cells, line }) => ({
      line,
      href: evidencePath(folder, entry, line),
      label: cellOf(cells[0]),
      before: cellOf(cells[1]),
      after: cellOf(cells[2]),
      cause: cellOf(cells[3]),
      effect: cellOf(cells[4]),
    }));
}

/** The analysis-table rows, drawn where there is no pack to supply the module matrix. */
export function analysisRows(entry: OutputEntry | undefined, folder: string) {
  const table =
    entry && namedTable(entry, "What changed: the analysis", ["Module", "Status", "Cause", "Why"]);
  if (!entry || !table) return [];
  return table.rows.map(({ cells, line }) => ({
    line,
    href: evidencePath(folder, entry, line),
    module: cellOf(cells[0]),
    status: cellOf(cells[1]),
    cause: cellOf(cells[2]),
    why: cellOf(cells[3]),
  }));
}

/** A ledger row: its text in the module's words, or null where it cites a source (then `href` is the link). */
export type LedgerItem = { text: string | null; note: string | null; line: number; href: string };
export type LedgerGroup = { status: string; heading: string; items: LedgerItem[] };

const NAMED = ["New", "Closed", "Remaining", "Parked"];
const HEADING: Record<string, string> = { New: "Added", Closed: "Removed" };

/**
 * CP-8's limitations ledger grouped by every status it uses: what was added and what was removed
 * first, then the rest. A ledger without its Limitation or Status column comes back as the table.
 */
export function ledgerOf(
  entry: OutputEntry | undefined,
  folder: string,
): { groups: LedgerGroup[] } | { table: Table } | null {
  if (!entry) return null;
  const tables = entry.sections
    .filter((section) => section.heading === "Limitations ledger")
    .flatMap(({ blocks }) => blocks)
    .filter((block): block is Table => block.type === "table");
  const table = tables.length === 1 ? tables[0] : undefined;
  if (!table) return null;
  const at = (name: string) => table.headers.indexOf(name);
  const [limitation, status, closed] = [at("Limitation"), at("Status"), at("What closed it")];
  if (limitation < 0 || status < 0) return { table };
  const byStatus = new Map<string, LedgerItem[]>();
  for (const { cells, line } of table.rows) {
    if (nothing(plain(cells[limitation]))) continue;
    const kind = readerText(plain(cells[status])) || "Not stated";
    const item = {
      text: written(cells[limitation]),
      note: closed < 0 ? null : written(cells[closed]),
      line,
      href: evidencePath(folder, entry, line),
    };
    byStatus.set(kind, [
      ...(byStatus.get(kind) ?? []),
      kind === "New" ? { ...item, note: null } : item,
    ]);
  }
  const rest = [...byStatus.keys()].filter((kind) => !NAMED.includes(kind)).sort();
  const groups = [...NAMED.filter((kind) => byStatus.has(kind)), ...rest].map((kind) => ({
    status: kind,
    heading: HEADING[kind] ?? kind,
    items: byStatus.get(kind) ?? [],
  }));
  return { groups };
}

type Paragraph = { line: number; text: string | null; href: string };
export type PassageItem = ({ kind: "text" } & Paragraph) | { kind: "table"; table: Table };

/** The blocks of one reader passage in order; `text` is null where a paragraph cites a source. */
export function passageItems(
  entry: OutputEntry | undefined,
  heading: string,
  folder: string,
): PassageItem[] | null {
  if (!entry) return null;
  const sections = passages(entry.sections).filter((section) => section.heading === heading);
  if (sections.length === 0) return null;
  return sections
    .flatMap(({ blocks }) => blocks)
    .flatMap((block): PassageItem[] => {
      if (block.type === "table") return [{ kind: "table", table: block }];
      if (block.type !== "text" || methodNote(block.text)) return [];
      const body = plain(readParagraph(block.text).body);
      if (!body) return [];
      return [
        {
          kind: "text",
          line: block.line,
          text: containsReference(body) ? null : readerText(body),
          href: evidencePath(folder, entry, block.line),
        },
      ];
    });
}

/**
 * The verdict is the first paragraph of the Bottom line, whole: splitting the module's prose would
 * be parsing its judgement. Every other block of the passage follows as body. A first paragraph
 * that cites a source is a link to Evidence, not a missing verdict.
 */
export function verdictOf(entry: OutputEntry | undefined, folder: string) {
  const items = passageItems(entry, "Bottom line", folder) ?? [];
  const first = items.find((item) => item.kind === "text");
  if (first?.kind !== "text") return null;
  return { first, body: items.filter((item) => item !== first) };
}
