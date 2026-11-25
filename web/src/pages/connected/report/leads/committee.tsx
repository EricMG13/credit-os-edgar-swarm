import { ChevronDown } from "@untitledui/icons";
import { useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { cx } from "@/utils/cx";
import { GapPattern } from "../overview/figureParts";
import { GapNote } from "../overview/Tile";
import { FigureTile, GapTile, LeadFrame } from "./kit/LeadFrame";
import { Bullet, Measured, type BulletSide } from "./kit/marks";
import {
  ledger,
  ledgerCells,
  limits,
  watch,
  stance,
  type Conditions,
  type Figure,
  type Limit,
  type LedgerRow,
} from "./committeeData";
import type { LeadProps } from "./types";
import { IN_EVIDENCE } from "./kit/reader";
import { saidText, type Said } from "./validationData";

const VISIBLE_ROWS = 8;
/** Roughly how many characters fill one line of a ledger cell. */
const LINE = 56;

const MINI_GAP =
  "gap-hatch rounded-ds-xs border border-dashed border-border-gap px-2 py-1 text-caption text-gap-text text-pretty wrap-anywhere";

/** 32 px targets, 44 px at 480 px and below, the token focus ring (the kit's table button follows these). */
const TARGET =
  "min-h-8 max-[480px]:min-h-11 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2";

/** A disclosure for the rest of a list or text: a marked summary at a real target size. */
function More({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <details className={cx("group min-w-0", className)}>
      <summary
        className={cx(
          TARGET,
          "flex w-fit cursor-pointer list-none items-center gap-1 rounded-ds-xs text-caption font-medium text-text-link [&::-webkit-details-marker]:hidden",
        )}
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          className="size-4 transition-transform group-open:rotate-180"
        />
      </summary>
      {children}
    </details>
  );
}

/**
 * Words clamped to `lines`, with the rest on demand when they overflow: measured where the browser
 * lays text out, by length (about `LINE` characters a line) where it does not (no layout).
 */
function ClampedText({
  words,
  lines,
  className,
}: {
  words: string;
  lines: 1 | 2;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [long, setLong] = useState(words.length > LINE * lines);
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const measure = () => {
      if (node.clientHeight > 0) setLong(node.scrollHeight > node.clientHeight + 1);
    };
    measure();
    if (typeof ResizeObserver === "undefined") return undefined;
    const watcher = new ResizeObserver(measure);
    watcher.observe(node);
    return () => {
      watcher.disconnect();
    };
  }, [words]);
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <p
        ref={ref}
        className={cx(
          "text-small text-text-primary text-pretty wrap-anywhere",
          lines === 1 ? "line-clamp-1" : "line-clamp-2",
          className,
        )}
      >
        {words}
      </p>
      {long && (
        <More label="Show more" className="text-caption text-text-secondary">
          <p className="text-pretty wrap-anywhere">{words}</p>
        </More>
      )}
    </div>
  );
}

/** A handoff cell as the ledger draws it: clamped words with the rest on demand, or its gap. */
function SaidText({ value, lines, className }: { value: Said; lines: 1 | 2; className?: string }) {
  if (value.kind === "gap") return <p className={MINI_GAP}>{`Not supplied: ${value.reason}`}</p>;
  if (value.kind === "empty") return <p className={MINI_GAP}>Not stated in the handoff.</p>;
  if (value.kind === "evidence")
    return <p className="text-small text-text-secondary">{IN_EVIDENCE}</p>;
  return <ClampedText words={value.text} lines={lines} className={className} />;
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
        <More label={`Show ${String(rest.length)} more`} className="text-small text-text-secondary">
          <ul className="flex list-disc flex-col gap-1 pl-5">
            {rest.map((value, at) => item(value, at + shown.length))}
          </ul>
        </More>
      )}
    </div>
  );
}

function StanceTile(props: LeadProps) {
  const found = stance(props.entry);
  const stated = found.state === "stated" ? found : null;
  if (stated === null)
    return (
      <GapTile span={12} label="Committee stance" kicker="Committee stance">
        {found.state === "gap" && found.reason
          ? `The handoff states no action bias: ${found.reason}.`
          : "The handoff states no action bias."}
      </GapTile>
    );
  const conditionRows =
    stated.conditions?.kind === "list"
      ? stated.conditions.items.map((value) => ["Condition", saidText(value)])
      : [];
  return (
    <FigureTile
      props={props}
      span={12}
      label="Committee stance"
      kicker="Committee decision"
      title="Committee stance"
      line={stated.line}
      source="the committee stance"
      table={{
        caption: "Action bias, confidence and conditions as the handoff states them",
        headers: ["Item", "Value"],
        rows: [
          ["Action bias", stated.word],
          ["Confidence", stated.confidence ?? "Not stated"],
          ...conditionRows,
        ],
      }}
    >
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
    </FigureTile>
  );
}

const LABEL = "text-caption font-medium text-text-tertiary";

function LedgerItem({ row }: { row: LedgerRow }) {
  return (
    <li className="grid min-w-0 gap-3 border-t border-border-hairline pt-4 first:border-t-0 first:pt-0 sm:grid-cols-2">
      <div className="flex min-w-0 flex-col gap-1 sm:col-span-2" data-cell="point">
        <p className={LABEL}>Challenged point</p>
        <SaidText value={row.point} lines={2} className="font-medium" />
      </div>
      <div className="flex min-w-0 flex-col gap-1 sm:col-span-2" data-cell="counter">
        <p className={LABEL}>Counter-case</p>
        <SaidText value={row.counterCase} lines={2} />
      </div>
      <div className="flex min-w-0 flex-col gap-1" data-cell="for">
        <p className={LABEL}>Evidence for this point</p>
        <SaidText value={row.evidenceFor} lines={2} />
      </div>
      <div className="flex min-w-0 flex-col gap-1" data-cell="against">
        <p className={LABEL}>Evidence against this point</p>
        <SaidText value={row.evidenceAgainst} lines={2} />
      </div>
      <div className="flex min-w-0 flex-col gap-1" data-cell="change">
        <p className={LABEL}>What would change the view</p>
        <SaidText value={row.wouldChange} lines={1} />
      </div>
      <div className="flex min-w-0 flex-col gap-1" data-cell="verdict">
        <p className={LABEL}>Verdict</p>
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
  if (found.state !== "rows")
    return (
      <GapTile span={7} label="Challenged points" kicker="Challenged points">
        {gap}
      </GapTile>
    );
  return (
    <FigureTile
      props={props}
      span={7}
      label="Challenged points"
      kicker="Cross-examination"
      title="Challenged points"
      line={found.line}
      source="the cross-examination"
      table={{
        caption: "Cross-examination, one row per challenged point",
        headers: [
          "Challenged point",
          "Evidence for",
          "Counter-case",
          "Evidence against",
          "What would change the view",
          "Verdict",
        ],
        rows: rows.map((row) => [...ledgerCells(row), "No verdict is stated per claim."]),
      }}
    >
      <div className="flex min-w-0 flex-col gap-4">
        <ol
          className="flex min-w-0 flex-col gap-4"
          aria-label="Challenged points and their cross-examination"
        >
          {visible.map((row) => (
            <LedgerItem key={row.line} row={row} />
          ))}
        </ol>
        {rest.length > 0 && (
          <More
            label={`Show ${String(rest.length)} more ${rest.length === 1 ? "point" : "points"}`}
          >
            <ol
              start={VISIBLE_ROWS + 1}
              className="mt-4 flex min-w-0 flex-col gap-4"
              aria-label="More challenged points and their cross-examination"
            >
              {rest.map((row) => (
                <LedgerItem key={row.line} row={row} />
              ))}
            </ol>
          </More>
        )}
      </div>
    </FigureTile>
  );
}

const shown = (item: Figure, unit: string) =>
  item.kind === "number"
    ? `${item.text} ${unit}`.trim()
    : item.kind === "gap"
      ? `Not supplied: ${item.reason}`
      : item.text;

/** A stated figure for the kit bullet, or the module's reason it is not stated. */
const side = (item: Figure, unit: string): BulletSide =>
  item.kind === "number"
    ? { value: item.value, text: shown(item, unit) }
    : item.kind === "gap"
      ? { gap: `Not supplied: ${item.reason}` }
      : { gap: item.text };

/** One limit as the kit bullet: current as a bar, proposed as a ring, the limit as a rule. */
function LimitBullet({ item }: { item: Limit }) {
  const { unit, reason } = item;
  if (reason !== null || unit === null || item.limit.kind !== "number")
    return (
      <li className="flex min-w-0 flex-col gap-2" data-limit={item.name}>
        <p className="text-small font-medium text-text-primary wrap-anywhere">{item.name}</p>
        <GapNote>{reason ?? "The limit value is not a number."}</GapNote>
      </li>
    );
  const limit = { value: item.limit.value, text: shown(item.limit, unit) };
  return (
    <li className="min-w-0" data-limit={item.name}>
      <Measured fallback={520}>
        {(width) => (
          <Bullet
            width={width}
            name={item.name}
            unit={unit}
            value={side(item.current, unit)}
            proposed={side(item.proposed, unit)}
            limit={limit}
            names={{ value: "Current", proposed: "Proposed", limit: "Limit" }}
          />
        )}
      </Measured>
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
      kicker="Exposure against each limit"
      title="Portfolio limits"
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

const WATCH_ROWS = 8;

/** The module's decision and watch events: a plain list, dates as written. */
function WatchTile(props: LeadProps) {
  const found = watch(props.entry);
  if (found === null) return null;
  const visible = found.items.slice(0, WATCH_ROWS);
  const rest = found.items.slice(WATCH_ROWS);
  const item = (entry: (typeof found.items)[number]) => (
    <li key={entry.line} className="flex min-w-0 flex-col gap-0.5" data-watch={entry.event}>
      <p className="font-mono text-caption text-text-secondary tabular-nums">{entry.date}</p>
      <p className="text-small text-text-primary text-pretty wrap-anywhere">{entry.event}</p>
      {entry.status && (
        <p className="text-caption text-text-secondary wrap-anywhere">{entry.status}</p>
      )}
    </li>
  );
  return (
    <FigureTile
      props={props}
      span={12}
      label="Watch items"
      kicker="Decision and watch"
      title="Watch items"
      line={found.line}
      source="the watch items"
      table={{
        caption: "Decision and watch events, dates as written",
        headers: ["Event date", "Event", "Status"],
        rows: found.items.map((entry) => [entry.date, entry.event, entry.status ?? ""]),
      }}
    >
      <ul className="flex min-w-0 flex-col gap-3">{visible.map(item)}</ul>
      {rest.length > 0 && (
        <More label={`Show ${String(rest.length)} more`}>
          <ul className="mt-3 flex min-w-0 flex-col gap-3">{rest.map(item)}</ul>
        </More>
      )}
    </FigureTile>
  );
}

type Draw = "figures" | "events" | "maps";

/**
 * CP-6: the stance as written, the challenged points, the decision-and-watch events and the
 * portfolio limits. The stance and the watch items stack in one column, so neither is padded to the
 * ledger's height.
 */
export function CommitteeLead(props: LeadProps) {
  return (
    <LeadFrame props={props}>
      <div className="flex min-w-0 flex-col gap-4 lg:col-span-5">
        <StanceTile {...props} />
        <WatchTile {...props} />
      </div>
      <LedgerTile {...props} />
      <LimitsTile {...props} />
    </LeadFrame>
  );
}

/** This lead draws the portfolio-limits figure and the module's watch events itself. */
CommitteeLead.draws = ["figures", "events"] as readonly Draw[];
