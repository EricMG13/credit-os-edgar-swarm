import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { entry } from "../overview/rows.fixture";
import { LEADS as credit } from "./credit";
import { bottomLine, leadProps } from "./lead.fixture";
import { LEADS as structure } from "./structure";

afterEach(cleanup);

const LEADS = Object.entries({ ...credit, ...structure });

it.each(LEADS)("%s draws a reason without a full stop as blocked, in its words", (module, Lead) => {
  const made = entry(module, [], [...bottomLine("Not assessable: no filings were supplied")]);
  render(<Lead {...leadProps(made)} />);
  expect(screen.getByText("Not assessable")).toBeVisible();
  expect(screen.getByText("No filings were supplied")).toBeVisible();
});

it.each(LEADS)("%s keeps a blocked reason that names a file in Evidence", (module, Lead) => {
  const made = entry(
    module,
    [],
    [...bottomLine("Not assessable: annual_report_2024.pdf was not supplied.")],
  );
  render(<Lead {...leadProps(made)} />);
  expect(screen.getByText("Not assessable")).toBeVisible();
  // The badge says Not assessable; the text does not repeat it.
  expect(screen.getByText("The reason is recorded in Evidence.")).toBeVisible();
  expect(screen.queryByText(/annual_report/)).toBeNull();
});

it.each(LEADS)("%s draws the whole reason, not up to an abbreviation", (module, Lead) => {
  const made = entry(
    module,
    [],
    [...bottomLine("Not assessable: Acme Holdings Inc. did not publish its 2024 accounts.")],
  );
  render(<Lead {...leadProps(made)} />);
  expect(screen.getByText("Acme Holdings Inc. did not publish its 2024 accounts.")).toBeVisible();
});
