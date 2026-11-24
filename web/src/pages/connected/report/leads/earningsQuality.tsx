import { cx } from "@/utils/cx";
import { GapNote, Tile } from "../overview/Tile";
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
import { Derived, FigureTile, LeadFrame, ScrollFigure } from "./kit/LeadFrame";
import { group } from "./kit/numbers";
import type { LeadProps } from "./types";

/*
 * CP-1D earnings quality lead. Synthetic contract: built from src/deploy_vii/bindings/cp1d.py and
 * src/deploy_workflow/owners/cp1d.py (the add-back bridge, the assessment T1D.2, the leverage table
 * T1D.6); no real CP-1D handoff has ever been retained, so this lead is unproven on a real run.
 * Support (supported / not supported) is drawn only where the assessment states a word for that
 * add-back's own name; it is never inferred.
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
  const label =
    row.kind === "total"
      ? `${step.label}: ${group(step.amount)} ${bridge.unit}${geometry.truncated ? `, drawn from an axis that starts at ${group(String(geometry.lo))}` : ""}`
      : `${step.label}: ${signed(step.amount)} ${bridge.unit}. ${support ? `Support stated: ${support}.` : "Support is not stated."}`;
  const width = Math.max(2, row.x1 - row.x0);
  const text = row.kind === "total" ? group(step.amount) : signed(step.amount);
  return (
    <li className="grid min-w-0 gap-1 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] sm:items-center sm:gap-3">
      <div className="min-w-0">
        <p className="text-small text-text-primary wrap-anywhere">{step.label}</p>
        {row.kind === "change" && (
          <p className="text-caption text-text-tertiary">{support ?? "Support not stated"}</p>
        )}
      </div>
      <ScrollFigure label="Add-back bridge figure" size="narrow">
        <svg
          viewBox={`0 0 ${String(BRIDGE.width)} ${String(BRIDGE.height)}`}
          width="100%"
          role="img"
          aria-label={label}
        >
          <rect
            data-step={step.label}
            data-from={row.from}
            data-to={row.to}
            x={row.x0}
            y="7"
            width={width}
            height="16"
            rx="2"
            className={row.kind === "total" ? "fill-text-secondary" : FILL[support ?? "none"]}
          />
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
  const unstated = bridge.changes.some((step) => step.support === null);
  if (unstated)
    items.push({
      tone: "prior",
      text: bridge.supportStated
        ? "Support not stated for this add-back"
        : "Support is not stated per add-back",
    });
  return items;
}

function BridgeTile({ props, bridge }: { props: LeadProps; bridge: Bridge }) {
  const geometry = bridgeGeometry(bridge);
  const unit = bridge.unit;
  const count = bridge.changes.length;
  const unstated = bridge.changes.filter((step) => step.support === null).length;
  return (
    <FigureTile
      props={props}
      span={7}
      label="Add-back bridge"
      kicker={`${unit}${geometry.truncated ? `, both totals cut: axis starts at ${group(String(geometry.lo))}` : ""}`}
      title={`${bridge.opening.label} ${group(bridge.opening.amount)} to ${bridge.closing.label} ${group(bridge.closing.amount)} through ${String(count)} add-back${count === 1 ? "" : "s"}`}
      line={bridge.line}
      source="the add-back bridge"
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
        caption: "Add-back bridge",
        headers: ["Step", "Amount", "Unit", "Support stated"],
        rows: [
          [bridge.opening.label, group(bridge.opening.amount), unit, "Not applicable"],
          ...bridge.changes.map((step) => [
            step.label,
            group(step.amount),
            unit,
            step.support ?? "Not stated",
          ]),
          [bridge.closing.label, group(bridge.closing.amount), unit, "Not applicable"],
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
      <div className="flex flex-col gap-1 border-t border-border-hairline pt-3 text-small text-text-secondary">
        <p data-total>
          Add-backs total{" "}
          <span className="font-mono text-text-primary tabular-nums">{group(bridge.total)}</span>{" "}
          {unit}
          <Derived />
        </p>
        {bridge.bySupport.length > 0 && (
          <p data-by-support>
            {bridge.bySupport.map((item, at) => (
              <span key={item.word}>
                {at > 0 && " · "}
                {item.word}{" "}
                <span className="font-mono text-text-primary tabular-nums">
                  {group(item.total)}
                </span>
              </span>
            ))}
            <Derived />
          </p>
        )}
        {bridge.supportStated && unstated > 0 && (
          <p className="text-caption text-text-tertiary">
            Support is not stated for {String(unstated)} add-back{unstated === 1 ? "" : "s"}.
          </p>
        )}
      </div>
    </FigureTile>
  );
}

function BridgeGap({
  reason,
  stated,
}: {
  reason: string;
  stated: { label: string; text: string }[];
}) {
  return (
    <Tile span={7} label="Add-back bridge" kicker="Not drawn" tone="gap" className="self-start">
      <GapNote>{reason}</GapNote>
      {stated.length > 0 && (
        <ul className="flex flex-col gap-1 text-small text-text-secondary">
          {stated.map((step, at) => (
            <li key={`${step.label}-${String(at)}`} className="flex justify-between gap-4">
              <span>{step.label}</span>
              <span className="font-mono tabular-nums">{step.text}</span>
            </li>
          ))}
        </ul>
      )}
    </Tile>
  );
}

const withX = (text: string) => `${group(text)}x`;
const changeWord = (change: string) =>
  Number(change) > 0 ? "higher" : Number(change) < 0 ? "lower" : "equal";

function Pair({ item }: { item: Extract<LeverageMeasure, { kind: "pair" }> }) {
  const scale = leverageScale([item.reported.value, item.restated.value]);
  const a = scale.x(item.reported.value);
  const b = scale.x(item.restated.value);
  const close = Math.abs(a - b) < 120;
  const delta = `${Number(item.change) > 0 ? "+" : ""}${group(item.change)}x`;
  const reading = `${item.measure}: ${withX(item.reported.text)} on the statements, ${withX(item.restated.text)} on supported earnings; restated is ${changeWord(item.change)} by ${group(item.change.replace(/^-/, ""))}x (derived).`;
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
          className={item.tone === "worse" ? "stroke-warning-mark" : "stroke-chart-1"}
        />
        <circle
          data-reported={item.reported.text}
          cx={a}
          cy="34"
          r="7"
          strokeWidth="2"
          className="fill-surface-card stroke-chart-3"
        />
        <circle
          data-restated={item.restated.text}
          cx={b}
          cy="34"
          r="7"
          className={item.tone === "worse" ? "fill-warning-mark" : "fill-chart-1"}
        />
        <text
          x={(a + b) / 2}
          y="20"
          textAnchor="middle"
          fontSize="12"
          className="fill-text-primary font-mono"
        >
          {delta} derived
        </text>
        <text
          x={a}
          y="58"
          textAnchor="middle"
          fontSize="12"
          className="fill-text-secondary font-mono"
        >
          statements {withX(item.reported.text)}
        </text>
        <text
          x={b}
          y={close ? 74 : 58}
          textAnchor="middle"
          fontSize="12"
          className="fill-text-primary font-mono"
        >
          supported {withX(item.restated.text)}
        </text>
      </svg>
      <p
        className={cx(
          "text-caption",
          item.tone === "worse" ? "text-warning-text" : "text-text-secondary",
        )}
      >
        Restated is {changeWord(item.change)} by {group(item.change.replace(/^-/, ""))}x
        <Derived />
        {item.tone === "worse" || item.tone === "better" ? `, ${item.tone}` : ""}
      </p>
    </div>
  );
}

function LeverageTile({ props }: { props: LeadProps }) {
  const leverage = readLeverage(props.entry);
  if (leverage.state === "gap")
    return (
      <Tile span={5} label="Leverage restated" kicker="Not drawn" tone="gap" className="self-start">
        <GapNote>{leverage.reason}</GapNote>
      </Tile>
    );
  const [first] = leverage.measures;
  const title =
    first?.kind === "pair"
      ? `${first.measure} ${withX(first.reported.text)} on the statements, ${withX(first.restated.text)} on supported earnings`
      : "Leverage on the statements and on supported earnings";
  const pairs = leverage.measures.filter((item) => item.kind === "pair");
  return (
    <FigureTile
      props={props}
      span={5}
      label="Leverage restated"
      kicker="Multiples of EBITDA, from zero"
      title={title}
      line={leverage.line}
      source="restated leverage"
      legend={[
        { tone: "prior", text: "On the statements" },
        { tone: "primary", text: "On supported earnings" },
      ]}
      table={{
        caption: "Leverage on the statements and on supported earnings",
        headers: ["Measure", "Statements", "Supported earnings", "Change (derived)"],
        rows: leverage.measures.map((item) =>
          item.kind === "pair"
            ? [
                item.measure,
                withX(item.reported.text),
                withX(item.restated.text),
                `${Number(item.change) > 0 ? "+" : ""}${group(item.change)}x`,
              ]
            : [item.measure, "Not stated", "Not stated", item.reason],
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
        <BridgeGap reason={bridge.reason} stated={bridge.stated} />
      )}
      <LeverageTile props={props} />
    </>
  );
}

/** CP-1D: the add-back bridge from reported to adjusted EBITDA, and leverage restated on supported earnings. */
export function EarningsQualityLead(props: LeadProps) {
  return (
    <LeadFrame props={props}>
      <Content {...props} />
    </LeadFrame>
  );
}
