import { TRACE_HOST } from "@/pages/library/parts/TraceControl";
import {
  blocked,
  containsReference,
  evidencePath,
  readerText,
  type OutputEntry,
  type Table,
} from "../publishedReport";
import { namedRow, namedTable } from "../reportView";
import { PublishedSource } from "./PublishedTrace";

/*
 * What Business & governance says the issuer is. These are the rules the report header used for
 * its business description before the redesign moved it here: the company_description register
 * over the Company profile's Business row; two candidate rows are a gap, never a guess; text
 * through readerText; a description that cites a file or register id is not printed, only its
 * place in Evidence.
 */

const NO_DESCRIPTION = "Business description not in this run";
const DESCRIPTION = "Business description";
const IN_EVIDENCE = "Business description in Evidence";

const filled = (text: string | undefined) => (text?.trim() ? text : undefined);

/** The register's own row, when exactly one table under a `company_description` heading has exactly one row. */
function registerRow(entry: OutputEntry) {
  const tables = entry.sections
    .filter((section) => section.heading.includes("company_description"))
    .flatMap(({ blocks }) => blocks)
    .filter(
      (block): block is Table => block.type === "table" && block.headers.includes(DESCRIPTION),
    );
  const [only] = tables;
  const [row] = only?.rows ?? [];
  if (tables.length !== 1 || only?.rows.length !== 1 || !row) return undefined;
  return { table: only, row };
}

function profileCell(entry: OutputEntry, field: string) {
  const row = namedRow(namedTable(entry, "Company profile", []), ({ cells }) => cells[0] === field);
  return row && { line: row.line, text: filled(row.cells[1]) };
}

/** First hit wins: the register, then the Company profile `Business` row. */
function describeCompany(entry: OutputEntry) {
  const register = registerRow(entry);
  const registered =
    register && filled(register.row.cells[register.table.headers.indexOf(DESCRIPTION)]);
  if (register && registered) return { text: registered, line: register.row.line };
  const business = profileCell(entry, "Business");
  return business?.text ? { text: business.text, line: business.line } : undefined;
}

/** Sector: the register's Sector cell, then the profile's `Sector and segments`. */
function sectorOf(entry: OutputEntry) {
  const register = registerRow(entry);
  const registered =
    register && filled(register.row.cells[register.table.headers.indexOf("Sector")]);
  const sector = registered ?? profileCell(entry, "Sector and segments")?.text;
  return sector === undefined || containsReference(sector) ? undefined : readerText(sector);
}

/** The issuer's sector and business description, as Business & governance states them. */
export function CompanyProfile({ entry, folder }: { entry: OutputEntry; folder: string }) {
  // Only the selected output that could run describes the issuer, as the report header did.
  const usable = entry.selected && !blocked(entry);
  const described = usable ? describeCompany(entry) : undefined;
  const sector = usable ? sectorOf(entry) : undefined;
  const referenced = described !== undefined && containsReference(described.text);
  return (
    <div className="flex min-w-0 flex-col gap-1 pt-1">
      {sector && <p className="text-caption text-text-tertiary">{sector}</p>}
      {described ? (
        <p className={`${TRACE_HOST} flex items-start gap-2 text-small text-text-primary`}>
          <span className={referenced ? "min-w-0 text-text-tertiary" : "min-w-0"}>
            {referenced ? IN_EVIDENCE : readerText(described.text)}
          </span>
          <PublishedSource href={evidencePath(folder, entry, described.line)} name={DESCRIPTION}>
            {DESCRIPTION}
          </PublishedSource>
        </p>
      ) : (
        <p className="text-small text-text-tertiary">{NO_DESCRIPTION}</p>
      )}
    </div>
  );
}
