import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";

import {
  isCommentNode,
  isDataNode,
  isEmptyNode,
  isMissingAnnotationNode,
  isSectionChildNode,
  isSectionNode,
  NodeTypes,
} from "../../src/ast";
import { parseDataFileIntoAst } from "../../src/parser";

describe("DataNode", () => {
  describe("CaseFolding-style lines (semicolon-delimited with inline comment)", () => {
    const fixture = dedent`
      # CaseFolding-16.0.0.txt
      # Date: 2024-04-30, 21:48:11 GMT
      # Unicode and the Unicode Logo are registered trademarks
      #
      # Unicode Character Database
      #   For documentation, see https://www.unicode.org/reports/tr44/
      #
      # Case Folding Properties
      #
      # ================================================================================

      # ================================================================================

      0041; C; 0061; # LATIN CAPITAL LETTER A
      0042; C; 0062; # LATIN CAPITAL LETTER B
      0043; C; 0063; # LATIN CAPITAL LETTER C
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should create DataNodes for semicolon-delimited data lines", () => {
      const sections = ast.children.filter(isSectionNode);
      // The second section (after the second boundary) should have the data
      const dataSection = sections[sections.length - 1];
      const dataNodes = dataSection.children.filter(isDataNode);
      expect(dataNodes.length).toBe(3);
    });

    it("should preserve inline comments in DataNode value", () => {
      const sections = ast.children.filter(isSectionNode);
      const dataSection = sections[sections.length - 1];
      const firstData = dataSection.children.find(isDataNode);
      expect(firstData!.value).toBe("0041; C; 0061; # LATIN CAPITAL LETTER A");
    });

    it("should have type === NodeTypes.DATA", () => {
      const sections = ast.children.filter(isSectionNode);
      const dataSection = sections[sections.length - 1];
      const dataNodes = dataSection.children.filter(isDataNode);
      for (const node of dataNodes) {
        expect(node.type).toBe(NodeTypes.DATA);
      }
    });
  });

  describe("range-style lines (dotdot notation)", () => {
    const fixture = dedent`
      # Scripts-16.0.0.txt
      # Date: 2024-04-30
      #
      # ================================================

      # @missing: 0000..10FFFF; Unknown

      # ================================================

      0000..001F    ; Common # Cc  [32] <control-0000>..<control-001F>
      0020          ; Common # Zs       SPACE
      0021..0023    ; Common # Po   [3] EXCLAMATION MARK..NUMBER SIGN
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should create DataNodes for range-style lines", () => {
      const sections = ast.children.filter(isSectionNode);
      const dataSection = sections[sections.length - 1];
      const dataNodes = dataSection.children.filter(isDataNode);
      expect(dataNodes.length).toBe(3);
    });

    it("should preserve the full line content as value (trimmed)", () => {
      const sections = ast.children.filter(isSectionNode);
      const dataSection = sections[sections.length - 1];
      const firstData = dataSection.children.find(isDataNode);
      expect(firstData!.value).toBe(
        "0000..001F    ; Common # Cc  [32] <control-0000>..<control-001F>",
      );
    });
  });

  describe("mixed section: comments, empty lines, and data lines", () => {
    const fixture = dedent`
      # Blocks-16.0.0.txt
      # Date: 2024-02-02
      #
      # ================================================

      # Note:   When comparing block names, casing, whitespace, hyphens,
      #         and underbars are ignored.
      #
      # Property:\tBlock
      #
      # @missing: 0000..10FFFF; No_Block

      0000..007F; Basic Latin
      0080..00FF; Latin-1 Supplement

      # A mid-section comment
      0100..017F; Latin Extended-A
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should contain CommentNodes, EmptyNodes, MissingAnnotationNode, and DataNodes in the section", () => {
      const section = ast.children.find(isSectionNode)!;
      const types = new Set(section.children.map((c) => c.type));

      expect(types.has(NodeTypes.COMMENT)).toBe(true);
      expect(types.has(NodeTypes.EMPTY)).toBe(true);
      expect(types.has(NodeTypes.MISSING)).toBe(true);
      expect(types.has(NodeTypes.DATA)).toBe(true);
    });

    it("should interleave types correctly", () => {
      const section = ast.children.find(isSectionNode)!;
      const dataNodes = section.children.filter(isDataNode);
      const commentNodes = section.children.filter(isCommentNode);
      const emptyNodes = section.children.filter(isEmptyNode);
      const missingNodes = section.children.filter(isMissingAnnotationNode);

      expect(dataNodes.length).toBe(3);
      expect(commentNodes.length).toBeGreaterThanOrEqual(3);
      expect(emptyNodes.length).toBeGreaterThanOrEqual(1);
      expect(missingNodes.length).toBe(1);
    });

    it("should have all section children pass isSectionChildNode type guard", () => {
      const section = ast.children.find(isSectionNode)!;
      for (const child of section.children) {
        expect(isSectionChildNode(child)).toBe(true);
      }
    });
  });

  describe("DataNode raw vs value", () => {
    const fixture = dedent`
      # Test-1.0.0.txt
      # ================================================
      0041; C; 0061; # LATIN CAPITAL LETTER A
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should have value as trimmed line and raw as the original line", () => {
      const section = ast.children.find(isSectionNode)!;
      const data = section.children.find(isDataNode)!;
      expect(data.value).toBe("0041; C; 0061; # LATIN CAPITAL LETTER A");
      expect(data.raw).toBe("0041; C; 0061; # LATIN CAPITAL LETTER A");
    });
  });

  describe("DataNode parsed fields", () => {
    describe("single code point with inline comment (CaseFolding-style)", () => {
      const fixture = dedent`
        # CaseFolding-16.0.0.txt
        # ================================================================================
        0041; C; 0061; # LATIN CAPITAL LETTER A
      `;

      const ast = parseDataFileIntoAst(fixture);

      it("should parse codepointRaw as the first field", () => {
        const section = ast.children.find(isSectionNode)!;
        const data = section.children.find(isDataNode)!;
        expect(data.codepointRaw).toBe("0041");
      });

      it("should parse codepoint as a tuple with same start and end", () => {
        const section = ast.children.find(isSectionNode)!;
        const data = section.children.find(isDataNode)!;
        expect(data.codepoint).toEqual(["0041", "0041"]);
      });

      it("should parse all semicolon-separated fields", () => {
        const section = ast.children.find(isSectionNode)!;
        const data = section.children.find(isDataNode)!;
        expect(data.fields).toEqual(["0041", "C", "0061"]);
      });

      it("should extract inline comment after #", () => {
        const section = ast.children.find(isSectionNode)!;
        const data = section.children.find(isDataNode)!;
        expect(data.comment).toBe("LATIN CAPITAL LETTER A");
      });
    });

    describe("range code point (Scripts-style)", () => {
      const fixture = dedent`
        # Scripts-16.0.0.txt
        # ================================================
        0000..001F    ; Common # Cc  [32] <control-0000>..<control-001F>
      `;

      const ast = parseDataFileIntoAst(fixture);

      it("should parse codepointRaw with range notation", () => {
        const section = ast.children.find(isSectionNode)!;
        const data = section.children.find(isDataNode)!;
        expect(data.codepointRaw).toBe("0000..001F");
      });

      it("should split range into codepoint tuple", () => {
        const section = ast.children.find(isSectionNode)!;
        const data = section.children.find(isDataNode)!;
        expect(data.codepoint).toEqual(["0000", "001F"]);
      });

      it("should parse fields including the range", () => {
        const section = ast.children.find(isSectionNode)!;
        const data = section.children.find(isDataNode)!;
        expect(data.fields).toEqual(["0000..001F", "Common"]);
      });

      it("should extract the inline comment", () => {
        const section = ast.children.find(isSectionNode)!;
        const data = section.children.find(isDataNode)!;
        expect(data.comment).toBe("Cc  [32] <control-0000>..<control-001F>");
      });
    });

    describe("no inline comment (Blocks-style)", () => {
      const fixture = dedent`
        # Blocks-16.0.0.txt
        # ================================================
        0000..007F; Basic Latin
        0080..00FF; Latin-1 Supplement
      `;

      const ast = parseDataFileIntoAst(fixture);

      it("should have no comment when line has no #", () => {
        const section = ast.children.find(isSectionNode)!;
        const dataNodes = section.children.filter(isDataNode);
        expect(dataNodes[0]).toBeDefined();
        expect(dataNodes[0]?.comment).toBeUndefined();
        expect(dataNodes[1]).toBeDefined();
        expect(dataNodes[1]?.comment).toBeUndefined();
      });

      it("should parse two fields", () => {
        const section = ast.children.find(isSectionNode)!;
        const data = section.children.find(isDataNode)!;
        expect(data.fields).toEqual(["0000..007F", "Basic Latin"]);
      });
    });

    describe("three-field data (BidiBrackets-style)", () => {
      const fixture = dedent`
        # BidiBrackets-16.0.0.txt
        # ================================================
        0028; 0029; o # LEFT PARENTHESIS
        0029; 0028; c # RIGHT PARENTHESIS
      `;

      const ast = parseDataFileIntoAst(fixture);

      it("should parse three fields", () => {
        const section = ast.children.find(isSectionNode)!;
        const data = section.children.find(isDataNode)!;
        expect(data.fields).toEqual(["0028", "0029", "o"]);
      });

      it("should extract the inline comment", () => {
        const section = ast.children.find(isSectionNode)!;
        const data = section.children.find(isDataNode)!;
        expect(data.comment).toBe("LEFT PARENTHESIS");
      });

      it("should parse single code point", () => {
        const section = ast.children.find(isSectionNode)!;
        const data = section.children.find(isDataNode)!;
        expect(data.codepoint).toEqual(["0028", "0028"]);
      });
    });
  });
});
