import { describe, expect, it } from "vitest";

import {
  isCommentNode,
  isEmptyNode,
  isNode,
  isRootNode,
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
});
