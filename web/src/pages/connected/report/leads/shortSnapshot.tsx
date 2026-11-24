import { StatsStrip, type Stat } from "@/components/kit/StatsStrip";
import { MiniSlope } from "../overview/marks";
import type { FC } from "react";
import { FigureTile, GapTile, LeadFrame } from "./kit/LeadFrame";
import {
  MOST_FIGURES,
  readChangeScreen,
  readKeyFigures,
  type Figure,
  type KeyFigure,
} from "./shortSnapshotData";
import type { LeadProps } from "./types";

/*
 * CP-L10 short snapshot lead. Synthetic contract: built from src/deploy_vii/methods/cpl10.md (the
 * `Measure | Value | Period | Source` Key figures table) and bindings/cpl10.py; no CP-L10 handoff has
 * ever run on a real case, so this lead is unproven on a real run. The change screen is drawn only from
 * a table with Topic, Prior and Current columns (the contract names no others).
 */

/** A figure the module did not supply: the system's hatched not-known slot, with its reason. */
function GapSlot({ reason }: { reason: string }) {
  return (
    <span className="gap-hatch flex min-h-9 items-center justify-center rounded-ds-xs border border-dashed border-border-gap p-1.5 text-caption text-gap-text">
      <span className="rounded-ds-xs bg-surface-card px-1.5 py-0.5">{reason}</span>
    </span>
  );
}

const signed = (sign: -1 | 0 | 1, size: string) =>
  sign === 1 ? `+${size}` : sign === -1 ? `\u2212${size}` : size;

const stated = (figure: Figure) => (figure.kind === "value" ? figure.text : "not supplied");

function statOf(item: KeyFigure): Stat {
  const { current, prior, change, marks } = item;
  const label = `${item.measure}, ${current.period}`;
  const base: Stat =
    current.kind === "gap"
      ? { label, value: null, gap: "Not supplied", mark: <GapSlot reason={current.reason} /> }
      : { label, value: current.text };
  if (!prior) return base;
  const stat: Stat = {
    ...base,
    prior:
      prior.kind === "value" ? `${prior.text} in ${prior.period}` : `${prior.period}: not supplied`,
  };
  if (change) {
    stat.delta = signed(change.sign, change.size);
    if (change.tone === "better" || change.tone === "worse") stat.tone = change.tone;
  }
  if (marks && change)
    stat.mark = (
      <MiniSlope
        marks={[
          { label: prior.period, value: marks.prior, text: stated(prior) },
          { label: current.period, value: marks.current, text: stated(current) },
        ]}
        tone={change.tone}
        label={`${item.measure}: ${stated(prior)} in ${prior.period}, ${stated(current)} in ${current.period}`}
      />
    );
  return stat;
}

function Strip({ props }: { props: LeadProps }) {
  const read = readKeyFigures(props.entry);
  if (read.state === "gap")
    return (
      <GapTile span={12} label="Key figures" kicker="Key figures">
        {read.reason}
      </GapTile>
    );
  const shown = read.figures.slice(0, MOST_FIGURES);
  const more = read.figures.length - shown.length;
  return (
    <FigureTile
      props={props}
      span={12}
      label="Key figures"
      kicker="Each figure in the period the module states"
      title="Key figures"
      line={read.line}
      source="the key figures"
      notes={[
        ...(more > 0
          ? [`${String(more)} more figure${more === 1 ? " is" : "s are"} in the table view.`]
          : []),
      ]}
      table={{
        caption: "Key figures",
        headers: ["Measure", "Period", "Value", "Earlier period", "Earlier value", "Change"],
        rows: read.figures.map((item) => [
          item.measure,
          item.current.period,
          item.current.kind === "value" ? item.current.text : item.current.text,
          item.prior?.period ?? "Not stated",
          item.prior
            ? item.prior.kind === "value"
              ? item.prior.text
              : item.prior.text
            : "Not stated",
          item.change
            ? `${item.change.sign === 1 ? "+" : item.change.sign === -1 ? "−" : ""}${item.change.size}`
            : "Not stated",
        ]),
      }}
    >
      <StatsStrip label="Key figures" stats={shown.map(statOf)} />
    </FigureTile>
  );
}

function ChangeScreen({ props }: { props: LeadProps }) {
  const read = readChangeScreen(props.entry);
  if (!read) return null;
  if (read.state === "gap")
    return (
      <GapTile span={12} label="Change screen" kicker="Change screen">
        {read.reason}
      </GapTile>
    );
  return (
    <FigureTile
      props={props}
      span={12}
      label="Change screen"
      kicker="Topic by topic, earlier to later"
      title="Change screen"
      line={read.line}
      source="the change screen"
      table={{
        caption: "Change screen",
        headers: ["Topic", "Prior", "Current", "Direction", "Reading"],
        rows: read.items.map((item) => [
          item.topic,
          item.prior,
          item.current,
          item.direction ?? "Not stated",
          item.text ?? "Not stated",
        ]),
      }}
    >
      <ul className="flex flex-col divide-y divide-border-hairline">
        {read.items.map((item) => (
          <li
            key={`${item.topic}-${String(item.line)}`}
            className="flex min-w-0 flex-col gap-1 py-3 first:pt-0 last:pb-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-small font-medium text-text-primary">{item.topic}</p>
              <p className="font-mono text-small text-text-secondary tabular-nums">
                {item.prior} <span aria-hidden="true">{"→"}</span>
                <span className="sr-only"> to </span> {item.current}
                {item.direction && (
                  <span className="ml-2 font-body text-caption text-text-primary">
                    {item.direction}
                  </span>
                )}
              </p>
            </div>
            {item.text && <p className="text-small text-text-secondary">{item.text}</p>}
          </li>
        ))}
      </ul>
    </FigureTile>
  );
}

/** CP-L10: the key-figure strip, each figure prior to current where the table states both periods; then the change screen. */
export const ShortSnapshotLead: FC<LeadProps> & {
  draws?: readonly ("figures" | "events" | "maps")[];
} = function ShortSnapshotLead(props) {
  return (
    <LeadFrame props={props}>
      <Strip props={props} />
      <ChangeScreen props={props} />
    </LeadFrame>
  );
};
// This lead draws no typed figure, event lane or map of the module's own.
ShortSnapshotLead.draws = [];
