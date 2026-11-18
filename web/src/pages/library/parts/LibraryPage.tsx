import type { ReactNode } from "react";
import { useSource } from "../../source";
import { readSlice } from "../read";
import type { LibrarySlice } from "../slice";
import { Absent } from "./NotHeld";
import { PageTitle } from "./PageTitle";

/**
 * Every library route is full bleed, so this is the one wrapper that gives a page the shell's
 * padding (`p-8`), and the fallback states draw the page's own h1: `title` is the page name.
 */
function Padded({ children }: { children: ReactNode }) {
  return <div className="p-8">{children}</div>;
}

function Notice({ title, children }: { title: string; children: string }) {
  return (
    <Padded>
      <PageTitle>{title}</PageTitle>
      <p className="mt-6 text-text-secondary">{children}</p>
    </Padded>
  );
}

/**
 * The shipped build holds no reports (OQ-01: the static app is a design reference), so a page with
 * no library says that in the reader's words and goes back to the library home.
 */
function NoReports() {
  return (
    <Absent
      title="No reports in this build"
      description="This build is a design reference and holds no reports, so there is nothing to show at this address. Reports are written by runs on the run service."
    />
  );
}

/**
 * Reads the library slice and draws `children` only from what the reader returned. App already
 * shows an invalid slice in place of the page; this keeps a page honest when rendered on its own.
 * `absent` is the state a page draws under its h1 when the build holds no library at all.
 */
export function LibraryPage({
  title,
  absent = <NoReports />,
  children,
}: {
  title: string;
  absent?: ReactNode;
  children: (slice: LibrarySlice) => ReactNode;
}) {
  const result = readSlice(useSource().library);
  switch (result.kind) {
    case "absent":
      return (
        <Padded>
          <div className="flex flex-col gap-6">
            <PageTitle>{title}</PageTitle>
            {absent}
          </div>
        </Padded>
      );
    case "invalid":
      return (
        <Notice title={title}>{`The library data has a malformed record: ${result.reason}`}</Notice>
      );
    case "ok":
      return <Padded>{children(result.data)}</Padded>;
  }
}
