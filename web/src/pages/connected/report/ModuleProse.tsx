import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import { FindingParagraph } from "../ReportContent";
import {
  containsReference,
  evidencePath,
  readParagraph,
  readerText,
  type OutputEntry,
} from "../publishedReport";
import { traceKey } from "../reportView";
import { richParts } from "../richText";
import { typedModuleTable } from "./ModuleTable";
import { Anchor, ANCHOR, HeldTrace } from "./ModuleFrame";
import type { DrawingGap, ProseSection } from "./moduleFrame";
import { GapNote, Tile } from "./overview/Tile";

/** A section this long reads in two columns on a wide screen; a shorter one shares its row. */
const LONG = 180;

type Placed = { prose: ProseSection; span: 6 | 12 };

/** Short sections pair up side by side; a long one, or a short one left alone, takes the row. */
export function placeProse(prose: readonly ProseSection[]): Placed[] {
  const placed: Placed[] = [];
  let open: Placed | null = null;
  for (const item of prose) {
    const short = item.words <= LONG && !item.typed.length;
    if (!short) {
      if (open) open.span = 12;
      open = null;
      placed.push({ prose: item, span: 12 });
      continue;
    }
    const next: Placed = { prose: item, span: 6 };
    placed.push(next);
    open = open ? null : next;
  }
  if (open) open.span = 12;
  return placed;
}

function TypedTables({ prose, entry }: { prose: ProseSection; entry: OutputEntry }) {
  return prose.typed.map((table) => (
    <div key={table.line} className="min-w-0">
      {typedModuleTable(entry.output.module, prose.section.heading, table, (line) =>
        traceKey(entry, line),
      )}
    </div>
  ));
}

function ProseTile({
  placed,
  entry,
  folder,
}: {
  placed: Placed;
  entry: OutputEntry;
  folder: string;
}) {
  const { prose, span } = placed;
  const id = ANCHOR.section(prose.section.line);
  // A section of typed tables only is drawn by those tables, which carry its heading and region.
  if (!prose.paragraphs.length)
    return (
      <div id={id} tabIndex={-1} className="grid min-w-0 gap-4 lg:col-span-12">
        <TypedTables prose={prose} entry={entry} />
      </div>
    );
  const columns = span === 12 && prose.words > LONG;
  return (
    <Tile
      span={span}
      label={prose.title}
      title={
        <Anchor id={id}>
          <span className="first-letter:uppercase">{prose.title}</span>
        </Anchor>
      }
    >
      <div className={cx("min-w-0", columns ? "gap-x-10 lg:columns-2 [&>*]:mb-4" : "grid gap-4")}>
        {prose.paragraphs.map((block) => (
          <div key={block.line} className="break-inside-avoid [&_.reading-copy]:max-w-none">
            <FindingParagraph
              block={block}
              trace={traceKey(entry, block.line)}
              href={evidencePath(folder, entry, block.line)}
            />
          </div>
        ))}
      </div>
      <TypedTables prose={prose} entry={entry} />
    </Tile>
  );
}

/** The module's other reader sections as prose tiles, in handoff order. */
export function ProseTiles({
  prose,
  entry,
  folder,
}: {
  prose: readonly ProseSection[];
  entry: OutputEntry;
  folder: string;
}) {
  return placeProse(prose).map((placed) => (
    <ProseTile key={placed.prose.section.line} placed={placed} entry={entry} folder={folder} />
  ));
}

/** A visual the module said it could not draw: its own words, in the visual's place. */
export function DrawingGapTile({
  gap,
  entry,
  folder,
  span,
}: {
  gap: DrawingGap;
  entry: OutputEntry;
  folder: string;
  span: 6 | 12;
}) {
  return (
    <Tile
      span={span}
      label={gap.title}
      title={<span className="first-letter:uppercase">{gap.title}</span>}
    >
      {gap.blocks.map((block) => {
        const body = readParagraph(block.text).body;
        return (
          <div key={block.line} className="flex items-start gap-2">
            <div className="min-w-0 flex-1">
              <GapNote>
                {containsReference(body) ? (
                  <Button
                    href={evidencePath(folder, entry, block.line)}
                    color="link-gray"
                    size="sm"
                    iconTrailing={ArrowRight}
                  >
                    Read this passage in Evidence
                  </Button>
                ) : (
                  richParts(body, readerText)
                )}
              </GapNote>
            </div>
            <HeldTrace
              trace={traceKey(entry, block.line)}
              label={`Show sources for ${gap.title}`}
            />
          </div>
        );
      })}
    </Tile>
  );
}
