import { breakPointView, BreakPointsTile } from "../BreakPoints";
import { downsideView, DownsideTile } from "../Downside";
import { Bento } from "../overview/Tile";
import { LeadBlocked, LeadGap, NEEDS } from "./parts";
import { blockedReason, leadHref } from "./read";
import type { LeadProps } from "./types";

const LADDER = "EBITDA break points";
const SCENARIOS = "Downside scenarios";
const IN_EVIDENCE = "Not assessable; the reason is recorded in Evidence.";

/** CP-2A: how far EBITDA can fall before each limit, and every stress case side by side. */
export function DownsideLead(props: LeadProps) {
  const { entry } = props;
  const evidence = leadHref(props);
  const href = (line: number) => evidence(line);
  const reason = blockedReason(entry);
  if (reason !== null || entry.output.state?.established === false)
    return (
      <Bento>
        <LeadBlocked span={12} label={LADDER} title={LADDER} reason={reason ?? IN_EVIDENCE} />
      </Bento>
    );
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
          needs={NEEDS.method}
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
          needs={NEEDS.method}
        />
      )}
    </Bento>
  );
}
