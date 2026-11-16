import { useId, type ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { moduleName, pathwayName, type Answers, type Summary } from "../api";
import {
  changesSentence,
  comparisonCaveat,
  documentDescription,
  LEVELS,
  lookupSentence,
  plainText,
  PURPOSES,
  storedName,
} from "./plain";
import { StatusBadge } from "@/components/status/StatusBadge";
import { decided, groupLimits, type LimitGroup } from "./limits";

type EditStep = "documents" | "purpose" | "context";

function Facts({ rows }: { rows: readonly (readonly [string, string | number | undefined])[] }) {
  return (
    <dl className="grid gap-4 text-sm sm:grid-cols-2">
      {rows
        .filter(([, value]) => value)
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
  return (
    <div className="grid gap-3 rounded-lg bg-surface-subtle p-4">
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-semibold text-text-primary">{title}</h4>
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

function List({ title, items }: { title: string; items: readonly string[] }) {
  if (!items.length) return null;
  return (
    <>
      <h5 className="text-sm font-semibold text-text-primary">{title}</h5>
      <ul className="list-disc space-y-1 pl-5 text-sm text-text-secondary">
        {items.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    </>
  );
}

const OUTCOME_STATE = {
  will_refuse: "Will refuse",
  gap: "Gap",
  limited: "Limited",
  check: "Check",
} as const;

function scopeText(scope: string) {
  return scope === "run" ? "Whole run" : moduleName(scope);
}

function acceptanceLabel(group: LimitGroup) {
  if (group.kind === "check") return "I have checked this";
  return group.ids.length === 1
    ? "I accept this limit"
    : `I accept these ${String(group.ids.length)} limits`;
}

function moduleNames(items: readonly { scope: string }[]): string[] {
  return [...new Set(items.map((item) => scopeText(item.scope)))];
}

function LimitCard({
  group,
  accepted,
  disabled,
  onAccept,
}: {
  group: LimitGroup;
  accepted: ReadonlySet<string>;
  disabled: boolean;
  onAccept: (ids: readonly string[], checked: boolean) => void;
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
          <p id={index === 0 ? reasonId : undefined}>{plainText(cause.reason)}</p>
        </div>
      ))}
      {fixes.map((fix) => (
        <p key={fix}>{plainText(fix)}</p>
      ))}
      {refusing.length > 0 && <p>Will also refuse: {refusing.join(", ")}</p>}
      {affected.length > 0 && <p>Also affects: {affected.join(", ")}</p>}
      <label className="flex items-center gap-2 font-semibold text-text-primary">
        <input
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
}: {
  items: Summary["items"];
  accepted: ReadonlySet<string>;
  disabled: boolean;
  onAccept: (ids: readonly string[], checked: boolean) => void;
}) {
  const titleId = useId();
  const { groups, passive } = groupLimits(items);
  const decidedCount = groups.filter((group) => decided(group, accepted)).length;
  return (
    <section aria-labelledby={titleId} className="grid gap-2">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 id={titleId} className="font-semibold text-text-primary">
          Limits to decide
        </h3>
        {groups.length > 0 && (
          <span className="text-sm text-text-tertiary">
            {decidedCount} of {groups.length} decided
          </span>
        )}
      </div>
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
                {plainText(item.reason)}
                {item.fix ? ` ${plainText(item.fix)}` : ""}
              </li>
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}

export function ReviewSheet({
  review,
  accepted,
  onAccept,
  onEdit,
  disabled,
}: {
  review: { answers: Answers; summary: Summary };
  accepted: ReadonlySet<string>;
  onAccept: (ids: readonly string[], checked: boolean) => void;
  onEdit: (step: EditStep) => void;
  disabled: boolean;
}) {
  const titleId = useId();
  const { summary, answers } = review;
  const { run, identity } = answers.context;
  const changes = summary.prior
    ? `Compared with the ${pathwayName(summary.prior.pathway)} run as of ${summary.prior.as_of}${comparisonCaveat(summary.changes)}`
    : changesSentence(summary.changes);
  const block = { onEdit, disabled };
  return (
    <>
      <section aria-labelledby={titleId} className="grid gap-4">
        <h3 id={titleId} className="font-semibold text-text-primary">
          What will run
        </h3>
        <Block title="Issuer and documents" edit="documents" {...block}>
          <Facts
            rows={[
              ["Issuer", identity.issuer_name],
              ["As-of date", run.as_of],
              ["Reporting currency", run.reporting_currency],
              ["Submitted by", answers.submitted_by],
            ]}
          />
          <List
            title="Documents read"
            items={summary.documents.map(
              (doc) => `${storedName(doc)} · ${documentDescription(doc)}`,
            )}
          />
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
              ["Purpose", PURPOSES[run.run_type as keyof typeof PURPOSES]],
              ["Case kind", run.case_kind],
            ]}
          />
          <List
            title={`Modules (${String(summary.modules.length)})`}
            items={summary.modules.map(moduleName)}
          />
          {summary.omitted.length > 0 && (
            <p className="text-sm text-text-secondary">
              Report sections omitted · {plainText(summary.omitted.join(", "))}
            </p>
          )}
        </Block>
        <Block title="Context" edit="context" {...block}>
          <Facts
            rows={[
              ["Current period", run.current_period],
              ["Prior period", run.prior_period],
              ["Research cutoff", run.cutoff],
              ["Changes", changes],
            ]}
          />
          <List title="Source lookup" items={(summary.lookup ?? []).map(lookupSentence)} />
          {summary.web_search === true && (
            <p className="text-sm text-text-secondary">
              The research module will search the web. The issuer&apos;s name and the questions it
              researches go to OpenAI&apos;s search.
            </p>
          )}
        </Block>
        {answers.level === "advanced" && (
          <Block title="Advanced choices" {...block}>
            <Facts
              rows={[
                ["Model and effort", `${summary.model} · ${summary.effort}`],
                ["Form level", LEVELS[answers.level as keyof typeof LEVELS]],
                ["Turns per module", answers.max_turns],
              ]}
            />
          </Block>
        )}
      </section>
      <LimitsToDecide
        items={summary.items}
        accepted={accepted}
        disabled={disabled}
        onAccept={onAccept}
      />
    </>
  );
}
