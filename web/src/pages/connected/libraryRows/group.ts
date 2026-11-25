import { runPathway, type CatalogueRun, type LibraryIndex } from "../publishedReport";

export type LibraryRun = LibraryIndex["workspace"]["runs"][string];
export type RunState = "Delivered" | "Test preview" | "No report published";

/** One issuer of the library: its runs newest first, and what its newest run says about itself. */
export type IssuerGroup = {
  key: string;
  /** Newest first; the first is the run the row draws. */
  entries: CatalogueRun[];
  newest: CatalogueRun;
  /** The newest run that has a published report to open. */
  linked: CatalogueRun | undefined;
  /** The ids of the runs that have a published report to open. */
  openable: ReadonlySet<string>;
  /** The newest run's published record, when it has one. */
  published: LibraryRun | undefined;
  pathway: string;
  state: RunState;
};

export const RUN_STATES: readonly RunState[] = ["Delivered", "Test preview", "No report published"];

/** One group per issuer, in the order the service first listed the issuer. */
export function groupIssuers(index: LibraryIndex): IssuerGroup[] {
  const byFolder = new Map(Object.values(index.workspace.runs).map((run) => [run.folder, run]));
  const groups = new Map<string, CatalogueRun[]>();
  for (const entry of index.catalogue.real) {
    const key = byFolder.get(entry.id)?.issuerKey ?? entry.id;
    groups.set(key, [...(groups.get(key) ?? []), entry]);
  }
  return [...groups].flatMap(([key, runs]) => {
    const entries = [...runs].sort((a, b) => b.date.localeCompare(a.date));
    const [newest] = entries;
    if (!newest) return [];
    const published = byFolder.get(newest.id);
    const state: RunState = !published
      ? "No report published"
      : index.preview
        ? "Test preview"
        : "Delivered";
    return [
      {
        key,
        entries,
        newest,
        linked: entries.find((entry) => byFolder.has(entry.id)),
        openable: new Set(entries.filter((entry) => byFolder.has(entry.id)).map((e) => e.id)),
        published,
        pathway: runPathway(published ?? { pathway: null }, newest),
        state,
      },
    ];
  });
}

/** Whether the newest run's name, sector, period or date holds the typed words. */
export function matchesQuery(group: IssuerGroup, query: string): boolean {
  const wanted = query.trim().toLowerCase();
  const { newest } = group;
  return [newest.name, newest.issuer, newest.title, newest.sector, newest.period, newest.date].some(
    (value) => value.toLowerCase().includes(wanted),
  );
}
