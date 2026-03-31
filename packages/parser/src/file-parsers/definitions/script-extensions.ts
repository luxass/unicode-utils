import { expandMissingAnnotations } from "../coerce";
import type { FileParser } from "../types";

export const SCRIPT_EXTENSIONS_PARSER: FileParser = {
  fileName: "ScriptExtensions",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "range", type: "codepoint-or-range" },
    { name: "scripts", type: "string-trimmed" },
  ],
  postProcess(sections) {
    for (const section of sections) {
      expandMissingAnnotations(section, this.fields);
    }
  },
};
