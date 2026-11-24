import { unitLabel } from "../../publishedReport";
import { Key } from "../overview/figureParts";
import { basisNotes } from "../overview/figureData";
import { Bento } from "../overview/Tile";
import { Bridge, bridgeSteps } from "./bridge";
import { DatedList, LeadBlocked, LeadFigure, LeadGap, NEEDS, Trace } from "./parts";
import { blockedState, chartOf, eventsOf, leadHref } from "./read";
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
  if (chart.state !== "ready")
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
  const { table } = chart;
  const { steps, unit, why } = bridgeSteps(table);
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
      table={{
        head: ["Step", "Amount"],
        rows: steps.map((step) => ({
          label: step.label,
          cells: [step.cell.text || null],
          end: <Trace href={href(step.line)} name={step.label} />,
        })),
        endHeading: "Source",
      }}
      notes={basisNotes(table)}
    />
  );
}

/** CP-2D: does cash last, and until when. */
export function LiquidityLead(props: LeadProps) {
  const { entry } = props;
  const href = leadHref(props);
  const stopped = blockedState(entry);
  if (stopped)
    return (
      <Bento>
        <LeadBlocked span={12} label={TITLE} title={TITLE} reason={stopped.reason} />
      </Bento>
    );
  const events = eventsOf(entry, "Financing") ?? [];
  return (
    <Bento>
      <LiquidityBridge entry={entry} href={href} />
      <div className="flex min-w-0 flex-col gap-4 lg:col-span-4">
        {events.length ? (
          <LeadFigure
            span={12}
            label="Funding dates"
            title="Funding dates"
            figure={<DatedList label="Funding dates" events={events} href={href} />}
          />
        ) : (
          <LeadGap
            span={12}
            label="Funding dates"
            title="Funding dates"
            reason="The handoff states no dated financing event."
          />
        )}
        <LeadGap
          span={12}
          label="Runway"
          title="Runway"
          reason="This handoff states no runway figure."
          needs={NEEDS.method}
        />
      </div>
    </Bento>
  );
}
