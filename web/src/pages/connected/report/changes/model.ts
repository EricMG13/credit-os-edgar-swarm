import {
  comparisonRows,
  containsReference,
  passages,
  readParagraph,
  readerText,
  type OutputEntry,
  type PublishedChanges,
} from "../../publishedReport";
import { namedTable } from "../../reportView";
import { amount } from "../../visuals/visualData";
import { tone } from "../../signal";

export type MeasureTone = "better" | "worse" | "flat";

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
  /** The comparability sentence of the verdict. */
  reason: string;
  /** The cause and effect the CP-8 issuer table states for this measure; null where it states none. */
  cause: string | null;
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

/** A written cell in the module's words; null for a placeholder or a cell that cites a source. */
function written(cell: string | undefined) {
  const text = readerText(plain(cell));
  return nothing(text) || containsReference(text) ? null : text;
}

function numeric(value: string | number | null | undefined) {
  return value == null ? null : amount(String(value));
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
  return new Map(table?.rows.map(({ cells }) => [plain(cells[0]), cells] as const));
}

/** The size of a move against where it started, used only to order the list. */
function size({ beforeValue, afterValue }: MeasureChange) {
  if (beforeValue === null || afterValue === null) return -1;
  if (beforeValue === 0) return afterValue === 0 ? 0 : Number.POSITIVE_INFINITY;
  return Math.abs(afterValue - beforeValue) / Math.abs(beforeValue);
}

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
    const written8 = causes.get(plain(label));
    const comparable = change.verdicts?.measures?.[measure.key]?.kind === "comparable";
    const difference = measure.difference == null ? null : Number(measure.difference);
    const revision = reason.endsWith("Same-period analysis change");
    const shown = delta !== "—";
    const toned =
      shown && difference !== null ? tone(measure.key, String(measure.difference)) : "none";
    const item: MeasureChange = {
      key: measure.key,
      label,
      before,
      after,
      beforeValue: numeric(measure.prior?.value),
      afterValue: numeric(measure.current?.value),
      delta: shown ? delta : null,
      tone: toned === "none" ? null : toned,
      reason: reason.replace(/ · Same-period analysis change$/, ""),
      cause: written(written8?.[3]),
      effect: written(effect) ?? written(written8?.[4]),
      href: trace(label),
    };
    const known = comparable && difference !== null && !Number.isNaN(difference);
    if (!known || reason === "Reporting units differ.") groups.notAssessable.push(item);
    else if (revision) groups.revised.push(item);
    else if (difference !== 0) groups.moved.push(item);
    else groups.unmoved.push(item);
  });
  groups.moved.sort((a, b) => size(b) - size(a));
  return groups;
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

export type LedgerItem = { text: string; note: string | null; line: number };

/** CP-8's limitations ledger as the two lists a reader wants: what is new and what closed. */
export function ledgerLists(entry: OutputEntry | undefined) {
  const table = entry && namedTable(entry, "Limitations ledger", ["Limitation", "Status"]);
  if (!table) return null;
  const at = (name: string) => table.headers.indexOf(name);
  const [limitation, status, closed] = [at("Limitation"), at("Status"), at("What closed it")];
  const lists: { added: LedgerItem[]; removed: LedgerItem[] } = { added: [], removed: [] };
  for (const { cells, line } of table.rows) {
    const text = written(cells[limitation]);
    const kind = plain(cells[status]);
    if (!text) continue;
    if (kind === "New") lists.added.push({ text, note: null, line });
    if (kind === "Closed") lists.removed.push({ text, note: written(cells[closed]), line });
  }
  return lists;
}

/** The first Bottom line paragraph of the comparison module, in its words; null if it cites a source. */
export function verdictSentence(entry: OutputEntry | undefined) {
  if (!entry) return null;
  const section = passages(entry.sections).find(({ heading }) => heading === "Bottom line");
  const block = section?.blocks.find((item) => item.type === "text");
  if (block?.type !== "text") return null;
  const body = plain(readParagraph(block.text).body);
  return body && !containsReference(body) ? readerText(body) : null;
}
