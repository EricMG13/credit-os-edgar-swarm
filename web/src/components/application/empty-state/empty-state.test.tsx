import { render, screen } from "@testing-library/react";
import { EmptyState } from "./empty-state";

describe("EmptyState.Title", () => {
  it("is set in the heading face (D-30), in the source's own size", () => {
    render(<EmptyState.Title>No runs yet</EmptyState.Title>);
    const title = screen.getByRole("heading", { level: 2, name: "No runs yet" });
    expect(title).toHaveClass("font-display", "text-xl", "font-semibold", "text-primary");
  });

  it("is an h3 where the empty state sits under a section's h2, in the same face", () => {
    render(<EmptyState.Title as="h3">Nothing to compare</EmptyState.Title>);
    expect(screen.getByRole("heading", { level: 3 })).toHaveClass("font-display");
  });

  it("keeps a class the caller adds", () => {
    render(<EmptyState.Title className="text-center">T</EmptyState.Title>);
    expect(screen.getByRole("heading")).toHaveClass("font-display", "text-center");
  });
});
