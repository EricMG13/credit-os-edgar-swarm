import { Missing } from "@/components/gap/Missing";
import { TRACE_HOST } from "@/pages/library/parts/TraceControl";
import type { CatalogueRun } from "./publishedReport";
import { readerText, withUnit } from "./publishedReport";
import { PublishedSource } from "./report/PublishedTrace";
import { YearChange } from "./report/YearChange";
import { stated, type HeadlineSource } from "./reportView";

const metricLabels = [
  ["net_leverage", "Net leverage"],
  ["leverage", "Gross leverage"],
  ["coverage", "Interest coverage"],
  ["revenue", "Revenue"],
  ["adjusted_ebitda", "Adjusted EBITDA"],
  ["cash", "Cash"],
] as const;

const tile = `${TRACE_HOST} rounded-ds-md border border-border-hairline bg-surface-card p-4`;
/** The label leaves room for the control at the tile's top right. */
const label = (source?: HeadlineSource) => `text-sm text-text-secondary${source ? " pr-9" : ""}`;

/** The one trace control of a tile, when the handoff row it is read from is known. */
function TileSource({ name, source }: { name: string; source?: HeadlineSource }) {
  return source ? (
    <dd className="absolute top-3.5 right-3.5">
      <PublishedSource href={source.href} name={name}>
        Source
      </PublishedSource>
    </dd>
  ) : null;
}

/** A figure the module did not supply: n.a. in its place with the module's reason, never a zero. */
function GapTile({ name, source }: { name: string; source?: HeadlineSource }) {
  return (
    <div className={tile}>
      <dt className={label(source)}>{name}</dt>
      <dd className="mt-1 font-display text-h3 whitespace-nowrap">
        <Missing />
      </dd>
      <dd className="text-sm text-text-secondary">
        {source?.reason ? readerText(source.reason) : "Not supplied"}
      </dd>
      {source && <dd className="text-sm text-text-secondary">{source.period}</dd>}
      <TileSource name={name} source={source} />
    </div>
  );
}

export function HeadlineFigures({
  catalogue,
  sources = {},
}: {
  catalogue?: CatalogueRun;
  /** Where each figure is read from in the handoff, by metric key; none on a card that holds no handoff. */
  sources?: Partial<Record<string, HeadlineSource>>;
}) {
  if (!metricLabels.some(([key]) => stated(catalogue?.metrics[key]))) return null;
  return (
    <dl className="grid grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] gap-3">
      {metricLabels.map(([key, name]) => {
        const figure = catalogue?.metrics[key];
        const source = sources[key];
        if (!stated(figure)) return <GapTile key={name} name={name} source={source} />;
        return (
          <div className={tile} key={name}>
            <dt className={label(source)}>{name}</dt>
            <dd className="mt-1 font-display text-h3 whitespace-nowrap tabular-nums">
              {withUnit(figure.value, figure.unit)}
            </dd>
            {figure.prior && figure.change != null && (
              <dd>
                <YearChange
                  metricKey={key}
                  change={figure.change}
                  unit={figure.unit}
                  prior={figure.prior.period}
                />
              </dd>
            )}
            {figure.period && <dd className="text-sm text-text-secondary">{figure.period}</dd>}
            <TileSource name={name} source={source} />
          </div>
        );
      })}
    </dl>
  );
}
