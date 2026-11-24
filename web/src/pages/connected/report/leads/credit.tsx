import { BusinessLead } from "./cp1a";
import { CreditLead } from "./cp2";
import { LiquidityLead } from "./cp2d";
import { RatingsLead } from "./cp2h";
import { ResearchLead } from "./cpdr";
import type { Leads } from "./types";

/** Lead visuals of this stage's modules (docs/design/screen-map.md, Modules). */
export const LEADS: Leads = {
  "CP-1A": BusinessLead,
  "CP-DR": ResearchLead,
  "CP-2": CreditLead,
  "CP-2D": LiquidityLead,
  "CP-2H": RatingsLead,
};
