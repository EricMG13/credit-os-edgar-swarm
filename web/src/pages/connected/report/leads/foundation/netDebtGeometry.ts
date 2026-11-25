import type { Mark } from "../../overview/marks";
import { LINE, SIZE, fittingTicks, niceAxis, textWidth, wrap } from "../kit/marks";
import { group, type Reading } from "../kit/numbers";
import { safeText } from "../kit/reader";
import type { LiquidityPeriod, NetDebtPeriod, NetDebtView, ProForma } from "./foundationData";

// The words and positions of the net debt tile. Every figure drawn is one the handoff states; the
// bars place stated numbers and never make them add up; nothing here prints a sum or an equation.

/** A cell as the page writes it: the figure grouped, or a gap or words exactly as written. */
const words = (cell: Reading) => (cell.kind === "number" ? group(cell.text) : safeText(cell.text));

/** A ratio cell: "4.88x", or the gap or words as written. */
const ratioWords = (cell: Reading | null) =>
  cell === null ? "not stated" : cell.kind === "number" ? `${group(cell.text)}x` : words(cell);

/** A date as written, the stated gap with its reason included; null when the cell is empty. */
const dateWords = (cell: Reading) => (cell.text.trim() ? safeText(cell.text) : null);

/**
 * The adjustment the pro forma bar draws: only when exactly one adjustment states a pro forma net
 * debt, and it states its amount. With several, none is chosen (by size or otherwise): they are
 * listed in handoff order.
 */
export function proFormaOf(view: NetDebtView): ProForma | null {
  const priced = view.adjustments.filter((item) => item.netDebt.kind === "number");
  const [only] = priced;
  return priced.length === 1 && only?.amount.kind === "number" ? only : null;
}

/** "Net 16,278 · cash 3,472 · gross debt 19,750"; a stated gap as written, once when all share it. */
function periodReading(period: NetDebtPeriod) {
  const cells = [period.net, period.cash, period.gross];
  const [first] = cells;
  if (first && cells.every((cell) => cell.kind !== "number" && cell.text === first.text))
    return words(first);
  return [
    period.net.kind === "number" ? `Net ${words(period.net)}` : `Net debt ${words(period.net)}`,
    `cash ${words(period.cash)}`,
    `gross debt ${words(period.gross)}`,
  ].join(" · ");
}

/** "Net 22,967 · Special dividend … · 2024-10-18 · amount 4,348": the stated facts, no equation. */
function proFormaReading(item: ProForma) {
  const date = dateWords(item.date);
  return [
    `Net ${words(item.netDebt)}`,
    safeText(item.event),
    ...(date ? [date] : []),
    `amount ${words(item.amount)}`,
  ].join(" · ");
}

/** The order the list writes an adjustment's stated facts in, named once in its heading. */
export const ADJUSTMENT_ORDER = "date · amount · pro forma net debt · pro forma net leverage";

/** One adjustment's stated facts, for the list, in `ADJUSTMENT_ORDER`: every one, as written. */
export function adjustmentFacts(item: ProForma) {
  return [
    dateWords(item.date) ?? "date not stated",
    words(item.amount),
    words(item.netDebt),
    ratioWords(item.leverage),
  ];
}

// ---------------------------------------------------------------------------------------------
// The bars
// ---------------------------------------------------------------------------------------------

const BAR = 16;
const ROW_GAP = 12;
const LABEL_WIDTH = 76;
/** From this measured width the period label sits beside its bar; below it, above. */
const BESIDE = 360;

type Span = { x: number; width: number };

export type NetBar = {
  label: string;
  kind: "prior" | "current" | "proForma";
  top: number;
  barY: number;
  /** The stated net debt's bar (a stated zero is a hairline, still a value). */
  net: (Span & { value: number }) | null;
  /** Where the net debt is not stated: the hatched slot, with the cell as written. */
  netGap: (Span & { reason: string }) | null;
  /** Cash drawn beyond net debt at its own stated length; only where both are zero or more. */
  cash: Span | null;
  cashGap: (Span & { reason: string }) | null;
  /** Where the stated gross debt sits. */
  gross: number | null;
  /** The pro forma's seam: where the reported net debt ends inside the pro forma bar. */
  seam: number | null;
  reading: string[];
};

const value = (cell: Reading) => (cell.kind === "number" ? cell.value : null);

function spanOf(x: (v: number) => number, from: number, to: number): Span {
  return { x: Math.min(x(from), x(to)), width: Math.abs(x(to) - x(from)) };
}

/** The net debt bars at `width`, on one scale from zero (through it for a net cash position). */
export function barsLayout(view: NetDebtView, proForma: ProForma | null, width: number) {
  const beside = width >= BESIDE;
  const left = beside ? LABEL_WIDTH : 0;
  const segmented = (p: NetDebtPeriod) => {
    const [net, cash] = [value(p.net), value(p.cash)];
    return net !== null && cash !== null && net >= 0 && cash >= 0 ? net + cash : null;
  };
  const positions = [
    ...view.periods.flatMap((p) => [value(p.net), value(p.gross), segmented(p)]),
    proForma ? value(proForma.netDebt) : null,
  ].filter((v): v is number => v !== null);
  const axis = niceAxis(positions, { zero: true });
  // The last tick's label is centred on its line, inside the figure.
  const right = width - textWidth(axis.ticks.at(-1)?.label ?? "", SIZE.tick) / 2 - 2;
  const x = (v: number) => axis.place(v, left, right);
  const slot = Math.min(96, (right - left) * 0.3);
  const last = view.periods.length - 1;
  let y = 2;
  const take = (bar: Omit<NetBar, "top" | "barY" | "reading">, text: string): NetBar => {
    const reading = wrap(text, right - left, SIZE.label);
    const barY = beside ? y : y + LINE;
    const laid = { ...bar, top: y, barY, reading };
    y = barY + BAR + 4 + reading.length * LINE + ROW_GAP;
    return laid;
  };
  const bars = view.periods.map((p, index) => {
    const [net, cash, gross] = [value(p.net), value(p.cash), value(p.gross)];
    const netEnd = net === null ? x(0) + slot : x(Math.max(net, 0));
    return take(
      {
        label: p.label,
        kind: index === last ? "current" : "prior",
        net: net === null ? null : { ...spanOf(x, 0, net), value: net },
        netGap: net === null ? { x: x(0), width: slot, reason: words(p.net) } : null,
        cash:
          net !== null && cash !== null && net >= 0 && cash >= 0
            ? spanOf(x, net, net + cash)
            : null,
        cashGap:
          cash === null && net !== null
            ? { x: netEnd + 2, width: Math.min(40, slot), reason: words(p.cash) }
            : null,
        gross: gross === null ? null : x(gross),
        seam: null,
      },
      periodReading(p),
    );
  });
  const pf = proForma ? value(proForma.netDebt) : null;
  const base = view.periods.at(-1);
  const reported = base ? value(base.net) : null;
  const inside =
    pf !== null && reported !== null && reported !== 0 && Math.sign(reported) === Math.sign(pf)
      ? Math.abs(reported) < Math.abs(pf)
      : false;
  const proBar =
    proForma && pf !== null
      ? take(
          {
            label: "Pro forma",
            kind: "proForma",
            net: { ...spanOf(x, 0, pf), value: pf },
            netGap: null,
            cash: null,
            cashGap: null,
            gross: null,
            seam: inside && reported !== null ? x(reported) : null,
          },
          proFormaReading(proForma),
        )
      : null;
  const plotBottom = y - ROW_GAP;
  const ticks = fittingTicks(axis, left, right, (text) => textWidth(text, SIZE.tick));
  return {
    beside,
    left,
    bars: proBar ? [...bars, proBar] : bars,
    axis,
    x,
    ticks,
    plotBottom,
    height: plotBottom + 22,
  };
}

// ---------------------------------------------------------------------------------------------
// The leverage strip, liquidity and the table
// ---------------------------------------------------------------------------------------------

export type StripEntry = { label: string; cell: Reading | null; proForma: boolean };

/** Net debt / EBITDA per period, then the drawn pro forma's, as stated. */
export function stripEntries(view: NetDebtView, proForma: ProForma | null): StripEntry[] {
  return [
    ...view.periods.map((p) => ({ label: p.label, cell: p.leverage, proForma: false })),
    ...(proForma ? [{ label: "Pro forma", cell: proForma.leverage, proForma: true }] : []),
  ];
}

export const stripMarks = (entries: readonly StripEntry[]): Mark[] =>
  entries.flatMap((entry) =>
    entry.cell?.kind === "number"
      ? [{ label: entry.label, value: entry.cell.value, text: `${group(entry.cell.text)}x` }]
      : [],
  );

/** True when the stated figures are adjacent: the strip never joins across an unstated period. */
export function adjacent(entries: readonly StripEntry[]) {
  const stated = entries.flatMap((entry, at) => (entry.cell?.kind === "number" ? [at] : []));
  const [first] = stated;
  const last = stated.at(-1);
  return first === undefined || last === undefined || last - first + 1 === stated.length;
}

export const stripGaps = (entries: readonly StripEntry[]) =>
  entries.flatMap((entry) =>
    entry.cell?.kind === "number" ? [] : [`${entry.label}: ${ratioWords(entry.cell)}`],
  );

export function stripReading(entries: readonly StripEntry[]) {
  const parts = entries.map(
    (entry) => `${entry.proForma ? "pro forma" : entry.label} ${ratioWords(entry.cell)}`,
  );
  return `Net debt / EBITDA on its own scale: ${parts.join(", ")}.`;
}

/** A stated figure as written, and whether it is a number (a gap or words is drawn in the gap ink). */
export type Stated = { text: string; number: boolean };

const stated = (cell: Reading): Stated => ({ text: words(cell), number: cell.kind === "number" });

export type LiquidityLine = {
  label: string;
  /** The handoff's own stated total for the period, as written; null where it writes none. */
  total: Stated | null;
  cash: Stated | null;
  undrawn: Stated | null;
};

/** Liquidity per period: the stated total where the handoff writes one, and the stated parts. */
export function liquidityLines(view: NetDebtView): LiquidityLine[] {
  const parts = new Map<string, LiquidityPeriod>(view.liquidity.map((row) => [row.label, row]));
  const totals = view.liquidityTotal?.values ?? [];
  const labels = [
    ...view.liquidity.map((row) => row.label),
    ...totals.map((total) => total.label).filter((label) => !parts.has(label)),
  ];
  return labels.map((label) => {
    const row = parts.get(label);
    const total = totals.find((item) => item.label === label)?.cell ?? null;
    return {
      label,
      total: total ? stated(total) : null,
      cash: row ? stated(row.cash) : null,
      undrawn: row ? stated(row.undrawn) : null,
    };
  });
}

/** The bars' reading: every period's stated figures and the drawn pro forma's. */
export function barsReading(view: NetDebtView, proForma: ProForma | null) {
  const periods = view.periods.map((p) => `${p.label} ${periodReading(p)}`);
  const pro = proForma ? [`pro forma ${proFormaReading(proForma)}`] : [];
  return `Net debt, ${view.unit}, on one scale from zero: ${[...periods, ...pro].join("; ")}.`;
}

const NOT_APPLICABLE = "Not applicable";

/** The table view: every period, then every stated adjustment in handoff order. */
export function netDebtTable(view: NetDebtView) {
  return {
    caption: `Net debt, ${view.unit}`,
    headers: [
      "Period or adjustment",
      "Date",
      "Amount",
      "Gross debt",
      "Cash",
      "Net debt",
      "Net debt / EBITDA",
    ],
    rows: [
      ...view.periods.map((p) => [
        p.label,
        NOT_APPLICABLE,
        NOT_APPLICABLE,
        words(p.gross),
        words(p.cash),
        words(p.net),
        ratioWords(p.leverage),
      ]),
      ...view.adjustments.map((item) => [
        `Pro forma: ${safeText(item.event)}`,
        dateWords(item.date) ?? "Not stated",
        words(item.amount),
        "Not stated",
        "Not stated",
        words(item.netDebt),
        ratioWords(item.leverage),
      ]),
    ],
  };
}
