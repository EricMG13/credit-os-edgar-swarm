import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { containsReference, readParagraph, readerText } from "../../publishedReport";

/** An inline source marker such as "[E3]" or "[E12, E14]": the trace carries it, the page does not. */
const MARKER = /\s*(?:\[E\d+[a-z]?(?:\s*,\s*E\d+[a-z]?)*\]|【[^】]*】)/g;

/**
 * An id the reader rule does not turn into a name: a register table or row id ("T4.18", "T2DS.1")
 * or a module code left after naming ("CP-1-GAP-12"). Text carrying one is not drawn on the page.
 */
const UNREAD_ID = /\b(?:T\d+[A-Z]*(?:\.\d+)+|CP-[A-Z0-9]+(?:-[A-Z0-9]+)*)\b/;

/**
 * A reason a module wrote, as a working page may draw it: its body without the Basis line or
 * citation marks or inline source markers, with module codes named. Null when it cites a source
 * by name, a file, a page, an id or a hash, or carries an id the page cannot name: sources and
 * machinery belong to Evidence and the trace.
 */
export function readerReason(text: string): string | null {
  const body = readParagraph(text)
    .body.replaceAll("**", "")
    .replaceAll("`", "")
    .replace(MARKER, "")
    .trim();
  if (!body || containsReference(body)) return null;
  const words = readerText(body);
  return UNREAD_ID.test(words) ? null : words;
}

const LINK = "min-h-8 max-[480px]:min-h-11";

/**
 * The one way every gap reason or note is drawn on the Overview: the module's words through
 * `readerReason`, or, where they cite a source, a link to read them in Evidence.
 */
export function Reason({
  text,
  href,
  className,
}: {
  text: string;
  href: string | undefined;
  className?: string;
}) {
  const words = readerReason(text);
  if (words !== null) return <span className={className}>{words}</span>;
  if (!href)
    return <span className={className}>The reason cites a source; read it in Evidence.</span>;
  return (
    <Button className={LINK} color="link-gray" size="sm" href={href} iconTrailing={ArrowRight}>
      Read the reason in Evidence
    </Button>
  );
}
