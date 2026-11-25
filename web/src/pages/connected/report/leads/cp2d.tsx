import { blocked, unitLabel } from "../../publishedReport";
import { Key } from "../overview/figureParts";
import { basisNotes } from "../overview/figureData";
import { Bento } from "../overview/Tile";
import { Bridge, bridgeOf, stepTable } from "./bridge";
import { withDraws } from "./draws";
import { LaneTile, LeadFigure, LeadGap, Trace } from "./parts";
import { chartOf, eventsOf, leadHref } from "./read";
import type { LeadProps } from "./types";

const TITLE = "Liquidity bridge";

function LiquidityBridge({
  entry,
  href,
}: {
  entry: LeadProps["entry"];
  href: (line?: number) => string;
}) {
  const chart = chartOf(entry, TITLE);
  const read = bridgeOf(chart);
  if (!read)
    return (
      <LeadGap
        span={8}
        label={TITLE}
        title={TITLE}
        reason={
          chart.state === "gap"
            ? chart.reason
            : "This liquidity handoff has no liquidity bridge table."
        }
      />
    );
  const { steps, unit, why, table } = read;
  const first = steps[0];
  const last = steps.at(-1);
  const reading =
    !why && first && last
      ? `${first.label} ${first.cell.text} to ${last.label.toLowerCase()} ${last.cell.text}`
      : TITLE;
  return (
    <LeadFigure
      span={8}
      label={TITLE}
      kicker={TITLE}
      title={reading}
      basis={unit ? unitLabel(unit) : undefined}
      legend={
        !why && (
          <>
            <Key tone="primary">Opening and closing</Key>
            <Key tone="secondary">Change</Key>
          </>
        )
      }
      trace={<Trace href={href(table.line)} name={TITLE} />}
      figure={
        why ? (
          <p role="note" className="text-small text-text-secondary">
            {why}
          </p>
        ) : (
          <Bridge
            steps={steps}
            unit={unit}
            label={`${TITLE} in ${unitLabel(unit)}: ${steps
              .map((step) => `${step.label} ${step.cell.text}`)
              .join(", ")}.`}
          />
        )
      }
      table={stepTable(steps, href)}
      notes={basisNotes(table)}
    />
  );
}

/** CP-2D: does cash last, and until when. */
export const LiquidityLead = withDraws(
  function LiquidityLead(props: LeadProps) {
    const { entry } = props;
    if (blocked(entry)) return null;
    const href = leadHref(props);
    return (
      <Bento>
        <LiquidityBridge entry={entry} href={href} />
        <div className="flex min-w-0 flex-col gap-4 self-start lg:col-span-4">
          <LaneTile
            lane={eventsOf(entry, "Financing")}
            span={12}
            label="Funding dates"
            title="Funding dates"
            href={href}
            absent="The handoff states no dated financing event."
          />
          <LeadGap
            span={12}
            label="Runway"
            title="Runway"
            reason="This handoff states no runway figure."
          />
        </div>
      </Bento>
    );
  },
  ["figures", "events"],
);
