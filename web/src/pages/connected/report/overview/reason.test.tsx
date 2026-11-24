import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { Reason, readerReason } from "./reason";

afterEach(cleanup);

it("draws a reason in the module's words, codes named, without its Basis line", () => {
  expect(readerReason("CP-1C did not reconcile the peer set.")).toBe(
    "Peer benchmark did not reconcile the peer set.",
  );
  expect(readerReason("Not stated for FY2027.\nBasis: notes, page 88")).toBe(
    "Not stated for FY2027.",
  );
  expect(readerReason("")).toBeNull();
});

it("links to Evidence for a reason that cites a source, and prints none of it", () => {
  const cited = "FY2027: CP-1 gap G12 in notes_2024.pdf page 88 [E3].";
  expect(readerReason(cited)).toBeNull();
  render(<Reason text={cited} href="/report/run#evidence/CP-1" />);
  expect(screen.getByRole("link", { name: "Read the reason in Evidence" })).toHaveAttribute(
    "href",
    "/report/run#evidence/CP-1",
  );
  expect(document.body).not.toHaveTextContent(/notes_2024|G12|E3/);
});
