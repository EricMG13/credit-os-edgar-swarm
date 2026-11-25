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

it("removes inline source markers and sends text carrying an unnamed id to Evidence", () => {
  expect(readerReason("Cover is thin [E3].")).toBe("Cover is thin.");
  expect(readerReason("Cover is thin [E12, E14] and falling.")).toBe("Cover is thin and falling.");
  expect(readerReason("Leverage of 4.2x [E3] per T4.18 and CP-1 supports Watchlist.")).toBeNull();
  expect(readerReason("See CP-1-GAP-12.")).toBeNull();
  expect(readerReason("Leverage per CP-1 is 4.2x.")).toBe(
    "Leverage per Financial foundation is 4.2x.",
  );
});
