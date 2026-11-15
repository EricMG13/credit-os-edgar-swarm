import { heading } from "../layout";
import { blocked, evidencePath, type OutputEntry } from "../publishedReport";
import type { buildReportView } from "../reportView";
import { LegacyVisuals } from "../visuals";

const CHART_PREFIX = "Chart data: ";

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
        gap: "Sent back by the build.",
      },
    ];
  });
}

function chartOutput(entry: OutputEntry) {
  const { charts = [], chartGaps = [], parseError, state, summary } = entry.output;
  const withheld = parseError || state?.established === false || blocked(entry);
  const coveredLines = new Set([...charts, ...chartGaps].map(({ table }) => table));
  return {
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
    ],
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
    return [{ id, name, entry, output, at: view.entries.indexOf(entry) }];
  });
  return (
    <section aria-label="Run charts" className="grid min-w-0 gap-4">
      <h3 className={heading}>Run charts</h3>
      {groups.length ? (
        groups.map(({ id, name, entry, output, at }) => (
          <div key={id} className="grid min-w-0 gap-2">
            <a href={`#modules/${encodeURIComponent(id)}`} className="w-fit text-action underline">
              {name}
            </a>
            <LegacyVisuals
              output={output}
              sections={entry.sections}
              evidenceHref={(line) => evidencePath(folder, String(at), line)}
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
