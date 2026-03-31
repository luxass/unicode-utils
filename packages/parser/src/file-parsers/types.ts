import type { SectionNode } from "../datafile/ast";

export type FieldType
  = | "codepoint"
    | "codepoint-range"
    | "codepoint-or-range"
    | "string"
    | "string-trimmed"
    | "number"
    | "enum"
    | "optional-string"
    | "multi-codepoint";

export interface FieldDef {
  name: string;
  type: FieldType;
  enumValues?: string[];
  nullable?: boolean;
  optional?: boolean;
  isMultiValue?: boolean;
  delimiter?: string;
}

export interface FileParser {
  fileName: string;
  separator: string;
  trimFields?: boolean;
  stripInlineComments?: boolean;
  fields: FieldDef[];
  /**
   * Optional post-grouping hook for files that need special handling
   * (e.g. missing annotation expansion).
   */
  postProcess?: (sections: SectionNode[]) => void;
}
