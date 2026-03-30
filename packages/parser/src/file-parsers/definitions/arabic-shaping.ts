import type { FileParser } from "../types";

export const ARABIC_SHAPING_PARSER: FileParser = {
  fileName: "ArabicShaping",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "codepoint", type: "codepoint" },
    { name: "name", type: "string-trimmed" },
    { name: "joining_type", type: "string-trimmed" },
    { name: "joining_group", type: "string-trimmed" },
  ],
};
