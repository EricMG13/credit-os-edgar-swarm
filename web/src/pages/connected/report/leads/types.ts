import type { FC } from "react";
import type { OutputEntry, PublishedRun, Snapshot } from "../../publishedReport";
import type { ReportView } from "../../reportView";

/** What a module's lead visual is given: the run, and the module's own selected output. */
export interface LeadProps {
  snapshot: Snapshot;
  run: PublishedRun;
  view: ReportView;
  entry: OutputEntry;
  entryIndex: number;
}

/** A stage's lead visuals, keyed by module code ("CP-1"). A module without one draws none. */
export type Leads = Record<string, FC<LeadProps>>;
