import { tone } from "../../signal";
import { readerText, unitLabel, type OutputEntry, type Table } from "../../publishedReport";
import { difference, group, readCell, sum } from "./kit/numbers";
import { IN_EVIDENCE, namesSource, safeText } from "./kit/reader";
import { allTables, columnOf } from "./kit/tables";

const RESULTS = "Chart data: prior and current results";
const KPIS = "Chart data: margin and KPI changes";
const STEP_HEADERS = ["Step", "Amount", "Reporting unit", "Basis and limitation"];

export const NO_UNIT = "This page could not read the unit of the earnings table from the handoff.";
const NO_RESULTS =
  "This page could not read the table of prior and current results from the handoff.";
const NO_KPIS = "This page could not read the table of margin and KPI changes from the handoff.";
const NO_MARGINS = "This page could not read a margin row from the handoff.";
const NO_COLUMNS =
  "This page could not read the prior and current results from the handoff because the table is not in a shape this page reads.";
const NO_ROWS = "This page could not read a row of prior and current results from the handoff.";
const NO_PAIRS = "This page could not read a row with a figure for both periods from the handoff.";
export const NO_PERCENT =
  "This page could not read the margins from the handoff because their cells carry no percent sign.";
export const TWICE_RESULTS =
  "This page could not read the table of prior and current results from the handoff because it appears more than once.";
const TWICE_KPIS =
  "This page could not read the table of margin and KPI changes from the handoff because it appears more than once.";
export const TWICE_EARNINGS =
  "This page could not read the earnings table from the handoff because it appears more than once.";
export const TWICE_BRIDGE =
  "This page could not read the variance bridge from the handoff because it appears more than once.";
export const FEW_PERIODS =
  "This page could not read two annual periods of the earnings table from the handoff.";
export const MIXED_PERIODS =
  "This page could not compare the two latest annual periods of the earnings table because they are different kinds of period.";
const SAME_YEAR =
  "This page could not compare the two latest annual periods of the earnings table because they are the same year.";

/** Handoff words for the page, or the Evidence pointer where they name a source or are empty. */
const readable = (text: string) => safeText(text) || IN_EVIDENCE;

// ---------------------------------------------------------------------------------------------
// Figures as the module states them

/** One cell of a pair: a figure, a stated gap with its reason, or words where a figure belongs. */
export type Side = {
  kind: "number" | "gap" | "words";
  /** A figure as plain digits (no thousands commas); a gap or words as written. */
  text: string;
  value: number | null;
  reason: string | null;
};

type Change = {
  /** The change in the unit's own words with its sign: `+1,355`, `−0.5 percentage points`. */
  text: string;
  /** `stated`: the module wrote the change; `derived`: the exact prior to current difference. */
  basis: "stated" | "derived";
  sign: -1 | 0 | 1;
  magnitude: number;
  /** The stated change disagreed in direction with the two figures; the exact difference is drawn. */
  conflict: boolean;
};

type Tone = "better" | "worse" | "flat" | "none";

/** A period the handoff states beside the two compared, listed as its own: `LTM Dec-2024`. */
type OtherPeriod = { period: string; text: string };

export type Pair = {
  label: string;
  line: number;
  priorPeriod: string | null;
  currentPeriod: string | null;
  prior: Side;
  current: Side;
  change: Change | null;
  tone: Tone;
  /** The two periods are different kinds (`FY2024` to `LTM Dec-2024`): no change figure is made. */
  mixedBasis: boolean;
  others: OtherPeriod[];
};

export type PairGroup = {
  /** The unit as the page names it (`US$m`, `%`, `x`); empty when the handoff states none. */
  unit: string;
  percent: boolean;
  /** The row states no unit: it is alone on its own scale, never on one shared with another row. */
  unitNotStated: boolean;
  /** Pairs with both figures stated, in the handoff's own order. */
  rows: Pair[];
  /** Pairs with a stated gap: drawn as the gap, with the handoff's reason. */
  gaps: Pair[];
  /** Pairs that state words where a figure belongs: in the table view only. */
  words: Pair[];
  /** Rows and gaps together, in the handoff's own order: what the figure draws. */
  drawn: Pair[];
  /** Amounts share one scale from zero; levels (margins, KPIs) one scale cut where they sit. */
  fromZero: boolean;
};

export type PairFigure =
  | {
      kind: "ready";
      line: number;
      groups: PairGroup[];
      /** The handoff's earnings table was read, since it carries no chart table for this figure. */
      fallback: boolean;
      notes: string[];
      /** Periods stated beside the compared two, as the table states them (their own columns in the table view). */
      otherPeriods: string[];
    }
  | { kind: "gap"; reason: string; line?: number };

const PERCENT_UNIT = /^(?:%|percent|per cent)$/i;
const MINUS = "−";
const signed = (sign: number, text: string) => (sign < 0 ? MINUS : sign > 0 ? "+" : "") + text;
const magnitudeOf = (text: string) => text.replace(/^[-−+]/, "");

function side(cell: string | undefined): Side {
  const reading = readCell(cell ?? "");
  if (reading.kind === "number")
    return { kind: "number", text: reading.text, value: reading.value, reason: null };
  if (reading.kind === "gap") {
    const reason = readable(reading.reason);
    const lead = /^Not \w+/.exec(reading.text)?.[0] ?? "Not supplied";
    return { kind: "gap", text: `${lead}: ${reason}`, value: null, reason };
  }
  return { kind: "words", text: readable(reading.text), value: null, reason: null };
}

/** What a unit looks like beside a figure: `58.3%`, `6.27x`, or the number alone for money. */
export function withMark(text: string, unit: string) {
  const grouped = group(text);
  if (PERCENT_UNIT.test(unit)) return `${grouped}%`;
  return unit === "x" ? `${grouped}x` : grouped;
}

function changeText(sign: number, abs: string, unit: string) {
  const grouped = group(abs);
  if (PERCENT_UNIT.test(unit)) return signed(sign, `${grouped} percentage points`);
  return signed(sign, unit === "x" ? `${grouped}x` : grouped);
}

const signOfAbs = (abs: string, negative: boolean): -1 | 0 | 1 =>
  Number(abs) === 0 ? 0 : negative ? -1 : 1;

/** The one computed figure this page makes: the exact prior to current difference of one measure. */
function derivedChange(prior: Side, current: Side, unit: string): Change | null {
  const exact = difference(current.text, prior.text);
  if (exact === null) return null;
  const abs = magnitudeOf(exact);
  const sign = signOfAbs(abs, exact.startsWith("-"));
  return {
    text: changeText(sign, abs, unit),
    basis: "derived",
    sign,
    magnitude: Number(abs),
    conflict: false,
  };
}

const AMOUNT = /^([+−-]?)\s*(\d[\d,]*(?:\.\d+)?)(?:\s+([A-Za-z][A-Za-z ,]*))?$/;

/** The change the module states beside its figures (`1355`, `-2`, `+129`, `22 reported`), as written. */
function statedAmount(cell: string | undefined, unit: string): Change | null {
  const found = AMOUNT.exec((cell ?? "").trim());
  if (!found) return null;
  const [, mark = "", digits = "", words = ""] = found;
  const reading = readCell(digits);
  if (reading.kind !== "number") return null;
  const sign = signOfAbs(reading.text, mark === "-" || mark === MINUS);
  const tail = words && !namesSource(words) ? ` ${readerText(words.trim())}` : "";
  return {
    text: `${changeText(sign, reading.text, unit)}${tail}`,
    basis: "stated",
    sign,
    magnitude: Number(reading.text),
    conflict: false,
  };
}

const POINTS = /^([+−-]?)(\d+(?:\.\d+)?)\s*(?:percentage points?|pp)\b(.*)$/i;

/** A percentage-point change a margin row states in words (`+0.5 percentage points`), as written. */
function statedPoints(cell: string | undefined): Change | null {
  const found = POINTS.exec((cell ?? "").trim());
  if (!found) return null;
  const [, mark = "", abs = "", rest = ""] = found;
  const sign = signOfAbs(abs, mark === "-" || mark === MINUS);
  const tail = namesSource(rest) ? "" : readerText(rest);
  return {
    text: `${signed(sign, abs)} percentage points${tail}`,
    basis: "stated",
    sign,
    magnitude: Number(abs),
    conflict: false,
  };
}

/** The stated change when it agrees with the two figures in direction, else the exact difference. */
function settle(stated: Change | null, derived: Change | null): Change | null {
  if (!stated || !derived) return stated ?? derived;
  return stated.sign === derived.sign ? stated : { ...derived, conflict: true };
}

// Measures the owner's table (signal.ts) knows, by the label as the handoff writes it. Any other label
// gets a direction and no better or worse word. The keys are CP-1's own: a ratio of debt to EBITDA
// rising is worse here exactly as it is there.
const SIGNAL_KEY = new Map([
  ["revenue", "revenue"],
  ["adjusted ebitda", "adjusted_ebitda"],
  ["issuer-adjusted ebitda", "adjusted_ebitda"],
  ["free cash flow", "free_cash_flow"],
  ["levered free cash flow", "free_cash_flow"],
  ["net debt", "net_debt"],
  ["gross debt", "gross_debt"],
  ["total debt", "gross_debt"],
  ["leverage", "leverage"],
  ["total leverage", "leverage"],
  ["gross leverage", "leverage"],
  ["total debt / ebitda", "leverage"],
  ["net leverage", "net_leverage"],
  ["net debt / ebitda", "net_leverage"],
  ["interest coverage", "coverage"],
  ["interest cover", "coverage"],
  ["coverage", "coverage"],
  ["liquidity", "liquidity"],
  ["undrawn committed facilities", "undrawn"],
]);

function toneOf(label: string, change: Change | null): Tone {
  const key = SIGNAL_KEY.get(label.trim().replace(/\s+/g, " ").toLowerCase());
  if (!key || !change) return "none";
  return tone(key, `${change.sign < 0 ? "-" : ""}${String(change.magnitude)}`);
}

/** The kind of a period label with its year and punctuation removed (`FY2024` is `FY`). */
const kindOf = (label: string) =>
  label
    .replace(/\d{4}/g, "")
    .replace(/[^A-Za-z]/g, "")
    .toUpperCase();

type PairInput = Omit<Pair, "change" | "tone" | "mixedBasis" | "others"> & {
  unit: string;
  stated: Change | null;
  others?: OtherPeriod[];
};

function pairOf({ unit, stated, others = [], ...parts }: PairInput): Pair {
  const mixedBasis =
    parts.priorPeriod !== null &&
    parts.currentPeriod !== null &&
    kindOf(parts.priorPeriod) !== kindOf(parts.currentPeriod);
  const change = settle(
    stated,
    mixedBasis ? null : derivedChange(parts.prior, parts.current, unit),
  );
  return { ...parts, change, tone: toneOf(parts.label, change), mixedBasis, others };
}

const drawable = (pair: Pair) => pair.prior.kind === "number" && pair.current.kind === "number";
const hasGap = (pair: Pair) => [pair.prior, pair.current].some((one) => one.kind === "gap");

/**
 * One unit's pairs, in the handoff's own order. `amounts` is a figure of amounts (one scale from
 * zero); otherwise levels (a scale cut where the values sit, said to start where it does).
 */
function groupOf(unit: string, pairs: Pair[], amounts: boolean): PairGroup {
  const rows = pairs.filter(drawable);
  const rest = pairs.filter((pair) => !drawable(pair));
  return {
    unit,
    percent: PERCENT_UNIT.test(unit),
    unitNotStated: unit === "",
    rows,
    gaps: rest.filter(hasGap),
    words: rest.filter((pair) => !hasGap(pair)),
    drawn: pairs.filter((pair) => drawable(pair) || hasGap(pair)),
    fromZero: amounts,
  };
}

/**
 * The pairs of a figure by the unit each states, in the order the handoff first uses them. A row
 * with no stated unit is a group of its own: nothing says it shares a scale with any other row.
 */
function byUnit(pairs: { unit: string; pair: Pair }[], amounts: boolean) {
  const keys = pairs.map((item, at) =>
    item.unit === "" ? `unit-not-stated-${String(at)}` : item.unit,
  );
  return [...new Set(keys)].map((key) => {
    const members = pairs.filter((_, at) => keys[at] === key);
    return groupOf(
      members[0]?.unit ?? "",
      members.map((item) => item.pair),
      amounts,
    );
  });
}

const period = (cell: string | undefined) => {
  const reading = readCell(cell ?? "");
  const text = reading.kind === "text" ? safeText(reading.text) : "";
  return text && text !== IN_EVIDENCE ? text : null;
};

/** The table's own notes on its basis; a note that names a source is not drawn, not repeated as a pointer. */
const basisNotes = (table: Table) => {
  const at = columnOf(table, "Basis and limitation");
  const notes = table.rows
    .map((row) => safeText(at < 0 ? "" : (row.cells[at] ?? "")))
    .filter((note) => note && note !== IN_EVIDENCE);
  return [...new Set(notes)];
};

const NOTE_ROWS = "Pairs that state words instead of a figure are in the table view only.";
const NOTE_MIXED =
  "A pair whose two periods are different kinds of period has no change figure; its two figures are drawn as stated.";

const hasMixed = (groups: PairGroup[]) =>
  groups.some((one) => [...one.rows, ...one.gaps, ...one.words].some((pair) => pair.mixedBasis));

/** A `Chart data: …` pair table (`Measure | Prior period | Prior | Current period | Current | Reporting unit`); null when the handoff has none. */
function chartPairs(
  entry: OutputEntry,
  heading: string,
  amounts: boolean,
  twice: string,
): PairFigure | null {
  const found = allTables(entry).filter((item) => item.heading === heading);
  const [only] = found;
  if (!only) return null;
  if (found.length > 1) return { kind: "gap", reason: twice };
  const { table } = only;
  const at = (name: string) => columnOf(table, name);
  const [measure, priorPeriod, prior, currentPeriod, current, unit] = [
    "Measure",
    "Prior period",
    "Prior",
    "Current period",
    "Current",
    "Reporting unit",
  ].map(at);
  if ([measure, prior, current, unit].some((column) => column === undefined || column < 0))
    return { kind: "gap", reason: NO_COLUMNS, line: table.line };
  const cell = (cells: string[], column: number | undefined) => cells[column ?? -1];
  const pairs = table.rows.map((row) => {
    const unitText = (cell(row.cells, unit) ?? "").trim();
    const unitName = unitLabel(unitText);
    return {
      unit: unitName,
      pair: pairOf({
        label: readable(cell(row.cells, measure) ?? ""),
        line: row.line,
        priorPeriod: period(cell(row.cells, priorPeriod)),
        currentPeriod: period(cell(row.cells, currentPeriod)),
        prior: side(cell(row.cells, prior)),
        current: side(cell(row.cells, current)),
        unit: unitName,
        stated: null,
      }),
    };
  });
  if (pairs.length === 0) return { kind: "gap", reason: NO_ROWS, line: table.line };
  const groups = byUnit(pairs, amounts);
  const notes = [
    ...basisNotes(table),
    ...(groups.some((one) => one.words.length) ? [NOTE_ROWS] : []),
    ...(hasMixed(groups) ? [NOTE_MIXED] : []),
  ];
  return { kind: "ready", line: table.line, groups, fallback: false, notes, otherPeriods: [] };
}

// ---------------------------------------------------------------------------------------------
// The handoff's own earnings table (T4.4), when it carries no chart table

type Column = { at: number; label: string; year: number; kind: string };

type Statement =
  | {
      kind: "table";
      table: Table;
      unit: string | null;
      prior: Column;
      current: Column;
      /** The stated change column describes these two periods: they are the table's only annual periods. */
      statedAgrees: boolean;
      others: Column[];
    }
  | { kind: "gap"; reason: string; line?: number };

const UNIT_SENTENCE = /All money amounts are ([^.;]+?)\s*(?:[.;]|$)/i;
const ANNUAL = /^(FY|CY)?\s?(\d{4})$/i;

/** The periods a statement table's headers state, annual ones apart from any other (`LTM Dec-2024`). */
function periodsOf(table: Table) {
  const annual: Column[] = [];
  const other: Column[] = [];
  table.headers.forEach((header, at) => {
    const label = header.trim();
    if (at === 0 || /^yoy\b/i.test(label)) return;
    const year = /(\d{4})/.exec(label)?.[1];
    if (year === undefined) return;
    const dated = ANNUAL.exec(label);
    const column = { at, label, year: Number(year), kind: (dated?.[1] ?? "").toUpperCase() };
    (dated ? annual : other).push(column);
  });
  return { annual, other };
}

/** The one line-item table, its two latest annual periods, and the unit its heading's text states. */
function statement(entry: OutputEntry): Statement {
  const found = allTables(entry).filter(({ table }) => table.headers[0]?.trim() === "Line Item");
  const [only] = found;
  if (!only) return { kind: "gap", reason: NO_RESULTS };
  if (found.length > 1) return { kind: "gap", reason: TWICE_EARNINGS };
  const { table } = only;
  const { annual, other } = periodsOf(table);
  const ordered = [...annual].sort((a, b) => a.year - b.year);
  const current = ordered.at(-1);
  const prior = ordered.at(-2);
  if (!current || !prior) return { kind: "gap", reason: FEW_PERIODS, line: table.line };
  if (prior.year === current.year) return { kind: "gap", reason: SAME_YEAR, line: table.line };
  if (prior.kind !== current.kind) return { kind: "gap", reason: MIXED_PERIODS, line: table.line };
  const section = entry.sections.find((one) => one.blocks.includes(table));
  const sentence = (section?.blocks ?? []).flatMap((block) =>
    block.type === "text" ? [UNIT_SENTENCE.exec(block.text)?.[1]?.trim()] : [],
  );
  const stated = sentence.find((text) => text);
  return {
    kind: "table",
    table,
    unit: stated ? unitLabel(stated) : null,
    prior,
    current,
    statedAgrees: annual.length === 2,
    others: [...ordered.slice(0, -2), ...other],
  };
}

const PERCENT_CELL = /^(-?\d+(?:\.\d+)?)\s*%$/;
const isMargin = (label: string) => /margin/i.test(label);

function percentSide(cell: string | undefined): Side {
  const text = (cell ?? "").trim().replaceAll("−", "-");
  const found = PERCENT_CELL.exec(text);
  const number = found?.[1];
  if (number !== undefined)
    return { kind: "number", text: number, value: Number(number), reason: null };
  return side(cell);
}

/** Money rows (both periods plain numbers) or margin rows (a percent sign in every stated cell). */
function statementPairs(entry: OutputEntry, margins: boolean): PairFigure {
  const read = statement(entry);
  if (read.kind === "gap")
    return {
      kind: "gap",
      reason: read.reason === NO_RESULTS && margins ? NO_KPIS : read.reason,
      ...(read.line === undefined ? {} : { line: read.line }),
    };
  const { table, unit, prior, current, others } = read;
  const rows = table.rows.filter((row) => isMargin(row.cells[0] ?? "") === margins);
  const change = columnOf(table, "YoY Change (Abs)");
  const cells = rows.map((row) => [row.cells[prior.at], row.cells[current.at]]);
  if (margins) {
    const stated = cells.flat().filter((cell) => side(cell).kind !== "gap");
    if (!stated.every((cell) => PERCENT_CELL.test((cell ?? "").trim().replaceAll("−", "-"))))
      return { kind: "gap", reason: NO_PERCENT, line: table.line };
  } else if (unit === null) return { kind: "gap", reason: NO_UNIT, line: table.line };
  const unitName = margins ? "%" : (unit ?? "");
  const pairs = rows.map((row, at) => {
    const [priorCell, currentCell] = cells[at] ?? [];
    const stateds = change < 0 || !read.statedAgrees ? undefined : row.cells[change];
    return {
      unit: unitName,
      pair: pairOf({
        label: readable(row.cells[0] ?? ""),
        line: row.line,
        priorPeriod: prior.label,
        currentPeriod: current.label,
        prior: margins ? percentSide(priorCell) : side(priorCell),
        current: margins ? percentSide(currentCell) : side(currentCell),
        unit: unitName,
        stated: margins ? statedPoints(stateds) : statedAmount(stateds, unitName),
        others: others.map((column) => ({
          period: column.label,
          text: readable(row.cells[column.at] ?? ""),
        })),
      }),
    };
  });
  if (pairs.length === 0)
    return { kind: "gap", reason: margins ? NO_MARGINS : NO_PAIRS, line: table.line };
  const groups = byUnit(pairs, !margins);
  if (groups.every((one) => one.rows.length === 0 && one.gaps.length === 0))
    return { kind: "gap", reason: NO_PAIRS, line: table.line };
  const names = others.map((column) => column.label);
  const notes = [
    ...(groups.some((one) => one.words.length) ? [NOTE_ROWS] : []),
    ...(names.length > 0
      ? [
          `Compared: ${prior.label} to ${current.label}. Also stated, in the table view only: ${names.join(", ")}.`,
        ]
      : []),
  ];
  return { kind: "ready", line: table.line, groups, fallback: true, notes, otherPeriods: names };
}

// ---------------------------------------------------------------------------------------------
// The variance bridge

type Step = {
  /** The step's name as the handoff writes it. */
  label: string;
  role: "opening" | "change" | "closing";
  text: string;
  value: number;
  line: number;
};

export type Bridge =
  | { kind: "bridge"; line: number; unit: string; steps: Step[]; notes: string[] }
  | { kind: "unreconciled"; line: number; message: string };

const NOT_DRAWN = "This page could not read the variance bridge from the handoff";
const NOT_A_BRIDGE =
  "This page did not draw the variance bridge because its steps do not add up to its closing figure.";

const isZero = (exact: string | null) => exact !== null && /^-?0(?:\.0+)?$/.test(exact);

/** The one `Chart data: …` step table, drawn only when opening plus its changes is exactly the closing. */
export function bridge(entry: OutputEntry): Bridge | null {
  const tables = allTables(entry).filter(
    ({ heading, table }) =>
      heading.startsWith("Chart data: ") &&
      table.headers.length === STEP_HEADERS.length &&
      table.headers.every((header, at) => header === STEP_HEADERS[at]),
  );
  const [only] = tables;
  if (!only) return null;
  const { table } = only;
  const refuse = (message: string): Bridge => ({ kind: "unreconciled", line: table.line, message });
  if (tables.length > 1) return refuse(TWICE_BRIDGE);
  const amounts = table.rows.map((row) => row.cells[1] ?? "");
  if (table.rows.length < 3)
    return refuse(
      `${NOT_DRAWN} because it has no change steps between its opening and its closing.`,
    );
  const readings = amounts.map(readCell);
  const missing = readings.findIndex((reading) => reading.kind !== "number");
  const absent = readings[missing];
  if (absent) {
    const label = readable(table.rows[missing]?.cells[0] ?? "");
    return refuse(
      absent.kind === "gap"
        ? `${NOT_DRAWN} because ${label} is not supplied (${readable(absent.reason)}).`
        : `${NOT_DRAWN} because ${label} has no figure this page reads.`,
    );
  }
  const units = new Set(table.rows.map((row) => (row.cells[2] ?? "").trim()));
  if (units.size !== 1) return refuse(`${NOT_DRAWN} because its steps are in different units.`);
  const closing = amounts.at(-1) ?? "";
  const total = sum(amounts.slice(0, -1));
  if (!isZero(total === null ? null : difference(closing, total))) return refuse(NOT_A_BRIDGE);
  const unit = unitLabel([...units][0] ?? "");
  const steps = table.rows.map((row, at): Step => {
    const reading = readCell(amounts[at] ?? "");
    return {
      label: readable(row.cells[0] ?? ""),
      role: at === 0 ? "opening" : at === table.rows.length - 1 ? "closing" : "change",
      text: reading.text,
      value: reading.kind === "number" ? reading.value : 0,
      line: row.line,
    };
  });
  return { kind: "bridge", line: table.line, unit, steps, notes: basisNotes(table) };
}

// ---------------------------------------------------------------------------------------------
// The lead

export type EarningsDelta = {
  bridge: Bridge | null;
  movers: PairFigure;
  kpis: PairFigure;
};

export function earningsDelta(entry: OutputEntry): EarningsDelta {
  return {
    bridge: bridge(entry),
    movers: chartPairs(entry, RESULTS, true, TWICE_RESULTS) ?? statementPairs(entry, false),
    kpis: chartPairs(entry, KPIS, false, TWICE_KPIS) ?? statementPairs(entry, true),
  };
}
