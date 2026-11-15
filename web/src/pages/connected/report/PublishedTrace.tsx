import { createContext, useContext, useState, type ReactNode } from "react";
import { TraceButton } from "@/pages/library/parts/TraceControl";
import { TraceDrawer } from "@/pages/library/parts/TraceDrawer";
import type { Trace } from "@/pages/library/slice";
import { handoffBlockAt, traceForLine } from "../ReportContent";
import { evidencePath, type OutputEntry, type Snapshot } from "../publishedReport";

type OpenTrace = (href: string) => (() => void) | null;
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
  const [selection, setSelection] = useState<{ route: string; trace: Trace | null }>({
    route,
    trace: null,
  });
  if (selection.route !== route) setSelection({ route, trace: null });
  const active = selection.route === route ? selection.trace : null;
  const prefix = evidencePath(folder, "");
  const open: OpenTrace = (href) => {
    if (!href.startsWith(prefix)) return null;
    const location = /^(\d+)-(\d+)$/.exec(href.slice(prefix.length));
    if (!location) return null;
    const index = Number(location[1]);
    const line = Number(location[2]);
    const entry = entries[index];
    if (!entry || !Number.isSafeInteger(line) || line <= 0 || !handoffBlockAt(entry, line))
      return null;
    return () => {
      const trace = traceForLine(snapshot, entry, index, line);
      if (trace) setSelection({ route, trace });
    };
  };
  return (
    <TraceContext.Provider value={open}>
      {children}
      {active && (
        <TraceDrawer
          trace={active}
          evidenceHref={evidencePath(folder, active.evidenceItem)}
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
}: {
  href: string;
  name: string;
  linkLabel?: string;
  children: string;
}) {
  const open = useContext(TraceContext)?.(href);
  return open ? (
    <TraceButton label={`Show sources for ${name}`} open={open} />
  ) : (
    <a
      href={href}
      aria-label={linkLabel}
      className="text-small whitespace-nowrap text-action underline"
    >
      {children}
    </a>
  );
}
