import type { FileParser } from "../types";
import { expandMissingAnnotations } from "../coerce";

export const EAST_ASIAN_WIDTH_PARSER: FileParser = {
  fileName: "EastAsianWidth",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "range", type: "codepoint-or-range" },
    { name: "width", type: "string-trimmed" },
  ],
  postProcess(sections) {
    for (const section of sections) {
      expandMissingAnnotations(section, this.fields);
    }
  },
};
