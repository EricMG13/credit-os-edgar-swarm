import { useId } from "react";
import { cx } from "@/utils/cx";
import { GapPattern } from "../overview/figureParts";
import { GapNote } from "../overview/Tile";
import { FigureTile, LeadFrame } from "./kit/LeadFrame";
import {
  BULLET,
  ledger,
  ledgerCells,
  limits,
  stance,
  type Conditions,
  type Figure,
  type Limit,
  type LedgerRow,
} from "./committeeData";
import type { LeadProps } from "./types";
import { IN_EVIDENCE, saidText, type Said } from "./validationData";

const VISIBLE_ROWS = 8;
/** Roughly how many characters fill one line of a ledger cell. */
const LINE = 56;

const MINI_GAP =
  "gap-hatch rounded-ds-xs border border-dashed border-border-gap px-2 py-1 text-caption text-gap-text text-pretty wrap-anywhere";

/** A handoff cell as the ledger draws it: clamped words with the rest on demand, or its gap. */
function SaidText({ value, lines, className }: { value: Said; lines: 1 | 2; className?: string }) {
  if (value.kind === "gap") return <p className={MINI_GAP}>{`Not supplied: ${value.reason}`}</p>;
  if (value.kind === "empty") return <p className={MINI_GAP}>Not stated in the handoff.</p>;
  const words = value.kind === "text" ? value.text : IN_EVIDENCE;
  const long = value.kind === "text" && words.length > LINE * lines;
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <p
        className={cx(
          "text-small text-text-primary text-pretty wrap-anywhere",
          lines === 1 ? "line-clamp-1" : "line-clamp-2",
          value.kind === "evidence" && "text-text-secondary",
          className,
        )}
      >
        {words}
      </p>
      {long && (
        <details className="text-caption text-text-secondary">
          <summary className="flex min-h-8 w-fit cursor-pointer items-center text-text-link">
            Show more
          </summary>
          <p className="text-pretty wrap-anywhere">{words}</p>
        </details>
      )}
    </div>
  );
}

const CONFIDENCE_LEVEL: Record<string, number> = { low: 1, medium: 2, high: 3 };

/** Three steps for the three stated confidence words; any other word is shown without a meter. */
function ConfidenceMeter({ word }: { word: string }) {
  const hatch = useId();
  const key = word.toLowerCase();
  const level = CONFIDENCE_LEVEL[key];
  const insufficient = key === "insufficient information";
  if (level === undefined && !insufficient) return null;
  return (
    <svg
      viewBox="0 0 84 12"
      width="84"
      height="12"
      aria-hidden="true"
      data-confidence={insufficient ? "none" : String(level)}
    >
      <defs>
        <GapPattern id={hatch} />
      </defs>
      {[0, 1, 2].map((at) => (
        <rect
          key={at}
          x={at * 30}
          y="2"
          width="24"
          height="8"
          rx="2"
          strokeWidth="1.5"
          data-step={at + 1}
          data-filled={level !== undefined && at < level ? "true" : "false"}
          className={
            insufficient
              ? "stroke-border-gap"
              : level !== undefined && at < level
                ? "fill-chart-1 stroke-chart-1"
                : "fill-surface-card stroke-chart-3"
          }
          fill={insufficient ? `url(#${hatch})` : undefined}
        />
      ))}
    </svg>
  );
}

function ConditionList({ conditions }: { conditions: Conditions }) {
  if (conditions === null) return null;
  if (conditions.kind === "gap")
    return <p className={MINI_GAP}>{`Conditions not supplied: ${conditions.reason}`}</p>;
  const [shown, rest] = [conditions.items.slice(0, 4), conditions.items.slice(4)];
  const item = (value: Said, at: number) => (
    <li key={`${String(at)}-${saidText(value)}`} className="text-pretty wrap-anywhere">
      {value.kind === "text" ? value.text : IN_EVIDENCE}
    </li>
  );
  return (
    <div className="flex flex-col gap-1.5 border-t border-border-hairline pt-3">
      <h4 className="text-small font-medium text-text-primary">Conditions</h4>
      <ul className="flex list-disc flex-col gap-1 pl-5 text-small text-text-secondary">
        {shown.map(item)}
      </ul>
      {rest.length > 0 && (
        <details className="text-small text-text-secondary">
          <summary className="flex min-h-8 w-fit cursor-pointer items-center text-caption text-text-link">
            {`Show ${String(rest.length)} more`}
          </summary>
          <ul className="flex list-disc flex-col gap-1 pl-5">
            {rest.map((value, at) => item(value, at + shown.length))}
          </ul>
        </details>
      )}
    </div>
  );
}

function StanceTile(props: LeadProps) {
  const found = stance(props.entry);
  const stated = found.state === "stated" ? found : null;
  const conditionRows =
    stated?.conditions?.kind === "list"
      ? stated.conditions.items.map((value) => ["Condition", saidText(value)])
      : [];
  return (
    <FigureTile
      props={props}
      span={5}
      label="Committee stance"
      kicker="Committee decision"
      title={
        stated
          ? `${stated.word}${stated.confidence ? `, confidence ${stated.confidence}` : ""}`
          : "Committee stance"
      }
      line={stated?.line}
      source="the committee stance"
      table={
        stated
          ? {
              caption: "Action bias, confidence and conditions as the handoff states them",
              headers: ["Item", "Value"],
              rows: [
                ["Action bias", stated.word],
                ["Confidence", stated.confidence ?? "Not stated"],
                ...conditionRows,
              ],
            }
          : undefined
      }
    >
      {stated === null ? (
        <GapNote>
          {found.state === "gap" && found.reason
            ? `The handoff states no action bias: ${found.reason}.`
            : "The handoff states no action bias."}
        </GapNote>
      ) : (
        <div className="flex min-w-0 flex-col gap-3">
          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-h1 text-text-primary wrap-anywhere" data-action-bias={stated.word}>
              {stated.word}
            </p>
            {stated.confidence ? (
              <p className="flex min-w-0 flex-wrap items-center gap-2 text-small text-text-secondary">
                <span data-confidence-word>{`Confidence ${stated.confidence}`}</span>
                <ConfidenceMeter word={stated.confidence} />
              </p>
            ) : (
              <p className="text-small text-gap-text">The handoff states no confidence.</p>
            )}
          </div>
          <p className="text-caption text-text-tertiary">
            As written by the module; the stance is not a typed field.
          </p>
          <ConditionList conditions={stated.conditions} />
        </div>
      )}
    </FigureTile>
  );
}

function LedgerItem({ row }: { row: LedgerRow }) {
  return (
    <li className="grid min-w-0 gap-3 border-t border-border-hairline pt-4 first:border-t-0 first:pt-0 sm:grid-cols-2">
      <div className="flex min-w-0 flex-col gap-1" data-cell="for">
        <p className="text-caption font-medium text-text-tertiary">The case for</p>
        <SaidText value={row.evidenceFor} lines={2} />
      </div>
      <div className="flex min-w-0 flex-col gap-1" data-cell="against">
        <p className="text-caption font-medium text-text-tertiary">The case against</p>
        <SaidText value={row.counterCase} lines={2} className="font-medium" />
        <SaidText value={row.evidenceAgainst} lines={2} />
      </div>
      <div className="flex min-w-0 flex-col gap-1" data-cell="change">
        <p className="text-caption font-medium text-text-tertiary">What would change the view</p>
        <SaidText value={row.wouldChange} lines={1} />
      </div>
      <div className="flex min-w-0 flex-col gap-1" data-cell="verdict">
        <p className="text-caption font-medium text-text-tertiary">Verdict</p>
        <p className={MINI_GAP}>No verdict is stated per claim.</p>
      </div>
    </li>
  );
}

function LedgerTile(props: LeadProps) {
  const found = ledger(props.entry);
  const rows = found.state === "rows" ? found.rows : [];
  const visible = rows.slice(0, VISIBLE_ROWS);
  const rest = rows.slice(VISIBLE_ROWS);
  const gap =
    found.state === "none"
      ? `The handoff lists no cross-examined claim${found.reason ? `: ${found.reason}` : ""}.`
      : found.state === "duplicate"
        ? "The handoff has more than one cross-examination table, so none is read."
        : "The handoff has no cross-examination of the credit case.";
  return (
    <FigureTile
      props={props}
      span={7}
      label="The case for against the case against"
      kicker="Bull against bear"
      title={
        rows.length
          ? `${String(rows.length)} ${rows.length === 1 ? "claim" : "claims"} cross-examined`
          : "Bull against bear"
      }
      line={found.state === "rows" ? found.line : undefined}
      source="the cross-examination"
      table={
        rows.length
          ? {
              caption: "Cross-examination, one row per claim of the credit case",
              headers: [
                "Claim",
                "Evidence for",
                "Counter-case",
                "Evidence against",
                "What would change the view",
                "Verdict",
              ],
              rows: rows.map((row, at) => [
                String(at + 1),
                ...ledgerCells(row),
                "No verdict is stated per claim.",
              ]),
            }
          : undefined
      }
    >
      {found.state !== "rows" ? (
        <GapNote>{gap}</GapNote>
      ) : (
        <div className="flex min-w-0 flex-col gap-4">
          <ol
            className="flex min-w-0 flex-col gap-4"
            aria-label="Claims and their cross-examination"
          >
            {visible.map((row) => (
              <LedgerItem key={row.line} row={row} />
            ))}
          </ol>
          {rest.length > 0 && (
            <details className="min-w-0">
              <summary className="flex min-h-8 w-fit cursor-pointer items-center text-caption font-medium text-text-link">
                {`Show ${String(rest.length)} more ${rest.length === 1 ? "claim" : "claims"}`}
              </summary>
              <ol
                start={VISIBLE_ROWS + 1}
                className="mt-4 flex min-w-0 flex-col gap-4"
                aria-label="More claims and their cross-examination"
              >
                {rest.map((row) => (
                  <LedgerItem key={row.line} row={row} />
                ))}
              </ol>
            </details>
          )}
        </div>
      )}
    </FigureTile>
  );
}

const shown = (item: Figure, unit: string) =>
  item.kind === "number"
    ? `${item.text} ${unit}`.trim()
    : item.kind === "gap"
      ? `Not supplied: ${item.reason}`
      : item.text;

/** One bullet: the exposure to its stated value as a bar, the proposed as a ring, the limit as a rule. */
function LimitBullet({ item }: { item: Limit }) {
  const hatch = useId();
  const { bullet, unit } = item;
  if ("reason" in bullet)
    return (
      <li className="flex min-w-0 flex-col gap-2" data-limit={item.name}>
        <p className="text-small font-medium text-text-primary wrap-anywhere">{item.name}</p>
        <GapNote>{bullet.reason}</GapNote>
      </li>
    );
  const label = [
    `${item.name}: current ${shown(item.current, unit ?? "")}`,
    `proposed ${item.proposed.kind === "number" ? shown(item.proposed, unit ?? "") : "not supplied"}`,
    `limit ${shown(item.limit, unit ?? "")}`,
    "on one scale from zero.",
  ].join(", ");
  return (
    <li className="flex min-w-0 flex-col gap-1.5" data-limit={item.name}>
      <p className="text-small font-medium text-text-primary wrap-anywhere">{item.name}</p>
      <svg viewBox="0 0 408 40" width="100%" role="img" aria-label={label} className="block">
        <defs>
          <GapPattern id={hatch} />
        </defs>
        <rect
          x={BULLET.left}
          y="12"
          width={BULLET.right - BULLET.left}
          height="16"
          rx="3"
          className="fill-surface-subtle"
        />
        <rect
          data-mark="current"
          x={BULLET.left}
          y="15"
          width={bullet.current - BULLET.left}
          height="10"
          rx="2"
          className="fill-chart-1"
        />
        {bullet.proposed !== null ? (
          <circle
            data-mark="proposed"
            cx={bullet.proposed}
            cy="20"
            r="6"
            strokeWidth="2.5"
            className="fill-surface-card stroke-chart-2"
          />
        ) : (
          <rect
            data-mark="proposed-gap"
            x={BULLET.right - 40}
            y="12"
            width="40"
            height="16"
            rx="3"
            strokeWidth="1"
            fill={`url(#${hatch})`}
            className="stroke-border-gap"
          />
        )}
        <line
          data-mark="limit"
          x1={bullet.limit}
          x2={bullet.limit}
          y1="4"
          y2="36"
          strokeWidth="3"
          className="stroke-text-primary"
        />
      </svg>
      <p className="flex flex-wrap gap-x-4 gap-y-0.5 font-mono text-caption text-text-secondary tabular-nums">
        <span>{`Current ${shown(item.current, unit ?? "")}`}</span>
        <span className={cx(item.proposed.kind !== "number" && "text-gap-text")}>
          {`Proposed: ${shown(item.proposed, unit ?? "")}`}
        </span>
        <span>{`Limit ${shown(item.limit, unit ?? "")}`}</span>
      </p>
      <p className="text-caption text-text-tertiary">{`Scale from 0 to ${bullet.ticks.at(-1)?.label ?? ""} ${unit ?? ""}`}</p>
    </li>
  );
}

function LimitsTile(props: LeadProps) {
  const found = limits(props.entry);
  if (!found) return null;
  return (
    <FigureTile
      props={props}
      span={12}
      label="Portfolio limits"
      kicker="Portfolio limits"
      title={`${String(found.rows.length)} ${found.rows.length === 1 ? "limit" : "limits"}, exposure against each`}
      line={found.line}
      source="the portfolio limits"
      legend={[
        { tone: "primary", text: "Current exposure" },
        { tone: "secondary", text: "Proposed exposure (ring)" },
      ]}
      table={{
        caption: "Portfolio limits, current and proposed exposure",
        headers: ["Limit", "Current exposure", "Proposed exposure", "Limit value", "Unit"],
        rows: found.rows.map((item) => [
          item.name,
          shown(item.current, ""),
          shown(item.proposed, ""),
          shown(item.limit, ""),
          item.unit ?? "Not stated",
        ]),
      }}
    >
      <ul className="grid min-w-0 gap-6 lg:grid-cols-2">
        {found.rows.map((item) => (
          <LimitBullet key={item.line} item={item} />
        ))}
      </ul>
    </FigureTile>
  );
}

/** CP-6: the stance as written and the bull against bear ledger; portfolio limits when stated. */
export function CommitteeLead(props: LeadProps) {
  return (
    <LeadFrame props={props}>
      <StanceTile {...props} />
      <LedgerTile {...props} />
      <LimitsTile {...props} />
    </LeadFrame>
  );
}
