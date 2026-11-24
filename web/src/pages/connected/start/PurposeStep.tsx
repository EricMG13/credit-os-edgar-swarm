import { PurposeCards } from "../../run/start/Purpose";
import { PATHWAYS, drawnModules } from "../api";
import {
  CASE_KIND_LABEL,
  CASE_KINDS,
  LEVELS,
  PATHWAY_LABEL,
  PURPOSES,
  RUN_PURPOSE_LABEL,
} from "./plain";
import { SYNTHETIC_LIMITS, type IntakeView, shownCapText } from "./intake";
import { SelectField } from "./fields";

const PATHWAY_DESCRIPTIONS: Record<string, string> = {
  lite_credit_assessment: "Review the issuer's fundamentals, credit drivers and downside.",
  credit_snapshot: "Assess the issuer, downside, covenants, refinancing and forward cash flow.",
  deep_credit_assessment: "Full credit assessment plus every specialist module.",
  earnings_update: "Compare the latest results with an earlier period.",
  relative_value: "Compare instruments, pricing and compensation for risk.",
  covenant_refinancing: "Assess legal protections, funding needs and refinancing options.",
  distressed_restructuring: "Assess stressed liquidity, covenants and recoveries.",
  portfolio_decision: "Assess instruments and portfolio fit for a decision.",
};

const PATHWAY_CARDS = Object.entries(PATHWAYS).map(([id, pathway]) => ({
  id,
  title: pathway.label,
  description: PATHWAY_DESCRIPTIONS[id] ?? "",
  modules: `${String(drawnModules(pathway.modules).length)} base modules`,
}));

export function PurposeFields({ view }: { view: IntakeView }) {
  return (
    <>
      <div className="@container sm:col-span-2">
        <PurposeCards
          className="@[44rem]:grid-cols-2"
          label={PATHWAY_LABEL}
          value={view.run.pathway}
          purposes={PATHWAY_CARDS.map((pathway) => {
            const cap = view.caps[pathway.id];
            const capText = cap && shownCapText(Number(cap));
            return {
              ...pathway,
              description: `${pathway.description} ${capText ? `Cap ${capText}.` : "Cap unavailable."}`,
            };
          })}
          onChange={view.changePathway}
        />
      </div>
      {view.synthetic && (
        <p className="text-sm text-text-secondary sm:col-span-2">{SYNTHETIC_LIMITS}</p>
      )}
      <SelectField
        title={RUN_PURPOSE_LABEL}
        value={view.run.run_type ?? "research"}
        choices={
          view.earnings
            ? { earnings: PURPOSES.earnings }
            : {
                research: PURPOSES.research,
                primary: PURPOSES.primary,
                secondary: PURPOSES.secondary,
              }
        }
        onChange={view.changePurpose}
      />
      <SelectField
        title={CASE_KIND_LABEL}
        value={view.run.case_kind}
        help="Public cases can use approved lookups. Native Copilot web search is unavailable."
        choices={CASE_KINDS}
        onChange={(value) => {
          view.changeRun("case_kind", value);
        }}
      />
      <SelectField
        title="Run form level"
        value={view.level}
        help="Advanced adds model, effort, turns per module, module selection and valuation and assumption fields."
        choices={LEVELS}
        onChange={view.changeLevel}
      />
    </>
  );
}
