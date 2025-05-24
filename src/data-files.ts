import type { UCDSectionWithLines } from "./types";
import {
  inferFileName,
  inferVersion,
  isBoundaryLine,
  isCommentLine,
  isEmptyLine,
  isEOFMarker,
} from "./line-helpers";

/**
 * Represents a raw Unicode data file with methods to access its content.
 *
 * This class parses and provides access to various components of Unicode data files,
 * including the raw content, individual lines, file metadata (like heading, version),
 * and determines if the file has an EOF marker.
 *
 * @example
 * ```ts
 * // Create a RawDataFile from a string content
 * const content = "# UnicodeData-14.0.0.txt\n# Some Unicode data\n\nU+0020;SPACE\n# EOF";
 * const dataFile = new RawDataFile(content);
 *
 * // Access file properties
 * console.log(dataFile.fileName); // "UnicodeData"
 * console.log(dataFile.version);  // "14.0.0"
 * console.log(dataFile.hasEOF);   // true
 * console.log(dataFile.heading);  // "# UnicodeData-14.0.0.txt\n# Some Unicode data"
 * ```
 */
export class RawDataFile {
  /** The content includes everything */
  readonly rawContent: string = "";

  /**
   * The content without the heading section.
   *
   * NOTE:
   * If we couldn't find a heading, this will be the same as `rawContent`.
   */
  readonly content: string = "";

  /** The lines of the content, will not include the heading */
  readonly lines: string[] = [];
  readonly heading: string | undefined = undefined;

  readonly sections: Map<string, UCDSectionWithLines> = new Map();

  /**
   * The name of the file, if available.
   * This is typically extracted from the first line of the file.
   * It may not always be present, especially if the file is empty or malformed.
   */
  readonly fileName: string | undefined = undefined;

  /**
   * The version of the file, if available.
   * This is typically extracted from the first line of the file.
   */
  readonly version: string | undefined = undefined;

  /**
   * Indicates if the file has an EOF marker.
   * This is typically used to indicate the end of the file in Unicode data files.
   */
  readonly hasEOF: boolean = false;

  constructor(content: string, fileName?: string) {
    if (content == null || content.trim() === "") {
      throw new Error("content is empty");
    }

    this.rawContent = this.content = content;
    this.heading = parseDataFileHeading(content);

    if (this.heading != null) {
      this.content = content.replace(this.heading, "").trim();
    }

    this.lines = this.content.split("\n");
    this.fileName = fileName ?? inferFileName(content);
    this.version = inferVersion(content);
    this.hasEOF = isEOFMarker(this.lines.at(-1));
    this.sections = parseSections(this.content);
  }
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

    if (isEmptyLine(line)) {
      // look ahead to see if the next non-empty line is data
      let nextNonEmptyIsData = false;
      for (let j = i + 1; j < lines.length; j++) {
        if (!isEmptyLine(lines[j])) {
          // found the next non-empty line
          nextNonEmptyIsData = !isCommentLine(lines[j]);
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
        currentSection = pendingComments[0];
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

/**
 * Parses the heading from a Unicode data file content.
 *
 * A heading in Unicode data files is typically at the beginning of the file,
 * consisting of consecutive comment lines (starting with #) that describe the file's content.
 *
 * The function extracts these comment lines until it encounters one of these conditions:
 * - A comment line containing a pattern like "# ###" (# followed by multiple #)
 * - A comment line containing a pattern like "# ===" (# followed by multiple =)
 * - An empty line after comment lines
 * - A non-comment line after comment lines
 *
 * @param {string} content - The content of the Unicode data file as a string
 * @returns {string | undefined} The heading as a string if found, otherwise undefined
 *
 * @example
 * ```ts
 * const fileContent = "# Unicode Data File\n# Version: 14.0\n\nU+0020;SPACE";
 * const heading = parseDataFileHeading(fileContent);
 * // heading will be "# Unicode Data File\n# Version: 14.0"
 * ```
 */
export function parseDataFileHeading(content: string): string | undefined {
  if (!content) {
    return;
  }

  let heading: string = "";
  let isInHeading: boolean = false;

  const lines = content.split("\n");

  // keep track of boundary lines.
  let lastBoundaryLineIndex: number = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const nextLine = lines[i + 1];

    // if the next line contains @missing, we can break out of the loop
    if (isCommentLine(line) && line.startsWith("# @missing")) {
      break;
    }

    // comments start with #
    if (isCommentLine(line)) {
      isInHeading = true;

      // add line to heading
      heading += `${line}\n`;

      const boundaryLine = isBoundaryLine(line);

      if (boundaryLine) {
        lastBoundaryLineIndex = i;
      }

      // If this is a boundary pattern followed by a non-comment line,
      // we might be at the end of the heading section
      if ((boundaryLine) && nextLine && !isCommentLine(nextLine)) {
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

    // if we just were in a heading and the line is empty
    // we can break out of the loop since the heading is done
    if (isInHeading && (line.trim() === "" || !isCommentLine(line))) {
      break;
    }
  }

  // TODO: check if there is edge cases for this especially.
  if (lastBoundaryLineIndex !== -1) {
    // keep only the lines up to and including the last boundary line
    heading = `${lines.slice(0, lastBoundaryLineIndex + 1).join("\n")}\n`;
  }

  return heading.trim() === "" ? undefined : heading.trim();
}
