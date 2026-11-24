import { moduleName } from "../../api";
import { FigureSourceControl } from "../overview/figureParts";
import { GapNote, Tile } from "../overview/Tile";
import { FigureTile, LeadFrame } from "./kit/LeadFrame";
import {
  STATE_WORD,
  STATES,
  sourceReadiness,
  type ReadinessRow,
  type ReadinessState,
} from "./sourceReadinessData";
import type { LeadProps } from "./types";

export const ABSENT = "Source readiness states no readiness by area.";
export const UNRECOGNISED = "The readiness table uses states this page does not recognise.";
export const NOT_HERE = "Key evidence located and conflicts are not in this handoff.";

type Shape = "dot" | "half-dot" | "ring" | "slash";
const SHAPE: Record<ReadinessState, Shape> = {
  ready: "dot",
  limited: "half-dot",
  conditional: "ring",
  blocked: "slash",
};

// The four state columns of the matrix, by their grid line at lg and above.
const COLUMN: Record<ReadinessState, string> = {
  ready: "lg:col-start-2",
  limited: "lg:col-start-3",
  conditional: "lg:col-start-4",
  blocked: "lg:col-start-5",
};
const COLUMNS = "lg:grid-cols-[minmax(9rem,1.1fr)_repeat(4,minmax(0,1fr))_minmax(12rem,2fr)]";

/** The state as a shape, so that colour is never what tells ready from not ready. */
function ReadinessMark({ state }: { state: ReadinessState }) {
  const teal = state === "ready" || state === "limited";
  const stroke = teal ? "stroke-chart-1" : "stroke-warning-mark";
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      aria-hidden="true"
      data-shape={SHAPE[state]}
      className="block flex-none"
    >
      {state === "ready" && <circle cx="8" cy="8" r="6.5" className="fill-chart-1" />}
      {state === "limited" && (
        <>
          <circle cx="8" cy="8" r="6" strokeWidth="1.5" fill="none" className={stroke} />
          <path d="M8 1.5 A6.5 6.5 0 0 0 8 14.5 Z" className="fill-chart-1" />
        </>
      )}
      {state === "conditional" && (
        <circle cx="8" cy="8" r="6" strokeWidth="2" fill="none" className={stroke} />
      )}
      {state === "blocked" && (
        <>
          <circle cx="8" cy="8" r="6" strokeWidth="2" fill="none" className={stroke} />
          <line x1="3.8" y1="12.2" x2="12.2" y2="3.8" strokeWidth="2" className={stroke} />
        </>
      )}
    </svg>
  );
}

const plural = (count: number, one: string, many: string) => (count === 1 ? one : many);

function CountsStrip({ counts }: { counts: Record<ReadinessState, number> }) {
  return (
    <div
      role="group"
      aria-label="Areas by readiness"
      className="flex flex-wrap gap-x-8 gap-y-2 border-b border-border-hairline pb-3"
    >
      {STATES.map((state) => (
        <p
          key={state}
          data-count={state}
          className="flex items-center gap-2 text-caption text-text-secondary"
        >
          <ReadinessMark state={state} />
          <span>{STATE_WORD[state]}</span>
          <span
            data-number
            className="font-mono text-small font-medium text-text-primary tabular-nums"
          >
            {counts[state]}
          </span>
          <span>{plural(counts[state], "area", "areas")}</span>
        </p>
      ))}
    </div>
  );
}

function MatrixHead() {
  return (
    <div
      aria-hidden="true"
      className={`hidden gap-x-3 border-b border-border-hairline pb-2 text-caption text-text-tertiary lg:grid ${COLUMNS}`}
    >
      <span>Area</span>
      {STATES.map((state) => (
        <span key={state}>{STATE_WORD[state]}</span>
      ))}
      <span>Key limitation</span>
    </div>
  );
}

function MatrixRow({ row }: { row: ReadinessRow }) {
  return (
    <li
      className={`grid min-h-10 grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 border-b border-border-hairline py-2.5 last:border-b-0 ${COLUMNS}`}
    >
      <span className="min-w-0 text-small font-medium wrap-anywhere text-text-primary lg:row-start-1">
        {row.area}
      </span>
      <span
        data-state={row.state}
        className={`flex items-center gap-2 text-small text-text-primary lg:row-start-1 ${COLUMN[row.state]}`}
      >
        <ReadinessMark state={row.state} />
        {STATE_WORD[row.state]}
      </span>
      <span className="col-span-2 min-w-0 text-small wrap-anywhere text-text-secondary lg:col-span-1 lg:col-start-6 lg:row-start-1">
        {row.reason}
      </span>
    </li>
  );
}

function readingOf(rows: ReadinessRow[]) {
  const parts = rows.map((row) => `${row.area} ${STATE_WORD[row.state].toLowerCase()}`);
  return `Readiness by area: ${parts.join("; ")}.`;
}

/** The sentence over the matrix: only counts of the rows below it. */
function titleOf(rows: ReadinessRow[], counts: Record<ReadinessState, number>) {
  const open = counts.conditional + counts.blocked;
  return `${String(counts.ready)} of ${String(rows.length)} ${plural(rows.length, "area is", "areas are")} ready; ${String(open)} ${plural(open, "is", "are")} conditional or blocked`;
}

/** Source readiness: which areas the evidence supports, by state, and why. */
export function SourceReadinessLead(props: LeadProps) {
  const module = props.entry.output.module;
  const name = moduleName(module);
  const result = sourceReadiness(props.entry);
  return (
    <LeadFrame props={props}>
      {result.kind === "absent" && (
        <Tile span={12} label="Readiness by area" kicker={name} tone="gap">
          <GapNote>{ABSENT}</GapNote>
        </Tile>
      )}
      {result.kind === "unrecognised" && (
        <Tile
          span={12}
          label="Readiness by area"
          kicker={name}
          tone="gap"
          trace={
            <FigureSourceControl
              folder={props.run.folder}
              entry={props.entry}
              line={result.line}
              name="the readiness table"
            />
          }
        >
          <GapNote>{UNRECOGNISED}</GapNote>
        </Tile>
      )}
      {result.kind === "ready" && (
        <>
          <FigureTile
            props={props}
            span={12}
            label="Readiness by area"
            kicker="Readiness by area"
            title={titleOf(result.rows, result.counts)}
            line={result.line}
            source="the readiness table"
            table={{
              caption: readingOf(result.rows),
              headers: ["Area", "Readiness", "Key limitation"],
              rows: result.rows.map((row) => [row.area, STATE_WORD[row.state], row.reason]),
            }}
          >
            <CountsStrip counts={result.counts} />
            <div>
              <MatrixHead />
              <ul aria-label="Readiness by area" className="flex flex-col">
                {result.rows.map((row) => (
                  <MatrixRow key={row.line} row={row} />
                ))}
              </ul>
            </div>
          </FigureTile>
          {!result.hasEvidenceTable && (
            <Tile
              span={12}
              label="Key evidence located and conflicts"
              kicker="Not drawn"
              tone="gap"
            >
              <GapNote>{NOT_HERE}</GapNote>
            </Tile>
          )}
        </>
      )}
    </LeadFrame>
  );
}
