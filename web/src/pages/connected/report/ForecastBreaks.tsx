import type { ReactNode } from "react";
import { BarCell } from "@/components/kit/BarCell";
import { moduleName } from "../api";
import { evidencePath, unitLabel } from "../publishedReport";
import type { ReportView } from "../reportView";
import { cellsOf, fiscalYear, forecastMeasure, type MeasureCell } from "./forecastData";
import { moduleSource } from "./overview/figureData";
import { downsidePanels } from "./overview/stressData";
import { GapNote, Tile, Well } from "./overview/Tile";
import type { PathWall } from "../visuals/ForecastPath";
import { PublishedSource } from "./PublishedTrace";

/** A stress cell's leading figure; the cell's qualification in brackets is listed in full below. */
const leading = (text: string) => text.split(" (")[0] ?? text;

/** The selected case's last liquidity cell in a year at or before the wall. */
function liquidityBefore(model: unknown, group: string | undefined, year: number) {
  const measure = forecastMeasure(model, /^Accessible liquidity$/u);
  if (!measure) return null;
  const cells = cellsOf(measure, group).filter((cell) => (fiscalYear(cell.period) ?? 0) <= year);
  return cells.at(-1) ?? null;
}

function Figures({
  liquidity,
  wall,
  sameUnit,
}: {
  liquidity: MeasureCell | null;
  wall: NonNullable<PathWall["wall"]>;
  sameUnit: boolean;
}) {
  const amount = wall.cell?.value ?? null;
  const most = Math.max(amount ?? 0, liquidity?.value ?? 0);
  const share = (value: number | null) =>
    sameUnit && value !== null && value >= 0 && most > 0 ? value / most : null;
  return (
    <dl className="grid gap-3">
      <div className="grid gap-1">
        <dt className="text-caption text-text-tertiary">
          Accessible liquidity, {liquidity?.period ?? "no forecast year before the wall"}
        </dt>
        <dd>
          {liquidity && liquidity.value !== null ? (
            <BarCell text={liquidity.display} share={share(liquidity.value)} />
          ) : (
            <span className="text-small text-gap-text">
              {liquidity?.reason || "Not published for this case"}
            </span>
          )}
        </dd>
      </div>
      <div className="grid gap-1">
        <dt className="text-caption text-text-tertiary">Debt maturing, {wall.label}</dt>
        <dd>
          <BarCell text={wall.cell?.text ?? ""} share={share(amount)} tone="secondary" />
        </dd>
      </div>
    </dl>
  );
}

function WallPart({
  model,
  group,
  wall,
  units,
}: {
  model: unknown;
  group: string | undefined;
  wall: PathWall;
  units: string;
}) {
  const at = wall.wall;
  if (!at) return <GapNote>{wall.reason ?? "The maturity schedule names no wall."}</GapNote>;
  const liquidity = liquidityBefore(model, group, at.year);
  // One scale only for like with like: the same unit, and liquidity from the year before the wall.
  const unitsMatch = Boolean(units) && unitLabel(units) === unitLabel(wall.unit ?? "");
  const adjacent = at.year - (fiscalYear(liquidity?.period ?? "") ?? 0) <= 1;
  const sameUnit = unitsMatch && adjacent;
  const apart = !unitsMatch
    ? `The two figures are not drawn on one scale: the model's units (${unitLabel(units) || "not recorded"}) and the schedule's (${unitLabel(wall.unit ?? "") || "not recorded"}) are not stated as the same.`
    : "The two figures are not drawn on one scale: the last forecast year is not the year before the wall.";
  return (
    <>
      <Figures liquidity={liquidity} wall={at} sameUnit={sameUnit} />
      {!sameUnit && <p className="text-caption text-text-secondary">{apart}</p>}
      <GapNote>No module states a shortfall figure at the wall.</GapNote>
    </>
  );
}

function StressPart({ view, folder }: { view: ReportView; folder: string }) {
  const name = moduleName("CP-2A");
  const { entry, reason } = moduleSource(view, "CP-2A", name);
  if (!entry || reason) return <GapNote>{reason}</GapNote>;
  const data = downsidePanels(entry);
  if (!data) return <GapNote>{`${name} states no stressed metric that can be drawn.`}</GapNote>;
  const qualified = data.panels.flatMap((panel) =>
    panel.cells.flatMap((cell, at) =>
      cell.value !== null && leading(cell.text) !== cell.text
        ? [`${data.cases[at]?.name ?? ""}, ${panel.measure}: ${cell.text}.`]
        : [],
    ),
  );
  const gaps = data.panels.flatMap((panel) =>
    panel.cells.flatMap((cell, at) =>
      cell.value === null
        ? [`${data.cases[at]?.name ?? ""}, ${panel.measure}: ${cell.reason ?? "not stated"}.`]
        : [],
    ),
  );
  return (
    <div role="group" aria-label="Point-in-time stress" className="grid gap-3">
      <div className="flex items-start justify-between gap-2">
        <div className="grid gap-0.5">
          <h4 className="text-small font-medium text-text-primary">Point-in-time stress</h4>
          <p className="text-caption text-text-secondary">
            {name}: one-period stresses, not forecast years
          </p>
        </div>
        <PublishedSource
          href={evidencePath(folder, entry, data.line)}
          name="Point-in-time stress"
          linkLabel="Source for point-in-time stress"
        >
          View source
        </PublishedSource>
      </div>
      {data.panels.map((panel) => {
        const most = Math.max(...panel.cells.map((cell) => Math.abs(cell.value ?? 0)));
        return (
          <Well key={panel.measure} className="grid gap-2">
            <h5 className="text-caption font-medium text-text-secondary">{panel.measure}</h5>
            <ul className="grid gap-1.5">
              {panel.cells.map((cell, at) => {
                const scenario = data.cases[at];
                return (
                  <li
                    key={scenario?.id ?? at}
                    className="grid grid-cols-[minmax(0,9.5rem)_minmax(0,1fr)] items-center gap-2"
                  >
                    <span className="text-caption text-text-secondary">{scenario?.name}</span>
                    {cell.value === null ? (
                      <span className="text-caption text-gap-text">Not calculated</span>
                    ) : (
                      <BarCell
                        text={leading(cell.text)}
                        share={most > 0 ? Math.abs(cell.value) / most : null}
                        tone={cell.value < 0 ? "signal" : scenario?.control ? "prior" : "primary"}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </Well>
        );
      })}
      <ul className="grid gap-1 text-caption text-text-secondary">
        {[...data.assumptions, ...qualified, ...gaps].map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

/** What breaks, and when: liquidity against the wall, then the point-in-time stress. */
export function WhatBreaks({
  view,
  folder,
  model,
  group,
  caseName,
  wall,
  units,
  trace,
}: {
  view: ReportView;
  folder: string;
  model: unknown;
  group: string | undefined;
  caseName: string | undefined;
  wall: PathWall;
  units: string;
  trace?: ReactNode;
}) {
  return (
    <Tile
      span={4}
      label="What breaks, and when"
      kicker={`${caseName ?? "Selected case"} · liquidity at the maturity wall, then stress`}
      title="What breaks, and when"
      trace={trace}
    >
      <WallPart model={model} group={group} wall={wall} units={units} />
      <StressPart view={view} folder={folder} />
    </Tile>
  );
}
