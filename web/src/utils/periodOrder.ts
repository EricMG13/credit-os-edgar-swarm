// The one period-ordering rule: oldest fiscal year to latest, then YTD/PYTD, LTM, PF, forecasts.
// docs/superpowers/specs/2026-11-25-chart-periods.md states it; src/deploy_vii/period_order.py is
// its Python twin and both are tested against tests/fixtures/period-order-cases.json.

type PeriodClass = "actual" | "ytd" | "ltm" | "pf" | "forecast";
type PeriodSpan = "date" | "month" | "quarter" | "half" | "year";
type PeriodEnd = readonly [year: number, month: number, day: number];

/** `end` has a real day only for a label carrying its own date; the others are placed on day 31
 * of their last month. `priorYtd` marks a PYTD label of the ytd class. */
export type ParsedPeriod = {
  periodClass: PeriodClass;
  end: PeriodEnd | null;
  span: PeriodSpan | null;
  priorYtd: boolean;
};

const CLASS_RANK: Record<PeriodClass, number> = { actual: 0, ytd: 1, ltm: 2, pf: 3, forecast: 4 };
const SPAN_RANK: Record<PeriodSpan, number> = { date: 0, month: 0, quarter: 1, half: 2, year: 3 };
// An undated label sorts after every dated one of its class; an undated PYTD before them.
const UNDATED_YEAR = 10000;

const PRIOR_YTD = /(?<![A-Z])PYTD(?![A-Z])/;
const COUNT = /(?<![0-9A-Z])([369])M(?![A-Z])/;
const CLASS_MARKERS: readonly (readonly [PeriodClass, RegExp])[] = [
  [
    "forecast",
    /(?<![0-9])(?:[0-9]{4}|[0-9]{2})[EF](?![0-9A-Z])|(?<![A-Z])(?:FORECAST|PROJECTED|BUDGET)(?![A-Z])/,
  ],
  ["pf", /(?<![A-Z])(?:PF|PRO[ -]?FORMA)(?![A-Z])/],
  ["ltm", /(?<![A-Z])(?:LTM|TTM)(?![A-Z])/],
  ["ytd", /(?<![A-Z])(?:PYTD|YTD)(?![A-Z])|(?<![0-9A-Z])[369]M(?![A-Z])/],
];

const ISO_DATE = /(?<![0-9])([0-9]{4})-([0-9]{2})-([0-9]{2})(?![0-9])/;
const SPLIT_YEAR = /(?<![0-9])([0-9]{4})\/([0-9]{2})(?![0-9])/;
const FOUR_DIGITS = /(?<![0-9])([0-9]{4})(?![0-9])/;
const TWO_DIGITS = /(?<![0-9])([0-9]{2})(?![0-9])/g;
const FISCAL_PREFIX = /(?<![A-Z])FY/;
const MONTH =
  /(?<![A-Z])(JAN(?:UARY)?|FEB(?:RUARY)?|MAR(?:CH)?|APR(?:IL)?|MAY|JUNE?|JULY?|AUG(?:UST)?|SEP(?:T|TEMBER)?|OCT(?:OBER)?|NOV(?:EMBER)?|DEC(?:EMBER)?)(?![A-Z])/;
const MONTH_NAMES = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
const QUARTER = /(?<![0-9A-Z])Q([1-4])(?![0-9])|(?<![0-9])([1-4])Q(?![A-Z])/;
const HALF = /(?<![0-9A-Z])H([12])(?![0-9])|(?<![0-9])([12])H(?![A-Z])/;

const normalise = (label: string) =>
  label.toUpperCase().replace(/['’]/g, " ").replace(/\s+/g, " ").replace(/^ | $/g, "");

const classOf = (text: string): PeriodClass =>
  CLASS_MARKERS.find(([, marker]) => marker.test(text))?.[0] ?? "actual";

const leap = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
const daysIn = (year: number, month: number) =>
  month === 2 ? (leap(year) ? 29 : 28) : [4, 6, 9, 11].includes(month) ? 30 : 31;

function calendarDate(year: number, month: number, day: number): PeriodEnd | null {
  const real = year >= 1 && month >= 1 && month <= 12 && day >= 1 && day <= daysIn(year, month);
  return real ? [year, month, day] : null;
}

const namesAPeriod = (text: string) =>
  [FISCAL_PREFIX, QUARTER, HALF, MONTH].some((pattern) => pattern.test(text));

/** The year a label names, null when it names none, "invalid" for a broken split year. */
function yearOf(text: string, marked: boolean): number | "invalid" | null {
  const split = SPLIT_YEAR.exec(text);
  if (split) {
    const first = Number(split[1]);
    return Number(split[2]) === (first + 1) % 100 ? first + 1 : "invalid";
  }
  const fourDigits = FOUR_DIGITS.exec(text);
  if (fourDigits) return Number(fourDigits[1]);
  const last = text.match(TWO_DIGITS)?.at(-1);
  if (last !== undefined && (marked || namesAPeriod(text))) return 2000 + Number(last);
  return null;
}

function endInYear(text: string, year: number): [PeriodEnd, PeriodSpan] {
  const name = MONTH.exec(text)?.[1];
  if (name) return [[year, MONTH_NAMES.indexOf(name.slice(0, 3)) + 1, 31], "month"];
  const quarter = QUARTER.exec(text);
  if (quarter) return [[year, 3 * Number(quarter[1] ?? quarter[2]), 31], "quarter"];
  const half = HALF.exec(text);
  if (half) return [[year, 6 * Number(half[1] ?? half[2]), 31], "half"];
  const count = COUNT.exec(text);
  if (count) return [[year, Number(count[1]), 31], "month"];
  return [[year, 12, 31], "year"];
}

/** Read a period label as its class and end; null when the label is unparseable. */
export function parsePeriod(label: string): ParsedPeriod | null {
  const text = normalise(label);
  const periodClass = classOf(text);
  const priorYtd = periodClass === "ytd" && PRIOR_YTD.test(text);
  const iso = ISO_DATE.exec(text);
  if (iso) {
    const day = calendarDate(Number(iso[1]), Number(iso[2]), Number(iso[3]));
    return day && { periodClass, end: day, span: "date", priorYtd };
  }
  const year = yearOf(text, periodClass !== "actual");
  if (year === "invalid" || (year === null && periodClass === "actual")) return null;
  if (year === null) return { periodClass, end: null, span: null, priorYtd };
  const [end, span] = endInYear(text, year);
  return { periodClass, end, span, priorYtd };
}

/** (class, year, month, day, span, PYTD-first) of a label; null when it is unparseable. */
export function periodKey(label: string): readonly number[] | null {
  const parsed = parsePeriod(label);
  if (!parsed) return null;
  const afterPrior = parsed.priorYtd ? 0 : 1;
  const rank = CLASS_RANK[parsed.periodClass];
  if (!parsed.end || !parsed.span) return [rank, UNDATED_YEAR * afterPrior, 0, 0, 0, afterPrior];
  return [rank, ...parsed.end, SPAN_RANK[parsed.span], afterPrior];
}

/** Negative, zero or positive as key `a` sorts before, with or after key `b`. */
export function comparePeriodKeys(a: readonly number[], b: readonly number[]): number {
  for (const [index, part] of a.entries()) {
    const difference = part - (b[index] ?? 0);
    if (difference !== 0) return difference;
  }
  return 0;
}

/** Items in rule order, then the unparseable ones as authored; `gaps` are those. Items with
 * equal keys keep their authored order. */
export function orderPeriods<T>(
  items: readonly T[],
  label: (item: T) => string,
): { ordered: T[]; gaps: T[] } {
  const keyed = items.map((item) => ({ item, key: periodKey(label(item)) }));
  const dated = keyed.flatMap(({ item, key }) => (key ? [{ item, key }] : []));
  const gaps = keyed.filter(({ key }) => key === null).map(({ item }) => item);
  dated.sort((a, b) => comparePeriodKeys(a.key, b.key));
  return { ordered: [...dated.map(({ item }) => item), ...gaps], gaps };
}
