import { BarCell } from "@/components/kit/BarCell";
import { TextLink } from "../../run/TextLink";
import {
  evidenceLink,
  figure,
  groupKey,
  rank,
  type Coverage as Data,
  type Field,
  type Issuer,
} from "../coverageData";
import { card, heading } from "../layout";
import { prose, RunLine, tableBox, th } from "./shared";

function grouped(data: Data, issuers: readonly Issuer[], by: string) {
  const groups = new Map<string, Issuer[]>();
  for (const issuer of issuers) {
    const key = groupKey(data, issuer, by);
    groups.set(key, [...(groups.get(key) ?? []), issuer]);
  }
  return [...groups].sort(([a], [b]) => a.localeCompare(b));
}

/** The figure column grows with its text, where the kit's bar cell fixes it at five rems. */
const WIDE_TEXT = "[&>span>span:first-child]:w-auto [&>span>span:first-child]:min-w-20";

/**
 * One figure across issuers at the chosen period: horizontal bars in the figure's own unit, one
 * list per reporting unit. A bar is the figure over the list's largest magnitude; a negative
 * figure keeps its sign in the written text and takes the signal tone. Issuers with no figure
 * for the period are listed apart with the module's reason, never ranked and never zero.
 */
export function RankView({
  data,
  issuers,
  field,
  period,
  order,
  by,
}: {
  data: Data;
  issuers: Issuer[];
  field: Field | undefined;
  period: string | null;
  order: "high" | "low";
  by: string;
}) {
  if (!field || period === null)
    return (
      <p role="status" className={card}>
        No module of a published run states a figure in a chart table yet, so there is nothing to
        rank.
      </p>
    );
  return (
    <div className="grid gap-6">
      {grouped(data, issuers, by).map(([group, members]) => {
        const ranking = rank(data, members, field.id, period, order);
        return (
          <section key={group} className="grid gap-3" aria-label={group || "Ranking"}>
            {group && <h2 className={heading}>{group}</h2>}
            {ranking.units.map(({ unit, rows }) => {
              const largest = Math.max(...rows.map(({ fact }) => Math.abs(fact.at ?? 0)));
              return (
                <div key={unit} className={tableBox}>
                  <table className="w-full text-small">
                    <caption className="p-3 text-left text-text-secondary">
                      {field.label}, {period}
                      {unit ? `, reporting unit ${unit}` : ""}
                      {order === "high" ? ", highest first" : ", lowest first"}
                    </caption>
                    <thead>
                      <tr className="border-b border-border-hairline">
                        <th className={th}>Rank</th>
                        <th className={th}>Issuer</th>
                        <th className={th}>{field.label}</th>
                        <th className={th}>Period</th>
                        <th className={th}>Basis and limitation</th>
                        <th className={th}>Sources</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map(({ issuer, run, fact }) => (
                        <tr
                          key={issuer.key}
                          className="border-b border-border-hairline align-top last:border-0"
                        >
                          <td className="p-3 font-mono tabular-nums">
                            {rows.findIndex((other) => other.fact.at === fact.at) + 1}
                          </td>
                          <th scope="row" className="min-w-48 p-3 text-left font-semibold wrap-anywhere">
                            {issuer.name}
                            <br />
                            <RunLine run={run} />
                          </th>
                          <td className="min-w-64 p-3">
                            <div className={WIDE_TEXT}>
                              <BarCell
                                text={figure(fact)}
                                share={largest === 0 ? 0 : Math.abs(fact.at ?? 0) / largest}
                                tone={(fact.at ?? 0) < 0 ? "signal" : "primary"}
                              />
                            </div>
                            {fact.heading && (
                              <span className="mt-1 block text-caption text-text-secondary">
                                Stated as {fact.heading}
                              </span>
                            )}
                          </td>
                          <td className="p-3">{fact.period ?? fact.row ?? "Not stated"}</td>
                          <td className="max-w-md p-3 wrap-anywhere">
                            {prose(fact.basis) ?? "Qualification recorded in Evidence."}
                          </td>
                          <td className="p-3">
                            <TextLink href={evidenceLink(run, fact)}>View sources</TextLink>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
            {ranking.missing.length > 0 && (
              <div className="gap-hatch grid gap-2 rounded-ds-lg border border-dashed border-border-gap p-4">
                <div className="grid gap-2 rounded-ds-sm bg-surface-card p-3">
                  <h3 className="font-semibold text-text-primary">
                    Not ranked: no figure for {period} in the newest run
                  </h3>
                  <ul className="grid gap-1 text-small text-gap-text">
                    {ranking.missing.map(({ issuer, fact, stated, repeated }) => (
                      <li key={issuer.key}>
                        <span className="font-medium text-text-primary">{issuer.name}</span>
                        {": "}
                        {repeated.length > 0
                          ? `its run states this period more than once (${repeated.map(figure).join("; ")}), so none is ranked`
                          : fact
                            ? (prose(fact.text) ?? "the module's reason is in Evidence")
                            : stated.length > 0
                              ? `no figure could be read for this period; its run states ${stated.join(", ")}`
                              : "no figure could be read for this measure"}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
