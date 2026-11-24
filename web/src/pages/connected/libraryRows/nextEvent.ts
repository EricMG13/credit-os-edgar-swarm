import { useEffect, useState } from "react";
import { getSnapshot, outputEntries, type Snapshot } from "../publishedReport";
import { buildCalendar, upcomingCalendarRows } from "../report/Calendar";

export type NextEvent = { date: string; name: string; href: string };

/**
 * The first dated event after the run's as-of date, by the Calendar's own reader: the date as the
 * module wrote it, the event name as the Calendar draws it, and the row's evidence link. Nothing
 * when the run states no upcoming event or no as-of date.
 */
export function nextDatedEvent(snapshot: Snapshot, folder: string): NextEvent | "none" | "unknown" {
  const found = Object.entries(snapshot.workspace.runs).find(([, run]) => run.folder === folder);
  if (!found) return "unknown";
  const [routeKey, run] = found;
  const { rows } = buildCalendar(outputEntries(snapshot, run, routeKey), folder);
  // Without a readable as-of date nothing can be called upcoming: that is not "no event".
  const upcoming = upcomingCalendarRows(rows, run.asOf);
  if (upcoming === null) return "unknown";
  const first = upcoming[0];
  const date = first?.cells[0];
  const name = first?.cells[3];
  return first && date && name ? { date, name, href: first.href } : "none";
}

export type NextEventState =
  | { status: "idle" | "loading" | "none" | "unknown" | "failed" }
  | { status: "found"; event: NextEvent };

/** The run's next dated event, read from its scoped report once `enabled` (the row is opened). */
export function useNextEvent(folder: string | undefined, enabled: boolean): NextEventState {
  const [state, setState] = useState<{ folder: string; value: NextEventState } | null>(null);
  useEffect(() => {
    if (!enabled || !folder) return;
    const controller = new AbortController();
    void getSnapshot(controller.signal, folder)
      .then((snapshot) => {
        const event = snapshot ? nextDatedEvent(snapshot, folder) : "unknown";
        return typeof event === "string"
          ? ({ status: event } as const)
          : ({ status: "found", event } as const);
      })
      .catch(() => ({ status: "failed" }) as const)
      .then((value) => {
        if (!controller.signal.aborted) setState({ folder, value });
      });
    return () => {
      controller.abort();
    };
  }, [folder, enabled]);
  if (!enabled || !folder) return { status: "idle" };
  return state?.folder === folder ? state.value : { status: "loading" };
}
