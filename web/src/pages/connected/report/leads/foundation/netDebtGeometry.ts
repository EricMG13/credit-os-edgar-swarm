import { tone } from "../../../signal";
import { linear } from "../kit/geometry";
import { difference, group, readCell, signOf, sum, type Reading } from "../kit/numbers";
import { clean, direction, ratioAxis, reasonOf, valueScale } from "./earningsDebtGeometry";
import type { NetDebtPeriod, NetDebtView, ProForma } from "./foundationData";

/** Where a reading line starts: under the bars, or at the left edge when it is long. */
export const readingX = (text: string) => (text.length > 46 ? 0 : ND.x0);

/** Layout of the bars, in viewBox units. Text is 11 px or more at the 1440 layout. */
export const ND = {
  width: 420,
  x0: 84,
  x1: 404,
  top: 10,
  row: 54,
  bar: 16,
  gapSlot: 44,
} as const;

type Span = { x: number; width: number };
const span = (at: (value: number) => number, from: number, to: number): Span => ({
  x: Math.min(at(from), at(to)),
  width: Math.abs(at(to) - at(from)),
});

const valueOf = (cell: Reading) => (cell.kind === "number" ? cell.value : null);
const stated = (cell: Reading, name: string) =>
  cell.kind === "number" ? `${name} ${group(cell.text)}` : `${name} not supplied`;
const capital = (text: string) => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

export type PeriodBar = {
  label: string;
  kind: "prior" | "current";
  y: number;
  /** The net debt bar; width zero for a stated zero, which is still drawn as a value. */
  net: (Span & { zero: boolean }) | null;
  netGap: Span | null;
  /** Cash drawn beyond net debt, its stated length; only where net debt and cash are zero or more. */
  cash: Span | null;
  cashGap: Span | null;
  /** Where gross debt, as stated, sits. */
  gross: number | null;
  reading: string;
  reasons: string[];
};

export type ProFormaBar = {
  y: number;
  /** The part up to the base period's net debt, where the pro forma keeps it. */
  base: Span | null;
  /** From the base period's net debt to the pro forma: the event's part. */
  change: (Span & { reduces: boolean }) | null;
  /** The whole pro forma bar, when the base period's net debt is not a number. */
  whole: Span | null;
  end: number;
  reading: string;
};

/** Whether the base period's net debt plus the event's amount is the stated pro forma, exactly. */
export function proFormaAdds(base: Reading, proForma: ProForma) {
  if (base.kind !== "number" || proForma.netDebt.kind !== "number") return false;
  const total = sum([base.text, proForma.amount.text]);
  return total !== null && Number(total) === proForma.netDebt.value;
}

const plusAmount = (amount: Reading) =>
  amount.text.startsWith("-") ? `− ${group(amount.text.slice(1))}` : `+ ${group(amount.text)}`;

/** "net debt 22,967 = 18,619 + 4,348", or the three stated numbers without "=" when they do not add. */
export function proFormaEquation(base: NetDebtPeriod | undefined, proForma: ProForma) {
  const net = group(proForma.netDebt.text);
  if (base && proFormaAdds(base.net, proForma))
    return `net debt ${net} = ${group(base.net.text)} ${plusAmount(proForma.amount)}, derived`;
  const from = base?.net.kind === "number" ? `; ${base.label} ${group(base.net.text)}` : "";
  return `net debt ${net}${from}; amount ${group(proForma.amount.text)}`;
}

export const eventOf = (proForma: ProForma) => clean(proForma.event);
export function dateOf(proForma: ProForma) {
  const cell = readCell(proForma.date);
  return cell.kind === "gap" || !proForma.date.trim() ? "date not stated" : clean(proForma.date);
}

/** The bars on one scale from zero (or through it, for a net cash position); widths proportional to the stated figures. */
export function netDebtLayout(view: NetDebtView) {
  const last = view.periods.length - 1;
  const segmented = (p: NetDebtPeriod) =>
    p.net.kind === "number" && p.cash.kind === "number" && p.net.value >= 0 && p.cash.value >= 0;
  const values = [
    ...view.periods.flatMap((p) => [
      valueOf(p.net),
      valueOf(p.gross),
      segmented(p) ? (valueOf(p.net) ?? 0) + (valueOf(p.cash) ?? 0) : null,
    ]),
    view.proForma ? valueOf(view.proForma.netDebt) : null,
  ].filter((value): value is number => value !== null);
  const scale = valueScale(values, [ND.x0, ND.x1]);
  const at = scale.at;
  const bars = view.periods.map((p, index): PeriodBar => {
    const y = ND.top + index * ND.row;
    const net = valueOf(p.net);
    const cash = valueOf(p.cash);
    const gross = valueOf(p.gross);
    const netEnd = net === null ? at(0) + ND.gapSlot : at(net);
    const parts = [stated(p.net, "net"), stated(p.cash, "cash"), stated(p.gross, "gross debt")];
    const named = [
      ["net debt", p.net],
      ["cash", p.cash],
      ["gross debt", p.gross],
    ] as const;
    return {
      label: p.label,
      kind: index === last ? "current" : "prior",
      y,
      net: net === null ? null : { ...span(at, 0, net), zero: net === 0 },
      netGap: net === null ? { x: at(0), width: ND.gapSlot } : null,
      cash: segmented(p) && net !== null && cash !== null ? span(at, net, net + cash) : null,
      cashGap: p.cash.kind === "number" ? null : { x: netEnd + 2, width: ND.gapSlot - 8 },
      gross: gross === null ? null : at(gross),
      reading: capital(parts.join(" · ")),
      reasons: named.flatMap(([name, cell]) =>
        cell.kind === "number" ? [] : [`${p.label} ${name} not supplied: ${reasonOf(cell)}.`],
      ),
    };
  });
  const base = view.periods.at(-1);
  const proForma = view.proForma ? proFormaBar(view.proForma, base, at, bars.length) : null;
  const axisY = ND.top + (bars.length + (proForma ? 1 : 0)) * ND.row - 6;
  return { bars, proForma, ticks: scale.ticks, zero: at(0), axisY, height: axisY + 24 };
}

function proFormaBar(
  proForma: ProForma,
  base: NetDebtPeriod | undefined,
  at: (value: number) => number,
  index: number,
): ProFormaBar {
  const y = ND.top + index * ND.row;
  const pf = valueOf(proForma.netDebt) ?? 0;
  const from = base ? valueOf(base.net) : null;
  const reading = capital(proFormaEquation(base, proForma).replace(/^net debt/, "net"));
  if (from === null)
    return { y, base: null, change: null, whole: span(at, 0, pf), end: at(pf), reading };
  // The base part is what the pro forma keeps of the base period's net debt, on the same side of zero.
  const sameSide = Math.sign(from) === Math.sign(pf);
  const kept = sameSide ? Math.sign(pf) * Math.min(Math.abs(from), Math.abs(pf)) : 0;
  return {
    y,
    base: kept === 0 ? null : span(at, 0, kept),
    change: pf === from ? null : { ...span(at, from, pf), reduces: Math.abs(pf) < Math.abs(from) },
    whole: null,
    end: at(pf),
    reading,
  };
}

// ---------------------------------------------------------------------------------------------
// The net debt / EBITDA strip
// ---------------------------------------------------------------------------------------------

export const NL = { width: 420, x0: 84, x1: 392, top: 14, row: 26 } as const;

export type StripMark = {
  label: string;
  kind: "prior" | "current" | "proForma";
  y: number;
  value: { x: number; text: string; labelX: number; anchor: "start" | "end" } | null;
  reason: string | null;
};

/** Net debt / EBITDA per period and pro forma on its own axis, not from zero; null if none is a number. */
export function leverageStrip(view: NetDebtView) {
  const last = view.periods.length - 1;
  const entries = [
    ...view.periods.map((p, index) => ({
      label: p.label,
      kind: index === last ? ("current" as const) : ("prior" as const),
      cell: p.leverage,
    })),
    ...(view.proForma
      ? [{ label: "Pro forma", kind: "proForma" as const, cell: view.proForma.leverage }]
      : []),
  ];
  const values = entries.flatMap(({ cell }) => (cell?.kind === "number" ? [cell.value] : []));
  if (!values.length) return null;
  const axis = ratioAxis(values);
  const x = linear([axis.lo, axis.hi], [NL.x0, NL.x1]);
  const marks = entries.map(({ label, kind, cell }, index): StripMark => {
    const y = NL.top + index * NL.row;
    if (cell?.kind !== "number")
      return {
        label,
        kind,
        y,
        value: null,
        reason: cell ? `not supplied: ${reasonOf(cell)}` : "not stated",
      };
    const at = x(cell.value);
    const text = `${group(cell.text)}x${kind === "proForma" ? " pro forma" : ""}`;
    const right = at + 10 + text.length * 7.3 <= NL.width;
    return {
      label,
      kind,
      y,
      value: { x: at, text, labelX: right ? at + 10 : at - 10, anchor: right ? "start" : "end" },
      reason: null,
    };
  });
  const axisY = NL.top + entries.length * NL.row - 10;
  return {
    axis,
    fromZero: axis.lo === 0,
    marks,
    ticks: axis.ticks.map((value) => ({ value, x: x(value), label: axis.label(value) })),
    axisY,
    height: axisY + 22,
  };
}

// ---------------------------------------------------------------------------------------------
// Words: title, readings, notes and table
// ---------------------------------------------------------------------------------------------

/** Net debt from the first to the last period, derived, with the owner's tone for net debt. */
export function netDebtChange(view: NetDebtView) {
  const [first, ...rest] = view.periods;
  const last = rest.at(-1);
  if (!first || !last) return null;
  const change = difference(last.net.text, first.net.text);
  if (change === null) return null;
  const judged = tone("net_debt", change);
  return {
    from: first,
    to: last,
    change,
    word: direction(change),
    tone: judged === "worse" || judged === "better" ? judged : null,
  };
}

/** "Net debt rose from 16,278 to 18,619; pro forma for <event> it is 22,967": only what the data supports. */
export function netDebtTitle(view: NetDebtView) {
  const moved = netDebtChange(view);
  const only = view.periods.filter((p) => p.net.kind === "number");
  const verb = moved && signOf(moved.change) === 1 ? "rose" : "fell";
  const head = moved
    ? signOf(moved.change) === 0
      ? `Net debt was unchanged at ${group(moved.to.net.text)}`
      : `Net debt ${verb} from ${group(moved.from.net.text)} to ${group(moved.to.net.text)}`
    : only.length === 1 && only[0]
      ? `Net debt was ${group(only[0].net.text)} at ${only[0].label}`
      : null;
  const pf = view.proForma;
  const tail = pf ? `pro forma for ${eventOf(pf)} it is ${group(pf.netDebt.text)}` : null;
  if (head && tail) return `${head}; ${tail}`;
  if (head) return head;
  if (pf) return `Pro forma for ${eventOf(pf)}, net debt is ${group(pf.netDebt.text)}`;
  return `Net debt, ${view.periods.map((p) => p.label).join(" → ")}`;
}

/** The figure's reading, every stated number in it. */
export function netDebtReading(view: NetDebtView, crossesZero: boolean) {
  const periods = view.periods.map(
    (p) =>
      `${p.label} ${[stated(p.net, "net"), stated(p.cash, "cash"), stated(p.gross, "gross debt")].join(", ")}`,
  );
  const pf = view.proForma;
  const base = view.periods.at(-1);
  const proForma = pf
    ? [
        `pro forma for ${eventOf(pf)}, ${dateOf(pf)}: ${proFormaEquation(base, pf)}; gross debt pro forma is not stated`,
      ]
    : [];
  const scale = crossesZero ? "on one scale through zero" : "on one scale from zero";
  return `Net debt, ${view.unit}, ${scale}: ${[...periods, ...proForma].join("; ")}.`;
}

/** The strip's reading. */
export function stripReading(strip: NonNullable<ReturnType<typeof leverageStrip>>) {
  const start = strip.axis.label(strip.axis.lo);
  const scale = strip.fromZero ? "from zero" : `from ${start}, not from zero`;
  const parts = strip.marks.map(
    (mark) =>
      `${mark.kind === "proForma" ? "pro forma" : mark.label} ${mark.value ? mark.value.text.replace(" pro forma", "") : (mark.reason ?? "")}`,
  );
  return `Net debt to EBITDA on its own scale ${scale}: ${parts.join(", ")}.`;
}

/** The figure's notes: gap reasons, an unreconciled net debt, and what the pro forma does not state. */
export function netDebtNotes(view: NetDebtView, layout: ReturnType<typeof netDebtLayout>) {
  const unreconciled = view.periods.some((p) => {
    if (p.net.kind !== "number") return false;
    const net = difference(p.gross.text, p.cash.text);
    return net !== null && Number(net) !== p.net.value;
  });
  return [
    ...layout.bars.flatMap((bar) => bar.reasons),
    ...(unreconciled ? ["Net debt is not gross debt less cash in the handoff."] : []),
    ...(view.proForma ? ["Gross debt pro forma is not stated."] : []),
  ];
}

const ratioCell = (cell: Reading | null) =>
  cell === null
    ? "Not stated"
    : cell.kind === "number"
      ? `${group(cell.text)}x`
      : `Not supplied: ${reasonOf(cell)}`;
const moneyCell = (cell: Reading) =>
  cell.kind === "number" ? group(cell.text) : `Not supplied: ${reasonOf(cell)}`;

/** The table view: the periods and the pro forma row. */
export function netDebtTable(view: NetDebtView) {
  const pf = view.proForma;
  return {
    caption: `Net debt, ${view.unit}`,
    headers: ["Period", "Gross debt", "Cash", "Net debt", "Net debt / EBITDA"],
    rows: [
      ...view.periods.map((p) => [
        p.label,
        moneyCell(p.gross),
        moneyCell(p.cash),
        moneyCell(p.net),
        ratioCell(p.leverage),
      ]),
      ...(pf
        ? [
            [
              `Pro forma: ${eventOf(pf)}, ${dateOf(pf)}; amount ${group(pf.amount.text)}`,
              "Not stated",
              "Not stated",
              moneyCell(pf.netDebt),
              ratioCell(pf.leverage),
            ],
          ]
        : []),
    ],
  };
}

/** One other stated adjustment in words: only its stated facts. */
export function adjustmentText(item: ProForma) {
  const leverage =
    item.leverage.kind === "number"
      ? `${group(item.leverage.text)}x`
      : "pro forma leverage not supplied";
  return `${eventOf(item)}, ${dateOf(item)}: amount ${group(item.amount.text)}, pro forma net debt ${group(item.netDebt.text)}, ${leverage}.`;
}

/** Liquidity per period: the two stated parts and, when both are numbers, their exact sum (derived). */
export function liquidityLines(view: NetDebtView) {
  return view.liquidity.map((row) => ({
    label: row.label,
    cash: row.cash.kind === "number" ? group(row.cash.text) : "cash not supplied",
    undrawn: row.undrawn.kind === "number" ? group(row.undrawn.text) : "undrawn not supplied",
    total:
      row.cash.kind === "number" && row.undrawn.kind === "number"
        ? group(sum([row.cash.text, row.undrawn.text]) ?? "")
        : null,
  }));
}
