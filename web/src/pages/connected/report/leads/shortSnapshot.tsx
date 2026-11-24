import { StatsStrip, type Stat } from "@/components/kit/StatsStrip";
import { MiniSlope } from "../overview/marks";
import { GapNote, Tile } from "../overview/Tile";
import { FigureTile, LeadFrame } from "./kit/LeadFrame";
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

const DIRECTION = { "-1": "down", "0": "unchanged", "1": "up" } as const;

const stated = (figure: Figure) => (figure.kind === "value" ? figure.text : "not supplied");

function statOf(item: KeyFigure): Stat {
  const { current, prior, change, marks } = item;
  const label = `${item.measure}, ${current.period}`;
  const base: Stat =
    current.kind === "gap"
      ? { label, value: null, gap: current.reason }
      : { label, value: current.text };
  if (!prior) return base;
  const stat: Stat = {
    ...base,
    prior:
      prior.kind === "value" ? `${prior.text} in ${prior.period}` : `${prior.period}: not supplied`,
  };
  if (change) {
    stat.delta = `${DIRECTION[String(change.sign) as keyof typeof DIRECTION]}${change.sign === 0 ? "" : ` ${change.size}`} (derived)`;
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
      <Tile span={12} label="Key figures" kicker="Not drawn" tone="gap">
        <GapNote>{read.reason}</GapNote>
      </Tile>
    );
  const shown = read.figures.slice(0, MOST_FIGURES);
  const more = read.figures.length - shown.length;
  return (
    <FigureTile
      props={props}
      span={12}
      label="Key figures"
      kicker="Each figure in the period the module states"
      title={`${String(read.figures.length)} key figure${read.figures.length === 1 ? "" : "s"}`}
      line={read.line}
      source="the key figures"
      notes={[
        ...(more > 0
          ? [`${String(more)} more figure${more === 1 ? " is" : "s are"} in the table view.`]
          : []),
        ...(read.figures.some((item) => item.change)
          ? ["Changes are the exact difference of the two stated figures."]
          : []),
      ]}
      table={{
        caption: "Key figures",
        headers: [
          "Measure",
          "Period",
          "Value",
          "Earlier period",
          "Earlier value",
          "Change (derived)",
        ],
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
      <Tile span={12} label="Change screen" kicker="Not drawn" tone="gap">
        <GapNote>{read.reason}</GapNote>
      </Tile>
    );
  return (
    <FigureTile
      props={props}
      span={12}
      label="Change screen"
      kicker="Topic by topic, earlier to later"
      title={`${String(read.items.length)} topic${read.items.length === 1 ? "" : "s"} screened`}
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
export function ShortSnapshotLead(props: LeadProps) {
  return (
    <LeadFrame props={props}>
      <Strip props={props} />
      <ChangeScreen props={props} />
    </LeadFrame>
  );
}
