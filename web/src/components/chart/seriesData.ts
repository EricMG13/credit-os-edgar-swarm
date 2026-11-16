interface SeriesValues {
  name: string;
  values: (number | null)[];
}

/** Positional keys keep issuer-provided names out of the chart data object's keys. */
export function seriesKey(index: number): string {
  return `s${String(index)}`;
}

export function checkDistinctSeries(series: { name: string }[]) {
  const repeated = series.find((s, i) => series.findIndex((other) => other.name === s.name) !== i);
  if (repeated !== undefined)
    throw new Error(`series names must be distinct: "${repeated.name}" repeats`);
}

export function checkLabeledSeriesLength(
  series: (SeriesValues & { labels: (string | null)[] })[],
  count: number,
  unit: "group" | "period",
) {
  const bad = series.find((s) => s.values.length !== count || s.labels.length !== count);
  if (bad !== undefined) {
    throw new Error(
      `series "${bad.name}" must have one value and one label per ${unit} (${String(count)} ${unit}s)`,
    );
  }
}

/** Preserve caller order and exact values; absent observations stay null, including sparse cells. */
export function periodSeriesData(periods: string[], series: SeriesValues[]) {
  return periods.map((period, index) => ({
    period,
    index,
    ...Object.fromEntries(series.map((s, i) => [seriesKey(i), s.values[index] ?? null])),
  }));
}
