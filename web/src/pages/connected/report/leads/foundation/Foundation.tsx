import { figureSource } from "../../overview/figureData";
import { GapTile, LeadFrame } from "../kit/LeadFrame";
import type { LeadProps } from "../types";
import { CashLadderTile } from "./CashLadder";
import { EarningsDebtTile } from "./EarningsDebt";
import { EbitdaBridgeTile } from "./EbitdaBridge";
import { figureGap, statedPeriods, type Figure } from "./foundationData";
import { MaturityTile } from "./Maturity";
import { NetDebtTile } from "./NetDebt";
import { PeriodsTile } from "./Periods";
import { SegmentsTile } from "./Segments";

const FIGURES: readonly Figure[] = ["earnings", "ladder", "netDebt", "bridge", "segments"];

/** True when the handoff carries no figure this lead can draw: every tile would be its gap. */
function nothingToDraw(props: LeadProps) {
  return (
    FIGURES.every((figure) => figureGap(props.entry, figure) !== null) &&
    figureSource(props.view, "CP-1", "Debt maturities", "Financial foundation").state === "gap" &&
    statedPeriods(props.entry).labels.length === 0
  );
}

/**
 * CP-1 Financial foundation: earnings against debt and leverage in one composed figure, then the
 * cash conversion ladder beside net debt, the EBITDA bridge beside segments, and the compact
 * maturity wall beside the periods the figures cover (screen map, Modules > Financials). Each tile
 * reads its own tables and is as tall as its content; a handoff with no drawable figure draws one
 * gap, not seven.
 */
export function FoundationLead(props: LeadProps) {
  return (
    <LeadFrame props={props}>
      {nothingToDraw(props) ? (
        <GapTile span={12} label="Financial foundation" kicker="Financial foundation">
          Financial foundation states no figure this lead can draw.
        </GapTile>
      ) : (
        <>
          <EarningsDebtTile lead={props} />
          <CashLadderTile lead={props} />
          <NetDebtTile lead={props} />
          <EbitdaBridgeTile lead={props} />
          <SegmentsTile lead={props} />
          <MaturityTile lead={props} />
          {/* As tall as its content, not stretched to the maturity wall beside it. */}
          <div className="contents lg:[&>section]:self-start">
            <PeriodsTile lead={props} />
          </div>
        </>
      )}
    </LeadFrame>
  );
}

/**
 * The kinds the lead draws itself, so the module frame does not draw them again: the lead draws
 * the maturity wall (the module's typed figure) as its own tile.
 */
FoundationLead.draws = ["figures"] as const satisfies readonly ("figures" | "events" | "maps")[];
