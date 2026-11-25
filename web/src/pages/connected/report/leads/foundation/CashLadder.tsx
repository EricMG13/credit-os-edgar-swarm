import { FigureTile, GapTile } from "../kit/LeadFrame";
import { Measured, Waterfall } from "../kit/marks";
import type { LeadProps } from "../types";
import { cashLadder, figureGap } from "./foundationData";
import {
  ladderKicker,
  ladderNotes,
  ladderPeriods,
  ladderReading,
  ladderRows,
  ladderTable,
} from "./ladderGeometry";

const LABEL = "Cash conversion";
const NO_PERIOD = "This page could not read a period for the ladder's rows from the handoff.";

/**
 * Tile 2: the handoff's own cash ladder, from EBITDA (Adjusted) through cash interest and taxes,
 * cash from operations, capex, free cash flow after capex, distributions and the module's own
 * after-distributions level to acquisitions: each as written, the latest period as bars, the
 * earlier of two beneath, stated gaps hatched with their reasons.
 */
export function CashLadderTile({ lead }: { lead: LeadProps }) {
  const data = cashLadder(lead.entry);
  const periods = data && ladderPeriods(data);
  if (!data || !periods)
    return (
      <GapTile span={7} label={LABEL} kicker={LABEL}>
        {figureGap(lead.entry, "ladder") ?? NO_PERIOD}
      </GapTile>
    );
  const rows = ladderRows(data, periods);
  return (
    // As tall as its content, not stretched to the tile beside it in the row.
    <div className="contents lg:[&>section]:self-start">
      <FigureTile
        props={lead}
        span={7}
        label={LABEL}
        kicker={ladderKicker(data, periods)}
        title={LABEL}
        line={data.line}
        source="cash conversion"
        notes={ladderNotes(periods)}
        table={ladderTable(data)}
      >
        <Measured fallback={640}>
          {(width) => (
            <Waterfall
              rows={rows}
              unit={data.unit}
              width={width}
              label={ladderReading(rows, data, periods)}
              legend={{
                level: `${periods.current} level`,
                step: "Deduction",
                gap: "Not stated",
                ...(periods.prior ? { prior: periods.prior } : {}),
              }}
            />
          )}
        </Measured>
      </FigureTile>
    </div>
  );
}
