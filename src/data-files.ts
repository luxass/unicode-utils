import type { UCDSectionWithLines } from "./types";

export const HASH_BOUNDARY_REGEX = /^\s*#\s*#{2,}\s*$/;
export const EQUALS_BOUNDARY_REGEX = /^\s*#\s*={2,}\s*$/;
export const DASH_BOUNDARY_REGEX = /^\s*#\s*-{2,}\s*$/;

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
    this.hasEOF = this.lines.at(-1)?.trim() === "# EOF";
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
      if (isHashBoundary(line) || isEqualsBoundary(line)) {
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

/**
 * Determines if a line contains a hash boundary pattern.
 *
 * A hash boundary is a line containing a pattern like "# ###" (# followed by multiple #).
 * These patterns are used in Unicode data files to separate different sections of content.
 *
 * @param {string} line - The line to check
 * @returns {boolean} True if the line contains a hash boundary pattern, false otherwise
 *
 * @example
 * ```ts
 * isHashBoundary("# #####"); // true
 * isHashBoundary("# Some text"); // false
 * isHashBoundary(""); // false
 * ```
 */
export function isHashBoundary(line: string): boolean {
  if (!line) {
    return false;
  }

  return HASH_BOUNDARY_REGEX.test(line);
}

/**
 * Determines if a line contains an equals boundary pattern.
 *
 * An equals boundary is a line containing a pattern like "# ===" (# followed by multiple =).
 * These patterns are used in Unicode data files to separate different sections of content.
 *
 * @param {string} line - The line to check
 * @returns {boolean} True if the line contains an equals boundary pattern, false otherwise
 *
 * @example
 * ```ts
 * isEqualsBoundary("# ====="); // true
 * isEqualsBoundary("# Some text"); // false
 * isEqualsBoundary(""); // false
 * ```
 */
export function isEqualsBoundary(line: string): boolean {
  if (!line) {
    return false;
  }

  return EQUALS_BOUNDARY_REGEX.test(line);
}

/**
 * Determines if a line contains a dash boundary pattern.
 *
 * A dash boundary is a line containing a pattern like "# ---" (# followed by multiple -).
 * These patterns are used in Unicode data files to separate different sections of content.
 *
 * @param {string} line - The line to check
 * @returns {boolean} True if the line contains a dash boundary pattern, false otherwise
 *
 * @example
 * ```ts
 * isDashBoundary("# -----"); // true
 * isDashBoundary("# Some text"); // false
 * isDashBoundary(""); // false
 * ```
 */
export function isDashBoundary(line: string): boolean {
  if (!line) {
    return false;
  }

  return DASH_BOUNDARY_REGEX.test(line);
}

/**
 * Determines if a line is a comment line.
 *
 * A comment line is either a line that starts with "# " or
 * a line that only contains "#" (possibly with whitespace).
 *
 * @param {string} line - The line to check
 * @returns {boolean} True if the line is a comment line, false otherwise
 */
export function isCommentLine(line: string): boolean {
  if (!line) {
    return false;
  }

  return line.startsWith("# ") || line.startsWith("#\t\t") || line.trim() === "#";
}

/**
 * Checks if a string line is empty after trimming whitespace.
 *
 * @param {string} line - The string to check for emptiness
 * @returns {boolean} A boolean indicating whether the trimmed line is empty
 */
export function isEmptyLine(line: string): boolean {
  if (!line) {
    return true;
  }

  return line.trim() === "";
}

/**
 * Determines if a line contains data in a Unicode data file.
 *
 * A line is considered to contain data if it is neither a comment line
 * (starting with '#') nor an empty line.
 *
 * @param {string} line - The line to check
 * @returns {boolean} True if the line contains data, false otherwise
 *
 * @example
 * ```ts
 * isLineWithData("U+0020;SPACE"); // true
 * isLineWithData("# Comment line"); // false
 * isLineWithData(""); // false
 * ```
 */
export function isLineWithData(line: string): boolean {
  return !isCommentLine(line) && !isEmptyLine(line);
}

/**
 * Check if a given line from a Unicode data file is a 'missing' annotation.
 *
 * In Unicode data files, lines starting with '# @missing:' indicate
 * a range of code points that are not assigned.
 *
 * @param {string} line - The line to check
 * @returns {boolean} True if the line is a missing annotation, false otherwise
 */
export function isMissingAnnotation(line: string): boolean {
  return line.startsWith("# @missing:");
}

export interface MissingAnnotation {
  start: string;
  end: string;
  propertyName?: string;
  defaultPropertyValue: string;
  /**
   * The special tag used in the Annotation.
   *
   * NOTE:
   * - "none" no value is defined
   * - "script" the value equal to the Script property value for this code point
   * - "code-point" the string representation of the code point value
   */
  specialTag?: "none" | "script" | "code-point";
}

const MISSING_ANNOTATION_SPECIAL_TAGS: Record<string, "none" | "script" | "code-point"> = {
  "<none>": "none",
  "<script>": "script",
  "<code-point>": "code-point",
};

/**
 * Parses a line into a MissingAnnotation object.
 *
 * This function attempts to extract information from a line that follows the
 * format of a missing annotation in Unicode data files.
 *
 * The format being parsed is:
 * `# @missing: START..END; DEFAULT_PROP_VALUE_OR_PROPERTY_NAME[; DEFAULT_PROPERTY_VALUE]`
 *
 * @param {string} line - The line to parse
 * @returns {MissingAnnotation | null} A MissingAnnotation object if the line is a valid missing annotation, null otherwise
 *
 * @example
 * ```ts
 * parseMissingAnnotation("# @missing: 0000..007F; NA")
 * // -> { start: "0000", end: "007F", defaultPropertyValue: "NA" }
 *
 * parseMissingAnnotation("# @missing: 0000..007F; Script; Unknown")
 * // -> { start: "0000", end: "007F", propertyName: "Script", defaultPropertyValue: "Unknown" }
 * ```
 */
export function parseMissingAnnotation(line: string): MissingAnnotation | null {
  if (!isMissingAnnotation(line)) {
    return null;
  }

  const match = line.match(/^# @missing: ([0-9A-F]+)\.\.([0-9A-F]+); ([^;\n]+)(?:; ([^\n]+))?$/m);
  if (match == null) {
    return null;
  }

  const [_, start, end, defaultPropValueOrPropertyName, defaultPropertyValue] = match;

  const defaultProperty = defaultPropertyValue == null ? defaultPropValueOrPropertyName : defaultPropertyValue;
  const specialTag: "none" | "script" | "code-point" | undefined = MISSING_ANNOTATION_SPECIAL_TAGS[defaultProperty] ?? undefined;

  return {
    start,
    end,
    propertyName: defaultPropertyValue == null ? undefined : defaultPropValueOrPropertyName,
    defaultPropertyValue: defaultProperty,
    specialTag,
  };
}

/**
 * Attempts to infer the file name from the first line of a Unicode data file.
 *
 * This function extracts the file name from the first line of the content,
 * assuming it's a comment line. It removes any leading '#' characters and whitespace.
 *
 * For example:
 * - From a file with first line "# ArabicShaping-5.0.0.txt", it returns "ArabicShaping"
 * - From a file with first line "# UnicodeData-5.0.0.txt", it returns "UnicodeData"
 *
 * @param {string} line - The first line of the file
 * @returns {string | undefined} The inferred file name, or undefined if it can't be determined
 */
export function inferFileName(line: string): string | undefined {
  return internal_parseFileNameLine(line)?.fileName;
}

/**
 * Attempts to infer the version from the first line of a Unicode data file.
 *
 * This function extracts the version number from the first line of the content,
 * assuming it's a comment line. It looks for a pattern like "Name-X.Y.Z.txt"
 * and extracts the X.Y.Z part as the version.
 *
 * For example:
 * - From a file with first line "# ArabicShaping-5.0.0.txt", it returns "5.0.0"
 * - From a file with first line "# UnicodeData-14.0.0.txt", it returns "14.0.0"
 *
 * @param {string} line - The first line of the file
 * @returns {string | undefined} The inferred version number, or undefined if it can't be determined
 */
export function inferVersion(line: string): string | undefined {
  return internal_parseFileNameLine(line)?.version;
}

interface ParsedFileName {
  fileName: string;
  version: string;
}

/**
 * @internal
 */
function internal_parseFileNameLine(line: string): ParsedFileName | undefined {
  if (!line) {
    return;
  }

  // if there is multiple lines, we only care about the first one
  line = line.split("\n")[0].trim();

  // check if the first line is a comment line
  if (!isCommentLine(line)) {
    return undefined;
  }

  line = line.trim().replace(/^#\s*/, "");
  if (line === "") {
    return undefined;
  }

  let match = line.match(/^(.*?)(?:-([0-9.]+))?\.txt$/);
  if (match == null) {
    // If no .txt extension, try matching just the name
    match = line.match(/^(.*?)(?:-([0-9.]+))?$/);

    // If still no match, return undefined
    // This is a fallback, and should not happen in normal cases
    // but we want to be safe and not throw an error
    // But i can't find a input that would cause this to happen,
    // so we can't cover this case with a test

    /* v8 ignore next 3 */
    if (match == null) {
      return undefined;
    }
  }

  const [_, fileName, version] = match;

  // Don't return a version if the file name is empty or whitespace-only
  if (!fileName || fileName.trim() === "") {
    return undefined;
  }

  return {
    fileName,
    version,
  };
}
