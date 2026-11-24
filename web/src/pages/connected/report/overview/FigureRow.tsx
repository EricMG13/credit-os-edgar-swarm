import { ArrowDown, ArrowUp } from "@untitledui/icons";
import type { ReactNode } from "react";
import { cx } from "@/utils/cx";
import { blocked, evidencePath, withUnit, type OutputEntry } from "../../publishedReport";
import { changeSign, changeText, exactDifference, tone } from "../../signal";
import { PublishedSource } from "../PublishedTrace";
import { FigureHead } from "./figureParts";
import { DeltaBar, DotStrip, GapBar, MiniSlope, Ruler, Slope, SplitBar } from "./marks";
import type { Mark, MarkTone } from "./marks";
import { entryOf, gapReason, lastTwo, periodSeries, type RowProps, type Series } from "./read";
import { Figure, GapNote, Tile } from "./Tile";

/** The CP-1 chart table and column each headline figure is read from, and its better/worse key. */
const FIGURES = {
  gross: ["Total debt / EBITDA", "leverage", /^Total debt \/ /, "leverage"],
  net: ["Net debt / EBITDA", "leverage", /^Net debt \/ /, "net_leverage"],
  revenue: ["Revenue", "revenue and EBITDA", /^Revenue$/, "revenue"],
  cover: ["Interest cover", "interest cover", / \/ cash interest$/, "coverage"],
  ebitda: ["Adjusted EBITDA", "revenue and EBITDA", /^Adjusted EBITDA$/, "adjusted_ebitda"],
  cash: ["Cash", "liquidity", /^Cash$/, "cash"],
  undrawn: [
    "Undrawn committed facilities",
    "liquidity",
    /^Undrawn committed facilities$/,
    "undrawn",
  ],
} as const;
type FigureKey = keyof typeof FIGURES;

type Reading = {
  title: string;
  series: Series | null;
  marks: Mark[];
  tone: MarkTone;
  change: string | null;
};

function read(entry: OutputEntry, key: FigureKey): Reading {
  const [fallback, chart, heading, toneKey] = FIGURES[key];
  const series = periodSeries(entry, chart, heading);
  if (!series) return { title: fallback, series, marks: [], tone: "none", change: null };
  const { latest, prior } = lastTwo(series);
  const change =
    latest?.value != null && prior?.value != null ? exactDifference(latest.cell, prior.cell) : null;
  return {
    title: series.name,
    series,
    marks: series.points.flatMap(({ period, cell, value }) =>
      value === null ? [] : [{ label: period, value, text: withUnit(cell, series.unit) }],
    ),
    tone: change === null ? "none" : tone(toneKey, change),
    change,
  };
}

const spoken = (title: string, marks: Mark[]) =>
  `${title}: ${marks.map((mark) => `${mark.text} in ${mark.label}`).join(", ")}.`;

function ToneChip({ reading }: { reading: Reading }) {
  if (reading.change === null || reading.tone === "none" || reading.tone === "flat") return null;
  const Arrow = changeSign(reading.change) === 1 ? ArrowUp : ArrowDown;
  return (
    <span
      className={cx(
        "flex h-6 items-center gap-1 rounded-ds-xs border px-2 text-caption",
        reading.tone === "worse"
          ? "border-warning-edge bg-warning-fill text-warning-text"
          : "border-success-edge bg-success-fill text-success-text",
      )}
    >
      <Arrow aria-hidden="true" className="size-3" />
      {reading.tone === "worse" ? "Worse" : "Better"}
    </span>
  );
}

/** The latest figure, where it came from and how it moved; a gap in the module's own words. */
function Level({ reading, large }: { reading: Reading; large: boolean }) {
  const { series } = reading;
  if (!series) return <GapNote>Not supplied in this run&apos;s financial foundation.</GapNote>;
  const { latest, prior } = lastTwo(series);
  const stated = latest?.value != null;
  const earlier =
    prior?.value != null ? `${withUnit(prior.cell, series.unit)} in ${prior.period}` : null;
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <Figure
          className={cx(
            large ? "text-display font-medium" : "text-h3 font-medium wrap-anywhere sm:text-h2",
            !stated && "text-text-tertiary",
          )}
        >
          {stated ? withUnit(latest.cell, series.unit) : "n.a."}
        </Figure>
        <ToneChip reading={reading} />
      </div>
      {!stated && latest && (
        <p className="text-caption text-gap-text">
          {latest.period}: {gapReason(latest.cell) ?? "not supplied"}
        </p>
      )}
      {earlier && (
        <p className="text-caption text-text-tertiary">
          {stated ? "from " : ""}
          {earlier}
          {stated && reading.change !== null ? ` (${changeText(reading.change, series.unit)})` : ""}
        </p>
      )}
    </div>
  );
}

function Source({
  run,
  entry,
  reading,
}: Pick<RowProps, "run"> & { entry: OutputEntry; reading: Reading }) {
  return (
    <PublishedSource
      href={evidencePath(run.folder, entry, reading.series?.points.at(-1)?.line)}
      name={reading.title}
      linkLabel={`Source for ${reading.title}`}
    >
      View source
    </PublishedSource>
  );
}

/** A mark needs the latest figure and one before it; otherwise the gap is drawn in its place. */
function comparable(reading: Reading) {
  const latest = reading.series?.points.at(-1);
  return latest?.value != null && reading.marks.length >= 2;
}

function SmallTile({
  run,
  entry,
  reading,
  children,
}: Pick<RowProps, "run"> & { entry: OutputEntry; reading: Reading; children: ReactNode }) {
  return (
    <section
      aria-label={reading.title}
      className="flex min-w-0 flex-col justify-between gap-2 rounded-ds-lg border border-border-subtle bg-surface-card p-4"
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-small font-medium text-text-secondary">{reading.title}</h3>
        <Source run={run} entry={entry} reading={reading} />
      </div>
      <Level reading={reading} large={false} />
      {reading.series && (comparable(reading) ? children : <GapBar />)}
    </section>
  );
}

function LargeTile({
  run,
  entry,
  reading,
  children,
}: Pick<RowProps, "run"> & { entry: OutputEntry; reading: Reading; children: ReactNode }) {
  return (
    <Tile span={4} label={reading.title} className="justify-between">
      <FigureHead
        title={reading.title}
        basis={reading.series?.points.at(-1)?.period}
        source={<Source run={run} entry={entry} reading={reading} />}
      />
      <Level reading={reading} large />
      {reading.series && (comparable(reading) ? children : <GapBar />)}
    </Tile>
  );
}

function ends(reading: Reading) {
  const [from, to] = reading.marks.slice(-2);
  return from && to ? { from, to } : null;
}

function CashMark({ cash, undrawn }: { cash: Reading; undrawn: Reading }) {
  const first = cash.marks.at(-1);
  const second = undrawn.series?.points.at(-1)?.value != null ? undrawn.marks.at(-1) : undefined;
  const pair = ends(cash);
  if (first && second)
    return (
      <SplitBar
        first={first}
        second={second}
        label={`${cash.title} ${first.text} beside ${undrawn.title} ${second.text} in ${first.label}.`}
      />
    );
  return pair && <DeltaBar {...pair} tone={cash.tone} label={spoken(cash.title, cash.marks)} />;
}

/**
 * Row 2: the headline figures, period against period. Two large tiles carry leverage; four small
 * ones support them. Each has its own mark, and a figure the module did not supply is a gap.
 */
export function FigureRow({ run, view }: RowProps) {
  const entry = entryOf(view, "CP-1");
  if (!entry || blocked(entry))
    return (
      <Tile span={12} label="Headline figures" title="Headline figures">
        <GapNote>
          Not established for this run: the financial foundation has no figures to draw.
        </GapNote>
      </Tile>
    );
  const of = (key: FigureKey) => read(entry, key);
  const [gross, net, revenue, cover, ebitda, cash] = [
    of("gross"),
    of("net"),
    of("revenue"),
    of("cover"),
    of("ebitda"),
    of("cash"),
  ];
  const coverEnds = ends(cover);
  const ebitdaEnds = ends(ebitda);
  const suffix = (reading: Reading) => (reading.series?.unit === "x" ? "x" : "");
  return (
    <>
      <LargeTile run={run} entry={entry} reading={gross}>
        <Slope
          marks={gross.marks}
          tone={gross.tone}
          suffix={suffix(gross)}
          label={spoken(gross.title, gross.marks)}
        />
      </LargeTile>
      <LargeTile run={run} entry={entry} reading={net}>
        <DotStrip
          marks={net.marks}
          tone={net.tone}
          suffix={suffix(net)}
          label={spoken(net.title, net.marks)}
        />
      </LargeTile>
      <div className="grid min-w-0 auto-rows-fr grid-cols-2 gap-3 sm:gap-4 lg:col-span-4">
        <SmallTile run={run} entry={entry} reading={revenue}>
          <MiniSlope
            marks={revenue.marks}
            tone={revenue.tone}
            label={spoken(revenue.title, revenue.marks)}
          />
        </SmallTile>
        <SmallTile run={run} entry={entry} reading={cover}>
          {coverEnds && (
            <Ruler
              {...coverEnds}
              tone={cover.tone}
              suffix={suffix(cover)}
              label={spoken(cover.title, cover.marks)}
            />
          )}
        </SmallTile>
        <SmallTile run={run} entry={entry} reading={ebitda}>
          {ebitdaEnds && (
            <DeltaBar
              {...ebitdaEnds}
              tone={ebitda.tone}
              label={spoken(ebitda.title, ebitda.marks)}
            />
          )}
        </SmallTile>
        <SmallTile run={run} entry={entry} reading={cash}>
          <CashMark cash={cash} undrawn={of("undrawn")} />
        </SmallTile>
      </div>
    </>
  );
}
