import { breakPointView, BreakPointsTile } from "../BreakPoints";
import { downsideView, DownsideTile } from "../Downside";
import { blocked } from "../../publishedReport";
import { Bento } from "../overview/Tile";
import { withDraws } from "./draws";
import { LeadGap } from "./parts";
import { leadHref } from "./read";
import type { LeadProps } from "./types";

const LADDER = "EBITDA break points";
const SCENARIOS = "Downside scenarios";

/** CP-2A: how far EBITDA can fall before each limit, and every stress case side by side. */
export const DownsideLead = withDraws(
  function DownsideLead(props: LeadProps) {
    const { entry } = props;
    if (blocked(entry)) return null;
    const evidence = leadHref(props);
    const href = (line: number) => evidence(line);
    const breaks = breakPointView(entry);
    const scenarios = downsideView(entry);
    return (
      <Bento>
        {breaks ? (
          <BreakPointsTile data={breaks} href={href} span={8} />
        ) : (
          <LeadGap
            span={8}
            label={LADDER}
            kicker="Break-point ladder"
            title="Fall in EBITDA that reaches each break point"
            reason="The handoff writes its break points in prose, not as a table."
          />
        )}
        {scenarios ? (
          <DownsideTile data={scenarios} href={href} span={4} />
        ) : (
          <LeadGap
            span={4}
            label={SCENARIOS}
            kicker="Scenario comparison"
            title="Stressed leverage, cover and cash flow by case"
            reason="The handoff has no stressed-metrics table with one column per scenario."
          />
        )}
      </Bento>
    );
  },
  ["figures"],
);
