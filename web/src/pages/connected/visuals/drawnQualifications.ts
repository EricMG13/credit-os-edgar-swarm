import { containsReference, methodNote, readParagraph } from "../publishedReport";
import { items, publishedTables, record, word } from "./visualData";

/** The text blocks of the section that owns the table at `line`, when a chart may draw them. */
export function qualificationBlocks(sections: unknown, line: number) {
  const owners = items(sections)
    .map(record)
    .filter((section) =>
      items(section.blocks).some(
        (block) => record(block).type === "table" && record(block).line === line,
      ),
    );
  const owner = owners.length === 1 ? owners[0] : undefined;
  if (!owner || !word(owner.heading).startsWith("Chart data: ")) return [];
  const blocks = items(owner.blocks).map(record);
  // More than one table makes the scope of the prose ambiguous.
  if (blocks.filter((block) => block.type === "table").length !== 1) return [];
  return blocks.filter(
    (block) =>
      block.type === "text" &&
      typeof block.line === "number" &&
      Number.isSafeInteger(block.line) &&
      block.line > line &&
      !methodNote(word(block.text)),
  );
}

/** Whether the chart shows this body word for word; otherwise it shows a placeholder. */
export function chartDrawsVerbatim(body: string) {
  return body !== "" && !containsReference(body) && !/\bCP-[A-Z0-9]+\b/u.test(body);
}

/**
 * Lines of the text blocks that the module page's charts draw beside themselves
 * (`ChartQualifications`), word for word. Only a published chart with a title, a table line, a
 * drawable table and no gap reaches `ChartQualifications`; a gap draws none.
 */
export function drawnQualificationLines(output: unknown, sections: unknown): Set<number> {
  const published = record(output);
  const tables = publishedTables(sections);
  const lines = new Set<number>();
  for (const key of ["charts"]) {
    for (const raw of items(published[key])) {
      const descriptor = record(raw);
      const title = word(descriptor.title ?? descriptor.lane ?? descriptor.name);
      const line = descriptor.table;
      if (!title || typeof line !== "number" || !Number.isSafeInteger(line) || line <= 0) continue;
      if (word(descriptor.gap) || !tables.has(line)) continue;
      for (const block of qualificationBlocks(sections, line)) {
        if (chartDrawsVerbatim(readParagraph(word(block.text)).body))
          lines.add(block.line as number);
      }
    }
  }
  return lines;
}
