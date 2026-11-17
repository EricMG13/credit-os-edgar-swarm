import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import {
  copyFile,
  mkdir,
  mkdtemp,
  readFile,
  rm,
  symlink,
  writeFile,
} from "node:fs/promises";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import path from "node:path";
import { after, before, test } from "node:test";
import { promisify } from "node:util";

const project = path.resolve(import.meta.dirname, "../../../../../..");
const web = path.join(project, "web");
const require = createRequire(path.join(web, "package.json"));
const { build } = require("esbuild");
const capture =
  process.env.FID_CAPTURE_SCRIPT ??
  path.join(import.meta.dirname, "capture.mjs");
const nativeChrome = process.env.CHROMIUM_PATH;
assert.ok(
  nativeChrome,
  "Set CHROMIUM_PATH to an installed browser; this test installs nothing",
);
const fixture = JSON.parse(
  await readFile(path.join(web, "fixtures/library.json"), "utf8"),
);
const trace = fixture.slice.issuers
  .flatMap((issuer) => issuer.runs ?? [])
  .find((run) => run.traces?.["cash-conversion"]).traces["cash-conversion"];
const exec = promisify(execFile);
let root;

before(async () => {
  root = await mkdtemp(path.join(tmpdir(), "fidelity-markers-"));
  for (const directory of ["web/dist", "web/scripts"])
    await mkdir(path.join(root, directory), { recursive: true });
  await symlink(
    path.join(web, "node_modules"),
    path.join(root, "web/node_modules"),
    "dir",
  );
  // The original fixtures remain read-only. The temporary page draws real components and one original trace.
  await symlink(
    path.join(web, "fixtures"),
    path.join(root, "web/fixtures"),
    "dir",
  );
  for (const name of ["offline-network.mjs", "fixture-data.mjs"])
    await copyFile(
      path.join(web, "scripts", name),
      path.join(root, "web/scripts", name),
    );
  await copyFile(
    path.join(web, "package.json"),
    path.join(root, "web/package.json"),
  );
  await build({
    stdin: {
      contents: `
        import { useState } from "react";
        import { createRoot } from "react-dom/client";
        import { TraceControl } from ${JSON.stringify(path.join(web, "src/pages/library/parts/TraceControl.tsx"))};
        import { TraceDrawer } from ${JSON.stringify(path.join(web, "src/pages/library/parts/TraceDrawer.tsx"))};
        import { RunContext } from ${JSON.stringify(path.join(web, "src/pages/library/parts/RunContext.ts"))};
        import { Tooltip, TooltipTrigger } from ${JSON.stringify(path.join(web, "src/components/base/tooltip/tooltip.tsx"))};
        const trace = ${JSON.stringify(trace)};
        const mode = document.body.dataset.mode;
        function Fixture() {
          const [open, setOpen] = useState(false);
          return <RunContext value={{ traces: { held: trace }, open: () => { if (mode !== "broken-active") setOpen(true); } }}>
            <main><h1>Capture interface contract</h1>
              <TraceControl trace="held" label="Show sources for this sourced finding" />
              {mode === "mixed" || mode === "broken-active" ? <TraceControl trace={null} label="Show sources for this missing finding" /> :
                <Tooltip title={mode === "wrong-tooltip" ? "Unexpected tooltip" : "No source recorded"}>
                  <TooltipTrigger
                    aria-label={mode === "ambiguous-disabled" ? "Show sources for an unexplained disabled control" : "Show sources for this missing finding: no source recorded"}
                    aria-disabled={mode === "enabled-marker" ? undefined : "true"}
                    isDisabled={mode === "native-disabled"}
                    onPress={mode === "opening-marker" ? () => setOpen(true) : undefined}
                  >Unavailable</TooltipTrigger>
                </Tooltip>}
            </main>
            <TraceDrawer trace={trace} evidenceHref="#/evidence/trace/T-0042" isOpen={open} onClose={() => setOpen(false)} />
          </RunContext>;
        }
        createRoot(document.getElementById("root")).render(<Fixture />);
      `,
      loader: "tsx",
      resolveDir: web,
    },
    bundle: true,
    jsx: "automatic",
    alias: { "@": path.join(web, "src") },
    outfile: path.join(root, "web/dist/fixture.js"),
    logLevel: "silent",
  });
});

after(async () => {
  if (root) await rm(root, { recursive: true, force: true });
});

async function collect(mode) {
  await writeFile(
    path.join(root, "web/dist/index.html"),
    `<!doctype html><html><head><title>Capture contract</title><style>svg{width:16px;height:16px}button{min-width:28px;min-height:28px}[role=dialog]{background:white}</style></head><body data-mode="${mode}"><div id="root"></div><script defer src="fixture.js"></script></body></html>`,
  );
  const out = path.join(root, `out-${mode}`);
  let exit = 0;
  let logs;
  try {
    logs = await exec(process.execPath, [capture, out, "--surface", "static"], {
      env: {
        ...process.env,
        REPO_ROOT: root,
        ONLY: "library--home",
        FID_CONCURRENCY: "1",
      },
      timeout: 60000,
      maxBuffer: 1024 * 1024,
    });
  } catch (error) {
    assert.equal(
      error.killed,
      false,
      "capture must finish within its normal budget",
    );
    exit = error.code;
    logs = error;
  }
  const screen = JSON.parse(
    await readFile(path.join(out, "static/library-home.json"), "utf8"),
  );
  const index = JSON.parse(
    await readFile(path.join(out, "index.json"), "utf8"),
  );
  const guard = JSON.parse(
    await readFile(path.join(out, "offline-static.json"), "utf8"),
  );
  assert.deepEqual(
    guard.contextAttempts,
    [],
    "fixture must make no outside-app request",
  );
  assert.deepEqual(index.surfaces.static.failed, []);
  if (process.env.FID_MARKER_EVIDENCE) {
    await mkdir(process.env.FID_MARKER_EVIDENCE, { recursive: true });
    await writeFile(
      path.join(process.env.FID_MARKER_EVIDENCE, `${mode}.json`),
      JSON.stringify(
        { exit, screen, surface: index.surfaces.static, guard },
        null,
        2,
      ),
    );
  }
  return {
    out,
    exit,
    screen,
    surface: index.surfaces.static,
    logs: logs.stderr,
  };
}

function assertOriginalDrawer(drawer) {
  assert.equal(drawer.control, "Show sources for this sourced finding");
  assert.equal(drawer.drawer.title, trace.title);
  const text = drawer.drawer.outline.map((line) => line.text);
  for (const original of [
    trace.heading,
    trace.subtitle,
    trace.statement,
    trace.qualification,
  ])
    assert.ok(
      text.includes(original),
      `original drawer text retained: ${original}`,
    );
  assert.deepEqual(drawer.drawer.links, [
    { text: "Open in Evidence", href: "#/evidence/trace/T-0042" },
  ]);
}

test("actual sourced drawer and MissingTrace marker are both captured without inventing a drawer", async () => {
  const { out, exit, screen, surface, logs } = await collect("mixed");
  assert.equal(exit, 0, logs);
  assert.equal(screen.counts.traceControls, 2);
  assert.equal(screen.counts.traceDrawers, 1);
  assert.equal(screen.counts.traceUnavailable, 1);
  assert.equal(screen.counts.traceErrors, 0);
  assert.equal(screen.sourceDrawers.length, 1);
  assertOriginalDrawer(screen.sourceDrawers[0]);
  assert.deepEqual(screen.unavailableSourceControls, [
    {
      n: 2,
      control: "Show sources for this missing finding: no source recorded",
      ariaDisabled: "true",
      disabled: false,
      tooltip: "No source recorded",
      opensDialog: false,
    },
  ]);
  assert.deepEqual(screen.sourceControlErrors, []);
  assert.equal(surface.traceControls, 2);
  assert.equal(surface.traceUnavailable, 1);
  assert.equal(surface.traceErrors, 0);
  // Exercise the unchanged downstream consumer against the real serialized result.
  const comparison = path.join(root, "comparisons");
  await exec(
    process.execPath,
    [
      path.join(import.meta.dirname, "compare.mjs"),
      out,
      "--repo",
      project,
      "--out",
      comparison,
      "--name",
      "mixed-contract",
    ],
    { timeout: 15000 },
  );
  const report = JSON.parse(
    await readFile(
      path.join(comparison, "compare-mixed-contract.json"),
      "utf8",
    ),
  );
  const comparedDrawers = report.items.filter((item) => item.kind === "drawer");
  assert.ok(comparedDrawers.some((item) => item.text === trace.statement));
  assert.ok(
    comparedDrawers.every(
      (item) => item.label === "Show sources for this sourced finding",
    ),
  );
});

test("a broken active source control remains an error and makes actual capture exit nonzero", async () => {
  const { exit, screen, surface } = await collect("broken-active");
  assert.equal(exit, 1);
  assert.equal(screen.counts.traceControls, 2);
  assert.equal(screen.counts.traceDrawers, 0);
  assert.equal(screen.counts.traceUnavailable, 1);
  assert.equal(screen.counts.traceErrors, 1);
  assert.deepEqual(screen.sourceDrawers, []);
  assert.equal(screen.sourceControlErrors.length, 1);
  assert.equal(
    screen.sourceControlErrors[0].control,
    "Show sources for this sourced finding",
  );
  assert.match(screen.sourceControlErrors[0].error, /Timeout 3000ms exceeded/u);
  assert.equal(surface.traceErrors, 1);
});

for (const mode of [
  "ambiguous-disabled",
  "enabled-marker",
  "native-disabled",
  "wrong-tooltip",
  "opening-marker",
]) {
  test(`${mode} is rejected while the original sourced drawer is still read`, async () => {
    const { exit, screen, surface } = await collect(mode);
    assert.equal(exit, 1);
    assert.equal(screen.counts.traceControls, 2);
    assert.equal(screen.counts.traceDrawers, 1);
    assert.equal(screen.counts.traceUnavailable, 0);
    assert.equal(screen.counts.traceErrors, 1);
    assert.equal(screen.sourceDrawers.length, 1);
    assertOriginalDrawer(screen.sourceDrawers[0]);
    assert.deepEqual(screen.unavailableSourceControls, []);
    assert.equal(screen.sourceControlErrors.length, 1);
    const expectedError =
      mode === "wrong-tooltip"
        ? /Unexpected MissingTrace tooltip: Unexpected tooltip/u
        : mode === "opening-marker"
          ? /MissingTrace marker opened a dialog/u
          : /Source control does not match the disabled MissingTrace marker/u;
    assert.match(screen.sourceControlErrors[0].error, expectedError);
    assert.equal(surface.traceErrors, 1);
  });
}
