import type { WaterfallRow } from "../kit/marks";
import { UNORDERED_SENTENCE } from "../kit/tables";
import { FigureTile, GapTile } from "../kit/LeadFrame";
import { GapChip, Measured, Waterfall } from "../kit/marks";
import type { LeadProps } from "../types";
import { cashLadder, figureGap, type CashLadder } from "./foundationData";
import {
  alone,
  allGaps,
  gapLines,
  gapReasons,
  LEVELS_AS_STATED,
  ladderKicker,
  ladderPeriods,
  ladderReading,
  ladderRows,
  ladderTable,
  levelsBreak,
  noFigure,
  type LadderPeriods,
} from "./ladderGeometry";

const LABEL = "Cash conversion";
const NO_PERIOD = "This page could not read a period for the ladder's rows.";

/** One ladder: a Waterfall of one period's stated rows, the earlier period beneath where given. */
function Ladder({
  data,
  periods,
  rows,
}: {
  data: CashLadder;
  periods: LadderPeriods;
  rows: readonly WaterfallRow[];
}) {
  return (
    <Measured fallback={640}>
      {(width) => (
        <Waterfall
          rows={rows}
          unit={data.unit}
          width={width}
          label={ladderReading(rows, data, periods)}
          legend={{
            level: `${periods.current} level`,
            gap: "Not stated",
            ...(periods.prior ? { prior: periods.prior } : {}),
          }}
        />
      )}
    </Measured>
  );
}

/**
 * Tile 2: the handoff's own cash ladder, from EBITDA (Adjusted) through cash interest and taxes,
 * cash from operations, capex, free cash flow after capex, distributions and the module's own
 * after-distributions level to acquisitions: each as written, the latest period as bars, the
 * earlier of two beneath, stated gaps hatched with their reasons. With three or more periods every
 * stated period is a ladder of its own, the latest first; a period stated only as gaps is its
 * reason in words.
 */
export function CashLadderTile({ lead }: { lead: LeadProps }) {
  const data = cashLadder(lead.entry);
  const periods = data && ladderPeriods(data);
  if (!data || !periods)
    return (
      <GapTile span={7} label={LABEL} kicker={LABEL}>
        {figureGap(lead.entry, "ladder") ?? NO_PERIOD}
      </GapTile>
    );
  const drawn = [periods, ...periods.others.map(alone)].map((each) => ({
    each,
    rows: ladderRows(data, each),
  }));
  if (noFigure(drawn.map(({ rows }) => rows)))
    // Nothing is stated: no axis, no zero rule, no plot; the stated gaps and the table view.
    return (
      <FigureTile
        props={lead}
        span={7}
        label={LABEL}
        kicker={ladderKicker(data, periods)}
        title={LABEL}
        line={data.line}
        source="cash conversion"
        table={ladderTable(data)}
      >
        <ul data-gap-lines="" className="flex flex-col gap-2">
          {gapLines(drawn.map(({ rows }) => rows)).map((line) => (
            <li
              key={line.reason}
              data-gap-line={line.labels.join("; ")}
              className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1"
            >
              <span className="text-small font-medium wrap-anywhere text-text-primary">
                {line.labels.join("; ")}
              </span>
              <GapChip reason={line.reason} />
            </li>
          ))}
        </ul>
      </FigureTile>
    );
  const breaks = drawn.some(({ rows }) => !allGaps(rows) && levelsBreak(rows));
  return (
    <FigureTile
      props={lead}
      span={7}
      label={LABEL}
      kicker={ladderKicker(data, periods)}
      title={LABEL}
      line={data.line}
      source="cash conversion"
      notes={[...(breaks ? [LEVELS_AS_STATED] : []), ...(data.ordered ? [] : [UNORDERED_SENTENCE])]}
      table={ladderTable(data)}
    >
      {drawn.map(({ each, rows }) =>
        allGaps(rows) ? (
          <p
            key={each.current}
            data-ladder-gap={each.current}
            className="text-caption wrap-anywhere text-gap-text"
          >
            {`${each.current}: ${gapReasons(rows).join(" ")}`}
          </p>
        ) : (
          <div key={each.current} data-ladder={each.current} className="flex flex-col gap-1">
            {drawn.length > 1 && (
              <h4 className="text-caption font-medium text-text-primary">{each.current}</h4>
            )}
            <Ladder data={data} periods={each} rows={rows} />
          </div>
        ),
      )}
    </FigureTile>
  );
}
