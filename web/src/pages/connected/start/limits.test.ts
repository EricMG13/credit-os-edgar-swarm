import { carryAccepted, decided, groupLimits, needsCheck } from "./limits";

const FIX = "Add the executed agreement and declare it.";
const items = [
  {
    id: "run:no-agreement",
    scope: "run",
    outcome: "gap",
    reason: "No agreement supplied.",
    fix: FIX,
  },
  {
    id: "CP-4:declared-none",
    scope: "CP-4",
    outcome: "will_refuse",
    reason: "Declared none.",
    fix: FIX,
    counted: true,
    inherited_from: [],
  },
  {
    id: "CP-2A:from:CP-4",
    scope: "CP-2A",
    outcome: "limited",
    reason: "Through CP-4.",
    fix: "",
    counted: false,
    inherited_from: ["CP-4"],
  },
  {
    id: "CP-5:from:CP-2A",
    scope: "CP-5",
    outcome: "limited",
    reason: "Through CP-2A.",
    fix: "",
    counted: false,
    inherited_from: ["CP-2A"],
  },
  { id: "CP-0:dates", scope: "CP-0", outcome: "check", reason: "Check source.", fix: FIX },
  {
    id: "CP-3:from:CP-9",
    scope: "CP-3",
    outcome: "limited",
    reason: "Through CP-9.",
    fix: "",
    inherited_from: ["CP-9"],
  },
  { id: "run:section-omitted-x", scope: "run", outcome: "information", reason: "Not produced." },
];

it("merges causes with one fix and nests what follows from them", () => {
  const { groups, passive } = groupLimits(items);
  expect(groups.map((g) => [g.key, g.outcome, g.kind, g.ids])).toEqual([
    [
      "run:no-agreement",
      "will_refuse",
      "limit",
      ["run:no-agreement", "CP-4:declared-none", "CP-2A:from:CP-4", "CP-5:from:CP-2A"],
    ],
    ["CP-3:from:CP-9", "limited", "limit", ["CP-3:from:CP-9"]],
    ["CP-0:dates", "check", "check", ["CP-0:dates"]],
  ]);
  expect(groups[0]?.consequences.map((i) => i.scope)).toEqual(["CP-2A", "CP-5"]);
  expect(passive.map((i) => i.id)).toEqual(["run:section-omitted-x"]);
});

it("never drops an item: every decision id is in exactly one group", () => {
  const ids = groupLimits(items).groups.flatMap((g) => g.ids);
  expect([...ids].sort()).toEqual(
    items
      .filter((i) => i.outcome !== "information")
      .map((i) => i.id)
      .sort(),
  );
});

it("gives each item its own decision when the service sends no links", () => {
  const bare = [
    { id: "gap", scope: "run", outcome: "gap", reason: "Gap to review" },
    { id: "check", scope: "CP-0", outcome: "check", reason: "Check source" },
  ];
  expect(groupLimits(bare).groups.map((g) => g.ids)).toEqual([["gap"], ["check"]]);
});

it("terminates on a cycle and keeps both items", () => {
  const loop = [
    { id: "A:from:B", scope: "A", outcome: "limited", reason: "a", inherited_from: ["B"] },
    { id: "B:from:A", scope: "B", outcome: "limited", reason: "b", inherited_from: ["A"] },
  ];
  expect(groupLimits(loop).groups.map((g) => g.ids)).toEqual([["A:from:B"], ["B:from:A"]]);
});

it("is decided only when every member is accepted", () => {
  const [first] = groupLimits(items).groups;
  if (!first) throw new Error("no group");
  expect(decided(first, new Set(first.ids.slice(1)))).toBe(false);
  expect(decided(first, new Set(first.ids))).toBe(true);
});

it("carries an acceptance only for the same id and reason", () => {
  const declared = items[1];
  if (!declared) throw new Error("no item");
  const next = [items[0], { ...declared, reason: "Declared none (draft found)." }].filter(
    (i) => i !== undefined,
  );
  expect([
    ...carryAccepted(items, new Set(["run:no-agreement", "CP-4:declared-none"]), next),
  ]).toEqual(["run:no-agreement"]);
});

it("needs a decision for exactly the four limit outcomes", () => {
  const item = (outcome: string) => ({ id: "x", scope: "run", outcome, reason: "r" });
  expect(["will_refuse", "gap", "limited", "check"].map((o) => needsCheck(item(o)))).toEqual([
    true,
    true,
    true,
    true,
  ]);
  expect(["information", "ready", "", "Check", "unknown"].map((o) => needsCheck(item(o)))).toEqual([
    false,
    false,
    false,
    false,
    false,
  ]);
});
