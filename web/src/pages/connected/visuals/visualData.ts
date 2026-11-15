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
      const cells = items(rows).map((row) => record(row).cells);
      if (
        cells.length > 0 &&
        cells.every((row): row is string[] => strings(row) && row.length === headers.length)
      ) {
        tables.set(line, { line, headers, rows: cells });
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

export function ticks(
  values: (number | null)[],
  zero = false,
  format: (value: number) => string = String,
) {
  const { min, max } = bounds(values, zero);
  return [...new Set([min, min + (max - min) / 2, max])].map((value) => ({
    value,
    label: format(value),
  }));
}

export function chartTable(table: SourceTable, columns = table.headers.map((_, index) => index)) {
  const visible = table.evidenceInDrawer
    ? columns.filter(
        (index) => !/^(?:Source|Evidence|Basis and limitation)$/i.test(table.headers[index] ?? ""),
      )
    : columns;
  return {
    head: visible.map((index) => table.headers[index] ?? ""),
    rows: table.rows.map((row) => ({
      label: row[visible[0] ?? 0] ?? "",
      cells: visible.slice(1).map((index) => row[index] || null),
    })),
  };
}
