// TEMPORARY. The round-1 CP-1 tiles read two periods in the shapes below. Round 2 replaced the data
// contract (`foundationData.ts`: every stated period, figures as written, no derived growth, plug,
// end level, add-back total or segment sum). These adapters keep the old tiles compiling against
// the new readers until their owners rebuild them on `foundationData` and delete this file. They
// add nothing the new readers removed: every removed derived field is null here.
import type { OutputEntry } from "../../../publishedReport";
import type { tone } from "../../../signal";
import type { Reading } from "../kit/numbers";
import * as data from "./foundationData";

type Stated = { cell: Reading; line: number };
type PeriodPair = { prior: Stated; current: Stated; priorLabel: string; currentLabel: string };

const NOT_STATED: Reading = { kind: "gap", text: "", reason: "Not stated for this period" };

/** The two cells of a series on the comparison periods; null unless both are stated cells. */
function pairOf(
  values: readonly data.PeriodCell[],
  comparison: data.Comparison,
): PeriodPair | null {
  if (!comparison) return null;
  const at = (label: string) => values.find((value) => value.label === label);
  const [from, to] = [at(comparison.from), at(comparison.to)];
  if (!from?.cell || !to?.cell) return null;
  return {
    priorLabel: comparison.from,
    currentLabel: comparison.to,
    prior: { cell: from.cell, line: from.line ?? 0 },
    current: { cell: to.cell, line: to.line ?? 0 },
  };
}

// ---- Tile 1 ------------------------------------------------------------------------------------

export type EarningsMeasure = {
  key: data.EarningsMeasure["key"];
  label: string;
  pair: PeriodPair;
  change: string | null;
  /** Removed (ruling i): always null. */
  growth: string | null;
  line: number;
};
export type EarningsAgainstDebt = {
  unit: string;
  priorLabel: string;
  currentLabel: string;
  measures: EarningsMeasure[];
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

const OLD_LABELS: Record<data.EarningsMeasure["key"], string> = {
  sales: "Net sales",
  reportedEbitda: "Reported EBITDA",
  adjustedEbitda: "EBITDA As Defined",
  grossDebt: "Gross debt",
};

export function earningsAgainstDebt(entry: OutputEntry): EarningsAgainstDebt | null {
  const read = data.earningsAgainstDebt(entry);
  if (!read?.comparison) return null;
  const { comparison } = read;
  const measures: EarningsMeasure[] = [];
  const absent = read.absent.map((item) => ({ ...item }));
  for (const measure of read.measures) {
    const pair = pairOf(measure.values, comparison);
    const label = OLD_LABELS[measure.key];
    if (!pair) absent.push({ label, reason: `${label} is stated for different periods.` });
    else
      measures.push({
        key: measure.key,
        label,
        pair,
        change: measure.change,
        growth: null,
        line: measure.line,
      });
  }
  const lev = read.leverage;
  const levPair = lev ? pairOf(lev.values, comparison) : null;
  return {
    unit: read.unit,
    priorLabel: comparison.from,
    currentLabel: comparison.to,
    measures,
    absent,
    leverage:
      lev && levPair
        ? { label: lev.label, pair: levPair, change: lev.change, tone: lev.tone, line: lev.line }
        : null,
    tableLine: read.tableLine,
  };
}

// ---- Tile 2 ------------------------------------------------------------------------------------

export type LadderValue = {
  text: string;
  value: number | null;
  derived: boolean;
  reason: string | null;
};
export type LadderStep = {
  key: "start" | Exclude<data.LadderKey, "ebitda"> | "remainder" | "outflows" | "end";
  label: string;
  kind: "level" | "deduction";
  current: LadderValue;
  prior: LadderValue;
};
export type CashLadder = {
  unit: string;
  priorLabel: string;
  currentLabel: string;
  steps: LadderStep[];
  /** Removed (ruling i): always null. */
  outflowParts: { current: [string, string] | null };
  line: number;
};

/** A step's cell as the old ladder drew it: a paid amount as the negative change it makes. */
function ladderValue(step: data.LadderStep, label: string): LadderValue {
  const cell = step.values.find((value) => value.label === label)?.cell ?? null;
  if (!cell || cell.kind !== "number")
    return {
      text: cell?.text ?? "",
      value: null,
      derived: false,
      reason: cell?.kind === "gap" ? cell.reason : (step.absent ?? "Not stated"),
    };
  const text =
    step.sign === "paid"
      ? cell.text.startsWith("-")
        ? cell.text.slice(1)
        : `-${cell.text}`
      : cell.text;
  return { text, value: Number(text), derived: false, reason: null };
}

export function cashLadder(entry: OutputEntry): CashLadder | null {
  const read = data.cashLadder(entry);
  if (!read?.comparison) return null;
  const { from, to } = read.comparison;
  return {
    unit: read.unit,
    priorLabel: from,
    currentLabel: to,
    steps: read.steps.map((step) => ({
      key: step.key === "ebitda" ? "start" : step.key,
      label: step.label,
      kind: step.kind,
      current: ladderValue(step, to),
      prior: ladderValue(step, from),
    })),
    outflowParts: { current: null },
    line: read.line,
  };
}

// ---- Tile 3 ------------------------------------------------------------------------------------

export type NetDebtPeriod = data.NetDebtPeriod;
export type ProForma = Omit<data.ProForma, "date"> & { date: string };
export type NetDebtView = {
  unit: string;
  periods: NetDebtPeriod[];
  proForma: ProForma | null;
  otherAdjustments: ProForma[];
  liquidity: data.LiquidityPeriod[];
  tableLine: number;
};

export function netDebtView(entry: OutputEntry): NetDebtView | null {
  const read = data.netDebtView(entry);
  if (!read) return null;
  const all = read.adjustments.map((item): ProForma => ({ ...item, date: item.date.text }));
  // The old tile's choice of the one row to draw as the bar; the new contract leaves it to the tile.
  const size = (item: ProForma) =>
    item.amount.kind === "number" ? Math.abs(item.amount.value) : 0;
  const largest = all
    .filter((item) => item.netDebt.kind === "number" && item.amount.kind === "number")
    .reduce<ProForma | null>(
      (best, item) => (best && size(best) >= size(item) ? best : item),
      null,
    );
  return {
    unit: read.unit,
    periods: read.periods,
    proForma: largest,
    otherAdjustments: all.filter((item) => item !== largest),
    liquidity: read.liquidity,
    tableLine: read.tableLine,
  };
}

// ---- Tile 4 ------------------------------------------------------------------------------------

export type BridgeStep = data.BridgeStep;
export type EbitdaBridge = data.EbitdaBridge & {
  /** Removed (ruling i): always null. */
  addBacks: string | null;
};

export function ebitdaBridge(entry: OutputEntry): EbitdaBridge | null {
  const read = data.ebitdaBridge(entry);
  return read ? { ...read, addBacks: null } : null;
}

// ---- Tile 5 ------------------------------------------------------------------------------------

export type Segment = { name: string; sales: Reading; ebitda: Reading; line: number };
export type SegmentView = {
  period: string;
  unit: string;
  segments: Segment[];
  apart: Segment[];
  /** Removed (ruling i): always null. */
  groupSales: Reading | null;
  groupEbitda: Reading | null;
  salesTotal: string | null;
  ebitdaTotal: string | null;
  tableLine: number;
};

export function segmentView(entry: OutputEntry): SegmentView | null {
  const read = data.segmentView(entry);
  const latest = read?.periods.at(-1)?.label;
  if (!read || !latest) return null;
  const old = (segment: data.Segment): Segment => {
    const sales = segment.sales.find((value) => value.label === latest);
    const ebitda = segment.ebitda.find((value) => value.label === latest);
    return {
      name: segment.name,
      sales: sales?.cell ?? NOT_STATED,
      ebitda: ebitda?.cell ?? NOT_STATED,
      line: sales?.line ?? ebitda?.line ?? read.tableLine,
    };
  };
  return {
    period: latest,
    unit: read.unit,
    segments: read.segments.map(old),
    apart: read.apart.map(old),
    groupSales: null,
    groupEbitda: null,
    salesTotal: null,
    ebitdaTotal: null,
    tableLine: read.tableLine,
  };
}
