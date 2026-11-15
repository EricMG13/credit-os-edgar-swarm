import type { ReactNode } from "react";
import { ChartTable } from "@/components/chart/ChartTable";
import { ChartWithTable } from "@/components/chart/ChartWithTable";
import { TRACE_HOST } from "@/pages/library/parts/TraceControl";
import { containsReference } from "../publishedReport";
import { PublishedSource } from "../report/PublishedTrace";
import { usePortfolioBasis } from "../report/PortfolioBasis";
import { portfolioLimits } from "./PortfolioLimits";
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
  primary?: string;
  cards?: boolean;
}

export function LegacyVisuals({
  output,
  sections,
  evidenceHref,
  primary,
  cards,
}: LegacyVisualsProps) {
  const published = record(output);
  const basis = usePortfolioBasis();
  const tables = publishedTables(sections ?? published.sections);
  const drawings = [
    ...byCategory(published, "charts", "chart"),
    ...byCategory(published, "chartGaps", "chart"),
    ...byCategory(published, "events", "event"),
    ...byCategory(published, "maps", "map"),
  ].sort((a, b) => {
    if (primary && a.descriptor.title === primary && b.descriptor.title !== primary) return -1;
    if (primary && b.descriptor.title === primary && a.descriptor.title !== primary) return 1;
    return compareLines(a, b);
  });
  const box = cards ? " rounded-xl border border-border-hairline bg-surface-card p-5" : "";
  const views = drawings.flatMap(({ descriptor, category }): ReactNode[] => {
    const title = word(descriptor.title ?? descriptor.lane ?? descriptor.name);
    const line = descriptor.table;
    if (!title || typeof line !== "number" || !Number.isSafeInteger(line) || line <= 0) return [];
    const link = evidenceHref?.(line);
    const actions = link ? (
      <PublishedSource href={link} name={title}>
        Source table
      </PublishedSource>
    ) : undefined;
    const gap = word(descriptor.gap);
    const key = `${category}-${title}-${String(line)}`;
    if (gap) {
      return [
        <section key={key} className={`${TRACE_HOST} grid min-w-0 gap-2${box}`}>
          <h4 className="font-display text-h4">{title}</h4>
          <p role="note">
            {link && containsReference(gap) ? "Not established for this run. See Evidence." : gap}
          </p>
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
      const attested =
        descriptor.kind === "limits" &&
        link &&
        basis &&
        basis.output === published.id &&
        basis.sha256 === published.sha256 &&
        basis.tableLines.includes(line);
      chart = attested
        ? portfolioLimits(table, basis, frame)
        : publishedChart(table, descriptor, frame);
    } else {
      const drawing = category === "event" ? eventLane(table) : edgeMap(table);
      chart =
        drawing === null ? null : (
          <ChartWithTable {...frame} chart={drawing} table={chartTable(table)} />
        );
    }
    return [
      <div className={`${TRACE_HOST} grid min-w-0 grid-cols-[minmax(0,1fr)] gap-2${box}`} key={key}>
        {chart ?? (
          <>
            <h4 className="font-display text-h4">{title}</h4>
            {actions}
            <p role="note" className="text-small text-text-secondary">
              {category === "chart" && descriptor.kind === "limits"
                ? "Source table available. This report does not record a validated portfolio basis for a chart."
                : "Source table available. The chart could not be drawn on a common basis."}
            </p>
            <ChartTable caption={title} {...chartTable(table)} />
          </>
        )}
      </div>,
    ];
  });
  return views.length === 0 ? null : (
    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-4">{views}</div>
  );
}
