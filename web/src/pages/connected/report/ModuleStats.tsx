import { StatsStrip, type Stat } from "@/components/kit/StatsStrip";
import { TraceControl } from "@/pages/library/parts/TraceControl";
import {
  blocked,
  containsReference,
  readerText,
  withUnit,
  type CatalogueRun,
  type OutputEntry,
} from "../publishedReport";
import { headlineSources, stated, type HeadlineSource } from "../reportView";
import { changeText, tone } from "../signal";
import { PublishedSource } from "./PublishedTrace";

/** The headline figures the Overview and Library draw, in their order and names. */
const HEADLINE = [
  ["net_leverage", "Net leverage"],
  ["leverage", "Gross leverage"],
  ["coverage", "Interest coverage"],
  ["revenue", "Revenue"],
  ["adjusted_ebitda", "Adjusted EBITDA"],
  ["cash", "Cash"],
] as const;

type Figure = CatalogueRun["metrics"][string];

/** The coverage figure's name where its basis is reported EBITDA over cash interest on debt. */
function nameOf(key: string, name: string, figure: Figure | undefined) {
  const debtCashInterest =
    key === "coverage" &&
    /^LTM reported EBITDA over LTM cash interest for debt(?: [\d.,]+)?(?:;|$)/iu.test(
      figure?.basis ?? "",
    );
  return debtCashInterest ? "Reported EBITDA / cash interest on debt" : name;
}

/** The period and basis the figure is stated on, as the catalogue states them. */
function basisLine(figure: Figure) {
  const basis = figure.basis?.trim();
  const shown = basis && !containsReference(basis) ? readerText(basis) : "";
  return [figure.period, shown].filter(Boolean).join(" · ");
}

function trace(name: string, source: HeadlineSource | undefined) {
  return source ? (
    <PublishedSource href={source.href} name={name}>
      Source
    </PublishedSource>
  ) : (
    <TraceControl trace={null} label={`Show sources for ${name}`} />
  );
}

/** A figure the catalogue does not state: the module's own words only where its row says so. */
function gapWords(source: HeadlineSource | undefined) {
  if (source?.reason === undefined) return "Not shown here";
  return containsReference(source.reason) ? "Not supplied" : readerText(source.reason);
}

function stat(
  key: string,
  label: string,
  figure: Figure | undefined,
  source?: HeadlineSource,
): Stat {
  const name = nameOf(key, label, figure);
  if (!stated(figure))
    return { label: name, value: null, gap: gapWords(source), trace: trace(name, source) };
  const direction = figure.change == null ? "none" : tone(key, figure.change);
  const basis = basisLine(figure);
  return {
    label: name,
    value: withUnit(figure.value, figure.unit),
    ...(figure.prior && {
      prior: `${withUnit(figure.prior.value, figure.unit)} in ${figure.prior.period}`,
    }),
    ...(figure.prior && figure.change != null && { delta: changeText(figure.change, figure.unit) }),
    ...((direction === "better" || direction === "worse") && { tone: direction }),
    ...(basis && { mark: <span className="text-caption text-text-tertiary">{basis}</span> }),
    trace: trace(name, source),
  };
}

/** The CP-1 headline figures from the run's catalogue, each with its period and basis. */
function headlineStats(
  entry: OutputEntry,
  catalogue: CatalogueRun | undefined,
  folder: string,
): Stat[] {
  if (!catalogue || entry.output.module !== "CP-1" || blocked(entry)) return [];
  if (!HEADLINE.some(([key]) => stated(catalogue.metrics[key]))) return [];
  const sources = headlineSources(entry, catalogue, folder);
  return HEADLINE.map(([key, label]) => stat(key, label, catalogue.metrics[key], sources[key]));
}

/** The module's headline figures as one strip, or nothing where the run states none. */
export function ModuleStats({
  entry,
  catalogue,
  folder,
}: {
  entry: OutputEntry;
  catalogue: CatalogueRun | undefined;
  folder: string;
}) {
  const stats = headlineStats(entry, catalogue, folder);
  if (!stats.length) return null;
  return (
    <div className="min-w-0 lg:col-span-12">
      <StatsStrip label="Headline figures" stats={stats} />
    </div>
  );
}
