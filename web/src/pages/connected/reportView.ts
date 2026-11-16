import type { Metric, ModuleState } from "../library/slice";
import { moduleName } from "./api";
import {
  blocked,
  containsReference,
  methodNote,
  outputEntries,
  passages,
  readParagraph,
  readerText,
  runModels,
  withUnit,
} from "./publishedReport";
import type {
  CatalogueRun,
  OutputEntry,
  PublishedRun,
  Row,
  Snapshot,
  Table,
} from "./publishedReport";

export function moduleState(entry: OutputEntry | undefined): ModuleState {
  if (!entry) return "Not run";
  if (entry.output.parseError || blocked(entry)) return "Not assessable";
  if (
    entry.output.chartGaps?.length ||
    /^(?:Restricted|Draft Only)$/i.test(entry.output.state?.declared ?? "")
  )
    return "Delivered with gaps";
  return "Delivered";
}

export function namedTable(entry: OutputEntry, heading: string, headers: readonly string[]) {
  const tables = entry.sections
    .filter((section) => section.heading === heading)
    .flatMap(({ blocks }) => blocks)
    .filter((table): table is Table => table.type === "table");
  const matches = tables.filter((table) => headers.every((name) => table.headers.includes(name)));
  return matches.length === 1 ? matches[0] : undefined;
}

export function namedRow(table: Table | undefined, predicate: (row: Row) => boolean) {
  const matches = table?.rows.filter(predicate);
  return matches?.length === 1 ? matches[0] : undefined;
}

function isLead(entry: OutputEntry, module: string) {
  return (
    entry.selected &&
    entry.output.module === module &&
    !blocked(entry) &&
    passages(entry.sections).some((section) => section.heading === "Bottom line")
  );
}

export function buildReportView(snapshot: Snapshot, routeKey: string, run: PublishedRun) {
  const entries = outputEntries(snapshot, run, routeKey);
  const modules = Object.keys(run.modules).map((id) => {
    const outputs = entries.filter((entry) => entry.output.module === id);
    const selected = outputs.find((entry) => entry.selected);
    return { id, name: moduleName(id), state: moduleState(selected ?? outputs[0]), outputs };
  });
  return {
    entries,
    modules,
    lead: ["CP-6", "CP-2", "CP-L10", ...(run.pathway === "earnings_update" ? ["CP-1B"] : [])]
      .map((id) => entries.find((entry) => isLead(entry, id)))
      .find((entry) => entry !== undefined),
    models: runModels(snapshot, routeKey, run),
    catalogue: snapshot.catalogue.real.find((entry) => entry.id === run.folder),
  };
}

export type ReportView = ReturnType<typeof buildReportView>;

/** Module ids in the order the run ran them, then any the record does not name. */
export function moduleOrder(run: PublishedRun) {
  return [
    ...new Set([
      ...(run.record?.steps ?? []).map((step) => step.module),
      ...Object.keys(run.modules),
    ]),
  ];
}

const designated = (view: ReportView, id: string) =>
  view.entries.find((entry) => entry.selected && entry.output.module === id);

function passageTexts(entry: OutputEntry, heading: string) {
  return passages(entry.sections)
    .filter((section) => section.heading === heading)
    .flatMap(({ blocks }) => blocks)
    .filter((block) => block.type === "text");
}

/** One bottom line per module that ran, other than the lead; text is null where there is none to show; `referenced` marks one written but citing a source. */
export function moduleBottomLines(view: ReportView, run: PublishedRun) {
  return moduleOrder(run).flatMap((id) => {
    const entry = designated(view, id);
    if (!entry || entry === view.lead) return [];
    const block = passageTexts(entry, "Bottom line").find((item) => !methodNote(item.text));
    const written = block
      ? { line: block.line, body: readParagraph(block.text).body }
      : entry.output.summary
        ? {
            line: entry.output.summary.line,
            body: readParagraph(entry.output.summary.bottomLine).body,
          }
        : null;
    const body = written?.body.replaceAll("**", "").replaceAll("`", "");
    const referenced = body !== undefined && containsReference(body);
    return [
      {
        id,
        name: moduleName(id),
        state: moduleState(entry),
        entry,
        text: body && !referenced ? readerText(body) : null,
        referenced,
        line: written?.line ?? null,
      },
    ];
  });
}

const sameLimitation = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();

/** Each limitation of the run once, in module order; a module that could not assess writes none. */
export function runLimitations(view: ReportView, run: PublishedRun) {
  const seen = new Set<string>();
  return moduleOrder(run).flatMap((id) => {
    const entry = designated(view, id);
    if (!entry || blocked(entry)) return [];
    const written = passageTexts(entry, "Limitations");
    // An earlier-format handoff has no Limitations passage; its summary carries the limitation.
    const items = passages(entry.sections).some((section) => section.heading === "Limitations")
      ? written.map((block) => ({ text: block.text, line: block.line }))
      : entry.output.summary
        ? [{ text: entry.output.summary.limitation, line: entry.output.summary.line }]
        : [];
    return items.flatMap(({ text, line }) => {
      const { body } = readParagraph(text);
      const key = sameLimitation(body);
      if (!body || methodNote(text) || seen.has(key)) return [];
      seen.add(key);
      return [{ id, name: moduleName(id), entry, text: readerText(body), line }];
    });
  });
}

export type MetricKey =
  | "liquidity"
  | "freeCashFlow"
  | "leverage"
  | "interestCover"
  | "netDebt"
  | "principal"
  | "maturities";
type MetricBinding = { key: MetricKey; metric: Metric; line?: number };
const creditMetrics = [
  ["liquidity", "Total liquidity at period end", "US$m"],
  ["freeCashFlow", "Free cash flow (operating cash flow less capex), twelve months", "US$m"],
  ["leverage", "(Total debt plus financing obligations) / EBITDA", "x"],
  ["interestCover", "EBITDA / (cash interest for debt plus cash rent recorded as interest)", "x"],
  ["netDebt", "Net debt at period end", "US$m"],
] as const;

const numeric = /^-?\d+(?:\.\d+)?$/;
const exactComma = (value: string) => value.replace(/\B(?=(\d{3})+(?!\d|\.))/g, ",");
function financialValue(value: string, unit: string) {
  const [integer, fraction] = value.split(".");
  const display =
    fraction === undefined ? exactComma(integer ?? "") : `${exactComma(integer ?? "")}.${fraction}`;
  return unit === "US$m" ? `$${display}m` : withUnit(display, unit);
}

function creditMetricColumn(entry: OutputEntry, table: Table, date: string) {
  const periods = namedTable(entry, "Period table", ["Period", "Start", "End"]);
  const names = periods?.rows.filter((row) => row.cells[2] === date).map((row) => row.cells[0]);
  const named = table.headers.flatMap((header, i) =>
    header === date || names?.includes(header) ? [i] : [],
  );
  return named.length === 1 ? named[0] : undefined;
}

function metricBinding(
  key: MetricKey,
  label: string,
  value: string,
  unit: string,
  note: string,
  line?: number,
): MetricBinding {
  return {
    key,
    metric: {
      label,
      value: { kind: "value", at: null, text: financialValue(value, unit) },
      note,
      trace: null,
    },
    line,
  };
}

function principal(entry: OutputEntry, date: string): MetricBinding[] {
  const table = namedTable(entry, "Debt principal to carrying value", [
    "Period",
    "Contractual principal",
    "Reporting unit",
  ]);
  const row = namedRow(table, ({ cells }) => cells[0] === date && cells[4] === "US$m");
  const value = row?.cells[1];
  return value && numeric.test(value)
    ? [metricBinding("principal", "Contractual principal", value, "US$m", date, row.line)]
    : [];
}

function maturityTotal(entry: OutputEntry, date: string): MetricBinding[] {
  const schedule = namedTable(entry, "Chart data: debt maturities", [
    "Period",
    "Debt maturing",
    "Reporting unit",
  ]);
  if (
    !schedule ||
    !schedule.rows.every(
      ({ cells }) => cells[schedule.headers.indexOf("Reporting unit")] === "US$m",
    )
  )
    return [];
  const table = namedTable(entry, "Calculations", [
    "ID",
    "Calculation",
    "Inputs",
    "Result",
    "Source",
  ]);
  const dateYear = Number(date.slice(0, 4));
  const through = dateYear + 1;
  const row = namedRow(table, ({ cells }) => {
    const match = /^Maturities from (\d{4}-\d{2}-\d{2}) to end-(\d{4})$/.exec(cells[1] ?? "");
    return (
      !!match &&
      Number(match[2]) === through &&
      match[1]?.slice(0, 4) === date.slice(0, 4) &&
      match[1] > date
    );
  });
  const value = row?.cells[3];
  return value && numeric.test(value)
    ? [metricBinding("maturities", row.cells[1] ?? "", value, "US$m", date, row.line)]
    : [];
}

export function actionBias(entry: OutputEntry) {
  if (entry.output.module !== "CP-6") return undefined;
  for (const section of entry.sections) {
    if (section.heading !== "Decision") continue;
    for (const block of section.blocks) {
      if (block.type !== "text") continue;
      const match =
        /^Final Action Bias: (Watchlist|Avoid|Starter Position|Requires More Work|Add Exposure)\./i.exec(
          readParagraph(block.text).body,
        );
      if (match) return match[1];
    }
  }
  return undefined;
}

export function foundationMetrics(entry: OutputEntry, catalogue: CatalogueRun | undefined) {
  const date = catalogue?.metrics.cash?.period;
  if (!date || entry.output.module !== "CP-1" || blocked(entry)) return [];
  const table = namedTable(entry, "Financials and credit metrics", ["Metric", "Unit"]);
  const column = table && creditMetricColumn(entry, table, date);
  const measures =
    table && column !== undefined
      ? creditMetrics.flatMap(([key, label, unit]) => {
          const row = namedRow(
            table,
            ({ cells }) => cells[0] === label && cells[table.headers.indexOf("Unit")] === unit,
          );
          const value = row?.cells[column];
          return value && numeric.test(value)
            ? [metricBinding(key, label, value, unit, date, row.line)]
            : [];
        })
      : [];
  return [...measures, ...principal(entry, date), ...maturityTotal(entry, date)];
}

export function traceKey(entry: OutputEntry, line: number) {
  return JSON.stringify([entry.output.run ?? "", entry.output.id, entry.output.sha256, line]);
}
