import { TRACE_HOST } from "@/pages/library/parts/TraceControl";
import { containsReference, readParagraph } from "../publishedReport";
import { PublishedSource } from "../report/PublishedTrace";
import { qualificationBlocks } from "./drawnQualifications";
import { word } from "./visualData";

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
