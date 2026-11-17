import { Button } from "@/components/base/buttons/button";
import { ArrowRight } from "@untitledui/icons";
import { heading } from "../layout";
import { blocked, evidencePath, type OutputEntry, readerText } from "../publishedReport";
import type { buildReportView } from "../reportView";
import { LegacyVisuals } from "../visuals";

const CHART_PREFIX = "Chart data: ";
const PAGE_REFERENCE = /\bpp?\.\s*\d/;

/** A gap as the page draws it: the reason names a module, and a reason that cites a page points to Evidence. */
function drawnGap(figure: Record<string, unknown>) {
  const { gap } = figure;
  if (typeof gap !== "string") return figure;
  return { ...figure, gap: PAGE_REFERENCE.test(gap) ? "See Evidence." : readerText(gap) };
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
        ? charts.map((chart) => ({
            ...chart,
            gap: summary?.limitation || "Module not assessable.",
          }))
        : []),
    ].map(drawnGap),
  };
}

export function RunCharts({
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
}
