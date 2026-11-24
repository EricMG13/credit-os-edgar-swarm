import { containsReference, readerText } from "../../../publishedReport";

/** What a working page says in place of handoff text that names a source or a register entry. */
export const IN_EVIDENCE = "Detail is in Evidence.";

// Register and calculation identifiers the library's own `containsReference` does not catch: `T4.4`,
// `T5B.5`, `T1D.2`, `TL10.1`, a calculation or driver id (`C07`, `D14`), the words "calculation C07".
const IDENTIFIER = /\bT[A-Z]*\d+[A-Z]?\.\d+\b|\b[CD]\d{2}\b|\bcalculations? [A-Z]\d+\b/;

/** True when the text names a source, a register entry or a calculation: it belongs in Evidence. */
export const namesSource = (text: string) => containsReference(text) || IDENTIFIER.test(text);

/**
 * Handoff text for a working page: reader wording with module codes as names, or "Detail is in
 * Evidence." when it names a source. Every handoff sentence a lead draws goes through this.
 */
export function safeText(text: string) {
  const trimmed = text.trim();
  return namesSource(trimmed) ? IN_EVIDENCE : readerText(trimmed);
}
