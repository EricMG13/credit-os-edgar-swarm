import { StatusShape, type Shape } from "@/components/status/shapes";
import { Badge } from "@/components/base/badges/badges";
import { cx } from "@/utils/cx";
import { readParagraph, containsReference, readerText } from "../../publishedReport";
import type { PublishedChanges } from "../../publishedReport";
import { PublishedSource } from "../PublishedTrace";
import { statusColumn, type StatusColumn } from "./model";

const COLUMNS: { key: StatusColumn; label: string; shape: Shape; tint: string }[] = [
  { key: "unchanged", label: "Unchanged", shape: "ring", tint: "text-text-secondary" },
  { key: "revised", label: "Revised", shape: "half-filled circle", tint: "text-action" },
  { key: "new", label: "New", shape: "filled circle", tint: "text-action" },
  { key: "missing", label: "Missing", shape: "dashed ring", tint: "text-gap-text" },
];

function side(ran: boolean, bottomLine: string | null) {
  if (bottomLine == null) return ran ? "Not stated" : "Did not run";
  const { body } = readParagraph(bottomLine);
  return containsReference(body)
    ? "See the retained handoff in Evidence."
    : readerText(body) || "Not stated";
}

/** Module × status: which modules kept, revised, added or lost their conclusion, then the two conclusions. */
export function ModuleMatrix({
  change,
  source,
}: {
  change: PublishedChanges;
  source: (module: string) => string | undefined;
}) {
  const modules = change.pack?.modules ?? [];
  return (
    <div className="grid gap-4">
      <table className="w-full table-fixed border-collapse text-small">
        <caption className="sr-only">Module conclusions against the earlier run</caption>
        <thead>
          <tr className="text-left text-caption text-text-tertiary">
            <th scope="col" className="pb-2 font-normal">
              Module
            </th>
            {COLUMNS.map(({ key, label }) => (
              <th key={key} scope="col" className="w-[3.75rem] pb-2 text-center font-normal">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {modules.map((item) => {
            const status = change.verdicts?.modules?.[item.module]?.status ?? "";
            const column = statusColumn(status);
            return (
              <tr key={item.module} className="border-t border-border-hairline">
                <th scope="row" className="py-2 pr-2 text-left font-normal">
                  <span className="block text-text-primary">{item.title}</span>
                  <span className="block text-caption text-text-secondary">
                    {status || "Explanation not stated"}
                  </span>
                </th>
                {COLUMNS.map((col) => (
                  <td key={col.key} className="text-center">
                    {col.key === column ? (
                      <span className={cx("inline-flex", col.tint)}>
                        <StatusShape shape={col.shape} />
                        <span className="sr-only">{col.label}</span>
                      </span>
                    ) : null}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="grid gap-2">
        {modules.map((item) => {
          const verdict = change.verdicts?.modules?.[item.module];
          const href = source(item.module);
          const explanation = [verdict?.cause, verdict?.why].filter((value): value is string =>
            Boolean(value && !containsReference(value)),
          );
          return (
            <details key={item.module} className="rounded-ds-sm border border-border-hairline p-3">
              <summary className="cursor-pointer text-small font-medium">
                {item.title} <Badge size="sm">{verdict?.status || "Explanation not stated"}</Badge>
              </summary>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <h4 className="text-caption text-text-tertiary">Earlier</h4>
                  <p className="reading-copy text-small">
                    {side(item.ran_prior, item.prior_bottom_line)}
                  </p>
                </div>
                <div>
                  <h4 className="text-caption text-text-tertiary">Current</h4>
                  <p className="reading-copy text-small">
                    {side(item.ran_current, item.current_bottom_line)}
                  </p>
                </div>
              </div>
              {explanation.length > 0 && (
                <p className="reading-copy mt-2 text-small text-text-secondary">
                  {readerText(explanation.join(" · "))}
                </p>
              )}
              {href && (
                <PublishedSource href={href} name={item.title}>
                  Analysis comparison row
                </PublishedSource>
              )}
            </details>
          );
        })}
      </div>
    </div>
  );
}
