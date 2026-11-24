import { items, ticks, type SourceTable } from "../../visuals/visualData";
import { columnAt, readCell, type Cell } from "./figureData";

type Descriptor = Record<string, unknown>;

/** One period on the wall. `cell` is null for a year the schedule has no row for. */
type WallSlot = { label: string; cell: Cell | null };

const YEAR = /^(\D*)(\d{4})\D?$/;
const LONGEST_AXIS = 12;

function datedSlots(dated: { label: string; year: number; cell: Cell }[]): WallSlot[] {
  const sorted = [...dated].sort((a, b) => a.year - b.year);
  const first = sorted[0];
  const last = sorted.at(-1);
  if (!first || !last || last.year - first.year > LONGEST_AXIS) return sorted;
  const prefix = YEAR.exec(first.label)?.[1] ?? "";
  // A true time axis: every year between the first and the last has a slot, with or without a row.
  return Array.from({ length: last.year - first.year + 1 }, (_, at) => {
    const year = first.year + at;
    const row = sorted.find((slot) => slot.year === year);
    return row ?? { label: `${prefix}${String(year)}`, cell: null };
  });
}

/** The maturity schedule as slots on a year axis, then the buckets with no year. */
export function wallSlots(table: SourceTable, descriptor: Descriptor, unit: string) {
  const column = columnAt(table, items(descriptor.columns)[0]);
  if (column === null || column === 0) return null;
  const texts = table.rows.map((row) => row[column] ?? "");
  const rows = table.rows.map((row, at) => ({
    label: row[0] ?? "",
    cell: readCell(texts[at] ?? "", texts, unit),
  }));
  if (!rows.some(({ cell }) => cell.value !== null)) return null;
  const dated = rows.flatMap((row) => {
    const year = YEAR.exec(row.label)?.[2];
    return year ? [{ ...row, year: Number(year) }] : [];
  });
  return {
    dated: datedSlots(dated),
    undated: rows.filter((row) => !YEAR.test(row.label)),
  };
}

export const WALL = { width: 872, height: 300, base: 250, top: 30, left: 16, gapMark: 36 } as const;
const BREAK = 40;
const WIDEST_BAR = 88;
const THINNEST = 2;

/** Where each slot's mark sits: bar heights are the amounts on one scale from zero. */
export function wallGeometry(dated: WallSlot[], undated: WallSlot[], width: number = WALL.width) {
  const slots = [...dated, ...undated];
  const values = slots.map((slot) => slot.cell?.value ?? null);
  const top = ticks(values).at(-1)?.value ?? 1;
  const split = dated.length > 0 && undated.length > 0;
  const room = width - 2 * WALL.left - (split ? BREAK : 0);
  const slot = room / slots.length;
  const bar = Math.min(WIDEST_BAR, slot * 0.65);
  const marks = slots.map((entry, at) => {
    const start = WALL.left + at * slot + (split && at >= dated.length ? BREAK : 0);
    const value = entry.cell?.value ?? null;
    return {
      ...entry,
      undated: at >= dated.length,
      start,
      centre: start + slot / 2,
      height: value === null ? null : Math.max(THINNEST, (value / top) * (WALL.base - WALL.top)),
    };
  });
  return { marks, bar, breakAt: split ? WALL.left + dated.length * slot + BREAK / 2 : null };
}

export type StackRow = {
  label: string;
  secured: boolean | null;
  amount: Cell;
  /** The published cumulative leverage, when the handoff states one for the row. */
  leverage: Cell | null;
};

const flag = (text: string) => (/^yes$/i.test(text) ? true : /^no$/i.test(text) ? false : null);

/** The debt stack in rank order: the first claim first. */
export function stackRows(table: SourceTable, descriptor: Descriptor, unit: string) {
  const label = columnAt(table, descriptor.label);
  const amount = columnAt(table, descriptor.amount);
  if (label === null || amount === null) return null;
  const rank = columnAt(table, descriptor.rank);
  const secured = columnAt(table, descriptor.secured);
  const leverage = columnAt(table, descriptor.leverage);
  const amounts = table.rows.map((row) => row[amount] ?? "");
  const levers = leverage === null ? [] : table.rows.map((row) => row[leverage] ?? "");
  const rows = table.rows.map((row, at) => ({
    order: rank === null ? at : Number(row[rank]),
    label: row[label] ?? "",
    secured: secured === null ? null : flag(row[secured] ?? ""),
    amount: readCell(amounts[at] ?? "", amounts, unit),
    leverage: leverage === null ? null : readCell(levers[at] ?? "", levers, "x"),
  }));
  if (!rows.some((row) => (row.amount.value ?? 0) > 0)) return null;
  return rows
    .sort(
      (a, b) =>
        (Number.isFinite(a.order) ? a.order : Infinity) -
        (Number.isFinite(b.order) ? b.order : Infinity),
    )
    .map(({ label: name, secured: ranked, amount: stated, leverage: cumulative }): StackRow => ({
      label: name,
      secured: ranked,
      amount: stated,
      leverage: cumulative,
    }));
}

export const STACK = { width: 56, tall: 252, gapSegment: 20, seam: 1, rankBreak: 6 } as const;

/** Segment heights in proportion to the amounts; a row with no amount is a fixed gap mark. */
export function stackGeometry(rows: StackRow[]) {
  const total = rows.reduce((sum, row) => sum + Math.max(0, row.amount.value ?? 0), 0);
  let y = 0;
  const segments = rows.map((row, at) => {
    const previous = rows[at - 1];
    if (previous && previous.secured !== row.secured) y += STACK.rankBreak;
    const value = row.amount.value;
    const height = value === null || value <= 0 ? STACK.gapSegment : (value / total) * STACK.tall;
    const segment = { ...row, y, height: Math.max(1, height - STACK.seam) };
    y += height;
    return segment;
  });
  return { segments, height: y };
}

/** Below this frame width the wall is drawn at the frame's own width, so its labels keep their size. */
export const WALL_NARROW = 560;
const WALL_NARROWEST = 300;

/** The drawing width for a frame of `measured` pixels: the full wall, or the frame itself when narrow. */
export const wallWidth = (measured: number | null) =>
  measured !== null && measured > 0 && measured < WALL_NARROW
    ? Math.max(Math.round(measured), WALL_NARROWEST)
    : WALL.width;
