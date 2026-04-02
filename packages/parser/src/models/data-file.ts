import type { BoundaryNode, DataNode, MissingAnnotationNode, RootNode, SectionNode } from "../ast";
import { isBoundaryNode, isDataNode, isMissingAnnotationNode, isSectionNode } from "../ast";

/**
 * An immutable, queryable view of a parsed UCD file.
 *
 * The AST is frozen on construction. Query methods return fresh arrays
 * on each call.
 *
 * @example
 * ```ts
 * const file = raw.toDataFile();
 * for (const section of file.sections()) {
 *   for (const data of file.dataNodes()) {
 *     console.log(data.codepointRaw, data.fields);
 *   }
 * }
 * ```
 */
export class DataFile {
  readonly ast: Readonly<RootNode>;

  constructor(ast: RootNode) {
    this.ast = Object.freeze(ast);
  }

  /**
   * All `SectionNode` children of the root.
   *
   * @returns {SectionNode[]} An array of section nodes
   */
  sections(): SectionNode[] {
    return this.ast.children.filter(isSectionNode);
  }

  /**
   * All `BoundaryNode` children of the root.
   *
   * @returns {BoundaryNode[]} An array of boundary nodes
   */
  boundaries(): BoundaryNode[] {
    return this.ast.children.filter(isBoundaryNode);
  }

  /**
   * All `DataNode` across all sections, flattened.
   *
   * @returns {DataNode[]} An array of data nodes from every section
   */
  dataNodes(): DataNode[] {
    const result: DataNode[] = [];
    for (const child of this.ast.children) {
      if (isSectionNode(child)) {
        for (const sc of child.children) {
          if (isDataNode(sc)) {
            result.push(sc);
          }
        }
      }
    }
    return result;
  }

  /**
   * All `MissingAnnotationNode` across all sections, flattened.
   *
   * @returns {MissingAnnotationNode[]} An array of missing annotation nodes from every section
   */
  missingAnnotations(): MissingAnnotationNode[] {
    const result: MissingAnnotationNode[] = [];
    for (const child of this.ast.children) {
      if (isSectionNode(child)) {
        for (const sc of child.children) {
          if (isMissingAnnotationNode(sc)) {
            result.push(sc);
          }
        }
      }
    }
    return result;
  }
}
