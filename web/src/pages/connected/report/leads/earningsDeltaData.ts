import { tone } from "../../signal";
import {
  containsReference,
  readerText,
  unitLabel,
  type OutputEntry,
  type Table,
} from "../../publishedReport";
import { difference, group, readCell, sum } from "./kit/numbers";
import { allTables, columnOf, periodColumns, tableUnder } from "./kit/tables";

export const RESULTS = "Chart data: prior and current results";
export const KPIS = "Chart data: margin and KPI changes";
export const STEP_HEADERS = ["Step", "Amount", "Reporting unit", "Basis and limitation"];
export const CAP = 10;

export const NO_UNIT = "The handoff does not state the unit of its earnings table.";
export const NO_RESULTS = "The handoff has no table of prior and current results.";
export const NO_KPIS = "The handoff has no table of margin and KPI changes.";
export const NO_MARGINS = "The handoff's earnings table has no margin row.";
export const NO_COLUMNS = "The table of prior and current results lacks a column this page reads.";
export const NO_PAIRS = "The handoff states no pair of figures to compare.";
export const NO_PERCENT = "The margin cells do not state a percent sign, so they are not drawn.";
export const IN_EVIDENCE = "Detail is in Evidence.";

const readable = (text: string, fallback = IN_EVIDENCE) =>
  containsReference(text) ? fallback : readerText(text).trim() || fallback;

// ---------------------------------------------------------------------------------------------
// Axis

export type Axis = { lo: number; hi: number; ticks: number[] };

function niceStep(span: number, parts: number) {
  const raw = span > 0 ? span / parts : 1;
  const power = 10 ** Math.floor(Math.log10(raw));
  const factor = raw / power;
  return (factor <= 1 ? 1 : factor <= 2 ? 2 : factor <= 5 ? 5 : 10) * power;
}

/**
 * A round axis holding every value. `fromZero` always includes zero (a scale of amounts);
 * otherwise it is the round range around the values (a scale of levels, said to start where it does).
 */
export function axisFor(values: readonly number[], fromZero: boolean): Axis {
  const low = Math.min(...values, ...(fromZero ? [0] : []));
  const high = Math.max(...values, ...(fromZero ? [0] : []));
  const step = niceStep(high - low || Math.abs(high) / 10, 4);
  const lo = Math.floor(low / step + 1e-9) * step;
  const top = Math.ceil(high / step - 1e-9) * step;
  const hi = top > lo ? top : lo + step;
  const count = Math.round((hi - lo) / step);
  const ticks = Array.from({ length: count + 1 }, (_, at) => Number((lo + at * step).toFixed(10)));
  return { lo: Number(lo.toFixed(10)), hi: Number(hi.toFixed(10)), ticks };
}

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

export type Change = {
  /** The change in the unit's own words with its sign: `+1,355`, `−0.5 percentage points`. */
  text: string;
  basis: "stated" | "derived";
  sign: -1 | 0 | 1;
  magnitude: number;
  /** The stated change disagreed in direction with the two figures; the exact difference is drawn. */
  conflict: boolean;
};

export type Tone = "better" | "worse" | "flat" | "none";

export type Pair = {
  label: string;
  line: number;
  priorPeriod: string | null;
  currentPeriod: string | null;
  prior: Side;
  current: Side;
  change: Change | null;
  tone: Tone;
};

export type PairGroup = {
  /** The unit as the page names it (`US$m`, `%`, `x`); empty when the handoff states none. */
  unit: string;
  percent: boolean;
  /** Pairs with both figures stated, the largest change first. */
  ranked: Pair[];
  /** The ranked pairs the figure draws (at most CAP). */
  shown: Pair[];
  /** Pairs with a stated gap: drawn as the gap, with the handoff's reason. */
  gaps: Pair[];
  /** Pairs that state words where a figure belongs: in the table view only. */
  words: Pair[];
  axis: Axis | null;
};

export type PairFigure =
  | {
      kind: "ready";
      line: number;
      groups: PairGroup[];
      /** The handoff's earnings table was read, since it carries no chart table for this figure. */
      fallback: boolean;
      notes: string[];
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
  if (reading.kind === "gap")
    return { kind: "gap", text: reading.text, value: null, reason: readable(reading.reason) };
  return { kind: "words", text: reading.text, value: null, reason: null };
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

/** A plain number the module states as the change (`1355`, `-2`, `+129`), in the unit's words. */
function statedAmount(cell: string | undefined, unit: string): Change | null {
  const reading = readCell((cell ?? "").trim().replace(/^\+/, ""));
  if (reading.kind !== "number") return null;
  const abs = magnitudeOf(reading.text);
  const sign = signOfAbs(abs, reading.value < 0);
  return {
    text: changeText(sign, abs, unit),
    basis: "stated",
    sign,
    magnitude: Number(abs),
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
  const tail = containsReference(rest) ? "" : readerText(rest);
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
// gets a direction and no better or worse word.
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
  ["net leverage", "net_leverage"],
  ["interest coverage", "coverage"],
  ["coverage", "coverage"],
]);

function toneOf(label: string, change: Change | null): Tone {
  const key = SIGNAL_KEY.get(label.trim().toLowerCase());
  if (!key || !change) return "none";
  return tone(key, `${change.sign < 0 ? "-" : ""}${String(change.magnitude)}`);
}

type PairInput = Omit<Pair, "change" | "tone"> & { unit: string; stated: Change | null };

function pairOf({ unit, stated, ...parts }: PairInput): Pair {
  const change = settle(stated, derivedChange(parts.prior, parts.current, unit));
  return { ...parts, change, tone: toneOf(parts.label, change) };
}

const drawable = (pair: Pair) => pair.prior.kind === "number" && pair.current.kind === "number";
const hasGap = (pair: Pair) => [pair.prior, pair.current].some((one) => one.kind === "gap");

/**
 * One unit's pairs. `amounts` is a figure of amounts (ranked movers: largest change first, one scale
 * from zero); otherwise levels (margins and KPIs: the handoff's order, a scale around the values).
 */
function groupOf(unit: string, pairs: Pair[], amounts: boolean): PairGroup {
  const ranked = pairs
    .filter(drawable)
    .map((pair, at) => ({ pair, at }))
    .sort((a, b) =>
      amounts
        ? (b.pair.change?.magnitude ?? 0) - (a.pair.change?.magnitude ?? 0) || a.at - b.at
        : a.at - b.at,
    )
    .map(({ pair }) => pair);
  const shown = ranked.slice(0, CAP);
  const values = shown.flatMap((pair) => [pair.prior.value ?? 0, pair.current.value ?? 0]);
  const rest = pairs.filter((pair) => !drawable(pair));
  return {
    unit,
    percent: PERCENT_UNIT.test(unit),
    ranked,
    shown,
    gaps: rest.filter(hasGap),
    words: rest.filter((pair) => !hasGap(pair)),
    axis: values.length > 0 ? axisFor(values, amounts) : null,
  };
}

/** The pairs of a figure by the unit each states, in the order the handoff first uses them. */
function byUnit(pairs: { unit: string; pair: Pair }[], amounts: boolean) {
  const units = [...new Set(pairs.map((item) => item.unit))];
  return units.map((unit) =>
    groupOf(
      unit,
      pairs.filter((item) => item.unit === unit).map((item) => item.pair),
      amounts,
    ),
  );
}

const period = (cell: string | undefined) => {
  const reading = readCell(cell ?? "");
  return reading.kind === "text" && reading.text && !containsReference(reading.text)
    ? readerText(reading.text)
    : null;
};

const basisNotes = (table: Table) => {
  const at = columnOf(table, "Basis and limitation");
  const notes = table.rows
    .map((row) => (at < 0 ? "" : (row.cells[at] ?? "")).trim())
    .filter((note) => note && !containsReference(note))
    .map((note) => readerText(note));
  return [...new Set(notes)];
};

const NOTE_ROWS = "Pairs that state words instead of a figure are in the table view only.";

/** A `Chart data: …` pair table (`Measure | Prior period | Prior | Current period | Current | Reporting unit`). */
function chartPairs(
  entry: OutputEntry,
  heading: string,
  amounts: boolean,
  none: string,
): PairFigure {
  const table = tableUnder(entry, heading);
  if (!table) return { kind: "gap", reason: none };
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
    const priorSide = side(cell(row.cells, prior));
    const currentSide = side(cell(row.cells, current));
    return {
      unit: unitName,
      pair: pairOf({
        label: readable(cell(row.cells, measure) ?? ""),
        line: row.line,
        priorPeriod: period(cell(row.cells, priorPeriod)),
        currentPeriod: period(cell(row.cells, currentPeriod)),
        prior: priorSide,
        current: currentSide,
        unit: unitName,
        stated: null,
      }),
    };
  });
  if (pairs.length === 0) return { kind: "gap", reason: NO_PAIRS, line: table.line };
  const groups = byUnit(pairs, amounts);
  const notes = [
    ...basisNotes(table),
    ...(groups.some((one) => one.words.length) ? [NOTE_ROWS] : []),
  ];
  return { kind: "ready", line: table.line, groups, fallback: false, notes };
}

// ---------------------------------------------------------------------------------------------
// The handoff's own earnings table (T4.4), when it carries no chart table

type Statement = { table: Table; unit: string | null };

const UNIT_SENTENCE = /All money amounts are ([^.;]+?)\s*(?:[.;]|$)/i;

/** The one line-item table with two period columns, and the unit its heading's text states. */
function statement(entry: OutputEntry): Statement | null {
  const found = allTables(entry).filter(
    ({ table }) => table.headers[0]?.trim() === "Line Item" && periodColumns(table) !== null,
  );
  const [only] = found;
  if (found.length !== 1 || !only) return null;
  const section = entry.sections.find((one) => one.blocks.includes(only.table));
  const sentence = (section?.blocks ?? []).flatMap((block) =>
    block.type === "text" ? [UNIT_SENTENCE.exec(block.text)?.[1]?.trim()] : [],
  );
  const stated = sentence.find((text) => text);
  return { table: only.table, unit: stated ? unitLabel(stated) : null };
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
  if (!read) return { kind: "gap", reason: margins ? NO_KPIS : NO_RESULTS };
  const { table, unit } = read;
  const periods = periodColumns(table);
  if (!periods) return { kind: "gap", reason: NO_RESULTS, line: table.line };
  const rows = table.rows.filter((row) => isMargin(row.cells[0] ?? "") === margins);
  const change = columnOf(table, "YoY Change (Abs)");
  const cells = rows.map((row) => [row.cells[periods.prior.at], row.cells[periods.current.at]]);
  if (margins) {
    const stated = cells.flat().filter((cell) => side(cell).kind !== "gap");
    if (!stated.every((cell) => PERCENT_CELL.test((cell ?? "").trim().replaceAll("−", "-"))))
      return { kind: "gap", reason: NO_PERCENT, line: table.line };
  } else if (unit === null) return { kind: "gap", reason: NO_UNIT, line: table.line };
  const unitName = margins ? "%" : (unit ?? "");
  const pairs = rows.map((row, at) => {
    const [priorCell, currentCell] = cells[at] ?? [];
    const stateds = change < 0 ? undefined : row.cells[change];
    return {
      unit: unitName,
      pair: pairOf({
        label: readable(row.cells[0] ?? ""),
        line: row.line,
        priorPeriod: periods.prior.label,
        currentPeriod: periods.current.label,
        prior: margins ? percentSide(priorCell) : side(priorCell),
        current: margins ? percentSide(currentCell) : side(currentCell),
        unit: unitName,
        stated: margins ? statedPoints(stateds) : statedAmount(stateds, unitName),
      }),
    };
  });
  if (pairs.length === 0)
    return { kind: "gap", reason: margins ? NO_MARGINS : NO_PAIRS, line: table.line };
  const groups = byUnit(pairs, !margins);
  if (groups.every((one) => one.shown.length === 0 && one.gaps.length === 0))
    return { kind: "gap", reason: NO_PAIRS, line: table.line };
  const notes = groups.some((one) => one.words.length) ? [NOTE_ROWS] : [];
  return { kind: "ready", line: table.line, groups, fallback: true, notes };
}

// ---------------------------------------------------------------------------------------------
// The variance bridge

export type Step = {
  label: string;
  role: "opening" | "change" | "closing";
  text: string;
  value: number;
  /** Where a change step starts and ends on the axis; the totals are drawn from the axis start. */
  from: number | null;
  level: number;
  line: number;
};

export type Bridge =
  | { kind: "bridge"; line: number; unit: string; steps: Step[]; axis: Axis; notes: string[] }
  | { kind: "unreconciled"; line: number; reason: string; amounts: string[] };

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
  if (tables.length !== 1 || !only) return null;
  const { table } = only;
  const amounts = table.rows.map((row) => row.cells[1] ?? "");
  const listed = table.rows.map(
    (row, at) => `${readable(row.cells[0] ?? "")} ${amounts[at] ?? ""}`,
  );
  const refuse = (reason: string): Bridge => ({
    kind: "unreconciled",
    line: table.line,
    reason,
    amounts: listed,
  });
  if (table.rows.length < 3) return refuse("it has no change steps between its first and last row");
  const readings = amounts.map(readCell);
  if (readings.some((reading) => reading.kind !== "number"))
    return refuse("a step states no figure");
  const units = new Set(table.rows.map((row) => (row.cells[2] ?? "").trim()));
  if (units.size !== 1) return refuse("its steps state different units");
  const closing = amounts.at(-1) ?? "";
  const total = sum(amounts.slice(0, -1));
  if (!isZero(total === null ? null : difference(closing, total)))
    return refuse("the opening and its changes do not add up to the closing");
  const unit = unitLabel([...units][0] ?? "");
  let running = 0;
  const steps = table.rows.map((row, at): Step => {
    const reading = readCell(amounts[at] ?? "");
    const value = reading.kind === "number" ? reading.value : 0;
    const role = at === 0 ? "opening" : at === table.rows.length - 1 ? "closing" : "change";
    const from = running;
    running = role === "change" ? Number((running + value).toFixed(10)) : value;
    return {
      label: readable(row.cells[0] ?? ""),
      role,
      text: reading.text,
      value,
      from: role === "change" ? from : null,
      level: running,
      line: row.line,
    };
  });
  const levels = steps.map((step) => step.level);
  const [low, high] = [Math.min(...levels), Math.max(...levels)];
  // A scale of levels: when it would start above zero, room below the lowest total keeps that
  // total a bar, not a sliver; the page says where the axis starts.
  if (low > 0) levels.push(low - (high - low) / 2);
  return {
    kind: "bridge",
    line: table.line,
    unit,
    steps,
    axis: axisFor(levels, false),
    notes: basisNotes(table),
  };
}

// ---------------------------------------------------------------------------------------------
// The lead

export type EarningsDelta = {
  bridge: Bridge | null;
  movers: PairFigure;
  kpis: PairFigure;
};

export function earningsDelta(entry: OutputEntry): EarningsDelta {
  const results = chartPairs(entry, RESULTS, true, NO_RESULTS);
  const kpis = chartPairs(entry, KPIS, false, NO_KPIS);
  const hasChartTable = (figure: PairFigure) =>
    figure.kind === "ready" || figure.line !== undefined;
  return {
    bridge: bridge(entry),
    movers: hasChartTable(results) ? results : statementPairs(entry, false),
    kpis: hasChartTable(kpis) ? kpis : statementPairs(entry, true),
  };
}
