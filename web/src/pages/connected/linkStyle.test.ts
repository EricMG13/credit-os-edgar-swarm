import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { expect, it } from "vitest";

const root = join(__dirname, "..");

function tsxFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return tsxFiles(path);
    return entry.name.endsWith(".tsx") ? [path] : [];
  });
}

it("no page draws a link as blue underlined text", () => {
  const found: string[] = [];
  for (const file of tsxFiles(root)) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, index) => {
      for (const match of line.matchAll(/"[^"]*"|`[^`]*`/g)) {
        if (/\btext-action\b/.test(match[0]) && /[\s"`]underline[\s"`]/.test(match[0])) {
          found.push(`${file.slice(root.length + 1)}:${String(index + 1)}`);
        }
      }
    });
  }
  expect(found).toEqual([]);
});

// Files that already drew `color="link-color"` at HEAD, before the neutral link task.
const linkColorAtHead = ["library/EvidenceRecord.tsx"];

it("pages draw links in link-gray, not the action blue link-color", () => {
  const found: string[] = [];
  for (const file of tsxFiles(root)) {
    const name = file.slice(root.length + 1);
    if (!/^(connected|library)\//.test(name) || linkColorAtHead.includes(name)) continue;
    readFileSync(file, "utf8")
      .split("\n")
      .forEach((line, index) => {
        if (line.includes('color="link-' + 'color"')) found.push(`${name}:${String(index + 1)}`);
      });
  }
  expect(found).toEqual([]);
});
