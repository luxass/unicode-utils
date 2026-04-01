import type { RootNode } from "../ast";
import type { InferredHeader } from "../header";
import { inferHeaderFromAst } from "../header";
import { isEOFMarker } from "../line-helpers";
import type { ParseAstOptions } from "../parser";
import { parseDataFileIntoAst } from "../parser";
import { DataFile } from "./data-file";

/**
 * A parsed UCD file that retains the raw content alongside the AST.
 *
 * Construct from a string or fetch from a URL. The constructor parses the
 * content into an AST, infers header metadata, and derives convenience
 * properties like `fileName`, `version`, and `hasEOF`.
 *
 * @example
 * ```ts
 * const raw = new RawDataFile(content);
 * console.log(raw.fileName);  // "Scripts"
 * console.log(raw.version);   // "16.0.0"
 * console.log(raw.hasEOF);    // true
 * console.log(raw.heading);   // "# Scripts-16.0.0.txt\n# Date: ..."
 *
 * const file = raw.toDataFile();
 * ```
 */
export class RawDataFile {
  readonly rawContent: string;
  readonly ast: RootNode;
  readonly header: InferredHeader;
  readonly fileName: string | undefined;
  readonly version: string | undefined;
  readonly hasEOF: boolean;
  readonly heading: string;
  readonly content: string;

  constructor(rawContent: string, options?: ParseAstOptions) {
    this.rawContent = rawContent;
    this.ast = parseDataFileIntoAst(rawContent, options);
    this.header = inferHeaderFromAst(this.ast);
    this.fileName = this.ast.fileName;
    this.version = this.ast.version;
    this.heading = this.header.text;

    const lines = rawContent.split(/\r?\n/);
    this.hasEOF = isEOFMarker(lines.at(-1)) || isEOFMarker(lines.at(-2));

    // content = rawContent with header lines stripped
    if (this.header.endLine > 0) {
      this.content = lines.slice(this.header.endLine + 1).join("\n");
    } else {
      this.content = rawContent;
    }
  }

  /**
   * Fetch a UCD file from a URL and parse it.
   *
   * @param {string | URL} url - The URL to fetch
   * @returns {Promise<RawDataFile>} A parsed RawDataFile
   */
  static async from(url: string | URL): Promise<RawDataFile> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data file from ${url}: ${response.status} ${response.statusText}`,
      );
    }
    const content = await response.text();
    return new RawDataFile(content);
  }

  /**
   * Convert to an immutable DataFile for read-only querying.
   *
   * @returns {DataFile} A frozen, queryable DataFile
   */
  toDataFile(): DataFile {
    return new DataFile(this.ast);
  }
}
