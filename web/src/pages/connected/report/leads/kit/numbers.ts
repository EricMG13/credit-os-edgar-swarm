import { exactDifference } from "../../../signal";

/** One cell of a handoff table, read without ever turning a gap into a number. */
export type Reading =
  | { kind: "number"; text: string; value: number }
  | { kind: "gap"; text: string; reason: string }
  | { kind: "text"; text: string };

const PLAIN = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/;
const STATED_GAP = /^Not (?:supplied|calculable|calculated|applicable):\s*(\S.*)$/;

/** A cell as the module wrote it: a plain number, a stated gap with its reason, or other words. */
export function readCell(cell: string): Reading {
  const text = cell.trim().replaceAll("−", "-");
  const gap = STATED_GAP.exec(text)?.[1];
  if (gap !== undefined) return { kind: "gap", text: cell.trim(), reason: gap };
  if (PLAIN.test(text))
    return {
      kind: "number",
      text: text.replaceAll(",", ""),
      value: Number(text.replaceAll(",", "")),
    };
  return { kind: "text", text: cell.trim() };
}

/** The number of a cell, or null for a gap or words. */
export const numberOf = (cell: string | undefined) => {
  const reading = readCell(cell ?? "");
  return reading.kind === "number" ? reading.value : null;
};

/** Thousands grouped and a true minus; decimals exactly as stated. Words and gaps are returned as written. */
export function group(text: string) {
  const reading = readCell(text);
  if (reading.kind !== "number") return reading.text;
  const [whole = "", fraction] = reading.text.replace(/^-/, "").split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+$)/g, ",");
  return `${reading.text.startsWith("-") ? "−" : ""}${grouped}${fraction === undefined ? "" : `.${fraction}`}`;
}

/** `current - prior`, exact, or null when either is not a plain number. */
export function difference(current: string, prior: string) {
  const a = readCell(current);
  const b = readCell(prior);
  return a.kind === "number" && b.kind === "number" ? exactDifference(a.text, b.text) : null;
}

const negate = (text: string) => (text.startsWith("-") ? text.slice(1) : `-${text}`);

/** The exact sum of plain numbers; null if any term is not one. */
export function sum(terms: readonly string[]) {
  const [first, ...rest] = terms.map(readCell);
  if (first?.kind !== "number") return null;
  let total: string | null = first.text;
  for (const term of rest) {
    if (term.kind !== "number" || total === null) return null;
    total = exactDifference(total, negate(term.text));
  }
  return total;
}

const scaled = (text: string) => {
  const [whole = "", fraction = ""] = text.replace(/^-/, "").split(".");
  const digits = BigInt(whole + fraction);
  return { value: text.startsWith("-") ? -digits : digits, scale: fraction.length };
};

/** `part / whole` as a percentage, exact decimal arithmetic rounded half away from zero to 2 dp; null if not computable. */
export function percentOf(part: string, whole: string) {
  const a = readCell(part);
  const b = readCell(whole);
  if (a.kind !== "number" || b.kind !== "number" || b.value === 0) return null;
  const x = scaled(a.text);
  const y = scaled(b.text);
  // part / whole * 100 * 100 (two decimals), as an integer ratio.
  const numerator = x.value * 10n ** BigInt(y.scale) * 10000n;
  const denominator = y.value * 10n ** BigInt(x.scale);
  const negative = numerator < 0n !== denominator < 0n;
  const n = numerator < 0n ? -numerator : numerator;
  const d = denominator < 0n ? -denominator : denominator;
  const rounded = (2n * n + d) / (2n * d);
  const digits = rounded.toString().padStart(3, "0");
  return `${negative && rounded !== 0n ? "-" : ""}${digits.slice(0, -2)}.${digits.slice(-2)}`;
}

/** The sign of a plain number text: 1, 0, -1, or null. */
export function signOf(text: string | null) {
  const reading = text === null ? null : readCell(text);
  return reading?.kind === "number" ? Math.sign(reading.value) : null;
}
