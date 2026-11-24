import { useCallback, type ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { DownloadButton } from "@/pages/library/parts/DownloadButton";
import { TRACE_HOST } from "@/pages/library/parts/TraceControl";
import { readerText, unitLabel } from "../publishedReport";
import { useResource } from "../useResource";
import { ForecastScope, type forecastCaseOptions } from "../visuals/LegacyForecast";
import type { ForecastSource } from "./ForecastRecord";
import { Tile } from "./overview/Tile";

type FileLink = { label: string; href: string };

/** The run's calculation JSON for this model, as the artifacts listing publishes it. */
function CalculationDownload({ folder, model }: { folder: string; model: string }) {
  const load = useCallback(
    async (signal: AbortSignal) => {
      const response = await fetch(`/connected/artifacts/${encodeURIComponent(folder)}`, {
        signal,
      });
      if (!response.ok) throw new Error("The calculation file could not be listed.");
      const data = (await response.json()) as { files?: FileLink[] };
      if (!Array.isArray(data.files)) throw new Error("The calculation file could not be listed.");
      return data.files;
    },
    [folder],
  );
  const { value, error } = useResource(load);
  // Whatever the failure, the reader is told the same thing in words; the detail is not drawn.
  if (error)
    return (
      <p className="text-small text-text-secondary">The calculation file could not be listed.</p>
    );
  if (!value)
    return (
      <p role="status" className="text-small text-text-secondary">
        Listing the calculation file…
      </p>
    );
  const file = value.find(
    ({ label, href }) => label === "Calculation JSON" && href.includes(`/${model}/`),
  );
  return (
    <DownloadButton
      color="secondary"
      download={
        file
          ? { label: "Download calculation", href: file.href, reason: null }
          : {
              label: "Download calculation",
              href: null,
              reason: "No calculation file is listed for this model.",
            }
      }
    />
  );
}

/** Scope and limits, then the published model and its calculation download. */
export function ForecastScopeTiles({
  model,
  folder,
  source,
  note,
  register,
  select,
}: {
  model: { id: string };
  folder: string;
  source?: ForecastSource;
  note?: ReactNode;
  register: boolean;
  select?: ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-4 lg:col-span-4">
      <Tile
        span={4}
        label="Scope and limits"
        title="Scope and limits"
        kicker="What this forecast can and cannot show"
      >
        <div className="grid min-w-0 gap-3 wrap-anywhere">
          <ForecastScope model={model} source={source} />
          {note}
          {register && (
            <Button href="#evidence/record" color="link-gray" size="sm" className="w-fit">
              View model records in Evidence
            </Button>
          )}
        </div>
      </Tile>
      <Tile
        span={4}
        label="Published model"
        title="Published model"
        kicker="The model, its charts and the calculation are part of this report"
      >
        <div className="flex flex-wrap items-end gap-3">
          {select}
          <CalculationDownload folder={folder} model={model.id} />
        </div>
      </Tile>
    </div>
  );
}

type CaseOption = ReturnType<typeof forecastCaseOptions>[number];

const rounded = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

/** Each case's latest cash proxy as the model publishes it, with its period, description and reason. */
export function CaseFigures({
  options,
  shownQualifications,
  source,
}: {
  options: CaseOption[];
  shownQualifications: string[];
  source?: ForecastSource;
}) {
  const [first] = options;
  if (!first || options.length < 2) return null;
  return (
    // The list carries the accessible name; this wrapper is the deep-link target only.
    <div
      id="forecast-cases"
      tabIndex={-1}
      className="grid min-w-0 scroll-mt-4 content-start gap-3 wrap-anywhere focus:outline-2 focus:outline-offset-2 focus:outline-focus"
    >
      <div className="grid gap-0.5">
        <h4 id="forecast-case-heading" className="text-small font-medium text-text-primary">
          Forecast cases
        </h4>
        <p id="forecast-case-measure" className="text-caption text-text-secondary">
          Cash proxy · each case&apos;s recorded period · {unitLabel(first.units)}
        </p>
      </div>
      <ul
        aria-label="Forecast cases"
        aria-describedby="forecast-case-measure forecast-case-note"
        className="grid min-w-0 divide-y divide-border-hairline rounded-ds-sm border border-border-hairline"
      >
        {options.map(
          ({ name, rawGroup, period, periodStart, periodEnd, value, description, reason }) => (
            <li key={name} className={`${TRACE_HOST} relative grid min-w-0 gap-1 px-4 py-3 pr-12`}>
              <span className="text-small font-medium text-text-primary">{name}</span>
              <span className="font-mono text-h4 text-text-primary tabular-nums">
                {typeof value === "number" ? rounded.format(value) : "n.a."}
              </span>
              {period && (
                <span className="text-caption text-text-secondary">
                  {period}
                  {periodStart && periodEnd ? ` · ${periodStart} to ${periodEnd}` : ""}
                </span>
              )}
              {(!description || !shownQualifications.includes(description)) && (
                <span className="text-caption text-text-secondary">
                  {description || "Case description not recorded."}
                </span>
              )}
              {reason && (
                <span className="text-caption text-text-secondary">{readerText(reason)}</span>
              )}
              <span className="absolute top-2 right-2">
                {source?.(name, {
                  case: name,
                  rawGroup,
                  rawGroups: [rawGroup],
                  period,
                  row: "Cash proxy (not issuer free cash flow)",
                  periodStart,
                  periodEnd,
                })}
              </span>
            </li>
          ),
        )}
      </ul>
      {first.comparisonNotice && (
        <p role="status" className="text-caption text-text-secondary">
          {first.comparisonNotice}
        </p>
      )}
      <p id="forecast-case-note" className="text-caption text-text-secondary">
        Case figures are rounded to at most 2 decimals.
      </p>
    </div>
  );
}
