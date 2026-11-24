import { GapNote, Tile } from "../../overview/Tile";
import { periodLabel, tableUnder } from "../kit/tables";
import type { LeadProps } from "../types";

const PERIODS = "Chart data: revenue and EBITDA";
const ANNUAL = /^(?:FY|CY)?\s?\d{4}$/;
const NEEDS =
  "A longer trend, last twelve months and a full debt stack need a methodology change; until then they are not drawn.";

/** What the gap tile says for the handoff's period table, or null when it carries three or more periods. */
function periodsGap(lead: LeadProps) {
  const table = tableUnder(lead.entry, PERIODS);
  if (!table) return { title: "No period table", text: "The handoff has no period table." };
  const labels = [...new Set(table.rows.map((row) => periodLabel(row.cells[0] ?? "")))].filter(
    Boolean,
  );
  if (labels.length >= 3) return null;
  if (labels.length === 0)
    return { title: "No period stated", text: `The period table states no period. ${NEEDS}` };
  if (labels.length === 1)
    return { title: "One period stated", text: `This handoff states one period. ${NEEDS}` };
  // "Annual" only when both labels read as years; another kind of period is just "two periods".
  const annual = labels.every((label) => ANNUAL.test(label)) ? " annual" : "";
  return {
    title: `Two${annual} periods stated`,
    text: `This handoff states two${annual} periods. ${NEEDS}`,
  };
}

/** Tile 7 of the financial foundation: the designed gap for what two periods cannot show. */
export function PeriodsGapTile({ lead }: { lead: LeadProps }) {
  const gap = periodsGap(lead);
  if (!gap) return null;
  return (
    <Tile
      span={7}
      label="More than two periods"
      kicker="Trend beyond two periods"
      title={gap.title}
      tone="gap"
      className="self-start"
    >
      <GapNote>{gap.text}</GapNote>
    </Tile>
  );
}
