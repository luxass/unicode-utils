import { describe, expect, it } from "vitest";

import {
  isBoundaryNode,
  isChildNode,
  isCommentNode,
  isDataNode,
  isEmptyNode,
  isMissingAnnotationNode,
  isNode,
  isRootNode,
  isSectionChildNode,
  isSectionNode,
  isUnknownNode,
  NodeTypes,
} from "../../src/ast";

describe("typeguards", () => {
  describe("isNode", () => {
    it("returns true for a valid node", () => {
      expect(isNode({ type: NodeTypes.EMPTY, value: "", raw: "", line: 0 })).toBe(true);
    });
    it("returns false for null", () => {
      expect(isNode(null)).toBe(false);
    });
    it("returns false for a plain object missing fields", () => {
      expect(isNode({ type: "empty" })).toBe(false);
    });
  });

  describe("isRootNode", () => {
    it("returns true for a root node", () => {
      expect(isRootNode({ type: NodeTypes.ROOT, value: "", raw: "", line: 0, children: [] })).toBe(
        true,
      );
    });
    it("returns false for a non-root node", () => {
      expect(isRootNode({ type: NodeTypes.COMMENT, value: "", raw: "", line: 0 })).toBe(false);
    });
  });

  describe("isCommentNode", () => {
    it("returns true for a comment node", () => {
      expect(
        isCommentNode({ type: NodeTypes.COMMENT, value: "hello", raw: "# hello", line: 1 }),
      ).toBe(true);
    });
    it("returns false for an empty node", () => {
      expect(isCommentNode({ type: NodeTypes.EMPTY, value: "", raw: "", line: 0 })).toBe(false);
    });
  });

  describe("isEmptyNode", () => {
    it("returns true for an empty node", () => {
      expect(isEmptyNode({ type: NodeTypes.EMPTY, value: "", raw: "", line: 0 })).toBe(true);
    });
    it("returns false for a comment node", () => {
      expect(isEmptyNode({ type: NodeTypes.COMMENT, value: "", raw: "# x", line: 0 })).toBe(false);
    });
  });

  describe("isUnknownNode", () => {
    it("returns true for an unknown node", () => {
      expect(isUnknownNode({ type: NodeTypes.UNKNOWN, value: "abc", raw: "abc", line: 5 })).toBe(
        true,
      );
    });
    it("returns false for a comment node", () => {
      expect(isUnknownNode({ type: NodeTypes.COMMENT, value: "", raw: "# x", line: 0 })).toBe(
        false,
      );
    });
  });

  describe("isBoundaryNode", () => {
    it("returns true for a boundary node", () => {
      expect(
        isBoundaryNode({
          type: NodeTypes.BOUNDARY,
          value: "================================================",
          raw: "# ================================================",
          line: 10,
          style: "=",
        }),
      ).toBe(true);
    });
    it("returns true for a dash boundary node", () => {
      expect(
        isBoundaryNode({
          type: NodeTypes.BOUNDARY,
          value: "---",
          raw: "# ---",
          line: 5,
          style: "-",
        }),
      ).toBe(true);
    });
    it("returns false for a comment node", () => {
      expect(isBoundaryNode({ type: NodeTypes.COMMENT, value: "", raw: "# x", line: 0 })).toBe(
        false,
      );
    });
    it("returns false for null", () => {
      expect(isBoundaryNode(null)).toBe(false);
    });
  });

  describe("isDataNode", () => {
    it("returns true for a data node", () => {
      expect(
        isDataNode({
          type: NodeTypes.DATA,
          value: "0041; C; 0061;",
          raw: "0041; C; 0061;",
          line: 20,
        }),
      ).toBe(true);
    });
    it("returns false for an unknown node", () => {
      expect(isDataNode({ type: NodeTypes.UNKNOWN, value: "abc", raw: "abc", line: 5 })).toBe(
        false,
      );
    });
    it("returns false for a comment node", () => {
      expect(isDataNode({ type: NodeTypes.COMMENT, value: "", raw: "# x", line: 0 })).toBe(false);
    });
  });

  describe("isMissingAnnotationNode", () => {
    it("returns true for a missing annotation node with annotation", () => {
      expect(
        isMissingAnnotationNode({
          type: NodeTypes.MISSING,
          value: "@missing: 0000..10FFFF; Unknown",
          raw: "# @missing: 0000..10FFFF; Unknown",
          line: 15,
          annotation: {
            start: "0000",
            end: "10FFFF",
            defaultPropertyValue: "Unknown",
          },
        }),
      ).toBe(true);
    });
    it("returns true for a missing annotation node with null annotation", () => {
      expect(
        isMissingAnnotationNode({
          type: NodeTypes.MISSING,
          value: "@missing: malformed",
          raw: "# @missing: malformed",
          line: 15,
          annotation: null,
        }),
      ).toBe(true);
    });
    it("returns false for a comment node", () => {
      expect(
        isMissingAnnotationNode({ type: NodeTypes.COMMENT, value: "", raw: "# x", line: 0 }),
      ).toBe(false);
    });
    it("returns false for null", () => {
      expect(isMissingAnnotationNode(null)).toBe(false);
    });
  });

  describe("isSectionNode", () => {
    it("returns true for a section node", () => {
      expect(
        isSectionNode({
          type: NodeTypes.SECTION,
          value: "",
          raw: "# comment\n0041; Data",
          line: 10,
          children: [
            { type: NodeTypes.COMMENT, value: "comment", raw: "# comment", line: 10 },
            { type: NodeTypes.DATA, value: "0041; Data", raw: "0041; Data", line: 11 },
          ],
        }),
      ).toBe(true);
    });
    it("returns false for a boundary node", () => {
      expect(
        isSectionNode({
          type: NodeTypes.BOUNDARY,
          value: "===",
          raw: "# ===",
          line: 5,
          style: "=",
        }),
      ).toBe(false);
    });
    it("returns false for a root node", () => {
      expect(
        isSectionNode({ type: NodeTypes.ROOT, value: "", raw: "", line: 0, children: [] }),
      ).toBe(false);
    });
  });

  describe("isSectionChildNode", () => {
    it("returns true for a comment node", () => {
      expect(
        isSectionChildNode({ type: NodeTypes.COMMENT, value: "hello", raw: "# hello", line: 1 }),
      ).toBe(true);
    });
    it("returns true for an empty node", () => {
      expect(isSectionChildNode({ type: NodeTypes.EMPTY, value: "", raw: "", line: 0 })).toBe(true);
    });
    it("returns true for a data node", () => {
      expect(
        isSectionChildNode({
          type: NodeTypes.DATA,
          value: "0041; C; 0061;",
          raw: "0041; C; 0061;",
          line: 20,
        }),
      ).toBe(true);
    });
    it("returns true for a missing annotation node", () => {
      expect(
        isSectionChildNode({
          type: NodeTypes.MISSING,
          value: "@missing: 0000..10FFFF; Unknown",
          raw: "# @missing: 0000..10FFFF; Unknown",
          line: 15,
          annotation: null,
        }),
      ).toBe(true);
    });
    it("returns true for an unknown node", () => {
      expect(
        isSectionChildNode({ type: NodeTypes.UNKNOWN, value: "abc", raw: "abc", line: 5 }),
      ).toBe(true);
    });
    it("returns false for a boundary node", () => {
      expect(
        isSectionChildNode({
          type: NodeTypes.BOUNDARY,
          value: "===",
          raw: "# ===",
          line: 5,
          style: "=",
        }),
      ).toBe(false);
    });
    it("returns false for a section node", () => {
      expect(
        isSectionChildNode({
          type: NodeTypes.SECTION,
          value: "",
          raw: "",
          line: 10,
          children: [],
        }),
      ).toBe(false);
    });
    it("returns false for null", () => {
      expect(isSectionChildNode(null)).toBe(false);
    });
  });

  describe("isChildNode", () => {
    it("returns true for a comment node", () => {
      expect(
        isChildNode({ type: NodeTypes.COMMENT, value: "hello", raw: "# hello", line: 1 }),
      ).toBe(true);
    });
    it("returns true for an empty node", () => {
      expect(isChildNode({ type: NodeTypes.EMPTY, value: "", raw: "", line: 0 })).toBe(true);
    });
    it("returns true for an unknown node", () => {
      expect(isChildNode({ type: NodeTypes.UNKNOWN, value: "abc", raw: "abc", line: 5 })).toBe(
        true,
      );
    });
    it("returns true for a boundary node", () => {
      expect(
        isChildNode({
          type: NodeTypes.BOUNDARY,
          value: "===",
          raw: "# ===",
          line: 5,
          style: "=",
        }),
      ).toBe(true);
    });
    it("returns true for a section node", () => {
      expect(
        isChildNode({
          type: NodeTypes.SECTION,
          value: "",
          raw: "",
          line: 10,
          children: [],
        }),
      ).toBe(true);
    });
    it("returns false for a data node (not a root-level child)", () => {
      expect(
        isChildNode({
          type: NodeTypes.DATA,
          value: "0041; C; 0061;",
          raw: "0041; C; 0061;",
          line: 20,
        }),
      ).toBe(false);
    });
    it("returns false for a missing annotation node (not a root-level child)", () => {
      expect(
        isChildNode({
          type: NodeTypes.MISSING,
          value: "@missing: 0000..10FFFF; Unknown",
          raw: "# @missing: 0000..10FFFF; Unknown",
          line: 15,
          annotation: null,
        }),
      ).toBe(false);
    });
    it("returns false for null", () => {
      expect(isChildNode(null)).toBe(false);
    });
  });
});
