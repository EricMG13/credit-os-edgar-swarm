import { blocked } from "../../publishedReport";
import { Bento, Tile } from "../overview/Tile";
import { withDraws } from "./draws";
import { LaneTile, LeadGap, MapTile, Prose } from "./parts";
import { eventsOf, leadHref, mapOf, sectionParagraphs } from "./read";
import type { LeadProps } from "./types";

function Transaction({
  entry,
  href,
}: {
  entry: LeadProps["entry"];
  href: (line?: number) => string;
}) {
  const label = "Transaction and new debt";
  const paragraphs = sectionParagraphs(entry, "Transaction summary and new debt issues");
  if (!paragraphs.length)
    return (
      <LeadGap
        span={6}
        label={label}
        title={label}
        reason="The handoff writes no transaction summary."
      />
    );
  return (
    <Tile span={6} label={label} title={label} className="w-full self-start">
      <Prose label={label} paragraphs={paragraphs} href={href} />
    </Tile>
  );
}

/** CP-1A: what the business is, who controls it, and what the deal changed. */
export const BusinessLead = withDraws(
  function BusinessLead(props: LeadProps) {
    const { entry } = props;
    if (blocked(entry)) return null;
    const href = leadHref(props);
    return (
      <Bento>
        <MapTile
          map={mapOf(entry, "operating model to credit")}
          href={href}
          span={8}
          label="Operating model to credit"
          kicker="Operating model"
          title="How the operating model reaches the credit"
          absent="This handoff has no operating-model map."
        />
        <LeadGap
          span={4}
          label="Revenue mix"
          title="Revenue mix"
          reason="This handoff has no revenue-mix table."
        />
        <MapTile
          map={mapOf(entry, "ownership and control")}
          href={href}
          span={6}
          label="Ownership and control"
          title="Who owns and controls the issuer"
          absent="This handoff has no ownership and control map."
        />
        <Transaction entry={entry} href={href} />
        <LaneTile
          lane={eventsOf(entry, "Issuer history")}
          span={12}
          label="Issuer history"
          title="Issuer history"
          href={href}
        />
      </Bento>
    );
  },
  ["maps", "events"],
);
