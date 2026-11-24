import { Button } from "@/components/base/buttons/button";
import { ArrowRight } from "@untitledui/icons";
import { useState, type ReactNode } from "react";
import { moduleName } from "../api";
import { card, field, heading, label } from "../layout";
import {
  evidencePath,
  type OutputEntry,
  type PublishedRun,
  readerText,
  unitLabel,
  withUnit,
} from "../publishedReport";
import { namedRow, namedTable, type buildReportView } from "../reportView";
import { amount, items, record, stringsIn, word } from "../visuals/visualData";
import { TRACE_HOST } from "@/pages/library/parts/TraceControl";
import {
  CashProxy,
  cashProxyCases,
  forecastCaseOptions,
  forecastCaseNames,
  ForecastScope,
  gridOf,
  ForecastTrends,
} from "../visuals/LegacyForecast";
import { RunCharts } from "./RunCharts";
import { ForecastStatement } from "../visuals/ForecastStatement";
import { PublishedSource } from "./PublishedTrace";
import {
  forecastHandoff,
  forecastInput,
  forecastTraceContext,
  RecordedForecastAssumptions,
  type ForecastSource,
} from "./ForecastRecord";

type Model = ReturnType<typeof buildReportView>["models"][number];
/** A model's recorded money unit: the currency code and "millions"
 * (docs/rulings/2026-11-16-reporting-currency-from-sources.md). */
const MILLIONS = /^[A-Z]{3} millions$/;

function recordedBridge(
  handoff: OutputEntry | undefined,
  units: unknown,
  fiscal: string | undefined,
  value: number | null | undefined,
) {
  const unit = word(units);
  if (!handoff || !MILLIONS.test(unit) || !fiscal || typeof value !== "number") return null;
  const ledger = namedTable(handoff, "Calculations", [
    "ID",
    "Calculation",
    "Inputs",
    "Result",
    "Source",
  ]);
  const fcf = namedRow(ledger, ({ cells }) => cells[1] === `Base FCF ${fiscal}`);
  const inflow = namedRow(
    ledger,
    ({ cells }) => cells[1] === `Base taxes and working-capital inflow ${fiscal}`,
  );
  if (!fcf || !inflow) return null;
  const original = amount(fcf.cells[3] ?? "");
  const difference = amount(inflow.cells[3] ?? "");
  if (
    original === null ||
    difference === null ||
    !(Math.abs(original - value - difference) < 0.005)
  )
    return null;
  return { value, original, difference, unit, fcfLine: fcf.line, inflowLine: inflow.line };
}

function BasisNote({
  model,
  handoff,
  href,
}: {
  model: Model;
  handoff?: OutputEntry;
  href: (line: number) => string;
}) {
  const raw = record(model.cashflow);
  const limitation = stringsIn(raw.limits).find((line) =>
    /machine input is set to zero/i.test(line),
  );
  if (!limitation) return null;
  const grid = gridOf(raw);
  const cases = grid && cashProxyCases(grid, null, forecastCaseNames(raw));
  const baseObservation = cases?.observations
    .filter(({ group }) => group === "Base case")
    .sort((a, b) => a.period.localeCompare(b.period))[0];
  const period = baseObservation?.period;
  const value =
    baseObservation?.cell?.status === "value" ? amount(word(baseObservation.cell.exact)) : null;
  const fiscal = period?.slice(0, -1);
  const bridge = recordedBridge(handoff, raw.units, fiscal, value);
  return (
    <section className={card}>
      <h3 className={heading}>{fiscal ? `${fiscal} base case basis` : "Model basis"}</h3>
      {bridge && (
        <p className="reading-copy text-body">
          The calculation gives <strong>{withUnit(bridge.value.toFixed(2), bridge.unit)}</strong>{" "}
          cash proxy. The {moduleName("CP-2G")} gives{" "}
          <strong>{withUnit(bridge.original.toFixed(2), bridge.unit)}</strong> free cash flow. The
          displayed difference is{" "}
          <strong>{withUnit(bridge.difference.toFixed(2), bridge.unit)}</strong>.
        </p>
      )}
      {bridge && (
        <div className="flex flex-wrap gap-3">
          <PublishedSource href={href(bridge.fcfLine)} name="Forward credit model free cash flow">
            Free cash flow basis
          </PublishedSource>
          <PublishedSource href={href(bridge.inflowLine)} name="Recorded difference">
            Difference basis
          </PublishedSource>
        </div>
      )}
      <p className="reading-copy text-body">{readerText(limitation)}</p>
    </section>
  );
}

function ForecastCases({
  caseOptions,
  shownQualifications,
  selectedCase,
  setChosenCase,
  source,
}: {
  caseOptions: ReturnType<typeof forecastCaseOptions>;
  shownQualifications: string[];
  selectedCase: string | undefined;
  setChosenCase: (name: string) => void;
  source: ForecastSource | undefined;
}) {
  const [first] = caseOptions;
  if (!first || caseOptions.length < 2) return null;
  return (
    <section
      id="forecast-cases"
      tabIndex={-1}
      className="grid min-w-0 scroll-mt-4 gap-3 wrap-anywhere focus:outline-2 focus:outline-offset-2 focus:outline-focus"
      aria-labelledby="forecast-case-heading"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 id="forecast-case-heading" className="font-display text-h3">
          Forecast cases
        </h3>
        <p id="forecast-case-measure" className="text-sm text-text-secondary">
          Cash proxy · each case's recorded period · {unitLabel(first.units)}
        </p>
      </div>
      <div
        role="radiogroup"
        aria-label="Forecast case"
        aria-describedby="forecast-case-measure forecast-case-note"
        className="grid min-w-0 overflow-hidden rounded-ds-md border border-border-hairline bg-border-hairline gap-px sm:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))]"
      >
        {caseOptions.map(
          ({ name, rawGroup, period, periodStart, periodEnd, value, description, reason }) => (
            <div
              key={name}
              className={`${TRACE_HOST} relative min-w-0 ${selectedCase === name ? "bg-surface-selected" : "bg-surface-card"}`}
            >
              <label className="block h-full cursor-pointer px-4 py-2 has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-focus">
                <input
                  type="radio"
                  name="forecast-case"
                  checked={selectedCase === name}
                  onChange={() => {
                    setChosenCase(name);
                  }}
                  className="sr-only"
                />
                <span className="flex items-center justify-between gap-2 text-sm font-semibold text-text-primary">
                  {name}
                  <span
                    aria-hidden="true"
                    className={`size-4 flex-none rounded-full border ${selectedCase === name ? "border-5 border-action" : "border-border-control"}`}
                  />
                </span>
                <span className="mt-1 block pr-8 font-display text-h3 tabular-nums">
                  {typeof value === "number"
                    ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(value)
                    : "n.a."}
                </span>
                {period && (
                  <span className="reading-copy mt-1 block pr-7 text-small text-text-secondary">
                    {period}
                    {periodStart && periodEnd ? ` · ${periodStart} to ${periodEnd}` : ""}
                  </span>
                )}
                {(!description || !shownQualifications.includes(description)) && (
                  <span className="reading-copy mt-2 block pr-7 text-small text-text-secondary">
                    {description || "Case description not recorded."}
                  </span>
                )}
                {reason && (
                  <span className="reading-copy mt-2 block pr-7 text-small text-text-secondary">
                    {readerText(reason)}
                  </span>
                )}
              </label>
              <div className="absolute right-2 bottom-2">
                {source?.(name, {
                  case: name,
                  rawGroup,
                  rawGroups: [rawGroup],
                  period,
                  row: "Cash proxy (not issuer free cash flow)",
                  periodStart,
                  periodEnd,
                })}
              </div>
            </div>
          ),
        )}
      </div>
      {first.comparisonNotice && (
        <p role="status" className="reading-copy text-small text-text-secondary">
          {first.comparisonNotice}
        </p>
      )}
      <p id="forecast-case-note" className="text-small text-text-secondary">
        Case figures are rounded to at most 2 decimals.
      </p>
    </section>
  );
}

function ForecastAssumptions({
  model,
  inputs,
  source,
}: {
  model: Model;
  inputs: ReturnType<typeof forecastInput>;
  source?: ForecastSource;
}) {
  return (
    <details open className="grid min-w-0 gap-4 wrap-anywhere">
      <summary className="cursor-pointer font-semibold">Forecast assumptions</summary>
      {inputs && <RecordedForecastAssumptions document={inputs.value} source={source} />}
      {model.register && (
        <Button
          className="w-fit"
          href="#evidence/record"
          color="link-gray"
          size="sm"
          iconTrailing={ArrowRight}
        >
          View model records in Evidence
        </Button>
      )}
    </details>
  );
}

type ForecastSection = { id: string; label: string };

function ForecastNavigation({
  sections,
  initialSection,
}: {
  sections: ForecastSection[];
  initialSection?: string;
}) {
  const [active, setActive] = useState(initialSection ?? sections[0]?.id);
  const activeSection = sections.some(({ id }) => id === active) ? active : sections[0]?.id;
  function navigate(id: string) {
    const target = document.getElementById(id);
    target?.focus();
    target?.scrollIntoView({ block: "start" });
    setActive(id);
  }
  return (
    <>
      <nav aria-label="Forecast sections" className="hidden flex-wrap items-center gap-3 md:flex">
        <span className="text-caption font-medium text-text-tertiary">On this page</span>
        {sections.map(({ id, label: name }) => (
          <Button
            key={id}
            aria-current={activeSection === id ? "location" : undefined}
            color="link-gray"
            size="sm"
            onPress={() => {
              navigate(id);
            }}
          >
            {name}
          </Button>
        ))}
      </nav>
      <details className="rounded-lg border border-border-hairline bg-surface-card px-3 md:hidden">
        <summary className="cursor-pointer py-2 text-sm font-medium text-action">
          On this page
        </summary>
        <label className="grid gap-1 pb-3 text-sm text-text-secondary">
          Jump to section
          <select
            aria-label="Jump to section"
            className={field}
            value=""
            onChange={(event) => {
              const id = event.currentTarget.value;
              if (id) navigate(id);
            }}
          >
            <option value="">Choose a section</option>
            {sections.map(({ id, label: name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </details>
    </>
  );
}

function forecastSections(
  model: Model | undefined,
  hasCases: boolean,
  hasAssumptions: boolean,
): ForecastSection[] {
  return [
    ...(hasCases ? [{ id: "forecast-cases", label: "Cases" }] : []),
    ...(model ? [{ id: "forecast-model", label: "Cash flow model" }] : []),
    ...(hasAssumptions ? [{ id: "forecast-assumptions", label: "Assumptions" }] : []),
    { id: "forecast-run-charts", label: "Run charts" },
  ];
}

function ForecastTrendsSection({
  model,
  selectedCase,
  selectedRawGroup,
  source,
}: {
  model: Model;
  selectedCase?: string;
  selectedRawGroup?: string;
  source?: ForecastSource;
}) {
  const cashflow = record(model.cashflow);
  const grid = gridOf(cashflow);
  const other = gridOf(cashflow.other);
  if (!grid) return null;
  const names = forecastCaseNames(cashflow);
  const selectedGroup =
    selectedRawGroup ?? [...names.keys()].find((group) => names.get(group) === selectedCase);
  const forecasts = other?.columns.some(({ group }) => group === selectedGroup) ? other : grid;
  return (
    <details className="mt-4 border-y border-border-hairline bg-surface-card px-4 py-3">
      <summary className="cursor-pointer font-semibold">Cash flow trends by line item</summary>
      <div className="mt-4">
        <ForecastTrends
          grid={forecasts}
          units={word(cashflow.units)}
          source={source}
          selectedCase={selectedCase}
          selectedRawGroup={selectedGroup}
          caseNames={names}
        />
      </div>
    </details>
  );
}

function ForecastContent({
  model,
  selectedCase,
  selectedRawGroup,
  source,
  handoff,
  href,
  assumptions,
  view,
  run,
}: {
  model?: Model;
  selectedCase?: string;
  selectedRawGroup?: string;
  source: ForecastSource | undefined;
  handoff: OutputEntry | undefined;
  href: (line: number) => string;
  assumptions: ReactNode;
  view: ReturnType<typeof buildReportView>;
  run: PublishedRun;
}) {
  return (
    <>
      {model && (
        <div
          id="forecast-model"
          tabIndex={-1}
          className="scroll-mt-4 focus:outline-2 focus:outline-offset-2 focus:outline-focus"
        >
          <div className="grid min-w-0 items-start gap-6 xl:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)] [&_button[aria-checked=true]]:bg-brand-950 [&_button[aria-checked=true]]:text-white">
            <div className="min-w-0 border-t-2 border-brand-950 bg-surface-card p-4">
              <ForecastStatement
                model={model}
                selectedCase={selectedCase}
                selectedRawGroup={selectedRawGroup}
                source={source}
              />
            </div>
            <section
              aria-label="Scenario comparison"
              className="grid min-w-0 gap-3 border-t-2 border-brand-950 bg-surface-card p-4"
            >
              <CashProxy
                model={model}
                selectedCase={selectedCase}
                selectedRawGroup={selectedRawGroup}
                sourceFor={source}
                note={<BasisNote model={model} handoff={handoff} href={href} />}
                unified
              />
            </section>
          </div>
          <ForecastTrendsSection
            model={model}
            selectedCase={selectedCase}
            selectedRawGroup={selectedRawGroup}
            source={source}
          />
          <Button href="#evidence/record" color="link-gray" size="sm" className="mt-3 w-fit">
            Model notes and limitations
          </Button>
        </div>
      )}
      {assumptions && (
        <div
          id="forecast-assumptions"
          tabIndex={-1}
          className="scroll-mt-4 focus:outline-2 focus:outline-offset-2 focus:outline-focus"
        >
          {assumptions}
        </div>
      )}
      <div
        id="forecast-run-charts"
        tabIndex={-1}
        className="scroll-mt-4 focus:outline-2 focus:outline-offset-2 focus:outline-focus"
      >
        <RunCharts view={view} folder={run.folder} />
      </div>
    </>
  );
}

function ForecastHeading({
  run,
  preview,
  hasModel,
}: {
  run: PublishedRun;
  preview: boolean;
  hasModel: boolean;
}) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 rounded-ds-md bg-brand-950 px-5 py-3 text-white">
      <div>
        <h2 className="font-display text-h2">Forecast</h2>
        <p className="text-small text-brand-100">
          {run.issuerHeading || run.issuer}
          {preview && " · Test preview"}
        </p>
      </div>
      {hasModel && (
        <Button
          className="w-fit"
          href="#evidence/summary"
          color="secondary"
          size="sm"
          iconTrailing={ArrowRight}
        >
          Forecast evidence and artifacts
        </Button>
      )}
    </header>
  );
}

function PublishedModelSelect({
  models,
  selected,
  setSelected,
  asOf,
}: {
  models: Model[];
  selected: number;
  setSelected: (index: number) => void;
  asOf: PublishedRun["asOf"];
}) {
  if (models.length < 2) return null;
  const date = asOf
    ? new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(`${asOf}T00:00:00Z`))
    : "";
  return (
    <label className={`${label} max-w-xs`}>
      Published model
      <select
        className={field}
        value={selected}
        onChange={(event) => {
          setSelected(Number(event.target.value));
        }}
      >
        {models.map((item, index) => (
          <option value={index} key={item.id}>
            Model {index + 1}
            {` · ${
              forecastCaseOptions(item)
                .map(({ name }) => name)
                .join(", ") || "Cases not recorded"
            }`}
            {date && ` · ${date}`}
          </option>
        ))}
      </select>
    </label>
  );
}

function forecastSources(
  model: Model | undefined,
  input: ReturnType<typeof forecastInput>,
  href: (line: number) => string,
  selectedCase: string | undefined,
): ForecastSource {
  const inputLimits = new Set(items(input?.value.scope_limits));
  return (name, selection = {}) => {
    const qualification = selection.recordedQualification;
    if (qualification !== undefined && !inputLimits.has(qualification)) {
      return (
        <PublishedSource
          name={name}
          href="#evidence/record"
          linkLabel={`Read ${name} in Evidence Record`}
        >
          Read in Evidence Record
        </PublishedSource>
      );
    }
    if (!input || !model) return undefined;
    return (
      <PublishedSource
        name={name}
        href={href(input.line)}
        context={forecastTraceContext(model, input.value, name, {
          case: selectedCase,
          ...selection,
        })}
      >
        Forecast inputs
      </PublishedSource>
    );
  };
}

export function Forecast({
  view,
  run,
  section,
  preview = false,
}: {
  view: ReturnType<typeof buildReportView>;
  run: PublishedRun;
  section?: string;
  preview?: boolean;
}) {
  const [selected, setSelected] = useState(0);
  const [chosenCase, setChosenCase] = useState("");
  const { models, entries } = view;
  const model = models[selected] ?? models[0];
  const caseOptions = model ? forecastCaseOptions(model) : [];
  const selectedCase = caseOptions.some(({ name }) => name === chosenCase)
    ? chosenCase
    : caseOptions[0]?.name;
  // The selected case's raw group, resolved once here: two raw groups can share one label.
  const selectedRawGroup = caseOptions.find(({ name }) => name === selectedCase)?.rawGroup;
  const handoff = model && forecastHandoff(model, entries, run.folder);
  const href = (line: number) =>
    handoff ? evidencePath(run.folder, handoff, line) : "#evidence/summary";
  const input = forecastInput(handoff);
  const source = forecastSources(model, input, href, selectedCase);
  const assumptions =
    model && (input || model.register) ? (
      <ForecastAssumptions model={model} inputs={input} source={source} />
    ) : null;
  const sections = forecastSections(model, caseOptions.length > 1, assumptions !== null);
  return (
    <>
      <ForecastHeading run={run} preview={preview} hasModel={Boolean(model)} />
      {!model && <p className={card}>No forecast model was published for this run.</p>}
      {model && !input && (
        <p className={`${card} min-w-0 wrap-anywhere`}>
          The model could not be matched to a single readable record of its inputs. Check Evidence
          for the model and its sources.
        </p>
      )}
      <PublishedModelSelect
        models={models}
        selected={selected}
        setSelected={setSelected}
        asOf={run.asOf}
      />
      {sections.length > 1 && (
        <ForecastNavigation
          key={section ?? ""}
          sections={sections}
          initialSection={section === "run-charts" ? "forecast-run-charts" : undefined}
        />
      )}
      {model && (
        <ForecastScope model={model} source={source}>
          {(shownQualifications) => (
            <ForecastCases
              shownQualifications={shownQualifications}
              caseOptions={caseOptions}
              selectedCase={selectedCase}
              setChosenCase={setChosenCase}
              source={source}
            />
          )}
        </ForecastScope>
      )}
      <ForecastContent
        model={model}
        selectedCase={selectedCase}
        selectedRawGroup={selectedRawGroup}
        source={source}
        handoff={handoff}
        href={href}
        assumptions={assumptions}
        view={view}
        run={run}
      />
    </>
  );
}
