import type { RootNode } from "./ast";
import type { UCDSectionWithLines } from "./sections";
import { inferHeadingFromAST } from "../inference/heading";
import { isEOFMarker } from "../line-helpers";
import { parseDataFileIntoAst } from "./parser";
import { parseSections } from "./sections";

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
  readonly heading: string | null = null;

  /**
   * The AST representation of the data file.
   * This is typically used for further processing or analysis of the file structure.
   * If the file is not parsed into an AST, this will be undefined.
   */
  readonly ast: RootNode | undefined = undefined;

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

    this.ast = parseDataFileIntoAst(content, fileName);

    this.rawContent = this.content = content;
    this.heading = inferHeadingFromAST(this.ast);

    if (this.heading != null) {
      this.content = content.replace(this.heading, "").trim();
    }

    this.lines = this.content.split("\n");
    this.fileName = fileName ?? this.ast.fileName;
    this.version = this.ast.version;
    this.hasEOF = isEOFMarker(this.lines.at(-1));
    this.sections = parseSections(this.content);
  }
}
