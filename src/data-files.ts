export class RawDataFile {
  private readonly _rawContent: string | undefined;
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
    if (this._rawContent == null) {
      throw new Error("rawContent is not set");
    }

    return this._rawContent;
  }

  public get lines(): string[] {
    if (this._lines == null) {
      throw new Error("lines is not set");
    }

    return this._lines;
  }

  public get heading(): string | undefined {
    if (this._heading == null) {
      throw new Error("heading is not set");
    }

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
 * ```
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

      // break out of loop if line starts is a comment
      // and is followed by a lot of #
      if (line.match(/#\s*#+/) && !isCommentLine(nextLine)) {
        break;
      }

      // break out of loop if line starts is a comment
      // and is followed by a lot of =
      if (line.match(/#\s*=+/) && !isCommentLine(nextLine)) {
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

  // if there is multiple lines of like ##### or ===== in the heading, use the last and cut the rest of.

  return heading.trim() === "" ? undefined : heading.trim();
}

export function isCommentLine(line: string): boolean {
  return line.startsWith("# ") || line.trim() === "#";
}
