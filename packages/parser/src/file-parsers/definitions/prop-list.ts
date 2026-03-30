import type { FileParser } from "../types";

export const PROP_LIST_PARSER: FileParser = {
  fileName: "PropList",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "range", type: "codepoint-or-range" },
    { name: "property", type: "string-trimmed" },
  ],
};
