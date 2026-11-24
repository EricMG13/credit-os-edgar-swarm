import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import { GapNote } from "../overview/Tile";
import {
  TRACK,
  analysisChanges,
  amountWords,
  changeWords,
  issuerChanges,
  unitName,
  type IssuerChanges,
  type Move,
  type StatusShape,
  type WordRow,
} from "./changesLeadData";
import { FigureTile, LeadFrame } from "./kit/LeadFrame";
import { group } from "./kit/numbers";
import type { LeadProps } from "./types";

const VISIBLE_WORD_ROWS = 6;
const SIGNAL = "border-warning-edge bg-warning-fill text-warning-text";

/** A status as a shape; the register's own word always sits beside it. */
function StatusShapeMark({ shape }: { shape: StatusShape }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      aria-hidden="true"
      data-shape={shape}
      className="flex-none"
    >
      {shape === "up" && <path d="M8 2.5 14 13H2z" className="fill-chart-1" />}
      {shape === "down" && <path d="M8 13.5 2 3h12z" className="fill-chart-1" />}
      {shape === "reversed" && <path d="M8 1.5 14.5 8 8 14.5 1.5 8z" className="fill-chart-1" />}
      {(shape === "unchanged" || shape === "new" || shape === "not-run" || shape === "other") && (
        <circle
          cx="8"
          cy="8"
          r="6"
          strokeWidth="1.5"
          className="fill-surface-card stroke-chart-1"
        />
      )}
      {shape === "unchanged" && (
        <line x1="4.5" x2="11.5" y1="8" y2="8" strokeWidth="1.5" className="stroke-chart-1" />
      )}
      {shape === "new" && (
        <path d="M8 4.5v7M4.5 8h7" strokeWidth="1.5" className="stroke-chart-1" />
      )}
      {shape === "not-run" && (
        <line x1="4" x2="12" y1="12" y2="4" strokeWidth="1.5" className="stroke-chart-1" />
      )}
    </svg>
  );
}

type Scale = NonNullable<IssuerChanges["scale"]>;

const direction = (change: string) => {
  const sign = Number(change) === 0 ? 0 : change.startsWith("-") ? -1 : 1;
  return sign === 1 ? "up" : sign === -1 ? "down" : "unchanged";
};

function CauseTag({ cause }: { cause: string }) {
  return (
    <span
      className={cx(
        "inline-flex w-fit min-w-0 items-center rounded-ds-xs border px-1.5 py-0.5 text-caption wrap-anywhere",
        /^unresolved$/i.test(cause) ? SIGNAL : "border-border-subtle text-text-secondary",
      )}
      data-cause={cause}
    >
      {`Cause: ${cause}`}
    </span>
  );
}

/** One measure: the earlier level as a ring, the current as a dot, on one scale for the group. */
function Dumbbell({ move, scale }: { move: Move; scale: Scale }) {
  const before = scale.place(Number(move.earlier.number));
  const after = scale.place(Number(move.current.number));
  const sentence = `${move.label}: earlier ${move.earlier.text}, current ${move.current.text}; ${direction(move.change)} ${amountWords(move.change, move.unit)}, derived. Scale ${group(String(scale.lo))} to ${group(String(scale.hi))}, shared by these rows.`;
  return (
    <li className="flex min-w-0 flex-col gap-1.5" data-move={move.label} data-change={move.change}>
      <p className="text-small font-medium text-text-primary wrap-anywhere">{move.label}</p>
      <svg viewBox="0 0 408 24" width="100%" role="img" aria-label={sentence} className="block">
        <line
          x1={TRACK.left}
          x2={TRACK.right}
          y1="12"
          y2="12"
          strokeWidth="1"
          className="stroke-border-hairline"
        />
        <line
          x1={before}
          x2={after}
          y1="12"
          y2="12"
          strokeWidth="2"
          className="stroke-chart-3"
          data-link
        />
        <circle
          data-mark="earlier"
          cx={before}
          cy="12"
          r="5.5"
          strokeWidth="2"
          className="fill-surface-card stroke-chart-3"
        />
        <circle data-mark="current" cx={after} cy="12" r="6" className="fill-chart-1" />
      </svg>
      <p className="flex flex-wrap gap-x-4 gap-y-0.5 font-mono text-caption text-text-secondary tabular-nums wrap-anywhere">
        <span>{`Earlier ${move.earlier.text}`}</span>
        <span>{`Current ${move.current.text}`}</span>
        <span className="text-text-primary">
          {direction(move.change) === "up"
            ? `↑ Up ${amountWords(move.change, move.unit)}`
            : direction(move.change) === "down"
              ? `↓ Down ${amountWords(move.change, move.unit)}`
              : `Unchanged ${amountWords(move.change, move.unit)}`}
          <span className="text-text-tertiary"> derived</span>
        </span>
      </p>
      <CauseTag cause={move.cause} />
    </li>
  );
}

function WordLine({ item }: { item: WordRow }) {
  const both = item.earlier === "—" && item.current === "—";
  return (
    <li className="flex min-w-0 flex-col gap-1" data-words={item.label}>
      <p className="text-small text-text-primary wrap-anywhere">
        <span className="font-medium">{item.label}</span>
        {!both && (
          <span className="text-text-secondary">{`: ${item.earlier ?? ""} → ${item.current ?? ""}`}</span>
        )}
      </p>
      <CauseTag cause={item.cause} />
      {item.effect && (
        <p className="text-caption text-text-secondary text-pretty wrap-anywhere">{item.effect}</p>
      )}
    </li>
  );
}

function AnalysisTile(props: LeadProps) {
  const found = analysisChanges(props.entry);
  const total = found?.modules.length ?? 0;
  return (
    <FigureTile
      props={props}
      span={12}
      label="What changed in the analysis"
      kicker="Analysis, against the earlier run"
      title={
        found ? `${String(total)} ${total === 1 ? "module" : "modules"} compared` : "The analysis"
      }
      line={found?.line}
      source="the analysis changes"
      table={
        found
          ? {
              caption: "Each module's status against the earlier run",
              headers: ["Module", "Status", "Cause", "Why"],
              rows: found.modules.map((item) => [item.name, item.status, item.cause, item.why]),
            }
          : undefined
      }
    >
      {found === null ? (
        <GapNote>The handoff has no register of changes to the analysis.</GapNote>
      ) : (
        <ul className="flex flex-wrap gap-2" aria-label="Modules by status">
          {found.counts.map((item) => (
            <li
              key={item.word}
              data-status={item.word}
              data-count={item.count}
              className="flex min-h-8 items-center gap-2 rounded-ds-sm bg-surface-subtle px-3 py-1 text-small text-text-primary"
            >
              <StatusShapeMark shape={item.shape} />
              <span className="wrap-anywhere">{item.word}</span>
              <span className="font-mono font-medium tabular-nums">{item.count}</span>
            </li>
          ))}
        </ul>
      )}
    </FigureTile>
  );
}

function IssuerTile(props: LeadProps) {
  const found = issuerChanges(props.entry);
  const visible = found?.words.slice(0, VISIBLE_WORD_ROWS) ?? [];
  const rest = found?.words.slice(VISIBLE_WORD_ROWS) ?? [];
  const moves = found?.moves ?? [];
  const scale = found?.scale ?? null;
  return (
    <FigureTile
      props={props}
      span={12}
      label="What changed at the issuer"
      kicker="Issuer, against the earlier run"
      title={
        found === null
          ? "The issuer"
          : moves.length
            ? `${String(moves.length)} largest ${moves.length === 1 ? "move" : "moves"}, in ${unitName(found.unit ?? "")}`
            : "Measures and facts, in words"
      }
      line={found?.line}
      source="the issuer changes"
      table={
        found
          ? {
              caption: "Issuer measures and facts, earlier and current",
              headers: ["Measure or fact", "Earlier", "Current", "Derived change", "Cause"],
              rows: [
                ...moves.map((move) => [
                  move.label,
                  move.earlier.text,
                  move.current.text,
                  changeWords(move.change, move.unit),
                  move.cause,
                ]),
                ...found.words.map((item) => [
                  item.label,
                  item.earlier ?? "",
                  item.current ?? "",
                  "",
                  item.cause,
                ]),
              ],
            }
          : undefined
      }
    >
      {found === null ? (
        <GapNote>The handoff has no register of changes at the issuer.</GapNote>
      ) : (
        <div className="flex min-w-0 flex-col gap-4">
          {scale && moves.length > 0 && (
            <>
              <ul
                className="grid min-w-0 gap-5 lg:grid-cols-2"
                aria-label="Largest moves, ranked by derived difference"
              >
                {moves.map((move) => (
                  <Dumbbell key={move.line} move={move} scale={scale} />
                ))}
              </ul>
              <p className="text-caption text-text-tertiary">
                {`Ranked by the derived difference between current and earlier, within ${unitName(found.unit ?? "")} only. One scale from ${group(String(scale.lo))} to ${group(String(scale.hi))} is shared by these rows.`}
              </p>
            </>
          )}
          {found.words.length > 0 && (
            <div className="flex min-w-0 flex-col gap-2 border-t border-border-hairline pt-3">
              <h4 className="text-small font-medium text-text-primary">
                {moves.length ? "Other rows, in words" : "Rows, in words"}
              </h4>
              <ul className="flex min-w-0 flex-col gap-3">
                {visible.map((item) => (
                  <WordLine key={item.line} item={item} />
                ))}
              </ul>
              {rest.length > 0 && (
                <details>
                  <summary className="flex min-h-8 w-fit cursor-pointer items-center text-caption font-medium text-text-link">
                    {`Show ${String(rest.length)} more`}
                  </summary>
                  <ul className="mt-2 flex min-w-0 flex-col gap-3">
                    {rest.map((item) => (
                      <WordLine key={item.line} item={item} />
                    ))}
                  </ul>
                </details>
              )}
            </div>
          )}
        </div>
      )}
    </FigureTile>
  );
}

/** CP-8: a summary of the comparison with the earlier run; the Changes page has the whole of it. */
export function ChangesSummaryLead(props: LeadProps) {
  const analysis = analysisChanges(props.entry);
  const issuer = issuerChanges(props.entry);
  if (analysis === null && issuer === null)
    return (
      <LeadFrame props={props}>
        <div className="flex min-w-0 flex-col gap-3 lg:col-span-12">
          <GapNote>This run has no comparison with an earlier run.</GapNote>
          <OpenChanges />
        </div>
      </LeadFrame>
    );
  return (
    <LeadFrame props={props}>
      <AnalysisTile {...props} />
      <IssuerTile {...props} />
      <div className="flex lg:col-span-12">
        <OpenChanges />
      </div>
    </LeadFrame>
  );
}

function OpenChanges() {
  return (
    <Button
      color="link-gray"
      size="sm"
      href="#changes"
      iconTrailing={ArrowRight}
      className="min-h-8"
    >
      Open Changes
    </Button>
  );
}
