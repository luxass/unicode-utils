import { expandMissingAnnotations } from "../coerce";
import type { FileParser } from "../types";

export const DERIVED_AGE_PARSER: FileParser = {
  fileName: "DerivedAge",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "range", type: "codepoint-or-range" },
    { name: "version", type: "string-trimmed" },
  ],
  postProcess(sections) {
    for (const section of sections) {
      expandMissingAnnotations(section, this.fields);
    }
  },
};
