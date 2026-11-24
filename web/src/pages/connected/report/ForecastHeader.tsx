import { Button } from "@/components/base/buttons/button";
import { Segmented } from "@/components/kit/Segmented";
import { StatsStrip, type Stat } from "@/components/kit/StatsStrip";
import { ArrowRight } from "@untitledui/icons";
import type { ReactNode } from "react";
import { moduleName } from "../api";
import { evidencePath, type OutputEntry, type PublishedRun } from "../publishedReport";
import type { ReportView } from "../reportView";
import { cellsOf, endOf, peakOf, troughOf, type Measure, type MeasureCell } from "./forecastData";
import { moduleSource } from "./overview/figureData";
import { bottomLine } from "./overview/read";
import { GapNote, Tile } from "./overview/Tile";
import { PublishedSource } from "./PublishedTrace";
import type { ForecastSource } from "./ForecastRecord";

export type CaseChoice = { name: string; rawGroup: string; hatched: boolean };

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
  const { entry, reason } = handoff
    ? { entry: handoff, reason: undefined }
    : moduleSource(view, "CP-2G", name);
  if (!entry || reason) return <GapNote>{reason ?? `${name} did not run in this run.`}</GapNote>;
  const [first] = bottomLine(entry);
  if (!first) return <GapNote>{`${name} wrote no bottom line.`}</GapNote>;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-3">
        <span className="text-caption font-medium text-text-tertiary">Bottom line</span>
        <PublishedSource
          href={evidencePath(folder, entry, first.line)}
          name="the forward view"
          linkLabel="Source for the forward view"
        >
          View source
        </PublishedSource>
      </div>
      <p className="max-w-[68rem] text-lead font-medium text-pretty text-text-primary lg:text-h2">
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
  children?: ReactNode;
}) {
  const state = view.modules.find(({ id }) => id === "CP-2G")?.state;
  return (
    <Tile span={12} label="Forecast" className="gap-6">
      <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
        <div className="flex min-w-0 flex-col gap-1">
          <h2 className="text-h2 font-semibold text-text-primary">Forecast</h2>
          <p className="text-small text-text-secondary">
            {run.issuerHeading || run.issuer}
            {preview && " · Test preview"}
            {" · "}
            {moduleName("CP-2G")}, base case and the other cases it publishes
          </p>
        </div>
        <CaseSwitch cases={cases} current={current} onSelect={onSelect} />
      </div>
      <BottomLine view={view} handoff={handoff} folder={run.folder} />
      {children}
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-border-hairline pt-5">
        <dl className="grid min-w-0 flex-[999_1_40rem] grid-cols-[repeat(auto-fit,minmax(min(10rem,100%),1fr))] gap-x-6 gap-y-4">
          {[
            ...basis,
            {
              label: "Module",
              value: `${moduleName("CP-2G")}${state ? `, ${state.toLowerCase()}` : ""}`,
            },
          ].map((item) => (
            <div key={item.label} className="flex min-w-0 flex-col gap-1">
              <dt className="text-caption text-text-tertiary">{item.label}</dt>
              <dd className="text-small wrap-anywhere text-text-primary">{item.value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap gap-2">
          <Button href="#modules/CP-2G" color="secondary" size="sm" iconTrailing={ArrowRight}>
            Open module
          </Button>
          {hasModel && (
            <Button href="#evidence/summary" color="link-gray" size="sm" iconTrailing={ArrowRight}>
              Forecast evidence and artifacts
            </Button>
          )}
        </div>
      </div>
    </Tile>
  );
}

/** Why a stat has no figure: the measure is not in the model, or not calculated for the case. */
function absence(measure: Measure | null, cells: MeasureCell[], what: string, caseName: string) {
  if (!measure) return `The model publishes no ${what} figure`;
  return cells.length ? `Not calculated for ${caseName}` : `No ${what} figure for ${caseName}`;
}

function stat(
  label: string,
  cell: MeasureCell | null,
  absent: string,
  trace: ReactNode,
  extra: Partial<Stat> = {},
): Stat {
  if (!cell || cell.value === null)
    return { label, value: null, gap: cell?.reason || absent, trace };
  return { label, value: cell.display, prior: undefined, trace, ...extra };
}

/** Peak and end leverage, minimum cover and the shortfall at the wall, for the selected case. */
export function ForecastStats({
  leverage,
  cover,
  group,
  caseName,
  source,
  basis,
}: {
  leverage: Measure | null;
  cover: Measure | null;
  group: string | undefined;
  caseName: string;
  source?: ForecastSource;
  basis: string;
}) {
  const path = leverage ? cellsOf(leverage, group) : [];
  const covers = cover ? cellsOf(cover, group) : [];
  const peak = peakOf(path);
  const end = endOf(path);
  const start = path[0];
  const least = troughOf(covers);
  const noLeverage = absence(leverage, path, "net leverage", caseName);
  const noCover = absence(cover, covers, "interest cover", caseName);
  const trace = (name: string, row: string | undefined, cell: MeasureCell | null) =>
    row
      ? source?.(name, {
          case: caseName,
          rawGroup: group,
          row,
          ...(cell ? { period: cell.period } : {}),
        })
      : undefined;
  const stats: Stat[] = [
    {
      ...stat(
        "Peak net leverage",
        peak,
        noLeverage,
        trace("Peak net leverage", leverage?.label, peak),
      ),
      ...(peak && peak.value !== null
        ? {
            prior: undefined,
            mark: (
              <span className="text-caption text-text-secondary">
                {peak.period} · {caseName}
              </span>
            ),
          }
        : {}),
    },
    stat(
      end ? `Net leverage, ${end.period}` : "Net leverage, last year",
      end,
      noLeverage,
      trace("End net leverage", leverage?.label, end),
      start && end && start !== end && start.value !== null
        ? { prior: `${start.display} in ${start.period}` }
        : {},
    ),
    {
      ...stat(
        "Minimum interest cover",
        least,
        noCover,
        trace("Minimum interest cover", cover?.label, least),
      ),
      ...(least && least.value !== null
        ? {
            mark: (
              <span className="text-caption text-text-secondary">
                {least.period} · {caseName}
              </span>
            ),
          }
        : {}),
    },
    {
      label: "Shortfall at the maturity wall",
      value: null,
      gap: "No module states a shortfall figure",
    },
  ];
  return (
    <div className="flex min-w-0 flex-col gap-2 lg:col-span-12">
      <StatsStrip label="Forecast figures" stats={stats} />
      <p className="px-1 text-caption text-text-secondary">{basis}</p>
    </div>
  );
}
