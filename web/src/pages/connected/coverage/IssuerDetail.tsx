import { Button } from "@/components/base/buttons/button";
import { TextLink } from "../../run/TextLink";
import { moduleName } from "../api";
import { evidenceLink, factsOf, latestRun, type Coverage as Data, type Issuer } from "../coverageData";
import { card, heading } from "../layout";
import { StageHead, StateCells } from "./Matrix";
import { named, prose, IN_EVIDENCE, reportPath, RunLine, STATE_WORDS, tableBox } from "./shared";

/** One issuer: every run against the fixed columns, and what its newest run says. */
export function IssuerDetail({ data, issuer }: { data: Data; issuer: Issuer }) {
  const newest = latestRun(issuer);
  const titles = new Map(data.columns.map((column) => [column.code, named(column)]));
  const fields = new Map(data.fields.map((item) => [item.id, item]));
  const said = newest
    ? factsOf(data, newest.key).filter((fact) => fact.field.endsWith("/bottomline"))
    : [];
  return (
    <section className={card} aria-label={issuer.name}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h2 className={heading}>{issuer.name}</h2>
        {newest && <Button href={reportPath(newest.folder)}>Open newest report</Button>}
      </div>
      <div className={tableBox}>
        <table className="w-full text-small">
          <caption className="sr-only">Every run of {issuer.name}, newest first</caption>
          <StageHead
            data={data}
            lead={[
              { label: "Run", className: "min-w-56" },
            ]}
          />
          <tbody>
            {issuer.runs.map((run) => (
              <tr key={run.key} className="border-b border-border-hairline last:border-0">
                <th scope="row" className="min-w-56 p-3 text-left align-top font-normal">
                  <RunLine run={run} />
                  <br />
                  <TextLink href={reportPath(run.folder)}>Open report</TextLink>
                  {run.other.length > 0 && (
                    <span className="mt-1 block text-caption text-text-secondary">
                      Other modules:{" "}
                      {run.other
                        .map((item) => `${named(item)} (${STATE_WORDS[item.state].toLowerCase()})`)
                        .join("; ")}
                    </span>
                  )}
                </th>
                <StateCells data={data} cells={run.cells} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {newest && said.length > 0 && (
        <div className="grid gap-3">
          <h3 className="font-semibold text-text-primary">Bottom lines of the newest run</h3>
          <ul className="grid gap-4">
            {said.map((fact) => (
              <li key={`${fact.output}-${String(fact.line)}`} className="grid gap-1">
                <span className="text-small font-medium text-text-secondary">
                  {titles.get(fields.get(fact.field)?.module ?? "") ??
                    moduleName(fields.get(fact.field)?.module ?? "")}
                </span>
                <p className="reading-copy text-body text-text-primary">
                  {prose(fact.text) ?? IN_EVIDENCE}
                </p>
                <TextLink href={evidenceLink(newest, fact)}>View sources</TextLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
