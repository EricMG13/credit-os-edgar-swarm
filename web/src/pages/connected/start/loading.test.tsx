import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { ConnectedApp } from "../ConnectedApp";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

it("draws the loading state in the page's final layout: stepper, step and rail, as shapes only", () => {
  vi.stubGlobal(
    "fetch",
    vi.fn(() => new Promise<Response>(() => {})),
  );
  render(<ConnectedApp path="/start" mode="synthetic" />);
  const status = screen.getByRole("status", { name: "Loading run options" });
  const shapes = status.querySelector("[aria-hidden='true']");
  expect(shapes?.querySelectorAll("section")).toHaveLength(3);
  expect(shapes?.querySelector(".xl\\:col-span-8")).not.toBeNull();
  expect(shapes?.querySelector(".xl\\:col-span-4")).not.toBeNull();
  expect(status).toHaveTextContent("");
});
