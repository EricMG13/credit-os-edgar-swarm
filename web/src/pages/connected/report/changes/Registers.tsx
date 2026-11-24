import type { OutputEntry } from "../../publishedReport";
import { PublishedSource } from "../PublishedTrace";
import { Tile } from "../overview/Tile";
import { EmptyLedger, LedgerList } from "./LedgerLists";
import { LINK } from "./PassageTile";
import type { Cell, issuerFacts, analysisRows, ledgerOf } from "./model";
import { PublishedTable } from "../../ReportContent";
import { evidencePath } from "../../publishedReport";

function CellText({ cell, href }: { cell: Cell; href: string }) {
  switch (cell.kind) {
    case "written":
      return <>{cell.text}</>;
    case "referenced":
      return (
        <a className={LINK} href={href}>
          Read in Evidence
        </a>
      );
    default:
      return <span className="text-gap-text">Not stated</span>;
  }
}

/** Facts the comparison states that are not one of the pack's measures: a new facility, an outlook. */
export function FactsTile({ facts }: { facts: ReturnType<typeof issuerFacts> }) {
  if (facts.length === 0) return null;
  return (
    <Tile span={12} label="Also changed at the issuer" title="Also changed at the issuer">
      <ul className="grid">
        {facts.map(({ line, href, label, before, after, cause, effect }) => (
          <li
            key={line}
            className="grid gap-1 border-t border-border-hairline py-3 first:border-t-0 first:pt-0 last:pb-0"
          >
            <div className="flex items-start justify-between gap-3">
              <h4 className="min-w-0 text-body font-medium wrap-anywhere">
                <CellText cell={label} href={href} />
              </h4>
              <PublishedSource href={href} name="This fact">
                Source
              </PublishedSource>
            </div>
            <p className="font-mono text-small text-text-secondary">
              <CellText cell={before} href={href} /> → <CellText cell={after} href={href} />
            </p>
            <p className="reading-copy text-small text-text-secondary">
              Cause: <CellText cell={cause} href={href} />
            </p>
            <p className="reading-copy text-small text-text-secondary">
              Effect on the credit view: <CellText cell={effect} href={href} />
            </p>
          </li>
        ))}
      </ul>
    </Tile>
  );
}

/** The analysis comparison's rows, where there is no pack to draw the module matrix from. */
export function AnalysisTile({ rows }: { rows: ReturnType<typeof analysisRows> }) {
  if (rows.length === 0) return null;
  return (
    <Tile span={12} label="What changed in the analysis" title="What changed in the analysis">
      <ul className="grid">
        {rows.map(({ line, href, module, status, cause, why }) => (
          <li
            key={line}
            className="grid gap-1 border-t border-border-hairline py-3 first:border-t-0 first:pt-0 last:pb-0"
          >
            <div className="flex items-start justify-between gap-3">
              <h4 className="text-body font-medium">
                <CellText cell={module} href={href} />
              </h4>
              <PublishedSource href={href} name="This module">
                Source
              </PublishedSource>
            </div>
            <p className="text-small text-text-secondary">
              <CellText cell={status} href={href} />
            </p>
            <p className="reading-copy text-small text-text-secondary">
              Cause: <CellText cell={cause} href={href} /> · <CellText cell={why} href={href} />
            </p>
          </li>
        ))}
      </ul>
    </Tile>
  );
}

/** The limitations ledger by status, added and removed first; a ledger missing a column is its table. */
export function LedgerTile({
  ledger,
  entry,
  folder,
}: {
  ledger: ReturnType<typeof ledgerOf>;
  entry: OutputEntry;
  folder: string;
}) {
  if (!ledger) return null;
  if ("table" in ledger)
    return (
      <Tile span={12} label="Limitations ledger" title="Limitations ledger">
        <PublishedTable
          table={ledger.table}
          rowSource={(line, label) => (
            <PublishedSource href={evidencePath(folder, entry, line)} name={label}>
              Source
            </PublishedSource>
          )}
        />
      </Tile>
    );
  const [added, removed, ...rest] = [
    ...["New", "Closed"].map((status) => ledger.groups.find((group) => group.status === status)),
    ...ledger.groups.filter((group) => group.status !== "New" && group.status !== "Closed"),
  ];
  return (
    <Tile span={12} label="Limitations ledger" title="Limitations ledger">
      <div className="grid gap-6 md:grid-cols-2">
        {added ? <LedgerList group={added} /> : <Empty heading="Added" />}
        {removed ? <LedgerList group={removed} /> : <Empty heading="Removed" />}
      </div>
      {rest.length > 0 && (
        <div className="grid gap-6 border-t border-border-hairline pt-4 md:grid-cols-2">
          {rest.map((group) => (group ? <LedgerList key={group.status} group={group} /> : null))}
        </div>
      )}
    </Tile>
  );
}

function Empty({ heading }: { heading: string }) {
  return (
    <section className="grid content-start gap-3" aria-label={heading}>
      <h4 className="text-caption text-text-tertiary">{heading} (none)</h4>
      <EmptyLedger />
    </section>
  );
}
