import { invariant } from "@luxass/utils";
import {
  isBoundaryLine,
  isCommentLine,
  isEmptyLine,
  isEOFMarker,
  parseFileNameLine,
} from "../line-helpers";

export function inferHeading(content: string): string | null {
  if (content == null || !content.trim()) {
    return null;
  }

  let heading: string | null = null;
  let isInHeading = false;
  let headingEndLineIndex: number = -1;

  const lines = content.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const nextLine = lines[i + 1];
    const trimmedLine = line.trim();

    // If we encounter a EOF marker, stop processing
    if (isEOFMarker(line) || isEOFMarker(nextLine)) {
      invariant(heading == null, "heading should be null");
    }

    // Data section markers start with @ (like @missing, @levels, etc)
    if (trimmedLine.startsWith("@")) {
      // If this @ line is not part of an example (indicated by comments around it)
      const prevLineIsComment = i > 0 && isCommentLine(lines[i - 1]);
      if (!prevLineIsComment || !nextLine || !isCommentLine(nextLine)) {
        headingEndLineIndex = i;
        break;
      }
    }

    // If this is a comment line
    if (isCommentLine(line)) {
      isInHeading = true;

      if (heading == null) {
        heading = "";
      }

      // Skip adding bare "#" lines at the beginning
      if (!heading && trimmedLine === "#") {
        continue;
      }

      // Before adding this line, check if it marks the end
      if (isBoundaryLine(line)) {
        // Look ahead to the next non-empty line
        let j = i + 1;
        let foundDataLine = false;
        while (j < lines.length && j < i + 5) {
          const nextLine = lines[j];
          if (!nextLine || nextLine.trim() === "#") {
            j++;
            continue;
          }
          const nextIsBoundary = isBoundaryLine(nextLine);
          const nextIsExample = isCommentLine(nextLine)
            && lines[j + 1]?.trim().startsWith("@")
            && lines[j + 2] && isCommentLine(lines[j + 2]);
          const nextIsProperty = nextLine.trim().startsWith("# Property:");

          // If none of these special cases, treat as data
          if (!nextIsBoundary && !nextIsExample && !nextIsProperty) {
            foundDataLine = true;
          }
          break;
        }
        if (foundDataLine) {
          headingEndLineIndex = i + 1;
          break;
        }
      }

      // Check for property markers directly
      if (trimmedLine.startsWith("# Property:")) {
        headingEndLineIndex = i;
        break;
      }

      // Add the line to the heading
      heading = `${heading}${line}\n`;
    } else if (isEmptyLine(line)) {
      // For empty lines in between comments, preserve them
      if (heading && nextLine && isCommentLine(nextLine)) {
        heading = `${heading}${line}\n`;
      } else if (isInHeading) {
        // Look ahead for more comment lines
        let hasMoreComments = false;

        // Look ahead a few lines to determine what comes next
        for (let j = i + 1; j < lines.length && j < i + 5; j++) {
          const nextLine = lines[j].trim();
          if (nextLine !== "" && !isCommentLine(lines[j])) {
            headingEndLineIndex = i;
            break;
          }
          if (isCommentLine(lines[j]) && nextLine !== "#") {
            // Don't count property lines as comments for this purpose
            if (nextLine.startsWith("# Property:")) {
              break;
            }
            hasMoreComments = true;
            break;
          }
        }

        if (hasMoreComments) {
          heading = `${heading}${line}\n`;
        } else {
          headingEndLineIndex = i;
          break;
        }
      }
    } else if (isInHeading) {
      // If we see any non-comment, non-empty line and we're in a heading, we're done
      headingEndLineIndex = i;
      break;
    }
  }

  // If we found where the heading ends, use that
  if (headingEndLineIndex !== -1) {
    let endLinesWithoutEmptyLines = headingEndLineIndex;

    // Trim empty lines and bare # lines at the end
    while (endLinesWithoutEmptyLines > 0) {
      const prevLine = lines[endLinesWithoutEmptyLines - 1].trim();
      if (prevLine !== "" && prevLine !== "#") {
        break;
      }
      endLinesWithoutEmptyLines--;
    }

    heading = `${lines.slice(0, endLinesWithoutEmptyLines).join("\n")}\n`;
  }

  return heading;
}
