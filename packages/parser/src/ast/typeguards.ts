import type { ChildNode, CommentNode, EmptyNode, Node, RootNode, UnknownNode } from "./node";

export function isNode(node: unknown): node is Node {
  return (
    typeof node === "object"
    && node !== null
    && "type" in node
    && "value" in node
    && "raw" in node
    && "line" in node
  );
}

export function isRootNode(node: unknown): node is RootNode {
  return isNode(node) && node.type === "root";
}

export function isCommentNode(node: unknown): node is CommentNode {
  return isNode(node) && node.type === "comment";
}

export function isEmptyNode(node: unknown): node is EmptyNode {
  return isNode(node) && node.type === "empty";
}

export function isUnknownNode(node: unknown): node is UnknownNode {
  return isNode(node) && node.type === "unknown";
}

export function isChildNode(node: unknown): node is ChildNode {
  return isCommentNode(node) || isEmptyNode(node) || isUnknownNode(node);
}
