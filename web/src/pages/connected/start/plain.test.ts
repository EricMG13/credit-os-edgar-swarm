import { comparisonCaveat, lookupSentence } from "./plain";

it("drops the launcher label and flag hint from a lookup line", () => {
  expect(lookupSentence("Lookup:   off: synthetic case (default); --web-lookup on forces it")).toBe(
    "off: synthetic case (default)",
  );
  expect(
    lookupSentence(
      "Lookup:   on: CP-DR may fetch allowlisted public pages and SEC EDGAR (public case default)",
    ),
  ).toBe(
    "on: Research questions may fetch allowlisted public pages and SEC EDGAR (public case default)",
  );
});

it("drops the SEC label from a lookup line", () => {
  expect(
    lookupSentence(
      "SEC:      sec.gov lookups will be refused: DEPLOY_WORKFLOW_SEC_USER_AGENT is not set",
    ),
  ).toBe("sec.gov lookups will be refused: DEPLOY_WORKFLOW_SEC_USER_AGENT is not set");
});
it("reads the comparison caveat from the changes line", () => {
  const head = "CP-8 compares with the credit_snapshot run as of 2025-03-31";
  expect(comparisonCaveat(`${head} (20261116-083145-01)`)).toBe("");
  expect(comparisonCaveat(`${head} (20261116-083145-01; earlier format)`)).toBe(
    " (earlier format)",
  );
  expect(comparisonCaveat(`${head} (20261116-083145-01; earlier methods)`)).toBe(
    " (earlier methods)",
  );
  expect(comparisonCaveat(`${head} (20261116-083145-01; earlier format, earlier methods)`)).toBe(
    " (earlier format, earlier methods)",
  );
});
it("reads the caveat from the compared run's bracket, not a later not-used note", () => {
  expect(
    comparisonCaveat(
      "CP-8 compares with the credit_snapshot run as of 2025-03-31 (20261116-083145-01) (not used: 20261001-000000-01: its issuer name is 'acme earlier methods', not 'Acme')",
    ),
  ).toBe("");
});
