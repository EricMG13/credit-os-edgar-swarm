import type { ComponentProps, ReactNode } from "react";
import { cx } from "@/utils/cx";
import { moduleName } from "../../../api";
import { moduleSource } from "../../overview/figureData";
import { FigureNotes, FigureSourceControl, Key } from "../../overview/figureParts";
import { Bento, GapNote, Tile } from "../../overview/Tile";
import type { LeadProps } from "../types";

/** The designed gap, for a lead whose module is blocked, absent or unreadable: one tile, the reason in words. */
export function LeadGap({ label, reason }: { label: string; reason: string }) {
  return (
    <Tile span={12} label={label} kicker="Not assessable" tone="gap">
      <GapNote>{reason}</GapNote>
    </Tile>
  );
}

/** The bento a lead is drawn in; a blocked or unreadable module draws the one gap tile instead. */
export function LeadFrame({ props, children }: { props: LeadProps; children: ReactNode }) {
  const module = props.entry.output.module;
  const { reason } = moduleSource(props.view, module, moduleName(module));
  return (
    <Bento>
      {reason ? <LeadGap label={`${moduleName(module)} lead`} reason={reason} /> : children}
    </Bento>
  );
}

/** A figure that is derived (an exact difference or sum of stated figures), said as a word. */
export function Derived() {
  return <span className="font-mono text-[11px] text-text-tertiary"> derived</span>;
}

const NUMERIC = /^[−-]?[\d,]+(?:\.\d+)?[x%]?$/;

export type TableViewData = {
  caption: string;
  headers: string[];
  rows: string[][];
};

/** The figure's numbers as a real table, closed by default: every figure has one. */
export function TableView({ caption, headers, rows }: TableViewData) {
  return (
    <details className="group min-w-0 text-small text-text-secondary">
      <summary className="flex min-h-8 w-fit cursor-pointer items-center rounded-ds-xs px-1 text-caption font-medium text-text-link">
        Table view
      </summary>
      <div className="mt-2 max-w-full overflow-x-auto">
        <table className="w-full min-w-max border-collapse text-caption">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="border-b border-border-hairline px-2 py-1.5 text-left font-medium text-text-tertiary"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, at) => (
              <tr key={`${row[0] ?? ""}-${String(at)}`}>
                {row.map((cell, column) => (
                  <td
                    key={`${headers[column] ?? ""}-${String(column)}`}
                    className={cx(
                      "border-b border-border-hairline px-2 py-1.5",
                      NUMERIC.test(cell) ? "text-right font-mono tabular-nums" : "text-left",
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}

type KeyTone = ComponentProps<typeof Key>["tone"];

/**
 * One figure of a lead: the reading as the title, what it is measured in as the kicker, its one
 * trace control, a legend, the drawing, the module's own notes on its basis, and the table view.
 */
export function FigureTile({
  props,
  span,
  label,
  kicker,
  title,
  line,
  source,
  legend = [],
  notes = [],
  table,
  children,
}: {
  props: LeadProps;
  span: ComponentProps<typeof Tile>["span"];
  label: string;
  kicker: string;
  title: string;
  line?: number;
  source: string;
  legend?: { tone: KeyTone; text: string }[];
  notes?: readonly string[];
  table?: TableViewData;
  children: ReactNode;
}) {
  return (
    <Tile
      span={span}
      label={label}
      kicker={kicker}
      title={title}
      trace={
        <FigureSourceControl
          folder={props.run.folder}
          entry={props.entry}
          line={line}
          name={source}
        />
      }
    >
      {legend.length > 0 && (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {legend.map((item) => (
            <Key key={item.text} tone={item.tone}>
              {item.text}
            </Key>
          ))}
        </div>
      )}
      {children}
      <FigureNotes notes={notes} />
      {table && <TableView {...table} />}
    </Tile>
  );
}
