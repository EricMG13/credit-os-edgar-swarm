import { useCallback } from "react";
import { ArrowDown, ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { PageHeader } from "../../shell/PageHeader";
import { getReport, getReports, pathwayName } from "./api";
import { Breadcrumb, card, ErrorNotice, heading } from "./layout";
import { useResource } from "./useResource";

function downloadLink(path: string | null, run: string, module: string) {
  if (!/^[A-Za-z0-9_-]+$/.test(module)) return null;
  const expected = `/library/downloads/${encodeURIComponent(run)}/${module}.md`;
  return path === expected ? expected : null;
}

export function ReportLibrary() {
  const { value, error } = useResource(getReports);
  return (
    <>
      <PageHeader title="Library" actions={<Button href="/start">Start a run</Button>} />
      <section className="mt-6 grid max-w-4xl gap-4">
        <h2 className={heading}>Reports</h2>
        {error && <ErrorNotice>{error}</ErrorNotice>}
        {value ? (
          value.reports.length ? (
            <ul className="grid gap-3">
              {value.reports.map((entry) => (
                <li
                  key={entry.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-ds-lg border border-border-subtle bg-surface-card p-5 shadow-1"
                >
                  <div>
                    <h3 className="font-display text-h3">{entry.issuer}</h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {pathwayName(entry.pathway)} · <time dateTime={entry.asOf}>{entry.asOf}</time>
                    </p>
                  </div>
                  <Button
                    href={`/report/${encodeURIComponent(entry.id)}`}
                    color="secondary"
                    iconTrailing={ArrowRight}
                  >
                    Open report
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <p className={`${card} text-text-secondary`}>No reports yet</p>
          )
        ) : (
          !error && (
            <p role="status" className="text-text-secondary">
              Loading reports…
            </p>
          )
        )}
      </section>
    </>
  );
}

export function ReportReader({ id }: { id: string }) {
  const load = useCallback((signal: AbortSignal) => getReport(id, signal), [id]);
  const { value, error } = useResource(load);
  return (
    <>
      <Breadcrumb>Report</Breadcrumb>
      <PageHeader
        title={value?.issuer || "Credit report"}
        badges={
          value && (
            <p className="text-sm text-text-secondary">
              {pathwayName(value.pathway)} · As of <time dateTime={value.asOf}>{value.asOf}</time>
            </p>
          )
        }
        actions={
          <Button color="secondary" href={`/run/${encodeURIComponent(id)}`}>
            Run activity
          </Button>
        }
      />
      <div className="mt-6 grid max-w-5xl gap-5">
        {error && <ErrorNotice>{error}</ErrorNotice>}
        {value ? (
          <>
            <nav aria-label="Report contents" className={card}>
              <h2 className={heading}>Report contents</h2>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {value.modules.map((module, i) => (
                  <li key={module.id}>
                    <a className="text-action underline" href={`#report-module-${String(i)}`}>
                      {module.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {value.modules.map((module, index) => {
              const download = downloadLink(module.download, id, module.id);
              return (
                <article className={card} id={`report-module-${String(index)}`} key={module.id}>
                  <header className="flex flex-wrap items-start justify-between gap-3 border-b border-border-hairline pb-3">
                    <h2 className={heading}>{module.title}</h2>
                    {download && (
                      <Button
                        href={download}
                        download
                        color="secondary"
                        size="sm"
                        iconLeading={ArrowDown}
                        aria-label={`Download ${module.title}`}
                      >
                        Download handoff
                      </Button>
                    )}
                  </header>
                  {module.sections.map((section, i) => (
                    <section key={i} className="grid gap-3">
                      {section.title && (
                        <h3 className="font-semibold text-text-primary">{section.title}</h3>
                      )}
                      {section.paragraphs.map((paragraph, j) => (
                        <p
                          key={j}
                          className="max-w-[76ch] text-body wrap-anywhere text-text-secondary"
                        >
                          {paragraph}
                        </p>
                      ))}
                      {section.tables.map((table, j) => (
                        <div
                          key={j}
                          className="overflow-x-auto rounded-lg border border-border-hairline"
                        >
                          <table className="w-full border-collapse text-sm">
                            <thead className="bg-surface-subtle">
                              <tr>
                                {table.headers.map((header, col) => (
                                  <th
                                    key={col}
                                    scope="col"
                                    className="px-3 py-2 text-left font-semibold"
                                  >
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {table.rows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="border-t border-border-hairline">
                                  {row.map((cell, col) => (
                                    <td key={col} className="px-3 py-2 text-text-secondary">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </section>
                  ))}
                </article>
              );
            })}
          </>
        ) : (
          !error && (
            <p role="status" className="text-text-secondary">
              Loading report…
            </p>
          )
        )}
      </div>
    </>
  );
}
