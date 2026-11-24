import type { RefObject, SubmitEvent } from "react";
import { Button } from "@/components/base/buttons/button";
import { Stepper } from "../../run/start/Stepper";
import { card, ErrorNotice, heading } from "../layout";
import { StartReadiness } from "./StartReadiness";
import { copilotPairVerified, refusalLines } from "./plain";
import {
  type FormStep,
  STEPPER_STEPS,
  STEP_TOTAL,
  FORM_STEP_KEYS,
  STEP_GUIDANCE,
  EARNINGS_CONTEXT_GUIDANCE,
  type Review,
  type IntakeView,
  type ReadinessRow,
} from "./intake";
import { DocumentFields } from "./DocumentsStep";
import { PurposeFields } from "./PurposeStep";
import { ContextFields } from "./ContextStep";
import { ReviewConfirmation } from "./ReviewStep";
import { HEADING_FOCUS, focusStep } from "./fields";

function StepFields({
  view,
  folderInput,
}: {
  view: IntakeView;
  folderInput: RefObject<HTMLInputElement | null>;
}) {
  switch (view.step) {
    case "documents":
      return <DocumentFields view={view} folderInput={folderInput} />;
    case "purpose":
      return <PurposeFields view={view} />;
    case "context":
      return <ContextFields view={view} />;
  }
}

type IntakePanelsProps = {
  step: FormStep;
  review?: Review;
  error: string;
  otherProblems: readonly string[];
  accepted: Set<string>;
  approved: boolean;
  checksComplete: boolean;
  busy?: "review" | "submit" | "documents" | "copy";
  submitUncertain: boolean;
  capText: string | null;
  cap: number | null;
  synthetic: boolean;
  view: IntakeView;
  folderInput: RefObject<HTMLInputElement | null>;
  title: string;
  previous: FormStep | null;
  next: string;
  readiness: ReadinessRow[];
  focusHeading: boolean;
  onAccept: (ids: readonly string[], checked: boolean) => void;
  onApprove: (value: boolean) => void;
  onEdit: (step: FormStep) => void;
  onModules: (modules: string[]) => void;
  onSubmit: () => void;
  onAdvance: (event: SubmitEvent<HTMLFormElement>) => void;
  onPrevious: () => void;
};

/** Refusal lines in the screen's own words: one as a sentence, several as a list. */
function RefusalNotice({ lines }: { lines: readonly string[] }) {
  const [only] = lines;
  return (
    <ErrorNotice>
      {lines.length === 1 ? (
        only
      ) : (
        <ul className="list-disc pl-5">
          {lines.map((line, position) => (
            <li key={position}>{line}</li>
          ))}
        </ul>
      )}
    </ErrorNotice>
  );
}

export function IntakePanels(props: IntakePanelsProps) {
  const {
    step,
    review,
    error,
    otherProblems,
    accepted,
    approved,
    checksComplete,
    busy,
    submitUncertain,
    capText,
    cap,
    synthetic,
    view,
    folderInput,
    title,
    previous,
    next,
    readiness,
    focusHeading,
    onAccept,
    onApprove,
    onEdit,
    onModules,
    onSubmit,
    onAdvance,
    onPrevious,
  } = props;
  const capBar = cap && capText ? { value: 0, max: cap, label: `USD 0.00 of ${capText}` } : null;
  const ready = `${String(readiness.filter((row) => row.met).length)} of ${String(readiness.length)} ready · ${capBar ? capBar.label : "Cap unavailable"}`;
  return (
    <div className="mt-6 grid min-w-0 items-start gap-6 min-[1041px]:run-intake-columns">
      <div className={`min-w-0 ${card}`}>
        <div className="@container grid gap-5">
          <Stepper
            step={review ? "start" : step}
            steps={STEPPER_STEPS.map((item) =>
              item.key === "context" && view.earnings
                ? { ...item, note: "Periods required" }
                : item.key === "start" && synthetic
                  ? { ...item, note: "No-cost test" }
                  : item,
            )}
            onSelect={
              busy === undefined && !submitUncertain
                ? (key) => {
                    onEdit(key as FormStep);
                  }
                : undefined
            }
          />
          <p className="text-caption text-text-tertiary tabular-nums @[620px]:hidden">
            {review
              ? `Step ${String(STEP_TOTAL)} of ${String(STEP_TOTAL)} · Review and start`
              : `Step ${String(FORM_STEP_KEYS.indexOf(step) + 1)} of ${String(STEP_TOTAL)} · ${title}`}
          </p>
        </div>
        {error && !review && <RefusalNotice lines={refusalLines(error)} />}
        {view.changeNotice && <p className="text-sm text-text-secondary">{view.changeNotice}</p>}
        {otherProblems.length > 0 && <RefusalNotice lines={otherProblems} />}
        {review ? (
          <ReviewConfirmation
            review={review}
            accepted={accepted}
            approved={approved}
            checksComplete={checksComplete}
            busy={busy}
            error={error}
            submitUncertain={submitUncertain}
            capText={capText}
            capAvailable={Boolean(cap)}
            synthetic={synthetic}
            modelVerified={
              synthetic ||
              (review.summary.copilot_verified !== false &&
                copilotPairVerified(
                  view.copilotModels,
                  review.answers.model,
                  review.answers.effort,
                ))
            }
            ready={ready}
            idNote={view.idNote}
            onAccept={onAccept}
            onApprove={onApprove}
            onEdit={onEdit}
            onModules={onModules}
            onSubmit={onSubmit}
          />
        ) : (
          <InputStepForm
            view={view}
            folderInput={folderInput}
            title={title}
            previous={previous}
            next={next}
            ready={ready}
            focusHeading={focusHeading}
            onAdvance={onAdvance}
            onPrevious={onPrevious}
          />
        )}
      </div>
      <StartReadiness
        rows={readiness}
        cap={capBar}
        capTitle={synthetic ? "Configured cap for paid runs" : "Spending cap for this run"}
      />
    </div>
  );
}

function InputStepForm({
  view,
  folderInput,
  title,
  previous,
  next,
  ready,
  focusHeading,
  onAdvance,
  onPrevious,
}: {
  view: IntakeView;
  folderInput: RefObject<HTMLInputElement | null>;
  title: string;
  previous: FormStep | null;
  next: string;
  ready: string;
  focusHeading: boolean;
  onAdvance: (event: SubmitEvent<HTMLFormElement>) => void;
  onPrevious: () => void;
}) {
  const blocked = view.step === "documents" && !view.canRead;
  return (
    <form
      onSubmit={(event) => {
        onAdvance(event);
      }}
      className="grid min-w-0 grid-cols-1 gap-5"
    >
      <div className="grid gap-1">
        <h2
          key={view.step}
          ref={focusHeading ? focusStep : undefined}
          tabIndex={-1}
          className={`${heading} ${HEADING_FOCUS}`}
        >
          {title}
        </h2>
        <p className="reading-copy text-body text-text-secondary">
          {view.step === "context" && view.earnings
            ? EARNINGS_CONTEXT_GUIDANCE
            : STEP_GUIDANCE[view.step]}
        </p>
      </div>
      <fieldset
        disabled={view.busy !== undefined}
        className="grid min-w-0 grid-cols-1 items-start gap-4 sm:grid-cols-2"
      >
        <StepFields view={view} folderInput={folderInput} />
      </fieldset>
      <p className="text-caption text-text-tertiary tabular-nums min-[1041px]:hidden">{ready}</p>
      <div className="flex flex-wrap items-center gap-3">
        {previous && (
          <Button color="secondary" isDisabled={view.busy !== undefined} onPress={onPrevious}>
            Previous
          </Button>
        )}
        {view.problem && (
          <Button
            color="link-destructive"
            size="sm"
            className="max-w-full text-left whitespace-normal"
            onPress={view.focusProblem}
          >
            {`1 problem to fix: ${view.problem.message}`}
          </Button>
        )}
        <div className="ml-auto flex flex-wrap items-center justify-end gap-3">
          {blocked && (
            <p id="run-step-blocker" className="text-sm text-text-secondary">
              Add at least one document to continue.
            </p>
          )}
          <Button
            type="submit"
            aria-describedby={blocked ? "run-step-blocker" : undefined}
            isDisabled={view.busy !== undefined || blocked}
          >
            {view.busy === "review" ? "Preparing review…" : next}
          </Button>
        </div>
      </div>
    </form>
  );
}
