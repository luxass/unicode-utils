import { invariant } from "@luxass/utils";
import { isCommentLine, isEmptyLine, isEOFMarker, isEqualsBoundary, isHashBoundary, isMissingAnnotation, parseFileNameLine } from "./data-files";

/**
 * For files that have some inconsistent formatting, we can provide some general rules
 * to infer the heading. This is a temporary solution until we can fix the files.
 */
const FILE_SETTINGS = {
  "v12.0.0": {
    Blocks: {

    },
  },
};

export function inferHeading(content: string): string | null {
  if (content == null || !content.trim()) {
    return null;
  }

  const parsedFileName = parseFileNameLine(content);
  invariant(parsedFileName?.version, "version could not be inferred");
  invariant(parsedFileName.fileName, "fileName could not be inferred");

  let heading: string | null = null;
  let isInHeading = false;
  // keep track of boundary lines.
  let lastBoundaryLineIndex: number = -1;

  const lines = content.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const nextLine = lines[i + 1];

    // If we encounter a EOF marker, we stop processing
    // and return the heading we have so far
    if (isEOFMarker(line) || isEOFMarker(nextLine)) {
      invariant(heading == null, "heading should be null");
    }

    // TODO: handle edge case if the @missing is defined like this:

    // # Property: Block
    // #
    // # @missing: 0000..10FFFF; No_Block

    // if the next line contains @missing, we can break out of the loop
    if (isCommentLine(line) && isMissingAnnotation(line)) {
      break;
    }

    // comments start with #
    if (isCommentLine(line)) {
      isInHeading = true;

      if (heading == null) {
        heading = "";
      }

      // add line to heading
      heading += `${line}\n`;

      const hashBoundary = isHashBoundary(line);
      const equalsBoundary = isEqualsBoundary(line);

      if (hashBoundary || equalsBoundary) {
        lastBoundaryLineIndex = i;
      }

      // If this is a boundary pattern followed by a non-comment line,
      // we might be at the end of the heading section
      if ((hashBoundary || equalsBoundary) && nextLine && !isCommentLine(nextLine)) {
        break;
      }
    }

    // TODO: handle edge case in BidiTest.txt
    // from BidiTest.txt
    // # A data line has the following format:
    //
    // # <input> ; <bitset>
    //
    // #   <input>  =      An ordered list of BIDI property values

    const neighbors = hasNeighboringDataLines(lines, i + 1, i + 5);
    console.log({
      neighbors,
      line,
      nextLine,
      isInHeading,
      isCommentLine: isCommentLine(line),
      isHashBoundary: isHashBoundary(line),
      isEqualsBoundary: isEqualsBoundary(line),
    });

    // if we just were in a heading and the line is empty
    // we can break out of the loop since the heading is done
    // but only if the next line is not a comment line, and doesn't have any neighboring data lines
    if (isInHeading && isEmptyLine(line) && !isCommentLine(nextLine) && !neighbors) {
      break;
    }
  }

  // TODO: check if there is edge cases for this especially.
  if (lastBoundaryLineIndex !== -1) {
    // keep only the lines up to and including the last boundary line
    heading = `${lines.slice(0, lastBoundaryLineIndex + 1).join("\n")}\n`;
  }

  return heading;
}

function hasNeighboringDataLines(
  lines: string[],
  startIndex: number,
  endIndex: number,
): boolean {
  for (let i = startIndex; i < endIndex; i++) {
    const line = lines[i];
    if (line.trim() === "" || isCommentLine(line)) {
      continue;
    }

    // if we find a non-empty line that is not a comment, we can break out of the loop
    return true;
  }

  return false;
}
