import { runMoneyUnit } from "../../reportView";
import { Bento, Tile } from "../overview/Tile";
import {
  InstrumentTable,
  quotedInstruments,
  recommendationInstruments,
  securityView,
  ValueMatrix,
} from "../Securities";
import { LeadBlocked, LeadGap, NEEDS, Prose } from "./parts";
import { blockedState, leadHref, sectionParagraphs } from "./read";
import type { LeadProps } from "./types";

const TITLE = "Instrument decisions";

function Passage({
  entry,
  heading,
  title,
  href,
}: {
  entry: LeadProps["entry"];
  heading: string;
  title: string;
  href: (line?: number) => string;
}) {
  const paragraphs = sectionParagraphs(entry, heading);
  if (!paragraphs.length)
    return (
      <LeadGap
        span={6}
        label={title}
        title={title}
        reason={`The module wrote no ${title.toLowerCase()} passage.`}
      />
    );
  return (
    <Tile span={6} label={title} title={title}>
      <Prose label={title} paragraphs={paragraphs} href={href} />
    </Tile>
  );
}

/** CP-3: which instrument, at what level, and why. */
export function SecurityLead(props: LeadProps) {
  const { entry, run, view } = props;
  const href = leadHref(props);
  const stopped = blockedState(entry);
  if (stopped)
    return (
      <Bento>
        <LeadBlocked span={12} label={TITLE} title={TITLE} reason={stopped.reason} />
      </Bento>
    );
  const data = securityView(entry, run.asOf);
  const instruments =
    (data && quotedInstruments(data, runMoneyUnit(view.catalogue))) ??
    recommendationInstruments(entry);
  return (
    <Bento>
      {instruments ? (
        <InstrumentTable data={instruments} href={href} />
      ) : (
        <LeadGap
          span={12}
          label={TITLE}
          title={TITLE}
          reason="The module wrote no instrument table."
          needs={NEEDS.method}
        />
      )}
      <Passage entry={entry} heading="Relative value" title="Relative value" href={href} />
      <Passage entry={entry} heading="Portfolio Fit" title="Portfolio fit" href={href} />
      <LeadGap
        span={12}
        label="Relative value against peers"
        title="Relative value against peers"
        reason="This handoff has no peer levels to compare the instruments against."
        needs={NEEDS.input("market quotes and peer levels")}
      />
      {data?.outcomes && <ValueMatrix table={data.outcomes} href={href} />}
    </Bento>
  );
}
