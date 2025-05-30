import type { RootNode } from "../datafile/ast";
import { invariant } from "@luxass/utils";
import {
  isBoundaryNode,
  isCommentNode,
  isEmptyNode,
} from "../datafile/typeguards";
import { isEOFMarker } from "../line-helpers";

interface InferHeadingSettings {
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

export function inferHeadingFromAST(
  root: RootNode,
  settings: InferHeadingSettings = {
    allowEmptyLines: true,
    allowMultipleBoundaries: true,
  },
): string | null {
  if (!root || !root.children || root.children.length === 0) {
    return null;
  }

  let heading: string | null = null;
  let isInHeading = false;
  let headingEndNodeIndex: number = -1;

  const nodes = root.children;
  const {
    allowEmptyLines = true,
    allowMultipleBoundaries = true,
  } = settings;

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const nextNode = nodes[i + 1];
    const value = node.value.trim();

    // If we encounter a EOF marker, stop processing
    if (isEOFMarker(node.raw) || (nextNode && isEOFMarker(nextNode.raw))) {
      invariant(heading == null, "heading should be null");
    }

    // Data section markers start with @ (like @missing, @levels, etc)
    if (value.startsWith("@")) {
      const prevNodeIsComment = i > 0 && isCommentNode(nodes[i - 1]);
      if (!prevNodeIsComment || !nextNode || !isCommentNode(nextNode)) {
        headingEndNodeIndex = i;
        break;
      }
    }

    // If this is a comment node
    if (isCommentNode(node)) {
      isInHeading = true;

      if (heading == null) {
        heading = "";
      }

      // Skip adding bare "#" lines at the beginning
      if (!heading && value === "#") {
        continue;
      }

      // Before adding this line, check if it marks the end
      if (isBoundaryNode(node)) {
        if (!allowMultipleBoundaries) {
          // Look for any previous boundary lines
          let hasPreviousBoundary = false;
          for (let k = 0; k < i; k++) {
            if (isBoundaryNode(nodes[k])) {
              hasPreviousBoundary = true;
              break;
            }
          }
          if (hasPreviousBoundary) {
            headingEndNodeIndex = i;
            break;
          }
        }

        // Look ahead to the next non-empty node
        let j = i + 1;
        let foundDataLine = false;
        while (j < nodes.length && j < i + 5) {
          const nextNode = nodes[j];
          if (!nextNode || nextNode.value.trim() === "#") {
            j++;
            continue;
          }
          const nextIsBoundary = isBoundaryNode(nextNode);
          const nextIsExample = isCommentNode(nextNode)
            && nodes[j + 1]?.value.trim().startsWith("@")
            && nodes[j + 2] && isCommentNode(nodes[j + 2]);
          const nextIsProperty = nextNode.value.trim().startsWith("# Property:");

          // If none of these special cases, treat as data
          if (!nextIsBoundary && !nextIsExample && !nextIsProperty) {
            foundDataLine = true;
          }
          break;
        }
        if (foundDataLine) {
          // Include the current boundary and one more line
          headingEndNodeIndex = i + 2;
          break;
        }
      }

      // Check for property markers directly
      if (value.startsWith("# Property:")) {
        headingEndNodeIndex = i;
        break;
      }

      // Add the line to the heading
      heading = `${heading}${node.raw}\n`;
    } else if (isEmptyNode(node)) {
      // For empty nodes between comments, preserve them based on config
      if (heading && nextNode && isCommentNode(nextNode)) {
        if (allowEmptyLines) {
          heading = `${heading}${node.raw}\n`;
        } else {
          headingEndNodeIndex = i;
          break;
        }
      } else if (isInHeading) {
        if (!allowEmptyLines) {
          headingEndNodeIndex = i;
          break;
        }
        // Look ahead for more comment nodes
        let hasMoreComments = false;

        // Look ahead a few nodes to determine what comes next
        for (let j = i + 1; j < nodes.length && j < i + 5; j++) {
          const nextNode = nodes[j];
          const nextValue = nextNode.value.trim();
          if (nextValue !== "" && !isCommentNode(nextNode)) {
            headingEndNodeIndex = i;
            break;
          }
          if (isCommentNode(nextNode) && nextValue !== "#") {
            // Don't count property lines as comments for this purpose
            if (nextValue.startsWith("# Property:")) {
              break;
            }
            hasMoreComments = true;
            break;
          }
        }

        if (hasMoreComments) {
          heading = `${heading}${node.raw}\n`;
        } else {
          headingEndNodeIndex = i;
          break;
        }
      }
    } else if (isInHeading) {
      // If we see any non-comment, non-empty node and we're in a heading, we're done
      headingEndNodeIndex = i;
      break;
    }
  }

  // If we found where the heading ends, use that
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

    // Trim empty nodes and bare # nodes at the end if configured
    if (allowEmptyLines) {
      while (endNodesWithoutEmpty > 0) {
        const prevNode = nodes[endNodesWithoutEmpty - 1];
        const prevValue = prevNode.value.trim();
        if (prevValue !== "" && prevValue !== "#") {
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
