import { Reason, readerReason } from "./reason";

/**
 * A note a figure draws: an optional lead the page writes ("FY2027: "), then the module's words,
 * closed with `end` when the page composed the sentence. `line` is where the handoff wrote them.
 */
export type Note = { lead?: string; text: string; line?: number; end?: string };

/** Where a note's reason is read in Evidence, by the handoff line it was written on. */
export type NoteHref = (line?: number) => string | undefined;

const sentence = (words: string, end: string) =>
  end && !/[.!?]$/.test(words) ? words + end : words;

/** One note: the lead and the module's words as one sentence, or the lead and a link to Evidence. */
export function NoteText({ note, href }: { note: Note; href: NoteHref }) {
  const words = readerReason(note.text);
  if (words !== null) return <>{`${note.lead ?? ""}${sentence(words, note.end ?? "")}`}</>;
  return (
    <>
      {note.lead}
      <Reason text={note.text} href={href(note.line)} />
    </>
  );
}

/** The notes under a figure, each through the reader rule, set apart by a hairline. */
export function ReasonNotes({ notes, href }: { notes: readonly Note[]; href: NoteHref }) {
  if (!notes.length) return null;
  return (
    <ul className="flex flex-col gap-1.5 border-t border-border-hairline pt-3 text-caption font-normal text-text-secondary">
      {notes.map((note, at) => (
        <li key={at} className="wrap-anywhere">
          <NoteText note={note} href={href} />
        </li>
      ))}
    </ul>
  );
}

const GAP_WORD = /^(Not (?:supplied|calculated))\b/;

/** The module's own word for a cell with no figure: "Not calculated", "n.m.", or "Not supplied". */
export function gapWord(text: string) {
  const trimmed = text.trim();
  return GAP_WORD.exec(trimmed)?.[1] ?? (trimmed || "Not supplied");
}

/** The gap word as a reading says it mid-sentence: "not calculated"; any other word as written. */
export const gapReading = (text: string) => {
  const word = gapWord(text);
  return GAP_WORD.test(word) ? word.toLowerCase() : word;
};

/** Plain notes (a table's own basis notes) as notes with no lead. */
export const plainNotes = (texts: readonly string[]): Note[] => texts.map((text) => ({ text }));
