import { describe, expect, it } from "vitest";
import { RequestError } from "./api";
import { errorText, isUnreachable } from "./useResource";

describe("errorText", () => {
  it("says the service cannot be reached for a fetch that never arrived, in any browser's words", () => {
    for (const message of [
      "Failed to fetch",
      "NetworkError when attempting to fetch resource.",
      "Load failed",
    ]) {
      const failure = new TypeError(message);
      expect(isUnreachable(failure)).toBe(true);
      expect(errorText(failure)).toBe(
        "The service cannot be reached. Try again, or ask whoever runs the service to check it.",
      );
    }
  });

  it("keeps the service's own message and any other error as written", () => {
    expect(errorText(new RequestError("unknown module CP-MODEL", 400))).toBe(
      "unknown module CP-MODEL",
    );
    expect(errorText(new Error("The published library could not be loaded."))).toBe(
      "The published library could not be loaded.",
    );
    // A TypeError from the page's own code is not a service that is down.
    const bug = new TypeError("Cannot read properties of undefined (reading 'x')");
    expect(isUnreachable(bug)).toBe(false);
    expect(errorText(bug)).toBe(bug.message);
    expect(errorText("boom")).toBe("The request failed. Try again.");
  });
});
