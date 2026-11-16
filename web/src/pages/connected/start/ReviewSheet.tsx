import { useId, type ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { moduleName, moduleTitle, pathwayName, type Answers, type Summary } from "../api";
import {
  changesSentence,
  documentDescription,
  LEVELS,
  lookupSentence,
  plainText,
  PURPOSES,
  storedName,
} from "./plain";

type EditStep = "documents" | "purpose" | "context";
type Item = Summary["items"][number];

export function needsCheck(item: Item) {
  return (
    item.outcome === "check" ||
    item.outcome === "gap" ||
    item.outcome === "limited" ||
    item.outcome === "will_refuse"
  );
}

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
  editLabel,
  onEdit,
  disabled,
  children,
}: {
  title: string;
  editLabel?: string;
  onEdit?: () => void;
  disabled: boolean;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-3 rounded-lg bg-surface-subtle p-4">
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-semibold text-text-primary">{title}</h4>
        {editLabel && (
          <Button color="secondary" size="sm" isDisabled={disabled} onPress={onEdit}>
            {editLabel}
          </Button>
        )}
      </div>
      {children}
    </div>
  );
}

function List({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5 text-sm text-text-secondary">
      {items.map((text, i) => (
        <li key={i}>{text}</li>
      ))}
    </ul>
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
  const advanced = answers.level === "advanced";
  const changes = summary.prior
    ? `Compared with the ${pathwayName(summary.prior.pathway)} run as of ${summary.prior.as_of}`
    : changesSentence(summary.changes);
  return (
    <>
      <section aria-labelledby={titleId} className="grid gap-4">
        <h3 id={titleId} className="font-semibold text-text-primary">
          What will run
        </h3>
        <Block
          title="Issuer and documents"
          editLabel="Edit issuer and documents"
          onEdit={() => {
            onEdit("documents");
          }}
          disabled={disabled}
        >
          <Facts
            rows={[
              ["Issuer", identity.issuer_name],
              ["As-of date", run.as_of],
              ["Reporting currency", run.reporting_currency],
              ["Submitted by", answers.submitted_by],
            ]}
          />
          <h5 className="text-sm font-semibold text-text-primary">Documents read</h5>
          <List
            items={summary.documents.map(
              (doc) => `${storedName(doc)} · ${documentDescription(doc)}`,
            )}
          />
          {summary.ignored.length > 0 && (
            <>
              <h5 className="text-sm font-semibold text-text-primary">Documents ignored</h5>
              <List
                items={summary.ignored.map((doc) =>
                  typeof doc === "string" ? doc : `${doc.source} · ${doc.reason}`,
                )}
              />
            </>
          )}
        </Block>
        <Block
          title="Purpose and modules"
          editLabel="Edit purpose and modules"
          onEdit={() => {
            onEdit("purpose");
          }}
          disabled={disabled}
        >
          <Facts
            rows={[
              ["Pathway", pathwayName(run.pathway)],
              ["Purpose", PURPOSES[run.run_type as keyof typeof PURPOSES]],
              ["Case kind", run.case_kind],
            ]}
          />
          <h5 className="text-sm font-semibold text-text-primary">Planned modules</h5>
          <List items={summary.modules.map(moduleTitle)} />
          {summary.omitted.length > 0 && (
            <p className="text-sm text-text-secondary">
              Report sections omitted · {plainText(summary.omitted.join(", "))}
            </p>
          )}
        </Block>
        <Block
          title="Context"
          editLabel="Edit context"
          onEdit={() => {
            onEdit("context");
          }}
          disabled={disabled}
        >
          <Facts
            rows={[
              ["Current period", run.current_period],
              ["Prior period", run.prior_period],
              ["Research cutoff", run.cutoff],
              ["Changes", changes],
            ]}
          />
          {summary.lookup && summary.lookup.length > 0 && (
            <>
              <h5 className="text-sm font-semibold text-text-primary">Source lookup</h5>
              <List items={summary.lookup.map(lookupSentence)} />
            </>
          )}
        </Block>
        {advanced && (
          <Block title="Advanced choices" disabled={disabled}>
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
      {summary.items.length > 0 && (
        <section className="grid gap-2">
          <h3 className="font-semibold">Readiness checks</h3>
          <ul className="space-y-2">
            {summary.items.map((item) => (
              <li
                key={item.id}
                className="rounded-lg border border-border-hairline p-3 text-sm text-text-secondary"
              >
                <p className="font-semibold text-text-primary">
                  {item.scope === "run" ? "Whole run" : moduleName(item.scope)} ·{" "}
                  {item.outcome.replaceAll("_", " ")}
                </p>
                <p>{item.reason}</p>
                {item.fix && <p>{item.fix}</p>}
                {needsCheck(item) && (
                  <label className="mt-2 flex items-center gap-2 font-semibold text-text-primary">
                    <input
                      type="checkbox"
                      checked={accepted.has(item.id)}
                      disabled={disabled}
                      onChange={(event) => {
                        onAccept([item.id], event.target.checked);
                      }}
                    />
                    {item.outcome === "check" ? "I have checked this" : "I accept this limit"}
                  </label>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
