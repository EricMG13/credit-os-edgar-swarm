import { FileSearch02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { TraceButton } from "@/pages/library/parts/TraceControl";
import { TraceDrawer } from "@/pages/library/parts/TraceDrawer";
import type { SourcedTrace } from "@/pages/library/parts/TraceParts";
import { handoffBlockAt, traceForLine } from "../ReportContent";
import { citationsAt } from "./traceCitations";
import {
  evidenceHref,
  resolveEvidenceLocation,
  type OutputEntry,
  type Snapshot,
} from "../publishedReport";

export type PublishedTraceContext = {
  heading: string;
  statement: string;
  details: { label: string; value: string | null }[];
  qualification?: string | null;
};

type OpenTrace = (href: string, context?: PublishedTraceContext) => (() => void) | null;
const TraceContext = createContext<OpenTrace | null>(null);

export function PublishedTraceProvider({
  snapshot,
  folder,
  entries,
  route,
  children,
}: {
  snapshot: Snapshot;
  folder: string;
  entries: OutputEntry[];
  route: string;
  children: ReactNode;
}) {
  const [selection, setSelection] = useState<{ route: string; trace: SourcedTrace | null }>({
    route,
    trace: null,
  });
  if (selection.route !== route) setSelection({ route, trace: null });
  const active = selection.route === route ? selection.trace : null;
  const open = useCallback<OpenTrace>(
    (href, context) => {
      const prefix = evidenceHref(folder, "");
      if (!href.startsWith(prefix)) return null;
      const location = resolveEvidenceLocation(entries, href.slice(prefix.length));
      const line = location?.line;
      if (!location || line === undefined || !handoffBlockAt(location.entry, line)) return null;
      return () => {
        const base = traceForLine(snapshot, location.entry, location.index, line);
        const trace = base && { ...base, citations: citationsAt(snapshot, location.entry, line) };
        if (trace)
          setSelection({
            route,
            trace: context
              ? {
                  ...trace,
                  title: `Sources for ${context.heading}`,
                  heading: context.heading,
                  statement: context.statement,
                  derivation: {
                    ...trace.derivation,
                    children: [
                      ...context.details.map(({ label, value }) => ({
                        label,
                        value,
                        note: null,
                        children: [],
                      })),
                      ...trace.derivation.children,
                    ],
                  },
                  qualification:
                    [...new Set([trace.qualification, context.qualification].filter(Boolean))].join(
                      " ",
                    ) || null,
                }
              : trace,
          });
      };
    },
    [snapshot, folder, entries, route],
  );
  return (
    <TraceContext.Provider value={open}>
      {children}
      {active && (
        <TraceDrawer
          trace={active}
          evidenceHref={evidenceHref(folder, active.evidenceItem)}
          isOpen
          onClose={() => {
            setSelection({ route, trace: null });
          }}
        />
      )}
    </TraceContext.Provider>
  );
}

export function PublishedSource({
  href,
  name,
  linkLabel,
  children,
  context,
}: {
  href: string;
  name: string;
  linkLabel?: string;
  children: string;
  context?: PublishedTraceContext;
}) {
  const open = useContext(TraceContext)?.(href, context);
  return open ? (
    <TraceButton label={`Show sources for ${name}`} open={open} />
  ) : (
    <Button
      href={href}
      aria-label={linkLabel ?? children}
      color="tertiary"
      size="sm"
      iconLeading={FileSearch02}
    />
  );
}
