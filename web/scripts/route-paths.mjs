// The route paths a page group declares, read from its routes.tsx without importing it (a node
// script cannot load TSX). Exported arrays are named `routes` in snippets and tests or end in
// `Routes` in page modules. Every route object has a literal `path: "/…"` property.
import { readFileSync } from "node:fs";
import path from "node:path";
import ts from "typescript";

function sourceFile(source) {
  return ts.createSourceFile("routes.tsx", source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
}

function isRouteArrayName(name) {
  return name === "routes" || name.endsWith("Routes");
}

function exportedRouteArrays(file) {
  const arrays = [];
  for (const statement of file.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    if (!statement.modifiers?.some(({ kind }) => kind === ts.SyntaxKind.ExportKeyword)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (
        ts.isIdentifier(declaration.name) &&
        isRouteArrayName(declaration.name.text) &&
        declaration.initializer &&
        ts.isArrayLiteralExpression(declaration.initializer)
      ) {
        arrays.push(declaration.initializer);
      }
    }
  }
  return arrays;
}

function routeArrays(source) {
  const file = sourceFile(source);
  const exported = exportedRouteArrays(file);
  if (exported.length) return { file, arrays: exported };

  // Helpers also accept focused object/array snippets used by unit tests.
  const snippet = sourceFile(`const __routes = [${source}];`);
  const initializer = snippet.statements[0]?.declarationList?.declarations[0]?.initializer;
  return {
    file: snippet,
    arrays: initializer && ts.isArrayLiteralExpression(initializer) ? [initializer] : [],
  };
}

function literalPropertyValue(property, file, key) {
  if (
    !ts.isPropertyAssignment(property) ||
    !ts.isIdentifier(property.name) ||
    property.name.text !== key ||
    !ts.isStringLiteral(property.initializer) ||
    !property.initializer.getText(file).startsWith('"')
  ) {
    return undefined;
  }
  return property.initializer.text;
}

function valuesInArray(array, file, key) {
  const values = [];
  for (const element of array.elements) {
    if (!ts.isObjectLiteralExpression(element)) continue;
    for (const property of element.properties) {
      const value = literalPropertyValue(property, file, key);
      if (value?.startsWith("/")) values.push(value);
    }
  }
  return values;
}

function properties(source, key) {
  const { file, arrays } = routeArrays(source);
  return arrays.flatMap((array) => valuesInArray(array, file, key));
}

export function pathsIn(source) {
  return properties(source, "path");
}

/** The double-quoted literal homes in the source, in order. A home written any other way is unseen. */
export function homesIn(source) {
  return properties(source, "home");
}

/** True when a route object in the source declares `home: "/…"`; the group then has a bare address. */
export function declaresHome(source) {
  return homesIn(source).length > 0;
}

export function groupDeclaresHome(groupDir) {
  return declaresHome(readFileSync(path.join(groupDir, "routes.tsx"), "utf8"));
}

export function declaredPaths(groupDir) {
  return pathsIn(readFileSync(path.join(groupDir, "routes.tsx"), "utf8"));
}

/** The hash for a pattern and one parameter set; a segment `:name` is replaced whole, as matchRoute reads it. */
export function fillParams(pattern, set) {
  const missing = [];
  const hash = pattern
    .split("/")
    .map((segment) => {
      if (!segment.startsWith(":")) return segment;
      const name = segment.slice(1);
      if (!Object.hasOwn(set, name)) missing.push(name);
      return encodeURIComponent(set[name] ?? "");
    })
    .join("/");
  return { hash, missing };
}
