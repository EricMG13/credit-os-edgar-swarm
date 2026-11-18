import { memo } from "react";
import { Button } from "@/components/base/buttons/button";
import { ArrowRight } from "@untitledui/icons";
import { heading } from "../layout";
import {
  blocked,
  containsReference,
  evidencePath,
  type OutputEntry,
  readerText,
} from "../publishedReport";
import type { buildReportView } from "../reportView";
import { LegacyVisuals } from "../visuals";

const CHART_PREFIX = "Chart data: ";

// A page citation: "p.12", "p 12", "(p12)", "pp. 12-14", "pg. 12", "page 12", "pages 12 to 14",
// also after a year ("2025 page 83"). Not a page: a "pp" after a number is percentage points
// ("fell 2 pp. 3", "two pp. 3"); a "p" inside a word or after "&", "." or "-" ("app. 3", "S&P. 3",
// "p.p. 3", "one-page"); a four-digit number is a year ("front page 2025").
const PAGE_CITATION =
  /(?<![\w&.-])(?:p|pg|(?<!(?:\d|\b(?:one|two|three|four|five|six|seven|eight|nine|ten))\s*)pp|pages?)\.?\s*\d{1,3}(?!\d)/i;

const citesSource = (text: string) => PAGE_CITATION.test(text) || containsReference(text);

/**
 * A gap as the page draws it. A reason that cites a page or holds another source reference is held
 * back as "See Evidence." (L16): the gap panel still states the figure is missing, and the figure's
 * trace control reaches the reason unchanged. Any other reason is drawn whole, with a module code
 * named as the module.
 */
function drawnGap(figure: Record<string, unknown>) {
  const { gap } = figure;
  if (typeof gap !== "string") return figure;
  return { ...figure, gap: citesSource(gap) ? "See Evidence." : readerText(gap) };
}

function returnedCharts(entry: OutputEntry, coveredLines: Set<number>) {
  const problems = new Set(entry.output.issue?.split("; "));
  return entry.sections.flatMap(({ heading, blocks }) => {
    if (!heading.startsWith(CHART_PREFIX) || !problems.has(`${heading} is not in its fixed table`))
      return [];
    const block = blocks.find(({ type }) => type === "table");
    if (!block || coveredLines.has(block.line)) return [];
    const name = heading.slice(CHART_PREFIX.length);
    return [
      {
        title: name.charAt(0).toUpperCase() + name.slice(1),
        table: block.line,
        gap: "The chart data did not fit the required table form, so no chart is drawn.",
      },
    ];
  });
}

function chartOutput(entry: OutputEntry) {
  const { charts = [], chartGaps = [], parseError, state, summary } = entry.output;
  const withheld = parseError || state?.established === false || blocked(entry);
  const coveredLines = new Set([...charts, ...chartGaps].map(({ table }) => table));
  return {
    id: entry.output.id,
    sha256: entry.output.sha256,
    charts: withheld ? [] : charts,
    chartGaps: [
      ...chartGaps,
      ...returnedCharts(entry, coveredLines),
      ...(withheld
        ? charts.map((chart) =>
            // A held-back limitation is reached through the figure's trace control, so that control
            // opens the limitation's own line rather than the chart's data table.
            summary?.limitation
              ? {
                  ...chart,
                  gap: summary.limitation,
                  ...(citesSource(summary.limitation) && { table: summary.line }),
                }
              : { ...chart, gap: "Module not assessable." },
          )
        : []),
    ].map(drawnGap),
  };
}

export const RunCharts = memo(function RunCharts({
  view,
  folder,
}: {
  view: ReturnType<typeof buildReportView>;
  folder: string;
}) {
  const groups = view.modules.flatMap(({ id, name, outputs }) => {
    const entry =
      outputs.find(({ selected }) => selected) ?? (outputs.length === 1 ? outputs[0] : undefined);
    if (!entry) return [];
    const output = chartOutput(entry);
    if (!output.charts.length && !output.chartGaps.length) return [];
    return [{ id, name, entry, output }];
  });
  return (
    <section aria-label="Run charts" className="grid min-w-0 gap-4">
      <h3 className={heading}>Run charts</h3>
      {groups.length ? (
        groups.map(({ id, name, entry, output }) => (
          <div key={id} className="grid min-w-0 gap-2">
            <Button
              className="w-fit"
              href={`#modules/${encodeURIComponent(id)}`}
              color="link-gray"
              size="sm"
              iconTrailing={ArrowRight}
            >
              {name}
            </Button>
            <LegacyVisuals
              output={output}
              sections={entry.sections}
              evidenceHref={(line) => evidencePath(folder, entry, line)}
              cards
            />
          </div>
        ))
      ) : (
        <p>No charts were published for this run.</p>
      )}
    </section>
  );
});
