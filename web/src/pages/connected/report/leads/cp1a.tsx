import { blocked, type Table } from "../../publishedReport";
import { writtenTable } from "../Downside";
import { Bento, Tile } from "../overview/Tile";
import { withDraws } from "./draws";
import { LaneTile, LeadGap, MapTile, Prose, TableRegion, Trace } from "./parts";
import { eventsOf, leadHref, mapOf, sectionParagraphs } from "./read";
import type { LeadProps } from "./types";

type Href = (line?: number) => string;

function Transaction({ entry, href }: { entry: LeadProps["entry"]; href: Href }) {
  const label = "Transaction and new debt";
  const paragraphs = sectionParagraphs(entry, "Transaction summary and new debt issues");
  if (!paragraphs.length)
    return (
      <LeadGap
        span={6}
        label={label}
        title={label}
        reason="This page could not read a transaction summary from the handoff."
      />
    );
  return (
    <Tile span={6} label={label} title={label} className="w-full self-start">
      <Prose label={label} paragraphs={paragraphs} href={href} />
    </Tile>
  );
}

const MIX = "Revenue mix";

/** The module's revenue and business mix register: the one table under its heading, as written. */
function mixTable(entry: LeadProps["entry"]) {
  const tables = entry.sections
    .filter((section) => /^revenue_business_mix\b/i.test(section.heading.trim()))
    .flatMap(({ blocks }) => blocks)
    .filter((block): block is Table => block.type === "table");
  return tables.length === 1 ? tables[0] : undefined;
}

/** The revenue mix as the module's register writes it, cell by cell, in a small table tile. */
function RevenueMix({ entry, href }: { entry: LeadProps["entry"]; href: Href }) {
  const register = mixTable(entry);
  const table = register ? writtenTable(register, (line) => href(line)) : undefined;
  if (!register || !table)
    return (
      <LeadGap
        span={4}
        label={MIX}
        title={MIX}
        reason="This page could not read a revenue mix from the handoff."
      />
    );
  return (
    <Tile
      span={4}
      label={MIX}
      title={MIX}
      trace={<Trace href={href(register.line)} name={MIX} />}
      className="w-full self-start"
    >
      <TableRegion label={MIX} table={table} />
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
          title="Operating model to credit"
          absent="This page could not read an operating-model map from the handoff."
        />
        <RevenueMix entry={entry} href={href} />
        <MapTile
          map={mapOf(entry, "ownership and control")}
          href={href}
          span={6}
          label="Ownership and control"
          title="Ownership and control"
          absent="This page could not read an ownership and control map from the handoff."
        />
        <Transaction entry={entry} href={href} />
        {/* Third rank: a half-width tile after the maps and the passage, sized to its rows. */}
        <LaneTile
          lane={eventsOf(entry, "Issuer history")}
          span={6}
          label="Issuer history"
          title="Issuer history"
          href={href}
        />
      </Bento>
    );
  },
  ["maps", "events"],
);
