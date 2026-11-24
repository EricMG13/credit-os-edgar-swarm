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
  | { kind: "unmatched" };

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
      delta: shown ? delta : null,
      tone: toned === "none" ? null : toned,
      reason: stated(reason.replace(/ · Same-period analysis change$/, "")),
      cause: issuer ? causeOf(issuer[3]) : { kind: "unmatched" },
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

/** A ledger row: its text in the module's words, or null where it cites a source (then `href` is the link). */
export type LedgerItem = { text: string | null; note: string | null; line: number; href: string };

/** CP-8's limitations ledger as the two lists a reader wants: what is new and what closed. */
export function ledgerLists(entry: OutputEntry | undefined, folder: string) {
  const table = entry && namedTable(entry, "Limitations ledger", ["Limitation", "Status"]);
  if (!entry || !table) return null;
  const at = (name: string) => table.headers.indexOf(name);
  const [limitation, status, closed] = [at("Limitation"), at("Status"), at("What closed it")];
  const lists: { added: LedgerItem[]; removed: LedgerItem[] } = { added: [], removed: [] };
  for (const { cells, line } of table.rows) {
    if (nothing(plain(cells[limitation]))) continue;
    const kind = plain(cells[status]);
    const item = {
      text: written(cells[limitation]),
      note: written(cells[closed]),
      line,
      href: evidencePath(folder, entry, line),
    };
    if (kind === "New") lists.added.push({ ...item, note: null });
    if (kind === "Closed") lists.removed.push(item);
  }
  return lists;
}

export type Paragraph = { line: number; text: string | null; href: string };

/** The paragraphs of one reader passage; `text` is null where the paragraph cites a source. */
export function passageParagraphs(
  entry: OutputEntry | undefined,
  heading: string,
  folder: string,
): Paragraph[] | null {
  if (!entry) return null;
  const sections = passages(entry.sections).filter((section) => section.heading === heading);
  if (sections.length === 0) return null;
  return sections
    .flatMap(({ blocks }) => blocks)
    .filter((block) => block.type === "text" && !methodNote(block.text))
    .flatMap((block) => {
      if (block.type !== "text") return [];
      const body = plain(readParagraph(block.text).body);
      if (!body) return [];
      return [
        {
          line: block.line,
          text: containsReference(body) ? null : readerText(body),
          href: evidencePath(folder, entry, block.line),
        },
      ];
    });
}

const FIRST_SENTENCE = /^(.+?[.!?])(?=\s+[A-Z0-9"“(]|$)/s;

/**
 * The verdict is the first sentence of the Bottom line (CP-8 method); the rest of the passage is
 * its body. A first paragraph that cites a source has no verdict to draw: `referenced` is set.
 */
export function verdictOf(entry: OutputEntry | undefined, folder: string) {
  const paragraphs = passageParagraphs(entry, "Bottom line", folder);
  const [first, ...rest] = paragraphs ?? [];
  if (!first) return null;
  if (first.text === null) return { sentence: null, body: [], href: first.href, referenced: true };
  const match = FIRST_SENTENCE.exec(first.text);
  const sentence = match?.[1] ?? first.text;
  const remainder = first.text.slice(sentence.length).trim();
  const body = [remainder, ...rest.map((item) => item.text)].filter(
    (text): text is string => text !== null && text !== "",
  );
  return { sentence, body, href: first.href, referenced: false };
}
