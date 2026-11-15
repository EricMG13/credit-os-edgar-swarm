export type Mode = "synthetic" | "live";

export type Context = {
  [key: string]: unknown;
  run: {
    as_of: string;
    run_type?: string;
    cutoff?: string;
    pathway: string;
    case_kind: string;
    reporting_currency: string;
    current_period?: string;
    prior_period?: string;
  };
  identity: {
    issuer_name: string;
    issuer_id: string;
    issue_classification?: string;
    borrower_name?: string;
    parent_name?: string;
    guarantors?: string[];
    aliases?: string[];
    listed_equity?: boolean;
    ticker?: string;
    sector?: string;
    country?: string;
    sponsor?: string;
  };
  attachments?: {
    legal_documents: string;
    management_bridge: boolean;
    portfolio_workbook: boolean;
    prior_case: boolean;
  };
};

export type DocumentRecord = {
  source: string;
  kind: string;
  period_end?: string;
  executed?: boolean;
  signal?: string;
};
type Ignored = { source: string; reason: string } | string;
export type Reading = { error: string; documents: DocumentRecord[]; ignored: Ignored[] };
export type Answers = {
  context: Context;
  modules: string[];
  max_turns: number;
  level: string;
  model: string;
  effort: string;
  submitted_by: string;
};
export type PriorInputs = {
  issuer_id: string;
  issuer_name: string;
  context: Context | null;
  files: { name: string; size: number }[];
  level: string;
  modules: string[];
  max_turns: number;
  error?: string;
};
export type Summary = Reading & {
  digest: string;
  modules: string[];
  items: { id: string; scope: string; outcome: string; reason: string; fix?: string }[];
  omitted: string[];
  changes: string;
  lookup?: string[];
  prior?: { id: string; as_of: string; pathway: string } | null;
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
  started_at?: string;
  ended_at?: string;
  submitted_by?: string;
};

export type ReportEntry = { id: string; issuer: string; asOf: string; pathway: string };
export class RequestError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
  }
}

async function request<T>(path: string, init?: RequestInit, allowWarning = false): Promise<T> {
  const response = await fetch(path, { cache: "no-store", ...init });
  const body: unknown = await response.json().catch(() => null);
  if (
    body !== null &&
    typeof body === "object" &&
    "error" in body &&
    typeof body.error === "string" &&
    body.error &&
    (!allowWarning || !response.ok)
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

export async function getContext(signal: AbortSignal) {
  const { submission_cap_usd: amount, ...template } = await request<
    Context & { submission_cap_usd?: string }
  >("/connected/context", { signal });
  const cap = typeof amount === "string" && /^\d+(?:\.\d+)?$/.test(amount) ? Number(amount) : 0;
  return { template, cap: Number.isFinite(cap) && cap > 0 ? cap : null };
}
export const createSubmission = () =>
  request<{ id: string }>("/api/submissions", { method: "POST" });
const filePath = (id: string, name: string) =>
  `${submission(id)}/files?name=${encodeURIComponent(name)}`;
export const upload = (id: string, file: File, name = file.name) =>
  request<{ name: string }>(filePath(id, name), {
    method: "POST",
    body: file,
  });
export const removeDocument = (id: string, name: string) =>
  request<{ name: string }>(filePath(id, name), { method: "DELETE" });
export const getPriorInputs = (run: string) =>
  request<PriorInputs>(`/api/runs/${encodeURIComponent(run)}/inputs`, undefined, true);
export const getLatestIssuerRun = (issuer: string) =>
  request<{ latest_run: string; runs: number; latest_as_of: string }>(
    `/api/issuers/${encodeURIComponent(issuer)}`,
  );
export const carryDocuments = (id: string, run: string) =>
  request<{ carried: string[]; kept: string[] }>(`${submission(id)}/carry`, postJson({ run }));
export const getReading = (id: string) => request<Reading>(`${submission(id)}/reading`);
export const getSummary = (id: string, answers: Answers) =>
  request<Summary>(`${submission(id)}/summary`, postJson(answers));
export const submit = (id: string, answers: Answers, digest: string) =>
  request<{ run: string }>(`${submission(id)}/submit`, postJson({ answers, digest }));
export const getRun = (id: string, signal: AbortSignal) =>
  request<Run>(`/api/runs/${encodeURIComponent(id)}`, { signal });
export const getReport = (id: string, signal: AbortSignal) =>
  request<ReportEntry>(`/connected/report/${encodeURIComponent(id)}`, { signal });

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

export const PATHWAYS: Readonly<Record<string, { label: string; modules: string[] }>> = {
  credit_snapshot: {
    label: "Full credit assessment",
    modules: [
      "CP-0",
      "CP-1",
      "CP-1A",
      "CP-DR",
      "CP-4",
      "CP-2",
      "CP-2A",
      "CP-2E",
      "CP-2D",
      "CP-2G",
      "CP-3C",
      "CP-3",
      "CP-5",
      "CP-6",
    ],
  },
  lite_credit_assessment: {
    label: "Lite credit assessment",
    modules: ["CP-0", "CP-1", "CP-1A", "CP-2", "CP-2A"],
  },
  earnings_update: {
    label: "Earnings Update",
    modules: ["CP-0", "CP-1", "CP-1B", "CP-DR", "CP-2E", "CP-1D", "CP-5"],
  },
  relative_value: {
    label: "Relative Value",
    modules: [
      "CP-0",
      "CP-1",
      "CP-1A",
      "CP-3D",
      "CP-DR",
      "CP-1C",
      "CP-2",
      "CP-2E",
      "CP-2D",
      "CP-3C",
      "CP-3",
      "CP-5",
    ],
  },
  covenant_refinancing: {
    label: "Covenant & Refinancing",
    modules: [
      "CP-0",
      "CP-1",
      "CP-1A",
      "CP-DR",
      "CP-4",
      "CP-2",
      "CP-2A",
      "CP-2E",
      "CP-2G",
      "CP-2D",
      "CP-3C",
      "CP-5",
    ],
  },
  distressed_restructuring: {
    label: "Distressed & Restructuring",
    modules: [
      "CP-0",
      "CP-1",
      "CP-1A",
      "CP-DR",
      "CP-4",
      "CP-1C",
      "CP-2",
      "CP-2A",
      "CP-2E",
      "CP-2G",
      "CP-2H",
      "CP-4C",
      "CP-5",
    ],
  },
  portfolio_decision: {
    label: "Portfolio Decision",
    modules: ["CP-0", "CP-1", "CP-1A", "CP-DR", "CP-2", "CP-2E", "CP-3", "CP-5", "CP-6"],
  },
};
export function pathwayModules(pathway: string) {
  return Object.hasOwn(PATHWAYS, pathway) ? (PATHWAYS[pathway]?.modules ?? []) : [];
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
  "CP-1B": "Earnings changes",
  "CP-1C": "Peer benchmark",
  "CP-1D": "Earnings quality",
  "CP-2D": "Liquidity",
  "CP-2H": "Ratings & triggers",
  "CP-3C": "Refinancing & LME",
  "CP-3D": "Market-implied risk",
  "CP-4C": "Recovery & fulcrum",
  "CP-L10": "Short credit snapshot",
  "CP-MODEL": "Cash flow model",
};

export function moduleName(id: string) {
  const name = Object.hasOwn(MODULE_NAMES, id) ? MODULE_NAMES[id] : undefined;
  return name ? `${name} (${id})` : id;
}

export function pathwayName(pathway: string) {
  if (Object.hasOwn(PATHWAYS, pathway)) return PATHWAYS[pathway]?.label ?? pathway;
  return pathway === "short_snapshot" ? "Short credit snapshot" : pathway.replaceAll("_", " ");
}

export function isPendingReport(error: unknown) {
  return error instanceof RequestError && error.status === 404;
}
