import type { ReactNode } from "react";
import { ChartTable } from "@/components/chart/ChartTable";
import { ChartWithTable } from "@/components/chart/ChartWithTable";
import { publishedChart } from "./charts";
import { edgeMap } from "./EdgeMap";
import { eventLane } from "./EventLane";
import { chartTable, items, publishedTables, record, word } from "./visualData";

export { LegacyForecast } from "./LegacyForecast";

type Drawing = { descriptor: Record<string, unknown>; category: "chart" | "event" | "map" };

function byCategory(
  output: Record<string, unknown>,
  key: string,
  category: Drawing["category"],
): Drawing[] {
  return items(output[key]).map((raw) => ({ descriptor: record(raw), category }));
}

function compareLines(a: Drawing, b: Drawing) {
  return (
    (typeof a.descriptor.table === "number" ? a.descriptor.table : 0) -
    (typeof b.descriptor.table === "number" ? b.descriptor.table : 0)
  );
}

interface LegacyVisualsProps {
  output: unknown;
  sections?: unknown;
  evidenceHref?: (line: number) => string;
}

export function LegacyVisuals({ output, sections, evidenceHref }: LegacyVisualsProps) {
  const published = record(output);
  const tables = publishedTables(sections ?? published.sections);
  const drawings = [
    ...byCategory(published, "charts", "chart"),
    ...byCategory(published, "chartGaps", "chart"),
    ...byCategory(published, "events", "event"),
    ...byCategory(published, "maps", "map"),
  ].sort(compareLines);
  const views = drawings.flatMap(({ descriptor, category }): ReactNode[] => {
    const title = word(descriptor.title ?? descriptor.lane ?? descriptor.name);
    const line = descriptor.table;
    if (!title || typeof line !== "number" || !Number.isSafeInteger(line) || line <= 0) return [];
    const link = evidenceHref?.(line);
    const actions = link ? (
      <a className="text-small text-action underline" href={link}>
        Source table
      </a>
    ) : undefined;
    const gap = word(descriptor.gap);
    const key = `${category}-${title}-${String(line)}`;
    if (gap) {
      return [
        <section key={key} className="grid gap-2">
          <h4 className="font-display text-h4">{title}</h4>
          <p role="note">{gap}</p>
          {actions}
        </section>,
      ];
    }
    const publishedTable = tables.get(line);
    if (!publishedTable) return [];
    const table = { ...publishedTable, evidenceInDrawer: Boolean(link) };
    const note = word(descriptor.unit) || undefined;
    const frame = { title, note, actions };
    let chart: ReactNode;
    if (category === "chart") {
      chart = publishedChart(table, descriptor, frame);
    } else {
      const drawing = category === "event" ? eventLane(table) : edgeMap(table);
      chart =
        drawing === null ? null : (
          <ChartWithTable {...frame} chart={drawing} table={chartTable(table)} />
        );
    }
    return [
      <div className="grid min-w-0 gap-2" key={key}>
        {chart ?? (
          <>
            <h4 className="font-display text-h4">{title}</h4>
            {actions}
            <ChartTable caption={title} {...chartTable(table)} />
          </>
        )}
      </div>,
    ];
  });
  return views.length === 0 ? null : <div className="grid min-w-0 gap-8">{views}</div>;
}
