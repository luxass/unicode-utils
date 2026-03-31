import { describe, expect, it } from "vitest";

import { NodeTypes } from "../../src/ast";
import { parseDataFileIntoAst } from "../../src/parser";

describe("parseDataFileIntoAst", () => {
  it("parses an empty line as EmptyNode", () => {
    const ast = parseDataFileIntoAst("");
    expect(ast.children).toHaveLength(1);
    expect(ast.children[0]?.type).toBe(NodeTypes.EMPTY);
  });

  it("parses a comment line as CommentNode", () => {
    const ast = parseDataFileIntoAst("# This is a comment");
    expect(ast.children).toHaveLength(1);
    expect(ast.children[0]?.type).toBe(NodeTypes.COMMENT);
    expect(ast.children[0]?.value).toBe("This is a comment");
  });

  it("parses a data line as UnknownNode", () => {
    const ast = parseDataFileIntoAst("0041; LATIN CAPITAL LETTER A");
    expect(ast.children).toHaveLength(1);
    expect(ast.children[0]?.type).toBe(NodeTypes.UNKNOWN);
  });

  it("parses multiple lines in order", () => {
    const ast = parseDataFileIntoAst("# Header\n\n0041; DATA");
    expect(ast.children.map((c) => c.type)).toEqual([
      NodeTypes.COMMENT,
      NodeTypes.EMPTY,
      NodeTypes.UNKNOWN,
    ]);
  });

  it("infers fileName and version from content", () => {
    const content = "# Scripts-16.0.0.txt\n# Date: 2024-07-30\n";
    const ast = parseDataFileIntoAst(content);
    expect(ast.fileName).toBe("Scripts");
    expect(ast.version).toBe("16.0.0");
  });

  it("uses provided fileName option", () => {
    const ast = parseDataFileIntoAst("# data", { fileName: "MyFile" });
    expect(ast.fileName).toBe("MyFile");
  });

  it("preserves raw line content", () => {
    const line = "0041; LATIN CAPITAL LETTER A";
    const ast = parseDataFileIntoAst(line);
    expect(ast.children[0]?.raw).toBe(line);
  });
});
