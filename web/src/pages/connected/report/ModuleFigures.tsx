import { Fragment, type FC, type ReactNode } from "react";
import { cx } from "@/utils/cx";
import { evidencePath, type OutputEntry, type PublishedRun } from "../publishedReport";
import { runMoneyUnit, type ReportView } from "../reportView";
import { LegacyVisuals } from "../visuals";
import { BreakPoints, breakPointView } from "./BreakPoints";
import { Downside, downsideView } from "./Downside";
import type { LeadProps } from "./leads/types";
import { MacroSensitivity, macroView } from "./MacroSensitivity";
import type { DrawingGap, FigureKind } from "./moduleFrame";
import { DrawingGapTile } from "./ModuleProse";
import { Tile } from "./overview/Tile";
import { Securities, securityView } from "./Securities";

/**
 * A lead visual, and the kinds of the module's own visuals it draws itself. The frame keeps
 * drawing, after the lead, every kind the lead does not list. (Typed here until the coordinator
 * adds `draws` to `leads/types.ts`.)
 */
export type DrawingLead = FC<LeadProps> & { draws?: readonly FigureKind[] };

/** The kinds the frame still draws beside this lead: all of them when there is no lead. */
export function framed(lead: DrawingLead | undefined): ReadonlySet<FigureKind> {
  const drawn = new Set<FigureKind>(lead?.draws ?? []);
  return new Set((["figures", "events", "maps"] as const).filter((kind) => !drawn.has(kind)));
}

/** The module's own typed figures and the tables they draw, read once per page. */
export function moduleFigures(entry: OutputEntry, run: PublishedRun) {
  const downside = downsideView(entry);
  const breaks = breakPointView(entry);
  const macro = macroView(entry);
  const securities = securityView(entry, run.asOf);
  const tableLines = [securities?.summaryLine, securities?.outcomes?.line].filter(
    (line) => line !== undefined,
  );
  return { downside, breaks, macro, securities, tableLines };
}

type Cell = { key: string; node: (span: 6 | 12) => ReactNode };

/** Whether the handoff holds the table a drawing is drawn from; without it nothing is drawn. */
const hasTable = (entry: OutputEntry, line: number) =>
  entry.sections.some(({ blocks }) =>
    blocks.some((block) => block.type === "table" && block.line === line),
  );

/** The drawings of one kind the frame draws: a gap is a limitation, and a drawing needs its table. */
function drawable(entry: OutputEntry, items: (Record<string, unknown> & { table: number })[] = []) {
  return items.filter((item) => !item.gap && hasTable(entry, item.table));
}

/** One published drawing (an event lane, a map, the attested portfolio limits) in its own tile. */
function drawingCell(
  entry: OutputEntry,
  folder: string,
  slot: "charts" | "events" | "maps",
  descriptor: Record<string, unknown> & { table: number },
): Cell {
  const named = [descriptor.title, descriptor.lane, descriptor.name].find(
    (value) => typeof value === "string",
  );
  const title = typeof named === "string" ? named : "Figure";
  const output = {
    ...entry.output,
    charts: [],
    chartGaps: [],
    events: [],
    maps: [],
    [slot]: [descriptor],
  };
  return {
    key: `${slot}-${String(descriptor.table)}`,
    node: (span) => (
      <Tile span={span} label={title}>
        <LegacyVisuals
          output={output}
          sections={entry.sections}
          headingLevel="h3"
          evidenceHref={(line) => evidencePath(folder, entry, line)}
        />
      </Tile>
    ),
  };
}

/** A module figure that draws its own tile; it sits in the bento as one cell. */
function figureCell(key: string, figure: ReactNode): Cell {
  return {
    key,
    node: (span) => (
      <div className={cx("grid min-w-0", span === 6 ? "lg:col-span-6" : "lg:col-span-12")}>
        {figure}
      </div>
    ),
  };
}

function typedCells(
  entry: OutputEntry,
  run: PublishedRun,
  view: ReportView,
  figures: ReturnType<typeof moduleFigures>,
): Cell[] {
  const { downside, breaks, macro, securities } = figures;
  const href = (line: number) => evidencePath(run.folder, entry, line);
  const limits = drawable(entry, entry.output.charts).filter(({ kind }) => kind === "limits");
  return [
    ...(downside ? [figureCell("downside", <Downside data={downside} href={href} />)] : []),
    ...(breaks ? [figureCell("breaks", <BreakPoints data={breaks} href={href} />)] : []),
    ...(macro ? [figureCell("macro", <MacroSensitivity data={macro} href={href} />)] : []),
    ...(securities
      ? [
          figureCell(
            "securities",
            <Securities data={securities} href={href} runUnit={runMoneyUnit(view.catalogue)} />,
          ),
        ]
      : []),
    // The portfolio limits are drawn only when attested against the mandate; LegacyVisuals says so.
    ...limits.map((descriptor) => drawingCell(entry, run.folder, "charts", descriptor)),
  ];
}

/**
 * The module's own visuals the frame draws: its typed figures and the attested portfolio limits,
 * its event lanes and relationship maps, and the visuals it said it could not draw, each kind
 * only where the lead does not draw it. Two or more sit two to a row.
 */
export function ModuleFigures({
  entry,
  run,
  view,
  figures,
  kinds,
  gaps,
}: {
  entry: OutputEntry;
  run: PublishedRun;
  view: ReportView;
  figures: ReturnType<typeof moduleFigures>;
  kinds: ReadonlySet<FigureKind>;
  gaps: readonly DrawingGap[];
}) {
  const cells: Cell[] = [
    ...(kinds.has("figures") ? typedCells(entry, run, view, figures) : []),
    ...(kinds.has("events")
      ? drawable(entry, entry.output.events).map((item) =>
          drawingCell(entry, run.folder, "events", item),
        )
      : []),
    ...(kinds.has("maps")
      ? drawable(entry, entry.output.maps).map((item) =>
          drawingCell(entry, run.folder, "maps", item),
        )
      : []),
    ...gaps
      .filter(({ kind }) => kinds.has(kind))
      .map((gap) => ({
        key: `gap-${String(gap.line)}`,
        node: (span: 6 | 12) => (
          <DrawingGapTile gap={gap} entry={entry} folder={run.folder} span={span} />
        ),
      })),
  ];
  const span = cells.length > 1 ? 6 : 12;
  return cells.map((cell, at) => {
    // A cell left alone in the last row takes the row.
    const own = span === 6 && at === cells.length - 1 && cells.length % 2 === 1 ? 12 : span;
    return <Fragment key={cell.key}>{cell.node(own)}</Fragment>;
  });
}
