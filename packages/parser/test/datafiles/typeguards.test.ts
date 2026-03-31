import { describe, expect, it } from "vitest";

import {
  isBoundaryNode,
  isCommentNode,
  isDataNode,
  isEmptyCommentNode,
  isEmptyNode,
  isEOFNode,
  isNode,
  isPropertyNode,
  isRootNode,
  isUnknownNode,
} from "../../src/datafile/typeguards";

describe("ast type guards", () => {
  describe("comment node", () => {
    it.each([
      { type: "comment", value: "This is a comment", raw: "# This is a comment", line: 1 },
      { type: "comment", value: "Another comment", raw: "# Another comment", line: 2 },
    ])("should identify comment nodes", (node) => {
      expect(isCommentNode(node)).toBe(true);
      expect(isEmptyCommentNode(node)).toBe(false);
      expect(isNode(node)).toBe(true);
      expect(isBoundaryNode(node)).toBe(false);
      expect(isDataNode(node)).toBe(false);
      expect(isEmptyNode(node)).toBe(false);
      expect(isUnknownNode(node)).toBe(false);
      expect(isRootNode(node)).toBe(false);
      expect(isEOFNode(node)).toBe(false);
      expect(isPropertyNode(node)).toBe(false);
    });
  });

  describe("empty comment node", () => {
    it.each([
      { type: "empty-comment", value: "", raw: "#", line: 1 },
      { type: "empty-comment", value: "", raw: "# ", line: 2 },
    ])("should identify empty comment nodes", (node) => {
      expect(isEmptyCommentNode(node)).toBe(true);
      expect(isCommentNode(node)).toBe(false);
      expect(isNode(node)).toBe(true);
      expect(isBoundaryNode(node)).toBe(false);
      expect(isDataNode(node)).toBe(false);
      expect(isEmptyNode(node)).toBe(false);
      expect(isUnknownNode(node)).toBe(false);
      expect(isRootNode(node)).toBe(false);
      expect(isEOFNode(node)).toBe(false);
      expect(isPropertyNode(node)).toBe(false);
    });
  });

  describe("boundary node", () => {
    it.each([
      { type: "boundary", value: "Boundary line", raw: "-----", line: 1, style: "-" },
      { type: "boundary", value: "Another boundary", raw: "=====", line: 2, style: "=" },
      { type: "boundary", value: "Hash boundary", raw: "#####", line: 3, style: "#" },
    ])("should identify boundary nodes", (node) => {
      expect(isBoundaryNode(node)).toBe(true);
      expect(isNode(node)).toBe(true);
      expect(isCommentNode(node)).toBe(false);
      expect(isEmptyCommentNode(node)).toBe(false);
      expect(isDataNode(node)).toBe(false);
      expect(isEmptyNode(node)).toBe(false);
      expect(isUnknownNode(node)).toBe(false);
      expect(isRootNode(node)).toBe(false);
      expect(isEOFNode(node)).toBe(false);
      expect(isPropertyNode(node)).toBe(false);
    });
  });

  describe("data node", () => {
    it.each([
      { type: "data", value: "Some data here", raw: "Some data here", line: 1 },
      { type: "data", value: "More data", raw: "More data", line: 2 },
    ])("should identify data nodes", (node) => {
      expect(isDataNode(node)).toBe(true);
      expect(isNode(node)).toBe(true);
      expect(isCommentNode(node)).toBe(false);
      expect(isEmptyCommentNode(node)).toBe(false);
      expect(isBoundaryNode(node)).toBe(false);
      expect(isEmptyNode(node)).toBe(false);
      expect(isUnknownNode(node)).toBe(false);
      expect(isRootNode(node)).toBe(false);
      expect(isEOFNode(node)).toBe(false);
      expect(isPropertyNode(node)).toBe(false);
    });
  });

  describe("empty node", () => {
    it.each([
      { type: "empty", value: "", raw: "", line: 1 },
      { type: "empty", value: "", raw: "", line: 2 },
    ])("should identify empty nodes", (node) => {
      expect(isEmptyNode(node)).toBe(true);
      expect(isNode(node)).toBe(true);
      expect(isCommentNode(node)).toBe(false);
      expect(isEmptyCommentNode(node)).toBe(false);
      expect(isBoundaryNode(node)).toBe(false);
      expect(isDataNode(node)).toBe(false);
      expect(isUnknownNode(node)).toBe(false);
      expect(isRootNode(node)).toBe(false);
      expect(isEOFNode(node)).toBe(false);
      expect(isPropertyNode(node)).toBe(false);
    });
  });

  describe("unknown node", () => {
    it.each([
      { type: "unknown", value: "Unknown type", raw: "Unknown type", line: 1, extra: "data" },
      { type: "unknown", value: "Another unknown", raw: "Another unknown", line: 2, extra: "info" },
    ])("should identify unknown nodes", (node) => {
      expect(isUnknownNode(node)).toBe(true);
      expect(isNode(node)).toBe(true);
      expect(isCommentNode(node)).toBe(false);
      expect(isEmptyCommentNode(node)).toBe(false);
      expect(isBoundaryNode(node)).toBe(false);
      expect(isDataNode(node)).toBe(false);
      expect(isEmptyNode(node)).toBe(false);
      expect(isRootNode(node)).toBe(false);
      expect(isEOFNode(node)).toBe(false);
      expect(isPropertyNode(node)).toBe(false);
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
        children: [
          {
            type: "data",
            value: "Child data",
            raw: "Child data",
            line: 3,
          },
        ],
      },
    ])("should identify root nodes", (node) => {
      expect(isRootNode(node)).toBe(true);
      expect(isNode(node)).toBe(true);
      expect(isCommentNode(node)).toBe(false);
      expect(isEmptyCommentNode(node)).toBe(false);
      expect(isBoundaryNode(node)).toBe(false);
      expect(isDataNode(node)).toBe(false);
      expect(isEmptyNode(node)).toBe(false);
      expect(isUnknownNode(node)).toBe(false);
      expect(isEOFNode(node)).toBe(false);
      expect(isPropertyNode(node)).toBe(false);
    });
  });

  describe("invalid node", () => {
    it.each([
      { case: "missing raw property", value: { type: "invalid", value: "Invalid data" } },
      { case: "null value", value: null },
      { case: "undefined value", value: undefined },
      { case: "primitive string", value: "not an object" },
      { case: "primitive number", value: 42 },
      { case: "array", value: [] },
      { case: "missing type property", value: { raw: "some raw data" } },
      { case: "non-string type", value: { type: 123, raw: "some raw data" } },
      { case: "non-string raw", value: { type: "data", raw: 123 } },
    ])("should return false for $case", ({ value }) => {
      expect(isNode(value)).toBe(false);
      expect(isCommentNode(value)).toBe(false);
      expect(isEmptyCommentNode(value)).toBe(false);
      expect(isBoundaryNode(value)).toBe(false);
      expect(isDataNode(value)).toBe(false);
      expect(isEmptyNode(value)).toBe(false);
      expect(isUnknownNode(value)).toBe(false);
      expect(isRootNode(value)).toBe(false);
      expect(isEOFNode(value)).toBe(false);
      expect(isPropertyNode(value)).toBe(false);
    });
  });

  it("EOF node", () => {
    const eofNode = { type: "eof", value: "", raw: "", line: 1 };

    expect(isEOFNode(eofNode)).toBe(true);
    expect(isNode(eofNode)).toBe(true);
    expect(isCommentNode(eofNode)).toBe(false);
    expect(isEmptyCommentNode(eofNode)).toBe(false);
    expect(isBoundaryNode(eofNode)).toBe(false);
    expect(isDataNode(eofNode)).toBe(false);
    expect(isEmptyNode(eofNode)).toBe(false);
    expect(isUnknownNode(eofNode)).toBe(false);
    expect(isRootNode(eofNode)).toBe(false);
    expect(isPropertyNode(eofNode)).toBe(false);
  });

  it("property node", () => {
    const propertyNode = {
      type: "property",
      value: "Property: value",
      raw: "# Property: value",
      line: 1,
      propertyValue: "value",
    };

    expect(isPropertyNode(propertyNode)).toBe(true);
    expect(isNode(propertyNode)).toBe(true);
    expect(isCommentNode(propertyNode)).toBe(false);
    expect(isEmptyCommentNode(propertyNode)).toBe(false);
    expect(isBoundaryNode(propertyNode)).toBe(false);
    expect(isDataNode(propertyNode)).toBe(false);
    expect(isEmptyNode(propertyNode)).toBe(false);
    expect(isUnknownNode(propertyNode)).toBe(false);
    expect(isRootNode(propertyNode)).toBe(false);
    expect(isEOFNode(propertyNode)).toBe(false);
  });
});
