import { GapNote } from "../overview/Tile";
import type { LedgerItem } from "./model";

/** One short list of the ledger: what was added or what closed, each in the module's words. */
export function LedgerList({ label, items }: { label: string; items: readonly LedgerItem[] }) {
  return items.length === 0 ? (
    <GapNote>None recorded</GapNote>
  ) : (
    <ul aria-label={label} className="grid gap-3">
      {items.map(({ text, note, line }) => (
        <li key={line} className="grid gap-0.5">
          <span className="reading-copy text-small text-text-primary">{text}</span>
          {note && <span className="text-caption text-text-secondary">Closed by: {note}</span>}
        </li>
      ))}
    </ul>
  );
}
