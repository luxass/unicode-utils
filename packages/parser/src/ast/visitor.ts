import type {
  BoundaryNode,
  CommentNode,
  DataNode,
  EmptyNode,
  MissingAnnotationNode,
  Node,
  RootNode,
  SectionNode,
  UnknownNode,
} from "./node";

export interface Visitor {
  root?: (node: RootNode) => void;
  comment?: (node: CommentNode) => void;
  empty?: (node: EmptyNode) => void;
  unknown?: (node: UnknownNode) => void;
  boundary?: (node: BoundaryNode) => void;
  data?: (node: DataNode) => void;
  missing?: (node: MissingAnnotationNode) => void;
  section?: (node: SectionNode) => void;
}

/**
 * Walks an AST tree, calling the appropriate visitor callback for each node.
 *
 * Traversal order is depth-first: the visitor for a container node
 * (`RootNode`, `SectionNode`) fires before its children are visited.
 *
 * @param {Node} node - The AST node to start visiting from (typically a `RootNode`)
 * @param {Visitor} visitor - An object with optional callbacks keyed by node type
 *
 * @example
 * ```ts
 * const ast = parseDataFileIntoAst(content);
 * const dataLines: string[] = [];
 *
 * visit(ast, {
 *   data(node) {
 *     dataLines.push(node.value);
 *   },
 * });
 * ```
 */
export function visit(node: Node, visitor: Visitor): void {
  switch (node.type) {
    case "root": {
      visitor.root?.(node);
      for (const child of node.children) {
        visit(child, visitor);
      }
      break;
    }
    case "section": {
      visitor.section?.(node);
      for (const child of node.children) {
        visit(child, visitor);
      }
      break;
    }
    case "comment": {
      visitor.comment?.(node);
      break;
    }
    case "empty": {
      visitor.empty?.(node);
      break;
    }
    case "unknown": {
      visitor.unknown?.(node);
      break;
    }
    case "boundary": {
      visitor.boundary?.(node);
      break;
    }
    case "data": {
      visitor.data?.(node);
      break;
    }
    case "missing": {
      visitor.missing?.(node);
      break;
    }
  }
}
