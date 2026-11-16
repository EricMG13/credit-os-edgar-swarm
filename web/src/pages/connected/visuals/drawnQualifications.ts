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
 * The chart descriptors (`charts` and `chartGaps`) that reach `ChartQualifications`: a published
 * chart with a title, a table line, a drawable table and no gap reason. `LegacyVisuals` draws
 * qualifications only for these, and `drawnQualificationLines` hides from the findings only the
 * text these draw, so the two cannot disagree.
 */
export function chartsWithQualifications(output: unknown, sections: unknown) {
  const published = record(output);
  const tables = publishedTables(sections);
  return ["charts", "chartGaps"].flatMap((key) =>
    items(published[key])
      .map(record)
      .filter((descriptor) => {
        const title = word(descriptor.title ?? descriptor.lane ?? descriptor.name);
        const line = descriptor.table;
        return (
          title !== "" &&
          typeof line === "number" &&
          line > 0 &&
          !word(descriptor.gap) &&
          tables.has(line)
        );
      }),
  );
}

/**
 * Lines of the text blocks that the module page's charts draw beside themselves
 * (`ChartQualifications`), word for word.
 */
export function drawnQualificationLines(output: unknown, sections: unknown): Set<number> {
  const lines = new Set<number>();
  for (const descriptor of chartsWithQualifications(output, sections)) {
    for (const block of qualificationBlocks(sections, descriptor.table as number)) {
      if (chartDrawsVerbatim(readParagraph(word(block.text)).body)) lines.add(block.line as number);
    }
  }
  return lines;
}
