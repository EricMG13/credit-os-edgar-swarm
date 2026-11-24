import { citedSourceNames } from "@/pages/connected/sourceFiles";
import type { Trace } from "../slice";

export const CAPTION = "text-caption font-medium text-text-tertiary";

const MISSING_BASIS = "Basis was not recorded for this item";

/** The basis line of a trace: what the derivation recorded under "Basis", or that none was recorded. */
export function basisOf(trace: Trace) {
  for (const { label, value } of trace.derivation.children) {
    if (label === "Basis" && value) return { kind: "recorded", text: value } as const;
    if (label === MISSING_BASIS) return { kind: "missing" } as const;
  }
  return null;
}

/** The claim a trace supports, with the qualification the handoff attached to it. */
export function TraceClaim({ trace }: { trace: Trace }) {
  return (
    <div className="flex min-w-0 flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <span className={CAPTION}>The claim</span>
        <p className="reading-copy text-body wrap-anywhere text-text-primary">{trace.statement}</p>
      </div>
      {trace.qualification === null ? null : (
        <div className="flex flex-col gap-1.5">
          <span className={CAPTION}>Qualification</span>
          <p className="reading-copy text-small wrap-anywhere text-text-secondary">
            {trace.qualification}
          </p>
        </div>
      )}
    </div>
  );
}

/** The passage the claim rests on and where it was read; with `gap`, the gap state when the handoff recorded none. */
export function TraceSourcePassage({ trace, gap = false }: { trace: Trace; gap?: boolean }) {
  if (trace.excerpt === null) {
    // Only a page that holds the handoff line can say none was recorded; a trace that carries no
    // passage by design (a Model item, a confidence fallback) says nothing.
    if (!gap) return null;
    return (
      <div className="flex min-w-0 flex-col gap-1.5">
        <span className={CAPTION}>Source</span>
        <p className="gap-hatch rounded-ds-sm border border-dashed border-border-gap px-3 py-4 text-small text-gap-text">
          No source passage was recorded for this item.
        </p>
      </div>
    );
  }
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <span className={CAPTION}>Source excerpt</span>
      <blockquote className="reading-copy rounded-ds-sm border-l-2 border-action bg-surface-subtle px-4 py-3 text-small wrap-anywhere text-text-primary">
        {trace.excerpt.quote}
      </blockquote>
      <span className="font-mono text-mono wrap-anywhere text-text-tertiary">
        {trace.excerpt.source}
      </span>
    </div>
  );
}

/** The basis line in words; a missing one in the gap treatment; nothing where the trace carries no basis node. */
export function TraceBasis({ trace }: { trace: Trace }) {
  const basis = basisOf(trace);
  if (basis === null) return null;
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <span className={CAPTION}>Basis</span>
      {basis.kind === "recorded" ? (
        <p className="reading-copy text-small wrap-anywhere whitespace-pre-line text-text-secondary">
          {basis.text}
        </p>
      ) : (
        <p className="gap-hatch rounded-ds-sm border border-dashed border-border-gap px-3 py-2 text-small text-gap-text">
          {MISSING_BASIS}
        </p>
      )}
    </div>
  );
}

/** The supplied files a trace cites, named with their cited pages as plain text: never a link (decision 9). */
export function CitedSources({ links }: { links: readonly { href: string }[] }) {
  const names = citedSourceNames(links);
  if (names.length === 0) return null;
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <span className={CAPTION}>Cited sources</span>
      <ul className="grid gap-1 text-small text-text-secondary">
        {names.map(({ path, text }) => (
          <li key={path} className="wrap-anywhere">
            {text}
          </li>
        ))}
      </ul>
      {links.some(({ href }) => href.includes("?page=")) && (
        <p className="text-caption text-text-tertiary">
          Pages follow the source supplied to this run and may differ from the filing’s printed
          pages.
        </p>
      )}
    </div>
  );
}
