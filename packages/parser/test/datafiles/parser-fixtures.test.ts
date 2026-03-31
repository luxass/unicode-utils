import { describe, expect, it } from "vitest";

import { NodeTypes } from "../../src/ast";
import { parseDataFileIntoAst } from "../../src/parser";

describe("parser fixtures", () => {
  it("classifies all lines in a realistic UCD snippet", () => {
    const content = [
      "# Scripts-16.0.0.txt",
      "# Date: 2024-07-30",
      "#",
      "",
      "0041..005A; Latin",
      "0061..007A; Latin",
    ].join("\n");

    const ast = parseDataFileIntoAst(content);

    expect(ast.children.map((c) => c.type)).toEqual([
      NodeTypes.COMMENT,
      NodeTypes.COMMENT,
      NodeTypes.COMMENT,
      NodeTypes.EMPTY,
      NodeTypes.UNKNOWN,
      NodeTypes.UNKNOWN,
    ]);
  });
});
