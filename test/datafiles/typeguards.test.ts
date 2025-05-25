import { describe, expect, it } from "vitest";
import {
  isDataFileBoundaryNode,
  isDataFileCommentNode,
  isDataFileDataNode,
  isDataFileEmptyNode,
  isDataFileNode,
  isDataFileRootNode,
  isDataFileUnknownNode,
} from "../../src/datafile/typeguards";

describe("ast type guards", () => {
  describe("comment node", () => {
    it.each([
      { type: "comment", value: "This is a comment", raw: "# This is a comment", line: 1 },
      { type: "comment", value: "Another comment", raw: "# Another comment", line: 2 },
    ])("should identify comment nodes", (node) => {
      expect(isDataFileCommentNode(node)).toBe(true);
      expect(isDataFileNode(node)).toBe(true);
      expect(isDataFileBoundaryNode(node)).toBe(false);
      expect(isDataFileDataNode(node)).toBe(false);
      expect(isDataFileEmptyNode(node)).toBe(false);
      expect(isDataFileUnknownNode(node)).toBe(false);
      expect(isDataFileRootNode(node)).toBe(false);
    });
  });

  describe("boundary node", () => {
    it.each([
      { type: "boundary", value: "Boundary line", raw: "-----", line: 1, style: "-" },
      { type: "boundary", value: "Another boundary", raw: "=====", line: 2, style: "=" },
      { type: "boundary", value: "Hash boundary", raw: "#####", line: 3, style: "#" },
    ])("should identify boundary nodes", (node) => {
      expect(isDataFileBoundaryNode(node)).toBe(true);
      expect(isDataFileNode(node)).toBe(true);
      expect(isDataFileCommentNode(node)).toBe(false);
      expect(isDataFileDataNode(node)).toBe(false);
      expect(isDataFileEmptyNode(node)).toBe(false);
      expect(isDataFileUnknownNode(node)).toBe(false);
      expect(isDataFileRootNode(node)).toBe(false);
    });
  });

  describe("data node", () => {
    it.each([
      { type: "data", value: "Some data here", raw: "Some data here", line: 1 },
      { type: "data", value: "More data", raw: "More data", line: 2 },
    ])("should identify data nodes", (node) => {
      expect(isDataFileDataNode(node)).toBe(true);
      expect(isDataFileNode(node)).toBe(true);
      expect(isDataFileCommentNode(node)).toBe(false);
      expect(isDataFileBoundaryNode(node)).toBe(false);
      expect(isDataFileEmptyNode(node)).toBe(false);
      expect(isDataFileUnknownNode(node)).toBe(false);
      expect(isDataFileRootNode(node)).toBe(false);
    });
  });

  describe("empty node", () => {
    it.each([
      { type: "empty", value: "", raw: "", line: 1 },
      { type: "empty", value: "", raw: "", line: 2 },
    ])("should identify empty nodes", (node) => {
      expect(isDataFileEmptyNode(node)).toBe(true);
      expect(isDataFileNode(node)).toBe(true);
      expect(isDataFileCommentNode(node)).toBe(false);
      expect(isDataFileBoundaryNode(node)).toBe(false);
      expect(isDataFileDataNode(node)).toBe(false);
      expect(isDataFileUnknownNode(node)).toBe(false);
      expect(isDataFileRootNode(node)).toBe(false);
    });
  });

  describe("unknown node", () => {
    it.each([
      { type: "unknown", value: "Unknown type", raw: "Unknown type", line: 1, extra: "data" },
      { type: "unknown", value: "Another unknown", raw: "Another unknown", line: 2, extra: "info" },
    ])("should identify unknown nodes", (node) => {
      expect(isDataFileUnknownNode(node)).toBe(true);
      expect(isDataFileNode(node)).toBe(true);
      expect(isDataFileCommentNode(node)).toBe(false);
      expect(isDataFileBoundaryNode(node)).toBe(false);
      expect(isDataFileDataNode(node)).toBe(false);
      expect(isDataFileEmptyNode(node)).toBe(false);
      expect(isDataFileRootNode(node)).toBe(false);
    });
  });

  describe("root node", () => {
    it.each([
      { type: "root", value: "Root node", raw: "Root node", line: 1, children: [] },
      {
        type: "root",
        value: "Another root node",
        raw: "Another root node",
        line: 2,
        children: [{
          type: "data",
          value: "Child data",
          raw: "Child data",
          line: 3,
        }],
      },
    ])("should identify root nodes", (node) => {
      expect(isDataFileRootNode(node)).toBe(true);
      expect(isDataFileNode(node)).toBe(true);
      expect(isDataFileCommentNode(node)).toBe(false);
      expect(isDataFileBoundaryNode(node)).toBe(false);
      expect(isDataFileDataNode(node)).toBe(false);
      expect(isDataFileEmptyNode(node)).toBe(false);
      expect(isDataFileUnknownNode(node)).toBe(false);
    });
  });

  describe("invalid node", () => {
    it("should return false for non-node objects", () => {
      const invalidNode = { type: "invalid", value: "Invalid data" };
      expect(isDataFileNode(invalidNode)).toBe(false);
      expect(isDataFileCommentNode(invalidNode)).toBe(false);
      expect(isDataFileBoundaryNode(invalidNode)).toBe(false);
      expect(isDataFileDataNode(invalidNode)).toBe(false);
      expect(isDataFileEmptyNode(invalidNode)).toBe(false);
      expect(isDataFileUnknownNode(invalidNode)).toBe(false);
      expect(isDataFileRootNode(invalidNode)).toBe(false);
    });
  });
});
