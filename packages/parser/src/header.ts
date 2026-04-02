import type { ChildNode, CommentNode, RootNode, SectionNode } from "./ast";
import { NodeTypes } from "./ast";

export interface InferredHeader {
  fileName?: string;
  version?: string;
  date?: string;
  copyright?: string;
  startLine: number;
  endLine: number;
  text: string;
}

function extractComment(node: CommentNode, state: { date?: string; copyright?: string }): void {
  if (!state.date && /^Date:\s*/i.test(node.value)) {
    state.date = node.value.slice("Date:".length).trim();
  }
  if (!state.copyright && node.value.includes("©")) {
    state.copyright = node.value.slice(node.value.indexOf("©") + 1).trim();
  }
}

/**
 * Returns the next non-empty root child starting from index `from`.
 */
function findNextNonEmpty(children: ChildNode[], from: number): ChildNode | undefined {
  for (let j = from; j < children.length; j++) {
    if (children[j]!.type !== NodeTypes.EMPTY) {
      return children[j];
    }
  }
  return undefined;
}

/**
 * Returns true if a section contains only descriptive comments and empty lines.
 * Returns false if the section has data, @missing, unknown nodes, or starts
 * with a `# Property:` declaration (which signals structural metadata).
 */
function isDescriptiveSection(node: SectionNode): boolean {
  for (const c of node.children) {
    if (c.type !== NodeTypes.COMMENT && c.type !== NodeTypes.EMPTY) {
      return false;
    }
    if (c.type === NodeTypes.COMMENT && /^Property:\s*/i.test(c.value)) {
      return false;
    }
  }
  return true;
}

/**
 * Infers header metadata from a parsed UCD file AST.
 *
 * The header is everything from line 0 until the parser decides a boundary
 * ends the preamble. When a boundary is encountered, lookahead determines
 * whether it ends the header:
 *
 * - Next non-empty child is another `BoundaryNode` → header ends
 * - Next non-empty child is a `SectionNode` that is comment-only → continue (still header)
 * - Next non-empty child is a `SectionNode` with data or @missing → header ends
 * - No next child → header ends
 *
 * If no boundary exists, the header is everything before the first data or unknown line.
 *
 * @param {RootNode} root - The parsed AST root node
 * @returns {InferredHeader} The inferred header metadata
 */
export function inferHeaderFromAst(root: RootNode): InferredHeader {
  const state: { date?: string; copyright?: string } = {};
  let startLine = 0;
  let endLine = -1;

  function trackLine(line: number) {
    if (endLine === -1) {
      startLine = line;
      endLine = line;
    } else {
      startLine = Math.min(startLine, line);
      endLine = Math.max(endLine, line);
    }
  }

  const { children } = root;

  for (let i = 0; i < children.length; i++) {
    const child = children[i]!;

    if (child.type === NodeTypes.COMMENT) {
      trackLine(child.line);
      extractComment(child, state);
      continue;
    }

    if (child.type === NodeTypes.EMPTY) {
      trackLine(child.line);
      continue;
    }

    if (child.type === NodeTypes.BOUNDARY) {
      trackLine(child.line);

      const next = findNextNonEmpty(children, i + 1);

      // No more children — header ends here
      if (next == null) {
        break;
      }

      // Consecutive boundaries — header ends here
      if (next.type === NodeTypes.BOUNDARY) {
        break;
      }

      // Next is a descriptive section — still part of header, continue
      if (next.type === NodeTypes.SECTION && isDescriptiveSection(next)) {
        continue;
      }

      // Next section has data or @missing — header ends here
      break;
    }

    if (child.type === NodeTypes.SECTION) {
      // Descriptive section between boundaries — walk its children for metadata
      if (isDescriptiveSection(child)) {
        for (const sc of child.children) {
          trackLine(sc.line);
          if (sc.type === NodeTypes.COMMENT) {
            extractComment(sc, state);
          }
        }
        continue;
      }

      // Section with data or @missing — header ended before this
      break;
    }

    // UnknownNode or anything unexpected — stop
    break;
  }

  const text =
    endLine === -1
      ? ""
      : root.raw
          .split(/\r?\n/)
          .slice(startLine, endLine + 1)
          .join("\n");

  return {
    fileName: root.fileName,
    version: root.version,
    date: state.date,
    copyright: state.copyright,
    startLine: endLine === -1 ? 0 : startLine,
    endLine: endLine === -1 ? 0 : endLine,
    text,
  };
}
