import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ConnectedLoadBoundary } from "./ConnectedLoadBoundary";

function FailedPage(): never {
  throw new Error("page chunk unavailable");
}

describe("connected application chunk loading", () => {
  it("shows an accessible failure and reloads the current route on request", async () => {
    const reload = vi.fn();
    const errors = vi.spyOn(console, "error").mockImplementation(() => undefined);
    try {
      render(
        <ConnectedLoadBoundary reload={reload}>
          <FailedPage />
        </ConnectedLoadBoundary>,
      );

      expect(await screen.findByRole("alert")).toHaveTextContent(
        "This page could not be loaded. Reload to try again.",
      );
      fireEvent.click(screen.getByRole("button", { name: "Reload page" }));
      expect(reload).toHaveBeenCalledOnce();
    } finally {
      errors.mockRestore();
    }
  });
});
