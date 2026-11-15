import type { Metric, ModuleState } from "../library/slice";
import { moduleName } from "./api";
import {
  blocked,
  outputEntries,
  passages,
  readParagraph,
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

const readerModuleName = (id: string) => moduleName(id).replace(/ \(CP-[^)]+\)$/, "");

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
    return { id, name: readerModuleName(id), state: moduleState(selected ?? outputs[0]), outputs };
  });
  return {
    entries,
    modules,
    lead: ["CP-6", "CP-2", "CP-L10"]
      .map((id) => entries.find((entry) => isLead(entry, id)))
      .find((entry) => entry !== undefined),
    models: runModels(snapshot, routeKey, run),
    catalogue: snapshot.catalogue.real.find((entry) => entry.id === run.folder),
  };
}

type MetricBinding = { metric: Metric; line?: number };
const creditMetrics = [
  ["Total liquidity at period end", "Available liquidity", "US$m"],
  ["Free cash flow (operating cash flow less capex), twelve months", "Free cash flow", "US$m"],
  ["(Total debt plus financing obligations) / EBITDA", "Lease-adjusted gross leverage", "x"],
  [
    "EBITDA / (cash interest for debt plus cash rent recorded as interest)",
    "All-in cash interest cover",
    "x",
  ],
  ["Net debt at period end", "Net debt (carrying basis)", "US$m"],
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
  label: string,
  value: string,
  unit: string,
  note: string,
  line?: number,
): MetricBinding {
  return {
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
    ? [metricBinding("Debt principal", value, "US$m", date, row.line)]
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
    ? [
        metricBinding(
          `Debt maturities through ${String(through)}`,
          value,
          "US$m",
          row.cells[1] ?? "",
          row.line,
        ),
      ]
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
      ? creditMetrics.flatMap(([source, label, unit]) => {
          const row = namedRow(
            table,
            ({ cells }) => cells[0] === source && cells[table.headers.indexOf("Unit")] === unit,
          );
          const value = row?.cells[column];
          return value && numeric.test(value)
            ? [
                metricBinding(
                  label,
                  value,
                  unit,
                  label === "Free cash flow" ? `LTM to ${date}` : date,
                  row.line,
                ),
              ]
            : [];
        })
      : [];
  return [...measures, ...principal(entry, date), ...maturityTotal(entry, date)];
}

export function traceKey(entry: OutputEntry, line: number) {
  return JSON.stringify([entry.output.run ?? "", entry.output.id, entry.output.sha256, line]);
}
