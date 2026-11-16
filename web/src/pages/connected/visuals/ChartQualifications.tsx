import { TRACE_HOST } from "@/pages/library/parts/TraceControl";
import { containsReference, methodNote, readParagraph } from "../publishedReport";
import { PublishedSource } from "../report/PublishedTrace";
import { items, record, word } from "./visualData";

function qualificationBlocks(sections: unknown, line: number) {
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

export function ChartQualifications({
  category,
  sections,
  line,
  evidenceHref,
}: {
  category: string;
  sections: unknown;
  line: number;
  evidenceHref?: (line: number) => string;
}) {
  if (category !== "chart") return null;
  const passages = qualificationBlocks(sections, line).flatMap((block) => {
    const { body } = readParagraph(word(block.text));
    return body ? [{ body, line: block.line as number }] : [];
  });
  if (!passages.length) return null;
  return (
    <div className="grid gap-2" aria-label="Chart qualifications">
      {passages.map(({ body, line: at }) => (
        <div key={at} className={`${TRACE_HOST} flex items-start justify-between gap-3`}>
          <p className="max-w-prose text-small text-text-secondary">
            {containsReference(body) || /\bCP-[A-Z0-9]+\b/u.test(body)
              ? "Qualification recorded in Evidence."
              : body}
          </p>
          {evidenceHref && (
            <PublishedSource href={evidenceHref(at)} name="Chart qualification">
              Qualification source
            </PublishedSource>
          )}
        </div>
      ))}
    </div>
  );
}
