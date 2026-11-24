import { pathwayModules, moduleName, drawnModules } from "../api";
import { AssumptionFields } from "./AssumptionFields";
import { ASSUMPTIONS_TITLE } from "./assumptions";
import { RowEditor } from "./RowEditor";
import { ModuleOptionsFields } from "./ModuleOptionsFields";
import { ROW_SPECS, type RowKind } from "./rows";
import { MODULE_OPTIONS_TITLE, VALUATION_TITLE } from "./valuation";
import { ValuationFields } from "./ValuationFields";
import { field, label } from "../layout";
import {
  ANY_FOCUS,
  ATTACHMENTS,
  EFFORTS,
  ISSUER_DETAILS,
  ISSUER_LIST_BOXES,
  ISSUER_TEXT_BOXES,
  LEGAL_CHOICES,
  LEGAL_DOCUMENTS,
  LISTED_EQUITY,
  MODELS,
  copilotEfforts,
  copilotPairVerified,
  TICKER,
} from "./plain";
import type { IntakeView } from "./intake";
import { problemAttrs, FieldMessage, SelectField } from "./fields";
import type { ReactNode } from "react";

/** The row editors of the research group, and of the ratings, quotes and facilities group. */
const RESEARCH_ROWS = ["research_questions"] as const;
const DEAL_ROWS = ["ratings", "quotes", "deal_terms"] as const;

/** A short titled group of controls: a quiet bordered block spanning both columns. */
function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="min-w-0 rounded-ds-md border border-border-hairline bg-surface-card p-3 sm:col-span-2">
      <legend className="px-1">
        <h3 className="text-small font-medium text-text-primary">{title}</h3>
      </legend>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

export function ContextFields({ view }: { view: IntakeView }) {
  return (
    <>
      <Group title="For the research">
        <AnalystNoteField view={view} />
        <RowEditors view={view} kinds={RESEARCH_ROWS} />
      </Group>
      <Group title="Dates and periods">
        <DateFields view={view} />
      </Group>
      <Group title="Legal documents">
        <LegalFields view={view} />
      </Group>
      <FileRoleGroup view={view} />
      <Group title="Ratings, quotes and facilities">
        <RowEditors view={view} kinds={DEAL_ROWS} />
      </Group>
      <IssuerDetailsFields view={view} />
      <ValuationSection view={view} />
      <AssumptionsSection view={view} />
      <AdvancedOptionsFields view={view} />
    </>
  );
}

/** A reporting period: required, and marked so, only when the pathway compares two periods. */
function PeriodField({
  view,
  field: key,
  title,
  placeholder,
}: {
  view: IntakeView;
  field: "current_period" | "prior_period";
  title: string;
  placeholder: string;
}) {
  return (
    <div className="grid content-start gap-1">
      <label className={label}>
        {view.earnings ? (
          <>
            {title} <span className="font-normal text-text-tertiary">(required)</span>
          </>
        ) : (
          title
        )}
        <input
          className={field}
          aria-required={view.earnings || undefined}
          {...problemAttrs(view.problem, key)}
          placeholder={placeholder}
          value={view.run[key] ?? ""}
          onChange={(event) => {
            view.changeRun(key, event.target.value.trim().toLowerCase());
          }}
        />
      </label>
      <FieldMessage problem={view.problem} field={key} />
    </div>
  );
}

function AnalystNoteField({ view }: { view: IntakeView }) {
  return (
    <div className="grid gap-1 sm:col-span-2">
      <label className={label}>
        Anything the analysis should know
        <textarea
          aria-describedby="run-analyst-questions"
          {...problemAttrs(view.problem, "analyst_note")}
          className={field}
          rows={3}
          placeholder="For example, the committee wants a view on the 2028 maturities."
          value={view.analystNote}
          onChange={(event) => {
            view.changeAnalystNote(event.target.value);
          }}
        />
      </label>
      <FieldMessage problem={view.problem} field="analyst_note" />
      <p id="run-analyst-questions" className="text-sm text-text-tertiary">
        Your note is included in the run’s research questions.
      </p>
    </div>
  );
}

function DateFields({ view }: { view: IntakeView }) {
  return (
    <>
      <label className={label}>
        Date of your newest file
        <input
          className={field}
          type="date"
          value={view.newest}
          onChange={(event) => {
            view.changeNewestOverride(event.target.value);
          }}
        />
      </label>
      <div className="grid content-start gap-1">
        <label className={label}>
          Research cutoff
          <input
            className={field}
            type="date"
            {...problemAttrs(view.problem, "cutoff")}
            value={view.run.cutoff || view.run.as_of}
            max={view.run.as_of || undefined}
            onChange={(event) => {
              view.changeRun("cutoff", event.target.value);
            }}
          />
        </label>
        <FieldMessage problem={view.problem} field="cutoff" />
      </div>
      <PeriodField
        view={view}
        field="current_period"
        title="Current period"
        placeholder="q3-2026"
      />
      <PeriodField view={view} field="prior_period" title="Prior period" placeholder="q2-2026" />
    </>
  );
}

function LegalFields({ view }: { view: IntakeView }) {
  return (
    <>
      <SelectField
        title={LEGAL_DOCUMENTS}
        value={view.legal}
        choices={LEGAL_CHOICES}
        problem={view.problem}
        problemField="legal_documents"
        onChange={view.changeLegal}
      />
      {view.legal !== "none" && (
        <SelectField
          title="The agreement"
          value={view.attachments.agreement ?? ""}
          choices={view.fileChoices}
          problem={view.problem}
          problemField="agreement"
          onChange={(value) => {
            view.changeAttachment("agreement", value);
          }}
        />
      )}
    </>
  );
}

/** Files with a role; the whole group is left out when none of its controls is drawn. */
function FileRoleGroup({ view }: { view: IntakeView }) {
  const bridge = view.earnings || view.level === "advanced";
  const keys = (["portfolio_workbook", "prior_case"] as const).filter(
    (key) =>
      view.level === "advanced" ||
      view.run.pathway === "portfolio_decision" ||
      (key === "portfolio_workbook" &&
        ["credit_snapshot", "deep_credit_assessment"].includes(view.run.pathway)),
  );
  if (!bridge && !keys.length) return null;
  return (
    <Group title="Files with a role">
      {bridge && (
        <SelectField
          title={ATTACHMENTS.management_bridge}
          value={view.attachments.management_bridge ?? ""}
          choices={view.fileChoices}
          onChange={(value) => {
            view.changeAttachment("management_bridge", value);
          }}
        />
      )}
      {keys.map((key) => (
        <SelectField
          key={key}
          title={ATTACHMENTS[key]}
          value={view.attachments[key] ?? ""}
          choices={view.fileChoices}
          onChange={(value) => {
            view.changeAttachment(key, value);
          }}
        />
      ))}
    </Group>
  );
}

function IssuerDetailsFields({ view }: { view: IntakeView }) {
  return (
    <details className="rounded-lg border border-border-hairline p-3 sm:col-span-2">
      <summary className="cursor-pointer font-semibold">{ISSUER_DETAILS}</summary>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        {ISSUER_TEXT_BOXES.map(([key, title, example]) => (
          <label key={key} className={label}>
            {title}
            <input
              className={field}
              placeholder={`e.g. ${example}`}
              value={view.identity[key] ?? ""}
              onChange={(event) => {
                view.changeIdentity(key, event.target.value);
              }}
            />
          </label>
        ))}
        {ISSUER_LIST_BOXES.map(([key, title]) => (
          <label key={key} className={label}>
            {title}
            <textarea
              className={field}
              placeholder="One per line"
              defaultValue={(view.identity[key] ?? []).join("\n")}
              key={view.copy?.run ?? "new"}
              onChange={(event) => {
                view.changeIdentity(
                  key,
                  event.target.value
                    .split("\n")
                    .map((line) => line.trim())
                    .filter(Boolean),
                );
              }}
            />
          </label>
        ))}
        <label className="flex items-center gap-2 text-sm font-semibold">
          <input
            type="checkbox"
            checked={view.identity.listed_equity ?? false}
            onChange={(event) => {
              view.changeListedEquity(event.target.checked);
            }}
          />{" "}
          {LISTED_EQUITY}
        </label>
        {view.identity.listed_equity && (
          <label className={label}>
            {TICKER}
            <input
              className={field}
              value={view.identity.ticker ?? ""}
              onChange={(event) => {
                view.changeIdentity("ticker", event.target.value);
              }}
            />
          </label>
        )}
      </div>
    </details>
  );
}

function RowEditors({ view, kinds }: { view: IntakeView; kinds: readonly RowKind[] }) {
  const focusChoices = [
    ["", ANY_FOCUS] as const,
    ...drawnModules(pathwayModules(view.run.pathway)).map((id) => [id, moduleName(id)] as const),
  ];
  return (
    <div className="grid gap-4 sm:col-span-2">
      {kinds.map((kind) => (
        <section key={kind} aria-labelledby={`rows-${kind}`} className="grid gap-2">
          <h4 id={`rows-${kind}`} className="text-sm font-semibold">
            {ROW_SPECS[kind].section}
          </h4>
          <RowEditor
            kind={kind}
            rows={view.rowsOf(kind)}
            onChange={(next) => {
              view.changeRows(kind, next);
            }}
            primary={view.run.run_type === "primary"}
            required={kind === "deal_terms" && view.run.run_type === "primary"}
            focusChoices={focusChoices}
            error={view.problem?.field === kind ? view.problem.message : undefined}
          />
        </section>
      ))}
    </div>
  );
}

function ValuationSection({ view }: { view: IntakeView }) {
  const wanted = view.requested;
  const runs = { cp3: wanted.includes("CP-3"), cp6: wanted.includes("CP-6") };
  const named = view.problem?.field === "valuation" || view.problem?.field === "module_options";
  if (view.level !== "advanced" && !view.forms.valuation && !view.forms.module_options && !named)
    return null;
  return (
    <div className="grid gap-3 sm:col-span-2">
      <details className="rounded-lg border border-border-hairline p-3">
        <summary className="cursor-pointer text-sm font-semibold">{VALUATION_TITLE}</summary>
        <div className="mt-3">
          <ValuationFields
            form={view.valuation}
            onChange={view.changeValuation}
            marker={problemAttrs(view.problem, "valuation")}
            message={<FieldMessage problem={view.problem} field="valuation" />}
          />
        </div>
      </details>
      {(runs.cp3 || runs.cp6) && (
        <details className="rounded-lg border border-border-hairline p-3">
          <summary className="cursor-pointer text-sm font-semibold">{MODULE_OPTIONS_TITLE}</summary>
          <div className="mt-3">
            <ModuleOptionsFields
              form={view.moduleOptions}
              runs={runs}
              onChange={view.changeModuleOptions}
              marker={problemAttrs(view.problem, "module_options")}
              message={<FieldMessage problem={view.problem} field="module_options" />}
            />
          </div>
        </details>
      )}
    </div>
  );
}

function AssumptionsSection({ view }: { view: IntakeView }) {
  if (view.level !== "advanced" && !view.forms.assumptions && view.problem?.field !== "assumptions")
    return null;
  return (
    <details className="rounded-lg border border-border-hairline p-3 sm:col-span-2">
      <summary className="cursor-pointer text-sm font-semibold">{ASSUMPTIONS_TITLE}</summary>
      <div className="mt-3 grid gap-3">
        <p className="text-sm text-text-secondary">
          Optional. Pin a value only where you hold a house view; otherwise the module chooses.
        </p>
        <AssumptionFields
          form={view.assumptions}
          modules={view.requested}
          onChange={view.changeAssumptions}
          marker={problemAttrs(view.problem, "assumptions")}
          message={<FieldMessage problem={view.problem} field="assumptions" />}
        />
      </div>
    </details>
  );
}

function AdvancedOptionsFields({ view }: { view: IntakeView }) {
  if (view.level !== "advanced") return null;
  const availableEfforts = copilotEfforts(view.copilotModels, view.model);
  const modelChoices = copilotPairVerified(view.copilotModels, "luna", "xhigh")
    ? MODELS
    : { gpt: MODELS.gpt, claude: MODELS.claude };
  const effortChoices = Object.fromEntries(
    Object.entries(EFFORTS).filter(([key]) => availableEfforts.includes(key)),
  );
  if (!Object.keys(effortChoices).length) effortChoices.none = "No verified effort available";
  const selectedEffort = effortChoices[view.effort]
    ? view.effort
    : (Object.keys(effortChoices)[0] ?? "");
  return (
    <>
      <SelectField
        title="Model"
        value={view.model}
        choices={modelChoices}
        onChange={view.changeModel}
      />
      <SelectField
        title="Reasoning effort"
        value={selectedEffort}
        choices={effortChoices}
        disabled={!availableEfforts.length}
        onChange={view.changeEffort}
      />
      <div className="grid content-start gap-1">
        <label className={label}>
          Turns per module
          <input
            className={field}
            type="number"
            required
            min={1}
            max={64}
            step={1}
            {...problemAttrs(view.problem, "turns")}
            value={view.turns}
            onChange={(event) => {
              view.changeTurns(event.target.value);
            }}
          />
        </label>
        <FieldMessage problem={view.problem} field="turns" />
      </div>
      <fieldset className="min-w-0 rounded-lg border border-border-hairline p-3 sm:col-span-2">
        <legend className="px-1 text-sm font-semibold">Requested modules</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {drawnModules(view.requested).map((code) => (
            <label key={code} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={!view.modules.length || view.modules.includes(code)}
                disabled={drawnModules(view.modules).length === 1 && view.modules.includes(code)}
                onChange={(event) => {
                  view.toggleModule(code, event.target.checked);
                }}
              />{" "}
              {moduleName(code)}
            </label>
          ))}
        </div>
      </fieldset>
    </>
  );
}
