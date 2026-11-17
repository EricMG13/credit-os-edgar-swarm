import { expect, it } from "vitest";
import { readerText } from "./publishedReport";

// L14 (2026-11-17): a lower-case module code reads as the module's name, as its upper-case form
// does (cases in `moduleCodes.cases.json`). Each line is one case; the expected text is literal.
const cases: [string, string][] = [
  // standalone
  [
    "cp-1 does not state a single canonical figure.",
    "Financial foundation does not state a single canonical figure.",
  ],
  [
    "Blocked interface only: cp-2a is explicitly blocked.",
    "Blocked interface only: Downside is explicitly blocked.",
  ],
  ["cp-2a: covenant headroom restated", "Downside: covenant headroom restated"],
  [
    "The classifier clears cp-3 and cp-3d.",
    "The classifier clears Security selection and Market-implied risk.",
  ],
  ["cp-1's leverage is 5.2x.", "Financial foundation's leverage is 5.2x."],
  // a run of codes
  ["Read by cp-1/cp-2.", "Read by Financial foundation/Fundamental credit."],
  // bracketed: dropped after the module's own name, a name after any other words
  [
    "Financial foundation (cp-1) reports leverage of 5.2x.",
    "Financial foundation reports leverage of 5.2x.",
  ],
  ["The haircut (cp-3) holds.", "The haircut (Security selection) holds."],
  [
    "Leverage of 5.2x (cp-1) and 4.8x (cp-2).",
    "Leverage of 5.2x (Financial foundation) and 4.8x (Fundamental credit).",
  ],
  // an unknown code stays, as written
  ["cp-99 is not scheduled.", "cp-99 is not scheduled."],
  ["Checked twice (cp-99) today.", "Checked twice (cp-99) today."],
  ["xcp-1 and cp-1x are not module codes.", "xcp-1 and cp-1x are not module codes."],
  // a code inside a stored file name, path or register id stays
  [
    "Read from outputs/cp-1.md and cp-1-tables.md.",
    "Read from outputs/cp-1.md and cp-1-tables.md.",
  ],
  ["Deck (cp-1) Q3.pdf", "Deck (cp-1) Q3.pdf"],
  [
    "cp-2g-forecast-block.md is the forecast block.",
    "cp-2g-forecast-block.md is the forecast block.",
  ],
  ["See cp-2a/notes.md for the working.", "See cp-2a/notes.md for the working."],
  ["outputs/cp-1 holds the tables.", "outputs/cp-1 holds the tables."],
  ["The tdg-cp-1 pack is stored.", "The tdg-cp-1 pack is stored."],
  ["archive.cp-1 is a folder name.", "archive.cp-1 is a folder name."],
  ["See cp-2e-gap-001 for the hedge gap.", "See cp-2e-gap-001 for the hedge gap."],
];

it.each(cases)("%s", (input, expected) => {
  expect(readerText(input)).toBe(expected);
});
