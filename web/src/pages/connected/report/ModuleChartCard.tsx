import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import type { OutputEntry } from "../publishedReport";
import { evidencePath } from "../publishedReport";
import { LegacyVisuals } from "../visuals";

export type ModuleChartCardData = {
  id: string;
  name: string;
  entry: OutputEntry;
  output: unknown;
};

/** A chart group links to its owning module and retains the line-level source trace. */
export function ModuleChartCard({
  chart,
  folder,
  headingLevel,
}: {
  chart: ModuleChartCardData;
  folder: string;
  headingLevel?: "h3" | "h4";
}) {
  const { id, name, entry, output } = chart;
  return (
    <div className="grid min-w-0 gap-2">
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
        headingLevel={headingLevel}
      />
    </div>
  );
}
