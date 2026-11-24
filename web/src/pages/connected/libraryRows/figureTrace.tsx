import { useCallback, useEffect, useRef, useState } from "react";
import type { Trace } from "@/pages/library/slice";
import { TraceButton } from "@/pages/library/parts/TraceControl";
import { TraceDrawer } from "@/pages/library/parts/TraceDrawer";
import {
  evidenceHref,
  getSnapshot,
  outputEntries,
  resolveEvidenceLocation,
  type CatalogueRun,
  type Snapshot,
} from "../publishedReport";
import { headlineSources } from "../reportView";
import { traceForLine } from "../ReportContent";

function metricIdentity(metric: CatalogueRun["metrics"][string] | undefined) {
  const { value = null, unit = null, period = null } = metric ?? {};
  return JSON.stringify([value, unit, period]);
}

function catalogueMetric(snapshot: Snapshot, id: string, key: string) {
  const matches = snapshot.catalogue.real.filter((item) => item.id === id);
  return matches.length === 1 ? matches[0]?.metrics[key] : undefined;
}

function resolveFigureSource(snapshot: Snapshot, catalogue: CatalogueRun, key: string) {
  const matches = Object.entries(snapshot.workspace.runs).filter(
    ([, run]) => run.folder === catalogue.id,
  );
  const [match] = matches;
  if (!match || matches.length !== 1) return null;
  const [routeKey, run] = match;
  const entries = outputEntries(snapshot, run, routeKey);
  const foundations = entries.filter((entry) => entry.selected && entry.output.module === "CP-1");
  if (foundations.length !== 1) return null;
  const source = headlineSources(foundations[0], catalogue, run.folder)[key];
  return source ? { entries, source, folder: run.folder } : null;
}

/** The handoff row a library figure is read from, loaded from the run's own report when asked. */
export async function figureSource(catalogue: CatalogueRun, key: string, signal: AbortSignal) {
  const snapshot = await getSnapshot(signal, catalogue.id);
  if (!snapshot) return null;
  if (
    metricIdentity(catalogueMetric(snapshot, catalogue.id, key)) !==
    metricIdentity(catalogue.metrics[key])
  )
    return null;
  const result = resolveFigureSource(snapshot, catalogue, key);
  if (!result) return null;
  const { entries, source, folder } = result;
  const prefix = evidenceHref(folder, "");
  if (!source.href.startsWith(prefix)) return null;
  const location = resolveEvidenceLocation(entries, source.href.slice(prefix.length));
  if (!location || location.line === undefined) return null;
  const trace = traceForLine(snapshot, location.entry, location.index, location.line);
  return trace ? { trace, href: source.href } : null;
}

type Lookup = {
  scope: string;
  key?: string;
  name?: string;
  trace?: Trace;
  href?: string;
  error?: string;
};

const NO_ROW =
  "The original source row for this figure is not available in this run’s published record.";
const NOT_LOADED = "Sources for this figure could not be loaded. Try its source control again.";

/**
 * One trace lookup for a run's row figures. `button(key, name)` is the figure's single source
 * control; `notes` draws the loading or failure sentence and the drawer once for the row.
 */
export function useFigureTrace(catalogue: CatalogueRun) {
  const scope = `${catalogue.id}:${JSON.stringify(catalogue.metrics)}`;
  const [lookup, setLookup] = useState<Lookup | null>(null);
  const controller = useRef<AbortController | null>(null);
  useEffect(
    () => () => {
      controller.current?.abort();
    },
    [scope],
  );
  const request = useCallback(
    async (key: string, name: string) => {
      controller.current?.abort();
      const own = new AbortController();
      controller.current = own;
      setLookup({ scope, key, name });
      try {
        const found = await figureSource(catalogue, key, own.signal);
        if (own.signal.aborted) return;
        setLookup(found ? { scope, ...found } : { scope, error: NO_ROW });
      } catch {
        if (!own.signal.aborted) setLookup({ scope, error: NOT_LOADED });
      }
    },
    [catalogue, scope],
  );
  const active = lookup?.scope === scope ? lookup : null;
  const button = (key: string, name: string, owner: string) => (
    <TraceButton
      label={`Show sources for ${name}, ${owner}`}
      open={() => {
        void request(key, name);
      }}
    />
  );
  const notes = (
    <>
      {active?.key && !active.trace && !active.error && (
        <p role="status" className="text-caption text-text-secondary">
          Loading sources for {active.name}…
        </p>
      )}
      {active?.error && (
        <p role="status" className="text-caption text-text-secondary">
          {active.error}
        </p>
      )}
      {active?.trace && active.href && (
        <TraceDrawer
          trace={active.trace}
          evidenceHref={active.href}
          isOpen
          onClose={() => {
            setLookup({ scope });
          }}
        />
      )}
    </>
  );
  return { button, notes };
}
