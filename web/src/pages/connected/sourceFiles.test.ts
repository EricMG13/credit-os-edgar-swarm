import { describe, expect, it } from "vitest";
import { sourceCitationNote, sourceFileLinks } from "./sourceFiles";

const digest = "a".repeat(64);
const href = `/connected/sources/run/${digest}/Issuer%20report.txt`;

describe("verified source file links", () => {
  it("keeps exact source identity and the cited page range", () => {
    expect(
      sourceFileLinks("run", {
        name: "Issuer report.txt",
        sha256: digest,
        href,
        pageHref: `${href}?page=2&end=3`,
      }),
    ).toEqual([
      { label: "Open cited source pages 2–3: Issuer report.txt", href: `${href}?page=2&end=3` },
      { label: "Open source file: Issuer report.txt", href },
    ]);
  });

  it("accepts bridge encoding for punctuation in retained filenames", () => {
    const name = "Moody's report (2026).pdf";
    const encoded = `/connected/sources/run/${digest}/Moody%27s%20report%20%282026%29.pdf`;
    expect(sourceFileLinks("run", { name, sha256: digest, href: encoded })).toEqual([
      { label: `Open source file: ${name}`, href: encoded },
    ]);
  });

  it.each([
    undefined,
    "https://other.test/file",
    href.replace("/run/", "/other/"),
    href.replace(digest, "b".repeat(64)),
  ])("refuses an unattested or mismatched file URL %s", (candidate) => {
    expect(
      sourceFileLinks("run", { file: "Issuer report.txt", sha256: digest, href: candidate }),
    ).toEqual([]);
  });

  it.each([
    "?page=0",
    "?page=3&end=2",
    "?page=9007199254740992",
    "?page=-1",
    "?page=2&redirect=https://other.test",
    "/other?page=1",
  ])("refuses invalid page addressing %s", (query) => {
    expect(
      sourceFileLinks("run", {
        file: "Issuer report.txt",
        sha256: digest,
        href,
        pageHref: href + query,
      }),
    ).toEqual([{ label: "Open source file: Issuer report.txt", href }]);
  });
});

it("retains both a source problem and an unmatched-quote qualification", () => {
  expect(sourceCitationNote({ reason: "Page range incomplete", quote_found: false })).toBe(
    "Page range incomplete The recorded quote or value was not located on the cited page.",
  );
  expect(sourceCitationNote({ reason: null, quote_found: true })).toBeNull();
});
