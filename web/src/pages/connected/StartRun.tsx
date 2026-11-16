import { useCallback, useRef, useState, type SubmitEvent } from "react";
import { File05, Folder } from "@untitledui/icons";
import { FileUpload } from "@/components/application/file-upload/file-upload-base";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { PurposeCards } from "../run/start/Purpose";
import { Readiness } from "../run/start/Readiness";
import { SubmitConfirmation } from "../run/start/Start";
import { Stepper } from "../run/start/Stepper";
import {
  carryDocuments,
  getLatestIssuerRun,
  getPriorInputs,
  PATHWAYS,
  pathwayModules,
  removeDocument,
  createSubmission,
  getContext,
  getReading,
  getSummary,
  issuerSlug,
  moduleName,
  RequestError,
  submit,
  upload,
  type Answers,
  type Context,
  type PriorInputs,
  type Reading,
  type Mode,
  type Summary,
} from "./api";
import { Breadcrumb, card, ErrorNotice, field, heading, label } from "./layout";
import { ReviewSheet, needsCheck } from "./start/ReviewSheet";
import { documentDescription, LEVELS, PURPOSES, storedName } from "./start/plain";
import { errorText, useResource } from "./useResource";
import { PageHeader } from "../../shell/PageHeader";

const FORM_STEPS = {
  documents: { title: "Documents", next: "Continue to purpose", previous: null },
  purpose: { title: "Purpose", next: "Continue to context", previous: "documents" },
  context: { title: "More context", next: "Review run", previous: "purpose" },
} as const;
type FormStep = keyof typeof FORM_STEPS;
const STEPPER_STEPS = [
  { key: "documents", title: "Documents", note: "Add files" },
  { key: "purpose", title: "Purpose", note: "Choose one" },
  { key: "context", title: "More context", note: "Optional" },
  { key: "start", title: "Review and start", note: "Paid step" },
] as const;
const STEP_TOTAL = STEPPER_STEPS.length;
const FORM_STEP_KEYS = Object.keys(FORM_STEPS) as FormStep[];
const STEP_GUIDANCE: Record<FormStep, string> = {
  documents:
    "Add annual and interim reports, the credit agreement and any other material the analysis should read.",
  purpose: "The purpose determines which modules run.",
  context: "Optional. You can continue if the documents provide all the context.",
};

const PATHWAY_DESCRIPTIONS: Record<string, string> = {
  credit_snapshot: "Assess the issuer, downside, covenants, refinancing and forward cash flow.",
  lite_credit_assessment: "Review the issuer's fundamentals, credit drivers and downside.",
  earnings_update: "Compare the latest results with an earlier period.",
  relative_value: "Compare instruments, pricing and compensation for risk.",
  covenant_refinancing: "Assess legal protections, funding needs and refinancing options.",
  distressed_restructuring: "Assess stressed liquidity, covenants and recoveries.",
  portfolio_decision: "Assess instruments and portfolio fit for a decision.",
};
const PATHWAY_CARDS = Object.entries(PATHWAYS).map(([id, pathway]) => ({
  id,
  title: pathway.label,
  description: PATHWAY_DESCRIPTIONS[id] ?? "",
  modules: `${String(pathway.modules.length)} base modules`,
}));

type Review = { id: string; answers: Answers; summary: Summary };
type Draft = { id: string; uploaded: Map<File, string>; copied: boolean };

const ATTACHMENTS = {
  management_bridge: "Management EBITDA bridge",
  portfolio_workbook: "Portfolio workbook",
  prior_case: "Prior decision record",
};
const ROW_EXAMPLES = {
  deal_terms: {
    facility_id: "",
    instrument: "",
    currency: "",
    size_m: "",
    tenor_years: "",
    talk_spread_bps_low: "",
    talk_spread_bps_high: "",
    talk_oid_low: "",
    talk_oid_high: "",
    floor_pct: "",
    coupon_pct: "",
    margin_bps: "",
    maturity: "",
    call_protection: "",
    use_of_proceeds: "",
    as_of: "",
    provider: "",
  },
  quotes: {
    facility_id: "",
    kind: "observed",
    bid: "",
    ask: "",
    price: "",
    yield_pct: "",
    spread_bps: "",
    as_of: "",
    provider: "",
  },
  ratings: { agency: "", scope: "issuer", rating: "", outlook: "", as_of: "" },
  research_questions: { text: "", focus_module: "" },
};
const ROW_LABELS = {
  deal_terms: "Add facility",
  quotes: "Add quote",
  ratings: "Add rating",
  research_questions: "Add research question",
};
const COMPLEX_FIELDS = {
  deal_terms: "Facilities and deal terms",
  quotes: "Observed quotes",
  ratings: "Ratings",
  valuation: "Valuation and peers",
  assumptions: "Scenario assumptions",
  research_questions: "Research questions",
  module_options: "Module options",
};
type ComplexField = keyof typeof COMPLEX_FIELDS;
type Attachment = keyof typeof ATTACHMENTS | "agreement";

function focusStep(node: HTMLElement | null) {
  node?.focus();
}

function fileName(file: File) {
  return (file.webkitRelativePath || "").split("/").slice(1).join("/") || file.name;
}

function SelectField({
  title,
  value,
  choices,
  onChange,
}: {
  title: string;
  value: string;
  choices: Readonly<Record<string, string>>;
  onChange: (value: string) => void;
}) {
  return (
    <label className={label}>
      {title}
      <select
        className={field}
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
}

function isRowField(key: ComplexField): key is keyof typeof ROW_EXAMPLES {
  return Object.hasOwn(ROW_EXAMPLES, key);
}

function readDetails(edits: Partial<Record<ComplexField, string>>) {
  const details: Record<string, unknown> = {};
  for (const [key, raw] of Object.entries(edits) as [ComplexField, string][]) {
    const list = isRowField(key);
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      throw new Error(`${COMPLEX_FIELDS[key]} must contain valid JSON.`);
    }
    const isObject = (item: unknown) =>
      item !== null && typeof item === "object" && !Array.isArray(item);
    if (list ? !Array.isArray(parsed) || !parsed.every(isObject) : !isObject(parsed)) {
      throw new Error(
        `${COMPLEX_FIELDS[key]} must be ${list ? "a list of objects" : "an object"}.`,
      );
    }
    details[key] = parsed;
  }
  return details;
}

export function StartRun({
  mode,
  navigate,
  from,
}: {
  mode: Mode;
  navigate: (path: string) => void;
  from?: string;
}) {
  const load = useCallback(
    async (signal: AbortSignal) => {
      const runOptions = await getContext(signal);
      if (!from || signal.aborted) return runOptions;
      try {
        const prior = await getPriorInputs(from);
        return { ...runOptions, initial: { run: from, prior } };
      } catch (failure) {
        return { ...runOptions, warning: errorText(failure) };
      }
    },
    [from],
  );
  const { value, error } = useResource(load);

  return (
    <>
      <Breadcrumb>Start a run</Breadcrumb>
      <PageHeader
        title="Start a run"
        badges={mode === "synthetic" ? <Badge color="brand">Synthetic test</Badge> : undefined}
      />
      <p className="mt-3 text-sm text-text-secondary">
        Choose the documents and purpose, then review what will run.
      </p>
      {value ? (
        <IntakeForm mode={mode} navigate={navigate} {...value} />
      ) : error ? (
        <ErrorNotice>{error}</ErrorNotice>
      ) : (
        <p role="status" className="mt-6 text-text-secondary">
          Loading run options…
        </p>
      )}
    </>
  );
}

function IntakeForm({
  template,
  cap,
  initial,
  warning,
  navigate,
  mode,
}: {
  template: Context;
  cap: number | null;
  initial?: { run: string; prior: PriorInputs };
  warning?: string;
  navigate: (path: string) => void;
  mode: Mode;
}) {
  const [copy, setCopy] = useState(initial);
  const [step, setStep] = useState<FormStep>("documents");
  const [priorNote, setPriorNote] = useState(initial?.prior.error || warning || "");
  const [context, setContext] = useState<Context>(() => startingContext(template, initial?.prior));
  const [purposeTouched, setPurposeTouched] = useState(Boolean(initial?.prior.context));
  const [customSlug, setCustomSlug] = useState(initial?.prior.issuer_id);
  const [newestOverride, setNewestOverride] = useState<string>();
  const [files, setFiles] = useState<File[]>([]);
  const [reading, setReading] = useState<Reading>();
  const [uploaded, setUploaded] = useState(new Map<File, string>());
  const [ignoredCopies, setIgnoredCopies] = useState<string[]>([]);
  const [attachments, setAttachments] = useState<Partial<Record<Attachment, string>>>({});
  const [legal, setLegal] = useState("none");
  const [edits, setEdits] = useState<Partial<Record<ComplexField, string>>>({});
  const [analystNote, setAnalystNote] = useState("");
  const [level, setLevel] = useState(() => initial?.prior.level || "basic");
  const [model, setModel] = useState("gpt");
  const [effort, setEffort] = useState("balanced");
  const [turns, setTurns] = useState(() => String(initial?.prior.max_turns || 32));
  const [modules, setModules] = useState<string[]>(() => carriedModules(initial?.prior));
  const [submittedBy, setSubmittedBy] = useState("");
  const [review, setReview] = useState<Review>();
  const [accepted, setAccepted] = useState(new Set<string>());
  const [approved, setApproved] = useState(false);
  const [busy, setBusy] = useState<"review" | "submit" | "documents" | "copy">();
  const [error, setError] = useState("");
  const [submitUncertain, setSubmitUncertain] = useState(false);
  const draftRef = useRef<Draft | null>(null);
  const active = useRef(false);
  const folderInput = useRef<HTMLInputElement>(null);

  const { run, identity } = context;
  const issuerId = customSlug ?? issuerSlug(identity.issuer_name);
  const requested = pathwayModules(run.pathway);
  const earnings = run.pathway === "earnings_update";
  const canRead = files.length > 0 || (!!copy?.prior.files.length && !copy.prior.error);
  const checksComplete = review?.summary.items.every(
    (item) => !needsCheck(item) || accepted.has(item.id),
  );
  const newest = newestOverride ?? newestPeriod(reading);

  function changeRun(key: keyof Context["run"], value: string) {
    setContext((previous) => ({ ...previous, run: { ...previous.run, [key]: value } }));
  }

  function changeIdentity<K extends keyof Context["identity"]>(
    key: K,
    value: Context["identity"][K],
  ) {
    setContext((previous) => ({ ...previous, identity: { ...previous.identity, [key]: value } }));
  }

  async function withDraft(
    action: "review" | "documents" | "copy" | "submit",
    work: () => Promise<void>,
  ) {
    if (active.current) return;
    active.current = true;
    setBusy(action);
    setError("");
    try {
      await work();
    } catch (failure) {
      if (failure instanceof RequestError && failure.status === 404) {
        draftRef.current = null;
        setUploaded(new Map());
        setReading(undefined);
      }
      setError(errorText(failure));
    } finally {
      active.current = false;
      setBusy(undefined);
    }
  }

  async function refreshDocuments() {
    const incoming = files.map((file) => ({ file, name: fileName(file) }));
    const names = incoming.map(({ name }) => name.normalize("NFC").toLowerCase());
    if (new Set(names).size !== names.length) {
      throw new Error("Choose documents with distinct file names.");
    }
    if (!draftRef.current) {
      const { id } = await createSubmission();
      draftRef.current = { id, uploaded: new Map(), copied: false };
    }
    const draft = draftRef.current;
    for (const { file, name } of incoming) {
      if (draft.uploaded.has(file)) continue;
      const result = await upload(draft.id, file, name);
      const collisionKey = result.name.normalize("NFC").toLowerCase();
      if (
        [...draft.uploaded.values()].some(
          (stored) => stored.normalize("NFC").toLowerCase() === collisionKey,
        )
      ) {
        draftRef.current = null;
        setUploaded(new Map());
        setReading(undefined);
        throw new Error(
          "Two documents have the same stored name. Remove one or rename it before continuing.",
        );
      }
      draft.uploaded.set(file, result.name);
      setUploaded(new Map(draft.uploaded));
    }
    if (!draft.copied && copy?.prior.files.length && !copy.prior.error) {
      await carryDocuments(draft.id, copy.run);
      for (const name of ignoredCopies) {
        if (![...draft.uploaded.values()].includes(name)) await removeDocument(draft.id, name);
      }
      draft.copied = true;
    }
    const result = await getReading(draft.id);
    setReading(result);
    return { draft, result };
  }

  async function discardDocument(name: string, file?: File) {
    await withDraft("documents", async () => {
      const draft = draftRef.current;
      const stored = file ? draft?.uploaded.get(file) : name;
      if (draft && stored) {
        await removeDocument(draft.id, stored);
        if (file) {
          draft.uploaded.delete(file);
          setUploaded(new Map(draft.uploaded));
        }
        if (copy) setIgnoredCopies((previous) => [...new Set([...previous, stored])]);
      }
      if (file) setFiles((previous) => previous.filter((item) => item !== file));
      setAttachments((previous) =>
        Object.fromEntries(
          Object.entries(previous).filter(([, chosen]) => chosen !== (stored || name)),
        ),
      );
      if (draft && stored) setReading(await getReading(draft.id));
    });
  }

  function addFiles(selected: Iterable<File> | null) {
    if (active.current) return;
    const added = Array.from(selected ?? []).filter(
      (file) =>
        !fileName(file)
          .split("/")
          .some((part) => part.startsWith(".")),
    );
    setFiles((previous) => [...previous, ...added]);
    if (added.length > 0) setReading(undefined);
    setError("");
  }

  async function copyLatest() {
    if (!/^[a-z0-9][a-z0-9-]{0,39}$/.test(issuerId)) {
      setError("Enter an issuer ID before looking up its latest run.");
      return;
    }
    await withDraft("copy", async () => {
      const latest = await getLatestIssuerRun(issuerId);
      if (!latest.latest_run) {
        setPriorNote("No earlier run was found for this issuer.");
        return;
      }
      const prior = await getPriorInputs(latest.latest_run);
      setCopy({ run: latest.latest_run, prior });
      setPriorNote(prior.error || "");
      setContext(startingContext(prior.context ? template : context, prior));
      setPurposeTouched(Boolean(prior.context));
      setCustomSlug(prior.issuer_id);
      setLevel(Object.hasOwn(LEVELS, prior.level) ? prior.level : "basic");
      setTurns(String(prior.max_turns || 32));
      setModel("gpt");
      setEffort("balanced");
      setModules(carriedModules(prior));
      setEdits({});
      setAnalystNote("");
      setAttachments({});
      setLegal("none");
      setIgnoredCopies([]);
      setNewestOverride(undefined);
      setReading(undefined);
      draftRef.current = null;
      setUploaded(new Map());
    });
  }

  function makeAnswers(result: Reading, details: Record<string, unknown>): Answers {
    if (run.cutoff && run.cutoff > run.as_of)
      throw new Error("Research cutoff must be on or before the as-of date.");
    const available = new Set(result.documents.map(storedName));
    const chosen = (key: Attachment) => available.has(attachments[key] ?? "");
    if (legal !== "none" && !chosen("agreement"))
      throw new Error("Choose the uploaded file that is the agreement.");
    const advanced = level === "advanced";
    return {
      context: {
        ...context,
        ...details,
        run: { ...run, cutoff: run.cutoff || run.as_of },
        identity: { ...identity, issuer_name: identity.issuer_name.trim(), issuer_id: issuerId },
        ...(context.attachments
          ? {
              attachments: {
                legal_documents: legal,
                management_bridge: chosen("management_bridge"),
                portfolio_workbook: chosen("portfolio_workbook"),
                prior_case: chosen("prior_case"),
              },
            }
          : {}),
      },
      modules: advanced ? modules : [],
      max_turns: advanced ? Number(turns) : 32,
      level,
      model: advanced ? model : "gpt",
      effort: advanced ? effort : "balanced",
      submitted_by: submittedBy.trim(),
    };
  }

  async function makeReview() {
    if (!canRead || active.current) return;
    await withDraft("review", async () => {
      if (!identity.issuer_name.trim() || !/^[a-z0-9][a-z0-9-]{0,39}$/.test(issuerId)) {
        throw new Error(
          "Enter an issuer name and an issuer ID using letters a–z, digits or hyphens.",
        );
      }
      const details = readDetails(edits);
      const note = analystNote
        .split(/\r\n?|\n/)
        .map((line) => line.trim())
        .filter(Boolean)
        .join(" ");
      if (note) {
        const questions = details.research_questions ?? context.research_questions;
        const listed: unknown[] = Array.isArray(questions) ? questions : [];
        details.research_questions = [...listed, { text: note, focus_module: "" }];
      }
      if (run.run_type === "primary") {
        const deals = details.deal_terms ?? context.deal_terms;
        if (!Array.isArray(deals) || deals.length === 0)
          throw new Error("Add at least one facility in Facilities and deal terms.");
      }
      if (
        level === "advanced" &&
        (!/^\d+$/.test(turns) || Number(turns) < 1 || Number(turns) > 64)
      ) {
        throw new Error("Turns per module must be a whole number from 1 to 64.");
      }
      const { draft, result } = await refreshDocuments();
      if (!result.documents.length)
        throw new Error("The service could not read any of the selected documents.");
      const answers = makeAnswers(result, details);
      const summary = await getSummary(draft.id, answers);
      if (!summary.digest) throw new Error("The service did not issue an approval for this run.");
      setAccepted(new Set());
      setApproved(false);
      const newestDate = newestOverride ?? newestPeriod(result);
      const dateLimitation =
        newestDate && run.as_of < newestDate
          ? [
              {
                id: "form:newest-document-date",
                scope: "run",
                outcome: "limited",
                reason: `The as-of date (${run.as_of}) is before your newest document (${newestDate}). Modules may set this document aside.`,
                fix: "Use an as-of date on or after the newest document date.",
              },
            ]
          : [];
      setReview({
        id: draft.id,
        answers,
        summary: { ...summary, items: [...summary.items, ...dateLimitation] },
      });
    });
  }

  function goTo(next: FormStep) {
    setStep(next);
    setError("");
  }

  async function advance(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (active.current) return;
    switch (step) {
      case "documents":
        if (!canRead) return;
        await withDraft("documents", async () => {
          const { result } = await refreshDocuments();
          if (!result.documents.length)
            throw new Error("The service could not read any of the selected documents.");
          goTo("purpose");
        });
        break;
      case "purpose":
        goTo("context");
        break;
      case "context":
        await makeReview();
        break;
    }
  }

  async function submitReviewed() {
    if (!review || !approved || !checksComplete || (mode === "live" && !cap)) return;
    await withDraft("submit", async () => {
      try {
        const { run: id } = await submit(review.id, review.answers, review.summary.digest);
        navigate(`/run/${encodeURIComponent(id)}`);
      } catch (failure) {
        if (failure instanceof RequestError && [400, 404].includes(failure.status)) {
          if (failure.status === 404) {
            draftRef.current = null;
            setUploaded(new Map());
            setReading(undefined);
          }
          setReview(undefined);
          setAccepted(new Set());
          setApproved(false);
          setSubmitUncertain(false);
          setError(`${errorText(failure)} Review the run again before submitting.`);
        } else {
          setSubmitUncertain(true);
          setError(`${errorText(failure)} Retrying Submit run is safe.`);
        }
      }
    });
  }

  function detailText(key: ComplexField) {
    return (
      edits[key] ??
      JSON.stringify(
        context[key] ??
          (key === "module_options"
            ? { cp3_mode: "", cp6_deep_debate: false }
            : isRowField(key)
              ? []
              : {}),
        null,
        2,
      )
    );
  }

  function addContextRow(key: keyof typeof ROW_EXAMPLES) {
    try {
      const current = readDetails({ [key]: detailText(key) })[key];
      if (!Array.isArray(current)) return;
      const rows: unknown[] = current;
      setEdits((previous) => ({
        ...previous,
        [key]: JSON.stringify([...rows, ROW_EXAMPLES[key]], null, 2),
      }));
      setError("");
    } catch (failure) {
      setError(errorText(failure));
    }
  }

  const shownDocs = reading?.documents ?? [];
  const inspected = new Map(shownDocs.map((doc) => [storedName(doc), documentDescription(doc)]));
  const ignored = new Map(
    (reading?.ignored ?? []).map((item) =>
      typeof item === "string" ? [item, "Will not be read"] : [item.source, item.reason],
    ),
  );
  const localNames = new Set(uploaded.values());
  const documentRows = [
    ...files.map((file) => ({ name: fileName(file), stored: uploaded.get(file), file })),
    ...[...new Set([...inspected.keys(), ...ignored.keys()])]
      .filter((name) => !localNames.has(name))
      .map((name) => ({ name, stored: name, file: undefined })),
  ];
  const fileChoices: Record<string, string> = Object.fromEntries([
    ["", "None"] as const,
    ...Array.from(inspected.keys(), (name) => [name, name] as const),
  ]);

  const { title, previous, next } = FORM_STEPS[step];
  const capText = cap === null ? null : `USD ${cap.toFixed(2)}`;
  const synthetic = mode === "synthetic";
  const readinessItems = [
    {
      met: shownDocs.length > 0,
      whenMet: "Documents inspected",
      next: "Add and inspect documents",
    },
    {
      met: step !== "documents" || review !== undefined,
      whenMet: "Purpose selected",
      next: "Choose a pathway and purpose",
    },
    {
      met: review !== undefined && checksComplete === true,
      whenMet: "Run summary checked",
      next: "Review the run summary",
    },
    {
      met: review !== undefined && approved,
      whenMet: "Summary approved",
      next: "Approve the reviewed run",
    },
  ];
  const met = readinessItems.filter((item) => item.met).map((item) => item.whenMet);
  const notMet = readinessItems.filter((item) => !item.met).map((item) => item.next);

  return (
    <div className="mt-6 grid min-w-0 items-start gap-6 min-[1041px]:grid-cols-[minmax(0,1fr)_320px]">
      <div className={`min-w-0 ${card}`}>
        <Stepper
          step={review ? "start" : step}
          steps={STEPPER_STEPS}
          onSelect={
            busy === undefined && !submitUncertain
              ? (key) => {
                  setReview(undefined);
                  goTo(key as FormStep);
                }
              : undefined
          }
        />
        <p className="text-sm text-text-secondary sm:hidden">
          {review
            ? `Step ${String(STEP_TOTAL)} of ${String(STEP_TOTAL)} · Review and start`
            : `Step ${String(FORM_STEP_KEYS.indexOf(step) + 1)} of ${String(STEP_TOTAL)} · ${title}`}
        </p>
        {error && <ErrorNotice>{error}</ErrorNotice>}
        {review ? (
          <div className="grid gap-5">
            <div className="grid gap-1">
              <h2 ref={focusStep} tabIndex={-1} className={`${heading} focus:outline-none`}>
                Review and start
              </h2>
              <p className="text-sm text-text-secondary">
                Review the final run details and confirm to start.
              </p>
            </div>
            <ReviewSheet
              review={review}
              accepted={accepted}
              disabled={busy !== undefined || submitUncertain}
              onEdit={(target) => {
                setReview(undefined);
                goTo(target);
              }}
              onAccept={(ids, checked) => {
                setAccepted((previous) => {
                  const next = new Set(previous);
                  for (const id of ids) {
                    if (checked) next.add(id);
                    else next.delete(id);
                  }
                  return next;
                });
                setApproved(false);
              }}
            />
            <label className="flex items-start gap-2 text-sm font-semibold">
              <input
                type="checkbox"
                checked={approved}
                disabled={!checksComplete || busy !== undefined || submitUncertain}
                onChange={(event) => {
                  setApproved(event.target.checked);
                }}
              />
              Approve: I have read this summary and want this run started
            </label>
            <div className="grid gap-1 border-t border-border-hairline pt-4">
              <h3 className="text-md font-semibold text-text-primary">
                {synthetic ? "Submit starts a synthetic test" : "Submit starts a paid run"}
              </h3>
              <p id="run-submit-cost" className="text-sm text-text-secondary">
                {synthetic ? (
                  "The synthetic test uses the supplied documents and makes no paid provider calls."
                ) : capText === null ? (
                  "The spending cap is unavailable. Reopen the form to load it before submitting."
                ) : (
                  <>
                    It can spend up to <strong className="tabular-nums">{capText}</strong>. You
                    confirm once more before anything is spent.
                  </>
                )}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm text-text-tertiary">
                Step {STEP_TOTAL} of {STEP_TOTAL}
              </span>
              <SubmitConfirmation
                label={
                  busy === "submit"
                    ? "Submitting…"
                    : synthetic
                      ? "Submit run"
                      : `Submit, spend up to ${capText ?? "the cap"}`
                }
                confirm={
                  synthetic
                    ? {
                        title: "Start a synthetic test?",
                        text: "This test runs the workflow with the supplied documents and spends USD 0.00.",
                        action: "Start synthetic run",
                      }
                    : {
                        title: "Start a paid run?",
                        text: `This run can spend up to ${capText ?? "the configured cap"} and stops when it reaches that cap. Once it starts, what it has spent cannot be taken back.`,
                        action: `Start run, up to ${capText ?? "the cap"}`,
                      }
                }
                isDisabled={
                  !checksComplete || !approved || busy !== undefined || (!synthetic && !cap)
                }
                describedBy="run-submit-cost"
                onConfirm={() => {
                  void submitReviewed();
                }}
              />
            </div>
          </div>
        ) : (
          <form
            onSubmit={(event) => {
              void advance(event);
            }}
            className="grid min-w-0 grid-cols-1 gap-5"
          >
            <div className="grid gap-1">
              <h2
                key={step}
                ref={focusStep}
                tabIndex={-1}
                className={`${heading} focus:outline-none`}
              >
                {title}
              </h2>
              <p className="text-sm text-text-secondary">{STEP_GUIDANCE[step]}</p>
            </div>
            <fieldset
              disabled={busy !== undefined}
              className="grid min-w-0 grid-cols-1 items-start gap-4 sm:grid-cols-2"
            >
              {step === "documents" && (
                <>
                  <FileUpload.Root className="sm:col-span-2">
                    <FileUpload.DropZone
                      inputLabel="Documents"
                      chooseFiles
                      hint="Add filings and other source documents. Up to 50 MB per file."
                      isDisabled={busy !== undefined}
                      onDropFiles={addFiles}
                    />
                    <input
                      ref={folderInput}
                      className="sr-only"
                      aria-label="Document folder"
                      tabIndex={-1}
                      type="file"
                      multiple
                      {...{ webkitdirectory: "" }}
                      onChange={(event) => {
                        addFiles(event.target.files);
                        event.target.value = "";
                      }}
                    />
                    <div className="flex flex-wrap items-center gap-3">
                      <Button
                        color="secondary"
                        iconLeading={Folder}
                        onPress={() => folderInput.current?.click()}
                      >
                        Choose a folder
                      </Button>
                      <Button
                        color="secondary"
                        isDisabled={!canRead || busy !== undefined}
                        onPress={() => {
                          void withDraft("documents", async () => {
                            await refreshDocuments();
                          });
                        }}
                      >
                        {busy === "documents" ? "Reading documents…" : "Inspect documents"}
                      </Button>
                    </div>
                    {documentRows.length > 0 ? (
                      <FileUpload.List aria-label="Documents added">
                        {documentRows.map(({ name, stored, file }, index) => {
                          const reason = stored ? ignored.get(stored) : undefined;
                          const description = stored ? inspected.get(stored) : undefined;
                          return (
                            <li
                              key={`${name}-${String(index)}`}
                              className="flex min-w-0 items-start gap-3 rounded-xl p-3 text-sm ring-1 ring-secondary ring-inset"
                            >
                              <File05
                                aria-hidden="true"
                                className="mt-1 size-5 shrink-0 text-text-tertiary"
                              />
                              <div className="min-w-0 flex-1">
                                <p className="font-medium wrap-anywhere">{name}</p>
                                <Badge
                                  size="sm"
                                  color={reason ? "error" : description ? "success" : "gray"}
                                >
                                  {reason ? "Ignored" : description ? "Inspected" : "Selected"}
                                </Badge>
                                {(reason || description) && (
                                  <p className="mt-1 wrap-anywhere text-text-secondary">
                                    {reason || description}
                                  </p>
                                )}
                              </div>
                              <Button
                                size="sm"
                                color="secondary"
                                aria-label={`Remove ${name}`}
                                isDisabled={busy !== undefined}
                                onPress={() => {
                                  void discardDocument(name, file);
                                }}
                              >
                                Remove
                              </Button>
                            </li>
                          );
                        })}
                      </FileUpload.List>
                    ) : (
                      <p className="text-sm text-text-secondary">No documents yet.</p>
                    )}
                  </FileUpload.Root>
                  <div className="grid gap-2 sm:col-span-2">
                    <h3 className="font-semibold">Issuer and case date</h3>
                    {copy && (
                      <p className="text-sm text-text-secondary">
                        Starting from run {copy.run}. Review the copied answers, add dates, and
                        inspect its available documents.
                      </p>
                    )}
                    {priorNote && (
                      <p role="status" className="text-sm text-text-secondary">
                        {priorNote}
                      </p>
                    )}
                  </div>
                  <label className={label}>
                    Issuer name
                    <input
                      className={field}
                      required
                      value={identity.issuer_name}
                      onChange={(event) => {
                        changeIdentity("issuer_name", event.target.value);
                      }}
                    />
                  </label>
                  <label className={label}>
                    Issuer ID
                    <input
                      className={field}
                      required
                      pattern="[a-z0-9][a-z0-9\\-]{0,39}"
                      maxLength={40}
                      value={issuerId}
                      readOnly={!!copy}
                      onChange={(event) => {
                        setCustomSlug(event.target.value);
                      }}
                    />
                  </label>
                  <label className={label}>
                    As-of date
                    <input
                      className={field}
                      type="date"
                      required
                      value={run.as_of}
                      onChange={(event) => {
                        changeRun("as_of", event.target.value);
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
                      value={run.reporting_currency}
                      onChange={(event) => {
                        changeRun("reporting_currency", event.target.value.toUpperCase());
                      }}
                    />
                  </label>
                  <SelectField
                    title="Issue classification"
                    value={identity.issue_classification ?? ""}
                    choices={{
                      "": "Choose classification",
                      investment_grade: "Investment grade",
                      high_yield: "High yield",
                    }}
                    onChange={(value) => {
                      changeIdentity("issue_classification", value);
                    }}
                  />
                  <label className={label}>
                    Your name
                    <input
                      className={field}
                      maxLength={80}
                      value={submittedBy}
                      onChange={(event) => {
                        setSubmittedBy(event.target.value);
                      }}
                    />
                  </label>
                  {copy ? (
                    <Button
                      color="secondary"
                      onPress={() => {
                        setCopy(undefined);
                        setContext(startingContext(template));
                        setPurposeTouched(false);
                        setCustomSlug(undefined);
                        setReading(undefined);
                        setPriorNote("");
                        setEdits({});
                        setAnalystNote("");
                        setAttachments({});
                        setLegal("none");
                        setModules([]);
                        setLevel("basic");
                        setModel("gpt");
                        setEffort("balanced");
                        setTurns("32");
                        setIgnoredCopies([]);
                        setNewestOverride(undefined);
                        draftRef.current = null;
                        setUploaded(new Map());
                      }}
                    >
                      This is a different issuer
                    </Button>
                  ) : (
                    <Button
                      color="secondary"
                      onPress={() => {
                        void copyLatest();
                      }}
                    >
                      Carry over from latest run
                    </Button>
                  )}
                </>
              )}
              {step === "purpose" && (
                <>
                  <div className="sm:col-span-2">
                    <PurposeCards
                      label="Pathway"
                      value={run.pathway}
                      purposes={PATHWAY_CARDS}
                      onChange={(pathway) => {
                        setContext((previous) => ({
                          ...previous,
                          run: {
                            ...previous.run,
                            pathway,
                            run_type:
                              pathway === "earnings_update"
                                ? "earnings"
                                : !purposeTouched || previous.run.run_type === "earnings"
                                  ? pathway === "relative_value"
                                    ? "secondary"
                                    : "research"
                                  : previous.run.run_type,
                          },
                        }));
                        setModules([]);
                      }}
                    />
                  </div>
                  <SelectField
                    title="Run purpose"
                    value={run.run_type ?? "research"}
                    choices={
                      earnings
                        ? { earnings: PURPOSES.earnings }
                        : {
                            research: PURPOSES.research,
                            primary: PURPOSES.primary,
                            secondary: PURPOSES.secondary,
                          }
                    }
                    onChange={(value) => {
                      setPurposeTouched(true);
                      changeRun("run_type", value);
                    }}
                  />
                  <SelectField
                    title="Case kind"
                    value={run.case_kind}
                    choices={{
                      public: "Public filer",
                      private: "Private",
                      synthetic: "Synthetic test case",
                    }}
                    onChange={(value) => {
                      changeRun("case_kind", value);
                    }}
                  />
                  <SelectField
                    title="Run form level"
                    value={level}
                    choices={LEVELS}
                    onChange={setLevel}
                  />
                </>
              )}
              {step === "context" && (
                <>
                  <div className="grid gap-1 sm:col-span-2">
                    <label className={label}>
                      Anything the analysis should know
                      <textarea
                        aria-describedby="run-analyst-questions"
                        className={field}
                        rows={3}
                        placeholder="For example, the committee wants a view on the 2028 maturities."
                        value={analystNote}
                        onChange={(event) => {
                          setAnalystNote(event.target.value);
                        }}
                      />
                    </label>
                    <p id="run-analyst-questions" className="text-sm text-text-tertiary">
                      Your note is included in the run’s research questions.
                    </p>
                  </div>
                  <label className={label}>
                    Date of your newest file
                    <input
                      className={field}
                      type="date"
                      value={newest}
                      onChange={(event) => {
                        setNewestOverride(event.target.value || undefined);
                      }}
                    />
                  </label>
                  <label className={label}>
                    Research cutoff
                    <input
                      className={field}
                      type="date"
                      value={run.cutoff || run.as_of}
                      max={run.as_of || undefined}
                      onChange={(event) => {
                        changeRun("cutoff", event.target.value);
                      }}
                    />
                  </label>
                  <label className={label}>
                    Current period
                    <input
                      className={field}
                      required={earnings}
                      placeholder="q3-2026"
                      value={run.current_period ?? ""}
                      onChange={(event) => {
                        changeRun("current_period", event.target.value.trim().toLowerCase());
                      }}
                    />
                  </label>
                  <label className={label}>
                    Prior period
                    <input
                      className={field}
                      required={earnings}
                      placeholder="q2-2026"
                      value={run.prior_period ?? ""}
                      onChange={(event) => {
                        changeRun("prior_period", event.target.value.trim().toLowerCase());
                      }}
                    />
                  </label>
                  <SelectField
                    title="Legal documents"
                    value={legal}
                    choices={{
                      none: "No agreement",
                      executed: "Executed agreement",
                      draft: "Draft agreement",
                    }}
                    onChange={setLegal}
                  />
                  {legal !== "none" && (
                    <SelectField
                      title="The agreement"
                      value={attachments.agreement ?? ""}
                      choices={fileChoices}
                      onChange={(value) => {
                        setAttachments((previous) => ({ ...previous, agreement: value }));
                      }}
                    />
                  )}
                  {(earnings || level === "advanced") && (
                    <SelectField
                      title={ATTACHMENTS.management_bridge}
                      value={attachments.management_bridge ?? ""}
                      choices={fileChoices}
                      onChange={(value) => {
                        setAttachments((previous) => ({ ...previous, management_bridge: value }));
                      }}
                    />
                  )}
                  {(["portfolio_workbook", "prior_case"] as const)
                    .filter(
                      (key) =>
                        level === "advanced" ||
                        run.pathway === "portfolio_decision" ||
                        (key === "portfolio_workbook" && run.pathway === "credit_snapshot"),
                    )
                    .map((key) => (
                      <SelectField
                        key={key}
                        title={ATTACHMENTS[key]}
                        value={attachments[key] ?? ""}
                        choices={fileChoices}
                        onChange={(value) => {
                          setAttachments((previous) => ({ ...previous, [key]: value }));
                        }}
                      />
                    ))}
                  <details className="rounded-lg border border-border-hairline p-3 sm:col-span-2">
                    <summary className="cursor-pointer font-semibold">Issuer details</summary>
                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                      {(
                        [
                          ["borrower_name", "Borrower (legal entity)"],
                          ["parent_name", "Parent"],
                          ["sector", "Sector"],
                          ["country", "Country"],
                          ["sponsor", "Sponsor"],
                        ] as const
                      ).map(([key, title]) => (
                        <label key={key} className={label}>
                          {title}
                          <input
                            className={field}
                            value={identity[key] ?? ""}
                            onChange={(event) => {
                              changeIdentity(key, event.target.value);
                            }}
                          />
                        </label>
                      ))}
                      {(
                        [
                          ["aliases", "Other names in the filings"],
                          ["guarantors", "Guarantors"],
                        ] as const
                      ).map(([key, title]) => (
                        <label key={key} className={label}>
                          {title}
                          <textarea
                            className={field}
                            placeholder="One per line"
                            defaultValue={(identity[key] ?? []).join("\n")}
                            key={copy?.run ?? "new"}
                            onChange={(event) => {
                              changeIdentity(
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
                          checked={identity.listed_equity ?? false}
                          onChange={(event) => {
                            const listed_equity = event.target.checked;
                            setContext((previous) => ({
                              ...previous,
                              identity: {
                                ...previous.identity,
                                listed_equity,
                                ticker: listed_equity ? previous.identity.ticker : "",
                              },
                            }));
                          }}
                        />{" "}
                        Listed equity
                      </label>
                      {identity.listed_equity && (
                        <label className={label}>
                          Ticker
                          <input
                            className={field}
                            value={identity.ticker ?? ""}
                            onChange={(event) => {
                              changeIdentity("ticker", event.target.value);
                            }}
                          />
                        </label>
                      )}
                    </div>
                  </details>
                  <div className="grid gap-2 sm:col-span-2">
                    <h3 className="font-semibold">Context details</h3>
                    <p className="text-sm text-text-secondary">
                      Enter structured values as context/1 JSON. The service validates the content
                      during review.
                    </p>
                    {(Object.entries(COMPLEX_FIELDS) as [ComplexField, string][]).map(
                      ([key, title]) => (
                        <details
                          key={key}
                          open={
                            key === "deal_terms" && run.run_type === "primary" ? true : undefined
                          }
                          className="rounded-lg border border-border-hairline p-3"
                        >
                          <summary className="cursor-pointer text-sm font-semibold">
                            {title}
                          </summary>
                          <textarea
                            aria-label={title}
                            className={`mt-2 w-full font-mono ${field}`}
                            rows={key === "valuation" ? 12 : 5}
                            value={detailText(key)}
                            onChange={(event) => {
                              setEdits((previous) => ({ ...previous, [key]: event.target.value }));
                            }}
                          />
                          {isRowField(key) && (
                            <Button
                              size="sm"
                              color="secondary"
                              className="mt-2"
                              onPress={() => {
                                addContextRow(key);
                              }}
                            >
                              {ROW_LABELS[key]}
                            </Button>
                          )}
                        </details>
                      ),
                    )}
                  </div>
                  {level === "advanced" && (
                    <>
                      <SelectField
                        title="Model"
                        value={model}
                        choices={{ gpt: "GPT Sol", claude: "Claude Opus" }}
                        onChange={setModel}
                      />
                      <SelectField
                        title="Reasoning effort"
                        value={effort}
                        choices={{ fast: "Fast", balanced: "Balanced", high: "High" }}
                        onChange={setEffort}
                      />
                      <label className={label}>
                        Turns per module
                        <input
                          className={field}
                          type="number"
                          required
                          min={1}
                          max={64}
                          step={1}
                          value={turns}
                          onChange={(event) => {
                            setTurns(event.target.value);
                          }}
                        />
                      </label>
                      <fieldset className="min-w-0 rounded-lg border border-border-hairline p-3 sm:col-span-2">
                        <legend className="px-1 text-sm font-semibold">Requested modules</legend>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {requested.map((code) => (
                            <label key={code} className="flex items-center gap-2 text-sm">
                              <input
                                type="checkbox"
                                checked={!modules.length || modules.includes(code)}
                                disabled={modules.length === 1 && modules.includes(code)}
                                onChange={(event) => {
                                  const selected = modules.length ? modules : requested;
                                  const next = event.target.checked
                                    ? [...selected, code]
                                    : selected.filter((item) => item !== code);
                                  setModules(
                                    next.length === requested.length
                                      ? []
                                      : requested.filter((item) => next.includes(item)),
                                  );
                                }}
                              />{" "}
                              {moduleName(code)}
                            </label>
                          ))}
                        </div>
                      </fieldset>
                    </>
                  )}
                </>
              )}
            </fieldset>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Button
                color="secondary"
                isDisabled={previous === null || busy !== undefined}
                onPress={() => {
                  if (previous !== null) goTo(previous);
                }}
              >
                Previous
              </Button>
              <span className="text-sm text-text-tertiary">
                Step {FORM_STEP_KEYS.indexOf(step) + 1} of {STEP_TOTAL}
              </span>
              <Button
                type="submit"
                isDisabled={busy !== undefined || (step === "documents" && !canRead)}
              >
                {busy === "review" ? "Preparing review…" : next}
              </Button>
            </div>
          </form>
        )}
      </div>
      <Readiness
        capTitle={synthetic ? "Configured cap for paid runs" : undefined}
        data={{
          line: "Check the inputs and approve the run before it starts.",
          notMet: { count: String(notMet.length), items: notMet },
          met: { count: String(met.length), items: met },
          cap: cap && capText ? { value: 0, max: cap, label: `USD 0.00 of ${capText}` } : null,
        }}
      />
    </div>
  );
}

function newestPeriod(reading?: Reading) {
  return (
    (reading?.documents ?? [])
      .flatMap(({ period_end }) => (period_end ? [period_end] : []))
      .sort()
      .at(-1) ?? ""
  );
}

function today() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${String(now.getFullYear())}-${month}-${day}`;
}

function startingContext(template: Context, prior?: PriorInputs): Context {
  const source = prior?.context ?? template;
  const pathway = Object.hasOwn(PATHWAYS, source.run.pathway)
    ? source.run.pathway
    : "credit_snapshot";
  return {
    ...source,
    run: {
      ...source.run,
      as_of: today(),
      pathway,
      ...(pathway === "earnings_update"
        ? { run_type: "earnings" }
        : source.run.run_type === "earnings"
          ? { run_type: "research" }
          : {}),
    },
    identity: {
      ...source.identity,
      issuer_name: prior?.issuer_name ?? source.identity.issuer_name,
      issuer_id: prior?.issuer_id ?? source.identity.issuer_id,
    },
  };
}

function carriedModules(prior?: PriorInputs) {
  const available = pathwayModules(prior?.context?.run.pathway ?? "");
  return prior?.modules.every((code) => available.includes(code)) ? prior.modules : [];
}
