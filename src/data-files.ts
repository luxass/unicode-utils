export class RawDataFile {
  private readonly _rawContent: string;
  private readonly _lines: string[];
  private readonly _heading: string | undefined;

  constructor(content: string) {
    if (content == null || content.trim() === "") {
      throw new Error("content is empty");
    }

    this._rawContent = content;
    this._lines = content.split("\n");
    this._heading = parseDataFileHeading(content);
  }

  public get rawContent(): string {
    return this._rawContent;
  }

  public get lines(): string[] {
    return this._lines;
  }

  public get heading(): string | undefined {
    return this._heading;
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
  return line.startsWith("# ") || line.trim() === "#";
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
