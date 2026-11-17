import { fireEvent, render, screen } from "@testing-library/react";
import { CopyProvider, useCopy } from "./CopyToast";

function Copier() {
  const copy = useCopy();
  return (
    <button
      type="button"
      onClick={() => {
        void copy("x", "The value");
      }}
    >
      Copy
    </button>
  );
}

describe("the copy toast", () => {
  it("clears the mobile bar below 768px and leaves both side gutters (S4-017)", async () => {
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: () => Promise.resolve() },
      configurable: true,
    });
    render(
      <CopyProvider>
        <Copier />
      </CopyProvider>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Copy" }));
    const toast = await screen.findByRole("status");
    // The bar under 768px is 4rem (h-16) tall: the toast sits above it, inside the 1rem gutters.
    expect(toast).toHaveClass("bottom-20", "left-4", "right-4");
    expect(toast).toHaveClass(
      "min-[768px]:bottom-8",
      "min-[768px]:right-8",
      "min-[768px]:left-auto",
    );
  });
});
