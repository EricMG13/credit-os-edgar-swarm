import { useId, useState } from "react";
import { ArrowRight, ChevronDown, ChevronRight } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { StatusBadge } from "@/components/status/StatusBadge";
import { TextLink } from "../../run/TextLink";
import { HeadlineFigures } from "../HeadlineFigures";
import { reportPath, withUnit } from "../publishedReport";
import { PublishedSource } from "../report/PublishedTrace";
import { asOfDate } from "../runFigures";
import { CreditView } from "./CreditView";
import { FigureMark } from "./FigureMark";
import { figureSource, useFigureTrace } from "./figureTrace";
import type { IssuerGroup } from "./group";
import { useNextEvent } from "./nextEvent";

/** The columns of a row on a wide screen; below it a row stacks and each cell names itself. */
export const ROW_COLUMNS =
  "xl:grid-cols-[minmax(15rem,1.6fr)_8rem_repeat(3,minmax(7.5rem,1fr))_minmax(10rem,1.1fr)_minmax(9.5rem,1fr)]";

const CELL_LABEL = "text-caption text-text-tertiary xl:sr-only";

/** What is not known, in the chip's place: dashed, hatched, with the reason in words. */
function GapChip({ children }: { children: string }) {
  return (
    <span className="gap-hatch inline-flex w-fit rounded-ds-xs border border-dashed border-border-gap">
      <span className="m-px rounded-ds-xs bg-surface-card px-2 py-1 text-caption text-gap-text">
        {children}
      </span>
    </span>
  );
}

function StateChip({ group }: { group: IssuerGroup }) {
  if (group.state === "Test preview") return <Badge color="brand">Test preview</Badge>;
  if (group.state === "Delivered") return <StatusBadge set="Module state" state="Delivered" />;
  return <Badge color="gray">No report published</Badge>;
}

function Runs({ group }: { group: IssuerGroup }) {
  return (
    <ol className="grid gap-2">
      {group.entries.map((entry, index) => {
        const open = group.openable.has(entry.id);
        return (
          <li key={entry.id} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-small">
            <time className="font-mono text-text-primary tabular-nums" dateTime={entry.date}>
              {asOfDate(entry.date)}
            </time>
            <span className="text-text-secondary">{entry.title}</span>
            {index === 0 && <Badge color="gray">Latest</Badge>}
            {open ? (
              <TextLink href={reportPath(entry.id)} className="whitespace-normal">
                {`Open report of ${asOfDate(entry.date)}`}
              </TextLink>
            ) : (
              <span className="text-text-tertiary">Not published</span>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function NextEventDetail({ folder }: { folder: string | undefined }) {
  const next = useNextEvent(folder, true);
  if (!folder)
    return <p className="text-small text-gap-text">No report is published to read dates from.</p>;
  if (next.status === "loading")
    return (
      <p role="status" className="text-small text-text-secondary">
        Loading dates…
      </p>
    );
  if (next.status === "failed")
    return (
      <p className="text-small text-gap-text">Dates could not be loaded. Open the Calendar.</p>
    );
  if (next.status === "unknown")
    return (
      <p className="text-small text-gap-text">
        This run’s dates could not be read against its as-of date. Open the Calendar.
      </p>
    );
  if (next.status !== "found")
    return <p className="text-small text-gap-text">The report states no upcoming dated event.</p>;
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-small">
      <time className="font-mono text-text-primary tabular-nums">{next.event.date}</time>
      <span className="text-text-secondary">{next.event.name}</span>
      <PublishedSource
        href={next.event.href}
        name={next.event.name}
        linkLabel={`Source for ${next.event.name}`}
      >
        View source
      </PublishedSource>
    </p>
  );
}

/**
 * One issuer: its newest run's three headline figures, stance slot, run chips and the next-event
 * slot in one row; the row opens to the credit view, every run, the next dated event and all
 * headline figures.
 */
export function IssuerRow({ group }: { group: IssuerGroup }) {
  const [open, setOpen] = useState(false);
  const panel = useId();
  const { newest, linked, published, pathway, entries } = group;
  const trace = useFigureTrace(newest);
  const { metrics } = newest;
  const runs = `${String(entries.length)} ${entries.length === 1 ? "run" : "runs"}`;
  return (
    <li className="rounded-ds-lg border border-border-subtle bg-surface-card">
      <div
        className={`grid gap-x-4 gap-y-4 p-4 sm:p-5 md:grid-cols-3 xl:items-start ${ROW_COLUMNS}`}
      >
        <div className="flex min-w-0 items-start gap-2 md:col-span-3 xl:col-span-1">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={open ? panel : undefined}
            aria-label={`${open ? "Hide" : "Show"} runs and detail for ${newest.name}`}
            onClick={() => {
              setOpen((was) => !was);
            }}
            className="-ml-1 flex min-h-8 min-w-8 flex-none cursor-pointer items-center justify-center rounded-ds-sm text-text-tertiary outline-focus-ring hover:bg-surface-subtle hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 max-[480px]:min-h-11 max-[480px]:min-w-11"
          >
            {open ? (
              <ChevronDown aria-hidden className="size-4" />
            ) : (
              <ChevronRight aria-hidden className="size-4" />
            )}
          </button>
          <div className="grid min-w-0 gap-1 wrap-anywhere">
            <h3 className="font-display text-h4 text-text-primary">
              {linked && group.state !== "No report published" ? (
                <TextLink href={reportPath(linked.id)} className="text-left whitespace-normal">
                  {newest.name}
                </TextLink>
              ) : (
                newest.name
              )}
            </h3>
            {newest.sector && <p className="text-small text-text-secondary">{newest.sector}</p>}
            {linked ? (
              <TextLink href={`${reportPath(linked.id)}#history`}>{runs}</TextLink>
            ) : (
              <span className="text-caption text-text-tertiary">{runs}</span>
            )}
          </div>
        </div>
        <div className="flex min-w-0 flex-col gap-1 md:col-span-3 xl:col-span-1">
          <span className={CELL_LABEL}>Stance</span>
          <GapChip>Stance not stated</GapChip>
        </div>
        <FigureMark name="Net leverage" metricKey="net_leverage" figure={metrics.net_leverage}>
          {metrics.net_leverage && trace.button("net_leverage", "Net leverage", newest.name)}
        </FigureMark>
        <FigureMark name="Interest cover" metricKey="coverage" figure={metrics.coverage}>
          {metrics.coverage && trace.button("coverage", "Interest cover", newest.name)}
        </FigureMark>
        <FigureMark name="Liquidity (cash)" metricKey="cash" figure={metrics.cash}>
          {metrics.cash && trace.button("cash", "Liquidity", newest.name)}
          {metrics.undrawn?.value != null && metrics.undrawn.value !== "" && (
            <span className="text-caption text-text-secondary">
              Undrawn:{" "}
              <span className="font-mono tabular-nums">
                {withUnit(metrics.undrawn.value, metrics.undrawn.unit)}
              </span>
            </span>
          )}
        </FigureMark>
        <div className="flex min-w-0 flex-wrap items-center gap-2 md:col-span-3 xl:col-span-1">
          <span className={`${CELL_LABEL} w-full`}>Run</span>
          <Badge color="gray">{pathway || "Pathway not recorded"}</Badge>
          <Badge color="gray">
            <time className="font-mono tabular-nums" dateTime={newest.date}>
              {asOfDate(newest.date)}
            </time>
          </Badge>
          <StateChip group={group} />
        </div>
        <div className="flex min-w-0 flex-col gap-1 md:col-span-3 xl:col-span-1">
          <span className={CELL_LABEL}>Next event</span>
          {linked ? (
            <TextLink href={`${reportPath(linked.id)}#calendar`}>Open Calendar</TextLink>
          ) : (
            <span className="text-small text-gap-text">Needs a published report</span>
          )}
        </div>
      </div>
      {trace.notes}
      {open && (
        <div
          id={panel}
          className="grid gap-6 border-t border-border-hairline p-4 sm:p-5 lg:grid-cols-2"
        >
          <section
            aria-label={`Credit view, ${newest.name}`}
            className="grid min-w-0 content-start gap-2"
          >
            <h4 className="text-small font-medium text-text-primary">Credit view</h4>
            <CreditView run={published} />
          </section>
          <section aria-label={`Runs, ${newest.name}`} className="grid min-w-0 content-start gap-2">
            <h4 className="text-small font-medium text-text-primary">Runs, newest first</h4>
            <Runs group={group} />
          </section>
          <section
            aria-label={`Stance, ${newest.name}`}
            className="grid min-w-0 content-start gap-2"
          >
            <h4 className="text-small font-medium text-text-primary">Stance</h4>
            <p className="text-small text-gap-text">
              The committee decision does not yet state its stance as a field, so the Library does
              not read one from the credit view.
            </p>
          </section>
          <section
            aria-label={`Next dated event, ${newest.name}`}
            className="grid min-w-0 content-start gap-2"
          >
            <h4 className="text-small font-medium text-text-primary">Next dated event</h4>
            <NextEventDetail folder={linked?.id} />
          </section>
          <section
            aria-label={`Headline figures, ${newest.name}`}
            className="grid min-w-0 gap-2 lg:col-span-2"
          >
            <h4 className="text-small font-medium text-text-primary">Headline figures</h4>
            <HeadlineFigures
              key={newest.id}
              catalogue={newest}
              requestSource={(key, signal) => figureSource(newest, key, signal)}
            />
          </section>
          {linked && (
            <div className="lg:col-span-2">
              <Button href={reportPath(linked.id)} color="secondary" iconTrailing={ArrowRight}>
                Open report
              </Button>
            </div>
          )}
        </div>
      )}
    </li>
  );
}
