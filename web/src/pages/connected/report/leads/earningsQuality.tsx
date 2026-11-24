import type { FC } from "react";
import { GapNote } from "../overview/Tile";
import {
  BRIDGE,
  bridgeGeometry,
  leverageScale,
  readBridge,
  readLeverage,
  type Bridge,
  type LeverageMeasure,
  type Support,
} from "./earningsQualityData";
import { FigureTile, GapTile, LeadFrame, ScrollFigure } from "./kit/LeadFrame";
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

const FILL: Record<Support | "none", string> = {
  Supported: "fill-chart-1",
  "Partly supported": "fill-chart-2",
  "Not supported": "fill-warning-mark",
  "Insufficient evidence": "fill-warning-mark",
  none: "fill-chart-3",
};

type LegendTone = "primary" | "secondary" | "signal" | "prior";

const signed = (amount: string) => (Number(amount) > 0 ? `+${group(amount)}` : group(amount));

function Row({
  bridge,
  row,
  geometry,
}: {
  bridge: Bridge;
  row: ReturnType<typeof bridgeGeometry>["rows"][number];
  geometry: ReturnType<typeof bridgeGeometry>;
}) {
  const { step } = row;
  const change =
    row.kind === "change" ? bridge.changes.find((item) => item.line === step.line) : undefined;
  const support = change?.support ?? null;
  const split = change?.split ?? null;
  const parts = split
    ? ` Accepted ${group(split.accepted)}, not accepted ${group(split.notAccepted)}.`
    : "";
  const label =
    row.kind === "total"
      ? `${step.label}: ${group(step.amount)} ${bridge.unit}${geometry.truncated ? `, drawn from an axis that starts at ${group(String(geometry.lo))}` : ""}`
      : `${step.label}: ${signed(step.amount)} ${bridge.unit}. ${support ? `Support stated: ${support}.` : "Support is not stated."}${parts}`;
  const full = Math.max(2, row.x1 - row.x0);
  const accepted = split ? (Number(split.accepted) / Number(step.amount)) * full : 0;
  const text = row.kind === "total" ? group(step.amount) : signed(step.amount);
  const fill = row.kind === "total" ? "fill-text-secondary" : FILL[support ?? "none"];
  return (
    <li className="grid min-w-0 gap-1 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] sm:items-center sm:gap-3">
      <div className="min-w-0">
        <p className="text-small text-text-primary wrap-anywhere">{step.label}</p>
        {row.kind === "change" && (
          <p className="text-caption text-text-tertiary">
            {support ?? "Support not stated"}
            {split &&
              ` · accepted ${group(split.accepted)}, not accepted ${group(split.notAccepted)}`}
          </p>
        )}
      </div>
      <ScrollFigure label="Earnings quality figure" size="narrow">
        <svg
          viewBox={`0 0 ${String(BRIDGE.width)} ${String(BRIDGE.height)}`}
          width="100%"
          role="img"
          aria-label={label}
        >
          <g data-step={step.label} data-from={row.from} data-to={row.to}>
            {split ? (
              <>
                <rect
                  data-part="accepted"
                  x={row.x0}
                  y="7"
                  width={accepted}
                  height="16"
                  rx="2"
                  className={fill}
                />
                <rect
                  data-part="not-accepted"
                  x={row.x0 + accepted}
                  y="7"
                  width={full - accepted}
                  height="16"
                  rx="2"
                  className="fill-warning-mark"
                />
              </>
            ) : (
              <rect x={row.x0} y="7" width={full} height="16" rx="2" className={fill} />
            )}
          </g>
          {row.kind === "total" && geometry.truncated && (
            <path
              data-axis-cut
              d={`M${String(row.x0 + 10)} 3 ${String(row.x0 + 4)} 27M${String(row.x0 + 16)} 3 ${String(row.x0 + 10)} 27`}
              strokeWidth="1.5"
              fill="none"
              className="stroke-surface-card"
            />
          )}
          <text x={row.x1 + 8} y="19" fontSize="12" className="fill-text-primary font-mono">
            {text}
          </text>
        </svg>
      </ScrollFigure>
    </li>
  );
}

function legendOf(bridge: Bridge) {
  const words = new Set(bridge.changes.flatMap((step) => (step.support ? [step.support] : [])));
  const tones = {
    Supported: "primary",
    "Partly supported": "secondary",
    "Not supported": "signal",
    "Insufficient evidence": "signal",
  } as const;
  const items: { tone: LegendTone; text: string }[] = (Object.keys(tones) as Support[])
    .filter((word) => words.has(word))
    .map((word) => ({ tone: tones[word], text: word }));
  if (bridge.changes.some((step) => step.split))
    items.push({ tone: "signal", text: "Not accepted amount" });
  const unstated = bridge.changes.some((step) => step.support === null);
  if (unstated)
    items.push({
      tone: "prior",
      text: bridge.supportStated
        ? "Support not stated for this step"
        : "Support is not stated per step",
    });
  return items;
}

function BridgeTile({ props, bridge }: { props: LeadProps; bridge: Bridge }) {
  const geometry = bridgeGeometry(bridge);
  const unit = bridge.unit;
  return (
    <FigureTile
      props={props}
      span={7}
      label="Earnings quality"
      kicker={`${unit}${geometry.truncated ? `, both totals cut: axis starts at ${group(String(geometry.lo))}` : ""}`}
      title="Earnings quality"
      line={bridge.line}
      source="the earnings-quality bridge"
      legend={legendOf(bridge)}
      notes={[
        ...(geometry.truncated
          ? [
              `The axis starts at ${group(String(geometry.lo))}, not zero; both totals are drawn cut.`,
            ]
          : []),
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
      <ol className="flex min-w-0 flex-col gap-2">
        {geometry.rows.map((row) => (
          <Row
            key={`${row.step.label}-${String(row.step.line)}`}
            bridge={bridge}
            row={row}
            geometry={geometry}
          />
        ))}
      </ol>
    </FigureTile>
  );
}

const withX = (text: string) => `${group(text)}x`;

/** Where a label centred on `x` can sit inside the drawing without leaving it. */
const anchorAt = (x: number) => (x < 90 ? "start" : x > 400 ? "end" : "middle");

function Pair({ item }: { item: Extract<LeverageMeasure, { kind: "pair" }> }) {
  const scale = leverageScale([item.reported.value, item.restated.value]);
  const a = scale.x(item.reported.value);
  const b = scale.x(item.restated.value);
  const close = Math.abs(a - b) < 120;
  const reading = `${item.measure}: ${withX(item.reported.text)} on the statements, ${withX(item.restated.text)} on supported earnings.`;
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <h4 className="text-small font-medium text-text-primary">{item.measure}</h4>
      <svg
        viewBox="0 0 490 100"
        width="100%"
        role="img"
        aria-label={reading}
        data-measure={item.measure}
      >
        {scale.ticks.map((tick) => (
          <g key={tick.label}>
            <line x1={tick.x} x2={tick.x} y1="26" y2="42" className="stroke-border-hairline" />
            <text
              x={tick.x}
              y="94"
              textAnchor="middle"
              fontSize="11"
              className="fill-text-tertiary font-mono"
            >
              {tick.label}x
            </text>
          </g>
        ))}
        <line x1="24" x2="464" y1="34" y2="34" className="stroke-border-hairline" />
        <line
          data-gap-line
          x1={a}
          x2={b}
          y1="34"
          y2="34"
          strokeWidth="3"
          className="stroke-chart-1"
        />
        <circle
          data-reported={item.reported.text}
          cx={a}
          cy="34"
          r="7"
          strokeWidth="2"
          className="fill-surface-card stroke-chart-3"
        />
        <circle data-restated={item.restated.text} cx={b} cy="34" r="7" className="fill-chart-1" />
        <text
          x={a}
          y="58"
          textAnchor={anchorAt(a)}
          fontSize="12"
          className="fill-text-secondary font-mono"
        >
          statements {withX(item.reported.text)}
        </text>
        <text
          x={b}
          y={close ? 74 : 58}
          textAnchor={anchorAt(b)}
          fontSize="12"
          className="fill-text-primary font-mono"
        >
          supported {withX(item.restated.text)}
        </text>
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
          <Pair key={item.measure} item={item} />
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
