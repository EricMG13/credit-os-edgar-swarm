import { useId, type ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import {
  changesSentence,
  drawnModules,
  moduleName,
  pathwayModules,
  pathwayName,
  serviceText,
  type Answers,
  type Summary,
} from "../api";
import {
  CASE_KINDS,
  choiceLabel,
  comparisonCaveat,
  documentDescription,
  EFFORTS,
  ISSUE_CLASSES,
  ISSUE_CLASSIFICATION,
  ISSUER_ID,
  LEVELS,
  lookupSentence,
  MODELS,
  PURPOSES,
  storedName,
} from "./plain";
import { StatusBadge } from "@/components/status/StatusBadge";
import { Figure, Tile, Well } from "../report/overview/Tile";
import { decided, groupLimits, leaveOut, type LimitGroup } from "./limits";
import { moduleNames, OUTCOME_STATE, scopeText } from "./limitWords";
import {
  assumptionInputs,
  attachmentFacts,
  chosen,
  contextDetails,
  given,
  issuerDetails,
  moduleOptionInputs,
  NOT_GIVEN,
  valuationInputs,
  type InputGroup,
} from "./reviewInputs";

type EditStep = "documents" | "purpose" | "context";

/** Each term and its value; a fact whose value is `undefined` is left out. */
function Facts({ rows }: { rows: readonly (readonly [string, string | number | undefined])[] }) {
  return (
    <dl className="grid gap-4 text-sm sm:grid-cols-2">
      {rows
        .filter(([, value]) => value !== undefined)
        .map(([term, value]) => (
          <div key={term}>
            <dt className="text-text-tertiary">{term}</dt>
            <dd className="mt-1 font-medium text-text-primary">{value}</dd>
          </div>
        ))}
    </dl>
  );
}

function Block({
  title,
  edit,
  onEdit,
  disabled,
  children,
}: {
  title: string;
  edit?: EditStep;
  onEdit: (step: EditStep) => void;
  disabled: boolean;
  children: ReactNode;
}) {
  const titleId = useId();
  return (
    <div
      role="group"
      aria-labelledby={titleId}
      className="grid min-w-0 content-start gap-3 rounded-ds-md bg-surface-subtle p-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h4 id={titleId} className="font-semibold text-text-primary">
          {title}
        </h4>
        {edit && (
          <Button
            color="secondary"
            size="sm"
            isDisabled={disabled}
            onPress={() => {
              onEdit(edit);
            }}
          >
            {`Edit ${title.toLowerCase()}`}
          </Button>
        )}
      </div>
      {children}
    </div>
  );
}

/** A group's facts, then its inner groups; a group with neither reads as not given. */
function GroupBody({ group, depth }: { group: InputGroup; depth: number }) {
  if (!group.facts.length && !group.groups.length)
    return <p className="text-sm text-text-secondary">{NOT_GIVEN}</p>;
  return (
    <>
      {group.facts.length > 0 && <Facts rows={group.facts} />}
      {group.groups.map((inner) => (
        <Inputs key={inner.title} group={inner} depth={depth} />
      ))}
    </>
  );
}

/** An inner group: a section, a row or a module's pin, under its own heading. */
function Inputs({ group, depth }: { group: InputGroup; depth: number }) {
  const titleId = useId();
  const Heading = depth === 0 ? "h5" : "h6";
  return (
    <div
      role="group"
      aria-labelledby={titleId}
      className="grid gap-2 border-l border-border-hairline pl-3"
    >
      <Heading id={titleId} className="text-sm font-semibold text-text-primary">
        {group.title}
      </Heading>
      <GroupBody group={group} depth={depth + 1} />
    </div>
  );
}

function List({
  title,
  items,
  columns = false,
}: {
  title: string;
  items: readonly string[];
  /** A long list of short names, set in two columns where there is room. */
  columns?: boolean;
}) {
  if (!items.length) return null;
  return (
    <>
      <h5 className="text-sm font-semibold text-text-primary">{title}</h5>
      <ul
        className={cx(
          "list-disc space-y-1 pl-5 text-sm text-text-secondary",
          columns && "sm:columns-2 sm:gap-6",
        )}
      >
        {items.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    </>
  );
}

/** The omitted report sections by title; an older service sends no titles, so only their count. */
function omittedSentence({ omitted, omitted_titles, prior, changes }: Summary) {
  if (omitted.length === 1 && omitted[0] === "what-changed" && !prior && /first run/i.test(changes))
    return "Changes: not compared (first run of this pathway).";
  if (omitted_titles?.length === omitted.length)
    return `Report sections omitted · ${omitted_titles.map((title) => (title === "What changed since the last Report" ? "Changes since the last run" : title)).join(", ")}`;
  return `${String(omitted.length)} report section${omitted.length === 1 ? " is" : "s are"} not produced`;
}

/** Both labels, or nothing: half of the pair would mislead. */
function modelAndEffort({ model, effort }: Summary) {
  const labels = [choiceLabel(MODELS, model), choiceLabel(EFFORTS, effort)];
  return labels.every(Boolean) ? labels.join(" · ") : undefined;
}

function acceptanceLabel(group: LimitGroup) {
  if (group.kind === "check") return "I have checked this";
  const limits = group.causes.length;
  const label = limits === 1 ? "I accept this limit" : `I accept these ${String(limits)} limits`;
  const consequences = group.consequences.length;
  return consequences === 0
    ? label
    : `${label} and ${limits === 1 ? "its" : "their"} ${String(consequences)} ${consequences === 1 ? "consequence" : "consequences"}`;
}

function nameList(names: readonly string[]): string {
  if (names.length < 3) return names.join(" and ");
  return `${names.slice(0, -1).join(", ")}, and ${names.at(-1) ?? ""}`;
}

type ModuleChoice = {
  requested: readonly string[];
  modules: readonly string[];
  onModules: (modules: string[]) => void;
  onEdit: (step: EditStep) => void;
};

function LeaveOut({
  group,
  choice,
  disabled,
}: {
  group: LimitGroup;
  choice: ModuleChoice;
  disabled: boolean;
}) {
  const kept = leaveOut(group, choice.requested, choice.modules);
  if (!kept) return null;
  const selected = choice.modules.length ? choice.modules : choice.requested;
  const left = selected.filter((code) => !kept.includes(code));
  const plural = left.length > 1;
  return (
    <div className="grid justify-items-start gap-1">
      <Button
        color="secondary"
        size="sm"
        className="max-w-full text-left whitespace-normal"
        isDisabled={disabled}
        onPress={() => {
          choice.onModules(kept);
        }}
      >
        {`Leave out ${nameList(left.map(moduleName))}`}
      </Button>
      <p>You will return to More context and review again; approval will be cleared.</p>
      <p>
        {plural
          ? "The report sections of the modules left out are not filled, and a run with modules left out is not used as the earlier run in a later Changes comparison."
          : "The report section of the module left out is not filled, and a run with modules left out is not used as the earlier run in a later Changes comparison."}
      </p>
    </div>
  );
}

function LimitCard({
  group,
  accepted,
  disabled,
  onAccept,
  choice,
}: {
  group: LimitGroup;
  accepted: ReadonlySet<string>;
  disabled: boolean;
  onAccept: (ids: readonly string[], checked: boolean) => void;
  choice: ModuleChoice;
}) {
  const fixes = [...new Set(group.causes.map((cause) => cause.fix ?? "").filter(Boolean))];
  const refusing = moduleNames(group.consequences.filter((item) => item.outcome === "will_refuse"));
  const affected = moduleNames(group.consequences).filter((name) => !refusing.includes(name));
  const reasonId = useId();
  return (
    <li className="grid gap-2 rounded-lg border border-border-hairline p-3 text-sm text-text-secondary">
      <StatusBadge set="Run limits" state={OUTCOME_STATE[group.outcome]} />
      {group.causes.map((cause, index) => (
        <div key={cause.id}>
          <p className="font-semibold text-text-primary">{scopeText(cause.scope)}</p>
          <p id={index === 0 ? reasonId : undefined}>{serviceText(cause.reason)}</p>
        </div>
      ))}
      {fixes.map((fix) => (
        <p key={fix}>{serviceText(fix)}</p>
      ))}
      {fixes.some((fix) => /portfolio workbook/i.test(fix)) && (
        <Button
          color="secondary"
          size="sm"
          isDisabled={disabled}
          onPress={() => {
            choice.onEdit("context");
          }}
        >
          Choose the Portfolio workbook
        </Button>
      )}
      {refusing.length > 0 && <p>Will also refuse: {refusing.join(", ")}</p>}
      {affected.length > 0 && <p>Also affects: {affected.join(", ")}</p>}
      <LeaveOut group={group} choice={choice} disabled={disabled} />
      <label className="flex min-h-8 items-center gap-2 font-semibold text-text-primary max-sm:min-h-11">
        <input
          className="size-4 shrink-0"
          type="checkbox"
          aria-describedby={reasonId}
          checked={decided(group, accepted)}
          disabled={disabled}
          onChange={(event) => {
            onAccept(group.ids, event.target.checked);
          }}
        />
        {acceptanceLabel(group)}
      </label>
    </li>
  );
}

function LimitsToDecide({
  items,
  accepted,
  disabled,
  onAccept,
  choice,
}: {
  items: Summary["items"];
  accepted: ReadonlySet<string>;
  disabled: boolean;
  onAccept: (ids: readonly string[], checked: boolean) => void;
  choice: ModuleChoice;
}) {
  const { groups, passive } = groupLimits(items);
  const decidedCount = groups.filter((group) => decided(group, accepted)).length;
  return (
    <Tile
      span={12}
      label="Limits to decide"
      kicker="What it will not do"
      title="Limits to decide"
      className="wrap-anywhere"
    >
      {groups.length > 0 && (
        <p className="text-sm text-text-tertiary tabular-nums">
          {decidedCount} of {groups.length} decided
        </p>
      )}
      {groups.length === 0 ? (
        <p className="text-sm text-text-secondary">No limits found for this run.</p>
      ) : (
        <ul className="space-y-2">
          {groups.map((group) => (
            <LimitCard
              key={group.key}
              group={group}
              accepted={accepted}
              disabled={disabled}
              onAccept={onAccept}
              choice={choice}
            />
          ))}
        </ul>
      )}
      {passive.length > 0 && (
        <details className="text-sm text-text-secondary">
          <summary className="cursor-pointer">{`No action needed (${String(passive.length)})`}</summary>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {passive.map((item) => (
              <li key={item.id}>
                {serviceText(item.reason)
                  .replace("What changed since the last Report", "Changes since the last run")
                  .replace(
                    /^This pathway does not produce the (.+) report section\.$/,
                    'This pathway does not produce the "$1" section.',
                  )}
                {item.fix ? ` ${serviceText(item.fix)}` : ""}
              </li>
            ))}
          </ul>
        </details>
      )}
    </Tile>
  );
}

/**
 * What leaves the service for a run, in the service's own terms, stated before Submit: the
 * research module's search status, its web search and its Yahoo Finance lookups.
 */
function LeavesTheBuilding({ summary }: { summary: Summary }) {
  const status = summary.copilot_search && summary.modules.includes("CP-DR");
  if (!status && summary.web_search !== true && summary.web_lookup !== true) return null;
  return (
    <Well className="grid gap-2 p-4">
      <h4 className="text-small font-medium text-text-primary">What leaves the building</h4>
      {status && <p className="text-sm text-text-secondary">{summary.copilot_search}</p>}
      {summary.web_search === true && (
        <p className="text-sm text-text-secondary">
          The research module will search the web. The issuer&apos;s name and the questions it
          researches go to OpenAI&apos;s search.
        </p>
      )}
      {summary.web_lookup === true && (
        <p className="text-sm text-text-secondary">
          The research module may read Yahoo Finance pages. Their addresses name what it looks up,
          such as the issuer&apos;s ticker, so Yahoo sees which issuer is researched; no document is
          sent.
        </p>
      )}
    </Well>
  );
}

function CostBlock({
  summary,
  lead,
  actions,
}: {
  summary: Summary;
  lead?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <Tile span={12} label="What it will cost" title="What it will cost" className="wrap-anywhere">
      {lead}
      <LeavesTheBuilding summary={summary} />
      {actions}
    </Tile>
  );
}

/**
 * What the run will do, in three lines from the reviewed answers and the summary: the pathway and
 * issuer, the case date and market view, and how many documents were read and modules will run.
 * Every input itself follows the limits, under "What will run".
 */
function RunSummary({ answers, summary }: { answers: Answers; summary: Summary }) {
  const { run, identity } = answers.context;
  const view = chosen(PURPOSES, run.run_type);
  const documents = summary.documents.length;
  const modules = drawnModules(summary.modules).length;
  return (
    <Tile
      span={12}
      label="Run summary"
      kicker="What the run will do"
      title={`${pathwayName(run.pathway)} of ${identity.issuer_name}`}
      className="wrap-anywhere"
    >
      <div className="grid gap-1 text-body text-text-secondary">
        <p>
          {[`As of ${given(run.as_of)}`, view === NOT_GIVEN ? undefined : view]
            .filter(Boolean)
            .join(" · ")}
        </p>
        <p>
          <Figure>{documents}</Figure> {documents === 1 ? "document" : "documents"} read ·{" "}
          <Figure>{modules}</Figure> {modules === 1 ? "module" : "modules"}
        </p>
      </div>
      <p className="text-small text-text-tertiary">
        Decide each limit below; every input Submit sends is listed after them.
      </p>
    </Tile>
  );
}

export function ReviewSheet({
  review,
  accepted,
  onAccept,
  onEdit,
  onModules,
  disabled,
  synthetic = false,
  cost,
}: {
  review: {
    answers: Answers;
    summary: Summary;
    attachmentNames?: Readonly<Record<string, string | undefined>>;
  };
  accepted: ReadonlySet<string>;
  onAccept: (ids: readonly string[], checked: boolean) => void;
  onEdit: (step: EditStep) => void;
  onModules: (modules: string[]) => void;
  disabled: boolean;
  synthetic?: boolean;
  /** What the review step draws in the cost block: the cap and its sentence; then consent and Submit. */
  cost?: { lead: ReactNode; actions: ReactNode };
}) {
  const { summary, answers } = review;
  const { run, identity } = answers.context;
  const changes = summary.prior
    ? `Compared with the ${pathwayName(summary.prior.pathway)} run as of ${summary.prior.as_of}${comparisonCaveat(summary.changes)}`
    : changesSentence(summary.changes);
  const block = { onEdit, disabled };
  const requested = pathwayModules(run.pathway);
  const choice = { requested, modules: answers.modules, onModules, onEdit };
  const leftOut = answers.modules.length
    ? requested.filter((code) => !answers.modules.includes(code)).map(moduleName)
    : [];
  const advanced = answers.level === "advanced";
  // Valuation, Module options and Scenario assumptions are drawn only at the Advanced level.
  const inputBlocks = [
    { group: issuerDetails(answers.context), drawn: true },
    { group: contextDetails(answers.context), drawn: true },
    { group: valuationInputs(answers.context, advanced), drawn: advanced },
    { group: moduleOptionInputs(answers.context, requested, advanced), drawn: advanced },
    { group: assumptionInputs(answers.context, requested, advanced), drawn: advanced },
  ];
  return (
    <>
      {/* A short summary first, then the decisions that block Submit (C2-007: they are not
          pushed below a screen of echoed inputs), then every input Submit sends, open, then the
          cost, the consent and Submit. */}
      <RunSummary answers={answers} summary={summary} />
      <LimitsToDecide
        items={summary.items}
        accepted={accepted}
        disabled={disabled}
        onAccept={onAccept}
        choice={choice}
      />
      <Tile
        span={12}
        label="What will run"
        kicker="Every input Submit sends"
        title="What will run"
        className="wrap-anywhere"
      >
        <div className="grid min-w-0 gap-4 xl:grid-cols-2">
          <Block title="Issuer and documents" edit="documents" {...block}>
            <Facts
              rows={[
                ["Issuer", identity.issuer_name],
                [ISSUER_ID, identity.issuer_id],
                ["As-of date", given(run.as_of)],
                [ISSUE_CLASSIFICATION, chosen(ISSUE_CLASSES, identity.issue_classification)],
                ["Submitted by", answers.submitted_by],
              ]}
            />
            <List
              title="Documents read"
              items={summary.documents.map(
                (doc) => `${storedName(doc)} · ${documentDescription(doc)}`,
              )}
            />
            {synthetic && summary.documents.some((doc) => doc.kind === "unrecognised") && (
              <p className="text-sm text-text-secondary">
                These are synthetic test documents; an unrecognised document type can still be a
                supplied sample file.
              </p>
            )}
            <List
              title="Documents ignored"
              items={summary.ignored.map((doc) =>
                typeof doc === "string" ? doc : `${doc.source} · ${doc.reason}`,
              )}
            />
          </Block>
          <Block title="Purpose and modules" edit="purpose" {...block}>
            <Facts
              rows={[
                ["Pathway", pathwayName(run.pathway)],
                ["Market view", chosen(PURPOSES, run.run_type)],
                ["Case kind", choiceLabel(CASE_KINDS, run.case_kind)],
                ["Form level", choiceLabel(LEVELS, answers.level)],
              ]}
            />
            <List
              title={`Modules (${String(drawnModules(summary.modules).length)})`}
              items={drawnModules(summary.modules).map(moduleName)}
              columns
            />
            {leftOut.length > 0 && (
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-text-secondary">
                <p>Left out: {leftOut.join(", ")}</p>
                <Button
                  color="secondary"
                  size="sm"
                  isDisabled={disabled}
                  onPress={() => {
                    onModules([]);
                  }}
                >
                  Put back
                </Button>
                <p>You will return to More context and review again; approval will be cleared.</p>
              </div>
            )}
            {summary.omitted.length > 0 && (
              <p className="text-sm text-text-secondary">{omittedSentence(summary)}</p>
            )}
          </Block>
          <Block title="Context" edit="context" {...block}>
            <Facts
              rows={[
                ["Current period", given(run.current_period)],
                ["Prior period", given(run.prior_period)],
                ["Research cutoff", given(run.cutoff)],
                // The service's own sentence, not an input: drawn only when it wrote one.
                ["Changes", changes || undefined],
                ...attachmentFacts(answers.context, review.attachmentNames),
              ]}
            />
            <List title="Source lookup" items={(summary.lookup ?? []).map(lookupSentence)} />
          </Block>
          {inputBlocks.map(
            ({ group, drawn }) =>
              group && (
                <Block
                  key={group.title}
                  title={group.title}
                  edit={drawn ? "context" : undefined}
                  {...block}
                >
                  <GroupBody group={group} depth={0} />
                </Block>
              ),
          )}
          <Block title="Advanced choices" {...block}>
            <Facts
              rows={[
                ["Model and effort", modelAndEffort(summary)],
                ["Turns per module", answers.max_turns],
              ]}
            />
            {!advanced && (
              <p className="text-sm text-text-secondary">
                Model and effort are set at the Advanced form level.
              </p>
            )}
          </Block>
        </div>
      </Tile>
      <CostBlock summary={summary} lead={cost?.lead} actions={cost?.actions} />
    </>
  );
}
