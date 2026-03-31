import { expandMissingAnnotations } from "../coerce";
import type { FileParser } from "../types";

export const LINE_BREAK_PARSER: FileParser = {
  fileName: "LineBreak",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "range", type: "codepoint-or-range" },
    { name: "line_break_class", type: "string-trimmed" },
  ],
  postProcess(sections) {
    for (const section of sections) {
      expandMissingAnnotations(section, this.fields);
    }
  },
};
