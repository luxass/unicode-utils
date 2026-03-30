import type { FileParser } from "../types";

export const NAMES_LIST_PARSER: FileParser = {
  fileName: "NamesList",
  separator: "\t",
  trimFields: true,
  stripInlineComments: false,
  fields: [
    { name: "codepoint", type: "codepoint" },
    { name: "name", type: "string-trimmed" },
  ],
};
