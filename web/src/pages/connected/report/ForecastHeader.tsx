import { Button } from "@/components/base/buttons/button";
import { Segmented } from "@/components/kit/Segmented";
import { StatsStrip, type Stat } from "@/components/kit/StatsStrip";
import { ArrowRight } from "@untitledui/icons";
import type { ReactNode } from "react";
import { moduleName } from "../api";
import {
  evidencePath,
  readerText,
  unitLabel,
  type OutputEntry,
  type PublishedRun,
} from "../publishedReport";
import type { ReportView } from "../reportView";
import type { forecastCaseOptions } from "../visuals/LegacyForecast";
import {
  cellsOf,
  endOf,
  extremeOf,
  fundingGap,
  periodList,
  type Measure,
  type MeasureCell,
} from "./forecastData";
import { ModuleGap } from "./ForecastGaps";
import { moduleSource } from "./overview/figureData";
import { bottomLine } from "./overview/read";
import { Tile } from "./overview/Tile";
import { PublishedSource } from "./PublishedTrace";
import type { ForecastSource } from "./ForecastRecord";

export type CaseChoice = { name: string; rawGroup: string; hatched: boolean };
type CaseOption = ReturnType<typeof forecastCaseOptions>[number];

const rounded = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });
const TARGET = "min-h-8 max-[480px]:min-h-11";

function CaseSwitch({
  cases,
  current,
  onSelect,
}: {
  cases: CaseChoice[];
  current: string | undefined;
  onSelect: (name: string) => void;
}) {
  if (cases.length < 2 || current === undefined) return null;
  return (
    <div className="flex flex-col items-start gap-1.5 lg:items-end">
      <Segmented
        label="Case"
        current={current}
        onSelect={onSelect}
        segments={cases.map(({ name, hatched }) => ({
          key: name,
          accessibleLabel: hatched ? `${name}, no leverage path in the model` : undefined,
          label: (
            <>
              {name}
              {hatched && (
                <span
                  aria-hidden="true"
                  className="gap-hatch size-2.5 rounded-ds-xs border border-dashed border-border-gap"
                />
              )}
            </>
          ),
        }))}
      />
      {cases.some(({ hatched }) => hatched) && (
        <span className="text-caption text-text-tertiary">
          Hatched: no leverage path in the model
        </span>
      )}
    </div>
  );
}

/**
 * The selected case's latest cash proxy as the model publishes it, with its period and dates, its
 * description where no qualification already says it, its reason, and its trace.
 */
export function CaseFigure({
  option,
  notice,
  shownQualifications,
  source,
}: {
  option: CaseOption | undefined;
  notice: string | undefined;
  shownQualifications: string[];
  source?: ForecastSource;
}) {
  if (!option) return null;
  const { name, rawGroup, period, periodStart, periodEnd, value, description, reason, units } =
    option;
  return (
    <div
      id="forecast-cases"
      tabIndex={-1}
      className="grid min-w-0 scroll-mt-4 gap-1 wrap-anywhere focus:outline-2 focus:outline-offset-2 focus:outline-focus"
    >
      <dl
        aria-label="Selected case cash proxy"
        aria-describedby="forecast-case-measure forecast-case-note"
        className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
      >
        <dt id="forecast-case-measure" className="text-caption text-text-tertiary">
          {`Cash proxy, ${name} · ${unitLabel(units)}`}
        </dt>
        <dd className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="font-mono text-small font-medium text-text-primary tabular-nums">
            {typeof value === "number" ? rounded.format(value) : "n.a."}
          </span>
          {period && (
            <span className="text-caption text-text-secondary">
              {period}
              {periodStart && periodEnd ? ` · ${periodStart} to ${periodEnd}` : ""}
            </span>
          )}
          {source?.(name, {
            case: name,
            rawGroup,
            rawGroups: [rawGroup],
            period,
            row: "Cash proxy (not issuer free cash flow)",
            periodStart,
            periodEnd,
          })}
        </dd>
      </dl>
      {(!description || !shownQualifications.includes(description)) && (
        <p className="text-caption text-text-secondary">
          {description || "Case description not recorded."}
        </p>
      )}
      {reason && <p className="text-caption text-text-secondary">{readerText(reason)}</p>}
      {notice && (
        <p role="status" className="text-caption text-text-secondary">
          {notice}
        </p>
      )}
      <p id="forecast-case-note" className="text-caption text-text-tertiary">
        Case figures are rounded to at most 2 decimals.
      </p>
    </div>
  );
}

function BottomLine({
  view,
  handoff,
  folder,
}: {
  view: ReportView;
  handoff: OutputEntry | undefined;
  folder: string;
}) {
  const name = moduleName("CP-2G");
  const found = handoff ? { entry: handoff, reason: undefined } : moduleSource(view, "CP-2G", name);
  if (!found.entry || found.reason)
    return (
      <ModuleGap entry={found.entry}>
        {found.reason ?? `${name} did not run in this run.`}
      </ModuleGap>
    );
  const [first] = bottomLine(found.entry);
  if (!first) return <ModuleGap>{`${name} wrote no bottom line.`}</ModuleGap>;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-3">
        <span className="text-caption font-medium text-text-tertiary">Bottom line</span>
        <PublishedSource
          href={evidencePath(folder, found.entry, first.line)}
          name="the forward view"
          linkLabel="Source for the forward view"
        >
          View source
        </PublishedSource>
      </div>
      <p className="max-w-[68rem] text-h3 font-medium text-pretty text-text-primary lg:text-h1">
        {first.text ?? "The forward view cites its sources by name; read it in Evidence."}
      </p>
    </div>
  );
}

/** The header tile: the forward view in one sentence, the case switch and the basis once. */
export function ForecastHeader({
  run,
  view,
  preview,
  handoff,
  cases,
  current,
  onSelect,
  basis,
  hasModel,
  caseFigure,
  children,
}: {
  run: PublishedRun;
  view: ReportView;
  preview: boolean;
  handoff: OutputEntry | undefined;
  cases: CaseChoice[];
  current: string | undefined;
  onSelect: (name: string) => void;
  basis: { label: string; value: string }[];
  hasModel: boolean;
  /** The selected case's cash proxy figure, drawn under the switch. */
  caseFigure?: ReactNode;
  children?: ReactNode;
}) {
  const state = view.modules.find(({ id }) => id === "CP-2G")?.state;
  const module = moduleName("CP-2G");
  return (
    <Tile span={12} label="Forecast" className="gap-6">
      <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
        <div className="flex min-w-0 flex-col gap-1">
          <h2 className="text-h4 font-semibold text-text-primary lg:text-h3">Forecast</h2>
          <p className="text-small text-text-secondary">
            {run.issuerHeading || run.issuer}
            {preview && " · Test preview"}
            {hasModel ? ` · ${module}, the cases it publishes` : " · No forward model in this run"}
          </p>
        </div>
        <div className="flex min-w-0 flex-col items-start gap-3 lg:items-end">
          <CaseSwitch cases={cases} current={current} onSelect={onSelect} />
          {caseFigure}
        </div>
      </div>
      <BottomLine view={view} handoff={handoff} folder={run.folder} />
      {children}
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-border-hairline pt-5">
        <dl className="grid min-w-0 flex-[999_1_40rem] grid-cols-[repeat(auto-fit,minmax(min(10rem,100%),1fr))] gap-x-6 gap-y-4">
          {[
            ...basis,
            ...(state ? [{ label: "Module", value: `${module}, ${state.toLowerCase()}` }] : []),
          ].map((item) => (
            <div key={item.label} className="flex min-w-0 flex-col gap-1">
              <dt className="text-caption text-text-tertiary">{item.label}</dt>
              <dd className="text-small wrap-anywhere text-text-primary">{item.value}</dd>
            </div>
          ))}
        </dl>
        {state !== undefined && (
          <Button
            href="#modules/CP-2G"
            color="secondary"
            size="sm"
            iconTrailing={ArrowRight}
            className={TARGET}
          >
            Open module
          </Button>
        )}
      </div>
    </Tile>
  );
}

/** Why a stat has no figure: the measure is not in the model, or not given for the case. */
function absence(measure: Measure | null, cells: MeasureCell[], what: string, caseName: string) {
  if (!measure) return `The model publishes no ${what} figure`;
  if (!cells.length) return `No ${what} figure for ${caseName}`;
  return cells.some(({ value }) => value !== null)
    ? `One published forecast year only: no ${what} year to single out`
    : `Not calculated for ${caseName}`;
}

/** The years a selection leaves without a figure, said in the same cell. */
function missingWords(notCalculated: string[], notPublished: string[]) {
  return [
    ...(notCalculated.length ? [`${periodList(notCalculated)} not calculated`] : []),
    ...(notPublished.length ? [`${periodList(notPublished)} not published`] : []),
  ].join("; ");
}

function selection(
  label: string,
  cells: MeasureCell[],
  kind: "highest" | "lowest",
  absent: string,
  trace: (cell: MeasureCell | null) => ReactNode,
): Stat {
  const picked = extremeOf(cells, kind);
  const [first] = picked?.cells ?? [];
  if (!picked || !first) return { label, value: null, gap: absent, trace: trace(null) };
  const missing = missingWords(picked.notCalculated, picked.notPublished);
  return {
    label,
    value: first.display,
    trace: trace(first),
    mark: (
      <span className="grid gap-0.5 text-caption text-text-secondary">
        <span>{periodList(picked.cells.map(({ period }) => period))}</span>
        {missing && <span>{missing}</span>}
      </span>
    ),
  };
}

function fundingStat(view: ReportView, folder: string): Stat {
  const { gap } = fundingGap(view);
  const label = "Funding gap";
  if (!gap)
    return {
      label,
      value: null,
      gap: `Neither ${moduleName("CP-2D")} nor ${moduleName("CP-3C")} states one`,
    };
  return {
    label,
    value: gap.value === null ? null : gap.text,
    gap: gap.text,
    trace: (
      <PublishedSource
        href={evidencePath(folder, gap.entry, gap.line)}
        name="the funding gap figure"
        linkLabel="Source for the funding gap figure"
      >
        View source
      </PublishedSource>
    ),
    mark: (
      <span className="text-caption text-text-secondary">
        {[`${gap.name}'s figure`, gap.horizon, gap.unit].filter(Boolean).join(" · ")}
      </span>
    ),
  };
}

/**
 * The selected case's figures as selections the page makes and labels as such: its highest and
 * lowest published forecast years (ties and missing years named), its last year, and the funding
 * gap as the liquidity module states it. A case's own years, compared with other cases or not.
 */
export function ForecastStats({
  view,
  folder,
  leverage,
  cover,
  group,
  caseName,
  source,
  basis,
}: {
  view: ReportView;
  folder: string;
  leverage: Measure | null;
  cover: Measure | null;
  group: string | undefined;
  caseName: string;
  source?: ForecastSource;
  basis: string;
}) {
  const path = leverage ? cellsOf(leverage, group) : [];
  const covers = cover ? cellsOf(cover, group) : [];
  const end = endOf(path);
  const start = path[0];
  const trace = (name: string, row: string | undefined) => (cell: MeasureCell | null) =>
    row
      ? source?.(name, {
          case: caseName,
          rawGroup: group,
          row,
          ...(cell ? { period: cell.period } : {}),
        })
      : undefined;
  const stats: Stat[] = [
    selection(
      `Net leverage: highest published forecast year, ${caseName}`,
      path,
      "highest",
      absence(leverage, path, "net leverage", caseName),
      trace("Highest published net leverage", leverage?.label),
    ),
    end && end.value !== null
      ? {
          label: `Net leverage, ${end.period}`,
          value: end.display,
          trace: trace("Net leverage", leverage?.label)(end),
          ...(start && start !== end && start.value !== null
            ? { prior: `${start.display} in ${start.period}` }
            : {}),
        }
      : {
          label: end ? `Net leverage, ${end.period}` : "Net leverage, last forecast year",
          value: null,
          gap: end?.reason || absence(leverage, path, "net leverage", caseName),
          trace: trace("Net leverage", leverage?.label)(end),
        },
    selection(
      `Interest cover: lowest published forecast year, ${caseName}`,
      covers,
      "lowest",
      absence(cover, covers, "interest cover", caseName),
      trace("Lowest published interest cover", cover?.label),
    ),
    fundingStat(view, folder),
  ];
  return (
    <div className="flex min-w-0 flex-col gap-2 lg:col-span-12">
      <StatsStrip label="Forecast figures" stats={stats} />
      <p className="px-1 text-caption text-text-secondary">{basis}</p>
    </div>
  );
}
