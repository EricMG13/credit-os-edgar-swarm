import type { ReactNode } from "react";
import { PublishedSource } from "../PublishedTrace";
import { GapNote, Tile } from "../overview/Tile";
import type { Paragraph } from "./model";

const LINK = "text-link text-small underline underline-offset-2 max-[480px]:py-3";

/** One written paragraph with its single trace control; a paragraph that cites a source is a link instead. */
function ParagraphLine({ item, noun }: { item: Paragraph; noun: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      {item.text === null ? (
        <a className={LINK} href={item.href}>
          Read this {noun} in Evidence
        </a>
      ) : (
        <p className="reading-copy min-w-0 text-body text-text-primary">{item.text}</p>
      )}
      {item.text !== null && (
        <PublishedSource href={item.href} name={`This ${noun}`}>
          Source
        </PublishedSource>
      )}
    </div>
  );
}

/** A reader passage of the comparison module in its own tile; absent is the designed gap, never blank. */
export function PassageTile({
  span,
  title,
  noun,
  paragraphs,
  tone = "plain",
  numbered = false,
}: {
  span: 5 | 7 | 12;
  title: string;
  noun: string;
  paragraphs: Paragraph[] | null;
  tone?: "plain" | "counter";
  numbered?: boolean;
}) {
  let body: ReactNode;
  if (paragraphs === null || paragraphs.length === 0)
    body = <GapNote>Not established for this run: the handoff has no such passage.</GapNote>;
  else {
    const List = numbered ? "ol" : "ul";
    body = (
      <List
        className={numbered ? "grid list-decimal gap-3 pl-5 marker:font-mono" : "grid gap-3"}
        aria-label={title}
      >
        {paragraphs.map((item) => (
          <li key={item.line}>
            <ParagraphLine item={item} noun={noun} />
          </li>
        ))}
      </List>
    );
  }
  return (
    <Tile span={span} label={title} title={title} tone={tone}>
      {body}
    </Tile>
  );
}
