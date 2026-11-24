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

/** One paragraph of a passage in a well, with its own trace control. */
function PassageWell({ run, entry, passage, name }: Drawn & { name: string }) {
  return (
    <Well className="flex items-start justify-between gap-2 border border-info-edge bg-surface-card">
      <Words
        run={run}
        entry={entry}
        passage={passage}
        className="text-small text-pretty text-text-primary"
      />
      <Source run={run} entry={entry} passage={passage} name={name} />
    </Well>
  );
}

/**
 * The counter-argument, under the module's own heading and on its own surface: the opening
 * paragraph as the quote, every further paragraph as written in its own well with its own trace.
 */
function Counter({
  run,
  entry,
  paragraphs,
}: Pick<RowProps, "run"> & { entry: OutputEntry; paragraphs: Passage[] }) {
  const [first, ...rest] = paragraphs;
  return (
    <Tile
      span={12}
      label={CONTRARY}
      title={CONTRARY}
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
      {rest.map((passage, at) => (
        <PassageWell
          key={passage.line}
          run={run}
          entry={entry}
          passage={passage}
          name={`paragraph ${String(at + 2)} of the contrary evidence`}
        />
      ))}
    </Tile>
  );
}

const OUTCOMES = "What would change the view";
const NOT_TYPED =
  "The two outcomes, resolved favourably and resolved adversely, are not typed in this run; the module's passage is quoted above as written.";

/**
 * What would change the view, as two outcomes: the module writes it inside the counter passage,
 * so until it types the two outcomes apart this place is the designed gap. Which paragraph names
 * which outcome is the module's to say, never the page's.
 */
function Outcomes() {
  return (
    <Tile span={12} label={OUTCOMES} title={OUTCOMES}>
      <GapNote>{NOT_TYPED}</GapNote>
    </Tile>
  );
}

/**
 * Row 3: the judgement behind the call, in the lead module's words. Findings on the plain surface;
 * the counter-argument on its own surface so it reads as one. Nothing without a credit view: the
 * call tile already says there is none.
 */
function CounterColumn({ run, entry }: Pick<RowProps, "run"> & { entry: OutputEntry }) {
  return (
    <div className="flex min-w-0 flex-col gap-4 lg:col-span-5">
      <Counter run={run} entry={entry} paragraphs={passageParagraphs(entry, CONTRARY)} />
      <Outcomes />
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
