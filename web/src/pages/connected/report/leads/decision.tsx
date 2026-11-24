import type { Leads } from "./types";
import { ChangesSummaryLead } from "./changesLead";
import { CommitteeLead } from "./committee";
import { ClearanceLead } from "./validation";

/** Lead visuals of the Validation and decision stage (docs/design/screen-map.md, Modules). */
export const LEADS: Leads = {
  "CP-5": ClearanceLead,
  "CP-6": CommitteeLead,
  "CP-8": ChangesSummaryLead,
};
