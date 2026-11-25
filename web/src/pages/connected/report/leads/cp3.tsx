import { blocked } from "../../publishedReport";
import { runMoneyUnit } from "../../reportView";
import { Bento, Tile } from "../overview/Tile";
import {
  InstrumentTable,
  quotedInstruments,
  recommendationInstruments,
  securityView,
  ValueMatrix,
} from "../Securities";
import { withDraws } from "./draws";
import { LeadGap, Prose } from "./parts";
import { leadHref, sectionParagraphs } from "./read";
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
        reason={`This page could not read a ${title.toLowerCase()} passage.`}
      />
    );
  return (
    <Tile span={6} label={title} title={title} className="w-full self-start">
      <Prose label={title} paragraphs={paragraphs} href={href} />
    </Tile>
  );
}

/** CP-3: which instrument, at what level, and why. */
export const SecurityLead = withDraws(
  function SecurityLead(props: LeadProps) {
    const { entry, run, view } = props;
    if (blocked(entry)) return null;
    const href = leadHref(props);
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
            reason="This page could not read an instrument table."
          />
        )}
        <Passage entry={entry} heading="Relative value" title="Relative value" href={href} />
        <Passage entry={entry} heading="Portfolio Fit" title="Portfolio fit" href={href} />
        {data?.outcomes && <ValueMatrix table={data.outcomes} href={href} />}
        <LeadGap
          span={6}
          label="Relative value against peers"
          title="Relative value against peers"
          reason="This page could not read peer levels."
        />
      </Bento>
    );
  },
  ["figures"],
);
