import { Bento, Tile } from "../overview/Tile";
import {
  DatedList,
  edgeTable,
  LeadBlocked,
  LeadFigure,
  LeadGap,
  NEEDS,
  NodeList,
  Prose,
  Trace,
} from "./parts";
import { blockedState, eventsOf, leadHref, mapOf, sectionParagraphs } from "./read";
import type { LeadProps } from "./types";

function MapTile({
  entry,
  href,
  name,
  span,
  label,
  kicker,
  title,
  absent,
  note,
}: {
  entry: LeadProps["entry"];
  href: (line?: number) => string;
  name: string;
  span: 6 | 8;
  label: string;
  kicker?: string;
  title: string;
  absent: string;
  note?: string;
}) {
  const map = mapOf(entry, name);
  if (map.state !== "ready")
    return (
      <LeadGap
        span={span}
        label={label}
        kicker={kicker}
        title={title}
        reason={map.state === "gap" ? map.reason : absent}
      />
    );
  return (
    <LeadFigure
      span={span}
      label={label}
      kicker={kicker}
      title={title}
      trace={<Trace href={href(map.line)} name={label} />}
      figure={<NodeList label={label} edges={map.edges} href={href} />}
      table={edgeTable(map.edges, href)}
      notes={note ? [note] : undefined}
    />
  );
}

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
    <Tile span={6} label={label} title={label}>
      <Prose label={label} paragraphs={paragraphs} href={href} />
      <p className="text-caption text-text-secondary">
        A list of new debt by instrument, date and amount needs a typed table in the handoff.
      </p>
    </Tile>
  );
}

/** CP-1A: what the business is, who controls it, and what the deal changed. */
export function BusinessLead(props: LeadProps) {
  const { entry } = props;
  const href = leadHref(props);
  const stopped = blockedState(entry);
  if (stopped)
    return (
      <Bento>
        <LeadBlocked
          span={12}
          label="Business and governance"
          title="Business and governance"
          reason={stopped.reason}
        />
      </Bento>
    );
  const history = eventsOf(entry, "Issuer history") ?? [];
  return (
    <Bento>
      <MapTile
        entry={entry}
        href={href}
        name="operating model to credit"
        span={8}
        label="Operating model to credit"
        kicker="Operating model"
        title="How the operating model reaches the credit"
        absent="This handoff has no operating-model map."
        note="Nodes are drawn as the module wrote them; their role (segment, cash driver, credit effect) is not typed in the handoff."
      />
      <LeadGap
        span={4}
        label="Revenue mix"
        title="Revenue mix"
        reason="This handoff has no revenue-mix table."
        needs={NEEDS.method}
      />
      <MapTile
        entry={entry}
        href={href}
        name="ownership and control"
        span={6}
        label="Ownership and control"
        title="Who owns and controls the issuer"
        absent="This handoff has no ownership and control map."
      />
      <Transaction entry={entry} href={href} />
      {history.length > 0 && (
        <LeadFigure
          span={12}
          label="Issuer history"
          title="Issuer history"
          figure={<DatedList label="Issuer history" events={history} href={href} />}
        />
      )}
    </Bento>
  );
}
