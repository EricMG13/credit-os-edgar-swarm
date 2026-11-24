import { useId } from "react";
import { GapPattern } from "../overview/figureParts";
import { GapNote, Figure } from "../overview/Tile";
import { FigureTile, LeadFrame } from "./kit/LeadFrame";
import type { LeadProps } from "./types";
import {
  IN_EVIDENCE,
  clearance,
  issues,
  moduleIntegrity,
  remediation,
  saidText,
  type Group,
  type Issue,
  type Issues,
  type Severity,
  type Shape,
} from "./validationData";

const COUNT_CAPTION =
  "Counted from the issues listed in this module's registers; the handoff does not state counts.";
const WORD: Record<Shape, string> = {
  filled: "filled circle",
  half: "half-filled circle",
  slash: "struck circle",
  ring: "empty circle",
};

/** A status as a shape: the word always sits beside it. */
export function StatusMark({ shape, size = 16 }: { shape: Shape; size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      aria-hidden="true"
      data-shape={shape}
      className="flex-none"
    >
      {shape === "filled" && <circle cx="8" cy="8" r="6.5" className="fill-chart-1" />}
      {shape === "half" && (
        <>
          <circle
            cx="8"
            cy="8"
            r="6"
            strokeWidth="1.5"
            className="fill-surface-card stroke-chart-1"
          />
          <path d="M8 2a6 6 0 0 0 0 12z" className="fill-chart-1" />
        </>
      )}
      {shape === "slash" && (
        <>
          <circle
            cx="8"
            cy="8"
            r="6"
            strokeWidth="1.5"
            className="fill-surface-card stroke-chart-1"
          />
          <line
            x1="3.8"
            y1="12.2"
            x2="12.2"
            y2="3.8"
            strokeWidth="1.5"
            className="stroke-chart-1"
          />
        </>
      )}
      {shape === "ring" && (
        <circle
          cx="8"
          cy="8"
          r="6"
          strokeWidth="1.5"
          className="fill-surface-card stroke-chart-3"
        />
      )}
    </svg>
  );
}

const plural = (count: number, one: string, many = `${one}s`) =>
  `${String(count)} ${count === 1 ? one : many}`;

function inkOf(severity: Severity) {
  if (!severity.stated) return "gap";
  if (!severity.known) return "neutral";
  return ({ Critical: "critical", Material: "material", Minor: "minor" } as const)[
    severity.word as "Critical"
  ];
}

const FILL = {
  critical: "fill-warning-mark stroke-text-primary",
  material: "fill-warning-fill stroke-warning-mark",
  minor: "fill-chart-3 stroke-chart-3",
  neutral: "fill-surface-card stroke-chart-3",
} as const;

const PIP = 22;
const PER_LINE = 20;

/** One pip: a circle for a gap, a square for a contradiction, inked by severity. */
function Pip({
  kind,
  severity,
  x,
  y,
  hatch,
  counted = true,
}: {
  counted?: boolean;
  kind: Issue["kind"];
  severity: Severity;
  x: number;
  y: number;
  hatch: string;
}) {
  const ink = inkOf(severity);
  const props = {
    "data-pip": counted ? kind : undefined,
    "data-severity": severity.word,
    strokeWidth: 2,
    className: ink === "gap" ? "stroke-border-gap" : FILL[ink],
    fill: ink === "gap" ? `url(#${hatch})` : undefined,
  };
  return kind === "gap" ? (
    <circle cx={x + 8} cy={y + 8} r="7" {...props} />
  ) : (
    <rect x={x + 1} y={y + 1} width="14" height="14" rx="2" {...props} />
  );
}

function groupLabel(group: Group) {
  const count = (kind: Issue["kind"]) => group.pips.filter((pip) => pip.kind === kind).length;
  const gaps = count("gap");
  const contradictions = count("contradiction");
  const parts = [
    ...(gaps ? [plural(gaps, "gap")] : []),
    ...(contradictions ? [plural(contradictions, "contradiction")] : []),
  ];
  return `${group.severity.word}: ${String(group.pips.length)} listed (${parts.join(", ")}).`;
}

function PipRow({ group, hatch }: { group: Group; hatch: string }) {
  const lines = Math.ceil(group.pips.length / PER_LINE);
  return (
    <li className="flex min-w-0 flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4">
      <div className="flex w-40 flex-none items-baseline gap-2">
        <Figure className="text-h3 font-medium">{group.pips.length}</Figure>
        <span className="text-small font-medium text-text-primary wrap-anywhere">
          {group.severity.word}
        </span>
      </div>
      <svg
        viewBox={`0 0 ${String(PER_LINE * PIP)} ${String(lines * PIP)}`}
        width={Math.min(group.pips.length, PER_LINE) * PIP}
        height={lines * PIP}
        role="img"
        aria-label={groupLabel(group)}
        className="block max-w-full flex-none"
        data-group={group.severity.word}
      >
        <defs>
          <GapPattern id={hatch} />
        </defs>
        {group.pips.map((pip, at) => (
          <Pip
            key={`${pip.kind}-${String(pip.line)}`}
            kind={pip.kind}
            severity={group.severity}
            x={(at % PER_LINE) * PIP}
            y={Math.floor(at / PER_LINE) * PIP}
            hatch={hatch}
          />
        ))}
      </svg>
    </li>
  );
}

function registerNote(name: string, state: string) {
  if (state === "absent") return `The ${name} register is not in the handoff.`;
  if (state === "duplicate")
    return `The handoff has more than one ${name} register, so none is read.`;
  return null;
}

/** The pips, or the sentence that says why there are none. */
function IssuePips({ found }: { found: Issues }) {
  const hatch = useId();
  const { gaps, contradictions, groups, total, placeholders } = found;
  const notes = [
    registerNote("gaps", gaps.state),
    registerNote("contradictions", contradictions.state),
  ].filter((note) => note !== null);
  if (total === 0) {
    const stated = [gaps, contradictions].filter((register) => register.state === "none");
    if (stated.length === 2) return <GapNote>No issues are listed.</GapNote>;
    if (stated.length === 1)
      return (
        <GapNote>
          No issues are listed in the {gaps.state === "none" ? "gaps" : "contradictions"} register.{" "}
          {notes.join(" ")}
        </GapNote>
      );
    const why = placeholders.length ? ` It states: ${placeholders.join("; ")}.` : "";
    return <GapNote>{`The handoff lists no issue register.${why}`}</GapNote>;
  }
  return (
    <div className="flex flex-col gap-3">
      <ul className="flex flex-col gap-3" aria-label="Issues listed, by severity">
        {groups.map((group) => (
          <PipRow key={group.severity.word} group={group} hatch={hatch} />
        ))}
      </ul>
      <p className="text-caption text-text-tertiary">
        <span aria-hidden="true">● gap · ■ contradiction. </span>
        {COUNT_CAPTION}
      </p>
      {notes.map((note) => (
        <p key={note} className="text-caption text-text-secondary">
          {note}
        </p>
      ))}
    </div>
  );
}

function counts(found: Issues) {
  return found.groups.flatMap((group) =>
    (["gap", "contradiction"] as const).flatMap((kind) => {
      const count = group.pips.filter((pip) => pip.kind === kind).length;
      return count
        ? [[`${group.severity.word}: ${kind === "gap" ? "gaps" : "contradictions"}`, String(count)]]
        : [];
    }),
  );
}

function ClearanceTile(props: LeadProps) {
  const { entry } = props;
  const verdict = clearance(entry);
  const found = issues(entry);
  const integrity = moduleIntegrity(entry);
  const heading = verdict?.source === "verdict" ? verdict.status : null;
  const title = [
    heading ?? "Clearance status",
    ...(found.total > 0 ? [`${plural(found.total, "issue")} listed`] : []),
  ].join(", ");
  const rows = [
    ...(verdict?.status
      ? [["Status", [verdict.status, verdict.scope ?? ""].join(" ").trim()]]
      : []),
    ...counts(found),
    ...(integrity?.map((item) => [item.name, item.result]) ?? []),
  ];
  return (
    <FigureTile
      props={props}
      span={8}
      label="Clearance and listed issues"
      kicker="Evidence validation"
      title={title}
      line={verdict?.line}
      source="the clearance status"
      table={{
        caption: "Clearance status, listed issues and module integrity",
        headers: ["Item", "Value"],
        rows,
      }}
    >
      {verdict === null ? (
        <GapNote>The handoff states no clearance status.</GapNote>
      ) : verdict.source === "verdict" && verdict.status !== null ? (
        <div className="flex min-w-0 flex-col gap-2">
          <div className="flex min-w-0 items-center gap-3">
            {verdict.shape && <StatusMark shape={verdict.shape} size={32} />}
            <div className="flex min-w-0 flex-col">
              <p
                className="text-h2 text-text-primary wrap-anywhere"
                data-clearance={verdict.status}
              >
                {verdict.status}
              </p>
              {verdict.scope && <p className="text-caption text-text-tertiary">{verdict.scope}</p>}
            </div>
            {verdict.shape && <span className="sr-only">{WORD[verdict.shape]}</span>}
          </div>
          {verdict.notEvaluated && (
            <p className="text-caption text-text-secondary wrap-anywhere">
              Not evaluated: {verdict.notEvaluated}
            </p>
          )}
          {verdict.limit && (
            <p className="text-caption text-text-secondary text-pretty wrap-anywhere">
              {verdict.limit}
            </p>
          )}
        </div>
      ) : (
        <div className="flex min-w-0 flex-col gap-1">
          <p className="text-lead text-text-primary text-pretty wrap-anywhere">{verdict.status}</p>
          <p className="text-caption text-text-tertiary">
            No clearance status is drawn from the handoff; this is the module&apos;s opening
            sentence.
          </p>
        </div>
      )}
      <IssuePips found={found} />
      {integrity && (
        <div className="flex flex-col gap-2 border-t border-border-hairline pt-4">
          <h4 className="text-small font-medium text-text-primary">Module by module</h4>
          <ul className="flex flex-wrap gap-2">
            {integrity.map((item) => (
              <li
                key={`${item.name}-${String(item.line)}`}
                className="flex min-h-8 min-w-0 items-center gap-2 rounded-ds-sm bg-surface-subtle px-3 py-1 text-caption text-text-secondary"
                data-module-result={item.result}
              >
                <StatusMark shape={item.shape} />
                <span className="min-w-0 wrap-anywhere">
                  <span className="font-medium text-text-primary">{item.name}</span> · {item.result}
                  {item.head ? ` (${item.head})` : ""}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </FigureTile>
  );
}

function RemediationTile(props: LeadProps) {
  const { entry } = props;
  const found = issues(entry);
  const list = remediation(entry);
  const hatch = useId();
  const listed = found.gaps.state === "rows" ? found.gaps : null;
  const empty =
    found.gaps.state === "none"
      ? "No gap actions are listed."
      : "The handoff lists no integrity-gaps register.";
  return (
    <FigureTile
      props={props}
      span={4}
      label="Remediation by priority"
      kicker="Remediation"
      title={list ? `${plural(list.length, "action")}, Critical first` : "Remediation by priority"}
      line={listed?.line}
      source="the remediation list"
      table={
        list
          ? {
              caption: "Remediation actions in priority order",
              headers: ["Priority", "Severity", "Action", "Affects"],
              rows: list.map((issue, at) => [
                String(at + 1),
                issue.severity.word,
                issue.action ? saidText(issue.action) : "",
                issue.affected === "evidence" ? IN_EVIDENCE : (issue.affected ?? []).join(", "),
              ]),
            }
          : undefined
      }
    >
      {list === null ? (
        <GapNote>{empty}</GapNote>
      ) : (
        <ol className="flex min-w-0 flex-col gap-3">
          {list.map((issue) => (
            <li
              key={issue.line}
              className="flex min-w-0 gap-3"
              data-severity={issue.severity.word}
              data-action-line={issue.line}
            >
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                aria-hidden="true"
                className="mt-1 flex-none"
              >
                <defs>
                  <GapPattern id={`${hatch}${String(issue.line)}`} />
                </defs>
                <Pip
                  kind="gap"
                  severity={issue.severity}
                  x={0}
                  y={0}
                  counted={false}
                  hatch={`${hatch}${String(issue.line)}`}
                />
              </svg>
              <div className="flex min-w-0 flex-col gap-0.5">
                <p className="text-caption font-medium text-text-tertiary">{issue.severity.word}</p>
                {issue.action?.kind === "text" ? (
                  <p className="text-small text-text-primary text-pretty wrap-anywhere">
                    {issue.action.text}
                  </p>
                ) : (
                  <p className="text-small text-gap-text text-pretty wrap-anywhere">
                    {issue.action?.kind === "gap"
                      ? `Action not supplied: ${issue.action.reason}`
                      : issue.action?.kind === "evidence"
                        ? IN_EVIDENCE
                        : "Action not stated."}
                  </p>
                )}
                {Array.isArray(issue.affected) && issue.affected.length > 0 && (
                  <p className="text-caption text-text-secondary wrap-anywhere">
                    Affects: {issue.affected.join(", ")}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}
    </FigureTile>
  );
}

/** CP-5: the clearance status, the issues listed by severity, the remediation by priority. */
export function ClearanceLead(props: LeadProps) {
  return (
    <LeadFrame props={props}>
      <ClearanceTile {...props} />
      <RemediationTile {...props} />
    </LeadFrame>
  );
}
