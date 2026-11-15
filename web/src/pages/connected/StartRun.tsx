import { useId, useRef, useState, type SubmitEvent } from "react";
import { UploadCloud02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Stepper } from "../run/start/Stepper";
import {
  answersFor,
  createSubmission,
  getContext,
  getReading,
  getSummary,
  issuerSlug,
  moduleName,
  pathwayName,
  RequestError,
  submit,
  upload,
  type Answers,
  type Mode,
  type Summary,
} from "./api";
import { Breadcrumb, card, ErrorNotice, field, heading, label } from "./layout";
import { errorText, useResource } from "./useResource";
import { PageHeader } from "../../shell/PageHeader";

const STEPS = [
  { key: "inputs", title: "Run inputs", note: "Documents and issuer" },
  { key: "review", title: "Review", note: "Check the forecast" },
] as const;

type Review = { id: string; answers: Answers; summary: Summary };
type Uploaded = { id: string; files: File[]; complete: boolean };

const NEEDS_ACKNOWLEDGEMENT = new Set(["gap", "limited", "will_refuse", "check"]);

function ReviewPlan({ review }: { review: Review }) {
  const { summary, answers } = review;
  const { run, identity } = answers.context;
  return (
    <>
      <h2 className={heading}>Review run</h2>
      <dl className="grid gap-4 rounded-lg bg-surface-subtle p-4 text-sm sm:grid-cols-2">
        {[
          ["Issuer", identity.issuer_name],
          ["As-of date", run.as_of],
          ["Pathway", pathwayName(run.pathway)],
          ["Model and effort", `${summary.model} · ${summary.effort}`],
          ["Reporting currency", run.reporting_currency],
          ["Changes", summary.changes],
        ]
          .filter(([, value]) => value)
          .map(([term, value]) => (
            <div key={term}>
              <dt className="text-text-tertiary">{term}</dt>
              <dd className="mt-1 font-medium text-text-primary">{value}</dd>
            </div>
          ))}
      </dl>
      <section className="grid gap-2">
        <h3 className="font-semibold">Documents read</h3>
        <ul className="list-disc space-y-1 pl-5 text-sm text-text-secondary">
          {summary.documents.map((doc, i) => (
            <li key={i}>
              {doc.source} · {doc.kind.replaceAll("_", " ")}
            </li>
          ))}
        </ul>
        {summary.ignored.length > 0 && (
          <>
            <h3 className="font-semibold">Documents ignored</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-text-secondary">
              {summary.ignored.map((doc, i) => (
                <li key={i}>{typeof doc === "string" ? doc : `${doc.source} · ${doc.reason}`}</li>
              ))}
            </ul>
          </>
        )}
      </section>
      <section className="grid gap-2">
        <h3 className="font-semibold">Planned modules</h3>
        <ul className="grid gap-1.5 text-sm text-text-secondary sm:grid-cols-2">
          {summary.modules.map((code) => (
            <li key={code}>{moduleName(code)}</li>
          ))}
        </ul>
        {summary.omitted.length > 0 && (
          <p className="text-sm text-text-secondary">
            Report sections omitted · {summary.omitted.join(", ")}
          </p>
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
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

export function StartRun({ mode, navigate }: { mode: Mode; navigate: (path: string) => void }) {
  const { value: template, error: contextError } = useResource(getContext);
  const [issuer, setIssuer] = useState("");
  const [slug, setSlug] = useState<string | null>(null);
  const [asOf, setAsOf] = useState("");
  const [currency, setCurrency] = useState<string>();
  const [files, setFiles] = useState<File[]>([]);
  const [review, setReview] = useState<Review>();
  const [accepted, setAccepted] = useState(false);
  const [busy, setBusy] = useState<"review" | "submit">();
  const [error, setError] = useState("");
  const [submitUncertain, setSubmitUncertain] = useState(false);
  const uploading = useRef<Uploaded | null>(null);
  const active = useRef(false);
  const fileId = useId();
  const reviewHeading = useRef<HTMLDivElement>(null);
  const issuerId = slug ?? issuerSlug(issuer);
  const reportingCurrency = currency ?? template?.run.reporting_currency ?? "";
  const acknowledgement = review?.summary.items.some((item) =>
    NEEDS_ACKNOWLEDGEMENT.has(item.outcome),
  );

  async function makeReview(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (active.current || !template || !files.length) return;
    if (!issuer.trim() || !/^[a-z0-9][a-z0-9-]{0,39}$/.test(issuerId)) {
      setError("Enter an issuer name and an issuer ID using letters a–z, digits or hyphens.");
      return;
    }
    if (new Set(files.map((file) => file.name.normalize("NFKC"))).size !== files.length) {
      setError("Choose documents with distinct file names.");
      return;
    }
    active.current = true;
    setBusy("review");
    setError("");
    setAccepted(false);
    const answers = answersFor(template, issuer, issuerId, asOf, reportingCurrency);
    try {
      if (uploading.current?.files !== files) {
        const { id } = await createSubmission();
        uploading.current = { id, files, complete: false };
      }
      const draft = uploading.current;
      if (!draft.complete) {
        const stored = new Set<string>();
        for (const file of files) {
          const { name } = await upload(draft.id, file);
          if (stored.has(name)) {
            setError("Two documents have the same stored name. Rename one before continuing.");
            return;
          }
          stored.add(name);
        }
        draft.complete = true;
      }
      const reading = await getReading(draft.id);
      if (reading.documents.length === 0) {
        setError("The service could not read any of the selected documents.");
        return;
      }
      const summary = await getSummary(draft.id, answers);
      if (!summary.digest) {
        setError("The service did not issue an approval for this run.");
        return;
      }
      setReview({ id: draft.id, answers, summary });
    } catch (failure) {
      if (failure instanceof RequestError && failure.status === 404) uploading.current = null;
      setError(errorText(failure));
    } finally {
      active.current = false;
      setBusy(undefined);
    }
  }

  async function submitReviewed() {
    if (mode !== "synthetic" || active.current || !review || (acknowledgement && !accepted)) return;
    active.current = true;
    setBusy("submit");
    setError("");
    try {
      const { run } = await submit(review.id, review.answers, review.summary.digest);
      navigate(`/run/${encodeURIComponent(run)}`);
    } catch (failure) {
      if (failure instanceof RequestError && (failure.status === 400 || failure.status === 404)) {
        if (failure.status === 404) uploading.current = null;
        setReview(undefined);
        setAccepted(false);
        setSubmitUncertain(false);
        setError(`${errorText(failure)} Review the run again before submitting.`);
      } else {
        setSubmitUncertain(true);
        setError(`${errorText(failure)} Retrying Submit run is safe.`);
      }
    } finally {
      active.current = false;
      setBusy(undefined);
    }
  }

  function showReview(node: HTMLDivElement | null) {
    if (node && reviewHeading.current !== node) node.focus();
    reviewHeading.current = node;
  }

  return (
    <>
      <Breadcrumb>Start a run</Breadcrumb>
      <PageHeader title="Start a run" />
      <div className={`mt-6 max-w-4xl ${card}`}>
        <Stepper step={review ? "review" : "inputs"} steps={STEPS} />
        {(contextError || error) && <ErrorNotice>{contextError || error}</ErrorNotice>}
        {review ? (
          <div ref={showReview} tabIndex={-1} className="grid gap-5">
            <ReviewPlan review={review} />
            {acknowledgement && (
              <label className="flex items-start gap-2 text-sm font-medium">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(event) => {
                    setAccepted(event.target.checked);
                  }}
                  disabled={busy !== undefined}
                />
                I accept the listed checks and limitations
              </label>
            )}
            <p className="text-sm text-text-tertiary">
              {mode === "synthetic"
                ? "Synthetic run using the supplied documents."
                : "Live execution requires separate authorization. You can review the forecast here."}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Button
                color="secondary"
                isDisabled={busy !== undefined || submitUncertain}
                onPress={() => {
                  setReview(undefined);
                  setError("");
                }}
              >
                Edit inputs
              </Button>
              <Button
                isDisabled={
                  mode !== "synthetic" || busy !== undefined || (acknowledgement && !accepted)
                }
                onPress={() => {
                  void submitReviewed();
                }}
              >
                {busy === "submit" ? "Submitting…" : "Submit run"}
              </Button>
            </div>
          </div>
        ) : template ? (
          <form
            onSubmit={(event) => {
              void makeReview(event);
            }}
            className="grid gap-5"
          >
            <div>
              <h2 className={heading}>Run inputs</h2>
              <p className="mt-1 text-sm text-text-secondary">
                {pathwayName(template.run.pathway)} · {template.run.case_kind} case
              </p>
            </div>
            <fieldset disabled={busy !== undefined} className="grid min-w-0 gap-4 sm:grid-cols-2">
              <label className={label}>
                Issuer name
                <input
                  className={field}
                  required
                  value={issuer}
                  onChange={(event) => {
                    setIssuer(event.target.value);
                  }}
                />
              </label>
              <label className={label}>
                As-of date
                <input
                  className={field}
                  type="date"
                  required
                  value={asOf}
                  onChange={(event) => {
                    setAsOf(event.target.value);
                  }}
                />
              </label>
              <label className={label}>
                Issuer ID
                <input
                  className={field}
                  required
                  pattern="[a-z0-9][a-z0-9\-]{0,39}"
                  maxLength={40}
                  value={issuerId}
                  onChange={(event) => {
                    setSlug(event.target.value);
                  }}
                />
              </label>
              <label className={label}>
                Reporting currency
                <input
                  className={field}
                  required
                  pattern="[A-Z]{3}"
                  maxLength={3}
                  value={reportingCurrency}
                  onChange={(event) => {
                    setCurrency(event.target.value.toUpperCase());
                  }}
                />
              </label>
              <div className="flex flex-col items-center gap-3 rounded-xl bg-surface-subtle px-4 py-5 text-text-secondary ring-1 ring-secondary ring-inset sm:col-span-2">
                <FeaturedIcon icon={UploadCloud02} color="gray" size="md" />
                <label htmlFor={fileId} className="font-semibold text-text-primary">
                  Documents
                </label>
                <input
                  className="max-w-full text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-action file:px-3 file:py-2 file:font-semibold file:text-text-on-action"
                  id={fileId}
                  type="file"
                  multiple
                  onChange={(event) => {
                    setFiles(Array.from(event.target.files ?? []));
                  }}
                />
                <p className="text-center text-xs">
                  Add the filings and other source documents for this run. Up to 50 MB per file.
                </p>
                {files.length > 0 && (
                  <ul
                    aria-label="Documents selected"
                    className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm"
                  >
                    {files.map((file, index) => (
                      <li key={index} className="wrap-anywhere">
                        {file.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </fieldset>
            <Button
              className="justify-self-end"
              type="submit"
              isDisabled={busy !== undefined || !files.length}
            >
              {busy === "review" ? "Preparing review…" : "Review run"}
            </Button>
          </form>
        ) : (
          !contextError && (
            <p role="status" className="text-text-secondary">
              Loading run options…
            </p>
          )
        )}
      </div>
    </>
  );
}
