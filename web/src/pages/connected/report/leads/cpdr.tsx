import { Bento, Tile } from "../overview/Tile";
import { withDraws } from "./draws";
import { LaneTile, LeadGap, Prose } from "./parts";
import { eventsOf, leadHref, sectionParagraphs, drawsNothing } from "./read";
import type { LeadProps } from "./types";

const QUESTIONS = "Research questions and answers";
const SCENARIOS = "Causal synthesis and scenarios";

/** CP-DR: what the research found, the scenarios it draws and the dates that matter. */
export const ResearchLead = withDraws(
  function ResearchLead(props: LeadProps) {
    const { entry } = props;
    if (drawsNothing(entry)) return null;
    const href = leadHref(props);
    const answered = entry.sections.some((section) => section.heading === "Executive answer");
    const scenarios = sectionParagraphs(entry, SCENARIOS);
    return (
      <Bento>
        <LeadGap
          span={12}
          label={QUESTIONS}
          title={QUESTIONS}
          reason="This page could not read the research questions and their answers."
        >
          {answered && (
            <p className="text-caption text-text-secondary">
              The answers are under Executive answer below.
            </p>
          )}
        </LeadGap>
        {scenarios.length ? (
          <Tile span={8} label="Causal scenarios" title={SCENARIOS} className="w-full self-start">
            <Prose label="Causal scenarios" paragraphs={scenarios} href={href} />
          </Tile>
        ) : (
          <LeadGap
            span={8}
            label="Causal scenarios"
            title={SCENARIOS}
            reason="This page could not read causal scenarios."
          />
        )}
        {/* The dated catalysts beside the scenarios, so the row has no hole. */}
        <LaneTile
          lane={eventsOf(entry, "Research catalysts")}
          span={4}
          label="Research catalysts"
          title="Research catalysts"
          href={href}
          absent="This page could not read dated research catalysts."
        />
      </Bento>
    );
  },
  ["events"],
);
