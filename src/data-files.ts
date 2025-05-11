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
  readonly rawContent: string = "";
  readonly lines: string[] = [];
  readonly heading: string | undefined = undefined;

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

    this.rawContent = content;
    this.lines = content.split("\n");
    this.heading = parseDataFileHeading(content);
    this.fileName = fileName ?? inferFileName(content);
    this.version = inferVersion(content);
    this.hasEOF = content.endsWith("# EOF");
  }
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

      const isHashBoundary = line.match(/#\s*#+/);
      const isEqualsBoundary = line.match(/#\s*=+/);

      if (isHashBoundary || isEqualsBoundary) {
        lastBoundaryLineIndex = i;
      }

      // If this is a boundary pattern followed by a non-comment line,
      // we might be at the end of the heading section
      if ((isHashBoundary || isEqualsBoundary) && nextLine && !isCommentLine(nextLine)) {
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
 * Determines if a line is a comment line.
 *
 * A comment line is either a line that starts with "# " or
 * a line that only contains "#" (possibly with whitespace).
 *
 * @param {string} line - The line to check
 * @returns {boolean} True if the line is a comment line, false otherwise
 */
export function isCommentLine(line: string): boolean {
  return line.startsWith("# ") || line.startsWith("#\t\t") || line.trim() === "#";
}

/**
 * Checks if a string line is empty after trimming whitespace.
 *
 * @param {string} line - The string to check for emptiness
 * @returns {boolean} A boolean indicating whether the trimmed line is empty
 */
export function isEmptyLine(line: string): boolean {
  return line.trim() === "";
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
