import { blocked, unitLabel } from "../../publishedReport";
import { Key } from "../overview/figureParts";
import { Bento } from "../overview/Tile";
import { Bridge, bridgeOf, stepTable, type Step } from "./bridge";
import { withDraws } from "./draws";
import { OtherCharts, rowBasis } from "./written";
import { CompactGap, LaneTile, LeadFigure, LeadGap, Trace, type LeadTable } from "./parts";
import { chartOf, eventsOf, leadHref } from "./read";
import type { LeadProps } from "./types";

const TITLE = "Liquidity bridge";

/** The bridge's table view: each step's amount as written, then its own unit and basis cells. */
function bridgeTable(
  steps: readonly Step[],
  basis: ReturnType<typeof rowBasis>,
  href: (line?: number) => string,
): LeadTable | undefined {
  const table = stepTable(steps, href);
  return (
    table && {
      ...table,
      head: [...table.head, ...basis.head],
      rows: table.rows.map((row, at) => ({ ...row, cells: [...row.cells, ...basis.cells(at)] })),
    }
  );
}

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
          chart.state === "gap" ? chart.reason : "This page could not read a liquidity bridge."
        }
      />
    );
  const { steps, unit, why, table } = read;
  const basis = rowBasis(table);
  return (
    <LeadFigure
      span={8}
      label={TITLE}
      title={TITLE}
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
          <CompactGap>{why}</CompactGap>
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
      table={bridgeTable(steps, basis, href)}
      notes={basis.shared}
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
        <LaneTile
          lane={eventsOf(entry, "Financing")}
          span={4}
          label="Funding dates"
          title="Funding dates"
          href={href}
          absent="This page could not read dated financing events."
        />
        <OtherCharts entry={entry} href={href} drawn={[TITLE]} />
      </Bento>
    );
  },
  ["figures", "events"],
);
