import type { ReactNode } from "react";
import { GapNote } from "../../overview/Tile";
import { FigureTile, GapTile } from "../kit/LeadFrame";
import { Measured, Waterfall } from "../kit/marks";
import type { LeadProps } from "../types";
import { bridgeDrawn, bridgeReading, bridgeRows, bridgeTable, stepWord } from "./bridgeGeometry";
import { ebitdaBridge, figureGap } from "./foundationData";

const LABEL = "EBITDA bridge";
const TITLE = "Reported to adjusted EBITDA";
/** As tall as its content, not stretched to the tile beside it in the row. */
const AsTall = ({ children }: { children: ReactNode }) => (
  <div className="contents lg:[&>section]:self-start">{children}</div>
);

const NOT_ADDING = "The bridge steps do not add up to the closing figure.";

/**
 * Tile 4: the stated EBITDA bridge, opening through each stated step to the closing figure, on an
 * axis cut where the values sit high (marked on the totals). A bridge whose stated amounts do not
 * add up is not drawn as a bridge; its amounts stay in the table view.
 */
export function EbitdaBridgeTile({ lead }: { lead: LeadProps }) {
  const data = ebitdaBridge(lead.entry);
  if (!data)
    return (
      <GapTile span={6} label={LABEL} kicker={LABEL}>
        {figureGap(lead.entry, "bridge") ?? "The EBITDA bridge is not in the handoff."}
      </GapTile>
    );
  const common = {
    props: lead,
    span: 6 as const,
    label: LABEL,
    kicker: `EBITDA bridge · ${data.unit}`,
    title: TITLE,
    line: data.tableLine,
    source: "the EBITDA bridge",
    table: bridgeTable(data),
  };
  if (!bridgeDrawn(data))
    return (
      <AsTall>
        <FigureTile {...common}>
          <GapNote>{NOT_ADDING}</GapNote>
        </FigureTile>
      </AsTall>
    );
  const rows = bridgeRows(data);
  const step = stepWord(data);
  return (
    <AsTall>
      <FigureTile {...common}>
        <Measured fallback={560}>
          {(width) => (
            <Waterfall
              rows={rows}
              unit={data.unit}
              width={width}
              axisStart="auto"
              label={bridgeReading(rows, data.unit)}
              legend={{
                level: "Opening",
                closing: "Closing",
                gap: "Not stated",
                ...(step ? { step } : {}),
              }}
            />
          )}
        </Measured>
      </FigureTile>
    </AsTall>
  );
}
