export type SourceFileReference = {
  name?: string;
  file?: string | null;
  sha256: string | null;
  href?: string | null;
  pageHref?: string | null;
};

const sourceSegment = (value: string) =>
  encodeURIComponent(value).replace(
    /[!'()*]/g,
    (character) => `%${character.charCodeAt(0).toString(16).toUpperCase()}`,
  );

function citedPageLabel(query: string) {
  const match = /^\?page=([1-9]\d*)(?:&end=([1-9]\d*))?$/.exec(query);
  if (!match) return null;
  const first = Number(match[1]);
  const last = Number(match[2] ?? match[1]);
  if (!Number.isSafeInteger(first) || !Number.isSafeInteger(last) || last < first) return null;
  return first === last ? `page ${String(first)}` : `pages ${String(first)}–${String(last)}`;
}

/** Only links attested by the bridge for this exact run, filename and digest are drawn. */
export function sourceFileLinks(folder: string, source: SourceFileReference) {
  const name = source.file ?? source.name;
  if (!name || !source.sha256 || !/^[a-f0-9]{64}$/.test(source.sha256)) return [];
  const base = `/connected/sources/${sourceSegment(folder)}/${source.sha256}/${sourceSegment(name)}`;
  if (source.href !== base) return [];
  const links = [{ label: `Open source file: ${name}`, href: base }];
  const page = source.pageHref?.slice(base.length);
  const pageLabel = page ? citedPageLabel(page) : null;
  if (source.pageHref?.startsWith(base) && pageLabel) {
    links.unshift({ label: `Open cited source ${pageLabel}: ${name}`, href: source.pageHref });
  }
  return links;
}

export function sourceCitationNote(chip: { reason: string | null; quote_found?: boolean | null }) {
  return (
    [
      chip.reason,
      chip.quote_found === false
        ? "The recorded quote or value was not located on the cited page."
        : null,
    ]
      .filter(Boolean)
      .join(" ") || null
  );
}
