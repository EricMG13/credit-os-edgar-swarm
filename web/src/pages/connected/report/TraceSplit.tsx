import { Button } from "@/components/base/buttons/button";
import {
  CitedSources,
  TraceBasis,
  TraceClaim,
  TraceSourcePassage,
} from "@/pages/library/parts/TraceParts";
import { DerivationTree } from "@/pages/library/parts/DerivationTree";
import type { TreeNode } from "@/pages/library/slice";
import { ArrowRight } from "@untitledui/icons";
import { traceForLine } from "../ReportContent";
import type { OutputEntry, PublishedRun, Snapshot } from "../publishedReport";
import { Bento, Tile } from "./overview/Tile";
import { heading } from "../layout";

function referencedText(node: TreeNode): string {
  return [node.label, node.value, node.note, ...node.children.map(referencedText)]
    .filter(Boolean)
    .join("\n");
}

function namesSource(references: string, name: string) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (
    Boolean(name) &&
    new RegExp(`(?:^|[^\\p{L}\\p{N}._/-])${escaped}(?![\\p{L}\\p{N}._/-])`, "u").test(references)
  );
}

/**
 * The trace asked for, at the top of Evidence: the claim on the left, the passage it rests on with
 * its location on the right, then how it was derived and the supplied files the derivation names.
 * It draws the same `Trace` the drawer draws, so the two cannot disagree.
 */
export function TraceSplit({
  snapshot,
  run,
  entry,
  index,
  line,
}: {
  snapshot: Snapshot;
  run: PublishedRun;
  entry: OutputEntry;
  index: number;
  line: number;
}) {
  const trace = traceForLine(snapshot, entry, index, line);
  if (!trace) return null;
  const references = referencedText(trace.derivation);
  const sources = [
    ...run.evidence.sources,
    ...run.evidence.unused,
    ...run.evidence.unrecorded,
  ].filter((source) => namesSource(references, source.name));
  return (
    <>
      <Bento>
        <Tile span={7} label="The claim" kicker={trace.subtitle} title={trace.heading}>
          <TraceClaim trace={trace} />
          <TraceBasis trace={trace} />
        </Tile>
        <Tile span={5} label="The source" kicker="What it rests on">
          <TraceSourcePassage trace={trace} />
          <CitedSources links={trace.sourceLinks ?? []} />
        </Tile>
      </Bento>
      <div className={`grid min-w-0 gap-4 ${sources.length ? "lg:grid-cols-[3fr_2fr]" : ""}`}>
        <section className="grid min-w-0 content-start gap-3 border-t border-border-hairline pt-5">
          <h3 className={heading}>Derivation</h3>
          <DerivationTree node={trace.derivation} />
        </section>
        {sources.length > 0 && (
          <section className="grid min-w-0 content-start gap-3 border-t border-border-hairline pt-5">
            <h3 className={heading}>Source records</h3>
            <ul className="divide-y divide-border-hairline">
              {sources.map(({ name, documentDate, type, sha256 }) => (
                <li key={name} className="grid gap-1 py-2">
                  <strong className="text-sm wrap-anywhere">{name}</strong>
                  <p className="text-sm text-text-secondary">{type || "Document type n.a."}</p>
                  <p className="text-sm text-text-secondary">
                    {documentDate || "Document date n.a."}
                  </p>
                  {sha256 && (
                    <code className="font-mono text-mono wrap-anywhere text-text-tertiary">
                      {sha256}
                    </code>
                  )}
                </li>
              ))}
            </ul>
            <Button
              className="w-fit"
              href={`#evidence/sources/${encodeURIComponent(entry.output.module)}`}
              color="link-gray"
              size="sm"
              iconTrailing={ArrowRight}
            >
              Open Sources
            </Button>
          </section>
        )}
      </div>
    </>
  );
}
