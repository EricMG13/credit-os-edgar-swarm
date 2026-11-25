import { blocked } from "../../publishedReport";
import { Bento, Tile } from "../overview/Tile";
import { withDraws } from "./draws";
import { LaneTile, LeadGap, Prose } from "./parts";
import { eventsOf, leadHref, sectionParagraphs } from "./read";
import type { LeadProps } from "./types";

const QUESTIONS = "Research questions and answers";

/** CP-DR: what the research found, the scenarios it draws and the dates that matter. */
export const ResearchLead = withDraws(
  function ResearchLead(props: LeadProps) {
    const { entry } = props;
    if (blocked(entry)) return null;
    const href = leadHref(props);
    const answered = entry.sections.some((section) => section.heading === "Executive answer");
    const scenarios = sectionParagraphs(entry, "Causal synthesis and scenarios");
    return (
      <Bento>
        <LeadGap
          span={12}
          label={QUESTIONS}
          title={QUESTIONS}
          reason="The handoff does not state each question's answer and whether it was answered as a table."
        >
          {answered && (
            <p className="text-caption text-text-secondary">
              The answers are written in the executive answer passage.
            </p>
          )}
        </LeadGap>
        {scenarios.length ? (
          <Tile
            span={8}
            label="Causal scenarios"
            title="Causal synthesis and scenarios"
            className="w-full self-start"
          >
            <Prose label="Causal scenarios" paragraphs={scenarios} href={href} />
          </Tile>
        ) : (
          <LeadGap
            span={8}
            label="Causal scenarios"
            title="Causal synthesis and scenarios"
            reason="The handoff writes no causal scenarios."
          />
        )}
        <LaneTile
          lane={eventsOf(entry, "Research catalysts")}
          span={4}
          label="Research catalysts"
          title="Research catalysts"
          href={href}
          absent="The handoff states no dated research catalyst."
        />
      </Bento>
    );
  },
  ["events"],
);
