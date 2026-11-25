import { FileSearch02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { TextLink } from "../../run/TextLink";
import { containsReference, readParagraph, readerText, reportPath } from "../publishedReport";
import type { LibraryRun } from "./group";

/**
 * The run's selected credit-view paragraph with its one sources control; a paragraph that carries
 * a source reference is left to Evidence, and the page says so.
 */
export function CreditView({ run }: { run: LibraryRun | undefined }) {
  const lead = run?.lead;
  if (!run || !lead)
    return (
      <p className="text-small text-text-secondary">No credit view is supplied for this run.</p>
    );
  const href = `${reportPath(run.folder)}#evidence/${encodeURIComponent(lead.output)}~${lead.sha256}-${String(lead.line)}`;
  const { body } = readParagraph(lead.text);
  if (containsReference(body))
    return <TextLink href={href}>Read this credit view in Evidence</TextLink>;
  return (
    <div className="flex items-start justify-between gap-3">
      <p className="reading-copy min-w-0 text-body text-text-secondary">
        {readerText(body.replaceAll("**", "").replaceAll("`", ""))}
      </p>
      <Button
        href={href}
        aria-label="Sources for this credit view"
        color="tertiary"
        size="sm"
        iconLeading={FileSearch02}
      >
        View sources
      </Button>
    </div>
  );
}
