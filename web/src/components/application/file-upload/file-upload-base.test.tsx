import { render, screen } from "@testing-library/react";
import { FileUpload } from "./file-upload-base";

const LONG_NAME =
  "Amended-and-Restated-Senior-Secured-Revolving-Credit-and-Term-Loan-Agreement-Execution-Version-final-v7.pdf";

describe("FileListItemProgressBar file name (X1-015, D-32)", () => {
  it("wraps a long file name in full instead of cutting it with an ellipsis", () => {
    render(
      <ul>
        <FileUpload.ListItemProgressBar name={LONG_NAME} size="2.4 MB" state="Read in full" />
      </ul>,
    );
    const name = screen.getByText(LONG_NAME);
    expect(name).toHaveClass("wrap-anywhere");
    expect(name).not.toHaveClass("truncate");
    expect(name.textContent).toBe(LONG_NAME);
  });

  it("still names the file in the delete control", () => {
    render(
      <ul>
        <FileUpload.ListItemProgressBar
          name={LONG_NAME}
          size="2.4 MB"
          state="Read in full"
          onDelete={() => undefined}
        />
      </ul>,
    );
    expect(screen.getByRole("button", { name: `Delete ${LONG_NAME}` })).toBeInTheDocument();
  });
});
