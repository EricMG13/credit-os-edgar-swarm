import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { test } from "node:test";
import { pathToFileURL } from "node:url";

const project = path.resolve(import.meta.dirname, "../../../../../..");
const { isLoopbackRequest } = await import(
  pathToFileURL(path.join(project, "web/scripts/offline-network.mjs")).href
);
const source = await readFile(
  path.join(project, "web/scripts/connected-proof.mjs"),
  "utf8",
);
const start = source.indexOf("async function checkCompactLibrary(");
const body = source.slice(
  start,
  source.indexOf("async function checkLibrarySearch(", start),
);
assert.ok(body.startsWith("async function checkCompactLibrary("));
const checkCompactLibrary = new Function(
  "assert",
  `${body}\nreturn checkCompactLibrary;`,
)(assert);

test("R4-019 observed Edge local download icon is an offline resource", () => {
  assert.equal(
    isLoopbackRequest(
      "edge://fileicon/?path=%2Ftmp%2Fplaywright-artifacts-L5o3oy%2F712760fd-0bc0-4e76-9677-a327863eded5",
    ),
    true,
  );
});

test("fileicon classification is limited to absolute local paths on the two browser services", () => {
  for (const scheme of ["chrome", "edge"]) {
    for (const localPath of [
      "/tmp/report.pdf",
      "C:\\Users\\Analyst\\Downloads\\report.pdf",
      "C:/Users/Analyst/report.pdf",
    ]) {
      assert.equal(
        isLoopbackRequest(
          `${scheme}://fileicon/?path=${encodeURIComponent(localPath)}`,
        ),
        true,
      );
    }
    for (const remoteOrRelative of [
      "",
      "report.pdf",
      "//server/share/report.pdf",
      "\\\\server\\share\\report.pdf",
      "\\\\?\\UNC\\server\\share",
      "/\\server/share",
      "https://example.invalid/report.pdf",
      "file://server/share/report.pdf",
      "file:///tmp/report.pdf",
      "/tmp/\u0000report.pdf",
    ]) {
      assert.equal(
        isLoopbackRequest(
          `${scheme}://fileicon/?path=${encodeURIComponent(remoteOrRelative)}`,
        ),
        false,
      );
    }
    for (const address of [
      `${scheme}://settings/`,
      `${scheme}://downloads/`,
      `${scheme}://example.invalid/`,
      `${scheme}://fileicon/other?path=%2Ftmp%2Freport.pdf`,
      `${scheme}://fileicon/?path=%2Ftmp%2Freport.pdf&path=%2Ftmp%2Fother.pdf`,
      `${scheme}://fileicon/?path=%2Ftmp%2Freport.pdf&url=https%3A%2F%2Fexample.invalid`,
      `${scheme}://user@fileicon/?path=%2Ftmp%2Freport.pdf`,
      `${scheme}://fileicon:123/?path=%2Ftmp%2Freport.pdf`,
      `${scheme}://fileicon/?path=%2Ftmp%2Freport.pdf#other`,
    ])
      assert.equal(isLoopbackRequest(address), false, address);
  }
  for (const address of [
    "https://example.invalid/",
    "file://server/share/report.pdf",
    "other://fileicon/?path=%2Ftmp%2Freport.pdf",
  ]) {
    assert.equal(isLoopbackRequest(address), false, address);
  }
});

function fixture() {
  const output = "one/CP-6.md";
  const sha256 = "a".repeat(64);
  const text = "The synthetic issuer shows one observed item.";
  const lead = { module: "CP-6", output, sha256, line: 20, text };
  return {
    index: {
      catalogue: { real: [{ id: "one" }] },
      workspace: {
        runs: {
          key: { folder: "one", issuerKey: "issuer", pathway: "full", lead },
        },
      },
    },
    snapshot: {
      workspace: {
        runs: {
          key: {
            folder: "one",
            issuerKey: "issuer",
            pathway: "full",
            modules: { "CP-6": { default: output } },
          },
        },
        outputs: {
          [output]: { id: output, run: "key", module: "CP-6", sha256 },
        },
        handoffs: {
          [sha256]: [
            {
              heading: "Bottom line",
              level: 3,
              blocks: [{ type: "text", line: 20, text }],
            },
          ],
        },
      },
    },
  };
}

async function checkFixture(data) {
  const requests = [];
  const page = {
    request: {
      get: async (address, options) => {
        assert.deepEqual(options, { maxRedirects: 0 });
        requests.push(new URL(address).pathname);
        return {
          status: () => 200,
          json: async () =>
            address.includes("/connected/library") ? data.index : data.snapshot,
        };
      },
    },
  };
  await checkCompactLibrary(page, "http://127.0.0.1:1234/", "one");
  assert.deepEqual(requests, ["/connected/library", "/connected/snapshot"]);
}

test("C1-025/C3-001 compact proof accepts only the exact selected lead and its source identity", async () => {
  await checkFixture(fixture());
});

test("compact proof retains exact public keys and rejects lead source or text drift", async () => {
  for (const mutate of [
    (data) => {
      data.index.workspace.extra = {};
    },
    (data) => {
      data.index.workspace.runs.key.extra = true;
    },
    (data) => {
      data.index.workspace.runs.key.lead.extra = true;
    },
    (data) => {
      data.index.workspace.runs.key.lead.module = "CP-2";
    },
    (data) => {
      data.index.workspace.runs.key.lead.output = "other/CP-6.md";
    },
    (data) => {
      data.index.workspace.runs.key.lead.sha256 = "b".repeat(64);
    },
    (data) => {
      data.index.workspace.runs.key.lead.line += 1;
    },
    (data) => {
      data.index.workspace.runs.key.lead.text += " Extra text.";
    },
    (data) => {
      data.snapshot.workspace.outputs["one/CP-6.md"].run = "other-key";
    },
    (data) => {
      data.snapshot.workspace.outputs["one/CP-6.md"].module = "CP-2";
    },
    (data) => {
      data.snapshot.workspace.outputs["one/CP-6.md"].id = "other/CP-6.md";
      data.index.workspace.runs.key.lead.output = "other/CP-6.md";
    },
    (data) => {
      data.index.workspace.runs.key.issuerKey = "other-issuer";
    },
    (data) => {
      data.index.workspace.runs.key.pathway = "other-pathway";
    },
  ]) {
    const data = fixture();
    mutate(data);
    await assert.rejects(checkFixture(data));
  }
});
