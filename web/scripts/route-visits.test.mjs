import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";
import {
  defaultAddressProblems,
  checkRoutes,
  domProblems,
  libraryDeclaresHome,
  visitsFor,
} from "./route-visits.mjs";
import { pathsIn } from "./route-paths.mjs";

function withStubGroup(routesSource, body) {
  const root = mkdtempSync(path.join(tmpdir(), "credit-os-visits-"));
  try {
    mkdirSync(path.join(root, "pages", "signal"), { recursive: true });
    mkdirSync(path.join(root, "fixtures"));
    writeFileSync(path.join(root, "pages", "signal", "routes.tsx"), routesSource);
    writeFileSync(
      path.join(root, "fixtures", "signal.json"),
      JSON.stringify({ params: { "/signal/:tab": [{ tab: "a" }] } }),
    );
    body(path.join(root, "pages"), path.join(root, "fixtures"));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

test("a group that declares a home also gets a bare-address visit", () => {
  const source = 'export const routes = [{ path: "/signal/:tab", home: "/signal/a" }];';
  withStubGroup(source, (pages, fixtures) => {
    const { visits, failures } = visitsFor("signal", pages, fixtures);
    assert.deepEqual(failures, []);
    assert.deepEqual(
      visits.map(({ hash, bare }) => [hash, bare]),
      [
        ["#/signal/a", undefined],
        ["#/signal", true],
      ],
    );
  });
});

test("a group with no home gets no bare-address visit", () => {
  withStubGroup('export const routes = [{ path: "/signal/:tab" }];', (pages, fixtures) => {
    assert.deepEqual(
      visitsFor("signal", pages, fixtures).visits.map(({ hash }) => hash),
      ["#/signal/a"],
    );
  });
});

test("route arrays are read only from exported routes declarations", () => {
  const source = `
    const unrelated = [{ path: "/ignored" }];
    export const libraryRoutes: readonly Route[] = [
      { path: "/library/:issuer", title: "A ] label" },
      { path: "/library/home" },
    ];
  `;
  assert.deepEqual(pathsIn(source), ["/library/:issuer", "/library/home"]);
  assert.deepEqual(pathsIn('export const routes = [{ path: "/fixture" }];'), ["/fixture"]);
  assert.deepEqual(
    pathsIn('export const modelRoutes = [{ path: "/model/a]b", label: `text ]` }];'),
    ["/model/a]b"],
  );
  assert.deepEqual(
    pathsIn(`export const signalRoutes = [
      { path: "/signal/feed", label: "a ] bracket" }, // comment has ] too
      { path: "/signal/settings" },
    ];`),
    ["/signal/feed", "/signal/settings"],
  );
});

test("Not built yet fails a bare address only; a page may contain those words", () => {
  const dom = "<main><h1>T</h1><p>Not built yet</p></main>";
  assert.deepEqual(domProblems(dom, true), ['the live DOM contains "Not built yet"']);
  assert.deepEqual(domProblems(dom, false), []);
});

test("every visit needs exactly one h1", () => {
  assert.deepEqual(domProblems("<main><h1 class=a>T</h1></main>", false), []);
  assert.deepEqual(domProblems("<main><p>x</p></main>", false), [
    "the live DOM has 0 h1 elements, expected exactly 1",
  ]);
  assert.deepEqual(domProblems("<main><h1>a</h1><h1>b</h1></main>", true), [
    "the live DOM has 2 h1 elements, expected exactly 1",
  ]);
});

test("a failure text and an injected style are reported", () => {
  assert.deepEqual(domProblems("<style><h1>a</h1>Page not found", false), [
    'the live DOM contains "<style"',
    'the live DOM contains "Page not found"',
  ]);
});

test("the default address of a library with a home must be one real page", () => {
  assert.deepEqual(defaultAddressProblems("<main><h1>Library</h1><p>fine</p></main>"), []);
  assert.deepEqual(
    defaultAddressProblems("<main><h1>L</h1><p>Library data is missing</p></main>"),
    ['the live DOM contains "Library data is missing"'],
  );
  assert.deepEqual(defaultAddressProblems("<main><h1>L</h1><p>Not built yet</p></main>"), [
    'the live DOM contains "Not built yet"',
  ]);
  assert.deepEqual(defaultAddressProblems("<div><h1>L</h1></div>"), [
    "the live DOM has 0 main elements, expected exactly 1",
  ]);
});

test("libraryDeclaresHome reads the library group's routes.tsx", () => {
  withStubGroup("export const routes = [];", (pages) => {
    mkdirSync(path.join(pages, "library"));
    writeFileSync(
      path.join(pages, "library", "routes.tsx"),
      'export const libraryRoutes = [{ home: "/library/x" }];',
    );
    assert.equal(libraryDeclaresHome(pages), true);
    writeFileSync(path.join(pages, "library", "routes.tsx"), "export const libraryRoutes = [];");
    assert.equal(libraryDeclaresHome(pages), false);
  });
});

function withRouteProofFolder(body) {
  const root = mkdtempSync(path.join(tmpdir(), "credit-os-route-proof-"));
  const folder = path.join(root, "built");
  const work = path.join(root, "work");
  mkdirSync(folder);
  try {
    writeFileSync(path.join(folder, "index.html"), "<!doctype html>");
    body({ folder, work });
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

function captureConsole(body) {
  const original = console.log;
  const lines = [];
  console.log = (...parts) => lines.push(parts.join(" "));
  try {
    return { result: body(), lines };
  } finally {
    console.log = original;
  }
}

test("the route checker passes every declared address and unknown hash", () => {
  withRouteProofFolder(({ folder, work }) => {
    const visits = [];
    const { result, lines } = captureConsole(() =>
      checkRoutes({
        browser: "test",
        folder,
        work,
        dumpPage: (_browser, _folder, hash) => {
          visits.push(hash);
          return {
            dom:
              hash === "#/no-such-page"
                ? "<main><h1>Page not found</h1></main>"
                : "<main><h1>Route</h1></main>",
            log: "",
          };
        },
        problems: () => [],
      }),
    );
    assert.equal(result, true);
    assert.ok(visits.length > 1);
    assert.ok(lines.some((line) => line.includes("an unknown hash expects")));
  });
});

test("the route checker fails a visit with a bad DOM and a browser error", () => {
  withRouteProofFolder(({ folder, work }) => {
    let first = true;
    const { result, lines } = captureConsole(() =>
      checkRoutes({
        browser: "test",
        folder,
        work,
        dumpPage: (_browser, _folder, hash) => {
          if (hash === "#/no-such-page")
            return { dom: "<main><h1>Page not found</h1></main>", log: "" };
          if (first) {
            first = false;
            return { dom: "<main></main>", log: "Uncaught page error" };
          }
          return { dom: "<main><h1>Route</h1></main>", log: "" };
        },
        problems: (log) => (log ? ["Uncaught"] : []),
      }),
    );
    assert.equal(result, false);
    assert.ok(lines.some((line) => line.includes("FAIL route")));
    assert.ok(lines.some((line) => line.includes("stderr contains")));
    assert.ok(lines.some((line) => line.includes("expected exactly 1")));
  });
});
