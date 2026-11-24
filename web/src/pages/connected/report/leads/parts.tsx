import { useState, type ReactNode } from "react";
import { ChartTable, type TableRowData } from "@/components/chart/ChartTable";
import { Segmented } from "@/components/kit/Segmented";
import { StatusBadge } from "@/components/status/StatusBadge";
import { cx } from "@/utils/cx";
import { PublishedSource } from "../PublishedTrace";
import { GapNote, Tile, Well } from "../overview/Tile";
import type { Edge, Paragraph } from "./read";

type Span = Parameters<typeof Tile>[0]["span"];

/** The one trace control of a figure, row or paragraph. */
export function Trace({ href, name }: { href: string; name: string }) {
  return (
    <PublishedSource href={href} name={name} linkLabel={`Source for ${name}`}>
      View source
    </PublishedSource>
  );
}

export type LeadTable = { head: string[]; rows: TableRowData[]; endHeading?: string };

const VIEWS = [
  { key: "figure", label: "Figure" },
  { key: "table", label: "Table" },
] as const;

/**
 * A lead tile: the reading as its title, the basis once, a legend, one trace control, and the
 * figure with its table behind a Figure / Table switch.
 */
export function LeadFigure({
  span,
  label,
  kicker,
  title,
  basis,
  legend,
  trace,
  figure,
  table,
  notes,
  className,
}: {
  span: Span;
  label: string;
  kicker?: ReactNode;
  title: ReactNode;
  basis?: string;
  legend?: ReactNode;
  trace?: ReactNode;
  figure: ReactNode;
  table?: LeadTable;
  /** The module's own words on the figure's basis or its gaps, under the figure. */
  notes?: readonly ReactNode[];
  className?: string;
}) {
  const [view, setView] = useState<string>("figure");
  const showing = table && view === "table" ? "table" : "figure";
  return (
    <Tile
      span={span}
      label={label}
      kicker={kicker}
      title={title}
      trace={trace}
      className={className}
    >
      {(basis !== undefined || legend !== undefined || table !== undefined) && (
        <div className="-mt-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <div className="flex min-w-0 flex-col gap-2">
            {basis && <p className="text-caption text-text-tertiary">{basis}</p>}
            {legend && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">{legend}</div>
            )}
          </div>
          {table && (
            <Segmented
              label={`${label}: figure or table`}
              segments={VIEWS}
              current={showing}
              onSelect={setView}
            />
          )}
        </div>
      )}
      {showing === "table" && table ? (
        <ChartTable
          caption={label}
          head={table.head}
          rows={table.rows}
          endHeading={table.endHeading}
        />
      ) : (
        figure
      )}
      {notes && notes.length > 0 && (
        <ul className="flex flex-col gap-1.5 border-t border-border-hairline pt-3 text-caption text-text-secondary">
          {notes.map((note, at) => (
            <li key={at} className="wrap-anywhere">
              {note}
            </li>
          ))}
        </ul>
      )}
    </Tile>
  );
}

/** What unlocks a gap, in the reader's words. */
export const NEEDS = {
  method: "Needs a typed table in the module's handoff: a methodology change.",
  proof: "Built from the module's contract; to be proven on a real run.",
  input: (what: string) => `Needs ${what} supplied at run start.`,
} as const;

/** A lead tile whose figure the run does not carry: the reason in words, in the figure's place. */
export function LeadGap({
  span,
  label,
  kicker,
  title,
  reason,
  needs,
  children,
}: {
  span: Span;
  label: string;
  kicker?: ReactNode;
  title: ReactNode;
  reason: string;
  needs?: string;
  children?: ReactNode;
}) {
  return (
    <Tile span={span} label={label} kicker={kicker} title={title}>
      <GapNote>{reason}</GapNote>
      {needs && <p className="text-caption text-text-secondary">{needs}</p>}
      {children}
    </Tile>
  );
}

/** The reason without a leading "Not assessable", which the badge already says. */
function withoutState(reason: string) {
  const rest = reason.replace(/^not assessable\s*[,:;.]\s*/i, "");
  return rest ? rest.charAt(0).toUpperCase() + rest.slice(1) : reason;
}

/** The longest reason set as a lead; a longer one reads as body text. */
const LEAD_REASON = 160;

/** A module that could not run, in place of its lead: Not assessable, why, and what would fix it. */
export function LeadBlocked({
  span,
  label,
  title,
  reason,
  unlock,
}: {
  span: Span;
  label: string;
  title: ReactNode;
  reason: string;
  unlock?: string;
}) {
  const shown = withoutState(reason);
  return (
    <Tile
      span={span}
      label={label}
      title={title}
      className="border-dashed border-warning-edge bg-surface-card"
    >
      <div className="flex flex-col gap-3">
        <StatusBadge set="Module state" state="Not assessable" className="w-fit" />
        <p
          className={cx(
            "text-balance text-text-primary",
            shown.length <= LEAD_REASON ? "text-lead" : "text-body",
          )}
        >
          {shown}
        </p>
        {unlock && <p className="text-small text-text-secondary">{unlock}</p>}
      </div>
    </Tile>
  );
}

/** A node map as lists: each source node once, in the order the module wrote it, its edges under it. */
export function NodeList({
  label,
  edges,
  href,
}: {
  label: string;
  edges: readonly Edge[];
  href?: (line: number) => string;
}) {
  const nodeOf = (edge: Edge) => edge.key ?? edge.from;
  const nodes = [...new Map(edges.map((edge) => [nodeOf(edge), edge.from])).entries()];
  return (
    <ul aria-label={label} className="flex min-w-0 flex-col gap-3">
      {nodes.map(([node, name]) => (
        <li key={node} className="flex min-w-0 flex-col gap-2">
          <h4 className="w-fit max-w-full rounded-ds-sm border border-border-control bg-surface-card px-3 py-1.5 text-small font-medium wrap-anywhere text-text-primary">
            {name}
          </h4>
          <ul className="ml-4 flex flex-col gap-2 border-l border-connector pl-4">
            {edges
              .filter((edge) => nodeOf(edge) === node)
              .map((edge) => (
                <li key={edge.line} className="relative flex min-w-0 flex-col gap-0.5">
                  <span
                    aria-hidden="true"
                    className="absolute top-2.5 -left-4 h-px w-3 bg-connector"
                  />
                  <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span className="text-small text-text-secondary">→</span>
                    <span className="text-small font-medium wrap-anywhere text-text-primary">
                      {edge.to}
                    </span>
                    <span className="rounded-ds-xs border border-border-hairline px-1.5 text-caption text-text-tertiary">
                      {edge.type}
                    </span>
                    {href && <Trace href={href(edge.line)} name={`${edge.from} to ${edge.to}`} />}
                  </span>
                  <span className="text-small wrap-anywhere text-text-secondary">
                    {edge.relationship}
                  </span>
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

/** The table form of a node map. */
export function edgeTable(edges: readonly Edge[], href?: (line: number) => string): LeadTable {
  return {
    head: ["From", "Relationship", "Edge type", "To"],
    rows: edges.map((edge) => ({
      label: edge.from || "Not stated",
      cells: [edge.relationship || null, edge.type || null, edge.to || null],
      end: href ? <Trace href={href(edge.line)} name={`${edge.from} to ${edge.to}`} /> : undefined,
    })),
    endHeading: href ? "Source" : undefined,
  };
}

export type DatedItem = {
  date: string;
  precision: string;
  event: string;
  status: string;
  line: number;
};

/** Dated events, earliest first, each date at the precision the module states. */
export function DatedList({
  label,
  events,
  href,
}: {
  label: string;
  events: readonly DatedItem[];
  href?: (line: number) => string;
}) {
  return (
    <ol aria-label={label} className="flex flex-col">
      {events.map((item) => {
        const cut = item.status.indexOf(" — ");
        const kind = cut < 0 ? item.status : item.status.slice(0, cut);
        const detail = cut < 0 ? "" : item.status.slice(cut + 3);
        return (
          <li
            key={item.line}
            className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-3 border-t border-border-hairline py-2.5 first:border-t-0"
          >
            <span className="font-mono text-small text-text-primary tabular-nums">{item.date}</span>
            <span className="flex min-w-0 flex-col gap-0.5">
              <span className="flex items-start justify-between gap-2 text-small wrap-anywhere text-text-primary">
                {item.event}
                {href && <Trace href={href(item.line)} name={item.event} />}
              </span>
              <span className="text-caption text-text-tertiary">
                <span>{kind}</span>
                {detail ? ` · ${detail}` : ""}
              </span>
            </span>
          </li>
        );
      })}
    </ol>
  );
}

/** A module-written passage, paragraph by paragraph, each with its trace. */
export function Prose({
  label,
  paragraphs,
  href,
  className,
}: {
  label: string;
  paragraphs: readonly Paragraph[];
  href?: (line: number) => string;
  className?: string;
}) {
  return (
    <Well className={cx("flex flex-col gap-3", className)}>
      {paragraphs.map((paragraph, at) => (
        <div key={paragraph.line} className="flex items-start justify-between gap-3">
          <p
            className={cx(
              "min-w-0 text-small wrap-anywhere",
              paragraph.text === null ? "text-gap-text" : "text-text-primary",
            )}
          >
            {paragraph.text ?? "This paragraph cites its sources by name; it is in Evidence."}
          </p>
          {href && (
            <Trace href={href(paragraph.line)} name={`${label}, paragraph ${String(at + 1)}`} />
          )}
        </div>
      ))}
    </Well>
  );
}
