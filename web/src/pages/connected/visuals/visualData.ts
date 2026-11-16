export function record(value: unknown): Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

export function items(value: unknown): unknown[] {
  return Array.isArray(value) ? (value as unknown[]) : [];
}

export function word(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function strings(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((cell: unknown) => typeof cell === "string");
}

export function stringsIn(value: unknown): string[] {
  return strings(value) ? value : [];
}

export interface SourceTable {
  line: number;
  headers: string[];
  rows: string[][];
  rowLines?: (number | undefined)[];
  rowSource?: (line: number, label: string) => ReactNode;
  evidenceInDrawer?: boolean;
}

export function publishedTables(sections: unknown) {
  const tables = new Map<number, SourceTable>();
  const duplicates = new Set<number>();
  for (const section of items(sections)) {
    for (const raw of items(record(section).blocks)) {
      const { type, line, headers, rows } = record(raw);
      if (type !== "table" || typeof line !== "number" || !Number.isSafeInteger(line)) continue;
      if (tables.has(line) || duplicates.has(line)) {
        tables.delete(line);
        duplicates.add(line);
        continue;
      }
      if (!strings(headers) || headers.length < 2) continue;
      const sourceRows = items(rows).map(record);
      const cells = sourceRows.map((row) => row.cells);
      if (
        cells.length > 0 &&
        cells.every((row): row is string[] => strings(row) && row.length === headers.length)
      ) {
        const rowLines = sourceRows.map(({ line: at }) =>
          typeof at === "number" && Number.isSafeInteger(at) && at > 0 ? at : undefined,
        );
        tables.set(line, { line, headers, rows: cells, rowLines });
      }
    }
  }
  return tables;
}

export function amount(cell: string): number | null {
  if (!/^-?\d[\d,]*(?:\.\d+)?$/.test(cell)) return null;
  const value = Number(cell.replaceAll(",", ""));
  return Number.isFinite(value) ? value : null;
}

export function sharePosition(cell: string) {
  const match = /^(0(?:\.\d+)?|1(?:\.0+)?)(?: \((\d+(?:\.\d+)?)%\))?$/.exec(cell);
  if (!match) return null;
  const value = Number(match[1]);
  return match[2] === undefined || Math.abs(Number(match[2]) - value * 100) < 1e-10 ? value : null;
}

export function distinct(labels: string[]) {
  return labels.length === new Set(labels).size && labels.every(Boolean);
}

export function bounds(values: (number | null)[], zero = false) {
  const present = values.filter((value): value is number => value !== null);
  if (zero || present.length === 0) present.push(0);
  const min = Math.min(...present);
  const max = Math.max(...present);
  if (min !== max) return { min, max };
  const margin = Math.abs(min) / 10 || 1;
  return { min: zero && min === 0 ? 0 : min - margin, max: max + margin };
}

/** The spread of the data in three ticks. For axes that are not value axes (dates, scatter). */
export function rangeTicks(values: (number | null)[], zero = false) {
  const { min, max } = bounds(values, zero);
  return [...new Set([min, min + (max - min) / 2, max])].map((value) => ({
    value,
    label: String(value),
  }));
}

const NICE_MANTISSAS = [1, 2, 2.5, 5];
const MAX_TICKS = 6;
const EDGE = 1e-9;
const MAX_EXPONENTS = 100;

/** The smallest of 1, 2, 2.5 or 5 times a power of ten whose bracket has at most six ticks. */
function niceStep(low: number, high: number) {
  const span = high - low;
  const start = Math.floor(Math.log10(span)) - 2;
  for (let exponent = start; exponent < start + MAX_EXPONENTS; exponent += 1) {
    for (const mantissa of NICE_MANTISSAS) {
      const step = mantissa * 10 ** exponent;
      const count = Math.ceil(high / step - EDGE) - Math.floor(low / step + EDGE) + 1;
      if (count <= MAX_TICKS) {
        return { step, decimals: Math.max(0, -exponent + (mantissa === 2.5 ? 1 : 0)) };
      }
    }
  }
  throw new Error("no nice tick step fits the range");
}

/**
 * Value-axis ticks at round numbers. Data that are all zero or more start at zero; data that are all
 * zero or less end at zero; mixed data are bracketed on both sides. The labels are axis furniture:
 * data labels, tooltips and tables keep the published strings. `zero` is kept for callers; the
 * baseline rule makes it redundant.
 */
export function ticks(
  values: (number | null)[],
  // The baseline rule already includes zero; the flag stays so existing callers compile.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _zero = false,
  format?: (value: number) => string,
) {
  const given = values.filter((value): value is number => value !== null);
  // A value that is not a number cannot be placed on an axis: draw the axis of an empty series.
  const present = given.every((value) => Number.isFinite(value)) ? given : [];
  const low = Math.min(0, ...present);
  const peak = Math.max(0, ...present);
  const high = peak === low ? low + 1 : peak;
  const { step, decimals } = niceStep(low, high);
  const first = Math.floor(low / step + EDGE);
  const last = Math.ceil(high / step - EDGE);
  const grouped = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  });
  const label = format ?? ((value: number) => grouped.format(value));
  return Array.from({ length: last - first + 1 }, (_, at) => {
    const value = Number(((first + at) * step).toFixed(decimals)) + 0;
    return { value, label: label(value) };
  });
}

export function chartTable(table: SourceTable, columns = table.headers.map((_, index) => index)) {
  const visible = table.evidenceInDrawer
    ? columns.filter(
        (index) => !/^(?:Source|Evidence|Basis and limitation)$/i.test(table.headers[index] ?? ""),
      )
    : columns;
  return {
    head: visible.map((index) => table.headers[index] ?? ""),
    endHeading: "Source",
    rows: table.rows.map((row, index) => {
      const label = row[visible[0] ?? 0] ?? "";
      const line = table.rowLines?.[index];
      return {
        label,
        cells: visible.slice(1).map((column) => row[column] || null),
        end: line === undefined ? undefined : table.rowSource?.(line, label),
      };
    }),
  };
}
import type { ReactNode } from "react";
