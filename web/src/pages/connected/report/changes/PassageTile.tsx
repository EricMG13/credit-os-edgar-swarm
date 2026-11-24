import type { ReactNode } from "react";
import { evidencePath, type OutputEntry } from "../../publishedReport";
import { PublishedTable } from "../../ReportContent";
import { PublishedSource } from "../PublishedTrace";
import { GapNote, Tile } from "../overview/Tile";
import type { PassageItem } from "./model";

export const LINK =
  "inline-flex min-h-8 items-center text-link text-small underline underline-offset-2 max-[480px]:min-h-11";

/** One written paragraph with its single trace control; a paragraph that cites a source is a link instead. */
function ParagraphLine({ text, href, noun }: { text: string | null; href: string; noun: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      {text === null ? (
        <a className={LINK} href={href}>
          Read this {noun} in Evidence
        </a>
      ) : (
        <p className="reading-copy min-w-0 text-body text-text-primary">{text}</p>
      )}
      {text !== null && (
        <PublishedSource href={href} name={`This ${noun}`}>
          Source
        </PublishedSource>
      )}
    </div>
  );
}

/** The blocks of a passage in order: paragraphs with a trace each, tables with a trace per row. */
export function PassageBody({
  items,
  noun,
  entry,
  folder,
  numbered = false,
}: {
  items: PassageItem[];
  noun: string;
  entry: OutputEntry;
  folder: string;
  numbered?: boolean;
}) {
  const List = numbered ? "ol" : "ul";
  return (
    <List className={numbered ? "grid list-decimal gap-3 pl-5 marker:font-mono" : "grid gap-3"}>
      {items.map((item) => (
        <li
          key={item.kind === "text" ? item.line : item.table.line}
          className={item.kind === "table" ? "list-none -ml-5" : undefined}
        >
          {item.kind === "text" ? (
            <ParagraphLine text={item.text} href={item.href} noun={noun} />
          ) : (
            <PublishedTable
              table={item.table}
              rowSource={(line, label) => (
                <PublishedSource href={evidencePath(folder, entry, line)} name={label}>
                  Source
                </PublishedSource>
              )}
            />
          )}
        </li>
      ))}
    </List>
  );
}

/** A reader passage of the comparison module in its own tile; absent is the designed gap, never blank. */
export function PassageTile({
  span,
  title,
  noun,
  items,
  entry,
  folder,
  tone = "plain",
  numbered = false,
}: {
  span: 5 | 7 | 12;
  title: string;
  noun: string;
  items: PassageItem[] | null;
  entry: OutputEntry;
  folder: string;
  tone?: "plain" | "counter";
  numbered?: boolean;
}) {
  let body: ReactNode;
  if (items === null || items.length === 0)
    body = <GapNote>Not established for this run: the handoff has no such passage.</GapNote>;
  else
    body = (
      <PassageBody items={items} noun={noun} entry={entry} folder={folder} numbered={numbered} />
    );
  return (
    <Tile span={span} label={title} title={title} tone={tone}>
      {body}
    </Tile>
  );
}
