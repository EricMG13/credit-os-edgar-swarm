import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { createServer } from "node:http";
import {
  copyFile,
  mkdir,
  mkdtemp,
  readFile,
  rm,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { createRequire } from "node:module";
import path from "node:path";
import { test } from "node:test";
import { pathToFileURL } from "node:url";
import { promisify } from "node:util";

const project = path.resolve(import.meta.dirname, "../../../../../..");
const { request } = createRequire(path.join(project, "web/package.json"))(
  "playwright",
);
// A saved predecessor capture can be supplied for the same loopback-only RED control.
const capture =
  process.env.FID_CAPTURE_SCRIPT ??
  path.join(
    project,
    "docs/audit/2026-11-16-final/output/5-repair/fidelity/capture.mjs",
  );
const source = await readFile(capture, "utf8");
const digest = (value) => createHash("sha256").update(value).digest("hex");
const { isLoopbackRequest } = await import(
  pathToFileURL(path.join(project, "web/scripts/offline-network.mjs")).href
);
// Exercise the capture's exact networking statements without launching its browser or a run.
const pairedStart = source.indexOf("async function pairedSnapshot(");
const pairedText = source.slice(
  pairedStart,
  source.indexOf("\nconst connectedReady", pairedStart),
);
assert.ok(pairedText.startsWith("async function pairedSnapshot("));
const pairedSnapshot = new Function(
  "fetch",
  "sha256",
  "isLoopbackRequest",
  `${pairedText}\nreturn pairedSnapshot;`,
)(fetch, digest, isLoopbackRequest);
const stateStart = source.indexOf(
  "  const state",
  source.indexOf("async function submitSyntheticRun("),
);
const stateText = source.slice(
  stateStart,
  source.indexOf("\n  return run;", stateStart),
);
assert.ok(stateText.startsWith("  const state"));
const readRunState = new Function(
  "page",
  "endpoint",
  "run",
  "isLoopbackRequest",
  `return (async () => {${stateText}\nreturn state;})();`,
);

async function captureFixture() {
  const root = await mkdtemp(path.join(tmpdir(), "fidelity-network-"));
  await mkdir(path.join(root, "web/dist"), { recursive: true });
  await mkdir(path.join(root, "web/scripts"), { recursive: true });
  await mkdir(path.join(root, "web/node_modules/playwright"), {
    recursive: true,
  });
  await writeFile(path.join(root, "web/dist/index.html"), "<html></html>");
  await writeFile(path.join(root, "web/package.json"), '{"type":"module"}');
  await writeFile(
    path.join(root, "web/node_modules/playwright/index.js"),
    'exports.chromium = { launch() { throw new Error("BROWSER_LAUNCH_ATTEMPTED"); } };',
  );
  return root;
}

async function captureFailure(root, extra = {}) {
  try {
    await promisify(execFile)(
      process.execPath,
      [capture, path.join(root, "out"), "--surface", "connected"],
      {
        env: { ...process.env, REPO_ROOT: root, ...extra },
        timeout: 5000,
      },
    );
  } catch (error) {
    assert.equal(
      error.killed,
      false,
      "capture must fail promptly, without timeout",
    );
    return error.stderr;
  }
  assert.fail("capture must reject the fixture");
}

test("capture refuses an old root without executing its proof module", async () => {
  const root = await captureFixture();
  try {
    await writeFile(
      path.join(root, "web/scripts/connected-proof.mjs"),
      'console.error("OLD_PROOF_TOP_LEVEL_EXECUTED");',
    );
    const error = await captureFailure(root);
    assert.doesNotMatch(error, /OLD_PROOF_TOP_LEVEL_EXECUTED/u);
    assert.match(error, /offline-network\.mjs/u);
    assert.doesNotMatch(error, /BROWSER_LAUNCH_ATTEMPTED/u);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("capture validates FID_ATTACH before any browser launch", async () => {
  const root = await captureFixture();
  try {
    // The old capture reaches launch through this inert dependency; no proxy or browser starts.
    await writeFile(
      path.join(root, "web/scripts/connected-proof.mjs"),
      "export const createOfflineProxy = async () => ({ settings: {}, attempts: [], close: async () => {} });",
    );
    await copyFile(
      path.join(project, "web/scripts/offline-network.mjs"),
      path.join(root, "web/scripts/offline-network.mjs"),
    );
    // Parser-only address: the launch stub prevents browser/network work even on the old code.
    const error = await captureFailure(root, {
      FID_ATTACH: "http://192.0.2.1/",
    });
    assert.match(error, /FID_ATTACH must be loopback/u);
    assert.doesNotMatch(error, /BROWSER_LAUNCH_ATTEMPTED/u);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

const snapshot = () => ({
  workspace: {
    runs: { one: { folder: "one", pathway: "full", modules: {} } },
    outputs: {},
    handoffs: {},
  },
});

async function withLoopbackServers(json, probe) {
  const hits = [];
  const requests = [];
  let status = 200;
  const target = createServer((incoming, response) => {
    hits.push(incoming.url);
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(json()));
  });
  await new Promise((resolve) => target.listen(0, "127.0.0.1", resolve));
  const receiver = `http://127.0.0.1:${String(target.address().port)}`;
  const origin = createServer((incoming, response) => {
    requests.push(incoming.url);
    if (status === 200 || status === 500) {
      response.statusCode = status;
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify(json()));
      return;
    }
    response.writeHead(status, { Location: `${receiver}/redirect-receiver` });
    response.end();
  });
  try {
    await new Promise((resolve) => origin.listen(0, "127.0.0.1", resolve));
    await probe(
      `http://127.0.0.1:${String(origin.address().port)}`,
      hits,
      requests,
      (code) => {
        status = code;
      },
    );
  } finally {
    for (const server of [origin, target]) {
      server.closeAllConnections();
      await new Promise((resolve) => server.close(resolve));
    }
  }
}

test("pairedSnapshot reads a direct loopback response and never follows a redirect", async () => {
  await withLoopbackServers(
    snapshot,
    async (origin, hits, requests, setStatus) => {
      const direct = await pairedSnapshot(origin, "one");
      assert.equal(
        direct.workspace.runs["comparison-fixture"].folder,
        "comparison-fixture",
      );
      for (const status of [301, 302, 303, 307, 308]) {
        setStatus(status);
        let rejected = false;
        try {
          await pairedSnapshot(origin, "one");
        } catch {
          rejected = true;
        }
        assert.deepEqual(
          hits,
          [],
          "Node fetch must never visit the loopback redirect receiver",
        );
        assert.equal(rejected, true, "Node fetch must reject redirects");
      }
      setStatus(500);
      await assert.rejects(
        pairedSnapshot(origin, "one"),
        /Snapshot request failed: 500/u,
      );
      assert.deepEqual(requests, Array(7).fill("/connected/snapshot"));
    },
  );
});

test("capture run-state API reads direct responses and never follows a redirect", async () => {
  const api = await request.newContext();
  try {
    await withLoopbackServers(
      () => ({ status: "finished" }),
      async (origin, hits, requests, setStatus) => {
        const state = await readRunState(
          { request: api },
          origin,
          "one",
          isLoopbackRequest,
        );
        assert.equal(state.status, "finished");
        for (const status of [301, 302, 303, 307, 308]) {
          setStatus(status);
          let rejected = false;
          try {
            await readRunState(
              { request: api },
              origin,
              "one",
              isLoopbackRequest,
            );
          } catch {
            rejected = true;
          }
          assert.deepEqual(
            hits,
            [],
            "APIRequestContext must never visit the loopback redirect receiver",
          );
          assert.equal(
            rejected,
            true,
            "the run-state API must reject redirect status",
          );
        }
        setStatus(500);
        await assert.rejects(
          readRunState({ request: api }, origin, "one", isLoopbackRequest),
          /Run-state request failed: 500/u,
        );
        assert.deepEqual(requests, Array(7).fill("/api/runs/one"));
      },
    );
  } finally {
    await api.dispose();
  }
});

test("both direct network readers reject a non-loopback initial URL before a request", async () => {
  let calls = 0;
  const page = {
    request: {
      get() {
        calls += 1;
        throw new Error("REQUEST_ATTEMPTED");
      },
    },
  };
  await assert.rejects(
    readRunState(page, "http://192.0.2.1/", "one", isLoopbackRequest),
    /loopback/u,
  );
  assert.equal(calls, 0);
  const guardedPair = new Function(
    "fetch",
    "sha256",
    "isLoopbackRequest",
    `${pairedText}\nreturn pairedSnapshot;`,
  )(
    () => {
      calls += 1;
      throw new Error("REQUEST_ATTEMPTED");
    },
    digest,
    isLoopbackRequest,
  );
  await assert.rejects(guardedPair("http://192.0.2.1/", "one"), /loopback/u);
  assert.equal(calls, 0);
});
