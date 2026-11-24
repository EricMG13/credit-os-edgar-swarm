import type { FC } from "react";
import { cx } from "@/utils/cx";
import { GapBar } from "../overview/marks";
import {
  earningsDelta,
  withMark,
  type Axis,
  type Bridge,
  type Change,
  type Pair,
  type PairFigure,
  type PairGroup,
  type Side,
  type Step,
} from "./earningsDeltaData";
import { Derived, FigureTile, GapTile, LeadFrame, type TableViewData } from "./kit/LeadFrame";
import { group } from "./kit/numbers";
import type { LeadProps } from "./types";
import { GapNote } from "../overview/Tile";

const NO_BRIDGE = "No variance bridge in this handoff.";

const RESULTS_NAME = "Prior and current results";
const KPIS_NAME = "Margins and KPIs";
const BRIDGE_NAME = "Variance bridge";

// The strip is about 580 px wide in the tile at 1440 px, so one drawing unit is about one pixel there
// and 11-unit tick text is about 11 px. PAD leaves room for the widest tick label at each end.
const W = 580;
const PAD = 44;
const MID = 14;
const MINUS = "−";

const word = (sign: number) => (sign > 0 ? "up" : sign < 0 ? "down" : "unchanged");
const arrow = (sign: number) => (sign > 0 ? "▲" : sign < 0 ? "▼" : "");
const unsigned = (text: string) => text.replace(/^[+−-]/, "");

/** Where a value falls along a strip of the shared axis. */
const place = (axis: Axis) => (value: number) =>
  PAD + ((value - axis.lo) / (axis.hi - axis.lo)) * (W - 2 * PAD);

const mark = (value: number, unit: string) => withMark(String(value), unit);

// A row is label, strip and change side by side where the tile is wide; stacked where it is narrow.
const ROW_WIDE =
  "grid grid-cols-1 gap-y-1 sm:grid-cols-[minmax(9rem,11rem)_minmax(0,1fr)_minmax(6rem,9rem)] sm:items-center sm:gap-x-4";
const STRIP_WIDE = "sm:col-start-2 sm:row-start-1";

function Grid({ axis, place: x }: { axis: Axis; place: (value: number) => number }) {
  return (
    <>
      {axis.ticks.map((tick) => (
        <line
          key={tick}
          data-tick={tick}
          x1={x(tick)}
          x2={x(tick)}
          y1="0"
          y2="28"
          className={tick === 0 ? "stroke-text-tertiary" : "stroke-border-hairline"}
        />
      ))}
    </>
  );
}

/** The ticks of a shared axis, once under the rows that share it. */
function AxisRow({ axis, unit, stack }: { axis: Axis; unit: string; stack: boolean }) {
  const x = place(axis);
  return (
    <div className={cx(!stack && ROW_WIDE, "pt-1")}>
      <svg
        viewBox={`0 0 ${String(W)} 20`}
        width="100%"
        aria-hidden="true"
        className={cx("block min-w-[220px]", !stack && STRIP_WIDE)}
      >
        {axis.ticks.map((tick) => (
          <text
            key={tick}
            x={x(tick)}
            y="14"
            textAnchor="middle"
            fontSize="11"
            className="fill-text-tertiary font-mono"
          >
            {mark(tick, unit)}
          </text>
        ))}
      </svg>
    </div>
  );
}

const TONE_TEXT = { better: "text-success-text", worse: "text-warning-text" } as const;

/** Direction as an arrow and a word; better or worse only where the owner's table knows the measure. */
function Moved({ change, tone }: { change: Change; tone: Pair["tone"] }) {
  return (
    <span className="flex flex-col items-end gap-0.5 text-right">
      <span className="font-mono text-small font-medium text-text-primary tabular-nums">
        {change.sign === 0 ? "unchanged" : change.text}
        {change.basis === "derived" && change.sign !== 0 && <Derived />}
      </span>
      {change.sign !== 0 && (
        <span className="text-caption text-text-secondary">
          <span aria-hidden="true">{arrow(change.sign)} </span>
          {word(change.sign)}
          {(tone === "better" || tone === "worse") && (
            <span className={cx("font-medium", TONE_TEXT[tone])}>{`, ${tone}`}</span>
          )}
        </span>
      )}
    </span>
  );
}

function sideText(one: Side, unit: string) {
  return one.kind === "number" ? withMark(one.text, unit) : one.text;
}

function pairReading(pair: Pair, unit: string) {
  const { prior, current, change } = pair;
  const at = (period: string | null) => (period ? ` (${period})` : "");
  const moved = !change
    ? ""
    : change.sign === 0
      ? ", unchanged"
      : `, ${word(change.sign)} ${unsigned(change.text)}${change.basis === "derived" ? " derived" : ""}${pair.tone === "better" || pair.tone === "worse" ? `, ${pair.tone}` : ""}`;
  return `${pair.label}${unit ? `, ${unit}` : ""}: prior ${sideText(prior, unit)}${at(pair.priorPeriod)}, current ${sideText(current, unit)}${at(pair.currentPeriod)}${moved}.`;
}

function DumbbellRow({
  pair,
  axis,
  unit,
  stack,
}: {
  pair: Pair;
  axis: Axis;
  unit: string;
  stack: boolean;
}) {
  const x = place(axis);
  const [from, to] = [pair.prior.value ?? 0, pair.current.value ?? 0];
  const flat = from === to;
  const worse = pair.tone === "worse";
  const heading = (
    <span className="flex min-w-0 flex-col gap-0.5">
      <span className="text-small font-medium wrap-anywhere text-text-primary">{pair.label}</span>
      <span className="font-mono text-caption text-text-secondary tabular-nums">
        {sideText(pair.prior, unit)} {"→"} {sideText(pair.current, unit)}
        {pair.priorPeriod && pair.currentPeriod && (
          <span className="font-body text-text-tertiary">{` · ${pair.priorPeriod} to ${pair.currentPeriod}`}</span>
        )}
      </span>
    </span>
  );
  const strip = (
    <svg
      viewBox={`0 0 ${String(W)} 28`}
      width="100%"
      role="img"
      aria-label={pairReading(pair, unit)}
      data-pair={pair.label}
      className={cx("block min-w-[220px]", !stack && STRIP_WIDE)}
    >
      <Grid axis={axis} place={x} />
      {!flat && (
        <line
          x1={x(from)}
          x2={x(to)}
          y1={MID}
          y2={MID}
          strokeWidth="2"
          className="stroke-chart-3"
        />
      )}
      <circle
        data-prior={from}
        cx={x(from)}
        cy={MID}
        r={flat ? 8 : 5}
        strokeWidth="2"
        className="fill-surface-card stroke-chart-3"
      />
      <circle
        data-current={to}
        cx={x(to)}
        cy={MID}
        r={flat ? 4 : 6}
        className={worse ? "fill-warning-mark" : "fill-chart-1"}
      />
    </svg>
  );
  const moved = pair.change && <Moved change={pair.change} tone={pair.tone} />;
  if (stack)
    return (
      <li className="flex flex-col gap-1 border-b border-border-hairline py-2 last:border-b-0">
        <span className="flex items-start justify-between gap-3">
          {heading}
          {moved}
        </span>
        {strip}
      </li>
    );
  return (
    <li className={cx(ROW_WIDE, "border-b border-border-hairline py-2 last:border-b-0")}>
      <span className="sm:row-start-1">{heading}</span>
      {moved && <span className="sm:col-start-3 sm:row-start-1">{moved}</span>}
      {strip}
    </li>
  );
}

/** A pair the handoff leaves a gap in: listed in place, hatched, with its own reason. */
function GapRow({ pair }: { pair: Pair }) {
  const reasons = [pair.prior, pair.current].flatMap((one) =>
    one.kind === "gap"
      ? [
          `${/^Not \w+/.exec(one.text)?.[0] ?? "Not supplied"}: ${one.reason ?? "Detail is in Evidence."}`,
        ]
      : [],
  );
  return (
    <li
      data-gap={pair.label}
      className="flex flex-col gap-1 border-b border-border-hairline py-2 last:border-b-0"
    >
      <span className="text-small font-medium wrap-anywhere text-text-primary">{pair.label}</span>
      <GapBar />
      <span className="text-caption text-gap-text">{[...new Set(reasons)].join(" · ")}</span>
    </li>
  );
}

function GroupRows({
  group: one,
  label,
  stack,
}: {
  group: PairGroup;
  label: string;
  stack: boolean;
}) {
  const { axis } = one;
  const truncated = (axis?.lo ?? 0) > 0;
  return (
    <div className="flex flex-col gap-1">
      {(one.unit || one.unitNotStated || truncated) && (
        <p className="text-caption text-text-tertiary">
          {[
            one.unitNotStated ? "unit not stated" : one.unit,
            axis && truncated ? `axis starts at ${mark(axis.lo, one.unit)}, not zero` : "",
          ]
            .filter(Boolean)
            .join(" · ")}
        </p>
      )}
      {axis && (
        <>
          <ol aria-label={label} className="flex flex-col">
            {one.rows.map((pair) => (
              <DumbbellRow key={pair.line} pair={pair} axis={axis} unit={one.unit} stack={stack} />
            ))}
          </ol>
          <AxisRow axis={axis} unit={one.unit} stack={stack} />
        </>
      )}
      {one.gaps.length > 0 && (
        <ul aria-label="Not supplied" className="flex flex-col">
          {one.gaps.map((pair) => (
            <GapRow key={pair.line} pair={pair} />
          ))}
        </ul>
      )}
    </div>
  );
}

type Ready = Extract<PairFigure, { kind: "ready" }>;

function pairTable(figure: Ready, caption: string): TableViewData {
  const rows = figure.groups.flatMap((one) =>
    [...one.rows, ...one.gaps, ...one.words].map((pair) => [
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

function PairTile({
  props,
  figure,
  name,
  span,
  stack,
  notes,
  source,
}: {
  props: LeadProps;
  figure: Ready;
  name: string;
  span: 4 | 8 | 12;
  stack: boolean;
  notes: readonly string[];
  source: string;
}) {
  const drawn = figure.groups.some((one) => one.rows.length > 0);
  return (
    <FigureTile
      props={props}
      span={span}
      label={name}
      kicker={kickerOf(figure)}
      title={name}
      line={figure.line}
      source={source}
      legend={
        drawn
          ? [
              { tone: "prior", text: "Prior period" },
              { tone: "primary", text: "Current period" },
            ]
          : []
      }
      notes={[...notes, ...figure.notes, ...(conflicted(figure) ? [DISAGREES] : [])]}
      table={pairTable(figure, `${name}, every pair the handoff states`)}
    >
      {figure.groups.map((one) => (
        <GroupRows
          key={one.rows[0]?.line ?? one.gaps[0]?.line ?? one.words[0]?.line ?? one.unit}
          group={one}
          stack={stack}
          label={`${name}${one.unitNotStated ? ", unit not stated" : one.unit ? `, ${one.unit}` : ""}`}
        />
      ))}
      {!drawn && <GapNote>The handoff states no pair with both figures to draw.</GapNote>}
    </FigureTile>
  );
}

// ---------------------------------------------------------------------------------------------

/** The step as the reader hears it: its name as written and its amount, never a running total. */
function stepReading(step: Step, unit: string) {
  const amount = `${withMark(step.text, unit)}${unit ? ` ${unit}` : ""}`;
  if (step.role !== "change")
    return `${step.label}, ${step.role === "opening" ? "opening" : "closing"} ${amount}.`;
  if (step.value === 0) return `${step.label}, no change.`;
  return `${step.label}, ${step.value > 0 ? "up" : "down"} ${group(String(Math.abs(step.value)))}${unit ? ` ${unit}` : ""}.`;
}

function StepRow({ step, axis, unit }: { step: Step; axis: Axis; unit: string }) {
  const x = place(axis);
  const base = Math.min(Math.max(0, axis.lo), axis.hi);
  const [a, b] = step.from === null ? [base, step.level] : [step.from, step.level];
  const left = Math.min(x(a), x(b));
  const width = Math.max(2, Math.abs(x(b) - x(a)));
  const sign = step.value > 0 ? 1 : step.value < 0 ? -1 : 0;
  return (
    <li className={cx(ROW_WIDE, "border-b border-border-hairline py-2 last:border-b-0")}>
      <span className="text-small font-medium wrap-anywhere text-text-primary sm:row-start-1">
        {step.label}
      </span>
      <span className="text-right sm:col-start-3 sm:row-start-1">
        {step.role === "change" ? (
          <Moved
            change={{
              text: `${sign < 0 ? MINUS : sign > 0 ? "+" : ""}${group(String(Math.abs(step.value)))}`,
              basis: "stated",
              sign,
              magnitude: Math.abs(step.value),
              conflict: false,
            }}
            tone="none"
          />
        ) : (
          <span className="font-mono text-small font-medium text-text-primary tabular-nums">
            {withMark(step.text, unit)}
          </span>
        )}
      </span>
      <svg
        viewBox={`0 0 ${String(W)} 28`}
        width="100%"
        role="img"
        aria-label={stepReading(step, unit)}
        data-step={step.label}
        className={cx("block min-w-[220px]", STRIP_WIDE)}
      >
        <Grid axis={axis} place={x} />
        <rect
          data-role={step.role}
          data-from={a}
          data-to={b}
          x={left}
          y="6"
          width={width}
          height="16"
          rx="2"
          className={
            step.role === "opening"
              ? "fill-chart-3"
              : step.role === "closing"
                ? "fill-chart-1"
                : "fill-chart-2"
          }
        />
      </svg>
    </li>
  );
}

/** Every step as the handoff states it: the amounts, no totals made here. */
function bridgeTable(bridge: Extract<Bridge, { kind: "bridge" }>): TableViewData {
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

function BridgeTile({
  props,
  bridge,
}: {
  props: LeadProps;
  bridge: Extract<Bridge, { kind: "bridge" }>;
}) {
  const truncated = bridge.axis.lo > 0;
  return (
    <FigureTile
      props={props}
      span={12}
      label={BRIDGE_NAME}
      kicker={`Prior to current${bridge.unit ? `, ${bridge.unit}` : ""}`}
      title={BRIDGE_NAME}
      line={bridge.line}
      source="the variance bridge"
      legend={[
        { tone: "prior", text: "Opening" },
        { tone: "secondary", text: "Step" },
        { tone: "primary", text: "Closing" },
      ]}
      notes={[
        ...(truncated
          ? [
              `The axis starts at ${mark(bridge.axis.lo, bridge.unit)}, not zero; each total is drawn from there.`,
            ]
          : []),
        ...bridge.notes,
      ]}
      table={bridgeTable(bridge)}
    >
      <ol aria-label="Variance bridge steps" className="flex flex-col">
        {bridge.steps.map((step) => (
          <StepRow key={step.line} step={step} axis={bridge.axis} unit={bridge.unit} />
        ))}
      </ol>
      <AxisRow axis={bridge.axis} unit={bridge.unit} stack={false} />
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
          stack={false}
          notes={[]}
          source="the prior and current results"
        />
      ) : (
        <Gap name={RESULTS_NAME}>{movers.reason}</Gap>
      )}
      {kpis.kind === "ready" ? (
        <PairTile
          props={props}
          figure={kpis}
          name={KPIS_NAME}
          span={beside ? 4 : 12}
          stack={beside}
          notes={[]}
          source="the margin and KPI changes"
        />
      ) : (
        <Gap name={KPIS_NAME}>{kpis.reason}</Gap>
      )}
      {bridge === null && <Gap name={BRIDGE_NAME}>{NO_BRIDGE}</Gap>}
    </LeadFrame>
  );
};

EarningsDeltaLead.draws = [] as const;
