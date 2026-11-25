import type { ReactNode } from "react";
import { moduleName } from "../../api";
import { blocked, evidencePath, withUnit, type OutputEntry } from "../../publishedReport";
import { namedTable } from "../../reportView";
import { figureSource, moduleSource } from "../overview/figureData";
import { DeltaBar } from "../overview/marks";
import { lastTwo, periodSeries } from "../overview/read";
import { Bento, Figure, Tile } from "../overview/Tile";
import { Bullets, leadTests } from "./bullet";
import { withDraws } from "./draws";
import { GapCell, LeadGap, MapTile, Notes, Prose, statedGap, Trace } from "./parts";
import { columnOf, leadHref, mapOf, readerCell, registerTable, sectionParagraphs } from "./read";
import type { LeadProps } from "./types";

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
/**
 * `unplaced`: rows whose direction is neither side, as "<label> (<direction as written>)"; `words`:
 * each side's heading in the module's own word for it, as first written.
 */
type Ledger = {
  strengths: Item[];
  weaknesses: Item[];
  unplaced: string[];
  words: { strengths: string; weaknesses: string };
};

const byRank = (a: Item, b: Item) => a.rank - b.rank;
const rankOf = (text: string) =>
  /^\d+$/.test(text.trim()) ? Number(text) : Number.POSITIVE_INFINITY;
const written = (text: string) => {
  const cell = readerCell(text);
  return cell === "" || cell === "—" || cell === "-" || cell === "In Evidence" ? "" : cell;
};
/** A ledger label as written; one naming a source is in Evidence, a missing one not stated. */
const labelOf = (text: string) => {
  const cell = readerCell(text);
  return cell === "" || cell === "—" || cell === "-" ? "Not stated" : cell;
};

type Sides = Readonly<Record<string, "strengths" | "weaknesses">>;

/** Files an item by the side its direction names, or as not placed with the direction as written. */
function place(ledger: Ledger, sides: Sides, direction: string, item: Item) {
  const key = direction.trim();
  const side = Object.hasOwn(sides, key.toLowerCase()) ? sides[key.toLowerCase()] : undefined;
  if (side && !ledger[side].length) ledger.words[side] = readerCell(key);
  if (side) ledger[side].push(item);
  else ledger.unplaced.push(`${item.label} (${readerCell(key) || "no direction stated"})`);
}

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
  const ledger: Ledger = {
    strengths: [],
    weaknesses: [],
    unplaced: [],
    words: { strengths: "STRENGTH", weaknesses: "WEAKNESS" },
  };
  const sides = { strength: "strengths", weakness: "weaknesses" } as const;
  for (const { cells, line } of found.rows) {
    const item = {
      rank: rankOf(cells[1] ?? ""),
      label: labelOf(cells[2] ?? ""),
      mechanism: written(cells[3] ?? ""),
      line,
    };
    place(ledger, sides, cells[0] ?? "", item);
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
  const ledger: Ledger = {
    strengths: [],
    weaknesses: [],
    unplaced: [],
    words: { strengths: "Positive", weaknesses: "Negative" },
  };
  const sides = { positive: "strengths", negative: "weaknesses" } as const;
  for (const { cells, line } of found.rows) {
    const item = {
      rank: rankOf(cells[at.rank] ?? ""),
      label: labelOf(cells[at.driver] ?? ""),
      mechanism: [at.mechanic, at.implication]
        .map((column) => (column < 0 ? "" : written(cells[column] ?? "")))
        .filter(Boolean)
        .join(" "),
      line,
    };
    place(ledger, sides, cells[at.direction] ?? "", item);
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
        <p className="text-small text-gap-text">None listed.</p>
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
      <Tile
        span={8}
        label="Strengths and weaknesses"
        title="Strengths and weaknesses"
        className="w-full self-start"
      >
        <div className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2">
          <Column title={ledger.words.strengths} items={ledger.strengths} href={href} />
          <Column title={ledger.words.weaknesses} items={ledger.weaknesses} href={href} />
        </div>
        <Notes notes={ledger.unplaced.map((text) => `Not placed: ${text}`)} />
      </Tile>
    );
  const paragraphs = sectionParagraphs(entry, "Strengths and weaknesses");
  if (!paragraphs.length)
    return (
      <LeadGap
        span={8}
        label="Strengths and weaknesses"
        title="Strengths and weaknesses"
        reason="This page could not read strengths and weaknesses."
      />
    );
  return (
    <Tile
      span={8}
      label="Strengths and weaknesses"
      title="Strengths and weaknesses"
      className="w-full self-start"
    >
      <Prose label="Strengths and weaknesses" paragraphs={paragraphs} href={href} />
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
      <dd className="flex min-w-0 flex-col gap-1">{children}</dd>
    </div>
  );
}

const Reason = ({ children }: { children: ReactNode }) => (
  <span className="text-small text-gap-text">{children}</span>
);

const Caption = ({ children }: { children: ReactNode }) => (
  <span className="text-caption wrap-anywhere text-text-secondary">{children}</span>
);

/** A row's own "Basis and limitation" cell in a chart table, as a working page shows it. */
function basisAt(entry: OutputEntry, chart: string, line: number | undefined) {
  const table = namedTable(entry, `Chart data: ${chart}`, ["Period", "Reporting unit"]);
  const column = table ? columnOf(table, "Basis and limitation") : -1;
  const row = table?.rows.find((item) => item.line === line);
  return column < 0 || !row ? "" : readerCell(row.cells[column] ?? "");
}

/** Whether `prior` names the year before `latest`: the same period with its one year less by one. */
function yearBefore(prior: string, latest: string) {
  const years = latest.match(/\d{4}/g) ?? [];
  const [year] = years;
  if (years.length !== 1 || !year) return false;
  return latest.replace(year, String(Number(year) - 1)) === prior;
}

const FINANCIALS = moduleName("CP-1");
const COVENANTS = moduleName("CP-4");

/**
 * One measure of the Financial foundation: its latest figure with its period, basis cell and owner in
 * words. "from <prior>" and the before-to-after mark only when the row before has the same basis and
 * is the year before; otherwise no comparison.
 */
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
  const series = entry && !reason ? periodSeries(entry, chart, heading) : null;
  if (!entry || reason || !series)
    return (
      <Stat name={name}>
        <Reason>{reason ?? `This page could not read ${name} from ${FINANCIALS}.`}</Reason>
      </Stat>
    );
  const { latest, prior } = lastTwo(series);
  if (!latest)
    return (
      <Stat name={name}>
        <Reason>{`This page could not read ${name} from ${FINANCIALS}.`}</Reason>
      </Stat>
    );
  const shown = (cell: string) => withUnit(cell, series.unit);
  const basis = basisAt(entry, chart, latest.line);
  const gap = latest.value === null ? statedGap(readerCell(latest.cell)) : null;
  const before =
    prior &&
    prior.value !== null &&
    latest.value !== null &&
    basisAt(entry, chart, prior.line) === basis &&
    yearBefore(prior.period, latest.period)
      ? { prior, from: prior.value, to: latest.value }
      : null;
  return (
    <Stat
      name={name}
      trace={<Trace href={evidencePath(props.run.folder, entry, latest.line)} name={name} />}
    >
      <Caption>{`${latest.period}, ${FINANCIALS}`}</Caption>
      {latest.value !== null ? (
        <Figure className="text-h3 font-medium">{shown(latest.cell)}</Figure>
      ) : gap ? (
        <GapCell word={gap.word} reason={gap.reason} />
      ) : (
        <GapCell word={readerCell(latest.cell) || "Not stated"} />
      )}
      {basis && <Caption>{basis}</Caption>}
      {before && (
        <>
          <Caption>{`from ${shown(before.prior.cell)} in ${before.prior.period}`}</Caption>
          <div className="w-52 max-w-full">
            <DeltaBar
              from={{
                label: before.prior.period,
                value: before.from,
                text: shown(before.prior.cell),
              }}
              to={{ label: latest.period, value: before.to, text: shown(latest.cell) }}
              tone="none"
              label={`${name}: ${shown(before.prior.cell)} in ${before.prior.period}, ${shown(latest.cell)} in ${latest.period}.`}
            />
          </div>
        </>
      )}
    </Stat>
  );
}

/**
 * The covenant module's own first test: its current and threshold labelled on the shared bullet, its
 * stated gap when it is one, with the owner and the row's basis in words. No other module's measure.
 */
function HeadroomStat({ props }: { props: LeadProps }) {
  const name = "Covenant headroom";
  const source = figureSource(props.view, "CP-4", name, COVENANTS);
  const { reason } = moduleSource(props.view, "CP-4", COVENANTS);
  if (source.state === "gap")
    return (
      <Stat name={name}>
        <Reason>{reason ?? `This page could not read covenant headroom from ${COVENANTS}.`}</Reason>
      </Stat>
    );
  const first = leadTests(source.table, source.descriptor)?.[0];
  if (!first)
    return (
      <Stat name={name}>
        <Reason>{`This page could not read a covenant test from ${COVENANTS}.`}</Reason>
      </Stat>
    );
  const column = source.table.headers.findIndex((header) => /^Basis and limitation$/i.test(header));
  const basis = column < 0 ? "" : readerCell(source.table.rows[0]?.[column] ?? "");
  const line = source.table.rowLines?.[0] ?? source.table.line;
  return (
    <Stat
      name={name}
      trace={<Trace href={evidencePath(props.run.folder, source.entry, line)} name={name} />}
    >
      <Caption>{COVENANTS}</Caption>
      <Bullets label={name} tests={[first]} />
      {basis && <Caption>{basis}</Caption>}
    </Stat>
  );
}

/** CP-2: the credit view in one place: what supports it, what weakens it, and how risk travels. */
export const CreditLead = withDraws(
  function CreditLead(props: LeadProps) {
    const { entry } = props;
    if (blocked(entry)) return null;
    const href = leadHref(props);
    return (
      <Bento>
        <LedgerTile entry={entry} href={href} />
        <Tile
          span={4}
          label="Leverage, cover and headroom"
          title="Leverage, cover and headroom"
          className="w-full self-start"
        >
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
        <MapTile
          map={mapOf(entry, "credit-risk transmission")}
          href={href}
          span={12}
          label="Credit-risk transmission"
          title="Credit-risk transmission"
          absent="This page could not read a credit-risk transmission map."
        />
      </Bento>
    );
  },
  ["maps"],
);
