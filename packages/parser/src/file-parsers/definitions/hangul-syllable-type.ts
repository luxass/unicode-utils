import type { FileParser } from "../types";
import { expandMissingAnnotations } from "../coerce";

export const HANGUL_SYLLABLE_TYPE_PARSER: FileParser = {
  fileName: "HangulSyllableType",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "range", type: "codepoint-or-range" },
    { name: "type", type: "string-trimmed" },
  ],
  postProcess(sections) {
    for (const section of sections) {
      expandMissingAnnotations(section, this.fields);
    }
  },
};
