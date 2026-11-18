# Credential and path scan

Gitleaks was unavailable. The fallback scan on source `a987af9b` covered
3,583 tracked regular files, all 36 checkout build files, and all 1,400
runtime ZIP members. It checked private key headers, recognizable provider
and GitHub tokens, AWS/Google and Slack key shapes, JWT strings, authorization
headers, quoted credential assignments, signed URLs and URL credentials.
The retained results contain paths, lines, match types and hashes without
credential values.

Nineteen tracked matches were reviewed. Eighteen are test sentinels for
redaction, environment allowlisting or synthetic service tests. The other
is the exact same synthetic sentinel stored in a historical change-pack
diff. Its match hash equals the current test fixture. No candidate
credential was found in either build distribution or any ZIP member.

The fallback also counted 590 absolute path strings in 57 tracked files and
253 in six packaged sources. Checkout dist had zero. Packaged occurrences
are method lineage documentation, earlier rulings and path patterns in the
runtime allowlist/redactor. Ordinary absolute paths are permitted under
R13/R15. The scan found no credential in those sources.

[Redacted scan](redacted-scan.json)

Not verified: formats outside the fallback patterns, ignored local files
and user environment contents were outside the tracked/release scan.
