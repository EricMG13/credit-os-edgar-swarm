import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { askAhead, LIBRARY_ADDRESS, request, snapshotAddress } from "./ahead";
import { ConnectedApp, preloadPage } from "./ConnectedApp";

const INDEX = { catalogue: { real: [] }, workspace: { runs: {} } };

function serve() {
  const fetch = vi.fn<(address: string, init?: RequestInit) => Promise<Response>>(() =>
    Promise.resolve(Response.json(INDEX)),
  );
  vi.stubGlobal("fetch", fetch);
  return fetch;
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

it("draws a page loaded ahead in the first drawing, with no loading state, and reads its index once", async () => {
  const fetch = serve();
  await preloadPage("/");
  expect(fetch.mock.calls).toEqual([[LIBRARY_ADDRESS, { cache: "no-store" }]]);
  render(<ConnectedApp path="/" mode="synthetic" />);
  expect(screen.queryByRole("status", { name: "Loading this page" })).toBeNull();
  expect(screen.getByRole("heading", { level: 1, name: "Library" })).toBeVisible();
  expect(await screen.findByText("No reports yet")).toBeVisible();
  expect(fetch).toHaveBeenCalledOnce();
});

it("asks ahead for the report at a report address, and for nothing at a run address", async () => {
  const fetch = serve();
  await preloadPage("/report/acme%202026");
  await preloadPage("/runs");
  await preloadPage("/nowhere");
  expect(fetch.mock.calls.map(([address]) => address)).toEqual([
    "/connected/snapshot?run=acme%202026",
  ]);
  expect(snapshotAddress()).toBe("/connected/snapshot");
});

it("gives an answer asked for ahead to the first request only", async () => {
  const fetch = serve();
  askAhead(LIBRARY_ADDRESS);
  const { signal } = new AbortController();
  const first = request(LIBRARY_ADDRESS, signal);
  expect(fetch).toHaveBeenCalledOnce();
  await expect(first.then((response) => response.json())).resolves.toEqual(INDEX);
  await request(LIBRARY_ADDRESS, signal);
  expect(fetch.mock.calls[1]).toEqual([LIBRARY_ADDRESS, { cache: "no-store", signal }]);
});

it("reports a failed read ahead to the page that takes it", async () => {
  vi.stubGlobal("fetch", () => Promise.reject(new TypeError("Failed to fetch")));
  askAhead(LIBRARY_ADDRESS);
  await expect(request(LIBRARY_ADDRESS, new AbortController().signal)).rejects.toThrow(
    "Failed to fetch",
  );
});
