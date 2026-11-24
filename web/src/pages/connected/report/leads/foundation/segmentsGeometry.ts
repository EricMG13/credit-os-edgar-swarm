import { ticks } from "../../../visuals/visualData";
import { linear } from "../kit/geometry";
import type { Reading } from "../kit/numbers";
import type { Segment } from "./legacyData";

const DECIMAL = /^(-?)(\d+)(?:\.(\d+))?$/;

/**
 * A decimal string rounded half up (away from zero) to one decimal, from its digits alone:
 * "56.74" → "56.7", "51.55" → "51.6", "-12.35" → "-12.4". Null for anything but a plain decimal.
 */
export function oneDecimal(text: string) {
  const match = DECIMAL.exec(text.trim());
  if (!match) return null;
  const [, sign = "", whole = "", fraction = ""] = match;
  const tenths =
    BigInt(`${whole}${fraction[0] ?? "0"}`) + (Number(fraction[1] ?? "0") >= 5 ? 1n : 0n);
  const digits = tenths.toString().padStart(2, "0");
  const negative = sign === "-" && tenths !== 0n;
  return `${negative ? "-" : ""}${digits.slice(0, -1)}.${digits.slice(-1)}`;
}

/** A plain decimal as an integer and its count of decimals. */
function scaled(text: string) {
  const match = DECIMAL.exec(text);
  if (!match) return null;
  const [, sign = "", whole = "", fraction = ""] = match;
  return { negative: sign === "-", digits: BigInt(`${whole}${fraction}`), scale: fraction.length };
}

/**
 * `part ÷ whole` as a percentage to one decimal, exactly: the percentage is truncated to two
 * decimals by integer division and then rounded half up by `oneDecimal`, so a value such as
 * 56.746% is never rounded twice (56.75 → 56.8). Null unless both are numbers and the whole is not 0.
 */
export function ratioPercent(part: Reading, whole: Reading) {
  if (part.kind !== "number" || whole.kind !== "number") return null;
  const [p, w] = [scaled(part.text), scaled(whole.text)];
  if (!p || !w || w.digits === 0n) return null;
  // part / whole * 100 * 100, as integers: p.digits / 10^p.scale over w.digits / 10^w.scale.
  const hundredths =
    (p.digits * 10n ** BigInt(w.scale) * 10000n) / (w.digits * 10n ** BigInt(p.scale));
  const text = hundredths.toString().padStart(3, "0");
  const negative = p.negative !== w.negative && hundredths !== 0n;
  return oneDecimal(`${negative ? "-" : ""}${text.slice(0, -2)}.${text.slice(-2)}`);
}

/** A name broken into lines of at most `width` characters, at spaces where it can be. */
export function wrapName(name: string, width = 17) {
  const lines: string[] = [];
  let line = "";
  for (const word of name.split(/\s+/).filter(Boolean)) {
    const pieces = word.match(new RegExp(`.{1,${String(width)}}`, "g")) ?? [];
    for (const piece of pieces) {
      if (line && line.length + 1 + piece.length <= width) line = `${line} ${piece}`;
      else {
        if (line) lines.push(line);
        line = piece;
      }
    }
  }
  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

export const SEG = {
  width: 516,
  plotStart: 140,
  plotEnd: 400,
  top: 26,
  bar: 12,
  /** The EBITDA bar sits this far beneath the top of the sales bar. */
  pair: 16,
  gap: 18,
  lineHeight: 16,
  axis: 24,
  gapSlot: 44,
  /** A stated amount too small to see is drawn this wide; a stated zero is drawn as zero. */
  thinnest: 2,
} as const;

export type BarMark =
  | { kind: "bar"; text: string; x: number; width: number; y: number; labelX: number }
  | { kind: "gap"; text: string; x: number; y: number };

export type SegmentBlock = {
  segment: Segment;
  lines: string[];
  top: number;
  nameY: number[];
  sales: BarMark;
  ebitda: BarMark;
  ratio: string | null;
};

const numberOfReading = (reading: Reading) => (reading.kind === "number" ? reading.value : null);

/** Segment blocks on one scale from zero (or from the most negative stated amount). */
export function segmentGeometry(segments: readonly Segment[]) {
  const values = segments.flatMap((segment) => [
    numberOfReading(segment.sales),
    numberOfReading(segment.ebitda),
  ]);
  const scale = ticks(values);
  const low = scale[0]?.value ?? 0;
  const high = scale.at(-1)?.value ?? 1;
  const x = linear([low, high], [SEG.plotStart, SEG.plotEnd]);
  const zero = x(0);
  const mark = (reading: Reading, y: number): BarMark => {
    if (reading.kind !== "number") return { kind: "gap", text: reading.text, x: zero, y };
    const end = x(reading.value);
    const span = Math.abs(end - zero);
    const width = reading.value === 0 ? 0 : Math.max(SEG.thinnest, span);
    const left = reading.value < 0 ? zero - width : zero;
    // A loss is labelled just right of zero so its label never runs into the names.
    const labelX = reading.value < 0 ? zero + 6 : zero + width + 6;
    return { kind: "bar", text: reading.text, x: left, width, y, labelX };
  };
  let top = SEG.top;
  const blocks = segments.map((segment): SegmentBlock => {
    const lines = wrapName(segment.name);
    const content = Math.max(SEG.pair + SEG.bar, lines.length * SEG.lineHeight);
    const first = top + (content - lines.length * SEG.lineHeight) / 2 + 12;
    const block: SegmentBlock = {
      segment,
      lines,
      top,
      nameY: lines.map((_, at) => first + at * SEG.lineHeight),
      sales: mark(segment.sales, top + (content - SEG.pair - SEG.bar) / 2),
      ebitda: mark(segment.ebitda, top + (content - SEG.pair - SEG.bar) / 2 + SEG.pair),
      ratio: ratioPercent(segment.ebitda, segment.sales),
    };
    top += content + SEG.gap;
    return block;
  });
  const bottom = top - SEG.gap + 8;
  return {
    blocks,
    ticks: scale.map((tick) => ({ ...tick, x: x(tick.value) })),
    zero,
    bottom,
    height: bottom + SEG.axis,
  };
}
