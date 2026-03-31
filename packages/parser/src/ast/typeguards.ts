import type {
  BoundaryNode,
  ChildNode,
  CommentNode,
  DataNode,
  EmptyNode,
  MissingAnnotationNode,
  Node,
  RootNode,
  SectionChildNode,
  SectionNode,
  UnknownNode,
} from "./node";

export function isNode(node: unknown): node is Node {
  return (
    typeof node === "object" &&
    node !== null &&
    "type" in node &&
    "value" in node &&
    "raw" in node &&
    "line" in node
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

export function isBoundaryNode(node: unknown): node is BoundaryNode {
  return isNode(node) && node.type === "boundary";
}

export function isDataNode(node: unknown): node is DataNode {
  return isNode(node) && node.type === "data";
}

export function isMissingAnnotationNode(node: unknown): node is MissingAnnotationNode {
  return isNode(node) && node.type === "missing";
}

export function isSectionNode(node: unknown): node is SectionNode {
  return isNode(node) && node.type === "section";
}

export function isChildNode(node: unknown): node is ChildNode {
  return (
    isCommentNode(node) ||
    isEmptyNode(node) ||
    isUnknownNode(node) ||
    isBoundaryNode(node) ||
    isSectionNode(node)
  );
}

export function isSectionChildNode(node: unknown): node is SectionChildNode {
  return (
    isCommentNode(node) ||
    isEmptyNode(node) ||
    isUnknownNode(node) ||
    isDataNode(node) ||
    isMissingAnnotationNode(node)
  );
}
