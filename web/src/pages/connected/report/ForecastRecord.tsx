import type { ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { TRACE_HOST } from "@/pages/library/parts/TraceControl";
import { card, heading } from "../layout";
import {
  containsReference,
  FORECAST_INPUTS,
  readerText,
  type OutputEntry,
} from "../publishedReport";
import type { buildReportView } from "../reportView";
import { forecastCaseLabel, gridOf } from "../visuals/LegacyForecast";
import { items, record, stringsIn, word } from "../visuals/visualData";
import type { PublishedTraceContext } from "./PublishedTrace";

export type ForecastModel = ReturnType<typeof buildReportView>["models"][number];
export type ForecastSelection = {
  case?: string;
  row?: string;
  period?: string;
  periods?: string[];
  groups?: string[];
  text?: string;
  inputPath?: string[];
};
export type ForecastSource = (name: string, selection?: ForecastSelection) => ReactNode;

/** One retained JSON input block, never a guessed block among alternatives. */
export function forecastInput(entry: OutputEntry | undefined) {
  const sections = entry?.sections.filter(({ heading }) => heading === FORECAST_INPUTS) ?? [];
  if (sections.length !== 1) return null;
  const blocks = sections
    .flatMap(({ blocks }) => blocks)
    .filter((block) => block.type === "text" && block.text.startsWith("```json\n"));
  const block = blocks.length === 1 ? blocks[0] : undefined;
  if (!block || block.type !== "text") return null;
  try {
    const text = block.text.replace(/^```json\r?\n/, "").replace(/\r?\n```\s*$/, "");
    const value: unknown = JSON.parse(text);
    if (value === null || typeof value !== "object" || Array.isArray(value)) return null;
    return { line: block.line, value: record(value) };
  } catch (error) {
    if (error instanceof SyntaxError) return null;
    throw error;
  }
}

function scalar(value: unknown): string | null {
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean")
    return String(value);
  return value === null || value === undefined ? null : JSON.stringify(value);
}

function atPath(value: Record<string, unknown>, path: string[]) {
  return path.reduce<unknown>(
    (item, key) => (Array.isArray(item) ? item[Number(key)] : record(item)[key]),
    value,
  );
}

function rawGroups(model: ForecastModel) {
  const cashflow = record(model.cashflow);
  return [gridOf(cashflow), gridOf(cashflow.other)].flatMap((grid) => (grid ? [grid] : []));
}

const CASH_PROXY = "Cash proxy (not issuer free cash flow)";
const BASE_FIELDS: Record<string, string[]> = {
  Revenue: ["revenue"],
  "Adj EBITDA": ["revenue", "ebitda"],
  Interest: ["interest", "debt"],
  "Closing debt": ["debt"],
};
const DRIVER_FIELDS: Record<string, string[]> = {
  Revenue: ["revenue_growth"],
  "Adj EBITDA": ["revenue_growth", "ebitda_margin"],
  Interest: ["interest_rate"],
  "Closing debt": ["debt_repayment"],
};

function selectedValues(model: ForecastModel, rowName: string, selection: ForecastSelection) {
  const cashflow = record(model.cashflow);
  const downside = stringsIn(cashflow.notes).find((note) => note.startsWith("Downside case is"));
  return rawGroups(model).flatMap((grid) => {
    const rows = grid.rows.filter((row) => row.label === rowName);
    if (rows.length !== 1) return [];
    const row = rows[0];
    if (!row) return [];
    return grid.columns.flatMap((column, index) => {
      const name = forecastCaseLabel(column.group, downside);
      if (
        selection.groups
          ? !selection.groups.includes(name)
          : selection.case && selection.case !== name
      )
        return [];
      if (selection.period && selection.period !== column.label) return [];
      if (selection.periods && !selection.periods.includes(column.label)) return [];
      const cell = row.cells[index];
      const value = word(cell?.exact) || word(cell?.display) || "n.a.";
      const reason = word(cell?.reason);
      return [`${name} · ${column.label}: ${value}${reason ? ` (${reason})` : ""}`];
    });
  });
}

/** Exact retained fields for this figure's drawer; no forecast arithmetic is performed here. */
export function forecastTraceContext(
  model: ForecastModel,
  document: Record<string, unknown>,
  name: string,
  selection: ForecastSelection,
): PublishedTraceContext {
  const rowName = selection.row ?? (name.includes("Cash proxy") ? CASH_PROXY : name);
  const values = selectedValues(model, rowName, selection);
  const details: PublishedTraceContext["details"] = [];
  const add = (path: string[]) =>
    details.push({ label: path.join("."), value: scalar(atPath(document, path)) });
  if (selection.inputPath) add(selection.inputPath);
  else {
    const base = record(document.base);
    for (const key of BASE_FIELDS[rowName] ?? Object.keys(base)) add(["base", key]);
    const cases =
      selection.groups ??
      (selection.case
        ? [selection.case]
        : rawGroups(model).flatMap((grid) =>
            grid.columns.map((column) =>
              forecastCaseLabel(
                column.group,
                stringsIn(record(model.cashflow).notes).find((note) =>
                  note.startsWith("Downside case is"),
                ),
              ),
            ),
          ));
    const groups = [
      "base_drivers",
      ...(cases.includes("Upside case") ? ["upside_drivers"] : []),
      ...(cases.includes("Downside drivers") ? ["downside_drivers"] : []),
    ];
    for (const group of groups) {
      const drivers = record(document[group]);
      for (const key of DRIVER_FIELDS[rowName] ?? Object.keys(drivers))
        if (Object.hasOwn(drivers, key)) add([group, key]);
    }
    if (cases.includes("Downside shock"))
      for (const key of Object.keys(record(document.downside_shock))) add(["downside_shock", key]);
    add(["years"]);
  }
  for (const key of ["currency", "scale"]) if (Object.hasOwn(document, key)) add([key]);
  return {
    heading: `${name}${selection.case ? ` · ${selection.case}` : ""}${selection.period ? ` · ${selection.period}` : ""}`,
    statement: [rowName, selection.case, selection.text, ...values].filter(Boolean).join(" · "),
    details,
    qualification:
      "Values and input fields are retained as recorded. Input arrays follow their recorded planning years; no value is recomputed in this drawer.",
  };
}

const DRIVER_NAMES: Record<string, string> = {
  revenue_growth: "Revenue growth",
  ebitda_margin: "EBITDA margin",
  capex_pct_revenue: "Capital expenditure as a share of revenue",
  tax_wc_pct_revenue: "Tax and working capital as a share of revenue",
  interest_rate: "Interest rate",
  dividends: "Dividends",
  debt_repayment: "Debt repayment",
};
const DRIVER_GROUPS = [
  ["base_drivers", "Base case"],
  ["upside_drivers", "Upside case"],
  ["downside_drivers", "Downside drivers"],
] as const;
const visible = (value: unknown) => {
  const text = scalar(value);
  return text === null ? "n.a." : containsReference(text) ? "See Evidence." : readerText(text);
};

function percent(value: unknown) {
  const text = scalar(value) ?? "";
  const number = /^\d+(?:\.\d+)?$/.test(text) ? Number(text) : NaN;
  return Number.isFinite(number) ? `${(number * 100).toFixed(2)}%` : "n.a.";
}

export function RecordedForecastAssumptions({
  document,
  source,
}: {
  document: Record<string, unknown>;
  source?: ForecastSource;
}) {
  const years = items(document.years).map((year) => record(year));
  const drivers = DRIVER_GROUPS.flatMap(([group, name]) =>
    Object.entries(record(document[group]))
      .filter(([, raw]) => raw !== null)
      .map(([key, raw]) => ({
        group,
        name,
        key,
        driver: record(raw),
      })),
  );
  const shock = record(document.downside_shock);
  const facilities = items(document.facilities);
  return (
    <div className="grid min-w-0 gap-5 wrap-anywhere">
      <section aria-label="Recorded forecast drivers" className={`${card} min-w-0`}>
        <h3 className={heading}>Recorded forecast drivers</h3>
        <p className="text-small text-text-secondary">
          Driver values below are the module's recorded fractions or amounts, in their stated
          planning years.
        </p>
        {drivers.length ? (
          <div className="overflow-x-auto">
            <table className="w-full text-small">
              <caption className="sr-only">Recorded forecast drivers</caption>
              <thead>
                <tr>
                  {[
                    "Driver",
                    "Case",
                    ...years.map((year) => scalar(year.year) ?? "Planning year not recorded"),
                    "Category",
                    "Rationale",
                    "Limitation",
                    "Source",
                  ].map((name, index) => (
                    <th key={index} className="px-3 py-2 text-left">
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {drivers.map(({ group, name, key, driver }) => (
                  <tr key={`${group}-${key}`} className="border-t border-border-hairline">
                    <th className="px-3 py-2 text-left">{DRIVER_NAMES[key] ?? key}</th>
                    <td className="px-3 py-2">{name}</td>
                    {years.map((_, index) => (
                      <td className="px-3 py-2 tabular-nums" key={index}>
                        {visible(Array.isArray(driver.values) ? driver.values[index] : null)}
                      </td>
                    ))}
                    <td className="px-3 py-2">{visible(driver.category)}</td>
                    <td className="max-w-sm px-3 py-2">{visible(driver.rationale)}</td>
                    <td className="max-w-sm px-3 py-2">{visible(driver.limitation)}</td>
                    <td className="px-3 py-2">
                      {source?.(`${DRIVER_NAMES[key] ?? key} assumptions`, {
                        case: name,
                        inputPath: [group, key],
                        text: scalar(driver.values) ?? "Not supplied",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No forecast drivers were recorded in the matched inputs.</p>
        )}
      </section>
      <section aria-label="Recorded downside shock" className={`${card} min-w-0`}>
        <h3 className={heading}>Recorded downside shock</h3>
        {Object.keys(shock).length ? (
          <dl className="grid gap-3 sm:grid-cols-2">
            <div className={TRACE_HOST}>
              <dt>EBITDA decline</dt>
              <dd>{percent(shock.ebitda_decline)}</dd>
              {source?.("Downside EBITDA decline", {
                case: "Downside shock",
                inputPath: ["downside_shock", "ebitda_decline"],
              })}
            </div>
            <div className={TRACE_HOST}>
              <dt>Cash-interest increase</dt>
              <dd>{percent(shock.rate_increase)}</dd>
              {source?.("Downside cash-interest increase", {
                case: "Downside shock",
                inputPath: ["downside_shock", "rate_increase"],
              })}
            </div>
          </dl>
        ) : (
          <p>No downside shock was recorded.</p>
        )}
      </section>
      <section aria-label="Recorded facilities" className={`${card} min-w-0`}>
        <h3 className={heading}>Recorded facilities</h3>
        {facilities.length ? (
          <ul className="grid gap-4">
            {facilities.map((facility, index) => (
              <li key={index} className={TRACE_HOST}>
                <dl>
                  {Object.entries(record(facility)).map(([key, value]) => (
                    <div key={key}>
                      <dt>{key.replaceAll("_", " ")}</dt>
                      <dd>{visible(value)}</dd>
                    </div>
                  ))}
                </dl>
                {source?.(`Facility ${String(index + 1)}`, {
                  inputPath: ["facilities", String(index)],
                })}
              </li>
            ))}
          </ul>
        ) : (
          <p>No facility-level assumptions were recorded.</p>
        )}
      </section>
    </div>
  );
}

/** Every exact qualification once, with all of its model/case/period/field applicability. */
function modelQualifications(model: ForecastModel) {
  const data = record(model.cashflow);
  const found = new Map<string, Set<string>>();
  const add = (text: string, scope: string) => {
    if (!text) return;
    const scopes = found.get(text) ?? new Set<string>();
    scopes.add(scope);
    found.set(text, scopes);
  };
  for (const text of stringsIn(data.notes)) add(text, "Model note");
  for (const text of stringsIn(data.limits)) add(text, "Whole model");
  const downside = stringsIn(data.notes).find((text) => text.startsWith("Downside case is"));
  // The Evidence ledger must retain qualifications even if a grid fails the drawing checks.
  for (const raw of [data, record(data.other)]) {
    const columns = items(raw.columns).map(record);
    for (const rawRow of items(raw.rows)) {
      const row = record(rawRow);
      items(row.cells).forEach((cell, index) => {
        const column = columns[index];
        add(
          word(record(cell).reason),
          [
            word(row.label) || "Field not recorded",
            forecastCaseLabel(word(column?.group), downside) || "Case not recorded",
            word(column?.label) || "Period not recorded",
          ].join(" · "),
        );
      });
    }
  }
  return [...found].map(([text, scopes]) => ({ text, scope: [...scopes].join(" · ") }));
}

export function RecordedModelQualifications({ models }: { models: ForecastModel[] }) {
  return models.map((model) => {
    const rows = modelQualifications(model);
    return (
      <section
        key={model.id}
        aria-label={`Recorded model qualifications: ${model.id}`}
        className={`${card} min-w-0 wrap-anywhere`}
      >
        <h3 className={heading}>Recorded model notes and limitations</h3>
        <p className="text-small">Model {model.id}</p>
        <ul className="grid gap-1 font-mono text-mono">
          {model.sources.map((source, index) => (
            <li key={index}>
              {[source.run, source.role, source.output, source.sha256, source.path]
                .filter(Boolean)
                .join(" · ")}
            </li>
          ))}
        </ul>
        {rows.length ? (
          <table className="w-full text-small">
            <caption className="sr-only">Recorded model qualification ledger</caption>
            <thead>
              <tr>
                <th className="px-3 py-2 text-left">Applies to</th>
                <th className="px-3 py-2 text-left">Recorded qualification</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ text, scope }) => (
                <tr key={text} className="border-t border-border-hairline">
                  <th className="max-w-md px-3 py-2 text-left font-normal">{scope}</th>
                  <td className="max-w-prose px-3 py-2">{text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No model notes or limitations were recorded.</p>
        )}
        <Button href="#forecast" color="link-gray" size="sm">
          Return to Forecast
        </Button>
      </section>
    );
  });
}
