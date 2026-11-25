import type { FC } from "react";
import { GapNote } from "../overview/Tile";
import {
  readBridge,
  readLeverage,
  type Bridge,
  type LeverageMeasure,
  type Support,
} from "./earningsQualityData";
import { FigureTile, GapTile, LeadFrame } from "./kit/LeadFrame";
import {
  fittingTicks,
  Measured,
  niceAxis,
  SIZE,
  textWidth,
  Waterfall,
  type WaterfallRow,
} from "./kit/marks";
import { group } from "./kit/numbers";
import type { LeadProps } from "./types";

/*
 * CP-1D earnings quality lead. Synthetic contract: built from src/deploy_vii/bindings/cp1d.py and
 * src/deploy_workflow/owners/cp1d.py (the add-back bridge, the assessment T1D.2, the leverage table
 * T1D.6); no real CP-1D handoff has ever been retained, so this lead is unproven on a real run.
 * Support (supported / not supported) is drawn only where the assessment states a word for that
 * step's own name; it is never inferred. No sum, difference or comparison is stated in words:
 * the drawing places stated figures, and the table view lists them.
 */

type Tone = "primary" | "secondary" | "worse";

/** The tone of a stated support word: its segment of the step, with the word beside it. */
const TONES: Record<Support, Tone> = {
  Supported: "primary",
  "Partly supported": "secondary",
  "Not supported": "worse",
  "Insufficient evidence": "worse",
};

function rowsOf(bridge: Bridge): WaterfallRow[] {
  const someStated = bridge.supportStated;
  const steps = bridge.changes.map((step): WaterfallRow => {
    const label =
      someStated && step.support === null ? `${step.label} (support not stated)` : step.label;
    const base = { kind: "step" as const, label, value: step.value, text: group(step.amount) };
    if (step.support === null) return base;
    const tone = TONES[step.support];
    if (step.split)
      return {
        ...base,
        split: [
          {
            text: `${step.support}, accepted ${group(step.split.accepted)}`,
            value: Number(step.split.accepted),
            tone,
          },
          {
            text: `Not accepted ${group(step.split.notAccepted)}`,
            value: Number(step.split.notAccepted),
            tone: "worse",
          },
        ],
      };
    return { ...base, split: [{ text: step.support, value: step.value, tone }] };
  });
  return [
    {
      kind: "level",
      label: bridge.opening.label,
      value: bridge.opening.value,
      text: group(bridge.opening.amount),
    },
    ...steps,
    {
      kind: "closing",
      label: bridge.closing.label,
      value: bridge.closing.value,
      text: group(bridge.closing.amount),
    },
  ];
}

function BridgeTile({ props, bridge }: { props: LeadProps; bridge: Bridge }) {
  const unit = bridge.unit;
  return (
    <FigureTile
      props={props}
      span={7}
      label="Earnings quality"
      kicker={unit}
      title="Earnings quality"
      line={bridge.line}
      source="the earnings-quality bridge"
      notes={[
        ...(!bridge.supportStated ? ["Support is not stated per step."] : []),
        ...bridge.notes,
      ]}
      table={{
        caption: "Earnings quality bridge",
        headers: ["Step", "Amount", "Unit", "Support stated", "Accepted", "Not accepted"],
        rows: [
          [bridge.opening.label, group(bridge.opening.amount), unit, "Not applicable", "", ""],
          ...bridge.changes.map((step) => [
            step.label,
            group(step.amount),
            unit,
            step.support ?? "Not stated",
            step.split ? group(step.split.accepted) : "Not stated",
            step.split ? group(step.split.notAccepted) : "Not stated",
          ]),
          [bridge.closing.label, group(bridge.closing.amount), unit, "Not applicable", "", ""],
        ],
      }}
    >
      <Measured fallback={640}>
        {(width) => (
          <Waterfall
            width={width}
            unit={unit}
            axisStart="auto"
            rows={rowsOf(bridge)}
            legend={{ level: bridge.opening.label, step: "Step", closing: bridge.closing.label }}
          />
        )}
      </Measured>
    </FigureTile>
  );
}

const withX = (text: string) => `${group(text)}x`;

/** Where a label of `width` px starts when centred on `x`, kept inside a figure `total` px wide. */
const centredStart = (x: number, width: number, total: number) =>
  Math.min(Math.max(x - width / 2, 0), Math.max(total - width, 0));

const PAD = 10;

function Pair({
  item,
  width,
}: {
  item: Extract<LeverageMeasure, { kind: "pair" }>;
  width: number;
}) {
  const axis = niceAxis([item.reported.value, item.restated.value], { zero: true, suffix: "x" });
  const x = (value: number) => axis.place(value, PAD, width - PAD);
  const a = x(item.reported.value);
  const b = x(item.restated.value);
  const statements = `statements ${withX(item.reported.text)}`;
  const supported = `supported ${withX(item.restated.text)}`;
  // Each label hangs from its own mark, kept inside the figure; the second drops a line when the
  // first would touch it.
  const first = centredStart(a, textWidth(statements, SIZE.label), width);
  const second = centredStart(b, textWidth(supported, SIZE.label), width);
  const touching =
    second < first + textWidth(statements, SIZE.label) + 8 &&
    first < second + textWidth(supported, SIZE.label) + 8;
  const kept = fittingTicks(axis, PAD, width - PAD, (text) => textWidth(text, SIZE.tick));
  const reading = `${item.measure}: ${withX(item.reported.text)} on the statements, ${withX(item.restated.text)} on supported earnings.`;
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <h4 className="text-small font-medium text-text-primary">{item.measure}</h4>
      <svg
        viewBox={`0 0 ${String(width)} ${String(touching ? 112 : 96)}`}
        width="100%"
        role="img"
        aria-label={reading}
        data-measure={item.measure}
        className="block"
      >
        <text x={first} y="16" fontSize={SIZE.label} className="fill-text-secondary font-mono">
          {statements}
        </text>
        {kept.map((tick) => (
          <line
            key={tick.label}
            x1={x(tick.value)}
            x2={x(tick.value)}
            y1="26"
            y2="50"
            className="stroke-border-hairline"
          />
        ))}
        <line x1={PAD} x2={width - PAD} y1="38" y2="38" className="stroke-border-hairline" />
        <line
          data-gap-line
          x1={a}
          x2={b}
          y1="38"
          y2="38"
          strokeWidth="3"
          className="stroke-chart-1"
        />
        <circle
          data-reported={item.reported.text}
          cx={a}
          cy="38"
          r="7"
          strokeWidth="2"
          className="fill-surface-card stroke-chart-3"
        />
        <circle data-restated={item.restated.text} cx={b} cy="38" r="7" className="fill-chart-1" />
        <text x={second} y="68" fontSize={SIZE.label} className="fill-text-primary font-mono">
          {supported}
        </text>
        {kept.map((tick) => {
          const at = x(tick.value);
          const half = textWidth(tick.label, SIZE.tick) / 2;
          return (
            <text
              key={tick.label}
              x={Math.min(Math.max(at, half), width - half)}
              y={touching ? 104 : 88}
              textAnchor="middle"
              fontSize={SIZE.tick}
              className="fill-text-tertiary font-mono"
            >
              {tick.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

function LeverageTile({ props }: { props: LeadProps }) {
  const leverage = readLeverage(props.entry);
  if (leverage.state === "gap")
    return (
      <GapTile span={5} label="Restated leverage" kicker="Restated leverage">
        {leverage.reason}
      </GapTile>
    );
  const pairs = leverage.measures.filter((item) => item.kind === "pair");
  return (
    <FigureTile
      props={props}
      span={5}
      label="Restated leverage"
      kicker="Multiples of EBITDA, from zero"
      title="Restated leverage"
      line={leverage.line}
      source="restated leverage"
      legend={[
        { tone: "prior", text: "On the statements" },
        { tone: "primary", text: "On supported earnings" },
      ]}
      table={{
        caption: "Leverage on the statements and on supported earnings",
        headers: ["Measure", "Statements", "Supported earnings"],
        rows: leverage.measures.map((item) =>
          item.kind === "pair"
            ? [item.measure, withX(item.reported.text), withX(item.restated.text)]
            : [item.measure, "Not stated", "Not stated"],
        ),
      }}
    >
      {pairs.length === 0 && <GapNote>No leverage multiple is stated on both bases.</GapNote>}
      {leverage.measures.map((item) =>
        item.kind === "pair" ? (
          <Measured key={item.measure} fallback={460}>
            {(width) => <Pair item={item} width={width} />}
          </Measured>
        ) : (
          <div key={item.measure} className="flex flex-col gap-1">
            <h4 className="text-small font-medium text-text-primary">{item.measure}</h4>
            <GapNote>{`Not drawn: ${item.reason}.`}</GapNote>
          </div>
        ),
      )}
    </FigureTile>
  );
}

function Content(props: LeadProps) {
  const bridge = readBridge(props.entry);
  return (
    <>
      {bridge.state === "ready" ? (
        <BridgeTile props={props} bridge={bridge} />
      ) : (
        <GapTile span={7} label="Earnings quality" kicker="Earnings quality">
          {bridge.reason}
          {bridge.stated.length > 0 &&
            ` Stated steps: ${bridge.stated.map((step) => `${step.label} ${step.text}`).join("; ")}.`}
        </GapTile>
      )}
      <LeverageTile props={props} />
    </>
  );
}

/** CP-1D: the earnings-quality bridge from reported to adjusted EBITDA, and leverage restated on supported earnings. */
export const EarningsQualityLead: FC<LeadProps> & {
  draws?: readonly ("figures" | "events" | "maps")[];
} = function EarningsQualityLead(props) {
  return (
    <LeadFrame props={props}>
      <Content {...props} />
    </LeadFrame>
  );
};
// This lead draws no typed figure, event lane or map of the module's own.
EarningsQualityLead.draws = [];
