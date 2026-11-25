import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ConnectedApp } from "../ConnectedApp";
import { setUpConnectedPage } from "./connectedTesting";
import { chooseControl } from "./testControls";

// The browser checks a step's controls when it is sent. In place of its bubbles the page says what
// is wrong on the field, in its own words, and focuses it; the step is still not sent.

setUpConnectedPage();

const file = new File(["sample input"], "filing.txt", { type: "text/plain" });

function stubFetch() {
  const entries: Record<string, unknown> = {
    "/connected/context": {
      run: { as_of: "", pathway: "credit_snapshot", case_kind: "synthetic" },
      identity: { issuer_name: "", issuer_id: "" },
      submission_caps_usd: { credit_snapshot: "25" },
    },
    "/api/submissions": { id: "sub-1" },
    "/api/submissions/sub-1/files?name=filing.txt": { name: file.name },
    "/api/submissions/sub-1/reading": {
      documents: [{ source: file.name, kind: "annual_report", period_end: "2026-06-30" }],
      ignored: [],
      error: "",
    },
  };
  const fetchMock = vi.fn((path: string) => {
    if (!Object.hasOwn(entries, path)) throw new Error(`Unexpected request ${path}`);
    return Promise.resolve(Response.json(entries[path]));
  });
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

async function documents({ issuer = "Northbridge" } = {}) {
  const fetchMock = stubFetch();
  render(<ConnectedApp path="/start" mode="synthetic" />);
  fireEvent.change(await screen.findByLabelText("Issuer name", {}, { timeout: 5000 }), {
    target: { value: issuer },
  });
  fireEvent.change(screen.getByLabelText("As-of date"), { target: { value: "2026-10-31" } });
  fireEvent.change(screen.getByLabelText("Documents"), { target: { files: [file] } });
  fireEvent.change(screen.getByLabelText("Your name"), { target: { value: "Ana L" } });
  return fetchMock;
}

describe("a control the browser finds invalid", () => {
  it("says on each blank field, in the page's words, what it needs, and focuses the first", async () => {
    const fetchMock = await documents({ issuer: "" });
    fireEvent.click(screen.getByRole("button", { name: "Continue to purpose" }));
    const name = screen.getByLabelText("Issuer name");
    const id = screen.getByLabelText("Issuer ID");
    await waitFor(() => {
      expect(name).toHaveFocus();
    });
    expect(screen.getAllByRole("alert").map((alert) => alert.textContent)).toEqual([
      "Enter the issuer's name.",
      "Enter an Issuer ID.",
    ]);
    expect(name).toHaveAttribute("aria-invalid", "true");
    expect(name).toHaveAccessibleDescription("Enter the issuer's name.");
    expect(id).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("button", { name: /^2 problems to fix: / })).toBeInTheDocument();
    // Nothing was sent: the step stays where it is.
    expect(screen.getByRole("heading", { name: "Documents" })).toBeInTheDocument();
    expect(fetchMock.mock.calls.map(([path]) => path)).toEqual(["/connected/context"]);
    // The Issuer ID follows the name, so typing the name clears both.
    fireEvent.change(name, { target: { value: "Northbridge" } });
    expect(name).not.toHaveAttribute("aria-invalid");
    expect(id).not.toHaveAttribute("aria-invalid");
  });

  it("marks every invalid field and focuses the first, with microtasks between the events", async () => {
    await documents({ issuer: "" });
    // A browser runs microtasks between the invalid events of one check; jsdom does not, so the
    // events are dispatched one by one here, each in its own turn of the microtask queue.
    for (const label of ["Issuer name", "Issuer ID"]) {
      screen.getByLabelText(label).dispatchEvent(new Event("invalid", { cancelable: true }));
      await Promise.resolve();
    }
    await waitFor(() => {
      expect(screen.getByLabelText("Issuer name")).toHaveFocus();
    });
    expect(screen.getByLabelText("Issuer name")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByLabelText("Issuer ID")).toHaveAttribute("aria-invalid", "true");
  });

  it("says the Issuer ID's rule when the ID breaks it", async () => {
    await documents();
    fireEvent.change(screen.getByLabelText("Issuer ID"), { target: { value: "North Bridge" } });
    fireEvent.click(screen.getByRole("button", { name: "Continue to purpose" }));
    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Use letters a–z, digits and hyphens, starting with a letter or digit, up to 40 characters.",
    );
    expect(screen.getByLabelText("Issuer ID")).toHaveAttribute("aria-invalid", "true");
  });

  it("opens the closed section of an invalid control and marks it, so Review run never fails silently", async () => {
    const fetchMock = await documents();
    fireEvent.click(screen.getByRole("button", { name: "Continue to purpose" }));
    await screen.findByRole("heading", { name: "Purpose" });
    chooseControl("Run form level", "advanced");
    fireEvent.click(screen.getByRole("button", { name: "Continue to context" }));
    await screen.findByRole("heading", { name: "More context" });
    const turns = screen.getByLabelText("Turns per module");
    fireEvent.change(turns, { target: { value: "0" } });
    const holder = turns.closest("details");
    if (holder) holder.open = false;
    fireEvent.click(screen.getByRole("button", { name: "Review run" }));
    await waitFor(() => {
      expect(turns.closest("details")).toHaveAttribute("open");
    });
    const message = await within(turns.closest("details") as HTMLElement).findByRole("alert");
    expect(message).toHaveTextContent("Enter a whole number from 1 to 64.");
    expect(turns).toHaveAttribute("aria-invalid", "true");
    expect(fetchMock.mock.calls.some(([path]) => path.endsWith("/summary"))).toBe(false);
  });

  it("with invalid fields in two closed sections opens only the first's, marks both and focuses the first", async () => {
    const fetchMock = await documents();
    fireEvent.click(screen.getByRole("button", { name: "Continue to purpose" }));
    await screen.findByRole("heading", { name: "Purpose" });
    chooseControl("Run form level", "advanced");
    fireEvent.click(screen.getByRole("button", { name: "Continue to context" }));
    await screen.findByRole("heading", { name: "More context" });
    const cutoff = screen.getByLabelText("Research cutoff");
    const turns = screen.getByLabelText("Turns per module");
    fireEvent.change(cutoff, { target: { value: "2026-12-31" } });
    fireEvent.change(turns, { target: { value: "0" } });
    for (const section of document.querySelectorAll("details")) section.open = false;
    // As Chromium does: one invalid event per failing control, in document order, with
    // microtasks run between them.
    for (const control of [cutoff, turns]) {
      control.dispatchEvent(new Event("invalid", { cancelable: true }));
      await Promise.resolve();
    }
    await waitFor(() => {
      expect(cutoff).toHaveFocus();
    });
    expect(cutoff.closest("details")).toHaveAttribute("open");
    expect(turns.closest("details")).not.toHaveAttribute("open");
    expect(cutoff).toHaveAccessibleDescription(/Enter a date on or before 2026-10-31\./);
    expect(turns).toHaveAttribute("aria-invalid", "true");
    expect(turns).toHaveAccessibleDescription("Enter a whole number from 1 to 64.");
    // A double click's second click, landing on the opened section's heading, leaves it open.
    const heading = cutoff.closest("details")?.querySelector("summary") as HTMLElement;
    fireEvent.click(heading, { detail: 2 });
    expect(cutoff.closest("details")).toHaveAttribute("open");
    expect(fetchMock.mock.calls.some(([path]) => path.endsWith("/summary"))).toBe(false);
  });
});
