import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";

import {
  isCommentNode,
  isDataNode,
  isEmptyNode,
  isMissingAnnotationNode,
  isSectionNode,
  isUnknownNode,
  NodeTypes,
} from "../../src/ast";
import { parseDataFileIntoAst } from "../../src/parser";

describe("context-dependent classification", () => {
  // This fixture contains the SAME lines before and after a boundary.
  // The parser should classify them differently based on context.
  const fixture = dedent`
    # TestFile-1.0.0.txt
    # Property: Script
    # @missing: 0000..10FFFF; Unknown
    0041; C; 0061;

    # ================================================

    # Property: Script
    # @missing: 0000..10FFFF; Unknown
    0041; C; 0061;
  `;

  const ast = parseDataFileIntoAst(fixture);

  describe("# Property: Script", () => {
    it("should be CommentNode in header context (before boundary)", () => {
      // The second root child (index 1) is "# Property: Script" before boundary
      const headerProperty = ast.children[1];
      expect(isCommentNode(headerProperty)).toBe(true);
      expect(headerProperty.type).toBe(NodeTypes.COMMENT);
    });

    it("should be CommentNode in section context (after boundary)", () => {
      const section = ast.children.find(isSectionNode)!;
      const propertyComment = section.children.find(
        (c) => isCommentNode(c) && c.value.startsWith("Property:"),
      );
      expect(propertyComment).toBeDefined();
      expect(propertyComment!.type).toBe(NodeTypes.COMMENT);
    });
  });

  describe("# @missing: 0000..10FFFF; Unknown", () => {
    it("should be CommentNode BEFORE boundary", () => {
      // The third root child (index 2) is "# @missing:..." before boundary
      const headerMissing = ast.children[2];
      expect(isCommentNode(headerMissing)).toBe(true);
      expect(headerMissing.type).toBe(NodeTypes.COMMENT);
    });

    it("should be MissingAnnotationNode AFTER boundary (inside section)", () => {
      const section = ast.children.find(isSectionNode)!;
      const missingNodes = section.children.filter(isMissingAnnotationNode);
      expect(missingNodes.length).toBe(1);
      expect(missingNodes[0].type).toBe(NodeTypes.MISSING);
      expect(missingNodes[0].annotation).not.toBeNull();
    });
  });

  describe("0041; C; 0061;", () => {
    it("should be UnknownNode BEFORE boundary", () => {
      const headerData = ast.children[3];
      expect(isUnknownNode(headerData)).toBe(true);
      expect(headerData.type).toBe(NodeTypes.UNKNOWN);
    });

    it("should be DataNode AFTER boundary (inside section)", () => {
      const section = ast.children.find(isSectionNode)!;
      const dataNodes = section.children.filter(isDataNode);
      expect(dataNodes.length).toBe(1);
      expect(dataNodes[0].type).toBe(NodeTypes.DATA);
    });
  });

  describe("empty lines in both contexts", () => {
    it("should be EmptyNode in header context", () => {
      const headerEmpty = ast.children[4];
      expect(isEmptyNode(headerEmpty)).toBe(true);
    });
  });
});
