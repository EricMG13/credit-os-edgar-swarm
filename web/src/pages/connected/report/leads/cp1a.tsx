import { type Table } from "../../publishedReport";
import { Bento, Tile } from "../overview/Tile";
import { withDraws } from "./draws";
import {
  GapCell,
  KeyValues,
  LaneTile,
  LeadFigure,
  LeadGap,
  MapTile,
  Prose,
  statedGap,
  Trace,
  type LeadTable,
} from "./parts";
import { eventsOf, leadHref, mapOf, sectionParagraphs, drawsNothing } from "./read";
import type { LeadProps } from "./types";
import { sourceOf, writtenTable } from "./written";

type Href = (line?: number) => string;

function Transaction({ entry, href }: { entry: LeadProps["entry"]; href: Href }) {
  const label = "Transaction and new debt";
  const paragraphs = sectionParagraphs(entry, "Transaction summary and new debt issues");
  if (!paragraphs.length)
    return (
      <LeadGap
        span={4}
        label={label}
        title={label}
        reason="This page could not read a transaction summary."
      />
    );
  return (
    <Tile span={4} label={label} title={label} className="w-full self-start">
      <Prose label={label} paragraphs={paragraphs} href={href} />
    </Tile>
  );
}

const MIX = "Revenue mix";

/** The module's revenue and business mix register: the one table under its heading, as written. */
function mixTable(entry: LeadProps["entry"]) {
  const tables = entry.sections
    .filter((section) => /^revenue_business_mix\b/i.test(section.heading.trim()))
    .flatMap(({ blocks }) => blocks)
    .filter((block): block is Table => block.type === "table");
  return tables.length === 1 ? tables[0] : undefined;
}

/** A cell as written, or its stated gap ("Not supplied: …") as the one gap chip with its reason. */
function MixCell({ text }: { text: string }) {
  const gap = statedGap(text);
  if (gap) return <GapCell word={gap.word} reason={gap.reason} />;
  return text ? <span className="text-text-primary">{text}</span> : <GapCell word="Not stated" />;
}

/** The revenue mix as the module writes it, row by row with each cell, and the table as written. */
function RevenueMix({ entry, href }: { entry: LeadProps["entry"]; href: Href }) {
  const register = mixTable(entry);
  const table = register ? writtenTable(sourceOf(register), href) : undefined;
  if (!register || !table)
    return (
      <LeadGap
        span={4}
        label={MIX}
        title={MIX}
        reason="This page could not read the revenue mix."
      />
    );
  const [, ...columns] = table.head;
  return (
    <LeadFigure
      span={4}
      label={MIX}
      title={MIX}
      trace={<Trace href={href(register.line)} name={MIX} />}
      figure={
        <ul aria-label={MIX} className="flex flex-col">
          {table.rows.map((row, at) => (
            <li
              key={at}
              className="flex items-start justify-between gap-3 border-t border-border-hairline py-2.5 first:border-t-0 first:pt-0"
            >
              {columns.length === 1 ? (
                <KeyValues
                  className="min-w-0 flex-1"
                  items={[{ key: row.label, value: <MixCell text={cellText(row.cells[0])} /> }]}
                />
              ) : (
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="text-small font-medium text-text-primary">{row.label}</span>
                  <KeyValues
                    items={columns.map((name, column) => ({
                      key: name,
                      value: <MixCell text={cellText(row.cells[column])} />,
                    }))}
                  />
                </span>
              )}
              {row.end}
            </li>
          ))}
        </ul>
      }
      table={table}
    />
  );
}

/** A written table's cell as text; a missing one reads as nothing. */
const cellText = (cell: LeadTable["rows"][number]["cells"][number] | undefined) =>
  typeof cell === "string" ? cell : "";

/** The column beside a tall first tile: the page's shorter tiles stacked, so the two columns end near each other. */
const COLUMN = "flex min-w-0 flex-col gap-4 lg:col-span-4";

/** CP-1A: what the business is, who controls it, and what the deal changed. */
export const BusinessLead = withDraws(
  function BusinessLead(props: LeadProps) {
    const { entry } = props;
    if (drawsNothing(entry)) return null;
    const href = leadHref(props);
    const operating = mapOf(entry, "operating model to credit");
    const ownership = mapOf(entry, "ownership and control");
    const map = (read: typeof operating, name: string, absent: string) => (span: 8 | 12) => (
      <MapTile map={read} href={href} span={span} label={name} title={name} absent={absent} />
    );
    const opMap = map(
      operating,
      "Operating model to credit",
      "This page could not read the operating model.",
    );
    const ownMap = map(
      ownership,
      "Ownership and control",
      "This page could not read who owns and controls the issuer.",
    );
    const shorter = [
      <RevenueMix key="mix" entry={entry} href={href} />,
      <Transaction key="deal" entry={entry} href={href} />,
      <LaneTile
        key="history"
        lane={eventsOf(entry, "Issuer history")}
        span={4}
        label="Issuer history"
        title="Issuer history"
        href={href}
      />,
    ];
    const column = <div className={COLUMN}>{shorter}</div>;
    // The first drawn map heads the page with the shorter tiles stacked beside it; a map that is
    // only a gap is one full row.
    return (
      <Bento>
        {operating.state === "ready" ? (
          <>
            {opMap(8)}
            {column}
            {ownMap(12)}
          </>
        ) : (
          <>
            {opMap(12)}
            {ownMap(ownership.state === "ready" ? 8 : 12)}
            {ownership.state === "ready" ? column : shorter}
          </>
        )}
      </Bento>
    );
  },
  ["maps", "events"],
);
