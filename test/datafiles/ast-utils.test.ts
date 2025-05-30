import type { ChildNode, RootNode } from "../../src/datafile/ast";
import { describe, expect, it } from "vitest";
import {
  allNodesAreOfType,
  endsWithSequence,
  findNodePattern,
  hasBoundaryWithinRange,
  hasConsecutiveNodesOfType,
  hasMinNodesOfType,
  hasNextNComments,
  hasNextNCommentsFrom,
  hasNodePattern,
  hasPrevNCommentsFrom,
  isCommentOnlyDocument,
  startsWithSequence,
  visit,
} from "../../src/datafile/ast-utils";

function createNode(type: ChildNode["type"], value = "test", line = 1): ChildNode {
  const base = {
    value,
    raw: value,
    line,
  };

  switch (type) {
    case "comment":
      return { ...base, type: "comment" };
    case "boundary":
      return { ...base, type: "boundary", style: "-" as const };
    case "data":
      return { ...base, type: "data" };
    case "empty":
      return { ...base, type: "empty" };
    case "unknown":
      return { ...base, type: "unknown" };
    default:
      throw new Error(`Unknown node type: ${type}`);
  }
}

function createRoot(childTypes: readonly ChildNode["type"][]): RootNode {
  return {
    type: "root",
    value: "",
    raw: "",
    line: 0,
    children: childTypes.map((type, index) => createNode(type, `${type}_${index}`, index + 1)),
  };
}

describe("ast-utils", () => {
  describe("hasNextNCommentsFrom", () => {
    it.each([
      {
        description: "should return true when next N nodes are comments",
        childTypes: ["comment", "comment", "comment", "data"] as const,
        startIndex: 0,
        count: 3,
        expected: true,
      },
      {
        description: "should return false when not all next N nodes are comments",
        childTypes: ["comment", "data", "comment", "data"] as const,
        startIndex: 0,
        count: 3,
        expected: false,
      },
      {
        description: "should return false when startIndex is negative",
        childTypes: ["comment", "comment", "comment"] as const,
        startIndex: -1,
        count: 2,
        expected: false,
      },
      {
        description: "should return false when count is zero",
        childTypes: ["comment", "comment", "comment"] as const,
        startIndex: 0,
        count: 0,
        expected: false,
      },
      {
        description: "should return false when range exceeds children length",
        childTypes: ["comment", "comment"] as const,
        startIndex: 0,
        count: 5,
        expected: false,
      },
      {
        description: "should return true for exact match at end",
        childTypes: ["data", "comment", "comment"] as const,
        startIndex: 1,
        count: 2,
        expected: true,
      },
    ])("$description", ({ childTypes, startIndex, count, expected }) => {
      const root = createRoot(childTypes);
      expect(hasNextNCommentsFrom(root, startIndex, count)).toBe(expected);
    });
  });

  describe("hasNextNComments", () => {
    it.each([
      {
        description: "should return true when next N nodes after current are comments",
        childTypes: ["data", "comment", "comment", "comment"] as const,
        currentNodeIndex: 0,
        count: 3,
        expected: true,
      },
      {
        description: "should return false when current node not found",
        childTypes: ["comment", "comment", "comment"] as const,
        currentNodeIndex: -1,
        count: 2,
        expected: false,
      },
      {
        description: "should return false when not enough comments after current",
        childTypes: ["data", "comment", "data", "comment"] as const,
        currentNodeIndex: 0,
        count: 3,
        expected: false,
      },
    ])("$description", ({ childTypes, currentNodeIndex, count, expected }) => {
      const root = createRoot(childTypes);
      const currentNode = currentNodeIndex >= 0 ? root.children[currentNodeIndex] : createNode("data", "not_in_root");
      expect(hasNextNComments(root, currentNode, count)).toBe(expected);
    });
  });

  describe("hasPrevNCommentsFrom", () => {
    it.each([
      {
        description: "should return true when previous N nodes are comments",
        childTypes: ["comment", "comment", "comment", "data"] as const,
        startIndex: 2,
        count: 3,
        expected: true,
      },
      {
        description: "should return false when not all previous N nodes are comments",
        childTypes: ["comment", "data", "comment", "data"] as const,
        startIndex: 3,
        count: 3,
        expected: false,
      },
      {
        description: "should return false when startIndex is out of bounds",
        childTypes: ["comment", "comment"] as const,
        startIndex: 5,
        count: 2,
        expected: false,
      },
      {
        description: "should return false when count would go below zero",
        childTypes: ["comment", "comment", "comment"] as const,
        startIndex: 1,
        count: 5,
        expected: false,
      },
    ])("$description", ({ childTypes, startIndex, count, expected }) => {
      const root = createRoot(childTypes);
      expect(hasPrevNCommentsFrom(root, startIndex, count)).toBe(expected);
    });
  });

  describe("hasConsecutiveNodesOfType", () => {
    it.each([
      {
        description: "should return true for consecutive comment nodes",
        childTypes: ["comment", "comment", "comment", "data"] as const,
        startIndex: 0,
        count: 3,
        nodeType: "comment" as const,
        expected: true,
      },
      {
        description: "should return false for non-consecutive nodes",
        childTypes: ["comment", "data", "comment", "data"] as const,
        startIndex: 0,
        count: 3,
        nodeType: "comment" as const,
        expected: false,
      },
      {
        description: "should return true for consecutive data nodes",
        childTypes: ["comment", "data", "data", "data"] as const,
        startIndex: 1,
        count: 3,
        nodeType: "data" as const,
        expected: true,
      },
      {
        description: "should return false for invalid node type",
        childTypes: ["comment", "comment"] as const,
        startIndex: 0,
        count: 2,
        nodeType: "invalid" as any,
        expected: false,
      },
    ])("$description", ({ childTypes, startIndex, count, nodeType, expected }) => {
      const root = createRoot(childTypes);
      expect(hasConsecutiveNodesOfType(root, startIndex, count, nodeType)).toBe(expected);
    });
  });

  describe("hasNodePattern", () => {
    it.each([
      {
        description: "should return true for matching pattern",
        childTypes: ["comment", "boundary", "data", "empty"] as const,
        pattern: ["comment", "boundary", "data"] as const,
        startIndex: 0,
        expected: true,
      },
      {
        description: "should return false for non-matching pattern",
        childTypes: ["comment", "data", "boundary", "empty"] as const,
        pattern: ["comment", "boundary", "data"] as const,
        startIndex: 0,
        expected: false,
      },
      {
        description: "should return true for pattern at different start index",
        childTypes: ["empty", "comment", "boundary", "data"] as const,
        pattern: ["comment", "boundary", "data"] as const,
        startIndex: 1,
        expected: true,
      },
      {
        description: "should return true for empty pattern",
        childTypes: ["comment", "data"] as const,
        pattern: [] as const,
        startIndex: 0,
        expected: true,
      },
      {
        description: "should return false when pattern exceeds bounds",
        childTypes: ["comment", "data"] as const,
        pattern: ["comment", "data", "boundary"] as const,
        startIndex: 0,
        expected: false,
      },
    ])("$description", ({ childTypes, pattern, startIndex, expected }) => {
      const root = createRoot(childTypes);
      expect(hasNodePattern(root, [...pattern], startIndex)).toBe(expected);
    });
  });

  describe("findNodePattern", () => {
    it.each([
      {
        description: "should find pattern at beginning",
        childTypes: ["comment", "boundary", "data", "empty"] as const,
        pattern: ["comment", "boundary"] as const,
        expected: 0,
      },
      {
        description: "should find pattern in middle",
        childTypes: ["empty", "comment", "boundary", "data"] as const,
        pattern: ["comment", "boundary"] as const,
        expected: 1,
      },
      {
        description: "should return -1 when pattern not found",
        childTypes: ["comment", "data", "empty"] as const,
        pattern: ["boundary", "data"] as const,
        expected: -1,
      },
      {
        description: "should return 0 for empty pattern",
        childTypes: ["comment", "data"] as const,
        pattern: [] as const,
        expected: 0,
      },
    ])("$description", ({ childTypes, pattern, expected }) => {
      const root = createRoot(childTypes);
      expect(findNodePattern(root, [...pattern])).toBe(expected);
    });
  });

  describe("startsWithSequence", () => {
    it.each([
      {
        description: "should return true when root starts with sequence",
        childTypes: ["comment", "boundary", "data", "empty"] as const,
        sequence: ["comment", "boundary"] as const,
        expected: true,
      },
      {
        description: "should return false when root doesn't start with sequence",
        childTypes: ["data", "comment", "boundary"] as const,
        sequence: ["comment", "boundary"] as const,
        expected: false,
      },
      {
        description: "should return true for empty sequence",
        childTypes: ["comment", "data"] as const,
        sequence: [] as const,
        expected: true,
      },
    ])("$description", ({ childTypes, sequence, expected }) => {
      const root = createRoot(childTypes);
      expect(startsWithSequence(root, [...sequence])).toBe(expected);
    });
  });

  describe("endsWithSequence", () => {
    it.each([
      {
        description: "should return true when root ends with sequence",
        childTypes: ["empty", "comment", "boundary", "data"] as const,
        sequence: ["boundary", "data"] as const,
        expected: true,
      },
      {
        description: "should return false when root doesn't end with sequence",
        childTypes: ["comment", "boundary", "data", "empty"] as const,
        sequence: ["boundary", "data"] as const,
        expected: false,
      },
      {
        description: "should return true for empty sequence",
        childTypes: ["comment", "data"] as const,
        sequence: [] as const,
        expected: true,
      },
      {
        description: "should return false when sequence longer than children",
        childTypes: ["comment"] as const,
        sequence: ["comment", "data", "boundary"] as const,
        expected: false,
      },
    ])("$description", ({ childTypes, sequence, expected }) => {
      const root = createRoot(childTypes);
      expect(endsWithSequence(root, [...sequence])).toBe(expected);
    });
  });

  describe("hasMinNodesOfType", () => {
    it.each([
      {
        description: "should return true when minimum count is met",
        childTypes: ["comment", "data", "comment", "boundary", "comment"] as const,
        nodeType: "comment" as const,
        minCount: 3,
        expected: true,
      },
      {
        description: "should return false when minimum count is not met",
        childTypes: ["comment", "data", "comment", "boundary"] as const,
        nodeType: "comment" as const,
        minCount: 3,
        expected: false,
      },
      {
        description: "should return true when count exactly matches minimum",
        childTypes: ["comment", "comment", "data"] as const,
        nodeType: "comment" as const,
        minCount: 2,
        expected: true,
      },
      {
        description: "should return false for invalid node type",
        childTypes: ["comment", "comment"] as const,
        nodeType: "invalid" as any,
        minCount: 1,
        expected: false,
      },
    ])("$description", ({ childTypes, nodeType, minCount, expected }) => {
      const root = createRoot(childTypes);
      expect(hasMinNodesOfType(root, nodeType, minCount)).toBe(expected);
    });
  });

  describe("allNodesAreOfType", () => {
    it.each([
      {
        description: "should return true when all nodes are of specified type",
        childTypes: ["comment", "comment", "comment"] as const,
        nodeType: "comment" as const,
        expected: true,
      },
      {
        description: "should return false when not all nodes are of specified type",
        childTypes: ["comment", "data", "comment"] as const,
        nodeType: "comment" as const,
        expected: false,
      },
      {
        description: "should return false for empty children array",
        childTypes: [] as const,
        nodeType: "comment" as const,
        expected: false,
      },
      {
        description: "should return false for invalid node type",
        childTypes: ["comment", "comment"] as const,
        nodeType: "invalid" as any,
        expected: false,
      },
    ])("$description", ({ childTypes, nodeType, expected }) => {
      const root = createRoot(childTypes);
      expect(allNodesAreOfType(root, nodeType)).toBe(expected);
    });
  });

  describe("isCommentOnlyDocument", () => {
    it.each([
      {
        description: "should return true for document with only comments",
        childTypes: ["comment", "comment", "comment"] as const,
        expected: true,
      },
      {
        description: "should return true for document with comments and empty nodes",
        childTypes: ["comment", "empty", "comment", "empty"] as const,
        expected: true,
      },
      {
        description: "should return false for document with data nodes",
        childTypes: ["comment", "data", "comment"] as const,
        expected: false,
      },
      {
        description: "should return false for document with boundary nodes",
        childTypes: ["comment", "boundary", "comment"] as const,
        expected: false,
      },
      {
        description: "should return true for empty document",
        childTypes: [] as const,
        expected: true,
      },
      {
        description: "should return true for document with only empty nodes",
        childTypes: ["empty", "empty"] as const,
        expected: true,
      },
    ])("$description", ({ childTypes, expected }) => {
      const root = createRoot(childTypes);
      expect(isCommentOnlyDocument(root)).toBe(expected);
    });
  });

  describe("hasBoundaryWithinRange", () => {
    it.each([
      {
        description: "should return true when boundary found within range",
        childTypes: ["comment", "data", "boundary", "empty"] as const,
        startIndex: 0,
        lookAhead: 3,
        expected: true,
      },
      {
        description: "should return false when no boundary in range",
        childTypes: ["comment", "data", "empty", "boundary"] as const,
        startIndex: 0,
        lookAhead: 3,
        expected: false,
      },
      {
        description: "should return false for negative startIndex",
        childTypes: ["boundary", "comment"] as const,
        startIndex: -1,
        lookAhead: 2,
        expected: false,
      },
      {
        description: "should return false for zero lookAhead",
        childTypes: ["boundary", "comment"] as const,
        startIndex: 0,
        lookAhead: 0,
        expected: false,
      },
      {
        description: "should handle range extending beyond children length",
        childTypes: ["comment", "boundary"] as const,
        startIndex: 0,
        lookAhead: 10,
        expected: true,
      },
    ])("$description", ({ childTypes, startIndex, lookAhead, expected }) => {
      const root = createRoot(childTypes);
      expect(hasBoundaryWithinRange(root, startIndex, lookAhead)).toBe(expected);
    });
  });

  describe("complex scenarios", () => {
    it("should handle typical Unicode data file structure", () => {
      const root = createRoot([
        "comment",
        "comment",
        "empty",
        "boundary",
        "empty",
        "comment",
        "data",
        "data",
        "empty",
        "comment",
      ]);

      expect(startsWithSequence(root, ["comment", "comment"])).toBe(true);
      expect(findNodePattern(root, ["boundary", "empty", "comment"])).toBe(3);
      expect(hasMinNodesOfType(root, "data", 2)).toBe(true);
      expect(hasConsecutiveNodesOfType(root, 6, 2, "data")).toBe(true);
      expect(endsWithSequence(root, ["empty", "comment"])).toBe(true);
      expect(isCommentOnlyDocument(root)).toBe(false);
    });

    it("should handle comment-only file", () => {
      const root = createRoot([
        "comment",
        "empty",
        "comment",
        "comment",
        "empty",
      ]);

      expect(isCommentOnlyDocument(root)).toBe(true);
      expect(allNodesAreOfType(root, "comment")).toBe(false);
      expect(hasMinNodesOfType(root, "comment", 3)).toBe(true);
      expect(hasBoundaryWithinRange(root, 0, 5)).toBe(false);
    });

    it("should handle edge cases with empty root", () => {
      const root = createRoot([]);

      expect(hasNextNCommentsFrom(root, 0, 1)).toBe(false);
      expect(findNodePattern(root, ["comment"])).toBe(-1);
      expect(startsWithSequence(root, [])).toBe(true);
      expect(endsWithSequence(root, [])).toBe(true);
      expect(allNodesAreOfType(root, "comment")).toBe(false);
      expect(hasMinNodesOfType(root, "comment", 1)).toBe(false);
      expect(isCommentOnlyDocument(root)).toBe(true);
    });
  });
});

describe("visit", () => {
  it("should visit all nodes in the root", () => {
    const root = createRoot(["comment", "data", "boundary", "empty"]);

    visit(root, ({ currentNode }) => {
      expect(currentNode).toBeDefined();
      expect(currentNode.type).toBeOneOf(["comment", "data", "boundary", "empty"]);
    });
  });

  it("should provide correct context with sibling nodes", () => {
    const root = createRoot(["comment", "data", "boundary"]);
    const visitedNodes: { current: string; prev?: string; next?: string }[] = [];

    visit(root, ({ currentNode, nextNode, prevNode }) => {
      visitedNodes.push({
        current: currentNode.type,
        prev: prevNode?.type,
        next: nextNode?.type,
      });
    });

    expect(visitedNodes).toEqual([
      { current: "comment", prev: undefined, next: "data" },
      { current: "data", prev: "comment", next: "boundary" },
      { current: "boundary", prev: "data", next: undefined },
    ]);
  });

  it("should handle empty root gracefully", () => {
    const root = createRoot([]);
    let visitCount = 0;

    visit(root, () => {
      visitCount++;
    });

    expect(visitCount).toBe(0);
  });
});
