import type { RootNode } from "../datafile/ast";
import { invariant } from "@luxass/utils";
import defu from "defu";
import { visit } from "../datafile/ast-utils";
import {
  isBoundaryNode,
  isCommentNode,
  isEmptyCommentNode,
  isEmptyNode,
  isEOFNode,
} from "../datafile/typeguards";
import { isEOFMarker } from "../line-helpers";
import { getHeadingSettings } from "./heading-settings";

export interface InferHeadingSettings {
  /**
   * Whether to allow empty lines between heading lines.
   * When false, any empty line will mark the end of the heading.
   * @default true
   */
  allowEmptyLines?: boolean;

  /**
   * Whether to allow multiple boundary lines in the heading.
   * When false, only the last boundary line will be included.
   * @default true
   */
  allowMultipleBoundaries?: boolean;
}

/**
 * Helper function to check if a node is a comment node or empty comment node
 */
function isAnyCommentNode(node: unknown): boolean {
  return isCommentNode(node) || isEmptyCommentNode(node);
}

export function inferHeadingFromAST(
  root: RootNode,
  settings?: InferHeadingSettings,
): string | null {
  if (!root || !root.children || root.children.length === 0) {
    return null;
  }

  let heading: string | null = null;
  let isInHeading = false;
  let headingEndNodeIndex: number = -1;
  let shouldStop = false;

  const nodes = root.children;
  const {
    allowEmptyLines,
    allowMultipleBoundaries,
  } = defu(getHeadingSettings(root.fileName, root.version) || {}, settings, {
    allowEmptyLines: true,
    allowMultipleBoundaries: true,
  });

  visit(root, (ctx) => {
    const { currentNode, nextNode, prevNode } = ctx;

    if (shouldStop) return;

    // Get current index in the nodes array
    const currentIndex = nodes.indexOf(currentNode);
    const value = currentNode.value.trim();

    // If we encounter a EOF marker, stop processing
    if (isEOFMarker(currentNode.raw) || (nextNode && isEOFMarker(nextNode.raw))) {
      invariant(heading == null, "heading should be null");
      shouldStop = true;
    }

    if (isEOFNode(currentNode)) {
      invariant(heading == null, "heading should be null");
      shouldStop = true;
    }

    if (shouldStop) return;

    // Data section markers start with @ (like @missing, @levels, etc)
    if (value.startsWith("@")) {
      const prevNodeIsComment = prevNode && isAnyCommentNode(prevNode);
      if (!prevNodeIsComment || !nextNode || !isAnyCommentNode(nextNode)) {
        headingEndNodeIndex = currentIndex;
        shouldStop = true;
      }
    } else if (isAnyCommentNode(currentNode)) {
      // If this is a comment node
      isInHeading = true;

      if (heading == null) {
        heading = "";
      }

      // Skip adding bare "#" lines at the beginning
      if (!heading && value === "#") {
        // Skip this node but continue processing
      } else if (value.startsWith("# Property:")) {
        // Check for property markers directly
        headingEndNodeIndex = currentIndex;
        shouldStop = true;
      } else {
        // Check if this is a boundary node
        if (isBoundaryNode(currentNode)) {
          // Before adding this line, check if it marks the end
          if (!allowMultipleBoundaries) {
            // Look for any previous boundary lines
            let hasPreviousBoundary = false;
            for (let k = 0; k < currentIndex; k++) {
              if (isBoundaryNode(nodes[k])) {
                hasPreviousBoundary = true;
                break;
              }
            }
            if (hasPreviousBoundary) {
              headingEndNodeIndex = currentIndex;
              shouldStop = true;
            }
          }

          if (!shouldStop) {
            // Look ahead to the next non-empty node
            let j = currentIndex + 1;
            let foundDataLine = false;
            while (j < nodes.length && j < currentIndex + 5) {
              const lookAheadNode = nodes[j];
              if (!lookAheadNode || lookAheadNode.value.trim() === "#") {
                j++;
                continue;
              }
              const nextIsBoundary = isBoundaryNode(lookAheadNode);
              const nextIsExample = isAnyCommentNode(lookAheadNode)
                && nodes[j + 1]?.value.trim().startsWith("@")
                && nodes[j + 2] && isAnyCommentNode(nodes[j + 2]);
              const nextIsProperty = lookAheadNode.value.trim().startsWith("# Property:");

              // If none of these special cases, treat as data
              if (!nextIsBoundary && !nextIsExample && !nextIsProperty) {
                foundDataLine = true;
              }
              break;
            }
            if (foundDataLine) {
              // Include the current boundary and one more line
              headingEndNodeIndex = currentIndex + 2;
              shouldStop = true;
            }
          }
        }

        if (!shouldStop) {
          // Add the line to the heading
          heading = `${heading}${currentNode.raw}\n`;
        }
      }
    } else if (isEmptyNode(currentNode)) {
      // For empty nodes between comments, preserve them based on config
      if (heading && nextNode && isAnyCommentNode(nextNode)) {
        if (allowEmptyLines) {
          heading = `${heading}${currentNode.raw}\n`;
        } else {
          headingEndNodeIndex = currentIndex;
          shouldStop = true;
        }
      } else if (isInHeading) {
        if (!allowEmptyLines) {
          headingEndNodeIndex = currentIndex;
          shouldStop = true;
        } else {
          // Look ahead for more comment nodes
          let hasMoreComments = false;

          // Look ahead a few nodes to determine what comes next
          for (let j = currentIndex + 1; j < nodes.length && j < currentIndex + 5; j++) {
            const lookAheadNode = nodes[j];
            const nextValue = lookAheadNode?.value.trim();
            if (nextValue !== "" && !isAnyCommentNode(lookAheadNode)) {
              headingEndNodeIndex = currentIndex;
              shouldStop = true;
              break;
            }
            if (isAnyCommentNode(lookAheadNode) && nextValue !== "#") {
              // Don't count property lines as comments for this purpose
              if (nextValue?.startsWith("# Property:")) {
                break;
              }
              hasMoreComments = true;
              break;
            }
          }

          if (!shouldStop) {
            if (hasMoreComments) {
              heading = `${heading}${currentNode.raw}\n`;
            } else {
              headingEndNodeIndex = currentIndex;
              shouldStop = true;
            }
          }
        }
      }
    } else if (isInHeading) {
      // If we see any non-comment, non-empty node and we're in a heading, we're done
      headingEndNodeIndex = currentIndex;
      shouldStop = true;
    }
  });

  // If we found where the heading ends, process it
  if (headingEndNodeIndex !== -1) {
    let endNodesWithoutEmpty = headingEndNodeIndex;

    // Keep looking for the last boundary line if we allow multiple boundaries
    if (allowMultipleBoundaries) {
      let lastBoundaryNodeIndex = -1;
      for (let i = 0; i <= endNodesWithoutEmpty; i++) {
        if (isBoundaryNode(nodes[i])) {
          lastBoundaryNodeIndex = i;
        }
      }

      if (lastBoundaryNodeIndex !== -1) {
        endNodesWithoutEmpty = lastBoundaryNodeIndex + 1;
      }
    }

    // Trim empty nodes, bare # nodes, and empty comment nodes at the end if configured
    if (allowEmptyLines) {
      while (endNodesWithoutEmpty > 0) {
        const prevNode = nodes[endNodesWithoutEmpty - 1];
        const prevValue = prevNode?.value.trim();

        // Trim if it's an empty node, bare "#" comment, or empty comment node
        if (prevValue !== "" && prevValue !== "#" && !isEmptyCommentNode(prevNode)) {
          break;
        }
        endNodesWithoutEmpty--;
      }
    } else {
      // Even when not allowing empty lines, we should still trim empty comment nodes at the end
      while (endNodesWithoutEmpty > 0) {
        const prevNode = nodes[endNodesWithoutEmpty - 1];
        if (!isEmptyCommentNode(prevNode)) {
          break;
        }
        endNodesWithoutEmpty--;
      }
    }

    heading = `${nodes
      .slice(0, endNodesWithoutEmpty)
      .map((node) => node.raw)
      .join("\n")}\n`;
  }

  return heading;
}
