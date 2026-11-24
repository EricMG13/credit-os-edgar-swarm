export interface ScenarioPeriodObservation {
  period: string;
  group: string;
  start?: string;
  end?: string;
}

interface ComparableScenarioPeriod {
  period: string;
  groups: string[];
  start?: string;
  end?: string;
}

export function isDatedForecastPeriod(period: string) {
  return /^FY\d{4}E$/u.test(period);
}

export function scenarioGroupLabels(groups: string[], label: (group: string) => string) {
  const labels = new Map(groups.map((group) => [group, label(group)]));
  const counts = new Map<string, number>();
  for (const value of labels.values()) counts.set(value, (counts.get(value) ?? 0) + 1);
  for (const [group, value] of labels) {
    if (counts.get(value) && (counts.get(value) ?? 0) > 1) labels.set(group, `${value} · ${group}`);
  }
  return labels;
}

function byDatedPeriod<T extends ScenarioPeriodObservation>(observations: T[]) {
  const byPeriod = new Map<string, T[]>();
  for (const observation of observations) {
    if (!isDatedForecastPeriod(observation.period)) continue;
    const list = byPeriod.get(observation.period) ?? [];
    list.push(observation);
    byPeriod.set(observation.period, list);
  }
  return byPeriod;
}

function validDate(value: string) {
  const timestamp = Date.parse(value);
  return (
    /^\d{4}-\d{2}-\d{2}$/u.test(value) &&
    Number.isFinite(timestamp) &&
    new Date(timestamp).toISOString().slice(0, 10) === value
  );
}

function validSpan(start: string, end: string) {
  return validDate(start) && validDate(end) && Date.parse(start) <= Date.parse(end);
}

function comparablePeriod(
  period: string,
  candidates: ScenarioPeriodObservation[],
  groups: Set<string>,
): ComparableScenarioPeriod | null {
  if (groups.size < 2) return null;
  const legacyBasis = candidates.every(({ start, end }) => !start && !end);
  const datedBasis = candidates.every(({ start, end }) =>
    Boolean(start && end && validSpan(start, end)),
  );
  const sameBasis =
    new Set(candidates.map(({ start, end }) => `${start ?? ""}\0${end ?? ""}`)).size === 1;
  if (!legacyBasis && !(datedBasis && sameBasis)) return null;
  const first = candidates[0];
  return {
    period,
    groups: [...groups],
    ...(first?.start && first.end ? { start: first.start, end: first.end } : {}),
  };
}

/** Shared source identity and eligibility for columns used as scenario observations. */
export function analyzeScenarioPeriods<T extends ScenarioPeriodObservation>(observations: T[]) {
  const byPeriod = byDatedPeriod(observations);
  const periods: ComparableScenarioPeriod[] = [];
  const uniqueObservations: T[] = [];
  const ambiguousPeriods: string[] = [];
  let basisGap = false;
  for (const [period, candidates] of byPeriod) {
    const groups = new Set(candidates.map(({ group }) => group));
    if (groups.size !== candidates.length) {
      basisGap = true;
      ambiguousPeriods.push(period);
      const counts = new Map<string, number>();
      for (const { group } of candidates) counts.set(group, (counts.get(group) ?? 0) + 1);
      uniqueObservations.push(...candidates.filter(({ group }) => counts.get(group) === 1));
      continue;
    }
    uniqueObservations.push(...candidates);
    const comparison = comparablePeriod(period, candidates, groups);
    if (comparison) periods.push(comparison);
    else if (groups.size > 1) basisGap = true;
  }
  if (scenarioCount(byPeriod) > 1 && periods.length === 0) basisGap = true;
  periods.sort((left, right) => left.period.localeCompare(right.period));
  return { periods, uniqueObservations, ambiguousPeriods, basisGap };
}

function scenarioCount(byPeriod: Map<string, ScenarioPeriodObservation[]>) {
  return new Set(
    [...byPeriod.values()].flatMap((candidates) => candidates.map(({ group }) => group)),
  ).size;
}
