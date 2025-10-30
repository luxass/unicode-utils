import { isBoundaryLine, isCommentLine, isEmptyLine } from "../line-helpers";

export interface UCDSectionWithLines {
  description: string;
  lines: string[];
}

/**
 * Determines whether the given Unicode data file content contains sections.
 *
 * Sections in Unicode data files are typically delimited by special comment
 * patterns and contain related data grouped together.
 *
 * @param {string} content - The Unicode data file content to check
 * @returns {boolean} True if the content contains sections, false otherwise
 *
 * @example
 * ```ts
 * const fileContent = "# Section 1\ndata1\n\n# Section 2\ndata2";
 * const hasFileSections = hasSections(fileContent); // true
 * ```
 */
export function hasSections(content: string): boolean {
  if (!content) {
    return false;
  }

  return parseSections(content).size > 0;
}

/**
 * Parses Unicode data file content into sections.
 *
 * This function divides the file content into logical sections based on comment blocks
 * followed by data lines. Each section consists of a name (the first comment line),
 * a description (subsequent comment lines), and associated data lines.
 *
 * The function handles various formatting patterns found in Unicode data files,
 * including handling of empty lines, consecutive comments, and section boundaries.
 *
 * @param {string} content - The Unicode data file content to parse
 * @returns {Map<string, UCDSectionWithLines>} A map where keys are section names and
 *                                            values are objects containing the
 *                                            section description and associated data lines
 *
 * @example
 * ```ts
 * const content = `# Section 1
 * # Description of section 1
 * data1
 * data2
 *
 * # Section 2
 * # Description of section 2
 * data3
 * data4`;
 *
 * const sections = parseSections(content);
 * // sections will contain two entries:
 * // "Section 1" -> { description: "Description of section 1", lines: ["data1", "data2"] }
 * // "Section 2" -> { description: "Description of section 2", lines: ["data3", "data4"] }
 * ```
 */
export function parseSections(content: string): Map<string, UCDSectionWithLines> {
  const sections = new Map<string, UCDSectionWithLines>();

  if (!content) {
    return sections;
  }

  const lines = content.split("\n");
  let currentSection: string | null = null;
  let currentDescription: string = "";
  let currentLines: string[] = [];
  let pendingComments: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line == null) {
      continue; // skip null or undefined lines
    }

    if (isEmptyLine(line)) {
      // look ahead to see if the next non-empty line is data
      let nextNonEmptyIsData = false;
      for (let j = i + 1; j < lines.length; j++) {
        const lineJ = lines[j];
        if (lineJ == null) {
          continue; // skip null or undefined lines
        }

        if (!isEmptyLine(lineJ)) {
          // found the next non-empty line
          nextNonEmptyIsData = !isCommentLine(lineJ);
          break;
        }
      }

      // only reset pending comments if the next line is NOT data
      // this prevents losing comments when they're followed by data
      if (!nextNonEmptyIsData) {
        pendingComments = [];
      }

      continue;
    }

    if (isCommentLine(line)) {
      // skip boundaries lines
      if (isBoundaryLine(line)) {
        continue;
      }

      // add to pending comments
      pendingComments.push(line.replace(/^#\s*/, ""));
    } else {
      // non-comment, non-empty line found - this is data
      if (pendingComments.length > 0) {
        // save current section if exists
        if (currentSection !== null) {
          sections.set(currentSection, {
            description: currentDescription,
            lines: currentLines,
          });
        }

        // first line of the comments is the section name
        // rest is the description
        currentSection = pendingComments[0]!;
        currentDescription = pendingComments.slice(1).join("\n");
        currentLines = [line];

        pendingComments = [];
      } else if (currentSection !== null) {
        // continue adding lines to the current section
        currentLines.push(line);
      }
    }
  }

  // save the last section if exists
  if (currentSection !== null) {
    sections.set(currentSection, {
      description: currentDescription,
      lines: currentLines,
    });
  }

  return sections;
}
