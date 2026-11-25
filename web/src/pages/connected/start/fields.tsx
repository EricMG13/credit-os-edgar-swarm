import { useId } from "react";
import { RequestError } from "../api";
import { field, label } from "../layout";
import { refusalProblems } from "./plain";
import { ANALYST_NAME_RULE } from "./analystName";
import type { FormStep } from "./intake";

export type FieldKey =
  | "issuer_name"
  | "issuer_id"
  | "as_of"
  | "submitted_by"
  | "cutoff"
  | "current_period"
  | "prior_period"
  | "legal_documents"
  | "agreement"
  | "deal_terms"
  | "quotes"
  | "ratings"
  | "research_questions"
  | "analyst_note"
  | "turns"
  | "valuation"
  | "assumptions"
  | "module_options";

/**
 * A problem that belongs to one control: shown on it, not in the general notice. A service refusal
 * that names several problems carries the others, in their labelled lines, as `others`.
 */
export class FieldProblem extends Error {
  constructor(
    readonly field: FieldKey,
    message: string,
    readonly others?: readonly string[],
    /** For `issuer_id`: the free Issuer ID the page offers in its place. */
    readonly offer?: string,
  ) {
    super(message);
  }
}

/**
 * The first problem of a summary refusal whose control is drawn becomes a FieldProblem and the rest
 * its `others`; a failure that is not a refusal, or names no drawn control, is `undefined` (the
 * general notice shows it as it is).
 */
export function refusedField(
  failure: unknown,
  requested: readonly string[],
  noteAt: number,
): FieldProblem | undefined {
  if (!(failure instanceof RequestError) || failure.status === 404) return undefined;
  const problems = refusalProblems(failure.message, requested, noteAt);
  const at = problems.findIndex(({ field }) => field !== undefined);
  const first = problems[at];
  if (!first?.field) return undefined;
  return new FieldProblem(
    first.field,
    first.line,
    problems.filter((_, position) => position !== at).map(({ line }) => line),
  );
}

/** The step a control is drawn on: the issuer name and analyst name on Documents, the rest on Context. */
export function stepOfField(field: FieldKey): FormStep {
  return field === "issuer_name" ||
    field === "issuer_id" ||
    field === "as_of" ||
    field === "submitted_by"
    ? "documents"
    : "context";
}

export function problemAttrs(problem: FieldProblem | undefined, field: FieldKey) {
  return problem?.field === field
    ? { "data-field": field, "aria-invalid": "true" as const, "aria-describedby": `error-${field}` }
    : { "data-field": field };
}

export function FieldMessage({ problem, field }: { problem?: FieldProblem; field: FieldKey }) {
  if (problem?.field !== field) return null;
  return (
    <p id={`error-${field}`} role="alert" className="text-small text-error-primary">
      {problem.message}
    </p>
  );
}

/** Opens what holds the control, then focuses and scrolls to it. */
export function focusField(field: FieldKey) {
  const control = document.querySelector<HTMLElement>(`[data-field="${field}"]`);
  const holder = control?.closest("details");
  if (holder) holder.open = true;
  control?.focus();
  control?.scrollIntoView({ block: "center" });
}

export function SelectField({
  title,
  value,
  choices,
  onChange,
  disabled = false,
  problem,
  problemField,
  help,
}: {
  title: string;
  value: string;
  choices: Readonly<Record<string, string>>;
  onChange: (value: string) => void;
  disabled?: boolean;
  problem?: FieldProblem;
  problemField?: FieldKey;
  help?: string;
}) {
  const helpId = useId();
  const failing = problemField !== undefined && problem?.field === problemField;
  const describedBy =
    [help ? helpId : "", failing ? `error-${problemField}` : ""].filter(Boolean).join(" ") ||
    undefined;
  const select = (
    <label className={label}>
      {title}
      <select
        className={field}
        disabled={disabled}
        {...(problemField ? problemAttrs(problem, problemField) : {})}
        aria-describedby={describedBy}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      >
        {Object.entries(choices).map(([key, text]) => (
          <option key={key} value={key}>
            {text}
          </option>
        ))}
      </select>
    </label>
  );
  if (!help && !problemField) return select;
  return (
    <div className="grid content-start gap-1">
      {select}
      {help && (
        <p id={helpId} className="text-small text-text-tertiary">
          {help}
        </p>
      )}
      {problemField && <FieldMessage problem={problem} field={problemField} />}
    </div>
  );
}

export const HEADING_FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus";

export function focusStep(node: HTMLElement | null) {
  node?.focus();
}

/** What a blank required field asks for, in the page's words. */
const MISSING: Partial<Record<FieldKey, string>> = {
  issuer_name: "Enter the issuer's name.",
  issuer_id: "Enter an Issuer ID.",
  as_of: "Enter the as-of date.",
  submitted_by: ANALYST_NAME_RULE,
  turns: "Enter the turns per module.",
};

/**
 * The page's own words for a control the browser found invalid, in place of the browser's bubble;
 * undefined for a control the page has no words for (the browser's bubble then stands).
 */
export function invalidMessage(
  field: FieldKey,
  control: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
): string | undefined {
  const { validity } = control;
  if (validity.valueMissing) return MISSING[field];
  if (validity.patternMismatch && field === "issuer_id")
    return "Use letters a–z, digits and hyphens, starting with a letter or digit, up to 40 characters.";
  if (validity.badInput || validity.typeMismatch)
    return control instanceof HTMLInputElement && control.type === "date"
      ? "Enter a whole date: day, month and year."
      : "Enter a number.";
  if (control instanceof HTMLInputElement) {
    if (validity.rangeUnderflow || validity.rangeOverflow || validity.stepMismatch)
      return control.type === "date"
        ? `Enter a date on or before ${control.max}.`
        : `Enter a whole number from ${control.min} to ${control.max}.`;
  }
  return undefined;
}
