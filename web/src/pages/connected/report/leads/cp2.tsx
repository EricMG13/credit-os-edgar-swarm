import type { ReactNode } from "react";
import { evidencePath, withUnit } from "../../publishedReport";
import { figureSource, moduleSource } from "../overview/figureData";
import { gapReason, lastTwo, periodSeries } from "../overview/read";
import { bulletGeometry, headroomTests } from "../overview/stressData";
import { Bento, Figure, Tile } from "../overview/Tile";
import {
  edgeTable,
  LeadBlocked,
  LeadFigure,
  LeadGap,
  NEEDS,
  NodeList,
  Prose,
  Trace,
} from "./parts";
import {
  blockedReason,
  columnOf,
  leadHref,
  mapOf,
  readerCell,
  registerTable,
  sectionParagraphs,
} from "./read";
import type { LeadProps } from "./types";

const IN_EVIDENCE = "Not assessable; the reason is recorded in Evidence.";
const LEDGER_HEADER = [
  "direction",
  "rank",
  "label",
  "mechanism",
  "evidence_ids",
  "status",
  "source_id",
  "source_locator",
  "as_of",
].join("|");

type Item = { rank: number; label: string; mechanism: string; line: number };
type Ledger = { strengths: Item[]; weaknesses: Item[] };

const byRank = (a: Item, b: Item) => a.rank - b.rank;
const rankOf = (text: string) =>
  /^\d+$/.test(text.trim()) ? Number(text) : Number.POSITIVE_INFINITY;
const written = (text: string) => {
  const cell = readerCell(text);
  return cell === "" || cell === "—" || cell === "-" || cell === "In Evidence" ? "" : cell;
};

/** The typed strengths and weaknesses table, wherever the module put it. */
function typedLedger(entry: LeadProps["entry"]): Ledger | null {
  const found = entry.sections
    .flatMap(({ blocks }) => blocks)
    .find(
      (block) =>
        block.type === "table" &&
        block.headers.map((name) => name.trim().toLowerCase()).join("|") === LEDGER_HEADER,
    );
  if (found?.type !== "table") return null;
  const ledger: Ledger = { strengths: [], weaknesses: [] };
  for (const { cells, line } of found.rows) {
    const direction = (cells[0] ?? "").trim().toUpperCase();
    const item = {
      rank: rankOf(cells[1] ?? ""),
      label: written(cells[2] ?? "") || "In Evidence",
      mechanism: written(cells[3] ?? ""),
      line,
    };
    if (direction === "STRENGTH") ledger.strengths.push(item);
    if (direction === "WEAKNESS") ledger.weaknesses.push(item);
  }
  return ledger;
}

/** The materiality filter split by its Direction column. */
function filterLedger(entry: LeadProps["entry"]): Ledger | null {
  const found = registerTable(entry, "T2.10", ["Rank", "Driver", "Direction"]);
  if (!found) return null;
  const at = {
    rank: columnOf(found, "Rank"),
    driver: columnOf(found, "Driver"),
    direction: columnOf(found, "Direction"),
    mechanic: columnOf(found, "Risk Mechanic"),
    implication: columnOf(found, "Credit Implication"),
  };
  if (at.rank < 0 || at.driver < 0 || at.direction < 0) return null;
  const ledger: Ledger = { strengths: [], weaknesses: [] };
  for (const { cells, line } of found.rows) {
    const direction = (cells[at.direction] ?? "").trim().toLowerCase();
    const item = {
      rank: rankOf(cells[at.rank] ?? ""),
      label: written(cells[at.driver] ?? "") || "In Evidence",
      mechanism: [at.mechanic, at.implication]
        .map((column) => (column < 0 ? "" : written(cells[column] ?? "")))
        .filter(Boolean)
        .join(" "),
      line,
    };
    if (direction === "positive") ledger.strengths.push(item);
    if (direction === "negative") ledger.weaknesses.push(item);
  }
  return ledger;
}

function Column({
  title,
  items,
  href,
}: {
  title: string;
  items: Item[];
  href: (line?: number) => string;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-3">
      <h4 className="text-small font-medium text-text-primary">{title}</h4>
      {items.length ? (
        <ol aria-label={title} className="flex flex-col">
          {[...items].sort(byRank).map((item) => (
            <li
              key={item.line}
              className="flex items-start justify-between gap-3 border-t border-border-hairline py-2.5 first:border-t-0"
            >
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="text-small font-medium wrap-anywhere text-text-primary">
                  {item.label}
                </span>
                {item.mechanism && (
                  <span className="text-small wrap-anywhere text-text-secondary">
                    {item.mechanism}
                  </span>
                )}
              </span>
              <Trace href={href(item.line)} name={item.label} />
            </li>
          ))}
        </ol>
      ) : (
        <p className="text-small text-gap-text">The module lists none.</p>
      )}
    </div>
  );
}

function LedgerTile({
  entry,
  href,
}: {
  entry: LeadProps["entry"];
  href: (line?: number) => string;
}) {
  const ledger = typedLedger(entry) ?? filterLedger(entry);
  if (ledger)
    return (
      <Tile span={8} label="Strengths and weaknesses" title="Strengths against weaknesses">
        <div className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2">
          <Column title="Strengths" items={ledger.strengths} href={href} />
          <Column title="Weaknesses" items={ledger.weaknesses} href={href} />
        </div>
      </Tile>
    );
  const paragraphs = sectionParagraphs(entry, "Strengths and weaknesses");
  if (!paragraphs.length)
    return (
      <LeadGap
        span={8}
        label="Strengths and weaknesses"
        title="Strengths and weaknesses"
        reason="The handoff states no strengths and weaknesses."
        needs={NEEDS.method}
      />
    );
  return (
    <Tile span={8} label="Strengths and weaknesses" title="Strengths and weaknesses">
      <Prose label="Strengths and weaknesses" paragraphs={paragraphs} href={href} />
      <p className="text-caption text-text-secondary">
        A ranked ledger needs the typed strengths and weaknesses table.
      </p>
    </Tile>
  );
}

function Stat({ name, trace, children }: { name: string; trace?: ReactNode; children: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col gap-1 border-t border-border-hairline pt-3 first:border-t-0 first:pt-0">
      <dt className="flex items-start justify-between gap-2 text-caption text-text-tertiary">
        {name}
        {trace}
      </dt>
      <dd className="flex min-w-0 flex-col gap-0.5">{children}</dd>
    </div>
  );
}

const Reason = ({ children }: { children: ReactNode }) => (
  <span className="text-small text-gap-text">{children}</span>
);

function SeriesStat({
  props,
  name,
  chart,
  heading,
}: {
  props: LeadProps;
  name: string;
  chart: string;
  heading: RegExp;
}) {
  const { entry, reason } = moduleSource(props.view, "CP-1", "The financial foundation");
  const series = periodSeries(entry, chart, heading);
  if (!entry || reason || !series)
    return (
      <Stat name={name}>
        <Reason>{reason ?? "The financial foundation handoff has no such table."}</Reason>
      </Stat>
    );
  const { latest, prior } = lastTwo(series);
  const stated = latest?.value != null;
  return (
    <Stat
      name={name}
      trace={<Trace href={evidencePath(props.run.folder, entry, latest?.line)} name={name} />}
    >
      {latest && stated ? (
        <Figure className="text-h3 font-medium">{withUnit(latest.cell, series.unit)}</Figure>
      ) : (
        <Reason>
          {latest?.period ?? "Latest period"}:{" "}
          {(latest && gapReason(latest.cell)) ?? "not supplied"}
        </Reason>
      )}
      {prior?.value != null && (
        <span className="text-caption text-text-secondary">
          {stated ? "from " : "earlier "}
          {withUnit(prior.cell, series.unit)} in {prior.period}
        </span>
      )}
    </Stat>
  );
}

function HeadroomStat({ props }: { props: LeadProps }) {
  const source = figureSource(props.view, "CP-4", "Covenant headroom", "Legal & covenants");
  if (source.state === "gap")
    return (
      <Stat name="Covenant headroom">
        <Reason>{source.reason}</Reason>
      </Stat>
    );
  const tests = headroomTests(source.table, source.descriptor);
  const lead = tests?.find((test) => bulletGeometry(test) !== null);
  if (!lead)
    return (
      <Stat name="Covenant headroom">
        <Reason>The covenant table states no test with both a level and a value.</Reason>
      </Stat>
    );
  const shown = (cell: typeof lead.current) =>
    cell.value === null ? cell.text : withUnit(cell.text, lead.unit);
  return (
    <Stat
      name={`Covenant headroom: ${lead.label}`}
      trace={
        <Trace
          href={evidencePath(props.run.folder, source.entry, source.table.line)}
          name="Covenant headroom"
        />
      }
    >
      <Figure className="text-h3 font-medium">
        {shown(lead.current)}
        <span className="text-text-tertiary"> / {shown(lead.threshold)}</span>
      </Figure>
      {lead.headroom && (
        <span className="text-caption text-text-secondary">{lead.headroom} headroom</span>
      )}
    </Stat>
  );
}

/** CP-2: the credit view in one place: what supports it, what weakens it, and how risk travels. */
export function CreditLead(props: LeadProps) {
  const { entry } = props;
  const href = leadHref(props);
  const reason = blockedReason(entry);
  if (reason !== null || entry.output.state?.established === false)
    return (
      <Bento>
        <LeadBlocked
          span={12}
          label="Fundamental credit"
          title="Fundamental credit"
          reason={reason ?? IN_EVIDENCE}
        />
      </Bento>
    );
  const map = mapOf(entry, "credit-risk transmission");
  return (
    <Bento>
      <LedgerTile entry={entry} href={href} />
      <Tile span={4} label="Leverage, cover and headroom" title="Leverage, cover and headroom">
        <dl className="flex flex-col gap-3">
          <SeriesStat
            props={props}
            name="Total debt / EBITDA"
            chart="leverage"
            heading={/^Total debt \/ EBITDA$/}
          />
          <SeriesStat
            props={props}
            name="EBITDA / cash interest"
            chart="interest cover"
            heading={/^EBITDA \/ cash interest$/}
          />
          <HeadroomStat props={props} />
        </dl>
      </Tile>
      {map.state === "ready" ? (
        <LeadFigure
          span={12}
          label="Credit-risk transmission"
          title="How risk reaches the credit"
          trace={<Trace href={href(map.line)} name="Credit-risk transmission" />}
          figure={<NodeList label="Credit-risk transmission" edges={map.edges} href={href} />}
          table={edgeTable(map.edges, href)}
          notes={["The map does not mark which links add risk and which support the credit."]}
        />
      ) : (
        <LeadGap
          span={12}
          label="Credit-risk transmission"
          title="How risk reaches the credit"
          reason={
            map.state === "gap" ? map.reason : "This handoff has no credit-risk transmission map."
          }
        />
      )}
    </Bento>
  );
}
