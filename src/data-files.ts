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
    this._heading = internal_parseHeading(content);
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

export function internal_parseHeading(content: string): string | undefined {
  if (!content) {
    return;
  }

  let heading: string = "";
  let isInHeading: boolean = false;

  const lines = content.split("\n");
  for (const line of lines) {
    // comments start with #
    if (isCommentLine(line)) {
      isInHeading = true;

      // add line to heading
      heading += `${line}\n`;

      // break out of loop if line starts is a comment
      // and is followed by a lot of #
      if (line.match(/#\s*#+/)) {
        break;
      }

      // break out of loop if line starts is a comment
      // and is followed by a lot of =
      if (line.match(/#\s*=+/)) {
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

  return heading.trim() === "" ? undefined : heading.trim();
}

/**
 * Extracts and concatenates comment lines from a data file content.
 *
 * This function takes a string representing the content of a data file,
 * filters out all lines except those that start with '#' (comment lines),
 * and joins them together with newline characters.
 *
 * @param {string} content - The content of the data file as a string
 * @returns {string} A string containing all comment lines concatenated with newline characters
 */
export function getDataFileComments(content: string): string {
  return content.split("\n").filter((line) => {
    const trimmed = line.trim();
    return trimmed && trimmed.startsWith("# ");
  }).join("\n");
}

export function isCommentLine(line: string): boolean {
  return line.startsWith("# ") || line.trim() === "#";
}
