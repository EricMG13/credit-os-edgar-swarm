import { unitLabel, type OutputEntry, type Table } from "../../../publishedReport";
import { tone } from "../../../signal";
import { difference, percentOf, readCell, sum, type Reading } from "../kit/numbers";
import {
  columnOf,
  lastTwoRows,
  periodLabel,
  rowLabelled,
  statementPair,
  tableUnder,
  tableWith,
} from "../kit/tables";

/** One stated figure of one period: the cell as read, and the table line it came from. */
export type Stated = { cell: Reading; line: number };
export type PeriodPair = {
  prior: Stated;
  current: Stated;
  priorLabel: string;
  currentLabel: string;
};

/** The latest two periods of one column of a `Chart data` table, with its single reporting unit. */
function chartPair(entry: OutputEntry, heading: string, column: string) {
  const table = tableUnder(entry, heading);
  const rows = table && lastTwoRows(table);
  const at = table ? columnOf(table, column) : -1;
  const unitAt = table ? columnOf(table, "Reporting unit") : -1;
  if (!table || !rows || at < 0 || unitAt < 0) return null;
  const unit = rows.current.cells[unitAt] ?? "";
  if (!unit || unit !== (rows.prior.cells[unitAt] ?? "")) return null;
  const pair: PeriodPair = {
    priorLabel: periodLabel(rows.prior.cells[0] ?? ""),
    currentLabel: periodLabel(rows.current.cells[0] ?? ""),
    prior: { cell: readCell(rows.prior.cells[at] ?? ""), line: rows.prior.line },
    current: { cell: readCell(rows.current.cells[at] ?? ""), line: rows.current.line },
  };
  return { pair, unit, tableLine: table.line };
}

/** A labelled row of a two-period statement (`T4.4`, `T4.5`), with the unit the row states. */
function statementRow(entry: OutputEntry, heading: string, label: string) {
  const table = tableUnder(entry, heading);
  const found = table && statementPair(table, label);
  const row = table && rowLabelled(table, label);
  if (!table || !found || !row) return null;
  const unitAt = columnOf(table, "Unit");
  const unit = unitAt < 0 ? "" : (row.cells[unitAt] ?? "");
  const pair: PeriodPair = {
    priorLabel: found.prior.label,
    currentLabel: found.current.label,
    prior: { cell: found.prior.cell, line: found.line },
    current: { cell: found.current.cell, line: found.line },
  };
  return { pair, unit: unit ? unitLabel(unit) : null, tableLine: table.line };
}

// ---------------------------------------------------------------------------------------------
// Tile 1: earnings against debt and leverage
// ---------------------------------------------------------------------------------------------

export type EarningsMeasure = {
  key: "sales" | "reportedEbitda" | "adjustedEbitda" | "grossDebt";
  label: string;
  pair: PeriodPair;
  /** Exact current less prior, derived; null when either is not a number. */
  change: string | null;
  /** Current less prior as a percentage of prior, derived, 2 dp. */
  growth: string | null;
  line: number;
};

export type EarningsAgainstDebt = {
  unit: string;
  priorLabel: string;
  currentLabel: string;
  measures: EarningsMeasure[];
  /** Measures the handoff does not carry for these two periods, with the reason in words. */
  absent: { label: string; reason: string }[];
  leverage: {
    label: string;
    pair: PeriodPair;
    change: string | null;
    tone: ReturnType<typeof tone>;
    line: number;
  } | null;
  tableLine: number;
};

const MEASURES = [
  {
    key: "sales",
    label: "Net sales",
    heading: "Chart data: revenue and EBITDA",
    column: "Revenue",
  },
  {
    key: "adjustedEbitda",
    label: "EBITDA As Defined",
    heading: "Chart data: revenue and EBITDA",
    column: "Adjusted EBITDA",
  },
  { key: "grossDebt", label: "Gross debt", heading: "Net debt data", column: "Gross debt" },
] as const;

/** The composed figure's data: money measures on one unit, and the leverage ratio beside them. */
export function earningsAgainstDebt(entry: OutputEntry): EarningsAgainstDebt | null {
  const anchor = chartPair(entry, "Chart data: revenue and EBITDA", "Revenue");
  if (!anchor) return null;
  const { priorLabel, currentLabel } = anchor.pair;
  const unit = unitLabel(anchor.unit);
  const read = new Map<string, { pair: PeriodPair; line: number } | string>();
  for (const spec of MEASURES) {
    const found = chartPair(entry, spec.heading, spec.column);
    if (!found) read.set(spec.key, `${spec.label} is not in the handoff.`);
    else if (unitLabel(found.unit) !== unit)
      read.set(spec.key, `${spec.label} is stated in a different unit.`);
    else if (found.pair.priorLabel !== priorLabel || found.pair.currentLabel !== currentLabel)
      read.set(spec.key, `${spec.label} is stated for different periods.`);
    else read.set(spec.key, { pair: found.pair, line: found.tableLine });
  }
  const reported = statementRow(entry, "T4.4 Income statement", "EBITDA (Reported)");
  if (!reported) read.set("reportedEbitda", "Reported EBITDA is not in the handoff.");
  else if (reported.unit !== unit)
    read.set("reportedEbitda", "Reported EBITDA is stated in a different unit.");
  else if (reported.pair.priorLabel !== priorLabel || reported.pair.currentLabel !== currentLabel)
    read.set("reportedEbitda", "Reported EBITDA is stated for different periods.");
  else read.set("reportedEbitda", { pair: reported.pair, line: reported.tableLine });

  const ORDER = [
    ["sales", "Net sales"],
    ["reportedEbitda", "Reported EBITDA"],
    ["adjustedEbitda", "EBITDA As Defined"],
    ["grossDebt", "Gross debt"],
  ] as const;
  const measures: EarningsMeasure[] = [];
  const absent: EarningsAgainstDebt["absent"] = [];
  for (const [key, label] of ORDER) {
    const got = read.get(key);
    if (typeof got === "string" || got === undefined) {
      absent.push({ label, reason: got ?? `${label} is not in the handoff.` });
      continue;
    }
    const { prior, current } = got.pair;
    const change = difference(current.cell.text, prior.cell.text);
    const growth = change === null ? null : percentOf(change, prior.cell.text);
    measures.push({ key, label, pair: got.pair, change, growth, line: got.line });
  }
  const lev = chartPair(entry, "Chart data: leverage", "Total debt / EBITDA");
  const leverage =
    lev && lev.pair.priorLabel === priorLabel && lev.pair.currentLabel === currentLabel
      ? (() => {
          const change = difference(lev.pair.current.cell.text, lev.pair.prior.cell.text);
          return {
            label: "Total debt / EBITDA",
            pair: lev.pair,
            change,
            tone: change === null ? ("none" as const) : tone("leverage", change),
            line: lev.tableLine,
          };
        })()
      : null;
  return {
    unit,
    priorLabel,
    currentLabel,
    measures,
    absent,
    leverage,
    tableLine: anchor.tableLine,
  };
}

// ---------------------------------------------------------------------------------------------
// Tile 2: cash conversion ladder
// ---------------------------------------------------------------------------------------------

/** A level or step of the ladder in one period. `derived` marks an exact sum or difference of stated figures. */
export type LadderValue = {
  text: string;
  value: number | null;
  derived: boolean;
  reason: string | null;
};
export type LadderStep = {
  key: "start" | "interest" | "taxes" | "remainder" | "cfo" | "capex" | "fcf" | "outflows" | "end";
  label: string;
  /** A level starts at zero; a deduction hangs off the level above it. */
  kind: "level" | "deduction";
  current: LadderValue;
  prior: LadderValue;
};
export type CashLadder = {
  unit: string;
  priorLabel: string;
  currentLabel: string;
  steps: LadderStep[];
  /** The two stated outflows behind "acquisitions and distributions", for the label. */
  outflowParts: { current: [string, string] | null };
  line: number;
};

const stated = (cell: Reading): LadderValue =>
  cell.kind === "number"
    ? { text: cell.text, value: cell.value, derived: false, reason: null }
    : {
        text: cell.text,
        value: null,
        derived: false,
        reason: cell.kind === "gap" ? cell.reason : "Not a number in the handoff",
      };

const unavailable = (reason: string): LadderValue => ({
  text: "",
  value: null,
  derived: true,
  reason,
});

const negated = (text: string) => (text.startsWith("-") ? text.slice(1) : `-${text}`);
const derivedValue = (text: string | null, reason: string): LadderValue =>
  text === null ? unavailable(reason) : { text, value: Number(text), derived: true, reason: null };

/** A deduction as the amount taken off the level above: paid-positive rows are negated, signed outflows kept. */
function deduction(cell: Reading, convention: "paid" | "signed"): LadderValue {
  const base = stated(cell);
  if (base.value === null) return base;
  const text = convention === "paid" ? negated(base.text) : base.text;
  return { ...base, text, value: Number(text) };
}

const CASH = "T4.5 Cash flow statement";
const ROWS = {
  start: ["T4.4 Income statement", "EBITDA (Adjusted)"],
  interest: [CASH, "Cash Interest Paid"],
  taxes: [CASH, "Cash taxes paid"],
  cfo: [CASH, "Net Cash from Operating Activities"],
  capex: [CASH, "Capital expenditures"],
  fcf: [CASH, "Levered free cash flow"],
  acquisitions: [CASH, "Acquisition of businesses, net of cash acquired"],
  distributions: [CASH, "Dividends and dividend equivalent payments"],
} as const;

/** Both periods of every statement row the ladder needs; null unless the anchor rows and one unit are present. */
export function cashLadder(entry: OutputEntry): CashLadder | null {
  const rows = Object.fromEntries(
    Object.entries(ROWS).map(([key, [heading, label]]) => [
      key,
      statementRow(entry, heading, label),
    ]),
  ) as Record<keyof typeof ROWS, ReturnType<typeof statementRow>>;
  const { start, cfo } = rows;
  if (!start || !cfo || start.unit === null || start.unit !== cfo.unit) return null;
  const unit = start.unit;
  const { priorLabel, currentLabel } = start.pair;
  const usable = (row: ReturnType<typeof statementRow>) =>
    row !== null &&
    row.unit === unit &&
    row.pair.priorLabel === priorLabel &&
    row.pair.currentLabel === currentLabel
      ? row
      : null;
  const at = (key: keyof typeof ROWS, side: "prior" | "current") =>
    usable(rows[key])?.pair[side].cell ?? null;
  const gapCell = (label: string): Reading => ({
    kind: "gap",
    text: "",
    reason: `${label} is not in the handoff`,
  });
  const need = (key: keyof typeof ROWS, side: "prior" | "current", label: string) =>
    at(key, side) ?? gapCell(label);

  const build = (side: "prior" | "current") => {
    const startCell = need("start", side, "EBITDA As Defined");
    const interest = need("interest", side, "Cash interest paid");
    const taxes = need("taxes", side, "Cash taxes paid");
    const cfoCell = need("cfo", side, "Cash from operations");
    const capex = need("capex", side, "Capital expenditures");
    const fcf = need("fcf", side, "Free cash flow after capex");
    const acq = need("acquisitions", side, "Acquisitions");
    const dist = need("distributions", side, "Distributions");
    const remainder = sum([
      startCell.text,
      negated(interest.text),
      negated(taxes.text),
      negated(cfoCell.text),
    ]);
    const outflows = sum([acq.text, dist.text]);
    const end = outflows === null || fcf.kind !== "number" ? null : sum([fcf.text, outflows]);
    return {
      start: stated(startCell),
      interest: deduction(interest, "paid"),
      taxes: deduction(taxes, "paid"),
      // What the three lines above do not itemise: start less interest, taxes and operating cash, as the module reports them.
      remainder: derivedValue(
        remainder === null ? null : negated(remainder),
        "Not itemised: an input is not stated",
      ),
      cfo: stated(cfoCell),
      capex: deduction(capex, "signed"),
      fcf: stated(fcf),
      outflows: derivedValue(outflows, "An outflow is not stated"),
      end: derivedValue(end, "A level it depends on is not stated"),
      parts:
        acq.kind === "number" && dist.kind === "number"
          ? ([acq.text, dist.text] as [string, string])
          : null,
    };
  };
  const [cur, pri] = [build("current"), build("prior")];
  const steps: LadderStep[] = [
    {
      key: "start",
      label: "EBITDA As Defined",
      kind: "level",
      current: cur.start,
      prior: pri.start,
    },
    {
      key: "interest",
      label: "Cash interest paid",
      kind: "deduction",
      current: cur.interest,
      prior: pri.interest,
    },
    { key: "taxes", label: "Cash taxes", kind: "deduction", current: cur.taxes, prior: pri.taxes },
    {
      key: "remainder",
      label: "Other items, not itemised here",
      kind: "deduction",
      current: cur.remainder,
      prior: pri.remainder,
    },
    { key: "cfo", label: "Cash from operations", kind: "level", current: cur.cfo, prior: pri.cfo },
    { key: "capex", label: "Capex", kind: "deduction", current: cur.capex, prior: pri.capex },
    {
      key: "fcf",
      label: "Free cash flow after capex",
      kind: "level",
      current: cur.fcf,
      prior: pri.fcf,
    },
    {
      key: "outflows",
      label: "Acquisitions and distributions",
      kind: "deduction",
      current: cur.outflows,
      prior: pri.outflows,
    },
    {
      key: "end",
      label: "Free cash flow after acquisitions and distributions",
      kind: "level",
      current: cur.end,
      prior: pri.end,
    },
  ];
  return {
    unit,
    priorLabel,
    currentLabel,
    steps,
    outflowParts: { current: cur.parts },
    line: start.tableLine,
  };
}

// ---------------------------------------------------------------------------------------------
// Tile 3: net debt, with the pro forma a row states
// ---------------------------------------------------------------------------------------------

export type NetDebtPeriod = {
  label: string;
  gross: Reading;
  cash: Reading;
  net: Reading;
  line: number;
  /** Net debt / EBITDA for the period, from the leverage table, when it states one. */
  leverage: Reading | null;
};
export type ProForma = {
  event: string;
  date: string;
  amount: Reading;
  netDebt: Reading;
  leverage: Reading;
  line: number;
};
export type NetDebtView = {
  unit: string;
  periods: NetDebtPeriod[];
  /** The stated adjustment drawn on the bar: the largest by absolute amount. */
  proForma: ProForma | null;
  /** Other stated adjustments, each standalone from the same base, listed in words. */
  otherAdjustments: ProForma[];
  liquidity: { label: string; cash: Reading; undrawn: Reading; line: number }[];
  tableLine: number;
};

/** Net debt for the two latest periods and the post-balance-sheet adjustment rows that state a pro forma. */
export function netDebtView(entry: OutputEntry): NetDebtView | null {
  const table = tableUnder(entry, "Net debt data");
  const rows = table && lastTwoRows(table);
  if (!table || !rows) return null;
  const col = (name: string) => columnOf(table, name);
  const [g, c, n, u] = [col("Gross debt"), col("Cash"), col("Net debt"), col("Reporting unit")];
  if ([g, c, n, u].some((at) => at < 0)) return null;
  const unit = rows.current.cells[u] ?? "";
  if (!unit || unit !== (rows.prior.cells[u] ?? "")) return null;
  const leverage = tableUnder(entry, "Chart data: leverage");
  const leverageAt = leverage ? columnOf(leverage, "Net debt / EBITDA") : -1;
  const liquidityTable = tableUnder(entry, "Chart data: liquidity");
  const periodsOf = [rows.prior, rows.current].map((row): NetDebtPeriod => {
    const label = periodLabel(row.cells[0] ?? "");
    const match = leverage?.rows.find((item) => periodLabel(item.cells[0] ?? "") === label);
    return {
      label,
      gross: readCell(row.cells[g] ?? ""),
      cash: readCell(row.cells[c] ?? ""),
      net: readCell(row.cells[n] ?? ""),
      line: row.line,
      leverage: match && leverageAt >= 0 ? readCell(match.cells[leverageAt] ?? "") : null,
    };
  });
  const adjustments = tableWith(entry, ["Event", "Pro forma net debt", "Pro forma net leverage"]);
  const eventAt = adjustments ? columnOf(adjustments, "Event") : -1;
  const found = (adjustments?.rows ?? []).flatMap((row): ProForma[] => {
    if (!adjustments) return [];
    const proForma: ProForma = {
      event: row.cells[eventAt] ?? "",
      date: row.cells[columnOf(adjustments, "Date")] ?? "",
      amount: readCell(row.cells[columnOf(adjustments, "Amount")] ?? ""),
      netDebt: readCell(row.cells[columnOf(adjustments, "Pro forma net debt")] ?? ""),
      leverage: readCell(row.cells[columnOf(adjustments, "Pro forma net leverage")] ?? ""),
      line: row.line,
    };
    return proForma.netDebt.kind === "number" && proForma.amount.kind === "number"
      ? [proForma]
      : [];
  });
  const size = (item: ProForma) =>
    item.amount.kind === "number" ? Math.abs(item.amount.value) : 0;
  const largest = found.reduce<ProForma | null>(
    (best, item) => (best && size(best) >= size(item) ? best : item),
    null,
  );
  const liquidity = (liquidityTable?.rows ?? []).flatMap((row) => {
    const cash = columnOf(liquidityTable as Table, "Cash");
    const undrawn = columnOf(liquidityTable as Table, "Undrawn committed facilities");
    return cash < 0 || undrawn < 0
      ? []
      : [
          {
            label: periodLabel(row.cells[0] ?? ""),
            cash: readCell(row.cells[cash] ?? ""),
            undrawn: readCell(row.cells[undrawn] ?? ""),
            line: row.line,
          },
        ];
  });
  return {
    unit: unitLabel(unit),
    periods: periodsOf,
    proForma: largest,
    otherAdjustments: found.filter((item) => item !== largest),
    liquidity,
    tableLine: table.line,
  };
}

// ---------------------------------------------------------------------------------------------
// Tile 4: EBITDA bridge
// ---------------------------------------------------------------------------------------------

export type BridgeStep = {
  label: string;
  cell: Reading;
  line: number;
  kind: "opening" | "change" | "closing";
};
export type EbitdaBridge = {
  unit: string;
  steps: BridgeStep[];
  /** True when the opening plus every change equals the closing, exactly. */
  reconciles: boolean;
  /** Exact sum of the changes, derived. */
  addBacks: string | null;
  tableLine: number;
};

/** The steps of `Chart data: EBITDA bridge`; the first is the opening, the last the closing. */
export function ebitdaBridge(entry: OutputEntry): EbitdaBridge | null {
  const table = tableUnder(entry, "Chart data: EBITDA bridge");
  if (!table || table.rows.length < 3) return null;
  const amount = columnOf(table, "Amount");
  const unitAt = columnOf(table, "Reporting unit");
  const units = new Set(table.rows.map((row) => row.cells[unitAt] ?? ""));
  const [unit] = [...units];
  if (amount < 0 || unitAt < 0 || units.size !== 1 || !unit) return null;
  const last = table.rows.length - 1;
  const steps = table.rows.map((row, at): BridgeStep => ({
    label: row.cells[0] ?? "",
    cell: readCell(row.cells[amount] ?? ""),
    line: row.line,
    kind: at === 0 ? "opening" : at === last ? "closing" : "change",
  }));
  const texts = steps.map((step) => step.cell.text);
  const changes = steps.filter((step) => step.kind === "change").map((step) => step.cell.text);
  const total = sum(texts.slice(0, -1));
  return {
    unit: unitLabel(unit),
    steps,
    reconciles:
      total !== null &&
      total === (steps.at(-1)?.cell.kind === "number" ? steps.at(-1)?.cell.text : null),
    addBacks: sum(changes),
    tableLine: table.line,
  };
}

// ---------------------------------------------------------------------------------------------
// Tile 5: segments
// ---------------------------------------------------------------------------------------------

export type Segment = { name: string; sales: Reading; ebitda: Reading; line: number };
export type SegmentView = {
  period: string;
  unit: string;
  segments: Segment[];
  /** Unallocated corporate lines: stated apart, never ranked. */
  apart: Segment[];
  /** Group net sales for the period, when the handoff states it. */
  groupSales: Reading | null;
  groupEbitda: Reading | null;
  /** Segment sales summed exactly, derived; null if any is not a number. */
  salesTotal: string | null;
  /** Segment EBITDA plus the apart rows, summed exactly, derived. */
  ebitdaTotal: string | null;
  tableLine: number;
};

const YEAR = /(\d{4})/;

/** The latest period of `Segment schedule`, one row per business unit. */
export function segmentView(entry: OutputEntry): SegmentView | null {
  const table = tableUnder(entry, "Segment schedule");
  if (!table) return null;
  const at = (name: string) => columnOf(table, name);
  const [unitCol, periodCol, salesCol, ebitdaCol, unitAt] = [
    at("Business unit"),
    at("Period"),
    at("Net sales"),
    at("EBITDA As Defined"),
    at("Unit"),
  ];
  if ([unitCol, periodCol, salesCol, ebitdaCol, unitAt].some((index) => index < 0)) return null;
  const years = table.rows.map((row) => Number(YEAR.exec(row.cells[periodCol] ?? "")?.[1] ?? NaN));
  if (years.some(Number.isNaN)) return null;
  const latest = Math.max(...years);
  const rows = table.rows.filter((_, index) => years[index] === latest);
  const periods = new Set(rows.map((row) => row.cells[periodCol] ?? ""));
  const units = new Set(rows.map((row) => row.cells[unitAt] ?? ""));
  const [period] = [...periods];
  const [unit] = [...units];
  if (periods.size !== 1 || units.size !== 1 || !period || !unit) return null;
  const all = rows.map((row): Segment => ({
    name: row.cells[unitCol] ?? "",
    sales: readCell(row.cells[salesCol] ?? ""),
    ebitda: readCell(row.cells[ebitdaCol] ?? ""),
    line: row.line,
  }));
  // Corporate lines are named as such; a business unit whose sales are a gap stays a unit, with the gap.
  const isApart = (segment: Segment) => /^unallocated|\bcorporate\b/i.test(segment.name);
  const segments = all.filter((segment) => !isApart(segment));
  const apart = all.filter(isApart);
  const revenue = chartPair(entry, "Chart data: revenue and EBITDA", "Revenue");
  const adjusted = chartPair(entry, "Chart data: revenue and EBITDA", "Adjusted EBITDA");
  const match = (found: ReturnType<typeof chartPair>) =>
    found && found.pair.currentLabel === period && unitLabel(found.unit) === unitLabel(unit)
      ? found.pair.current.cell
      : null;
  return {
    period,
    unit: unitLabel(unit),
    segments,
    apart,
    groupSales: match(revenue),
    groupEbitda: match(adjusted),
    salesTotal: sum(segments.map((segment) => segment.sales.text)),
    ebitdaTotal: sum([...segments, ...apart].map((segment) => segment.ebitda.text)),
    tableLine: table.line,
  };
}
