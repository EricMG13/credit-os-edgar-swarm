import type { LeadProps } from "../types";
import { LeadFrame } from "../kit/LeadFrame";
import { CashLadderTile } from "./CashLadder";
import { EarningsDebtTile } from "./EarningsDebt";
import { EbitdaBridgeTile } from "./EbitdaBridge";
import { MaturityTile } from "./Maturity";
import { NetDebtTile } from "./NetDebt";
import { PeriodsGapTile } from "./Periods";
import { SegmentsTile } from "./Segments";

/**
 * CP-1 Financial foundation: earnings against debt and leverage in one composed figure, then the
 * cash conversion ladder, net debt with the pro forma a row states, the EBITDA bridge, segments and
 * the compact maturity wall (screen map, Modules > Financials). Each tile reads its own tables.
 */
export function FoundationLead(props: LeadProps) {
  return (
    <LeadFrame props={props}>
      <EarningsDebtTile lead={props} />
      <CashLadderTile lead={props} />
      <NetDebtTile lead={props} />
      <EbitdaBridgeTile lead={props} />
      <SegmentsTile lead={props} />
      <MaturityTile lead={props} />
      <PeriodsGapTile lead={props} />
    </LeadFrame>
  );
}
