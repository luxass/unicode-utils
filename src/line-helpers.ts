const HASH_BOUNDARY_REGEX = /^\s*#\s*#{2,}\s*$/;
const EQUALS_BOUNDARY_REGEX = /^\s*#\s*={2,}\s*$/;
const DASH_BOUNDARY_REGEX = /^\s*#\s*-{2,}\s*$/;

/**
 * Determines if a line is an End-of-File (EOF) marker.
 *
 * In Unicode data files, the EOF marker is typically represented
 * as a line containing only "# EOF".
 *
 * @param {string} [line] - The line to check
 * @returns {boolean} True if the line is an EOF marker, false otherwise
 *
 * @example
 * ```ts
 * isEOFMarker("# EOF"); // true
 * isEOFMarker("Some text"); // false
 * isEOFMarker(); // false
 * ```
 */
export function isEOFMarker(line?: string): boolean {
  if (!line) return false;
  return line.trim() === "# EOF";
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
 * Determines if a line is any type of boundary line.
 *
 * A boundary line is any line that matches one of the boundary patterns:
 * hash boundary, equals boundary, or dash boundary. These patterns are used
 * in Unicode data files to separate different sections of content.
 *
 * @param {string} line - The line to check
 * @returns {boolean} True if the line is a boundary line, false otherwise
 *
 * @example
 * ```ts
 * isBoundaryLine("# #####"); // true (hash boundary)
 * isBoundaryLine("# ====="); // true (equals boundary)
 * isBoundaryLine("# -----"); // true (dash boundary)
 * isBoundaryLine("# Some text"); // false
 * isBoundaryLine(""); // false
 * ```
 */
export function isBoundaryLine(line: string): boolean {
  if (!line) {
    return false;
  }

  return isHashBoundary(line) || isEqualsBoundary(line) || isDashBoundary(line);
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

export type SpecialTag = "none" | "script" | "code-point";

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
  specialTag?: SpecialTag;
}

const MISSING_ANNOTATION_SPECIAL_TAGS: Record<string, SpecialTag> = {
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
  const specialTag: SpecialTag | undefined = MISSING_ANNOTATION_SPECIAL_TAGS[defaultProperty] ?? undefined;

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
  return parseFileNameLine(line)?.fileName;
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
  return parseFileNameLine(line)?.version;
}

export interface ParsedFileName {
  fileName: string;
  version: string;
}

/**
 * Parses a line from a Unicode data file to extract the file name and version information.
 *
 * This function tries to extract file name and version information from a line that
 * typically appears at the beginning of Unicode data files. It handles various formats:
 * - "FileName-1.2.3.txt"
 * - "FileName-1.2.3"
 * - "FileName.txt"
 *
 * The function also properly handles comment markers at the beginning of the line.
 *
 * @param {string} line - The line to parse, typically the first line of a Unicode data file
 * @returns {ParsedFileName | undefined} An object containing the file name and version if
 *                                      successfully parsed, or undefined if parsing fails
 *
 * @example
 * ```ts
 * parseFileNameLine("# UnicodeData-14.0.0.txt");
 * // Returns { fileName: "UnicodeData", version: "14.0.0" }
 *
 * parseFileNameLine("# ArabicShaping.txt");
 * // Returns { fileName: "ArabicShaping", version: undefined }
 * ```
 */
export function parseFileNameLine(line: string): ParsedFileName | undefined {
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
