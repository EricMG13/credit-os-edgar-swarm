import type { TableViewData } from "../kit/LeadFrame";
import {
  waterfallAxis,
  waterfallReading,
  type WaterfallPrior,
  type WaterfallRow,
} from "../kit/marks";
import { group } from "../kit/numbers";
import { safeText } from "../kit/reader";
import type { CashLadder, LadderStep, PeriodCell } from "./foundationData";

// The cash ladder as the kit Waterfall draws it: the handoff's own stated levels and deductions in
// the data's order, each figure as written. No plug, no end level, no sum is made here; the
// Waterfall places a deduction from the bar above it only where both are stated, and draws each
// level from zero at its stated value, so a level the deductions above do not reach shows as written.

/** The period drawn as bars, the one drawn beneath (two periods only), and those left to the table. */
export type LadderPeriods = { current: string; prior: string | null; others: string[] };

/**
 * One period: bars only. Two compared periods: the later as bars, the earlier beneath. Three or
 * more (or two that are not compared): the latest as bars, every other period in the table view.
 */
export function ladderPeriods(data: CashLadder): LadderPeriods | null {
  const labels = data.periods.map((period) => period.label);
  const current = data.comparison?.to ?? labels.at(-1);
  if (current === undefined) return null;
  const prior = labels.length === 2 && data.comparison ? data.comparison.from : null;
  return { current, prior, others: labels.filter((label) => label !== current && label !== prior) };
}

type Side = { value: number; text: string } | { gap: string };

const negated = (text: string) => (text.startsWith("-") ? text.slice(1) : `-${text}`);

/**
 * One step in one period as the ladder draws it. A deduction the module writes as a positive
 * amount paid (cash interest, cash taxes) is drawn as the fall it is; every other figure keeps the
 * sign it is written with. A stated gap or words keep their own text; no cell, "Not stated for …".
 */
function sideOf(step: LadderStep, cell: PeriodCell | undefined, period: string): Side {
  const reading = cell?.cell;
  if (!reading) return { gap: `Not stated for ${period}.` };
  if (reading.kind !== "number") return { gap: safeText(reading.text) };
  if (step.sign !== "paid" || reading.value === 0)
    return { value: reading.value, text: group(reading.text) };
  return { value: -reading.value, text: group(negated(reading.text)) };
}

const cellAt = (step: LadderStep, period: string) =>
  step.values.find((value) => value.label === period);

/** A side the drawing places beneath: an earlier gap names its period. */
const priorOf = (side: Side, period: string): WaterfallPrior =>
  "gap" in side ? { gap: `${period}: ${side.gap}` } : side;

/** Each step as a Waterfall row: a level or a deduction as written, or a gap with its reason. */
export function ladderRows(data: CashLadder, periods: LadderPeriods): WaterfallRow[] {
  return data.steps.map((step): WaterfallRow => {
    const label = safeText(step.label);
    const role = step.kind === "level" ? "level" : "step";
    if (!step.stated)
      return { kind: "gap", label, reason: safeText(step.absent ?? "Not stated."), of: role };
    const current = sideOf(step, cellAt(step, periods.current), periods.current);
    const prior =
      periods.prior === null ? null : sideOf(step, cellAt(step, periods.prior), periods.prior);
    if ("gap" in current) {
      // The same stated gap in both periods is said once, naming both.
      const same = prior !== null && "gap" in prior && prior.gap === current.gap;
      const reason = same
        ? `${current.gap} (${periods.prior ?? ""} and ${periods.current})`
        : current.gap;
      return {
        kind: "gap",
        label,
        reason,
        of: role,
        ...(prior && !same && periods.prior ? { prior: priorOf(prior, periods.prior) } : {}),
      };
    }
    return {
      kind: role,
      label,
      value: current.value,
      text: current.text,
      ...(prior && periods.prior ? { prior: priorOf(prior, periods.prior) } : {}),
    };
  });
}

/** The kicker: what the figure is in and which periods are drawn. */
export function ladderKicker(data: CashLadder, periods: LadderPeriods) {
  const beneath = periods.prior ? `; ${periods.prior} beneath` : "";
  return `Cash conversion · ${data.unit}, ${periods.current}${beneath}`;
}

/** The figure's reading: every row of the drawn period with its figure, the earlier in brackets. */
export function ladderReading(
  rows: readonly WaterfallRow[],
  data: CashLadder,
  periods: LadderPeriods,
) {
  const reading = waterfallReading(
    rows,
    data.unit,
    waterfallAxis(rows),
    periods.prior ?? undefined,
  );
  const head = `Waterfall, ${data.unit}: `;
  const beneath = periods.prior ? `, ${periods.prior} in brackets` : "";
  return `Cash conversion, ${data.unit}, ${periods.current}${beneath}: ${reading.slice(head.length)}`;
}

function and(labels: readonly string[]) {
  if (labels.length < 2) return labels.join("");
  return `${labels.slice(0, -1).join(", ")} and ${labels.at(-1) ?? ""}`;
}

/** Notes under the figure: how it is drawn and, where some periods are not, which are. */
export function ladderNotes(periods: LadderPeriods) {
  const others = periods.others.length
    ? [
        `Drawn: ${periods.current}. ${and(periods.others)} ${periods.others.length > 1 ? "are" : "is"} in the table view.`,
      ]
    : [];
  return [
    ...others,
    "Each level is drawn from zero at its stated figure; a deduction hangs from the bar above it.",
  ];
}

const KIND = {
  level: "Level",
  paid: "Deduction, stated as an amount paid",
  signed: "Deduction, stated with its sign",
} as const;

function cellText(step: LadderStep, cell: PeriodCell | undefined) {
  if (!step.stated) return safeText(step.absent ?? "Not stated.");
  const reading = cell?.cell;
  if (!reading) return "Not stated";
  return reading.kind === "number" ? group(reading.text) : safeText(reading.text);
}

/** The table view: every step and every stated period, as the module wrote them. */
export function ladderTable(data: CashLadder): TableViewData {
  return {
    caption: `Cash conversion, ${data.unit}`,
    headers: ["Step", ...data.periods.map((period) => period.label), "Kind"],
    rows: data.steps.map((step) => [
      safeText(step.label),
      ...data.periods.map((period) => cellText(step, cellAt(step, period.label))),
      step.kind === "level" ? KIND.level : KIND[step.sign ?? "signed"],
    ]),
  };
}
