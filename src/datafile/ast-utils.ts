import type { ChildNode, RootNode } from "./ast";
import {
  isBoundaryNode,
  isCommentNode,
  isDataNode,
  isEmptyCommentNode,
  isEmptyNode,
  isUnknownNode,
} from "./typeguards";

const NODE_TYPE_CHECKERS = {
  "comment": isCommentNode,
  "empty-comment": isEmptyCommentNode,
  "boundary": isBoundaryNode,
  "data": isDataNode,
  "empty": isEmptyNode,
  "unknown": isUnknownNode,
};

/**
 * Checks if the next N nodes from a given index are all comment nodes
 * @param {RootNode} root - The root node containing children
 * @param {number} startIndex - The starting index to check from
 * @param {number} count - Number of nodes to check
 * @returns {boolean} true if the next N nodes are all comment nodes, false otherwise
 */
export function hasNextNCommentsFrom(
  root: RootNode,
  startIndex: number,
  count: number,
): boolean {
  if (startIndex < 0 || count <= 0) return false;
  if (startIndex + count > root.children.length) return false;

  for (let i = startIndex; i < startIndex + count; i++) {
    if (!isCommentNode(root.children[i])) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if the next N nodes from the current node are all comment nodes
 * @param {RootNode} root - The root node containing children
 * @param {ChildNode} currentNode - The current node to find in the children array
 * @param {number} count - Number of nodes to check after the current node
 * @returns {boolean} true if the next N nodes are all comment nodes, false otherwise
 */
export function hasNextNComments(
  root: RootNode,
  currentNode: ChildNode,
  count: number,
): boolean {
  const currentIndex = root.children.indexOf(currentNode);
  if (currentIndex === -1) return false;

  return hasNextNCommentsFrom(root, currentIndex + 1, count);
}

/**
 * Checks if the previous N nodes from a given index are all comment nodes
 * @param {RootNode} root - The root node containing children
 * @param {number} startIndex - The starting index to check backwards from
 * @param {number} count - Number of nodes to check backwards
 * @returns {boolean} true if the previous N nodes are all comment nodes, false otherwise
 */
export function hasPrevNCommentsFrom(
  root: RootNode,
  startIndex: number,
  count: number,
): boolean {
  if (startIndex >= root.children.length || count <= 0) return false;
  if (startIndex - count + 1 < 0) return false;

  for (let i = startIndex - count + 1; i <= startIndex; i++) {
    if (!isCommentNode(root.children[i])) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if there are N consecutive nodes of a specific type starting from an index
 * @param {RootNode} root - The root node containing children
 * @param {number} startIndex - The starting index to check from
 * @param {number} count - Number of consecutive nodes to check
 * @param {ChildNode["type"]} nodeType - The type of node to check for ('comment', 'data', 'boundary', 'empty', 'unknown')
 * @returns {boolean} true if there are N consecutive nodes of the specified type, false otherwise
 */
export function hasConsecutiveNodesOfType(
  root: RootNode,
  startIndex: number,
  count: number,
  nodeType: ChildNode["type"],
): boolean {
  if (startIndex < 0 || count <= 0) return false;
  if (startIndex + count > root.children.length) return false;

  const typeCheckers = NODE_TYPE_CHECKERS;

  const checker = typeCheckers[nodeType];
  if (!checker) return false;

  for (let i = startIndex; i < startIndex + count; i++) {
    if (!checker(root.children[i])) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if the root contains a specific pattern of node types
 * @param {RootNode} root - The root node containing children
 * @param {ChildNode["type"][]} pattern - Array of node types that should appear consecutively
 * @param {number} [startIndex] - Optional starting index to check from
 * @returns {boolean} true if the pattern is found, false otherwise
 */
export function hasNodePattern(
  root: RootNode,
  pattern: ChildNode["type"][],
  startIndex: number = 0,
): boolean {
  if (pattern.length === 0) return true;
  if (startIndex < 0 || startIndex + pattern.length > root.children.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    const nodeIndex = startIndex + i;
    const expectedType = pattern[i];
    const checker = NODE_TYPE_CHECKERS[expectedType];

    if (!checker || !checker(root.children[nodeIndex])) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a node pattern in the root's children
 * @param {RootNode} root - The root node containing children
 * @param {ChildNode["type"][]} pattern - Array of node types to search for
 * @returns {number} The index of the first occurrence, or -1 if not found
 */
export function findNodePattern(
  root: RootNode,
  pattern: ChildNode["type"][],
): number {
  if (pattern.length === 0) return 0;

  for (let i = 0; i <= root.children.length - pattern.length; i++) {
    if (hasNodePattern(root, pattern, i)) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if the root starts with a specific sequence of node types
 * @param {RootNode} root - The root node containing children
 * @param {ChildNode["type"][]} sequence - Array of node types that should appear at the beginning
 * @returns {boolean} true if the root starts with the sequence, false otherwise
 */
export function startsWithSequence(
  root: RootNode,
  sequence: ChildNode["type"][],
): boolean {
  return hasNodePattern(root, sequence, 0);
}

/**
 * Checks if the root ends with a specific sequence of node types
 * @param {RootNode} root - The root node containing children
 * @param {ChildNode["type"][]} sequence - Array of node types that should appear at the end
 * @returns {boolean} true if the root ends with the sequence, false otherwise
 */
export function endsWithSequence(
  root: RootNode,
  sequence: ChildNode["type"][],
): boolean {
  if (sequence.length === 0) return true;
  if (sequence.length > root.children.length) return false;

  const startIndex = root.children.length - sequence.length;
  return hasNodePattern(root, sequence, startIndex);
}

/**
 * Checks if there are at least N nodes of a specific type in the root
 * @param {RootNode} root - The root node containing children
 * @param {ChildNode["type"]} nodeType - The type of node to count
 * @param {number} minCount - Minimum number of nodes required
 * @returns {boolean} true if there are at least minCount nodes of the specified type
 */
export function hasMinNodesOfType(
  root: RootNode,
  nodeType: ChildNode["type"],
  minCount: number,
): boolean {
  const checker = NODE_TYPE_CHECKERS[nodeType];
  if (!checker) return false;

  let count = 0;
  for (const child of root.children) {
    if (checker(child)) {
      count++;
      if (count >= minCount) return true;
    }
  }
  return false;
}

/**
 * Checks if all nodes in the root are of a specific type
 * @param {RootNode} root - The root node containing children
 * @param {ChildNode["type"]} nodeType - The type of node to check for
 * @returns {boolean} true if all nodes are of the specified type, false otherwise
 */
export function allNodesAreOfType(
  root: RootNode,
  nodeType: ChildNode["type"],
): boolean {
  if (root.children.length === 0) return false;

  const checker = NODE_TYPE_CHECKERS[nodeType];
  if (!checker) return false;

  return root.children.every((child) => checker(child));
}

/**
 * Checks if the root contains only comment and empty nodes
 * @param {RootNode} root - The root node containing children
 * @returns {boolean} true if the root contains only comments and empty nodes
 */
export function isCommentOnlyDocument(root: RootNode): boolean {
  return root.children.every((child) =>
    isCommentNode(child) || isEmptyNode(child),
  );
}

/**
 * Checks if there's a boundary node within the next N nodes
 * @param {RootNode} root - The root node containing children
 * @param {number} startIndex - The starting index to check from
 * @param {number} lookAhead - Number of nodes to look ahead
 * @returns {boolean} true if a boundary node is found within the range
 */
export function hasBoundaryWithinRange(
  root: RootNode,
  startIndex: number,
  lookAhead: number,
): boolean {
  if (startIndex < 0 || lookAhead <= 0) return false;

  const endIndex = Math.min(startIndex + lookAhead, root.children.length);

  for (let i = startIndex; i < endIndex; i++) {
    if (isBoundaryNode(root.children[i])) {
      return true;
    }
  }
  return false;
}
