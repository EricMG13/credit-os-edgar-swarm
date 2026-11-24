import { request } from "./ahead";

/**
 * Coverage's reply (`react_frontend/coverage.py`). Every `text` is the module's own; `at` only
 * sorts and screens. Nothing here averages, differences or scores a delivered value.
 */
export type CellState =
  "assessed" | "not-assessable" | "unreadable" | "no-handoff" | "not-in-pathway";
export type Cell = { state: CellState; gaps?: number };
export type CoverageRun = {
  key: string;
  folder: string;
  asOf: string | null;
  pathway: string | null;
  pathwayTitle: string | null;
  cells: Record<string, Cell>;
  other: readonly ({ code: string; title: string } & Cell)[];
};
export type Issuer = {
  key: string;
  name: string;
  sector: string | null;
  /** Newest first. */
  runs: readonly CoverageRun[];
};
export type Field = {
  id: string;
  module: string;
  group: string;
  label: string;
  kind: "number" | "text" | "choice";
  /** A number field read down periods can be ranked; one read down the issuer's own rows cannot. */
  series?: "period" | "row";
};
export type Fact = {
  field: string;
  issuer: string;
  run: string;
  period: string | null;
  row: string | null;
  text: string;
  at: number | null;
  gap?: boolean;
  unit?: string;
  basis?: string;
  impact?: string;
  confidence?: string;
  line: number;
  output: string;
  sha256: string;
};
export type Coverage = {
  columns: readonly { code: string; title: string }[];
  issuers: readonly Issuer[];
  fields: readonly Field[];
  facts: readonly Fact[];
};

export const COVERAGE_ADDRESS = "/connected/coverage";

export async function getCoverage(signal: AbortSignal): Promise<Coverage | null> {
  const response = await request(COVERAGE_ADDRESS, signal);
  if (!response.ok) throw new Error("Coverage could not be loaded.");
  return (await response.json()) as Coverage | null;
}

export type Filters = {
  query: string;
  sector: string;
  pathway: string;
  /** A fixed column's code, or "all". */
  module: string;
  state: CellState | "all";
  /** A choice field's id and one of its delivered words, or "all". */
  choice: string;
  word: string;
  /** Bounds on the chosen number field, as typed; empty is open. */
  min: string;
  max: string;
};

export const NO_FILTERS: Filters = {
  query: "",
  sector: "all",
  pathway: "all",
  module: "all",
  state: "all",
  choice: "all",
  word: "all",
  min: "",
  max: "",
};

/** The run a portfolio view reads for an issuer: its newest. Older runs are read by Trend only. */
export function latestRun(issuer: Issuer): CoverageRun | undefined {
  return issuer.runs[0];
}

export function factsOf(data: Coverage, run: string, field?: string): Fact[] {
  return data.facts.filter((fact) => fact.run === run && (!field || fact.field === field));
}

/**
 * The one fact of a field that stands for a run: the last stated figure in the module's own row
 * order, or the last row when every row is a stated gap. The module's period is shown with it.
 */
export function headline(facts: readonly Fact[]): Fact | undefined {
  return facts.filter((fact) => fact.at !== null).at(-1) ?? facts.at(-1);
}

function bound(text: string): number | null {
  const value = Number(text.trim());
  return text.trim() !== "" && Number.isFinite(value) ? value : null;
}

function within(fact: Fact | undefined, filters: Filters): boolean {
  const [min, max] = [bound(filters.min), bound(filters.max)];
  if (min === null && max === null) return true;
  // A missing figure is not zero: it passes no numeric bound.
  if (fact?.at === null || fact?.at === undefined) return false;
  return (min === null || fact.at >= min) && (max === null || fact.at <= max);
}

function says(data: Coverage, issuer: Issuer, run: CoverageRun, query: string): boolean {
  const wanted = query.trim().toLowerCase();
  if (!wanted) return true;
  const texts = [issuer.name, issuer.sector ?? "", run.pathwayTitle ?? ""];
  for (const fact of factsOf(data, run.key)) {
    if (fact.at === null) texts.push(fact.text, fact.impact ?? "");
  }
  return texts.some((text) => text.toLowerCase().includes(wanted));
}

/** The issuers whose newest run passes every filter; `field` is the chosen number field. */
export function matchIssuers(data: Coverage, filters: Filters, field: string | null): Issuer[] {
  return data.issuers.filter((issuer) => {
    const run = latestRun(issuer);
    if (!run) return false;
    if (filters.sector !== "all" && issuer.sector !== filters.sector) return false;
    if (filters.pathway !== "all" && run.pathwayTitle !== filters.pathway) return false;
    if (filters.module !== "all" && filters.state !== "all") {
      if (run.cells[filters.module]?.state !== filters.state) return false;
    }
    if (filters.choice !== "all" && filters.word !== "all") {
      const said = factsOf(data, run.key, filters.choice).map((fact) => fact.text);
      if (!said.includes(filters.word)) return false;
    }
    if (field && !within(headline(factsOf(data, run.key, field)), filters)) return false;
    return says(data, issuer, run, filters.query);
  });
}

type RankRow = { issuer: Issuer; run: CoverageRun; fact: Fact };
export type Ranking = {
  /** One list per reporting unit: figures in different units are never ranked together. */
  units: { unit: string; rows: RankRow[] }[];
  /** Issuers whose newest run states no figure for the field, with the module's reason if any. */
  missing: { issuer: Issuer; run: CoverageRun; fact: Fact | undefined }[];
};

/** Sort the delivered figures of one field, newest run per issuer. */
export function rank(
  data: Coverage,
  issuers: readonly Issuer[],
  field: string,
  order: "high" | "low",
): Ranking {
  const units = new Map<string, RankRow[]>();
  const missing: Ranking["missing"] = [];
  for (const issuer of issuers) {
    const run = latestRun(issuer);
    if (!run) continue;
    const fact = headline(factsOf(data, run.key, field));
    if (fact?.at === null || fact?.at === undefined) {
      missing.push({ issuer, run, fact });
      continue;
    }
    const unit = fact.unit ?? "";
    units.set(unit, [...(units.get(unit) ?? []), { issuer, run, fact }]);
  }
  const sign = order === "high" ? -1 : 1;
  return {
    units: [...units].map(([unit, rows]) => ({
      unit,
      rows: rows.sort((a, b) => sign * ((a.fact.at ?? 0) - (b.fact.at ?? 0))),
    })),
    missing,
  };
}

/** What a list is grouped by: nothing, sector, pathway, or a choice field's delivered word. */
export function groupKey(data: Coverage, issuer: Issuer, by: string): string {
  const run = latestRun(issuer);
  if (by === "sector") return issuer.sector ?? "Sector not recorded";
  if (by === "pathway") return run?.pathwayTitle ?? "Pathway not recorded";
  if (by === "none" || !run) return "";
  return factsOf(data, run.key, by)[0]?.text ?? "Not stated";
}

export type TrendSeries = {
  /** "Issuer · pathway": runs of different pathways are separate series. */
  name: string;
  /** One per date in `dates`; null where the series has no run or no figure on that date. */
  points: (Fact | null)[];
};

/** The reporting units a field's figures are stated in, across every run. */
export function fieldUnits(data: Coverage, field: string): string[] {
  const units = data.facts
    .filter((fact) => fact.field === field && fact.at !== null)
    .map((fact) => fact.unit ?? "");
  return [...new Set(units)].sort();
}

/**
 * One point per run for a number field in one reporting unit, oldest first. Each issuer and
 * pathway is its own series: runs of different pathways are never joined.
 */
export function trend(
  data: Coverage,
  issuers: readonly Issuer[],
  field: string,
  unit: string,
): { dates: string[]; series: TrendSeries[] } {
  const found = new Map<string, { name: string; points: Map<string, Fact> }>();
  for (const issuer of issuers) {
    for (const run of issuer.runs) {
      const fact = headline(factsOf(data, run.key, field));
      if (!run.asOf || fact?.at === null || fact?.at === undefined) continue;
      if ((fact.unit ?? "") !== unit) continue;
      const pathway = run.pathwayTitle ?? "pathway not recorded";
      const key = JSON.stringify([issuer.key, pathway]);
      const entry = found.get(key) ?? { name: `${issuer.name} · ${pathway}`, points: new Map() };
      // Two runs of one pathway on one date: the newest listed (first) is kept.
      if (!entry.points.has(run.asOf)) entry.points.set(run.asOf, fact);
      found.set(key, entry);
    }
  }
  const series = [...found.values()];
  const dates = [...new Set(series.flatMap((entry) => [...entry.points.keys()]))].sort();
  const seen = new Map<string, number>();
  return {
    dates,
    series: series.map(({ name, points }) => {
      // Two issuers of one name stay two series.
      const count = (seen.get(name) ?? 0) + 1;
      seen.set(name, count);
      return {
        name: count === 1 ? name : `${name} (${String(count)})`,
        points: dates.map((date) => points.get(date) ?? null),
      };
    }),
  };
}

/** A figure as written, with its unit when the unit is not already part of the text. */
export function figure(fact: Fact): string {
  if (fact.at === null || !fact.unit) return fact.text;
  return fact.unit === "x" || fact.unit === "%"
    ? `${fact.text}${fact.unit}`
    : `${fact.text} ${fact.unit}`;
}

/** Where a fact is read: its run's Evidence page, at the module's own line. */
export function evidenceLink(run: CoverageRun, fact: Fact): string {
  return `/report/${encodeURIComponent(run.folder)}#evidence/${encodeURIComponent(fact.output)}~${fact.sha256}-${String(fact.line)}`;
}

const GROUPS_KEY = "credit-os-coverage-groups";
export type SavedGroup = { name: string; issuers: string[] };

/** Saved groups live in this browser only; unreadable storage is no groups. */
export function readGroups(): SavedGroup[] {
  try {
    const stored: unknown = JSON.parse(window.localStorage.getItem(GROUPS_KEY) ?? "[]");
    if (!Array.isArray(stored)) return [];
    return stored.filter(
      (item): item is SavedGroup =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as SavedGroup).name === "string" &&
        Array.isArray((item as SavedGroup).issuers) &&
        (item as SavedGroup).issuers.every((key) => typeof key === "string"),
    );
  } catch {
    return [];
  }
}

export function writeGroups(groups: readonly SavedGroup[]): void {
  try {
    window.localStorage.setItem(GROUPS_KEY, JSON.stringify(groups));
  } catch {
    // The groups stay for this visit only.
  }
}
