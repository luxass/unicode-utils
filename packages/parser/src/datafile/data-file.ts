import type { RootNode, SectionNode } from "./ast";
import { isSectionNode } from "./typeguards";

/**
 * An immutable, query-optimised view of a parsed UCD file.
 *
 * Created only via `rawDataFile.toDataFile()`, never directly.
 * Sections and their records are frozen — mutation throws at runtime.
 *
 * @example
 * ```ts
 * const raw = new RawDataFile(content);
 * const file = raw.toDataFile();
 * const section = file.findSection("Basic Latin");
 * console.log(file.recordCount);
 * ```
 */
export class DataFile {
  /** The file name (e.g. "Scripts") */
  readonly fileName: string | undefined;

  /** The Unicode version (e.g. "16.0.0") */
  readonly version: string | undefined;

  /** Whether the file ends with "# EOF" */
  readonly hasEOF: boolean;

  /** All sections in document order (frozen) */
  readonly sections: readonly SectionNode[];

     * @internal
  constructor(root: RootNode) {
    this.fileName = root.fileName;
    this.version = root.version;

    // Check for EOF node
    const lastChild = root.children[root.children.length - 1];
    this.hasEOF = lastChild?.type === "eof";

    // Extract and freeze sections
    const sections = root.children.filter(isSectionNode);
    for (const section of sections) {
      Object.freeze(section.children);
      Object.freeze(section.records);
      Object.freeze(section.missingAnnotations);
      Object.freeze(section);
    }
    this.sections = Object.freeze(sections);
  }

  /**
   * Find a section by exact name.
   * Returns undefined if not found.
   */
  findSection(name: string): SectionNode | undefined {
    return this.sections.find((s) => s.name === name);
  }

  /**
   * Find sections whose name contains a substring (case-sensitive).
   */
  findSectionsByName(substring: string): readonly SectionNode[] {
    return this.sections.filter((s) => s.name.includes(substring));
  }

  /**
   * Total number of records across all sections.
   */
  get recordCount(): number {
    return this.sections.reduce((sum, s) => sum + s.records.length, 0);
  }
}
