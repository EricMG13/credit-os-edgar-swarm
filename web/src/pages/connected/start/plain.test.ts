import { moduleTitle } from "../api";
import { changesSentence, comparisonCaveat, lookupSentence, plainText } from "./plain";

it("names a module without its code", () => {
  expect(moduleTitle("CP-4")).toBe("Legal & covenants");
  expect(moduleTitle("CP-99")).toBe("CP-99");
});
it("replaces known codes and leaves unknown ones", () => {
  expect(plainText("Expected to be limited through CP-4, CP-2A, which it reads.")).toBe(
    "Expected to be limited through Legal & covenants, Downside, which it reads.",
  );
  expect(plainText("CP-99 is not a module")).toBe("CP-99 is not a module");
});
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

it("drops an unused earlier run from the changes line and says so", () => {
  expect(changesSentence("first run (not used: 20261116-083145-01: different pathway)")).toBe(
    "first run. An earlier run exists but could not be used for comparison.",
  );
  expect(changesSentence("first run")).toBe("first run");
});

it("drops the whole skip note when the reason quotes an issuer name with brackets", () => {
  const result = changesSentence(
    "first run of this pathway (not used: 20261116-083145-01: its issuer name is 'Northbridge (UK) Ltd', not 'Northbridge Ltd')",
  );
  expect(result).not.toContain("20261116-083145-01");
  expect(result).toBe(
    "first run of this pathway. An earlier run exists but could not be used for comparison.",
  );
});
it("keeps one full stop when the kept text already ends with one", () => {
  expect(
    changesSentence(
      "first run. (not used: 20261116-083145-01: it was launched with an explicit module subset)",
    ),
  ).toBe("first run. An earlier run exists but could not be used for comparison.");
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
