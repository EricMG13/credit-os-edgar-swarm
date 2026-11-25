import { breakPointView, BreakPointsTile } from "../BreakPoints";
import { downsideView, DownsideTile } from "../Downside";
import { blocked, type OutputEntry } from "../../publishedReport";
import { Bento } from "../overview/Tile";
import { withDraws } from "./draws";
import { OtherCharts } from "./written";
import { LeadGap, Trace } from "./parts";
import { IN_EVIDENCE, leadHref, readerCell } from "./read";
import type { LeadProps } from "./types";

const LADDER = "EBITDA break points";
const SCENARIOS = "Downside scenarios";

/** The first table under a heading that opens with the register id, whatever its header. */
function underId(entry: OutputEntry, id: string) {
  const opens = new RegExp(`^[*\`]*${id.replace(".", "\\.")}(?![\\w.])`, "i");
  return entry.sections
    .filter((section) => opens.test(section.heading.trim()))
    .flatMap(({ blocks }) => blocks)
    .find((block) => block.type === "table");
}

/**
 * Why the page draws no figure for a register, saying only what it checked: the store's own reason
 * when the handoff could not be read, else whether the handoff has a table under the register's id.
 */
function why(entry: OutputEntry, id: string, subject: string, table: string) {
  const stored = entry.output.parseError ? readerCell(entry.output.parseError) : "";
  if (stored && stored !== IN_EVIDENCE) return { reason: stored };
  const found = underId(entry, id);
  return found
    ? { reason: `This page could not read the ${table} table the handoff has.`, line: found.line }
    : { reason: `This page could not read ${subject} from the handoff.` };
}

/** CP-2A: how far EBITDA can fall before each limit, and every stress case side by side. */
export const DownsideLead = withDraws(
  function DownsideLead(props: LeadProps) {
    const { entry } = props;
    if (blocked(entry)) return null;
    const evidence = leadHref(props);
    const href = (line: number) => evidence(line);
    const breaks = breakPointView(entry);
    const scenarios = downsideView(entry);
    const gap = (id: string, subject: string, table: string, label: string) => {
      const { reason, line } = why(entry, id, subject, table);
      return {
        reason,
        trace: line === undefined ? undefined : <Trace href={href(line)} name={label} />,
      };
    };
    return (
      <Bento>
        {breaks ? (
          <BreakPointsTile data={breaks} href={href} span={8} />
        ) : (
          <LeadGap
            span={8}
            label={LADDER}
            title={LADDER}
            {...gap("T2DS.6", "break points", "break-point", LADDER)}
          />
        )}
        {scenarios ? (
          <DownsideTile data={scenarios} href={href} span={4} />
        ) : (
          <LeadGap
            span={4}
            label={SCENARIOS}
            title={SCENARIOS}
            {...gap("T2DS.4", "stressed metrics by scenario", "stressed-metrics", SCENARIOS)}
          />
        )}
        <OtherCharts entry={entry} href={evidence} drawn={[]} />
      </Bento>
    );
  },
  ["figures"],
);
