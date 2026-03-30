import type { FileParser } from "../types";

export const CASE_FOLDING_PARSER: FileParser = {
  fileName: "CaseFolding",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "codepoint", type: "codepoint" },
    { name: "status", type: "string-trimmed" },
    { name: "mapping", type: "multi-codepoint", delimiter: " " },
  ],
};
