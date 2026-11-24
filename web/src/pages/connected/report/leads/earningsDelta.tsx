import { cx } from "@/utils/cx";
import { FigureSourceControl } from "../overview/figureParts";
import { GapBar } from "../overview/marks";
import { GapNote, Tile } from "../overview/Tile";
import {
  CAP,
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
import { Derived, FigureTile, LeadFrame, type TableViewData } from "./kit/LeadFrame";
import { group } from "./kit/numbers";
import type { LeadProps } from "./types";

const NO_BRIDGE = "No variance bridge in this handoff.";

// The strip is about 580 px wide in the tile at 1440 px, so one drawing unit is about one pixel there
// and 11-unit tick text is about 11 px. PAD leaves room for the widest tick label at each end.
const W = 580;
const PAD = 44;
const MID = 14;
const MINUS = "−";

const word = (sign: number) => (sign > 0 ? "up" : sign < 0 ? "down" : "unchanged");
const arrow = (sign: number) => (sign > 0 ? "▲" : sign < 0 ? "▼" : "");
const unsigned = (text: string) => text.replace(/^[+−-]/, "");
const plural = (count: number, one: string, many: string) => (count === 1 ? one : many);

/** Where a value falls along a strip of the shared axis. */
const place = (axis: Axis) => (value: number) =>
  PAD + ((value - axis.lo) / (axis.hi - axis.lo)) * (W - 2 * PAD);

const mark = (value: number, unit: string) => withMark(String(value), unit);

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
function AxisRow({ axis, unit, truncated }: { axis: Axis; unit: string; truncated: boolean }) {
  const x = place(axis);
  return (
    <div className={`${ROW} pt-1`}>
      <svg
        viewBox={`0 0 ${String(W)} 20`}
        width="100%"
        aria-hidden="true"
        className="col-span-2 block min-w-[220px] sm:col-span-1 sm:col-start-2"
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
      {truncated && <span className="sr-only">The axis does not start at zero.</span>}
    </div>
  );
}

const ROW =
  "grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 sm:grid-cols-[minmax(10rem,16rem)_minmax(0,1fr)_minmax(9rem,13rem)]";

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

function DumbbellRow({ pair, axis, unit }: { pair: Pair; axis: Axis; unit: string }) {
  const x = place(axis);
  const [from, to] = [pair.prior.value ?? 0, pair.current.value ?? 0];
  const flat = from === to;
  const worse = pair.tone === "worse";
  return (
    <li className={`${ROW} border-b border-border-hairline py-2 last:border-b-0`}>
      <span className="flex min-w-0 flex-col gap-0.5 sm:row-start-1">
        <span className="text-small font-medium wrap-anywhere text-text-primary">{pair.label}</span>
        <span className="font-mono text-caption text-text-secondary tabular-nums">
          {sideText(pair.prior, unit)} {"→"} {sideText(pair.current, unit)}
          {pair.priorPeriod && pair.currentPeriod && (
            <span className="font-body text-text-tertiary">{` · ${pair.priorPeriod} to ${pair.currentPeriod}`}</span>
          )}
        </span>
      </span>
      {pair.change && (
        <span className="sm:col-start-3 sm:row-start-1">
          <Moved change={pair.change} tone={pair.tone} />
        </span>
      )}
      <svg
        viewBox={`0 0 ${String(W)} 28`}
        width="100%"
        role="img"
        aria-label={pairReading(pair, unit)}
        data-pair={pair.label}
        className="col-span-2 block min-w-[220px] sm:col-span-1 sm:col-start-2 sm:row-start-1"
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
      className={`${ROW} border-b border-border-hairline py-2 last:border-b-0`}
    >
      <span className="text-small font-medium wrap-anywhere text-text-primary">{pair.label}</span>
      <div className="col-span-2 flex flex-col gap-1 sm:col-span-1 sm:col-start-2 sm:row-start-1">
        <GapBar />
        <span className="text-caption text-gap-text">{[...new Set(reasons)].join(" · ")}</span>
      </div>
    </li>
  );
}

function GroupRows({ group: one, label }: { group: PairGroup; label: string }) {
  const { axis } = one;
  const truncated = (axis?.lo ?? 0) > 0;
  const hidden = one.ranked.length - one.shown.length;
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
            {one.shown.map((pair) => (
              <DumbbellRow key={pair.line} pair={pair} axis={axis} unit={one.unit} />
            ))}
          </ol>
          <AxisRow axis={axis} unit={one.unit} truncated={truncated} />
        </>
      )}
      {hidden > 0 && (
        <p className="text-caption text-text-secondary">
          {`${String(hidden)} more ${plural(hidden, "pair", "pairs")} in the table view; this figure draws the first ${String(CAP)}.`}
        </p>
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

function pairTable(figure: Extract<PairFigure, { kind: "ready" }>, caption: string): TableViewData {
  const cell = sideText;
  const rows = figure.groups.flatMap((one) =>
    [...one.ranked, ...one.gaps, ...one.words].map((pair) => [
      pair.label,
      one.unit,
      pair.priorPeriod ?? "",
      cell(pair.prior, one.unit),
      pair.currentPeriod ?? "",
      cell(pair.current, one.unit),
      pair.change ? (pair.change.sign === 0 ? "unchanged" : pair.change.text) : "",
      pair.change ? pair.change.basis : "",
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
    ],
    rows,
  };
}

const DISAGREES =
  "A stated change disagreed in direction with its two figures; the exact difference is shown, marked derived.";
const conflicted = (figure: Extract<PairFigure, { kind: "ready" }>) =>
  figure.groups.some((one) => one.ranked.some((pair) => pair.change?.conflict));

const groupsOf = (figure: PairFigure) => (figure.kind === "ready" ? figure.groups : []);

function legendOf() {
  return [
    { tone: "prior" as const, text: "Prior period" },
    { tone: "primary" as const, text: "Current period" },
  ];
}

const DERIVED_TAG = " (derived)";
const derivedTag = (change: Change | null | undefined) =>
  change?.basis === "derived" ? DERIVED_TAG : "";

function moversTitle(figure: Extract<PairFigure, { kind: "ready" }>) {
  if (figure.groups.length !== 1) return `Prior and current results, each unit on its own scale`;
  const [top, next] = figure.groups[0]?.ranked ?? [];
  if (!top?.change) return "Prior and current results";
  if (top.change.sign === 0) return "No ranked measure changed between the periods";
  const tag = derivedTag(top.change) || derivedTag(next?.change);
  // Two measures at the top of the ranking with the same size of change: no one winner is named.
  if (next?.change?.magnitude === top.change.magnitude)
    return `Largest moves are tied at ${unsigned(top.change.text)}${tag}`;
  return `${top.label} moved most: ${word(top.change.sign)} ${unsigned(top.change.text)}${tag}`;
}

function kpiTitle(figure: Extract<PairFigure, { kind: "ready" }>) {
  const rows = figure.groups.flatMap((one) => one.shown.filter((pair) => pair.change));
  if (rows.length === 0) return "Margins and KPIs, prior to current";
  const parts = rows
    .slice(0, 2)
    .map((pair) =>
      pair.change?.sign === 0
        ? `${pair.label} unchanged`
        : `${pair.label} ${word(pair.change?.sign ?? 0)} ${unsigned(pair.change?.text ?? "")}${derivedTag(pair.change)}`,
    );
  const rest = rows.length - parts.length;
  return `${parts.join("; ")}${rest > 0 ? `; ${String(rest)} more` : ""}`;
}

function unitKicker(base: string, figure: Extract<PairFigure, { kind: "ready" }>) {
  const [only] = figure.groups;
  return figure.groups.length === 1 && only?.unit ? `${base}, ${only.unit}` : base;
}

function PairTile({
  props,
  figure,
  label,
  kicker,
  title,
  notes,
  source,
}: {
  props: LeadProps;
  figure: PairFigure;
  label: string;
  kicker: string;
  title: (figure: Extract<PairFigure, { kind: "ready" }>) => string;
  notes: readonly string[];
  source: string;
}) {
  if (figure.kind === "gap")
    return (
      <Tile span={12} label={label} kicker={kicker} tone="gap">
        <GapNote>{figure.reason}</GapNote>
      </Tile>
    );
  const drawn = groupsOf(figure).some((one) => one.shown.length > 0);
  return (
    <FigureTile
      props={props}
      span={12}
      label={label}
      kicker={unitKicker(kicker, figure)}
      title={title(figure)}
      line={figure.line}
      source={source}
      legend={drawn ? legendOf() : []}
      notes={[...notes, ...figure.notes, ...(conflicted(figure) ? [DISAGREES] : [])]}
      table={pairTable(figure, `${label}, every pair the handoff states`)}
    >
      {figure.groups.map((one) => (
        <GroupRows
          key={one.ranked[0]?.line ?? one.gaps[0]?.line ?? one.words[0]?.line ?? one.unit}
          group={one}
          label={`${label}${one.unitNotStated ? ", unit not stated" : one.unit ? `, ${one.unit}` : ""}`}
        />
      ))}
      {!drawn && <GapNote>The handoff states no pair with both figures to draw.</GapNote>}
    </FigureTile>
  );
}

// ---------------------------------------------------------------------------------------------

function stepReading(step: Step, unit: string) {
  const amount = withMark(step.text, unit);
  if (step.role !== "change")
    return `${step.label}, ${step.role === "opening" ? "opening" : "closing"} ${amount}${unit ? ` ${unit}` : ""}.`;
  return `${step.label}, ${step.value === 0 ? "no change" : `${step.value > 0 ? "up" : "down"} ${group(String(Math.abs(step.value)))}`}${unit ? ` ${unit}` : ""}, running total ${group(String(step.level))}.`;
}

function StepRow({ step, axis, unit }: { step: Step; axis: Axis; unit: string }) {
  const x = place(axis);
  const base = Math.min(Math.max(0, axis.lo), axis.hi);
  const [a, b] = step.from === null ? [base, step.level] : [step.from, step.level];
  const left = Math.min(x(a), x(b));
  const width = Math.max(2, Math.abs(x(b) - x(a)));
  const sign = step.value > 0 ? 1 : step.value < 0 ? -1 : 0;
  return (
    <li className={`${ROW} border-b border-border-hairline py-2 last:border-b-0`}>
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
        className="col-span-2 block min-w-[220px] sm:col-span-1 sm:col-start-2 sm:row-start-1"
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

function bridgeTable(bridge: Extract<Bridge, { kind: "bridge" }>): TableViewData {
  return {
    caption: "Variance bridge, every step the handoff states",
    headers: [
      "Step",
      "Role",
      `Amount${bridge.unit ? ` (${bridge.unit})` : ""}`,
      "Running total (derived)",
    ],
    rows: bridge.steps.map((step) => [
      step.label,
      step.role === "change" ? "Change" : step.role === "opening" ? "Opening" : "Closing",
      group(step.text),
      group(String(step.level)),
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
  const [open, close] = [bridge.steps[0], bridge.steps.at(-1)];
  const changes = bridge.steps.length - 2;
  const truncated = bridge.axis.lo > 0;
  return (
    <FigureTile
      props={props}
      span={12}
      label="Variance bridge"
      kicker={`Variance bridge, prior to current${bridge.unit ? `, ${bridge.unit}` : ""}`}
      title={`From ${open?.label ?? ""} ${withMark(open?.text ?? "", bridge.unit)} to ${close?.label ?? ""} ${withMark(close?.text ?? "", bridge.unit)}, in ${String(changes)} ${plural(changes, "step", "steps")}`}
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
      <AxisRow axis={bridge.axis} unit={bridge.unit} truncated={truncated} />
    </FigureTile>
  );
}

/** The bridge's own place when the handoff has a step table that cannot be drawn as one: why, in words. */
function BridgeGap({
  props,
  bridge,
}: {
  props: LeadProps;
  bridge: { line: number; message: string };
}) {
  return (
    <Tile
      span={12}
      label="Variance bridge"
      kicker="Variance bridge, prior to current"
      tone="gap"
      trace={
        <FigureSourceControl
          folder={props.run.folder}
          entry={props.entry}
          line={bridge.line}
          name="the variance bridge"
        />
      }
    >
      <GapNote>{bridge.message}</GapNote>
    </Tile>
  );
}

/** Earnings delta: the variance bridge where the handoff has one that adds up, the ranked movers, and margins and KPIs. */
export function EarningsDeltaLead(props: LeadProps) {
  const { bridge, movers, kpis } = earningsDelta(props.entry);
  return (
    <LeadFrame props={props}>
      {bridge?.kind === "bridge" && <BridgeTile props={props} bridge={bridge} />}
      {bridge?.kind === "unreconciled" && <BridgeGap props={props} bridge={bridge} />}
      <PairTile
        props={props}
        figure={movers}
        label="Ranked movers"
        kicker="Ranked movers, largest change first"
        title={moversTitle}
        notes={bridge === null ? [NO_BRIDGE] : []}
        source="the ranked movers"
      />
      <PairTile
        props={props}
        figure={kpis}
        label="Margins and KPIs"
        kicker="Margins and KPI changes, prior to current"
        title={kpiTitle}
        notes={[]}
        source="the margin and KPI changes"
      />
    </LeadFrame>
  );
}
