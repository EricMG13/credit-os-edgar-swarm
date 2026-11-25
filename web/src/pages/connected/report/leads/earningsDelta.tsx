import type { FC } from "react";
import { GapBar } from "../overview/marks";
import { GapNote } from "../overview/Tile";
import {
  earningsDelta,
  withMark,
  type Bridge,
  type Pair,
  type PairFigure,
  type PairGroup,
  type Side,
} from "./earningsDeltaData";
import { FigureTile, GapTile, LeadFrame, type TableViewData } from "./kit/LeadFrame";
import {
  Dumbbell,
  Measured,
  Waterfall,
  type DumbbellRow,
  type DumbbellSide,
  type WaterfallRow,
} from "./kit/marks";
import { group } from "./kit/numbers";
import type { LeadProps } from "./types";

const NO_BRIDGE = "No variance bridge in this handoff.";

const RESULTS_NAME = "Prior and current results";
const KPIS_NAME = "Margins and KPIs";
const BRIDGE_NAME = "Variance bridge";

const word = (sign: number) => (sign > 0 ? "up" : sign < 0 ? "down" : "unchanged");

function sideText(one: Side, unit: string) {
  return one.kind === "number" ? withMark(one.text, unit) : one.text;
}

/** A side as the dumbbell takes it: a stated figure, or the handoff's words where none is. */
function dumbbellSide(one: Side, unit: string): DumbbellSide {
  return one.kind === "number" && one.value !== null
    ? { value: one.value, text: sideText(one, unit) }
    : { gap: one.text };
}

/** The change slot: the change as stated (or the exact difference, said so), its direction, and better or worse. */
function dumbbellRow(pair: Pair, unit: string, shared: boolean): DumbbellRow {
  const { change } = pair;
  const moved =
    change && change.sign !== 0
      ? [
          word(change.sign),
          ...(pair.tone === "better" || pair.tone === "worse" ? [pair.tone] : []),
          ...(change.basis === "derived" ? ["derived"] : []),
        ].join(", ")
      : "";
  const periods =
    !shared && pair.priorPeriod && pair.currentPeriod
      ? `${pair.priorPeriod} to ${pair.currentPeriod}`
      : "";
  const note = [moved, periods].filter(Boolean).join(" · ");
  return {
    label: pair.label,
    prior: dumbbellSide(pair.prior, unit),
    current: dumbbellSide(pair.current, unit),
    ...(change ? { change: change.sign === 0 ? "unchanged" : change.text } : {}),
    ...(note ? { note } : {}),
    ...(pair.tone === "worse" ? { tone: "worse" as const } : {}),
  };
}

/** The two period names every pair of the group shares, or null where they differ or are not stated. */
function sharedPeriods(pairs: readonly Pair[]) {
  const [first] = pairs;
  const [prior, current] = [first?.priorPeriod, first?.currentPeriod];
  return prior &&
    current &&
    pairs.every((pair) => pair.priorPeriod === prior && pair.currentPeriod === current)
    ? { prior, current }
    : null;
}

function GroupRows({
  group: one,
  caption,
  legend,
}: {
  group: PairGroup;
  caption: boolean;
  legend: boolean;
}) {
  const shared = sharedPeriods(one.drawn);
  const rows = one.drawn.map((pair) => dumbbellRow(pair, one.unit, shared !== null));
  return (
    <div className="flex min-w-0 flex-col gap-2">
      {caption && (
        <p className="text-caption text-text-tertiary">
          {one.unitNotStated ? "unit not stated" : one.unit}
        </p>
      )}
      <Measured fallback={640}>
        {(width) => (
          <Dumbbell
            rows={rows}
            width={width}
            periods={shared ?? { prior: "Prior period", current: "Current period" }}
            unit={one.unitNotStated ? "unit not stated" : one.unit}
            legend={legend}
            {...(one.fromZero ? {} : { axisStart: "auto" as const })}
          />
        )}
      </Measured>
    </div>
  );
}

type Ready = Extract<PairFigure, { kind: "ready" }>;

function pairTable(figure: Ready, caption: string): TableViewData {
  const rows = figure.groups.flatMap((one) =>
    [...one.rows, ...one.gaps, ...one.words]
      .sort((a, b) => a.line - b.line)
      .map((pair) => [
        pair.label,
        one.unit,
        pair.priorPeriod ?? "",
        sideText(pair.prior, one.unit),
        pair.currentPeriod ?? "",
        sideText(pair.current, one.unit),
        pair.change ? (pair.change.sign === 0 ? "unchanged" : pair.change.text) : "",
        pair.change ? pair.change.basis : "",
        ...figure.otherPeriods.map(
          (name) => pair.others.find((other) => other.period === name)?.text ?? "",
        ),
      ]),
  );
  return {
    caption,
    headers: [
      "Measure",
      "Unit",
      "Prior period",
      "Prior",
      "Current period",
      "Current",
      "Change",
      "Change is",
      ...figure.otherPeriods,
    ],
    rows,
  };
}

const DISAGREES =
  "A stated change disagreed in direction with its two figures; the exact difference is shown, marked derived.";
const conflicted = (figure: Ready) =>
  figure.groups.some((one) => one.rows.some((pair) => pair.change?.conflict));

/** The unit and, where every pair shares them, the two periods: what the figure is measured in. */
function kickerOf(figure: Ready) {
  const pairs = figure.groups.flatMap((one) => [...one.rows, ...one.gaps]);
  const [first] = pairs;
  const shared =
    first?.priorPeriod &&
    first.currentPeriod &&
    pairs.every(
      (pair) =>
        pair.priorPeriod === first.priorPeriod && pair.currentPeriod === first.currentPeriod,
    )
      ? `${first.priorPeriod} to ${first.currentPeriod}`
      : "Prior to current";
  const [only] = figure.groups;
  return figure.groups.length === 1 && only?.unit ? `${shared}, ${only.unit}` : shared;
}

/** Pairs the handoff leaves a gap in, when no pair of the group has both figures: listed, hatched, with the reason. */
function GapList({ pairs }: { pairs: readonly Pair[] }) {
  return (
    <ul aria-label="Not supplied" className="flex flex-col">
      {pairs.map((pair) => (
        <li
          key={pair.line}
          data-gap={pair.label}
          className="flex flex-col gap-1 border-b border-border-hairline py-2 last:border-b-0"
        >
          <span className="text-small font-medium wrap-anywhere text-text-primary">
            {pair.label}
          </span>
          <GapBar />
          <span className="text-caption text-gap-text">
            {[
              ...new Set(
                [pair.prior, pair.current]
                  .filter((one) => one.kind === "gap")
                  .map((one) => one.text),
              ),
            ].join(" · ")}
          </span>
        </li>
      ))}
    </ul>
  );
}

function PairTile({
  props,
  figure,
  name,
  span,
  source,
}: {
  props: LeadProps;
  figure: Ready;
  name: string;
  span: 4 | 8 | 12;
  source: string;
}) {
  const drawn = figure.groups.some((one) => one.rows.length > 0);
  const captions = figure.groups.length > 1 || figure.groups.some((one) => one.unitNotStated);
  return (
    <FigureTile
      props={props}
      span={span}
      label={name}
      kicker={kickerOf(figure)}
      title={name}
      line={figure.line}
      source={source}
      notes={[...figure.notes, ...(conflicted(figure) ? [DISAGREES] : [])]}
      table={pairTable(figure, `${name}, every pair the handoff states`)}
    >
      {figure.groups.map((one, at) =>
        one.rows.length > 0 ? (
          <GroupRows
            key={one.drawn[0]?.line ?? one.unit}
            group={one}
            caption={captions}
            legend={at === 0}
          />
        ) : (
          one.gaps.length > 0 && <GapList key={one.gaps[0]?.line} pairs={one.gaps} />
        ),
      )}
      {!drawn && <GapNote>The handoff states no pair with both figures to draw.</GapNote>}
    </FigureTile>
  );
}

// ---------------------------------------------------------------------------------------------

type Shown = Extract<Bridge, { kind: "bridge" }>;

/** Every step as the handoff states it, in its order; the module's own opening and closing are the totals. */
function waterfallRows(bridge: Shown): WaterfallRow[] {
  return bridge.steps.map((step) => ({
    kind: step.role === "opening" ? "level" : step.role === "closing" ? "closing" : "step",
    label: step.label,
    value: step.value,
    text: group(step.text),
  }));
}

/** Every step as the handoff states it: the amounts, no totals made here. */
function bridgeTable(bridge: Shown): TableViewData {
  return {
    caption: "Variance bridge, every step the handoff states",
    headers: ["Step", "Role", `Amount${bridge.unit ? ` (${bridge.unit})` : ""}`],
    rows: bridge.steps.map((step) => [
      step.label,
      step.role === "change" ? "Change" : step.role === "opening" ? "Opening" : "Closing",
      group(step.text),
    ]),
  };
}

function BridgeTile({ props, bridge }: { props: LeadProps; bridge: Shown }) {
  return (
    <FigureTile
      props={props}
      span={12}
      label={BRIDGE_NAME}
      kicker={`Prior to current${bridge.unit ? `, ${bridge.unit}` : ""}`}
      title={BRIDGE_NAME}
      line={bridge.line}
      source="the variance bridge"
      notes={bridge.notes}
      table={bridgeTable(bridge)}
    >
      <Measured fallback={640}>
        {(width) => (
          <Waterfall
            width={width}
            unit={bridge.unit || "unit not stated"}
            axisStart="auto"
            rows={waterfallRows(bridge)}
            legend={{ level: "Opening", step: "Step", closing: "Closing" }}
          />
        )}
      </Measured>
    </FigureTile>
  );
}

/** A figure that cannot be drawn: the one gap pattern, with the true condition in words. */
function Gap({ name, children }: { name: string; children: string }) {
  return (
    <GapTile span={12} label={name} kicker={name}>
      {children}
    </GapTile>
  );
}

/**
 * Earnings delta: the variance bridge where the handoff has one that adds up, the prior and current
 * results in the handoff's own order, and the margins and KPIs beside them.
 */
export const EarningsDeltaLead: FC<LeadProps> & {
  draws?: readonly ("figures" | "events" | "maps")[];
} = (props) => {
  const { bridge, movers, kpis } = earningsDelta(props.entry);
  // Results and margins side by side (8 and 4) when both are drawn; each alone is full width.
  const beside = movers.kind === "ready" && kpis.kind === "ready";
  return (
    <LeadFrame props={props}>
      {bridge?.kind === "bridge" && <BridgeTile props={props} bridge={bridge} />}
      {bridge?.kind === "unreconciled" && <Gap name={BRIDGE_NAME}>{bridge.message}</Gap>}
      {movers.kind === "ready" ? (
        <PairTile
          props={props}
          figure={movers}
          name={RESULTS_NAME}
          span={beside ? 8 : 12}
          source="the prior and current results"
        />
      ) : (
        <Gap name={RESULTS_NAME}>{movers.reason}</Gap>
      )}
      {kpis.kind === "ready" ? (
        // Beside the tall results, the margins take their own height: no empty white under them.
        <div className={beside ? "min-w-0 self-start lg:col-span-4" : "min-w-0 lg:col-span-12"}>
          <PairTile
            props={props}
            figure={kpis}
            name={KPIS_NAME}
            span={beside ? 4 : 12}
            source="the margin and KPI changes"
          />
        </div>
      ) : (
        <Gap name={KPIS_NAME}>{kpis.reason}</Gap>
      )}
      {bridge === null && <Gap name={BRIDGE_NAME}>{NO_BRIDGE}</Gap>}
    </LeadFrame>
  );
};

EarningsDeltaLead.draws = [] as const;
