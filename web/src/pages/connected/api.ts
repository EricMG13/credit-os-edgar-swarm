export type Mode = "synthetic" | "live";

type Context = {
  run: {
    as_of: string;
    pathway: string;
    case_kind: string;
    reporting_currency: string;
    current_period?: string;
    prior_period?: string;
  };
  identity: { issuer_name: string; issuer_id: string };
};

type DocumentRecord = { source: string; kind: string };
type Ignored = { source: string; reason: string } | string;
type Reading = { error: string; documents: DocumentRecord[]; ignored: Ignored[] };
export type Answers = ReturnType<typeof answersFor>;
export type Summary = Reading & {
  digest: string;
  modules: string[];
  items: { id: string; scope: string; outcome: string; reason: string; fix?: string }[];
  omitted: string[];
  changes: string;
  model: string;
  effort: string;
};

export type RunStatus =
  "queued" | "running" | "finished" | "failed" | "capped" | "rejected" | "interrupted";
export type Run = {
  id: string;
  status: RunStatus;
  reason: string;
  issuer_name: string;
  pathway: string;
  modules: [string, "done" | "running" | "waiting"][];
  stalled?: boolean;
};

export type ReportEntry = { id: string; issuer: string; asOf: string; pathway: string };
export type Report = ReportEntry & {
  modules: {
    id: string;
    title: string;
    download: string | null;
    sections: {
      title: string;
      paragraphs: string[];
      tables: { headers: string[]; rows: string[][] }[];
    }[];
  }[];
};

export class RequestError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, { cache: "no-store", ...init });
  const body: unknown = await response.json().catch(() => null);
  if (
    body !== null &&
    typeof body === "object" &&
    "error" in body &&
    typeof body.error === "string" &&
    body.error
  ) {
    throw new RequestError(body.error, response.status);
  }
  if (!response.ok || body === null) {
    throw new RequestError(
      `The service could not complete this request (${String(response.status)}).`,
      response.status,
    );
  }
  return body as T;
}

function postJson(payload: unknown): RequestInit {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
}

const submission = (id: string) => `/api/submissions/${encodeURIComponent(id)}`;

export const getContext = (signal: AbortSignal) =>
  request<Context>("/connected/context", { signal });
export const createSubmission = () =>
  request<{ id: string }>("/api/submissions", { method: "POST" });
export const upload = (id: string, file: File) =>
  request<{ name: string }>(`${submission(id)}/files?name=${encodeURIComponent(file.name)}`, {
    method: "POST",
    body: file,
  });
export const getReading = (id: string) => request<Reading>(`${submission(id)}/reading`);
export const getSummary = (id: string, answers: Answers) =>
  request<Summary>(`${submission(id)}/summary`, postJson(answers));
export const submit = (id: string, answers: Answers, digest: string) =>
  request<{ run: string }>(`${submission(id)}/submit`, postJson({ answers, digest }));
export const getRun = (id: string, signal: AbortSignal) =>
  request<Run>(`/api/runs/${encodeURIComponent(id)}`, { signal });
export const getReports = (signal: AbortSignal) =>
  request<{ reports: ReportEntry[] }>("/connected/reports", { signal });
export const getReport = (id: string, signal: AbortSignal) =>
  request<Report>(`/connected/report/${encodeURIComponent(id)}`, { signal });

export function issuerSlug(name: string) {
  return name
    .normalize("NFKD")
    .toLowerCase()
    .replace(/\p{Mark}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40)
    .replace(/-+$/, "");
}

export function answersFor(
  template: Context,
  issuer: string,
  issuerId: string,
  asOf: string,
  currency: string,
) {
  return {
    context: {
      ...template,
      run: { ...template.run, as_of: asOf, reporting_currency: currency },
      identity: { ...template.identity, issuer_name: issuer.trim(), issuer_id: issuerId },
    },
    modules: [],
    max_turns: 32,
    level: "basic",
    model: "gpt",
    effort: "balanced",
    submitted_by: "analyst",
  };
}

const MODULE_NAMES: Readonly<Record<string, string>> = {
  "CP-0": "Source readiness",
  "CP-1": "Financial foundation",
  "CP-1A": "Business & governance",
  "CP-DR": "Research questions",
  "CP-4": "Legal & covenants",
  "CP-2": "Fundamental credit",
  "CP-2A": "Downside",
  "CP-2E": "Rates, FX & hedging",
  "CP-2G": "Forward credit model",
  "CP-3": "Security selection",
  "CP-5": "Evidence validation",
  "CP-6": "Committee decision",
  "CP-8": "Changes since the last run",
  "CP-MODEL": "Cash flow model",
};

export function moduleName(id: string) {
  const name = Object.hasOwn(MODULE_NAMES, id) ? MODULE_NAMES[id] : undefined;
  return name ? `${name} (${id})` : id;
}

export function pathwayName(pathway: string) {
  return pathway === "credit_snapshot" ? "Full credit assessment" : pathway.replaceAll("_", " ");
}

export function isPendingReport(error: unknown) {
  return error instanceof RequestError && error.status === 404;
}
