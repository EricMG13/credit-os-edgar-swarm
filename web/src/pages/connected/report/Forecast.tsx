import { Button } from "@/components/base/buttons/button";
import { useState, type ReactNode } from "react";
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
  cashProxyCases,
  forecastCaseOptions,
  forecastCaseNames,
  gridOf,
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
  maturitySchedule,
  measureRows,
} from "./forecastData";
import { CaseFigure, ForecastHeader, ForecastStats, type CaseChoice } from "./ForecastHeader";
import { ModuleGap } from "./ForecastGaps";
import { WhatBreaks } from "./ForecastBreaks";
import { AssumptionsByCase } from "./ForecastAssumptions";
import { UsesOfCash } from "./ForecastCash";
import { ForecastScopeTiles } from "./ForecastScopeTile";
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
        className={`${field} min-h-8 max-[480px]:min-h-11`}
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
type Ready = { state: "ready"; entry: OutputEntry; descriptor: Record<string, unknown> };

/** A trace to one module's chart table, for a figure drawn from another module. */
function tableTrace(folder: string, source: Ready | { state: "gap" }, name: string) {
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

const NET_LEVERAGE = /^Net leverage\b/u;
const ON_ADJ_EBITDA = /net debt \/ Adj EBITDA/u;
const COVER = /^Interest coverage\b/u;
const COVER_ON_ADJ_EBITDA = /Adj EBITDA \/ (?:cash )?interest/u;

function caseChoices(
  options: ReturnType<typeof forecastCaseOptions>,
  leverage: ReturnType<typeof forecastMeasure>,
): CaseChoice[] {
  const drawn = (group: string) =>
    leverage?.cases.some(
      (item) => item.group === group && [...item.own.values()].some(({ value }) => value !== null),
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
  // The selected case's own published years, compared with other cases or not.
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
  input: ReturnType<typeof forecastInput>;
  handoff: OutputEntry | undefined;
  href: (line: number) => string;
  source: ForecastSource;
  select: ReactNode;
}) {
  const cashflow = record(model.cashflow);
  const leverage = forecastMeasure(model, NET_LEVERAGE, ON_ADJ_EBITDA);
  const cover = forecastMeasure(model, COVER, COVER_ON_ADJ_EBITDA);
  const schedule = maturitySchedule(view);
  const scheduleTrace = tableTrace(run.folder, schedule.source, "the maturity schedule");
  const scheduleGap =
    schedule.reason && !schedule.years.length ? (
      <ModuleGap entry={schedule.source.entry}>{schedule.reason}</ModuleGap>
    ) : undefined;
  return (
    <>
      <ForecastStats
        view={view}
        folder={run.folder}
        leverage={leverage}
        cover={cover}
        group={group}
        caseName={caseName}
        source={source}
        basis={`${caseName} · ${earningsBasis(model) ?? "earnings basis not recorded"}`}
      />
      <LeveragePath
        measure={leverage}
        rows={measureRows(model, NET_LEVERAGE)}
        group={group}
        caseName={caseName}
        schedule={{ ...schedule, gap: scheduleGap, trace: scheduleTrace }}
        trace={
          leverage ? source("Net leverage path", { row: leverage.label, case: "" }) : undefined
        }
      />
      <WhatBreaks
        view={view}
        folder={run.folder}
        model={model}
        handoff={handoff}
        group={group}
        caseName={caseName}
        schedule={{ ...schedule, entry: schedule.source.entry, trace: scheduleTrace }}
      />
      <AssumptionsByCase
        document={input?.value ?? null}
        source={source}
        caseNames={forecastCaseNames(cashflow)}
        downsideNote={stringsIn(cashflow.notes).find((note) => note.startsWith("Downside case is"))}
      />
      <UsesOfCash model={model} group={group} caseName={caseName} source={source} />
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
          <Button
            href="#evidence/record"
            color="link-gray"
            size="sm"
            className="w-fit min-h-8 max-[480px]:min-h-11"
          >
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
    </>
  );
}

export function Forecast({
  view,
  run,
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
  const leverage = model ? forecastMeasure(model, NET_LEVERAGE, ON_ADJ_EBITDA) : null;
  const cases = caseChoices(caseOptions, leverage);
  const current = cases.find(({ name }) => name === chosenCase) ?? cases[0];
  const option = caseOptions.find(({ name }) => name === current?.name);
  const selectedCase = option?.name;
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
        caseFigure={
          model && caseOptions.length > 1 ? (
            <CaseFigure
              option={option}
              notice={caseOptions[0]?.comparisonNotice}
              shownQualifications={baseQualifications(model)}
              source={source}
            />
          ) : undefined
        }
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
          caseName={current?.name ?? "the published model"}
          selectedCase={selectedCase}
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
        <RunCharts view={view} folder={run.folder} />
      </div>
    </Bento>
  );
}
