import { expect, it } from "vitest";
import type { OutputEntry } from "../../publishedReport";
import type { ReportView } from "../../reportView";
import { basisNotes, moduleSource } from "./figureData";

const blockedEntry = (reason: string): OutputEntry => ({
  output: {
    id: "CP-2-1",
    module: "CP-2",
    label: "CP-2",
    href: "CP-2.md",
    sha256: "b".repeat(64),
    state: { established: false, declared: null },
  },
  sections: [
    { heading: "Findings", level: 2, line: 1, blocks: [] },
    {
      heading: "Bottom line",
      level: 3,
      line: 2,
      blocks: [{ type: "text", line: 3, end: 4, text: reason }],
    },
  ],
  selected: true,
});

const view = (entry: OutputEntry) => ({ entries: [entry] }) as unknown as ReportView;

it("gives a blocked module's reason without its Basis line, codes named", () => {
  const entry = blockedEntry("Not assessable: CP-1C did not run.\nBasis: notes_2024.pdf page 88");
  expect(moduleSource(view(entry), "CP-2", "Credit view").reason).toBe(
    "Not assessable: Peer benchmark did not run.",
  );
});

it("sends a blocked reason that cites a source to Evidence", () => {
  const entry = blockedEntry("Not assessable: see notes_2024.pdf page 88.");
  expect(moduleSource(view(entry), "CP-2", "Credit view").reason).toBe(
    "Not assessable; the reason is recorded in Evidence.",
  );
});

it("draws basis notes in the reader's words, each once, none that cites a source", () => {
  const table = {
    headers: ["Period", "Value", "Basis and limitation"],
    rows: [
      ["FY2023", "1", "Per **CP-1C**."],
      ["FY2024", "2", "Per **CP-1C**."],
      ["FY2025", "3", "As in notes_2024.pdf page 88."],
    ],
  };
  expect(basisNotes(table as never)).toEqual(["Per Peer benchmark."]);
});
