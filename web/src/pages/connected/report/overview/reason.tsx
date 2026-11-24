import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { containsReference, readParagraph, readerText } from "../../publishedReport";

/**
 * A reason a module wrote, as a working page may draw it: its body without the Basis line or
 * citation marks, with module codes named. Null when it cites a source by name, a file, a page,
 * an id or a hash: sources belong to Evidence and the trace.
 */
export function readerReason(text: string): string | null {
  const body = readParagraph(text).body.replaceAll("**", "").replaceAll("`", "").trim();
  if (!body) return null;
  return containsReference(body) ? null : readerText(body);
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
