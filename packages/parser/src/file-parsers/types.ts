import type { SectionNode } from "../datafile/ast";

export interface FileParser {
  fileName: string;
  separator: string;
  trimFields?: boolean;
  stripInlineComments?: boolean;
  /**
   * Optional post-grouping hook for files that need special handling
   * (e.g. missing annotation expansion).
   */
  postProcess?: (sections: SectionNode[]) => void;
}
