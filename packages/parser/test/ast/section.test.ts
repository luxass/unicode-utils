import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";

import {
  isBoundaryNode,
  isCommentNode,
  isDataNode,
  isMissingAnnotationNode,
  isSectionChildNode,
  isSectionNode,
  NodeTypes,
} from "../../src/ast";
import { parseDataFileIntoAst } from "../../src/parser";

describe("SectionNode", () => {
  describe("Scripts.txt-like structure", () => {
    const fixture = dedent`
      # Scripts-16.0.0.txt
      # Date: 2024-04-30, 21:48:40 GMT
      # Unicode and the Unicode Logo are registered trademarks
      #
      # Unicode Character Database
      #   For documentation, see https://www.unicode.org/reports/tr44/

      # ================================================

      # Property:\tScript
      #
      #  All code points not explicitly listed for Script
      #  have the value Unknown (Zzzz).

      # @missing: 0000..10FFFF; Unknown

      # ================================================

      0000..001F    ; Common # Cc  [32] <control-0000>..<control-001F>
      0020          ; Common # Zs       SPACE
      0021..0023    ; Common # Po   [3] EXCLAMATION MARK..NUMBER SIGN
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should produce root children: comments, boundary, section, boundary, section", () => {
      const types = ast.children.map((c) => c.type);
      expect(types).toStrictEqual([
        NodeTypes.COMMENT, // # Scripts-16.0.0.txt
        NodeTypes.COMMENT, // # Date: ...
        NodeTypes.COMMENT, // # Unicode and the Unicode Logo ...
        NodeTypes.COMMENT, // #
        NodeTypes.COMMENT, // # Unicode Character Database
        NodeTypes.COMMENT, // #   For documentation ...
        NodeTypes.EMPTY, // blank line
        NodeTypes.BOUNDARY, // # ====...
        NodeTypes.SECTION, // property/missing section
        NodeTypes.BOUNDARY, // # ====...
        NodeTypes.SECTION, // data section
      ]);
    });

    it("should have first section containing comments and a MissingAnnotationNode", () => {
      const sections = ast.children.filter(isSectionNode);
      expect(sections.length).toBe(2);

      const first = sections[0];
      const childTypes = first.children.map((c) => c.type);

      // The first section contains: empty, comment (Property), comment (#), ...
      // comment (All code points), comment (have the value), empty, missing, empty
      expect(childTypes).toContain(NodeTypes.COMMENT);
      expect(childTypes).toContain(NodeTypes.MISSING);

      const missingNodes = first.children.filter(isMissingAnnotationNode);
      expect(missingNodes.length).toBe(1);
      expect(missingNodes[0].annotation).not.toBeNull();
      expect(missingNodes[0].annotation!.start).toBe("0000");
      expect(missingNodes[0].annotation!.end).toBe("10FFFF");
    });

    it("should have second section containing DataNodes", () => {
      const sections = ast.children.filter(isSectionNode);
      const second = sections[1];
      const dataNodes = second.children.filter(isDataNode);
      expect(dataNodes.length).toBe(3);
    });
  });

  describe("multiple subsections (DerivedAge.txt-like)", () => {
    const fixture = dedent`
      # DerivedAge-16.0.0.txt
      # Some header comments

      # ================================================

      # Property: Age

      # @missing: 0000..10FFFF; Unassigned

      # ================================================

      0000..001F    ; 1.1 # Cc  [32]
      0020..007E    ; 1.1 # L&  [95]

      # ================================================

      0080..009F    ; 1.1 # Cc  [32]
      00A0..00FF    ; 1.1 # L&  [96]
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should create three SectionNodes", () => {
      const sections = ast.children.filter(isSectionNode);
      expect(sections.length).toBe(3);
    });

    it("should have three BoundaryNodes at root level", () => {
      const boundaries = ast.children.filter(isBoundaryNode);
      expect(boundaries.length).toBe(3);
    });
  });

  describe("lines before the first boundary are root children", () => {
    const fixture = dedent`
      # Header-1.0.0.txt
      # This is a header comment
      #
      # ================================================
      0041; Data
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should have header comments as direct root children, not in any section", () => {
      const beforeBoundary = [];
      for (const child of ast.children) {
        if (isBoundaryNode(child)) break;
        beforeBoundary.push(child);
      }

      expect(beforeBoundary.length).toBe(3);
      expect(beforeBoundary.every(isCommentNode)).toBe(true);

      // None of these should be inside a section
      const sections = ast.children.filter(isSectionNode);
      for (const section of sections) {
        for (const sChild of section.children) {
          expect(sChild.line).not.toBeLessThan(ast.children.find(isBoundaryNode)!.line);
        }
      }
    });
  });

  describe("consecutive boundaries with nothing between", () => {
    const fixture = dedent`
      # Test-1.0.0.txt
      # ================================================
      # ================================================
      0041; Data
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should not create an empty section between consecutive boundaries", () => {
      const types = ast.children.map((c) => c.type);
      // Two consecutive boundaries: first one opens a section that is immediately
      // closed by the second boundary. The section would have no children, so
      // it should not be emitted.
      expect(types).toStrictEqual([
        NodeTypes.COMMENT,
        NodeTypes.BOUNDARY,
        NodeTypes.BOUNDARY,
        NodeTypes.SECTION,
      ]);

      const sections = ast.children.filter(isSectionNode);
      expect(sections.length).toBe(1);
      expect(sections[0].children.length).toBeGreaterThan(0);
    });
  });

  describe("section children are all SectionChildNode", () => {
    const fixture = dedent`
      # Test-1.0.0.txt
      # ================================================
      # A comment inside section
      # @missing: 0000..10FFFF; Unknown

      0041; Data
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should have all section children pass isSectionChildNode", () => {
      const sections = ast.children.filter(isSectionNode);
      expect(sections.length).toBe(1);
      for (const child of sections[0].children) {
        expect(isSectionChildNode(child)).toBe(true);
      }
    });
  });
});
