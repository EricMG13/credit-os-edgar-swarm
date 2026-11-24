import type { ReactNode } from "react";
import { cx } from "@/utils/cx";
import { evidencePath, type OutputEntry } from "../../publishedReport";
import { PublishedSource } from "../PublishedTrace";
import { GapNote } from "./Tile";

/** A figure tile's head: the reading, what it is measured in, and the tile's one source control. */
export function FigureHead({
  title,
  basis,
  legend,
  source,
}: {
  title: string;
  basis?: string;
  legend?: ReactNode;
  source?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
      <div className="flex min-w-0 flex-col gap-0.5">
        <h3 className="text-small font-medium text-text-primary">{title}</h3>
        {basis && <p className="text-caption font-normal text-text-tertiary">{basis}</p>}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {legend}
        {source}
      </div>
    </div>
  );
}

export function FigureSourceControl({
  folder,
  entry,
  line,
  name,
}: {
  folder: string;
  entry: OutputEntry | undefined;
  line?: number;
  name: string;
}) {
  if (!entry) return null;
  return (
    <PublishedSource
      href={evidencePath(folder, entry, line)}
      name={name}
      linkLabel={`Source for ${name}`}
    >
      View source
    </PublishedSource>
  );
}

const SWATCH = {
  primary: "bg-chart-1",
  undated: "border-[1.5px] border-chart-1 bg-surface-selected",
  secondary: "bg-chart-2",
  prior: "bg-chart-3",
  signal: "bg-warning-mark",
  gap: "gap-hatch border border-dashed border-border-gap",
} as const;

type SwatchTone = keyof typeof SWATCH;

export function Key({ tone, children }: { tone: SwatchTone; children: ReactNode }) {
  return (
    <span className="flex items-center gap-1.5 text-caption font-normal text-text-secondary">
      <span aria-hidden="true" className={cx("size-2.5 flex-none rounded-[2px]", SWATCH[tone])} />
      {children}
    </span>
  );
}

/** The notes under a figure: what the handoff says about its own basis, set apart by a hairline. */
export function FigureNotes({ notes }: { notes: readonly string[] }) {
  if (!notes.length) return null;
  return (
    <ul className="flex flex-col gap-1.5 border-t border-border-hairline pt-3 text-caption font-normal text-text-secondary">
      {notes.map((note) => (
        <li key={note} className="wrap-anywhere">
          {note}
        </li>
      ))}
    </ul>
  );
}

/** The figure's place when the run does not carry it: the reason, in the gap treatment. */
export function FigureGap({ reason }: { reason: string }) {
  return <GapNote>{reason}</GapNote>;
}

/** The diagonal hatch a gap mark is filled with inside an SVG; `id` is unique per figure. */
export function GapPattern({ id }: { id: string }) {
  return (
    <pattern
      id={id}
      width="6"
      height="6"
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)"
    >
      <rect width="6" height="6" className="fill-surface-canvas" />
      <line x1="0" y1="0" x2="0" y2="6" strokeWidth="1.5" className="stroke-border-container" />
    </pattern>
  );
}
