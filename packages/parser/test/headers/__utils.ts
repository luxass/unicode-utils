import { existsSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";

import { it } from "vitest";

import type { RootNode } from "../../src/ast";
import type { InferredHeader } from "../../src/header";
import { inferHeaderFromAst } from "../../src/header";
import { parseDataFileIntoAst } from "../../src/parser";
import { ucdFiles } from "../__utils";

export interface UcdTestContext {
  content: string;
  ast: RootNode;
  header: InferredHeader;
  expectedText: string | null;
}

function loadExpectedText(version: string, file: string): string | null {
  const commentsFile = file.replace(/\.txt$/, ".comments.txt");
  const path = join(__dirname, "../../../../ucd-files", version, commentsFile);

  if (!existsSync(path)) {
    return null;
  }
  return readFileSync(path, "utf-8");
}

export function createUcdTest(version: string) {
  return (file: string) => {
    const name = basename(file, ".txt");
    return (fn: (ctx: UcdTestContext) => void) => {
      it(name, () => {
        const content = ucdFiles(version, file);
        const ast = parseDataFileIntoAst(content);
        const header = inferHeaderFromAst(ast);
        const expectedText = loadExpectedText(version, file);
        fn({ content, ast, header, expectedText });
      });
    };
  };
}
