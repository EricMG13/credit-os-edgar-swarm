import { SubmitConfirmation } from "../../run/start/Start";
import { ErrorNotice, heading } from "../layout";
import { decided, groupLimits } from "./limits";
import { ReviewSheet } from "./ReviewSheet";
import { type FormStep, SYNTHETIC_LIMITS, type Review } from "./intake";
import { HEADING_FOCUS, focusStep } from "./fields";

function ReviewApproval({
  blocker,
  approved,
  disabled,
  onApprove,
}: {
  blocker: string;
  approved: boolean;
  disabled: boolean;
  onApprove: (approved: boolean) => void;
}) {
  return (
    <>
      {blocker && (
        <p id="run-submit-blocker" className="text-sm text-text-secondary">
          {blocker}
        </p>
      )}
      <label className="flex items-start gap-2 text-sm font-semibold">
        <input
          type="checkbox"
          aria-describedby={blocker ? "run-submit-blocker" : undefined}
          checked={approved}
          disabled={disabled}
          onChange={(event) => {
            onApprove(event.target.checked);
          }}
        />
        Approve: I have read this summary and want this run started
      </label>
    </>
  );
}

function ReviewNotes({ synthetic, idNote }: { synthetic: boolean; idNote: string }) {
  return (
    <>
      {synthetic && <p className="text-sm text-text-secondary">{SYNTHETIC_LIMITS}</p>}
      {idNote && <p className="text-sm text-text-secondary">{idNote}</p>}
    </>
  );
}

function ReviewSubmit({
  modelVerified,
  synthetic,
  checksComplete,
  approved,
  busy,
  capText,
  capAvailable,
  ready,
  error,
  onSubmit,
}: Pick<
  Parameters<typeof ReviewConfirmation>[0],
  | "synthetic"
  | "modelVerified"
  | "checksComplete"
  | "approved"
  | "busy"
  | "capText"
  | "capAvailable"
  | "ready"
  | "error"
  | "onSubmit"
>) {
  const submitLabel = submitLabelFor({ busy, synthetic, capText });
  const confirmation = confirmationFor(synthetic, capText);
  const submitDisabled =
    !checksComplete ||
    !approved ||
    busy !== undefined ||
    (!synthetic && (!capAvailable || !modelVerified));
  return (
    <>
      <div className="grid gap-1 border-t border-border-hairline pt-4">
        <h3 className="text-md font-semibold text-text-primary">
          {synthetic ? "Confirm a synthetic test" : "Confirm a paid run"}
        </h3>
        <p id="run-submit-cost" className="reading-copy text-body text-text-secondary">
          <SubmissionCost synthetic={synthetic} capText={capText} />
        </p>
      </div>
      {!synthetic && !modelVerified && (
        <p className="text-sm text-text-secondary">
          Paid Submit is unavailable because this model and effort pair is not verified for the
          current Copilot CLI service. You can keep this offline review and return when a pair is
          available.
        </p>
      )}
      <p className="text-caption text-text-tertiary tabular-nums min-[1041px]:hidden">{ready}</p>
      {error && <ErrorNotice>{error}</ErrorNotice>}
      <div className="flex justify-end">
        <SubmitConfirmation
          className="w-full sm:w-auto"
          label={submitLabel}
          confirm={confirmation}
          isDisabled={submitDisabled}
          describedBy="run-submit-cost"
          onConfirm={onSubmit}
        />
      </div>
    </>
  );
}

export function ReviewConfirmation({
  modelVerified,
  review,
  accepted,
  approved,
  checksComplete,
  busy,
  error,
  submitUncertain,
  capText,
  capAvailable,
  synthetic,
  ready,
  idNote,
  onAccept,
  onApprove,
  onEdit,
  onModules,
  onSubmit,
}: {
  modelVerified: boolean;
  idNote: string;
  review: Review;
  accepted: Set<string>;
  approved: boolean;
  checksComplete: boolean;
  busy?: "review" | "submit" | "documents" | "copy";
  error: string;
  submitUncertain: boolean;
  capText: string | null;
  capAvailable: boolean;
  synthetic: boolean;
  ready: string;
  onAccept: (ids: readonly string[], checked: boolean) => void;
  onApprove: (approved: boolean) => void;
  onEdit: (step: FormStep) => void;
  onModules: (modules: string[]) => void;
  onSubmit: () => void;
}) {
  const locked = busy !== undefined || submitUncertain;
  const { groups } = groupLimits(review.summary.items);
  const undecided = groups.filter((group) => !decided(group, accepted)).length;
  const blocker = submitBlocker(undecided, approved);
  return (
    <div className="grid gap-5">
      <h2 ref={focusStep} tabIndex={-1} className={`${heading} ${HEADING_FOCUS}`}>
        Review and start
      </h2>
      <ReviewSheet
        review={review}
        accepted={accepted}
        disabled={locked}
        onEdit={onEdit}
        onModules={onModules}
        onAccept={onAccept}
        synthetic={synthetic}
      />
      <ReviewNotes synthetic={synthetic} idNote={idNote} />
      <ReviewApproval
        blocker={blocker}
        approved={approved}
        disabled={!checksComplete || locked}
        onApprove={onApprove}
      />
      <ReviewSubmit
        modelVerified={modelVerified}
        synthetic={synthetic}
        checksComplete={checksComplete}
        approved={approved}
        busy={busy}
        error={error}
        capText={capText}
        capAvailable={capAvailable}
        ready={ready}
        onSubmit={onSubmit}
      />
    </div>
  );
}

function submitBlocker(undecided: number, approved: boolean) {
  if (undecided > 0)
    return `${String(undecided)} ${undecided === 1 ? "decision" : "decisions"} left before you can approve.`;
  return approved ? "" : "Approve the summary to enable Submit.";
}

function SubmissionCost({ synthetic, capText }: { synthetic: boolean; capText: string | null }) {
  if (synthetic)
    return (
      <>
        Submit opens a confirmation. The test uses the supplied documents and makes no paid provider
        calls.
      </>
    );
  if (capText === null)
    return <>The spending cap is unavailable. Reopen the form to load it before submitting.</>;
  return (
    <>
      Submit opens a confirmation. Once confirmed, this run can spend up to{" "}
      <strong className="tabular-nums">{capText}</strong>.
    </>
  );
}

function submitLabelFor({
  busy,
  synthetic,
  capText,
}: {
  busy?: "review" | "submit" | "documents" | "copy";
  synthetic: boolean;
  capText: string | null;
}) {
  if (busy === "submit") return "Submitting…";
  if (synthetic) return "Submit run";
  return `Submit, spend up to ${capText ?? "the cap"}`;
}

function confirmationFor(synthetic: boolean, capText: string | null) {
  if (synthetic)
    return {
      title: "Start a synthetic test?",
      text: "This test runs the workflow with the supplied documents and spends USD 0.00.",
      action: "Start synthetic run",
    };
  return {
    title: "Start a paid run?",
    text: `This run can spend up to ${capText ?? "the configured cap"} and stops when it reaches that cap. Once it starts, what it has spent cannot be taken back.`,
    action: `Start run, up to ${capText ?? "the cap"}`,
  };
}
