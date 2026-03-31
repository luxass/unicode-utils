import { describe, expect, it } from "vitest";
import { NodeTypes } from "../../src/ast";
import { parseDataFileIntoAst } from "../../src/parser";
import { ucdFiles } from "../__utils";

describe("v16.0.0 - AST structure", () => {
  describe("Scripts.txt", () => {
    const ast = parseDataFileIntoAst(ucdFiles("v16.0.0", "Scripts.txt"));

    it("should have the correct fileName and version", () => {
      expect(ast.fileName).toBe("Scripts");
      expect(ast.version).toBe("16.0.0");
    });

    it("should contain comment, empty, and unknown nodes", () => {
      const types = new Set(ast.children.map((c) => c.type));
      expect(types.has(NodeTypes.COMMENT)).toBe(true);
      expect(types.has(NodeTypes.UNKNOWN)).toBe(true);
    });
  });
});
