import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { evidencePath, type OutputEntry } from "../../publishedReport";
import { PublishedSource } from "../PublishedTrace";
import { passageParagraphs, type Passage, type RowProps } from "./read";
import { Figure, GapNote, Tile, Well } from "./Tile";

const CONTRARY = "Contrary evidence and what would change the view";
const MISSING = "Not established for this run. The module's handoff has no such passage.";

type Drawn = Pick<RowProps, "run"> & { entry: OutputEntry; passage: Passage };

function Source({ run, entry, passage, name }: Drawn & { name: string }) {
  return (
    <PublishedSource
      href={evidencePath(run.folder, entry, passage.line)}
      name={name}
      linkLabel={`Source for ${name}`}
    >
      View source
    </PublishedSource>
  );
}

/** The module's paragraph, or a link to it where it cites a source by name. */
function Words({ run, entry, passage, className }: Drawn & { className: string }) {
  return passage.text === null ? (
    <Button
      href={evidencePath(run.folder, entry, passage.line)}
      color="link-gray"
      size="sm"
      iconTrailing={ArrowRight}
    >
      Read this passage in Evidence
    </Button>
  ) : (
    <p className={className}>{passage.text}</p>
  );
}

function Findings({ run, entry }: Pick<RowProps, "run"> & { entry: OutputEntry }) {
  const findings = passageParagraphs(entry, "Key findings");
  return (
    <Tile span={7} label="Key findings" title="Key findings" kicker="In the module's own words">
      {findings.length === 0 ? (
        <GapNote>{MISSING}</GapNote>
      ) : (
        <ol className="flex flex-col">
          {findings.map((passage, at) => (
            <li
              key={passage.line}
              className="grid grid-cols-[1.5rem_minmax(0,1fr)_auto] items-start gap-3 border-t border-border-hairline py-2.5"
            >
              <Figure className="pt-0.5 text-caption text-text-tertiary">
                {String(at + 1).padStart(2, "0")}
              </Figure>
              <Words
                run={run}
                entry={entry}
                passage={passage}
                className="text-small text-pretty text-text-primary"
              />
              <Source
                run={run}
                entry={entry}
                passage={passage}
                name={`finding ${String(at + 1)}`}
              />
            </li>
          ))}
        </ol>
      )}
    </Tile>
  );
}

/** The counter-argument: the passage's opening paragraph, on its own surface so it reads as one. */
function Counter({
  run,
  entry,
  first,
}: Pick<RowProps, "run"> & { entry: OutputEntry; first?: Passage }) {
  return (
    <Tile
      span={12}
      label="Contrary evidence"
      title="Contrary evidence"
      tone="counter"
      className="flex-1"
      trace={
        first && <Source run={run} entry={entry} passage={first} name="the contrary evidence" />
      }
    >
      {first ? (
        <blockquote className="border-l-2 border-info-mark pl-4">
          <Words
            run={run}
            entry={entry}
            passage={first}
            className="text-h4 font-medium text-pretty text-text-primary"
          />
        </blockquote>
      ) : (
        <GapNote>{MISSING}</GapNote>
      )}
    </Tile>
  );
}

const NOT_APART =
  "Favourable and adverse outcomes are not written apart in this run; the passage is quoted above.";

/**
 * What would change the view: the passage's further paragraphs as the module wrote them, one well
 * each. Which outcome a paragraph names is the module's to type; it is never labelled here.
 */
function Change({
  run,
  entry,
  first,
  rest,
}: Pick<RowProps, "run"> & { entry: OutputEntry; first?: Passage; rest: Passage[] }) {
  const [next] = rest;
  return (
    <Tile
      span={12}
      label="What would change the view"
      title="What would change the view"
      trace={
        next && <Source run={run} entry={entry} passage={next} name="what would change the view" />
      }
    >
      {!first ? (
        <GapNote>{MISSING}</GapNote>
      ) : rest.length === 0 ? (
        <GapNote>{NOT_APART}</GapNote>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-2">
          {rest.map((passage) => (
            <Well key={passage.line} className="border border-border-hairline">
              <Words
                run={run}
                entry={entry}
                passage={passage}
                className="text-small text-pretty text-text-primary"
              />
            </Well>
          ))}
        </div>
      )}
    </Tile>
  );
}

/**
 * Row 3: the judgement behind the call, in the lead module's words. Findings on the plain surface;
 * the counter-argument on its own surface so it reads as one. Nothing without a credit view: the
 * call tile already says there is none.
 */
function CounterColumn({ run, entry }: Pick<RowProps, "run"> & { entry: OutputEntry }) {
  const [first, ...rest] = passageParagraphs(entry, CONTRARY);
  return (
    <div className="flex min-w-0 flex-col gap-4 lg:col-span-5">
      <Counter run={run} entry={entry} first={first} />
      <Change run={run} entry={entry} first={first} rest={rest} />
    </div>
  );
}

export function JudgementRow({ run, view }: RowProps) {
  if (!view.lead) return null;
  return (
    <>
      <Findings run={run} entry={view.lead} />
      <CounterColumn run={run} entry={view.lead} />
    </>
  );
}
