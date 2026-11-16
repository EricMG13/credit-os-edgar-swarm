import type { TreeNode } from "@/pages/library/slice";
import {
  classifySections,
  plainModuleNames,
  type Table,
  type OutputEntry,
} from "../publishedReport";

const idPattern = /\b[A-Z]\d{1,4}\b/g;

export function calculationNodes(
  entry: OutputEntry,
  references: string,
  selectedLine?: number,
): TreeNode[] {
  const rows = classifySections(entry.sections)
    .filter(({ role }) => role === "calculations")
    .flatMap(({ section }) => section.blocks)
    .filter(
      (block): block is Table =>
        block.type === "table" &&
        ["ID", "Calculation", "Inputs", "Result", "Source"].every(
          (name, index) => block.headers[index] === name,
        ),
    )
    .flatMap((block) => block.rows);
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  const byId = new Map(
    rows.flatMap((row) => {
      const id = row.cells[0];
      if (!id) return [];
      if (seen.has(id)) duplicates.add(id);
      seen.add(id);
      return [[id, row]];
    }),
  );
  const idsIn = (text: string) => [...new Set(text.match(idPattern) ?? [])];
  function node(id: string, ancestors: readonly string[]): TreeNode[] {
    const row = byId.get(id);
    if (!row || duplicates.has(id) || ancestors.includes(id) || ancestors.length >= 8) return [];
    const [, label, inputs, value, source] = row.cells;
    return [
      {
        label: plainModuleNames(label || id),
        value: value || null,
        note: [id, inputs, source]
          .filter(Boolean)
          .map((part) => plainModuleNames(part ?? ""))
          .join(" · "),
        children: idsIn(source ?? "").flatMap((child) => node(child, [...ancestors, id])),
      },
    ];
  }
  const selected = rows.find((row) => row.line === selectedLine)?.cells[0];
  return (selected ? [selected] : idsIn(references)).flatMap((id) => node(id, []));
}
