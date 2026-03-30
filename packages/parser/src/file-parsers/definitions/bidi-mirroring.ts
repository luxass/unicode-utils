import type { FileParser } from "../types";
import { expandMissingAnnotations } from "../coerce";

export const BIDI_MIRRORING_PARSER: FileParser = {
  fileName: "BidiMirroring",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "codepoint", type: "codepoint" },
    { name: "mirroring_glyph", type: "codepoint" },
  ],
  postProcess(sections) {
    for (const section of sections) {
      expandMissingAnnotations(section, this.fields);
    }
  },
};
