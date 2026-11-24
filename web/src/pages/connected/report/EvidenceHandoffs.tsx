import { Button } from "@/components/base/buttons/button";
import { DownloadButton } from "@/pages/library/parts/DownloadButton";
import { ArrowRight } from "@untitledui/icons";
import { HandoffDownload } from "../ReportContent";
import {
  evidencePath,
  publishedHref,
  type OutputEntry,
  type PublishedRun,
} from "../publishedReport";
import { handoffName } from "./evidenceLabels";
import { Tile } from "./overview/Tile";

/** The module handoffs as files: name, SHA-256, a way to open each in Evidence and to download it. */
export function EvidenceHandoffs({
  entries,
  module,
  run,
}: {
  entries: OutputEntry[];
  module?: string;
  run: PublishedRun;
}) {
  const zip = publishedHref(run.evidence.zip, run.folder);
  const shown = entries.filter((item) => !module || item.output.module === module);
  return (
    <Tile
      span={12}
      label="Handoffs"
      kicker="Module handoffs as delivered"
      title="Handoffs"
      trace={
        zip && (
          <DownloadButton download={{ label: "Download all handoffs", href: zip, reason: null }} />
        )
      }
    >
      {!zip && (
        <p className="text-small text-text-secondary">No handoff ZIP was delivered for this run.</p>
      )}
      {run.evidence.handoffs.filter((handoff) => !module || handoff.module === module).length ===
        0 && (
        <p className="text-small text-text-secondary">
          No handoff files were delivered for this run.
        </p>
      )}
      {shown.length > 0 && (
        <div
          role="region"
          aria-label="Handoff files"
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
          className="min-w-0 overflow-x-auto rounded-ds-md border border-border-hairline"
        >
          <table className="w-full min-w-xl border-collapse text-left text-small">
            <caption className="sr-only">Handoffs</caption>
            <thead className="bg-surface-subtle text-text-secondary">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium">
                  Handoff
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  SHA-256
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  File
                </th>
              </tr>
            </thead>
            <tbody>
              {shown.map((item) => (
                <tr key={item.output.id} className="border-t border-border-hairline align-top">
                  <th scope="row" className="px-4 py-2 font-medium text-text-primary">
                    <Button
                      href={evidencePath(run.folder, item)}
                      color="link-gray"
                      size="sm"
                      className="underline"
                      iconTrailing={ArrowRight}
                    >
                      {handoffName(item)}
                    </Button>
                  </th>
                  <td className="max-w-72 px-4 py-3 font-mono text-mono wrap-anywhere text-text-tertiary">
                    {item.output.sha256}
                  </td>
                  <td className="px-4 py-2">
                    <HandoffDownload run={run} entry={item} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Tile>
  );
}
