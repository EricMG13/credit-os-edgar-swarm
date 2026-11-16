import { moduleTitle, type DocumentRecord } from "../api";

export const PURPOSES = {
  research: "No market view (research)",
  primary: "New issue (primary)",
  secondary: "Trading (secondary)",
  earnings: "Earnings update",
};
export const LEVELS = { basic: "Basic", standard: "Standard", advanced: "Advanced" };

/** The stored file name: the reader's own name for it, without the ingest suffix. */
export function storedName({ source }: DocumentRecord) {
  return source.replace(/(\.html?)\.jsonl$/i, "$1");
}

export function documentDescription(doc: DocumentRecord) {
  return [
    doc.kind.replaceAll("_", " "),
    doc.period_end && `period ends ${doc.period_end}`,
    doc.executed === true ? "executed" : doc.executed === false ? "draft" : "",
    doc.signal,
  ]
    .filter(Boolean)
    .join(" · ");
}

/** Replaces each whole module code the page knows with the module's name; others stay. */
export function plainText(text: string) {
  return text.replace(/\bCP-[A-Z0-9]+\b/g, (code) => moduleTitle(code));
}

/** A lookup line without the launcher's label or its flag hint. */
export function lookupSentence(line: string) {
  return plainText(
    line.replace(/^\s*[A-Z][a-z]*:\s+/, "").replace(/;\s*--web-lookup on forces it\s*$/, ""),
  );
}
