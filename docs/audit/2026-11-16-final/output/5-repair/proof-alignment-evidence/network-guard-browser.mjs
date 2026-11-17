import assert from "node:assert/strict";
import { createServer } from "node:http";
import { test } from "node:test";
import { chromium } from "../../../../../../web/node_modules/playwright/index.mjs";
import {
  createOfflineProxy,
  installOfflineGuard,
  isLoopbackRequest,
} from "../../../../../../web/scripts/offline-network.mjs";

test("offline proof accepts only local resource schemes and loopback hosts", () => {
  for (const url of [
    "http://127.0.0.1:4321/",
    "http://127.12.3.4/",
    "http://localhost/",
    "http://[::1]/",
    "ws://127.0.0.1:4321/",
    "file:///tmp/report.html",
    "data:text/plain,local",
    "blob:http://127.0.0.1:4321/id",
  ])
    assert.equal(isLoopbackRequest(url), true, url);
  for (const url of [
    "https://example.invalid/resource",
    "http://localhost.example.invalid/",
    "http://127.0.0.1.example.invalid/",
    "http://127.0.0.1@example.invalid/",
    "http://192.168.1.1/",
    "wss://example.invalid/socket",
    "blob:https://example.invalid/id",
    "ftp://127.0.0.1/file",
    "file://server/share/report.html",
  ])
    assert.equal(isLoopbackRequest(url), false, url);
});

test("context guard blocks requests, redirects, popups and WebSockets before network", async () => {
  const server = createServer((request, response) => {
    if (request.url === "/redirect") {
      response.writeHead(302, {
        Location: "https://example.invalid/redirected",
      });
      response.end();
      return;
    }
    response.setHeader("Content-Type", "text/html");
    response.end(
      '<a target="_blank" href="https://example.invalid/popup">Open</a>',
    );
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const proxy = await createOfflineProxy();
  const browser = await chromium.launch({
    ...(process.env.CHROME_PATH
      ? { executablePath: process.env.CHROME_PATH }
      : { channel: "chrome" }),
    proxy: proxy.settings,
  });
  try {
    const context = await browser.newContext({ serviceWorkers: "block" });
    const guard = await installOfflineGuard(context);
    const page = await context.newPage();
    const origin = `http://127.0.0.1:${String(server.address().port)}`;
    await page.goto(origin);
    assert.deepEqual(guard.attempts, []);
    await page.evaluate(() =>
      fetch("https://example.invalid/fetch").catch(() => null),
    );
    const redirected = await context.newPage();
    await redirected.goto(`${origin}/redirect`).catch(() => null);
    const popup = page.waitForEvent("popup");
    await page.getByRole("link", { name: "Open", exact: true }).click();
    await (await popup).waitForLoadState().catch(() => null);
    await page.evaluate(
      () =>
        new Promise((resolve) => {
          const socket = new WebSocket("wss://example.invalid/socket");
          socket.addEventListener("close", resolve);
          socket.addEventListener("error", resolve);
        }),
    );
    assert.deepEqual(
      guard.attempts.map(({ url }) => url).sort(),
      [
        "https://example.invalid/fetch",
        "https://example.invalid/redirected",
        "https://example.invalid/popup",
        "wss://example.invalid/socket",
      ].sort(),
    );
    assert.throws(
      () => guard.assertOffline(),
      /Non-loopback requests attempted/u,
    );
    assert.ok(
      proxy.attempts.some(
        ({ target, method }) =>
          target === "example.invalid:443" && method === "CONNECT",
      ),
      "The denial proxy must stop the redirected connection",
    );
    await context.close();
  } finally {
    await browser.close();
    await proxy.close();
    await new Promise((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve())),
    );
  }
});
