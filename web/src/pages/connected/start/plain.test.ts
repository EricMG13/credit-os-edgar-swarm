import { moduleTitle } from "../api";
import { changesSentence, lookupSentence, plainText } from "./plain";

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
