import { Button } from "@/components/base/buttons/button";
import { useState } from "react";
import { moduleName } from "../api";
import { field, label } from "../layout";
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
import {
  baseQualifications,
  CashProxy,
  cashProxyCases,
  forecastCaseOptions,
  forecastCaseNames,
  gridOf,
  ForecastTrends,
} from "../visuals/LegacyForecast";
import { LeveragePath } from "../visuals/ForecastPath";
import { RunCharts } from "./RunCharts";
import { ForecastStatement } from "../visuals/ForecastStatement";
import { PublishedSource } from "./PublishedTrace";
import {
  forecastHandoff,
  forecastInput,
  forecastTraceContext,
  type ForecastSource,
} from "./ForecastRecord";
import {
  cellsOf,
  earningsBasis,
  forecastMeasure,
  leverageLimits,
  maturityWall,
} from "./forecastData";
import { ForecastHeader, ForecastStats, type CaseChoice } from "./ForecastHeader";
import { WhatBreaks } from "./ForecastBreaks";
import { AssumptionsByCase } from "./ForecastAssumptions";
import { UsesOfCash } from "./ForecastCash";
import { CaseFigures, ForecastScopeTiles } from "./ForecastScopeTile";
import { Bento, GapNote, Tile } from "./overview/Tile";

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
    <section className="grid min-w-0 gap-2 border-t border-border-hairline pt-3">
      <h4 className="text-small font-medium text-text-primary">
        {fiscal ? `${fiscal} base case basis` : "Model basis"}
      </h4>
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
    <details className="border-t border-border-hairline pt-3">
      <summary className="cursor-pointer text-small font-medium text-text-primary">
        Cash flow trends by line item
      </summary>
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

type View = ReturnType<typeof buildReportView>;

/** A trace to one module's chart table, for a mark drawn from another module. */
function tableTrace(
  folder: string,
  source: ReturnType<typeof leverageLimits>["source"],
  name: string,
) {
  if (source.state !== "ready") return undefined;
  const line = typeof source.descriptor.table === "number" ? source.descriptor.table : undefined;
  return (
    <PublishedSource
      href={evidencePath(folder, source.entry, line)}
      name={name}
      linkLabel={`Source for ${name}`}
    >
      View source
    </PublishedSource>
  );
}

function caseChoices(
  options: ReturnType<typeof forecastCaseOptions>,
  leverage: ReturnType<typeof forecastMeasure>,
): CaseChoice[] {
  const drawn = (group: string) =>
    leverage?.cases.some(
      (item) =>
        item.group === group && [...item.cells.values()].some(({ value }) => value !== null),
    ) ?? false;
  if (options.length)
    return options.map(({ name, rawGroup }) => ({ name, rawGroup, hatched: !drawn(rawGroup) }));
  return (leverage?.cases ?? []).map(({ name, group }) => ({
    name,
    rawGroup: group,
    hatched: !drawn(group),
  }));
}

function basisItems(model: Model, leverage: ReturnType<typeof forecastMeasure>, group?: string) {
  const units = word(record(model.cashflow).units);
  const cells = leverage ? cellsOf(leverage, group) : [];
  const first = cells[0];
  const last = cells.at(-1);
  return [
    { label: "Earnings basis", value: earningsBasis(model) ?? "Not recorded" },
    { label: "Units", value: unitLabel(units) || "Units not recorded" },
    {
      label: "Forecast years",
      value:
        first && last
          ? `${first.period}${first.start ? ` (from ${first.start})` : ""} to ${last.period}${last.end ? ` (to ${last.end})` : ""}`
          : "Not recorded",
    },
  ];
}

function ModelTiles({
  model,
  view,
  run,
  group,
  caseName,
  selectedCase,
  caseOptions,
  input,
  handoff,
  href,
  source,
  select,
}: {
  model: Model;
  view: View;
  run: PublishedRun;
  group: string | undefined;
  caseName: string;
  selectedCase: string | undefined;
  caseOptions: ReturnType<typeof forecastCaseOptions>;
  input: ReturnType<typeof forecastInput>;
  handoff: OutputEntry | undefined;
  href: (line: number) => string;
  source: ForecastSource;
  select: React.ReactNode;
}) {
  const leverage = forecastMeasure(model, /^Net leverage\b/u);
  const cover = forecastMeasure(model, /^Interest coverage\b/u);
  const units = word(record(model.cashflow).units);
  const basis = `${caseName} · ${earningsBasis(model) ?? "earnings basis not recorded"} · ${unitLabel(units) || "units not recorded"}`;
  const limits = leverageLimits(view);
  const wall = maturityWall(view);
  const limitTrace = tableTrace(run.folder, limits.source, "leverage limits");
  const wallTrace = tableTrace(run.folder, wall.source, "the maturity schedule");
  return (
    <>
      <ForecastStats
        leverage={leverage}
        cover={cover}
        group={group}
        caseName={caseName}
        source={source}
        basis={basis}
      />
      <LeveragePath
        measure={leverage}
        group={group}
        caseName={caseName}
        basis={basis}
        limits={{ ...limits, trace: limitTrace }}
        wall={{ ...wall, trace: wallTrace }}
        trace={
          leverage ? source("Net leverage path", { row: leverage.label, case: "" }) : undefined
        }
      />
      <WhatBreaks
        view={view}
        folder={run.folder}
        model={model}
        group={group}
        caseName={caseName}
        wall={{ ...wall, trace: wallTrace }}
        units={units}
      />
      <AssumptionsByCase document={input?.value ?? null} source={source} />
      <UsesOfCash model={model} group={group} caseName={caseName} units={units} source={source} />
      <Tile
        span={8}
        label="Forecast grid"
        title="Forecast grid"
        kicker="Rows by measure, columns by year · only cells the model wrote; the others are the gap cell"
      >
        <div
          id="forecast-model"
          tabIndex={-1}
          className="grid min-w-0 scroll-mt-4 gap-4 focus:outline-2 focus:outline-offset-2 focus:outline-focus"
        >
          <ForecastStatement
            model={model}
            selectedCase={selectedCase}
            selectedRawGroup={group}
            source={source}
          />
          <ForecastTrendsSection
            model={model}
            selectedCase={selectedCase}
            selectedRawGroup={group}
            source={source}
          />
          <Button href="#evidence/record" color="link-gray" size="sm" className="w-fit">
            Model notes and limitations
          </Button>
        </div>
      </Tile>
      <ForecastScopeTiles
        model={model}
        folder={run.folder}
        source={source}
        note={<BasisNote model={model} handoff={handoff} href={href} />}
        register={Boolean(model.register)}
        select={select}
      />
      <Tile
        span={12}
        label="Cash proxy by case"
        title="Cash proxy by case"
        kicker="The model's cash proxy, not issuer free cash flow, for each case it publishes"
      >
        <div className="grid min-w-0 items-start gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          <CaseFigures
            options={caseOptions}
            shownQualifications={baseQualifications(model)}
            source={source}
          />
          <section aria-label="Scenario comparison" className="grid min-w-0 gap-3">
            <CashProxy
              model={model}
              selectedCase={selectedCase}
              selectedRawGroup={group}
              sourceFor={source}
              unified
            />
          </section>
        </div>
      </Tile>
    </>
  );
}

export function Forecast({
  view,
  run,
  section,
  preview = false,
}: {
  view: View;
  run: PublishedRun;
  /** The deep-linked part of the page; the report shell focuses it. */
  section?: string;
  preview?: boolean;
}) {
  const [selected, setSelected] = useState(0);
  const [chosenCase, setChosenCase] = useState("");
  const { models, entries } = view;
  const model = models[selected] ?? models[0];
  const caseOptions = model ? forecastCaseOptions(model) : [];
  const leverage = model ? forecastMeasure(model, /^Net leverage\b/u) : null;
  const cases = caseChoices(caseOptions, leverage);
  const current = cases.find(({ name }) => name === chosenCase) ?? cases[0];
  const selectedCase = caseOptions.some(({ name }) => name === current?.name)
    ? current?.name
    : undefined;
  // The selected case's raw group, resolved once here: two raw groups can share one label.
  const group = current?.rawGroup;
  const handoff = model && forecastHandoff(model, entries, run.folder);
  const href = (line: number) =>
    handoff ? evidencePath(run.folder, handoff, line) : "#evidence/summary";
  const input = forecastInput(handoff);
  const source = forecastSources(model, input, href, selectedCase);
  return (
    <Bento>
      <ForecastHeader
        run={run}
        view={view}
        preview={preview}
        handoff={handoff}
        cases={cases}
        current={current?.name}
        onSelect={setChosenCase}
        basis={model ? basisItems(model, leverage, group) : []}
        hasModel={Boolean(model)}
      >
        {!model && <GapNote>No forecast model was published for this run.</GapNote>}
        {model && !input && (
          <GapNote>
            The model could not be matched to a single readable record of its inputs. Check Evidence
            for the model and its sources.
          </GapNote>
        )}
      </ForecastHeader>
      {model && (
        <ModelTiles
          model={model}
          view={view}
          run={run}
          group={group}
          caseName={current?.name ?? "Base case"}
          selectedCase={selectedCase}
          caseOptions={caseOptions}
          input={input}
          handoff={handoff}
          href={href}
          source={source}
          select={
            <PublishedModelSelect
              models={models}
              selected={selected}
              setSelected={setSelected}
              asOf={run.asOf}
            />
          }
        />
      )}
      <div
        id="forecast-run-charts"
        tabIndex={-1}
        className="min-w-0 scroll-mt-4 rounded-ds-lg border border-border-subtle bg-surface-card p-5 focus:outline-2 focus:outline-offset-2 focus:outline-focus sm:p-6 lg:col-span-12"
      >
        <details open={section === "run-charts"} className="group">
          <summary className="cursor-pointer text-small font-medium text-text-primary">
            Charts from the other modules of this run
          </summary>
          <div className="mt-4">
            <RunCharts view={view} folder={run.folder} />
          </div>
        </details>
      </div>
    </Bento>
  );
}
