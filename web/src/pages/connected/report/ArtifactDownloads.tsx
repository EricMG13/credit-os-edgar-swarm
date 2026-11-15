import { useCallback } from "react";
import { DownloadButton } from "@/pages/library/parts/DownloadButton";
import { card, heading } from "../layout";
import { useResource } from "../useResource";

type FileLink = { label: string; href: string };

export function ArtifactDownloads({ folder }: { folder: string }) {
  const load = useCallback(
    async (signal: AbortSignal) => {
      const response = await fetch(`/connected/artifacts/${encodeURIComponent(folder)}`, {
        signal,
      });
      if (!response.ok)
        throw new Error("The original model and calculation files could not be listed.");
      const data = (await response.json()) as { files: FileLink[] };
      return data.files;
    },
    [folder],
  );
  const { value, error } = useResource(load);
  return (
    <section className={card}>
      <h3 className={heading}>Model and calculation files</h3>
      {error && <p role="status">{error}</p>}
      {value &&
        value.map(({ label, href }) => (
          <DownloadButton key={href} download={{ label, href, reason: null }} />
        ))}
      {value && !value.some((file) => file.label === "HTML Model") && (
        <p className="text-text-secondary">The original HTML Model is unavailable for this run.</p>
      )}
      {value?.length === 0 && (
        <p className="text-text-secondary">
          The original calculation files are unavailable for this run.
        </p>
      )}
    </section>
  );
}
