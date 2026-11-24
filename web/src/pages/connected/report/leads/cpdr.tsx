import { Bento, Tile } from "../overview/Tile";
import { DatedList, LeadBlocked, LeadFigure, LeadGap, NEEDS, Prose } from "./parts";
import { blockedState, eventsOf, leadHref, sectionParagraphs } from "./read";
import type { LeadProps } from "./types";

const QUESTIONS = "Research questions and answers";

/** CP-DR: what the research found, the scenarios it draws and the dates that matter. */
export function ResearchLead(props: LeadProps) {
  const { entry } = props;
  const href = leadHref(props);
  const stopped = blockedState(entry);
  if (stopped)
    return (
      <Bento>
        <LeadBlocked
          span={12}
          label="Deep research"
          title="Deep research"
          reason={stopped.reason}
        />
      </Bento>
    );
  const answered = entry.sections.some((section) => section.heading === "Executive answer");
  const scenarios = sectionParagraphs(entry, "Causal synthesis and scenarios");
  const catalysts = eventsOf(entry, "Research catalysts") ?? [];
  return (
    <Bento>
      <LeadGap
        span={12}
        label={QUESTIONS}
        title={QUESTIONS}
        reason="The handoff does not state each question's answer and whether it was answered as a table."
        needs={NEEDS.method}
      >
        {answered && (
          <p className="text-caption text-text-secondary">
            The answers are written in the executive answer passage.
          </p>
        )}
        <p className="text-caption text-text-secondary">
          Coverage has no fixed place in the handoff.
        </p>
      </LeadGap>
      {scenarios.length ? (
        <Tile span={8} label="Causal scenarios" title="Causal synthesis and scenarios">
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
      {catalysts.length ? (
        <LeadFigure
          span={4}
          label="Research catalysts"
          title="Research catalysts"
          figure={<DatedList label="Research catalysts" events={catalysts} href={href} />}
        />
      ) : (
        <LeadGap
          span={4}
          label="Research catalysts"
          title="Research catalysts"
          reason="The handoff states no dated research catalyst."
        />
      )}
    </Bento>
  );
}
