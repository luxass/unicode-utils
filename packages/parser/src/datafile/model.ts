import type { RootNode } from "./ast";
import type { StringifySectionsOptions } from "./stringify";
import { isEOFMarker } from "../line-helpers";
import { DataFile } from "./data-file";
import { parseDataFileIntoAst } from "./parser";
import { stringifyAst as stringifyAstImpl } from "./stringify";

/**
 * Holds the raw text and the parsed AST of a Unicode data file.
 *
 * Use `toDataFile()` to get an immutable query view with section accessors.
 * Use `stringify()` to serialise the AST back to UCD text.
 *
 * @example
 * ```ts
 * const raw = new RawDataFile(content);
 * console.log(raw.fileName);  // "Scripts"
 * console.log(raw.version);   // "16.0.0"
 *
 * const file = raw.toDataFile();
 * const section = file.findSection("Basic Latin");
 *
 * const output = raw.stringify();
 * ```
 */
export class RawDataFile {
  /** Parsed AST — includes SectionNodes in root.children */
  readonly ast: RootNode;

  /** Raw text exactly as received */
  readonly rawContent: string;

  /** Inferred file name (e.g. "Scripts") */
  readonly fileName: string | undefined;

  /** Inferred Unicode version (e.g. "16.0.0") */
  readonly version: string | undefined;

  /** Whether the file ends with a "# EOF" marker */
  readonly hasEOF: boolean;

  constructor(content: string, options?: { fileName?: string }) {
    if (content == null || content.trim() === "") {
      throw new Error("content is empty");
    }

    const fileName = options?.fileName;
    this.ast = parseDataFileIntoAst(content, { fileName });
    this.rawContent = content;
    this.fileName = fileName ?? this.ast.fileName;
    this.version = this.ast.version;

    const lines = content.split("\n");
    this.hasEOF = isEOFMarker(lines.at(-1));
  }

  /**
   * Fetch a UCD file from a URL and construct from its text content.
   *
   * @example
   * ```ts
   * const raw = await RawDataFile.from("https://unicode.org/Public/16.0.0/ucd/Scripts.txt");
   * const file = raw.toDataFile();
   * ```
   */
  static async from(
    url: string | URL,
    options?: {
      fileName?: string;
      /** Custom fetch implementation. Defaults to globalThis.fetch */
      fetch?: typeof globalThis.fetch;
    },
  ): Promise<RawDataFile> {
    const fetchFn = options?.fetch ?? globalThis.fetch;
    const response = await fetchFn(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
    }
    const content = await response.text();

    // Infer fileName from URL path if not provided
    let fileName = options?.fileName;
    if (!fileName) {
      const urlStr = typeof url === "string" ? url : url.toString();
      const lastSegment = urlStr.split("/").pop();
      if (lastSegment?.endsWith(".txt")) {
        fileName = lastSegment.replace(/\.txt$/, "");
      }
    }

    return new RawDataFile(content, { fileName });
  }

  /**
   * Produce an immutable DataFile from this RawDataFile.
   * The DataFile is a read-only query view — it cannot be mutated.
   */
  toDataFile(): DataFile {
    return new DataFile(this.ast);
  }

  /**
   * Stringify the AST back to UCD text.
   * Uses SectionNode data with fieldToString() fallback to rawValue.
   */
  stringify(options?: StringifySectionsOptions): string {
    return stringifyAstImpl(this.ast, options);
  }
}
