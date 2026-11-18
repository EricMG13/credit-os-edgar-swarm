import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createServer } from "node:http";

const [repo, evidence] = process.argv.slice(2);
const blocks = [];
const failures = [];
const resets = [];
const sockets = new Set();
const server = createServer((request, response) => {
  blocks.push({ target: request.url, method: request.method });
  response.writeHead(403).end("Offline verification");
});
server.on("connection", (socket) => {
  sockets.add(socket);
  socket.once("close", () => sockets.delete(socket));
  socket.on("error", (error) => {
    if (error.code === "ECONNRESET" || error.code === "EPIPE") {
      resets.push(error.code);
    } else {
      failures.push(String(error));
    }
    socket.destroy();
  });
});
server.on("connect", (request, socket) => {
  blocks.push({ target: request.url, method: "CONNECT" });
  socket.end("HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n");
});
await new Promise((resolve, reject) => {
  server.once("error", reject);
  server.listen(0, "127.0.0.1", resolve);
});
const endpoint = "http://127.0.0.1:" + server.address().port;
const local = mkdtempSync(join(tmpdir(), "sw-file-"));
const wrapper = join(local, "chrome-with-offline-proxy");
const chrome = "/workspace/audit-browsers/chrome/opt/google/chrome/chrome";
writeFileSync(
  wrapper,
  '#!/bin/sh\nexec "' + chrome + '" --proxy-server=' + endpoint +
    ' --disable-background-networking --disable-quic "$@"\n',
  { mode: 0o700 },
);
try {
  const child = spawn("timeout", ["300", "npm", "--prefix", "web", "run", "test:file:gates"], {
    cwd: repo,
    env: { ...process.env, CI: "true", CHROME_PATH: wrapper, CREDIT_OS_OUT_DIR: join(local, "dist") },
    stdio: "inherit",
  });
  process.exitCode = await new Promise((resolve, reject) => {
    child.once("error", reject);
    child.once("exit", (code, signal) => resolve(code ?? (signal ? 1 : 0)));
  });
} finally {
  for (const socket of sockets) socket.destroy();
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  writeFileSync(evidence, JSON.stringify({ blocks, resets, failures }, null, 2) + "\n");
  if (failures.length) process.exitCode = 1;
  rmSync(local, { recursive: true, force: true });
}
