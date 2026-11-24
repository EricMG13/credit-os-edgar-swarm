import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { BarCell } from "@/components/kit/BarCell";
import { cx } from "@/utils/cx";
import { moduleName } from "../api";
import { evidencePath, type OutputEntry } from "../publishedReport";
import type { ReportView } from "../reportView";
import {
  cellsOf,
  covenantTests,
  forecastMeasure,
  fundingGap,
  modelLimitation,
  type MeasureCell,
  type ScheduleYear,
} from "./forecastData";
import { GapChip, ModuleGap } from "./ForecastGaps";
import { moduleSource } from "./overview/figureData";
import { downsidePanels, type DownsidePanel } from "./overview/stressData";
import { Figure, Tile } from "./overview/Tile";
import { PublishedSource } from "./PublishedTrace";

/** The maturity schedule as the page reads it, with the reason when there is none. */
export type BreaksSchedule = {
  years: ScheduleYear[];
  offAxis: ScheduleYear[];
  unit?: string;
  reason: string | null;
  entry?: OutputEntry;
  trace?: ReactNode;
};

function Part({
  title,
  detail,
  trace,
  children,
}: {
  title: string;
  detail?: string;
  trace?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section aria-label={title} className="grid min-w-0 gap-2 border-t border-border-hairline pt-3">
      <div className="flex items-start justify-between gap-2">
        <div className="grid min-w-0 gap-0.5">
          <h4 className="text-small font-medium text-text-primary">{title}</h4>
          {detail && <p className="text-caption text-text-secondary">{detail}</p>}
        </div>
        {trace}
      </div>
      {children}
    </section>
  );
}

function FundingGapPart({ view, folder }: { view: ReportView; folder: string }) {
  const { gap, looked } = fundingGap(view);
  if (!gap)
    return (
      <Part title="Funding gap">
        <ModuleGap>
          {looked.every((reason) => reason.endsWith("states no funding gap figure."))
            ? `Neither ${moduleName("CP-2D")} nor ${moduleName("CP-3C")} states a funding gap figure.`
            : `Neither ${moduleName("CP-2D")} nor ${moduleName("CP-3C")} states a funding gap figure. Looked at: ${looked.join(" ")}`}
        </ModuleGap>
      </Part>
    );
  const detail = [
    `${gap.name}'s figure`,
    gap.horizon ? `at its horizon end, ${gap.horizon}` : "at its horizon end",
    gap.unit,
  ]
    .filter(Boolean)
    .join(" · ");
  return (
    <Part
      title="Funding gap"
      detail={detail}
      trace={
        <PublishedSource
          href={evidencePath(folder, gap.entry, gap.line)}
          name="the funding gap"
          linkLabel="Source for the funding gap"
        >
          View source
        </PublishedSource>
      }
    >
      {gap.value === null ? (
        <GapChip>{gap.text || "Not stated"}</GapChip>
      ) : (
        <Figure className="text-h3">{gap.text}</Figure>
      )}
    </Part>
  );
}

/** A list of published figures, each on one scale from zero shared by the list only. */
function FigureList({
  items,
  tone,
}: {
  items: { key: string; label: string; text: string; value: number | null; reason?: string }[];
  tone: "primary" | "secondary";
}) {
  const most = Math.max(0, ...items.map((item) => item.value ?? 0));
  return (
    <ul className="grid gap-1.5">
      {items.map((item) => (
        <li
          key={item.key}
          className="grid grid-cols-[minmax(0,5.5rem)_minmax(0,1fr)] items-center gap-2"
        >
          <span className="font-mono text-caption text-text-secondary">{item.label}</span>
          {item.value === null ? (
            <GapChip>{item.reason ? `${item.text}: ${item.reason}` : item.text}</GapChip>
          ) : item.value >= 0 && most > 0 ? (
            <BarCell text={item.text} share={item.value / most} tone={tone} />
          ) : (
            <Figure className="text-small">{item.text}</Figure>
          )}
        </li>
      ))}
    </ul>
  );
}

function LiquidityPart({
  model,
  group,
  caseName,
}: {
  model: unknown;
  group: string | undefined;
  caseName: string;
}) {
  const measure = forecastMeasure(model, /^Accessible liquidity\b/u);
  const cells: MeasureCell[] = measure ? cellsOf(measure, group) : [];
  const title = `Accessible liquidity, ${caseName}`;
  if (!cells.length)
    return (
      <Part title={title}>
        <ModuleGap>
          {measure
            ? `No accessible liquidity figure for ${caseName}.`
            : "The model publishes no accessible liquidity figure."}
        </ModuleGap>
      </Part>
    );
  return (
    <Part
      title={title}
      detail={`By forecast year, as the model publishes it · ${measure?.label ?? ""}`}
    >
      <FigureList
        tone="primary"
        items={cells.map((cell) => ({
          key: cell.period,
          label: cell.period,
          text: cell.value === null ? cell.display || "n.a." : cell.display,
          value: cell.value,
          reason: cell.reason,
        }))}
      />
    </Part>
  );
}

function SchedulePart({ schedule }: { schedule: BreaksSchedule }) {
  const items = [...schedule.years, ...schedule.offAxis].filter((item) => item.cell);
  if (!items.length)
    return (
      <Part title="Debt maturing">
        <ModuleGap entry={schedule.entry}>
          {schedule.reason ?? "The maturity schedule states no amount."}
        </ModuleGap>
      </Part>
    );
  return (
    <Part
      title="Debt maturing"
      detail={`${moduleName("CP-1")}'s schedule, as written${schedule.unit ? ` · ${schedule.unit}` : ""}`}
      trace={schedule.trace}
    >
      <FigureList
        tone="secondary"
        items={items.map((item) => ({
          key: item.label,
          label: item.label,
          text: item.cell?.value === null ? "Not supplied" : (item.cell?.text ?? ""),
          value: item.cell?.value ?? null,
          reason: item.cell?.reason ?? undefined,
        }))}
      />
    </Part>
  );
}

function CovenantPart({
  view,
  folder,
  caveat,
}: {
  view: ReportView;
  folder: string;
  caveat: string | null;
}) {
  const { tests, reason, source } = covenantTests(view);
  const name = moduleName("CP-4");
  if (!tests.length)
    return (
      <Part title="Covenant tests">
        <ModuleGap entry={source.entry}>{reason ?? `${name} states no covenant test.`}</ModuleGap>
      </Part>
    );
  const line = source.state === "ready" ? source.descriptor.table : undefined;
  return (
    <Part
      title="Covenant tests"
      detail={`As ${name} writes them`}
      trace={
        source.state === "ready" ? (
          <PublishedSource
            href={evidencePath(folder, source.entry, typeof line === "number" ? line : undefined)}
            name="the covenant tests"
            linkLabel="Source for the covenant tests"
          >
            View source
          </PublishedSource>
        ) : undefined
      }
    >
      <ul className="grid gap-2">
        {tests.map((test, at) => (
          <li key={`${test.label}-${String(at)}`} className="grid gap-0.5">
            <span className="text-small font-medium text-text-primary">{test.label}</span>
            <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-caption text-text-secondary">
              <span>
                Level{" "}
                {test.threshold.value === null ? (
                  <GapChip>{test.threshold.text}</GapChip>
                ) : (
                  <Figure>{`${test.threshold.text}${test.unit ? ` ${test.unit}` : ""}`}</Figure>
                )}
              </span>
              <span>
                Current{" "}
                {test.current.value === null ? (
                  <GapChip>{test.current.text}</GapChip>
                ) : (
                  <Figure>{`${test.current.text}${test.unit ? ` ${test.unit}` : ""}`}</Figure>
                )}
              </span>
              {test.headroom && (
                <span>
                  Headroom <Figure>{test.headroom}</Figure>
                </span>
              )}
              {test.direction && <span>{test.direction}</span>}
            </span>
          </li>
        ))}
      </ul>
      <p className="text-caption text-text-secondary">
        {caveat ??
          "Shown as the legal module states them; the forecast's figures are not set against them."}
      </p>
    </Part>
  );
}

/** The drawing's width in CSS pixels. */
function useMeasuredWidth(fallback: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(fallback);
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new ResizeObserver(([entry]) => {
      const next = Math.round(entry?.contentRect.width ?? 0);
      if (next > 0) setWidth(Math.max(260, next));
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, []);
  return { ref, width };
}

const ROW = 30;
const HEAD = 22;
const NAMES = 104;
const LABEL = 56;
const GUTTER = 12;
const lead = (text: string) => text.split(" (")[0] ?? text;

/** The stress scenarios as one small multiple: a row per scenario, a panel per measure, each
 * panel one scale from zero shared by every scenario. Panels sit side by side where they fit and
 * stack where the tile is narrow. */
function StressMultiple({
  cases,
  panels,
}: {
  cases: { id: string; name: string; control: boolean }[];
  panels: DownsidePanel[];
}) {
  const { ref, width } = useMeasuredWidth(400);
  const across = (width - NAMES) / panels.length >= 150 ? panels.length : 1;
  // Stacked panels leave room for whole scenario names.
  const names = across === 1 ? Math.min(168, Math.round(width * 0.4)) : NAMES;
  const room = (width - names - GUTTER * across) / across;
  const block = HEAD + cases.length * ROW + 8;
  const height = Math.ceil(panels.length / across) * block;
  const reading = cases
    .map(
      (item, at) =>
        `${item.name}: ${panels.map((panel) => `${panel.measure} ${panel.cells[at]?.value === null ? "not calculated" : (panel.cells[at]?.text ?? "")}`).join(", ")}`,
    )
    .join(". ");
  return (
    <div ref={ref} className="min-w-0">
      <svg
        role="img"
        aria-label={`Point-in-time stress. ${reading}.`}
        width={width}
        height={height}
        viewBox={`0 0 ${String(width)} ${String(height)}`}
        className="block max-w-full"
      >
        {panels.map((panel, index) => {
          const top = Math.floor(index / across) * block;
          const left = names + GUTTER + (index % across) * (room + GUTTER);
          // The bars leave room for their figures, so no figure runs past its panel.
          const bars = Math.max(40, room - LABEL);
          const span = panel.max - panel.min || 1;
          const at = (value: number) => left + ((value - panel.min) / span) * bars;
          return (
            <g key={panel.measure}>
              <text x={left} y={top + 12} className="fill-text-secondary text-caption">
                {panel.measure}
              </text>
              {(across === 1 || index % across === 0) &&
                cases.map((item, row) => (
                  <text
                    key={item.id}
                    x="0"
                    y={top + HEAD + row * ROW + 19}
                    className={cx(
                      "text-caption",
                      item.control ? "fill-text-secondary" : "fill-text-primary",
                    )}
                  >
                    <title>{item.name}</title>
                    {item.name.length > names / 6.5
                      ? `${item.name.slice(0, Math.floor(names / 6.5) - 1)}…`
                      : item.name}
                  </text>
                ))}
              <line
                x1={at(0)}
                x2={at(0)}
                y1={top + HEAD}
                y2={top + block - 6}
                className="stroke-border-container"
              />
              {panel.cells.map((cell, row) => {
                const y = top + HEAD + row * ROW + 6;
                if (cell.value === null)
                  return (
                    <text key={row} x={left} y={y + 13} className="fill-gap-text text-caption">
                      Not calculated
                    </text>
                  );
                const from = Math.min(at(0), at(cell.value));
                const size = Math.abs(at(cell.value) - at(0));
                return (
                  <g key={row}>
                    <rect
                      x={from}
                      y={y}
                      width={Math.max(1, size)}
                      height="16"
                      rx="2"
                      className={
                        cell.value < 0
                          ? "fill-chart-4"
                          : cases[row]?.control
                            ? "fill-chart-3"
                            : "fill-chart-1"
                      }
                    />
                    <text
                      x={Math.max(at(0), at(cell.value)) + 4}
                      y={y + 12}
                      className="fill-text-primary font-mono text-caption"
                    >
                      {lead(cell.text)}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function StressPart({ view, folder }: { view: ReportView; folder: string }) {
  const name = moduleName("CP-2A");
  const { entry, reason } = moduleSource(view, "CP-2A", name);
  if (!entry || reason)
    return (
      <Part title="Point-in-time stress">
        <ModuleGap entry={entry}>{reason ?? `${name} did not run in this run.`}</ModuleGap>
      </Part>
    );
  const data = downsidePanels(entry);
  if (!data)
    return (
      <Part title="Point-in-time stress">
        <ModuleGap
          entry={entry}
        >{`${name} states no stressed metric that can be drawn.`}</ModuleGap>
      </Part>
    );
  const notes = [
    ...data.assumptions,
    ...data.panels.flatMap((panel) =>
      panel.cells.flatMap((cell, at) => {
        const scenario = data.cases[at]?.name ?? "";
        if (cell.value === null)
          return [`${scenario}, ${panel.measure}: ${cell.reason ?? "not stated"}.`];
        return lead(cell.text) !== cell.text
          ? [`${scenario}, ${panel.measure}: ${cell.text}.`]
          : [];
      }),
    ),
  ];
  return (
    <Part
      title="Point-in-time stress"
      detail={`${name}: one-period stresses, not forecast years; each column one scale from zero`}
      trace={
        <PublishedSource
          href={evidencePath(folder, entry, data.line)}
          name="Point-in-time stress"
          linkLabel="Source for point-in-time stress"
        >
          View source
        </PublishedSource>
      }
    >
      <div role="group" aria-label="Point-in-time stress" className="grid gap-2">
        <StressMultiple cases={data.cases} panels={data.panels} />
        <ul className="grid gap-1 text-caption text-text-secondary">
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </Part>
  );
}

/**
 * What breaks, and when: the funding gap as the liquidity module states it; the model's liquidity
 * path and the maturity schedule, each as its own figure, with the model's own limit between them
 * (the model does not model maturities); the covenant tests as the legal module writes them; then
 * the point-in-time stress.
 */
export function WhatBreaks({
  view,
  folder,
  model,
  handoff,
  group,
  caseName,
  schedule,
  trace,
}: {
  view: ReportView;
  folder: string;
  model: unknown;
  /** The forward model's handoff, for its own limit sentences. */
  handoff?: OutputEntry;
  group: string | undefined;
  caseName: string;
  schedule: BreaksSchedule;
  trace?: ReactNode;
}) {
  const apart = modelLimitation(handoff, /maturit|refinanc/iu);
  const covenant = modelLimitation(handoff, /covenant/iu);
  return (
    <Tile span={4} label="What breaks, and when" title="What breaks, and when" trace={trace}>
      <FundingGapPart view={view} folder={folder} />
      <LiquidityPart model={model} group={group} caseName={caseName} />
      {apart && (
        <p className="rounded-ds-sm border border-info-edge bg-info-fill p-3 text-caption text-info-text">
          {apart}
        </p>
      )}
      <SchedulePart schedule={schedule} />
      <CovenantPart view={view} folder={folder} caveat={covenant} />
      <StressPart view={view} folder={folder} />
    </Tile>
  );
}
